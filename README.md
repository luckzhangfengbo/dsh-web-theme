<p align="center">
  <strong>中文</strong> · <a href="./docs/i18n/README.en.md">English</a> · <a href="./docs/i18n/README.ja.md">日本語</a> · <a href="./docs/i18n/README.ko.md">한국어</a> · <a href="./docs/i18n/README.es.md">Español</a> · <a href="./docs/i18n/README.fr.md">Français</a> · <a href="./docs/i18n/README.de.md">Deutsch</a> · <a href="./docs/i18n/README.ru.md">Русский</a>
</p>

<div align="center">

# 墨韵 · MoYun 🌿

**为 DeepSeek Harness 换上一袭水墨意境的东方之美。**

中国水墨画风格主题 · 预设意境 · 自定义壁纸 · 粒子特效 · 全语言支持

> **水墨丹青，意境悠远。**

| 🖼️ 5 套预设意境 | 🎨 自定义壁纸 | 🌊 粒子特效 | 🌏 8 种语言 |
|---|---|---|---|

> 纯原生实现 · 无注入 · 不改安装包 · 不因 DSH 更新失效

</div>

---

## ✨ 功能特性

| 能力 | 说明 |
|------|------|
| 🏔️ **5 套预设主题** | 远山孤松、烟雨江南、竹影清风、梅傲霜雪、山水留白 |
| 🖼️ **自定义壁纸** | 支持任意大小图片，客户端自动压缩优化 |
| 🌊 **水墨粒子** | 飘动的墨点、雨珠、微光粒子，营造灵动氛围 |
| 🎚️ **背景模糊** | 滑块调节壁纸模糊程度 |
| 🌫️ **背景透明度** | 控制壁纸与主题色的融合程度 |
| 🌏 **8 种语言** | 中文 · English · 日本語 · 한국어 · Español · Français · Deutsch · Русский |
| 💾 **本地持久化** | 设置自动保存到 IndexedDB，刷新不丢失 |
| 📱 **响应式适配** | 窗口缩放、横竖屏切换自动适配 |

---

## 🏔️ 预设主题一览

| ID | 名称 | 意境 |
|----|------|------|
| `01` | 远山孤松 | 远山淡影，苍松独立 |
| `02` | 烟雨江南 | 水乡烟雨，灯影朦胧 |
| `03` | 竹影清风 | 翠竹摇曳，清风徐来 |
| `04` | 梅傲霜雪 | 梅花傲雪，枝干虬曲 |
| `05` | 山水留白 | 留白写意，远山孤亭 |

---

## ⚡ 安装

### 方式 A：命令行安装

```sh
dsh plugin --profile web add dsh-web-theme && dsh web
```

### 方式 B：从本地路径开发

```sh
cd dsh-web-theme
dsh plugin --profile web add . && dsh web
```

安装完成后，打开 **设置 → 主题** 即可选择水墨主题。

---

## 🧩 插件架构

```text
            ┌────────────── dsh-web-theme（标准 dsh-plugin）──────────────┐
            │  dsh.bundle   → cordis.patch.yml 宿主端路由注册                │
            │  dsh.client   → client/client.js  浏览器端主题 + 设置面板       │
            └──────────────────────────────────────────────────────────────┘
```

- **宿主端** (`src/index.ts`)：注册主题图片 API 路由
- **浏览器端** (`client/client.js`)：`__ModuleLoader__` 格式，注册皮肤 tokens、设置面板、壁纸图层

### 工作原理

1. **皮肤注册**：通过 `ctx.theme.register()` 注册 5 套水墨皮肤 tokens
2. **壁纸图层**：创建 `z-index:-1` 的固定 div 作为背景图层
3. **Token 覆盖**：`ctx.theme.overrideTokens()` 叠加半透明遮罩让壁纸透出
4. **设置面板**：`ctx.slots.inject('settings.section')` 注入主题设置 tab
5. **多语言**：`ctx.locale.register()` 注册 8 种语言字典，跟随系统切换

---

## 📁 项目结构

```text
dsh-web-theme/
├── client/
│   └── client.js          # 浏览器端模块（主题 + 设置面板）
├── src/
│   ├── index.ts           # 宿主端入口
│   └── host/
│       └── index.ts       # 路由注册 + 设置注册
├── themes/                # 预设主题图片
│   ├── 01.png ~ 05.png
├── docs/
│   └── i18n/              # 多语言文档
├── cordis.patch.yml       # DSH bundle 补丁
├── package.json           # 插件 manifest
└── README.md
```

---

## 🔄 更新 / 卸载

```sh
# 更新
dsh plugin --profile web update dsh-web-theme

# 卸载
dsh plugin --profile web remove dsh-web-theme
```

---

## 🧩 兼容性

| 项目 | 要求 |
|------|------|
| DeepSeek Harness | `0.1.0-rc.6+` |
| Node.js | `>=18` |
| 浏览器 | 现代 Chromium / WebKit |

---

## 📄 许可证

[MIT](./LICENSE)

## 👤 作者

**橙虚得猿** · [GitHub](https://github.com/RevolutionLA/dsh-web-theme)