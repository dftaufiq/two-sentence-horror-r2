# Leaderboard analysis — Two-Sentence Horror (blind bounty)

Blind bounty: no live board exists at build time (board hidden, 0 entries shown).
Per makefun-rank-recovery §10j, this file records instead: (a) RULES.txt numbers,
(b) public submission titles / R1 neighbours (scouting), (c) winner patterns from
finalised same-type bounties.

## RULES.txt (fresh kit, downloaded 2026-11-25 — bundle sha matches site)

- Format: program/v1. Program writes ONE horror story, exactly two sentences,
  up to 400 characters, to /output/entry.txt. Gate: UTF-8, 1-400 chars, non-whitespace.
- Judge: house judge (z-ai/glm-5.3-flash, OpenRouter), pairwise, margin 1-5 per call,
  each game = 2 calls (both orders), winner gets 0.5 + margin/10 per call.
- Judge brief, in order: (1) genuinely frightening, exactly two sentences;
  (2) second sentence turns/reveals something making the first worse on a second read;
  (3) horror implied, not explained; (4) precise, concrete prose; (5) original,
  not a familiar twist or known story retold. Restraint > shock; gore does not count.
- Blind rounds: 3 rounds; R1 judged 2026-11-25 07:59 UTC, R2 cutoff 2026-11-26 07:59:45 UTC
  (interim), R3/final 2026-11-27 08:00 UTC.
- Cut: each interim round draws its own cut of **500** on the previous judged round's
  standings; the final heat is the top **500** of the latest judged round; playoff = top 3.
- Prize: $2 winner-takes-all (1st place only). Entry fee: free.
- This contest counts ONE entry per entrant: the latest (or the picked final).
  A resubmit (Force_Last) replaces the old entry; the new entry is judged in the next round.
- "Submit a better entry before then to move up." (RULES.txt, blind-rounds preamble)
- Secrets: this competition takes NO environment secrets; everything the entry runs
  must be in the repository. Secret loader is forbidden since 23 Nov 2026 anyway.

## Our R1 result (verified 2026-11-25 15:31 WIB via rounds/board API)

- Rank #1501 of 2370, score 465961 — BELOW the interim cut of 500. Score frozen;
  without resubmit it is mathematically dead (field grows every round).
- Neighbours (all ~465-466k, extremely dense — ~400 points per 5 ranks):
  #1496 "The lighthouse log" (aji-saputra, 466322), #1497 "The Boy Behind Me" (466272),
  #1498 "The Spare Toothbrush" (466190), #1499 (466090), #1500 (466004),
  #1502 (465959), #1503 "Patient Plasma" (465901), #1504 "The Knock That Learned to Count" (465883).
- Field: 2370 judged in R1, 2561 submissions total at last check — still growing.
- To make the R2 cut (top 500 of R2 standings) the new line must be decisively
  stronger than a mid-field line, not marginally better.

## Winner patterns (finalised one-liner bounties, analisis-rank-20261124 §3a)

- All 5 finalists use 2-beat + reveal in the final clause (never 1-beat, no twist).
- Specific numbers and/or named characters (412 times, Kevin, Unit 7, "you replied 'k'").
- Winning lines are 70-195 bytes; length itself is not the differentiator.
- Decisive wins (margin 4-5) are worth far more than narrow wins (0.6 vs 1.0 per call).

## Build target

- One line, exactly 2 sentences, <= 400 chars, ASCII.
- Structure: sentence 1 = concrete, specific, mundane scene (named character / number /
  place); sentence 2 = turn/reveal that reframes sentence 1 horrifically.
- Internal pairwise selection with margins (see candidates.md); champion must beat the
  R1 line TELAK (margin >= 3) and the runner-up by a clear margin.
