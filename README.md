# 🛠 AI Stack

> **不同职业、不同场景下,AI 工具到底该怎么用。**
> 中文优先 · 标注国内可用性 · 月度更新 · 有立场不中立。

[![Last Update](https://img.shields.io/badge/Updated-2026--05-blue?style=flat-square)](./meta/CHANGELOG.md)
[![License](https://img.shields.io/badge/License-CC_BY--SA_4.0-orange?style=flat-square)](./LICENSE)

---

## 🎯 30 秒找到你要的(三种入口)

### 入口 1:我是谁?

| 角色 | 痛点举例 | 入口 |
|------|---------|------|
| 💻 程序员 / 工程师 | 写代码、debug、读老项目、写文档 | [→ developer](./roles/developer/) |
| 📋 产品经理 | 写 PRD、用户调研、竞品分析 | [→ product-manager](./roles/product-manager/) |
| 🎨 UI/UX 设计师 | 概念稿、配图、Logo、原型 | [→ designer](./roles/designer/) |
| 📣 运营 / 营销 | 内容、文案、SEO、数据 | [→ marketer](./roles/marketer/) |
| 🎬 自媒体 / 创作者 | 脚本、视频、配音、封面 | [→ creator](./roles/creator/) |
| 🚀 创业者 / 一人公司 | BP、市场分析、法务 | [→ founder](./roles/founder/) |
| 💼 职场白领 / 办公 | PPT、会议纪要、邮件 | [→ office-worker](./roles/office-worker/) |
| 🎓 学生 / 学习者 | 论文、读书、刷题 | [→ student](./roles/student/) |
| 👨‍🏫 教师 / 教育者 | 教案、批改、课件 | [→ educator](./roles/educator/) |

---

### 入口 2:我要做什么?

跨角色的高频场景 → [所有场景索引](./scenarios/)

热门:
- [📄 写 PRD / 需求文档](./scenarios/prd-writing.md)
- [📊 做 PPT / 演示](./scenarios/making-ppt.md)
- [🎬 做封面图 / 营销图](./scenarios/cover-image.md)
- [🔍 快速消化新领域](./scenarios/learning-new-domain.md)
- [✍️ 写长文 / 博客](./scenarios/long-form-writing.md)
- [🎙 制作短视频](./scenarios/short-video.md)
- [💻 写代码 / 调试](./scenarios/writing-code.md)
- [📚 读书 / 论文消化](./scenarios/paper-digesting.md)

---

### 入口 3:我要某个工具?

如果你已经知道工具名,直接看深度笔记:

- [所有工具 Tier List](./meta/TIER-LIST.md)
- [按工具类型分类](./tools/)
- [国内可用性总表](./meta/CHINA-AVAILABILITY.md)

---

## 🧭 仓库逻辑(三层信息架构)

```
        Roles 角色          ← 我是谁
            ↓
       Scenarios 场景       ← 我要做什么
            ↓
   Tools / Workflows        ← 用什么工具(组合)
```

**核心承诺**:
- 角色页**不直接列工具**,只索引场景
- 场景页**给完整解决方案**(工具组合 + prompt 模板)
- 工具页是**单个工具深度**的唯一来源

完整治理见 [GOVERNANCE.md](./GOVERNANCE.md)。

---

## 🔥 这个仓库和别的有什么不同

| 别的列表 | ai-stack |
|---------|---------|
| 按"工具类型"分类(coding/writing/...) | **按"职业 + 场景痛点"分类** |
| 工具堆砌 5000+ | **每个分类只 Tier 头部 + 边界清楚** |
| 全英文,海外为主 | **中文优先 + 标国内可用性** |
| 写一次没人维护 | **月度发版,公开 review 节奏** |
| 营销描述 | **每个工具必有"它不擅长什么"字段** |
| 看完不知道怎么落地 | **场景级"工具组合工作流"** |

---

## 🔄 月度更新

订阅:Watch 仓库 → Custom → Releases

每月 1 号发一个 `v2026.MM` Release,内容:
- 新增内容
- Tier 调整(理由公开)
- 工具死亡名单(进 `_graveyard/`)
- 过期内容清理

完整 [CHANGELOG.md](./meta/CHANGELOG.md)

---

## 🤝 怎么参与

> 这是一个**有立场的知识库**,贡献门槛比一般 awesome list 高。

- **开 Issue**:推荐工具 / 提议新角色 / 报告过时内容
- **开 PR**:加新工具 / 写新场景 / 完善已有内容(必须用 `_templates/` 里的模板)
- **赞助 / 反馈**:暂不开放,让内容先长稳定

详见 [CONTRIBUTING.md](./CONTRIBUTING.md) 和 [GOVERNANCE.md](./GOVERNANCE.md)

---

## 📂 完整目录

```
ai-stack/
├── README.md            # 本页
├── GOVERNANCE.md        # 项目治理(怎么持续运转)
├── CONTRIBUTING.md      # 贡献者指南
├── LICENSE
│
├── roles/               # 9 大角色入口
│   ├── developer/
│   ├── product-manager/
│   ├── designer/
│   ├── marketer/
│   ├── creator/
│   ├── founder/
│   ├── office-worker/
│   ├── student/
│   └── educator/
│
├── scenarios/           # 跨角色场景(按"我要做什么"找)
│   └── *.md
│
├── tools/               # 工具深度笔记
│   ├── chat-assistant/  # 对话助手(Claude / GPT / Gemini / 国产)
│   ├── coding/          # 编程
│   ├── image-gen/       # 文生图
│   ├── video-gen/       # 文生视频
│   ├── audio/           # 音频 / 配音 / 音乐
│   ├── writing/         # 长文写作
│   ├── notes/           # 笔记 / 第二大脑
│   ├── research/        # 搜索 / 研究
│   ├── reading/         # 阅读 / 论文消化
│   ├── ppt/             # 演示文稿
│   ├── design/          # 设计
│   ├── translation/     # 翻译
│   ├── data/            # 数据分析
│   ├── ai-agent/        # Agent / 自动化
│   └── learning/        # 学习
│
├── workflows/           # 工具组合的完整工作流
│   └── *.md
│
├── meta/                # 元数据
│   ├── SCHEMA.md        # 内容元数据规范
│   ├── TIER-LIST.md     # 全 Tier 速查
│   ├── CHANGELOG.md     # 月度更新
│   ├── DECISIONS.md     # 架构决策记录
│   └── CHINA-AVAILABILITY.md   # 国内可用速查
│
├── _templates/          # 内容模板(写新内容必看)
├── _archive/            # 归档的旧版本
├── _graveyard/          # 已死工具档案
└── scripts/             # 校验脚本
```

---

## 📜 License

[CC BY-SA 4.0](./LICENSE) — 自由分享和改编,需注明出处。

---

<sub>**Disclaimer**:Tier 评级和推荐基于个人经验和工程视角。不接受厂商赞助,不挂 affiliate。每个工具评级会随版本迭代变化,以 frontmatter 的 `last_verified` 为准。</sub>
