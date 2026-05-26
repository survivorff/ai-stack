<!--
---
type: tool
slug: kimi
name: Kimi
category: foundation-models
url: https://kimi.moonshot.cn
maker: Moonshot AI(月之暗面)
pricing: freemium
price_range: ¥0 / API 中等
china_availability: 🟢
modalities:
  - text
  - code
  - file
strengths:
  - 长文档之王(2M+ 上下文)
  - Agent 能力(K2 系列原生 tool use)
  - 国内直连零门槛
  - 中文生态完善
  - 探索版搜索质量高
weaknesses:
  - 没有图像 / 视频生成
  - 写代码不如 DeepSeek 强
  - API 价格不如 DeepSeek 极致
  - 创意写作"工整有余,灵气不足"
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: K2.5 + 长文档 + Agent 能力,国产长上下文之王
  - date: 2025-09
    tier: A
    reason: K2 发布,agent 能力跃升
recommended_for_scenarios:
  - paper-digesting
  - long-document-analysis
  - tech-research
  - learning-new-domain
  - reading-codebase
alternatives:
  - deepseek
  - gemini
  - claude
  - glm
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# Kimi

> Moonshot AI(月之暗面)的旗舰。**国产长上下文之王**,2M+ tokens 实战能用满。
> Tier A+,在"长文档 / Agent / 国内可用"组合上**没有对手**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Moonshot AI 月之暗面](https://www.moonshot.cn)(北京) |
| **当前版本(2026-05)** | K2.5(通用) · K2.5 Agent(工具调用) |
| **支持模态** | 文本 · 代码 · PDF/DOC/PPT/Excel · URL · 图片(理解) |
| **上下文窗口** | **2,000,000 tokens(2M)** + 8K 输出 |
| **API 价格** | Input ¥4 / M tokens · Output ¥20 / M(K2.5 标准档) |
| **个人使用** | Web + App 完全免费 |
| **国内可用性** | 🟢 直连零障碍 |

---

## Tier 评级:A+

**评级理由**:
- **2M 长上下文实战可用**:**国产模型里唯一一个能单次塞 100+ 篇 PDF 的**
- **Agent 能力到位**:K2.5 Agent 原生支持工具调用、代码执行、网页浏览,**不需要外接 LangChain**
- **探索版搜索强**:中文场景下的"AI 搜索 + 长文档分析"几乎默认选 Kimi
- **国内零门槛**:不翻墙、支付宝付款、中文母语理解
- **教育 / 阅读 / 学术场景几乎无敌**

> **不是 S 的原因**:
> - 写代码能力略输 DeepSeek
> - API 价格比 DeepSeek 贵 8 倍
> - 多模态不全(没有生成,只有理解)
> 但**做"长文档 + 调研"它就是 S** —— 看你的使用场景。

---

## 它最适合做什么

### ✅ 长文档处理

这是 Kimi 的统治区。
能干的事(其他国产模型干不了或费劲):
- 一次扔 50-100 篇 PDF 论文 → "找出所有讨论 X 的段落 + 综合观点"
- 整本 60 万字小说 → "第 3 章的伏笔在第几章被回收"
- 一年公司全部周报 → "找出过去讨论但没落地的决策"
- 整套法律文件 / 合同 → "对比 v1 和 v3 的所有差异"

**实测在 1.5-2M 上下文区间,Kimi 准确度比 Gemini 1M 还稳一点**(主要因为中文场景训练更多)。

适合:
- [论文消化](../../scenarios/paper-digesting.md)
- [学新领域](../../scenarios/learning-new-domain.md)
- [读老项目代码](../../scenarios/reading-codebase.md)
- [整理用户反馈](../../scenarios/feedback-synthesis.md)

### ✅ AI 搜索 + 调研

Kimi 的"探索版"模式 = AI 搜索:
- 实时搜中文互联网(知乎 / 微信公众号 / 微博 / 各大新闻)
- 给引用源链接
- 能反复追问、深入挖

**对中文调研场景**(查公司、查行业、追新闻),**Kimi 探索版是国产里最好用的**。
对手 [Perplexity](../research/perplexity.md) 国内中文支持差很多。

适合:
- [技术调研](../../scenarios/tech-research.md)
- [市场调研](../../scenarios/market-research.md)
- [追时事 / 追新闻](../../scenarios/news-tracking.md)

### ✅ Agent / 工具调用任务

K2 系列(2025-08 发布)是国产首个**原生支持 Agent 工作流**的模型。能干的事:
- 自动写代码并跑(集成 Python 沙盒)
- 浏览网页 + 截图 + 总结
- 调用第三方 API + 处理结果
- 多步骤任务规划 + 执行

**不需要 LangChain / AutoGen** 之类的中间层,**Kimi 自己就是一个 Agent**。

### ✅ 学生 / 研究员 / 知识工作者

读论文、写综述、做笔记、跨学科调研。
**Kimi 几乎是国产 ChatGPT for 学术** —— 中文友好 + 长文档 + 免费。

### ✅ 程序员"读懂老项目"

把 50 个文件的 src 整个塞进去 + "这个项目的入口在哪 / 怎么部署 / 关键模块怎么交互"。
**写代码用 DeepSeek,读老代码用 Kimi**,这是国内开发者的标配。

---

## 它**不擅长**什么

### ❌ 多模态生成

Kimi 只能"看图理解"(OCR / 看截图),**不能生成图、不能生成视频、不能 TTS**。
- 生图 → [Midjourney](../image-gen/midjourney.md) / [文心](./wenxin.md) / [豆包](./doubao.md)
- 视频 → [Sora](./chatgpt.md) / [Veo](../video-gen/veo.md) / [Kling](../video-gen/kling.md)
- 语音 → [豆包](./doubao.md) / [Minimax](./minimax.md)

### ❌ 极复杂代码任务

代码能力 2026 年仍输 DeepSeek V4(差距小但确实有):
- 写代码主力 → [DeepSeek](./deepseek.md)(国内)/ [Claude](./claude.md)(海外)
- Kimi 适合"读 / 理解 / 解释代码",而不是"长任务写代码"

### ❌ 极致省钱

API 价格:
- DeepSeek V4:¥0.5/M
- **Kimi K2.5:¥4/M(8 倍)**

预算极敏感场景 → DeepSeek。Kimi 的钱花在了"长上下文"和"agent 能力"上,贵得有道理。

### ❌ 创意写作的"灵气"

写小红书 / 抖音文案 / 故事:Kimi 写得**工整、合规、平庸**。**不出错,但也不出彩**。
要灵气感的中文创意写作 → [Claude](./claude.md) / [豆包](./doubao.md)。

### ❌ 某些政治 / 历史敏感话题

国产模型都受境内合规约束。深度时政讨论 → Claude / GPT 仍然不可替代。

---

## 真实使用 tips

### 1. 长文档 prompt 这样写效果最好

不要直接"帮我总结",**让它先建索引**:

```
我上传了 N 篇关于 X 的资料,请先做以下事:
1. 列出每个文件的标题 + 一句话摘要
2. 提取每个文件的关键观点(3 条以内)
3. 标出哪些观点之间有冲突
然后我会基于这个再问具体问题。
```

**有索引的 Kimi 比"裸总结"准确率高一档**。

### 2. 探索版的"反复追问"非常重要

Kimi 探索版第一轮答案**通常浅**。值钱的是"追问":
- "上面第 3 点的依据是哪条新闻?给我链接"
- "这个公司 2024 年有没有融资,谁投的"
- "把刚才提到的所有数字做成表格"

**追问 5-10 轮后,你会得到一份比手工搜索好 3 倍的资料**。

### 3. 适合做"专家系统的入口"

Kimi 网页里有 "Kimi+" 功能(类似 GPTs)。可以**预设一个 system prompt + 一份资料库**,做成专属智能体。
比如:
- "公司知识库 Bot":喂全部 Confluence 导出
- "我的论文 Bot":喂学术论文集
- "客服话术 Bot":喂过往客户对话

**比直接每次粘贴 prompt 高效 10 倍**。

### 4. 别用 Kimi 写英文

Kimi 主要中文训练。**英文输出明显有"翻译腔"**。
英文场景 → ChatGPT / Claude。

### 5. K2.5 Agent 的"代码执行"很值

Agent 模式自带 Python 沙盒,可以:
- 真的跑代码 + 给真实输出
- 处理 Excel(直接生成图表)
- 数据清洗 / 转换

**等于一个免费的 Code Interpreter**,而 ChatGPT Plus 的 Code Interpreter 要 $20/月。

### 6. 长上下文不要"塞了就丢"

虽然 Kimi 能装 2M,但**塞了之后还是要在 prompt 里"路标"**:
- ❌ "上面这些资料里 X 怎么说"(答案飘)
- ✅ "在 file_3 的第 2 章 + file_7 整体里 X 怎么说"(答案稳)

模型不会"读完所有资料",它在**做检索 + 抽取**。**给路标 = 给检索关键词**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [DeepSeek](./deepseek.md) | 写代码 / 推理 / 性价比极致 |
| [Gemini 3 Pro](./gemini.md) | 海外 / 1M 上下文 + Google 搜索 / Deep Research |
| [Claude](./claude.md) | 海外 / 写作 / 复杂决策 |
| [GLM](./glm.md) | 智谱开源生态 / 企业部署 |
| [豆包](./doubao.md) | 多模态 / 移动端 / 即时问答 |

---

## 价格分析

### 个人(消费者)

| 渠道 | 价格 | 限制 |
|------|------|------|
| **Web / App** | **¥0** | 无限制使用 K2.5 + 探索版 |
| **会员**(可选) | ¥99/月起 | 优先响应 + 高优先级 + 更高文档配额 |

**绝大多数个人用户用免费版完全够**。

### API(开发者)

| 模型 | Input | Output |
|------|------:|-------:|
| K2.5(标准) | ¥4 / M | ¥20 / M |
| K2.5 Agent | ¥6 / M | ¥30 / M |

**比 DeepSeek 贵,但比 Claude / GPT 便宜得多**。
Agent 任务 + 长文档处理:**Kimi 是性价比最优的国产选择**。

### 我的预算建议

```
个人 / 学生:                       Web 免费版,完全够
研究员 / 知识工作者:                免费 + Kimi+ 自定义智能体
开发者 Agent / 长文档批处理:        API ¥4-6/M
重度个人会员:                       ¥99/月,极高频用户才划算
```

---

## 国内可用性(🟢)

- ✅ 直连无需代理
- ✅ 微信 / 支付宝 / 银行卡都可付款
- ✅ 中文母语理解
- ✅ Web / App / 微信小程序全平台
- ✅ 抖音 / 小红书 / 知乎都开放 API 集成

Kimi 是**完全为中文用户做的产品**,这点和 DeepSeek 都一样,国内用没任何门槛。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-03 | Kimi 2M 长上下文上线 | 国产长上下文领先两年 |
| 2024-10 | 探索版上线 | 中文 AI 搜索拐点 |
| 2025-08 | **K2 发布,Agent 能力** | 国产首个原生 Agent 模型 |
| 2026-01 | K2.5 + 多文件支持 | 长文档处理 + 跨文件检索质变 |
| 2026-04 | API 全面降价 | 长上下文费用降 50% |

---

## "DeepSeek + Kimi" 这套组合为什么是国产首选

国内开发者 / 知识工作者**最理性的国产模型组合**:

| 任务 | 用谁 |
|------|------|
| 写代码 / 推理 / 数学 | **DeepSeek** |
| 长文档 / 调研 / 学习 | **Kimi** |
| 移动端 / 语音 / 多模态 | **豆包** |

**总成本**:个人 = ¥0(都免费)。
**覆盖能力**:写作 + 编程 + 学习 + 调研 + 多模态 ≈ ChatGPT Plus + Claude Pro($40)。
**国内可用性**:🟢🟢🟢 全部直连。

这套组合是**国内 AI 用户应该默认配的"三件套"**。

---

## 拓展阅读

- 官方:[Kimi 网页版](https://kimi.moonshot.cn)
- 官方:[Moonshot Platform 文档](https://platform.moonshot.cn/docs)
- 第三方:[国产长上下文模型实测](https://lmarena.ai/leaderboard)

---

[← 回到 foundation-models](./README.md)
