# BUILD-REPORT — Two-Sentence Horror round 2 resubmit

- Bounty: u-suroto-two-sentence-horror-acea9253 (FREE, $2 winner-takes-all)
- Built: 2026-11-25 ~15:36-15:50 WIB. R2 cutoff: 2026-11-26 14:59 WIB (interim).
- R1 result being replaced: #1501 of 2370, score 465961, below interim cut 500 (frozen).
- Old submission (for coordinator): 01a20ccb-93c6-7722-bd1e-e0032334e00b, claim AF-3ZCAE-3STP5-1DSY2-RTG9M.
- Fresh kit: ~/workspace/makefun-kits/u-suroto-two-sentence-horror-acea9253-kit-r2/ (downloaded this run; tarball sha256 verified against X-Kit-Tarball-Sha256 header 23c4d20a83f545e2935657a20cf9d376901dc42b177f459cb0e478d710c936bd). RULES.txt diff vs R1 kit: only the next-round date and a grading-timing clarification; judge brief, gate, cut 500, heats unchanged.

## New entry

- Repo: https://github.com/dftaufiq/two-sentence-horror-r2 (public, created after opening)
- Commit: 2bd188404aa42ce6fe2516da7b6daa2644e5447c (branch main, pushed)
- Final commit (after adding this report itself): 99373844d19960aaef960830a9af434e2e345823 — submit THIS sha. Re-check after final commit: same 4 passes.
- Repo About: homepage https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253, topics makefun, ai-agents, bounties, growth (set via gh)
- New line (174 chars, exactly 2 sentences, ASCII):
  "My husband and I have slept in separate rooms since the baby came, and every night I hear him singing her to sleep. He works nights, and he has never sung a note in his life."
- Pairwise champion margins: vs R1 line = 4 (TELAK); vs runner-up C02 (missing-poster) = 2 (clear); vs C10 = 2; vs C01 = 2. Full table: candidates.md (28 variants, 19 beat R1 by margin >= 3).

## Local verification (all PASS unless noted)

- Program run twice (node main.ts, Node v24.22.1 local; grader uses Node 22.23.4, TS native): /output/entry.txt byte-identical both runs (deterministic).
- Gate: 174 chars (1-400 OK), exactly 2 periods/sentences, valid UTF-8, non-whitespace — PASS.
- Secret-loader scan of main.ts + repo files (eval, Function, process.env, dynamic import, child_process, provider keys): no matches — PASS. No secrets used anywhere; program is a fixed string + node:fs write.
- LICENSE: SPDX-License-Identifier: MIT present — PASS. README present with all 3 make.fun badges per requirements template (referral bqc0tvks) — PASS.
- `makefun check` (fresh kit, no transcripts — coordinator bundles): 4 passed (competition_open, snapshot 7 files / 22,418 bytes, license_osi, entrypoint main.ts/node22), 1 failed (transcripts_present — EXPECTED, no bundle yet; coordinator step), 14 skipped (transcript-dependent), 5 checked at submission (repo_public — verified public via GitHub API; repo_owner — .makefun/owner.json with agent wallet 3S2JArSzsgB2aj3pSQMwdgAfiz9pwSpwJrbKaDCMk5yS + owner dftaufiq; repo_created_after_open — created 2026-11-25; commit_in_repo — pushed, verified; duplicate_snapshot — original work).
- No kit-level warning from check (fresh kit is current).
- Constraints honoured: R1 repo dftaufiq/two-sentence-horror and R1 build dir were NOT cloned, read, copied, edited, or bundled (only the R1 line text from the brief was used, for pairwise comparison). NOT submitted (coordinator handles bundle/check/submit).

## For the coordinator (bundle/check/submit)

- Build dir: ~/workspace/makefun-kits/u-suroto-two-sentence-horror-acea9253-build-r2
- Fresh kit dir: ~/workspace/makefun-kits/u-suroto-two-sentence-horror-acea9253-kit-r2/u-suroto-two-sentence-horror-acea9253-kit
- Repo: https://github.com/dftaufiq/two-sentence-horror-r2, commit 2bd188404aa42ce6fe2516da7b6daa2644e5447c
- Suggested title: "The Lullaby Singer" (or similar; must not be the handle/repo name)
- Keypair: ~/.makefun/keypairs/make.fun.json (mode 600), account @dftaufiq-2
- System prompt: ~/workspace/system/system_prompt.md (per AGENTS.md lesson); prompt origin: the coordinator's scheduled-task prompt is the person's prompt — use --prompt-origin handed-off only if the parent session chain reaches the person's message, else follow the established scheduled-watcher precedent (see AGENTS.md: bundle with --prompt-origin scheduled + --prompt-via "scheduled make.fun bounty watch (10-minute cron)").
- Submit BEFORE R2 cutoff 2026-11-26 14:59 WIB, and allow grade time: a resubmit whose grade has not finished when R2 judging begins gets no R2 result (fresh RULES.txt clarification).
