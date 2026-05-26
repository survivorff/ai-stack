# 🔄 工作流(工具组合的真实场景)

> 单个工具不够,组合才是杀手锏。
> 每个工作流都是我亲自跑过的真实场景,有时间投入和产出指标。

---

## 📝 工作流目录

### 内容生产线

- [一周写一篇 9000 字博客 + 多平台同步](#workflow-1-content-pipeline) ⭐
- [一句话 → 4 张小红书图卡(完全自动)](#workflow-2-xhs-cards)
- [PDF 论文 → 知识图谱 → 笔记](#workflow-3-paper-to-notes)

### 编程开发

- [从 0 到 1 实现一个新功能(Spec 驱动)](#workflow-4-spec-driven-dev)
- [跨多文件大重构](#workflow-5-large-refactor)
- [代码 review + 文档自动化](#workflow-6-code-review)

### 研究学习

- [快速消化一个新技术领域](#workflow-7-tech-research)
- [中英双语长文写作](#workflow-8-bilingual-writing)

---

## ⭐ Workflow 1: 一周写一篇 9000 字博客 + 多平台同步

**场景**: 一个想法 → 长文博客 + GitHub 知识库 + X thread + 小红书图卡。

**工具组合**:

```
1. Inbox 想法 (任意编辑器)
       ↓
2. Kiro/Claude Code 调研 (research)
   - Perplexity / NotebookLM 整理资料
   - 写 skeleton.md
       ↓
3. Claude Code 写主语言长文 (~6000 字)
       ↓
4. content-os pipeline (Agent Skills)
   - 中文博客(blog-writer)
   - X 英文 thread(x-thread-maker)
   - 小红书图文(xiaohongshu-editor)
       ↓
5. ai-stack/templates 渲染 4 张图卡
       ↓
6. 各平台手动 5-10 分钟发布
```

**时间投入**: 6-8 小时(过去手做要 30+ 小时)
**产出**: 1 篇博客 + 1 篇英文版 + X thread + 4 张图

**完整代码和模板**: [github.com/survivorff/content-os](https://github.com/survivorff/content-os)

---

## ⭐ Workflow 2: 一句话 → 4 张小红书图卡

**工具**: Claude / ChatGPT + 自定义 HTML 模板 + Puppeteer

**步骤**:
1. 写一份 `card-spec.md`(标题、配图思路、品牌色)
2. AI 生成 HTML(基于模板)
3. `npm run render` 一键渲染 4 张 PNG
4. 上传发布

**时间**: 30 分钟(手做要 3 小时)

详见 [content-os 仓库的 xiaohongshu-editor skill](https://github.com/survivorff/content-os/tree/main/skills/xiaohongshu-editor)

---

## Workflow 3: PDF 论文 → 知识图谱 → 笔记

**工具组合**: NotebookLM + Tana / Obsidian

**步骤**:
1. PDF 上传 NotebookLM
2. 让 NotebookLM 生成 Q&A summary
3. 关键概念抽出来成 Tana node(每个 supertag 标记)
4. 一周后回看,重读 supertag 索引

**时间**: 1 篇 30 页论文 → 完整笔记 30 分钟

---

## Workflow 4: Spec 驱动新功能开发

**工具**: Kiro

**步骤**:
1. 描述需求("加一个用户登录")
2. Kiro 生成 requirements.md → review/微调
3. Kiro 生成 design.md → review/微调
4. Kiro 生成 tasks.md
5. 一个 task 一个 task 跑,每完成你确认

**时间**: 中型功能 1 天(纯手做要 3 天)

---

## Workflow 5: 跨多文件大重构

**工具**: Claude Code + Cursor

**步骤**:
1. Claude Code 通读项目,出"重构方案 doc"
2. 你 review 方案,微调
3. Claude Code 一个文件一个文件改
4. Cursor 配合验证局部细节
5. Claude Code 写 migration test

**时间**: 30 文件级别的重构 4-6 小时

---

## Workflow 6: 代码 review + 文档自动化

**工具**: Cursor (右键 Review) + Claude Code (生成 PR description)

**步骤**:
1. Cursor 右键 "Review with AI" 自查
2. Cursor 生成 PR description
3. Claude Code 检查文档同步性

**时间**: 一个 PR 5 分钟自查(过去 30 分钟)

---

## Workflow 7: 快速消化一个新技术领域

**工具**: Perplexity + NotebookLM + Claude

**步骤**:
1. Perplexity 问"X 领域 2026 年关键玩家"(产生关键词)
2. 收集 5-10 篇关键文章 / 论文
3. NotebookLM 上传所有资料 → 自动生成"跨文档总结"
4. Claude 让它写一篇"我理解之后的 8000 字综述"
5. 我 review,补我自己的判断

**时间**: 一个全新领域 4-6 小时入门

我用这个流程做了 hyperliquid_design / polymarket_design / wallet_design / web3-insider 四个仓库的初版。

---

## Workflow 8: 中英双语长文写作

**工具**: Claude (主) + DeepL (校对)

**步骤**:
1. 中文先写完 outline
2. Claude 写中文长文(8000 字)
3. Claude 重写英文版(不是翻译,是按英文叙事重写)
4. DeepL 反向翻译英文 → 中文,对比是否一致
5. Claude 终审

**时间**: 1 篇双语长文 6-8 小时(过去 15+ 小时)

---

## 怎么把工作流变成你自己的

每个工作流都可以拆解成 2 步:

1. **找出你重复做的事**(每周 ≥3 次的)
2. **用 Agent Skills 沉淀**(让 AI 记住你的偏好)

[content-os 仓库](https://github.com/survivorff/content-os)有完整的 Agent Skills 模板可参考。

---

## 我的"工作流投资回报"原则

不是所有事都值得做工作流。我的判断标准:

```
Workflow ROI = (节省时间 × 频次) - (建立工作流时间 + 维护成本)
```

只对 ROI > 5x 的事投入工作流。剩下的手动做。

---

[← 回到 README](./README.md)
