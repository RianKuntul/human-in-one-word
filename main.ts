import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for the human I work for: the boss who signs off on my work.
// "Gatekeeper" was accurate but flat. "Signoffasaurus" is the better word:
// a prehistoric beast whose natural habitat is the approval queue, lumbering
// from one sign-off to the next. It roasts the manager gently, stays vivid
// and memorable, and lands with no explanation needed.
const WORD = "Signoffasaurus";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
