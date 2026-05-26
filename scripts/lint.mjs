#!/usr/bin/env node
/**
 * ai-stack content lint script
 *
 * Checks:
 *   1. Frontmatter wrapped in <!-- ... --> (per SCHEMA.md rule)
 *   2. Required frontmatter fields present (status, last_verified, next_review)
 *   3. last_verified is a valid date and not in the future
 *   4. next_review is a valid date and after last_verified
 *   5. Internal markdown links resolve to existing files
 *   6. tier (if present) is one of S | A+ | A | A- | B+ | B | C | F
 *   7. china_availability (if present) uses 🟢🟡🔴
 *
 * Usage:
 *   node scripts/lint.mjs           # check everything
 *   node scripts/lint.mjs --fix     # only checks, no auto-fix yet
 *   node scripts/lint.mjs <path>    # check a single file or dir
 *
 * Exit codes:
 *   0 — all good
 *   1 — at least one error
 */

import { readFileSync, statSync } from "fs";
import { execSync } from "child_process";
import { resolve, dirname, join, relative } from "path";

const ROOT = resolve(process.cwd());
const arg = process.argv[2];
const target = arg && !arg.startsWith("--") ? resolve(arg) : ROOT;

// ----- collect files -----

function listMarkdownFiles(root) {
  // git ls-files keeps us aligned with the repo (no node_modules/dist)
  try {
    const out = execSync(
      `git ls-files "*.md"`,
      { cwd: root, encoding: "utf8" }
    );
    return out
      .split("\n")
      .filter(Boolean)
      .map((p) => resolve(root, p));
  } catch {
    // fallback: find
    const out = execSync(
      `find . -name "*.md" -not -path "./node_modules/*" -not -path "./.git/*"`,
      { cwd: root, encoding: "utf8" }
    );
    return out
      .split("\n")
      .filter(Boolean)
      .map((p) => resolve(root, p));
  }
}

let files;
if (target !== ROOT) {
  const stat = statSync(target);
  files = stat.isDirectory()
    ? listMarkdownFiles(target)
    : [target];
} else {
  files = listMarkdownFiles(ROOT);
}

// Files we don't lint (templates, issue templates, etc)
const SKIP_PATTERNS = [
  "/_templates/",
  "/.github/ISSUE_TEMPLATE/",
  "/.github/PULL_REQUEST_TEMPLATE",
  "/_archive/",
  "/_graveyard/",
  "/node_modules/",
];

files = files.filter((f) => !SKIP_PATTERNS.some((p) => f.includes(p)));

// ----- helpers -----

const VALID_TIERS = ["S", "A+", "A", "A-", "B+", "B", "C", "F"];
const VALID_AVAILABILITY = ["🟢", "🟡", "🔴"];
const VALID_STATUS = ["draft", "verified", "outdated", "archived"];

// Files that don't need full content frontmatter
// (README files for categories, top-level docs, governance, etc.)
const FRONTMATTER_OPTIONAL = [
  /\/README\.md$/,
  /\/CONTRIBUTING\.md$/,
  /\/GOVERNANCE\.md$/,
  /\/ROADMAP\.md$/,
  /\/CHANGELOG\.md$/,
  /\/CHANGELOG\.md$/,
  /\/SCHEMA\.md$/,
  /\/DECISIONS\.md$/,
  /\/TIER-LIST\.md$/,
  /\/CHINA-AVAILABILITY\.md$/,
  /\/LICENSE$/,
  /\/CONTENT_PLAN\.md$/,
];

function isFrontmatterOptional(path) {
  return FRONTMATTER_OPTIONAL.some((p) => p.test(path));
}

function parseDate(str) {
  if (!str) return null;
  const m = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const d = new Date(str + "T00:00:00Z");
  if (isNaN(d.getTime())) return null;
  return d;
}

function extractFrontmatter(src) {
  // Two valid forms:
  //   1. Wrapped in HTML comment (preferred for content):
  //         <!--
  //         ---
  //         key: value
  //         ---
  //         -->
  //   2. Bare YAML at top (legacy / GitHub issue templates):
  //         ---
  //         key: value
  //         ---
  let body = src;
  let style = "none";
  let raw = null;

  if (src.startsWith("<!--\n---\n")) {
    const end = src.indexOf("---\n-->");
    if (end < 0) return { style: "broken-comment", raw: null, body: src };
    raw = src.slice(8, end).trim(); // strip <!--\n---\n  ... ---\n
    body = src.slice(end + "---\n-->".length).replace(/^\n+/, "");
    style = "comment";
  } else if (src.startsWith("---\n")) {
    const end = src.indexOf("\n---\n", 4);
    if (end < 0) return { style: "broken-bare", raw: null, body: src };
    raw = src.slice(4, end).trim();
    body = src.slice(end + 5).replace(/^\n+/, "");
    style = "bare";
  } else {
    style = "none";
  }
  return { style, raw, body };
}

function parseSimpleYaml(raw) {
  // Tiny YAML-ish parser: only key: value, list of strings, and tier_history list.
  // Good enough for our schema. We DON'T pull in a real YAML lib to keep this script zero-dep.
  const out = {};
  if (!raw) return out;
  const lines = raw.split("\n");
  let currentKey = null;
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (/^\s+-\s*/.test(line) && currentKey) {
      // list item
      const v = line.replace(/^\s+-\s*/, "").trim();
      out[currentKey] = out[currentKey] || [];
      if (Array.isArray(out[currentKey])) {
        // could be string or object; we keep as-is string
        out[currentKey].push(v);
      }
      continue;
    }
    const m = line.match(/^([\w-]+):\s*(.*)$/);
    if (m) {
      const [, k, v] = m;
      currentKey = k;
      if (v === "" || v === null) {
        // start of list
        out[k] = [];
      } else {
        // strip quotes
        out[k] = v.replace(/^['"]|['"]$/g, "");
      }
    }
  }
  return out;
}

// ----- checks -----

const errors = [];
const warnings = [];

function err(file, line, msg) {
  errors.push({ file: relative(ROOT, file), line, msg });
}
function warn(file, line, msg) {
  warnings.push({ file: relative(ROOT, file), line, msg });
}

const today = new Date();
today.setHours(0, 0, 0, 0);

function checkFile(path) {
  const src = readFileSync(path, "utf8");
  const { style, raw, body } = extractFrontmatter(src);

  // ---- Frontmatter style ----
  if (style === "bare" && !path.includes(".github/")) {
    err(
      path,
      1,
      "Frontmatter is bare YAML — must be wrapped in <!-- ... --> per SCHEMA.md (run scripts/hide-frontmatter.mjs to fix)"
    );
  }
  if (style === "broken-comment" || style === "broken-bare") {
    err(path, 1, `Malformed frontmatter (style=${style})`);
  }

  // ---- Required fields ----
  if (!isFrontmatterOptional(path)) {
    if (style === "none") {
      warn(path, 1, "Missing frontmatter (skip if not a content page)");
      return;
    }
    const fm = parseSimpleYaml(raw || "");
    const required = ["status", "last_verified", "next_review"];
    for (const key of required) {
      if (!fm[key]) {
        err(path, 1, `Frontmatter missing required field: ${key}`);
      }
    }

    // status
    if (fm.status && !VALID_STATUS.includes(fm.status)) {
      err(
        path,
        1,
        `Invalid status "${fm.status}" — must be one of ${VALID_STATUS.join(" / ")}`
      );
    }

    // dates
    const lv = parseDate(fm.last_verified);
    const nr = parseDate(fm.next_review);
    if (fm.last_verified && !lv) {
      err(path, 1, `Invalid last_verified "${fm.last_verified}" (use YYYY-MM-DD)`);
    }
    if (fm.next_review && !nr) {
      err(path, 1, `Invalid next_review "${fm.next_review}" (use YYYY-MM-DD)`);
    }
    if (lv && lv > today) {
      warn(path, 1, `last_verified ${fm.last_verified} is in the future (clock skew? acceptable for content drafts)`);
    }
    if (lv && nr && nr <= lv) {
      err(
        path,
        1,
        `next_review ${fm.next_review} must be AFTER last_verified ${fm.last_verified}`
      );
    }
    if (lv && nr) {
      const days = (nr - lv) / (24 * 3600 * 1000);
      if (days > 365) {
        warn(path, 1, `next_review is ${days.toFixed(0)} days after last_verified — recommended <= 180 days`);
      }
    }

    // tier
    if (fm.tier && !VALID_TIERS.includes(fm.tier)) {
      err(
        path,
        1,
        `Invalid tier "${fm.tier}" — must be one of ${VALID_TIERS.join(" / ")}`
      );
    }

    // china_availability
    if (fm.china_availability) {
      const symbols = String(fm.china_availability).match(/(🟢|🟡|🔴)/g) || [];
      if (!symbols.length) {
        err(path, 1, `china_availability must include one of 🟢 🟡 🔴`);
      }
    }

    // outdated check (last_verified > 6 months ago)
    if (lv) {
      const monthsAgo = (today - lv) / (30.5 * 24 * 3600 * 1000);
      if (monthsAgo > 6 && fm.status === "verified") {
        warn(
          path,
          1,
          `last_verified is ${monthsAgo.toFixed(1)} months old — should be re-verified or marked 'outdated'`
        );
      }
    }
  }

  // ---- Internal links ----
  // Match relative markdown links like [text](./foo.md) or (../bar.md) or (foo/bar.md)
  // Skip absolute http(s), mailto:, anchor-only, and image embeds for now.
  const linkRe = /\[([^\]]*)\]\(([^)]+)\)/g;
  let m;
  while ((m = linkRe.exec(body)) !== null) {
    const link = m[2].split("#")[0]; // strip anchor
    if (!link) continue;
    if (/^https?:/.test(link)) continue;
    if (/^mailto:/.test(link)) continue;
    if (link.startsWith("#")) continue;
    // resolve relative to current file's directory
    const baseDir = dirname(path);
    const targetPath = resolve(baseDir, link);
    try {
      statSync(targetPath);
    } catch {
      // try .md auto extension
      try {
        statSync(targetPath + ".md");
      } catch {
        // try directory with README.md
        try {
          statSync(join(targetPath, "README.md"));
        } catch {
          err(path, 0, `Broken internal link → ${link}`);
        }
      }
    }
  }
}

// ----- run -----

console.log(`Linting ${files.length} markdown files…\n`);
for (const f of files) {
  checkFile(f);
}

// ----- report -----

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ All clear.");
  process.exit(0);
}

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings) {
    console.log(`   ${w.file}:${w.line}  ${w.msg}`);
  }
  console.log();
}

if (errors.length) {
  console.log(`❌ ${errors.length} error(s):`);
  for (const e of errors) {
    console.log(`   ${e.file}:${e.line}  ${e.msg}`);
  }
  console.log();
  process.exit(1);
}

console.log("✅ No errors (warnings only).");
process.exit(0);
