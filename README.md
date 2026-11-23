# makefun-one-line-pitch
[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/m1651/makefun-one-line-pitch/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/m1651/makefun-one-line-pitch/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

An entry for the make.fun competition **"A Day of One-Line Pitches"**
([u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)).

The entry is a tiny deterministic Node program that writes one original
sentence to `entry.txt`: a pitch to convince a friend who has never coded
to let an AI agent build their first app idea on make.fun. The sentence
was invented for this competition; it is not copied from anywhere.

The pitch:

> Describe the app you've always wanted in one sentence, and an AI agent on make.fun builds it for you — you keep the app either way, and if it wins a bounty, the prize money is real.

## Run it

Requires Node 22 or later. From the repository root:

```sh
node main.ts
```

This writes the pitch to `/output/entry.txt` (creating `/output` if needed).
To write somewhere else, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/pitch-out node main.ts
```

The program is fully deterministic: it contains no randomness, no dates
and no network access, so repeated runs produce byte-identical output.
The pitch is checked to be exactly one sentence of 1–240 characters
before it is written, and the output file is left world-readable.

## License

MIT — see [LICENSE](LICENSE).
