<!--
---
type: workflow
slug: spec-to-code
title: Spec → 实现 → 测试 → 文档
emoji: 🛠
solves_scenario: writing-code
roles:
  - developer
  - founder
tools_required:
  - kiro
  - claude-code
  - cursor
  - aider
time_investment: 4-8 小时(中型功能)
output: 一份完整 PR(含代码 + 测试 + 文档),可直接合并
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# 🛠 Spec → 实现 → 测试 → 文档

> 把"模糊的需求"变成"可合并 PR"的完整流水线。**程序员 AI 工作流的事实标准**。

---

## 这个工作流解决什么

详见 [→ 场景:写代码](../scenarios/writing-code.md)。

简化重述:你接到一个**中型功能**(5-30 文件),想要:
- 不要"AI yolo 直接写代码"(改完才发现需求理解错)
- 不要"自己一个人想清楚再写"(慢且容易遗漏)
- 想要 **AI 帮你想 → 你确认 → AI 实现 → 你 review → AI 补测试 → AI 写文档** 全流程

---

## 工具栈

| 阶段 | 工具 | 必备 / 可选 | 替代 |
|------|------|:----------:|------|
| **Spec / 设计** | [Kiro](../tools/ide/kiro.md) | 必备 | Claude / Notion + Claude |
| **核心实现(长任务)** | [Claude Code](../tools/coding-agent/claude-code.md) | 必备(海外身份)| [Aider](../tools/coding-agent/aider.md) + DeepSeek(国内)|
| **局部调试 / 短任务** | [Cursor](../tools/ide/cursor.md) | 必备 | [Windsurf](../tools/ide/windsurf.md) / [Trae](../tools/ide/trae.md) |
| **写测试** | Cursor / Claude Code | 必备 | 同上 |
| **写文档** | Cursor / Claude Code | 必备 | 直接 [Claude](../tools/foundation-models/claude.md) |
| **代码 Review** | Cursor / Codex CLI / Copilot | 可选 | — |

**国内开发者推荐替代**:整套用 [Aider + DeepSeek](../tools/coding-agent/aider.md) + [Cursor + DeepSeek key](../tools/ide/cursor.md) + [Kiro](../tools/ide/kiro.md),月费 ≈ ¥60。
**海外身份开发者推荐**:Kiro + Claude Code Max($100)+ Cursor Pro($20),月费 ≈ $120。

---

## 完整流程总览

```
Step 1  ─ 模糊需求 ──────────► Kiro Spec(requirements.md)
                                  ↓ 你 review
Step 2  ─ requirements ────────► Kiro Spec(design.md)
                                  ↓ 你 review
Step 3  ─ design ──────────────► Kiro Spec(tasks.md)
                                  ↓ 你 review
Step 4  ─ tasks ───────────────► Claude Code(实现核心)
                                  ↓ 自动跑测试 + 你 review diff
Step 5  ─ 局部 ────────────────► Cursor(微调 / 修边缘)
                                  ↓
Step 6  ─ 测试覆盖 ────────────► Claude Code(补测试)
                                  ↓
Step 7  ─ 文档 ────────────────► Cursor / Claude Code(写文档)
                                  ↓
Step 8  ─ Self-Review ─────────► Cursor + Codex / Copilot
                                  ↓
Step 9  ─ 提 PR ───────────────► 真人 reviewer
```

**总耗时**:中型功能 4-8 小时(传统手工估计 2-3 天)。

---

## Step 1:把"模糊需求"扩成 requirements

**工具**:[Kiro](../tools/ide/kiro.md) Spec 模式

**操作**:
1. 进入 Kiro,创建一个 Spec(`.kiro/specs/<feature-name>/`)
2. 粘进你拿到的"模糊需求"
3. 让 Kiro 用 EARS 格式扩成 requirements.md

**Prompt**:

```
我接到一个需求:[描述]

帮我用 EARS 格式扩展成完整 requirements.md:

1. User Story(谁 / 想做什么 / 为了什么)
2. Acceptance Criteria(WHEN ... THEN ... SHALL ...)
   - 至少 5-8 条
   - 必须涵盖正常流 + 错误流 + 边界条件
3. 非功能需求(性能 / 安全 / 兼容)
4. 假设 + 限制(out-of-scope 明确写)

不要给设计方案,只写需求。我看完后会改 / 确认。
```

**预期产出**:
- `requirements.md`(完整版)
- 你 review 一遍,**这一步是整个工作流最重要的卡口**:**需求错 → 后面全错**

⚠️ 不要省略 review。哪怕花 10 分钟改 1-2 处,也比后面发现问题再回头快 10 倍。

---

## Step 2:requirements → design

**工具**:Kiro Spec 模式 / Claude.ai 网页

**操作**:让 AI 基于 confirmed requirements 写 design.md。

**Prompt**(在 Kiro Spec 里):

```
基于 requirements.md,写一份 design.md:

1. **整体方案**(一段话 + 一张 mermaid 架构图)
2. **数据模型**:
   - 新增 / 修改的表 / 字段
   - 索引 / 约束
   - migration 影响
3. **API 设计**:
   - 新增 endpoint(method + path + 输入 + 输出 + 错误码)
   - 修改 endpoint
4. **关键时序**(一张 mermaid 时序图,只画"最复杂的那条路径")
5. **替代方案**:
   - 我考虑过的 2 种其他做法
   - 每种的 trade-off
   - 为什么不选
6. **风险清单**(技术 / 性能 / 数据 / 兼容)
7. **后续 milestone**(MVP → P1 → P2)

简洁(<2000 字)。每节用表格 / 列表代替长段落。
```

**预期产出**:
- `design.md`(完整版)
- 你 review,**重点确认**:数据模型 / API 设计 / 替代方案 / 风险

⚠️ 设计阶段切换 [Claude Opus 4.7](../tools/foundation-models/claude.md) 或 [GPT-5 Pro](../tools/foundation-models/chatgpt.md)。**写代码用 Sonnet 即可,设计阶段用 Opus 是值得的**。

---

## Step 3:design → tasks

**工具**:Kiro Spec 模式

**Prompt**:

```
基于 design.md,把实现拆成 tasks.md。

每个 task:
- 编号 + 一句话标题
- 涉及哪些文件(新建 / 修改)
- 依赖哪些前置 task(画 DAG)
- 验收标准(具体可验证)
- 估时(15 分钟 / 30 分钟 / 1 小时 / 2 小时 / 4 小时)

总共 5-15 个 task。
按"最小可独立提交"原则拆,**每个 task 都能单独成一个 commit / PR**。
```

**预期产出**:
- `tasks.md`(完整版,通常 8-15 条)
- 你 review,**确保每个 task 你看一眼就知道在做啥**

---

## Step 4:tasks → 核心实现(让 AI 跑长任务)

**工具**:[Claude Code](../tools/coding-agent/claude-code.md)(海外)/ [Aider + DeepSeek](../tools/coding-agent/aider.md)(国内)

### 海外身份(Claude Code)

```bash
cd <project-root>
claude
```

进入 Claude Code 对话:

```
> 看 .kiro/specs/<feature-name>/tasks.md
> 按编号顺序执行 task 1-5(简单的几个先做)
> 每个 task 完成后:
> - 跑 npm test(或项目测试命令)
> - 跑 npm run lint
> - 都过了再进下一个
> 任何步骤跑红了 → 停下来告诉我
> 不要自动 git commit,我每个 task 完成自己 review 后 commit
```

### 国内 / 国产模型(Aider + DeepSeek)

```bash
export DEEPSEEK_API_KEY=sk-xxx
aider --model deepseek/deepseek-chat
```

进入 Aider:

```
> /add .kiro/specs/<feature-name>/tasks.md
> /architect
> 按 tasks.md 的 task 1 实现。
> 涉及文件你识别下,确认后给我看 plan。
```

确认 plan → `/code` 进入实现 → 一个文件一个文件 review diff。

**预期产出**:
- 主要新文件 / 改动文件(已 commit 到分支)
- 测试基本能跑过
- 你每个 task 完成后**自己读一遍 diff**(关键!)

⚠️ **绝对不要"agent 跑 8 小时回头看"**。每个 task 完成你都 review 一次,出问题立刻纠正。

---

## Step 5:Cursor 局部修边缘

**工具**:[Cursor](../tools/ide/cursor.md)

**操作**:Claude Code / Aider 跑完后,**80% 的 task 是顺的,20% 有边缘问题**:
- 命名风格不一致
- 错误信息没本地化
- 缺一些边界判断
- 注释写得太啰嗦或太少

打开 Cursor,直接编辑文件,**Cmd+K 让 AI 局部改**:

```
# 选中错误处理段落
Cmd+K → "把错误信息改成项目其他地方一致的中文格式,
保留原 catch 逻辑不动"
```

```
# 选中函数
Cmd+K → "提取重复的代码块,保持原行为不变"
```

**这一步是"agent 不擅长但 IDE 极顺"的活**。

---

## Step 6:补测试覆盖

**工具**:Cursor 或 Claude Code

```
> 看 src/<new-module>/ 下面所有新 / 改的文件。
> 跑 vitest --coverage,看哪些路径没覆盖。
> 列出"应该补"的测试:
> - 哪个文件 / 哪个函数
> - 哪条路径(happy / error / boundary)
> - 测试方法(纯 unit / integration)
> 不要直接写,先给清单我审。
```

确认清单 → 让 AI 写测试 → 你 review。

**Tips**:
- 不要追求 100% 覆盖率
- **关键路径(用户核心动作 / 涉钱涉数据)100%,边缘 30-50% 即可**
- 测试用例本身的"简洁性"也要 review(AI 偶尔写过度)

---

## Step 7:写文档

**工具**:Cursor / Claude Code

3 类文档要写:

### 7a. 改动 README / docs/ 同步

```
> 看这次 PR 涉及的功能。
> 检查 README.md 和 docs/ 下面是否有相关的过期内容。
> 如果有,改成最新的;如果没有,提醒我哪里该新加文档。
```

### 7b. 改动 / 新加的 endpoint 文档

```
> 这次新加了 POST /api/xxx(看 src/routes/xxx.ts)。
> 在 docs/api/ 加一份对应的接口文档:
> - 描述 / 请求 / 响应 / 错误码 / 完整 cURL 示例
> - 风格匹配 docs/api/ 已有文档
```

### 7c. CHANGELOG / 升级说明

```
> 看 git diff main..HEAD。
> 在 CHANGELOG.md 加一条本次改动:
> - 简短(< 3 行)
> - 用户视角(不是工程师视角)
> - 标 Added/Changed/Fixed
```

---

## Step 8:Self-Review(提 PR 前)

**工具**:Cursor / [Codex CLI](../tools/coding-agent/codex-cli.md) / [Copilot Review](../tools/code-completion/github-copilot.md)

**Cursor Cmd+L**:

```
> 看本次 PR 的完整 diff(git diff origin/main..HEAD)。
> 假设你是严格 senior reviewer,挑刺。
>
> 6 个维度找问题:
> 1. 正确性 / 边界
> 2. 错误处理
> 3. 测试覆盖是否足够
> 4. 命名 / 可读性
> 5. 性能 / 复杂度(N+1 / 无意义循环)
> 6. 安全(权限 / 输入验证 / SQL 注入)
>
> 每条标级别(blocker / question / nit)。
> 找出来 + 说在哪个文件哪行。
```

走一遍 → 真问题改掉 → 再提 PR。

**这一步真的能让你的 PR 被人 review 时更顺**(reviewer 觉得"这个人写代码有审慎度")。

---

## Step 9:提 PR + 真人 review

**工具**:GitHub / GitLab / 公司平台

PR 描述也用 AI 写:

```
> 看本次 PR diff。
> 写 PR 描述:
> - 一句话总结
> - 改动动机(从 .kiro/specs/<feature-name>/requirements.md 摘核心)
> - 主要改动(按文件 / 按模块)
> - 测试情况(跑了什么)
> - reviewer 应该重点看哪 3 处
> - 任何已知边界 / 后续 TODO
```

附:把 spec 文件夹也提进去(`.kiro/specs/<feature-name>/`)→ reviewer 能看到完整需求 / 设计 / 任务上下文。

---

## 时间和成本

```
传统工作流(纯手工):
  - 中型功能 16-24 小时(2-3 个工作日)
  - 经常返工(需求理解错 / 漏边界)

这套 AI 工作流:
  - 中型功能 4-8 小时(0.5-1 工作日)
  - 80% 时间是 review,不是写
  - 提交质量普遍更高

工具月费(海外身份):
  Claude Pro $20 + Claude Code Max $100 + Cursor Pro $20 + Kiro $19 = ~$160

工具月费(国内):
  DeepSeek API ¥30 + Cursor Pro $20 + Kiro 免费 = ~¥180
```

**ROI**:
- 工具月费 ≈ $160
- 节省时间 ≈ 8-15 小时 / 周
- 按程序员时薪 ¥200 算 → 节省 ¥6000-12000 / 月
- **大约 5x-10x 投入产出**

---

## 这个工作流的边界

⚠️ **什么时候这套工作流不适用**:

1. **小到不需要 spec 的任务**
   - 改一个 typo / 改一行 CSS / 修一个明显 bug
   - **直接 Cursor Tab 完成**,don't over-engineer
2. **极复杂创新性任务**
   - 业务领域 AI 没训练数据的(行业专精)
   - 真新算法 / 真新设计模式
   - **AI 给"灵感",不能"主导"**
3. **极致性能 / 极致安全**
   - 高频交易 / 嵌入式
   - 涉密 / 加密协议
   - **AI 仅辅助,核心代码人写**
4. **完全陌生的语言**
   - 你看不懂 AI 写的代码 = 你 review 不了 = 你裸奔
   - 先用 [→ 学新领域](../scenarios/tech-research.md) 上手再用

---

## 真实案例

我用这套工作流做了:

### 案例 1:[content-os 的 xiaohongshu-publisher skill](https://github.com/survivorff/content-os/tree/main/skills/xiaohongshu-publisher)

- Step 1-3:Kiro Spec 写 requirements / design / tasks(20 分钟)
- Step 4:Claude Code 实现 SKILL.md + reference(40 分钟)
- Step 5-7:Cursor 微调 + 测试 + 文档(20 分钟)
- **总耗时 80 分钟**
- 手做估计 4 小时(主要 spec 这步会反复改)

### 案例 2:某加密交易所内部:撮合优化

- Step 1-3:Spec(2 小时,涉及 trade-off 多)
- Step 4:Claude Code 实现核心改动 + 兼容性(3 小时,跨 12 文件)
- Step 5-9:微调 + 测试 + 文档 + review(2 小时)
- **总 7 小时**
- 同事手做估算 3 工作日(24h)

---

## 进阶变种

### 变种 A:中小任务(节省 spec 步骤)

如果任务**只涉及 1-3 文件**:
- 跳过 Step 1-3(spec)
- 直接 Cursor 在 IDE 里写 inline spec(README 顶部一段说明)
- Step 4 用 Cursor Composer 而不是 Claude Code(更顺)
- Step 5-9 同样

**总耗时 < 30 分钟**。

### 变种 B:重度 / 复杂(增强自动化)

涉及 30+ 文件 / 多模块:
- Step 4 用 [Claude Code Background Agent / Devin](../tools/coding-agent/devin.md) 异步跑
- 你做 Step 5-9 的同时 agent 在后台
- 多个 task 并行(用 git worktree)

**总耗时减半,但管理 / review 复杂度上去**。

### 变种 C:全国产 / 国内 / 极致省钱

- Step 1-3:Kiro 国内可直连 + 国产模型
- Step 4:Aider + DeepSeek(月费 ¥10-30)
- Step 5-9:Cursor + 配 DeepSeek API key

**月费 < ¥100,体验 ≈ 海外组合的 80%**。
**这套是 2026 年国内程序员的最优解**。

---

## 实施前的 Checklist

提交 PR 前自查:
- [ ] requirements.md 我亲自 review 过,没歧义
- [ ] design.md 我看过,认同关键决策
- [ ] tasks.md 每个 task 我看一眼就知道在做什么
- [ ] 每个 task 我看过 diff 才进下一个
- [ ] npm test / npm run lint 都过
- [ ] 关键路径有测试覆盖
- [ ] 改了 endpoint → docs/api/ 同步
- [ ] CHANGELOG 加了
- [ ] PR 描述清晰(reviewer 5 分钟能决定 review 顺序)

---

## 相关阅读

- 场景:[→ 写代码](../scenarios/writing-code.md)
- 工具:[Claude Code](../tools/coding-agent/claude-code.md) / [Aider](../tools/coding-agent/aider.md) / [Kiro](../tools/ide/kiro.md) / [Cursor](../tools/ide/cursor.md)
- 配套场景:[Debug](../scenarios/debugging.md) / [Code Review](../scenarios/code-review.md) / [写文档](../scenarios/writing-tech-doc.md)

---

[← 回到所有工作流](./README.md)
