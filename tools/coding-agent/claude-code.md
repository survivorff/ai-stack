<!--
---
type: tool
slug: claude-code
name: Claude Code
category: coding-agent
url: https://www.anthropic.com/claude-code
maker: Anthropic
pricing: paid
price_range: $20-200/月(随 Claude 订阅)
china_availability: 🟡
modalities:
  - code
  - text
  - file
strengths:
  - 跨多文件长任务能力第一
  - CLAUDE.md 项目记忆机制(简单且强大)
  - 终端原生(不被 IDE 绑死)
  - MCP 协议生态(工具调用最规范)
  - Plan / Edit / Auto 三档可控
weaknesses:
  - 对中国大陆用户访问极困难
  - 终端体验有学习曲线(非程序员上手难)
  - 长任务费 token(Sonnet 也要钱)
  - 没有 GUI 调试 / 断点等 IDE 能力
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: 长任务编程的事实标准,2025 年的拐点级产品
  - date: 2024-09
    tier: A
    reason: 早期形态,生态尚不成熟
recommended_for_scenarios:
  - writing-code
  - debugging
  - reading-codebase
  - code-review
  - api-design
  - writing-tech-doc
alternatives:
  - codex-cli
  - aider
  - cursor
  - kiro
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Claude Code

> Anthropic 出的终端 CLI Coding Agent。**程序员长任务编程的事实标准**。
> Tier S。**它和 Cursor 不在一个层级**(Cursor 是 IDE,Claude Code 是"模型 + 工具集合")。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Anthropic](https://www.anthropic.com) |
| **形态** | 终端 CLI(`npm install -g @anthropic-ai/claude-code`) |
| **底层模型** | Claude Sonnet 4.7 / Opus 4.7(可切) |
| **支持平台** | macOS / Linux / WSL(Windows 原生通过 WSL2) |
| **核心机制** | 读项目 + 编辑文件 + 跑命令 + git 操作,全终端 |
| **国内可用性** | 🟡 受 Anthropic 地区限制,见下方 |

---

## 它是什么(关键认知)

**Claude Code 不是 IDE,也不是补全插件**。

它是一个**跑在终端里的 AI 工程师**:
- 你 `cd` 到项目目录
- 输入 `claude` 进入对话
- 然后跟它说 "把 user 表加一个 phone 字段,改 schema、改 service、加 migration、写测试"
- 它自己**读项目结构 → 改多个文件 → 跑命令 → 跑测试 → 提交 git**
- 你只在重要节点确认(改文件前 / 跑命令前)

```
┌────────────────────────────────────────┐
│  你的终端(任何项目,任何 IDE)         │
│  $ cd ~/projects/my-app                │
│  $ claude                              │
│  > 把 user 表加 phone 字段...          │
│                                          │
│   [Claude 读 8 个文件,改 3 个文件,      │
│    跑 npm test,提交 git commit]         │
└────────────────────────────────────────┘
```

**和 Cursor / Kiro 的区别**:
- Cursor / Kiro = IDE(必须在它们的窗口里写代码)
- Claude Code = 终端 agent(任何 IDE / 任何编辑器都能配合用)

---

## Tier 评级:S

**评级理由**:
- **长任务跨多文件第一**:这是 2025-2026 整个行业唯一公认的"事实标准"
- **CLAUDE.md 机制简单且强大**:用一个 markdown 文件就能让 agent "记住项目所有约定"
- **终端原生**:不绑定 IDE,可与任何工作流融合
- **MCP 协议**:Anthropic 推动的"agent 工具调用标准",生态最规范
- **2025 是 Coding Agent 元年,Claude Code 是这个元年的代表产品**

> 它的"S"是**长任务编程场景**的 S。短任务 / 局部改动用它反而**慢且费钱**(用 Cursor 更顺)。

---

## 它最适合做什么

### ✅ 跨多文件的实现性任务

举例:
- "给后端加一个 webhook 接收端,改 schema、加 service、加 router、加测试、写文档"
- "把项目从 Vue 2 升到 Vue 3,所有兼容性问题处理掉"
- "把全项目的 console.log 替换成结构化 logger"
- "这个 PR 评论有 8 条改动建议,你逐条改完"

**Claude Code 做这种任务,平均比人工快 5-10 倍**。

适合场景:
- [写代码 / 实现新功能](../../scenarios/writing-code.md)
- [API 设计](../../scenarios/api-design.md)
- [代码 Review](../../scenarios/code-review.md)

### ✅ 古早项目快速上手

接手陌生代码库时:
```
> 这个项目入口在哪?核心模块怎么交互?给我画 mermaid 图。
> 解释一下 src/auth/ 这个文件夹每个文件的职责。
> 这个项目怎么本地运行?写一个 GETTING_STARTED.md。
```

**Claude Code 会真的去读所有相关文件**,不是凭直觉答。

适合场景:
- [读懂老项目](../../scenarios/reading-codebase.md)

### ✅ 长链路 Debug

复杂 bug(竞态、死锁、内存泄漏)排查链路长,需要"读多个文件 + 跑命令 + 看日志"循环。
**Claude Code 把这个循环自动化** —— 你只在每一步关键决策点确认。

适合场景:
- [Debug](../../scenarios/debugging.md)

### ✅ 重构 / 大规模改造

- 升级框架版本(Next.js 14 → 15)
- 重命名某个核心概念跨全项目
- 把 callback 全部改成 async/await
- 把 JS 改成 TS

这类"机械式但要小心"的活,Claude Code 比手工**快且稳**。

### ✅ 文档驱动的开发

配合 [Kiro Spec](../ide/kiro.md) 或写好的 PRD,让 Claude Code 实现:
```
> 看 docs/spec/feature-x.md,实现里面所有功能,加测试,然后开 PR。
```

---

## 它**不擅长**什么

### ❌ 短任务 / 单文件局部改动

短任务用 Claude Code 反而**慢 + 费 token**:
- 它每次启动都要先"读项目"(用 token)
- 走 plan / approval 流程也要"想"
- 改一个 bug 一行代码,Cursor 5 秒,Claude Code 1 分钟

短任务 → [Cursor](../ide/cursor.md) / [Kiro](../ide/kiro.md) / [Windsurf](../ide/windsurf.md)。

### ❌ 设计 / UI / 视觉调整

Claude Code 是"读 / 写代码"的 agent,**它看不到你的浏览器界面**。
- 改 UI 像素 / 调样式 → IDE + 浏览器 DevTools
- 设计组件 → [Cursor](../ide/cursor.md)(可看截图)/ Figma + AI

### ❌ 实时调试 / 断点

终端 agent **没有 GUI 调试器**。
要打断点、看变量、单步 → IDE 自带 debugger。

### ❌ 不需要"项目上下文"的任务

写一个独立小脚本 / 玩玩算法 / 学新东西:
- **直接 [claude.ai](./../foundation-models/claude.md) 网页就够**,不需要 Claude Code

### ❌ 在中国大陆"安全使用"

Anthropic 2026-02 收紧地区限制,大陆账号封号率高。
详见 [claude.md 国内用户必看](../foundation-models/claude.md#国内用户必看重要)。

---

## 真实使用 tips

### 1. CLAUDE.md 是项目级记忆,必写

在项目根目录放一个 `CLAUDE.md`,内容**告诉 agent 项目的"约定"**:

```markdown
# Project Conventions

## Stack
- TypeScript + Node 22
- Fastify + Drizzle + PostgreSQL
- pnpm,不用 npm
- 测试用 vitest,不用 jest

## 编码风格
- 不用 default export
- 文件命名 kebab-case
- 函数命名 camelCase,组件 PascalCase
- 不引入新依赖,先问

## 代码必跑
- pnpm test 必须过
- pnpm lint 必须过
- 不允许 console.log,用 src/lib/logger

## 不要做的事
- 不要改 package.json 的 scripts
- 不要碰 .env 文件
- 不要新建 docs/ 之外的文档目录
```

**Claude Code 启动时自动读 CLAUDE.md**,然后整个会话都会遵守。

效果:**写出来的代码 90% 符合项目风格,不需要反复纠正**。

### 2. 三种执行模式知道何时切

| 模式 | 行为 | 用途 |
|------|------|------|
| **Plan** | 只规划,不动文件 | 探索 / 调研 / 想清楚再动手 |
| **Edit**(默认) | 每次改文件 / 跑命令前问你 | 重要项目 / 不熟的改动 |
| **Auto**(--dangerously-skip-permissions) | 完全自动,不问 | 重复任务 / CI / 你已经熟的项目 |

**实战节奏**:
- 新项目 / 重要改动 → Edit(默认)
- 日常熟悉项目 → 跑两轮 Plan 看思路 → Auto 一把梭
- CI / 脚本化 → Auto 必选

### 3. /clear 是低估的命令

长会话累积 context 变贵 + 模型容易飘。
**做完一个任务 → `/clear` 清掉,开新对话**。

经验:**每个独立任务一个新会话**。10 任务 = 10 会话,而不是"一个长会话跑 10 任务"。

### 4. MCP 让 agent 真正"长出手"

Claude Code 通过 [MCP 协议](https://modelcontextprotocol.io)接外部工具。
官方 + 社区已经写了:
- **filesystem**:读写任意目录
- **github**:开 PR / 看 issue / review
- **playwright**:控制浏览器
- **postgres / mysql**:直接查数据库
- **slack / lark**:在群里发消息
- **stripe / aws**:接业务系统

配置在 `~/.claude.json` 里,**给 agent 装上后,它能做的事质变**。
比如:"看这个 GitHub issue,本地复现,改完开 PR"——**全自动化**。

### 5. Sonnet 还是 Opus

90% 任务 **Sonnet 4.7** 够。Opus 留给:
- 复杂架构设计
- 跨 50+ 文件重构
- 长链路 debug

**$20 Pro 用户可以切 Opus,但额度紧**。重度需要 → Max 5x ($100) / Max 20x ($200)。

### 6. .claude/commands/ 自定义"快捷指令"

在项目里加 `.claude/commands/release.md`:
```markdown
你扮演 release 工程师:
1. 跑 git status 看是否 clean
2. 跑 pnpm test
3. 写 CHANGELOG 草稿
4. 提示我下一个版本号
```

然后会话里直接 `/release`,Claude Code 执行这一套流程。
**每个团队 / 项目都该攒自己的 commands 库**。

### 7. /resume 续上昨天的活

Claude Code 默认每个对话独立。
但有时候**昨晚做到一半电脑死机** → `claude --resume` 进同一项目最近的对话。
不需要重新喂上下文。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Codex CLI](./codex-cli.md) | 已经是 GPT 重度用户 / GitHub 生态深度 |
| [Aider](./aider.md) | 开源情怀 / 极致省钱 / 自配模型(DeepSeek)|
| [Cursor](../ide/cursor.md) | 短任务为主 / 不想用终端 / 要 GUI |
| [Kiro](../ide/kiro.md) | Spec 驱动 / 中文 / 国内可直连 |
| [Devin](./devin.md) | 想试"完全自主 AI 工程师" |

> **Cursor 不是 Claude Code 的"对手"**。它们一个是 IDE,一个是 agent。**很多人同时用**(Cursor 写短任务 + Claude Code 跑长任务)。

---

## 价格分析

Claude Code 是 Anthropic Claude 订阅的**附带产品**,**没有单独价格**。

| 订阅档 | 价格 | Claude Code 额度(粗略) |
|------|------|---------|
| **Pro** | $20/月 | 每天能跑 1-3 个中等任务 |
| **Max 5x** | $100/月 | 重度个人用户起步线 |
| **Max 20x** | $200/月 | 长任务全天跑 / 商业 |
| **API**(自配 key) | 按用量 | 完全弹性,但贵 |

### 我的预算建议

```
试水 + 短任务为主:                   Pro $20
程序员主力 + 每天用 1-2h:             Max 5x $100
重度 + 长任务跑半天:                   Max 20x $200
团队 / 商业:                          Max 20x 起,看人头
```

**和 Cursor Pro 的关系**:很多人**两个都付**($20 + $100 = $120),Cursor 写短任务 + Claude Code 跑长任务。这是 2026 年程序员主流配置。

---

## 国内用户必看

### Anthropic 地区限制

详细见 [claude.md 国内用户必看](../foundation-models/claude.md#国内用户必看重要)。

**简要**:
- 2026-02 之后 Anthropic 已正式禁止中国大陆 / 港澳商业访问
- 大陆账号大概率被风控封号
- 即使能用,违反 ToS

### 国内开发者的"长任务编程" 替代方案

| 方案 | 简评 |
|------|------|
| **[Aider](./aider.md) + DeepSeek API** | **国内最优解**,开源 + 国产模型 + 几乎免费 |
| **[Aider](./aider.md) + Kimi API** | 长上下文场景更好 |
| **[Codex CLI](./codex-cli.md) + GPT** | 自配 GPT(海外卡 + 代理) |
| **[Cursor / Kiro](../ide/cursor.md)** + 国产模型 | IDE 形态,长任务弱一些 |

**推荐组合**:Cursor 短任务 + Aider 长任务,底层都接 DeepSeek。**月费可以做到 ¥30 以内**。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-09 | Claude Code 公开预览 | 终端 agent 形态首次正式产品化 |
| 2025-02 | MCP 协议 1.0 | "agent 工具调用"标准化拐点 |
| 2025-06 | Plan / Edit / Auto 三档 | 控制粒度成熟 |
| 2025-09 | Claude Sonnet 4 + Code 大版本 | SWE-bench 70%+,任务复杂度跃升 |
| 2026-02 | **Anthropic 收紧地区限制** | 中国用户基本失去合法访问 |
| 2026-04 | **Opus 4.7 + 1M context** | 长任务能力又一次质变 |
| 2026-05 | Claude Cowork 公开 | "agent 接管文件"路线开启 |

---

## 一段经验:为什么 Claude Code 改变了我的工作方式

老的工作方式:
- 我先想 / 写 / 调 → 慢但有掌控感
- AI 是"问答助手"

新的工作方式(用 Claude Code 之后):
- **我变成"工程主管 + Reviewer"**
- AI 是"实习工程师"
- 我写 spec / 定方向 / review PR
- 实现细节交给 agent

**单位时间产出**(实测自己的项目):
- 原来一天写 1 个完整功能
- 现在一天能跑 3-5 个并行 feature(开 3 个 Claude Code 同时跑不同任务)

**心智转变**:从"我写代码"到"我设计系统 + 让 agent 落地"。
这是 2025-2026 程序员**最大的工作流变革**。

---

## 拓展阅读

- 官方:[Claude Code 文档](https://docs.anthropic.com/en/docs/claude-code/overview)
- 官方:[MCP 协议](https://modelcontextprotocol.io)
- 社区:[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

---

[← 回到 coding-agent](./README.md)
