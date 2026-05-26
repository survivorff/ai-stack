# 🏛 架构决策记录(ADR)

> 重大架构决策的历史。每条决策一旦写下就不再删除,反悔需要新写一条 superseded。

格式:[ADR Template](https://github.com/joelparkerhenderson/architecture-decision-record)

---

## ADR-001:三层信息架构(Roles → Scenarios → Tools)

**Date**: 2026-05-22
**Status**: Accepted

### Context

第一版我们抄了 ikaijua/Awesome-AITools 的"按工具类型分"(coding / writing / image-gen),但这有几个问题:

- 新人(产品 / 设计 / 运营 / 学生)不知道选哪个
- 同一个工具(如 Claude)在多个场景下用法完全不同,纯按工具分会重复或缺
- 无法回答"我在 X 场景该用什么"这类高频问题

### Decision

采用**三层信息架构**:

```
Roles 角色 (我是谁) → Scenarios 场景 (我要做什么) → Tools/Workflows (用什么)
```

- **Roles** 不直接列工具,只索引场景
- **Scenarios** 给完整解决方案(工具组合 + prompt 模板)
- **Tools** 是单工具深度的唯一来源
- **Workflows** 是多工具协作的复合方案

### Consequences

正面:
- 入口清晰(三种入口都能找到)
- 工具复用(一个工具页被多个场景引用,内容不重复)
- 可扩展(新增角色/场景不影响其他)

负面:
- 写作约束更强(不能随便扔到首页)
- 新人写作需要理解三层结构

---

## ADR-002:不收录"AI 写论文 + 降 AI 检测"类工具

**Date**: 2026-05-22
**Status**: Accepted

### Context

学生场景中"AI 代写论文 + 降 AI 检测"是高搜索词,但属于学术诚信红线。

### Decision

**不收录**任何明显面向"绕过 AI 检测"或"代写应交作业"的工具。

我们的"学生"场景定位是:**AI 辅助你真正学懂**,而不是绕开学术诚信。

### Consequences

正面:
- 长期口碑不被这类灰色内容拖累
- 教育者/学校/家长会更信任本仓库

负面:
- 失去一部分高搜索量但低质受众

---

## ADR-003:不接广告 / 不挂 affiliate / 不卖 Tier 排序

**Date**: 2026-05-22
**Status**: Accepted

### Context

AI 工具站普遍商业模式是 affiliate 或厂商付费置顶。这导致内容信任度普遍低。

### Decision

12 个月内**完全免费,不接广告,不挂 affiliate**。

12 个月后可能考虑:
- 年度报告 PDF / 飞书文档(付费)
- 严选用户社群(¥99/年)
- 公益赞助(写在 README,不影响内容)

**绝不**:收钱改 Tier / 厂商付费置顶 / Affiliate 链接。

### Consequences

正面:
- 评价独立性 = 长期信任度
- 用户感知"这是写给我的,不是恰饭的"

负面:
- 早期完全无收入(必须靠主业养)

---

## ADR-004:月度发版,即使没新内容也要发"维护版"

**Date**: 2026-05-22
**Status**: Accepted

### Context

现有 awesome-ai-tools 仓库 80% 都是发布之后没有规律更新,信任度低。

### Decision

每月 1 号发一个 GitHub Release `v2026.MM`。**即使没新内容,也要发"维护版"**(标注本月哪些内容已 re-verified)。

### Consequences

正面:
- 月更承诺 = 这个仓库最大的差异化
- 用户 Watch 后有可预期的节奏

负面:
- 必须维护,不能停(否则比不更新更糟)

---

## ADR 模板(给未来用)

```
## ADR-XXX:< 决策标题 >

**Date**: YYYY-MM-DD
**Status**: Proposed | Accepted | Deprecated | Superseded by ADR-XXX

### Context

(为什么需要这个决策,什么情况下产生的问题)

### Decision

(决定怎么做)

### Consequences

正面:
- ...

负面:
- ...
```
