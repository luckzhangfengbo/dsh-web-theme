# 🎨 我用 AI 做了一个 DSH 水墨主题插件，发布到 npm 了！

> 写代码的地方，也可以有诗意。

## 前言

大家好，我是一名喜欢折腾的开发者。最近在玩 **DeepSeek Harness（DSH）**——一个基于 Web 的 AI 编程助手。用了一段时间后，我觉得它的界面虽然简洁，但少了点「味道」。

作为一个热爱中国传统文化的程序员，我想：**能不能给 DSH 换上一身水墨意境的东方之美？**

于是，我花了几天时间，做了一个 DSH 主题插件 —— **墨韵（dsh-web-theme）**，并且已经发布到 npm 和 GitHub 上了！

## 效果展示

先来看看实机效果：

![远山孤松](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/screenshots/pine-hero.png)
![烟雨江南](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/screenshots/jiangnan-hero.png)
![竹影清风](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/screenshots/bamboo-hero.png)

> 水墨丹青，意境悠远。

## 墨韵（MoYun）是什么？

**墨韵** 是一个为 **DeepSeek Harness** 打造的中国水墨画风格主题插件，核心特性：

| 特性 | 说明 |
|------|------|
| 🏔️ **5 套水墨主题** | 远山孤松、烟雨江南、竹影清风、梅傲霜雪、山水留白 |
| 🖼️ **自定义壁纸** | 上传本地图片，自动压缩优化 |
| 🎚️ **背景模糊 & 透明度** | 独立滑块，随心调节 |
| 🌊 **墨点粒子特效** | 飘动的墨点动画，营造灵动氛围 |
| 🌏 **8 种语言** | 中/英/日/韩/西/法/德/俄 自动切换 |
| 🔌 **纯原生实现** | 基于 DSH 官方 token 系统，零侵入 |

## 两种玩法

### 玩法一：开箱即用的意境

内置 5 套原创水墨主题，每套自带专属意境：

![主题预览](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/previews/pine.png)
![主题预览](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/previews/jiangnan.png)
![主题预览](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/previews/bamboo.png)
![主题预览](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/previews/plum.png)
![主题预览](https://raw.githubusercontent.com/RevolutionLA/dsh-web-theme/main/docs/previews/landscape.png)

| 主题 | 意境 |
|------|------|
| 远山孤松 | 远山淡影，苍松独立 |
| 烟雨江南 | 水乡烟雨，灯影朦胧 |
| 竹影清风 | 翠竹摇曳，清风徐来 |
| 梅傲霜雪 | 梅花傲雪，枝干虬曲 |
| 山水留白 | 留白写意，远山孤亭 |

**戴上即雅致，不用任何调参。**

### 玩法二：随你掌控的写意

在预设之上，你还能：

- 🖼️ 上传自定义壁纸
- 🎚️ 调节背景模糊与透明度
- 🌊 开关墨点粒子特效
- ↩️ 随时一键还原

**想要的意境，自己画。**

## 技术实现

这个插件的技术架构挺有意思的。DSH 的口号是「一切皆插件」，主题系统也是 token 驱动的。

### 双面插件架构

DSH 的插件分为「双面」——Host 半边和浏览器半边：

```
dsh-web-theme（标准 dsh-plugin / 双面插件）
├── Host 半边（src/index.ts）
│   └── cordis.patch.yml 插入 loader 入口
│   └── 注册主题图片 API 路由
└── 浏览器半边（client/client.js）
    └── ctx.theme.register(5 套主题)
    └── ctx.theme.overrideTokens(壁纸半透明)
    └── 注册设置面板 UI
```

### 核心 API 调用

```javascript
// 注册 5 套水墨主题
ctx.theme.register(themes)

// 恢复用户上次选择的主题
ctx.theme.setTheme(savedTheme)

// 壁纸透明叠加层
ctx.theme.overrideTokens({
  '--dsw-alias-bg-base': 'rgba(0,0,0,0.6)'
})

// 挂载设置面板 UI
ctx.slots.inject('settings.section', {
  id: 'moyun',
  label: '墨韵主题'
})
```

### 持久化方案

| 数据 | 存储位置 | 原因 |
|------|----------|------|
| 主题选择 | `localStorage` | 轻量、快速 |
| 壁纸图片 | `IndexedDB` | 支持大图存储 |
| 设置偏好 | Host settings API | 跨标签页同步 |

## 安装方法

### 最简单的方式（推荐）

```bash
dsh plugin --profile web add dsh-web-theme
dsh web
```

一行命令安装，重启 DSH Web 即可。

### 从 GitHub 安装

```bash
dsh plugin --profile web add 'github:RevolutionLA/dsh-web-theme'
```

### 告诉 AI Agent 帮你装

> 请帮我安装 dsh-web-theme 墨韵水墨主题插件，装完告诉我如何重启。

## 兼容性

| 项 | 要求 |
|----|------|
| DSH | `0.1.0-rc.6+` |
| Node.js | `>=18` |
| 浏览器 | Chrome / Safari（支持 CSS 变量） |

## 与同类产品对比

| 能力 | 墨韵（本插件） | 同类换肤方案 |
|------|:---:|:---:|
| 原生 token 主题 | ✅ | ✅ |
| 中国水墨画风格 | ✅ | ❌ |
| 墨点粒子特效 | ✅ | ❌ |
| 8 种语言国际化 | ✅ | 部分 |
| DSH 原生设置面板 | ✅ | ❌ |

## 开发踩坑记录

说点干货，分享一下我开发过程中遇到的问题：

### 1. 包体积过大

最初发布时包体积高达 **107MB**！原因是主题原图太大。解决方法：

- 预览缩略图用 230px 宽度
- Hero 截图压缩到 800px 宽度
- 主题原图保留 2848×1600（API 服务用）

最终包体积控制在 **26MB**。

### 2. npm 2FA 验证

npm 现在要求两步验证（2FA）才能发布。发布时需要：

```bash
npm publish --access public
# 终端会提示输入 OTP
Enter OTP: 123456
```

### 3. Registry 切换

国内用户默认用的是 CNPM 镜像，但发布需要用官方源：

```bash
npm config set registry https://registry.npmjs.org/
```

### 4. 插件加载机制

DSH 的插件通过 `cordis.patch.yml` 声明，需要正确配置 `exports`：

```json
{
  "exports": {
    "./client": "./client.js"
  },
  "dsh": {
    "bundle": "./cordis.patch.yml"
  }
}
```

## 后续计划

- [ ] 更多水墨主题（四季系列、山水长卷）
- [ ] 在线主题 Studio（浏览器内调色 + 实时预览）
- [ ] 首帧无闪烁（FOUC）改进
- [ ] 社区主题投稿与分享

## 项目地址

- 🌟 **GitHub**: https://github.com/RevolutionLA/dsh-web-theme
- 📦 **npm**: https://www.npmjs.com/package/dsh-web-theme
- 📖 **DSH Marketplace**: 搜索 `dsh-web-theme`

## 最后

做这个插件的初衷很简单——**写代码的地方，也可以有诗意。**

如果你喜欢这个插件，欢迎：

- ⭐ 给 GitHub 点个 Star
- 👍 给 npm 点个 Like
- 💬 在评论区说说你的想法
- 🔧 提交 Issue 或 PR

感谢阅读！希望你也能在 DSH 里找到属于自己的那片水墨意境。🖌️

---

*本文由 dsh-web-theme 作者原创，欢迎转载，注明出处即可。*
