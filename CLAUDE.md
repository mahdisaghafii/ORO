# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Planning, research and experiments for a Persian-language Instagram personal brand about practical technology for ambitious Iranians: **discover opportunities, understand technology, build things.** It holds no application code: everything is Markdown, CSV or plain text. There is no build, lint or test step.

The one mechanical check is that the CSVs still parse with a consistent column count. Run it after editing any CSV:

```bash
python3 -c "import csv,glob
for f in sorted(glob.glob('**/*.csv',recursive=True)):
    r=list(csv.reader(open(f,encoding='utf-8'))); bad=[i+1 for i,x in enumerate(r) if len(x)!=len(r[0])]
    print(f, len(r)-1, 'rows', 'BAD lines:' if bad else 'ok', bad or '')"
```

## How the documents depend on each other

```
strategy/brand-interview.md            source of truth: positioning, audience, voice, boundaries, pillars, series
        │
        ├─► experiments/01-content-territory-test/
        │     content-pool.md          idea pool, grouped by territory (H3/H4/H5/trust)
        │     plan.md                  hypotheses, fixed variables, schedule, metrics, decision rules
        │     posts.md                 the 20 scheduled posts + trust backlog (hook / outline / visual / close)
        │     tracker.csv              one row per post, filled in 7 days after posting (imported into Google Sheets)
        │
        └─► research/instagram-research-brief.md   6-phase brief for a Claude-in-Chrome session
              research/2026-10-instagram/          its outputs: accounts.csv → viral_reels.csv → offers.csv
                                                   → audience_demand.md → report.md (synthesis)
```

- `report.md` §5–6 feeds back into the experiment: it re-ranks `content-pool.md` and proposes new posts and hooks. It does not edit the experiment files. Changing the plan is a separate decision, and `plan.md` §8 says not to change it mid-experiment unless something is clearly broken.
- Post IDs are shared across `plan.md`, `posts.md`, `tracker.csv` and `content-pool.md`. **H3** = opportunity analysis, **H4** = building with AI/tools, **H5** = business systems (these three are the acquisition territories under test). **H1** = "where do I start?" and **H2** = real experience (the trust track). If a post is renamed or moved, update all four files.
- Metric definitions (share rate, follow rate, profile conversion, and so on) live in `plan.md` §5 and the README. The end-of-experiment decision rule is in `plan.md` §9 (rank territories by **median** share rate). Refer to these sections instead of redefining the metrics.
- `plan.md` §7 says `conversations.md` is created once audience interviews start. It doesn't exist yet.
- When a file is added, add it to the README's **Contents** list.

## Content rules (apply to any post, hook or recommendation you write)

These come from `strategy/brand-interview.md` (§9, §11, §15, §19) and `plan.md` §10.

- No fake income claims, no get-rich-quick framing, no generic AI hype, no empty motivation.
- `[fill in]` marks a spot that needs a true detail from the owner's own experience. **Never invent one.** If no true detail exists, cut that point.
- Never promote KYC circumvention, hiding Iranian identity, fake residency or borrowed accounts. Don't default to "go freelance on platform X"; the brand looks for opportunities that don't depend on inaccessible platforms or payments.
- State Iran access constraints for any tool shown. Prefer tools the audience can actually use (open-source, self-hostable, free tiers that work).
- The owner's authority comes from product thinking, experimentation, systems, data, UX, automation and applied AI. Don't position the owner as a deep engineering, investing or business expert.
- Voice: "I tested this. Here's what happened." Not "You NEED to know this!"

## Language

Planning documents are written in English. Published scripts and captions are in Persian, with English technical terms where natural. Research data keeps Persian exactly as it appeared (hooks, claims, prices such as `۸۵.۳K`). When `report.md` quotes Persian, it adds an English translation.

## Research data rules (from `research/instagram-research-brief.md`)

- Record numbers exactly as shown. Never estimate, and leave a cell blank if the number wasn't visible. Mark anything inferred rather than seen with `(inferred)`.
- **Viral** = views ≥ 3× the account's median (latest ~30 non-pinned Reels) **and** ≥ its follower count.
- The research is internal. Don't publish it or quote private individuals.
- If a session browses Instagram through the owner's real account, the brief's §0 rules are hard limits. Browsing is read-only: no likes, follows, comments, saves or DMs. Don't open Stories or Highlights. Don't sign up for anything on external sites. Read Telegram only through `https://t.me/s/<channel>`. Pace page loads like a person, and stop immediately on any Instagram warning. Save to files after each phase so the work can resume.

## Git

Work happens on `claude/practical-hamilton-vicsl6` (the remote also has `main`). The repo is `mahdisaghafii/Personal-Brand-Projects`. Research work is committed one phase at a time, with subjects like `Instagram research: phase N (...)`.
