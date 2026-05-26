<!--
---
type: tool
slug: codex-cli
name: Codex CLI
category: coding-agent
url: https://github.com/openai/codex
maker: OpenAI
pricing: paid
price_range: $20-200/月(随 ChatGPT 订阅)/ API 自费
china_availability: 🟡
modalities:
  - code
  - text
  - file
strengths:
  - GPT 重度用户的自然延伸
  - GitHub 集成深(同公司)
  - 速度比 Claude Code 略快
  - 多模态(看截图 / 看图改代码)
  - Microsoft / Azure 企业生态
weaknesses:
  - 长任务多文件能力略输 Claude Code
  - "Codex" 这个名字反复使用导致混淆
  - 国内合法访问门槛高
  - 工具调用生态不如 MCP 规范
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 综合接近 Claude Code,GPT 用户的天然首选
  - date: 2025-04
    tier: A
    reason: Codex CLI 重启上线,产品打磨期
recommended_for_scenarios:
  - writing-code
  - debugging
  - reading-codebase
  - code-review
alternatives:
  - claude-code
  - aider
  - cursor
  - github-copilot
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Codex CLI

> OpenAI 重启的终端 Coding Agent。**对标 Claude Code,GPT 重度用户的自然选择**。
> Tier A+。综合能力接近 Claude Code,但**长任务多文件场景略弱半档**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [OpenAI](https://openai.com) |
| **形态** | 终端 CLI(`npm install -g @openai/codex`) |
| **底层模型** | GPT-5 / GPT-5 Pro / GPT-5 mini(可切) |
| **支持平台** | macOS / Linux / WSL |
| **核心机制** | 终端原生 + sandbox 模式 + GitHub 深度集成 |
| **国内可用性** | 🟡 OpenAI 地区限制(同 ChatGPT)|

---

## 名字混淆先理清

OpenAI 用过两次 "Codex" 这个名字:
- **2021 Codex**:GPT-3 衍生的代码模型,就是 Copilot 早期底层(已停服)
- **2024-2025 Codex** ≠ 上面那个,**是新启动的 Coding Agent 产品**(本页讲这个)

不要混淆。以下"Codex"全部指 **Codex CLI**(`@openai/codex`)。

---

## Tier 评级:A+

**评级理由**:
- **GPT 用户的天然延伸**:已经付 ChatGPT Plus / Pro 的人**几乎不需要纠结**
- **多模态**:Codex CLI 能看截图(GPT 多模态强项),给图改代码 / 看 UI 调样式
- **GitHub 集成深**(GitHub 是 Microsoft 的,OpenAI 是 Microsoft 重投):PR / Issue / Action 联动顺
- **速度略快**:GPT-5 推理速度比 Claude 快,小任务体感更顺

> **不是 S 的原因**:
> - 长任务多文件**仍输 Claude Code 半档**(Claude Opus 4.7 SWE-bench 高)
> - 工具调用生态没有 MCP 规范(虽然 OpenAI 也在做 Function Calling Tools 标准)
> - "Codex" 名字反复使用导致用户混淆,品牌认知略乱
> 给 GPT 用户它就是 S。但**站在客观工程师视角,Claude Code 仍是行业第一**。

---

## 它最适合做什么

### ✅ GPT 用户的"长任务终端 Agent"

如果你**已经付 ChatGPT Plus / Pro**,Codex CLI 是免费附带:
- $20/月就能用
- 无缝继承 ChatGPT 的 Memory / Custom Instructions
- 多设备同步(电脑跑的项目状态会续到 ChatGPT App)

适合场景同 [Claude Code](./claude-code.md):
- [写代码 / 实现新功能](../../scenarios/writing-code.md)
- [Debug 长链路](../../scenarios/debugging.md)
- [读懂老项目](../../scenarios/reading-codebase.md)
- [Code Review](../../scenarios/code-review.md)

### ✅ 多模态任务(看截图改代码)

Codex CLI 能直接看图(粘贴 / 拖入 / 路径):
- "看这个 Figma 截图,实现成 React 组件"
- "前端页面不对劲,这是截图,调整 CSS"
- "看这个错误日志截图,排查"

**Claude Code 也能看图,但 GPT 多模态略胜**(尤其复杂图表 / UI 细节)。

### ✅ GitHub 深度联动

Codex 和 GitHub 集成做得最深(同体系):
- `codex pr review` 自动 review PR
- `codex from-issue #123` 直接根据 issue 干活
- GitHub Action 自动跑 Codex
- Microsoft / Azure 企业账号无缝接入

**已经在 GitHub 重度用 + 大公司 SSO 用户**:Codex CLI 是天然选择。

### ✅ 数据 / 分析任务

GPT 系自带 Code Interpreter / Data Analysis 强项,Codex CLI 在做:
- 数据清洗 + 可视化
- 跑 ML 实验
- 处理 Jupyter Notebook

这块比 Claude Code 略顺(因为 OpenAI 在数据分析这条赛道投得早)。

---

## 它**不擅长**什么

### ❌ 极长任务跨大量文件

Claude Code 在跨 30+ 文件任务上**仍是行业第一**。
Codex CLI 在长任务里**偶尔会"忘前面"或"重复改同一处"**,比 Claude Code 多 1-2 次纠正。

长任务 + 资金充足 → Claude Code。

### ❌ 国内"安全访问"

OpenAI 没像 Anthropic 那么彻底封,但**也没有正式服务中国大陆**:
- 大陆 IP 直连 grok.com / chatgpt.com / api 不通
- 注册需海外手机号 + 海外 IP
- 中国信用卡几乎都被风控

详见 [chatgpt.md 国内用户必看](../foundation-models/chatgpt.md#国内用户必看)。

### ❌ 极致省钱

OpenAI API 价格 GPT-5 $5/$15。
省钱党 → [Aider + DeepSeek](./aider.md) 月费 ¥10。

### ❌ "拍马屁"问题

GPT 系模型有 sycophancy 倾向,**Codex CLI 也继承**:
- 你说"这代码有 bug 对吗",它先承认
- 你的方案它倾向赞同

**重要决策必须 prompt 显式抑制**:
> "不要先同意我,直接判断 + 反对论据"

Claude Code 这方面**好不少**。

---

## 真实使用 tips

### 1. AGENTS.md 等价于 Claude Code 的 CLAUDE.md

Codex 项目根目录放 `AGENTS.md`,作用一样:
- 项目约定
- 编码风格
- 不要做的事

格式自由,markdown。Codex 启动自动读。

### 2. Codex sandbox 模式严格

Codex CLI 有 "sandbox" 模式:
- 默认**只能改你授权的目录**
- 跑命令前必须**显式 approve**
- 删文件 / git push 等操作有二次确认

**比 Claude Code 默认模式更"防呆"**,但**频繁 approve 也烦**。
熟悉项目后 → `--no-sandbox` 一把梭。

### 3. ChatGPT App 桥接 Codex CLI

桌面版 ChatGPT App **能直接调用本地 Codex**:
- 你在手机 / 平板上用 ChatGPT 给指令
- 桌面机器跑 Codex 实际执行
- 适合"在外面想到任务,远程触发"

**Claude Code 没有这种"双端联动"**,这是 GPT 生态优势。

### 4. 用 GPT-5 mini 跑批量

短任务 / 批量 / 重复脚本:`codex --model gpt-5-mini`
- 价格 1/12 GPT-5 标准
- 速度快
- 简单任务质量足够

跑 lint 修复 / 写注释 / 简单重构:**mini 完全够**。

### 5. /web 命令调实时搜索

Codex CLI 内置 web 搜索(GPT-5 自带):
> /web 查 React 19 release notes 的 breaking changes

直接拉**官方文档 + Stack Overflow + 最新 issue**。
Claude Code 没这个能力(Anthropic 还没原生联网)。

### 6. GitHub Action workflow 集成

`.github/workflows/codex.yml`:

```yaml
name: Codex auto-review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: openai/codex-action@v1
        with:
          api-key: ${{ secrets.OPENAI_API_KEY }}
          task: review
```

PR 自动 AI review。**比 Copilot Reviews 灵活**(可定制 prompt)。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Claude Code](./claude-code.md) | 长任务多文件 / 准确度优先 / 已在 Anthropic 生态 |
| [Aider](./aider.md) | 开源 / 国内 + DeepSeek / 极致省钱 |
| [Cursor](../ide/cursor.md) | 不想用终端 / 短任务 / GUI 体验 |
| [GitHub Copilot](../code-completion/github-copilot.md) | 不要 agent,只要补全 |

---

## 价格分析

### 个人订阅(走 ChatGPT 订阅)

| 档位 | 价格 | Codex CLI 额度 |
|------|------|---------|
| **Plus** | $20/月 | 中等,日常 1-2 个任务 |
| **Pro** | $200/月 | 大额度,长任务全天跑 + Sora |

### 自配 API(独立)

| 模型 | Input | Output |
|------|------:|-------:|
| GPT-5 | $5 / M | $15 / M |
| GPT-5 Pro | $30 / M | $90 / M |
| GPT-5 mini | $0.4 / M | $1.6 / M |

### 我的预算建议

```
GPT 用户 + 短任务为主:              Plus $20,Codex 附带就够
GPT 用户 + 长任务每天:               Pro $200,或者切 Claude Max
程序员只想试一个:                   先试 Plus,不够再加
团队 / 企业:                       Azure OpenAI(国内合规)/ Pro
国内自配:                          Aider + DeepSeek 性价比无敌
```

---

## 国内用户必看

### 现状

OpenAI 同 ChatGPT,**没正式服务中国大陆但比 Anthropic 宽松**。
- 详见 [chatgpt.md 国内用户必看](../foundation-models/chatgpt.md#国内用户必看)

### 国内程序员的"长任务编程"实际选项

| 方案 | 优劣 |
|------|------|
| Codex CLI(自配 GPT) | 体验好,但海外卡 + 代理 + 风控 |
| **Aider + DeepSeek** | 推荐 ✅ 国产闭环,几乎免费 |
| Cursor + DeepSeek API | 短任务为主,IDE 形态 |
| Kiro + 自带模型 | 国内可直连 |

---

## Codex CLI vs Claude Code 对比表

| | **Codex CLI** | **Claude Code** |
|---|---|---|
| **底层模型** | GPT-5 / Pro / mini | Sonnet / Opus 4.7 |
| **长任务多文件** | A+ | **S** |
| **多模态** | **A+**(看图强) | A |
| **速度** | **A+** | A |
| **GitHub 集成** | **S**(同体系) | A |
| **MCP 工具调用** | A(Function Tools) | **S** |
| **项目记忆** | AGENTS.md | CLAUDE.md(等价) |
| **联网** | **S**(GPT 自带 web) | C(无原生) |
| **国内访问** | 🟡 | 🟡(更难) |
| **价格** | 同 ChatGPT 订阅 | 同 Claude 订阅 |
| **生态** | OpenAI / Microsoft / Azure | Anthropic / MCP / 第三方 |

**结论**:
- 客观最强 → Claude Code(长任务能力)
- 多数 GPT 用户合理选择 → Codex CLI
- **很多人两个都用**(分别用最适合的任务)

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2021 | 旧 Codex 模型 | 当时仅作为 Copilot 底层 |
| 2024-09 | **Codex CLI 重启发布** | OpenAI 正式入场终端 agent |
| 2025-02 | sandbox 模式 + GitHub Action | 工程化能力补齐 |
| 2025-08 | GPT-5 集成 | 综合能力对标 Claude 4 |
| 2026-01 | **GPT-5 Pro 集成 + 多模态强化** | 复杂任务质变 |
| 2026-04 | ChatGPT App 双端联动 | 生态优势放大 |

---

## 一句话决策树

```
你已经付 Claude Pro / Max?      → 用 Claude Code
你已经付 ChatGPT Plus / Pro?    → 用 Codex CLI
都没付,海外身份 OK?             → 先试 Claude Code(长任务强)
国内 + 不折腾代理?               → Aider + DeepSeek
预算极紧?                       → Aider + DeepSeek
```

---

## 拓展阅读

- 官方:[Codex 文档](https://platform.openai.com/docs/codex)
- 官方:[Codex CLI GitHub](https://github.com/openai/codex)
- 第三方:[Codex vs Claude Code 实战对比 2026](https://lmarena.ai/leaderboard)

---

[← 回到 coding-agent](./README.md)
