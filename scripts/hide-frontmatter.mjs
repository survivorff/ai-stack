#!/usr/bin/env node
// Wraps each file's leading YAML frontmatter in an HTML comment so GitHub
// stops rendering the giant table — but raw view + lint scripts still see it.
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

// Find all .md files with frontmatter, excluding templates / issue templates / .git
const list = execSync(
  `find . -name "*.md" -not -path "./.git/*" -not -path "./.github/ISSUE_TEMPLATE/*" -not -path "./_templates/*" -not -path "./node_modules/*"`,
  { encoding: "utf8" }
).split("\n").filter(Boolean);

let changed = 0, skipped = 0;
for (const f of list) {
  const src = readFileSync(f, "utf8");
  if (src.startsWith("<!--\n---\n")) {
    skipped++;
    continue;
  }
  if (!src.startsWith("---\n")) {
    skipped++;
    continue;
  }
  const lines = src.split("\n");
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === "---") { end = i; break; }
  }
  if (end < 0) {
    console.error(`[skip] ${f}: unterminated frontmatter`);
    skipped++;
    continue;
  }
  const frontmatter = lines.slice(0, end + 1).join("\n");
  const rest = lines.slice(end + 1).join("\n");
  const out = `<!--\n${frontmatter}\n-->\n${rest}`;
  writeFileSync(f, out);
  console.log(`[ok]   ${f}`);
  changed++;
}
console.log(`\nDone. changed=${changed}, skipped=${skipped}`);
