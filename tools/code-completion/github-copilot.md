<!--
---
type: tool
slug: github-copilot
name: GitHub Copilot
category: code-completion
url: https://github.com/features/copilot
maker: GitHub / Microsoft
pricing: paid
price_range: $0(学生)/ $10-39/月
china_availability: 🟡
modalities:
  - code
  - text
strengths:
  - GitHub 全家桶集成
  - 团队 / 企业合规支持成熟
  - 多 IDE(VS Code / JetBrains / Visual Studio / Vim)
  - 学生免费(GitHub Student Pack)
  - 模型多选(GPT / Claude / Gemini)
weaknesses:
  - Tab 补全质量已被 Cursor 反超
  - 国内访问需要 GitHub 账号 + 代理
  - 单纯补全场景在 AI IDE 时代被边缘化
  - Workspace / Agent 模式比 Cursor 弱
tier: A
tier_history:
  - date: 2026-05
    tier: A
    reason: 团队 / 企业合规价值仍在,但个人用户已被 Cursor 反超
  - date: 2024-09
    tier: S
    reason: AI 编程开山鼻祖
recommended_for_scenarios:
  - writing-code
  - code-review
alternatives:
  - cursor
  - tongyi-lingma
  - tabnine
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# GitHub Copilot

> GitHub / Microsoft 出的 AI 编程助手。**AI 编程的开山鼻祖**(2021 公开预览)。
> Tier A —— 个人用户已经被 Cursor 反超,**但团队 / 企业合规场景仍是 default**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [GitHub](https://github.com)(Microsoft 子公司) |
| **形态** | VS Code / JetBrains / Visual Studio / Neovim 等 IDE 插件 |
| **底层模型** | GPT-5 / Claude Sonnet 4.7 / Gemini 3 Pro(可切) |
| **核心能力** | Tab 补全 + Chat + Workspace + Agent + Edit + PR Review |
| **国内可用性** | 🟡 GitHub 账号 + 代理(国内代理勉强能用) |

---

## 它是什么

GitHub Copilot 是**"在你已有的 IDE 里加 AI 补全"**:
- 不是独立 IDE
- 装一个插件即可
- 不打破你已有的 IDE 习惯(VS Code / IntelliJ / Visual Studio 都行)

```
[VS Code / IntelliJ / Visual Studio]
  + Copilot 插件
    ├── Tab 补全(行级 / 多行)
    ├── Copilot Chat(IDE 内对话)
    ├── Copilot Workspace(规划 + 多文件)
    ├── Copilot Edits(类似 Cursor Composer)
    ├── Copilot Agent(类似 Claude Code,2025-09 公开)
    └── PR Review(GitHub 网页里 AI review PR)
```

---

## Tier 评级:A

**评级理由**:
- **团队 / 企业合规价值无人替代**:Microsoft / GitHub 系统的 SOC2 / ISO 27001 / HIPAA 等合规
- **多 IDE 支持广**:VS Code / IntelliJ 全家桶 / Visual Studio / Neovim,**唯一一个广覆盖的**
- **学生免费**:GitHub Student Developer Pack 用户白嫖
- **PR Review 集成**:GitHub 网页里 AI review,**无可替代**(其他 AI IDE 做不到)

**不是 S 的原因**:
- **个人用户体验已经被 Cursor / Windsurf 反超**(Tab 补全多行 / Composer 模式 Cursor 都先发)
- **2026 年 Copilot 在追,但仍慢半拍**
- **国内开发者实际访问难度** vs Cursor / Trae 国内可直连
- "**Workspace** / **Agent**"模式 vs Cursor Background Agent / Claude Code 仍弱一档

> 它的 A **是给"团队 / 企业 / GitHub 重度用户 / 学生免费党"** 的合理评级。
> **个人重度开发者 → Cursor 仍胜**。

---

## 它最适合做什么

### ✅ 团队 / 企业(合规优先)

如果你公司:
- 有 SOC2 / ISO 合规要求
- 有 GitHub Enterprise
- 用 SSO / 数据治理审计
- 严格的 AI 数据策略

**Copilot Business / Enterprise 几乎是 default**:
- 数据不用于训练(企业级承诺)
- audit log 完整
- 个人 prompt 不可被管理员看
- IT 审批流流畅(因为已经在 Microsoft 体系)

**Cursor / Windsurf 在合规上仍在追**,Copilot 是稳的。

### ✅ JetBrains 全家桶用户(Java / Kotlin / 大企业)

JetBrains 用户的 AI 选择:
- IntelliJ AI Assistant:JetBrains 自家,体验落后
- **Copilot for JetBrains**:补全质量稳,生态成熟
- Windsurf for JetBrains:Cascade 长任务好

**Java / Kotlin 大企业**:Copilot 是默认稳选。
**个人重度 Java 用户**:Windsurf 更好。

### ✅ 学生(GitHub Student Pack 免费)

学生免费就太香了:
- **Copilot Pro 完全免费**(对学生 / 教师)
- 多个模型 + 高额度
- 主流 IDE 都能用

学生 / 在校生:**直接拿 GitHub Student Pack 白嫖** ([education.github.com](https://education.github.com/pack))。

### ✅ GitHub 仓库 + PR Review

Copilot 做 PR Review 是**独家功能**:
- GitHub 网页 PR 页直接"Copilot Review"
- 自动 AI review changes
- 标出可疑代码 + 提建议
- 集成到 PR check status

**对开源项目维护者 + 团队 PR 流程,这是其他 AI 工具做不到的**。

### ✅ Visual Studio / .NET 工程师

.NET / C# / Visual Studio 工程师**没有 Cursor 替代品**(Cursor 是 VS Code fork,不是 Visual Studio)。
**Copilot for Visual Studio 是 .NET 工程师的唯一选择**。

---

## 它**不擅长**什么

### ❌ Tab 补全质量

**Copilot Tab vs Cursor Tab**:
- Copilot:行级 + 短 multi-line 补全
- **Cursor Tab:multi-line + multi-edit + 跳跃式预测**(质变)

实测:**Cursor Tab 体感比 Copilot 强一档**。
个人用户**为 Tab 体验付费**,Cursor 仍是默认。

### ❌ Composer / Edits 模式比 Cursor 弱

Copilot Edits(类 Cursor Composer)**2024 年才正式出**,迭代慢。
Cursor Composer 已经迭代到第 N 代,体验顺。

多文件改造任务:Cursor 仍胜。

### ❌ Agent 模式比 Claude Code 弱

Copilot Agent(2025-09 公开):
- 长任务能力 vs Claude Code 仍差一档
- 工具调用生态没有 MCP 那么规范
- 多文件长任务可靠性弱

长任务:**Claude Code 仍是第一**。

### ❌ 国内访问

GitHub 国内**勉强能访问**(Cloudflare CDN 走中国节点),但:
- Copilot 服务器 latency 高
- 偶尔掉线
- GitHub 账号注册需要海外手机号
- 信用卡需要海外

国内开发者更顺的选择:**通义灵码**(国产) / Cursor(可直连)。

---

## 真实使用 tips

### 1. Copilot Free 适合"试水"

GitHub 现在有 **Copilot Free** 档(无需付费):
- 每月 50 次 Chat
- 每月 2000 次 Tab 补全
- 适合"先试试"

不够 → Pro $10。够省钱党 → Free 就行。

### 2. 学生务必激活 Student Pack

[GitHub Student Developer Pack](https://education.github.com/pack):
- 大学邮箱 + 学生证
- 通过审核 → Copilot Pro 免费 + 一堆其他工具(JetBrains / DigitalOcean / Namecheap 等)

**有效期 2 年(可续)**。
学生不开是真亏。

### 3. Pro / Pro+ 区别

| 档 | $10/mo | $39/mo |
|---|---|---|
| Tab 补全 | 无限 | 无限 |
| Chat 限额 | 标准 | 高 |
| Agent / Edits 模式 | 标准 | 优先 + 高额度 |
| Premium 模型 | 限额 | 高额度 |
| 价格定位 | 个人轻度 | 个人重度 + 商业 |

**90% 个人用户 Pro $10 就够**。重度 / 商业 → Pro+ $39。

### 4. .github/copilot-instructions.md 项目记忆

类 cursorrules:

```markdown
# Project Conventions

## Stack
- TypeScript + Node 22
- Fastify + PostgreSQL

## 风格
- 不用 default export
- 命名 kebab-case 文件
```

Copilot 自动读项目根的这个文件。

### 5. PR Review 是被低估的功能

GitHub 网页里:任何 PR → 顶部"Copilot Review"按钮。
- 自动 review 整个 PR
- 行级建议
- 类似 reviewer 但 24/7 在线

**对开源项目维护者**:省下 30% review 时间。

### 6. 国内开发者的合理姿势

如果你国内:
- ✅ 用 [通义灵码](./tongyi-lingma.md)(国产 + 免费)做日常补全
- ✅ 用 [Cursor](../ide/cursor.md) 做主力 AI IDE
- ✅ 必要时折腾 Copilot for PR Review(GitHub 项目)

**别为了 Tab 补全单付 Copilot $10**(国产免费且不差)。
**Copilot 的核心价值是 GitHub 集成 + 合规**,不是补全能力。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](../ide/cursor.md) | 个人主力 / Tab 体验 / 整体 AI IDE |
| [通义灵码](./tongyi-lingma.md) | 国产 + 免费 / 国内零门槛 |
| [Tabnine](./tabnine.md) | 私有部署 / 不想用云 |
| [Windsurf](../ide/windsurf.md) | JetBrains 用户的更好选择 |

---

## 价格分析

### 个人订阅

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | $0 | 50 chat / 2000 completions per month |
| **Pro** | $10/月 | Tab 无限 + 标准额度 |
| **Pro+** | $39/月 | 高额度 + 优先级 + Premium 模型 |

### 团队 / 企业

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Business** | $19/seat | 团队管理 + privacy mode |
| **Enterprise** | $39/seat | SSO + audit + advanced security |

### 学生

**Pro 完全免费** —— GitHub Student Developer Pack 申请后激活。

### 我的预算建议

```
学生:                          Student Pack 免费
个人轻度 + GitHub 项目:         Free 档可能够
个人重度:                       Pro $10(但 Cursor $20 整体更好)
企业 / 合规重要:                Business $19/seat
.NET 工程师:                    Pro $10(Visual Studio 唯一选)
```

---

## 国内可用性(🟡)

- 🟡 GitHub 国内可访问(Cloudflare 走中国节点)但 Copilot 服务延迟高
- 🟡 GitHub 账号注册需要海外手机号(Google Voice 等)
- 🟡 付费需海外卡
- ✅ 学生有大学邮箱 → 容易拿到 Student Pack 免费

国内开发者**实际推荐**:
- 学生 → 学生包白嫖
- 工作 → 公司有 GitHub Enterprise 走公司
- 个人 → **不专门买 Copilot**,通义灵码 + Cursor 即可

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2021-06 | **Copilot 公开预览** | AI 编程开山鼻祖 |
| 2022-06 | 正式商用,$10/mo | 第一代 AI 编程付费产品 |
| 2023-07 | Copilot Chat 上线 | 不再只是 Tab |
| 2024-04 | Copilot Workspace | 多文件 / 规划能力 |
| 2024-12 | **多模型支持(Claude/Gemini)** | 不再只是 GPT |
| 2025-04 | Copilot Free 档 | 应对 Cursor 压力 |
| 2025-09 | Copilot Agent + PR Review | Agent 时代追赶 |
| 2026-02 | Pro+ 档 | 价格分层精细化 |

---

## 一段判断:Copilot 的"老牌之痛"

GitHub Copilot 是 AI 编程的"祖师爷",**但 2024-2026 已经被 Cursor 后来居上**。
原因:
- **Cursor "all-in" AI**(整个 IDE 围绕 AI 重构)
- **Copilot 是"GitHub 的一个 feature"**(VS Code 的一个插件)
- 战略上 Cursor 更激进,Copilot 更保守

但 **Copilot 不会消失**:
- GitHub 4000 万开发者基数
- 企业合规生态
- Microsoft 整个 .NET 全家桶

它会**长期是"团队 / 企业 / 合规场景的 default"**,但**个人重度用户的最佳选已经是 Cursor**。

**2026 年我对 Copilot 的看法**:**A 是稳的,S 已经回不去了**。

---

## 拓展阅读

- 官方:[Copilot 文档](https://docs.github.com/en/copilot)
- 学生:[GitHub Education](https://education.github.com)
- 评测:[Copilot vs Cursor 实战 2026](https://lmarena.ai/leaderboard)

---

[← 回到 code-completion](./README.md)
