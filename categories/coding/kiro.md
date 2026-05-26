# Kiro

> AWS 出的 AI 开发环境。Spec 驱动模式是它的杀手锏。
> Tier A+。我用它做"从 0 设计新功能"。

---

## 基本信息

| 项 | 值 |
|---|---|
| **官网** | [kiro.dev](https://kiro.dev) |
| **平台** | macOS · Windows · Linux(VS Code fork) |
| **国内可用性** | 🟢 直接可用 |
| **底层模型** | 多个,默认 Claude Sonnet |
| **价格** | 免费版 + 付费版 |
| **特色模式** | Spec / Vibe(对话式) / Hooks |

---

## 我的 Tier 评级:A+(几乎到 S,差一点是因为生态新)

**评级理由**:
- **Spec 模式独一份**:把"想要什么 → 设计 → 任务拆解 → 代码"整个流程结构化,Cursor / Claude Code 都没这种工程化思维
- **国内可用,无需配置**
- **AWS 资源丰富**,后续会持续优化

**为什么不到 S**:用户基数还小,生态、插件、社区比 Cursor 弱

---

## 我每周用它做什么

★★★(3/5,新功能 + 复杂模块开发用它)

主要场景:

1. **新模块设计**:把模糊想法变成 Requirements → Design → Tasks → Code 的完整链路
2. **跟人合作的 Spec**:Spec 文档 = 沟通文档,可以直接给同事 review
3. **AGENTS.md / Skills**:Kiro 原生支持 Agent Skills,这是我做 content-os 流水线的基础
4. **Hooks 自动化**:文件变更触发 agent 自动行动

---

## 它最适合做什么

- ✅ **从 0 到 1 的功能开发**:有结构化思维,不会"忘记需求"
- ✅ **多人协作的项目**:Spec 文档同事也能读
- ✅ **长寿项目**:Spec 沉淀下来,3 个月后回来还能 follow
- ✅ **Agent / Skills 自动化**:这是 Kiro 的底层能力,远超传统 IDE

---

## 它**不擅长**什么

- ❌ **快速改一两行**:Spec 流程对小任务过于重
- ❌ **已有项目的局部修改**:Cursor 更顺手
- ❌ **CLI 流程**:Kiro 是 IDE,纯 CLI 用 Claude Code

---

## Spec 模式怎么用(独家功能)

这是 Kiro 最值钱的部分。流程:

```
1. 你描述: "我想加一个用户登录"
   ↓
2. Kiro 生成 requirements.md (验收标准)
   你 review/微调
   ↓
3. Kiro 生成 design.md (技术方案)
   你 review/微调
   ↓
4. Kiro 生成 tasks.md (任务列表)
   ↓
5. Kiro 一个一个执行 task
   每完成一个你点确认
```

每一步你都可以打断、修改、放弃。**这是"AI 写代码"和"AI 帮你想清楚"的区别**。

---

## Agent Skills:Kiro 的杀手锏

[Anthropic 的 Agent Skills](https://www.anthropic.com/news/agent-skills) 标准在 Kiro 里是原生支持。

你可以建 `.kiro/skills/<skill-name>/` 目录,放 `SKILL.md`,Kiro 在合适的时候自动调用。

我用这个做了 [content-os](https://github.com/survivorff/content-os) 的 9 个 skills(topic-scout、blog-writer、xiaohongshu-editor 等)。

**核心价值**:把你日常的工作流程沉淀成可复用 agent 资产。

---

## 真实使用 tips

### 1. 先 Vibe 后 Spec

不要立刻进 Spec 模式。先 Vibe 模式聊清楚要做什么,再切 Spec。

### 2. requirements.md 用 EARS 格式

Kiro 推荐 EARS(Easy Approach to Requirements Syntax),验收标准格式化:

```
WHEN user clicks login button
WHILE form is filled
THE system SHALL validate credentials within 1s
```

格式化后 → AI 写出来的代码更准

### 3. tasks.md 一次只跑 1 个

不要让它一次跑完所有任务,每完成一个 review 一下,**避免 5 个 task 后才发现方向错了**。

### 4. Hooks 用法

`.kiro/hooks/` 目录放 hook 配置,可以做:
- 文件保存时自动跑 lint
- 提交前自动写 commit message
- 文件创建时触发文档生成

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](./cursor.md) | 已有项目改一两个文件 |
| [Claude Code](./claude-code.md) | 大任务 + CLI 党 |
| Plan mode in Cursor | 想试 Spec 思路但不离开 Cursor |

---

## 价格分析

```
免费版    够个人尝试和小项目
付费版    适合长期项目,深度用 Hooks 和 Skills
企业版    AWS 集成,大公司用
```

我个人:**免费版 + 偶尔付费跑大任务**

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2025-12 | Spec mode 公开 | 范式转变,首次让 AI 编程"工程化" |
| 2026-03 | Hooks 系统 | 自动化新维度,把 IDE 变成 dev 平台 |
| 2026-05 | Skills 生态扩展 | Anthropic Agent Skills 标准对齐 |

---

## 引流到我

我用 Kiro Spec 模式 + Skills 做的:
- [content-os](https://github.com/survivorff/content-os) — 内容流水线
- 博客 [blog.frankfu.cloud](https://blog.frankfu.cloud)

---

[← 回到 coding/](./README.md)
