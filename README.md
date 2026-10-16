# Personal Brand Projects

Planning and experiments for a practical technology personal brand on Instagram for ambitious Iranians:
**discover opportunities, understand technology, build things.**

## Start here

- New chat? Paste [`CONTEXT.md`](CONTEXT.md) first: a one-page summary of the whole project.

1. [`experiments/01-content-territory-test/scripts.md`](experiments/01-content-territory-test/scripts.md): **the post menu.** Pick a post, record it, post it. Word-for-word Persian scripts for all 11 (7 ready now, 4 after their builds).
2. [`experiments/01-content-territory-test/build-guides.md`](experiments/01-content-territory-test/build-guides.md): how to build what the other posts need.
3. [`experiments/01-content-territory-test/plan.md`](experiments/01-content-territory-test/plan.md): rules for every post, how to measure, how to decide.

## Contents

- [`CONTEXT.md`](CONTEXT.md): one-page project summary to paste into a new chat.
- [`CLAUDE.md`](CLAUDE.md): guidance for Claude Code sessions working in this repo.
- **Strategy**
  - [`strategy/brand-interview.md`](strategy/brand-interview.md): positioning, audience, voice and long-term direction, from the brand interview.
- **Research**
  - [`research/2026-10-saved/report.md`](research/2026-10-saved/report.md): second research round built on the 21 posts saved on `@oro_platform` (20 creators): what the saves have in common, how they score against each creator's normal, prices seen, a re-ranked top 15 and 20 Persian hook templates. Data files and the agreed `brief.md` sit next to it, plus [`oro_platform_page.md`](research/2026-10-saved/oro_platform_page.md), a read-only review of the `@oro_platform` page itself (11 Reels with their Insights in `oro_platform_insights.csv`, funnel, rules check, first fixes).
  - [`research/2026-10-instagram/report.md`](research/2026-10-instagram/report.md): what goes viral in the Persian tech, AI, money and business niche, what creators sell, what the audience asks for, and where the gap is. Data files sit next to it (accounts, 139 Reels, 36 offers, audience demand).
  - [`research/instagram-research-brief.md`](research/instagram-research-brief.md): the brief used to run that research (reusable for a later round).
- **Experiment 01: acquisition test, round 1** ([`experiments/01-content-territory-test/`](experiments/01-content-territory-test/))
  - [`plan.md`](experiments/01-content-territory-test/plan.md): prep, rules for every post, how to pick, metrics, decision rules.
  - [`scripts.md`](experiments/01-content-territory-test/scripts.md): word-for-word Persian scripts (spoken lines, on-screen text, captions).
  - [`scripts-saved.md`](experiments/01-content-territory-test/scripts-saved.md): full scripts taken off the menu, kept for later rounds.
  - [`build-guides.md`](experiments/01-content-territory-test/build-guides.md): step-by-step guides for the builds and tests, and where to find ready-made versions.
  - [`posts.md`](experiments/01-content-territory-test/posts.md): the 11 posts on the menu (English outlines with Persian hook drafts), plus earlier drafts kept for later rounds.
  - [`content-pool.md`](experiments/01-content-territory-test/content-pool.md): all 65 post ideas, ranked with the research.
  - [`tracker.csv`](experiments/01-content-territory-test/tracker.csv): fill in each post's numbers 72 hours after posting (import into Google Sheets).
- **Tracking** (what is actually posted; updated by the `/refresh-oro` skill in `.claude/skills/refresh-oro/`)
  - [`tracking/posts.csv`](tracking/posts.csv): one row per Reel per snapshot date (Insights numbers and rates). [`tracking/account.csv`](tracking/account.csv): page totals per snapshot. [`tracking/ideas.md`](tracking/ideas.md): ideas from the private Telegram channel (export dropped in `inbox/telegram/`, git-ignored). [`tracking/log.md`](tracking/log.md): what changed each run.

## Tracker rates

Add these as columns in your spreadsheet:

- **Share rate** = shares / reach  ← primary for acquisition posts
- **Follow rate** = follows / reach
- **Save rate** = saves / reach
- **Conversation rate** = (comments + dms) / reach

`skip_rate` and `avg_watch_time_s` come straight from each Reel's insights. A high skip rate means the hook or first frame isn't working.

Weekly, at account level: **profile conversion** = new follows / profile visits.
