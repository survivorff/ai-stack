# 🏆 全 Tier 速查

> 所有工具的 Tier 评级一览。详细笔记在各分类目录下。
> **当前版本:v2026.05.1(基础模型分类完整 v1)**

---

## ⭐ 评级标准

| Tier | 标准 |
|------|------|
| **S** | 我每周用 ≥4 次,被替代的成本 > $200/月 |
| **A** | 垂类首选,我每月用 ≥4 次 |
| **B** | 特定场景下值得,但不是日常 |
| **C** | 有更好选择,但有人喜欢 |
| **F** | 不建议 |

完整标准 → [GOVERNANCE.md](./GOVERNANCE.md)

---

## ⭐ S Tier(无可替代)

### 基础模型

| 模型 | 国内 | 用途 | 详情 |
|------|:---:|------|------|
| **Claude(Sonnet/Opus 4.7)** | 🟡 | 写作 + 编程 + 1M 上下文 | [→](../tools/foundation-models/claude.md) |
| **GPT-5.x** | 🟡 | 通用 + 多模态 + 生态 | [→](../tools/foundation-models/chatgpt.md) |
| **DeepSeek V4 / R1.5** | 🟢 | 国产首选,推理 + 代码 + 性价比 | [→](../tools/foundation-models/deepseek.md) |

### 编程产品(待详写)

| 工具 | 类型 | 国内 | 用途 |
|------|------|:---:|------|
| Cursor | IDE | 🟢 | 主 IDE,日常 90% 编程 |
| Claude Code | Coding Agent | 🟡 | 长任务编程 |

### 其他(待详写)

| 工具 | 分类 | 国内 | 用途 |
|------|------|:---:|------|
| Midjourney | image-gen | 🟡 | 艺术风格 |
| Suno | audio | 🟡 | 音乐生成 |

---

## 🥇 A / A+ Tier(垂类首选)

### 基础模型(海外)

| 模型 | Tier | 国内 | 用途 | 详情 |
|------|:---:|:---:|------|------|
| **Gemini 3 Pro** | A+ | 🟡 | 1M 上下文 + Deep Research | [→](../tools/foundation-models/gemini.md) |

### 基础模型(国产)

| 模型 | Tier | 国内 | 用途 | 详情 |
|------|:---:|:---:|------|------|
| **Kimi K2.5** | A+ | 🟢 | 长文档之王(2M context) | [→](../tools/foundation-models/kimi.md) |
| **GLM-5(智谱)** | A | 🟢 | 政务 / 学术 / 开源代表 | [→](../tools/foundation-models/glm.md) |
| **通义 Qwen3.5-Max** | A | 🟢 | 阿里生态 / 海外开源影响 | [→](../tools/foundation-models/tongyi.md) |
| **豆包(字节)1.6** | A | 🟢 | 移动端 + 语音 + 多模态 | [→](../tools/foundation-models/doubao.md) |
| **MiniMax / 海螺** | A | 🟢 | TTS + Hailuo 视频 + 出海 | [→](../tools/foundation-models/minimax.md) |

### IDE(待详写)

| 工具 | 国内 | 用途 |
|------|:---:|------|
| Windsurf (A+) | 🟢 | Cursor 平替 |
| Kiro | 🟢 | Spec 驱动 |
| Trae(字节) | 🟢 | 国产首选,中文友好 |

### Coding Agent(待详写)

| 工具 | 国内 | 用途 |
|------|:---:|------|
| Codex CLI (A+) | 🟡 | OpenAI 重启 |
| Aider | 🟢 | 开源 + git 集成 |

### 补全(待详写)

| 工具 | 国内 | 用途 |
|------|:---:|------|
| GitHub Copilot | 🟡 | 团队 GitHub 生态 |
| 通义灵码 | 🟢 | 国产首选,免费 |
| Tabnine | 🟢 | 私有部署友好 |

### Image / Video / Audio / 其他(待详写)

(略,见对应分类 README)

---

## 🥈 B / B+ Tier(特定场景)

### 基础模型

| 模型 | Tier | 国内 | 用途 | 详情 |
|------|:---:|:---:|------|------|
| **Grok 4(xAI)** | B+ | 🔴 | X 实时数据 + 低拒绝度 | [→](../tools/foundation-models/grok.md) |
| **文心一言(ERNIE)** | B+ | 🟢 | 百度生态 / 政企渠道 | [→](../tools/foundation-models/wenxin.md) |
| **腾讯混元 / 元宝** | B+ | 🟢 | 腾讯生态 / 元宝 App | [→](../tools/foundation-models/hunyuan.md) |

(其他类型待详写……)

---

## ⚠️ C Tier

- Devin($500/mo,自主 dev,目前不稳定)
- Tome(PPT,Gamma 已超越)
- 早期 Replit Agent
- 多数中文"AI 工具集合"网站

---

## ❌ F Tier

- "AI 写论文 + 降 AI 检测"类全部
- 号称"100% 替代 ChatGPT"的中转站
- 三个月以上没更新的"AI 工具"
- 收费 > $50/mo 但不超过 ChatGPT Plus 的工具

---

## 📅 这份 Tier List 的更新

每月一次,跟随 monthly release。
- 2026-05:初版,基础模型 12 篇 v1 完整
- 2026-06:补 Coding Agent / IDE / 补全分类详细笔记

[← 回到 README](../README.md)
