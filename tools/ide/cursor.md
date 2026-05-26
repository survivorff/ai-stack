<!--
---
type: tool
slug: cursor
name: Cursor
category: ide
url: https://cursor.com
maker: Anysphere
pricing: freemium
price_range: $0-200/月
china_availability: 🟢
modalities:
  - code
  - text
  - image
strengths:
  - 行业 AI IDE 事实标准
  - VS Code fork,生态全继承
  - Composer 多文件改造体验最成熟
  - Background Agent 异步任务
  - 模型可切(Claude/GPT/Gemini/自配 API)
  - 国内可直连 + Stripe 卡可付
weaknesses:
  - 长任务深度仍逊 Claude Code
  - 索引大型项目耗资源
  - Agent 模式有时"过于主动"乱改
  - 团队 / 企业合规支持仍在补
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: AI IDE 事实标准,日常 90% 编程
  - date: 2024-09
    tier: A
    reason: 早期 GPT-4 配置不够稳定
recommended_for_scenarios:
  - writing-code
  - debugging
  - reading-codebase
  - code-review
alternatives:
  - windsurf
  - kiro
  - trae
  - claude-code
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Cursor

> Anysphere 出的 AI IDE。**2025-2026 年最被广泛使用的 AI 编程产品**。
> Tier S。**程序员日常 90% 编程的主战场**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Anysphere](https://cursor.com)(YC + a16z 重投) |
| **形态** | VS Code fork(独立 IDE,~95% 兼容 VS Code 插件) |
| **底层模型** | Claude / GPT / Gemini / DeepSeek 全都接 |
| **支持平台** | macOS / Windows / Linux |
| **核心机制** | Tab 补全 + Composer + Agent + Background Agents |
| **国内可用性** | 🟢 网络通,Stripe 卡可付 |

---

## 它是什么(关键认知)

Cursor 是**装 AI 的 VS Code**:
- 它**继承 VS Code 全部生态**(插件、theme、key binding)
- 在 VS Code 之上加了 4 个核心 AI 能力:Tab 补全 / Cmd+K 局部改 / Composer 多文件改 / Agent 模式

```
┌───────────────────────────────────────────────────┐
│  Cursor IDE                                        │
│                                                    │
│  [VS Code 编辑器,你已有的所有插件]                 │
│                                                    │
│  + Tab(每写一两行实时建议下面 5-30 行)              │
│  + Cmd+K(选中代码 → AI 局部重写)                   │
│  + Composer(多文件改造,你确认每一处 diff)          │
│  + Agent(更自主,跨多文件 + 跑命令)                 │
│  + Background Agent(后台异步,类 Devin)             │
└───────────────────────────────────────────────────┘
```

**Cursor 不是模型**,是"AI IDE"。
底层调 Claude / GPT / 其他模型(可切,有套餐限额或自配 API key)。

---

## Tier 评级:S

**评级理由**:
- **行业事实标准**:AI 编程社区默认讨论的就是 Cursor
- **VS Code fork 战略**:**不用学新 IDE**,无缝过渡
- **Composer 多文件能力**:其他 IDE 在追,Cursor 持续领先半档到一档
- **生态飞轮**:用户多 → 反馈多 → 模型微调好 → 用户更多
- **国内可用 + Stripe 可付**:对国内开发者实际可触达

> Cursor 的 S 不是"无短板",而是"**整体平衡 + 没有可替代品**":
> - 长任务深度不如 Claude Code(但 Cursor 加 Background Agent 在追)
> - 国产/中文支持不如 Trae(但中文任务也能用)
> - 模型不锁(这是 Cursor vs Kiro 等"绑定 IDE"的核心优势)

---

## 它最适合做什么

### ✅ 程序员的"日常 IDE"

如果你写代码每天 4h+:
- **Cursor 是日常 IDE**(从 VS Code 切换零成本)
- 短任务 / 中等任务(改一个文件 / 一个 feature)用 Tab + Cmd+K + Composer
- 长任务才考虑 Claude Code / Aider

适合:
- [写代码](../../scenarios/writing-code.md)
- [Debug](../../scenarios/debugging.md)
- [读懂老项目](../../scenarios/reading-codebase.md)
- [Code Review](../../scenarios/code-review.md)
- [API 设计](../../scenarios/api-design.md)

### ✅ Tab 补全是"AI 时代的生产力革命"

Cursor 的 Tab 补全和 GitHub Copilot 不一样:
- Copilot:每行写完,补**下一行**
- **Cursor Tab:补"接下来 5-30 行"**,而且**预测你想改哪几个地方**

实战体感:
- 你重构一个函数签名 → Cursor 自动建议改所有调用方
- 你改一个状态字段名 → Cursor 跳到所有引用,一个个 Tab 接受
- "**不只是补全,是 multi-edit 预测**"

### ✅ Composer 改多文件

Cmd+I 打开 Composer:
- 选中相关文件(或让 Cursor 自动选)
- 描述任务 → Cursor 生成多文件 diff
- 你逐个 review / 接受 / 拒绝

**比手工"切换多个文件 + 改"快 5 倍**,且 diff 模式让 review 直观。

### ✅ Background Agent(异步任务)

Cursor 2025 年加的功能,**类 Devin 但价格便宜**:
- 给一个任务 → Cursor 在后台跑(自带 sandbox)
- 你继续做别的
- 完成 → 通知,你 review

**对"短-中任务异步"是最佳工具**(长任务仍推荐 Claude Code)。

### ✅ 模型自由 + 自配 API

Cursor 内置多模型,Pro 用户可在:
- Claude Sonnet / Opus 4.7
- GPT-5 / Pro
- Gemini 3 Pro
- DeepSeek V4
- 自配 OpenAI 兼容 API key

**这条让 Cursor 没有 vendor lock-in 焦虑** —— 模型挂了 / 涨价 / 政策变,**切一下**就行。

---

## 它**不擅长**什么

### ❌ 跨 30+ 文件的复杂长任务

Cursor Agent 模式跑长任务时会**偶尔"忘前面"或"漏改文件"**。
**长任务质量上限仍是 Claude Code**。

应对:
- 真长任务 → 切 Claude Code(终端)
- Cursor + Background Agent 是"**短-中任务异步**"

### ❌ 大型项目(200+ files)的索引性能

Cursor 索引大项目会:
- 占内存(M 系列 Mac 8GB 顶不住)
- 索引时间长
- 偶尔索引漂移导致"找不到引用"

应对:
- 升级到 16GB+ Mac
- 用 `.cursorignore` 排除 dist/ build/ 等
- 切 Composer 时手动 @ 加文件而不是让它自动猜

### ❌ Agent 模式过度主动

Cursor Agent **会"主动改你没让它改的文件"**:
- 你说"加个 toast 通知"
- 它把你 toast 库的 wrapper 也"顺手优化了"
- 出 PR 一看 diff 8 个文件,7 个不在你预期里

**Cmd+K / Composer 比 Agent 更可控**。Agent 适合熟悉的项目 + 简单任务。

### ❌ Linux 体验 / 性能

Cursor 在 Linux 上的体验**比 macOS / Windows 略差**(更新慢、偶尔 GUI 卡)。
重度 Linux 用户可考虑:
- Cursor 跑可以,但容忍一些 quirks
- 备 Aider 当 fallback

### ❌ 团队 / 企业合规

Cursor 的 Business / Enterprise 在补(privacy mode / SSO / audit log),**但 vs GitHub Copilot 仍有差距**。
强合规需求 → Copilot Business / 自部署。

---

## 真实使用 tips

### 1. Tab 补全是被严重低估的功能

很多人以为 Tab = Copilot 类的"行补全"。
**Cursor Tab 是 multi-line + multi-cursor + 预测下一步**。

**最佳实战**:
- 大胆 Tab(看到合理建议直接接受)
- 不合理立刻 Esc(让 AI 重新算)
- 写代码节奏从"我写一行 + AI 帮我"变成"AI 写一段 + 我 Tab"

适应一周后,**单位时间产出翻倍**。

### 2. .cursorrules / .cursor/rules/ 是项目记忆

项目根放 `.cursorrules`(legacy)或 `.cursor/rules/*.mdc`(新):

```markdown
# Project Rules

## Stack
- TypeScript strict
- pnpm,不用 npm
- vitest,不用 jest

## 风格
- 不用 default export
- 命名 kebab-case 文件,camelCase 函数
- 不引入新依赖,先问

## 不要做
- 不要 console.log,用 src/lib/logger
- 不要碰 .env
```

**Cursor 全局会读这份规则**,所有 Tab / Composer / Agent 都遵守。

### 3. @ 关键 = 给上下文

Cursor 里到处用 @:
- `@filename.ts` - 把文件加进 context
- `@folder/` - 整个文件夹加进
- `@docs` - 项目文档(配置过的)
- `@web` - 联网搜索
- `@codebase` - 全项目搜索
- `@git` - git 历史 / diff

**写好 prompt = 一半靠 @**:
> @schema.prisma @user.service.ts 给 user 加 phone 字段

不需要描述项目结构,Cursor 直接看相关文件。

### 4. 切模型按任务用

| 任务 | 模型选哪个 |
|------|---------|
| 短任务 / Tab / Cmd+K | **Sonnet 4.7**(默认,最稳) |
| 复杂推理 / 架构 | **Opus 4.7** / GPT-5 Pro |
| 找 bug / debug | **Opus 4.7**(深度推理) |
| 多模态(图) | **GPT-5** / Gemini 3 |
| 长上下文跨多文件 | **Gemini 3 Pro 1M** |
| 国内省钱 | **DeepSeek V4** |

**Cursor 顶部有 model picker**,任务里随时切。

### 5. Composer 比 Agent 更可控

Cmd+I 打开 Composer:
- 你选定 / 自动选文件 → 描述任务
- 看 diff → 接受 / 修改 / 拒绝

**比 Agent 慢 30%,但 review 质量高 3 倍**。
重要项目 / 关键模块 → **永远用 Composer**,不用 Agent。

### 6. Background Agent 适合"懒得开始的简单任务"

- "升级 Tailwind 4"
- "把所有 console.log 替换成 logger.info"
- "给所有 service 加 try/catch + 日志"

**走开喝杯咖啡,回来 review PR**。
对手 Devin 但价格便宜得多(Cursor Pro 自带配额)。

### 7. 国内开发者:配 DeepSeek 或 Kimi

`Settings → Models → Add custom OpenAI-compatible model`:

```
DeepSeek:
  Base URL: https://api.deepseek.com
  Model: deepseek-chat
  API Key: sk-xxx

Kimi(长上下文):
  Base URL: https://api.moonshot.cn/v1
  Model: moonshot-v1-128k
  API Key: sk-xxx
```

**月费 ¥10-30,体验 80% 接近 Claude**。
对预算紧的国内开发者:**Cursor + DeepSeek 是最佳搭配**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Windsurf](./windsurf.md) | Cursor 的 #1 平替 / 长任务 Cascade 模式 |
| [Kiro](./kiro.md) | Spec 驱动 / 文档先行 / 国内可直连 |
| [Trae](./trae.md) | 国产 + 中文优先 + 字节生态 |
| [Claude Code](../coding-agent/claude-code.md) | 长任务质量优先 / 终端原生 |
| [Aider](../coding-agent/aider.md) | 开源 / 国内 + DeepSeek / 极致省钱 |

---

## 价格分析

### 个人订阅

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Hobby** | $0 | 限额 Tab + 限额 Premium 模型 |
| **Pro** | **$20/月** | **Tab 无限 + Premium 500 次/月**(大多数人首选) |
| **Pro+** | $60/月 | 高用量个人 + Background Agent 配额 |
| **Ultra** | $200/月 | 重度 + 商用(配额拉高 + Agent 优先) |
| **Business** | $40/seat | 团队 + 隐私 + SSO |

### 我的预算建议

```
程序员主力 + 短中任务为主:        Pro $20,大多数人这一档够
程序员重度 + Agent 多任务:         Pro+ $60
团队:                              Business $40/seat
省钱党 / 国内:                     Pro $20 + 自配 DeepSeek API key,几乎免费
```

**Cursor Pro $20 + Claude Pro $20 / Claude Code Max** 是 2026 年程序员主流配置:**Cursor 写日常,Claude Code 跑长任务**。

---

## 国内可用性(🟢)

- ✅ 网络通(无需代理)
- ✅ Stripe 卡 / 部分国内信用卡可付
- ✅ 模型可自配国产(DeepSeek / Kimi)→ 完全国内闭环
- 🟡 Cursor 默认套餐里的 Premium 模型(Claude / GPT / Gemini)调用走海外,**网络偶尔掉**(可切自配 API key 解决)

**国内程序员推荐组合**:**Cursor Pro $20 + 自配 DeepSeek key**,体验稳 + 月费可控。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2023-09 | Cursor 公开,VS Code fork | 早期 GPT-4,体验拉胯 |
| 2024-04 | Composer 多文件 | AI IDE 体验拐点 |
| 2024-09 | Tab 补全大版本(multi-line) | 单条 best feature 出现 |
| 2024-12 | **A16Z 重投,估值 $2.5B** | 行业地位稳固 |
| 2025-04 | Cursor 1.0 + Background Agent | 异步 agent 形态 |
| 2025-09 | Sonnet 4 + Opus 4 一手集成 | 模型平台优势放大 |
| 2026-02 | **Cursor 2.0** + Cmd+K 升级 | 模型路由智能化 |
| 2026-04 | 国内自配 API 体验优化 | 国内开发者比例继续上升 |

---

## 一段经验:为什么 Cursor 是日常 IDE 的最优解

我自己的对比试用过(2024-2026):
- VS Code + Copilot:**老一代标准**,补全弱于 Cursor Tab 一档
- JetBrains + AI Assistant:**JetBrains 重度用户的合理选**,但 AI 体验落后
- Windsurf:**Cursor 平替**,Cascade 长任务略好,日常体验 95%
- Kiro:**spec 驱动有意思**,但日常短任务效率不如 Cursor
- Trae:**国产 + 中文好**,生态深度尚浅

**Cursor 是"日常 IDE"的最优解**,长任务 / 异步任务可以 add Claude Code / Background Agent / Devin 补充。

**最稳的 2026 程序员配置**:
```
日常 IDE:     Cursor Pro $20
长任务:       Claude Code(Max 5x $100)或 Aider + DeepSeek
模型对照:     有时切回 Claude / GPT 网页问问题
```

---

## 拓展阅读

- 官方:[Cursor 文档](https://docs.cursor.com)
- 官方:[Cursor Models](https://docs.cursor.com/models)
- 评测:[Cursor vs Windsurf 实战 2026](https://lmarena.ai/leaderboard)
- 社区:[awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)

---

[← 回到 ide](./README.md)
