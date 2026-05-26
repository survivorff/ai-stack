<!--
---
type: tool
slug: obsidian
name: Obsidian
category: notes
url: https://obsidian.md
maker: Obsidian
pricing: freemium
price_range: $0(本地)/ $4-10/月(同步 / 发布)
china_availability: 🟢
modalities:
  - text
strengths:
  - 数据完全本地(隐私 + 永不丢)
  - 双向链接 / 知识图谱
  - 插件生态海量(Smart Connections 接 AI)
  - 完全免费(本地版)
  - Markdown 文件,易迁移
weaknesses:
  - AI 不是原生功能,要装插件
  - 学习曲线高(配置 / 插件 / 自定义)
  - 协作弱(主要单人使用)
  - 默认没"团队 / 跨设备"(要付费同步)
tier: A
tier_history:
  - date: 2026-05
    tier: A
    reason: 个人知识管理 default,AI 通过插件接入
recommended_for_scenarios:
  - reading-notes
  - learning-new-domain
  - paper-digesting
alternatives:
  - notion-ai
  - tana
  - logseq
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Obsidian

> 本地 Markdown 笔记 + 双向链接 + 知识图谱。**个人知识管理(PKM)的 default**。
> Tier A。**AI 不是原生但通过插件接入**,数据完全本地是它的杀手级承诺。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Obsidian](https://obsidian.md) |
| **形态** | 桌面 / 移动 App,数据本地存储 |
| **AI 接入** | 插件(Smart Connections / Copilot / Text Generator)|
| **国内可用性** | 🟢 完全可用 |

---

## Tier 评级:A

**评级理由**:
- **数据完全本地**:你的笔记是本地 Markdown 文件,Obsidian 公司**根本看不到**
- **永不丢**:就算 Obsidian 停服,你的 .md 文件还在
- **AI 通过插件**:Smart Connections / Copilot / Text Generator 等开源插件接入 OpenAI / Claude / Ollama
- **生态海量**:几千个插件覆盖各种需求
- **本地版完全免费**

**不是 A+ 的原因**:
- **AI 不是原生功能**(配置成本高)
- **学习曲线**(对小白不友好)
- **协作弱**(主要单人)
- **同步要付费**(虽然可以用 iCloud / Git 自部署同步)

---

## 它最适合做什么

### ✅ 个人长期知识库

- 读书笔记
- 论文笔记
- 项目笔记
- 学习记录
- 灵感 / 创意 / 想法

**长期(3 年+)的个人知识沉淀:Obsidian 是最好的选择**,因为:
- 数据永远是你的
- 每个文件都是普通 Markdown
- 工具死了文件不死

### ✅ 隐私敏感场景

- 公司机密研究笔记
- 个人日记 / 心理记录
- 法律 / 医疗笔记
- 任何不想给云端看的内容

数据**完全本地**,Obsidian 公司无法看到。

### ✅ 双向链接 / 知识图谱思维

- 笔记之间互相 [[link]]
- 自动生成知识图谱
- 看到知识之间的关联
- 类 Roam Research 但本地化

适合**长期"建造个人第二大脑"**的人。

### ✅ AI + 自部署 / 隐私

通过插件 + 本地 Ollama:
- AI 完全本地运行
- 笔记 + AI 都不出本机
- 真正"私人 AI 助理"

适合极致隐私需求(可见 [Tabnine](../code-completion/tabnine.md) 同样逻辑)。

---

## 它**不擅长**什么

### ❌ 团队协作

Obsidian 主要单人。团队场景 → Notion / 飞书。

### ❌ 开箱即用

需要:
- 装 Obsidian
- 装插件(Smart Connections / Copilot)
- 配 API key 或本地 Ollama
- 读插件文档

**小白上手 1-2h**。

### ❌ AI 体验顺滑

Notion AI 是"内嵌就用",Obsidian AI 通过插件 → 体验略糙。
极致顺滑 → Notion AI / 飞书 AI。

### ❌ 跨平台一键同步

iPhone / iPad / Mac / 公司电脑同步:
- Obsidian Sync $10/月(官方)
- 或自己用 iCloud / Dropbox / Git

**vs Notion / 飞书 默认就同步**。

---

## 真实使用 tips

### 1. Smart Connections 是被低估的 AI 插件

[Smart Connections](https://github.com/brianpetro/obsidian-smart-connections):
- 自动给每个笔记找"语义相关"的其他笔记
- 类似 NotebookLM 但本地
- 配 OpenAI / Anthropic / 本地 Ollama 都行

**装这个 + 你的笔记库 = AI 版的"个人维基百科"**。

### 2. 配 Ollama 完全本地

```
ollama pull llama3.1:8b
Obsidian 装 Smart Connections / Copilot
配置 → 本地模型
```

**笔记 + AI 全部不出本机**。
M2 Mac / 4090 PC 流畅跑 8B 模型。

### 3. 入门用"PARA"或"Zettelkasten"

新人的最大问题:**"我建了 Obsidian 但不知道怎么组织笔记"**。
推荐入门:
- **PARA**(Projects / Areas / Resources / Archive)
- **Zettelkasten**(原子笔记 + 双向链接)

任选一种 + 坚持 3 个月 → 系统形成。

### 4. 同步选择

- 官方 Obsidian Sync $10/月:简单,加密
- iCloud(免费,Mac / iPhone 用户)
- Dropbox / OneDrive(免费,跨平台)
- Git(完全免费,极客向)

我自己用 iCloud,**几年没出过问题**。

### 5. 不要追求"最完美工作流"

Obsidian 圈子有"过度工程化"倾向(花 2 周配 Dataview / Templater / 复杂自动化)。
**够用就好** —— 写笔记的本质比工具配置重要 100 倍。

### 6. 配合 NotebookLM 双开

工作流:
- Obsidian:**长期个人沉淀**
- NotebookLM:**短期主题学习 / 资料消化**
- 学完后 → 把 NotebookLM 的总结导出 → 存到 Obsidian

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Notion AI](./notion-ai.md) | 团队 + 协作 + 不在意本地 |
| [Tana](./tana.md) | 高级用户 + 知识图谱 + AI 原生 |
| Logseq | Obsidian 的开源版 + 大纲驱动 |
| Capacities | 块编辑 + AI 原生 |

---

## 价格分析

| 档位 | 价格 |
|------|------|
| **个人版** | **¥0**(本地,完全免费) |
| **Sync** | $4-10/月(跨设备同步) |
| **Publish** | $8/月(把笔记发布成网站) |
| **商业 license** | $50/年/用户 |

### 我的预算建议

```
个人 / 私人笔记:                完全免费,本地版即可
跨设备(iCloud / Dropbox 自配): 免费
跨设备(懒得自配):              Sync $4
公开笔记网站 / 数字花园:        Publish $8
公司用:                         商业 license $50/年
```

---

## 国内可用性(🟢)

- ✅ 工具完全本地,无网络问题
- ✅ AI 插件配国产模型(DeepSeek / Kimi)完全 OK
- ✅ Sync / Publish 走 Stripe(国内卡部分可用)

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2020-04 | Obsidian 起步 | Roam 平替,本地化 |
| 2023 | 插件生态爆发 | 几千个社区插件 |
| 2024-04 | Smart Connections + AI 插件成熟 | 接 OpenAI 标准化 |
| 2025-09 | Bases(轻数据库) | 媲美 Notion 数据库 |
| 2026-02 | Web Clipper / 浏览器集成 | 收集类工具补齐 |

---

## 一段判断

Obsidian 是**"我希望 5-10 年后还能打开看"** 的笔记软件。
- Notion 倒了 → 你的数据被锁
- 飞书 / 钉钉公司变了 → 你的笔记可能受影响
- Obsidian 倒了 → **你的本地 .md 文件还在**

对**长期数字资产 / 个人第二大脑**:Obsidian 是更稳的选择。

---

## 拓展阅读

- 官方:[Obsidian](https://obsidian.md)
- 论坛:[Obsidian Forum](https://forum.obsidian.md)
- 中文社区:[Obsidian 中文论坛](https://forum-zh.obsidian.md)

---

[← 回到 notes](./README.md)
