<!--
---
type: tool
slug: tongyi
name: 通义千问(Qwen)
category: foundation-models
url: https://tongyi.aliyun.com
maker: 阿里巴巴(达摩院)
pricing: freemium
price_range: ¥0 / API 中等偏低
china_availability: 🟢
modalities:
  - text
  - image
  - audio
  - video
  - code
  - file
strengths:
  - 国产开源最广(Qwen 系列覆盖 0.5B 到 200B+)
  - 阿里生态深度集成(钉钉 / 阿里云 / 淘宝)
  - 多模态全(图/音/视频/文)
  - Qwen2.5-Coder 编程能力强
  - 海外开源社区影响力大
weaknesses:
  - 个人用户存在感不如 DeepSeek/豆包
  - 创意写作"中规中矩"
  - 顶级旗舰 vs 海外模型仍有差距
  - 钉钉 / 阿里云生态外引力弱
tier: A
tier_history:
  - date: 2026-05
    tier: A
    reason: 全栈 + 开源 + 阿里生态,但个人 C 端不如 DeepSeek/豆包
  - date: 2025-09
    tier: A
    reason: Qwen 2.5 系列开源带动海外影响力
recommended_for_scenarios:
  - work-reporting
  - data-analysis
  - reading-codebase
  - tech-research
  - long-document-analysis
alternatives:
  - deepseek
  - kimi
  - glm
  - claude
status: verified
last_verified: 2026-05-22
next_review: 2026-08-22
---
-->

# 通义千问(Qwen)

> 阿里巴巴达摩院出的全家桶。**国产开源覆盖最广 + 阿里生态深度集成**。
> Tier A —— **企业 / 钉钉 / 阿里云用户的默认选择**,海外开源圈也是"Llama 之外最受欢迎"的中文模型。

---

## 基本信息

| 项 | 值 |
|---|---|
| **厂商** | [阿里巴巴 达摩院](https://qwen.readthedocs.io)(杭州) |
| **当前版本(2026-05)** | Qwen3.5-Max(旗舰) · Qwen3.5-Plus · Qwen3.5-Coder · Qwen3-VL(多模态) |
| **支持模态** | 文本 · 图 · 音 · 视频(看 + 生成 Wan) · 代码 · 文件 |
| **上下文窗口** | 1M tokens(Max)/ 128K(Plus) |
| **API 价格** | Input ¥1-10 / M(分级) · Output ¥3-30 / M |
| **个人使用** | 通义网页 + App + 钉钉智能 + 夸克免费 |
| **开源** | ✅ Qwen2.5 / Qwen3 系列覆盖 0.5B → 200B+,Hugging Face 中文模型下载量榜首 |

---

## Tier 评级:A

**评级理由**:
- **开源覆盖广度第一**:从 0.5B(端侧) → 7B(笔记本) → 32B(单卡) → 72B → 200B+ 全覆盖,**海外开源圈"中文模型默认选 Qwen"**
- **阿里生态深度集成**:钉钉 / 阿里云 / 淘宝 / 飞猪都有原生 AI 能力,B 端用户**几乎天然就在用**
- **多模态全栈**:Qwen3-VL 看图、Qwen-Audio 听音、Wan 视频生成
- **Qwen2.5-Coder 在编程开源模型里第一档**(SWE-bench Verified ~58%,小尺寸里没对手)

> **不是 A+ 的原因**:
> - 个人 C 端**通义 App 没火起来**(被豆包、DeepSeek、Kimi 抢走流量)
> - 旗舰 Qwen3.5-Max **vs Claude / GPT-5 仍差半档**
> - 创意写作不如 Claude / 豆包灵气
> - 钉钉 / 阿里云生态**外用户引力弱**

---

## 它最适合做什么

### ✅ 阿里 / 钉钉生态的工作场景

如果你公司用钉钉 / 阿里云,Qwen 是**几乎免费白拿的**:
- 钉钉智能 = Qwen + 钉钉数据(会议、IM、文档)→ 写周报 / 总结会议 / 跨群消息
- 阿里云百炼 = Qwen + 工作流编排 → 企业 AI 应用一站式
- 夸克 = Qwen + 浏览器搜索 / 文档处理

**对国内工作族,Qwen 是隐形的 daily driver**。

### ✅ 中文场景的开源端侧 / 边缘部署

Qwen 系列开源覆盖度无人能及:
- **Qwen3-0.5B**:手机本地跑(M1 Mac / 旗舰 Android)
- **Qwen3-7B**:笔记本本地跑(16GB+ RAM)
- **Qwen3-32B**:单张 4090/A6000 跑量化
- **Qwen3-200B**:8 卡 H100,接近闭源旗舰

**端侧 / 隐私敏感 / 离线场景**:Qwen 是国产首选。
对手 GLM 在政务,Qwen 在普通开发者。

### ✅ Qwen3.5-Coder 写代码

**Coder 系列在开源代码模型里第一档**:
- SWE-bench Verified ~58%(开源里仅次于 DeepSeek-Coder)
- 32B 版本笔记本能跑
- VS Code / Cursor / Continue 插件都有原生支持

预算 0 的开发者本地跑代码 AI:**Qwen3.5-Coder 32B 是首选**。

### ✅ 海外开源社区做"中文 / 双语项目"

Hugging Face 上 Qwen 系列下载量**远超其他中文模型**。
做开源中文 AI 项目 / 微调 / 教学:**Qwen 是默认 base model**。
如:RWKV / 各类 RAG 项目 / 中文 LoRA / 中文 Agent 框架 —— 默认 Qwen 起步。

### ✅ 数据分析 + Excel / Sheets

通义千问 Web / 阿里云百炼**自带 Code Interpreter**(类似 ChatGPT Advanced Data Analysis):
- 上传 Excel / CSV → 直接出图 + 统计
- 复杂数据处理 / 多表 join
- 钉钉文档 / 飞书表格能直连

国内用户做轻数据分析,**通义 + 钉钉文档 比 ChatGPT 落地快**。

### ✅ 多模态生成(Wan 视频 / Qwen-Image)

阿里**所有多模态都自研**:
- **Wan**:文生视频,**国产里第一档**(对标 Kling / Sora,实测仅次于 Sora 2)
- **Qwen-Image**:文生图,2025 年开源的几款大尺寸权重在 Hugging Face 火了
- **Qwen-Audio**:音频理解 / 转录

需要"国内能直接用 + 多模态闭环"→ Qwen 全家桶比拼凑工具流畅。

---

## 它**不擅长**什么

### ❌ 创意写作 / 中文文学性

写小红书 / 公众号 / 营销文案:Qwen 写得**正确但平**。
- 创意写作 → [Claude](./claude.md) / [豆包](./doubao.md)

### ❌ 极致性价比

API 价格 Plus 档 ¥1-3/M,Max 档 ¥10/M,**比 DeepSeek 贵 2-20 倍**。
单纯算钱:**DeepSeek 仍是国产最便宜**。

### ❌ "我个人用通义网页"

通义 App / 网页**用户体验比豆包、Kimi、DeepSeek 都差一档**。
- 对话流畅度
- 历史管理
- 移动端

个人 C 端:**豆包 / Kimi / DeepSeek 三选一**,通义不如。

### ❌ 顶级复杂任务 vs 海外旗舰

Qwen3.5-Max 综合能力 ~ Claude Sonnet 4.0(差 Sonnet 4.7 半档,差 Opus 4.7 一档)。
极端复杂场景 → Claude / GPT-5。

### ❌ 没有"杀手锏标签"

DeepSeek = 性价比之王 + 推理。
Kimi = 长文档之王 + Agent。
豆包 = 移动端 + 语音。
**Qwen = ?** —— "什么都行,什么都不顶尖",这是它在 C 端起势难的原因。
但**B 端 / 阿里生态用户没得选**,这是它的护城河。

---

## 真实使用 tips

### 1. 阿里云用户优先用百炼

[阿里云百炼](https://bailian.console.aliyun.com)是阿里的 AI 应用平台。打通了:
- 全部 Qwen 模型 + 阿里第三方模型
- 工作流编排(类似 Coze / Dify)
- RAG 知识库
- Agent 工具调用

阿里云已有账号 → **百炼比直接调 API 强 5 倍**。

### 2. 钉钉智能是被低估的"打工人 AI"

钉钉智能助理已经把 Qwen 深度集成到工作流里:
- "@通义" 在群里直接 AI 回答
- 文档里 AI 续写
- 视频会议 AI 纪要 + Action items
- "找上周关于 X 的所有讨论" 跨群搜索

**国内打工人不开等于浪费**。

### 3. Qwen3-Coder 本地跑教程

```bash
# 基础设施(笔记本 16GB+ RAM 即可)
ollama pull qwen3:32b-coder-q4
ollama run qwen3:32b-coder-q4

# Cursor 接入
Settings → Models → Add Custom
Base URL: http://localhost:11434/v1
API Key: ollama
Model: qwen3:32b-coder-q4
```

**完全离线 + 完全免费 + 隐私 100%**。M3 Max Mac / 4090 笔记本流畅跑。

### 4. 多模态用阿里云百炼,不要在通义 App 找

通义网页 / App 的多模态功能**入口很乱**。
要 Wan 视频 / Qwen-Image 生成图,**直接走阿里云百炼或 ModelScope**,体验顺得多。

### 5. 学习开源 / 做研究先看 ModelScope

阿里的 [ModelScope](https://modelscope.cn) 是国产版 Hugging Face。
- 模型下载 + 试玩
- 在线体验各种 Qwen 变体
- 国内访问比 Hugging Face 快

### 6. Qwen-Long 模型适合长文档批处理

阿里有个**专门长上下文档**的 `qwen-long` 模型,**API 单价比 Plus 还便宜**(因为牺牲了部分能力换长上下文)。
做"扔 100 篇文档自动总结"的批处理任务,Qwen-Long 性价比比 Kimi 还狠。

---

## 替代方案

| 替代 | 什么时候选它 |
|------|-------------|
| [DeepSeek](./deepseek.md) | 写代码主力 / 推理 / 极致性价比 |
| [Kimi](./kimi.md) | 长文档 / Agent / C 端 |
| [GLM](./glm.md) | 政务 / 央国企 / 学术研究 |
| [豆包](./doubao.md) | 个人移动端 + 语音 + 即时问答 |
| [Claude](./claude.md) | 海外 / 写作 / 复杂推理 |

---

## 价格分析

### 个人(消费者)

| 渠道 | 价格 | 适合谁 |
|------|------|------|
| **通义 Web / App** | **¥0** | 试用 / 偶尔 |
| **夸克** | **¥0** | 浏览器 + 搜索 + AI 一体 |
| **钉钉智能** | 免费档 | 工作场景 |
| **通义会员**(可选) | ¥99/月 | 重度个人 |

### API(开发者 / 企业)

| 模型 | Input | Output |
|------|------:|-------:|
| Qwen3.5-Max(旗舰) | ¥10 / M | ¥30 / M |
| Qwen3.5-Plus | ¥1 / M | ¥3 / M |
| Qwen3.5-Turbo | ¥0.3 / M | ¥0.6 / M |
| Qwen3-Long(长上下文) | ¥0.5 / M | ¥1 / M |
| Qwen3.5-Coder | ¥1 / M | ¥3 / M |

### 我的预算建议

```
个人:                          通义 Web / 夸克 / 钉钉,¥0
个人开发者:                     Plus 档 ¥1/M(对照 DeepSeek 是否更省)
本地部署:                       Qwen3-32B / Qwen3-Coder 32B,完全免费
企业:                          阿里云百炼,商务谈量级折扣
```

---

## 国内可用性(🟢)

- ✅ 直连无需代理
- ✅ 阿里生态(钉钉 / 阿里云 / 淘宝 / 夸克)深度集成
- ✅ 中文母语理解
- ✅ 国产 GPU 兼容
- ✅ 私有化部署成熟(阿里云专有云)

Qwen 在国内可用性上**和 DeepSeek / Kimi / GLM 同档** —— 全是 🟢。

---

## 🔄 版本变化追踪

| 时间 | 变化 | 我的看法 |
|------|------|---------|
| 2023-08 | Qwen-7B 开源 | 中文开源最早一批 |
| 2024-09 | **Qwen 2.5 系列大开源** | Hugging Face 下载量超过 Llama,海外影响力建立 |
| 2025-04 | **Qwen3 系列发布** | 全模态 + Coder + 开源旗舰 |
| 2025-12 | Qwen3.5-Max 旗舰发布 | 综合对齐 Claude Sonnet 4.0 |
| 2026-03 | Qwen3.5-Coder 32B 开源 | 开源代码模型最强 |
| 2026-05 | API 全线降价 30% | 价格战延续,Plus 档对标 DeepSeek |

---

## 关于"国内 AI 五巨头"的一个看法

国产 AI 模型现在常被分为五家:**DeepSeek / Kimi / GLM / 通义 / 豆包**。

**它们各自的"地盘"**:
- DeepSeek = 个人开发者 + 性价比 + 推理
- Kimi = 长文档 + 调研 + Agent
- GLM = 政务 / 国企 / 学术
- **通义(Qwen) = B 端 + 阿里生态 + 海外开源社区**
- 豆包 = 移动端 + 语音 + 短视频生态

**Qwen 的护城河是"阿里生态 + 海外开源影响力"**,不是"个人 C 端的体验"。
对在阿里 / 钉钉 / 阿里云 / 海外开源圈的人,**Qwen 是必装**。
对纯个人用户,**它可以是 backup,不是主力**。

---

## 拓展阅读

- 官方:[Qwen 文档](https://qwen.readthedocs.io/)
- 官方:[阿里云百炼](https://bailian.console.aliyun.com)
- 开源:[Qwen GitHub](https://github.com/QwenLM)
- 海外认知:[Hugging Face Qwen 集合](https://huggingface.co/Qwen)

---

[← 回到 foundation-models](./README.md)
