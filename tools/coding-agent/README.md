# 🤖 编程 Agent(Coding Agent)

> "**模型 + 工具调用**"组合,以编程为目标。
> 区别于 IDE:它们能**自主跑任务**(读文件、改代码、运行命令、跑测试),是 agent 而非 autocomplete。

---

## 这个分类是什么、不是什么

✅ **是**:模型 + agent 工具(read/write/bash/edit)的组合
- Claude Code(Claude + Anthropic 自研 agent 工具)
- Codex CLI(2025 OpenAI 重启)
- Aider(开源,任意模型 + git 集成)
- Devin(Cognition,完全自主)

❌ **不是**:
- ❌ IDE 产品(那是 [tools/ide/](../ide/))
- ❌ 单纯补全工具(那是 [tools/code-completion/](../code-completion/))

---

## 📊 Tier 速查(2026-05)

| 工具 | Tier | 国内 | 月费 | 模型 | 形态 |
|------|:---:|:---:|------|------|------|
| [Claude Code](./claude-code.md) | **S** | 🟡 | $17-200 | Claude Sonnet 4.7 | CLI |
| [Codex CLI](./codex-cli.md) | **A+** | 🟡 | $20+ | GPT-5.x | CLI |
| [Aider](./aider.md) | **A** | 🟢 | 免费(自带 API key) | 任意 | CLI + git |
| [Devin](./devin.md) | **B** | 🟡 | $500/mo | 自家 + GPT/Claude | 远程 agent |
| Cursor Agent (CLI) | **B+** | 🟢 | 含 Cursor Pro | 多模型 | CLI |
| Codeium Agent | **B** | 🟢 | 免费/付费 | 多模型 | CLI |

> 详细笔记 → 各工具页

---

## Coding Agent vs IDE 的关键差异

```
IDE(Cursor / Windsurf / Kiro)
─ 你坐在 IDE 里,AI 帮你补全 / 修改 / 重构
─ 主战场是"看着 AI 写代码"
─ 短任务、即时反馈、人 in the loop

Coding Agent(Claude Code / Codex CLI / Aider)
─ 你给一个目标,AI 自己跑(读文件 / 改 / 运行 / 测试)
─ 主战场是"我去喝咖啡,AI 自己解决"
─ 长任务、批量处理、agent autonomy
```

**实际工作流通常是组合**:
- IDE 做日常 90% 编程(短任务)
- Agent 做 10% 长任务(大重构 / 跨多文件)

---

## 不同档位的程序员推荐

### 学生 / 入门(月预算 ¥0)

```
Aider + DeepSeek V4 API   — 国内可用,几乎免费
```

只用一个 IDE(VS Code)+ Aider 终端,够用。

### 个人开发者(月预算 ¥150-200)

```
Cursor Pro $20/mo                — 主 IDE
Claude Code Pro $17/mo           — 长任务备用
+ DeepSeek API(几十块封顶)      — 小任务省钱
```

### 重度使用者(月预算 ¥500-1000)

```
Cursor Pro+ $60/mo
Claude Code Max $100/mo
Codex CLI $20/mo                — 多模型对比
```

### 团队 / 企业

```
GitHub Copilot Business $19/seat — 合规与审计
Devin(评估中)                   — 高单价但能跑独立任务
```

---

## 我盯着的工具(待详写)

- [ ] [claude-code.md](./claude-code.md) — Anthropic 出的 CLI agent
- [ ] [codex-cli.md](./codex-cli.md) — OpenAI 重启的 CLI agent(2025-2026)
- [ ] [aider.md](./aider.md) — 开源 + git 深度集成
- [ ] [devin.md](./devin.md) — 完全自主 agent($500/mo)
- [ ] [cursor-agent.md](./cursor-agent.md) — Cursor 的 CLI 模式

---

[← 回到 tools 总览](../README.md)
