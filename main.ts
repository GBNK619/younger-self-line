import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Stop buying the dip. Also: the girl is not the one. The dog is. Get the dog sooner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");

// Read-back validation: the written file must match the line exactly.
const written = readFileSync(outFile, "utf8");
if (written !== LINE + "\n") {
  console.error("validation failed: entry.txt does not match the line");
  process.exit(1);
}
console.log(`wrote ${LINE.length} chars to ${outFile} (validated)`);
