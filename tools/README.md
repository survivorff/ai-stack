# 🛠 工具深度笔记

> 单工具深度的唯一来源。**新人不要从这里开始**,从 [角色入口](../roles/) 或 [场景索引](../scenarios/) 开始更高效。

---

## 📦 工具分类(2026-05 重构)

> 重要重构(2026-05):**模型 / 编程 agent / IDE / 补全** 拆开。它们不在同一层级。
> 决策见 [meta/DECISIONS.md ADR-005](../meta/DECISIONS.md)。

### 🧠 大脑层(模型本身)

- [foundation-models/](./foundation-models/) — **基础模型**(Claude / GPT / Gemini / DeepSeek / Kimi / GLM 等)
- [research/](./research/) — 搜索 / 研究产品

### 💻 编程层(基于模型的开发产品)

- [coding-agent/](./coding-agent/) — **模型 + 工具调用**(Claude Code / Codex CLI / Aider / Devin)
- [ide/](./ide/) — **AI IDE**(Cursor / Windsurf / Kiro / Trae)
- [code-completion/](./code-completion/) — **轻量补全**(Copilot / Tabnine / 通义灵码)
- [ai-agent/](./ai-agent/) — 通用 Agent / 自动化框架(非编程专用)

### 🎨 创作层

- [image-gen/](./image-gen/) — 文生图 / 图生图
- [video-gen/](./video-gen/) — 文生视频 / 数字人
- [audio/](./audio/) — 音频 / TTS / 音乐
- [writing/](./writing/) — 长文写作产品
- [design/](./design/) — 设计辅助

### 📚 知识层

- [notes/](./notes/) — 笔记 / 第二大脑
- [reading/](./reading/) — 阅读 / 论文消化
- [data/](./data/) — 数据分析

### 💼 办公 / 协作

- [ppt/](./ppt/) — 演示文稿
- [translation/](./translation/) — 翻译
- [learning/](./learning/) — 学习辅助

---

## 🧭 编程相关四个分类的关系(常被混淆)

```
基础模型(Claude / GPT / Gemini)
       ↓ 给以下产品提供"大脑"
       ↓
   ┌───┴────────────────────────────────────┐
   │                                          │
   ▼                                          ▼
"模型 + 工具"组合                       "AI 加持的 IDE / 插件"
(Coding Agent)                          
                                          
Claude Code                               Cursor / Windsurf / Kiro / Trae
Codex CLI                                 (这些 IDE 自己不做模型,
Aider                                      它们在底层调 Claude/GPT)
Devin                                       
                                          GitHub Copilot
                                          通义灵码 / 文心快码
                                          (这些是补全插件)
```

> **关键认知**:
> - Cursor 不是"模型",是 IDE 产品
> - Claude Code 是"模型 + agent 工具",和 Cursor 不在一个层级
> - 它们底层都用 Claude / GPT 等基础模型

---

## 📊 速查

- [全 Tier 速查](../meta/TIER-LIST.md)
- [国内可用速查](../meta/CHINA-AVAILABILITY.md)

---

[← 回到 README](../README.md)
