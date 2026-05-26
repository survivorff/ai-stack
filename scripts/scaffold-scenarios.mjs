#!/usr/bin/env node
/**
 * Generate scenario stub files based on the canonical list in scenarios/README.md.
 *
 * Why:
 *   - 角色页和工具页 reference 大量场景文件
 *   - 大部分场景目前还没写完整版本
 *   - 但每个引用的目标必须存在,否则:
 *       - lint 报死链
 *       - 读者点进去 404
 *       - 维护者搞不清"哪些场景已经规划过"
 *
 * Solution:
 *   生成所有 scenarios/<slug>.md stub。已存在的不覆盖。
 *   每个 stub:
 *     - 有完整的 frontmatter(包在 HTML 注释里)
 *     - 有"骨架结构"(痛点 / 推荐工具 / 待写说明)
 *     - 标 status: draft 让 lint 知道这是 stub
 *
 * Usage:
 *   node scripts/scaffold-scenarios.mjs           # idempotent, 跳过已存在
 *   node scripts/scaffold-scenarios.mjs --force   # 覆盖所有
 */

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const force = process.argv.includes("--force");
const SCENARIOS_DIR = resolve(process.cwd(), "scenarios");
mkdirSync(SCENARIOS_DIR, { recursive: true });

// Canonical scenario list — slug => metadata
// 保持和 scenarios/README.md 同步
const SCENARIOS = [
  // 💻 开发 / 工程(已完整,跳过 — 只写还没写的)
  // writing-code / debugging / reading-codebase / writing-tech-doc / code-review / api-design / tech-research

  // 📋 产品 / 创业
  { slug: "prd-writing", title: "写 PRD / 需求文档", emoji: "📄", roles: ["product-manager", "founder"], pain_points: ["写起来慢,反复改", "团队对齐难", "模板不一致", "工程师看不懂"] },
  { slug: "user-research", title: "用户调研 / 访谈", emoji: "🎤", roles: ["product-manager", "founder"], pain_points: ["招募用户难", "访谈整理耗时", "结论提炼困难"] },
  { slug: "competitor-analysis", title: "竞品分析", emoji: "🏷", roles: ["product-manager", "founder", "marketer"], pain_points: ["信息散乱", "深度分析慢", "对比维度难选"] },
  { slug: "feedback-synthesis", title: "用户反馈整理", emoji: "📊", roles: ["product-manager", "marketer"], pain_points: ["反馈量大", "归类难", "提炼优先级慢"] },
  { slug: "business-plan", title: "写商业计划 / BP", emoji: "📊", roles: ["founder"], pain_points: ["从 0 写难", "市场分析专业度", "财务预测"] },
  { slug: "market-research", title: "市场调研", emoji: "🔍", roles: ["founder", "marketer", "product-manager"], pain_points: ["信息碎片", "深度调研慢", "国内外资料散在不同源"] },

  // 🎨 设计 / 视觉
  { slug: "ui-concept", title: "UI 概念稿 / 设计探索", emoji: "🖼", roles: ["designer", "product-manager"], pain_points: ["概念稿出 3 版才接近想法", "灵感卡住", "和需求对不上"] },
  { slug: "marketing-image", title: "做营销图 / Banner", emoji: "🖌", roles: ["designer", "creator", "marketer"], pain_points: ["每次都从零开始", "节日 / 活动赶时间", "团队风格不统一"] },
  { slug: "logo-design", title: "Logo 与品牌设计", emoji: "🎯", roles: ["designer", "founder"], pain_points: ["概念探索慢", "客户改需求", "矢量化难"] },
  { slug: "wireframe", title: "原型 / 线框图", emoji: "📐", roles: ["designer", "product-manager"], pain_points: ["从 0 画累", "改需求频繁", "和开发对接慢"] },
  { slug: "cover-image", title: "做封面图", emoji: "🎬", roles: ["creator", "designer", "marketer"], pain_points: ["每篇内容要新封面", "风格难一致", "文字嵌入难"] },
  { slug: "product-photography", title: "产品 / 商业摄影", emoji: "📸", roles: ["designer", "marketer", "founder"], pain_points: ["实拍贵", "AI 生成质感不够商业", "版权问题"] },

  // ✍️ 内容 / 写作
  { slug: "long-form-writing", title: "写长文 / 博客", emoji: "✍️", roles: ["creator", "founder", "marketer", "developer"], pain_points: ["选题难", "调研耗时", "写得慢", "多平台改编累"] },
  { slug: "social-writing-cn", title: "写公众号 / 知乎", emoji: "📰", roles: ["creator", "marketer"], pain_points: ["平台口味不同", "排版烦", "钩子写不好"] },
  { slug: "social-writing-en", title: "写 X / LinkedIn", emoji: "🐦", roles: ["creator", "founder"], pain_points: ["英文表达", "thread 节奏", "打入海外圈子"] },
  { slug: "xiaohongshu-content", title: "写小红书图文", emoji: "📱", roles: ["creator", "marketer"], pain_points: ["平台审核严", "图文一致难", "钩子要密"] },
  { slug: "marketing-copy", title: "写营销文案", emoji: "💬", roles: ["marketer", "creator", "founder"], pain_points: ["写得慢", "多版本测试", "品牌调性"] },
  { slug: "seo-optimization", title: "SEO 优化", emoji: "🔎", roles: ["marketer", "founder"], pain_points: ["关键词调研慢", "标题 / 描述写作", "不懂技术细节"] },
  { slug: "edm", title: "EDM / 用户触达邮件", emoji: "📨", roles: ["marketer", "founder"], pain_points: ["主题率低", "复制粘贴模板没差异化", "A/B 测试设计"] },
  { slug: "news-tracking", title: "追时事 / 追新闻", emoji: "📡", roles: ["creator", "marketer", "founder"], pain_points: ["信息过载", "辨别真假", "深度跟进难"] },

  // 🎬 多媒体
  { slug: "short-video", title: "短视频脚本 + 制作", emoji: "🎬", roles: ["creator", "marketer"], pain_points: ["脚本写不好", "拍摄成本高", "剪辑慢", "封面 + 标题难"] },
  { slug: "voice-over", title: "配音 / TTS", emoji: "🎙", roles: ["creator", "educator"], pain_points: ["不想出声", "录音环境差", "多语言切换"] },
  { slug: "music-generation", title: "生成 BGM / 音乐", emoji: "🎵", roles: ["creator", "marketer"], pain_points: ["版权曲库不够用", "原创音乐贵", "情绪不对路"] },

  // 💼 办公 / 协作
  { slug: "making-ppt", title: "做 PPT / 演示", emoji: "📊", roles: ["office-worker", "marketer", "product-manager", "educator"], pain_points: ["手做半天 / 一天", "模板不专业", "改老板意见反复"] },
  { slug: "meeting-notes", title: "会议纪要 / 总结", emoji: "📝", roles: ["office-worker", "product-manager"], pain_points: ["手写记不全", "整理慢", "Action Items 漏"] },
  { slug: "email-writing", title: "写邮件 / 邀请", emoji: "📨", roles: ["office-worker", "founder"], pain_points: ["商务措辞难", "中英切换", "不知道写多详细"] },
  { slug: "data-in-excel", title: "Excel / 数据处理", emoji: "📊", roles: ["office-worker", "marketer", "product-manager"], pain_points: ["公式记不住", "VLOOKUP 难", "图表选不对"] },
  { slug: "work-reporting", title: "写周报 / OKR", emoji: "📋", roles: ["office-worker", "product-manager", "marketer"], pain_points: ["每周重复", "结构化难", "老板要数字"] },
  { slug: "business-translation", title: "商务翻译 / 英文邮件", emoji: "🌐", roles: ["office-worker", "founder"], pain_points: ["中英差异大", "正式度难把握", "术语不准"] },
  { slug: "quick-translation", title: "快速翻译", emoji: "🌐", roles: ["developer", "office-worker", "student"], pain_points: ["看英文资料卡", "网页 / PDF 不能复制", "工作流打断"] },
  { slug: "legal-assist", title: "法律 / 合同初审", emoji: "⚖️", roles: ["founder", "office-worker"], pain_points: ["条款看不懂", "找律师贵", "不知道哪里有坑"] },

  // 📚 学习 / 研究
  { slug: "learning-new-domain", title: "学一个新领域", emoji: "🆕", roles: ["student", "developer", "founder", "educator"], pain_points: ["不知道从哪开始", "信息过载", "学了忘"] },
  { slug: "paper-digesting", title: "论文消化", emoji: "📚", roles: ["student", "educator", "developer", "founder"], pain_points: ["英文累", "术语难", "看了忘"] },
  { slug: "reading-notes", title: "读书 + 做笔记", emoji: "📖", roles: ["student", "creator"], pain_points: ["读完即忘", "找不到当时高亮", "不知道怎么沉淀"] },
  { slug: "exam-prep", title: "刷题 / 备考", emoji: "✏️", roles: ["student"], pain_points: ["量大无章法", "错题不消化", "答疑没人在"] },
  { slug: "thesis-writing", title: "写毕业论文 / 课程论文", emoji: "🔬", roles: ["student"], pain_points: ["选题难", "文献综述累", "结构不规范"] },

  // 👨‍🏫 教学 / 培训
  { slug: "lesson-planning", title: "备课 / 教案", emoji: "📚", roles: ["educator"], pain_points: ["每年重复", "学情变化", "差异化难"] },
  { slug: "grading", title: "批改作业", emoji: "✍️", roles: ["educator"], pain_points: ["量大耗时", "客观题机械", "评语写不动"] },
  { slug: "onboarding-new-hire", title: "带新人 / 培训", emoji: "👥", roles: ["educator", "developer"], pain_points: ["新人重复问同一题", "知识库不全", "没时间手把手"] },
  { slug: "personalized-tutoring", title: "个性化辅导", emoji: "🎓", roles: ["educator"], pain_points: ["每个学生不同", "难以同时辅导", "答疑量大"] },

  // 数据 / 分析
  { slug: "data-analysis", title: "数据分析", emoji: "📊", roles: ["product-manager", "marketer", "developer", "founder"], pain_points: ["SQL / Python 不熟", "可视化烦", "得出结论慢"] },
];

const TEMPLATE = ({ slug, title, emoji, roles, pain_points }) => `<!--
---
type: scenario
slug: ${slug}
title: ${title}
emoji: ${emoji}
roles:
${roles.map((r) => `  - ${r}`).join("\n")}
pain_points:
${pain_points.map((p) => `  - ${p}`).join("\n")}
status: draft
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# ${emoji} ${title}

> ⚠️ **本场景为骨架,完整内容月度更新中**。已建索引,可看推荐工具组合。

---

## 你为什么读到这里?(痛点)

${pain_points.map((p) => `- ${p}`).join("\n")}

---

## 推荐工具组合(2026-05)

(详细工作流月度更新中。当前可参考各角色页 / 工具页 / 已发布的工作流。)

### 主力大脑

- [Claude Sonnet 4.7](../tools/foundation-models/claude.md) — 海外 / 写作 / 严肃任务
- [DeepSeek V4](../tools/foundation-models/deepseek.md) — 国内 default
- 其他模型见 [foundation-models/](../tools/foundation-models/)

### 这个场景特别相关的分类

(根据角色查工具组合表,见对应 [角色页](../roles/))

---

## 相关场景

- 通用入口 → [所有场景](./README.md)
- 适合你的角色 → [角色入口](../roles/)

---

## 帮助我们完善

如果你有这个场景的实战经验、prompt 模板、工具组合,欢迎贡献:
- 开 PR 用 [_templates/scenario-template.md](../_templates/scenario-template.md) 写完整版
- 详见 [CONTRIBUTING.md](../CONTRIBUTING.md)

---

[← 回到所有场景](./README.md)
`;

let created = 0;
let skipped = 0;

for (const sc of SCENARIOS) {
  const path = resolve(SCENARIOS_DIR, `${sc.slug}.md`);
  if (existsSync(path) && !force) {
    skipped++;
    continue;
  }
  writeFileSync(path, TEMPLATE(sc));
  console.log(`[${force && existsSync(path) ? "force" : "new"}] scenarios/${sc.slug}.md`);
  created++;
}

console.log(`\nDone. created=${created}, skipped=${skipped} (already existed).`);
