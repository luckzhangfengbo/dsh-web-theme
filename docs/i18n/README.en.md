<p align="center">
  <a href="../../README.md">中文</a> · <strong>English</strong> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.ru.md">Русский</a>
</p>

<div align="center">

# MoYun Theme 🌿

**Give DeepSeek Harness an Eastern ink-painting aesthetic.**

Chinese ink painting style theme · Preset moods · Custom wallpaper · Particle effects · 8 languages

> **Ink wash, timeless beauty.**

| 🖼️ 5 preset themes | 🎨 Custom wallpaper | 🌊 Ink particles | 🌏 8 languages |
|---|---|---|---|

> Pure native · No injection · No installer patches · Survives DSH updates

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏔️ **5 Preset Themes** | Mountains & Pine, Misty Jiangnan, Bamboo Breeze, Plum in Snow, Landscape White |
| 🖼️ **Custom Wallpaper** | Any image size, auto-compressed on client side |
| 🌊 **Ink Particles** | Drifting ink dots, dewdrops, and shimmering particles |
| 🎚️ **Background Blur** | Slider blur control |
| 🌫️ **Background Opacity** | Blend wallpaper with theme color |
| 🌏 **8 Languages** | 中文 · English · 日本語 · 한국어 · Español · Français · Deutsch · Русский |
| 💾 **Persistence** | Settings auto-saved to IndexedDB |
| 📱 **Responsive** | Window resize and orientation changes |

---

## 🏔️ Preset Themes

| ID | Name | Mood |
|----|------|------|
| `01` | Mountains & Pine | Distant mountains, solitary pine |
| `02` | Misty Jiangnan | Misty waterside, lantern glow |
| `03` | Bamboo Breeze | Bamboo swaying, gentle breeze |
| `04` | Plum in Snow | Plum blossoms in snow |
| `05` | Landscape White | Minimalist landscape |

---

## ⚡ Installation

### Option A: CLI

```sh
dsh plugin --profile web add dsh-web-theme && dsh web
```

### Option B: Local development

```sh
cd dsh-web-theme
dsh plugin --profile web add . && dsh web
```

After install, open **Settings → Theme** to pick your ink painting theme.

---

## 🔄 Update / Uninstall

```sh
# Update
dsh plugin --profile web update dsh-web-theme

# Uninstall
dsh plugin --profile web remove dsh-web-theme
```

---

## 🧩 Compatibility

| Item | Required |
|------|----------|
| DeepSeek Harness | `0.1.0-rc.6+` |
| Node.js | `>=18` |
| Browser | Modern Chromium / WebKit |

---

## 🙏 Credits

- Architecture reference: [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin)

## 📄 License

[MIT](../../LICENSE)

## 👤 Author

**橙虚得猿** · [GitHub](https://github.com/RevolutionLA/dsh-web-theme)