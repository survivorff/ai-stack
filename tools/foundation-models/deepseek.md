<!--
---
type: tool
slug: deepseek
name: DeepSeek
category: foundation-models
url: https://www.deepseek.com
maker: 深度求索(DeepSeek AI)
pricing: freemium
price_range: ¥0 / API 极便宜
china_availability: 🟢
modalities:
  - text
  - code
  - file
strengths:
  - 性价比无敌(API 价格 < OpenAI 1/20)
  - 推理能力(R1.5 在数学/编程榜常年前三)
  - 开源可自部署(MIT)
  - 中文场景母语级
  - 国内直连零障碍
weaknesses:
  - 多模态弱(图/语音/视频几乎没有)
  - 没有原生联网搜索
  - 长上下文不如 Claude / Kimi(128K)
  - 写作风格略"理工科"
  - 偶尔受合规审查影响某些话题
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: 国内开发者首选 + 性价比 + 开源 + 推理能力强
  - date: 2025-09
    tier: S
    reason: V3 + R1 引发 GPU 行业地震,价格屠夫
recommended_for_scenarios:
  - writing-code
  - debugging
  - tech-research
  - reasoning-task
  - paper-digesting
  - learning-new-domain
  - data-analysis
alternatives:
  - kimi
  - claude
  - chatgpt
  - glm
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# DeepSeek

> 深度求索的开源大模型。**国内开发者首选**,性价比**无敌**,推理能力打 OpenAI 旗舰。
> Tier S。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [深度求索 DeepSeek](https://www.deepseek.com)(杭州) |
| **当前版本(2026-05)** | V4(通用) · R1.5(推理) |
| **支持模态** | 文本 · 代码 · PDF/文档 · 部分图理解 |
| **上下文窗口** | 128K tokens |
| **API 价格** | Input **¥0.5 / M tokens**(命中缓存 ¥0.05) · Output **¥2 / M tokens** |
| **个人使用** | Web + App 完全免费 |
| **开源** | ✅ V4 / R1.5 模型权重 MIT 协议公开,可商用、可微调、可自部署 |
| **国内可用性** | 🟢 直连零障碍 |

---

## Tier 评级:S

**评级理由**:
- **性价比夸张到行业地震**:V4 API 价格是 GPT 4o 的 1/20,Claude Sonnet 的 1/30。**单纯算成本,没有第二个选择**
- **推理能力打到第一梯队**:R1.5 在 AIME 2025 数学、Codeforces 编程竞赛榜上**与 GPT-5 / Claude Opus 同台**
- **开源 + 可自部署**:MIT 协议,**任何企业都能拉到自己服务器上跑**,这条让它在金融/医疗/政务彻底放飞
- **国内直连**:不翻墙、支付宝付款、中文 prompt 母语理解
- **2025 年那次"DeepSeek 引发 NVDA 单日蒸发万亿美元市值"** —— 不是新闻噱头,是行业拐点的标志

> **不是"最聪明的"** —— 极复杂任务它略输 Claude Opus 4.7。但**用 1/20 的价格做到 90% 的能力**,大多数场景里这个 trade-off 是**碾压性的**。

---

## V4 vs R1.5 — 你该选哪个?

这是 DeepSeek 用户最容易问的问题。

| | **V4**(通用) | **R1.5**(推理) |
|---|---|---|
| **何时用** | 写代码 / 写文 / 日常问答 | 数学 / 复杂推理 / 难 debug |
| **响应速度** | 快(秒级) | 慢(会"想"几十秒到几分钟) |
| **输出长度** | 标准 | 通常更长(含思维链) |
| **价格** | 标准价 | 略高(因为思考过程也算 token) |
| **接口** | `deepseek-chat` | `deepseek-reasoner` |

**实战经验**:90% 任务用 V4 就够。只在以下三类问题切到 R1.5:
1. 数学 / 物理 / 算法竞赛题
2. 多步骤逻辑推理(法律 / 商业决策)
3. 长链路 debug(20+ 文件,涉及竞态 / 死锁)

**别误用**:写诗、写文、闲聊用 R1.5 反而效果差,它会过度"分析"一个本来很简单的事。

---

## 它最适合做什么

### ✅ 国内程序员日常写代码

V4 的代码能力**实测和 Claude Sonnet 4.7 接近**,价格 1/30。
对大多数中小项目,**完全可以用 DeepSeek 替代 Claude / GPT**。

适合:
- [写代码](../../scenarios/writing-code.md)
- [Debug](../../scenarios/debugging.md)
- [代码 Review](../../scenarios/code-review.md)
- [API 设计](../../scenarios/api-design.md)

走 [Cursor](../ide/cursor.md) 或 [Aider](../coding-agent/aider.md) 时,**配 DeepSeek API key 是国内最划算的方案**。

### ✅ 数学 / 推理 / 算法

R1.5 在 AIME 2025、Codeforces、GPQA-Diamond 上的成绩与 GPT-5、Claude Opus 4.7 同档。
对学生 / 量化研究员 / 数学竞赛党,**价格 1/30 + 开源可本地跑**,无脑选。

### ✅ 数据敏感场景的本地部署

V4 / R1.5 权重开源(MIT),**可以拉到自己服务器跑**。
- 金融机构合规要求"数据不出内网" → 自部署 DeepSeek
- 医疗机构患者数据 → 自部署
- 政府 / 国企 → 自部署

R1.5 671B 参数,**单台 8×H100 可跑**;蒸馏版的 32B / 7B 单卡 4090 都能玩。

### ✅ 学英文 / 用英文 LLM 但不想花钱

DeepSeek 中英双语都强,**英文能力实测约 GPT-4o 水平**。
学生写英文论文、做调研、读 paper,DeepSeek 完全够用。

### ✅ 当 Claude / GPT 的"日常替补"

写文 / 长文摘要 / 简单问答:DeepSeek 输出质量足够,**完全不用心疼额度**。
重要决策切回 Claude / GPT。这是 2026 年最理性的"双模型分工法"。

---

## 它**不擅长**什么

### ❌ 多模态(图 / 语音 / 视频)

DeepSeek 是**专注文本和代码**的模型。
- 看图理解 → 不行 / 很弱
- 生成图 → 没有
- 语音 → 没有
- 视频 → 没有

需要多模态用 [豆包](./doubao.md)(国内 + 多模态) / [GPT-5](./chatgpt.md) / [Gemini 3](./gemini.md)。

### ❌ 长上下文(超过 128K)

128K 在国产模型里中等(Kimi 2M+,GLM 1M)。
要塞超长文档(30+ 篇 PDF / 整本书)→ 用 [Kimi](./kimi.md) 或 [Gemini](./gemini.md)。

### ❌ 原生联网搜索

DeepSeek Web 端有"联网"按钮,但**搜索深度和可靠性不如**:
- [Gemini](./gemini.md)(Google 直连)
- [Perplexity](../research/perplexity.md)(专业搜索)
- [Kimi 探索版](./kimi.md)(国内强)

### ❌ "口语化 / 灵气感"的写作

DeepSeek 写出来**很标准、很正确,但偏"理工"**。写小红书文案 / 公关稿 / 创意内容,**Claude 和豆包灵气明显更足**。

### ❌ 某些政治 / 历史敏感话题

国产模型都受境内合规审查,**讨论某些话题会拒答或给出"标准答案"**。
学术 / 时政深度讨论 → Claude / GPT 仍然不可替代。

### ❌ "陪聊" / 情感支持

模型偏理性,**陪聊 / 心理疏导效果差**。这类需求 → 豆包 / Character.ai。

---

## 真实使用 tips

### 1. API 价格便宜到"可以挂在脚本里跑"

成本对比(同样 1M tokens 输入):
- Claude Sonnet 4.7:$3 ≈ ¥21
- GPT-5 标准:$5 ≈ ¥36
- **DeepSeek V4:¥0.5(1/40)**

这意味着什么?**你可以用 DeepSeek 做以前不敢想的事**:
- 把整个代码库全文喂进去问问题(Claude 烧钱,DeepSeek 几毛钱)
- 批量处理 1 万条客服记录做摘要
- 全自动定时跑脚本生成日报 / 周报

我自己挂了**几个 cron 脚本每天跑**,月成本 < ¥10。

### 2. 命中缓存还能再打 1 折

DeepSeek 默认所有 API 调用都走"prompt 自动缓存",同一段长 system prompt 第二次起价格降到 **¥0.05/M**。
这特别适合 Agent 场景:固定 system prompt + 不同 user message,**95% 成本被缓存吃掉**。

### 3. 把它接到 Cursor / Cherry Studio / Continue

Cursor 默认接 Claude / GPT,但**你可以换成 DeepSeek**:
- Cursor → Settings → Models → Add custom OpenAI-compatible model
- Base URL: `https://api.deepseek.com`
- Model: `deepseek-chat`

立刻获得"Cursor 体验 + DeepSeek 价格"。**月费从 $20 降到 ¥10**。

### 4. R1.5 的"思维链"可以读

R1 系列特色是**显式输出"我在想什么"**(放在 `<think>...</think>` 里)。
- 学习用途:看模型怎么拆解问题,**比看答案更有用**
- Debug 用途:它"想错了"会暴露在思维链里,你能精准纠正

### 5. 不要在敏感话题上反复试探

国产模型都有合规层。**反复试探敏感话题可能触发账号风控**。讨论时事 / 历史 / 政治深度问题,直接切 Claude / GPT。

### 6. 自部署门槛比想象的低

671B 满血版要 8×H100,但**蒸馏版**:
- DeepSeek-R1-Distill-Qwen-32B → 单张 4090 / A6000 可跑
- DeepSeek-R1-Distill-Llama-8B → 笔记本 RTX 4070 都行

LM Studio / Ollama / vLLM 都直接支持。
**完全私有化部署一个能用的推理模型,这在 2024 年是天方夜谭,2026 年是周末项目**。

---

## 替代方案(什么时候不用 DeepSeek)

| 替代 | 什么时候选它 |
|------|-------------|
| [Kimi K2.5](./kimi.md) | 长文档(200K+) / agent 场景 / 国产长上下文之王 |
| [Claude](./claude.md) | 写英文 / 复杂推理 / 重要决策 / 已有海外账号 |
| [ChatGPT](./chatgpt.md) | 多模态(图/语音)/ 联网搜索 / 记忆功能 |
| [豆包](./doubao.md) | 移动端 / 语音 / 多模态 / 即时问答 |
| [GLM](./glm.md) | 智谱开源生态 / 企业本地部署对照 |

---

## 价格分析

### 个人使用(消费者)

| 渠道 | 价格 | 限制 |
|------|------|------|
| **Web 网页 / App** | **¥0** | 无限制使用 V4 + R1.5 |
| **DeepSeek 助手 App** | **¥0** | 移动端 |

**DeepSeek 是少数"完全免费用"的旗舰模型**(Kimi 也是)。
个人使用根本不用考虑价格,直接用。

### API(开发者)

| 模型 | Input | Cached Input | Output |
|------|------:|-------------:|-------:|
| `deepseek-chat`(V4) | ¥0.5/M | **¥0.05/M** | ¥2/M |
| `deepseek-reasoner`(R1.5) | ¥1/M | ¥0.1/M | ¥4/M |

### 我的预算建议

```
个人 / 学生:                直接用 Web + App,¥0
个人开发者:                  API 充 ¥10 能用一个月
中小团队 / 创业:               API + 自配 prompt 缓存,月成本 ¥50-200
重度 / 企业:                   私有化部署 671B 满血,GPU 摊销 ≈ Claude API 1/10
```

**关键判断**:**DeepSeek 没有"该不该订阅"的问题,任何人都该把它配上**(至少作为备用)。

---

## 国内可用性(🟢)

- ✅ 直连无需代理
- ✅ 支付宝 / 微信 / 银行卡都可付款
- ✅ 中文 prompt 母语级理解
- ✅ 抖音 / 微博 / 知乎都开放 API 集成
- ⚠️ 海外网络反而**偶尔被限制**(国外 IP 注册账号有时困难)

DeepSeek 是**为国内用户量身做的**,这条不用纠结。

---

## ⚠️ 2026-02 蒸馏争议事件回顾

> 这件事影响了 Claude 对中国的政策,你应该了解。

**简要时间线**:
- 2025-12:Anthropic 发现 24,000 个伪造账号(IP 来自中国)在 Claude API 上生成 1600 万次"高质量推理对话"
- 2026-01:Anthropic 内部分析,**这些对话被疑用于训练某些国产模型**
- 2026-02:Anthropic 公告,因"严重违反 ToS",收紧中国大陆访问
- DeepSeek 官方否认 + 多次澄清不涉及

**和 DeepSeek 的关系**:
- 媒体当时把 DeepSeek 作为最大嫌疑人写报道
- DeepSeek 公开训练论文证明 R1 系列是**纯强化学习训练**(不依赖 GPT/Claude 蒸馏数据)
- 后续追查没有定论,但**整个国产模型圈都受牵连**(Anthropic 收紧大陆访问)

**对你的影响**:
- 没影响 DeepSeek 本身使用(国内一切正常)
- 但导致 Claude 国内访问彻底受限,**间接让 DeepSeek 用户量再翻一倍**

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-12 | DeepSeek V3 发布 | 性价比上把 GPT-4o 干到不安 |
| 2025-01 | **R1 发布,引发 NVDA 万亿市值蒸发** | 行业认知拐点:推理能力不需要砸 GPU 砸钱 |
| 2025-09 | V3.5 + R1.5 | 编程能力反超部分 Claude Sonnet |
| 2026-02 | **V4 发布** | 综合能力对齐 Claude Sonnet 4.7,价格仍 1/30 |
| 2026-05 | API 价格再降 | 输入命中缓存压到 ¥0.05/M,几乎免费 |

---

## 如果你只能选一个国产模型

**选 DeepSeek V4 + R1.5**。

理由:
- 通用能力够强(V4 顶 Claude Sonnet)
- 推理能力顶尖(R1.5 顶 GPT-5)
- 开源可本地部署(其他国产做不到)
- 国内零门槛 + 价格无敌
- 工程师社区配套最完善(Cursor / Aider / Continue 都原生支持)

**唯一应该额外配的国产模型是 [Kimi](./kimi.md)** —— 因为长文档场景 DeepSeek 不行。

---

## 拓展阅读

- 官方:[DeepSeek 文档](https://api-docs.deepseek.com/zh-cn/)
- 论文:[DeepSeek-R1 技术报告](https://arxiv.org/abs/2501.12948)
- 开源:[DeepSeek-V3 GitHub](https://github.com/deepseek-ai/DeepSeek-V3)
- 第三方分析:[2026 年开源模型格局](https://lmarena.ai/leaderboard)

---

[← 回到 foundation-models](./README.md)
