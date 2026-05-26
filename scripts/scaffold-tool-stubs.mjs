#!/usr/bin/env node
/**
 * Generate "pending" stub files for tools that are referenced by completed pages
 * but haven't been deep-written yet.
 *
 * Same idea as scaffold-scenarios.mjs:
 *   - Avoid broken links
 *   - Keep referenced slugs reserved
 *   - Make the next contributor aware of what's queued
 *
 * Idempotent: skips if already exists, unless --force.
 */

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const force = process.argv.includes("--force");

// Tools that are referenced from existing pages but don't have full content yet.
// Each entry: { path: "tools/<cat>/<slug>.md", slug, name, category, blurb }
const PENDING_TOOLS = [
  // image-gen
  { path: "tools/image-gen/ideogram.md", slug: "ideogram", name: "Ideogram", category: "image-gen", blurb: "海报 / Logo / 文字渲染专精的文生图,在文字嵌图场景胜 Midjourney / FLUX 一档。" },
  { path: "tools/image-gen/firefly.md", slug: "firefly", name: "Adobe Firefly", category: "image-gen", blurb: "Adobe 的商用 license 明确文生图,集成 Photoshop / Illustrator,设计师工作流首选。" },
  { path: "tools/image-gen/sdxl.md", slug: "sdxl", name: "Stable Diffusion XL", category: "image-gen", blurb: "完全开源的文生图,生态最早,LoRA / ControlNet 海量。被 FLUX 在 2024-2025 反超。" },

  // audio
  { path: "tools/audio/music-02.md", slug: "music-02", name: "MiniMax Music-02", category: "audio", blurb: "MiniMax 的文生歌模型,国产对标 Suno,集成在海螺生态。" },

  // notes
  { path: "tools/notes/tana.md", slug: "tana", name: "Tana", category: "notes", blurb: "高级笔记软件,类 Roam Research 升级版,支持知识图谱 + AI 集成。学习曲线陡。" },

  // ppt
  { path: "tools/ppt/xunfei-zhiwen.md", slug: "xunfei-zhiwen", name: "讯飞智文", category: "ppt", blurb: "讯飞出的国产 AI PPT,在政企 / 教育合规场景有优势,免费档慷慨。" },
];

const TEMPLATE = ({ slug, name, category, blurb }) => `<!--
---
type: tool
slug: ${slug}
name: ${name}
category: ${category}
status: draft
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# ${name}

> ⚠️ **本工具页为占位,完整深拆月度更新中**。

${blurb}

---

## 当前简要

(等待深度笔记。当前可参考分类总览:[${category}/](./README.md))

---

## 你可以做什么

- 提议 / 贡献完整深拆 → 用 [_templates/tool-template.md](../../_templates/tool-template.md)
- 看完整 Tier List → [meta/TIER-LIST.md](../../meta/TIER-LIST.md)
- 看类似工具的深度笔记 → 同分类 [README.md](./README.md)

---

[← 回到 ${category}](./README.md)
`;

let created = 0;
let skipped = 0;

for (const t of PENDING_TOOLS) {
  const fullPath = resolve(process.cwd(), t.path);
  mkdirSync(dirname(fullPath), { recursive: true });
  if (existsSync(fullPath) && !force) {
    skipped++;
    continue;
  }
  writeFileSync(fullPath, TEMPLATE(t));
  console.log(`[${force && existsSync(fullPath) ? "force" : "new"}] ${t.path}`);
  created++;
}

console.log(`\nDone. created=${created}, skipped=${skipped}.`);
