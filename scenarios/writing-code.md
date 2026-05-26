---
type: scenario
slug: writing-code
title: 写代码 / 实现新功能
emoji: 💻
roles:
  - developer
  - founder
pain_points:
  - 框架不熟,靠搜文档浪费时间
  - 边界情况想不周,bug 反复出
  - 写测试懒,但没测试又慌
  - 团队风格不统一,代码 review 拉锯
recommended_workflow: spec-to-code
recommended_tools:
  - cursor
  - claude-code
  - kiro
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---

# 💻 写代码 / 实现新功能

> 把"想要做什么"变成"运行的代码"。AI 工具最直接、最成熟的应用场景。

---

## 你为什么读到这里?(痛点)

传统流程:看 spec → 翻文档 → 写代码 → 写测试 → 写文档,中间有大量"我得搜一下""这个 API 怎么用"的卡顿。

具体痛点:

- **不熟的框架/库**:每次都要去看文档、Stack Overflow,30 分钟解决一个"原本应该 3 分钟"的事
- **边界情况想不周**:写 happy path 飞快,边界 / 错误处理总是漏
- **写测试懒**:知道该写测试,但**写完功能就懒得回头补**
- **团队风格不统一**:你写了一遍,review 又被退回来改

---

## 推荐方案

### 🥇 方案 A:Spec 驱动(中大型功能)

**适合**: 功能涉及 5+ 文件,或新模块从 0 开始
**时间投入**: 半天到一天
**预算**: ¥150/月起 (Cursor Pro 即可)

**完整流程**: [→ workflows/spec-to-code.md](../workflows/spec-to-code.md)

简版:
1. **Kiro Spec 模式**写 requirements + design
2. **Claude Code** 实现核心模块
3. **Cursor** 局部调试 + 写测试

### 🥈 方案 B:Cursor 单工具(中小任务)

**适合**: 改 1-3 个文件,或熟悉的框架内迭代
**时间投入**: 30 分钟 - 2 小时
**只用工具**: [Cursor](../tools/coding/cursor.md) Pro

**步骤**:
1. `Cmd+L` 跟它讨论清楚再动
2. `Cmd+I` Inline 让它写
3. 跑一下,出问题再 `Cmd+L` 反馈

### 🥉 方案 C:终端党 / 长任务

**适合**: > 30 文件的重构、复杂工程问题
**只用工具**: [Claude Code](../tools/coding/claude-code.md) Pro + 本地 `CLAUDE.md`

---

## 关键 Prompt 模板

### Prompt 1:让 AI 先想清楚再动手

```
我要在 [项目/模块] 加一个功能:[功能描述]

在动手写代码之前,先帮我:
1. 列出 3-5 个关键边界情况
2. 列出会被影响的 2-3 个现有模块
3. 给出技术方案的两个 alternative,各自的 trade-off

不要写代码,只回答上面三件事。我看完同意后再动手。
```

**为什么**: 防止 AI 一上来就动手。**写之前先想**这一步,比"快快写完"省 50% 后续 debug 时间。

### Prompt 2:让 AI 模拟 senior 跟你结对

```
你现在是和我结对编程的 senior 工程师。我会描述任务,你按下面节奏来:

1. 先复述我的需求,如有歧义提问
2. 提出最简实现方案 + 说为什么不要更复杂
3. 给出代码 + 标注我应该 review 的 3 个关键点
4. 给出测试用例(覆盖 happy path + 2 个边界)

任务: [描述任务]
```

### Prompt 3:bug 不是"修就完了"

```
这个 bug:[描述现象 + 报错]

不要只给 fix。先回答:
1. 这个 bug 暴露了什么设计问题?
2. 同样的根因可能影响哪些其他地方?
3. 给出 3 种修复方案(从快速到根治)
4. 推荐用哪一种 + 为什么
```

---

## 真实案例

我用方案 A 实现 [content-os 的 xiaohongshu-publisher skill](https://github.com/survivorff/content-os/tree/main/skills/xiaohongshu-publisher):

- Kiro 写 spec(20 分钟):"半自动发布,Lark 提醒,等用户回复确认"
- Claude Code 实现 SKILL.md + reference(40 分钟)
- Cursor 局部调试 prompt 模板(20 分钟)

**总时长 80 分钟**。手做估计 4 小时(主要是 spec 这步会反复改)。

---

## 这套方案的边界

⚠️ 什么时候不适用:

- **极致性能场景**(高频交易、嵌入式):AI 写出来的代码大概率不够快
- **极致安全场景**(密码学、关键基础设施):必须人审,AI 是辅助不是主导
- **完全不熟悉的语言**:你看不懂 AI 写的代码,你 review 不了 = 你在裸奔
- **架构没想清楚**:让 AI 写一坨 prototype 不如先画白板想清楚

---

## 相关场景

- [→ Debug](./debugging.md) — 写完跑不起来怎么办
- [→ 代码 Review](./code-review.md) — 你写完别人 review,或反过来
- [→ 写技术文档](./writing-tech-doc.md) — 代码写完了,文档同步
- [→ API / 架构设计](./api-design.md) — 比写代码上一层的事

---

[← 回到所有场景](./README.md)
