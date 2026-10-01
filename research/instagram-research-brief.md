# Instagram Market Research Brief

**For:** a Claude session running on my computer with Claude in Chrome, logged into my Instagram.
**Goal:** Map the Persian tech, AI, money and business niche on Instagram: **what goes viral, why it goes viral, and what these creators sell.** Then turn that into decisions for my page.

Read first for context on my brand:
- `strategy/brand-interview.md` (who I am, audience, voice, what I won't do)
- `experiments/01-content-territory-test/content-pool.md` (my current post ideas)

Repo: `mahdisaghafii/Personal-Brand-Projects`, branch `claude/practical-hamilton-vicsl6`.

---

## 0. Rules (read before starting)

**Read-only. This is my real account.**
- Do NOT like, follow, comment, save, share, send DMs, or react to anything.
- Do NOT open Stories or Highlights. Viewing them shows my name to the creator.
- On websites: do NOT sign up, enter an email or phone number, start checkout, or buy anything. Just read the page.
- Do NOT join Telegram channels. Read public channels through the web preview at `https://t.me/s/<channel>` only.

**Pace it like a person.**
- Pause a few seconds between page loads. Don't open dozens of tabs at once.
- If Instagram shows any warning ("Try again later", "We restrict certain activity", a login check), **stop immediately** and tell me.
- Work in phases and save progress to files after each one, so the work can resume in a later session.

**Accuracy.**
- Record numbers exactly as shown (e.g. `1.2M`, `۸۵.۳K`). Don't estimate. If a number isn't visible, leave it blank.
- Mark anything you inferred rather than saw with `(inferred)`.
- This is internal research. Don't publish it or quote private individuals.

---

## 1. Phase 1 — Discovery (find ~40 accounts, pick 25–30)

Search these keywords with Instagram search (accounts + Reels results). Note every relevant creator account.

| Area | Keywords |
|---|---|
| AI | هوش مصنوعی · چت جی پی تی · ابزار هوش مصنوعی · پرامپت نویسی · AI |
| Money | کسب درآمد · درآمد دلاری · درآمد اینترنتی · کسب درآمد با هوش مصنوعی · درآمد ارزی |
| Freelance / remote | فریلنسری · دورکاری · کار ریموت · کار با شرکت خارجی · مهاجرت کاری |
| Tech careers | برنامه نویسی · یادگیری برنامه نویسی · ورود به بازار کار · رزومه نویسی · مدیر محصول · دیتا آنالیز |
| Automation / building | اتوماسیون · n8n · نوکد · ربات تلگرام · وایب کدینگ · ساخت اپ با هوش مصنوعی |
| Business | کسب و کار اینترنتی · فروش در اینستاگرام · افزایش فروش · دیجیتال مارکتینگ · استارتاپ · کارآفرینی · مدیریت کسب و کار |
| Self-learning | خودآموزی · مهارت آموزی · بهره وری |

Also: follow "Suggested for you" and similar-account links from the strongest accounts you find. Start with `p0ryar`, `farid.hasheminezhad`, `doostansalam`, `ali_balighi`.

**Pick 25–30 accounts** across three size tiers:
- **Big** (100K+): about 8–10. Shows what scale looks like.
- **Mid** (10K–100K): about 10. Shows what's working now.
- **Small but rising** (under 10K with at least one Reel far above its follower count): about 8–10. **The most useful tier.** It shows what can go viral without an existing audience.

Cover all areas in the table, not just AI.

**Global benchmark:** also pick **8–10 English-language creators** in AI tools, automation, building in public, and business systems who regularly hit high views. Use these for format and hook ideas only.

**Save:** `research/2026-10-instagram/accounts.csv`

```
handle,tier,language,area,followers,posts,bio_summary,bio_link,posting_frequency,content_mix,face_on_camera,notes
```

---

## 2. Phase 2 — Account deep-dive (performance baseline)

For each account, open the **Reels tab**. View counts are shown on thumbnails. Scroll to cover the **latest ~30 Reels**.

Record for each account:
- **Median views** of the latest ~30 Reels (the account's "normal").
- **Top 5 Reels by views**, with links.
- **Outliers:** any Reel with **3× or more the account's median**. These are the account's viral posts.
- Pinned posts: what they chose to pin (usually their best or sales posts).

**Viral definition:** a Reel counts as viral if views are **≥ 3× the account's median** AND **≥ the account's follower count**. This measures performance relative to the account, so small accounts' hits count too.

**Save:** add `median_views`, `top_reel_views`, `outlier_count` columns to `accounts.csv`.

---

## 3. Phase 3 — Viral Reel breakdown (target: 100+ Reels)

Open each viral/outlier Reel (and the top 3 of every account, even below the viral bar). For each one, record:

| Field | What to capture |
|---|---|
| link, handle, views, likes, comments | as shown |
| date | approximate is fine |
| length | seconds |
| topic | one line |
| **hook_text** | the first spoken line or on-screen text, in the original Persian |
| **hook_visual** | what's on screen in the first 1–2 seconds |
| hook_type | question / bold claim / contrarian / number or result / story / "secret" / pain point / demo-first / other |
| format | talking head · screen recording · green screen · text over b-roll · skit · interview · carousel · other |
| structure | e.g. hook → 3 tips → CTA |
| emotion | curiosity / fear of missing out / hope / anger / humor / surprise / usefulness |
| **why_shared** | your best read on why people sent it to a friend (useful, relatable, controversial, identity…) |
| **cta** | what it asks for: "comment X", follow, link in bio, DM, Telegram, nothing |
| keyword_cta | if "comment [word] and I'll send…", the word and what's sent |
| sells_something | yes/no — is the Reel itself promoting an offer? |
| claims | any income or result claims, quoted exactly |
| **top_comments_themes** | read the top ~20 comments: what people ask, complain about, doubt, request |
| caption_notes | caption length and style, hashtags used |

**Save:** `research/2026-10-instagram/viral_reels.csv`

---

## 4. Phase 4 — What they sell (monetization map)

For **every** account, follow the money:

1. **Bio and bio link.** Open the link (Linktree, website, Telegram, landing page). Read only.
2. **Pinned posts and Highlights titles** (titles only, don't open Highlights). Titles like "دوره" (course), "نظرات" (reviews) or "مشاوره" (consulting) reveal offers.
3. **Captions and Reels** that promote something.
4. **Telegram channel** (public web preview only): what's posted, how often they sell, prices mentioned.
5. **Course platforms and websites:** what the product is, price, length, format, guarantees, testimonials, discount/urgency tactics.

Record per offer:

```
handle,offer_name,offer_type,price_toman,price_usd,format,delivery_platform,funnel,claims,proof_shown,urgency_tactics,notes
```

- **offer_type:** course · workshop/webinar · coaching/mentoring · consulting/service · agency work · template/digital product · paid community/Telegram · membership · SaaS/tool · affiliate · sponsored posts/ads · physical product · other
- **funnel:** the path from Reel to purchase, e.g. `Reel → comment keyword → automated DM → Telegram → free webinar → course`
- **claims:** quote income or result promises exactly
- **proof_shown:** testimonials, screenshots of income, student results, none

**Save:** `research/2026-10-instagram/offers.csv`

---

## 5. Phase 5 — Audience demand

From the comments you read in Phase 3 (and comment sections of 10–15 more high-comment posts), collect what the audience actually wants:

- Repeated **questions** ("how do I start…", "does this work in Iran…")
- **Pain points and objections** (payment problems, internet issues, "I tried and failed", "too expensive")
- **Distrust signals** ("scam", "it's just selling courses", "this doesn't work")
- **Requests** ("make a video about…")

Group them into themes and count roughly how often each appears.

**Save:** `research/2026-10-instagram/audience_demand.md`

---

## 6. Phase 6 — Synthesis report

Write `research/2026-10-instagram/report.md` with these sections:

1. **Executive summary.** The 10 most important findings, in plain language.
2. **What goes viral.**
   - Topics ranked by viral frequency and median outlier size
   - Hook patterns that work, with 3 real examples each (Persian + English translation)
   - Formats and lengths that win
   - What small accounts did to go viral
   - What gets shared (DM sends) vs. what gets saved vs. what gets comments
3. **What they sell.**
   - Offer types ranked by how common they are
   - Price ranges by offer type (toman and approx. USD)
   - The most common funnels, step by step
   - Which offers look like they actually sell (proof, repeated launches, sold-out notices) vs. which look stagnant
   - Hype and honesty: how common are income claims and "get rich" framing? What does the audience say about it?
4. **Audience demand.** The top pain points and questions, and which are under-served.
5. **The gap for me.** Based on my brand (practical, anti-hype, builder, product/data/automation experience): which viral patterns I can use honestly, which I should avoid, and what space nobody owns.
6. **Recommendations.**
   - Re-rank my content pool: top 15 posts with reasons
   - 10 new post ideas based on what you found
   - 20 hook templates in Persian adapted to my voice (no hype, no fake claims)
   - The format and length to start with
   - Monetization: which offer type and price range fits my brand and the first product idea worth testing, plus the funnel I should build from day one
7. **Risks.** Saturated topics, trust problems in the niche, platform risks (blocking, shutdowns).
8. **Method and limits.** What was sampled, what couldn't be seen, how the feed being personalized to my account may bias things.

---

## 7. Saving and handing back

- Commit the files in `research/2026-10-instagram/` to branch `claude/practical-hamilton-vicsl6` and push, after each phase if possible.
- If you can't push, save the files locally and tell me where they are.
- At the end, give me a short summary in chat: the 10 key findings, top 5 recommended posts, and the recommended first offer.
