// Charm the Commuter: Forecast a City — a whimsical city forecast for
// commuters: light rain, heavy sighs, and a bus racing the commuter's patience.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In Drizzlewick today: light rain, heavy sighs, and a 40% chance your bus arrives before your patience runs out.";

// Runtime validation guard: the entry must be a single non-empty line, 1-200 chars.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length out of range: ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
// Tightened: no leading/trailing whitespace and no trailing newline in the
// constant itself, so the written file is exactly the line, nothing more.
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}
// Byte round-trip check (no file read): the line is pure ASCII, so its UTF-8
// byte length must equal its character length, exactly 111 bytes.
const EXPECTED_BYTES = 111;
if (Buffer.byteLength(LINE, "utf8") !== EXPECTED_BYTES || LINE.length !== EXPECTED_BYTES) {
  throw new Error(`entry byte length mismatch: ${Buffer.byteLength(LINE, "utf8")} != ${EXPECTED_BYTES}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
