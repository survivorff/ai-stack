<!--
---
type: tool
slug: grok
name: Grok
category: foundation-models
url: https://grok.com
maker: xAI
pricing: paid
price_range: $30/月起 + 海外卡
china_availability: 🔴
modalities:
  - text
  - image
  - video
  - code
strengths:
  - X(Twitter)实时数据深度集成
  - "拒绝度"低(回答政治 / 边界话题更直接)
  - 视频生成 Imagine 自带消费级
  - X 高级用户白拿
weaknesses:
  - 国内基本不可用(IP + 卡 + X 账号三重门)
  - 综合能力 vs Claude/GPT-5 仍有差距
  - 创意写作偏"短平快"
  - 容易"过度反 woke"翻车
  - 政治倾向 / 内容争议大
tier: B+
tier_history:
  - date: 2026-05
    tier: B+
    reason: X 实时数据 + 低拒绝度独特价值,但综合能力仍非头部
  - date: 2025-09
    tier: B
    reason: Grok 3 提升明显,但仍中流
recommended_for_scenarios:
  - news-tracking
  - market-research
  - tech-research
alternatives:
  - chatgpt
  - claude
  - gemini
  - perplexity
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# Grok

> Elon Musk 的 xAI 出的 AI。**和 X(Twitter)深度绑定 + 拒绝度低**是它的两个标签。
> Tier B+ —— 综合能力不如 Claude / GPT 第一梯队,**但 X 实时数据接入和"低拒绝度"是其他模型没有的**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [xAI](https://x.ai) |
| **当前版本(2026-05)** | Grok 4(旗舰) · Grok 4 Heavy(深度推理) · Grok 4 Mini |
| **支持模态** | 文本 · 图(看 + 生成 Aurora) · 视频(Imagine) · 代码 |
| **上下文窗口** | 256K tokens |
| **API 价格** | Input $5 / M · Output $15 / M(Grok 4) |
| **个人订阅** | X Premium+ $40/月含 Grok / SuperGrok $30/月独立 |
| **国内可用性** | 🔴 基本不可用(三重门:海外 IP + X 账号 + 海外卡) |

---

## Tier 评级:B+

**评级理由**:
- **X 实时数据集成**:Grok **能直接读 X 上当前正在发生的内容**,并且引用具体推文
- **拒绝度低**:对政治 / 边界 / 敏感话题回答更直接,**不会反复"作为 AI 我不能讨论"**
- **Imagine 视频生成**:消费级集成,X Premium+ 用户随便玩
- **X 用户 + 海外信息流深度依赖者的独特价值**

> **不是 A 的原因**:
> - 综合能力 vs Claude Opus 4.7 / GPT-5 / Gemini 3 Pro **仍差半档到一档**
> - 创意写作"短平快",**写长文不如 Claude 自然**
> - 国内可用性几乎为零(三重门)
> - 政治 / 内容立场争议大,公司层面不稳定
> - "低拒绝度"有时变成"输出极端内容",**翻车风险高**(2024-2025 多次公关事故)

---

## 它最适合做什么

### ✅ X(Twitter)深度依赖者

如果你**每天上 X 工作 / 调研**:
- "今天 OpenAI 发生了什么" → Grok 直接拉取最近 1 小时推文
- "@elonmusk 最近 24h 说过什么关键的" → 找出关键推文 + 总结
- "AI 圈昨晚发布的 paper" → 实时
- "美股某只股票今晨 X 上的讨论" → 实时

**这是 Claude / GPT / Gemini 都做不到的**(它们的"网页搜索"对 X 的覆盖度差,且没有"读全部最近推文"的能力)。

适合:
- [追时事 / 追新闻](../../scenarios/news-tracking.md)
- [市场调研](../../scenarios/market-research.md)(海外科技 / 加密 / 美股)
- [技术调研](../../scenarios/tech-research.md)(海外 AI 圈)

### ✅ 海外科技 / AI / 加密圈追踪

X 是**全球科技 / AI / 加密圈的实时信息中心**。
- AI:几乎所有海外 AI 大佬在 X(Andrej、Sam、Demis 都活跃)
- 加密:**项目方 / KOL / 黑客行情都在 X**
- 美股:重要消息常常 X 先于主流媒体

做海外科技 / 加密研究 → **Grok 是真的不可替代**。

### ✅ "低拒绝度"对话

Grok 对很多边界话题答得**比 Claude / GPT 直接**:
- 政治讨论(虽然立场有争议)
- 历史争议事件
- "黑色幽默"
- 暴力 / 色情边界(Grok Imagine 生成更宽)

**这把"双刃剑"**:
- ✅ 不会让人觉得 "AI 在审查我"
- ❌ 也容易翻车(Grok 历史上多次输出过反犹 / 极端内容,xAI 多次紧急修补)

### ✅ Imagine 视频 / Aurora 图生成

X Premium+ 用户**白拿**视频生成功能:
- Imagine:文生视频,质量中等(不如 Sora 2 / Veo)
- Aurora:文生图,**质量正在追赶 Midjourney**(尤其人物 + 真实感)

**对 X 重度用户,X Premium+ 的"视频/图生成 + Grok"是性价比合理的打包**。

---

## 它**不擅长**什么

### ❌ 写代码(尤其长任务)

Grok 4 代码能力大致 GPT-4o 档(SWE-bench ~60%),**vs Claude Opus 4.7 / GPT-5 仍差一档**。
- 写代码主力 → Claude / GPT-5

### ❌ 写中文

Grok 对中文训练量明显少。**中文输出有"翻译腔"**,且对中国国情 / 文化理解差。
- 中文写作 → Claude / DeepSeek / 豆包

### ❌ 长文严肃写作

Grok 的"写作风格"被 Musk 路线**调教得偏短平快、有梗、戏剧化**。
适合:推文 / 段子 / 营销文案
不适合:长文 / 论文 / 深度专栏

### ❌ 国内**直接用**

三重门:
1. ❌ 中国大陆 IP 完全屏蔽
2. ❌ X 账号本身在国内已被屏蔽
3. ❌ 付款需要海外信用卡

国内用户**几乎没有自配方案**(代理 IP 风险大)。

### ❌ 客观中立

Grok 的"拒绝度低"是**双刃剑**。
2024-2025 历史:
- 多次输出反犹 / 否认大屠杀内容,xAI 紧急修补
- 关于 Musk 个人 / 特朗普 / 共和党的回答系统性"亲善"
- 有用户报告 Grok 对民主党人物 / 进步派更"挑刺"

**做严肃决策 / 客观分析 → 别用 Grok**(用 Claude / Gemini 中立度更高)。

### ❌ 价格优势

- $30/月 SuperGrok 独立订阅
- 或 $40/月 X Premium+(含 Grok + 其他 X 高级功能)

**比 ChatGPT Plus / Claude Pro($20)贵**,且能力没强到值这个价。

---

## 真实使用 tips

### 1. 真正的杀手锏:把 Grok 当 X 的"AI 助手"

不要在网页上跟 Grok 闲聊。
**直接在 X 上 @ Grok**:
- 在任何推文下回复 `@grok 这条说的对吗`
- Grok 会基于这条推文 + 关联推文给判断 + 引用
- **这是 X Premium+ 用户最值钱的隐藏功能**

### 2. "DeepSearch" 模式做调研

Grok 有个 "DeepSearch" 模式(类似 Gemini Deep Research):
- 自动搜 X + 网页
- 拆任务、读多源、写综述
- **优势是 X 数据接入更深**

做海外 / 科技 / 加密调研:DeepSearch 比 Gemini Deep Research 更接近实时一线。

### 3. 不要让 Grok 帮你做"判断 / 决策"

它会给出**有立场的 / 戏剧化的 / 倾向性的回答**。
重要决策(法律 / 商业 / 健康) → Claude / Gemini / GPT-5 Pro 模式都更稳。

Grok 适合"**信息聚合**" + "**写有梗的内容**",**不适合"代替你思考"**。

### 4. Imagine 视频值得玩

如果你已经付 X Premium+:
- Imagine 文生视频 + Aurora 文生图都 unlimited
- 5 秒短视频生成质量 OK
- 拼短视频 / 抖音 / Twitter 内容创作很合适

不需要单付 Sora / Veo / Midjourney。

### 5. 别把"低拒绝度"当优点过度依赖

短期感觉爽,**长期会让你的判断变窄**:
- 你越来越习惯听一个"会顺着你说的 AI"
- 反向意见 / 中立分析能力下降
- 真到要做严肃判断时已经分不清

**配合 Claude / Gemini 用,做"压力测试"**。

### 6. 国内用户:基本忽略

国内用户除非:
- 已经稳定用 X 多年(海外身份 / 海外 IP)
- 工作场景必须实时追海外科技 / 加密一线
- 否则 Grok **不在你的合理工具箱里**。

国内场景 [Kimi 探索版](./kimi.md) + [DeepSeek](./deepseek.md) + 微博 / 知乎 完全足够。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [ChatGPT(GPT-5 + Search)](./chatgpt.md) | 通用 + 多模态 + 国内可有限自配 |
| [Gemini](./gemini.md) | Deep Research 调研 / 长文档 |
| [Claude](./claude.md) | 写作 / 代码 / 严肃讨论 |
| [Perplexity](../research/perplexity.md) | 不要 X 数据,只要"AI 搜索 + 引用" |
| [Kimi 探索版](./kimi.md) | 国内 + 中文搜索 + 长文档 |

---

## 价格分析

### 个人订阅

| 档位 | 价格 | 含什么 |
|------|------|------|
| **X Free** | $0 | Grok 体验额度极少 |
| **X Premium** | $8/月 | Grok 限额使用 |
| **X Premium+** | **$40/月** | **Grok 4 + Imagine 视频 + 蓝标 + 算法优化** |
| **SuperGrok** | $30/月 | 独立订阅 Grok 4(不含 X 福利) |
| **SuperGrok Heavy** | $300/月 | Grok 4 Heavy 深度推理 + 高额度 |

### API(开发者)

| 模型 | Input | Output |
|------|------:|-------:|
| Grok 4 | $5 / M | $15 / M |
| Grok 4 Mini | $0.5 / M | $2 / M |
| Grok 4 Heavy | $30 / M | $90 / M |

### 我的预算建议

```
X 重度用户(每天上 X 4h+):       Premium+ $40,Grok + 视频 + 蓝标全包,合理
X 轻度用户:                      不需要 Grok,免费的 Claude/GPT/DeepSeek 替代
海外科技 / 加密研究者:            Premium+ 是该投资
国内用户:                       基本绕开,门槛高 + 可替代
开发者:                         API 性价比一般,除非真要 X 数据
```

---

## 国内可用性(🔴)

三重门:
1. **网络**:中国大陆 IP 完全屏蔽 grok.com / x.ai
2. **X 账号**:X(Twitter)在大陆被防火墙屏蔽多年,新账号注册困难
3. **付款**:海外信用卡(中国大陆卡几乎全部被风控)

**自配方案极其不稳定**:
- 海外住宅 IP 代理(贵)
- 海外手机号注册 X 账号(Google Voice / Twilio,但风控严)
- 海外卡(Wise / Revolut / 海外银行)

**实际建议**:**国内用户跳过 Grok**。
Grok 提供的"X 实时数据"在你国内场景里**根本用不上**(中国大陆用户主要在微博 / 小红书 / 知乎,这些 Grok 不覆盖)。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2023-11 | Grok 1 | 噱头大于实力,普遍嘲讽 |
| 2024-08 | Grok 2 + Aurora 图 | 有起色,但仍非第一梯队 |
| 2025-02 | **Grok 3 + DeepSearch** | 综合能力第一次接近 GPT-4o |
| 2025-07 | **Grok 4 发布**,xAI 估值飙升 | 推理能力进入第一档 |
| 2025-09 | Imagine 视频生成集成 | X Premium+ 性价比提升 |
| 2025-12 | Grok 4 Heavy(深度推理) | 数学 / 推理打 Claude Opus |
| 2026-02 | xAI 公司层面争议(政治倾向) | 用户分化 |

---

## 一个判断:Grok 适合谁

**适合你**(优先级从高到低):
- ✅ 已经是 X(Twitter) 重度用户(每天 4h+ 上 X)
- ✅ 工作 / 投资和**海外科技 / 加密 / AI 圈**强相关
- ✅ 海外身份 / 海外卡完整,自配无障碍
- ✅ 不在意 AI 立场 / 政治倾向(或反向需要"非 woke")

**不适合你**(只要满足任何一个就跳过):
- ❌ 中国大陆用户
- ❌ 主要写代码 / 写文 / 做正经调研(Claude 完胜)
- ❌ 想要"中立 / 客观"的回答
- ❌ 月预算 < $20

---

## 一个争议性话题:Grok 的"内容立场"

Grok 在 2024-2025 有过多次内容争议:
- 反犹 / 否认大屠杀 输出(xAI 紧急修补)
- 对 Musk 系统性"亲善"
- 对民主党 / 进步派人物"挑刺"明显

xAI 的官方立场是"**让 AI 反映真相,不被 woke 化**"。
反对者的批评是"**这就是把 AI 调教成有特定立场的 propaganda 工具**"。

**作为用户**:
- 你可以喜欢 / 不喜欢这个立场
- 但**应该意识到这个立场的存在**,**别让 Grok 替你做立场判断**
- 严肃决策 / 写正经文 → 用 Claude / Gemini(它们也有立场,但更克制)

---

## 拓展阅读

- 官方:[Grok](https://grok.com)
- 官方:[xAI](https://x.ai)
- API:[xAI Console](https://console.x.ai)
- X:[@grok 自己的 X 账号](https://x.com/grok)

---

[← 回到 foundation-models](./README.md)
