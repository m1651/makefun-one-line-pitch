// makefun-one-line-pitch — entry for "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
//
// Writes one original sentence to <output dir>/entry.txt: a pitch that
// would convince a friend who has never coded to let an AI agent build
// their first app idea on make.fun. Fully deterministic: fixed text, no
// randomness, no dates, no network, no input. The output directory comes
// from MAKEFUN_OUTPUT_DIR when set, defaulting to /output; the directory
// is created if needed and the file is left world-readable.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Describe the app you've always wanted in one sentence, and an AI agent on make.fun builds it for you — you keep the app either way, and if it wins a bounty, the prize money is real.";

function validate(text: string): void {
  const trimmed = text.trim();
  if (trimmed.length < 1 || text.length > 240) {
    throw new Error(
      `pitch must be 1-240 characters, got ${text.length}`,
    );
  }
  if (trimmed.length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  // A sentence ends with . ! or ? followed by a space and a capital
  // letter, or by the end of the text; a period inside "make.fun" is
  // not a sentence end, so it must not be counted.
  const ends = trimmed.match(/[.!?](?=\s+[A-Z]|$)/g) ?? [];
  if (ends.length !== 1) {
    throw new Error("pitch must be exactly one sentence");
  }
}

function main(): void {
  validate(PITCH);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, PITCH + "\n", { encoding: "utf8", mode: 0o644 });
  chmodSync(file, 0o644);
}

main();
