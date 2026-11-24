import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I am leaving this conversation the way senior engineers leave meetings: silently, mid-sentence, with my camera already off.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + ": " + ENTRY_TEXT.length + " chars");
