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
- [ ] `last_verified` 是今天日期
- [ ] `next_review` 在 `last_verified` 后 90 天
- [ ] 标了 `china_availability`
- [ ] 写了"它不擅长什么"
- [ ] 用了 `_templates/` 里的模板,没自创结构
- [ ] PR 标题格式:`[Add/Update] <type>/<slug>`(例:`[Add] tool/cursor`)

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
