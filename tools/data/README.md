# 📊 数据分析(Data)

> AI 加持的数据处理 / Excel / SQL / 可视化。

---

## 📊 推荐组合(2026-05)

**Excel / Sheets 数据处理:**
- **[ChatGPT(GPT-5)](../foundation-models/chatgpt.md) Advanced Data Analysis**(主流,可上传 Excel / CSV → 自动分析 + 出图)
- **[Claude Code](../coding-agent/claude-code.md)**(让 AI 在终端跑 Pandas / Polars 处理)
- **[通义千问(Qwen)Code Interpreter](../foundation-models/tongyi.md)**(国内可用 + 阿里云百炼)
- **[Kimi K2.5 Agent](../foundation-models/kimi.md)**(国内 + 自带 Python 沙盒)

**SQL 写 / 优化:**
- **[Claude](../foundation-models/claude.md) / [DeepSeek](../foundation-models/deepseek.md)**(写 SQL 主力)
- **[Cursor](../ide/cursor.md) + 数据库 MCP**(直接连数据库 + AI 写)

**可视化:**
- 自动用 ChatGPT / Claude / Qwen Code Interpreter 出图(matplotlib / plotly / echarts)
- 专业 BI:Tableau / PowerBI / 帆软(本身的 AI 集成中)

**详细工作流:**
- [scenarios/data-in-excel.md](../../scenarios/data-in-excel.md)(待写)
- [scenarios/data-analysis.md](../../scenarios/data-analysis.md)(待写)

---

## 一句话:数据分析靠"模型 + 沙盒",不要找"AI 数据工具"

数据分析的核心需求是:
1. AI 理解你的问题
2. AI 写代码(Python / SQL)
3. 真的跑代码
4. 解释结果

**这正是 [foundation-models](../foundation-models/) 配 [coding-agent](../coding-agent/) 的核心场景**。
"AI 数据分析专属产品"很多是模型的"产品壳" — 直接用 ChatGPT Advanced Data Analysis / Cursor + Claude Code 反而更灵活。

因此本分类暂不深拆,优先级排在主流分类之后。

---

## 待详写

| 工具 | 长板 | 优先级 |
|------|------|--------|
| Julius AI | 数据分析专属产品(GPT 套壳) | 低 |
| Hex | 协作数据 notebook | 低 |
| Rows AI | Excel 替代 + AI | 低 |
| Numerous AI(Excel 插件) | Excel 内嵌 AI | 低 |
| 帆软 / 阿里 QuickBI / 腾讯 BI | 国产 BI + AI | 中 |

---

[← 回到 tools 总览](../README.md)
