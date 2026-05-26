# 📅 Changelog

> 月度结构化更新。Watch 仓库 → Custom → Releases 自动收通知。

---

## [v2026.05.1] - 2026-05-26(增量更新)

### 🆕 新增内容

**基础模型分类完整 v1**(`tools/foundation-models/`):
- ✅ [claude.md](../tools/foundation-models/claude.md) — Anthropic Claude(Opus / Sonnet 4.7,1M 上下文)
- ✅ [chatgpt.md](../tools/foundation-models/chatgpt.md) — OpenAI ChatGPT(GPT-5 / Pro / mini)
- ✅ [gemini.md](../tools/foundation-models/gemini.md) — Google Gemini 3 Pro
- ✅ [grok.md](../tools/foundation-models/grok.md) — xAI Grok 4
- ✅ [deepseek.md](../tools/foundation-models/deepseek.md) — DeepSeek V4 + R1.5
- ✅ [kimi.md](../tools/foundation-models/kimi.md) — Moonshot Kimi K2.5
- ✅ [glm.md](../tools/foundation-models/glm.md) — 智谱 GLM-5
- ✅ [tongyi.md](../tools/foundation-models/tongyi.md) — 阿里 通义千问 Qwen 3.5
- ✅ [doubao.md](../tools/foundation-models/doubao.md) — 字节 豆包 1.6
- ✅ [minimax.md](../tools/foundation-models/minimax.md) — MiniMax / 海螺 / Hailuo
- ✅ [wenxin.md](../tools/foundation-models/wenxin.md) — 百度 文心 ERNIE 4.5
- ✅ [hunyuan.md](../tools/foundation-models/hunyuan.md) — 腾讯 混元 / 元宝

**总计 12 篇模型深度笔记,~6000 行内容**。
每篇都包含:Tier 评级理由、最适合做什么、**不擅长什么**(必填)、真实使用 tips、价格分析、版本变化追踪、国内可用性。

### 🔧 改动

- 所有内容文件 frontmatter 包入 `<!-- ... -->`,GitHub 不再渲染丑表格
- 新增 `scripts/hide-frontmatter.mjs`:批量包注释脚本
- `_templates/tool-template.md` 从硬模板改为思路指引(按工具类型给侧重)
- `meta/SCHEMA.md` 加入"frontmatter 必须包注释"规则

### 📊 进度统计

```
角色:        9 (1 完整 / 8 骨架)
场景:        ~40 (1 完整 / 39 待写)
工具笔记:    12 (foundation-models 分类完整 v1)
工作流:      0 (待 6 月开始)
```

---

## [v2026.05] - 2026-05-22(初版)

### 🏗 架构

- 确立**三层信息架构**:Roles → Scenarios → Tools/Workflows
- 写完 [GOVERNANCE.md](./GOVERNANCE.md):项目治理、内容铁律、月更机制
- 写完 [SCHEMA.md](./SCHEMA.md):所有内容的元数据规范
- 写完 [DECISIONS.md](./DECISIONS.md):架构决策记录(ADR)

### ✅ 已完成内容

- 9 个角色目录骨架(developer 完整,其他 8 个 placeholder)
- 1 个完整场景:`writing-code.md`(写代码 / 实现新功能)
- 4 个 `_templates/` 内容模板(role / scenario / tool / workflow + role-proposal)

### 🟡 待 6 月填充

- 程序员的剩下 6 个场景(debugging / reading-codebase 等)
- 程序员主要工具的深度笔记(Cursor / Claude Code / Kiro / Windsurf 等)

### 📊 进度统计

```
角色:        9 (1 完整 / 8 骨架)
场景:        ~40 (1 完整 / 39 待写)
工具笔记:    0 (待 6 月开始)
工作流:      0 (待 6 月开始)
```

---

## 月更模板(给未来用)

```
## [v2026.MM] - YYYY-MM-DD

### 🆕 新增
- 新场景 X
- 新工具 Y

### 🔄 Tier 调整
- 工具 A:B → A,理由

### ⚠️ 工具死亡
- 工具 X 进入 _graveyard,原因

### 🧹 过期清理
- 清掉 N 篇 outdated → 已重新 verified

### 📊 进度统计
```
