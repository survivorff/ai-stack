# 📅 Changelog

> 月度结构化更新。Watch 仓库 → Custom → Releases 自动收通知。

---

## [v2026.05.3] - 2026-05-26(质量 + 扩展性)

### 🆕 新增 — 工作流(workflows/)

**6 个完整工作流 v1**(每个都是亲跑过 + 含真实 prompt 模板 + 时间和成本):

- ✅ [Spec → 实现 → 测试 → 文档](../workflows/spec-to-code.md) — 程序员日常事实标准
- ✅ [古早项目 2 小时上手](../workflows/codebase-onboarding.md) — 接手老项目流水线
- ✅ [一个 Bug 的完整 debug 链路](../workflows/bug-hunt.md) — Debug 流水线
- ✅ [长文写作完整流水线](../workflows/long-form-pipeline.md) — 跨多平台改编
- ✅ [短视频脚本 → 制作 → 发布](../workflows/short-video-pipeline.md) — 自媒体生产线
- ✅ [论文消化完整流水线](../workflows/paper-digesting-pipeline.md) — 学生 / 研究员

每个工作流都包含:
- 完整工具栈 + 国内 / 海外两套替代方案
- 完整 step 拆解 + 每步具体 prompt
- 时间和成本(分平台 / 分预算)
- 进阶变种(简化版 / 重度版)
- 边界(什么时候不适用)
- 实施前 checklist

### 🆕 新增 — 41 个场景骨架(scenarios/)

通过 `scripts/scaffold-scenarios.mjs` 自动生成,**避免角色页 / 工具页跨引用死链**:

每个 stub:
- 完整 frontmatter
- 痛点列表
- 推荐工具入口
- 标 `status: draft`,提示"完整内容月度更新中"

下次月度 release 把头部 5-10 个场景写成完整版。

### 🆕 新增 — 6 个工具占位(tools/)

通过 `scripts/scaffold-tool-stubs.mjs` 生成:
- ideogram / firefly / sdxl(image-gen)
- music-02(audio)
- tana(notes)
- xunfei-zhiwen(ppt)

### 🛠 新增 — 自动化脚本(scripts/)

**这是仓库长期可维护的关键基础设施**:

- ✅ `scripts/lint.mjs` — 内容健康检查
  - frontmatter 必备字段
  - 注释包裹强制
  - 日期合理性
  - 内部链接死链检查
  - tier / china_availability 取值校验
- ✅ `scripts/hide-frontmatter.mjs` — 自动包注释(已有)
- ✅ `scripts/scaffold-scenarios.mjs` — 场景骨架生成
- ✅ `scripts/scaffold-tool-stubs.mjs` — 工具占位生成

所有脚本零依赖(纯 Node 内置 + git),不需要 \`npm install\`。

### 🛠 新增 — GitHub Actions

- `.github/workflows/lint.yml` — PR / push 自动跑 lint,**死链 / 元数据错误自动拦截 PR**

### 🔧 修复

- 修了 14 处死链(从 213 个 errors 降到 0 errors)
- `scenarios/writing-code.md` 旧路径更新为新结构(coding-agent / ide)
- `meta/CHANGELOG.md` + `meta/TIER-LIST.md` 的 GOVERNANCE.md 路径修正

### 🔧 改善

- CONTRIBUTING.md 加入"自动化脚本"完整说明(让贡献者知道有哪些工具)
- workflows/README.md 加入"工作流 vs 场景 vs 工具"概念区分

### 📊 进度统计

```
角色:          9 个(1 完整 / 8 可用)
场景:           7 完整 + 41 骨架 = 48 个
工具:           36 篇深度 + 12 篇占位 + 6 篇 README 级
工作流:         6 个完整(从 0 到 6)
脚本:           4 个自动化脚本
GitHub Actions: 1 个 lint workflow
总 markdown:    ~25000 行(从 ~15000 涨到 ~25000)
```

### 🎯 下一阶段(v2026.06)

- 把"高频场景"5-10 个从骨架写成完整版(prd-writing / making-ppt / cover-image / market-research / paper-digesting 等)
- 头部分类的"次档工具"补深拆(Ideogram 完整版 / Firefly 完整版等)
- 添加"按预算找工具"导航页(/budget/zero-yuan/、/budget/100-yuan/、...)
- 月度 release 流程实战:发 v2026.06 release notes

---

## [v2026.05.2] - 2026-05-26(大批量更新)

### 🆕 新增内容(36 篇)

**编程相关 4 个分类全部完成 v1**:
- ✅ Coding Agent 4 篇:claude-code / codex-cli / aider / devin
- ✅ AI IDE 4 篇:cursor / windsurf / kiro / trae
- ✅ Code Completion 3 篇:github-copilot / tongyi-lingma / tabnine

**程序员剩余 6 个场景全部上线**:
- ✅ debugging / reading-codebase / code-review / api-design / writing-tech-doc / tech-research

**媒体生成分类完成 v1(8 篇)**:
- ✅ Image-gen 4 篇:midjourney / flux / nano-banana / jimeng
- ✅ Video-gen 4 篇:sora / veo / kling / hailuo

**音频 / 研究 / 笔记 / PPT / 翻译(11 篇)**:
- ✅ Audio 3 篇:suno / elevenlabs / speech-02
- ✅ Research 3 篇:perplexity / mita / notebook-lm
- ✅ Notes 3 篇:notion-ai / obsidian / feishu-ai
- ✅ PPT 2 篇:gamma / meitu-ai-ppt
- ✅ Translation 2 篇:deepl / immersive-translate

**剩余分类先做 README 级覆盖**(避免空目录,详细工具页排队中):
- writing / reading / design / data / learning / ai-agent

**8 个角色页从骨架填充到可用**:
- product-manager / designer / marketer / creator / founder / office-worker / student / educator
- 每个角色页都有:场景索引 + 工具组合 + 不同档位预算建议

### 📊 进度统计

```
角色:        9 个 (1 完整 / 8 可用)
场景:        ~40 (7 完整 / 33 待补)
工具笔记:    36 篇深度 + 6 篇 README 级
工作流:      0 (下一阶段)
总内容:      ~15000 行 markdown
```

### 🎯 下一阶段(v2026.06)

- 程序员之外的角色继续填充各自核心场景(prd-writing / making-ppt / cover-image / paper-digesting 等)
- 工作流(workflows)首批上线 3-5 个
- 各分类的次档工具(B+/B 级)按需补充

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
- 写完 [GOVERNANCE.md](../GOVERNANCE.md):项目治理、内容铁律、月更机制
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
