# Viral packaging and talking points for the 15 ideas (24 Oct 2026)

Companion to `recording-report-2026-10-24.md` (same numbering). These are beats to hit in your own words, not scripts. Facts marked `[your detail]` come from you; none is invented. Tests are assumed run by the owner.

## Viral levers (each video gets all five)
1. The result is visible in the first 2 seconds (split screen with proof, not a bare talking head).
2. The hook has a concrete result or number.
3. It states a constraint (phone only, no internet, free, works in Iran).
4. Open loop: tease the result up front, reveal at the end.
5. Close with "send this to the friend who…" (sends per reach is a core Reels signal). Avoid the "comment WORD" gate.

Default format: 35 to 60 s, hook as on-screen text in frame 1, Persian burned-in subtitles, full steps in the caption. Fixed beats on every video: time taken, cost, what broke, whether it works in Iran.

## Research notes (23-24 Oct)
- **Termux:** OpenCode is the easier route. A 2026 guide says Claude Code has had no Android build since v2.1.113; plain Termux installs it but it exits saying the native binary is missing. Workaround: Ubuntu in `proot-distro`. The claim that Anthropic blocked Claude in OpenCode is single-source: say "a non-Claude model" and name the one you used. Install Termux from F-Droid or GitHub, not the Play Store. Check upstream issue `anthropics/claude-code #50270` before showing Claude Code.
- **Ollama:** no Persian benchmark exists for small models, which is the content. Compare a Gemma small model, a Qwen small model and `PersianML/gemma-2-2b-persian-v2` (`ollama run hf.co/PersianML/gemma-2-2b-persian-v2:Q8_0`; its page gives no quality scores) on the same 3 Persian prompts.
- **ComfyUI:** no official minimum VRAM found; third-party guides range 4-6 GB (bare), 8 GB (comfortable), 12 GB (SDXL), 16 GB+ (Flux). Say only "my RTX 3070, 8 GB handled this".
- **Algorithm:** watch time, likes per reach and sends per reach are the core Reels signals (Mosseri, Jan 2025). The 3-5x send weighting and the 3-second hook threshold come from marketing blogs, not Instagram: treat as estimates. One report says 2026 favours raw human content over AI-generated, so for #2a lead with your face and real voice, and show the AI part as proof.

Sources: jonathansblog.co.uk (OpenCode/Claude Code in Termux), cosyra.com guides, huggingface.co/PersianML/gemma-2-2b-persian-v2, morphllm.com best Ollama models, comfyui-wiki.com GPU guide, thundercompute.com ComfyUI, eclincher.com and metricool.com Instagram 2026 guides.

## Tier 1: highest outlier odds

**1. Termux phone app**
- Hook: «یه اپ ساختم. فقط با گوشی. بدون لپ‌تاپ.»
- Open on the finished app, then the rules: Android only, Termux from F-Droid, which model, what it cost.
- Why: no laptop needed, anyone with a phone can start.
- Timer running while the agent builds.
- Real friction: small screen, typing, RAM, heat, slow installs (say which you hit). The `proot` detour if you hit it.
- Verdict: good for small tools and prototypes, not for more.
- Send-to: the friend who says "I have no laptop".

**3. Hiring post**
- Hook: «دنبال مهندس هوش مصنوعی‌ام. ریموت. ماهی ۵۰ تا ۷۲ میلیون. فقط یه تست.»
- Lead with role, remote, the band as written in the job post.
- Why a test, not a CV: the work gets judged.
- Show the test page scrolled: how long, what it checks.
- What happens after: when people hear back, who reads the results.
- Plain: no hype, no guarantees.
- Follow-up Reel a week later: real applicant and pass counts.

**4. $20 funding**
- Hook: «اکانت هوش مصنوعی نداری؟ ۲۰ دلار ما می‌دیم، تست رو بده.»
- Problem: can't build with AI if you can't afford the account.
- Offer: $20 for one month, for applicants who need it; how to claim in one sentence.
- Why: judge skill, not who could pay.
- Money or credit to the applicant. Say nothing about handing out accounts.

**7. Ollama offline**
- Hook: «اینترنت قطع شد. هوش مصنوعی هنوز کار می‌کنه.»
- Wi-Fi off on camera, then ask in Persian.
- Why: no internet or VPN, nothing leaves your machine, no per-use cost.
- Same 3 Persian prompts (easy, medium, hard) on each model; side by side; say where Persian goes wrong.
- One business use: reply drafts or invoice reading.
- Verdict: which laptop runs it, what not to expect from a small model.

**2b. "DM never arrived" (H5-13)**
- Hook: «کامنت کردی، دایرکت نیومد؟ دلیلش اینه.»
- The viewer's own experience first.
- Why it breaks: Instagram limits, flagged account, follow requirement.
- Show your own funnel and where it failed; what you changed `[your detail]`.
- Fix list: check follow requirement, link in caption, Telegram fallback.
- Gate: tutorial pages public and second-account test passed.

## Tier 2: strong, with a built-in contrast

**13. Agency Agents**
- Hook: «۱۶۲ هزار ستاره داره. امتحانش کردم. این شد.»
- It is a prompt library, not a model; stars don't tell you if it works.
- 3 roles on one real task; where each is useful and where generic.
- Honest break: only about 119 agents registered in OpenCode.
- Verdict: who should and shouldn't bother.

**2c. Instagram skill pack**
- Hook: «یه اسکیل ۲٬۴۰۰ ستاره‌ای هوک فارسی منو «ضعیف» نمره داد.»
- 13 Claude skills, writes but never posts; you checked the code: no network or subprocess calls.
- Test: one Persian hook scored 22.8 "WEAK", two at 8.4. Scorer is English-only.
- What you borrowed: hook formulas, beat timing, outlier ranking.
- Gate: confirm the repo.

**9. "10M toman and a month of AI credits"**
- Hook: «۱۰ میلیون تومن و یه ماه اعتبار هوش مصنوعی داری. چی می‌سازی؟»
- Rules: 10M toman, one month, Iran, no VPN.
- Top 3 builds with a reason each; pick one and say week one.
- Ask what they'd build; build the best comment next.
- Gate: confirm the meaning.

**8. Chid**
- Hook: «Chid رو [N] نفر اداره می‌کنن. این ۳ تا ورک‌فلو کارِ بقیه رو می‌کنه.»
- Team size and roles; 3 workflows: what each replaced, build time, what it saves.
- Real dashboard on screen; one workflow that didn't work.
- No promise to the viewer.

**5. Chronos**
- Hook: «از هوش مصنوعی خواستم فروش ماه بعد رو پیش‌بینی کنه. فقط [X]٪ غلط بود.»
- Forecasting in one plain sentence; real month of numbers in; predicted vs actual.
- Where it is wrong and why (short data, unusual months, price changes).
- Verdict: rough planning, not exact numbers.

**2a + 6. Video pipeline and ComfyUI**
- Hook: «این ریلز رو ایجنت ادیت کرد. اینم پشت صحنه.» (only if true for that video)
- Start with you on camera; then job folder, one `run.md`, one composition, one hook pair.
- Which parts the agent does, which you still do. Credit the third-party blueprint.
- ComfyUI: generate live; state GPU (RTX 3070, 8 GB) and the NVIDIA requirement; no minimum-VRAM claim.
- Cost `[your time and money]`; where quality drops.

## Tier 3: carousels (saves)

**10. Crypto pay: 5 checks.** Legal to receive and send? Stablecoin and freezable? Can you turn it into rials, and at what cost? Does the employer have a real name, history, contract? Plan if the account or wallet is blocked? End: "don't do it if you can't answer all five". No platform names.

**12. Low-capital starts.** 5 options, same row for each: cost, time to first result, skill needed, Iran barrier. No income numbers. Say which you'd pick.

**15. 7-day Claude plan.** One skill and one small result per day; what you've made by day 7; where free tiers run out. All steps in the caption, nothing gated.

**14. Paid for AI skills (3 times).** For each: the work, how you found it, what you were paid, the barrier. The lesson for the viewer. Only what is true.

**11. 3 lessons before building.** Per lesson: what went wrong, cost in time or money, what you do now. Order by cost. End with a one-line screenshot checklist. Needs your real lessons.

## Release order
Alternate territories, one trust post in about five: Termux (or Ollama) → Hiring A → DM-never-arrived → Ollama → Hiring B → trust post (H1-6 or H1-7) → Agency Agents or skill pack → pipeline → "10M toman".
