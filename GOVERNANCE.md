# 🏛 项目治理(Governance)

> 这份文档定义 ai-stack **如何持续运转**:谁能做什么、变更怎么走、版本怎么发、内容怎么过期淘汰。
> **本仓库是一个长期项目,不是一锤子买卖**。每个决策都要为"3 年后的这个仓库"负责。

---

## 1. 北极星目标(North Star)

> **让任何一个职场人,30 秒内找到"我在做这件事时最该用的 AI 工具组合"。**

每一个新增内容、每一次改版,都用这一句话校验。如果不能让这件事更好,就不做。

---

## 2. 内容质量铁律(content bar)

任何内容(角色页 / 场景页 / 工具页 / 工作流)进入主分支必须满足:

- ✅ **解决真实痛点**(不是"罗列工具",是"我在 X 场景碰到 Y 痛点")
- ✅ **真实使用过 / 有可信引用**(必须标 `verified` 或 `reference` 来源)
- ✅ **标注国内可用性**(🟢 / 🟡 / 🔴)
- ✅ **标注最后验证时间**(`last_verified: YYYY-MM-DD`)
- ✅ **结构合规**(用 `_templates/` 里的模板,不能自创结构)
- ✅ **写明边界**("它不擅长 / 不适用于 X")

不满足 → 进 `_drafts/` 不进主线。

---

## 3. 三层信息架构(必须严格遵守)

```
        [ Roles 角色 ]
       我是谁 → 我能用 AI 做什么
              ↓
       [ Scenarios 场景 ]
       具体痛点 → 完整解决方案
              ↓
       [ Tools / Workflows ]
       具体工具或工具组合的深度笔记
```

**规则**:
- 角色页**不直接列工具**,只列场景索引
- 场景页**不重复讲工具细节**,只讲"在这个场景里,这个工具的最佳用法"
- 工具页是**唯一**讲工具本身详细信息的地方
- 工作流是**多个工具协作**的复合方案,引用工具页

任何内容写之前,先问自己:**这个属于哪一层?** 写错位置 = 不能合并。

---

## 4. 文件命名 + Slug 规范

```
roles/<role-slug>/README.md            # 角色入口
roles/<role-slug>/<scenario-slug>.md   # 该角色独有的场景(罕见,优先放 scenarios/)

scenarios/<scenario-slug>.md           # 跨角色场景(优先)

tools/<category-slug>/<tool-slug>.md   # 工具深度笔记
tools/<category-slug>/README.md        # 工具类总览(Tier List)

workflows/<workflow-slug>.md           # 工具组合工作流

_templates/                            # 模板,不允许其他位置自创结构
```

**Slug 规则**:
- 全小写 + 短横线分隔
- 英文优先(便于 SEO + 跨语言),例:`prd-writing` 不是 `写prd`
- 长度 <= 30 字符

---

## 5. 内容生命周期(每个文件的状态)

每个 markdown 文件 frontmatter 必须有 `status` 字段:

```yaml
status: draft / verified / outdated / archived
last_verified: 2026-05-22
next_review: 2026-08-22  # 下次必须 review 的日期
```

| status | 含义 | 在主页是否显示 |
|--------|------|---------------|
| `draft` | 草稿,未充分验证 | ❌ 隐藏 |
| `verified` | 已验证,正常显示 | ✅ |
| `outdated` | 过了 next_review 没更新 | ⚠️ 显示但有警告 |
| `archived` | 工具已死 / 内容废弃 | 移到 `_archive/`,保留可查 |

**强制规则**: 每篇 `verified` 内容**最多 6 个月**必须 review 一次。超期自动变 `outdated`。

---

## 6. 月度更新流程(Release Cadence)

每月 1 号发一个 GitHub Release,版本号 `v2026.MM`(不是 semver,是日历版)。

每月 release 必须包含:

1. **CHANGELOG.md 当月条目**(新增 / 调整 / 废弃 / Tier 变化)
2. **review 一批 outdated 内容**(目标:每月清掉所有过 6 个月未 review 的)
3. **Tier 评级变化记录**(对外透明,理由公开)
4. **死亡名单**(本月废弃的工具,移到 `_graveyard/`)

**铁律**:Release 必须按月发,**即使没有新内容也要发"维护版"**。月更承诺是这个仓库最大的差异化,不能断。

---

## 7. 怎么扩展(Extensibility)

### 7.1 新增角色

加一个新角色(比如"律师"),走流程:

1. 在 [issues] 提议:`[Role] 新增律师角色`
2. 列出该角色 5-8 个高频痛点(用 `_templates/role-proposal-template.md`)
3. 维护者 review:**该角色至少要在中国职场有 100 万规模 + 至少 5 个 AI 强相关痛点**
4. 通过后建 `roles/lawyer/` 目录,先填 README + 1-2 个场景作为 MVP
5. 进 CHANGELOG

**避免角色泛滥**:如果新角色 80% 的场景已经被现有角色覆盖,**不新增,放扩展阅读**。

### 7.2 新增场景

新场景的优先级判定:

```
高优先级: 跨 ≥3 个角色的场景(如"做 PPT")
中优先级: 跨 2 个角色的场景
低优先级: 单角色独有的场景(放 roles/<role>/ 下,不进 scenarios/)
```

### 7.3 新增工具

新工具进入流程:

1. 必须有人(作者或贡献者)**真实使用 ≥ 1 周**
2. 必须填完 `_templates/tool-template.md` 所有 required 字段
3. 给出至少一个**它最适合的场景**(挂到对应 scenario 页)

不接受:厂商自荐 / 营销描述 / 试用 1 天就写

### 7.4 工具的"上下移动"(Tier 调整)

任何 Tier 调整必须有"理由记录":

```yaml
tier_history:
  - date: 2026-05
    tier: A
    reason: 初版评估
  - date: 2026-09
    tier: S
    reason: Sonnet 4.7 后跨多文件能力质变
  - date: 2027-02
    tier: A
    reason: Cursor 4 已经覆盖该场景
```

公开记录 = 公信力。

---

## 8. 贡献者类型

### 8.1 Maintainer(我自己 + 未来核心贡献者)

权限:
- 合并 PR
- 调整 Tier
- 决定新增角色 / 大架构改动

义务:
- 月更不断
- 至少每周 review 一次 issues

### 8.2 Trusted Contributor(深度贡献者)

某个垂直领域的资深用户。权限:
- 直接合并自己擅长领域的工具笔记
- 提议新场景

成为方式:连续 3 次高质量 PR + 至少 1 次完整角色贡献。

### 8.3 Community Contributor(任何人)

权限:开 PR / Issue。

PR 模板见 `.github/PULL_REQUEST_TEMPLATE.md`。

---

## 9. 反 SPAM / 反 SEO 农场

> 现有 AI 工具列表很多被 SEO 农场和厂商自宣污染。我们要硬性过滤。

**自动拒收**:
- 标题里有"最 X / 第 N / 必备"营销话术
- 描述基本是官方文案 paraphrase
- 没填"国内可用 / 不擅长什么"两个字段
- 一个 PR 加 ≥ 3 个工具的(明显是机器或营销 batch)

**人工拒收**:
- 工具死了 ≥ 3 个月还有人提
- 厂商雇的写手(可识别的复制粘贴模式)

---

## 10. 商业化原则(长期)

12 个月内:**完全免费,不接广告,不卖会员**。

12 个月后可能考虑:
- 年度报告 PDF / 飞书文档(付费)
- 严选用户社群(¥99/年)
- 接受**公益赞助**(写在 README,不影响内容)

**绝不**:
- ❌ 收钱改 Tier
- ❌ 工具厂商付费置顶
- ❌ Affiliate 链接(信任就废了)

---

## 11. 决策日志(Decision Log)

重大架构决策必须记录在 `meta/DECISIONS.md`,格式 ADR(Architectural Decision Record):

```
# ADR-001: 三层信息架构

Date: 2026-05-22
Status: Accepted

## Context
按工具类型分(coding/writing/...)新人找不到自己想要的。
按职业分但只列工具 list 又太浅。

## Decision
采用 Roles → Scenarios → Tools 三层架构。
所有内容必须明确归属其中一层,不能混。

## Consequences
+ 入口清晰(不同人 30 秒找到自己)
+ 工具复用(一个工具页被多个场景引用)
- 写作约束更强(不能随便扔到首页)
```

---

## 12. 反思 / Retro(每季度)

每季度末做一次 retro,问自己 3 个问题:

1. 这个季度最受欢迎的内容是什么?为什么?(扩这个方向)
2. 哪些内容浪费时间(没人看 / 不更新)?(砍掉)
3. 哪些假设错了?(纠正,在 DECISIONS.md 记录)

---

## 13. 这份文档的更新

每年 review 一次。重大改动需要 ADR 记录。

**Last Updated**: 2026-05-22
**Next Review**: 2027-05-22
