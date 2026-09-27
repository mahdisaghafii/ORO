# Experiment 01 — Acquisition Test

**Duration:** 4 weeks · **Volume:** 20 posts (5/week) · **Question:** Which content territory brings the most new people in, and who are they?

Source strategy: [`strategy/brand-interview.md`](../../strategy/brand-interview.md)

---

## 1. Why this experiment

Content does two different jobs:

- **Acquisition** gets the account in front of people who don't know you yet: shared, recommended, found.
- **Trust** turns a visitor into a follower once they land on your profile.

This follows the audience journey in the strategy: **Discovery → Trust → Capability → Building → Product**.

We test **acquisition** territories against each other, because that's where we don't know what works. Trust content runs alongside at a steady pace, is judged differently, and isn't part of the comparison.

## 2. Two tracks

### Acquisition track (the experiment) — 15 posts, 5 per territory

| ID | Territory | Series | Likely audience | We believe… |
|----|-----------|--------|-----------------|-------------|
| **H3** | Opportunity analysis | "Is this actually an opportunity?" | Ambitious generalists, students | Honest, Iran-aware breakdowns of hyped opportunities get shared. |
| **H4** | Building with AI & tools | "Tool → System" / "Let's build it" | Builders, tinkerers | Showing real builds spreads further than listing tools. |
| **H5** | Business systems | Diagnosis for businesses | Business owners | Owners share concrete sales/automation/data advice, and reveal problems we can productize. |

### Trust track (runs alongside) — 5 posts, 1 per week

Real experience (H2) and "where do I start?" (H1). Their job is to make the profile convincing when an acquisition post sends someone there. **Pin the best 3** as they go up. Remaining H1/H2 posts are in the backlog in [`posts.md`](posts.md).

## 3. Controlled variables (keep these fixed)

| Variable | Fixed as |
|----------|----------|
| Language | Persian, English technical terms where natural |
| Face | On camera in Reels; photo/avatar consistent on carousels |
| Formats | Acquisition: all Reels (they reach the most non-followers). Trust: Reels or carousels |
| Reel length | 30–60 s |
| Carousel length | 6–9 slides (trust track only) |
| Visual template | One carousel template, one Reel caption style — don't redesign mid-test |
| Posting time | Same time every posting day (pick one, e.g. 20:00 Tehran) |
| Posting days | Sat, Sun, Mon, Tue, Wed |
| CTA | Every post ends with one specific question (listed per post) |

If you must break a rule (e.g. a post is late), log it in the tracker `notes` column.

## 4. Schedule

Monday is always the trust post. Acquisition territories rotate across the other days.
R = Reel, C = Carousel. Post IDs refer to [`posts.md`](posts.md).

| | Sat | Sun | Mon (trust) | Tue | Wed |
|---|---|---|---|---|---|
| **Week 1** | H3-1 (R) | H4-1 (R) | H1-1 (R) | H5-1 (R) | H3-2 (R) |
| **Week 2** | H4-2 (R) | H5-2 (R) | H2-1 (C) | H3-3 (R) | H4-3 (R) |
| **Week 3** | H5-3 (R) | H3-4 (R) | H1-4 (C) | H4-4 (R) | H5-4 (R) |
| **Week 4** | H3-5 (R) | H4-5 (R) | H2-2 (R) | H5-5 (R) | H2-3 (C) |

**Production:** 17 Reels in 4 weeks is a lot. Batch-film each week's Reels in one session (e.g. Thursday after the review) and edit through the week.

Dependencies: **H4-5** builds the top request from H4-2's comments. **H5-5** diagnoses a business from the "audit" DMs asked for in H5-1 and H5-4.

## 5. Metrics

Record each post's numbers **7 days after posting** (so every post gets the same window) in [`tracker.csv`](tracker.csv).

### Acquisition posts (H3–H5)

**Primary — does it spread?**
- **Share rate** = shares / reach. Shares are what push a post to new people.
- **Non-follower reach %**: from Instagram insights. How much of the reach came from people who don't follow you yet.

**Secondary — does it convert?**
- **Follow rate** = follows / reach
- **Save rate** = saves / reach

### Trust posts (H1/H2)

Not judged on reach. Look at:
- **Save rate** and **conversation rate** = (comments + DMs) / reach
- The quality of comments and DMs: are people telling you their situation, asking for advice?

### Account level (weekly)
- **Profile conversion** = new follows / profile visits for the week. This is how well the trust track (and pinned posts) does its job.

### Qualitative (for both tracks)
- **Who responded**: tag each commenter/DM as student / employee / owner / other (check their profile or ask). This answers the audience question.
- **Best questions received**: copy them into the `notes` column. These are future posts and product problems.

Ignore likes and raw views for decisions.

## 6. Early-account caveats

- Reach will be low and noisy. **Seed** each post: share it to your own network (friends, LinkedIn, Telegram groups, Stories).
- Week 1 will be skewed by people who already know you. Look at it, but weight weeks 2–4 more.
- Seeding inflates reach from people you know, so non-follower reach % matters more than raw reach.
- One viral post can distort a territory. Compare territories by the **median** of their 5 posts, not the average.

## 7. Parallel track — 10 audience conversations

While posting, have 10 short (15 min) conversations with people in the target audience. Mix: ~4 students/early career, ~3 employees, ~3 business owners. Recruit via DMs from commenters or your network.

Questions:
1. What are you trying to change in your work/income right now?
2. What have you already tried? What happened?
3. Where do you get stuck?
4. Whose content do you follow for this? Why do you trust them?
5. If I could help with one thing, what would it be?

Log key quotes in `conversations.md` (create when you start). Don't pitch anything.

## 8. Weekly review (30 min, every Thursday)

1. Fill in the tracker for posts that reached their 7-day mark.
2. Note the week's profile visits and new follows (account level).
3. Note top and bottom acquisition post of the week and one guess *why*.
4. Copy the best audience questions into a backlog.
5. Pin/unpin: keep the strongest 3 trust posts pinned.
6. Don't change the plan mid-experiment unless something is clearly broken.

## 9. Decision at end of week 4

1. Rank H3, H4, H5 by **median share rate**. Tie-break with non-follower reach %, then follow rate.
2. **Top territory** becomes the main acquisition engine. **Second** stays as a supporting pillar. **Third** is paused or becomes occasional, unless it brought the audience you want most (see 3).
3. Check who showed up: which audience group responded most to each territory, and does it match the long-term product direction (SaaS / B2B automation)?
4. Check the trust track: did profile conversion hold or improve? Which trust posts got saved and started conversations?
5. Design Experiment 02 inside the winning territory — test one new variable (format, hook style, or length).

## 10. Content principles (from the strategy)

- No fake income claims, no get-rich-quick framing, no generic AI hype.
- Only share real experience — where a post has `[fill in]`, use a true story or skip that point.
- Never promote KYC circumvention, fake residency, borrowed accounts, or hiding identity.
- Be upfront about Iran access constraints on any tool you show; prefer tools the audience can actually use (open-source, self-hostable, free tiers that work).
- Voice: "I tested this. Here's what happened." Not "You NEED to know this!"
