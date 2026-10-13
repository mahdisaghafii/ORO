# Analysis of the `@oro_platform` page

Read-only. Profile, Reels grid and the 11 posts opened on 14 October 2026, plus the public web preview of the Telegram channel in the bio (`t.me/s/oro_channel`). Data: `oro_platform_reels.csv`. Benchmarks come from the saved-posts round (`accounts.csv`, `viral_reels.csv`). Followers and views are as shown on the page; insights (non-follower reach, shares, saves) were not opened, so anything about them is inferred.

## 1. The page in numbers

| Item | Value |
|---|---|
| Followers / following | 146 / 41 |
| Posts | 11, and the Reels tab also shows 11, so every post is a Reel |
| Pinned Reels / Highlights | none / none |
| Bio | «تکنولوژی برای آدم‌های عمل‌گرا» · «AI • طراحی • ابزار» · «برای شروع کانال تلگرام رو دنبال کن» · link `t.me/oro_channel` |
| Total Reel views | 10,895 |
| Median views | 852 (range 239 to 2,447) |
| Median views per follower | 5.8× |
| Best Reel vs the median | 2,447, which is 2.9× (viral test: at least 3× the median and at least the follower count, so none qualify) |
| Telegram channel | "Oro Platform", 6 subscribers, 3 posts (a CV PDF and a forwarded Claude Code project-setup guide) |

Views per Reel, newest first: 2,447 · 1,325 · 1,493 · 1,695 · 263 · 1,519 · 404 · 239 · 295 · 363 · 852. (Posting dates were not captured, so "newest first" is the grid order.)

## 2. What the numbers say

1. **Reach is good for the size.** A normal Reel is seen about 6 times as often as there are followers. Among the small saved accounts the same ratio is 0.4× to 2.3× (jainsta_com 0.9×, webmotion_studio 0.5×, diyano.agency 0.4×, cog._mind 0.4×, zeyneb.ux 2.3×, aiarenalab 2.2×). Reels are clearly being shown to people who do not follow you (inferred: insights not opened).
2. **Follow conversion is the weak point.** If every follower came from these Reels, the page gained at most 1.3 followers per 100 views (146 / 10,895). That is an upper bound. The profile has no pinned Reel, no Highlights and a bio that only sends people to a Telegram channel.
3. **The four newest Reels all have 1,300 or more views; of the seven older ones only one does (1,519).** The newest two are about building with AI (video editing with prompts, a business website with Claude), and the next two have no caption. The older ones are mostly CV tips, a Telegram-bot idea, "AI is an opportunity" and an internet-outage question. A topic effect is possible, and so is an account-level ramp-up. With no dates and only 11 posts, treat it as a hypothesis to test, not a finding.
4. **Likes do not grow with views.** Likes stay between 17 and 42 on every Reel while views range from 239 to 2,447. Likes per view are 4 to 9% on the Reels under 900 views and 1.3 to 2.2% on those over 1,300. Inferred: the extra views come from people who watch and do not engage, and the likes come from a small group that stays the same.
5. **The one big comment count is the gate.** Reel 1 has 208 comments against 42 likes because the caption asks for the keyword «صد». The other Reels have 1 to 29 comments. This matches the pattern in the saved posts, where comments measure willingness to type one word, not interest.
6. **No Reel stands out against the page's own normal.** The best is 2.9× the median. The saved small accounts' hits were 7× to 116× their median and came with a concrete system or a stated number (a real-estate lead agent with four steps, model-versus-model with cost, a build time and token use).

## 3. Content review

| Reel | Topic | Views | Read |
|---|---|---|---|
| 1 | AI video editing with prompts | 2,447 | Demo-first plus keyword; the strongest result. The tutorial is promised "recorded and written": it must exist before the post goes up |
| 2 | Business website from a phone, aimed at Snapp drivers | 1,325 | Specific viewer, which is the right shape. The claim "no starting capital" and #درآمد_اینترنتی read as get-rich framing |
| 3, 4, 5, 6 | Unknown | 1,493 / 1,695 / 263 / 1,519 | No caption seen: no hook text, no CTA, no hashtags, no Iran-access line |
| 11 | Translating videos for "dollar income" | 852 | Income claim: against the brand's no-income-claims rule |
| 7 | "AI is a new opportunity" | 404 | Generic and hypey; no result shown |
| 10 | Run users through a Telegram/Bale bot | 363 | Pain-point angle is good; the "you would have sold more" claim is unverified |
| 9 | CV tips for foreign companies | 295 | Concrete. The keyword is delivered by a CV file in the channel, so the promise is kept |
| 8 | "If the internet goes down, does your business stop?" | 239 | A pain-point question with no result and no CTA; the least viewed |

**Match against the saved-post patterns.** Demo-first with a keyword (Reel 1) is the best performer. Pain-point questions work in the saves when a concrete result follows within seconds ("10 leads while you show a house"); Reel 8 asks the question and offers nothing after it.

## 4. Against ORO's own rules (`CLAUDE.md`, `plan.md` §4 and §11)

| Rule | What the page does |
|---|---|
| No fake income claims or get-rich framing | Reel 11 and the Reel 2 hashtags lean this way |
| No generic AI hype | Reel 7 |
| State Iran access for any tool | None of the captions I could read does |
| Never offer something that does not exist yet | Cannot be confirmed for «صد», «وب‌سایت», «سایت», «مسیر», «ربات». Two files exist in the channel (the CV and the setup guide) |
| Full steps in the caption, no gating | 6 of the 7 readable captions use a keyword gate |
| Voice "I tested this, here is what happened" | Captions are mostly promotional; none states time, cost or what broke |

## 5. Funnel

Reel → comment a keyword → DM or channel → (the channel has 6 subscribers and 3 posts). The bio sends people to the channel while the captions send them to DMs, so there are two doors and neither is tracked. The channel also shows a personal CV PDF to the public; decide whether you want that public.

## 6. What to do first (small and testable)

1. **Rebuild Reel 2 as an honest build.** It has the right viewer. Say how long the site took, what it cost, what broke, and whether Claude is reachable and affordable in Iran (the access question that dominated the saved Persian tutorial). Drop "no capital" and the income hashtag. Put every step in the caption and link the channel for the file.
2. **Caption every Reel.** Four of the 11 had no caption. Start with a hook line, one concrete result and one honest limit.
3. **Pin your three best** (Reels 1, 4 and 6 by views) and add a pinned trust post. A new visitor currently sees an unordered grid.
4. **Pick one door.** Either the channel (link in the caption) or DMs, not both. Use a keyword only for a heavier file, delivered from the channel.
5. **Run the website test you chose, as a test.** Two Reels on AI-built websites with real numbers, judged by the median share rate in `plan.md` §10, then decide whether it stays.
6. **Open Insights for the last five Reels** and send me a screenshot or the numbers: non-follower reach, shares, saves and follows per Reel. Everything above about reach and conversion is inferred until then.

## 7. Limits

- 11 posts is a small sample; one lucky Reel moves the median.
- Posting dates and insights were not captured; the first-pass views are as of 14 October 2026.
- The page is `@oro_platform`, which is not the `@mahdiisaghafi` brand page named in `CONTEXT.md`. If round 1 will be posted from this page, `CONTEXT.md` and the repo should say so.
- No account actions were taken: nothing was liked, followed, saved, commented, or changed on the page.
