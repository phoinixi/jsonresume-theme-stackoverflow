# jsonresume-theme-stackoverflow

> 🚀 A Svelte-powered Stack Overflow theme for [JSON Resume](https://jsonresume.org/)

[![npm version](https://img.shields.io/npm/v/jsonresume-theme-stackoverflow)](https://www.npmjs.com/package/jsonresume-theme-stackoverflow)
[![npm downloads](https://img.shields.io/npm/dm/jsonresume-theme-stackoverflow)](https://www.npmjs.com/package/jsonresume-theme-stackoverflow)
[![license](https://img.shields.io/npm/l/jsonresume-theme-stackoverflow)](https://github.com/phoinixi/jsonresume-theme-stackoverflow/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/phoinixi/jsonresume-theme-stackoverflow)](https://github.com/phoinixi/jsonresume-theme-stackoverflow)
[![Node version](https://img.shields.io/node/v/jsonresume-theme-stackoverflow)](https://nodejs.org)

## 🔗 Related

- **[resuml CLI](https://github.com/phoinixi/resuml)** — Use with resuml CLI for building, previewing, and exporting resumes
- **[jsonresume-theme-react](https://github.com/phoinixi/jsonresume-theme-react)** — React-based JSON Resume theme
- **[JSON Resume](https://jsonresume.org)** — The open standard for resume data

## ✨ Features

- **Svelte SSR** — Server-side rendered with Svelte 5 for fast, clean HTML output
- **Dark mode** — Automatic light/dark theme via `prefers-color-scheme`
- **Internationalization** — 12 languages supported out of the box
- **Customizable themes** — Override colors and fonts via `resume.json` meta field
- **Section ordering** — Reorder resume sections via `meta.theme.sectionOrder`
- **Override CSS** — Drop in an `override.css` for full control
- **PDF-ready** — Built-in PDF render options with sensible margins
- **Zero runtime JS** — Pure HTML + CSS output, no client-side JavaScript

## 📸 Screenshots

| Light Mode | Dark Mode |
|:---:|:---:|
| ![Light mode](https://raw.githubusercontent.com/phoinixi/jsonresume-theme-stackoverflow/main/docs/light.png) | ![Dark mode](https://raw.githubusercontent.com/phoinixi/jsonresume-theme-stackoverflow/main/docs/dark.png) |

## 📦 Installation

```bash
npm install jsonresume-theme-stackoverflow
```

### With resuml (recommended)

```bash
npm install -g resuml
resuml init                          # Create a resume.yaml
resuml build -t stackoverflow        # Build HTML
resuml pdf -t stackoverflow          # Export PDF
resuml serve -t stackoverflow        # Live preview
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

## 📑 Section Ordering

Control the order of resume sections by adding a `sectionOrder` array to `meta.theme`:

```json
{
  "meta": {
    "theme": {
      "sectionOrder": ["basics", "work", "skills", "education", "projects"]
    }
  }
}
```

### Available sections

`basics`, `skills`, `work`, `projects`, `volunteer`, `education`, `awards`, `certificates`, `publications`, `languages`, `interests`, `references`

**Default order:** basics → skills → work → projects → volunteer → education → awards → certificates → publications → languages → interests → references

Only sections listed in `sectionOrder` will be rendered. Omit sections to hide them, or include all for full control over ordering.

## 🛠 Development

```bash
git clone https://github.com/phoinixi/jsonresume-theme-stackoverflow.git
cd jsonresume-theme-stackoverflow
npm install
npm run build
npm test
```

### Preview, PDF and PNG tooling

`npm run preview` renders the bundled sample resume (`docs/sample.resume.json`) to `artifacts/sample.resume.html`. Any resume works — pass its path without the `.json` suffix:

```bash
npm run preview -- path/to/resume
```

`npm run screenshot` turns the rendered HTML into a full-page PNG and a print PDF in `artifacts/`. It requires the Playwright browser:

```bash
npx playwright install chromium
npm run screenshot
```

When `pdftoppm` (poppler) is installed, exact per-page PNGs (`<name>-page-N.png`) are rendered from the PDF as well; the step is skipped gracefully otherwise.

Artifacts follow the `<datafile>-<kind>[-<page-N>].<ext>` naming convention (e.g. `sample.resume.html`, `sample.resume.png`, `sample.resume.pdf`, `sample.resume-page-N.png`). The `artifacts/` directory is gitignored and never committed.

The README light/dark screenshots are still regenerated with `node docs/screenshot.js` (puppeteer, not included in devDependencies to keep installs lean).

## 📄 License

MIT
