<!--
---
type: tool
slug: hunyuan
name: 腾讯混元
category: foundation-models
url: https://hunyuan.tencent.com
maker: 腾讯
pricing: freemium
price_range: ¥0(C端) / API 中等偏低
china_availability: 🟢
modalities:
  - text
  - image
  - video
  - code
  - file
strengths:
  - 微信 / QQ / 腾讯生态深度集成(元宝 App + 微信)
  - 视频生成混元 Video 国产中流偏上
  - 元宝 App 整合 DeepSeek + 混元(双模型可切)
  - 腾讯生态用户白嫖
weaknesses:
  - 综合能力仍落后 DeepSeek/Kimi 一档
  - 个人开发者认知度低
  - 创意写作不出彩
  - 没有"杀手锏长板"
tier: B+
tier_history:
  - date: 2026-05
    tier: B+
    reason: 元宝渠道有价值,模型本身仍中流
  - date: 2025-09
    tier: B
    reason: Hunyuan-Large 开源,但个人侧弱
recommended_for_scenarios:
  - daily-help
  - writing-tech-doc
  - work-reporting
alternatives:
  - deepseek
  - kimi
  - tongyi
  - doubao
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# 腾讯混元

> 腾讯出的 AI 全家桶。**自己模型仍是中流,但元宝 App 是国产 AI 入口的隐藏黑马**。
> Tier B+ —— **微信生态用户白嫖优势 + 元宝 App 整合多模型**,模型本身没有长板但渠道独特。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [腾讯](https://www.tencent.com) |
| **当前版本(2026-05)** | Hunyuan Turbo · Hunyuan Standard · Hunyuan-Large(开源) · Hunyuan Video(视频) |
| **支持模态** | 文本 · 图(看 + 生成) · 视频(生成) · 代码 · 文件 |
| **上下文窗口** | 256K tokens |
| **API 价格** | Input ¥0.5-2 / M · Output ¥1-5 / M |
| **个人使用** | 元宝 App 完全免费 |
| **开源** | ✅ Hunyuan-Large(389B MoE)、Hunyuan-Video |
| **国内可用性** | 🟢 |

---

## Tier 评级:B+

**评级理由**:
- **元宝 App 是隐藏黑马**:**整合了 DeepSeek + 混元两个模型,用户可一键切换**(国内主流 App 里独一份)
- **微信生态深度集成**:微信内"元宝"小程序、AI 搜一搜、QQ 浏览器 AI、腾讯文档 AI
- **视频生成**:Hunyuan Video 在国产开源视频里排名靠前
- **腾讯系用户白嫖**:用了腾讯产品的几乎都能"顺便用 AI"

> **不是 A 的原因**:
> - 混元模型自身**综合能力不如 DeepSeek / Kimi 一档**(腾讯似乎也认这点 — 元宝 App 才把 DeepSeek 默认置顶)
> - 个人开发者层面**认知度低**(腾讯没像 DeepSeek 那样靠模型出圈)
> - 创意写作不出彩
> - 多模态(语音)弱于豆包 / MiniMax

---

## 它最适合做什么

### ✅ 元宝 App(腾讯系用户的"AI 入口")

[元宝 App](https://hunyuan.tencent.com) 是腾讯的 C 端 AI 产品,**最大特色是"一键切换 DeepSeek / 混元"**:
- 同一个对话 / 同一个问题,让 DeepSeek 和混元各答一次,**直观看差异**
- 默认 DeepSeek(腾讯都承认 DS 更强,大方)
- 元宝深度集成微信 / QQ:**直接"分享到微信" / "保存到收藏"**

**腾讯把"用户体验"放在"自家模型尊严"前面**,这点反而让元宝成为不少国内用户的实际入口。

### ✅ 微信生态办公场景

如果你的工作流主要在**微信 / 企业微信 / 腾讯文档**:
- 微信内"AI 搜一搜":搜文章 + AI 总结
- 企业微信"智能助手":会议纪要 / 跨群搜索
- 腾讯文档:AI 写作 / 总结 / 翻译
- QQ 浏览器:AI 阅读 PDF / 网页

**腾讯生态用户开元宝几乎没切换成本**。

### ✅ 国产开源视频生成

Hunyuan Video(2024-12 开源)在**国产开源视频生成里第一档**:
- 13B 参数,A100 / H100 可跑
- 中文 prompt 友好
- 物理感不错(虽不如 Hailuo 02 / Wan 2.5)

适合**研究 / 自部署**。消费级直接用 Hailuo / Wan / Sora,无需自部署。

### ✅ 腾讯云政企客户

腾讯云 + 混元的政企方案:
- 腾讯系合规背景
- 微信 / QQ 数据接入(在腾讯云上)的 RAG 应用
- 政府 / 大企业的"国产化采购名单"备选

---

## 它**不擅长**什么

### ❌ 单纯比模型能力

- vs DeepSeek:综合能力差 1 档,价格还贵
- vs Kimi:长文档差太多
- vs 通义 / GLM:开源生态影响力差

**腾讯似乎也明白这点** — 元宝 App 主推 DeepSeek 而不是混元。

### ❌ 个人开发者主力

很少有人**专门开混元 API** 做个人项目。
- 写代码 → DeepSeek
- 长文档 → Kimi
- 通用 → 看场景选

### ❌ 创意写作 / 文学性

中规中矩,**没有"惊艳"的输出**。

### ❌ 多模态(语音)

语音对话弱于豆包 / MiniMax。
混元主要押注"视频"而非"语音"。

### ❌ 海外 / 开源社区影响

Qwen 在 Hugging Face 是中文模型一哥,**混元开源虽然有,但社区拥抱度差很多**。

---

## 真实使用 tips

### 1. 元宝 App 推荐安装

**即使你已经有 DeepSeek / Kimi App,元宝仍值得装**:
- 它聚合了 DeepSeek(默认) + 混元(腾讯自家)
- 微信生态联动是其他 App 没有的
- "AI 搜一搜"在搜中文新闻 / 公众号 文章上很顺手

把元宝当 "**腾讯生态版的 ChatGPT 入口**",不是"自家混元的 App"。

### 2. 微信里 "AI 搜一搜" 是被严重低估的

微信顶部搜索框,搜任意关键词 →**AI 搜一搜结果在前**。
- 它会聚合公众号文章 + 朋友圈(部分)+ 互联网
- 给 AI 总结
- 引用源链接

**对中文创作者 / 自媒体研究者,这是个被忽略的好工具**。

### 3. 腾讯文档 AI 直接用

腾讯文档已经把 AI 集成到文档操作里:
- 选中文字 "AI 改写 / 总结 / 翻译"
- "AI 帮我写"长文
- "AI 提取要点 / 行动项"

工作流主要在腾讯文档的 → **不要再去切别的 AI 产品**。

### 4. Hunyuan-Large 开源仅适合"做研究"

混元开源版 389B MoE,普通人不要硬部署:
- 8×H100 起步
- 单纯个人研究 / 学术对比可玩
- 实用 → 直接用 API / 元宝

### 5. 别为了"国产合规" 单选混元

很多公司说"我们要国产 AI"。
**实际选项至少应该看 DeepSeek + Kimi + GLM + 通义 + 混元** 五家,然后基于:
- 模型能力
- 价格
- 私有化方案
- 商务支持

综合选。**单选混元只能说明决策粗糙**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [DeepSeek](./deepseek.md) | 写代码 / 性价比 / 综合 |
| [Kimi](./kimi.md) | 长文档 / 调研 |
| [GLM](./glm.md) | 政务 / 学术 |
| [Tongyi](./tongyi.md) | 阿里生态 |
| [豆包](./doubao.md) | 移动端 / 语音 / 多模态 |

---

## 价格分析

### 个人(消费者)

| 产品 | 价格 | 备注 |
|------|------|------|
| **元宝 App** | **¥0** | 默认 DeepSeek + 可切混元 |
| **微信 AI 搜一搜** | **¥0** | 集成在微信里 |
| **腾讯文档 AI** | 免费档 | 文档操作 + AI 重写 |
| **会员**(可选) | ¥99/月 | 高级模型 + 优先级 |

### API(开发者)

| 模型 | Input | Output |
|------|------:|-------:|
| Hunyuan Turbo(旗舰) | ¥2 / M | ¥5 / M |
| Hunyuan Standard | ¥1 / M | ¥3 / M |
| Hunyuan Lite | ¥0.5 / M | ¥1 / M |

### 我的预算建议

```
个人:                          元宝 App 免费,装着就好
腾讯生态用户:                   元宝 + 微信 AI 搜一搜 + 腾讯文档 AI 一套
开发者:                         不推荐主力,DeepSeek 更强且更便宜
政企:                          可作为 shortlist 之一
```

---

## 国内可用性(🟢)

- ✅ 直连
- ✅ 微信 / 支付宝 / 银联
- ✅ 中文母语
- ✅ 完整国产合规
- ✅ 微信 / QQ / 腾讯文档生态最广
- ✅ 私有化部署(腾讯云 TI 平台)

混元在国内**渠道覆盖率仅次于豆包**(因为腾讯生态用户基数巨大)。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2023-09 | 混元发布 | 腾讯入场,但显著落后第一梯队 |
| 2024-09 | Hunyuan-Large 389B 开源 | 国产开源最大模型之一 |
| 2024-12 | **Hunyuan Video 开源** | 国产开源视频突破 |
| 2025-04 | **元宝 App 加入 DeepSeek** | 腾讯务实之举 |
| 2025-12 | 微信 AI 搜一搜 | 微信生态 AI 入口正式建立 |
| 2026-02 | Hunyuan Turbo 升级 | 综合能力提升,仍未到第一梯队 |

---

## 一个意外的优势:腾讯的"务实"

腾讯做 AI 没有"必须用自家模型"的内部政治压力。
**元宝 App 默认推 DeepSeek,这种"务实程度"在 BAT 里独一份**。
它本质是"**腾讯用流量 + 生态做 AI 入口,不一定靠自家模型赢**" —— 这反而是用户的福利。

如果你是普通微信用户:**装元宝就够了**,你不用纠结底层是 DeepSeek 还是混元。
如果你是开发者:**别选混元 API,选 DeepSeek**。
如果你做政企:**混元值得作为 shortlist 之一,但不是唯一**。

---

## 拓展阅读

- 官方:[元宝 App](https://hunyuan.tencent.com)
- 官方:[腾讯云 TI 平台](https://cloud.tencent.com/product/tione)
- 开源:[Hunyuan GitHub](https://github.com/Tencent/Tencent-Hunyuan-Large)

---

[← 回到 foundation-models](./README.md)
