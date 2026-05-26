# 📐 内容元数据 Schema

> 所有 markdown 文件必须遵守的 frontmatter 规范。
> 校验脚本:`scripts/lint.mjs`(自动检查 PR)。

---

## ⚠️ 重要:frontmatter 必须包在 HTML 注释里

GitHub 会把 YAML frontmatter 渲染成一张巨大的丑表格,严重影响阅读体验。
**所有内容文件的 frontmatter 必须包在 `<!-- ... -->` 里**,这样 GitHub 完全不渲染,但 lint 脚本和原生 markdown 工具仍能解析。

✅ **正确写法**:

```markdown
<!--
---
type: tool
slug: claude
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
-->

# Claude

正文从这里开始……
```

❌ **错误写法**(直接裸露的 frontmatter,GitHub 会渲染成大表格):

```markdown
---
type: tool
slug: claude
---

# Claude
```

> 例外:`.github/ISSUE_TEMPLATE/*.md` 必须用裸 frontmatter,这是 GitHub 模板要求,不要改。

---

## 通用字段(所有内容必填)

```yaml
status: draft | verified | outdated | archived
last_verified: 2026-05-22
next_review: 2026-08-22  # 默认 last_verified + 90 天
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `status` | enum | ✅ | 见 GOVERNANCE.md 第 5 节 |
| `last_verified` | date | ✅ | 上次实际验证日期 |
| `next_review` | date | ✅ | 下次必须 review 日期 |

---

## Role 角色页 schema

`roles/<slug>/README.md`

```yaml
---
type: role
slug: developer
name_zh: 程序员 / 工程师
name_en: Developer / Engineer
emoji: 💻
description: 写代码的人,从前端到后端到 DevOps
audience_size_cn: 7M+   # 中国从业者规模(粗估)
audience_archetype: 25-40 岁,大厂 / 创业 / 自由职业
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
scenarios:                # 该角色覆盖的场景 slug 列表
  - writing-code
  - debugging
  - reading-codebase
  - writing-tech-doc
  - code-review
  - api-design
related_roles:
  - product-manager       # 协作角色,让用户跳转
  - designer
---
```

**正文结构**:
1. `# <emoji> <name_zh>`
2. 一段话定义这个角色(不超过 100 字)
3. **"我想做……" 索引**(每条链到 scenarios/)
4. 该角色独有的场景(如有)
5. 相关角色跳转

---

## Scenario 场景页 schema

`scenarios/<slug>.md`

```yaml
---
type: scenario
slug: prd-writing
title: 写 PRD / 需求文档
emoji: 📄
roles:                    # 哪些角色会做这个
  - product-manager
  - founder
pain_points:              # 传统方式的痛点
  - 写起来慢,反复改
  - 团队对齐难
  - 模板不一致
recommended_workflow: pm-prd-pipeline   # 推荐工作流 slug
recommended_tools:        # 单工具推荐(如不需要工作流)
  - claude
  - notion-ai
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
```

**正文结构**:
1. `# <emoji> <title>`
2. **痛点描述**(传统怎么做 → 哪里痛)
3. **推荐工作流**(2-3 个工具组合,链到 workflow)
4. **替代方案**(单工具 / 不同预算)
5. **Prompt 模板**(可直接复制)
6. **真实案例**(我或别人的真实使用,可选但加分)
7. **边界**(什么场景不适用)

---

## Tool 工具页 schema

`tools/<category>/<slug>.md`

```yaml
---
type: tool
slug: claude
name: Claude
category: chat-assistant
url: https://claude.ai
maker: Anthropic
pricing: paid                  # free | freemium | paid
price_range: $20-200/mo
china_availability: 🟡         # 🟢 🟡 🔴
modalities:                    # 支持的输入/输出
  - text
  - image
  - code
strengths:
  - 长上下文
  - 写作自然
  - 代码能力强
weaknesses:
  - 国内付款难
  - 速度比 GPT 慢
tier: S                        # S | A | B | C | F
tier_history:
  - date: 2026-05
    tier: S
    reason: 初版评估
recommended_for_scenarios:
  - writing-long-form
  - prd-writing
  - code-review
alternatives:
  - chatgpt
  - gemini
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
```

**正文结构(参考思路,不强制)**:
- 一句话定位 + Tier
- 它最擅长什么(具体场景,不是抽象介绍)
- **它不擅长什么**(必写,这是仓库的差异化)
- 真实使用 tips(从经验提炼)
- 价格分析 + 预算建议
- 国内用户注意(如适用)
- 版本变化追踪(如已知)

**铁律**(无论怎么写,必须满足):
- ✅ 必有"它不擅长什么"段落
- ✅ 必标 `china_availability`
- ✅ 必有清晰的 Tier 评级理由
- ✅ 不复制官方介绍语
- ❌ 不写"通用问答""无所不能"这类抽象描述

具体写法**因工具特点而异**:
- 模型类(Claude / GPT / DeepSeek)→ 重点写能力边界、上下文、定价档位、国内访问
- IDE 类(Cursor / Kiro)→ 重点写工作流、quirks、和模型的解耦关系
- 图像/视频类 → 重点写模型版本、prompt 风格、商用版权
- Coding Agent(Claude Code / Codex CLI)→ 重点写 agent loop、context 管理、和 IDE 的差异

---

## Workflow 工作流页 schema

`workflows/<slug>.md`

```yaml
---
type: workflow
slug: pm-prd-pipeline
title: 产品经理写 PRD 完整流水线
emoji: 📄
solves_scenario: prd-writing
roles:
  - product-manager
  - founder
tools_required:               # 关键工具(2-5 个)
  - claude
  - notion-ai
  - figma
time_investment: 30 分钟      # 完成一次需要的时间
output: 一份完整 PRD 文档
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
```

**正文结构**:
1. `# <emoji> <title>`
2. **解决什么痛点**
3. **完整流程**(Step 1, 2, 3 ...)
4. **每步的具体 prompt 或操作**
5. **可选变种**(预算 / 工具替换)
6. **真实产出示例**(可选)

---

## 校验脚本

每次 PR 自动跑 `scripts/lint.mjs`,检查:

- frontmatter 必填字段是否齐全
- `next_review` 是否在 `last_verified` 之后
- `slug` 是否符合命名规范
- 引用的 slug 是否真实存在
- markdown 标题层级是否合理

不通过 → PR 不能合并。
