<!--
---
type: tool
slug: flux
name: FLUX
category: image-gen
url: https://blackforestlabs.ai
maker: Black Forest Labs
pricing: paid
price_range: API 按用量(单图几分到几角钱)/ 部分版本开源
china_availability: 🟢
modalities:
  - image
strengths:
  - 真实感 / 摄影感第一档
  - 开源(Schnell / Dev)+ 闭源(Pro / Ultra)双线
  - 文字渲染好(超过 Midjourney)
  - 控制精准(ControlNet / inpaint 生态成熟)
  - 海量第三方平台接入
weaknesses:
  - 没有官方 C 端 App(主要走 API / 第三方平台)
  - 艺术性 / 风格化弱于 Midjourney
  - Flux Pro / Ultra 闭源,生态分裂
  - 提示词工程曲线
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 真实感天花板 + 开源/闭源双线 + 国内可用
  - date: 2024-09
    tier: A
    reason: Stable Diffusion 之后的"开源新王"
recommended_for_scenarios:
  - cover-image
  - marketing-image
  - logo-design
  - product-photography
alternatives:
  - midjourney
  - nano-banana
  - jimeng
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# FLUX

> Black Forest Labs(原 Stable Diffusion 团队出走)出的下一代文生图模型。**写实 / 摄影感 + 开源生态**第一档。
> Tier A+。**和 Midjourney 互补,不重叠**:Midjourney 主美学,FLUX 主真实。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [Black Forest Labs](https://blackforestlabs.ai)(原 Stable Diffusion 核心团队 2024 出走创立) |
| **当前版本(2026-05)** | FLUX 1.1 Pro / Pro Ultra · FLUX Dev(开源) · FLUX Schnell(开源蒸馏快速版) |
| **形态** | API + 第三方平台(Replicate / Cloudflare / fal.ai / 国内云厂商) + 自部署 |
| **国内可用性** | 🟢 多种渠道国内可用(国内云厂商接入,完全国内闭环) |

---

## Tier 评级:A+

**评级理由**:
- **真实感天花板**:产品摄影 / 商业写真 / 真实人物,FLUX Pro **超过 Midjourney**
- **文字渲染**:海报 / 标题 / 标签,FLUX 比 Midjourney 强
- **开源 + 闭源双线**:Schnell / Dev 完全开源(可自部署),Pro / Ultra 闭源高质量
- **生态最广**:几乎每个 AI 图像服务都接入 FLUX(Replicate / Cloudflare / fal.ai / 阿里云 / 火山引擎 / 腾讯云)
- **ControlNet / 精确控制**:开源生态有海量 LoRA / 工作流

**不是 S 的原因**:
- **没有官方 C 端 App**(主要走 API / 第三方平台,新手上手门槛)
- **艺术性 / 风格化** vs Midjourney 仍弱
- **Pro vs 开源版差距大**,生态有点分裂
- **提示词工程曲线**(开源版需要更多调参)

---

## 它最适合做什么

### ✅ 真实感 / 商业摄影感

- 产品图 / 电商
- 真实人物写真
- 食物 / 美妆 / 时尚
- 建筑 / 室内设计

FLUX Pro Ultra 出的图**有时直接能当摄影师拍的用**(2026 年 AI 视觉水平)。

适合:
- [产品 / 商业摄影](../../scenarios/product-photography.md)
- [营销图](../../scenarios/marketing-image.md)
- [封面图](../../scenarios/cover-image.md)

### ✅ 文字渲染(海报 / Logo)

FLUX 写"清晰文字"的能力**比 Midjourney 强一档**:
- "海报上的 BLACK FRIDAY" 字清晰
- Logo 文字部分稳定
- 标牌 / 招牌 / 字幕 用得动

做"图里要有清晰文字"的场景:**FLUX > Midjourney**。
**vs Ideogram**:Ideogram 仍是文字最强,但 FLUX 综合更好。

### ✅ 精确控制(ControlNet / inpaint)

FLUX 开源版生态:
- ControlNet(姿势 / 深度 / 线稿)
- inpaint(局部重绘)
- LoRA(角色 / 风格微调)

**严肃工作流(UI 设计 / 游戏美术 / 漫画工作室)**:FLUX 工作流是行业标准。

### ✅ API / 自动化大批量

工作流要"自动批量出图"(如电商一天 1000 张):
- FLUX API
- 脚本 / agent 调用
- 几分钱一张

Midjourney **不适合 API 调用**(主要是消费 / 创作),FLUX 是工业级。

### ✅ 自部署(隐私 / 商业 / 法律)

FLUX Dev / Schnell 开源:
- 4090 / A6000 单卡能跑
- 商业 license(Schnell:Apache 2.0;Dev:非商业但可申请商业)
- 数据完全不出公司

**对隐私 / 合规敏感的企业,FLUX 是 default**。

---

## 它**不擅长**什么

### ❌ 艺术 / 美学场景

- 概念艺术
- 插画 / 海报艺术性
- 情绪图 / 氛围图

→ Midjourney V7 仍是首选。

### ❌ 动漫 / 二次元

→ Niji 7 / NovelAI / 即梦动漫。FLUX 动漫风格"勉强行,不够好"。

### ❌ 一致性(Style / Character Reference)

Midjourney V7 的 sref / cref **生态成熟**。
FLUX 这块还在追(开源 LoRA 可以做但门槛高)。

### ❌ 新手"零门槛"

Midjourney 网页打开 → 输入 prompt → 出图。
FLUX 需要选平台(Replicate / fal.ai / ...)→ 注册 / 充值 / 查文档。

新手入门:**Midjourney / 即梦 / Nano Banana** 更友好。

---

## 真实使用 tips

### 1. 国内最方便走云厂商

- **阿里云百炼**:接 FLUX API,人民币付款
- **火山引擎**:接 FLUX,集成度高
- **腾讯云**:接 FLUX
- **Cloudflare Workers AI**:全球 + 便宜
- **国内中转平台**(注意选靠谱的,数据隐私)

新手:阿里云百炼是国内**接入 FLUX 最简单的路径**。

### 2. 海外开发者首选 fal.ai 或 Replicate

- [fal.ai](https://fal.ai):FLUX 调用便宜 + 速度快
- [Replicate](https://replicate.com):生态广,模型选择多
- 直接 [BFL API](https://api.bfl.ml):官方,价格中等

### 3. Pro vs Pro Ultra 区别

- **FLUX Pro**:质量高 + 价格中等(每张 $0.04-0.06)
- **FLUX Pro Ultra**:**4K 输出 + 极致细节**(每张 $0.08-0.12)

商业项目 → Ultra(细节够用);
社交媒体 / 内容 → Pro 即可。

### 4. 提示词写法和 Midjourney 不同

Midjourney 喜欢长复杂 prompt,FLUX 喜欢:
- **自然语言描述**(像写故事一样)
- 具体细节(光源 / 镜头 / 时间)
- 不需要堆叠"masterpiece, 8k, ultra detailed"

```
A young woman with short brown hair, wearing a beige trench coat,
walking through a Tokyo street at golden hour. The camera is at eye level,
shot with a 35mm lens, slight motion blur on the background.
```

**FLUX 自然语言比关键词堆叠效果好**。

### 5. inpaint / 局部重绘是 FLUX 杀手功能

Midjourney 的 vary region 仍弱于 FLUX 的 inpaint。
做"图大体好,改一处" → FLUX inpaint。

工作流:
- Midjourney 出整体 → FLUX inpaint 改细节

### 6. 自部署门槛比想象的低

```bash
# 用 ComfyUI(开源 GUI)
git clone ComfyUI
下载 FLUX-dev 权重(huggingface)
启动 → 拖 workflow → 出图
```

**4090 单卡跑 FLUX-dev 流畅**。
**M2 Pro Mac 跑 Schnell 量化版可用**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [Midjourney](./midjourney.md) | 艺术 / 风格化 / 一致性 |
| [Nano Banana Pro](./nano-banana.md) | 4K 写实 + 文字 + Google 系 |
| [即梦](./jimeng.md) | 国产 + 中文 prompt + 完全免费 |
| [Stable Diffusion XL](./sdxl.md) | 完全开源,生态最早 |

---

## 价格分析

### 闭源 API(Pro / Ultra)

| 模型 | 单图价格 |
|------|---------|
| FLUX 1.1 Pro | ~$0.04 |
| FLUX Pro Ultra | ~$0.08-0.12 |
| FLUX Schnell | ~$0.003 |
| FLUX Dev | ~$0.025 |

### 通过云平台(国内)

阿里云 / 火山 / 腾讯:大致同上 + 人民币付款 + 国内 latency。

### 自部署(开源版)

Schnell / Dev 开源,**电费 + GPU 摊销**(4090 一张图几分钱)。

### 我的预算建议

```
偶尔出图 / 试水:                 Replicate / fal.ai 充 $5,够玩很久
内容创作 / 自媒体:               月预算 ¥50-100 走 API
商业 / 电商批量:                 Pro Ultra API,按订单成本算
隐私 / 合规:                     自部署 Dev / Schnell
```

---

## 国内可用性(🟢)

- ✅ 国内云厂商(阿里 / 火山 / 腾讯)接入,完全可用
- ✅ 自部署完全国内闭环
- ✅ 多个国内 SaaS 平台(吐司 / 哩布等)接入 FLUX
- 🟡 海外 API(fal.ai / Replicate / BFL)需要海外卡

**国内开发者 / 创作者推荐**:阿里云百炼 / 火山引擎 走 FLUX API。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2024-08 | **FLUX 1 发布**,Black Forest Labs 出场 | SDXL 之后的开源新王 |
| 2024-10 | FLUX 1.1 Pro | 商业级跃升 |
| 2025-02 | **FLUX Pro Ultra(4K)** | 商业摄影级 |
| 2025-09 | FLUX 1.1 + 多模型组合 | 各场景细分 |
| 2026-02 | 更多第三方接入 + LoRA 生态 | 行业标准化 |
| 2026-05 | 中国云厂商深度集成 | 国内可用性大幅提升 |

---

## FLUX vs Midjourney 一句话决策

```
你做艺术 / 营销 / 海报 / 风格化  → Midjourney V7
你做商业摄影 / 真实图 / 文字渲染 → FLUX Pro Ultra
你要精确控制 / 自动批量 / 自部署 → FLUX(开源生态)
你要快速国内可用              → 即梦 / Nano Banana / FLUX 国内代理
```

**很多专业用户两个都用**(Midjourney 出概念 → FLUX inpaint 出细节)。

---

## 拓展阅读

- 官方:[Black Forest Labs](https://blackforestlabs.ai)
- 官方:[FLUX docs](https://docs.bfl.ml)
- 工具:[fal.ai FLUX 接入](https://fal.ai/models/fal-ai/flux-pro)

---

[← 回到 image-gen](./README.md)
