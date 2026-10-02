# ORO — Context for a new chat

Paste this into a new conversation so it knows the project.

## What ORO is

ORO is the GitHub repo `mahdisaghafii/ORO` (formerly `Personal-Brand-Projects`). It holds the planning for **Mahdi Saghafi's** Instagram personal brand (`@mahdiisaghafi`) for an Iranian, Persian-speaking audience.

All current work is on the branch **`claude/practical-hamilton-vicsl6`**. `main` only has the first version.

## Who Mahdi is (source of authority)

- 7+ years in product management across fintech, algorithmic trading, Web3 gaming, AI products and SaaS.
- Built two engineering organizations from scratch, including an 8-person cross-functional team. Owns strategy and delivery across four products.
- Grew a SaaS to 1,000+ active customers. Has worked with international businesses and users.
- Hands-on with automation (n8n, Node-RED), dashboards (Grafana, Metabase, ClickHouse), data, UX, growth and lifecycle metrics.
- **Not** positioned as a deep expert in engineering, investing or business. Authority comes from practical product and execution experience.

## The brand

- **Positioning:** a practical technology creator who helps ambitious Iranians discover opportunities, understand technology and build useful things. **Technology × Opportunity × Building.**
- **Natural role:** diagnose the real problem, give a reality check, then show what to do.
- **Voice:** clear, direct, analytical, honest, anti-hype. "I tested this, here's what happened." Never "you NEED this" or income promises.
- **Never:** fake income claims, get-rich-quick framing, generic AI hype, KYC circumvention / hiding identity / borrowed accounts, offering anything that doesn't exist yet.
- **Audience:** mostly 18–27 (students, early-career employees) plus small business owners. They're lost among options, want to improve their situation, and distrust hype.
- **Long-term business:** content → trust → discover audience problems → build small tools → SaaS / AI / B2B automation products. Instagram is the trust, research and distribution layer.

## Iran context (October 2026)

- International internet was cut from 8 January to 26 May 2026. Access is only partly back; Instagram is blocked and VPNs are less reliable.
- Many Instagram shops lost most of their sales during the blackout. Inflation is roughly 70–90%.
- Every tool post must say up front: free or paid? Works in Iran / needs a VPN? Needs a foreign card? Persian support?

## Instagram research findings (25 Persian accounts, 139 Reels, 36 offers)

- **The gap nobody owns:** "I built it, here's the honest result", with time, cost, what broke, Iran feasibility and full steps.
- Viral educational pattern: a concrete result in one line. Also contrarian reframes, situation questions ("what should a 25-year-old do?") and owner-pain stories.
- The niche's "comment WORD for the link" funnel is breaking ("my link never came"). Mahdi's edge: **full steps in the caption, no gating**, and "send this to someone who…" as the call to action (DM shares are Instagram's strongest reach signal).
- Most distrust sits in money content. Competitors sell Telegram courses (3–15M toman), consulting and sponsored posts, and usually hide prices.
- First product idea to test later: a low-price small-business ops kit (Google Sheets templates + a few automations + a walkthrough), with the price shown openly.

## Current experiment (round 1)

- **Goal:** find which content group brings the most new people in. **H3** opportunity analysis, **H4** building with AI and tools, **H5** business systems, plus **trust** posts that turn visitors into followers.
- **No calendar.** Mahdi picks a post from a menu, records it and posts it. Four rules:
  1. Don't post the same group twice in a row.
  2. Aim for ~3 posts per group.
  3. A trust post every 4–5 posts (pinned).
  4. Roughly the same time of day.
- **Format:** 35–60 s Reels, face plus real proof on screen, Persian burned-in subtitles, hook as text in the first frame.
- **Measure 72 hours after each post:** share rate (primary), non-follower reach %, skip rate, follows, saves, who responded, and template requests.
- **Demand test instead of fake offers:** "comment X if you'd use a ready-made one; if enough people want it, I'll make it."

**The menu (11 posts, word-for-word Persian scripts in `scripts.md`):**

| # | Post | Group | Status |
|---|---|---|---|
| 1 | If Instagram disappeared tomorrow | H5 | Ready |
| 2 | "Rejected because I'm Iranian"? Check these 4 CV mistakes | H3 | Ready |
| 3 | Is junior developer still a good way in, with AI? | H3 | Ready |
| 4 | 4 things I'd learn first if starting from zero | Trust | Ready |
| 5 | Why the DM promised for commenting never arrived | H5 | Ready |
| 6 | Remote work for foreign companies, honestly | H3 | Ready |
| 9 | Stay or leave? Decide with a 2-week test | Trust | Ready |
| 7 | Run AI on your laptop with no internet | H4 | Needs build (~1 h) |
| 8 | Invoice photos → one spreadsheet | H4 | Needs test (~1–2 h) |
| 10 | Lead-qualification system (n8n + AI + Sheets) | H4 | Needs build (~3–5 h) |
| 11 | What an AI support agent can and can't do for a shop | H5 | Needs test (~3 h) |

Saved for later rounds (scripts in `scripts-saved.md`): "Just go Upwork" is bad advice · "Build and sell AI agents": real? · Pricing under inflation · A product mistake that cost us (needs Mahdi's real story).

## Repo files (`experiments/01-content-territory-test/`)

- `scripts.md` — **the menu** and all Persian scripts (spoken lines, on-screen text, captions)
- `scripts-saved.md` — scripts taken off the menu
- `build-guides.md` — step-by-step builds and tests for posts 7, 8, 10, 11, plus customer and pricing sheets
- `tracker.csv` — one row per post; fill in numbers after 72 hours
- `plan.md` — rules, metrics, how to decide at the end of the round
- `content-pool.md` — all 62 post ideas, ranked with the research
- `posts.md` — English outlines and older drafts

Elsewhere: `strategy/brand-interview.md` (full brand interview), `research/2026-10-instagram/report.md` (research report and data).

## Open items

- Do the builds and tests for posts 7, 8, 10 and 11, writing down real time, cost and what broke.
- Decide whether to set up an owned channel (Telegram, Bale or both) once there's something to put in it.
- Choose the Instagram bio. Suggested: «می‌سازم، تست می‌کنم، نتیجه‌ی واقعی رو نشون می‌دم. / هوش مصنوعی · اتوماسیون · کسب‌وکار، بدون هایپ / ۷+ سال مدیر محصول و ساخت تیم». Name field: «مهدی ثقفی | هوش مصنوعی و اتوماسیون».
- Confirm personal claims used in scripts are accurate as worded (e.g. "7+ years", "I've hired for my teams").
- Merge the branch into `main` so the files show on the repo's front page.

## How Mahdi likes to work

- Wants ready-to-use output: word-for-word Persian scripts to record, not outlines.
- Dislikes fixed content calendars. Prefers a menu to pick from.
- Doesn't want anything offered or promised that doesn't exist yet. If something needs building, give the steps to build it or find it.
- Writes in English or Persian. Scripts and captions are in conversational Persian.
