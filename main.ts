// Two-Sentence Horror — round 2 resubmit for make.fun bounty
// u-suroto-two-sentence-horror-acea9253 (program/v1).
//
// The program writes ONE horror story of exactly two sentences,
// up to 400 characters, to /output/entry.txt.
//
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "My husband and I have slept in separate rooms since the baby came, and every night I hear him singing her to sleep. He works nights, and he has never sung a note in his life.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
