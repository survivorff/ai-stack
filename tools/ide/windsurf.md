<!--
---
type: tool
slug: windsurf
name: Windsurf
category: ide
url: https://windsurf.com
maker: Codeium → OpenAI(2025-07 收购)
pricing: freemium
price_range: $0-60/月
china_availability: 🟢
modalities:
  - code
  - text
  - image
strengths:
  - Cascade 长任务能力优于 Cursor
  - 免费档慷慨(老 Codeium 用户继承)
  - 自动上下文(Memory)做得好
  - VS Code 体验,迁移零成本
  - 被 OpenAI 收购后预算充足
weaknesses:
  - 用户量 / 社区讨论度不如 Cursor
  - 被 OpenAI 收购后定位摇摆(2025 中-2026)
  - 模型路由没 Cursor 灵活
  - 部分 Cursor 独家功能没补齐
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: Cursor 最有力的平替,Cascade 长任务有优势
  - date: 2024-11
    tier: A
    reason: Codeium 时代起步
  - date: 2025-07
    tier: A+
    reason: 被 OpenAI 收购,预算 + 模型权重双加成
recommended_for_scenarios:
  - writing-code
  - debugging
  - reading-codebase
  - code-review
alternatives:
  - cursor
  - kiro
  - trae
  - claude-code
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Windsurf

> Codeium 出的 AI IDE。**Cursor 最强力的平替** —— 长任务 Cascade 模式实测略胜。
> Tier A+。被 OpenAI 收购(2025-07),底层模型 + 预算双加成。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Codeium](https://codeium.com) → 2025-07 被 [OpenAI 收购](https://openai.com/index/openai-acquires-windsurf/) |
| **形态** | VS Code fork(独立 IDE)/ JetBrains 插件 / VS Code 插件 |
| **底层模型** | GPT-5 / Claude / Gemini / 自家 SWE-1 等多模型 |
| **核心机制** | Tab 补全 + Cascade(多文件 agent)+ Inline + Memories |
| **国内可用性** | 🟢 网络通 |

---

## 它和 Cursor 的核心差异

```
Cursor                     Windsurf
─────                      ────────
Composer:                   Cascade:
  多文件 diff,你逐一确认       多文件 + 自动跑命令 + 自动上下文,更自主

Tab 补全:                   Supercomplete:
  multi-line 预测              类似,精度略低但响应略快

主打节奏:                   主打节奏:
  Cmd+K / Composer / Agent     Cascade(主轴)+ Inline + Memories

价格:                       价格:
  Pro $20                     Pro $15

生态:                       生态:
  社区大,讨论度第一            被 OpenAI 收购后预算无忧
```

**简化判断**:
- Cursor = **更平衡 + 短任务最强 + 社区第一**
- Windsurf = **长任务 Cascade 体验更顺 + 价格略低**

---

## Tier 评级:A+

**评级理由**:
- **Cascade 长任务实测胜 Cursor 半档**:多文件改造 + 自动跑命令 + 自动加上下文,流畅度和准确度都好
- **Memories 自动记忆**:Windsurf 会自动记住"项目偏好" + "你的常用习惯",不用手写规则
- **价格略低 + 免费档慷慨**:Pro $15 < Cursor Pro $20,免费档比 Cursor 大方
- **VS Code 兼容,迁移零成本**

> **不是 S 的原因**:
> - **用户量 / 社区讨论度不如 Cursor**(Cursor 是行业事实标准,大多数教程默认 Cursor)
> - 被 OpenAI 收购后**定位仍在调整**(2025 后半到 2026 前半经历产品阵痛)
> - 部分 Cursor 独家功能(Background Agents 详细工作流、cursorrules 生态)Windsurf 仍在追

实际:**A+ 是诚实评级**,**Cursor 平替选项里 Windsurf 是 Top 1**。

---

## 它最适合做什么

### ✅ 想要"Cursor 体验但更自主"的程序员

如果你试过 Cursor 觉得 Composer **总要逐个确认 diff 太烦**:
- 切 Windsurf,Cascade 模式更自主
- 类似"我去吃饭,回来 review 整个 PR"的体验
- 但仍是 IDE 形态(可以随时打断 / 接管)

适合:
- [写代码](../../scenarios/writing-code.md)(中长任务)
- [Debug](../../scenarios/debugging.md)
- [读老项目](../../scenarios/reading-codebase.md)

### ✅ Cursor "拍马屁"问题严重的人

GPT 系模型 sycophancy 倾向重,Cursor 用 Claude / GPT 都会有。
**Windsurf 自带 SWE-1 模型(自研代码模型)**,在某些"硬核工程任务"上比 GPT 决断更直接。

适合"**不想被 AI 同意主义浪费时间**"的人。

### ✅ 学生 / 入门(免费档够用)

Windsurf 免费档:
- Tab 补全无限
- 每月 25 次 Cascade 调用
- 多模型基础访问

**vs Cursor Hobby 免费档,Windsurf 慷慨明显**。
学生 / 试水用户:**先 Windsurf 免费档 + Aider + DeepSeek**,几乎 ¥0 起步。

### ✅ JetBrains 用户(IntelliJ / WebStorm / PyCharm)

Cursor 只有 VS Code fork。
Windsurf 有 **JetBrains 插件**,用 IntelliJ / WebStorm / PyCharm 用户**不用切 IDE**。

JetBrains 重度用户(Java / Kotlin / Scala / Python 严肃工程):**Windsurf 是首选 AI IDE 形态**。

---

## 它**不擅长**什么

### ❌ 社区生态

**Cursor 是行业事实标准**:
- 教程 / 视频 / Reddit / 公众号默认 Cursor
- `.cursorrules` 已经是标准
- StackOverflow 关于 Cursor 的回答远多于 Windsurf

新用户问"AI IDE 用啥",**80% 推荐 Cursor**,Windsurf 是"懂的人才提"。

### ❌ Background Agent 深度

Cursor Background Agent 已经迭代到比较成熟。
Windsurf 类似功能(Cascade Background)还在补,**异步任务体验仍不如 Cursor**。

### ❌ OpenAI 收购后的"摇摆期"

2025-07 OpenAI 收购 Windsurf 后:
- 部分老 Codeium 用户感觉"产品方向变了"
- "自家 SWE-1 vs GPT-5" 的定位偶尔混乱
- 2025 后半 - 2026 前半经历过产品阵痛

**2026-05 开始稳定**,但**长期方向仍取决于 OpenAI 怎么布局 Codex CLI vs Windsurf**(可能合并 / 可能并行)。

### ❌ 模型选择没 Cursor 灵活

Cursor 模型 picker 灵活(顶部一秒切)。
Windsurf **更倾向"自动路由"** —— 简单但不够透明。
重度用户(我要每个任务都精准选模型)→ Cursor 更顺。

---

## 真实使用 tips

### 1. Cascade 适合"中长任务"

最适合 Cascade 的任务:
- 5-30 个文件的改造
- "实现这个 spec,跑测试,提 PR"
- 框架升级
- 重构

**不适合 Cascade 的任务**:
- 单文件单行改 → 直接 Tab + Cmd+I 更快
- 50+ 文件长任务 → Claude Code / Aider 上限更高

### 2. Memories 自动记忆要"教育"

Windsurf 的 Memories 类似 ChatGPT Memory。
但**它会记一些没用的东西** → 定期清理:
- "Cmd+; 看 Memory list"
- 删过期 / 错的
- 避免 AI 基于错记忆给错建议

### 3. 切 GPT 还是 Claude 还是 SWE-1

- **GPT-5**(OpenAI 自家):综合稳,默认推荐
- **Claude Sonnet 4.7**(Windsurf 也接 Claude):写作 / 长上下文更好
- **SWE-1**(Windsurf 自研):某些代码任务更"直接",但成熟度不如前两个

新用户:**先用 GPT-5 默认**,熟悉后再试别的。

### 4. JetBrains 插件配 Windsurf 是隐藏 best fit

Java / Kotlin 用户的 AI IDE 体验:
- VS Code + Cursor 插件:有,但 IntelliJ 重度用户用 VS Code 自己难受
- IntelliJ AI Assistant:JetBrains 自家,但 AI 体验落后 Cursor / Windsurf 一档
- **IntelliJ + Windsurf 插件**:**JetBrains UX + Windsurf AI**,体验最佳

### 5. Codeium 老用户的"白薅"

如果你 2023-2024 注册过 Codeium 免费账号:
- **直接迁移到 Windsurf** → 免费额度持续白薅
- 老 Codeium 教程的 prompt 套路在 Windsurf 仍有效

### 6. 国内同样可配自家 API key

`Settings → Models → Add Custom Provider`:
- DeepSeek / Kimi / Claude 都能加
- 走自家 key 配额走自己

国内用户:**Windsurf + DeepSeek key 是 Cursor + DeepSeek 的同等替代**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](./cursor.md) | 行业默认 / 社区第一 / 短任务最稳 |
| [Kiro](./kiro.md) | Spec 驱动 / 文档先行 |
| [Trae](./trae.md) | 国产 + 中文优先 + 字节生态 |
| [Claude Code](../coding-agent/claude-code.md) | 长任务质量上限 |
| [Aider](../coding-agent/aider.md) | 开源 + 极致省钱 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | $0 | Tab 无限 + 25 Cascade/月 |
| **Pro** | **$15/月** | Cascade 无限 + 多模型 + Memories |
| **Pro Plus** | $60/月 | 高额度 + 优先级 + 团队功能 |
| **Teams** | $35/seat | 协作 + admin |

### 我的预算建议

```
试水:                          Free,Tab + 25 Cascade 够入门
个人主力:                       Pro $15(比 Cursor 便宜 $5)
重度 + Cascade 高频:            Pro Plus $60
团队:                           Teams $35/seat
JetBrains 用户:                 Pro $15(配 IntelliJ 插件)
```

---

## 国内可用性(🟢)

- ✅ 网络通
- ✅ Stripe 卡可付
- ✅ 自配 API key 可走 DeepSeek / Kimi
- 🟡 默认套餐 Premium 模型走海外网络,有时掉(切自配解决)

国内体验**和 Cursor 同档** —— 都🟢 可用。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022-08 | Codeium 起步(免费 Copilot 平替) | 早期免费党最爱 |
| 2024-11 | **Windsurf IDE 发布**,Cascade 模式 | Cursor 第一个真平替 |
| 2025-04 | SWE-1 自研模型 | "代码专属模型"路线 |
| 2025-07 | **OpenAI 收购 Windsurf** | 行业地震,资源拉满 |
| 2025-12 | OpenAI 整合期,产品略迷茫 | 用户口碑略波动 |
| 2026-02 | Cascade 2.0 + Memories 升级 | 长任务体验拉回前列 |
| 2026-05 | 稳定期 | A+ 评级稳固 |

---

## 一句话决策

```
你已经用 Cursor 很顺?               → 没必要折腾,继续 Cursor
你刚开始选 AI IDE?                   → Cursor(社区生态压倒性)
你是 JetBrains 重度用户?             → Windsurf 插件
你想试 Cascade 长任务体验?           → Windsurf Pro $15 试一个月
```

**Cursor 和 Windsurf 不是"你死我活"**,是"两个都好的产品"。
你应该选你试用后**手感更顺**的那个,而不是听别人说哪个更好。

---

## 拓展阅读

- 官方:[Windsurf 文档](https://docs.windsurf.com/)
- OpenAI 收购公告:[blog.openai.com](https://openai.com/index/openai-acquires-windsurf/)
- 评测:[Cursor vs Windsurf 实战 2026](https://lmarena.ai/leaderboard)

---

[← 回到 ide](./README.md)
