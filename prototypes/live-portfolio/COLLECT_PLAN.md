# Plan: collect the real assets for the live portfolio

Written 11 Nov 2026. Run this on Mahdi's PC. Mahdi has little time, so agents do the collecting; Mahdi only signs in, answers the questions at the end, and approves.

**Inputs:** [`BRIEF.md`](BRIEF.md) (what the page is), [`assets/README.md`](assets/README.md) (the shot list, file names and recording specs), [`showcase.html`](showcase.html) (the page, final Persian copy already in). Current preview: https://claude.ai/artifact/1kHaoX3ouEyRTEPS4q5AmU

**Output:** files in `prototypes/live-portfolio/assets/` named as the shot list says, plus `assets/FINDINGS.md` (facts found, with the file or URL each came from, and the open questions for Mahdi).

## Hard rules for every agent
1. **Never type a password, code or token.** Mahdi signs in himself in Chrome before a slice starts; the agent works in that signed-in browser (Claude in Chrome) and stops if it hits a login screen.
2. **Test or demo accounts only.** Use stage/demo environments (`demo.chidstudio.ir`, `demo.qeleq.ir`) or Mahdi's own test projects. If a screen shows a real customer's name, phone, photo, balance, order ID or chat, don't save it; note it in FINDINGS.md instead.
3. **No money on screen.** No balances, P&L, profit, prices of tokens. Crop or skip.
4. **Read-only on production.** No purchases, no form submissions on prod, no messages sent, no settings changed. Creating a design in a *test* project on stage is fine.
5. **Repos are read-only.** Read code and docs for facts and logos; don't commit to them.
6. **Record every fact with its source** (file path + line, or URL) in FINDINGS.md. If a fact can't be confirmed, say so; never guess.

## How to record without a phone
- Web apps: Playwright (or Claude in Chrome) at a phone viewport of 390×844, device scale 3, recording video. 15–25 s per clip, one clear action, start and end on a calm screen. Export as MP4 (H.264); also save 1–2 PNG stills of the best frame.
- If a product only works as a native app, list it in FINDINGS.md for Mahdi to record on his phone (2 minutes each).

## Slices

### Slice 1: facts from the repos (no login needed)
Product repos on the laptop (check the same names on the PC): `QeleQ`, `qeleq-research-lab`, `Matrix Game`, `Chidar AI`, `ORO-Accountant`.
- Qeleq: the exact name and Persian spelling of the broker in the first copy-trade integration (the résumé says "Mazende", files say `mazane24`, the copy says "Mazene"), and any evidence for "first in Iran".
- Chid: confirm the human review covers paying customers only (see `docs/architecture/Backend_Architecture.md` and `docs/plans/ops-review-buttons.md`), so Mahdi can decide on «بازبینی انسانی هر طرح».
- Logos: find `qeleq-logo`, `chid-logo`, Matrix and ORO-Accountant logos (SVG preferred) in the repos' public/static folders; copy them into `assets/`.
- Anything else in the shot list that already exists as a file (backtest report, n8n flow export, bot screenshots).

### Slice 2: Chid (Mahdi signs in on `demo.chidstudio.ir` first)
- `chid-01-design.mp4`: in a test project, upload a photo of a room (use a photo Mahdi provides or one already in the test project), add the note and picks, show the AI designs appearing.
- `chid-02-edit.mp4`: edit a design, then lock it.
- `chid-04-review.png`: the admin review screen with customer details hidden (a test item only).
- `chid-03-before/after.jpg`: only from Mahdi's own room or a test project; never a customer's.

### Slice 3: Qeleq (Mahdi signs in on `demo.qeleq.ir` first)
- `qeleq-01-signal.mp4`: a signal arriving with stop loss and take profit.
- `qeleq-02-copy.mp4`: a copy-trade going through (status / reconciliation).
- `qeleq-03-risk.png`, `qeleq-04-backtest.png`.
- Hide or skip any balance or P&L.

### Slice 4: smaller projects
One phone-size screenshot each (`also-*.png`): Matrix, Eima (from old files or repos if the product is down), the AI image bot, the n8n flow, Shaparo (old screenshot if one exists), ORO-Accountant today.

### Slice 5: Chain of Legends (needs Mahdi's go-ahead first)
It's a former employer's product: ask Mahdi whether he may publish footage before collecting anything. If yes: Arena Battle, Treasure Island and a tournament screen from the public site or an account Mahdi signs into; the audit cover and press logos only if allowed.

### Slice 6: hand back
- Compress every video for slow connections (target under 2 MB per clip, 720 px wide, no audio track) and make a poster still for each.
- Write `assets/FINDINGS.md`: what was collected, what's missing and why, every fact with its source, and **one short list of questions only Mahdi can answer**: publishing rights per product, the broker name if still unclear, the human-review wording, a real Chid usage number (from Metabase, which Mahdi must open), and his photo or the decision to stay faceless.
- Tick the boxes in `assets/README.md`. Commit the assets and FINDINGS.md on this branch. Don't push.

## Kickoff prompt for the PC session
> Read `prototypes/live-portfolio/COLLECT_PLAN.md` and run it slice by slice. Before slices 2, 3 and 5, tell me which site to sign into and wait until I say I'm signed in. Never type a password. Skip slice 5 until I give the go-ahead. Finish with `assets/FINDINGS.md` and the list of questions only I can answer.
