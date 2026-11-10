# Plan: from prototype to the live page on Mahdi's server

Written 11 Nov 2026, after `COLLECT_PLAN.md` was finished. The real recordings are on the page. This plan covers what [`BRIEF.md`](BRIEF.md) still asks for and the prototype doesn't do yet.

**Inputs:**
- [`BRIEF.md`](BRIEF.md): the spec (constraints, success criteria, edge cases).
- [`showcase.html`](showcase.html): the working prototype.
- [`assets/FINDINGS.md`](assets/FINDINGS.md): what's true, what's missing, and the owner's decisions on the copy.
- Current preview: https://claude.ai/artifact/1kHaoX3ouEyRTEPS4q5AmU

**Output:**
- A `dist/` folder that Mahdi uploads to his server as-is. It loads nothing from outside that folder.
- A promo Reel cut from the same chapters (slice 6).

## Where the prototype stands (checked 11 Nov)
| Brief asks for | Prototype today |
|---|---|
| No foreign CDNs or fonts at runtime | ✗ three.js r128 from cdnjs, Vazirmatn from Google Fonts |
| WebGL off → video version of the chapters | ✗ the 3D canvas is removed and the recordings never show |
| Usable within ~3 s on a slow connection | ? not measured; clips lazy-load, posters are JPGs |
| Runs smoothly on a mid-range Android in Instagram | ? only tested in headless Chromium at 390×844 |
| Sound off by default, sound on tap | ✓ muted; the clips have no audio track, so there is nothing to turn on (see slice 6) |
| `prefers-reduced-motion` | ✓ handled in CSS and JS |
| "Also built" strip | ✓ text only (the `also-*.png` screenshots were never collected; Mahdi said to leave them) |
| Promo Reel | ✗ not started |

## Rules for every slice
1. **Don't change the copy.** The Persian text is approved as written (FINDINGS, "Owner's decision"). A slice that needs new words asks Mahdi first.
2. **Never break the 3D page to fix the fallback.** Re-run the headless check (`rec/showcheck.js` pattern: 390×844, DPR 3, touch) after every slice. It must show no console errors, and each chapter must render its clip.
3. **Weight budget:**
   - First screen under 400 KB (HTML + font subset + first poster). three.js may load after first paint.
   - Each clip stays under 2 MB.
4. **Only files the page references go into `dist/`.** Masters and unused stills stay out.
5. **Commit each slice on its own** on `claude/practical-hamilton-vicsl6`. Don't push; Mahdi pushes.

## Slices

### Slice 1: make it self-contained (agent)
- Put the libraries in `vendor/` (committed):
  - `vendor/three.min.js` (r128, the same version the page uses now),
  - `vendor/fonts/vazirmatn-*.woff2` (Vazirmatn is OFL). Take only the weights the CSS uses (300, 400, 500, 700, 800, 900), and drop any that render the same as a neighbour.
- Download both once from the official releases, record the source URL and version in `vendor/README.md`, and point the page at the local files.
- Replace the Google Fonts `<link>` with local `@font-face` rules using `font-display: swap`, and preload the regular weight.
- Load three.js with `defer` so the poster and headline paint first.
- **Done when:** a headless run that logs every request shows **zero requests to any host but the local server**, and the page looks the same as before at 390×844.

### Slice 2: fallback when 3D can't run (agent)
- When WebGL fails, show a flat version of the same chapters:
  - each chapter's clip in a plain rounded phone frame inside its section,
  - poster first, the same lazy-load and "only the visible clip plays" rule, and the same labels («بازپخش از محصول واقعی …»),
  - tap to open the existing full-screen viewer.
- Use the same `MEDIA` table so the clips are listed once.
- Also take this path when the device looks too weak:
  - `navigator.hardwareConcurrency <= 4` together with `deviceMemory <= 2`, or
  - the first ~60 frames average under 30 fps.
  - Log which path was chosen, for the device test in slice 4.
- **Done when:**
  - Headless Chromium with WebGL disabled (`--disable-webgl --disable-gpu`) shows every chapter's clip, with no errors.
  - The normal run still uses 3D.
  - A forced low-fps run switches to the flat version without a jump in scroll position.

### Slice 3: fast on a slow connection (agent)
- Measure with CDP network throttling (Slow 4G and Fast 3G profiles):
  - time to first visible headline,
  - time to the first poster,
  - total bytes before the first scroll.
  - Write the numbers into this file under "Measurements".
- Fix whatever misses the brief's ~3 s:
  - smaller posters (WebP alongside JPG),
  - inline the critical CSS,
  - delay `#amb` and three.js until after first paint,
  - add `preload="none"` on every clip that isn't on screen.
- Remove the `PROTOTYPE · real recordings` badge from the release build only. Keep it in `showcase.html`.
- Add link-preview tags (`og:title`, `og:description`, `og:image` from a poster) so the link looks right when shared in Telegram and Instagram DMs. Use the page's existing headline and intro line as the text; ask Mahdi if neither fits.
- **Done when:** Fast 3G shows the headline in ≤ 3 s, and the numbers are recorded.

### Slice 4: build and hand over (agent, then Mahdi)
- Write `build.py` (Python standard library only). It does four things:
  1. copies `showcase.html` to `dist/index.html` without the prototype badge,
  2. copies `vendor/` and only the asset files the page references,
  3. fails if the HTML still contains any `http(s)://` URL outside `og:` tags and plain links,
  4. prints the total size.
- Add `dist/` to `.gitignore`.
- Write `DEPLOY.md` for Mahdi:
  - the upload is one folder;
  - server settings: `video/mp4` MIME type, byte-range requests on (iOS won't play video without them), gzip or brotli for HTML/JS, long cache for `assets/` and `vendor/`, short cache for `index.html`;
  - an nginx example block;
  - how to check from inside Iran without a VPN.
- **Mahdi:** pick the address (domain/path), upload `dist/`, and send the link.

### Slice 5: real-phone test (Mahdi, about 10 minutes)
- Open the link from the `@oro_platform` bio in Instagram on a mid-range Android, then on an iPhone if he can borrow one. Use mobile data with the VPN off.
- Checklist (a short form in `DEPLOY.md`; Mahdi ticks it and sends screenshots or a screen recording):
  - first screen in ~3 s;
  - scrolling smooth, not jerky;
  - every clip plays when its chapter is on screen;
  - tapping the phone opens full screen and ✕ closes it;
  - no text cut off or overlapping;
  - the Persian font is used (not a system fallback);
  - landscape Chain of Legends reads correctly.
- The agent fixes what fails, re-runs slices 1–3's checks, and Mahdi re-tests.

### Slice 6: promo Reel (needs Mahdi's answers first)
- **Questions for Mahdi before anything is cut:**
  1. Length: 15, 30 or 45 s?
  2. Sound: music only, his own voiceover, or silent with captions? (The page clips have no audio. The CoL teaser has its own soundtrack, but it can't be reused unless the music rights allow it.)
  3. Captions: reuse the page's chapter lines word for word, or new short lines he approves?
  4. End card: the page link, `@oro_platform`, or both?
- **Method (agent):**
  - Record the real page headless at 1080×1920 (390×693 at DPR ≈ 2.77), driving the scroll with a script so every chapter holds long enough to read.
  - Capture the frames with CDP screencast, as in `rec/record.js`.
  - Cut and caption with ffmpeg.
  - Export H.264 1080×1920 30 fps for Instagram, plus a poster frame for the cover.
- **Done when:** Mahdi approves a draft. Only the final cut is committed; masters stay in `assets/master/`.

### Slice 7: five-viewer test and sign-off (Mahdi)
- Send the link to five people outside the team without explaining it.
- Note who says some version of "wow" or forwards it unasked, and whether after ~60 s they can say what Mahdi built (the brief's success criteria).
- Mahdi reads every claim on the live page one last time.
- Then: pin it or put it in the bio.

## Measurements
_(filled in by slice 3)_

## Kickoff prompt for the build session
> Read `prototypes/live-portfolio/BUILD_PLAN.md` and run slices 1–4 one at a time, committing each. Don't change any Persian copy. Stop after slice 4 and tell me what to upload. Don't start slice 6 until I've answered its questions.
