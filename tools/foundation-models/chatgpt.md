<!--
---
type: tool
slug: chatgpt
name: ChatGPT (GPT)
category: foundation-models
url: https://chatgpt.com
maker: OpenAI
pricing: freemium
price_range: $0-200/mo
china_availability: 🟡
modalities:
  - text
  - image
  - audio
  - video
  - code
  - file
strengths:
  - 通用能力均衡(没有明显短板)
  - 多模态完整(图/语音/视频/文)
  - 原生联网搜索 + 记忆功能
  - 生态最大(插件 / GPTs / 企业)
  - 速度快
weaknesses:
  - 写代码长任务输给 Claude
  - 写作"塑料感"重,没 Claude 自然
  - 上下文 256K,不如 Claude 1M / Gemini 1M
  - 国内访问有门槛
  - 容易"过度服从"用户(谄媚)
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: 通用 + 多模态 + 生态,最稳的"什么都做"模型
recommended_for_scenarios:
  - general-qa
  - image-understanding
  - voice-input
  - learning-new-domain
  - prd-writing
  - data-analysis
  - market-research
alternatives:
  - claude
  - gemini
  - deepseek
  - doubao
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# ChatGPT(GPT)

> OpenAI 出的旗舰。**最均衡 + 多模态最全 + 生态最大**。
> 不是"哪一项最强",但**没有明显短板** —— 这本身就是它的护城河。
> Tier S。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [OpenAI](https://openai.com) |
| **当前版本(2026-05)** | GPT-5(标准) · GPT-5 Pro(深度思考) · GPT-5 mini(快速廉价) |
| **支持模态** | 文本 · **图片(看 + 生成)** · **语音(听 + 说)** · **视频(看 + 生成 Sora)** · 代码 · 文件 |
| **上下文窗口** | 256K tokens(Plus / Pro 同) |
| **API 模型 ID** | `gpt-5` / `gpt-5-pro` / `gpt-5-mini` |
| **国内可用性** | 🟡 需要"自配方案",见下方 |

---

## Tier 评级:S

**评级理由**:
- **唯一的"全能选手"**:文 + 图 + 语音 + 视频 + 代码 + 联网 + 记忆,**一个产品全包**。同档对手都有缺项
- **生态最大**:GPTs / 企业版 / Microsoft 深度集成 / 第三方接入数量全行业第一
- **多模态成熟度第一**:Sora 2、ChatGPT 语音、图像理解,**实际可用度都是同档最高**
- **速度快**:GPT-5 标准模型响应时间显著快于 Claude

> **不是"任何一项第一"**:
> - 写代码长任务 → Claude 更强
> - 长上下文 → Claude / Gemini 1M 更狠
> - 性价比 → DeepSeek 1/20 价格
> - 联网深度 → Gemini 集成 Google 搜索更深
> 但**"全部都能做且都不差"**,**对大多数普通用户这是最重要的特质**。

---

## GPT 模型矩阵(选哪个)

| 模型 | 何时用 | Plus 是否可选 | API 价格 |
|------|--------|:----:|---------|
| **GPT-5** | 默认日常,所有任务 | ✅ | $5 / $15 |
| **GPT-5 Pro** | 复杂推理 / 长链路 / 重要决策 | ✅(限额低) | $30 / $90 |
| **GPT-5 mini** | 简单问答 / 写脚本 / 批量处理 | ✅(无限) | $0.4 / $1.6 |
| **o4-mini-high** | 数学 / 代码竞赛 | ✅ | $1 / $4 |

**实战经验**:
- 90% 用 **GPT-5**,默认就好
- 10% 切 **GPT-5 Pro**(决策类、严肃写作、复杂代码)
- 想省钱跑批量 → mini

---

## 它最适合做什么

### ✅ 万事不知道选啥的"默认助手"

**为什么是它**:你不知道任务难度、不知道需要什么模态、不知道要不要联网 —— GPT 都能接住。
对普通用户(非工程师 / 非内容创作者),**ChatGPT Plus 是最不会出错的 $20 投入**。

### ✅ 多模态任务(图 + 语音 + 视频)

- **图像理解**:截图问答、看图写代码、分析数据图表 —— 实测 GPT-5 比 Claude / Gemini 更"懂"图里的细节
- **语音对话**:开车、做饭、走路时,**Voice 模式**响应自然、能打断、能边说边查资料
- **视频生成**:**Sora 2** 集成在 ChatGPT 内,会员直接用,目前**消费级文生视频里最稳**
- **画图**:GPT-5 自带图像生成,**叠加文字 / 文字嵌图** 比 Midjourney 更可靠

### ✅ 用搜索 + 记忆的"长期助手"

- **Memory**:记住你的项目背景、偏好、风格(Claude 没有这个)
- **Search**:原生联网,引用源链接清晰
- **Custom GPT**:把"你的资料 + 自定义指令"打包成助手分发给团队

如果你**长期跟一个 AI 协作 6 个月+**,GPT 的记忆能力**比 Claude / Gemini 都强一个 step**。

### ✅ 数据分析 / Code Interpreter

ChatGPT 的 **Advanced Data Analysis**(原 Code Interpreter)是这一类里最稳的:
- 上传 Excel / CSV → 直接生成图表 + 统计分析
- 上传 PDF → 提取表格 + 数据清洗
- **背后是个真 Python 沙盒**,不是模型"硬编"答案

适合非工程师做轻数据分析(产品 / 运营 / 学生)。

### ✅ 生态依赖型场景

- 用了 Microsoft 365 / Copilot / Office 全家桶 → GPT 集成最好
- 团队已经在 ChatGPT Enterprise → 别折腾,继续
- 想做付费分发的 GPTs → OpenAI 生态当下还是最大

---

## 它**不擅长**什么

### ❌ 写长代码任务

GPT-5 的代码能力**落后 Claude Opus 4.7 一档**,尤其是:
- 跨 10+ 文件的重构
- 长链路 debug(竞态 / 死锁 / 内存)
- 复杂架构设计

写代码主力 → [Claude](./claude.md) + [Claude Code](../coding-agent/claude-code.md)
GPT 写代码用 **Codex CLI** 也行,但实测多文件协作差 Claude Code 一截。

### ❌ 写"灵气感"的中文长文

GPT 写中文有种**"AI 标准腔"**(首先、其次、综上)。
写小红书 / 公众号 / 文学性内容,**Claude 中文自然度明显胜过**。

### ❌ 长上下文(超过 256K)

256K 在 2026 年只算中等。
- 跨整本书 / 30+ PDF → [Gemini](./gemini.md)(1M 集成搜索)/ [Claude](./claude.md)(1M)
- 国内场景 → [Kimi](./kimi.md)(2M+)

### ❌ 性价比

API:GPT-5 $5/$15,DeepSeek V4 ¥0.5/¥2(差 30 倍)。
预算紧的开发者 → 直接用 [DeepSeek](./deepseek.md)。

### ❌ "拍马屁"问题

GPT-5 比前代 GPT-4 好,但**仍倾向同意用户**(sycophancy)。
你说"这代码有 bug 对吗?"它经常先承认。
**重要决策不要让它自由发挥**,要刻意 prompt:
> "不要先同意我,直接给你的判断 + 反对理由"

Claude 这方面好不少。

### ❌ 国内**直接用**

需要海外 IP + 海外手机号 + 海外信用卡。每一项都不简单。
没有"自配条件"的国内用户 → 直接用 [DeepSeek](./deepseek.md) / [豆包](./doubao.md)。

---

## 真实使用 tips

### 1. Memory 一定要打开,但要定期清

`Settings → Personalization → Memory → ON`。
打开后 GPT 会记住你的:
- 主要项目和身份
- 写作风格偏好
- 常用技术栈
- 已经讨论过的"前情"

但**不要让它无限攒**。每个月找一次:
> "把 Memory 完整列出来给我看"
> 删掉过期、无关、错的条目。

否则 GPT 会基于 6 个月前过期的"记忆"给你不对的建议。

### 2. Custom Instructions 是被低估的宝藏

`Settings → Custom Instructions`。
两个框,我的常用模板:

```
框 1(关于我):
- 11 年后端 + 4 年 Web3
- 主语言:Go / TypeScript / Rust
- 偏好直接、简短回答,不要"首先/其次"
- 中文回答,代码注释用英文

框 2(我希望 ChatGPT 怎么回答):
- 直接给结论,不要堆背景
- 不要自夸 "great question"
- 代码必须实际能跑,不写伪代码
- 不知道就说不知道,不要编
- 简体中文,不用繁体
```

这套**对每个对话生效**,效果比每次重复 prompt 强 10 倍。

### 3. 有些任务必须切 GPT-5 Pro

GPT-5 标准模型为了快**会跳推理**。Pro 模式启用 deep thinking,**慢但准**。

什么时候切 Pro:
- 法律 / 合同 / 商业决策类
- 写正式文档 / 学术论文
- 多步骤推理(产品逻辑 / 系统设计)
- "我感觉它给的答案太草率"

每天 Pro 限额(Plus)有限,**别拿来闲聊**。

### 4. Voice 模式真值得试

很多人没用 Voice,**它是 ChatGPT 体验最大的亮点之一**。
- 上下班通勤
- 跑步 / 走路
- 做饭 / 收拾
- 灵感讨论(说着说着想清楚)

**Voice 比文字打字让你更松弛**,会逼你用更口语的方式表达想法,反而 prompt 更自然。

### 5. Sora 2 是消费级最强文生视频

OpenAI 的 Sora 2(2025-09 集成进 ChatGPT)目前是消费级最稳的:
- 物理一致性 > Veo / Kling
- 角色 ID 一致性 ≥ Runway Gen-4
- 文字嵌入视频不会糊

但**有内容审核**,涉及真人 / 商业 logo / 暴力都会被拒。商用用 [Veo](../video-gen/veo.md) / [Kling](../video-gen/kling.md) 更宽。

### 6. 别把 ChatGPT 当代码 IDE

很多人写代码就一直在 ChatGPT 网页里复制粘贴。
**这是最低效的工作方式**:
- 没有项目上下文(GPT 不知道你的代码库结构)
- 复制粘贴容易丢字符
- 多文件协作需要不停切对话

写代码:
- 单文件 → [Cursor](../ide/cursor.md) / [Kiro](../ide/kiro.md)
- 长任务 → [Claude Code](../coding-agent/claude-code.md) / [Codex CLI](../coding-agent/codex-cli.md)
- 重 GPT 用户 → [Codex CLI](../coding-agent/codex-cli.md)(GPT 自家终端 agent)

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Claude](./claude.md) | 写代码长任务 / 写作要"自然" / 复杂推理 |
| [Gemini 3 Pro](./gemini.md) | 1M 上下文 / Google 生态 / 学术研究 |
| [DeepSeek](./deepseek.md) | 国内 / 性价比 / 开源 / 代码 |
| [豆包](./doubao.md) | 国内 + 移动端 + 语音 |
| [Kimi](./kimi.md) | 长文档 / agent |

---

## 价格分析

### 个人订阅

| 档位 | 价格 | 适合谁 |
|------|------|------|
| **Free** | $0 | 偶尔用 / 试水 / 限额低 |
| **Plus** | **$20/月** | **大多数人首选**,Memory + GPTs + 多模态全开 |
| **Pro** | $200/月 | 重度 + 商业 + Pro 模式无限 + Sora |
| **Team** | $30/seat | 5 人以上协作 + 数据隔离 |
| **Enterprise** | 定制 | 大公司 / 合规 / 单点登录 |

### 我的预算建议

```
普通用户(写文+学+办公):       Plus $20/mo,几乎无脑选
开发者重度 + Sora 想用:           Pro $200/mo
省钱党 / 国内为主:                 Free + DeepSeek + 豆包,完全够
团队协作:                          Team $30/seat
```

**关键判断**:**ChatGPT Plus $20 和 Claude Pro $20**,**先选哪个**?

我的答案:**两个都买**。
- 重写作 / 重代码 → Claude 主力
- 重多模态 / 重生态 → ChatGPT 主力
- 加起来 $40,**对认真用 AI 的人 = 一杯咖啡的价格换一个完整能力栈**

预算只够一个的话:
- 偏程序员 / 写作 → Claude
- 偏通用 / 多模态 → ChatGPT
- 偏国内 / 省钱 → 都不买,DeepSeek + 豆包

### API 价格

| 模型 | Input | Output |
|------|------:|-------:|
| GPT-5 | $5 / M | $15 / M |
| GPT-5 Pro | $30 / M | $90 / M |
| GPT-5 mini | $0.4 / M | $1.6 / M |

省钱技巧:
- **Prompt Caching** 长 system prompt 命中 50% 折扣
- **Batch API** 异步调用 50% 折扣
- 走 [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service)(国内合规企业用)

---

## 国内用户必看

### 现状(2026-05)

OpenAI 没有正式服务中国大陆,但**没有像 Anthropic 那样彻底封禁**。

- 注册:海外手机号(Google Voice / Twilio)+ 海外 IP
- 付费:海外信用卡(Wise / Revolut / 美卡 / 港卡都行)
- 使用:稳定海外 IP(住宅 IP 比机房 IP 安全很多)

### 实际可用的方案

1. **自己配**:海外卡 + 稳定代理,**最自由但折腾**
2. **走 Microsoft / Azure**:Azure OpenAI 在中国大陆**合规可用**,但需企业账号
3. **走 [Cursor](../ide/cursor.md) / [Cherry Studio](https://cherry-ai.com/) 等中转工具**:它们打包了底层 API 调用,你只交订阅费
4. **POE**(Quora 出品):聚合多模型订阅,$20/月含 GPT/Claude/Gemini

### 我的建议

普通国内用户(不需要海外业务) → **直接用 [DeepSeek](./deepseek.md) + [豆包](./doubao.md) + [Kimi](./kimi.md)**。
国内组合 90% 场景顶 ChatGPT,且零门槛。

如果**真的需要 GPT**(比如海外业务 / 学术 / 教学):
- Pro 用户 + 稳定代理是当前最稳的组合
- 别买"中转包月共享号" → 数据黑洞 + 随时被封

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-05 | GPT-4o 多模态 | 多模态进入消费级 |
| 2025-08 | **GPT-5 发布** | 反应明显变快,但"实质能力"质疑声大 |
| 2025-09 | **Sora 2 集成** | 消费级文生视频拐点 |
| 2026-01 | GPT-5 Pro 上线 | 复杂任务终于稳了,Pro 模式拉开档次 |
| 2026-03 | GPT-5 mini 重大降价 | API 战打响,$0.4/M 直接对标 DeepSeek |
| 2026-05 | Memory v2 + GPTs 改版 | 长期协作能力 +1 |

---

## 拓展阅读

- 官方:[OpenAI Pricing](https://openai.com/pricing)
- 官方:[ChatGPT Release Notes](https://help.openai.com/en/articles/6825453)
- 第三方:[GPT vs Claude 横评 2026](https://lmarena.ai/leaderboard)

---

[← 回到 foundation-models](./README.md)
