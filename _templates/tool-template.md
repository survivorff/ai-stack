<!--
这是一份"思路指引"而非"硬模板"。
不同类型的工具(模型 / IDE / 图像生成 / Agent / 笔记)写法侧重不同。
照搬同一结构会让所有工具笔记看起来像填表,反而失去信息密度。

铁律(任何工具都必须满足):
  ✅ 必标 china_availability(🟢🟡🔴 + 一句话说明)
  ✅ 必有"它不擅长什么"段落(本仓库的差异化)
  ✅ 必有清晰的 Tier 评级理由
  ✅ 不复制官方介绍语
  ❌ 不写"通用问答""无所不能"这类抽象描述
-->

<!--
---
type: tool
slug: # tool-slug
name: # 工具名(原名)
category: # 分类 slug,见 tools/README.md
url: # 官网
maker: # 厂商
pricing: free | freemium | paid
price_range: # 例:$0-200/mo 或 ¥0-200/mo
china_availability: # 🟢 直接可用 / 🟡 需自配 / 🔴 不可用
modalities: []                # text/image/audio/video/code/file
strengths:
  - # 3-5 条具体能力
weaknesses:
  - # 3-5 条具体短板(必填)
tier: # S | A | B | C | F
tier_history:
  - date: 2026-XX
    tier:
    reason: 初版评估
recommended_for_scenarios: []
alternatives: []
status: draft
last_verified: 2026-XX-XX
next_review: 2026-XX-XX  # last_verified + 90 天
---
-->

# {工具名}

> 一句话定位。Tier 评级。

---

## 写法指引(按工具类型选侧重)

### 📦 基础模型类(Claude / GPT / DeepSeek / Kimi / Gemini ...)

侧重:
- 当前版本和能力边界(上下文长度 / SWE 分数 / 多模态支持等可量化指标)
- 具体最擅长 / 不擅长哪些场景
- 价格档位拆解(消费者订阅 + API)
- 中国大陆访问现状(很关键)
- 同档对手对比(什么时候选这个,什么时候不选)
- 版本时间线(模型迭代非常快)

### 🤖 Coding Agent 类(Claude Code / Codex CLI / Aider / Devin)

侧重:
- 它和"模型"的关系(底层用什么模型,能不能换)
- agent loop 工作机制(怎么读项目、怎么动文件)
- 适合的任务边界(批量重构? 短任务? 长项目?)
- 和 IDE 的解耦关系
- context 管理(`CLAUDE.md` / system prompt 之类的关键文件)
- 实战中的踩坑

### 🛠 AI IDE 类(Cursor / Kiro / Windsurf / Trae)

侧重:
- 内置 / 可换 哪些模型,API key 怎么配
- 独有功能(Cursor 的 Composer / Kiro 的 Spec / Windsurf 的 Cascade ...)
- 工作流嵌入度(从打开项目到提交 PR 多顺滑)
- 和补全 / agent 类工具的边界
- 订阅 vs 自带 API key 的成本对比

### ✍️ 图像 / 视频 / 音频生成类(Midjourney / Sora / Suno ...)

侧重:
- 当前模型版本(v 几代,效果差异极大)
- 最擅长的风格 / 不擅长的内容
- 商用版权和数据训练问题(很多用户卡在这里)
- prompt 写法 tips(和文本模型差异很大)
- 国内可访问性 + 国产替代

### 🧠 笔记 / 知识管理类(Notion / Obsidian / Tana ...)

侧重:
- AI 是不是"原生"的(还是后加的功能)
- 数据所有权(本地 / 云端 / 是否能导出)
- 协作能力
- 长期使用的"成本"(数据迁移痛苦度)

### 🔍 搜索 / 研究类(Perplexity / 秘塔 / Felo ...)

侧重:
- 检索源(全网 / 学术 / 中文等)
- 是否给原文链接
- 是否需要订阅才能解锁深度模式
- 和 ChatGPT Search / Gemini Deep Research 的对比

---

## 写新内容时的"必须出现"模块

无论是哪类工具,以下几个内容必须存在:

### Tier 评级理由

不要只写"S"。要说清楚**为什么是 S 不是 A**。

### 它最适合做什么

具体场景,链到对应的 `scenarios/`。
**不要写"通用问答"** —— 没有信息量。

### 它不擅长什么(独家)

最少 3 条。每条必须给出"那应该用什么替代"。
这一段是这个仓库的差异化,**不能省**。

### 真实使用 tips

3-6 条作者亲自踩过的坑或好用的小招。
**官网说的不算**,要写"官网不会告诉你"的东西。

### 价格 + 预算建议

不只列价格,要给"什么人选什么档"的判断。

### 国内用户注意(如适用)

🟡/🔴 的工具必写。讲清楚:
- 现在是不是封了
- 怎么自配(代理 / 海外卡 / 第三方平台)
- 推不推荐替代

---

## 不要写的内容

- ❌ 直接复制官方 landing page
- ❌ "无所不能 / 通用 / 强大" 这类形容词
- ❌ 没有 Tier 理由的 Tier
- ❌ 没有"不擅长"段落的工具页
- ❌ 一篇里夸所有功能(用户读完不知道选不选)

---

## 参考样板

第一个完整样板:[tools/foundation-models/claude.md](../tools/foundation-models/claude.md)

后续每个分类(IDE / Agent / 图像 / 视频 ...)都会有自己的"开山之作样板",
后写的内容**参考同分类样板,而不是这份模板**。
