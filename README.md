# jsonresume-theme-stackoverflow

> 🚀 A Svelte-powered Stack Overflow theme for [JSON Resume](https://jsonresume.org/)

[![npm version](https://img.shields.io/npm/v/jsonresume-theme-stackoverflow)](https://www.npmjs.com/package/jsonresume-theme-stackoverflow)
[![npm downloads](https://img.shields.io/npm/dm/jsonresume-theme-stackoverflow)](https://www.npmjs.com/package/jsonresume-theme-stackoverflow)
[![license](https://img.shields.io/npm/l/jsonresume-theme-stackoverflow)](https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/develop/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/phoinixi/jsonresume-theme-stackoverflow)](https://github.com/phoinixi/jsonresume-theme-stackoverflow)
[![Node version](https://img.shields.io/node/v/jsonresume-theme-stackoverflow)](https://nodejs.org)

## ✨ Features

- **Svelte SSR** — Server-side rendered with Svelte 5 for fast, clean HTML output
- **Dark mode** — Automatic light/dark theme via `prefers-color-scheme`
- **Internationalization** — 12 languages supported out of the box
- **Customizable themes** — Override colors and fonts via `resume.json` meta field
- **Override CSS** — Drop in an `override.css` for full control
- **PDF-ready** — Built-in PDF render options with sensible margins
- **Zero runtime JS** — Pure HTML + CSS output, no client-side JavaScript

## 📸 Screenshots

| Light Mode | Dark Mode |
|:---:|:---:|
| ![Light mode](https://raw.githubusercontent.com/phoinixi/jsonresume-theme-stackoverflow/develop/docs/light.png) | ![Dark mode](https://raw.githubusercontent.com/phoinixi/jsonresume-theme-stackoverflow/develop/docs/dark.png) |

## 📦 Installation

```bash
npm install jsonresume-theme-stackoverflow
```

### With the JSON Resume CLI

```bash
npm install -g resume-cli
resume export resume.html --theme stackoverflow
resume export resume.pdf --theme stackoverflow
```

### Programmatic Usage

```js
const theme = require('jsonresume-theme-stackoverflow');
const resume = require('./resume.json');

// Optional: set language (default: "en-gb")
theme.changeLanguage('de');

const html = theme.render(resume);
```

## 🌍 Supported Languages

| Code | Language |
|------|----------|
| `en-gb` / `en` | English (default) |
| `de` | German / Deutsch |
| `fr` | French / Français |
| `es` | Spanish / Español |
| `it` | Italian / Italiano |
| `pt` | Portuguese / Português |
| `zh` | Chinese / 中文 |
| `ja` | Japanese / 日本語 |
| `ko` | Korean / 한국어 |
| `nl` | Dutch / Nederlands |
| `pl` | Polish / Polski |
| `ru` | Russian / Русский |

```js
const theme = require('jsonresume-theme-stackoverflow');
theme.changeLanguage('fr'); // Set before calling render()
const html = theme.render(resume);
```

## 🎨 Theme Customization

Customize colors and fonts by adding a `theme` object inside `meta` in your `resume.json`:

```json
{
  "meta": {
    "theme": {
      "primaryColor": "#2563eb",
      "textColor": "#1e293b",
      "backgroundColor": "#ffffff",
      "fontFamily": "\"Inter\", sans-serif",
      "linkColor": "#2563eb",
      "headingColor": "#0f172a"
    }
  }
}
```

### Available theme properties

| Property | CSS Variable | Description |
|----------|-------------|-------------|
| `primaryColor` | `--color-accent` | Section titles, accents |
| `textColor` | `--color-text` | Main body text |
| `textSecondaryColor` | `--color-text-secondary` | Secondary text (companies, dates) |
| `headingColor` | `--color-heading` | Heading color |
| `linkColor` | `--color-link` | Link color |
| `backgroundColor` | `--color-background` | Page background |
| `backgroundAltColor` | `--color-background-alt` | Summary section background |
| `borderColor` | `--color-border` | Border colors |
| `keywordTextColor` | `--color-keyword-text` | Skill/keyword tag text |
| `keywordBgColor` | `--color-keyword-bg` | Skill/keyword tag background |
| `fontFamily` | `--font-family` | Base font family |

### Override CSS

For full CSS control, create an `override.css` file alongside your resume. The theme automatically loads it via `<link rel="stylesheet" href="./override.css">`.

## 🛠 Development

```bash
git clone https://github.com/phoinixi/jsonresume-theme-stackoverflow.git
cd jsonresume-theme-stackoverflow
npm install
npm run build
npm test
```

## 📄 License

MIT
