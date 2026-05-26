<!--
---
type: tool
slug: immersive-translate
name: 沉浸式翻译
category: translation
url: https://immersivetranslate.com
maker: Owen Young 个人创立 → 团队
pricing: freemium
price_range: ¥0(免费档大)/ Pro ¥19-99/月
china_availability: 🟢
modalities:
  - text
strengths:
  - 浏览器扩展双语对照(独家体验)
  - 多翻译引擎(DeepL / Google / Claude / GPT 都支持)
  - 国内可用 + 完全免费档
  - PDF / EPUB / 视频字幕一站式
  - 个人创立 → 中国开发者爆红开源
weaknesses:
  - 高级模型要付费档
  - PDF 翻译大文件速度慢
  - 视频字幕仅支持部分平台
tier: A+
tier_history:
  - date: 2026-05
    tier: A+
    reason: 浏览器双语对照独家,国内开发者神器
recommended_for_scenarios:
  - quick-translation
  - paper-digesting
  - tech-research
alternatives:
  - deepl
  - claude
  - gpt
  - 谷歌翻译
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# 沉浸式翻译

> 浏览器扩展 + 文档翻译。**国内开发者 / 学习者最常用的"AI 翻译"工具**。
> Tier A+。**双语对照 + 多引擎切换**是它的杀手锏。

---

## 基本信息

| 项 | 值 |
|---|---|
| **作者** | Owen Young 起步 → 团队([immersivetranslate.com](https://immersivetranslate.com))|
| **形态** | 浏览器扩展(Chrome / Edge / Safari)+ App / iOS / Android |
| **支持引擎** | DeepL / Google / Claude / GPT / Gemini / 自配 OpenAI 兼容 API |
| **核心场景** | 网页双语 / PDF 双语 / EPUB 双语 / 视频字幕 |
| **国内可用性** | 🟢 完全可用 |

---

## Tier 评级:A+

**评级理由**:
- **浏览器双语对照独家**:任何网页 → 一键双语显示(原文 + 译文交错)
- **多引擎切换**:同一段文字用 DeepL / Claude / GPT / Gemini 对照,**找最合适的**
- **完全免费档大**:Google Translate 引擎免费无限,**普通用户根本不用付费**
- **国内开发者神器**:看英文 paper / 文档 / GitHub 不再卡

**不是 S 的原因**:
- **高级模型(Claude / GPT)**要付费档或自配 key
- **PDF 大文件**翻译速度慢
- **视频字幕**只支持部分平台(YouTube / Bilibili / Netflix 等)

---

## 它最适合做什么

### ✅ 看英文网页 / 论文 / 文档

最日常的场景:
- GitHub 文档 / 技术 blog
- 英文论文(arXiv / OpenReview)
- 海外新闻 / 公司博客
- Stack Overflow

**双语对照** = 你能边看原文边看译文,不会"翻译完丢失原文细节"。

适合:
- [快速翻译](../../scenarios/quick-translation.md)
- [论文消化](../../scenarios/paper-digesting.md)
- [技术调研](../../scenarios/tech-research.md)

### ✅ 多引擎对照挑最好的

实战:
- 用 Google Translate 默认看大意
- 重要段落切 Claude / GPT 重译
- 难句 4 个引擎一起对照(找最准的)

**对挑剔翻译质量的用户:无可替代**。

### ✅ PDF 翻译

- 上传英文 PDF
- 双语对照导出
- 保留原格式

**学生 / 研究员看英文教材 / paper:救命**。
对手 DeepL 文档翻译要付 $30,沉浸式翻译免费。

### ✅ EPUB(电子书)

- 上传英文电子书
- 章节级双语
- 适合"我想看英文原版但词汇量不够"

**学英语 / 读国外原版书友好**。

### ✅ 视频字幕

支持 YouTube / Bilibili / Netflix / TED 等:
- 实时字幕翻译(双语)
- 双语字幕导出

**看英文 YouTube 教程 / TED / 播客时:必装**。

---

## 它**不擅长**什么

### ❌ 极致专业翻译质量

DeepL 在某些专业文档(法律 / 医学)仍胜。
**沉浸式翻译是"中转工具"**,**底层翻译质量看你选什么引擎**。

### ❌ 真正长文档批量翻译

PDF 上千页 / EPUB 整本翻译:速度慢(沉浸式翻译多 API 调用)。
工业级翻译 → DeepL 文档 / Trados 等专业工具。

### ❌ 没有"上下文长记忆"

每段独立翻译,不会跨文档保持术语一致。
长篇翻译要"统一术语" → 走 LLM(Claude / GPT)+ 显式 prompt。

---

## 真实使用 tips

### 1. 浏览器扩展是真神器

Chrome / Edge / Firefox 装一下:
- 任何英文网页 → Cmd+I 切换双语
- 鼠标 hover 单段 → 直接显示翻译
- 设置自动检测语言 + 默认翻译

**装上后看英文世界不再卡**。

### 2. 配 Claude / GPT 自配 key

免费档默认走 Google Translate / 微软。
重要内容:**配自己的 OpenAI / Claude / Gemini API key**:
- 翻译质量明显升一档
- API 走自己的额度,不限沉浸式翻译额度

```
扩展 Settings
→ 翻译服务
→ OpenAI 兼容
  Base URL: https://api.deepseek.com
  Model: deepseek-chat
  API Key: sk-xxx
```

国内开发者最划算:**沉浸式翻译 + DeepSeek API**(月费 ¥10 翻译完所有)。

### 3. PDF / EPUB 翻译走 Web 端

浏览器扩展不能翻 PDF / EPUB,要去 [Web 端](https://immersivetranslate.com)上传:
- PDF / EPUB / Word
- 双语 PDF 输出
- 保留排版

### 4. 视频字幕 + 自动 Speed

YouTube / B 站 + 沉浸式翻译双语字幕 + 1.5x speed:
- 看英文教程效率 +50%
- 听不懂瞄一眼字幕
- 速度可控

### 5. 选对翻译引擎

```
免费 + 速度:           Google Translate / 微软
专业准确:              DeepL
中文最自然:            Claude / DeepSeek
快 + 多语言:           Gemini Flash
极致省钱(API):        DeepSeek
```

### 6. 配套 NotebookLM / Kimi 做"消化"

工作流:
- 沉浸式翻译看英文论文
- 重点章节 NotebookLM / Kimi 上传精读
- 写笔记 / 综述

**翻译只是第一步,消化才是真目的**。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [DeepL](./deepl.md) | 商业 / 法律 / 学术专业 |
| [Claude](../foundation-models/claude.md) | 创意 / 中文最自然 |
| Google Translate | 极速 / 极广语言 / 完全免费 |
| Bob(macOS) | macOS 原生 + 截图翻译 |
| Pot(开源) | 完全免费 + 自部署 |

---

## 价格分析

| 档位 | 价格 | 含什么 |
|------|------|------|
| **Free** | **¥0** | 浏览器扩展 + Google / 微软翻译无限 |
| **Pro** | ¥19-29/月 | 高级 AI 引擎 + PDF / EPUB / 视频额度 |
| **Pro Max** | ¥99/月 | 高级 AI 高额度 + 团队 |

### 我的预算建议

```
个人 / 偶尔用:                完全免费档
重度看英文 / 学英语:           Pro ¥19
学生看 paper 多:               Pro Max
极客 / 自配 API:               Free + DeepSeek API,几乎免费
```

---

## 国内可用性(🟢)

- ✅ 浏览器扩展国内可装(Chrome / Edge / 国内浏览器)
- ✅ 微信 / 支付宝
- ✅ 自配 DeepSeek / Kimi API 完全国内闭环
- 🟡 部分高级引擎(Claude / GPT)需要海外卡或自配代理

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2022-09 | Owen Young 起步 | 个人开发者神作 |
| 2023 | 浏览器扩展爆红 | 中国开发者 / 学生口碑爆 |
| 2024-04 | Pro 付费档 | 商业化但保留免费 |
| 2024-12 | 视频字幕 | 应用场景扩展 |
| 2025-09 | EPUB / PDF 增强 | 学习场景闭环 |
| 2026-02 | iOS / Android App | 移动端覆盖 |

---

## 一段判断

沉浸式翻译是**国内开发者 / 学习者 / 内容创作者最常装的浏览器扩展之一**。
配 DeepSeek API → **几乎免费 + 翻译质量好**:看英文 paper / 文档 / GitHub 不再是负担。

**对国内 + 看英文需求高的所有人:几乎必装**。

---

## 拓展阅读

- 官方:[沉浸式翻译](https://immersivetranslate.com)
- 开源:[GitHub](https://github.com/immersive-translate/immersive-translate)

---

[← 回到 translation](./README.md)
