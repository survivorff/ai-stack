# 💻 AI IDE(开发环境)

> 加了 AI 能力的代码编辑器/IDE。**本身不是模型**,模型由你选(Claude / GPT / Gemini)。
> 主战场是"**看着 AI 写代码**"——短任务、即时反馈、IDE 内闭环。

---

## 这个分类是什么、不是什么

✅ **是**:有 AI 能力的代码编辑器
- Cursor(VS Code fork)
- Windsurf(原 Codeium,也是 VS Code fork)
- Kiro(VS Code fork,Spec 驱动)
- Trae(字节出品,中文友好)
- Zed(自研编辑器,性能党)
- JetBrains AI(IntelliJ / PyCharm 等)

❌ **不是**:
- ❌ 模型本身(在 [foundation-models/](../foundation-models/))
- ❌ 在终端跑的 agent(在 [coding-agent/](../coding-agent/))
- ❌ 纯补全(在 [code-completion/](../code-completion/))

---

## 📊 Tier 速查(2026-05)

| 工具 | Tier | 国内 | 月费 | 底层模型 | 适合谁 |
|------|:---:|:---:|------|---------|--------|
| [Cursor](./cursor.md) | **S** | 🟢 | $20-200 | 多选(Claude/GPT/Gemini) | 主流首选 |
| [Windsurf](./windsurf.md) | **A+** | 🟢 | $15-20 | 多选 | Cursor 平替 + JetBrains |
| [Kiro](./kiro.md) | **A** | 🟢 | 免费/付费 | 多选 | Spec 驱动新功能 |
| [Trae(字节)](./trae.md) | **A** | 🟢 | 免费 | DeepSeek + 通义 + Claude | 国产首选,中文体验 |
| [Zed](./zed.md) | **B+** | 🟢 | 免费/付费 | 多选 | 性能党(Rust 写的) |
| [JetBrains AI](./jetbrains-ai.md) | **B+** | 🟢 | $10/mo | 多选 | JetBrains 老用户 |
| [Codeium](./codeium.md) | **B** | 🟢 | 免费 | 自家 | 不愿付费党 |

---

## IDE vs Coding Agent vs 补全工具

(再强调一次概念区分,因为很多人混淆)

```
                        |  谁在主导
─────────────────────────┼────────────
IDE(Cursor/Windsurf)    |  人 + AI 协作
Coding Agent(Claude Code)|  AI 自主跑
补全(Copilot/Tabnine)   |  AI 即时建议
```

> **实操建议**:
> 1. 日常 90% 编程 → IDE(Cursor)
> 2. 长任务 / 大重构 → Coding Agent(Claude Code)
> 3. 公司用 GitHub 强制 → Copilot

---

## 怎么选(决策树)

```
你已经在用 VS Code 吗?
├── 是 → Cursor 或 Windsurf 都是 fork,无缝切
│       ├── 想要最强 → Cursor
│       └── 想要更便宜 / 更友好 → Windsurf
│
├── 用 JetBrains? → Windsurf 或 JetBrains AI
│
├── 喜欢 Spec 驱动? → Kiro
│
├── 不愿付海外 → Trae(字节,免费,中文友好)
│
└── 极致性能党 → Zed
```

---

## 我盯着的工具(待详写)

按优先级排:

- [ ] [cursor.md](./cursor.md) — 主流首选
- [ ] [windsurf.md](./windsurf.md) — Cursor 平替
- [ ] [kiro.md](./kiro.md) — Spec 驱动
- [ ] [trae.md](./trae.md) — 国产首选(字节出品)
- [ ] [zed.md](./zed.md)
- [ ] [jetbrains-ai.md](./jetbrains-ai.md)

---

[← 回到 tools 总览](../README.md)
