<!--
---
type: role
slug: office-worker
name_zh: 职场白领 / 办公
name_en: Office Worker
emoji: 💼
description: 做 PPT 写邮件开会的人。AI 在这里能省 70% 的"低创作"时间
audience_size_cn: 50M+
audience_archetype: 22-50 岁,大公司 / 政企 / 中小企业
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
scenarios:
  - making-ppt
  - meeting-notes
  - email-writing
  - data-in-excel
  - work-reporting
related_roles:
  - product-manager
  - marketer
---
-->

# 💼 职场白领 / 办公

> 做 PPT、写邮件、开会、写周报的人。**AI 在"低创作"工作上能省 70% 时间**,但很多人还在手做。

---

## 我想做……(场景索引)

| 我想做的事 | 场景索引 |
|----------|---------|
| 📊 **做 PPT** | [→ 做 PPT](../../scenarios/making-ppt.md) |
| 📝 **会议纪要 / 总结** | [→ 会议纪要](../../scenarios/meeting-notes.md) |
| 📨 **写邮件 / 邀请 / 沟通** | [→ 邮件](../../scenarios/email-writing.md) |
| 📊 **Excel / 数据处理** | [→ Excel 数据](../../scenarios/data-in-excel.md) |
| 📋 **写周报 / OKR** | [→ 周报 OKR](../../scenarios/work-reporting.md) |
| 🌐 **翻译 / 写英文邮件** | [→ 商务翻译](../../scenarios/business-translation.md) |

---

## 这个角色我盯着的工具(2026-05)

### 🧠 主力(写作 / 决策辅助)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [DeepSeek V4](../../tools/foundation-models/deepseek.md) | **S** | 🟢 | 国内 default,一切问答 |
| [Claude](../../tools/foundation-models/claude.md) / [GPT-5](../../tools/foundation-models/chatgpt.md) | **S** | 🟡 | 严肃写作 / 决策 |
| [Kimi](../../tools/foundation-models/kimi.md) | **A+** | 🟢 | 长文档 / 调研 |
| [豆包](../../tools/foundation-models/doubao.md) | **A** | 🟢 | 移动端 + 语音对话 |

### 📝 文档 / 协作(团队工作流)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [飞书智能伙伴](../../tools/notes/feishu-ai.md) | **A** | 🟢 | **国内打工人 default** |
| [Notion AI](../../tools/notes/notion-ai.md) | **A** | 🟢 | 海外 / 创业团队 |
| 钉钉智能 | A | 🟢 | 阿里系 / 钉钉用户 |
| 腾讯文档 AI | B+ | 🟢 | 微信办公生态 |

### 📊 PPT(必装)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [美图 AI PPT](../../tools/ppt/meitu-ai-ppt.md) | **A** | 🟢 | 国内职场 default |
| [Gamma](../../tools/ppt/gamma.md) | **A+** | 🟢 | 海外项目 / 创业 |

### 🌐 翻译(英文邮件 / 海外)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [沉浸式翻译](../../tools/translation/immersive-translate.md) | **A+** | 🟢 | 浏览器双语,日常 |
| [DeepL](../../tools/translation/deepl.md) | **A** | 🟢 | 商务文档专业 |
| [Claude](../../tools/foundation-models/claude.md) | **S** | 🟡 | 创意 / 自然 |

---

## 不同档位的职场人推荐组合

### 入门 / 普通员工(月预算 ¥0)

```
DeepSeek + Kimi + 豆包(国产 + 免费)
+ 飞书智能伙伴 / 钉钉智能(已经在用)
+ 美图 AI PPT(免费 PPT)
+ 沉浸式翻译(免费档)
```

### 中层 / 重度白领(月预算 ¥150-300)

```
Claude Pro $20            — 严肃写作 / 决策
DeepSeek API ¥20-50       — 自动化脚本
+ 美图 AI PPT VIP ¥39      — 高质 PPT
+ 沉浸式翻译 Pro ¥19       — 看海外
```

### 跨国公司 / 涉外(月预算 $50+)

```
Claude Pro $20 + ChatGPT Plus $20
+ DeepL $9-30(海外卡)
+ Gemini AI Premium $20(海外项目)
```

---

## 一些场景实战 tips

### 写周报 / 月报

prompt 模板:
```
我这周做了:
- [事 1]
- [事 2]
- [事 3]

帮我写一份周报:
1. 按"项目 / 完成度 / 数据 / 结论"结构
2. 每条 1-2 句话
3. 给老板看的口吻 — 简洁、有数据、不夸大
4. 最后 2-3 个"下周计划"
```

→ 用 Claude / DeepSeek。**5 分钟出周报**(vs 手做 1h)。

### 会议纪要

```
飞书 / 腾讯会议自带录音转写
→ 粘到飞书 AI / Notion AI
→ "提取 action items + 关键决策 + 跟进人"
→ 自动结构化纪要
```

### 写邮件

```
我要给 [对象] 写一封邮件:
背景:[简述]
要求:
- 中英双语 / 中文
- 商务正式 / 友好
- 100 字以内
- 中心句子 + 具体行动 + 礼貌结尾
```

### Excel 数据

```
我有这份 Excel:[贴 5 行示例]
我想要:[需求]
帮我写公式 / 步骤。
```

→ ChatGPT Advanced Data Analysis(海外) / 通义千问 Code Interpreter(国内)。

---

## 相关角色

- [→ 产品经理](../product-manager/):很多职场人 PM 化
- [→ 营销](../marketer/):内容 / 推广能力重叠
- [→ 创业者](../founder/):副业 / 转型方向

---

[← 回到所有角色](../README.md)
