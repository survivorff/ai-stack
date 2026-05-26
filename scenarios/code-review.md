<!--
---
type: scenario
slug: code-review
title: 代码 Review
emoji: 🔍
roles:
  - developer
  - founder
pain_points:
  - PR 太大没时间逐行看
  - 找不到"该问什么问题"
  - 容易漏掉边界情况 / 错误处理 / 安全
  - review 风格不统一(有人苛刻有人放水)
  - 自己 PR 提交前不知道哪里会被挑刺
recommended_workflow: ai-pr-review
recommended_tools:
  - github-copilot
  - cursor
  - claude-code
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# 🔍 代码 Review

> Review 是工程师质量的护城河。AI 不能完全替代人,**但能把你的 review 速度提 3 倍 + 不漏关键点**。

---

## 你为什么读到这里?(痛点)

- **PR 太大没时间看**:1500 行 diff,逐行读要 1 小时
- **不知道该问什么**:看完代码"好像没毛病",但其实漏掉重点
- **每次都漏掉同一类**:错误处理 / 边界 / 安全 / 性能,新人 reviewer 容易漏
- **风格不统一**:Reviewer A 苛刻,Reviewer B 放水,新人无所适从
- **自己 PR 怕被挑**:提交前不知道有什么 reviewer 会问的问题

---

## 推荐方案

### 🥇 方案 A:你 review 别人(主动 review)

**适合**: 你给别人的 PR 写评论
**时间**: 5-15 分钟一个 PR
**工具**: [GitHub Copilot PR Review](../tools/code-completion/github-copilot.md) / [Cursor](../tools/ide/cursor.md) / [Claude Code](../tools/coding-agent/claude-code.md)

**步骤**:
1. AI 先扫一遍给"潜在问题清单"
2. 你 review AI 的清单,挑出"真值得提的"
3. 你最后定稿写评论(AI 帮你写不要照搬)

### 🥈 方案 B:你提交前自己先 review(被动 review)

**适合**: 提 PR 前自检
**时间**: 5 分钟
**工具**: [Claude Code](../tools/coding-agent/claude-code.md) 或 [Cursor Cmd+L](../tools/ide/cursor.md)

```
> 这是我即将提的 PR diff。
> 假设你是严格的 senior reviewer,挑刺。
> 找出:
> 1. 显然的 bug
> 2. 边界 / 错误处理漏掉的
> 3. 命名 / 风格不一致
> 4. 性能 / 安全隐患
> 5. 测试覆盖不够的
> 给我一份"提交前必须修"的清单。
```

**效果**:**自己提 PR 前先被 AI 挑一遍 → 真 reviewer 来时挑刺少 50%**。

### 🥉 方案 C:CI 自动 PR Review

**适合**: 团队 / 开源项目
**工具**: GitHub Copilot Auto Review / Codex CLI Action / 自建

PR 一开 → CI 自动 AI review → 评论留在 PR 里。
人 reviewer 看 AI 找出来的问题(参考)+ 自己补充(确认)。

---

## 关键 Prompt 模板

### Prompt 1:多维度 Review

```
我在 review 这份 diff:[贴 diff 或 @ 文件]

按下面 6 个维度逐个分析,每个维度给 0-3 个具体观察:

1. **正确性**:逻辑是否对?边界条件考虑了吗?
2. **错误处理**:try/catch / 错误冒泡 / 用户友好的错误信息有吗?
3. **测试**:这个改动应该加哪些测试?现有测试够覆盖吗?
4. **命名 / 可读性**:有没有让 reviewer 卡住的命名或模式?
5. **性能 / 复杂度**:有没有明显的 O(n²) / N+1 / 不必要的循环?
6. **安全**:输入验证 / SQL 注入 / XSS / 权限校验有问题吗?

每个观察标级别(blocker / question / nit)。
```

### Prompt 2:大 PR 摘要

```
PR 太大了我没时间全看。

帮我:
1. 一句话总结这个 PR 在做什么
2. 列出主要改动(按文件 / 按模块)
3. 标出"我必须看的 5 处"(关键逻辑变更 / 高风险点)
4. 标出"可以快速过的"(test / format / 简单 refactor)

让我能在 5 分钟做出 review 决定。
```

**适合**:同事提了一个 1500 行的大 PR,你没空全看但又得 review。

### Prompt 3:Senior Reviewer 风格

```
你扮演一个非常严格的 senior 工程师 reviewer,
对这份 diff 提至少 10 条"看似细节但其实重要"的反馈。

要求:
- 不要客气
- 不要给 fix(只指出问题)
- 找出"junior 写的时候觉得没问题但其实有隐患"的地方
- 中文反馈,简短直接
```

**对锻炼新 reviewer 是个好工具**(看 AI 怎么挑刺,你也学会怎么挑)。

### Prompt 4:对方反驳怎么办

```
我提了一条 review:[复述 review]
对方回复:[复述 ta 的反驳]

帮我判断:
1. ta 反驳得对吗?
2. 如果有道理,我应该接受 / 如何回复
3. 如果还是有问题,怎么用对方能接受的方式坚持

要客观,如果我错了直接说。
```

**比"自己抠胳肢窝"想公平多了**。

---

## 真实使用 tips

### 1. AI 找的问题分级,**自己决定提哪些**

AI 一个 PR 给你 15 条反馈,**别全发** —— 别人看了想打人。
分级:
- **Blocker**(必须改才能 merge):3-5 条
- **Question**(我没看懂,问问):1-3 条
- **Nit**(挑刺,可改可不改):0-2 条

发评论时**标好这是哪一档**。

### 2. AI 给的反馈 ≠ 你的判断

AI 偶尔会:
- 提"过度的 over-engineering 建议"(其实你项目阶段不需要)
- 误判"已经处理过的边界"(它没看到上下文)
- "为了找点问题硬找"(没问题它也凑出几条)

**你必须 review AI 的 review** → 只发你认同的。

### 3. 自己提 PR 前必跑一次自检

我自己的习惯:**git push 前一定跑一次 "AI 自检 prompt"**。
- 5 分钟
- 经常发现 1-2 个真问题
- 真 reviewer 来时少被挑

**这个习惯回报远大于成本**。

### 4. PR 描述也让 AI 写

```
> 这是我的 diff:[贴 diff]
> 帮我写一份 PR 描述,包括:
> - 一句话总结
> - 改动的动机(为什么做)
> - 主要改动(按模块列)
> - 测试情况(我跑了什么)
> - reviewer 应该重点看哪几处
```

**好的 PR 描述 → reviewer 速度 + 3 倍**。

### 5. 团队级:把"review 标准"写进 prompt 模板

`.cursor/rules/review.md`:
```markdown
# Code Review 标准
- 每个新 endpoint 必须考虑认证 / 授权
- 每个 DB 改动必须有 migration
- 每个外部 API 调用必须有 timeout + retry
- 每个新依赖必须 PR 描述里说明为什么引入
- ...
```

**让 AI review 走团队的标准,而不是它自己默认的标准**。

### 6. Review 是"教育新人"的好场合

新人 PR 被挑出问题时,**让 AI 帮你写出"为什么不应该这么做"的解释**:

```
> 这个新人的 PR 写法 [描述],我想 review 评论,
> 不只是说"改了" — 想顺便教育 ta:
> 1. 为什么这么写不好(从工程原则)
> 2. 推荐的写法 + 短代码示例
> 3. 类似情况的最佳实践参考链接
> 用友好但严肃的语气。
```

---

## 真实案例

某次我帮一个新人 review PR,1200 行 diff:

- 直接读估计 45 分钟
- 用 Prompt 1(6 维度)→ AI 给 22 条反馈(15 分钟)
- 我筛出 6 条 blocker + 3 条 question(10 分钟)
- 写最终评论(10 分钟)

**总 35 分钟,vs 直接读省 30%,且我没漏关键点**。
新人也学到了 —— 我每条评论都附"为什么"的解释。

---

## 这套方案的边界

- **业务逻辑对错**:AI 不知道你产品规则,review 只能看技术层
- **架构 / 设计判断**:AI 给的"应该重构成 X"可能不适合你项目阶段
- **团队文化 / 沟通技巧**:AI 写的评论可能太严厉或太客气,你要调整语气
- **"这是 hotfix 不要太挑"** 之类的隐含前提 AI 不知道

---

## 相关场景

- [→ 写代码](./writing-code.md) — 写代码时就先想"会被怎么 review"
- [→ Debug](./debugging.md) — review 时找潜在 bug
- [→ 读老项目](./reading-codebase.md) — review 大 PR 类似读老项目

---

[← 回到所有场景](./README.md)
