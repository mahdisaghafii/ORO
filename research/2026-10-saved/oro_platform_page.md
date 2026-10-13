# Analysis of the `@oro_platform` page

Read-only. Profile, Reels grid, the 11 posts and the page's own Insights, opened on 14 October 2026, plus the public web preview of the Telegram channel in the bio (`t.me/s/oro_channel`). Data: `oro_platform_reels.csv` (captions and public counters) and `oro_platform_insights.csv` (per-Reel Insights). Benchmarks come from the saved-posts round (`accounts.csv`, `viral_reels.csv`). Insights show only the owner's own account, so there are no Insights benchmarks for the saved creators.

**Definitions** follow `plan.md` §6: share rate = shares ÷ reach (viewers), follow rate = follows ÷ reach, non-follower reach from Insights.

## 1. The page in numbers

| Item | Value |
|---|---|
| Followers / following | 148 (146 on the profile page earlier) / 41 |
| Posts | 11, all Reels |
| Pinned Reels / Highlights | none / none |
| Bio | «تکنولوژی برای آدم‌های عمل‌گرا» · «AI • طراحی • ابزار» · «برای شروع کانال تلگرام رو دنبال کن» · link `t.me/oro_channel` |
| Views, last 30 days (Insights) | 10,371; viewers 7,499 |
| Share of views from non-followers | 88.3% (Insights); 88.9% weighted across the 11 Reels |
| Interactions, last 30 days | 957 from 367 accounts engaged; 55.4% from non-followers |
| Profile visits / link taps | 312 / 6 (the Telegram link: under 2% of visits) |
| Median Reel views | 852 (range 239 to 2,447) |
| Best Reel vs the median | 2,469 views (2.9×); the viral test (3× median and at least the follower count) is not met by any Reel |
| Telegram channel | "Oro Platform", 6 subscribers, 3 posts (a CV PDF and a forwarded Claude Code setup guide) |

## 2. Per-Reel Insights (reach = viewers)

Newest first, as on the grid. Dates are not shown on the Reels themselves; the Insights top-content lists give Oct 12 for the best Reel, Oct 8 to 12 for the five most-viewed, and Oct 2 for the oldest Reel, so the page posted about one Reel a day from about 2 October.

| # | Views | From non-followers | Reach | Likes | Comments | Saves | Shares | Follows | Share rate | Follow rate | Caption topic |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2,469 | 96.4% | 2,038 | 42 | 210 | 77 | 24 | 41 | 1.18% | 2.01% | AI video editing with prompts («صد») |
| 2 | 1,325 | 93.3% | 1,166 | 17 | 14 | 19 | 7 | 10 | 0.60% | 0.86% | Website from a phone, for Snapp drivers («وب‌سایت») |
| 3 | 1,494 | 93.7% | 1,311 | 33 | 22 | 42 | 13 | 18 | 0.99% | 1.37% | no caption |
| 4 | 1,695 | 95.0% | 1,452 | 29 | 16 | 37 | 9 | 11 | 0.62% | 0.76% | no caption |
| 5 | 263 | 78.2% | 205 | 20 | 1 | 0 | 0 | 0 | 0% | 0% | no caption |
| 6 | 1,519 | 94.8% | 1,307 | 28 | 14 | 23 | 6 | 3 | 0.46% | 0.23% | no caption |
| 7 | 404 | 85.2% | 360 | 26 | 6 | 3 | 3 | 1 | 0.83% | 0.28% | "AI is an opportunity" («مسیر») |
| 8 | 239 | 72.0% | 173 | 18 | 3 | 1 | 0 | 0 | 0% | 0% | Internet outage and your business (question) |
| 9 | 295 | 70.4% | 203 | 27 | 4 | 0 | 1 | 0 | 0.49% | 0% | CV tips for foreign companies («رزومه») |
| 10 | 363 | 80.4% | 284 | 25 | 10 | 0 | 2 | 2 | 0.70% | 0.70% | Telegram/Bale bot («ربات») |
| 11 | 852 | 48.8% | 581 | 35 | 29 | 7 | 17 | 17 | 2.93% | 2.93% | Dollar income from translating videos («سایت») |

Median share rate 0.62% and median follow rate 0.70% across the 11 Reels. Total follows credited to Reels: 103 (the page has 148 followers), about 1 follow per 100 views.

## 3. What the numbers say

1. **Reach is mostly to strangers, and that is measured.** On the best Reels 93% to 96% of views come from people who do not follow the page. The page's normal Reel gets about 6 times as many views as it has followers; among the small saved accounts that ratio is 0.4× to 2.3× (jainsta_com 0.9×, webmotion_studio 0.5×, diyano.agency 0.4×, cog._mind 0.4×, zeyneb.ux 2.3×, aiarenalab 2.2×).
2. **Reel 1 does the job.** It has the best reach (2,038 people), 77 saves (3.8% of reach, more than its 42 likes), 24 shares and 41 follows. 81% of its interactions come from non-followers. Saves above likes fit a "tutorial I will use later" promise.
3. **Reel 11 is the surprise.** The oldest Reel (the "dollar income" one, about Oct 2) has the highest share rate (2.93%) and follow rate (2.93%) of the set, with only 852 views and half its views from followers. One Reel proves nothing, but this is the post that breaks the brand's no-income-claims rule, so it needs a look: is it the income hook, the subject (translating videos), or the fact that early Reels went first to the page's few followers who shared them?
4. **Later Reels reach strangers who do not follow.** Reels 2, 4 and 6 get 93% to 95% non-follower views but only 0.23% to 0.86% follow rate, against 2.0% for Reel 1. Views without a reason to follow are the gap, not reach.
5. **Older Reels barely moved.** Reels 5, 8, 9 and 10 reached 173 to 284 people, with 68% to 91% of the little engagement coming from followers, almost no saves and no follows. Their topics are CV tips, a bot idea, an outage question: nothing in them tells a stranger what to expect from the page.
6. **The page posts daily.** About 11 Reels in about 11 days. The newest four all passed 1,300 views, while of the older seven only one did (1,519), which matches a ramp-up with daily posting (the topic of the newer posts is also the AI-building one). With 11 posts the two explanations cannot be separated.
7. **The keyword gate works on comment counts, not on the real metrics.** Reel 1 has 210 comments, but its 41 follows, 77 saves and 24 shares are the signals that matter. The other Reels' comments stay between 1 and 29.
8. **Profile visits do not turn into channel members.** 312 visits, 6 link taps, 6 subscribers.

## 4. Content review

| Reel | Read |
|---|---|
| 1 | Demo-first plus keyword; the strongest. The tutorial promised in the caption must exist before it goes up. The thumbnail says "manual editing is over" («ادیت دستی دیگه گذشت»), which sets a claim the Reel should back with a number |
| 2 | Right shape (a specific viewer). The thumbnail reads «۵ میلیون روزانه، فقط با یک گوشی» (5 million a day with only a phone): an income claim on the cover, and the hashtags include #درآمد_اینترنتی. That conflicts with the repo's rule against income claims |
| 3, 4, 5, 6 | No caption seen: no hook text, no CTA, no hashtags, no Iran-access line. Reels 3, 4 and 6 still reach 1,300+ people and bring 18, 11 and 3 follows |
| 7 | Generic "AI is an opportunity"; no result shown |
| 8 | A pain-point question with no result and no CTA; the least viewed |
| 9 | Concrete, and the promise is kept (the CV PDF is in the channel) |
| 10 | Good pain-point angle; "you would have sold more" is unverified |
| 11 | Income claim: against the brand rule, though it has the best share and follow rates |

## 5. Against ORO's own rules (`CLAUDE.md`, `plan.md` §4 and §11)

| Rule | What the page does |
|---|---|
| No fake income claims or get-rich framing | Reel 11, the Reel 2 cover and its hashtags lean this way |
| No generic AI hype | Reel 7 |
| State Iran access for any tool | None of the captions I could read does |
| Never offer something that does not exist yet | Cannot be confirmed for «صد», «وب‌سایت», «سایت», «مسیر», «ربات». Two files exist in the channel (the CV and the setup guide) |
| Full steps in the caption, no gating | 6 of the 7 readable captions use a keyword gate |
| Voice "I tested this, here is what happened" | Captions are mostly promotional; none states time, cost or what broke |

## 6. Funnel

Reel → comment a keyword → DM or channel → (the channel has 6 subscribers and 3 posts). The bio sends people to the channel while the captions send them to DMs, so there are two doors. The channel also shows a personal CV PDF to the public; decide whether you want that public.

## 7. What to do first (small and testable)

1. **Rebuild Reel 2 as an honest build, with a reason to follow.** It has the right viewer and reaches strangers, but only 0.86% follow. State how long the site took, what it cost, what broke, and whether Claude is reachable and affordable in Iran. Replace the income cover and hashtags. Put every step in the caption.
2. **Copy what worked in Reel 1:** a promised result, a saveable tutorial, and a first-line caption that says who the page is for. Its 41 follows came from a clear promise, not from the comments.
3. **Caption every Reel.** Four of the 11 have none. Start with a hook line, one concrete result and one honest limit.
4. **Pin your three best** (Reels 1, 4 and 6 by views) and one trust post that says who you are and what the page will teach. A new visitor currently sees an unordered grid with nothing to follow for.
5. **Pick one door.** Either the channel (put the link in the caption, not only the bio) or DMs. Only 6 of 312 profile visitors tapped the link.
6. **Decide Reel 11's lesson before copying it.** If you want to test why it shared and followed better, post a version with the same format and subject but no income claim, and compare the share rate.
7. **Run the website test you chose, as a test.** Two Reels on AI-built websites with real numbers, judged by the median share rate in `plan.md` §10.

## 8. Limits

- 11 posts is a small sample; one Reel moves the median, and dates are only known from the Insights top lists.
- Per-Reel Insights are as of 14 October 2026; counts change.
- The "follows" per Reel can overlap (one person who follows after two Reels is counted twice), so 103 is an upper bound on follows from Reels.
- The page is `@oro_platform`, which is not the `@mahdiisaghafi` brand page named in `CONTEXT.md`. If round 1 will be posted from this page, `CONTEXT.md` and the repo should say so.
- No account actions were taken: nothing was liked, followed, saved, commented, boosted or changed on the page.
