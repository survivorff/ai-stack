<!--
---
type: tool
slug: aider
name: Aider
category: coding-agent
url: https://aider.chat
maker: Paul Gauthier(开源)
pricing: free
price_range: 自配 API,DeepSeek 月 ¥10 起
china_availability: 🟢
modalities:
  - code
  - text
strengths:
  - 完全开源(MIT)
  - 模型完全自配(DeepSeek/Kimi/GPT/Claude 都行)
  - git 集成深度第一(每个改动一个 commit)
  - 国内首选 long-task agent(配 DeepSeek)
  - 极致省钱(月 ¥10 不是开玩笑)
weaknesses:
  - 终端体验比 Claude Code / Codex 略糙
  - 没有 sandbox 安全机制
  - 对模型质量依赖强(配差模型质量明显下降)
  - 文档生态不如 Anthropic / OpenAI 官方
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 国产模型时代 Aider 性价比拉满 + 开源唯一选项
  - date: 2024-09
    tier: A
    reason: 起步早,git 集成是亮点
recommended_for_scenarios:
  - writing-code
  - debugging
  - code-review
  - reading-codebase
alternatives:
  - claude-code
  - codex-cli
  - cursor
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Aider

> 完全开源的终端 Coding Agent。**国内开发者最理性的选择**:配 DeepSeek 月费 ¥10。
> Tier A+。**它没有 Claude Code 顺,但完全免费 + 模型自由 + 国内可直连**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **作者** | [Paul Gauthier](https://github.com/paul-gauthier) |
| **形态** | Python 终端 CLI(`pip install aider-chat`) |
| **底层模型** | **任意!**(DeepSeek / Kimi / Claude / GPT / Ollama 本地等) |
| **支持平台** | macOS / Linux / Windows |
| **license** | Apache 2.0,**完全开源** |
| **国内可用性** | 🟢 工具本身,**配国产模型可全程直连** |

---

## 它是什么

**Aider 是开源版的 Claude Code / Codex CLI**:
- 跑在终端
- 读项目结构
- 编辑多个文件
- 自动 git commit(每个改动一个干净的 commit)
- **底层模型完全你自己选**

```bash
# 配 DeepSeek(国内最爽)
export DEEPSEEK_API_KEY=xxx
aider --model deepseek/deepseek-chat

# 配 Claude(海外)
export ANTHROPIC_API_KEY=xxx
aider --model sonnet

# 配本地 Ollama(完全离线)
aider --model ollama/qwen3-coder

# 配 Kimi(长上下文)
aider --model openai/moonshot-v1-128k --openai-api-base https://api.moonshot.cn/v1
```

---

## Tier 评级:A+

**评级理由**:
- **完全开源**:MIT 协议,代码看得见,无 vendor lock-in
- **模型自由**:**这是全行业唯一一个"模型完全可换"的 agent**(Claude Code 锁 Claude,Codex 锁 GPT)
- **git 集成深度第一**:每改一个文件 → 一个 commit,**审查 / 回滚极其方便**
- **国内首选**:配 DeepSeek 完全直连,月费 ¥10
- **持续活跃**:维护者更新频繁,社区生态健康

> **不是 S 的原因**:
> - 终端体验**没 Claude Code / Codex 顺**(prompt 设计、错误处理、UI 反馈都略糙)
> - 没有 sandbox 安全机制(执行命令更"野")
> - 长任务能力**取决于配的模型**(配 DeepSeek 不如配 Claude Opus)
> - 工具调用生态(MCP)落后

它是"**给愿意折腾的人 / 国内开发者 / 省钱党**"的 S Tier。

---

## 它最适合做什么

### ✅ 国内开发者的"长任务编程"(配 DeepSeek)

这是 2026 年国内程序员的"AI 工作流神配置":
- Aider 当 agent 形态
- DeepSeek V4 当底层模型
- 月费 < ¥30,效果约等于 Claude Code 80%

具体步骤:
```bash
pip install aider-chat
export DEEPSEEK_API_KEY=sk-xxx  # deepseek.com 申请
aider --model deepseek/deepseek-chat
```

进入项目目录跑 `aider`,然后:
```
> 给后端加一个 webhook,改 schema、加 service、加测试
```

Aider **会真的去读项目 + 改文件 + 提交 commit**。

### ✅ 重视 git 历史的工作流

Aider 每改一组文件 = 一个 git commit。
- commit message 自动生成 + 清晰
- 任何一步可以 `git checkout HEAD~1` 回滚
- review 时一目了然

**对追求"clean git history" 的工程师,Aider 比 Claude Code 更友好**。

### ✅ 完全离线(配本地 Ollama)

数据敏感场景:
```bash
ollama pull qwen3:32b-coder-q4
aider --model ollama/qwen3:32b-coder-q4
```

**完全离线,代码不出本机**。
适合金融 / 医疗 / 政务 / 个人保密项目。

### ✅ 测试不同模型对比

研究 / benchmark 用:
- 同一个任务,跑一遍 Claude
- 跑一遍 GPT
- 跑一遍 DeepSeek
- 跑一遍 Kimi

**Aider 切模型只要换 `--model` 参数**,极其方便对比。
其他 agent(Claude Code / Codex)都只能用自家模型,做不到这点。

### ✅ 学习 Coding Agent 内部机制

Aider 代码完全开源 + 可读性好。
想理解"agent 怎么读项目 / 怎么 prompt / 怎么处理 conflict",**读 Aider 源码比读 paper 快**。

适合:
- AI 工程师 / 产品经理
- 准备做自家 agent 的团队
- 学术研究者

---

## 它**不擅长**什么

### ❌ "开箱即用"的体验

Aider 需要:
- pip install
- 配 API key
- 选模型
- 读文档理解参数

**完全小白用不来**。
小白 → [Cursor](../ide/cursor.md) / [Kiro](../ide/kiro.md)。

### ❌ 没有 sandbox

Aider 默认会**直接执行命令 / 改文件**。
不熟悉的项目里 + Auto 模式跑 → 风险高。

应对:
- 始终在 git 仓库里跑(可回滚)
- 重要项目用 `--no-auto-commits` 手动控制
- 别拿 Aider 跑陌生项目的 `rm -rf`

### ❌ MCP / 工具调用生态弱

Aider 工具调用**比 Claude Code MCP 少很多**:
- 没有官方 GitHub / Slack / Postgres 集成
- 没有"应用商店"式的 MCP 服务器

要复杂 agent 工作流(connect 多个外部系统)→ **Claude Code 仍胜**。

### ❌ 多模态 / 看图

Aider 主要是"读 + 写代码",对**图截图理解 / 看 UI** 弱。
看图任务 → Cursor / Codex CLI。

### ❌ 长任务可靠性 vs Claude Opus

Aider + DeepSeek **跨 20+ 文件长任务**会比 Claude Code + Opus 多踩 1-2 次坑。
对非常关键的生产代码改动:**Claude Code 仍是质量上限**。

---

## 真实使用 tips

### 1. 配 DeepSeek 是国内最佳实践

```bash
# 一次性配置(放进 ~/.zshrc 或 ~/.bashrc)
export DEEPSEEK_API_KEY=sk-xxx
export AIDER_MODEL=deepseek/deepseek-chat
export AIDER_WEAK_MODEL=deepseek/deepseek-chat  # 也用同一个,省心

# 然后任意项目里
aider
```

**月用量计算**(以我个人项目实测):
- 每天写代码 2-4h,跑 5-10 个 task
- 月费 ¥10-30 之间(波动主要看 task 复杂度)
- 比 Claude Pro $20 便宜 5 倍

### 2. /add 显式加文件比 Aider 自动猜更准

Aider 会"猜"该改哪些文件,但**长项目猜不准**。
显式告诉它:

```
> /add src/auth/login.ts src/auth/login.test.ts
> 把 login 里的 password 字段改名为 passwordHash,改 schema 也跟着改
```

**确定的范围 = 准确的执行**。

### 3. /code 和 /architect 区分

Aider 有两个模式:
- **`/code`**(默认):直接改代码
- **`/architect`**:先规划(类似 Claude Code Plan 模式)

复杂任务先 `/architect` 看思路,确认无误 → `/code` 执行。

### 4. .aider.conf.yml 项目级配置

项目根加 `.aider.conf.yml`:

```yaml
model: deepseek/deepseek-chat
weak-model: deepseek/deepseek-chat
edit-format: diff  # 推荐
auto-commits: true
read:
  - CLAUDE.md  # 把 Claude 的项目说明也读进来
  - README.md
test-cmd: pnpm test
lint-cmd:
  python: ruff check
  javascript: pnpm lint
```

进入项目跑 `aider` → 自动应用这些配置。
**团队共享同一份,所有成员配置一致**。

### 5. 配合 git worktree 跑多任务

Aider 一个会话一个项目目录。
**想并行跑 3 个 feature**?用 git worktree:

```bash
git worktree add ../my-app-feat-a feat-a
git worktree add ../my-app-feat-b feat-b
git worktree add ../my-app-feat-c feat-c

# 三个终端各开一个,分别跑 aider
cd ../my-app-feat-a && aider &
cd ../my-app-feat-b && aider &
cd ../my-app-feat-c && aider &
```

**单机三倍并行**,对生产力提升超过想象。

### 6. /commit 和 /undo

- **`/commit`**:手动控制提交时机
- **`/undo`**:回滚上一次 Aider 改动

任何时候卡住 / 改坏了 → `/undo`,无脑回滚。
**比 Claude Code 的 "看 git diff 自己 reset" 快很多**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Claude Code](./claude-code.md) | 长任务质量优先 / 海外身份 OK / 钱不是问题 |
| [Codex CLI](./codex-cli.md) | 已经是 GPT 用户 / 多模态需求 |
| [Cursor](../ide/cursor.md) | 短任务为主 / 不爱终端 / 要 GUI |
| [Kiro](../ide/kiro.md) | Spec 驱动 / 国内可直连 IDE 形态 |

---

## 价格分析

### 工具本身

**¥0**(开源)

### 模型 API(自配)

| 模型 | 月费(中度使用) |
|------|---------:|
| DeepSeek V4 | **¥10-30** |
| Kimi K2.5 | ¥30-80 |
| Claude Sonnet 4.7 | $30-100($) |
| GPT-5 | $30-100($) |
| 本地 Ollama | ¥0(电费忽略不计) |

### 我的预算建议

```
国内 + 长任务:                Aider + DeepSeek API,月 ¥10-30
国内 + 极致省钱:              Aider + 本地 Qwen3-Coder,完全免费
长上下文:                     Aider + Kimi 长上下文档
海外 + 不差钱:                Claude Code 直接(更顺)
完全离线 / 隐私:              Aider + Ollama 本地
```

---

## 国内可用性(🟢)

- ✅ Aider 工具本身完全开源 + pip 直装
- ✅ 配 DeepSeek / Kimi / GLM / 通义 等国产模型 → **全程国内直连**
- ✅ 配本地 Ollama → 完全离线
- 🟡 配 Claude / GPT → 受底层模型地区限制

**Aider + DeepSeek 是 2026 年国内程序员长任务编程的事实标准**。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2023-09 | Aider 0.x 起步 | 早期开源 agent,默默无闻 |
| 2024-09 | git 集成 + edit format 完善 | 工程师圈口碑形成 |
| 2025-02 | **DeepSeek API 接入** | 国内开发者激增 |
| 2025-08 | /architect 模式 + reasoning model 支持 | R1 / GPT-o3 类模型适配 |
| 2026-01 | aider browser + multi-model 升级 | 体验逐步追近闭源对手 |
| 2026-05 | 国内 Aider + DeepSeek 教程满天飞 | 事实标准建立 |

---

## 一段经验:Aider 是国内程序员的"AI 民主化"

我个人的工作流:
- 短任务:**Cursor**(配 Claude / GPT)
- 长任务:**Aider + DeepSeek**(国内 + 极便宜)
- 重要 / 长链路 task:Claude Code(质量上限)

**Aider 让我能"日常用 AI 写代码而不焦虑钱"**。
DeepSeek 几毛钱跑一个 task,Aider 全开源不被 vendor 绑死。

**这是为什么我把 Aider 评 A+**(差 S 半档,但综合"自由 + 省钱 + 国内可用"维度它是 S)。

---

## 拓展阅读

- 官方:[Aider 文档](https://aider.chat/)
- 官方:[Aider GitHub](https://github.com/Aider-AI/aider)
- 社区:[Aider Discord](https://discord.gg/Tv2uQnR88V)
- 中文:[Aider + DeepSeek 配置指南](https://github.com/topics/aider)

---

[← 回到 coding-agent](./README.md)
