<!--
---
type: tool
slug: nano-banana
name: Nano Banana(Gemini Image)
category: image-gen
url: https://gemini.google.com
maker: Google DeepMind
pricing: freemium
price_range: 含在 Gemini 订阅($0-20/月)
china_availability: 🟡
modalities:
  - image
strengths:
  - 4K 写实顶尖(2025 末-2026 初突破)
  - 文字渲染极强
  - 看图改图(image editing)能力一流
  - 集成在 Gemini App / Workspace
  - 多语言 prompt(中英混合 OK)
weaknesses:
  - 名字非官方(社区起的"Nano Banana")官方叫 Imagen / Gemini Image
  - 国内访问受限(同 Gemini)
  - 艺术性 / 风格化弱于 Midjourney
  - 商用限制(Google 政策严)
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 写实 + 文字 + 看图改图三合一,2025 末突破
  - date: 2024-09
    tier: B+
    reason: Imagen 2 时代仍弱于 Midjourney
recommended_for_scenarios:
  - cover-image
  - marketing-image
  - product-photography
  - logo-design
alternatives:
  - midjourney
  - flux
  - jimeng
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Nano Banana(Gemini Image)

> Google 出的图像生成模型(社区昵称"Nano Banana",官方叫 Gemini Image / Imagen)。
> Tier A+。**2025 末 - 2026 初的"黑马",4K 写实 + 文字渲染 + 看图改图三合一**。

---

## 名字混淆先理清

- **官方名**:**Gemini 2.x Image** / Imagen 4(API 端)
- **社区昵称**:**Nano Banana**(2025 LMArena 上代号 nano-banana 突然超过所有对手出圈)
- **本页统一用 Nano Banana**(行业普遍用法)

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Google DeepMind](https://deepmind.google) |
| **当前版本(2026-05)** | Gemini 2.x Image(集成在 Gemini)/ Imagen 4(API)/ Nano Banana Pro |
| **形态** | Gemini App / Workspace / AI Studio API / Vertex AI |
| **国内可用性** | 🟡 同 Gemini,需要海外网络 + 卡 |

---

## Tier 评级:A+

**评级理由**:
- **2025-09 LMArena 出圈**:代号 nano-banana 一夜超过 Midjourney V6 / FLUX Pro,行业地震
- **4K 写实新天花板**:商业摄影级,**和 FLUX Ultra 并驾齐驱**(各有所长)
- **文字渲染极强**:海报 / Logo 文字 vs Ideogram 不遑多让
- **看图改图(image editing)能力一流**:你给图 + 描述要改的 → 出新图,**精准度远超 Midjourney inpaint**
- **集成在 Gemini App**:Gemini 用户**白嫖**

**不是 S 的原因**:
- **艺术性 / 风格化** 仍弱于 Midjourney(写实强 ≠ 美学强)
- **国内访问门槛**(同 Gemini)
- **商用限制**(Google 对 deepfake / 名人 / 商业用途 严)
- **没有 sref / cref 那种成熟的"系列一致性"工具**

---

## 它最适合做什么

### ✅ 4K 写实 / 商业摄影

- 产品图(电商 / 广告)
- 真实人物(注意 Google 政策)
- 食物 / 化妆 / 时尚

Nano Banana Pro 的**真实感和细节** vs Midjourney V7:
- Midjourney V7:更"像照片但有 AI 包浆"
- Nano Banana:**真"像直接拍的"**,几乎看不出 AI

### ✅ 文字渲染(海报 / 标牌 / Logo)

Nano Banana 写"清晰文字"几乎不出错:
- 多行文字
- 中英混排
- 装饰字体效果
- 标题 + 副标题 layout

做"文字是核心元素"的图(海报 / banner / 招牌)→ Nano Banana 是 default。
**对手 Ideogram 仍在追**。

### ✅ 看图改图(Image Editing)

Gemini 里你**直接传一张图 + 描述要改什么**:
- "把这个杯子换成红色"
- "把背景换成咖啡馆"
- "去掉左边那个人"
- "加一个落日效果"

**精准度比 Midjourney vary region / FLUX inpaint 都好**。
对手 [GPT-5 image edit](../foundation-models/chatgpt.md) 也很强,但 Nano Banana 同档。

### ✅ 多语言 / 中文 prompt

Nano Banana 对**中文 prompt 理解一流**(Google 训练数据多语言均衡):
- 中文描述 + 中文文字渲染
- 中英混合 prompt
- 中国元素(春节 / 节气 / 古风) 比 Midjourney 更准

国内创作者(能访问 Gemini):**Nano Banana 中文体验比 Midjourney 强**。

### ✅ Gemini / Workspace 用户的隐藏福利

如果你已经付 [Google One AI Premium $20](../foundation-models/gemini.md):
- Gemini App 里直接生成
- Docs 内嵌生成
- Slides 自动配图
- Sheets 生成图表插画

**$20 月费里图片生成是"免费送"的功能,但质量是付费档**。

---

## 它**不擅长**什么

### ❌ 艺术 / 风格化

要"梵高风格"" 浮世绘"" 赛博朋克 cinematic" → Midjourney 仍是首选。
Nano Banana 偏"客观真实",**艺术张力不如 MJ**。

### ❌ 角色 / 风格一致性

Midjourney 有 sref / cref。
Nano Banana 用"图编辑"做局部一致性,**但没有 50 张图同风格的成熟工作流**。
品牌系列内容 / 漫画 / 故事插图 → Midjourney 仍胜。

### ❌ 国内零门槛使用

同 Gemini,需要海外身份。
国内 → 即梦 / FLUX 国内 API / Nano Banana 通过 Gemini API(海外网络)。

### ❌ 商用 / 名人 / 敏感内容

Google 政策严:
- 不能生成名人 / 政治人物
- 不能生成暴力 / 色情
- 商业用途要走 Vertex AI 合规渠道

商用场景 → 看政策细节,可能要切 [FLUX](./flux.md)(政策更宽松)。

### ❌ 极致 LoRA / 微调生态

FLUX 开源 → 海量 LoRA / 工作流。
Nano Banana 闭源 → 微调能力受 Google 限制。
游戏美术 / 漫画工作室深度定制 → FLUX。

---

## 真实使用 tips

### 1. Gemini App 里直接玩,体验最好

[gemini.google.com](https://gemini.google.com) → 输入 prompt → 选"Generate Image"。
- 4 张候选
- 一键 edit / regenerate
- 集成 Drive / Docs

新手 / Gemini Advanced 订阅用户:**直接用,不要折腾 API**。

### 2. 看图改图是被严重低估的功能

很多人只用 Nano Banana 文生图,**真正的杀手锏是 image edit**:

```
传一张图(产品照 / 人物 / 场景)
+ 描述要改的细节
→ 输出新图(其他保持原样)
```

实战:
- 修产品照(去除瑕疵 / 换色 / 改背景)
- 改照片(去除路人 / 换天气 / 改时间)
- 调整设计稿(改文案 / 配色 / Layout)

**对内容创作者 / 设计师,这条比文生图更有用**。

### 3. 文字渲染先用英文,再中文

Nano Banana 中英文都行,**但英文文字渲染比中文稳一档**(训练数据更多)。
- 海报英文标题 → 一遍出
- 海报中文标题 → 偶尔需要 2-3 遍

中文 prompt + 英文文字 = 最稳组合。

### 4. 提示词风格

Nano Banana 喜欢:
- 自然语言描述(类似 FLUX,不需要堆关键词)
- 具体场景细节(光源 / 时间 / 角度)
- 风格描述放后面

```
A product photo of a wooden coffee mug on a dark marble counter,
warm natural light from window, shallow depth of field,
text "Morning Brew" elegantly engraved on the side, photo-realistic.
```

### 5. AI Studio API 免费档

[Google AI Studio](https://aistudio.google.com) 给个人开发者:
- Imagen 4 / Nano Banana 部分免费配额
- 适合个人项目玩

但**用量上去要切 Vertex AI(企业级)**。

### 6. 配合 Gemini Deep Research 做内容

工作流:
- Gemini Deep Research → 写文章
- 同一个 Gemini App 里 → 直接生图
- Google Docs / Slides → 一键插入

**所有都在 Google 生态闭环**,这是 Midjourney / FLUX 给不了的。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Midjourney V7](./midjourney.md) | 艺术 / 风格化 / 一致性 |
| [FLUX Pro Ultra](./flux.md) | 4K 写实(同档)+ 国内可用 + 自部署 |
| [即梦](./jimeng.md) | 国产 + 完全免费 |
| GPT-5 image | 已经付 ChatGPT Plus / Pro 顺便用 |

---

## 价格分析

### 个人用户

通过 Gemini 订阅:
- **Free**:每天少量配额
- **Google One AI Premium $20/月**:**图片生成 + 视频生成 + Gemini Advanced + 2TB Drive**(性价比之王)

### API(开发者)

| 模型 | 单图 |
|------|------|
| Imagen 4 (standard) | ~$0.03-0.05 |
| Imagen 4 Ultra | ~$0.06-0.10 |
| Nano Banana 编辑 | ~$0.05 |

### 我的预算建议

```
试水 / 偶尔玩:                 AI Studio 免费档 + Gemini App Free
内容创作 + 多模态:               $20/月 Google One AI Premium(性价比之王)
开发者 / API:                   按用量,几美元起
商业批量:                       Vertex AI,谈量级折扣
```

**Google One AI Premium $20 比单买 Midjourney $30 划算** —— 你同时拿 Gemini 模型 + 4K 写实图 + 视频(Veo)+ 2TB 存储。

---

## 国内可用性(🟡)

同 Gemini:
- 🟡 需要海外网络 + Google 账号 + 海外卡
- 🟡 通过 Cherry Studio / 第三方平台中转可用(注意数据)
- 🟡 AI Studio 海外网络 + Google 账号即可,免费档够用

**国内开发者实际推荐**:
- 真要 Nano Banana → 折腾 Google 账号(同 Gemini)
- 不愿折腾 → FLUX 国内 API / 即梦

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-04 | Imagen 3 | 仍落后 Midjourney V6 |
| 2025-09 | **LMArena 代号 nano-banana 出圈** | 行业地震,Google 突破口 |
| 2025-12 | Imagen 4 / Gemini 2.5 Image 正式版 | 4K 写实成熟 |
| 2026-02 | **Nano Banana Pro + image edit** | 看图改图能力补齐 |
| 2026-04 | 集成 Gemini 3 + Workspace 全套 | 生态闭环 |

---

## 一段判断

Nano Banana 是**2025 末 - 2026 初最被严重低估的图像 AI**。
- 写实 / 文字 / 编辑能力实际不输 Midjourney V7 / FLUX Ultra
- 但**绑死 Gemini 生态 + 中国大陆访问难** → C 端讨论度低
- "Nano Banana"这个代号过于戏谑,正式品牌力不强

**对能访问 Gemini 的用户**:Nano Banana 是**写实 + 文字 + 看图改图**的最优单点选项。
**Google One AI Premium $20** 这套订阅 + 它附带的图像生成,**可能是 2026 年 AI 订阅性价比天花板**。

---

## 拓展阅读

- 官方:[Gemini App](https://gemini.google.com)
- 官方:[Imagen 4 docs](https://deepmind.google/technologies/imagen-4/)
- API:[AI Studio](https://aistudio.google.com)
- 评测:[LMArena 图像榜](https://lmarena.ai/leaderboard)

---

[← 回到 image-gen](./README.md)
