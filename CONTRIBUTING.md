# 🤝 贡献指南

> 这是一个**有立场的、长期维护的**知识库,不是 awesome list 大杂烩。
> 贡献门槛比一般 awesome list 高,因为我们对内容质量有承诺。

---

## 三个核心原则

### 1. 必须真实使用过

**绝对禁止**复制官方文档。每个工具/场景必须有"我用了它做什么"的具体说明。

> ✅ 好:"我用 Cursor 写了我现在用的博客系统(Astro + TypeScript),3 个月时间,Composer 帮我重构了 8 次架构。"
> ❌ 不好:"Cursor 是基于 VS Code 的 AI 编辑器,支持多种模型..."(官方文案)

### 2. 必须解决真实痛点

我们不收"列工具",我们收"**在 X 场景下 Y 痛点的解法**"。

如果你想加一个工具但找不到它对应的具体场景,**那它可能不该被加**。

### 3. 必须填完所有必要字段

特别是这两个:

- **国内可用性**(🟢 / 🟡 / 🔴)
- **它不擅长什么**(独家字段,不能空)

---

## 贡献类型 + 流程

### A. 加一个工具(最常见)

1. 找到工具的分类(`tools/<category>/`)
2. 复制 `_templates/tool-template.md`
3. 重命名为 `<tool-slug>.md`
4. 填完所有字段
5. 同时:在对应 scenario 页加一个"推荐"链接(否则没场景挂)
6. 在 `meta/TIER-LIST.md` 加一行
7. 开 PR

### B. 加一个场景

1. 想清楚这个场景跨哪些角色(至少 2 个)
2. 在 `scenarios/` 下用 `_templates/scenario-template.md` 创建
3. 在 `scenarios/README.md` 加一行
4. 在涉及的 roles README 里 update 索引

### C. 加一个新角色

**门槛最高**,需要走提案流程。
见 `_templates/role-proposal-template.md`,先开 issue。

### D. 加一个工作流

工作流必须是"**多个工具协作**"的场景,且至少跑过一次。

1. 用 `_templates/workflow-template.md`
2. 在 `workflows/` 下创建
3. 关联到 `solves_scenario`(对应场景页)

### E. 提议 Tier 调整

不接受单个 PR 改 Tier。开 Issue 说明:
- 工具名
- 当前 Tier
- 提议改到什么 Tier
- 理由(必须基于"使用变化"或"工具迭代",不是"我觉得")

维护者每月 review 时统一处理。

### F. 报告过期内容

- 工具死了?
- 工具大版本变了?
- 信息错了?

直接开 Issue,标签 `[outdated]`。

---

## PR 必填 Checklist

提交 PR 前自查:

- [ ] frontmatter 所有 required 字段都填了
- [ ] frontmatter **包在 `<!-- ... -->` 注释里**(GitHub 不渲染丑表格)
- [ ] `last_verified` 是今天日期
- [ ] `next_review` 在 `last_verified` 后 90 天
- [ ] 标了 `china_availability`
- [ ] 写了"它不擅长什么"
- [ ] 用了 `_templates/` 里的模板,没自创结构
- [ ] **跑了 `node scripts/lint.mjs` 通过**(0 errors)
- [ ] PR 标题格式:`[Add/Update] <type>/<slug>`(例:`[Add] tool/cursor`)

---

## 自动化脚本

仓库内置几个脚本帮你保质量。**所有脚本都是零依赖的 ES module**(只用 Node 内置 + git),不需要 npm install。

### `scripts/lint.mjs` — 内容健康检查

**用法**:

\`\`\`bash
node scripts/lint.mjs                    # 全仓库
node scripts/lint.mjs scenarios/         # 单个目录
node scripts/lint.mjs tools/foundation-models/claude.md   # 单个文件
\`\`\`

**检查项**:
- frontmatter 必备字段(status / last_verified / next_review)
- frontmatter 必须包在 \`<!-- ... -->\` 注释里
- \`last_verified\` 在过去 6 个月内(超过 → 标 outdated)
- \`next_review\` 在 \`last_verified\` 之后
- \`tier\` 必须是 S / A+ / A / A- / B+ / B / C / F 之一
- \`china_availability\` 必须含 🟢🟡🔴 之一
- **所有 markdown 内部链接都能解析到真实文件**(死链立即报错)

**CI 集成**:每个 PR / push 自动跑(见 \`.github/workflows/lint.yml\`)。**lint 不过 = PR 不能合并**。

### \`scripts/hide-frontmatter.mjs\` — 自动包注释

新写的内容文件如果忘了把 frontmatter 包在 \`<!-- ... -->\` 里,跑这个脚本一键修:

\`\`\`bash
node scripts/hide-frontmatter.mjs
\`\`\`

幂等(已经包了的文件会自动跳过)。

### \`scripts/scaffold-scenarios.mjs\` — 生成场景骨架

如果你新加了一个场景到 \`scenarios/README.md\` 但还没写完整内容,这个脚本会:
- 生成 \`scenarios/<slug>.md\` stub 文件
- 含完整 frontmatter + 骨架结构 + "待写"提示
- 标 \`status: draft\`(让 lint 知道这是 stub)

\`\`\`bash
# 把新场景加到 scripts/scaffold-scenarios.mjs 顶部的 SCENARIOS 数组
# 然后跑:
node scripts/scaffold-scenarios.mjs           # 跳过已存在
node scripts/scaffold-scenarios.mjs --force   # 覆盖所有(慎用)
\`\`\`

**为什么要这样**:防止"角色页 / 工具页引用了一个还没写的场景"导致死链。**先建占位,内容稍后补**。

### \`scripts/scaffold-tool-stubs.mjs\` — 生成工具占位

类似上面,但针对工具页。当一个工具已经被其他完整内容引用,但还没深拆时,生成占位:

\`\`\`bash
node scripts/scaffold-tool-stubs.mjs
\`\`\`

---

## 不接受的贡献

- ❌ 工具厂商自我推销(可识别的复制粘贴模式)
- ❌ 复制官方文档作为工具描述
- ❌ 加未公开/未上线的工具(必须公开可用)
- ❌ 加 3 个月没更新的"已死项目"
- ❌ 灰色用途工具(代写论文、降 AI 检测、绕监管等)
- ❌ 攻击其他工具的内容(可以诚实评价缺点,但不撕)
- ❌ 一次 PR 加 ≥ 3 个工具(可疑营销 batch)

---

## 反馈周期

- 一般 PR:**24-72 小时** review
- 大改动 PR:**1 周** review
- 月度更新前(每月 25-30):**只接 critical 修复**,大 PR 等下个月

---

## 鸣谢

每月 changelog 会感谢实质贡献的人。

---

[← 回到 README](./README.md)
