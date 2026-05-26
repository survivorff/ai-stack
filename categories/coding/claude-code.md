# Claude Code

> Anthropic 出的 CLI 工具。运行在终端里,不是 IDE。
> Tier S。我用它做长任务和复杂重构,Cursor 干不了的活。

---

## 基本信息

| 项 | 值 |
|---|---|
| **官网** | [claude.com/code](https://claude.com/code) |
| **平台** | macOS · Linux · Windows(WSL) |
| **国内可用性** | 🟡 需要自配 API key + 代理。Pro 订阅在国内难付费 |
| **底层模型** | Claude Sonnet 4.7 / Opus 4.7(2026-05) |
| **价格** | Pro $17/mo + 按量 API · Max $100/mo · Max+ $200/mo |
| **接入方式** | `npm install -g @anthropic-ai/claude-code` 或 web |

---

## 我的 Tier 评级:S

**评级理由**:
- 长上下文 + 长任务的最稳工具
- SWE-bench Verified 80.8%,工程 benchmark 第一
- 真正能"自己跑一段时间"的 agent,不是补全工具

---

## 我每周用它做什么

★★★★(4/5,大任务时的主战场)

主要场景:

1. **跨多文件大重构**:比如把一个模块的设计模式从 X 改成 Y,涉及 20+ 文件
2. **从 0 实现一个功能**:给它一份需求文档,它自己读项目、写代码、跑测试
3. **历史代码考古**:"为什么这段代码这么写",它会读 git log + 代码 + 文档给我答案
4. **复杂 debug**:错误信息深、链路长的 bug,Cursor 转不过来时切到 Claude Code

---

## 它最适合做什么

- ✅ **长任务**:30+ 文件的协作,Cursor 会飘,Claude Code 不会
- ✅ **从需求到实现的全过程**:比"补全"高一个维度,接近"AI 同事"
- ✅ **复杂工程问题**:分布式、性能优化、架构设计这类需要"想清楚再写"的
- ✅ **CLI 工作流**:你不离开终端,所有操作 cli 完成

---

## 它**不擅长**什么

- ❌ **快速迭代**:每次出代码都比 Cursor 慢 3-5 倍,没法"看着 AI 写"
- ❌ **微小改动**:杀鸡用牛刀,改一行字直接 Cursor 更快
- ❌ **强 GUI 依赖工作流**:你要看着代码改的工作流不适合
- ❌ **国内访问**:这是最大障碍,需要稳定代理

---

## 真实使用 tips

### 1. 长任务先写好需求

不要直接跟它说"实现 X 功能"。先写一份 spec(可以让 Kiro 帮你写),再 `claude code <spec>`。

### 2. 用 `--continue` 接续会话

任务被打断、token 用完、网络断了 → `claude code --continue` 继续上次的上下文。

### 3. CLAUDE.md 文件

项目根目录建一个 `CLAUDE.md`,内容包括:
- 项目目标
- 关键架构约束
- 不能做的事

Claude Code 每次启动会自动读。**等价于 .cursorrules,但更深**。

### 4. 监控 token

Pro 是 $17/mo + API 计费,长任务一不小心烧掉几十刀。
看 `claude config show` 知道当前用量。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Cursor](./cursor.md) | 短任务、要看着 AI 写、有 GUI 需求 |
| [Aider](./aider.md) | 想用 GPT 不用 Claude、git 集成更深、完全免费 |
| [Devin](./devin.md) | 完全自主、不要 human in the loop(贵且不稳) |

---

## 价格分析

```
Pro       $17/mo  + API 按量      最划算的入门档
Max       $100/mo                 中度用户
Max+      $200/mo                 重度用户(我目前在这档)
```

**我的真实账单**(2026-05): ~¥720/月(Max + 偶尔超量 API)

---

## 国内用户的麻烦

这是 Tier S 工具中**国内可用性最差的**。要解决三件事:

1. **代理**:全程稳定的国际网络
2. **API key 申请**:需要 Anthropic 账号,验证手机号有时被卡
3. **付款**:国内 Visa/Master 卡有时被风控,需要试不同卡

**临时替代**:国内开发者可以用以下国产编程 AI:
- 通义灵码(免费,效果接近 GPT-4)
- 字节豆包代码模型
- 智谱 CodeGeeX

但效果距 Claude Code 还有 30-50% 差距。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2026-02 | Claude Sonnet 4.7 发布,Claude Code 同步升级 | **跨多文件能力大跃迁**,上下文管理更聪明 |
| 2026-04 | 加入 Computer Use(操作浏览器) | 实验性,生产用不上 |
| 2026-05 | Claude Code Web 版本 | CLI 党继续 CLI |

---

## 引流到我

我用 Claude Code 跑过的真实工程案例:
- [content-os](https://github.com/survivorff/content-os) — 内容流水线 agent skills
- 博客 [blog.frankfu.cloud](https://blog.frankfu.cloud)

---

[← 回到 coding/](./README.md)
