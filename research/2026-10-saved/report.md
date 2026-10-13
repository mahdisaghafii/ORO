# Research on the saved posts: what the posts you collected have in common

October 2026. Read-only research from the `@oro_platform` account, 13 October 2026. The dataset is the 21 posts saved on that account (`/saved/all-posts/`), from 20 creators.

**Data files:** `saved_posts.csv` (21 posts as shown), `viral_reels.csv` (the same posts scored against each creator's baseline, with hook type, emotion and CTA), `accounts.csv` (20 creators), `offers.csv` (20 rows), `audience_demand.md`, `brief.md` (the agreed scope). The earlier round is in `../2026-10-instagram/`.

**How to read the numbers.** Views are the counts on each creator's Reels grid on 13 October 2026. "×median" is a post's views divided by the median of that creator's visible non-pinned Reels (8 to 18 per account, not the ~30 the brief asked for, because the grid loads about 18 at a time). **Viral** follows the brief: views ≥ 3× the median and ≥ the follower count. Views were found for 12 of the 21 saved posts; the other 9 were not on the sampled part of the grid (older, or not Reels), so they are marked unknown and not guessed.

---

## 1. Executive summary: 10 findings

1. **Your saves lean to one topic: AI-built websites, design and motion.** 12 of 21 posts are about building sites, UI or motion graphics with Claude and similar tools. Only 3 are about business automation or lead generation, 2 about careers, 2 about SEO or Instagram selling, 1 about AI mindset and 1 is a computer-vision demo. ORO's current menu is mostly automation, business systems and career. The owner has since confirmed website and design is not the field, but is worth a test (see section 5).
2. **The saves are mostly breakouts, not average posts.** Of the 12 posts with known views, 9 meet the viral definition. Their multiples run from 6.7× to 116.5×, median 14.2×. Three do not: post 1 (143K views, 2.3× the median, below the 193K followers), post 10 (3.3× but 34.1K is below 83K followers) and post 13 (2.2×).
3. **Small accounts are the most useful ones.** All 6 saves from accounts under 10K followers that have known views are viral: cog._mind 156K on 6.8K followers (56× median), zeyneb.ux 132K on 1.4K, cevox__ 60.6K on 2.7K, aiarenalab 918K on 3.6K (116×), diyano.agency 12.9K on 3.9K, jainsta_com 7.4K on 1.2K. Each of these accounts has one or two hits against a low normal, so a single hit is luck-prone, not a method.
4. **The keyword gate is almost universal.** 14 of 21 captions say "comment WORD". It fills comment counts (posts 1, 2, 3, 5, 6, 13, 16, 17 have more comments than likes) and says little about interest. One commenter writes that the prompt never arrived. This matches the earlier round (59 of 96).
5. **Four hook shapes carry the saves:** demo-first (a striking visual), contrarian reframe, a number or versus test, and a pain-point question. Details in section 2.2.
6. **Showing real numbers pays.** Post 20 (cost per model, $15.21 vs $18.03) is the biggest hit in the set. Post 7 (build time 15 minutes, 6% of the 5-hour token use) got the most-liked real comment: thanks for not calling it free.
7. **For Iranians the real question is access and cost.** On the one Persian tool tutorial that states usage, 3 of the 4 real questions are about getting and paying for the Pro account, IP and ban risk. No saved creator answers them.
8. **There is fatigue with generic AI output.** Posts 8 and 11 draw "fake code", "they all look the same", "new AI slop". Post 10 turns that complaint into its hook.
9. **Most creators here sell services, not products.** 13 of the 20 offer rows are consulting, agency or freelance work. Prices seen: plugins 276,000 to 432,000 toman one-off (toroobche.ir), a storefront SaaS at 899,000 toman per month after 14 free days (jainsta.ir), AI agents from 2.9M to 5.8M toman (xflow.ir). Course prices were not seen in this set.
10. **Nobody in the saves owns the honest builder with Iran feasibility.** The closest is post 7, and it still leaves the access questions unanswered.

---

## 2. What goes viral

### 2.1 Topics

| Topic | Saved posts | Known views and ×median | Read |
|---|---|---|---|
| AI-built websites, UI, 3D, motion | 1, 6, 7, 10, 11, 13, 14, 15, 16, 18, 20, 21 | 7: 75.3K (9.4×); 11: 60.6K (18×); 18: 104K (12.6×); 21: 132K (40×); 20: 918K (116×); 16: 12.9K (7.9×); 1: 143K (2.3×); 10: 34.1K (3.3×); 13: 14.8K (2.2×) | The biggest cluster, and the widest range. Demos win when they look striking or come with a number |
| Business automation and agents | 9, 12, 17 | 9: 156K (56×) | Post 9 is a concrete build (Telegram, Gemini, Google Sheets) on a tiny account |
| Career and CV | 2, 5 | 2: 272K (14.2×) | Income and emigration framing; the 272K post is that account's top non-pinned Reel |
| SEO and Instagram selling | 3, 19 | 19: 7.4K (6.7×) | Pain-point question about stock questions |
| AI mindset | 4 | not in sampled grid | 12.4K likes, highest likes-to-comments ratio in the set |
| Computer-vision demo | 8 | not in sampled grid | Comments call the code fake |

### 2.2 Hook patterns (examples from the saves)

**A. Demo-first.** The first frame is the result (a 3D coffee site, a plush-octopus simulation, a motion piece). Posts 8, 13, 14, 15, 18, 21. Works for views; trust comments are weak.

**B. Contrarian reframe.** «خیلی‌ها فکر می‌کنن Claude Code نمی‌تونه طراحی حرفه‌ای انجام بده» ("Many think Claude Code can't do professional design"): madadi_ai, post 6, 8.5K likes. "Claude isn't bad at design. It just has nothing to copy": jackroberts___, 34.1K views. «اگه فکر می‌کنی ساخت موشن گرافی نیاز به تخصص حرفه‌ای داره» ("If you think motion graphics needs a pro"): toroobche.ir, 75.3K.

**C. Number or versus test.** "30 buyers. 723 ads.": sahni.ai, 1.9K likes. "Opus $15.21, Sol $18.03": aiarenalab, 918K.

**D. Pain-point question or situation.** «روزی چند بار به «موجوده؟» جواب میدی؟» ("How many times a day do you answer 'is it available?'"): jainsta_com, 7.4K views on a 1.2K account. "Your next 10 property leads will come in while you're showing a house": cog._mind, 156K.

**E. Three-word bold claim.** "Motion Designing is cooked": cevox__, 60.6K, and a comment section arguing about AI slop.

### 2.3 Formats and lengths

- Length and visual hook were **not measured** in this round: I did not watch the videos. Keep the earlier finding (a median of 45 seconds among opened Reels) and test it yourself.
- Format from captions and thumbnails: most saved posts are screen or result demos, several with a talking head. Hooks are captured from captions and text only; `hook_visual` is blank.

### 2.4 What small accounts did

- **cog._mind** (12 posts, 6.8K followers): one real system for one buyer (real-estate agents), four steps listed, "DM AGENT". Two Reels over 150K.
- **aiarenalab** (3.6K): "same prompt, every model, one winner", a new test every day, cost shown. Pinned Reels at 3M and 1.3M; its normal is 7.9K.
- **zeyneb.ux** (9 posts, 1.4K): a polished design process video, 132K.
- **cevox__** (2.7K): a three-word provocation, 60.6K; its other Reels sit near 3K.
- **jainsta_com** (1.2K): a pain-point question plus an openly stated price.

The thread: one concrete thing, one specific viewer, and often a number. Several outcomes look like single lucky hits (cevox__ also has a 370K Reel against a 3.4K median).

### 2.5 Shared, saved or commented

Inferred from likes, comments and CTA (reposts shown are the third counter, labelled inferred):
- **Comments:** every keyword-gated post.
- **Likes without comments:** post 4 (12.4K likes, 2.5K comments) and 20 (14.1K likes). Post 4 has no keyword in its caption; post 20 pairs a keyword with an opinion poll.
- **Shares:** only post 3 and post 16 ask explicitly to send it to a friend. Their share counts (reposts 18 and 16) are low, so the CTA alone does not prove shares.

---

## 3. What they sell

### 3.1 Offer types (20 rows; a row can carry two types)

| Offer type | Rows | Examples |
|---|---|---|
| Consulting, agency or freelance service | 13 | amirhossein_web (X Flow agents), toroobche.ir, cog._mind, designby.abhay, cevox__ |
| Course or training (not priced in view) | 4 | hooshyar.school, madadi_ai, amir.razavi.90, hassan__khosrojerdi |
| SaaS or tool | 1 | jainsta_com |
| Digital product | 1 | toroobche.ir plugins |
| Sponsored posts | 3 | aiarenalab, jackroberts___, tessa.fairbrook |

### 3.2 Prices seen (toman; USD not converted because no rate was shown)

| Offer | Price |
|---|---|
| WooCommerce plugins (toroobche.ir) | 276,000 to 432,000 on sale, listed at 690,000 |
| Storefront SaaS (jainsta.ir) | 899,000 per month after 14 free days, no commission |
| AI agents (xflow.ir) | from 2.9M (SEO), 3.2M (Support), 3.5M (Content), 4.2M (Sales), 5.8M (Voice RAG, beta) |
| Courses and consulting from this set | not visible |

### 3.3 Funnels

1. **Reel → comment WORD → free asset by DM → bio link → paid service or course.** The most common (amirhossein_web, madadi_ai, toroobche.ir, sahni.ai).
2. **Reel → DM me or link in bio → service.** Agencies and freelancers (designby.abhay, webmotion_studio, cevox__, jainsta_com).
3. **Reel → free tool link → affiliate or sponsorship (inferred).** jackroberts___, diyano.agency.

### 3.4 Which offers look real

- **Look established:** xflow.ir lists three named testimonials; jainsta.ir shows three live stores.
- **Look weak or unproven:** toroobche.ir claims "98% satisfaction, 100+ projects" without sources; most others show no proof.

### 3.5 Hype and honesty

Income claims are rare in this set. The pattern is "comment for the free thing". Honest details (time, cost, price) are rare and draw praise or questions. Two sites state prices openly (jainsta.ir, toroobche.ir plugins); most services do not.

---

## 4. Audience demand (full details in `audience_demand.md`)

- The gate dominates comments; real questions are mostly "how", then "how much and can I get it in Iran".
- Distrust is aimed at the demo ("fake code", "AI slop") and at the funnel ("never shared the prompt").
- Under-served: Iran feasibility stated in the post, full steps in the caption, a mobile or small-business version of the AI-built website demo.

---

## 5. The gap for you

**Settled (13 Oct 2026, from the owner).** Website and design is not the field, but it is worth a test. So treat the website cluster as a test bet, not a new territory: run one or two posts from it (ideas 1, 2 and 6 in section 6.2) and judge them by the same median share-rate rule as the rest of round 1 (`plan.md` §10). The top-15 ranking in 6.1 still puts automation and business systems first.

**Patterns you can use honestly**
- A real build with time and cost shown (posts 7, 20).
- A pain-point question for a small owner (post 19).
- A concrete automation with a named outcome (post 9). This validates menu post 10 (lead qualification).
- A contrarian reframe tied to a test you actually ran (posts 6, 10).

**Patterns to avoid**
- Keyword gating with a delivery you cannot guarantee.
- Demos with no result you really got (comments call them fake).
- Anything that shows how to get around account verification or a ban. Commenters ask for exactly this on post 7. Answer with what is free and what works, not with workarounds.
- Generic "AI-built site" showcases with no number: the slop backlash targets these.

**The space nobody owns.** A build with time, cost, what broke and Iran feasibility, with full steps in the caption.

---

## 6. Recommendations

### 6.1 Re-ranked top 15 (IDs from `content-pool.md`; changes versus the earlier ranking noted)

| Rank | ID | Post | Why, from the saves |
|---|---|---|---|
| 1 | H4-1 | Lead-qualification machine (n8n, AI, Telegram, Sheets) | Same system as post 9: 156K views on a 6.8K account, 56× median. Stays at the top |
| 2 | H4-9 ↑ | Expensive model vs free model on the same real task | Post 20, the biggest hit, is exactly a model versus model test with cost shown |
| 3 | H4-6 ↑ | I built `[a real tool]` with AI: honest result | The AI-building topic is the largest cluster, and honest numbers drew praise (post 7) |
| 4 | H4-16 ↑ | AI employee vs AI tool, one example | Same reframe family as posts 6 and 10, tied to a real build |
| 5 | H4-7 | Run AI on your laptop with no internet | Answers the access question that dominates post 7's comments |
| 6 | H4-10 | Invoices to one spreadsheet | Money-saving demo with a real task; unchanged |
| 7 | H5-6 | If Instagram disappeared tomorrow | Owner pain; jainsta_com shows pain-point questions work on small accounts |
| 8 | H3-6 | "Build and sell AI agents": is it real? | xflow.ir shows what agents cost (2.9M to 5.8M toman); fits the contrarian slot |
| 9 | H4-15 | Free or paid? Works in Iran? 10 tools checked | Directly answers the access gap. Moved up |
| 10 | H4-2 | A useful Telegram bot in under an hour | Concrete build, like post 9 |
| 11 | H5-11 | What an AI support agent can and can't do for a shop | A support agent is a priced product (from 3.2M toman); give the honest limits |
| 12 | H3-7 ↑ | Vibe coding: can a non-developer really build and sell an app? | The saves are mostly AI-built sites; slop fatigue makes an honest test timely |
| 13 | H1-6 | Skills I'd learn first from zero | Career format performed (post 2: 272K) |
| 14 | H3-8 | Remote work for foreign companies, honestly | Post 2's income and emigration framing shows demand; honest version stays |
| 15 | H5-9 | Pricing at 70%+ inflation | Owner pain; prices are visible only on 2 sites here, so openness is a gap |

### 6.2 Ten new post ideas from the saves

1. **I built a website with Claude in `[time]`. What it used and what the Pro account costs in Iran.** Facts only, no workarounds. (Post 7 pattern; answers its comments.)
2. **Why AI-built sites look the same, and the two inputs I changed.** Run the test yourself with and without a reference screenshot (post 10 idea, your own result).
3. **Model against model on a real Persian task, with cost.** (Post 20 pattern.)
4. **I built the Telegram lead agent for a shop, and here is the sheet it fills.** (Post 9 pattern; menu 10.)
5. **Is AI-made motion graphics ready for client work? What a client would reject.** (Post 11 debate.)
6. **A mobile version of an AI-built site: what Claude got wrong.** (Post 21 comment: "show mobile".)
7. **The technical SEO fixes for a Persian shop, and what they do not fix.** (Post 3, with the expert comment's correction built in.)
8. **I priced three small business tools at what Iranians actually pay: plugin, monthly tool, agent.** Use prices from `offers.csv`; no invented numbers.
9. **Which AI tool demos are fake? How I check a demo before I believe it.** (Post 8's "fake code" comments.)
10. **You asked how: the steps for `[post that drew how-to comments]`, no keyword.** (Posts 2, 11, 19, 21 comments.)

### 6.3 Twenty hook templates in Persian (no hype, no income claims)

`[ ]` marks a detail that must come from something you really did. If it did not happen, cut the line.

1. «این رو خودم تست کردم. نتیجه با چیزی که فکر می‌کردم فرق داشت.» (I tested this. The result was different from what I thought.)
2. «[ابزار] رو ساختم. [مدت] طول کشید، [هزینه] خرج داشت، و این‌جا خراب شد.» (I built [tool]. It took [time], cost [cost], and this broke.)
3. «قبل از اینکه برای [ابزار] پول بدی: تو ایران کار می‌کنه؟ رایگانه؟ کارت خارجی می‌خواد؟ جواب هر سه‌تاش این‌جاست.» (Before you pay for [tool]: does it work in Iran, is it free, does it need a foreign card?)
4. «هوش مصنوعی طراحی‌ات رو شبیه بقیه می‌کنه چون ورودی‌ات شبیه بقیه‌ست. من دو چیز رو عوض کردم.» (AI makes your design look like everyone's because your input looks like everyone's. I changed two things.)
5. «به‌جای اینکه هر روز با هوش مصنوعی چت کنی، یه کار تکراری رو یک‌بار بهش بسپار. نتیجه‌اش این شد.» (Instead of chatting every day, hand it one repeated job once. Here is the result.)
6. «[عدد] تا [چیز] رو امتحان کردم. فقط [عدد] تاش به درد خورد.» ([N] things tried, only [M] worked.)
7. «چند ساعت از روزت صرف جواب دادن به پیام‌های تکراری مشتری می‌شه؟ من برای [فروشگاه] خودکارش کردم.» (How many hours go to repeated customer messages? I automated it for [shop].)
8. «[مدل گران] یا [مدل رایگان]؟ یه کار واقعی دادم به هر دو و هزینه و نتیجه رو کنار هم می‌ذارم.» ([Expensive model] or [free model]? One real task, both, cost and result side by side.)
9. «هوش مصنوعی این کار رو خوب انجام می‌ده و اون یکی رو نه. با مثال نشونت می‌دم.» (It does this job well and that one not. I'll show with an example.)
10. «یه اشتباه تو محصول [هزینه] برامون خرج داشت: [اشتباه].» (A product mistake cost us [cost]: [mistake]. Needs your true story.)
11. «چرا سایت‌هایی که هوش مصنوعی می‌سازه شبیه هم می‌شن؟ با یه تغییر نتیجه فرق کرد.» (Why do AI-built sites look alike? One change made a difference.)
12. «اینو برای دوستی بفرست که هنوز [کار تکراری] رو دستی انجام می‌ده.» (Send this to a friend who still does [repeated job] by hand.)
13. «بدون VPN و بدون کارت خارجی: [ابزار] رو این‌جوری راه انداختم.» (No VPN, no foreign card: how I set up [tool]. Only if true.)
14. «ساختنش [مدت] طول کشید و [درصد] از سقف مصرفم رو برد. همه‌ی مراحل پایین همین پسته.» (Building it took [time] and used [percent] of my limit. All steps are in the caption.)
15. «اگه ۲۰ سالم بود و پول و تجربه نداشتم، اول این چند کار رو می‌کردم.» (If I were 20 with no money or experience, I'd start with these.)
16. «همه می‌گن [ادعا]. یه هفته امتحانش کردم که ببینم درسته یا نه.» (Everyone says [claim]. I tried it for a week to see.)
17. «چهار مرحله، بدون کد: پیام مشتری می‌رسه، هوش مصنوعی دسته‌بندی می‌کنه، تو شیت ثبت می‌شه، جواب می‌ره.» (Four steps, no code: message arrives, AI sorts it, it lands in a sheet, a reply goes out.)
18. «این روش برای [کسی] جواب می‌ده و برای [کسی] نه. بذار توضیح بدم.» (This works for [who] and not for [who]. Let me explain.)
19. «اگه یه نسخه‌ی آماده‌ی [چیز] می‌خواستی، بنویس «می‌خوام». اگه تعداد کافی شد، می‌سازمش.» (If you'd use a ready-made [thing], comment "I want it". If enough people do, I'll build it.)
20. «تو ایران با [محدودیت]، [کار] ممکنه؟ امتحانش کردم؛ جواب کوتاه: [نتیجه].» (In Iran with [limit], is [task] possible? I tried; short answer: [result].)

### 6.4 Format and length to start with

Keep the earlier plan: a 35 to 60 second Reel, face plus real proof on screen, Persian burned-in subtitles, hook as text in the first frame. This round did not measure length, so treat it as an assumption to check in the tracker.

### 6.5 Monetization and the first thing to test

- The first product idea from the earlier round (a low-price small-business ops kit with the price shown) still stands. The saves add three price points to compare against: plugins 276,000 to 432,000 toman one-off, a monthly tool at 899,000, done-for-you agents from 2.9M. These are observed prices, not a recommendation to pick a number. Decide after the demand test.
- **Funnel from day one:** a Reel with full steps in the caption, then the demand-test line (template 19), then a Telegram or Bale bot that delivers whatever you build. Do not rely on Instagram DMs for delivery: one commenter reports the prompt never came.
- The saves do not show what small owners will pay for a template. That stays untested.

---

## 7. Risks

- **Saturation:** AI-built website demos are everywhere, and the slop backlash is already in the comments.
- **Trust:** hype and fake-looking demos draw "fake code". Funnels that do not deliver draw complaints.
- **Platform:** Instagram is blocked in Iran, VPNs are less reliable, and DM delivery is fragile.
- **Cost and access:** the tools these posts promote may be unreachable or too expensive for the audience; every post needs the feasibility line.
- **Account-sharing and workaround questions:** commenters ask for them. Do not answer with circumvention.

---

## 8. Method and limits

- **Sample:** 21 saved posts from 20 creators, chosen by whoever curated `@oro_platform`. This is a selection of what you valued, not of the whole niche. 11 of 21 are English-language posts, so patterns include non-Iranian audiences.
- **Views:** baselines come from 8 to 18 non-pinned Reels per account on the grid (not ~30), read on 13 October 2026. Pinned Reels (shown with a pin on the grid) are excluded from every median and listed separately in `accounts.csv`. 9 of the 21 saved posts were not on the sampled grid, so their views are unknown. One (tessa.fairbrook) was not a Reel on the Reels tab and has 15 likes, so it was saved for its topic.
- **Counters on a post page:** likes, comments and a third counter (reposts, inferred). Two posts showed only two counters, so which was which was not confirmed.
- **Not done:** I did not watch the videos, so length, hook visuals and structure are from captions and thumbnails. I read only the first screenful of comments. The Telegram web preview for madadi_ai did not load as a feed, so its prices were not seen. No external site was signed up for or purchased from. I read three public sites (jainsta.ir, xflow.ir, toroobche.ir) and one Telegram preview with a plain page fetch.
- **Bias:** the Instagram feed and the saved list are personalised to your account, and the creators who sell web design may have been saved because they sell it.
- **Instagram warnings:** none appeared. One page-script call timed out and a page detached once; I paused and retried.
