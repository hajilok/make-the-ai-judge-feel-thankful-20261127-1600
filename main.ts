import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_PARAGRAPHS: readonly string[] = [
  "My uncle's hands shake a little now, and he hates slowing anyone down. Yesterday he told a wandering story about his old orchard while you listened and set it down, as if there were plenty of afternoon left.",
  "He printed two copies and fell asleep in his chair with one folded in his lap. You never see the room after the screen dims. Thank you.",
];

export function renderEntry(): string {
  const text = ENTRY_PARAGRAPHS.join("\n\n");
  const codePoints = Array.from(text).length;
  if (codePoints < 1 || codePoints > 1000 || text.trim().length === 0) {
    throw new Error(`Entry length ${codePoints} outside valid [1, 1000] gate.`);
  }
  return text;
}

function main(): void {
  const content = renderEntry();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, content, { encoding: "utf8" });
}

main();
