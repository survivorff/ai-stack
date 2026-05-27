<!--
---
type: scenario
slug: cover-image
title: 做封面图
emoji: 🎬
roles:
  - creator
  - designer
  - marketer
pain_points:
  - 每篇内容要新封面,量大
  - 风格难一致(系列内容)
  - 文字嵌入难(标题 / 副标题)
  - 找图 / 做图耗时
  - 不是设计师但要"看着专业"
recommended_tools:
  - midjourney
  - nano-banana
  - flux
  - jimeng
status: verified
last_verified: 2026-05-27
next_review: 2026-08-27
---
-->

# 🎬 做封面图

> 博客 / 公众号 / 小红书 / YouTube 每篇都要封面。**AI 让"做封面"从 30 分钟变成 3 分钟**。

---

## 你为什么读到这里?(痛点)

- **每篇内容要新封面**：一周 3-5 篇内容 = 3-5 张封面，量大
- **风格难一致**：系列内容要"看着是一套"，手做很难保持
- **文字嵌入难**：标题 / 副标题要清晰嵌在图里，AI 经常糊
- **找图 / 做图耗时**：免费图库质量差，付费图库贵，自己做不会
- **不是设计师但要"看着专业"**

---

## 推荐方案

### 🥇 方案 A：Midjourney + Style Reference（系列内容首选）

**适合**：博客 / 公众号 / YouTube 系列封面（要风格一致）
**时间**：3-5 分钟/张
**工具**：[Midjourney V7](../tools/image-gen/midjourney.md)
**预算**：$30/月

**步骤**：
1. 第一张封面定调（选好风格 / 配色 / 构图）
2. 保存这张图的 URL 作为 Style Reference
3. 后续每张：`[内容描述] --sref [URL] --ar 16:9`
4. **50 张图保持同一审美**

**杀手锏**：`--sref` 让你的系列内容"看着是一套"，**品牌感立刻出来**。

### 🥈 方案 B：Nano Banana / FLUX（文字嵌入场景）

**适合**：封面需要清晰标题文字（海报型封面）
**工具**：[Nano Banana](../tools/image-gen/nano-banana.md) / [FLUX Pro](../tools/image-gen/flux.md)

**步骤**：
1. prompt 里显式写"text 'YOUR TITLE' on the image"
2. 描述文字位置 / 大小 / 风格
3. 生成 → 文字清晰度 > Midjourney

### 🥉 方案 C：即梦（国内免费 + 中文）

**适合**：国内创作者 / 预算 ¥0 / 中文封面
**工具**：[即梦](../tools/image-gen/jimeng.md)

**步骤**：
1. 中文 prompt 描述封面
2. 选风格 preset（/写实 /二次元 /古风 /扁平）
3. 生成 → 下载
4. 剪映 / Canva 加文字（即梦文字渲染仍弱于 Nano Banana）

---

## 关键 Prompt 模板

### Prompt 1：博客 / 公众号封面（横屏 16:9）

```
[文章主题的视觉化描述，具体场景 / 物体 / 人物]

风格：[电影感 / 极简 / 科技感 / 温暖 / 复古]
构图：[留白在左侧给标题 / 居中主体 / 对角线]
色调：[暖色 / 冷色 / 高对比 / 低饱和]
--ar 16:9 --sref [你的系列 sref URL]
```

**关键**：描述"视觉场景"而不是"文章内容"。
- ❌ "一篇关于 AI 工具的文章封面"
- ✅ "一个程序员在深夜的工位上，屏幕发出蓝光，桌上有咖啡和笔记本，电影感，暖色调"

### Prompt 2：小红书 / 抖音封面（竖屏 9:16）

```
[视觉描述]

风格：[清新 / 高级感 / 可爱 / 国潮]
构图：上方 1/3 留白给标题文字
色调：[明亮 / 柔和 / 高饱和]
--ar 9:16
```

**小红书封面关键**：
- 上方留白给大字标题
- 色彩明亮（暗色在小红书 feed 里不显眼）
- 主体清晰（缩略图也能看清）

### Prompt 3：带文字的海报型封面（Nano Banana / FLUX）

```
A modern poster design with bold text "YOUR TITLE" prominently displayed,
[背景视觉描述],
text is white/black on [contrasting background],
clean typography, professional layout,
--ar 16:9
```

**Nano Banana / FLUX 对文字渲染比 Midjourney 强**。

### Prompt 4：系列封面的"第一张定调"

```
我要做一个系列内容的封面风格：
- 系列名：[名字]
- 内容类型：[技术 / 生活 / 商业 / 教育]
- 目标平台：[博客 / 公众号 / YouTube / 小红书]
- 我想要的感觉：[3-5 个形容词]
- 参考：[如果有参考图 / 品牌 / 风格]

帮我写 5 个 Midjourney prompt 候选（各自不同风格方向），
我选一个作为系列 sref 基准。
```

---

## 真实使用 tips

### 1. Style Reference 是系列内容的命脉

做系列内容（"链上工程笔记 #01 #02 ..."）：
- 第一张定调 → 保存 URL
- 后续每张 `--sref [URL]`
- **50 张图风格一致 = 品牌感**

**没有 sref 的系列内容 = 每张图风格乱飞 = 不专业**。

### 2. 封面文字用后期加（不要让 AI 写）

AI 生成图里的文字**仍然不够稳定**（尤其中文）。
最稳工作流：
- AI 生成"纯视觉"封面（不含文字）
- 用 Canva / 剪映 / Figma 后期加文字
- 文字字体 / 大小 / 位置你完全控制

**除非用 Nano Banana / Ideogram 专门做文字渲染**。

### 3. 留白 = 给文字的空间

prompt 里加：
- "with negative space on the left for text"
- "upper third is clean sky / gradient for title overlay"
- "minimalist composition with room for typography"

**AI 会真的留出空间**，后期加文字不遮挡主体。

### 4. 比例选对

| 平台 | 比例 | Midjourney 参数 |
|------|------|---------|
| 博客 / YouTube | 16:9 | `--ar 16:9` |
| 公众号头图 | 2.35:1 | `--ar 47:20` |
| 小红书 / 抖音 | 3:4 或 9:16 | `--ar 3:4` |
| Twitter / X | 16:9 | `--ar 16:9` |
| Instagram | 1:1 或 4:5 | `--ar 1:1` |

### 5. 批量生成 + 挑选

每次生成 4 张（Midjourney 默认）→ 选最好的 1 张。
**不要第一张就用** —— 多生成几次，从 8-12 张里选。

### 6. 国内创作者的"零成本"方案

```
即梦（免费）生成视觉
+ 剪映（免费）加文字 / 排版
= ¥0 出专业封面
```

**对预算 ¥0 的创作者：这套完全够日常**。
真要"高级感" → Midjourney $30。

---

## 真实案例

我的 [blog.frankfu.cloud](https://blog.frankfu.cloud) 封面图：
- 用 Midjourney V7 + sref 保持系列风格
- 每篇 3 分钟出封面
- 一周 3 篇 = 9 分钟总封面时间
- **vs 手做 / 找图：每篇 30 分钟 → 节省 90%**

---

## 这套方案的边界

⚠️ 什么时候不适用：

- **品牌 VI 严格**：公司有严格品牌规范 → 用 Figma + 品牌模板
- **真实摄影**：产品图 / 人物照 → 拍摄 + AI 后期增强
- **极致定制**：每张图都要独特创意 → 设计师手作
- **法律 / 版权敏感**：商业广告 → 确认 AI 图的商用 license

---

## 相关场景

- [→ 营销图](./marketing-image.md) — 更大尺寸 / 更复杂的营销视觉
- [→ Logo 设计](./logo-design.md) — 品牌标识
- [→ 短视频](./short-video.md) — 视频封面
- [→ 写长文](./long-form-writing.md) — 文章配图

---

[← 回到所有场景](./README.md)
