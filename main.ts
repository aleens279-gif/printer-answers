// The Printer Finally Answers — writes one line to /output/entry.txt
// Gate: 136 chars (range 1-240), one line, no trailing newline.
// Twist: the printer has printed 40,000 pages and will eat your report.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I have printed 40,000",
  "pages without complaint, so",
  "if you thump me once more",
  "I will eat your report, jam",
  "on page 47, and blame the Wi-Fi.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
