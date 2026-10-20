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

## 2026-10-16 (ideas reviewed and rated)
- Reviewed the 16 Oct Telegram ideas and filed them, rated A/B/C/Hold, in `content-pool.md` (section "From the Telegram ideas channel"). A: H4-18 (3 things before building an app), H4-20 ("X became free" format, with own test), H4-22 (AI agent on Iranian sites), H4-7 and H4-10 upgrades. Hold (need your answer): «وردست», «جمنای با ۱۰ هزار تومن» (borrowed-account risk if a reseller).
- Corrected an earlier slip: the CV-tips Reel has 329 views and 0 follows.
- Not verified: none of the forwarded tools were run; model names, benchmarks and licences are the original posters' claims.

## 2026-10-16 (Gemini idea clarified)
- Owner explained «جمنای با ۱۰ هزار تومن»: Gemini Pro bought from a Telegram provider (about 600,000 toman), 5 people invited to share it, owner has tried it. Rating changed from Hold to C as stated: promoting the buy route conflicts with the content rules. Added reframes H4-9 + Gemini (A) and H2-11 (B) in `content-pool.md`. Numbers in the claim don't match (600,000 / 6 is about 100,000).

## 2026-10-20 (public read only; Instagram skipped)
- Three new Reels since 16 Oct: **DekFA-Hzr07** (16 Oct, «با ۱۰۰ هزار تومن ۱۸ ماه اشتراک گوگل گرفتم», keyword «600»), **Dem0wb-IMgb** (17 Oct, «وردست», free Iranian AI tool for DMs/comments, keyword «وردست»), **Depf3SxoKoE** (18 Oct, OpenCode, keyword «opencode»; 1.6K likes, 2.1K comments as displayed).
- **Followers 3,256** (1,275 on 16 Oct), 42 following, 19 posts. Meta description showed 2,539 (stale).
- Insights not read: the built-in browser is logged out, and the owner chose to skip Instagram rather than sign in. Views, saves, shares and follows for the three new posts are unknown, so no rates were computed.
- The 17 Oct caption opens in the first person about a shop's support team ("we were three people, 8 hours a day"). Whether that is the owner's own experience is not confirmed.
- No new Telegram export (`result.json` unchanged, `.telegram-seen` = 40); no ideas filed.
- Look at: all three new captions use the "comment WORD" funnel, and the Gemini one promotes a reseller and a shared account — both conflict with the rules in `CLAUDE.md` and `content-pool.md`.

## 2026-10-20 (new ideas pasted in chat, searched and filed)
- Owner pasted 15 messages dated 16–19 Oct (not an export): 6 GitHub/tool links, 7 Instagram reel links, and 2 one-line ideas. Filed raw in `ideas.md`; rated in `content-pool.md` under the "20 Oct batch".
- Verified: Agency Agents 162,014 stars (the «۱۶۰ هزار» claim is true), MIT; ai-job-search 59,271, MIT, needs paid Claude Code; Context Mode 31,259, ELv2 (not OSI; switched from MIT), the 98% is tool-output only; ComfyUI 140,385, GPL-3.0; ruflo 77,543, MIT; Kronos 42,073, MIT but last push April 2026.
- Reels: public caption/likes/comments only (no Insights). All 7 use comment-word gating; comments ≥ likes, LTX 3×. No views, saves or shares, so none of it is comparable to `posts.csv`.
- Filed as content: H4-25 Agency Agents (A-), H4-28 LTX (B), H3-19 ai-job-search (B), H4-24 Context Mode (B), H4-26 ComfyUI (B, supporting), H4-27 ruflo (C), H3-20 Kronos (C/avoid), M-2 "AI for every job" (B as a meme).
- Not filed: 13-sites reel (duplicate of H3-14), 7-secret-codes and 4-income-paths reels (rule conflicts), free Claude PDF (C, gated asset), hooshyar "مکس" and uniseif reels (unidentified).
- Product note: the interview/personality/language-test message is the ORO Survey brainstorm, already resolved on 17 Oct (resume v0 → interview #2 → voice #3); not a content idea.
