# Build Guides

How to build or find everything the posts depend on. Do them in this order. The easy ones come first, and each one is ready before its post date.

| # | What | For post | Post date | Time | Difficulty |
|---|---|---|---|---|---|
| 1 | Offline AI on your laptop | H4-7 | Week 1 Thu | ~1 hour | Easy |
| 2 | Invoice photos → spreadsheet | H4-10 | Week 2 Sat | ~1–2 hours | Easy |
| 3 | Customer sheet | H5-6 (only if people ask) | after the post | ~30 min | Easy |
| 4 | Pricing sheet | H5-9 (only if people ask) | after the post | ~45 min | Easy |
| 5 | AI support test (50 questions) | H5-11 | Week 2 Wed | ~3 hours | Medium |
| 6 | Lead-qualification workflow | H4-1 | Week 2 Tue | ~3–5 hours | Medium |
| 7 | Your own channel | all, later | when you're ready | ~30 min | Easy |

**For every build, write down three things as you go.** The posts need them:
1. **How long** it took (real time, including getting stuck).
2. **What it cost** (free / monthly / per use).
3. **What broke**, and how you fixed it.

Take screenshots and screen recordings while you work. That's your on-screen proof.

**Access note:** I can't check from here what works from Iran on your connection today. Each guide gives an option that needs no foreign card or VPN where one exists. Test it yourself and write the real answer into the post's feasibility line.

---

## 1. Offline AI on your laptop (H4-7)

**Goal:** an AI that answers in Persian with Wi-Fi turned off.

**You need:** a laptop with at least 8 GB RAM (16 GB is better) and about 3–10 GB free disk. Internet **once**, to download.

**Option A — LM Studio (easiest, has a normal app window)**
1. Download LM Studio from `lmstudio.ai` and install it.
2. Open it, go to the search/discover tab, and download a model that fits your RAM:
   - 8 GB RAM: **Qwen3 4B** or **Gemma 3 4B**
   - 16 GB RAM: **Qwen3 8B** or **Gemma 3 12B**
3. Load the model and open the chat.
4. **Turn the Wi-Fi off.** Ask it something in Persian. That's your demo.

**Option B — Ollama (one command per model)**
1. Install Ollama from `ollama.com`.
2. Open a terminal and run one of these (it downloads the first time):
   ```
   ollama run qwen3:4b
   ollama run gemma3:4b
   ```
3. Turn the Wi-Fi off and chat in the terminal.

**What to test for the post** (write down the results):
- A Persian task: "این متن رو در ۳ خط خلاصه کن" with a real paragraph.
- A business task: "یه جواب مودبانه برای مشتری بنویس که سفارشش دیر رسیده."
- Speed: does it feel fast or slow on your laptop?
- Persian quality: honest rating out of 5 compared to an online model.
- Download size and RAM used.

**Expect:** weaker and slower than big online models. That's part of the honest story in the post.

---

## 2. Invoice photos → spreadsheet (H4-10)

**Goal:** turn a pile of invoice photos into one clean table, and find where the AI gets numbers wrong.

**You need:** 10–30 real invoices (printed and some handwritten if possible). Blur or skip any with private customer details.

**Steps**
1. Photograph the invoices: flat, good light, one per photo.
2. Pick a tool that reads images. Try at least one online and one offline:
   - **Online:** ChatGPT, Gemini, or Claude (upload the photos).
   - **Offline:** Gemma 3 (4B or larger) in LM Studio or Ollama can read images. Use the setup from guide 1.
3. Upload 5–10 photos at a time with this prompt:
   ```
   از این عکس‌های فاکتور، یک جدول بساز با این ستون‌ها:
   تاریخ | فروشنده | شرح کالا | تعداد | قیمت واحد | مبلغ کل
   هر ردیف یک قلم کالا باشد. عددها را دقیقاً همان‌طور که در عکس هست بنویس.
   اگر عددی خوانا نیست، به‌جای حدس زدن بنویس «ناخوانا».
   خروجی را به صورت CSV بده.
   ```
4. Paste the CSV into Google Sheets or Excel.
5. **Check it:** add up the total column and compare with each invoice's real total. Mark every wrong number.

**What to record for the post:**
- Number of invoices, and time by hand vs. with AI.
- How many numbers it misread, and what kind (Persian digits, handwriting, blurry photos).
- Printed vs. handwritten accuracy.

**The honest point of the post:** it's fast, but you must check the totals.

---

## 3. Customer sheet (H5-6) — only build if people ask

The post asks: "comment «شیت» if you'd use a ready-made one". Build this only if enough people ask.

**Find it:** Google Sheets → File → New → From template gallery has simple CRM/customer templates you can adapt.

**Or build it** (Google Sheets, one tab):

| Column | Example |
|---|---|
| نام | علی |
| شماره | 0912… |
| اجازه‌ی پیام (بله/خیر) | بله |
| محصول | کفش مدل X |
| تاریخ خرید | 1405/07/10 |
| مبلغ | 1,200,000 |
| کانال (اینستاگرام/حضوری/…) | اینستاگرام |
| یادداشت | سایز ۴۲ |

Useful extras:
- **Number of purchases per customer:** in a second tab, `=COUNTIF(Sheet1!B:B, B2)` next to each unique phone number.
- **Total spent per customer:** `=SUMIF(Sheet1!B:B, B2, Sheet1!F:F)`.

Add the «اجازه‌ی پیام» column on purpose. Only message people who said yes.

---

## 4. Pricing sheet (H5-9) — only build if people ask

**Build it** (Google Sheets):

| Column | Meaning | Formula (row 2) |
|---|---|---|
| A · محصول | product | — |
| B · قیمت خرید | what you paid | — |
| C · قیمت خرید دوباره (امروز) | what it costs to restock now | — |
| D · قیمت فروش فعلی | your current price | — |
| E · حاشیه سود واقعی | margin on restock cost | `=IF(D2=0,"",(D2-C2)/D2)` (format as %) |
| F · حاشیه سود هدف | your target margin, e.g. 25% | — |
| G · قیمت پیشنهادی | price that hits the target | `=IF(F2>=1,"",C2/(1-F2))` |
| H · هشدار | flag when margin is below target | `=IF(E2<F2,"⚠️ قیمت رو به‌روز کن","")` |

How to use it: update column C each week, sort by H, and change the flagged prices in small steps, starting with items customers rarely compare.

---

## 5. AI support test — 50 real questions (H5-11)

**Goal:** an honest score for how well AI answers a real shop's customer questions.

**You need:** a friend's shop (with their permission) and about 50 real customer questions from their DMs. Remove names and numbers.

**Steps**
1. **Collect the shop's facts** in one text: products and prices, sizes, delivery times and costs, return policy, payment methods, opening hours.
2. **Collect 50 questions:** about 35 common ones (price, delivery, size) and 15 hard ones (complaints, exceptions, angry messages).
3. **Run them** through an AI (ChatGPT, Gemini or Claude, or your offline model from guide 1) with this instruction first:
   ```
   تو پشتیبان فروشگاه [اسم] هستی. فقط بر اساس اطلاعات زیر جواب بده.
   اگر جواب در اطلاعات نیست، بگو «این رو باید از همکارم بپرسم» و چیزی از خودت نساز.
   مودب و کوتاه جواب بده.
   [اطلاعات فروشگاه را اینجا بچسبان]
   ```
4. **Score each answer** in a sheet:

   | Question | AI answer | Score | Note |
   |---|---|---|---|
   | … | … | ✅ correct / 🟡 partly / ❌ wrong / 🚩 made something up | … |

5. **Count:** how many ✅, 🟡, ❌, 🚩. The 🚩 ones (made-up delivery times, wrong prices) are the heart of the post.
6. Ask the shop owner: which answers would you actually send?

**For the post:** "X out of 50 correct", 2–3 screenshots of the worst made-up answers (anonymized), and the rule: AI for repeated questions, a person for money, complaints and exceptions.

---

## 6. Lead-qualification workflow (H4-1)

**Goal:** a customer fills in a short form, AI scores how serious they are, the result lands in a sheet, and you get an alert for hot leads.

**Find a ready-made start:** n8n has a public template library at `n8n.io/workflows`. Search "lead qualification" or "lead scoring" and import one, then adapt it. That's much faster than starting from zero.

**The simplest version to build** (no Telegram needed):

```
n8n Form  →  AI scores the answers  →  Google Sheets row  →  alert if score is high
```

**Step 1 — Get n8n running.** Choose one:
- **n8n Cloud** (free trial, then paid; needs an account and probably a foreign card).
- **Self-host with Docker** (free). Install Docker Desktop, then run:
  ```
  docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
  ```
  Open `http://localhost:5678` in your browser.

**Step 2 — Form Trigger node.** Add an **n8n Form Trigger** with 3–4 fields:
- What do you need? (text)
- Budget range (dropdown)
- When do you want to start? (dropdown: this week / this month / later)
- Phone number

**Step 3 — AI node.** Add an AI step (an OpenAI / chat model node, or the **Ollama** chat model node to use your offline model from guide 1, which needs no API key or card). Prompt:
```
You score sales leads for a small business. Read the answers and return JSON only:
{"score": 1-10, "reason": "one short sentence in Persian", "hot": true/false}
Hot = clear need + realistic budget + wants to start this week or this month.
Answers: {{ $json }}
```

**Step 4 — Google Sheets node.** Add a row with the answers plus score, reason and hot. (You'll need to connect a Google account in n8n's credentials.)

**Step 5 — IF node + alert.** If `hot` is true, send yourself an alert: email, or a Telegram/Bale message if a bot works for you.

**Step 6 — Test it** with 5 fake leads (2 hot, 3 not). Check that the scores make sense.

**Common problems you'll probably hit** (good material for "what broke"):
- The AI returns text instead of clean JSON. Fix: add "JSON only, no extra text" to the prompt, or use n8n's structured output parser.
- Google Sheets credentials setup takes time the first time.
- Telegram triggers need a public web address. A self-hosted n8n on your laptop doesn't have one. That's why this guide starts with the Form Trigger.

---

## 7. Your own channel (later)

You don't need this to start. Set it up when you have something to put in it, such as the first template people asked for.

- **Telegram channel:** New Channel → name + description → public link. To see which post brought people: Channel → Manage → Invite Links → create one link per post. Each link shows how many people joined through it.
- **Bale channel:** works inside Iran without a VPN. Create a channel the same way. Check whether it shows join counts per link.
- **Both:** many creators post in both. Start with whichever your audience actually uses; ask in a Story poll.

Once it exists, add the link to your bio and start mentioning it in captions.
