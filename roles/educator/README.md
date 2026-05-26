<!--
---
type: role
slug: educator
name_zh: 教师 / 教育者
name_en: Educator / Teacher
emoji: 👨‍🏫
description: 教别人的人,从公立学校到企业内训
audience_size_cn: 18M+
audience_archetype: K-12 / 大学 / 培训师 / 企业 onboarding
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
scenarios:
  - lesson-planning
  - grading
  - onboarding-new-hire
related_roles:
  - student
  - developer
---
-->

# 👨‍🏫 教师 / 教育者

> 教别人的人,从公立学校到大学到企业培训师。**AI 在备课、批改、个性化辅导上的产出已经成熟**。

---

## 我想做……(场景索引)

| 我想做的事 | 场景索引 |
|----------|---------|
| 📚 **备课 / 教案** | [→ 备课](../../scenarios/lesson-planning.md) |
| ✍️ **批改作业** | [→ 批改](../../scenarios/grading.md) |
| 👥 **带新人 / 培训** | [→ 带新人](../../scenarios/onboarding-new-hire.md) |
| 🎓 **个性化辅导** | [→ 个性化辅导](../../scenarios/personalized-tutoring.md) |
| 📊 **做课件 PPT** | [→ 做 PPT](../../scenarios/making-ppt.md) |
| 🧪 **生成习题 / 测验** | [→ 生成题目](../../scenarios/exam-prep.md) |

---

## 这个角色我盯着的工具(2026-05)

### 🧠 主力(备课 / 答疑)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [DeepSeek V4 + R1.5](../../tools/foundation-models/deepseek.md) | **S** | 🟢 | 写教案 + 出题 + 解题(推理强) |
| [Claude Sonnet 4.7](../../tools/foundation-models/claude.md) | **S** | 🟡 | 严肃写作 / 教案中文最自然 |
| [Kimi K2.5](../../tools/foundation-models/kimi.md) | **A+** | 🟢 | 长教科书 / 论文 |
| [豆包](../../tools/foundation-models/doubao.md) | **A** | 🟢 | 拍照搜题 / 给学生答疑 |

### 🔍 教研 / 调研

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [NotebookLM](../../tools/research/notebook-lm.md)(海外身份) | **A+** | 🟡 | **教育者神器** — 上传教科书 + 论文 → AI 播客 + 答疑 |
| [秘塔](../../tools/research/mita.md) | **A+** | 🟢 | 中文学术调研 |
| [Gemini Deep Research](../../tools/foundation-models/gemini.md) | **A+** | 🟡 | 出报告 / 综述 |

### 📊 课件 / 演示

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [美图 AI PPT](../../tools/ppt/meitu-ai-ppt.md) | **A** | 🟢 | 教育模板覆盖完整 |
| [Gamma](../../tools/ppt/gamma.md) | **A+** | 🟢 | 海外项目 / 国际学校 |
| [Canva + AI](https://www.canva.com)(待详写) | A | 🟢 | 教学海报 / 课堂活动 |

### 🎬 视频 / 配音(网课 / 培训)

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [Hailuo 02](../../tools/video-gen/hailuo.md) | **A+** | 🟢 | 国产视频生成 |
| [Speech-02](../../tools/audio/speech-02.md) | **A+** | 🟢 | 中文配音(老师不录音也能出网课) |
| [ElevenLabs](../../tools/audio/elevenlabs.md) | **S** | 🟡 | 英文配音 |

### 📝 文档 / 协作

| 工具 | Tier | 国内 | 用法 |
|------|:---:|:---:|------|
| [飞书智能伙伴](../../tools/notes/feishu-ai.md) | **A** | 🟢 | 学校 / 培训机构内部 |
| [Notion AI](../../tools/notes/notion-ai.md) | **A** | 🟢 | 国际学校 / 创业培训 |

---

## 教育者的"AI 杠杆"

最值得让 AI 替代的事:

1. **批改客观题 / 选择题 / 简单问答**:**100% 替代**(用 GPT API + Excel)
2. **出题 / 出试卷**:Claude / DeepSeek 出 100 道题 5 分钟
3. **备课 PPT**:美图 AI PPT 30 分钟出 + 你 polish
4. **教研 / 看 paper**:NotebookLM / Kimi 上传消化
5. **个性化辅导(简单)**:让学生先用 AI 答疑 → 你处理"AI 答不对"的 1%

**剩下不能替代**:
- 课堂氛围 / 师生互动
- 复杂答疑(学生卡在思维路径)
- 教育判断(学生情绪 / 兴趣 / 性格)
- 主观题深度批改

---

## 实战场景 tips

### 备课 / 教案

```
prompt 模板:
"我要给 [学生年级] 教 [学科] 的 [主题],
2 课时,目标是 [教学目标]。

帮我写一份完整教案:
1. 学情分析(学生已有什么 / 缺什么)
2. 教学目标(可观察 / 可评估)
3. 重点 / 难点(各 2-3 个)
4. 教学环节(导入 / 讲解 / 练习 / 总结,带时长)
5. 板书 / PPT 关键页
6. 课后反思的 3 个问题
"
```

### 出题(生成 100 道题)

```
"我要给 [年级] 学生出 [题型] [数量] 道题,
覆盖 [知识点列表]。

要求:
- 难度梯度(20% 简单 + 60% 中等 + 20% 难)
- 每题给答案 + 详解
- 标准格式(题干 / 选项 / 答案 / 解析)
- 中文输出"
```

→ DeepSeek R1.5 / Claude Opus(推理任务首选)。

### NotebookLM 给学生上 AI 播客

```
1. 上传本周课程内容 / 教科书章节
2. NotebookLM 生成 AI 播客
3. 学生周末听一遍
4. 课堂时间 = 答疑 + 实战,不再是讲解
```

**这是 2026 年最有价值的"翻转课堂"实施方法**。

### 个性化辅导工作流

```
学生先用 DeepSeek / 豆包 答疑
AI 答不对 → 学生记录"卡在哪里"
带这个具体问题来找老师
老师 5 分钟解决一个真问题
```

每个老师的"教学带宽"提升 5 倍。

---

## 相关角色

- [→ 学生](../student/):你的服务对象
- [→ 程序员](../developer/):带编程类教学

---

[← 回到所有角色](../README.md)
