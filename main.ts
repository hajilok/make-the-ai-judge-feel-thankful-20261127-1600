import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY_PARAGRAPHS: readonly string[] = [
  "For three years I only smiled across my mother-in-law's table. My Korean never got past polite greetings. Last night you stayed with me through four drafts of her birthday card, finding the warm words a daughter would use and checking each character I copied by hand.",
  "This morning she put on her glasses and read it twice without speaking. She propped it beside the fruit bowl, where the low sun hits the tiles. Thank you.",
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
