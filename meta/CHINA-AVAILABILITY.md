# 🇨🇳 国内可用性速查

> 这是 ai-stack 的核心差异化字段之一。
> 所有工具笔记都标注 china_availability,这里汇总。

---

## 标注规则

| 标记 | 含义 |
|------|------|
| 🟢 直接可用 | 国内网络 + 中国信用卡可付。零配置。 |
| 🟡 需要自配 | 需要代理 / 海外卡 / API key。**不是不能用,是要折腾**。 |
| 🔴 不可用 | 国内网络封锁严重,或地区限制不卖中国 |

---

## 🟢 直接可用(零配置)

### 国产基础模型(全部 🟢,详情见各工具页)

- **[DeepSeek V4 / R1.5](../tools/foundation-models/deepseek.md)** — 性价比 + 推理之王
- **[Kimi K2.5](../tools/foundation-models/kimi.md)** — 长文档 / Agent
- **[豆包 Doubao 1.6](../tools/foundation-models/doubao.md)** — 移动端 / 语音 / 多模态
- **[GLM-5(智谱)](../tools/foundation-models/glm.md)** — 政务 / 学术 / 开源
- **[通义 Qwen 3.5](../tools/foundation-models/tongyi.md)** — 阿里生态 / 海外开源
- **[MiniMax / 海螺](../tools/foundation-models/minimax.md)** — TTS / Hailuo 视频
- **[文心一言](../tools/foundation-models/wenxin.md)** — 百度生态(B+ Tier)
- **[腾讯混元 / 元宝](../tools/foundation-models/hunyuan.md)** — 微信生态(B+ Tier)

### 国产工具(其他)

- 通义灵码 / 字节豆包代码模型 / 文心快码
- 即梦 / 文心一格 / 通义万相
- Kling / Hailuo / Seedance / 即梦视频
- 美图 AI PPT / 讯飞智文
- 秘塔 AI 搜索 / 360 AI 搜索
- 飞书智能伙伴 / 钉钉 AI / 腾讯文档 AI
- 沉浸式翻译 / 沙拉查词
- 海螺 AI / 字节火山写作

### 海外但国内可访问

- Cursor / Windsurf / Kiro
- DeepL
- Notion / Notion AI
- Tana / Obsidian
- Gamma
- Adobe Firefly / Photoshop
- Recraft
- FLUX Pro(部分国内代理可用)
- Ideogram(部分国内代理可用)
- GitHub / Copilot

### Cursor / Windsurf / Kiro / Notion 备注

- Cursor:网络通,Pro 订阅 Stripe 卡可付
- Notion:网络通(2024 之后稳定)
- Tana:网络通

---

## 🟡 需要自配(代理 + 海外卡)

### 必须代理 + 国际卡

- **[Claude / Claude Code](../tools/foundation-models/claude.md)**(Anthropic 严格地区限制 + 2026-02 蒸馏争议后进一步收紧)
- **[ChatGPT / OpenAI](../tools/foundation-models/chatgpt.md)**(可自配,Pro 用户 + 稳定代理可用)
- **[Gemini](../tools/foundation-models/gemini.md)**(Google 服务全套,海外手机号 + 海外网络 + AI Studio 免费 API 可玩)
- Midjourney(Discord + Stripe)
- Sora 2(OpenAI 系)
- Perplexity Pro
- Veo / Runway / Pika(海外视频生成)
- Mem / Reflect

### 部分可用

- Runway:Web 可访问,付费需海外卡
- Pika:同 Runway
- ElevenLabs:Web 可访问,付费需海外卡
- HeyGen:Web 可访问,付费需海外卡

---

## 🔴 不可用 / 强烈不推荐

- **[Grok(xAI)](../tools/foundation-models/grok.md)** — 三重门:大陆 IP 屏蔽 + X 账号被封 + 海外卡。国内用户**直接跳过**,X 实时数据这条对你也用不上。
- 部分高敏感工具(根据时事变化)

---

## 国内开发者的"完全省钱组合"

如果你**完全不愿意**搞代理 / 海外卡,纯用国产能做大部分事:

| 场景 | 工具 | 月费 |
|------|------|------|
| 通用问答 | 豆包 / Kimi / DeepSeek | ¥0 |
| 编程 | 通义灵码 / 文心快码 | ¥0 |
| 长文档 | Kimi K2.5 | ¥0 起 |
| 文生图 | 即梦 / 文心一格 / 通义万相 | ¥0 起 |
| 视频生成 | Kling / 即梦 / Hailuo | ¥0 起 |
| 音频 / TTS | 海螺 AI | ¥0 起 |
| 笔记 | 飞书智能伙伴 | 含飞书 |
| AI 搜索 | 秘塔 / 360 AI | ¥0 |
| 翻译 | 沉浸式翻译 / DeepL | ¥0 |
| PPT | 美图 AI PPT | ¥0 起 |

**总月费可控制在 ¥300 以内**,做大部分内容生产 + 学习 + 编程。

---

## 这份表格更新频率

- 每月跟随 release 一起更新
- 政策 / 工具大变化时立刻更新

**Last Updated**: 2026-05-26
