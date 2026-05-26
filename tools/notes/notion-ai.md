<!--
---
type: tool
slug: notion-ai
name: Notion AI
category: notes
url: https://www.notion.so/product/ai
maker: Notion Labs
pricing: paid
price_range: $10/月起 + Notion Plus
china_availability: 🟢
modalities:
  - text
strengths:
  - 集成在你已经在用的 Notion 工作空间
  - 写作 / 摘要 / 翻译 / 续写一站式
  - 接 Slack / Drive / GitHub 跨工具搜
  - 国内可用 + Stripe 卡可付
weaknesses:
  - 模型默认走 Anthropic / OpenAI(切换不灵活)
  - 单价 $10/月 略贵(已经在用 Notion 才划算)
  - 长文 / 复杂任务质量 vs 直接用 Claude / GPT 略弱
tier: A
tier_history:
  - date: 2026-05
    tier: A
    reason: Notion 用户最自然的 AI 集成
recommended_for_scenarios:
  - long-form-writing
  - meeting-notes
  - prd-writing
  - work-reporting
alternatives:
  - claude
  - chatgpt
  - feishu-ai
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Notion AI

> Notion 的 AI 功能。**已经在 Notion 工作的人的最自然 AI 入口**。
> Tier A。**不是"最强 AI",是"最不打断你工作流的 AI"**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Notion Labs](https://www.notion.so) |
| **底层模型** | Claude / GPT(Notion 自动路由,用户可选) |
| **核心能力** | 写作 / 续写 / 摘要 / 翻译 / Q&A / Connections(跨工具搜) |
| **国内可用性** | 🟢 网络通,Stripe 卡可付 |

---

## Tier 评级:A

**评级理由**:
- **集成在 Notion**:你已经在 Notion 写文档 / 笔记 / 项目管理 → AI 直接在 Page 里
- **跨工具搜索 (Connections)**:接 Slack / Google Drive / GitHub / Microsoft Teams → 在 Notion 里搜跨平台资料
- **国内可用**:不像 Claude / GPT 那么麻烦
- **Notion Q&A**:在你整个工作空间里问问题 → AI 自动找答案

**不是 A+ 的原因**:
- **模型选择不灵活**(Notion 默认路由,用户切换有限)
- **单价 $10/月略贵**(已经在用 Notion Plus / Business 才合理)
- **长文 / 复杂任务**质量 vs 直接用 Claude / GPT 略弱
- **不熟 Notion 的人** 没必要专门买

---

## 它最适合做什么

### ✅ 已经是 Notion 用户的 AI 升级

如果你已经:
- 公司团队用 Notion 协作
- 个人在 Notion 写笔记 / 写日记 / 管项目
- 维护一个 Notion 知识库

→ **加 AI 是几乎"免费"的产能升级**:
- Page 里 / 选中文字 → 续写 / 改写 / 翻译 / 摘要
- 跨 Page 问"我在哪个文档讨论过 X"
- 用 AI 帮整理会议纪要 / 写 PRD / 写周报

### ✅ 跨工具搜索(Connections)

Connections 是 Notion AI 的杀手锏:
- 接 Slack(找 Slack 上的讨论)
- 接 Google Drive(找 Drive 文档)
- 接 GitHub(找代码 / PR)
- 接 Microsoft Teams

在一个 Notion 搜索框里 → **跨所有工具找答案**。
**对手 Glean / Coveo 这种企业搜索工具,但 Notion 嵌入式**。

### ✅ 团队 / 工作场景

公司团队场景:
- 写 PRD(Notion 模板 + AI 续写)
- 写技术文档(从代码 / 笔记自动出文档)
- 会议纪要(粘贴录音转写 → AI 提炼)
- 周报 / OKR

适合:
- [写 PRD](../../scenarios/prd-writing.md)
- [会议纪要](../../scenarios/meeting-notes.md)
- [写技术文档](../../scenarios/writing-tech-doc.md)
- [写工作汇报](../../scenarios/work-reporting.md)

---

## 它**不擅长**什么

### ❌ 你不在 Notion

如果你不是 Notion 用户,**为了 AI 单买 Notion + Notion AI 不划算**。
直接用 Claude / GPT / DeepSeek 主力模型更好。

### ❌ 极致写作质量

Notion AI 输出 vs 直接用 Claude.ai:质量略弱(Notion 路由 + 套了一层产品交互)。
**严肃长文写作:仍切回 Claude / GPT 网页**。

### ❌ 写代码 / 复杂推理

Notion AI 不擅长这些。
- 写代码 → Cursor / Claude Code
- 复杂推理 → Claude Opus / GPT-5 Pro

### ❌ 极致省钱

Notion AI $10/月,但 **国产替代飞书智能伙伴是免费的**(对中文 / 国内场景)。

---

## 真实使用 tips

### 1. 看你团队是不是已经在 Notion

是 → Notion AI 是最自然选择。
不是 → **不要为 AI 单买 Notion + AI**(综合月费 $20+ 不划算)。

### 2. Connections 是企业用户隐藏皇冠

很多人没用 Connections(在 Settings 里找)。
接上 Slack / Drive / GitHub 后:
- 跨平台搜索能力质变
- 类似 Glean 但内嵌 Notion
- 对企业 / 团队真值这 $10

### 3. AI 自动整理会议纪要

工作流:
- Otter / 飞书录音 / 手动记录
- 把转写贴到 Notion Page
- AI: "提取 action items,按负责人分组"
- 自动生成结构化纪要

每周节省 1-2h。

### 4. PRD 模板 + AI 续写

写 PRD:
- 从 Notion 模板库找一个 PRD 模板
- 你写一句话需求
- AI 续写各节(背景 / 目标 / 用户故事 / 验收 ...)

**比 Confluence 的 PRD 写法快 3 倍**。

### 5. Q&A 配合知识库

Notion Q&A:
- 在大型 workspace 里(几百页)
- 用自然语言问"我们的流程文档在哪"
- AI 找出对应 page + 总结

**新员工入职用 Q&A,1 周缩到 1 天**。

### 6. 国内场景:飞书智能伙伴可能更合适

国内团队 99% 用飞书 / 钉钉而非 Notion。
- 飞书智能伙伴 = Notion AI 的飞书版本
- 集成深 + 国内可直连 + 中文母语
- 国内团队 → [飞书智能伙伴](./feishu-ai.md) 比 Notion AI 更合适

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| 飞书智能伙伴 | 国内 + 团队场景 |
| 钉钉智能 | 阿里 / 钉钉用户 |
| [Claude](../foundation-models/claude.md) / [GPT](../foundation-models/chatgpt.md) | 不在 Notion / 想要顶级模型 |
| [Tana](./tana.md) | 知识图谱 + AI |

---

## 价格分析

| 档位 | Notion 月费 | + AI 月费 | 总 |
|------|--------|---------|---|
| Free | $0 | + $10 | $10 |
| Plus | $10 | + $10 | $20 |
| Business | $15 | + $10 | $25 |
| Enterprise | 定制 | 含 AI | 定制 |

### 我的预算建议

```
你不在 Notion:                   不买,用 Claude / DeepSeek 主力
你在 Notion 个人:                Plus $10 + AI $10 = $20
你在 Notion 团队:                按团队规模算
中国团队 / 飞书重度:               飞书智能伙伴(免费 / 团队费)
```

---

## 国内可用性(🟢)

- ✅ 网络通(Notion 在国内访问稳定)
- ✅ Stripe 卡可付
- ✅ 中文母语支持
- ✅ Notion 在国内增长稳定

国内 Notion 用户 → Notion AI 可以直接付。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022-11 | Notion AI 公开 | 早期产品,惊艳 |
| 2024-04 | Q&A + 多模型路由 | 实用度提升 |
| 2025-04 | **Connections 跨工具搜** | 企业版差异化建立 |
| 2026-02 | Claude Sonnet 4.7 默认 | 模型质量跃升 |

---

## 拓展阅读

- 官方:[Notion AI](https://www.notion.so/product/ai)
- Notion:[文档](https://www.notion.so/help)

---

[← 回到 notes](./README.md)
