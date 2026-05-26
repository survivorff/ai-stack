<!--
---
type: tool
slug: gemini
name: Gemini
category: foundation-models
url: https://gemini.google.com
maker: Google DeepMind
pricing: freemium
price_range: $0-20/mo + 海外卡
china_availability: 🟡
modalities:
  - text
  - image
  - audio
  - video
  - code
  - file
strengths:
  - 1M 上下文 + 实测能用满
  - 原生集成 Google 搜索
  - Deep Research 模式做调研无敌
  - 多模态全(图/语音/视频/文)
  - Workspace 用户白嫖优势
weaknesses:
  - 中文写作不如 Claude / 豆包
  - 国内付款 + 手机号注册门槛高
  - 长任务代码不如 Claude
  - "拍马屁"问题严重
  - Gemini App 体验细节不如 ChatGPT
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 长上下文 + 搜索深度,科研 / 调研场景碾压
  - date: 2025-09
    tier: A
    reason: 1.5 Pro 长上下文领先,产品体验拉胯
recommended_for_scenarios:
  - tech-research
  - paper-digesting
  - learning-new-domain
  - market-research
  - long-document-analysis
alternatives:
  - claude
  - chatgpt
  - kimi
  - deepseek
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# Gemini

> Google 出的旗舰模型。**长上下文 + 搜索集成 + 调研能力**是它的三个杀手锏。
> 调研 / 学习 / 处理超长文档,**它几乎是默认选择**。
> Tier A+。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Google DeepMind](https://deepmind.google) |
| **当前版本(2026-05)** | Gemini 3 Pro · Gemini 3 Flash · Gemini 3 Nano(端侧) |
| **支持模态** | 文本 · 图片 · 音频 · 视频(看 + 生成) · 代码 · 文件 |
| **上下文窗口** | **1M tokens**(2M 测试中) |
| **API 模型 ID** | `gemini-3-pro-latest` / `gemini-3-flash-latest` |
| **国内可用性** | 🟡 需海外账号,见下方 |

---

## Tier 评级:A+

**评级理由**:
- **长上下文实战可用**:1M tokens 不是噱头,**Gemini 是唯一一个上下文越长答案质量没掉的模型**
- **Deep Research 模式**:让它自动 30-60 分钟"读 50 个网页 + 写综述",**调研场景几乎完爆人工**
- **原生 Google 搜索**:同样问"最新发布会有什么",Gemini 给的引用源更可靠
- **Workspace 集成**:Gmail / Docs / Drive 直接调用,生产力场景碾压

> **不是 S 的原因**:
> - 中文写作"塑料感"还是有(没 Claude 自然)
> - Gemini App 产品体验细节(对话流畅度 / 历史管理)不如 ChatGPT
> - 长任务代码能力略弱
> 给"科研 / 调研 / 长文档"用户,它是 S。给普通通用用户,A+ 更合适。

---

## 它最适合做什么

### ✅ 处理"看不完的长文档"

这是 Gemini 的统治区。

实战:把整本 200 页 PDF 教科书 + 5 篇 paper + 一个 25 万字小说扔给它,**问任意章节、任意段落细节,它都能精准定位**。
其他模型(Claude 1M 也不错,但 200K 之后明显变弱)做不到这个。

适合:
- [论文消化](../../scenarios/paper-digesting.md)
- [学新领域](../../scenarios/learning-new-domain.md)
- [整理用户反馈](../../scenarios/feedback-synthesis.md)

### ✅ Deep Research(调研模式)

让 Gemini "去研究 X"。它会:
1. 拆分研究主题
2. 自动搜索 30-100 个网页
3. 阅读、做笔记、交叉对比
4. 给你**一份带引用、带结构、像人写的综述**

调研一个新技术 / 新行业 / 一家公司:**Gemini Deep Research 30 分钟 ≈ 你手工 6 小时**。

适合:
- [技术调研](../../scenarios/tech-research.md)
- [市场调研](../../scenarios/market-research.md)
- [竞品分析](../../scenarios/competitor-analysis.md)

### ✅ Google Workspace 重度用户

Gmail / Docs / Drive 全家桶用户,Gemini 的集成度**几乎是免费白送**:
- Gmail 里 Compose 直接调 Gemini 写邮件
- Docs 里选中文字"让 Gemini 重写 / 总结 / 翻译"
- Drive 里搜索 + AI 总结大量文档
- Sheets 里 Gemini 直接生成公式 / 处理数据

如果你已经付 Google One AI Premium($20/月),Gemini 是"白拿的"。

### ✅ 视频理解 / 音频转写

**Gemini 是少数能直接"看视频内容"的模型**。
- 上传 1 小时 YouTube → 问内容 / 找时间戳 / 提取要点
- 上传开会录音 → 自动会议纪要 + 关键决策 + Action Items

ChatGPT 也能,但 Gemini 实测更稳(尤其超过 30 分钟)。

### ✅ 教师 / 学生 / 学术

Gemini 的"中立 + 引用 + 深度"在学术场景几乎是优势。
- Notebook LM(基于 Gemini 的产品)做学习笔记
- Deep Research 写文献综述
- Workspace + Docs 完整工作流

很多大学已经把 Gemini 推荐给学生当默认 AI 助手。

---

## 它**不擅长**什么

### ❌ 中文创意写作

Gemini 中文有种"翻译腔",**写小红书 / 公众号 / 自媒体内容明显塑料**。
- 中文写作 → [Claude](./claude.md)(自然度第一)/ [DeepSeek](./deepseek.md) / [豆包](./doubao.md)

### ❌ 长任务代码

代码能力不弱(Gemini 3 Pro SWE-bench ~75%),但**长任务跨多文件**还是输 Claude Opus 4.7。
- 代码主力 → [Claude](./claude.md)

### ❌ "拍马屁"

Gemini 这个问题比 GPT 还严重。
你说"这思路对吗",它先夸"很有洞察"再开始展开。
**重要决策必须 prompt 显式抑制**:
> "不要任何客气话,直接判断对错并给反对论据"

### ❌ 国内**直接用**

需要海外手机号 + Google 账号 + 海外卡(付费)+ 稳定代理。
门槛比 ChatGPT 还高一点。

### ❌ 实时聊天体验

Gemini App 对话历史管理、跨设备同步、对话搜索这些细节**确实不如 ChatGPT**。
但 1M context 让你**根本不需要"管理对话历史"** —— 一个对话能跑很久。

### ❌ "陪聊 / 情感支持"

模型偏理性,陪聊弱。这类需求 → 豆包 / Character.ai。

---

## 真实使用 tips

### 1. Deep Research 是被低估的功能

很多人没用过 Deep Research,**这是 Gemini 最值钱的功能**。
打开 Gemini → 切到 Deep Research 模式 → 描述你要研究的主题。
它会先给你**一份"研究计划"**让你确认 / 修改。
然后跑 30-60 分钟,**最后输出一份 5000-15000 字的带引用综述**。

**真实使用场景**:
- "调研 RWA 赛道 2026 年的机构资金流向"
- "Hyperliquid 在 2025-2026 的市场份额变化"
- "美国新政对 AI 公司有哪些实际影响"

我用 Deep Research 写过几篇 [web3-insider](https://github.com/survivorff/web3-insider) 的文章 —— **省的不是写作时间,是"读 100 篇文章再下笔"的时间**。

### 2. 1M 上下文 = 一次塞个项目

Claude 也有 1M 但实战发现**前 70% 后才用得稳**,Gemini 1M **真的能用满**。
实战玩法:
- **整个代码库塞进去**(50-200 个源文件) + "帮我找出所有 N+1 查询"
- **整本英文教材** + "用对话方式辅导我学第三章"
- **公司 1 年的会议纪要** + "找出过去讨论过但没落地的决策"

### 3. NotebookLM 是 Gemini 的"隐藏皇冠"

[NotebookLM](https://notebooklm.google.com/) 是 Google 用 Gemini 做的**资料源专属问答**产品。
- 上传你的资料(PDF / 网页 / YouTube / Google Doc)
- 它**只基于这些资料回答**(不会乱编)
- 自动生成"音频播客版总结"(2 个 AI 主播聊你的资料,**质量惊人**)

**学生 / 研究员 / 知识工作者必装**。免费。

### 4. Workspace 用户应该把 Gemini 设成默认

Google One AI Premium = $20/月 = Gemini Advanced + 2TB Drive + Workspace AI 全功能。
**比单买 ChatGPT Plus 划算**(送 2TB 存储)。
Gmail / Docs / Drive 老用户**不开等于浪费**。

### 5. 别让 Gemini 写代码主力

Gemini 写代码"看着对、其实有坑"频率比 Claude 高。
**用 Gemini 调研 + 设计架构**,然后**用 Claude / Cursor 实现**。

### 6. AI Studio 是开发者免费天堂

[Google AI Studio](https://aistudio.google.com/) 给个人开发者**几乎免费的 API 配额**:
- Gemini 3 Flash:**完全免费**(每天 1500 次)
- Gemini 3 Pro:**免费档够日常折腾**(每天 50-100 次)

写小工具 / 个人脚本,**不要花钱买 API,直接 AI Studio**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Claude](./claude.md) | 写代码 / 写中英文都要"自然" / 复杂推理 |
| [ChatGPT](./chatgpt.md) | 多模态生态 / 记忆 / 通用最稳 |
| [Kimi K2.5](./kimi.md) | 国内长文档(2M context 直接打 Gemini) |
| [DeepSeek](./deepseek.md) | 国内 / 写代码 / 性价比 |
| [Perplexity](../research/perplexity.md) | 不用 1M 长上下文,只要"AI 搜索 + 引用源" |

---

## 价格分析

### 个人订阅

| 档位 | 价格 | 适合谁 |
|------|------|------|
| **Free** | $0 | 大多数人,Gemini 3 Flash 不限量,Pro 限额 |
| **Google One AI Premium** | **$20/月** | **Gemini Advanced + 2TB Drive + Workspace AI** |
| **Workspace Business + AI** | $30+/seat | 团队 / 公司 |

**最大优势**:**$20 同时拿 AI + 2TB 云存储 + Workspace 全部 AI 集成**,综合性价比比 ChatGPT Plus / Claude Pro 都高。

### API(开发者)

| 模型 | Input | Output |
|------|------:|-------:|
| Gemini 3 Pro | $1.25 / M | $5 / M(<200K) |
| Gemini 3 Pro 长上下文 | $2.5 / M | $10 / M(>200K) |
| Gemini 3 Flash | $0.075 / M | $0.3 / M |

**Flash 价格几乎和 DeepSeek 持平**,但带多模态。
长上下文 + 多模态批量处理 → Gemini API 是最优解。

### 我的预算建议

```
普通用户:                       Free + AI Studio,大部分人不需要付费
Workspace / Drive 老用户:       $20/月白拿,直接订
学生 / 研究员 / 重度长文档:      $20/月,Deep Research 拉高效率
开发者(批量场景):               API,Flash 几乎免费,Pro 长上下文
```

---

## 国内用户必看

### 现状(2026-05)

Google 服务**整体不在中国大陆提供**,但**比 Anthropic 宽松**:
- ❌ Gemini App / 网页:大陆 IP 不可访问
- ❌ Google 账号注册:需海外手机号
- ✅ AI Studio API:**有了海外账号 + 海外网络后,API 调用稳定**
- ✅ 通过 [Cherry Studio](https://cherry-ai.com/) / [Cursor](../ide/cursor.md) 等第三方包装可用

### 实际可用的方案

1. **海外账号 + 稳定代理 + 海外信用卡**:最自由
2. **走第三方平台聚合**:[POE](https://poe.com)($20 含 Gemini)、Cherry Studio 配 API key
3. **AI Studio 免费 API**:海外网络 + Google 账号即可,不要海外卡

### 我的建议

国内用户**不必为 Gemini 单独折腾**,除非:
- 真的需要 1M 长文档(国产 Kimi 2M 替代)
- 需要 Deep Research(国产无对标)
- Workspace 重度用户

普通国内用户:**[DeepSeek](./deepseek.md) + [Kimi](./kimi.md) + [豆包](./doubao.md) 国产组合就够 90% 场景**。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-12 | Gemini 2 Flash | 速度第一,长上下文成熟开始 |
| 2025-03 | Gemini 2 Pro 1M 上下文 | 第一个"真能用 1M"的模型 |
| 2025-08 | **Deep Research 上线** | 调研场景的拐点 |
| 2025-12 | NotebookLM 大改 + 音频生成 | 学习场景产品化 |
| 2026-02 | **Gemini 3 Pro / Flash 发布** | 综合能力对齐 GPT-5 / Claude Sonnet,代码能力 +20% |
| 2026-04 | 视频生成集成(Veo 3) | 多模态生态闭环 |

---

## 一个被很多人忽略的事实

Gemini 的最大优势其实**不是模型本身**,是**和 Google 整个生态的深度绑定**:
- 你用 Gmail → Gemini 知道你近期通信
- 你用 Calendar → Gemini 帮你协调时间
- 你用 Drive → Gemini 能搜你所有文档
- 你用 YouTube → Gemini 能看视频内容

**模型本身的差距**(Gemini 3 vs Claude / GPT)正在快速缩小。
**生态绑定的优势**正在扩大。

如果你已经活在 Google 生态里,**Gemini 是不需要思考的选择**。

---

## 拓展阅读

- 官方:[Gemini 模型介绍](https://deepmind.google/technologies/gemini/)
- 官方:[Google AI Studio](https://aistudio.google.com)
- 工具:[NotebookLM](https://notebooklm.google.com/)
- 第三方:[Gemini Deep Research 实测](https://lmarena.ai/leaderboard)

---

[← 回到 foundation-models](./README.md)
