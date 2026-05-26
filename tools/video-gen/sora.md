<!--
---
type: tool
slug: sora
name: Sora
category: video-gen
url: https://sora.com
maker: OpenAI
pricing: paid
price_range: 含在 ChatGPT Plus/Pro($20-200)
china_availability: 🟡
modalities:
  - video
  - image
strengths:
  - 物理一致性 / 真实感全行业第一
  - 长视频(60 秒)质量保持
  - 角色 / 场景一致性
  - 集成在 ChatGPT,Plus 用户白拿
weaknesses:
  - 国内访问受限(同 OpenAI)
  - 内容审核严(真人 / 商业 logo / 暴力)
  - 商用 license 有限制
  - 价格高(需要 ChatGPT Plus 起)
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: Sora 2 物理 + 真实 + 长视频三合一
  - date: 2024-12
    tier: A
    reason: Sora 1 demo 强但实际不可用
recommended_for_scenarios:
  - short-video
  - cover-image
  - marketing-image
alternatives:
  - veo
  - kling
  - hailuo
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Sora

> OpenAI 出的文生视频。**Sora 2 是 2026 年消费级 AI 视频的事实标杆**。
> Tier S。物理一致性 / 真实感 / 长视频质量保持,**三方面都是行业第一**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [OpenAI](https://openai.com) |
| **当前版本(2026-05)** | **Sora 2**(2025-09 集成进 ChatGPT) |
| **形态** | [sora.com](https://sora.com) Web + ChatGPT App |
| **支持时长** | 5 秒 / 10 秒 / 20 秒 / 60 秒(Pro) |
| **国内可用性** | 🟡 同 ChatGPT |

---

## Tier 评级:S

**评级理由**:
- **物理一致性第一**:水流、布料、人体动作、物体碰撞,Sora 2 比 Veo 3 / Kling 3 都更稳
- **长视频质量保持**:60 秒视频里角色 / 场景 / 风格不漂移,**vs 对手的 5-10 秒明显升一档**
- **角色一致性**:同一对话里多次生成的视频可以保持同一角色
- **ChatGPT 用户白拿**:Plus / Pro 用户**完全集成**

> 不是无短板:
> - **国内访问** vs Kling / Hailuo 仍麻烦
> - **内容审核**(真人 / 商业 logo / 暴力 / 政治) Sora 严于对手
> - **商用 license** 有限制(细则见 OpenAI 政策)

---

## 它最适合做什么

### ✅ 真实感 / 物理感的短视频

- 自然现象(水 / 火 / 烟 / 风)
- 人物动作(走路 / 跑 / 坐下)
- 环境氛围(咖啡馆 / 雨夜 / 黄昏)

Sora 2 的物理感**最不"AI"**。

适合:
- [短视频脚本 + 制作](../../scenarios/short-video.md)
- [营销 / 广告概念片](../../scenarios/marketing-image.md)

### ✅ 长视频(60 秒)

竞品(Kling / Veo / Hailuo)主要 5-10 秒,**60 秒里质量保持** Sora 仍是顶尖。
- 短剧片段
- 营销 banner 动画
- 故事叙述类内容

### ✅ 角色 / 场景一致性

ChatGPT 里同一对话:
- 第一个视频建立角色
- 后续视频保持角色 / 风格 / 场景

**对手 Kling / Hailuo 也在做但 Sora 仍胜**。

### ✅ ChatGPT Plus / Pro 用户

**已经付 ChatGPT** → Sora 几乎免费送:
- Plus($20):有限额视频生成
- Pro($200):大额度 + 60 秒

**不需要单独再买 Veo / Kling 订阅**。

---

## 它**不擅长**什么

### ❌ 真人 / 名人 / 商业 logo

OpenAI 政策严:
- 不能"生成特定真人"(尤其名人)
- 不能"嵌入真实品牌 logo"
- 不能"暴力 / 武器 / 政治"

商用广告(要真人 / 真品牌)→ 切 [Veo](./veo.md) / [Kling](./kling.md)。

### ❌ 国内零门槛

需海外身份 + 海外卡 + 稳定网络。
国内创作者 → [Kling](./kling.md) / [Hailuo](./hailuo.md) 国产替代。

### ❌ 极致省钱

Sora 走 ChatGPT Pro($200/月)起获得无限,Plus 只够偶尔玩。
预算紧 → 国产 Kling / Hailuo 免费档。

### ❌ 极致艺术风格 / 二次元

Sora 偏"真实感" → 二次元 / 国漫 / 极风格化输出仍不如:
- [Kling](./kling.md)(国产风格更广)
- 二次元 / 动漫 → 即梦视频 / Hailuo

### ❌ 商业素材库代替

Sora 输出**仍偶尔有 AI 痕迹**(尤其面部 / 手指 / 文字)。
真"商业级广告投放"还是要拍摄 + AI 辅助,**纯 AI 输出仍未到代替专业拍摄**。

---

## 真实使用 tips

### 1. 提示词节奏

Sora prompt 重视"运镜 + 时序":
```
开头 0-2 秒:固定镜头,女子站在窗边
2-4 秒:镜头慢慢推近,女子转身
4-5 秒:女子走出画面,镜头继续推到桌上的咖啡

风格:电影感,黄昏暖光,浅景深
```

**比单纯描述"画面"质量高得多**。

### 2. 不要让 Sora 写文字

Sora 生成的视频**文字部分仍频繁错**(招牌 / 字幕 / 标签)。
要清晰文字 → 用 [Nano Banana / FLUX 出静态图](../image-gen/) 再合成视频。

### 3. 60 秒 ≠ 一镜到底

Sora 2 的 "60 秒" 实际是**多个 5-10 秒片段拼接**(模型自动处理过渡)。
看着流畅但不是连续渲染。
**剪辑要求高 → 仍要拍 / 用专业剪辑**。

### 4. 角色一致性用 "Character" 功能

Sora 2 有"角色"功能:
- 上传一张参考图(or 之前生成的图)
- 后续视频用这个角色

**比 Kling 的 "首尾帧" 工作流方便**。

### 5. 音效 / BGM 要后期加

Sora 2 自带的"音效"质量**仍不稳**。
工作流:
- Sora 出无声画面
- [Suno / Eleven Labs](../audio/) 加 BGM / 配音
- 剪映 / 达芬奇 后期合成

### 6. 国内"想用 Sora" 的合理路径

- 海外身份 + ChatGPT Pro($200)= 直接玩
- 不愿折腾 → **直接 Kling / Hailuo,国产已经追到 Sora 1.5 档**
- 真要 Sora 出片 → 走第三方 OpenAI 代理(注意数据风险)

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Veo 3](./veo.md) | YouTube / 营销广告 / Google 系 |
| [Kling 3](./kling.md) | 国产首选 / 中文 / 风格广 |
| [Hailuo 02](./hailuo.md) | 国产 + 物理感强(MiniMax)|
| Runway Gen-4 | 镜头控制 / 专业视频流程 |

---

## 价格分析

通过 ChatGPT 订阅:

| 档位 | 价格 | Sora 配额 |
|------|------|---------|
| **Free** | $0 | 极少 |
| **Plus** | $20/月 | 有限 5-10 秒视频 / 月 |
| **Pro** | **$200/月** | **大量 + 20-60 秒 + 高分辨率** |

### 我的预算建议

```
偶尔玩 / 试水:                   Plus $20,够偶尔
内容创作 + Sora 重度:             Pro $200(真要全开)
省钱 / 国产替代:                  Kling / Hailuo 免费档
```

---

## 国内可用性(🟡)

- 🟡 海外网络 + 海外手机号 + 海外卡(同 ChatGPT)
- 🟡 通过 Cherry Studio / 第三方平台中转(数据风险)

国内开发者实际推荐:**Kling / Hailuo / 即梦视频**,国产已追到能用程度。
真要 Sora 风格的物理 / 真实感 → 折腾代理是值得的。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-02 | **Sora 1 demo** | 行业地震,但近一年没产品化 |
| 2025-09 | **Sora 2 + 集成 ChatGPT** | 终于可用,直接拉开和对手差距 |
| 2025-12 | 60 秒长视频 | 长视频质量第一 |
| 2026-02 | Character / Style 一致性 | 系列内容生产可行 |
| 2026-04 | API(Vertex AI / OpenAI API) | 开发者集成 |

---

## 拓展阅读

- 官方:[Sora.com](https://sora.com)
- 官方:[Sora 介绍](https://openai.com/sora)

---

[← 回到 video-gen](./README.md)
