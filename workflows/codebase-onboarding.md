<!--
---
type: workflow
slug: codebase-onboarding
title: 古早项目 2 小时上手
emoji: 📖
solves_scenario: reading-codebase
roles:
  - developer
tools_required:
  - claude-code
  - kimi
  - cursor
time_investment: 2 小时
output: 一份完整的"项目地图"(架构图 + 关键模块说明 + GETTING_STARTED)
status: verified
last_verified: 2026-05-26
next_review: 2026-08-26
---
-->

# 📖 古早项目 2 小时上手

> 接手一个 100+ 文件、没文档、跑都跑不起来的项目?**这套流水线让你 2 小时变熟手**。

---

## 这个工作流解决什么

详见 [→ 场景:读懂老项目](../scenarios/reading-codebase.md)。

简化重述:
- 你刚接手别人的项目(新公司 / 接锅 / 开源项目)
- 100+ 文件,看着像迷宫
- README 是 3 年前写的,过期 80%
- 同事忙,你不想问太多

→ 用 AI 把"读懂老项目"从 1 周缩到 2 小时。

---

## 工具栈

| 阶段 | 工具 | 必备 / 可选 |
|------|------|:----------:|
| **整体扫描** | [Claude Code](../tools/coding-agent/claude-code.md) | 必备(海外)|
| **整体扫描(国内 / 中小项目)** | [Kimi K2.5](../tools/foundation-models/kimi.md) Web 上传项目 | 替代 |
| **边读边问** | [Cursor](../tools/ide/cursor.md) `@codebase` | 必备 |
| **画图** | Mermaid(任意 markdown 渲染) | 必备 |
| **写笔记** | [Obsidian](../tools/notes/obsidian.md) / 项目里 docs/ | 必备 |

**国内开发者**:Kimi 上传整个项目 zip(< 2M tokens)+ Cursor + DeepSeek API,**完全国内闭环**。

---

## 完整流程

```
Step 0  ─ 项目跑起来 ──────► AI 帮你写"从 0 启动"脚本
Step 1  ─ 整体印象 ────────► 4 个核心 prompt 跑一遍
Step 2  ─ 画架构图 ────────► Mermaid 可视化
Step 3  ─ 找"难懂的地方" ──► 标出技术债 / 历史包袱
Step 4  ─ 关键模块 deep dive ─► 逐个核心模块写 1 页摘要
Step 5  ─ 写 GETTING_STARTED ─► 留给"明天来的下一个人"
Step 6  ─ 提交到项目 docs/ ─► 永久财富
```

**总耗时 2 小时 vs 手工 1-2 周**。

---

## Step 0:让项目跑起来(往往第一关就难)

**工具**:Claude Code 或直接 Cursor

```
> 我克隆下来跑不起来。
> 报错:[贴你试着启动时的报错]
>
> 帮我:
> 1. 看 package.json / pyproject.toml / pom.xml 等找出依赖
> 2. 看 .env.example / docker-compose.yml 找配置要求
> 3. 写一个"从 0 开始本地启动"的 step-by-step 脚本
> 4. 假设我已有 Homebrew + Node + Docker(或你识别的环境)
>
> 输出 setup.sh,实际可跑。
```

**节省时间**:80% 的"翻文档 + 试错"。

⚠️ 一定要让 AI 看 `.env.example` 和 `docker-compose.yml` —— 这两文件经常藏关键配置但 README 不写。

---

## Step 1:整体印象(4 个核心 prompt)

**工具**:Claude Code(终端)/ Cursor `@codebase`

进入项目目录:

### Prompt A:30 秒入门简介

```
> @codebase 帮我做"30 秒入门简介":
> 1. 这是什么项目?(一句话定位,功能 + 用户)
> 2. 技术栈?(语言 / 框架 / DB / 部署 / 第三方)
> 3. 入口在哪?(从哪个文件开始读)
> 4. 核心业务模块是哪几个?(列 3-5 个,各是什么职责)
> 5. 哪些目录可以"先不看"?(test / build / vendor / 第三方)
>
> 不要逐文件解释,只给"全局印象"。
```

### Prompt B:数据流(看清数据怎么流的)

```
> 给我画一张 mermaid 数据流图:
> - 主要数据实体(用户 / 订单 / 内容 等)
> - 它们怎么从输入 → 处理 → 存储 → 输出
> - 标出关键的"分叉"(条件判断 / 异步路径)
>
> 别画太详细,只画"理解项目必须看懂"的核心流。
```

### Prompt C:依赖清单(知道项目"靠什么活")

```
> 列出项目的"外部依赖":
> 1. 外部服务(DB / Redis / MQ / 第三方 API)
> 2. 关键 NPM / pip / Maven 包(只列业务相关的,过滤工具类)
> 3. 内部服务(如果是微服务架构)
> 4. 静态资源 / 配置(可能藏在 config/ 或外部)
>
> 标出哪些"挂了项目就跑不了",哪些是"可选增强"。
```

### Prompt D:历史 / 决策(看 git log)

```
> 跑 git log --oneline -200(近 200 commit)
> 找出:
> 1. 最近 3 个月主要做了什么(归类成 3-5 个主题)
> 2. 有没有"重大重构"或"hotfix"留下的痕迹
> 3. 最活跃的贡献者(看 git shortlog)
> 4. 有什么 commit message 暗示"技术债 / 临时方案"
```

**预期产出**(写到 `docs/onboarding-notes.md` 或 Obsidian):
- 项目定位 + 技术栈 + 入口
- 数据流 mermaid 图
- 依赖清单
- 历史脉络

⚠️ **30 分钟内出一份**,不要花太多时间打磨 — 这只是第一遍认知。

---

## Step 2:画架构图

**工具**:Cursor / Claude Code + Mermaid

```
> 基于刚才的认知,画 3 张 mermaid 图:
>
> 1. **整体架构图**(组件 + 依赖关系)
> 2. **一个核心请求的时序图**(从入口到落库,经过哪些函数)
> 3. **数据模型图(ER)**(主要实体 + 关系)
>
> 每张图简化,**不要把所有细节都画上**,
> 只保留"理解项目必须看懂"的部分。
```

直接放到 `docs/onboarding-notes.md` 渲染。

⚠️ AI 画图常常**漏关键边**或**画"它觉得应该有"的边**。**画完你自己 review 一遍**(用 grep 验证它说的依赖关系是否真存在)。

---

## Step 3:找"难懂的地方"

**工具**:Claude Code

```
> 这个项目里,有哪 5-10 个地方:
>
> 1. 代码看起来不像"标准写法"(可能有历史包袱)
> 2. 有 TODO / FIXME / HACK / XXX 注释
> 3. 函数特别长(> 100 行) / 嵌套特别深(> 4 层) / 名字特别隐晦
> 4. 多个文件在一起做一件事但没文档解释为什么这么拆
> 5. 同一个概念在不同地方有不同实现(暗示历史 refactor)
>
> 把它们标出来 + 简短说明"看起来怪在哪"。
> 我就知道哪些地方要小心 + 哪些将来要重构。
```

**预期产出**:一份"技术债清单"(几条到十几条)。

价值:
- 你后续改代码时**避开这些雷**
- 给团队一个客观的"项目健康度报告"
- 长期可作为重构 backlog

---

## Step 4:关键模块 deep dive

**工具**:Cursor + 手动读 + AI 解释

对 Step 1 找出的"3-5 个核心模块",每个写一份 1 页摘要:

```
> 看 src/<module-name>/ 下面所有文件。
>
> 写一份模块摘要(给"明天来的下一个人"):
> 1. 这个模块负责什么(一句话)
> 2. 关键文件 + 职责(每个 1 行)
> 3. 主要的函数 / 类(只列对外 API,5-10 个)
> 4. 这个模块怎么被外部调用?(谁调它,在哪)
> 5. 这个模块依赖什么?(其他模块 + 外部库)
> 6. 已知的"坑"或"约定"(从代码里推断的隐式规则)
>
> 中文,简洁,< 1 页。
```

跑 3-5 次,每次一个模块。
存到 `docs/modules/<module-name>.md`。

---

## Step 5:写 GETTING_STARTED.md

**工具**:Cursor / Claude Code

```
> 基于以上所有 onboarding 笔记,写一份 GETTING_STARTED.md:
>
> 包含:
> 1. **项目是什么**(2-3 句话)
> 2. **本地怎么跑**(从 Step 0 的 setup.sh 中精简成 step-by-step)
> 3. **核心目录结构**(哪个目录干什么,1 行说明)
> 4. **我应该先读哪 5 个文件**(按重要程度,带"为什么读这个")
> 5. **常见坑 + 解法**(5-10 个具体问题)
> 6. **谁能问什么**(假设有 onboarding buddy)
>
> 这份文档让"明天来的下一个人能 1 小时上手项目"。
> 中文,< 300 行。
```

---

## Step 6:提交到 docs/

把所有 onboarding 产出整理:

```
docs/
  onboarding-notes.md       # 你的私人笔记(可选公开)
  GETTING_STARTED.md        # 给下一个新人的入门文档
  architecture.md           # 整体架构图
  modules/
    <module-1>.md
    <module-2>.md
    ...
  technical-debt.md         # 技术债清单(给团队)
```

提一个 PR:`docs: add onboarding documentation`。

⚠️ **这个 PR 的价值远超你以为的**:
- 团队节省下个新人 1 周入职时间
- 你 review 的过程中,资深工程师会帮你 fact-check
- 一举两得:学习 + 留下永久财富

---

## 时间和成本

```
Step 0:让项目跑起来      30 分钟
Step 1:整体印象 + 4 prompts  30 分钟
Step 2:画架构图            15 分钟
Step 3:找难懂的地方         15 分钟
Step 4:模块 deep dive       30 分钟
Step 5:写 GETTING_STARTED  15 分钟
Step 6:整理提 PR           15 分钟
————————————————————————————
合计:                       ~2.5 小时
```

工具月费:
- 海外:Claude Pro $20 + Cursor Pro $20 = $40
- 国内:Cursor Pro + DeepSeek API = ¥150

**ROI 极高**:省你自己 1 周入职 + 省团队下个新人 1 周入职。

---

## 这个工作流的边界

⚠️ **什么时候这套不够**:

1. **完全黑盒第三方系统**:对你接的第三方系统,AI 不一定有知识
2. **严重过期 / 错的注释**:AI 默认信注释,如果注释撒谎了 AI 也会被骗 — 你交叉验证
3. **业务规则极度复杂**:技术架构能搞清楚,但"为什么这么实现"涉及业务背景的,需要问真人
4. **隐式约定 / 团队文化**:某种命名 / 某种流程惯例,AI 看不出 — 入职几周后会自己悟到

---

## 真实案例

我接手 [hyperliquid_design](https://github.com/survivorff/hyperliquid_design) 之前不熟 Hyperliquid 源码:

- Step 0:跳过(主要是文档项目,不需要"跑")
- Step 1:Kimi 上传 zip + 4 个 prompts(15 分钟)
- Step 2:画架构图(10 分钟)
- Step 3-5:边写边问 + 整理(30 分钟)
- **总耗时 1 小时**
- 第二天就可以基于这个开始写文章

---

## 进阶变种

### 变种 A:跨多服务 / 微服务架构

如果项目是多服务的:
- Step 1:每个服务跑一遍 4 个 prompts
- Step 2:加画"服务间的调用图"(关键!)
- Step 4:把每个服务作为一个"模块" deep dive

总耗时翻倍但仍 < 1 工作日。

### 变种 B:开源项目"研究式上手"

不是为了"接手开发",只是想深度理解一个开源项目:
- 跳过 Step 0(可能跑不起来,无所谓)
- 重点做 Step 4(核心模块 deep dive)
- 加一个 "design 决策 deep dive":让 AI 找出"作者为什么这么做"的 commit message + PR 讨论

---

## 实施前的 Checklist

- [ ] 项目我能本地跑起来(或确认我可以跳过这步)
- [ ] 我有 Cursor + Claude(或 Kimi)
- [ ] 我有 2 小时不被打断的时间
- [ ] 我知道这次的输出会提 PR 到 docs/(动力)
- [ ] 我承诺自己:**每一步都自己 review,不让 AI 蒙混过关**

---

## 相关阅读

- 场景:[→ 读懂老项目](../scenarios/reading-codebase.md)
- 工具:[Claude Code](../tools/coding-agent/claude-code.md) / [Kimi](../tools/foundation-models/kimi.md) / [Cursor](../tools/ide/cursor.md)
- 配套:[写技术文档](../scenarios/writing-tech-doc.md)(把 onboarding 笔记规范化)

---

[← 回到所有工作流](./README.md)
