# Cursor

> 2026 年最强的 AI IDE。基于 VS Code 改造,所有插件兼容,但 AI 体验是另一个量级。
> 我的主 IDE。

---

## 基本信息

| 项 | 值 |
|---|---|
| **官网** | [cursor.com](https://cursor.com) |
| **平台** | macOS · Windows · Linux |
| **国内可用性** | 🟢 直接可用,Pro 订阅 Stripe 信用卡可付 |
| **底层模型** | 自由切换:Claude / GPT / Gemini / 自家 |
| **价格** | Free / Pro $20/mo / Pro+ $60/mo / Ultra $200/mo |
| **最新版本** | Cursor 3.x(2026-05) |

---

## 我的 Tier 评级:S

**评级理由**:
- 唯一同时满足"性能 + 多模型 + 即时迭代 + 多文件协作"的 IDE
- 国内可用、价格合理(Pro 一档够 90% 用户)
- 团队迭代速度快,每月都有显著升级

---

## 我每周用它做什么

★★★★★(5/5,几乎每天打开)

主要场景:

1. **快速补全**:写每一行代码都靠 Tab 补全,效率提升肉眼可见
2. **改一两个文件**:小重构、bug 修复、对话式调试
3. **代码 review**:右键 "Review with AI",出 PR 前自查
4. **跨文件搜索 + 修改**:`Cmd+I` 提需求,Composer 自动多文件协作
5. **学陌生代码**:打开一个新项目,问 "give me a tour" 立刻有上下文

---

## 它最适合做什么

- ✅ **日常 90% 编程任务**:补全、改 bug、写单测、改文档
- ✅ **快速迭代**:你"看着 AI 写代码"的循环最短
- ✅ **多模型切换**:同一任务可以试 3 个模型看哪个好

---

## 它**不擅长**什么(最值钱的一段)

- ❌ **超长任务(>30 文件)**:Composer Mode 容易上下文飘移
  - 解法:这种任务用 Claude Code(CLI 长上下文更稳)
- ❌ **从 0 设计新模块**:Cursor 是"在已有代码上迭代"的工具,不是"从空白开始想清楚需求"的
  - 解法:这种用 Kiro 的 Spec 模式
- ❌ **离线 / 完全私有项目**:全部数据走 Cursor 服务器,安全敏感行业要慎重

---

## 真实使用 tips

### 1. 先用 Cmd+L,再用 Cmd+I
- `Cmd+L`:对话(只问不改)
- `Cmd+I`:Inline 修改代码
- **不要直接 Cmd+I**,先 `Cmd+L` 讨论清楚再让它改

### 2. Settings 里把模型默认改成 Claude
- 默认是 GPT 系,**Claude 写代码体感更准**
- Pro 可以无限用 Claude,不会另收钱

### 3. .cursorrules 文件
- 项目根目录建一个 `.cursorrules`,写项目规约
- AI 会自动遵守,**显著降低"AI 自己发明你项目里没有的库"的概率**

### 4. Composer Mode 用法
- `Cmd+I` 然后选 Composer
- 加多个文件作为 context
- 一次需求改多个文件
- **不要超过 10 个文件,否则就该用 Claude Code 了**

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Windsurf](./windsurf.md) | 想要 JetBrains 风、更便宜、Cursor 限额了 |
| [Claude Code](./claude-code.md) | 任务超过 30 文件、要长上下文、CLI 党 |
| [Zed](./zed.md) | 性能党、希望 IDE 快得离谱 |
| [VS Code + Copilot](./github-copilot.md) | 团队 GitHub 生态、合规要求高 |

---

## 价格分析

```
Free        $0/mo      只有有限的 fast requests
Pro         $20/mo     500 fast requests + 无限 slow + 无限 Claude
Pro+        $60/mo     无限 fast,适合超重度
Ultra       $200/mo    Background agents,自主跑任务
```

**我的建议**:
- 普通开发者:**Pro** 完全够,$20/mo 是 AI 编程时代最值的订阅之一
- 全职用 AI 写代码 + 多个项目并行:**Pro+ 60/mo**
- 团队场景:Cursor for Teams

---

## 🔄 版本变化追踪(我看到的)

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2025-12 | Cursor 3.0,Composer Mode | **真香**。多文件改写体验质变 |
| 2026-03 | Background Agents | 给 Ultra 用户,**普通用户用不上** |
| 2026-05 | Tab 模型升级 | 补全速度更快,准确率小幅提升 |

---

## 引流到我

更多我用 Cursor 的实战:
- 博客 [blog.frankfu.cloud](https://blog.frankfu.cloud)
- GitHub @survivorff

---

[← 回到 coding/](./README.md)
