# Saved-posts research: brief

Compiled from the clarify interview on 2026-10-13.

## Goal
- Full research in the style of `research/2026-10-instagram/`, using the posts saved on `@oro_platform` ("successful posts in my field") as the dataset.
- Feeds the ORO personal brand (`@mahdiisaghafi`): what the saved posts have in common, why they work, what their creators sell, and what to do about it.

## Scope
- **In:** every post in `https://www.instagram.com/oro_platform/saved/all-posts/`. Each creator goes into `accounts.csv`. Then the old phases 2-6 run around them.
- **Replaces:** Phase 1 keyword discovery. The saves are the sample. No keyword search unless a gap needs filling, and then only with your OK.
- **Out:** the existing `research/2026-10-instagram/` files stay untouched. No posting, no engagement.

## Constraints
- **Browser:** Claude in Chrome, already logged in as `oro_platform`.
- **Brief §0 rules are hard limits:**
  - Read-only: no likes, follows, comments, saves, unsaves, shares or DMs.
  - Don't open Stories or Highlights.
  - Don't sign up on external sites, and don't enter an email or phone number.
  - Telegram only through `https://t.me/s/<channel>`.
  - Pace page loads like a person.
  - Stop immediately on any Instagram warning and tell you.
- **Data rules:** numbers exactly as shown, blank if not visible, `(inferred)` for anything not seen, Persian kept as-is with English translation in the report, nothing published, no private individuals quoted.
- **Viral:** views >= 3x the account's median and >= its follower count. Saves may include non-Reel posts (carousels, images), so these are recorded with their format and the viral test is applied only where views are visible.
- **Content rules** from `CLAUDE.md` apply to every recommendation.

## Context
- `research/instagram-research-brief.md` (the 6-phase method), `research/2026-10-instagram/report.md` (previous findings to compare against), `strategy/brand-interview.md`, `experiments/01-content-territory-test/content-pool.md`.
- Previous sample: 25 accounts, 139 Reels, 36 offers.

## Success criteria
- Every saved post catalogued, or the count of any that couldn't be read stated explicitly.
- The report separates what the saves confirm from what they contradict in the earlier report.
- Recommendations: re-ranked content pool (top 15), 10 new post ideas, 20 Persian hook templates, starting format and length, first offer to test.
- CSVs parse with consistent column counts (the check in `CLAUDE.md`).

## Edge cases
- **Warning, rate limit or login check:** stop, save progress, report.
- **Deleted or private post, or hidden counts:** record the row with blanks and a note.
- **Non-Persian posts:** kept as a separate "global benchmark" group, used for format and hook ideas only.
- **Saves are personal curation:** a bias to state in "Method and limits" (the sample reflects what you chose to save, not the whole niche).

## Output format
- New folder `research/2026-10-saved/`: `saved_posts.csv`, `accounts.csv`, `viral_reels.csv`, `offers.csv`, `audience_demand.md`, `report.md`, plus this brief.
- One local commit per phase on `claude/practical-hamilton-vicsl6`. No push without your go-ahead.
- Short chat summary at the end: 10 key findings, top 5 posts, recommended first offer.

## Ready-to-send prompt
Using Claude in Chrome (logged in as oro_platform), read-only, catalogue every post in my Instagram saved list, then run phases 2-6 of `research/instagram-research-brief.md` with those saves as the dataset. Write the results to `research/2026-10-saved/`, comparing against `research/2026-10-instagram/report.md`, commit locally per phase and don't push.
