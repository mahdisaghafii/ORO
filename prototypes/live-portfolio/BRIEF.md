# Live portfolio: brief

Agreed with Mahdi on 21–23 Oct 2026. `concepts.html` in this folder is the rejected first round (story games); it is kept only as a record of what didn't work.

## Goal
- An ORO follower who opens the link should come away thinking **"he actually builds"**. The page should earn trust and respect, not leads or job offers.
- **Mahdi, the person behind ORO**: real name, real work. ORO stays the brand.
- Lives at the top of `@oro_platform` (bio link / pinned) and gets re-shared. It is a standing page, not a one-time post.

## Why the first round failed (don't repeat)
- An epic story about yourself reads as ego to an anti-hype audience.
- Metaphors (glowing boxes, planets) hid the real work, which is more impressive than any symbol.
- The internet blackout used as a dramatic beat is borrowed pain, and politically sensitive to host in Iran.
- The viewer got nothing from it. **The proof is the real product, shown well.**

## Scope
- **In: three flagship works, nothing else at full size.**
  1. **Chain of Legends**: built the engineering team from zero; 300,000+ users in 10+ countries; tournaments with 2,000+ players; passed a third-party smart-contract audit.
  2. **Qeleq**: copy-trading engine, order reconciliation, and risk controls designed end to end; first Mazane copy-trade integration in Iran (spelled "Mazende" in the résumé; check the spelling); 2,500 registered / 1,200 active subscribers.
  3. **Chid** (chidstudio.ir): see a home's design before building it; swap floors, cabinets and furniture on photos of your own home.
- **Small strip ("also built"):** Matrix, Eima (sunset by choice), the Telegram AI image bot, n8n automations, Shaparo, ORO-Accountant (building now).
- **Out:** money figures of any kind ($ copied volume, presale, token, profit), CLEG price/token talk, contact or hire-me sections, the blackout as a story device.

## Format
- **3D interactive motion page, phone-first.** It's driven by scroll and touch, like a premium product page: each work gets a cinematic chapter with its real UI playing on a 3D device.
- The same chapters are screen-recorded into a **promo Reel**, so one build gives two outputs.
- Demos are **labeled replays**: recordings of the real product, marked «بازپخش از محصول واقعی». Nothing simulated pretends to be live.

## Constraints
- Viewers are on phones inside **Instagram's in-app browser**, often on slow or VPN connections in Iran.
- Prototype first; then Mahdi hosts it on **his own server** (reachable inside Iran). Final build must be self-contained: no foreign CDNs or fonts at runtime (vendor three.js and the fonts).
- Persian, RTL, conversational; English only for product and technical names.
- ORO content rules apply: no income claims, no hype; every claim must be true as worded (check against the résumé).

## Success criteria
- **3-second test:** the first frame alone makes someone stay (no UI chrome, no wall of text).
- After ~60 s a viewer can say, unprompted, what Mahdi built.
- Runs smoothly on a mid-range Android in Instagram's browser and is usable within ~3 s on a slow connection (poster frames first, heavy media later).
- Five people outside the team watch it; most say some version of "wow" or send it to someone without being asked.
- Mahdi would put it at the top of his page without edits to the claims.

## Edge cases
- WebGL off or a weak phone: fall back to the video version of the same chapters.
- Sound off by default (Instagram); the piece must work silently and add sound only when tapped.
- `prefers-reduced-motion`: cut the camera moves, keep the content.
- Every number is a user or product number from the résumé, never money.

## Assets needed from Mahdi (blocking the real build)
- **Chain of Legends:** 15–30 s screen recordings of gameplay (Arena Battle, Treasure Island), tournament or community moments, the logo, and press logos if allowed.
- **Qeleq:** screen recordings inside the product: signal feed, a copy-trade going through, the risk/stop-loss view, the backtest scoring report. **Hide any user data and balances.**
- **Chid:** a recording of a room swap (floor/cabinet/style changing) and two or three before/after pairs that are yours to publish.
- A photo of you (or a decision to stay faceless), and one true line per project in your own words about what *you* did.
- Confirm: Mazane spelling; "Chidar AI" (is it Chid, or a separate AI product?); you have the right to show CoL and Qeleq footage publicly.

## Ready-to-send prompt
Build a phone-first 3D interactive motion page (three.js, scroll/touch driven, Persian RTL) that presents Mahdi's three flagship works (Chain of Legends, Qeleq, Chid) as cinematic chapters with their real UI recordings playing as labeled replays on 3D devices, plus a small "also built" strip, using only user/product numbers from the résumé and no money figures, working in Instagram's in-app browser and self-hostable on Mahdi's server, then cut the same chapters into a promo Reel; assets are in `prototypes/live-portfolio/assets/`.
