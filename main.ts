import { mkdirSync, writeFileSync } from "node:fs";

// Charm the Commuter: Forecast a City That Isn't — one line of weather,
// at most 140 characters, for a city that does not exist.
// The line names the invented city (Drizzlewick), gives it weather in the
// register of a real broadcast forecast, and lands a small joke a bored
// commuter at a rainy bus stop will smile at: the bus-versus-patience odds.
// Deterministic: the same text on every run. No network, no file reads.
// Never deletes /output: the dir is created if missing and entry.txt is
// written in place (the sandbox bind-mounts /output).
const LINE =
  "In Drizzlewick today: light rain, heavy sighs, and a 40% chance your bus arrives before your patience runs out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
