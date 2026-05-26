<!--
---
type: tool
slug: perplexity
name: Perplexity
category: research
url: https://perplexity.ai
maker: Perplexity AI
pricing: freemium
price_range: $0-20/月
china_availability: 🟡
modalities:
  - text
strengths:
  - AI 搜索 + 引用源 行业开山鼻祖
  - 多模型路由(Claude / GPT / Sonar 自家)
  - Pro 模式深度搜索
  - Spaces 功能(类 GPTs 但搜索专精)
weaknesses:
  - 国内访问需要海外 IP + 卡
  - 中文搜索源覆盖度差(秘塔 / Kimi 探索版更好)
  - 同 GPT Search / Gemini 已经追近
  - 数据训练政策几次反复
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 海外 AI 搜索仍是默认,但已被 Gemini Deep Research 追近
  - date: 2024-09
    tier: S
    reason: AI 搜索独家
recommended_for_scenarios:
  - tech-research
  - market-research
  - news-tracking
alternatives:
  - gemini
  - chatgpt
  - kimi
  - 秘塔
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Perplexity

> AI 搜索的开山鼻祖。**给一个问题 → 搜网页 + AI 总结 + 给引用源**。
> Tier A+。**海外 AI 搜索的 default,中文场景已被秘塔 / Kimi 探索版追近**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Perplexity AI](https://perplexity.ai)(Aravind Srinivas 创立)|
| **形态** | Web + iOS / Android App + 浏览器扩展 |
| **底层模型** | 自家 Sonar + Claude / GPT-5 / Gemini(Pro 用户可切) |
| **国内可用性** | 🟡 海外 IP + 海外卡(免费档无限,Pro 才付费)|

---

## Tier 评级:A+

**评级理由**:
- **AI 搜索开山**:把"AI 总结网页 + 引用源"做成了标准产品
- **多模型路由**:Pro 用户可在 Claude / GPT / Gemini / Sonar 之间切
- **Pro 模式深度搜索**:类 Gemini Deep Research,但输出格式更紧凑
- **Spaces**:类 GPTs 但搜索深度集成

**不是 S 的原因**:
- **海外 AI 搜索"竞品多":GPT Search / Gemini Deep Research / Grok DeepSearch 都在追**
- **中文场景** 秘塔 / Kimi 探索版更好
- **国内访问门槛**
- **数据训练政策** 历史上反复(虽然 2025 后稳定下来)

---

## 它最适合做什么

### ✅ 海外 / 英文场景的"AI 搜索"

- 海外科技 / AI 圈追新闻
- 学术调研(英文 paper / 论坛)
- 美股 / 海外公司分析
- 海外开源项目调研

适合:
- [技术调研](../../scenarios/tech-research.md)
- [市场调研](../../scenarios/market-research.md)
- [追新闻](../../scenarios/news-tracking.md)

### ✅ 不要长综述只要"快速 5 分钟答"

Perplexity 的 default 答案**比 Gemini Deep Research 简洁** —— 适合"我有一个具体问题,3 分钟解决"。
- 一段总结
- 3-10 条引用源
- 配几张图

而 Gemini Deep Research 跑 30-60 分钟出综述,Perplexity 适合**搜索式的快速消费**。

### ✅ Pro Search 深度模式

Perplexity Pro Search:
- 跑 30-60 秒(不是 30-60 分钟)
- 深度多轮搜索
- 输出长一些但仍精炼

**比免费档明显深一档**。

### ✅ Spaces(主题工作空间)

Spaces 是 Perplexity 的 GPTs:
- 给一个主题(比如"我在做的论文")
- 上传资料
- 后续问题在这个 Space 里搜 + 答

类似 NotebookLM 但搜索能力更强。

---

## 它**不擅长**什么

### ❌ 中文搜索源

中文资料(知乎 / 公众号 / 微博)Perplexity 覆盖差。
中文场景 → [Kimi 探索版](../foundation-models/kimi.md) / [秘塔](./mita.md)。

### ❌ 国内零门槛

需要海外 IP / Stripe 卡。

### ❌ 极致深度调研

Gemini Deep Research 跑 30-60 分钟出 5000-15000 字综述。
Perplexity 偏"快搜索",**不是"深综述"**。
极致深度 → Gemini Deep Research。

### ❌ 替代主力 LLM

很多人误用 Perplexity 做"通用 AI 助手"。
**它本质是搜索工具**,**写代码 / 写长文 / 复杂推理仍要用 Claude / GPT / Gemini 主力模型**。

---

## 真实使用 tips

### 1. Pro Search vs 标准搜索

- **标准**:5-10 秒,简短答案
- **Pro Search**:30-60 秒,深度搜索 + 多轮

实战:
- 简单问题 → 标准
- 重要 / 复杂 → Pro Search

Pro 用户 default Pro Search。

### 2. 多模型切换

Pro 用户顶部可切:
- **Sonar**(自家,默认)
- **Claude Sonnet 4.7**:写作风格更顺
- **GPT-5**:综合稳
- **Gemini 3 Pro**:长上下文

不同任务切不同模型。

### 3. Spaces 用法

```
1. 创建 Space:"我的论文"
2. 上传 PDF / 网页 / 笔记
3. 设定 system prompt(回答风格)
4. 之后所有问题在这个 Space 里
```

**类 NotebookLM,但搜索能力更强**(NotebookLM 只基于你上传资料)。

### 4. 浏览器扩展 + Cmd+Shift+P

Chrome 扩展:任何网页选中文字 → Cmd+Shift+P → Perplexity 搜。
**比来回切换 Tab 快 5 倍**。

### 5. API 用 Sonar Online 模型

开发者:Perplexity API 提供 Sonar 系列模型,**自带搜索**(返回带引用源的答案)。
做"AI 搜索"产品 → Sonar API 是最快的接入。

### 6. 国内场景仍用 Kimi 探索版 / 秘塔

```
英文 / 海外 → Perplexity / Gemini Deep Research
中文 / 国内 → Kimi 探索版 / 秘塔
```

**两个生态分别用最好的工具**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Gemini Deep Research](../foundation-models/gemini.md) | 极深度综述 / Workspace 用户 |
| [ChatGPT Search](../foundation-models/chatgpt.md) | 已经付 ChatGPT Plus / 多模态 |
| [Kimi 探索版](../foundation-models/kimi.md) | 国内 / 中文 / 长文档 |
| [秘塔](./mita.md) | 国内 / 中文 / 完全免费 |
| [Felo](https://felo.ai) | 免费档大 / 中文也支持 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | $0 | 标准搜索无限 + 5 次 Pro Search/天 |
| **Pro** | **$20/月** | Pro Search 无限 + 多模型 + Spaces + API credits |
| **Enterprise** | $40/seat | 团队 + 数据私有 |

### 我的预算建议

```
偶尔搜:                       Free,标准搜索就够
重度调研 / 内容创作者:         Pro $20
团队 / 商业:                   Enterprise $40/seat
国内主用:                      Kimi 探索版 + 秘塔(都免费)
```

**Pro $20 vs Gemini AI Premium $20**:
- Perplexity Pro:搜索专精 + 多模型
- Gemini AI Premium:模型 + 图 + 视频 + 2TB

**单纯做搜索 Perplexity 更专精,综合 Gemini 更值**。

---

## 国内可用性(🟡)

- 🟡 网络可访问但偶尔掉(Cloudflare 走中国节点)
- 🟡 注册需海外手机号
- 🟡 付费需海外卡
- 🟡 不愿折腾 → Kimi 探索版 / 秘塔国内可用

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022-08 | Perplexity 起步 | "AI 搜索"概念产品化 |
| 2024-04 | Pages + Pro Search | 长综述能力 |
| 2024-12 | Spaces 上线 | 类 GPTs |
| 2025-09 | 浏览器扩展 + 多模型 | 体验补齐 |
| 2026-02 | Comet(自家 AI 浏览器) | 路线扩展 |

---

## 一段判断

Perplexity 是"**AI 搜索"概念的开山鼻祖**,但**2025-2026 已经面临挤压**:
- ChatGPT Search(免费档已经接近 Perplexity Pro)
- Gemini Deep Research(深度调研更强)
- Grok DeepSearch(X 实时数据)
- Kimi 探索版 / 秘塔(中文场景)

**它仍是海外 AI 搜索的 default**,**但已经不是"无可替代"**。
对国内用户:**直接用 Kimi 探索版 + 秘塔 + Gemini Deep Research(海外身份能用时)的组合,Perplexity 不再是必需**。

---

## 拓展阅读

- 官方:[Perplexity](https://perplexity.ai)
- 浏览器:[Comet](https://comet.perplexity.ai)
- API:[Perplexity API](https://docs.perplexity.ai)

---

[← 回到 research](./README.md)
