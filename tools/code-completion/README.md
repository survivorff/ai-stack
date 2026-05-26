# ⚡ 代码补全(Code Completion)

> 轻量级"边写边补"。不开新对话,不开 agent,**只在你光标处给建议**。
> 适合不想离开自己 IDE / 不想付订阅的开发者。

---

## 这个分类是什么、不是什么

✅ **是**:作为 IDE 插件存在的补全工具
- GitHub Copilot
- Tabnine
- 通义灵码(国产)
- 文心快码(国产)
- 字节豆包代码(国产)
- Codeium(免费)

❌ **不是**:
- ❌ 完整 IDE 产品(那是 [tools/ide/](../ide/))
- ❌ Agent / 多文件协作(那是 [tools/coding-agent/](../coding-agent/))

---

## 📊 Tier 速查(2026-05)

| 工具 | Tier | 国内 | 月费 | 长板 |
|------|:---:|:---:|------|------|
| [通义灵码](./tongyi-lingma.md) | **A+** | 🟢 | **免费** | 国产首选,完全免费 |
| [GitHub Copilot](./github-copilot.md) | **A** | 🟡 | $0-39(学生免费) | 团队合规 + GitHub 生态 + PR Review |
| [Tabnine](./tabnine.md) | **B+** | 🟢 | $0-39 | 私有部署 / 强合规 |

> 详细笔记 → 各工具页

---

## 待写工具(尚未详细评估)

- 文心快码(百度,B+ 档)
- 字节豆包代码(B,补全场景下被通义灵码挤压)
- Codeium(已演化为 Windsurf,见 ide/windsurf.md)

---

## 为什么有人还选补全工具(而不是 IDE)

**保留你现有 IDE 的工作流**:
- 用 IntelliJ / PyCharm 多年的不愿换 Cursor
- 公司有合规要求只能装插件
- 不想为新 IDE 付费,但想要 AI

补全工具 = **AI 入门最低成本**。

---

## 补全 vs IDE 的关键差异

| 维度 | 补全(Copilot/Tabnine) | IDE(Cursor/Windsurf) |
|------|----------------------|---------------------|
| 工作模式 | 光标处建议(passive) | 整体协作(active) |
| 多文件 | ❌ 一般不行 | ✅ |
| 对话 | ❌ 一般不支持 | ✅ |
| Composer / Inline edit | ❌ | ✅ |
| 价格 | $10-19/mo | $15-20/mo |
| 学习成本 | 低 | 中 |

---

## 已写工具

- [x] [github-copilot.md](./github-copilot.md) — 老牌 + 团队合规 + 学生免费
- [x] [tongyi-lingma.md](./tongyi-lingma.md) — 国产首选,完全免费
- [x] [tabnine.md](./tabnine.md) — 私有部署 / 强合规场景

---

[← 回到 tools 总览](../README.md)
