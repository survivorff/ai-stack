<!--
---
type: tool
slug: speech-02
name: Speech-02(MiniMax)
category: audio
url: https://platform.minimax.io
maker: MiniMax
pricing: freemium
price_range: ¥0(海螺 App 免费试)/ API ¥150-300/百万字符
china_availability: 🟢
modalities:
  - audio
strengths:
  - 中文 TTS / 克隆国产第一
  - 情感细腻度国产顶尖
  - 国内直连 + 免费试用
  - 30 秒样本即可克隆
  - 海螺 App 内集成可玩
weaknesses:
  - 英文 vs ElevenLabs 略弱
  - 商用 license 走 API
  - 海外用户认知度低
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 中文 TTS 国产第一 + 国内可用 + 性价比好
  - date: 2025-09
    tier: A
    reason: Speech-02 发布
recommended_for_scenarios:
  - voice-over
  - short-video
  - podcast-production
alternatives:
  - elevenlabs
  - cosyvoice
  - 字节火山引擎 TTS
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Speech-02(MiniMax)

> MiniMax 出的 TTS / 语音克隆。**中文 TTS 国产第一,情感细腻度顶级**。
> Tier A+。**国内创作者做配音 / 数字人 / 有声内容的 default**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [MiniMax](https://platform.minimax.io) |
| **当前版本(2026-05)** | Speech-02 + 海螺 AI 集成 |
| **形态** | 海螺 App / Web 试 + MiniMax 开放平台 API |
| **国内可用性** | 🟢 完全直连 |

---

## Tier 评级:A+

**评级理由**:
- **中文 TTS 国产第一**:**自然度 + 情感细腻 + 多角色音色** 国产没对手
- **国内直连 + 免费试**:海螺 App 直接玩
- **30 秒克隆**:同 ElevenLabs 标准,质量好
- **配套 Hailuo 视频 + Music-02**:MiniMax 多模态闭环
- **被 ElevenLabs 团队公开认可**(2025 行业内"中文最好"评价)

**不是 S 的原因**:
- **英文 vs ElevenLabs**仍略弱
- **海外用户认知度** vs ElevenLabs 低很多
- **商用要走 API + 协议** 流程

---

## 它最适合做什么

### ✅ 中文短视频 / 自媒体配音

- 抖音 / 小红书 / B 站旁白
- 公众号 / 知乎语音版
- 课件 / 培训视频
- 个人 vlog 配音

国内创作者:**Speech-02 是中文 TTS 的 default**。

### ✅ 中文有声书 / 播客

- 网文 / 小说有声化
- 知识付费课程
- 个人播客
- 企业培训音频

中文长篇 TTS:Speech-02 vs ElevenLabs 实测胜出。

### ✅ AI 数字人配音

数字人 / AI 主播:
- 海螺 / 即梦 / 腾讯智影 出形象
- Speech-02 配音
- 完美闭环

### ✅ 多语言项目(以中文为主)

Speech-02 也支持英 / 日 / 韩等,**中文 + 多语言混合项目** 一站式。
纯英文项目仍切 ElevenLabs。

### ✅ 配套 MiniMax 全家桶

```
M2.5(脚本)
  → Hailuo 02(视频)
  → Speech-02(配音)
  → Music-02(BGM)
```

**单平台完整生产线**,**国产唯一一家做到这种闭环**。

---

## 它**不擅长**什么

### ❌ 英文场景顶级质量

ElevenLabs 仍是英文 TTS 第一档。
英文 podcast / YouTube 旁白:ElevenLabs。

### ❌ 海外用户协作

海外认知度低,做海外项目其他人感觉陌生。

### ❌ 极复杂配音流程(影视级)

专业影视配音 / 大型有声书工作室仍倾向 ElevenLabs(生态深)。

---

## 真实使用 tips

### 1. 海螺 App 体验先

[海螺 AI](https://hailuoai.com) Web 端右上角"音色克隆":
- 上传 30 秒 wav
- 立即生成可用克隆
- 多种音色试听

**完全免费体验**。

### 2. 情感参数调试

Speech-02 API 支持情感参数:
- happy / sad / angry / fearful / surprised / neutral
- 可控强度(0.0-1.0)

```python
client.audio.speech.create(
    voice="custom_clone_id",
    text="...",
    emotion="happy",
    emotion_intensity=0.8
)
```

**做有戏剧张力的配音 / 有声书**:这个能力比 ElevenLabs 简洁。

### 3. 长文本自动分段

API 自动处理长文本(分段 + 拼接):
- 输入 1 万字
- API 内部分多段处理
- 输出连续音频(标点 / 停顿自然)

适合**整本有声书 / 长课程**。

### 4. Cosyvoice / 字节 TTS 也值得对比

国产 TTS 主要 3 家:
- **Speech-02(MiniMax)**:综合最强 + 情感细腻
- **字节火山引擎 TTS**:抖音 / 飞书生态 + 海量音色库
- **Cosyvoice(阿里 / 开源)**:可自部署

**Speech-02 默认**,**字节用户走火山引擎**,**自部署党 Cosyvoice**。

### 5. 商用需走 API

海螺 App 试用版**不允许商用**。
商用项目走:
- MiniMax 开放平台 API
- 商务签合同(明确 license)

### 6. 配 Hailuo 视频是杀手组合

```
Hailuo 02(视频)
  + Speech-02(克隆你的声音 + 配音)
  → AI 数字人(用你声音 + 你形象)
```

成本极低 + 完成度高。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [ElevenLabs](./elevenlabs.md) | 英文场景 + 海外协作 + 多语言 |
| 字节火山引擎 TTS | 抖音 / 飞书生态 + 音色库丰富 |
| Cosyvoice / OpenVoice | 自部署 + 隐私 |
| 讯飞 TTS | 老牌 + 政企 |

---

## 价格分析

### 个人

- **海螺 AI App / Web**:**免费试**(部分功能限额)

### API(开发者 / 商用)

| 模型 | 价格 |
|------|------|
| Speech-02 标准 | ¥150 / 百万字符 |
| Speech-02 Pro | ¥300 / 百万字符 |

### 我的预算建议

```
个人 / 玩玩:                海螺 App 免费
内容创作:                   API,几十块够内容创作者一个月
商用 / 课程 / 有声书:        API + 走商务
出海:                       Speech-02 + ElevenLabs(双卡)
```

---

## 国内可用性(🟢)

- ✅ 完全直连
- ✅ 微信 / 支付宝
- ✅ 中文母语
- ✅ MiniMax 全家桶联动

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-09 | MiniMax 早期 TTS | 起步 |
| 2025-04 | Speech-02 公开 | 中文 TTS 国产第一档建立 |
| 2025-09 | 情感参数 + 多语言 | 工具链补齐 |
| 2026-02 | 与 Hailuo / Music 闭环 | 多模态生产线成熟 |

---

## 拓展阅读

- 官方:[海螺 AI](https://hailuoai.com)
- 平台:[MiniMax 开放平台](https://platform.minimax.io)

---

[← 回到 audio](./README.md)
