<!--
---
type: tool
slug: midjourney
name: Midjourney
category: image-gen
url: https://www.midjourney.com
maker: Midjourney Inc.
pricing: paid
price_range: $10-120/月
china_availability: 🟡
modalities:
  - image
strengths:
  - 艺术 / 美感天花板
  - 风格一致性 + 角色一致性
  - V7 模型质感"独一档"
  - Style Reference 强大
weaknesses:
  - 国内访问 + 海外卡门槛
  - 之前主要 Discord(2024 才有 Web)
  - 控制精确度仍弱于 ControlNet 派
  - 不擅长生成清晰文字
tier: S
tier_history:
  - date: 2026-05
    tier: S
    reason: V7 美学第一,生态成熟
  - date: 2024-09
    tier: S
    reason: V6 已确立第一档
recommended_for_scenarios:
  - cover-image
  - marketing-image
  - logo-design
  - illustration
alternatives:
  - flux
  - nano-banana
  - jimeng
  - dall-e
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# Midjourney

> 文生图领域的"美感天花板"。**艺术性 / 风格化场景仍然没有对手**。
> Tier S。**v7 是 2026 年消费级 AI 图像的 default 选择(对追求美学的用户)**。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Midjourney Inc.](https://www.midjourney.com)(独立公司,无外部融资) |
| **当前版本(2026-05)** | **V7** + Niji 7(动漫专属)+ Style Reference v3 |
| **形态** | Web(主) + Discord(原始入口仍可用) |
| **国内可用性** | 🟡 海外 IP + 海外卡 + Discord 账号 |

---

## Tier 评级:S

**评级理由**:
- **美感天花板**:V7 的艺术质感、光影、构图,**没有任何对手追上**(FLUX 写实更强,但艺术性 Midjourney 仍胜)
- **风格一致性**:Style Reference 让"做 50 张同风格图"成为可能(配套品牌 / 系列内容必备)
- **角色一致性**:V7 的 Character Reference 在多张图里保持同一个人物
- **Niji 7 是动漫领域的独立王者**

> **不是无短板**:
> - 控制精确度(ControlNet / inpaint / 局部编辑)弱于 [FLUX](./flux.md) 等开源派
> - 文字渲染不如 [Ideogram](./ideogram.md)
> - 国内可用性 🟡
> - 价格不便宜
> 但**它在"美 + 风格 + 一致性" 三角上仍是 S**。

---

## 它最适合做什么

### ✅ 高质量营销图 / 海报

- 公众号封面
- 产品发布 banner
- 营销活动主视觉
- 品牌情绪图

V7 配 Style Reference,你能**用 50 张图保持同一审美 / 配色 / 风格**。
这条**对品牌运营是杀手锏**。

适合:
- [封面图](../../scenarios/cover-image.md)
- [营销图](../../scenarios/marketing-image.md)
- [Logo 设计](../../scenarios/logo-design.md)(参考图)

### ✅ 文章配图 / 博客插图

写长文 / 博客缺配图?Midjourney 5 分钟出 4 张候选。
对独立创作者 / 自媒体:Midjourney **效果远超免费版替代**。

### ✅ 角色 / 故事一致性

V7 的 Character Reference (`--cref`):
- 第一张图建立角色
- 后续图片用 cref 保持同一人物
- 多场景 / 多动作不变形

适合:
- 漫画 / 绘本
- 小说插图
- 品牌吉祥物

### ✅ 概念稿 / 设计灵感

UI / 产品 / 工业设计前期:让 Midjourney 出 50 张概念图找方向。
**比看 Pinterest 快 10 倍 + 可定制**。

### ✅ 动漫(Niji 7)

Niji 7 是 Midjourney 的动漫专属模型:
- 二次元 / 国漫 / 美漫风格全包
- 比 NovelAI / 即梦动漫风格更稳定

动漫 / 二次元创作:**Niji 7 是当下首选**。

---

## 它**不擅长**什么

### ❌ 文字渲染

V7 已经改善但**仍不如 Ideogram 3 / Nano Banana**。
做"图里要嵌入清晰文字"(海报标题 / Logo 文字)→ [Ideogram](./ideogram.md) / [Nano Banana](./nano-banana.md)。

### ❌ 精确控制(ControlNet 派任务)

要"和这张图同样姿势 / 同样构图 / 同样视角"的精确控制:
- Midjourney 的 cref / sref 是"参考"不是"约束"
- **FLUX + ControlNet 才是精确控制 default**

UI 设计 / 严肃工作流:FLUX / Stable Diffusion 派 + ControlNet。

### ❌ 真实写真 / 商品图

Midjourney 的"真实"仍带"AI 美感包浆"。
- 真人写真 / 商品摄影 → [FLUX Pro](./flux.md) / [Nano Banana Pro](./nano-banana.md)

### ❌ 国内"零门槛使用"

需要海外 IP + Discord / Web 账号 + 海外卡。
国内不愿折腾 → [即梦](./jimeng.md) / [Nano Banana](./nano-banana.md) 等国产 / 国内可用替代。

### ❌ 极致省钱

| 工具 | 月费 |
|------|------|
| **Midjourney Basic** | $10 |
| Midjourney Standard | $30 |
| Midjourney Pro | $60 |
| FLUX(自配 API) | 按用量,几美元起 |
| 即梦 / 文心一格 | 国内免费档 |

预算紧 → 国产免费 + FLUX API。

---

## 真实使用 tips

### 1. Style Reference 是 V6/V7 时代的隐藏皇冠

`--sref [图片URL]` 在 prompt 后:
- 保留你给的"参考图风格"
- 你描述新内容,风格继承

实战:
- 公众号系列封面 → 第 1 张定调,后续用 sref 复用
- 产品 banner 系列 → 同 sref,不同动作 / 不同视角
- 品牌一致性几乎免费

### 2. Character Reference (cref) 用法

`--cref [角色图URL] --cw 100`:
- cw 100 = 严格按角色细节
- cw 0 = 只参考脸,服装可变
- 配合 sref 风格 + cref 角色 = 系列内容生产线

### 3. Prompt 简短反而效果好

新手常常写:
> A beautiful detailed cinematic photo of a young Asian woman with long black hair sitting at a wooden table in a cozy cafe, warm lighting, depth of field, shot on Canon 5D, 8k, hyperrealistic, masterpiece...

V7 时代**这不是必要的**。简短 prompt + sref 反而更稳:
> Asian woman in a cozy Tokyo cafe, autumn light --sref [URL] --ar 16:9

**让 sref 决定风格,prompt 只描述内容**。

### 4. --ar 比例直接影响构图

- `--ar 16:9` 横屏(banner / 视频封面)
- `--ar 9:16` 竖屏(小红书 / 抖音 / 海报)
- `--ar 4:3` 经典摄影
- `--ar 1:1` 头像 / 社交方图
- `--ar 3:4` 杂志封面

不同比例 V7 输出**布局思路差异巨大** —— 选对比例事半功倍。

### 5. Web 版本 vs Discord

2024-2026 Midjourney 已经把主战场迁到 [Web](https://www.midjourney.com)。
- Web:可视化好,管理图集方便
- Discord:命令行高效,多账号 / 自动化方便

**新用户用 Web,工作流深用户保留 Discord**。

### 6. 国内合理玩法

国内用户:
- 海外 IP + Discord 账号 + 海外卡(Wise / 港卡)
- 或通过支持 Midjourney 的中转平台(注意数据风险)
- 实在没条件:**国产替代 [即梦 / Nano Banana / FLUX]**

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [FLUX Pro](./flux.md) | 真实感 / 精确控制 / API 自由 |
| [Nano Banana Pro](./nano-banana.md) | 4K 写实 / 文字嵌图 / Google 系 |
| [即梦](./jimeng.md) | 国产首选 / 中文 prompt / 国内可用 |
| [Ideogram 3](./ideogram.md) | 文字渲染 / 海报 |
| [Nijijourney](./midjourney.md) | 动漫专属(还是 Midjourney 的产品)|

---

## 价格分析

| 档位 | 月费 | 含什么 |
|------|------|------|
| **Basic** | **$10** | 200 张/月,fast hours |
| **Standard** | $30 | 15 fast hours/月 + 无限 relax |
| **Pro** | $60 | 30 fast hours + Stealth mode |
| **Mega** | $120 | 60 fast hours + 商业 |

### 我的预算建议

```
入门 / 偶尔玩:                 Basic $10
内容创作者 / 自媒体:           Standard $30
设计师 / 重度:                 Pro $60(含 stealth)
商业项目:                      Mega $120 起
```

**关键判断**:Standard $30 对内容创作者**性价比最优**(无限 relax 模式让你随便试)。

---

## 国内可用性(🟡)

- 🟡 需要海外 IP 稳定代理
- 🟡 需要海外卡 / Stripe 友好支付
- 🟡 Discord / Web 账号(如有 Google / Microsoft 账号能登录)

**国内开发者 / 创作者实际推荐**:
- 真要美感 → 折腾 Midjourney 是值得的
- 不想折腾 → 即梦 + Nano Banana(国内可用)的组合 80% 场景能替代

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022 | V1-V3 起步 | AI 文生图概念起步 |
| 2023-03 | V5 | 美感大跃进 |
| 2024-04 | **V6 + Niji 6** | 行业第一档地位确立 |
| 2024-09 | Web 版上线 | 不再只是 Discord |
| 2025-04 | V7 + Style Reference v2 | 一致性能力质变 |
| 2025-12 | Character Reference v2 | 多张图角色一致性 |
| 2026-02 | **Niji 7** | 动漫专属顶级 |
| 2026-04 | Style Reference v3 | 风格控制更精细 |

---

## 拓展阅读

- 官方:[Midjourney Web](https://www.midjourney.com)
- 官方:[Midjourney Docs](https://docs.midjourney.com/)
- Niji:[Nijijourney](https://nijijourney.com)
- 社区:[Reddit r/midjourney](https://reddit.com/r/midjourney)

---

[← 回到 image-gen](./README.md)
