# 🔄 工作流(工具组合)

> 单工具不够,组合才是杀手锏。
> 每个工作流 = 跨 2-5 个工具的真实场景流水线,**作者亲自跑过**。

---

## 📊 已上线工作流(2026-05)

| 工作流 | 解决场景 | 角色 | 时长 | 状态 |
|--------|---------|------|:---:|:---:|
| [Spec → 实现 → 测试 → 文档](./spec-to-code.md) | writing-code | developer, founder | 4-8h | ✅ |
| [古早项目 2 小时上手](./codebase-onboarding.md) | reading-codebase | developer | 2h | ✅ |
| [一个 Bug 的完整 debug 链路](./bug-hunt.md) | debugging | developer | 0.5-2h | ✅ |
| [长文写作完整流水线](./long-form-pipeline.md) | long-form-writing | creator, founder, marketer, developer | 4-8h | ✅ |
| [短视频脚本 → 制作 → 发布](./short-video-pipeline.md) | short-video | creator, marketer, founder | 2-4h | ✅ |
| [论文消化完整流水线](./paper-digesting-pipeline.md) | paper-digesting | student, educator, developer, founder | 30-90min | ✅ |

---

## 🟡 待写(下一阶段优先级)

| 工作流 | 解决场景 | 角色 | 优先级 |
|--------|---------|------|:---:|
| 一句话生成 PPT | making-ppt | office-worker, marketer, product-manager | 高 |
| PRD 完整流水线 | prd-writing | product-manager, founder | 高 |
| 多平台改编流水线 | content-pipeline | creator, marketer | 中 |
| 市场调研完整流水线 | market-research | founder, marketer, product-manager | 高 |
| Logo 设计完整流水线 | logo-design | designer, founder | 中 |
| 备课 + 课件制作 | lesson-planning | educator | 中 |

---

## 工作流 vs 场景 vs 工具的关系

```
场景(scenarios/)
   ↓ "你想做什么"
   - 痛点
   - 推荐方案(几条 Plan A/B/C)
   - prompt 模板
   - 边界

工作流(workflows/)
   ↓ "完整流水线"
   - 某个场景的"主推方案"详细到每一步
   - 工具组合 + 时间码 + 实战 tips
   - 跨多个工具的连贯流程

工具(tools/)
   ↓ "单个工具的深度"
   - 具体某工具的能力 / 边界 / 价格 / 国内可用
```

简单说:
- **场景** 教你"该用什么思路"
- **工作流** 教你"按这个 step 做"
- **工具** 教你"具体某个工具怎么用"

---

## 怎么贡献新工作流

要求:
1. **作者亲自跑过**(不能复述网上教程)
2. **包含真实产出例子**(链接到博客文章 / GitHub PR / 视频等)
3. **包含失败的边界**(诚实说不适合什么场景)
4. **每步有具体 prompt 或操作**(不是"用 AI 解决"这种泛泛之谈)
5. **包含时间和成本**(让读者评估是否值得)

详见 [_templates/workflow-template.md](../_templates/workflow-template.md) + [CONTRIBUTING.md](../CONTRIBUTING.md)。

---

[← 回到 README](../README.md)
