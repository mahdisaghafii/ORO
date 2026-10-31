# ChatGPT handoff: Persian copy for the live portfolio

Paste everything inside the block below into a new ChatGPT chat. When it returns the final table, paste the table back to Claude, and Claude will put it into `showcase.html`.

````
You are writing the Persian copy for my personal portfolio web page. Interview me first, then write. Don't draft anything until I've answered your questions.

## Who I am
Mahdi Saghafi, a product manager from Mashhad with 7+ years of experience. I run an Instagram page called ORO (@oro_platform) about practical technology for ambitious Iranians: finding opportunities, understanding technology, building things. This page is "the person behind ORO".

## What the page is
A phone-first, single-scroll web page. A 3D phone floats on a dark background and flips to show one product per section, with real screen recordings of that product playing on it. Text sits beside the phone on desktop and under it on mobile. The link goes in the ORO Instagram bio and gets shared in DMs.

**Its one job is trust.** A visitor should leave thinking: "he actually builds real things." It isn't a sales page, a CV or a hire-me page.

## Audience
ORO followers: mostly Iranians aged 18–27 (students, early-career) plus some small business owners. They're tired of hype, fake income claims and "comment X for the link" tricks. They trust specifics and honesty, and smell self-promotion instantly.

## Voice
- Like a capable friend showing you what he made: calm, direct, specific, a little understated. "I built this; here's what it does." Never "the best", "revolutionary", "you won't believe".
- Natural, idiomatic Persian written by a native speaker, not translated from English. No bureaucratic or ornate phrasing, no forced poetry, no motivational lines.
- Register: decide with me (see question 1). The current drafts are conversational («اینا رو از صفر ساختم»); I'm not happy with them.
- Correct half-spaces (نیم‌فاصله) and orthography, Persian digits, and one consistent register across the page.
- Keep product names in English where that's how they're known (Chain of Legends, Arena Battle, Treasure Island, Matrix, Eima, Shaparo, ORO-Accountant, n8n). Qeleq is «قلق», Chid is «چید».

## Hard rules
1. Use ONLY the facts below. Never invent a number, a result, a client, a feeling or a story. If a slot needs a fact you don't have, ask me. If I don't have one, leave `[fill in: ...]` in its place.
2. No money figures of any kind (no dollars, trading volume, token sale, profit, income). User and product numbers only.
3. For Qeleq (copy-trading): describe the system I designed, never returns. Nothing that sounds like investment advice or a profit promise.
4. For Chain of Legends (Web3 game): no token, price or crypto-investment talk. Present it as a game and a team I built.
5. Don't overclaim my role. I'm a product manager and de facto tech lead, not the engineer who wrote all the code. "I built the team", "I designed the architecture", "I led the product" are fine where the facts below support them.
6. Respect the length limits; this is mobile UI copy.

## Facts you may use (from my résumé)
**Chain of Legends** (Web3 play-to-earn game; I was there Dec 2021 to Mar 2025: product manager assistant, then product manager)
- Built the company's engineering team and product/technical management processes from scratch; it was the company's first structured tech organization.
- Grew the platform to 300,000+ users across 10+ countries, with regional marketing systems and community programs per market.
- Built a partner network of 500+ companies and influencers over two years.
- Led development of in-house marketing automation, Arena Battle, an in-game token revenue system and the Treasure Island feature line; organized global tournaments with 2,000+ participants each.
- The product passed an independent smart-contract security audit and got third-party press coverage (AP News, Seeking Alpha, Benzinga, Morningstar).
- Redesigned Agile/Scrum for a fully remote team across time zones.
- How it's played (from the game's site): a fantasy strategy game in the browser. You build a realm, mine stone and iron, develop your village, and collect heroes and troops; then fight in dungeons and adventures, sail to Treasure Islands for rare items, and battle other players with friends in Arena Battle; guilds and a marketplace let players share and trade. [confirm: whether Arena Battle is turn by turn and live, and whether Treasure Island is PvE or PvP]
- Careful: the press coverage may have been a press release carried by those outlets. If so, say "featured in", not "covered by". Call the token revenue system "the in-game economy", or leave it out.

**Qeleq / قلق** (algorithmic copy-trading platform at Pargar, a technology accelerator in Mashhad; Feb 2025 to now; subtitle in the product: «دستیار هوشمند بازارهای مالی»)
- Architected it end to end: the copy-trade engine, order-lifecycle reconciliation, and a JSON-based configuration schema for trading strategies.
- First copy-trading integration with the broker [fill in: exact broker name and spelling] in Iran, plus a Forex broker integration.
- 2,500 registered users, 1,200 active subscribers; infrastructure built for 10,000+ concurrent copy-trade users.
- Risk controls and data safeguards to protect users' funds and personal data across brokers; a backtest and strategy-scoring pipeline to validate strategies before they go live.
- At Pargar I built an 8-person cross-functional team from zero and own four products at once.
- Plain-language explanation: Qeleq links your own brokerage account to a trading strategy, so when the strategy opens or closes a trade, the same trade is placed in your account automatically; each trade gets a stop loss and a size based on how much you're willing to risk.
- What to highlight, in this order: (1) no strategy goes live without passing the backtest and scoring pipeline; (2) the reconciliation and risk safeguards that keep orders correct across brokers and protect users' money and data; (3) the first integration with that broker in Iran, chosen after evaluating global options (MetaAPI/CopyFactory, cTrader Open API). Don't use indicator names (ADX, RSI, Heikin Ashi). "10,000+ concurrent" is designed capacity, not usage, so label it that way or drop it.
- [confirm: that "first in Iran" holds up as worded]

**Chid / چید** (chidstudio.ir; an AI interior and architecture design product for Iran; the repo is named "Chidar AI", so they are the same product)
- Live on chidstudio.ir since 10 Sep 2026, with real online payments (Zarinpal) since 17 Sep 2026.
- What a customer can do today: get an instant price quote; sign a contract and buy the first design step online; upload photos of their own space, write a short note and pick a mood, material and colour tone; get AI designs of their actual room; ask for more versions, edit a chosen design, and lock the one they like. A free trial through a code; a public gallery of designs.
- A human checks every AI design: on paid projects, staff review each first design (the request and the result) before the customer sees it, with a 48-hour promise for the first design.
- A paid consultation: a call with an architect who has studied the customer's photos and measurements.
- A Telegram bot that takes Instagram visitors through a home-type quiz or a quick "home check", sells the consultation, and hands them to support.
- Not fully live yet: phases 2–3 (a licensed partner engineer turns the locked AI design into stamped, buildable drawings; the booking and payment screens exist, the work is done by people) [confirm: being delivered to real customers yet?]; an adaptive AI interview (designed, paused).
- My role: I built the product end to end. I wrote the product requirements, build spec, user flow, policies, pricing model and 9 architecture decision records; designed the user journey (quote, contract, buying design steps directly, the AI design loop, the human phases), the AI workflow (turning answers into a prompt, generation, automatic retry, two-stage human review) and the consultation offer. I'm the only author of its 562 commits (30 Jun to 24 Oct 2026). [confirm: built "with AI coding agents I supervise"? did anyone else write code? who does the design review and who are the partner architects?]
- Built for Iran: Iranian hosting, Iranian payments and SMS login, Persian-first, phone-first.
- No usage numbers yet. [fill in: a real number from the analytics dashboard, e.g. paid projects or designs delivered, or none]
- This may be the strongest ORO story on the page: one product person, with AI coding agents, built and shipped a paid AI product in about four months. Use that only if it's true as worded.
- Never mention the AI provider or model names, server details or spending limits.

**Smaller things I built** (one line each)
- Matrix: trading-simulation game used as the way into Qeleq and the Academy; 8,000 of its 10,000 users became customers.
- Eima: grew to 160,000 monthly users and 1,000 paying daily active users; I decided to shut it down after sanctions and internet blackouts made it unviable, choosing a controlled wind-down over letting it degrade.
- A Telegram AI image-generation bot: credit system, multi-model routing, image editing, free-credit onboarding.
- Team automation with n8n and Node-RED: a Telegram-to-Trello task pipeline that cut coordination overhead.
- Shaparo (2020–2021, co-founder): no-code website builder with 1,000+ active customers; I chose to exit the market and move customers to a competitor.
- ORO-Accountant: being built now; a Telegram/Bale bookkeeping bot for small Iranian businesses that turns a bank SMS, receipt photo or voice note into a categorized transaction.

## Text slots to write
Current drafts are shown so you can see the intent. Rewrite them freely.

| id | what it is | limit | current draft |
|---|---|---|---|
| meta.title | link preview title (Instagram/Telegram) | 40 chars | — |
| meta.desc | link preview description | 110 chars | — |
| intro.eyebrow | small line above the headline | 30 | مهدی ثقفی · پشت ORO |
| intro.h1 | first thing anyone reads; must make them keep scrolling | 30 | اینا رو از صفر ساختم. |
| intro.lede | one sentence under it | 90 | سه محصول اصلی، همون‌طور که واقعاً کار می‌کنن. حرف نه، خودِ محصول. |
| intro.hint | tells them to scroll and that they can turn the phone with a finger | 40 | اسکرول کن · گوشی رو با انگشت بچرخون |
| col.eyebrow | category and years | 30 | بازی Web3 · ۲۰۲۱ تا ۲۰۲۵ |
| col.stat1 / stat2 / stat3 | labels under 300,000+ / 10+ / 2,000+ | 22 each | کاربر / کشور / بازیکن در هر تورنمنت |
| col.role | what *I* did, specific, 1–2 sentences | 200 | تیم فنی شرکت رو از صفر ساختم و محصول رو تا ۳۰۰ هزار کاربر بردم: Arena Battle، Treasure Island و سیستم بازاریابی خودکار. قرارداد هوشمندش ممیزی امنیتی مستقل رو پاس کرد. |
| qeleq.eyebrow | category and years | 30 | پلتفرم کپی‌ترید · از ۲۰۲۵ |
| qeleq.stat1 / stat2 / stat3 | labels under 2,500 / 1,200 / 10,000+ | 22 each | کاربر ثبت‌نامی / مشترک فعال / کاربر هم‌زمان، ظرفیت زیرساخت |
| qeleq.role | what I did, 1–2 sentences, systems not profit | 200 | موتور کپی‌ترید، تطبیق سفارش‌ها بین کارگزارها و کنترل ریسک رو از صفر طراحی کردم. بدون جعبه‌ی سیاه و بدون وعده‌ی سود. |
| chid.eyebrow | category | 30 | طراحی داخلی با AI · chidstudio.ir |
| chid.stat1 / stat2 / stat3 | three short facts (no invented numbers; a real usage number only if I give one) | 22 each | طراحی AI روی عکس خونه‌ی خودت / بازبینی انسانی هر طراحی / پرداخت آنلاین واقعی |
| chid.role | what Chid does + my role (built it end to end) | 200 | خونه رو قبل از ساختن ببین… [rewrite from the Chid facts] |
| also.eyebrow | small label | 20 | کوچیک‌ترها |
| also.h2 | heading for the smaller projects | 30 | اینا هم ساخته شد. |
| also.matrix / eima / imagebot / automation / shaparo / accountant | one line each | 55 each | (see facts) |
| end.h2 | closing line, me speaking | 25 | من مهدی‌ام. |
| end.lede | one sentence linking this page to ORO | 100 | هر چی می‌سازم و تست می‌کنم رو با نتیجه‌ی واقعی توی ORO نشون می‌دم. |
| end.cta1 | button to Instagram | 22 | ORO در اینستاگرام |
| end.cta2 | button to Telegram channel | 22 | کانال تلگرام |

## How to work with me
1. **First, ask me your questions in one numbered list**, each with your recommended answer. At minimum:
   (1) the register: conversational written Persian (محاوره‌ی نوشتاری) or clean standard Persian, with one sample hero line in each so I can feel the difference;
   (2) the [confirm] and [fill in] items in the facts, one by one;
   (3) the Qeleq broker name;
   (4) anything in the facts that sounds like an overclaim to a skeptical 22-year-old.
2. Then give me **three genuinely different options for intro.h1 + intro.lede** (for example: plain-factual, quietly confident, curiosity) and recommend one with a one-line reason.
3. After I pick, write **all slots** in one Markdown table with columns `id | Persian text | chars`, in the exact ids above, with no commentary inside the table.
4. Finally, list any claim you weren't sure about so I can check it.
````
