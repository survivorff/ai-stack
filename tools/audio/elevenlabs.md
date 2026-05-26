<!--
---
type: tool
slug: elevenlabs
name: ElevenLabs
category: audio
url: https://elevenlabs.io
maker: ElevenLabs
pricing: freemium
price_range: $0-330/月
china_availability: 🟡
modalities:
  - audio
strengths:
  - 英文 TTS / 语音克隆全行业第一
  - 多语言支持(30+ 语言)
  - 情感 / 语气控制最精细
  - 配音生态成熟(影视 / 出版社用)
  - 无声电影配音(Dubbing)
weaknesses:
  - 中文 vs MiniMax Speech-02 略弱
  - 国内访问门槛(海外卡 / IP)
  - 价格贵(高质量需要付费档)
  - 商用名人 / 真人需获授权
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: 英文 TTS 行业标准,生态最成熟
  - date: 2024-09
    tier: S
    reason: 长期 S 档
recommended_for_scenarios:
  - voice-over
  - short-video
  - podcast-production
alternatives:
  - speech-02
  - openvoice
  - cosyvoice
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# ElevenLabs

> AI 语音合成 / 克隆的行业标准。**英文 TTS 全行业第一,多语言支持广**。
> Tier S。**配音 / 有声书 / 播客 / 视频旁白**的 default 选择。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [ElevenLabs](https://elevenlabs.io)(美国) |
| **核心能力** | TTS(文本转语音)+ Voice Clone(声音克隆)+ Dubbing(配音翻译) |
| **支持语言** | 30+ 语言(包括中文) |
| **国内可用性** | 🟡 海外 IP + Stripe 卡 |

---

## Tier 评级:S

**评级理由**:
- **英文 TTS 行业标准**:自然度 / 情感控制 / 多说话人,**所有海外 podcast / 视频 / 出版社的 default**
- **声音克隆**:30 秒样本能克隆出可用的声音
- **多语言支持广**:虽然中文不是最强,**30+ 语言全有**
- **Dubbing(影视翻译)**:把英文视频自动翻译并生成同人声的多语言版本

> **不是无短板**:
> - **中文 vs MiniMax Speech-02 略弱**
> - **国内访问门槛**
> - **价格贵**

---

## 它最适合做什么

### ✅ 英文 podcast / 有声书 / 视频旁白

- 英文播客主持
- 有声书旁白
- YouTube 视频旁白
- 公司宣传片旁白

英文场景:**ElevenLabs 是 default,没有第二选项**。

### ✅ 多语言配音 / 翻译

`Dubbing` 功能:
- 上传英文视频 / 音频
- 选目标语言(中 / 日 / 韩 / 西 / 法 / 德等)
- AI 翻译 + 用同人声生成目标语言

**对出海创作者 / 多语言内容**:这条几乎是独家。

### ✅ 个人声音克隆

30 秒样本 → 可用的克隆声音:
- 给自己不会读的语言"配音"
- 24/7 用自己声音生产内容
- 紧急 / 远程时仍能"用自己声音"

### ✅ 影视 / 出版业

ElevenLabs 在专业领域生态最深:
- Spotify / Penguin Random House / 多家出版社签约
- 影视配音工具链集成
- 专业配音师都在用(辅助而非取代)

---

## 它**不擅长**什么

### ❌ 中文 TTS 顶级

中文场景:**MiniMax Speech-02 自然度 + 情感细腻度**胜过 ElevenLabs。
中文项目 → Speech-02。

### ❌ 极致省钱 + 国内可用

- 价格:$5-330/月
- 国内访问 + 海外卡 / IP
- 国内替代:Speech-02 / 字节火山引擎 TTS

国内 + 预算紧 → Speech-02 完全够。

### ❌ 唱歌

ElevenLabs 主做"说话",**唱歌仍弱**。
唱歌 → [Suno](./suno.md)。

### ❌ 音效 / Sound Effects(部分)

ElevenLabs 主要"语音",音效虽然有(Sound Effects 模型)但**不是该工具核心**。
专业音效 → AudioGen / 商业音效库。

---

## 真实使用 tips

### 1. Voice Library 是宝藏

ElevenLabs 自带 Voice Library:
- 几千个用户分享的声音
- 各种风格 / 语言 / 年龄 / 性别
- 大多免费用

**新手不要急着克隆自己声音,先在 Library 找到合适的**。

### 2. Voice Settings 调情感

每个声音有 Settings:
- **Stability**(稳定性):高 = 平稳,低 = 变化多
- **Similarity**(相似度):高 = 接近原声,低 = 更自然
- **Style**(风格强度):情感表达力度

实战调试 5-10 分钟,效果差异巨大。

### 3. 文本要加标点 + 停顿

```
正常文本:他说,"今天天气真好。" 然后笑了。

更好:他说,"今天天气真好。"——然后笑了。

ElevenLabs 会"读" — 标点直接影响节奏。
```

### 4. 长文本分段处理

ElevenLabs 单次有字数限制(看档位)。
长有声书:**自动分段 + 拼接** —— Library 里有 Project 工作流。

### 5. 克隆声音道德 / 合规

克隆别人声音(包括公众人物)→ **大多场景违规**。
克隆自己 → 完全 OK。
克隆已故公众人物 → 法律灰色,慎用。

### 6. 国内合理替代

中文场景:
- **MiniMax Speech-02**:中文 TTS 国产第一,情感细腻
- **字节火山引擎 TTS**:声音库丰富,集成抖音 / 飞书
- **Cosyvoice / OpenVoice**:开源可自部署

英文场景:**ElevenLabs 仍是首选**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [MiniMax Speech-02](../foundation-models/minimax.md) | 中文 / 国内 / 完全免费 |
| 字节火山引擎 TTS | 国内 + 抖音 / 飞书生态 |
| OpenVoice / Cosyvoice | 开源 / 自部署 / 隐私 |
| Play.ht / Murf | 海外二线,价格略低 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | $0 | 10K 字符 / 月,试水 |
| **Starter** | $5/月 | 30K + 即时克隆 |
| **Creator** | $22/月 | 100K + Dubbing |
| **Pro** | $99/月 | 500K + 商用全套 |
| **Scale** | $330/月 | 2M + 团队 + audit |

### 我的预算建议

```
试水:                       Free 10K
偶尔生成 / 个人:             Starter $5
内容创作者主力:              Creator $22
公司 / 商用:                 Pro $99 起
出版 / 大量 / 多语言:        Scale $330
```

---

## 国内可用性(🟡)

- 🟡 海外 IP + Stripe 卡
- 🟡 通过 Cherry Studio / Web 中转(数据风险)
- 🟡 不愿折腾 → MiniMax Speech-02

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022-09 | ElevenLabs 起步 | 早期 AI TTS 玩家 |
| 2023-04 | Voice Cloning | 30 秒克隆引爆行业 |
| 2024-04 | **Multilingual v2** | 多语言成熟 |
| 2024-12 | Dubbing | 视频翻译功能化 |
| 2025-09 | Sound Effects | 扩音效线 |
| 2026-02 | Voice 3.0 + 情感细腻度 | 体感越来越像真人 |

---

## 拓展阅读

- 官方:[ElevenLabs](https://elevenlabs.io)
- 文档:[ElevenLabs Docs](https://elevenlabs.io/docs)

---

[← 回到 audio](./README.md)
