# Tracking log

One entry per `/refresh-oro` run, newest at the bottom. Facts and deltas only.

## 2026-10-14 (backfill)
- Seeded `posts.csv` (11 Reels) and `account.csv` from the 14 Oct read-only review (`research/2026-10-saved/oro_platform_page.md`). Skip rate, watch time and post dates were not captured then and are blank.

## 2026-10-16 (first live run, partial)
- Built-in browser is not signed in to Instagram, so only the public profile was readable: **1,272 followers** (148 on 14 Oct), 42 following. Per-Reel numbers and Insights were not read; `posts.csv` has no 16 Oct rows.
- No Telegram export in `inbox/telegram/` yet; no ideas filed.
- Look at: the follower count grew about 8.6x in two days; the Insights run is needed to see which Reel did it.

## 2026-10-16 (full run, Chrome signed in)
- **Account (30 days):** 1,275 followers (148 on 14 Oct), 48,248 views, 34,355 viewers, 95.2% from non-followers, 691 profile visits, 47 link taps (6 on 14 Oct). Telegram subscribers not read.
- **New Reels since 14 Oct:** 3 on the grid (DehjdBez5Lp OpenCode/DeepSeek, DefMMK5zQkE website from a phone, DecsJKaTSKq Gemini update) plus 2 off-grid Reels dated Oct 15 (DeiEV4wozdJ, DeiEK6UI1oe), probably Trial Reels (inferred).
- **Biggest mover:** DehjdBez5Lp, 41,894 views, 32,255 viewers, 99% non-followers, 2,485 saves, 923 shares, 864 follows, 2,766 comments (keyword «مدل»). Its 864 follows are most of the follower growth. Provisional (about 19h old).
- **Off-grid Reel DeiEV4wozdJ:** 6,850 views, 99.9% non-followers, 217 saves, 79 shares, 69 follows (same bank-app build as the top Reel).
- **Older Reels still gaining:** DeaLvSQz1hV 2,469 to 3,079 views, 41 to 50 follows; DeXbWiNT_ag 1,325 to 1,547.
- **Not read:** skip rate and average watch time (not in the panel text), exact post dates for most Reels, Telegram channel (no export in `inbox/telegram/`, no ideas filed).
- Look at: the build-with-a-real-result Reels (3 hours, bank app) are far ahead of the update-news and income-style Reels on saves, shares and follows.

## 2026-10-16 (Telegram export filed)
- Read `ChatExport_2026-10-16` (private channel "Oro instagram ideas", 36 messages, ids 1 to 40; copy kept in git-ignored `inbox/telegram/result.json`). Filed 8 own ideas, link-only saves (artifacts, YouTube, repos) and 11 forwarded Linuxor posts as one-line pointers into `ideas.md`. `.telegram-seen` = 40.
- Look at: your own notes are mostly one-line titles («فلان چیز رایگان شد», «جمنای با ۱۰ هزار تومن»); the forwarded posts are almost all free or open-source tools, with Iran-specific ones (Torob MCP, awesome-iran-mcp, Mizan-4B).

## 2026-10-16 (decision)
- Skip rate and average watch time are dropped from `posts.csv` (phone-app only; the owner chose not to collect them). Share, follow and save rates stay the measures.

## 2026-10-16 (correction)
- Telegram channel `oro_channel` has 26 subscribers (6 on 14 Oct), read from the public `t.me/oro_channel` page. Filled into the signed-in 16 Oct row of `account.csv`.
