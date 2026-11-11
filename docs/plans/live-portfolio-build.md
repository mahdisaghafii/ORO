# Plan: from prototype to the live page on Mahdi's server

Written 11 Nov 2026, after the asset collection (`prototypes/live-portfolio/COLLECT_PLAN.md`) finished. The real recordings are on the page. This plan covers what the brief still asks for and the prototype doesn't do yet.

**Supervisable:** slices 1–4 are written for `/supervise docs/plans/live-portfolio-build.md`. Slices 5–7 need Mahdi and are outside the run: the run ends after slice 4.

## Read first
- `prototypes/live-portfolio/BRIEF.md`: the spec (constraints, success criteria, edge cases).
- `prototypes/live-portfolio/showcase.html`: the page. One file: CSS, HTML, then one script.
  - `MEDIA` lists the clip and poster for each screen.
  - `CH` lists the chapters.
  - `syncMedia` decides which clip plays; `openViewer` opens the full-screen replay.
- `prototypes/live-portfolio/assets/FINDINGS.md`: the facts, and the owner's decision that the copy stays as written.
- The **Definition of Done** in the repo's `CLAUDE.md`, and `prototypes/live-portfolio/tools/check.mjs` (the gate; its header lists every mode).
- Current preview: https://claude.ai/artifact/1kHaoX3ouEyRTEPS4q5AmU

## Where the page stands (gate run of 11 Nov)
| Gate mode | Result | Fixed by |
|---|---|---|
| `node check.mjs` (3D page) | 25 passed, 0 failed | (it's the baseline) |
| `--local-only` | fails: requests to `cdnjs.cloudflare.com`, `fonts.googleapis.com`, `fonts.gstatic.com` | slice 1 |
| `--no-webgl` | 11 passed, 13 failed: no clip plays, **chapters 1–5 show no text** (the script returns before it ever marks a chapter `.on`), and there's nothing to tap | slice 2 |
| `--budget` (Fast 3G) | passes: first paint 1600 ms, 167 KB before first paint | slice 3 keeps it passing |
| `dist/` build | doesn't exist | slice 4 |

Already done, no work needed:
- muted autoplay;
- `prefers-reduced-motion`;
- the "also built" strip, text only (the `also-*.png` screenshots were never collected; Mahdi said to leave them).

## Decisions already made (don't reopen)
- **Copy is fixed.** Don't change, add or remove Persian text, except for what slice 3 below names. If a slice seems to need new words, stop and ask (a `question` to the supervisor, which goes to Mahdi).
- **Labels stay.** Every recording keeps its «بازپخش از محصول واقعی …» label, in the 3D page and the fallback alike.
- **No money on screen,** no new footage. The run uses only the files already in `assets/`.
- **Same versions.** three.js stays at r128; don't upgrade it.
- **No new runtime dependencies.** The build script is Python standard library only. Playwright is a dev dependency of `tools/` only.

## Open decisions (they don't block slices 1–4)
- **The page's address** (domain and path). `og:image` and `og:url` need an absolute URL. Slice 4's `build.py` takes `--base-url`. Without it, the build leaves those two tags out and prints a warning.
- **The promo Reel questions** (slice 6).

## Rules for every slice
1. **The gate only grows.** When a slice lands, its new mode goes into the `gate` script in `tools/package.json`, and every earlier mode must still pass.
2. **No baseline rewrites to pass.** Never rewrite `tools/baseline/layout.json` to make a failing run pass. If a slice intends a layout change, it says so in its report.
3. **Clip size.** Each clip stays under 2 MB.
4. **No server work.** Don't touch any server, and don't push.

## Slices

### Slice 1: self-contained page
**Goal:** the page loads nothing from outside its own folder.
- **three.js:** download r128 `three.min.js` from the official three.js GitHub repository (tag `r128`, `build/three.min.js`) to `prototypes/live-portfolio/vendor/three.min.js`. Load it from there with `defer`, and make the page's script wait for it: wrap the IIFE in a `DOMContentLoaded` handler, or make it a deferred script too.
- **Vazirmatn:**
  - Download the WOFF2 files for the weights the CSS uses (300, 400, 500, 700, 800, 900) from the official Vazirmatn GitHub release (`rastikerdar/vazirmatn`, OFL) into `vendor/fonts/`.
  - Replace the Google Fonts `<link>` and preconnects with local `@font-face` rules (`font-display: swap`), and preload the 400 and 900 weights.
  - Leave the `font-family` name `Vazirmatn` unchanged: the gate checks for it.
- **Licences:** write `vendor/README.md` listing each file, its source URL, version and licence. Put the OFL licence text next to the fonts.
- **Done when:**
  - `node check.mjs --local-only` passes, with every request on the local server.
  - `node check.mjs` still gives 25 passed, with the layout baseline unchanged.
  - `gate` = `node check.mjs --local-only`.

### Slice 2: fallback when 3D can't run
**Goal:** with WebGL off, or on a phone too weak for it, the visitor still sees every chapter's text and recording.
- **Text first:** fix the no-WebGL text bug. Mark chapters `.on` from an `IntersectionObserver` that runs whether or not three.js starts, so the text shows in both modes.
- **Flat version:** when the renderer fails, give each chapter that has a clip a plain rounded phone frame inside its section, built from the same `MEDIA` table (no second list of clips).
  - Each frame shows the chapter's poster first and its clip in a `<video muted playsinline loop>`.
  - Keep the same rules as the 3D page: load when the chapter is near; only the chapter on screen plays.
  - Keep the same label.
  - The landscape Chain of Legends clip shows landscape (no rotation needed in a flat frame).
  - Mark each frame `data-replay`; a tap opens the existing full-screen viewer through `openViewer`.
- **Weak phones:** also take the flat path when the phone is weak:
  - `navigator.deviceMemory <= 2` together with `navigator.hardwareConcurrency <= 4`, or
  - the first 90 rendered frames average under 24 fps.

  Switch without moving the scroll position.
- **Testing hooks:**
  - Add a `?mode=flat` URL switch that forces the flat path.
  - Log the chosen path once with `console.info('[lp] mode:', ...)`.
  - Headless Chromium renders WebGL in software and can be slow, so the gate's 3D run must stay 3D. Make sure the fps rule can't fire in the first 2 s after load, and check the 3D run still reports `3D: canvas in use`.
- **Done when:**
  - `node check.mjs --no-webgl` passes every check: text visible, each clip plays and only its own, tap opens the viewer, ✕ closes it, no errors.
  - `node check.mjs --page "showcase.html?mode=flat"` passes the same chapter, tap and text checks. Teach `check.mjs` to expect the flat path when the URL has `mode=flat`.
  - Earlier modes still pass.
  - `gate` = `node check.mjs --local-only && node check.mjs --no-webgl --local-only`.

### Slice 3: slow connections and link previews
**Goal:** the first screen stays fast, and a shared link looks right in Telegram and Instagram DMs.
- **Speed:**
  - Give every poster a WebP version at most 60% of the JPG's size, served with a JPG fallback. Posters are drawn into a canvas in 3D, so pick the format with a quick `Image` decode test.
  - Inline nothing larger than 14 KB.
  - Keep three.js out of the first paint.
  - Give every off-screen clip `preload="none"` until its chapter is near.
- **Link-preview tags** in `<head>`:
  - `og:title` = the text of the intro `<h1>`;
  - `og:description` = the intro `.lede`;
  - `og:image` = a 1200×630 JPG made from the intro screen, saved as `assets/og.jpg` (render it with the gate's browser, not by hand);
  - `og:type` = `website`, and `twitter:card` = `summary_large_image`.

  These reuse approved text word for word, so the copy rule holds.
- **Done when:**
  - `node check.mjs --budget --local-only` passes: first paint ≤ 3000 ms on Fast 3G, ≤ 400 KB before first paint.
  - The measured numbers are written into the **Measurements** section below.
  - All earlier modes still pass.
  - `gate` = earlier modes plus `--budget` on the first run.

### Slice 4: release build and hand-over notes
**Goal:** one folder Mahdi uploads as-is, and instructions for his server.
- **`prototypes/live-portfolio/build.py`** (standard library only):
  - copies `showcase.html` to `dist/index.html` with the `.proto` badge removed;
  - copies `vendor/` and only the files under `assets/` that the HTML references (`og.jpg` included);
  - takes `--base-url` and makes `og:image`/`og:url` absolute with it (without it, drops them and warns);
  - fails if the output HTML contains an `http(s)://` URL anywhere except `og:`/`twitter:` meta tags and plain `<a href>` links;
  - prints the file count and total size.
- Add `dist/` to `prototypes/live-portfolio/.gitignore`.
- **Gate:** add `npm run gate:dist` = `python ../build.py && node check.mjs --root ../dist --page index.html --local-only --no-webgl && node check.mjs --root ../dist --page index.html --local-only --budget`, and append it to `gate`. The 3D baseline must match on `dist/` too: removing the badge must not move text.
- **`prototypes/live-portfolio/DEPLOY.md`** for Mahdi, short and in plain words:
  - Upload `dist/` as one folder.
  - The server must:
    - serve `.mp4` as `video/mp4`;
    - allow byte-range requests (iPhones won't play video without them);
    - compress HTML and JS (gzip or brotli);
    - cache `assets/` and `vendor/` for a long time and `index.html` for a short time.
  - An nginx example block.
  - How to check from inside Iran with the VPN off: the page loads, and `curl -I -H "Range: bytes=0-1" <clip URL>` returns `206`.
  - Slice 5's phone checklist, as a list Mahdi ticks.
- Add `DEPLOY.md` and this plan to the README's **Contents**.
- **Done when:**
  - `npm run gate` (now including `gate:dist`) passes every mode.
  - `dist/` contains no file the page doesn't reference.
  - The run's final report gives Mahdi the upload instructions.

### Slice 5: real-phone test (Mahdi, ~10 minutes; outside the run)
- Upload `dist/` and open the link from the `@oro_platform` bio in Instagram on a mid-range Android, with mobile data and the VPN off. Then on an iPhone, if he can borrow one.
- Tick the checklist in `DEPLOY.md` and send screenshots or a screen recording.
- An agent fixes whatever fails; Mahdi re-tests.

### Slice 6: promo Reel (outside the run; needs Mahdi's answers)
- **Questions:**
  1. Length: 15, 30 or 45 s?
  2. Sound: music, his own voiceover, or silent with captions? (The page clips have no audio. The CoL teaser's soundtrack can be reused only if its music rights allow it.)
  3. Captions: the page's own lines word for word, or new short lines he approves?
  4. End card: the page link, `@oro_platform`, or both?
- **Method:**
  - Record the real page headless as a 1080×1920 phone with a scripted scroll, so each chapter holds long enough to read.
  - Capture frames with the CDP screencast.
  - Cut and caption with ffmpeg; export H.264 1080×1920 30 fps plus a cover frame.
  - Mahdi approves a draft before the final cut.

### Slice 7: five-viewer test and sign-off (Mahdi; outside the run)
- Send the link to five people outside the team without explaining it.
- Note who says some version of "wow" or forwards it unasked, and whether after ~60 s they can say what Mahdi built.
- Read every claim on the live page one last time, then pin it or put it in the bio.

## Measurements

Slice 3, 11 Nov 2026. Headless Chromium as a phone, "Fast 3G" (150 ms RTT, 1.6 Mbps down), the gate's local server (**no compression**, so the byte counts are what a server without gzip would send). `node check.mjs --budget --local-only`.

| What | Limit | Measured |
|---|---|---|
| First paint, 3D page | 3000 ms | 952 to 1288 ms across runs (1060 ms in the last run) |
| First paint, flat path (`--no-webgl --budget`) | 3000 ms | 984 to 1084 ms |
| Bytes finished before first paint | 400 KB | 56 to 156 KB across runs (the HTML is 56 KB; the two preloaded fonts, 100 KB, sometimes land just before the paint) |
| `three.js` (603 KB) requested | after first paint | at the page's `load` event (about 2.8 s in) against a first paint near 1 s, and it finishes about 5.7 s in. The check tests the request time, and was shown to fail when the old `<script defer>` is put back (requested at 631 ms, first paint at 936 ms). It is never fetched on `?mode=flat`, on a weak phone, or when a throwaway canvas finds no WebGL; `--no-webgl --budget` and `?mode=flat --budget` check that |
| Page script starts (DOMContentLoaded) | n/a | 0.88 s; it was 6.3 s before this slice, because the deferred three.js held it back |
| Clips loading at the top of the page | only the first chapter and the next | `oro-profile.mp4` and `col-01-teaser.mp4`; the Qeleq and Chid clips stay unrequested |
| Largest inlined item | 14 KB | none: no `data:` URI over 14 KB in the HTML (the only one is the 1x1 WebP probe, 60 bytes) |

Posters (WebP from `tools/make-assets.mjs`; the JPG is the fallback):

| Poster | JPG | WebP | Ratio |
|---|---|---|---|
| `oro-profile-poster` | 206,647 B | 122,122 B | 59% |
| `chid-01-design-poster` | 133,549 B | 78,232 B | 59% |
| `qeleq-01-signal-poster` | 88,157 B | 52,268 B | 59% |
| `col-01-teaser-poster` | 25,107 B | 13,770 B | 55% |

In Chromium both paths request only the WebP posters. The fallback was checked once by making the WebP probe fail: both paths then asked for the JPGs. `assets/og.jpg` is 1200x630, 68,507 B.

Notes:
- "Inline nothing larger than 14 KB" was read as: no inlined binary (`data:` URI) over 14 KB. The ~40 KB inline `<script>` stays inline (supervisor decision: first paint is about 1 s against a 3 s limit, and `build.py` copies a single HTML file); the `<style>` is 9.8 KB.
- The Vazirmatn fonts stay as the full static WOFF2 files (about 51 KB each, two preloaded): the budget is met with room to spare, so nothing was subset.
- On this throttled, uncompressed run the 3D phone appears at about 9 s: it waits for three.js (done at about 6 to 7 s), then for its poster. Text and the first paint don't wait. A server that gzips will cut the three.js wait; that is for slice 5's phone test to confirm, not measured here.

## Run log

- Slice 1 — self-contained page: dc5d5e6 · gate 26 passed / 0 failed (--local-only), plain 3D 25/0 · review clean (1 round, 1 nit fixed) · decisions: gate = `node check.mjs --local-only` alone, since it already runs every 3D check; Vazirmatn v33.003 full static WOFF2 (not subset) — revisit in slice 3 if the budget is tight
- Slice 2 — fallback when 3D can't run: 13543ab · gate 27/0 (--local-only) + 27/0 (--no-webgl --local-only); plain 3D 26/0; ?mode=flat 26/0 · review clean (1 round, 2 nits fixed, 1 declined) · decisions: fps rule also skipped under navigator.webdriver (headless software WebGL runs ~5 fps, so the 2 s guard alone flipped the gate's 3D run to flat; real browsers unaffected) — the slow-phone switch is therefore verified by a one-off probe, not the gate; flat frames on chapters 0/4/5 (ORO profile) carry no «بازپخش» label, matching 3D; added one gate check (the logged path matches the expected path)
- Slice 3 — slow connections and link previews: 6e0438e · gate 27/0 + 27/0 + 35/0 (--budget); plain 3D 26/0; ?mode=flat 26/0 · first paint ~1.0 s, 57 KB before it (Fast 3G) · review fix → clean (2 rounds: 1 high — the three.js-out-of-first-paint check could never fail, now tests request time and was proven by mutation — plus 3 nits fixed) · decisions: og:title/og:description keep the existing owner-approved preview texts instead of the h1/lede (they already existed; only og:image/og:type/twitter:card added); the ~40 KB inline script stays inline (14 KB rule read as binary/data: inlining); three.js is injected after load and skipped entirely on ?mode=flat, weak phones and no-WebGL (cheap probe); WebP posters ≤60% with a ≥36 dB quality floor; only the 4 posters the page uses get WebPs
