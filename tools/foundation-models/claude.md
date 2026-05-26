<!--
---
type: tool
slug: claude
name: Claude
category: foundation-models
url: https://claude.ai
maker: Anthropic
pricing: freemium
price_range: $0-200/mo
china_availability: 🟡
modalities:
  - text
  - image
  - code
  - file
strengths:
  - 写作自然度第一
  - 长上下文(1M tokens)
  - 编程能力(SWE-bench 87.6%)
  - 安全性 / 拒绝有度
weaknesses:
  - 国内访问难度大且持续提升
  - 速度比 GPT 慢
  - 多模态(图/语音/视频)弱于 GPT 和 Gemini
  - 没有原生联网能力
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: 写作 + 编程双第一,长上下文成熟
recommended_for_scenarios:
  - writing-code
  - debugging
  - long-form-writing
  - prd-writing
  - code-review
  - paper-digesting
  - learning-new-domain
alternatives:
  - chatgpt
  - gemini
  - deepseek
  - kimi
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# Claude

> Anthropic 出的基础模型。**写作 + 编程双第一**,长上下文 1M。是当前所有"写代码 / 写长文"任务的首选模型。
> Tier S。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Anthropic](https://www.anthropic.com) |
| **当前版本(2026-05)** | Opus 4.7(旗舰) · Sonnet 4.7(性价比) |
| **支持模态** | 文本 · 图片 · 代码 · PDF/文档 |
| **上下文窗口** | **1,000,000 tokens(1M)**,无分级费率 |
| **最大输出** | 128K tokens(Batch API 可到 300K) |
| **API 模型 ID** | `claude-opus-4-7` / `claude-sonnet-4-7` |
| **国内可用性** | 🟡 **难度提升**,见下方"国内用户必看" |

---

## Tier 评级:S

**评级理由**:
- **写代码**:Opus 4.7 在 SWE-bench Verified 拿到 **87.6%**(2026-05 公开 benchmark 第一)
- **写长文**:中文 / 英文长文自然度持续保持人类评估第一(对手是 GPT)
- **长上下文**:1M tokens 上下文能力**比 GPT 多 4 倍**,做复杂跨文档任务时无可替代
- **agent 工具调用**:Anthropic 在 agent / tool-use 标准上推动最深(MCP 协议、Computer Use、Agent Skills)

> **不是"全能第一"** — 多模态(图/视频/语音输出)、原生联网、记忆功能都弱于 GPT。但在"思考 + 写"这条核心赛道上,2026 年没有对手。

---

## 它最适合做什么(具体场景)

### ✅ 写中文 / 英文长文

**为什么是它**:Claude 写出来的中文最不像 AI(没那种"首先 / 其次 / 综上"的塑料感),英文也比 GPT 更接近"真人记者写的"。

适合:
- [写长文 / 博客](../../scenarios/long-form-writing.md)
- [写 PRD](../../scenarios/prd-writing.md)
- [写技术文档](../../scenarios/writing-tech-doc.md)
- [写营销文案](../../scenarios/marketing-copy.md)

### ✅ 写代码(尤其是长任务)

**为什么是它**:跨多文件协作、复杂重构、长链路 debug,Claude 比 GPT 更稳。

适合:
- [写代码 / 实现新功能](../../scenarios/writing-code.md)
- [Debug 复杂 bug](../../scenarios/debugging.md)
- [代码 Review](../../scenarios/code-review.md)
- [API / 架构设计](../../scenarios/api-design.md)

> 想用 Claude 跑长任务的程序员,首选 **Claude Code**(Anthropic 自家 CLI agent),见 [tools/coding-agent/claude-code.md](../coding-agent/claude-code.md)

### ✅ 长文档消化

**为什么是它**:1M 上下文,你可以一次扔进去 5-7 篇 PDF 论文,让它做交叉对比。GPT 的 200K 做不到。

适合:
- [论文消化](../../scenarios/paper-digesting.md)
- [快速学新领域](../../scenarios/learning-new-domain.md)
- [整理用户反馈](../../scenarios/feedback-synthesis.md)

### ✅ 复杂推理 / 决策

**为什么是它**:Opus 4.7 的 adaptive thinking 比 GPT-5.x 慢但稳。需要反复推敲的决策类问题(法律 / 商业 / 数据分析)Claude 错得少。

---

## 它**不擅长**什么(必读字段)

### ❌ 多模态生成

不能生成图片 / 不能生成视频 / 不能生成音频。
- 想生图 → [Midjourney](../image-gen/midjourney.md) / [FLUX](../image-gen/flux.md) / [Nano Banana](../image-gen/nano-banana.md)
- 想生视频 → [Veo](../video-gen/veo.md) / [Sora](../video-gen/sora.md) / [Kling](../video-gen/kling.md)
- 想生音频 → [Suno](../audio/suno.md) / [ElevenLabs](../audio/elevenlabs.md)

### ❌ 原生联网搜索

Claude 没有内置的实时网页搜索(2026-05)。需要联网信息时:
- 用 [Gemini](./gemini.md)(Google 搜索深度集成)
- 用 [Perplexity](../research/perplexity.md)(专业 AI 搜索)
- 用 ChatGPT Search(GPT 内置)

### ❌ 速度

Claude 比 GPT-5.x 和 Gemini 3.5 Flash 慢。**短任务 / 高频问答**它体感不如 GPT。
- 反应速度敏感场景 → [ChatGPT](./chatgpt.md) / [Gemini](./gemini.md)
- 国内即时问答 → [豆包](./doubao.md) / [DeepSeek](./deepseek.md)

### ❌ 记忆 / 持续性对话

GPT 有 Memory 功能(跨对话记住你),Claude 的 Projects 是手动管理 context,**不是真正的长期记忆**。
- 重度依赖"AI 记得我" → [ChatGPT](./chatgpt.md)

### ❌ 在中国大陆用

这是 Claude 最大的硬伤。**2026-02 之后 Anthropic 已正式更新条款**,禁止中国大陆 / 港澳 / 中国大陆公司海外子公司商业访问。
详细见下方"国内用户必看"。

---

## 真实使用 tips(从经验沉淀)

### 1. 长任务用 Project,不要丢散对话

Claude Projects = 一个固定 context 的对话池。
- 把项目相关的代码 / PRD / 设计文档传到一个 Project
- 每次新任务都从这个 Project 开新对话
- AI 自动带上下文,不用每次复述

**比 ChatGPT 的 Custom GPT 更轻量**,5 分钟就能配好一个项目。

### 2. 用 Artifacts 做"AI 写作 + 边改边看"

Artifacts 是 Claude 的"右侧实时面板"。
- 让 Claude 写 React 组件 → Artifacts 实时预览
- 让 Claude 写 SVG 图 → Artifacts 渲染
- 让 Claude 写 Markdown → Artifacts 排版

**比 ChatGPT Canvas 更稳定,bug 少**。

### 3. Opus 还是 Sonnet?

90% 任务用 **Sonnet 4.7** 就够,而且 Pro 用户额度 5 倍多。

什么时候用 **Opus 4.7**:
- 极复杂推理(数学证明 / 法律分析)
- 跨 50+ 文件的代码任务
- 需要"再仔细想想"的决策类

**Pro 用户都能切**,默认 Sonnet,需要时手动切 Opus。

### 4. 1M context 不是免费的

虽然 Pro 不限 token 上下文,但**塞太多到一个对话里 Claude 会"健忘"** —— 它不会用全部 1M 思考,前 30% 容易被"压缩"。

实战:
- 一次塞 < 100K(约 3-5 万字)效果最好
- 长文档先让 Claude 写一份"摘要 + 关键索引",再基于摘要讨论
- 真要处理超长文,用 Project 拆成多个对话

### 5. 不喜欢就直说

Claude 的对齐(alignment)训练让它**默认输出"全面的客观分析"**。这经常不是你要的。

prompt 加一句:
> "不要列正反两面,直接给我你的判断 + 理由"

效果立刻改善。同样的 prompt 对 GPT 没那么有效。

### 6. 编程任务必加项目说明

不要直接 "帮我实现 X"。**给 Claude 看你的项目结构 + 约定**:

```
项目背景:
- TypeScript + React 18,用 Tanstack Query
- 不要引入新依赖,用项目里已有的
- 命名约定:hooks 用 useXxx,组件用 PascalCase
- 不用 default export

需求:[需求描述]
```

效果比裸提需求好 3 倍以上。

---

## 替代方案(什么时候不用 Claude)

| 替代 | 什么时候选它 |
|------|-------------|
| [ChatGPT(GPT-5.x)](./chatgpt.md) | 多模态、原生联网、要记忆、需要快 |
| [Gemini 3 Pro](./gemini.md) | 真要跨 1M+ 资料 / 深度集成 Google 搜索 |
| [DeepSeek V4](./deepseek.md) | 国内首选 / 性价比无敌 / 推理任务 |
| [Kimi K2.5](./kimi.md) | 国产 + 长文档 + agent |
| [豆包](./doubao.md) | 国内即时问答 / 移动端 / 语音 |

---

## 价格分析

### 个人订阅(消费者档)

| 档位 | 价格 | 适合谁 |
|------|------|------|
| **Free** | $0 | 偶尔试用,**用 Sonnet,几条就到限额** |
| **Pro** | **$20/月**(年付 $17) | **最划算的 AI 订阅之一** · 含 Web + Code + Cowork |
| **Max 5x** | $100/月 | Pro 不够用 + 长任务党 |
| **Max 20x** | $200/月 | Claude Code 重度 + 商业用 |
| **Team** | $30/seat | 5 人以上协作 |
| **Enterprise** | 定制 | 大公司,有数据合规要求 |

### 我的预算建议

```
学生 / 入门尝试:           Free + 备一个 DeepSeek
个人主力(写作/产品):      Pro $20/mo(几乎所有人都该这一档)
程序员重度 + Claude Code:  Max 5x $100/mo 起步,看用量加到 Max 20x
极重度 + 商业项目:         Max 20x $200/mo
```

**关键判断**:Pro 月费 $20 在 AI 订阅里**最值钱**。换算成产出,**1 篇 5000 字博客 / 一次大重构 / 一份 PRD** 就回本。

### API 价格(开发者档)

| 模型 | Input(per M tokens) | Output(per M tokens) |
|------|--------------------:|---------------------:|
| **Sonnet 4.7** | $3 | $15 |
| **Opus 4.7** | $5 | $25 |

省钱技巧:
- **Prompt Caching** 省 90%(把固定 system prompt 缓存)
- **Batch API** 省 50%(异步,适合非实时任务)

---

## 国内用户必看(重要)

### 现实情况(2026-05)

**Anthropic 已正式不向中国大陆提供商业访问**。

- 2025-09:Anthropic 加强地区限制,明确禁止中国大陆 / 港澳 / 中国公司海外子公司
- 2026-02:Anthropic 公告,**因蒸馏攻击事件**(中国 AI 公司被指用 24,000 个伪造账号生成 1600 万次对话用于训练自家模型),进一步收紧账号风控
- 2026-05:**新注册账号被检测为来自中国地区,大概率被立即封号**

### 你能做什么

**理论上的"自配方案"**:
1. 海外信用卡(中国大陆卡基本被封)
2. 全程稳定的国际 IP(住宅 IP 比机房 IP 安全)
3. 海外手机号验证

**实际风险**:
- 账号生命周期短(经常一两个月被封)
- 付款经常被风控
- 即使能用,**违反 Anthropic ToS**

### 我的建议

如果你**只是工作 / 学习用**,**强烈推荐切到国产模型**:
- 写代码 → [DeepSeek V4](./deepseek.md)(中文圈最强,几乎免费)
- 写长文 → [Kimi K2.5](./kimi.md) / 通义
- 通用 → [豆包](./doubao.md) / DeepSeek
- 长文档 → Kimi(200K context 直接打 Claude)

国内开发者**完全可以不用 Claude**,DeepSeek + Kimi 已经覆盖 90% 场景。

如果你**真的需要 Claude**(比如英文写作 + 海外业务):
- 走 Claude API + 第三方代理(注意 ToS 风险)
- 通过支持 Claude 的 IDE / 终端工具(Cursor / Cherry Studio 等)间接使用,模型费用走平台

> ⚠️ **不推荐方式**:任何"中转站 + 共享账号 + 包月套餐",这类 99% 是数据黑洞。你的 prompt 和 conversation 都被记录,严重数据泄漏。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2025-09 | Sonnet 4 发布 | SWE-bench 突破 70%,coding agent 时代开启 |
| 2026-02 | **Sonnet 4.6 + Opus 4.6** | Sonnet 反超 Opus 4.5 在多数任务,首次让 Pro 用户够用 |
| 2026-04 | **Opus 4.7 发布** | 1M context 无分级费率 + SWE 87.6%,跨多文件能力质变 |
| 2026-04 | Claude Cowork 公开 | "agent 接管文件"模式,办公场景重大升级 |
| 2026-05 | Sonnet 4.7 同步推出 | **当前性价比之王**,90% 用户的默认选择 |

---

## 与 Claude 相关的"产品树"(避免混淆)

很多人把"Claude"和"Claude Code"混淆。它们是**模型 + 不同产品形态**的关系:

```
Claude(本页讲的就是这个,模型本身)
   │
   ├── claude.ai(Web 聊天界面)
   ├── Claude Desktop / Mobile App
   ├── Claude Code(终端 CLI agent)→ [tools/coding-agent/claude-code.md](../coding-agent/claude-code.md)
   ├── Claude Cowork(agent 接管文件)
   └── Anthropic API → 各种第三方产品(Cursor / Cherry Studio / Continue...)
```

本页讲**模型本身**(能力、定价、限制)。
要看具体产品形态(Code CLI / Cowork / API)的实操,去对应工具页。

---

## 拓展阅读

- 官方:[Claude 模型概览](https://docs.anthropic.com/en/docs/about-claude/models)
- 官方:[Pricing](https://www.anthropic.com/pricing)
- 官方:[Anthropic Geographic Restrictions](https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions)
- 第三方:[Claude vs GPT vs Gemini 2026 横评](https://www.cosmicjs.com/blog/best-ai-for-developers-claude-vs-gpt-vs-gemini-technical-comparison-2026)

---

[← 回到 foundation-models](./README.md)
