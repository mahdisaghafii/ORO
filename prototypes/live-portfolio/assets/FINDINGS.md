# Findings: collecting the live portfolio's real assets

Run of [`../COLLECT_PLAN.md`](../COLLECT_PLAN.md) on Mahdi's PC, started 11 Nov 2026. Status per slice, every fact with its source, and the questions only Mahdi can answer. Draft: updated after each slice.

## What's on this PC
- **Chid:** `C:\Users\MSI\Projects\chidar-ai` (local `prod` at `9409b73`, 7 Oct 2026; may be behind the remote). `D:\Projects\Chid AI` is an empty folder.
- **ORO-Accountant:** `D:\ORO-Accountant` (`295f732`, 15 Oct 2026).
- **Not on this PC:** `QeleQ`, `qeleq-research-lab`, `Matrix Game`. Qeleq facts below come from the synced Claude notes for the QeleQ repo (`C:\Users\MSI\Documents\claude-sync\memory\-home-mahdi-Projects-QeleQ\`), which are notes about the code, not the code itself. Re-check them on the laptop.

## Slice 1: facts from the repos

### Qeleq: broker name
- The code and notes use three spellings: `mazane24` (feature and doc names), `mazaneh24` (the branch and the `MAZANEH24_DEBUG` env var) and once "mazene24". Source: `project-mazane24-copytrade.md` lines 3, 11, 17, 19 in the QeleQ notes.
- The Persian word used for the product line is **مظنه** (`project-new-product-lines.md:15`, `project-pdd-v3.md:17`). That suggests the broker's Persian name is «مظنه ۲۴», but I found no file that spells the broker's brand in Persian. **Unconfirmed.**
- The page currently says "Mazene" (`../showcase.html:128`) and the résumé says "Mazende" (`../BRIEF.md:19`). Neither matches the code.

### Qeleq: "the first copy-trade integration in Iran" (problem)
`../showcase.html:128` says «اولین اتصال کپی‌ترید با کارگزار Mazene در ایران رو راه انداختم» ("I launched the first copy-trade connection with the broker Mazene in Iran"). The notes don't support "launched":
- As of 13 Oct 2026, "no FSM-started trade can reach the broker (13 blockers B1–B13)", and the pilot runs on the broker's **demo** server with 200 broker-issued accounts (`project-mazane24-copytrade.md:15,17`).
- On 6–8 Oct the mazane24 CopyTrade work had "~2–3 months left, no engine order completes yet" (`project-new-product-lines.md:16`).
- The copy-trading that *is* live is a forex one: 160 followers on the broker Opo, running broker-side (`project-new-product-lines.md:24-25`).
- I found no evidence for "first in Iran" either way.

So the line overclaims as written, unless something shipped after 15 Oct. Safer wordings: "designed the copy-trade integration with [broker]" (true now), or keep "launched" only once it's live.

### Qeleq: the stat numbers
`../showcase.html:124-126` shows 2,500 registered, 1,200 active subscribers and 10,000+ concurrent capacity. I found no source for these in the notes on this PC. They come from the brief/résumé (`../BRIEF.md:19`). **Unconfirmed;** Mahdi should confirm they're current.

### Chid: does human review cover every design?
No. Two limits, both from the Chid repo:
1. **Paid, non-trial projects only. The free trial is never reviewed.** `docs/plans/ops-review-buttons.md:33` ("Human review loop (paid, non-trial projects)") and `:43` (B7 "The trial is never reviewed"); also `docs/architecture/Backend_Architecture.md:239` (`plan_for` has a trial exemption).
2. **A deadline auto-releases.** If no reviewer acts by the deadline (48 h for a first design, 1 h for an edit), the latest result is shown to the customer automatically. `ops-review-buttons.md:37-39` (B1–B3) and `Backend_Architecture.md` (the `tick` entry in the review-loop table, `review.py`). The prompt step also auto-sends after 24 h (B1).
- Prod runs `REVIEW_MODE=full` (prompt and result review); stage (`demo.chidstudio.ir`) runs `result_only` (`ops-review-buttons.md:42`, B6). So the demo's review screen shows result review, not the prompt step.
- So «بازبینی انسانی / هر طرح» (`../showcase.html:139`) and «تیم داخلی هم خروجی‌ها رو بازبینی می‌کنه» (`:142`) overclaim. A true version is something like «بازبینی انسانی / طرح‌های پروژه‌های پولی» or «طراحی‌ها رو قبل از نمایش، آدم چک می‌کنه» only if Mahdi is fine with the auto-release caveat. Mahdi decides.

### Chid: launch date
The page says «شهریور ۱۴۰۵ / فعال شد» (`../showcase.html:138`). I found no launch date in `docs/` on this PC. **Unconfirmed.**

### Logos
| Product | Found | Saved as |
|---|---|---|
| Chid | No SVG in the repo. Two 212×240 transparent PNG marks (bars only, no wordmark): `apps/web/public/brand/mark-white.png`, `mark-terracotta.png` (used by `apps/web/components/ui/BrandMark.tsx`). | `chid-logo.png` (white, for the dark page), `chid-logo-terracotta.png` |
| Qeleq | Repo not on this PC. | missing |
| Matrix | Repo not on this PC. | missing |
| ORO-Accountant | No logo anywhere in `D:\ORO-Accountant`. It's at build slice 1a (backend skeleton, no UI yet) per its `README.md:9-11`. | missing |

### Other files from the shot list
- **ORO-Accountant "as it is today":** there's no screen to capture. It's a Telegram/Bale bot whose UI exists only as chat mockups in `docs/ux.md`. Either drop it from "also built" or show a mockup labelled as one.
- Backtest report, n8n flow export, bot screenshots: their repos aren't on this PC.

## Slice 2: Chid
Recorded on **production** (`chidstudio.ir`), in Mahdi's own account, with his explicit permission (he's the owner). The plan said demo only; he overrode that in chat on 11 Nov.

**How it's recorded:** Playwright, headless Chromium, 390×844 at 3× (frames 1170×2532), CDP screencast of lossless PNG frames, stitched with their real timing by ffmpeg. Scripts are in the session scratchpad (`rec/record.js`, `rec/chid01.js`). They're not in the repo.

- **`chid-01-design.mp4` (done, 22 s, 720×1558, 1.1 MB, no audio).** Master: `master/chid-01-design-1170.mp4`. Posters: `chid-01-design-poster.png`, `chid-01-design-still2.png`. Source: project «نشیمن، آشپزخانه و ۱۱ فضای دیگر» › space «اتاق کار» (8 AI versions). The take starts on version 4 with the before/after slider (original photo vs. AI redesign: green arch, art), sweeps to the full design, then steps through the furnishing versions 5–8 and ends with a short sweep on v8. Nothing was generated or changed; it only switches which version is shown.
  - **Different from the shot list:** it isn't "upload → designs appear". On prod a new first design is held for staff review (prompt up to 24 h, result up to 48 h), so it can't appear live on camera. I didn't splice in another room's designs to fake it.
  - **Privacy:** the original photo of this room has **a person sitting at the table**, right of centre. The final take only sweeps toward the design side, so the person never shows (checked frame by frame on a 2 fps contact sheet). The first take showed him and was discarded.
  - **Ownership not yet confirmed:** that this room is Mahdi's own space and not a customer's.
  - Money is kept out: the project page shows the contract total, so the clip starts inside the space page.
- **`chid-02-edit.mp4` (done, 22 s, 720 px, 1.8 MB).** Master: `master/chid-02-edit-1170.mp4`. Posters: `chid-02-edit-poster.png` (locked design), `chid-02-edit-still2.png`. With Mahdi's go-ahead (11 Nov), on «اتاق کار» v8:
  1. A **real edit**: «لوازم» → «لوازم اسکاندیناوی چوب روشن» → «اعمال تغییر». It costs one model call; the admin shows a "chain cost $0.04".
  2. The edit was held for review as expected (an edit has a 1 h deadline). I **approved it in `/admin`** as Mahdi's Super Admin account. It became version 9.
  3. **Locked** v9 via «نهایی کردن طراحی» and chose **«میخواهم طراحی ام خصوصی بماند» (private)**. I didn't opt it into the public gallery, because Mahdi didn't agree to that. **This can't be undone:** «اتاق کار» on this project is now final.
  - The clip is two takes joined at the review wait: request → spinner, then cut to the approved result → lock. The slider part of take 2 is sped up 4× and the version-pick step 2.2×, because the headless browser ran slowly there. Everything shown is real UI and real output.
- **`chid-04-review.png` (done).** The `/admin/reviews` item for our own edit (After/Before, the customer's words, Approve/Regenerate/Reject). The header phone number is masked (local DOM text replacement, then pasted over the full-quality capture). The Customer block, with the phone number and the $0.04 cost, is below the fold and not in the image. Only our own item was opened.
  - **Side effect worth knowing:** after Approve, the admin auto-opens the next queue item, which was a real customer's first concept. The frames that caught it were deleted, and nothing from it was saved.
  - **Ops note (not a portfolio fact):** at 00:30 on 11 Nov, the Results queue held 6 first-concept items requested on 8 Nov, each with "Deadline 16h 22m" left. That's a lot longer than the 48 h the docs describe, so the deadline may be counted in working hours. Worth a look.
- **`chid-03-before.jpg` / `after.jpg`:** not made. This room's original photo has the person in it, so it can't be the "before" as is. It needs either another room of Mahdi's or a crop that leaves the person out.

## Slice 3: Qeleq
Recorded on **`demo.qeleq.ir`**, signed in as Mahdi's own account (Silver plan, 1 day left). Same recorder as Chid. Read-only throughout: nothing was saved, connected or toggled.

**Local-only cleanup in every Qeleq take** (`rec/qclean.js`): the demo shows test pop-ups and banners («این یک نسخه نمایشی (دمو) است», «این یک ویجت آزمایشی است», the «پیشنهاد ویژه آزمایشی» modal, the «فعال‌سازی اعلان‌ها» prompt, the «دعوت اختصاصی» toast). They're hidden with CSS in the recording browser only. **Every P&L figure is blurred:** pips results, «سود/ضرر لحظه‌ای», «برایند», «معادل … تومان», the «سود»/«ضرر» badges, dollar amounts, net profit and the equity/monthly charts.

- **`qeleq-01-signal.mp4` (done, 24 s, 720 px, 2.1 MB; slice 6 re-encodes it under 2 MB).** Master: `master/qeleq-01-signal-1170.mp4`. Posters: `qeleq-01-signal-poster.png` (price levels), `qeleq-01-signal-still2.png` (stop-loss history).
  - The take opens the dashboard's «معاملات خودکار» list, taps a «خرید بیت کوین مظنه ۲۴» trade and shows its price levels: entry, exit, «حد سود» and «حد ضرر», each with its distance. Then it scrolls through code, market `MAZANEH24_BTCUSD`, expert type «خودکار», risk profile, «نسبت ریسک به ریوارد ۱:۲» and «وضعیت اصالت: بدون تغییر», then timing, then the event log («صدور ستاپ معاملاتی ← بروز رسانی حد ضرر ← …») and the «روند تغییرات حد ضرر» table (a trailing stop loss at work).
  - **Different from the shot list:** it's not "a signal *arriving*". No setup is live on demo («ستاپی برای نمایش وجود ندارد»). The newest demo trade is from 18 Aban 1405 (9 Nov), and the live test expert «تست مظنه ۲۴ مارکت» («لانگ هر 10 دقیقه با سفارش مارکت») hasn't fired since. The clip shows one signal's whole life after the fact.
  - The trade sheet's washed-out grey is the app's real design (a 242/242/243 background with 8% glass cards). I checked the layer stack to rule out a stray overlay.
- **`qeleq-02-copy.mp4`: not possible.** Demo says «حساب مظنه ۲۴ وصل نیست» on the setups page and in Settings › Brokers, so there's no copy-trade to show. That matches the QeleQ notes: the mazane24 copy-trade wasn't completing orders as of mid-October.
- **`qeleq-03-risk.png` (done):** the same trade sheet scrolled to the risk rows (risk profile, R:R 1:2, authenticity unchanged, expert type, timing).
- **`qeleq-04-backtest.png` (done):** `/dashboard/backtest/14`, the report «G-Force-3.3-all13-forex_pip.xlsx» (فارکس, 287 days, 1404/09/10–1405/06/23, computed at 0.01 lot). It shows status «سالم», final score «۰٫۵۰ · غیرقابل مقایسه», profit factor 1.47, win rate 42% (1,510 of 3,614), **SQN 8.26** and 3,614 trades, with the equity chart blurred. Further down (not in the still) the report has **RDD 22.49**, MDD and expectancy.
- `qeleq-logo.svg`: not found. The repo isn't on this PC, and I didn't pull it from the live site.

**Facts confirmed on demo (source: `demo.qeleq.ir`, 11 Nov 2026):**
- The broker is written **«مظنه ۲۴»** in Qeleq's own UI (strategies «تست مظنه ۲۴ مارکت/لانگ», Settings › Brokers «هنوز حساب مظنه ۲۴ را وصل نکرده‌اید»), with the symbol `MAZANEH24_BTCUSD`. So the Latin spelling in the code is `mazaneh24`/`mazane24`, and neither "Mazene" nor "Mazende" matches.
- The broker connection is per user, and part of it happens on the broker's own site («بخشی از کار در سایت مظنه ۲۴ انجام می‌شود»).
- Qeleq states its performance policy in the UI: «عملکرد واقعی تمامی استراتژی‌ها هر ۱۲ ساعت به‌روزرسانی شده…» (`/dashboard/analysis`).

## Slice 4: smaller projects
Nothing could be collected on this PC:
- **Matrix, Eima, AI image bot, n8n flow, Shaparo:** no repo, export or screenshot anywhere under `C:\Users\MSI` or `D:\` (searched by name). They need the laptop, the live products, or Mahdi's phone/Telegram.
- **ORO-Accountant:** no UI exists yet (see slice 1).
- I found `D:\0mahdi\COL\` (Chain of Legends material, e.g. `Guild Avatars/`). I didn't open it, because slice 5 waits for Mahdi's go-ahead.

## Slice 5: Chain of Legends
On 11 Nov Mahdi sent his own material (two screencasts, two links) and then **confirmed in chat that he may publish Chain of Legends footage ("Yes, cut them")**.

**Cut and saved:**
- **`col-01-arena.mp4`** (22 s, 1280×720 landscape, 1.8 MB). Master: `master/col-01-arena-1920.mp4`. Posters: `col-01-arena-poster.png/.jpg` (battle), `col-01-arena-still2.png` (fly-in). Source: `14-45-26.webm` at 2:43.5–3:05.5. It's the Chain of Legends loading screen with the logo, then the camera fly-in over the empty Arena, then both armies on the hex board and the opening clash. **Blurred:** both player names in the HUD («HeroOfHeron» and the opponent's), and the game's corner overlay «Disconnected · ping --ms · FPS 12.1». Nothing from the wallet, chat, ranking, guild or referral screens is used.
  - **Quality caveat:** the game itself rendered at about 12 fps on the recording machine (its own FPS counter says 12.1), so the battle moves a bit stiffly. A re-record on a stronger machine would look smoother.
- **`col-01-arena-portrait.mp4`** (720×1562, 1.8 MB): a centre crop of the same take for a portrait phone. It only keeps about 500 of the 1920 source pixels across, so it's soft and cuts off the sides of the board. Use the landscape version if the page can turn the phone sideways.
- **`col-logo.png`**: the public logo, `https://chainoflegends.com/assets/images/webp/chainoflegends-logo.webp` (301×325, transparent), converted to PNG. No SVG found.
- **`col-press.png`**: the site's MEDIA strip at phone size (AP, Seeking Alpha, finanzen.net, Benzinga, KXAN, Markets Insider, Morningstar, Hawaii News Now, PR News). The push prompt is hidden locally.
- **`col-stat-players.png`**: the site's «Total Players 283,245 USER» card, cropped so the «NaN» burn card isn't shown.
- **Not done:** `col-02-treasure` (no Treasure Island in the footage), `col-03-tournament` (only the Ranking screen, which is full of other players' names), the audit cover (not on this PC; `D:\0mahdi\COL\` wasn't opened).

**`D:\claude-studio\jobs\Import\Screencast From 2026-10-31 14-45-26.webm`:** in-game session, 4 min 57 s, 1920×1080 landscape, VP8, no audio. Actual frame rate is about 20–23 fps, dropping to **12–15 fps in the battle**. The file isn't seek-indexed (decode from the start).
- **Usable:** the Arena Battle (about 2:50–4:00; hex arena, both armies, the 14:36 timer), which is the `col-01-arena` hero. Also the world map (0:00–0:15, 1:20, 1:40), the dungeon map (1:30) and the snow island (2:20).
- **Must be cut or blurred:** Ranking (0:40) and Guild (1:50–2:00) show other players' names and scores. Global Chat (4:10) shows other users' messages. **Wallet deposit/withdraw, CLEG balances and the transaction list with sale prices and a "Withdraw 64830 CLEG" toast (4:20–4:45)**, which break the no-money rule. The Referrals screen (4:50) shows a referral link. The HUD shows the player names "HeroOfHeron" and the opponent's.
- **Not in it:** Treasure Island, as far as the 10 s contact sheet shows, and no tournament screen beyond the Ranking.
- **Format problem:** it's 16:9 landscape and the page shows a portrait phone. A portrait crop of 1920×1080 keeps only about 500 px of width (soft when scaled to 720). Better: show CoL on a phone turned landscape (browser games are played that way). That's a page design call.

**`…\Screencast From 2026-10-31 15-01-42.webm`:** chainoflegends.com scrolled on desktop, 26 s, 1920×1080. **Not usable as is:** it includes Mahdi's browser tabs and bookmarks bar. It's also redundant, because the public site can be captured cleanly at phone size (done below, read-only).

**`https://chainoflegends.com/` (captured at 390×844 @3x, read-only, 11 Nov):**
- The site's own stats: **«Total Players 283,245 USER»**; "Total Marketplace Trades Volume 2,394,469,329 CLEG" (a token figure, don't use); "Total Tokens Burnt **NaN** CLEG" (a bug on the live site).
- **«OUR TEAM» lists "Mahdi Saghafi — CMO"** (with Ali Gonabadi, Co-Founder & CEO; Mahdi Abdi, Co-Founder & COO; Hamidreza Noori, Business Development). The copy hand-off says he was "product manager assistant, then product manager" (`../copy-handoff.md:35`).
- "Audited by SolidProof"; partners and backers include CoinGecko and coinbase; investors CoinEx Smart Chain and CryTech Mining; there's a MEDIA logo strip.
- The page has an official banner video: `https://chainoflegends.com/assets/video/chainoflegend-banner-video.mp4`. Not downloaded.
- A "Chain of Legends Courier … Do you consent?" push prompt covers the bottom of every screen. I didn't answer it; it would have to be hidden locally for any capture.

**`https://www.youtube.com/watch?v=kmyu6hwQVr8`:** the official «Chain of Legends» channel's video «⚔️🏰 Raise your Sword... Unite your Heroes». Not downloaded: downloading from YouTube breaks its terms, and the footage is the company's marketing. Linking or embedding is the safe use, and only if Mahdi has the rights.

**Fact clashes with the page copy:**
- **Users:** the page/brief says **300,000+** (`../BRIEF.md:18`, the copy's «۳۰۰ هزار کاربر»). The live site says **283,245**. "300,000+" overclaims unless another source backs it; "۲۸۰ هزار+" is safe.
- **Role:** the site says CMO; the copy hand-off says PM. Mahdi decides which one the page uses.

## Slice 6: hand back
- **Web clips, all under 2 MB, no audio, H.264, faststart:** chid-01 (1.1 MB), chid-02 (1.8 MB), qeleq-01 (1.5 MB), col-01 (1.8 MB), col-01-portrait (1.8 MB). Phone clips are 720 px wide; col-01 is 1280×720 landscape.
- **Posters:** a full-res PNG and a 720 px JPG (70–130 KB) for each clip, for slow connections.
- **Masters** (1170 px phone takes, 1920 px CoL) are in `master/` and **kept out of git** (`master/` is git-ignored, about 18 MB). They stay on this PC only.
- `README.md` boxes are ticked, with notes where what was collected differs from the shot list.

### Collected
| File | What |
|---|---|
| `chid-01-design.mp4` | Real room: before/after slider and AI versions 4→8 (prod, Mahdi's project) |
| `chid-02-edit.mp4` | Real edit → approved in admin → locked (private) |
| `chid-04-review.png` | Admin review screen, phone number masked |
| `chid-logo.png`, `chid-logo-terracotta.png` | Brand mark PNGs from the repo |
| `qeleq-01-signal.mp4` | A demo trade: entry/SL/TP, R:R, risk, trailing-SL log; P&L blurred |
| `qeleq-03-risk.png`, `qeleq-04-backtest.png` | Risk rows; backtest (SQN 8.26, PF 1.47) with money blurred |
| `col-01-arena.mp4` (+ portrait) | Arena Battle from Mahdi's screencast, names blurred |
| `col-logo.png`, `col-press.png`, `col-stat-players.png` | Public-site logo, media logos, player count |

### Missing, and why
| Missing | Why |
|---|---|
| `chid-03-before/after.jpg` | The only "before" photo (اتاق کار) has a person in it |
| `qeleq-02-copy.mp4` | The mazane24 copy-trade isn't connected or live on demo |
| `qeleq-logo.svg` | The QeleQ repo isn't on this PC |
| `col-02-treasure`, `col-03-tournament` | Not in the footage Mahdi provided |
| all six `also-*.png` | No repo or files for Matrix, Eima, the image bot, n8n or Shaparo on this PC; ORO-Accountant has no UI yet |
| `mahdi.jpg` | Needs Mahdi |

### What changed on production (Chid), for the record
All of this was in Mahdi's own account, with his go-ahead in chat on 11 Nov: one edit generation on «اتاق کار» (cost $0.04); that edit approved in `/admin/reviews`; «اتاق کار» v9 **locked as private** (can't be undone). Nothing else was submitted, paid, toggled or sent.

## Questions only Mahdi can answer
1. **Is «اتاق کار» (the meeting room with the round table and green chairs) your own space, not a customer's?** The Chid clips and stills (`chid-01`, `chid-02`, `chid-04`) show it, so they **aren't committed** until you say yes.
2. **The person in that room's original photo:** OK to show a cropped "before" for `chid-03`, or will you shoot another room of your own?
3. **Qeleq "first copy-trade connection with مظنه ۲۴ in Iran, launched":** the notes say it wasn't completing orders as of mid-October, and demo shows it unconnected. Has it gone live since? If not, the line should say "designed", not "launched". Also, how do you want «مظنه ۲۴» written in Latin on the page ("Mazaneh24"?).
4. **Qeleq numbers:** are 2,500 registered / 1,200 active / 10,000+ capacity current? I found no source for them on this PC.
5. **Chid's human review:** it covers paid projects only (the trial is never reviewed) and auto-releases at the deadline. Keep «بازبینی انسانی هر طرح», or narrow it (e.g. «بازبینی انسانی طرح‌های پروژه‌های پولی»)?
6. **A real Chid usage number** from Metabase, if you want one on the page (you need to open it).
7. **Chid's launch date** «شهریور ۱۴۰۵»: confirm it; I found no source.
8. **Chain of Legends users:** the site says **283,245**, the page says **300,000+**. Which source backs 300k, or switch to «۲۸۰ هزار+»?
9. **Chain of Legends role:** the site lists you as **CMO**; your copy hand-off says product manager. Which goes on the page?
10. **Publishing rights for Qeleq footage** (it's your employer's product; the demo shows the «مظنه ۲۴» name).
11. **Chain of Legends hero clip quality:** use the 12 fps take as is, or re-record a battle on a stronger machine? And is a landscape phone OK for that chapter?
12. **The smaller projects:** send screenshots (or the repos) for Matrix, Eima, the image bot, the n8n flow and Shaparo. Should ORO-Accountant stay in "also built" while it has no UI?
13. **Your photo**, or the decision to stay faceless.
14. **Ops, not portfolio:** 6 Chid first-concept results from 8 Nov were still in the review queue on 11 Nov. Worth a look.
