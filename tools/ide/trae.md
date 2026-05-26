<!--
---
type: tool
slug: trae
name: Trae
category: ide
url: https://www.trae.ai
maker: 字节跳动
pricing: freemium
price_range: ¥0(国内重推广期免费)/ Pro 待定价
china_availability: 🟢
modalities:
  - code
  - text
  - image
strengths:
  - 国产 + 中文优先 + 国内直连
  - 字节生态(豆包模型 + 火山引擎 + 飞书)
  - 免费档慷慨(推广期)
  - VS Code fork,迁移零成本
  - SOLO 模式适合 vibe coding
weaknesses:
  - 海外用户认知度极低
  - 模型主要走豆包 / 国产,英文场景略弱
  - 生态深度 vs Cursor / Windsurf 差很多
  - 数据隐私(字节体系)对外企不友好
  - 长任务能力仍弱于头部
tier: A-
tier_history:
  - date: 2026-05
    tier: A-
    reason: 国内场景体验好 + 推广期免费,但生态尚浅
  - date: 2025-09
    tier: B+
    reason: 公开测试,字节力推
recommended_for_scenarios:
  - writing-code
  - debugging
  - reading-codebase
  - quick-translation
alternatives:
  - cursor
  - windsurf
  - kiro
  - claude-code
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Trae

> 字节跳动出的 AI IDE。**国产 AI IDE 的代表作 + 国内可直连免费**。
> Tier A-。**对国内开发者是"零门槛入门 AI IDE"的最佳选择**,但生态深度仍在追 Cursor。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [字节跳动](https://www.trae.ai) |
| **形态** | VS Code fork(独立 IDE,中英文 UI 双语) |
| **底层模型** | 豆包 1.6 Pro / GPT(国际版) / Claude(国际版) / DeepSeek 等 |
| **支持平台** | macOS / Windows |
| **核心机制** | Builder(对话编程) + SOLO(自主任务) + Chat + Tab |
| **国内可用性** | 🟢 完全直连 |

---

## 它是什么

Trae 是字节做的 VS Code fork,**双版本路线**:
- **Trae 国内版**(trae.com.cn):中文优先,默认豆包模型,国内直连
- **Trae 国际版**(trae.ai):英文优先,默认 GPT / Claude,海外用户

**国内开发者用国内版**,体验最顺。

---

## Tier 评级:A-

**评级理由**:
- **国产 AI IDE 第一档**:字节的资源 + 设计能力比小厂明显有优势
- **国内可直连 + 免费档慷慨**:推广期 Pro 功能也免费,**学生 / 入门用户的首选**
- **中文体验好**:UI / 文档 / prompt 中文场景流畅
- **字节生态联动**:豆包模型 + 火山引擎 + 飞书

> **不是 A 的原因**:
> - **生态规模**远小于 Cursor / Windsurf
> - **海外用户几乎没有**(认知度只在中国 + 部分东南亚)
> - **长任务能力**vs Cursor + Claude / Windsurf + GPT 仍有差距
> - **数据隐私**对外企不友好(字节体系训练 + 商业敏感场景慎用)
> - **教程 / 社区资源** 比 Cursor 少 90%

它是"**国内场景的 A-**",**国际场景仍是 B+**。

---

## 它最适合做什么

### ✅ 国内入门程序员的"零门槛 AI IDE"

如果你:
- 学生 / 转行 / 刚学编程
- 不想搞代理 / 海外卡 / 国际账号
- 中文优先

**Trae 国内版是最丝滑的入门选择**:
- 安装即用
- 中文 prompt 母语级
- 推广期免费
- 默认豆包模型,响应快

适合:
- [写代码](../../scenarios/writing-code.md)(入门 / 中级)
- [Debug](../../scenarios/debugging.md)
- [读老项目](../../scenarios/reading-codebase.md)
- [快速翻译](../../scenarios/quick-translation.md)(中英代码混合场景)

### ✅ 字节生态用户

如果你:
- 在字节 / 抖音 / 飞书工作或合作
- 用火山引擎做 AI 应用
- 公司用飞书

**Trae 是字节生态的天然选择**:
- 飞书文档 / 知识库 RAG 集成
- 火山引擎 API 调用顺
- 豆包模型直接走

### ✅ SOLO 模式做"自主小任务"

Trae 的 SOLO 模式类似 Cursor Background Agents:
- 给一个明确任务
- AI 自主跑(读代码 + 改 + 跑命令)
- 完成后通知

**适合"vibe coding"**:你头脑风暴想法,AI 实现 prototype。
但**长任务可靠性**仍需要打磨。

### ✅ 中英文混合代码场景

国内项目常常:
- 注释中文
- 字段英文
- 文档中英混
- error message 双语

**Trae 对中文 prompt + 中英混合代码理解最好**(豆包模型中文训练量足)。
对手 Cursor / Windsurf 默认 Claude / GPT,中英混合场景偶尔翻译生硬。

---

## 它**不擅长**什么

### ❌ 极复杂代码 / 长任务

Trae 默认豆包模型,**vs Claude Opus 4.7 / GPT-5 在长任务多文件场景仍有差距**。
- 长任务质量优先 → Claude Code / Cursor + Opus
- 国内长任务 → Aider + DeepSeek

### ❌ 海外开源 / 学术场景

国际开源项目 / 学术研究:**英文 prompt + Claude / GPT** 才是默认。
Trae 国际版能用,但**海外用户认知度低,招呼别人来 review 不便**。

### ❌ 商业敏感 / 隐私要求高

字节体系的 AI 产品**普遍有"数据用于训练"争议**。
- 公司机密代码
- 商业敏感项目
- 涉及 PII / 财务数据

**慎用 Trae**(同 [豆包](../foundation-models/doubao.md)逻辑)。
合规优先 → Cursor + 自配 API key + privacy mode / Kiro AWS 体系。

### ❌ 生态资源 / 教程

Cursor 教程 100,Trae 教程 5。
新手遇到问题搜 Trae:**Stack Overflow 可能没回答**。
重度依赖社区 → Cursor。

### ❌ JetBrains 用户

Trae 是 VS Code fork,无 JetBrains 插件方案。
JetBrains 重度 → Windsurf 插件。

---

## 真实使用 tips

### 1. 国内版还是国际版?

| 你是 | 选 |
|---|---|
| 中国大陆,中文优先 | **国内版**(默认豆包,体验顺) |
| 中国大陆但常做海外项目 | **国际版**(默认 GPT / Claude,英文场景更好) |
| 海外华人 | 国际版 |
| 完全英文工作流 | Cursor / Windsurf 仍更合适 |

### 2. 模型切换看任务

国内版 Trae 默认豆包,但**支持多模型切换**:
- **豆包 1.6 Pro**:默认,中文场景最优
- **DeepSeek V4**:写代码硬核任务
- **GPT-5 / Claude**(国际版):跨语言 / 严肃任务

任务里可以直接切。

### 3. SOLO 模式适合"vibe coding"

vibe coding = "我有个想法,先快速做个 prototype 验证":
- 给个一句话想法
- SOLO 模式跑 5-15 分钟
- 出来一个能跑的小项目

**适合 hackathon / 快速试错 / 个人项目**。
正式项目 → Builder 模式更可控。

### 4. 飞书文档 / 飞书知识库 RAG

Trae 集成飞书:
- 选中飞书文档"@飞书文档" 加进 context
- 飞书知识库可作为 RAG 源
- 对**飞书重度团队**,知识自动闭环

### 5. 别忘了 .trae 项目级配置

类 cursorrules:`.trae/rules/*.md`:

```markdown
# 项目规则
- TypeScript strict
- pnpm
- 命名 kebab-case 文件,camelCase 函数
- 不引入新依赖,先问
```

国内版项目里**直接用中文**写规则就行。

### 6. 国内开发者用 Trae 的合理姿势

**不是"放弃 Cursor 转 Trae"**,是**"两个都装"**:
- Cursor:海外开源 / 复杂任务 / Claude / GPT
- Trae:中文项目 / 国内 prototype / 入门 / 教学

**两个 IDE 共用同一个项目目录,看任务切**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](./cursor.md) | 行业默认 / 社区第一 / 海外开源 |
| [Windsurf](./windsurf.md) | Cursor 平替 / Cascade |
| [Kiro](./kiro.md) | Spec 驱动 / 文档先行 |
| 通义灵码 + VS Code | 不想换 IDE,只要中文 AI 补全 |
| [Aider](../coding-agent/aider.md) + DeepSeek | 终端 + 极致省钱 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | **¥0** | 推广期所有功能,大额度 |
| **Pro**(待定价) | 预计 ¥39-79/月 | Pro 模型 + 高额度 |
| **企业版** | 定制 | 私有化 + 飞书 / 火山引擎深度 |

**注**:Trae 仍在推广期,**2026 年大概率维持免费档**。
**国内学生 / 入门用户:无脑装,免费用**。

---

## 国内可用性(🟢)

- ✅ 完全国内直连
- ✅ 中文母语 UI
- ✅ 默认走豆包 / 国产模型,无网络问题
- ✅ 微信 / 支付宝(后续付费时)
- ✅ 飞书 / 火山引擎深度集成

**国内 AI IDE 可用性的黄金标准**。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2025-01 | Trae 国际版发布 | 字节出海尝试 |
| 2025-04 | **Trae 国内版上线** | 字节正式入场国内 AI IDE |
| 2025-09 | SOLO 模式 + 多模型 | 产品力补齐 |
| 2026-02 | Builder 2.0 + 飞书集成 | 国内场景闭环 |
| 2026-05 | 持续推广,免费档不变 | A- 评级稳固 |

---

## 一段判断:Trae vs 通义灵码 / 文心快码

国内三大"国产 AI 编程产品"的定位:

| 产品 | 形态 | 定位 |
|------|------|------|
| **Trae** | **AI IDE**(VS Code fork) | 对标 Cursor |
| 通义灵码 | VS Code / IntelliJ 插件 | 对标 Copilot 补全 |
| 文心快码 | VS Code / IntelliJ 插件 | 对标 Copilot 补全 |

**Trae 是这三者里唯一的"完整 IDE"**,**也是国产唯一对标 Cursor 形态的产品**。
对个人用户:**Trae 是国产 AI IDE 第一选择**。

但**生态成熟度** Cursor > Trae 一档。
**最稳的国内开发者配置**:
```
日常 AI IDE:    Cursor(社区生态)+ DeepSeek API key
国内项目 / 入门: Trae(免费 + 中文)
长任务:         Aider + DeepSeek
```

---

## 拓展阅读

- 官方:[Trae 国内版](https://www.trae.com.cn/)
- 官方:[Trae 国际版](https://www.trae.ai)
- 字节:[Trae 介绍](https://www.volcengine.com/product/trae)

---

[← 回到 ide](./README.md)
