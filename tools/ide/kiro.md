<!--
---
type: tool
slug: kiro
name: Kiro
category: ide
url: https://kiro.dev
maker: AWS / Amazon
pricing: freemium
price_range: $0-39/月
china_availability: 🟢
modalities:
  - code
  - text
  - file
strengths:
  - Spec 模式(需求 → 设计 → 任务结构化)
  - Hooks 自动化(文件变化 / 工具调用触发)
  - Steering 项目级稳定指令
  - 长上下文 / 后台任务
  - 国内可直连
weaknesses:
  - 用户 / 社区规模远小于 Cursor / Windsurf
  - Spec 工作流对短任务"过重"
  - 模型选择不如 Cursor 灵活
  - AWS 加持但生态外用户认知度低
tier: A
tier_history:
  - date: 2026-05
    tier: A
    reason: Spec 驱动差异化清晰,适合"文档先行"的工程师
  - date: 2025-09
    tier: A-
    reason: 公开 beta,工作流概念领先
recommended_for_scenarios:
  - writing-code
  - api-design
  - prd-writing
  - writing-tech-doc
  - reading-codebase
alternatives:
  - cursor
  - windsurf
  - trae
  - claude-code
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Kiro

> AWS 出的 AI IDE。**主打 "Spec 驱动开发":需求 → 设计 → 任务,结构化拆解之后才让 AI 写代码**。
> Tier A —— 不是"Cursor 平替",**是另一种工作流的代表**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Amazon AWS](https://aws.amazon.com)(2025-09 公开预览) |
| **形态** | VS Code fork(独立 IDE) |
| **底层模型** | Claude Sonnet / Opus 4.7(主力)+ AWS Bedrock 路由 |
| **支持平台** | macOS / Windows / Linux |
| **核心机制** | Vibe(对话)+ **Spec(需求/设计/任务)** + Hooks + Steering + Agents |
| **国内可用性** | 🟢 可直连 |

---

## 它的差异化:Spec-Driven Development

Cursor / Windsurf / Trae 都主打"**对话式 + Tab 补全**"。
Kiro 主打"**先写文档,再让 AI 实现**":

```
1. Vibe 模式:对话 / 探索 / 短任务
   ↓ 想清楚要做什么
2. Spec 模式:
   requirements.md  ← AI + 你一起写需求
   design.md        ← AI + 你一起做设计
   tasks.md         ← AI 拆成可执行任务列表
   ↓
3. 任务执行:
   AI 按任务列表逐项实现 + 跑测试 + 标记完成
```

**类似 "Anthropic Claude Code 的 Plan 模式 + 文档化"**,但 **Kiro 把 spec 作为产品级的一等公民**。

---

## Tier 评级:A

**评级理由**:
- **Spec 工作流**对"中大型功能"特别合适 —— 写代码前**强制你想清楚**,这是其他 AI IDE 不做的
- **Hooks 自动化**:文件保存 / 任务完成 / 工具调用前后,可以挂自定义 agent 行为
- **Steering 项目级稳定指令**:类 cursorrules 但更结构化,可分作用域
- **长上下文 + 后台任务**:Claude Sonnet 4.7 + 1M context
- **AWS 背景**:**对企业 / 合规场景天然有信任度**

> **不是 A+ 的原因**:
> - **用户规模 / 社区生态小**(Cursor 是 100,Windsurf 是 30,Kiro 现在大概 5-10)
> - Spec 工作流对短任务**过重**(改 1 行 bug 还要走 spec?多余)
> - 模型选择没 Cursor 灵活(目前以 Claude 系为主)
> - 默认绑 AWS Bedrock 让一些不熟 AWS 的用户感觉"重"

它的 A **是给"文档先行 / API 设计型 / 中大功能"工程师**的合适分。
对纯短任务 / Tab 党,**Cursor 更好**。

---

## 它最适合做什么

### ✅ 中大型功能从 0 到 1

最适合 Kiro 的任务:
- 一个新功能从需求到落地(5-30 文件)
- API 重新设计 + 多端实现
- 接入第三方系统(支付 / 推送 / 第三方 SDK)
- "这个 issue 很复杂,我需要先想清楚再写"

**Spec 模式强制你"先写需求 → 再写设计 → 再拆任务"**,然后 AI 才动手实现。

适合:
- [写代码 / 实现新功能](../../scenarios/writing-code.md)(中大任务)
- [API / 架构设计](../../scenarios/api-design.md)
- [写技术文档](../../scenarios/writing-tech-doc.md)
- [写 PRD](../../scenarios/prd-writing.md)(对工程师友好的 PRD 写作)

### ✅ "AI 时代的工程师能力升级":写好 spec

2025-2026 整个行业都在重新定义"工程师价值":
- AI 写代码越来越好
- **会写需求 / 会做设计 / 会拆任务** 的工程师价值越来越高

Kiro 的 Spec 模式**逼你练这件事**:
- 写不清楚需求 → AI 也写不出对的代码
- 设计混乱 → 实现就一团糟

**用 Kiro 一段时间,你会发现自己 spec 写得越来越好** —— 这是它最被低估的"附带产出"。

### ✅ Hooks 做团队 / CI 工作流

`.kiro/hooks/*.json` 可以挂自动化:

```json
{
  "name": "Lint on Save",
  "version": "1.0.0",
  "when": {
    "type": "fileEdited",
    "patterns": ["*.ts", "*.tsx"]
  },
  "then": {
    "type": "runCommand",
    "command": "npm run lint"
  }
}
```

或更高级的:
```
"when": fileEdited → 跑 lint
"when": preTaskExecution → 让 AI review 任务,确认再执行
"when": postToolUse(write) → 验证写入是否合规
```

**Kiro 比 Cursor 把"自动化能力"做得更深**。

### ✅ Steering 文件:项目级稳定指令

`.kiro/steering/*.md` 类似 cursorrules,但可分作用域(全局 / 文件匹配 / 手动触发):

```markdown
---
inclusion: fileMatch
fileMatchPattern: '**/*.test.ts'
---

# Test 文件规则
- 用 vitest,不用 jest
- describe/it 中文,assertions 英文
- 必须覆盖 happy + error 两条路径
```

**比 cursorrules 灵活**:不同文件夹 / 不同任务可以有不同规则。

### ✅ AWS 重度用户

如果你公司在 AWS 上做大量基础设施:
- Kiro 集成 AWS Bedrock(模型路由)
- IAM / VPC / 合规自然适配
- 企业账号统一计费

AWS 重度团队:Kiro 是天然的"AI IDE 选项之一"(虽然 vs Cursor 仍要权衡)。

---

## 它**不擅长**什么

### ❌ 短任务 / 单文件 bug 修

Kiro 的 Spec 模式**对短任务过重**:
- 改一个 bug → 走 Vibe 模式即可,不用 Spec
- 但 Vibe 模式 Tab + Composer 体验**仍不如 Cursor**

短任务 → **Cursor / Windsurf 更顺**。

### ❌ 社区生态

- Cursor 教程 / awesome-cursorrules:**铺天盖地**
- Kiro 教程 / 最佳实践:**还在早期**
- Stack Overflow 问 Kiro:几乎没回答

新手 / 学习 → **Cursor 信息密度高**。

### ❌ 模型灵活性

Cursor 顶部一秒切模型(Claude/GPT/Gemini/DeepSeek/自配)。
Kiro 默认走 Claude 路由,**模型切换没那么灵活**。
模型对比党 → Cursor。

### ❌ 极重度 IDE 个性化(JetBrains)

Kiro 是 VS Code fork,JetBrains 用户切过来要重学。
JetBrains 重度用户 → [Windsurf](./windsurf.md) 插件方案更合适。

### ❌ "我不喜欢写文档"型程序员

Kiro 的核心价值是"逼你写清楚 spec"。
**讨厌写文档 / 想 yolo 写代码** 的人会觉得 Kiro "麻烦"。
对手 [Cursor / Windsurf](./cursor.md) 才是"对话式"的更佳选择。

---

## 真实使用 tips

### 1. 区分 Vibe 和 Spec 两种模式

```
Vibe 模式 = "聊天对话 + 短任务"
  → 短 bug / 探索 / 写一个组件 / 学习

Spec 模式 = "需求 → 设计 → 任务"
  → 中大功能 / API 设计 / 重构 / 新模块
```

**别什么都用 Spec**。Vibe + Spec 配合用,产品力才出得来。

### 2. Spec 模式的流程严格按顺序走

```
1. requirements.md(给 AI 提一句话需求,AI 帮你扩成 EARS 格式)
   ↓ 你 review / 改 / 确认
2. design.md(架构 / 数据模型 / 关键决策)
   ↓ 你 review / 改 / 确认
3. tasks.md(拆成可执行的 N 条任务)
   ↓ 你 review / 改 / 确认
4. AI 按 task 一条条执行,你随时打断
```

**别跳步骤**(很多新手着急跳到实现,然后 spec 没改对,实现也错)。

### 3. Hooks 用来"防止偷懒"

最有用的 hook 模式:
- **postTaskExecution → 跑 npm test**(每个任务执行完跑测试)
- **fileCreated*.test.ts → askAgent 让 AI 检查测试覆盖**
- **preToolUse(write) → askAgent 让 AI 重新 review 改动是否合规**

**Hook 强制 AI(和你)走流程**,比"靠记性 / 自律"靠谱。

### 4. Steering 配合 Hooks 做"团队规则即代码"

把团队规则写成 steering + hooks:
- 风格规则 → steering
- 自动化检查 → hooks
- 合规审查 → hooks(preToolUse 拦截敏感操作)

**整个团队共享 `.kiro/` 目录,规则即代码**。

### 5. 配 Claude 是默认最佳

Kiro 主推 Claude Sonnet 4.7,**这是当前最佳搭配**:
- Sonnet 写代码稳
- 1M context 长任务跑得稳
- 配 Spec 模式的"边写边改 plan"流畅

国内用户:Kiro 默认走 AWS Bedrock 的 Claude(可直连),**比直连 Anthropic 简单**。

### 6. 别在 Kiro 里跑 yolo 短任务

如果你只是想:
- 改一个 typo
- 加一个 console.log
- 修一行 CSS

**别用 Kiro,用 Cursor / VS Code**。Kiro 启动 + Spec 心智成本对短任务不划算。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](./cursor.md) | 短任务为主 / 社区资源多 / 快速迭代 |
| [Windsurf](./windsurf.md) | Cascade 长任务 + JetBrains |
| [Trae](./trae.md) | 国产 + 中文优先 |
| [Claude Code](../coding-agent/claude-code.md) | 终端原生 + 长任务质量上限 |
| 飞书 Spec / Notion + Cursor | 不想用专属 IDE,只要 spec 工作流 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | $0 | 基础功能 + Vibe 模式 + 限额 Spec |
| **Pro** | **$19/月** | 完整功能 + Spec 无限 + 多模型 |
| **Pro+** | $39/月 | 高额度 + 团队工作流 |
| **Enterprise** | 定制 | AWS 体系 + 合规 + SSO |

### 我的预算建议

```
试水:                              Free
认真做中大功能:                     Pro $19
团队 / 重度:                        Pro+ $39
AWS 企业:                          Enterprise
```

**对工程师**:Kiro Pro $19 vs Cursor Pro $20 价格差不多。
**选哪个**:**取决于你工作流是"文档先行"还是"对话先行"**。

---

## 国内可用性(🟢)

- ✅ 网络可直连(AWS Bedrock 的 Claude 路由)
- ✅ AWS 国际账号可付费
- 🟡 部分中国大陆用户走 AWS 会有 latency
- ✅ 中文 prompt + 中文 spec 完全可用

国内开发者**实际可用**,且**比直接用 Anthropic Claude 简单**(走 Bedrock 不是 Anthropic 直连)。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2025-09 | **Kiro 公开预览** | AWS 入场 AI IDE,Spec 概念眼前一亮 |
| 2025-12 | Hooks + Steering | 工作流自动化路线清晰 |
| 2026-02 | Spec 2.0 + Background Agents | 长任务能力补齐 |
| 2026-04 | 公开正式版 + 定价 | 个人用户增长开始 |
| 2026-05 | 持续打磨 | A 评级稳固 |

---

## 一段经验:Kiro 适合什么样的工程师

我个人(写这份内容)的判断:

**适合 Kiro 的画像**:
- 写代码前喜欢"想清楚再动手"
- 团队有规范文档习惯
- 做中大型功能而非杂活
- 不讨厌写需求 / 设计文档
- 在 AWS 体系内工作

**不适合 Kiro 的画像**:
- "yolo 派",直接 Tab 写代码
- 主要做修 bug / 小工具
- 预算紧张追求免费档
- 极度依赖社区生态 / Stack Overflow

**Kiro 不是 Cursor 的"竞争品"**,**它是"另一种工程师的工作流"** —— 把"AI 替我写代码"升级到"**AI 替我写代码 + 强制我先想清楚需求和设计**"。

如果你认同"未来工程师价值 = 写好 spec + review AI 输出",**Kiro 是这条路最先成产品化的 IDE**。

---

## 拓展阅读

- 官方:[Kiro 文档](https://kiro.dev/docs)
- 官方博客:[AWS Kiro 发布](https://aws.amazon.com/blogs/aws/announcing-kiro/)
- 社区:[Kiro Discord](https://discord.gg/kirodotdev)

---

[← 回到 ide](./README.md)
