#!/usr/bin/env python3
"""Build the release folder: dist/ is what gets uploaded to the server, as one folder.

    python3 build.py                                   -> dist/ (no og:image / og:url: warns)
    python3 build.py --base-url https://example.com/p/ -> dist/ with absolute og:image and og:url
    python3 build.py --out some/other/folder           -> the same, into another folder (the gate builds into tools/out/dist)

What it does:
  * writes showcase.html as dist/index.html, without the PROTOTYPE badge (it is position:fixed, so the layout doesn't move);
  * copies vendor/ whole (three.js, fonts, licences), and only the files under assets/ that the page names
    (found by reading the HTML, not from a list), failing loudly if one is missing;
  * with --base-url, makes og:image and og:url absolute (link-preview crawlers need full URLs); without it, drops both and warns;
  * fails if the output HTML holds an http(s):// URL anywhere except og:/twitter: meta tags and plain <a href> links
    (the page must load nothing from outside its own folder), or a protocol-relative (//host/...) load in a src, href, srcset,
    poster, action or data attribute, a url() or an @import (plain <a href> links are the only exemption);
  * prints how many files and how many bytes dist/ holds.

Python standard library only.
"""
import argparse
import html as htmllib
import re
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SOURCE = HERE / "showcase.html"
OUT = HERE / "dist"

BADGE_DIV = re.compile(r'[ \t]*<div class="proto">[^<]*</div>\n?')
BADGE_CSS = re.compile(r'^\.proto \{[^\n]*\}\n', re.M)
OG_IMAGE = re.compile(r'<meta property="og:image" content="([^"]*)">(?:<!--.*?-->)?\n?', re.S)
OG_TYPE = re.compile(r'(<meta property="og:type" content="[^"]*">\n?)')
# a path under assets/ or vendor/ as the page writes it (a trailing dot is sentence punctuation in a comment, not part of the name)
REF = re.compile(r'\b((?:assets|vendor)/[A-Za-z0-9_./-]*[A-Za-z0-9_-])')
URL = re.compile(r'https?://', re.I)
LINK_META = re.compile(r'<meta\s+(?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*>')
LINK_A = re.compile(r'<a\b[^>]*\bhref="(?:https?:)?//[^"]*"[^>]*>')
# protocol-relative loads ("//host/x") are outside URLs too; JS "//" comments are not matched
PROTO_REL = [re.compile(r'\b(?:src|href|srcset|poster|action|data(?:-[\w-]+)?)\s*=\s*["\']?//', re.I),
             re.compile(r'url\(\s*["\']?//', re.I), re.compile(r'@import\s+["\']//', re.I)]
BASE_URL = re.compile(r'https?://[^/\s"\'<>?#\\]+(?:/[^\s"\'<>?#\\]*)?')


def fail(msg):
    print(f"build.py: FAILED: {msg}", file=sys.stderr)
    sys.exit(1)


def must_sub(pattern, repl, text, what):
    out, n = pattern.subn(repl, text, count=1)
    if n != 1:
        fail(f"could not find {what} in {SOURCE.name}")
    return out


def check_no_outside_urls(html):
    """Only og:/twitter: meta tags and <a href> links may carry an http(s) URL."""
    rest = LINK_A.sub("", LINK_META.sub("", html))
    for rx in PROTO_REL:
        m = rx.search(rest)
        if m:
            fail("the output HTML loads something from a protocol-relative URL (//host/...): " + rest[m.start():m.start() + 60].split("\n")[0])
    hits = sorted({re.split(r"[\s\"'<>)]", rest[m.start():m.start() + 80])[0] for m in URL.finditer(rest)})
    if hits:
        fail("the output HTML names URLs outside og:/twitter: tags and <a href> links, so the page would load something "
             "from outside its own folder: " + "; ".join(hits[:5]))


def main():
    ap = argparse.ArgumentParser(description="Build dist/, the folder to upload.")
    ap.add_argument("--out", default=str(OUT), help="folder to build into (default: dist/ next to this script; a relative path is resolved from the current folder). It is emptied first, but only if it is empty or looks like one of our builds.")
    ap.add_argument("--base-url", help="where the page will live, e.g. https://example.com/portfolio/ (makes og:image and og:url absolute)")
    args = ap.parse_args()

    base = None
    if args.base_url:
        if not BASE_URL.fullmatch(args.base_url):
            fail(f"--base-url must be an http:// or https:// address with no spaces, quotes, ? or # (got {args.base_url!r})")
        base = args.base_url if args.base_url.endswith("/") else args.base_url + "/"
    out = Path(args.out).resolve()
    if out == HERE or out in HERE.parents or out == HERE / "assets" or out == HERE / "vendor" or HERE / "assets" in out.parents or HERE / "vendor" in out.parents:
        fail(f"--out {out} would overwrite the page's own files")
    if out.exists() and (not out.is_dir() or {p.name for p in out.iterdir()} - {"index.html", "assets", "vendor"}):
        fail(f"--out {out} exists and holds something other than index.html, assets/ and vendor/, so it does not look like one of our builds; "
             "refusing to empty it. Pick another folder, or empty this one yourself.")

    html = SOURCE.read_text(encoding="utf-8")
    html = must_sub(BADGE_DIV, "", html, 'the <div class="proto"> badge')
    html = BADGE_CSS.sub("", html)  # its style rule goes too; harmless if it was already gone

    # Which assets does the page name? Read before the og:image tag is made absolute, so the base URL's own text can't confuse the scan.
    if base:
        refs_html = html
        safe = htmllib.escape(base, quote=True)
        html = must_sub(OG_IMAGE, lambda m: f'<meta property="og:image" content="{safe}{m.group(1)}">\n', html, "the og:image tag")
        html = must_sub(OG_TYPE, lambda m: m.group(1).rstrip("\n") + f'\n<meta property="og:url" content="{safe}">\n', html, "the og:type tag")
    else:
        html = must_sub(OG_IMAGE, "", html, "the og:image tag")
        refs_html = html
        print("build.py: WARNING: no --base-url, so og:image and og:url are left out and a shared link will have no preview picture. "
              "Rebuild with --base-url https://<your address>/ once the address is known.", file=sys.stderr)

    check_no_outside_urls(html)

    refs = sorted(set(REF.findall(refs_html)))
    assets = [r for r in refs if r.startswith("assets/")]
    vendor_refs = [r for r in refs if r.startswith("vendor/")]
    missing = [r for r in assets + vendor_refs if not (HERE / r).is_file()]
    if missing:
        fail("the page names files that do not exist: " + ", ".join(missing))

    if out.exists():
        shutil.rmtree(out)
    out.mkdir(parents=True)
    (out / "index.html").write_text(html, encoding="utf-8")
    shutil.copytree(HERE / "vendor", out / "vendor")
    for r in assets:
        (out / r).parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(HERE / r, out / r)

    files = [p for p in out.rglob("*") if p.is_file()]
    total = sum(p.stat().st_size for p in files)
    print(f"build.py: {out.name}/ built in {out}: {len(files)} files, {total:,} bytes ({total / 1024 / 1024:.1f} MB); "
          f"{len(assets)} assets, vendor/ whole" + (f"; base URL {base}" if base else "; no base URL"))


if __name__ == "__main__":
    main()
