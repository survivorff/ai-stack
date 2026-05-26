<!--
---
type: tool
slug: veo
name: Veo
category: video-gen
url: https://deepmind.google/technologies/veo
maker: Google DeepMind
pricing: paid
price_range: 含在 Gemini Advanced $20 / Vertex AI 按量
china_availability: 🟡
modalities:
  - video
  - audio
strengths:
  - 镜头语言 / 电影感强
  - 原生音效 / 同步音轨(2025-09 起)
  - YouTube / Google 生态深度
  - Gemini Advanced $20 用户白拿
  - 商用 license 比 Sora 宽松
weaknesses:
  - 国内访问受限
  - 物理感稍弱于 Sora 2
  - 仍以 8 秒为主(长视频 vs Sora 2 弱)
  - 二次元 / 风格化弱
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: Veo 3 + 原生音效 + 性价比拉满,YouTube 创作者首选
  - date: 2024-12
    tier: A-
    reason: Veo 2 起步,落后 Sora demo
recommended_for_scenarios:
  - short-video
  - marketing-image
  - cover-image
alternatives:
  - sora
  - kling
  - hailuo
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Veo

> Google DeepMind 出的文生视频。**和 Sora 2 同档,但商用更宽 + Gemini 用户白拿**。
> Tier A+。**电影感 + 原生音效 + YouTube 生态**是它的三个特色。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Google DeepMind](https://deepmind.google) |
| **当前版本(2026-05)** | **Veo 3** + Veo 3 Fast(性价比版) |
| **形态** | Gemini App / AI Studio / Vertex AI / YouTube Shorts 集成 |
| **支持时长** | 5 秒 / 8 秒(标准)/ 15 秒(Pro) |
| **国内可用性** | 🟡 同 Gemini |

---

## Tier 评级:A+

**评级理由**:
- **Veo 3 综合能力对齐 Sora 2**(各有所长 — Sora 物理 / Veo 电影感)
- **原生音效**:Veo 3 是**第一个原生支持视频 + 同步音效 / 对话**的消费级模型
- **YouTube 集成**:YouTube Shorts 直接接入,创作者一键发布
- **Gemini Advanced $20 用户白拿**:同 Nano Banana 逻辑,**$20 含视频 + 4K 图片 + Gemini Pro**
- **商用 license 比 Sora 宽**:可以用真实 logo / 商业素材

**不是 S 的原因**:
- **物理感** vs Sora 2 略弱
- **长视频** Sora 2 60 秒 vs Veo 3 主要 8-15 秒
- **国内访问** 同 Gemini
- **二次元 / 极风格化**弱

---

## 它最适合做什么

### ✅ YouTube / 营销广告短视频

- YouTube Shorts(直接发布)
- TikTok / Instagram Reel
- 营销广告
- 产品介绍

Veo 3 镜头语言 + 原生音效:**短视频自动化生产线**最优单点。

适合:
- [短视频](../../scenarios/short-video.md)
- [营销 / 广告](../../scenarios/marketing-image.md)

### ✅ 原生音效场景(独家)

Veo 3 你在 prompt 里描述音效:
```
A cat walks across a wooden floor, claws clicking softly,
purrs heard intermittently, ambient cafe noise in the background.
```

→ 输出视频自带这些音效 / 对话。

**对手 Sora / Kling / Hailuo 都需要后期加音**。
**Veo 3 是唯一原生 + 同步**。

### ✅ Gemini / Workspace 用户

$20/月 Google One AI Premium:
- Gemini 3 Pro
- Nano Banana(图)
- Veo 3(视频)
- 2TB Drive

**性价比 vs ChatGPT Pro $200 单算 Sora**,Veo 路线更划算。

### ✅ 商用 / 广告(license 较宽)

Google 政策对 Veo 3 商用稍宽:
- 商业 logo / 真实品牌可用(看具体条款)
- 用户上传内容可生成(Vertex AI)
- 较多企业 / 广告公司在用

---

## 它**不擅长**什么

### ❌ 长视频(60 秒+)

Sora 2 一镜 60 秒。
Veo 3 主要 8-15 秒。
长视频 → Sora 2。

### ❌ 极致物理感

Sora 2 在水 / 火 / 人物动作的物理一致性仍胜半档。
真实感最强的画面 → Sora 2。

### ❌ 二次元 / 风格化

Veo 偏"真实电影感",二次元 / 国漫 / 浮世绘风格弱。
风格化 → Kling / 即梦 / Niji。

### ❌ 国内零门槛

同 Gemini,需要海外网络 + 卡。

---

## 真实使用 tips

### 1. Veo 3 vs Veo 3 Fast

- **Veo 3**:质量旗舰
- **Veo 3 Fast**:速度 3-5 倍快 + 价格 1/3 + 质量略降

实战:
- 内容快速试错 → Fast
- 最终输出 → 旗舰

### 2. 原生音效是 Veo 杀手锏

prompt 里**显式写音效**:
```
画面:[描述]
音效:
- 0-2s 风声
- 3s 门铃响
- 4-5s 脚步声 + 咖啡机声
- 整体:轻柔 jazz 背景音
```

Veo 3 出片**自带这些音效**,**节省后期 80% 时间**。

### 3. YouTube Shorts 直接发

Gemini App → 生成 Veo 视频 → "发到 YouTube Shorts"
- 一键完成
- 自动加 hashtag(基于内容)
- 自动加描述

**对手 Sora 没这条直通**。

### 4. 中文 prompt 也能用

Veo 3 中文 prompt 理解 OK,但输出最稳的还是英文 prompt。
中文项目:**先中文写,再让 AI 翻成精炼英文给 Veo**。

### 5. AI Studio 免费档

[Google AI Studio](https://aistudio.google.com) 给个人开发者:
- Veo 3 Fast 部分免费配额
- 适合个人项目玩

### 6. 配合 Nano Banana 工作流

```
Nano Banana(出 4K 静态图作为视频"首帧")
    ↓
Veo 3(基于首帧生成动态视频 + 音效)
    ↓
YouTube Shorts(一键发布)
```

**全在 Gemini 生态闭环**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Sora 2](./sora.md) | 物理感 / 长视频 / 已付 ChatGPT |
| [Kling 3](./kling.md) | 国产首选 / 中文 / 风格广 |
| [Hailuo 02](./hailuo.md) | 国产 + 物理感(MiniMax) |
| Runway Gen-4 | 镜头精确控制 / 专业视频流程 |

---

## 价格分析

| 渠道 | 价格 | 视频配额 |
|------|------|---------|
| **Gemini Free** | $0 | 极少 |
| **Google One AI Premium** | **$20/月** | 充足(Veo 3 Fast 偏多 + Veo 3 旗舰有限额) |
| **AI Studio** | $0 | Veo 3 Fast 免费试 |
| **Vertex AI** | API | 企业级,按量 |

### 我的预算建议

```
个人 / 偶尔玩:                     AI Studio 免费档够
创作者:                            $20 Google One AI Premium(性价比最优)
商业批量:                          Vertex AI
ChatGPT 用户已经付 $200:           用 Sora,不必换
```

---

## 国内可用性(🟡)

同 Gemini,需要海外身份。
国内开发者:Kling / Hailuo / 即梦视频(国产)。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-05 | Veo 1 公布 | 落后 Sora demo 一档 |
| 2024-12 | **Veo 2** | 综合追近 Sora |
| 2025-04 | Veo 2 + I/O 大版本 | 创作者使用上线 |
| 2025-09 | **Veo 3 + 原生音效**(独家) | 行业首个 |
| 2025-12 | YouTube Shorts 集成 | 创作者闭环 |
| 2026-02 | Veo 3 Fast(性价比版) | 价格战 |

---

## 一句话决策

```
你已经付 ChatGPT Pro $200       → Sora 2(免费送)
你已经付 Gemini AI Premium $20  → Veo 3(免费送,且性价比更高)
都没付,新订阅:                   → Gemini AI Premium $20(综合性价比第一)
国内 + 不愿折腾:                  → Kling / Hailuo 国产
```

---

## 拓展阅读

- 官方:[Veo 介绍](https://deepmind.google/technologies/veo/)
- 工具:[Gemini App](https://gemini.google.com)
- API:[AI Studio](https://aistudio.google.com)

---

[← 回到 video-gen](./README.md)
