# 🧠 基础模型(Foundation Models)

> 真正在思考的"大脑"。其他工具(IDE、agent、聊天 App)很多都是给这些模型套个壳。
> **理解模型本身的差异 = 理解所有 AI 工具的根**。

---

## 这个分类是什么、不是什么

✅ **是**:由模型厂商提供的核心能力
- Claude(Anthropic 出品)→ 包括 Web、Claude Code CLI、API
- GPT(OpenAI)→ 包括 ChatGPT、Codex、API
- Gemini(Google)→ 包括 Gemini App、AI Studio、API
- DeepSeek / Kimi / GLM / 通义 / Minimax / 豆包 等国产

❌ **不是**:在模型基础上做的"产品壳"
- ❌ Cursor 不是模型,它是 IDE 产品 → 见 [tools/ide/](../ide/)
- ❌ Perplexity 不是模型,它是搜索产品 → 见 [tools/research/](../research/)

---

## 📊 Tier 速查(2026-05)

### 海外闭源(模型层)

| 模型 | 产品形态 | Tier | 国内 | 月费 | 长板 |
|------|---------|:---:|:---:|------|------|
| **Claude Sonnet 4.7** | Web/Code/API | **S** | 🟡 | $20-200 | 写作 + 代码 + 长上下文 |
| **GPT-5.x** | ChatGPT/API | **S** | 🟡 | $20-200 | 通用 + 多模态 + 记忆 |
| **Gemini 3 Pro** | Gemini/AI Studio | **A+** | 🟡 | $20 | 长上下文 + 搜索深度集成 |
| **Grok 4** | X / xAI API | **B+** | 🔴 | $30 | 实时数据,X 用户 |

### 国产开源 / 闭源(模型层)

| 模型 | 产品形态 | Tier | 国内 | 月费 | 长板 |
|------|---------|:---:|:---:|------|------|
| **DeepSeek V4** | Chat/API | **S** | 🟢 | 免费/极便宜 | 性价比之王 + 推理 |
| **Kimi K2.5** | Chat/API | **A+** | 🟢 | 免费/付费 | 长文档 + agent 能力 |
| **GLM-5(智谱)** | Chat/API | **A** | 🟢 | 免费/付费 | 国产开源代表 |
| **通义 Qwen3.5-Max** | Chat/API | **A** | 🟢 | 免费/付费 | 阿里生态 + 工作场景 |
| **豆包(字节)** | App/网页 | **A** | 🟢 | 免费 | 移动端最强,语音 |
| **Minimax M2.5** | Chat/API | **A** | 🟢 | 免费/付费 | 多模态 + 视频 |
| **文心 4.5** | Chat/API | **B+** | 🟢 | 免费/付费 | 百度生态 + 搜索 |
| **腾讯混元** | Chat/API | **B+** | 🟢 | 免费 | 腾讯生态 |

---

## 一张表看懂"该用哪个模型做什么"

| 任务 | 第一选择 | 第二选择 | 备注 |
|------|---------|---------|------|
| 写中文长文 | Claude | Kimi | DeepSeek 也很强 |
| 写英文 / 学术 | Claude | GPT | |
| 写代码(单文件) | Claude / GPT | DeepSeek | DeepSeek 性价比 |
| 写代码(长任务) | Claude(走 Claude Code) | GPT(走 Codex) | 见 [coding-agent/](../coding-agent/) |
| 长文档总结 | Kimi K2.5 | Gemini | Kimi 200K+ context |
| 网页搜索增强 | Gemini | GPT(Search) | |
| 多模态(图+文) | GPT-5 / Gemini | Claude | |
| 推理 / 数学 | Claude / GPT / DeepSeek-R1 | | DeepSeek 性价比惊人 |
| 通用快速问答 | 豆包 / DeepSeek | Kimi | 国内即开即用 |
| 数据隐私敏感 | 自部署 DeepSeek / GLM | | 开源可本地部署 |

---

## 模型 vs 产品(理清概念)

很多人把"Claude"和"Claude Code"混淆。**它们不是一个东西**。

```
┌─────────────────────────────────────┐
│ Claude(Anthropic 出的模型,大脑)    │
└──────────────┬──────────────────────┘
               │
       ┌───────┼────────┬─────────────┐
       ▼       ▼        ▼             ▼
   claude.ai  Claude   Claude       第三方
   (Web 聊)   Code     API          (Cursor / Cherry / etc.)
              CLI      代码调用
              ────     ────         ────
              在终端跑  开发者用     这些都用 Claude 模型
              带工具    自己造产品    但不是"Claude 产品"
```

类似的:

```
GPT(OpenAI 模型)
   ├── ChatGPT(Web/App)
   ├── Codex CLI(2025 重启,类似 Claude Code)
   └── API → 各种第三方产品

Gemini(Google)
   ├── Gemini App
   ├── AI Studio(开发者)
   └── API → 各种产品

DeepSeek
   ├── Web 聊天
   └── API(便宜得离谱)
```

**记住**:"模型"是 fundamental unit。其他都是"模型的产品形态"或"基于模型的应用"。

---

## 我盯着的工具

(待详写,见各模型页)

- [ ] [claude.md](./claude.md) — Claude(Web + Code + API 三种形态)
- [ ] [chatgpt.md](./chatgpt.md) — ChatGPT(GPT-5.x)
- [ ] [gemini.md](./gemini.md) — Gemini 3 Pro
- [ ] [deepseek.md](./deepseek.md) — DeepSeek V4
- [ ] [kimi.md](./kimi.md) — Kimi K2.5(Moonshot)
- [ ] [glm.md](./glm.md) — GLM-5(智谱)
- [ ] [tongyi.md](./tongyi.md) — Qwen 系列
- [ ] [doubao.md](./doubao.md) — 豆包
- [ ] [minimax.md](./minimax.md) — Minimax
- [ ] [wenxin.md](./wenxin.md) — 文心
- [ ] [hunyuan.md](./hunyuan.md) — 腾讯混元

---

## 国内开发者的"完全不出海"组合

**月预算:¥0**(全部基于免费档)

| 任务 | 模型 |
|------|------|
| 通用对话 | 豆包 / DeepSeek |
| 代码 | DeepSeek V4 |
| 长文档 | Kimi K2.5 |
| 工作场景 | 通义 / 飞书智能伙伴 |
| 推理 / 数学 | DeepSeek-R1 |

**完全不需要海外模型**,国内开发场景大多够用。

---

[← 回到 tools 总览](../README.md)
