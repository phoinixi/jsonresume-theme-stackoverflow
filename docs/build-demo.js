/**
 * Build demo page for GitHub Pages
 * Renders sample.resume.json using the theme
 */
const renderer = require('../dist/index');
const resume = require('./sample.resume.json');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Render the resume
const html = renderer.render(resume);

// Write the rendered resume — force light mode by overriding dark media query
const lightHtml = html.replace('</head>', `<style>
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #3d4767;
    --color-text-secondary: #72778a;
    --color-text-muted: #6a737c;
    --color-heading: #2d333a;
    --color-accent: #f48024;
    --color-link: #0077cc;
    --color-link-hover: #0095ff;
    --color-background: #ffffff;
    --color-background-alt: #f8f9fa;
    --color-border: #e4e6e8;
    --color-border-light: #eff0f1;
    --color-keyword-text: #39739d;
    --color-keyword-bg: #e1ecf4;
    --color-keyword-border: #e1ecf4;
    --color-reference-border: #f48024;
    --color-bar-beginner: #eb5f51;
    --color-bar-intermediate: #ffdf1f;
    --color-bar-advanced: #5cb85c;
    --color-bar-master: #59c596;
    --color-section-title-bg: #ffffff;
  }
}
</style></head>`);
fs.writeFileSync(path.join(outDir, 'index.html'), lightHtml);

// Also render a dark mode version by injecting meta override
// Dark mode: force dark scheme so the CSS media query kicks in
const darkHtml = html.replace('</head>', `<meta name="color-scheme" content="dark">\n</head>`);
fs.writeFileSync(path.join(outDir, 'dark.html'), darkHtml);

// Create a landing page
const landing = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jsonresume-theme-stackoverflow — Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #e2e8f0; min-height: 100vh; }
    .hero { text-align: center; padding: 4rem 2rem 2rem; }
    .hero h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
    .hero h1 span { color: #f97316; }
    .hero p { font-size: 1.2rem; color: #94a3b8; max-width: 600px; margin: 0 auto 2rem; }
    .badges { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
    .badges img { height: 20px; }
    .buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem; }
    .btn { display: inline-block; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; transition: transform 0.2s; }
    .btn:hover { transform: translateY(-2px); }
    .btn-primary { background: #f97316; color: #fff; }
    .btn-secondary { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; }
    .preview { max-width: 1000px; margin: 0 auto; padding: 0 2rem 4rem; }
    .preview iframe { width: 100%; height: 800px; border: 1px solid #334155; border-radius: 12px; background: #fff; }
    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; max-width: 900px; margin: 0 auto 3rem; padding: 0 2rem; }
    .feature { background: #1e293b; border-radius: 12px; padding: 1.5rem; border: 1px solid #334155; }
    .feature h3 { margin-bottom: 0.5rem; font-size: 1.1rem; }
    .feature p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
    .tabs { display: flex; gap: 0.5rem; justify-content: center; margin-bottom: 1rem; }
    .tab { padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; background: #1e293b; border: 1px solid #334155; color: #e2e8f0; font-size: 0.9rem; }
    .tab.active { background: #f97316; border-color: #f97316; color: #fff; }
    footer { text-align: center; padding: 2rem; color: #64748b; font-size: 0.85rem; }
    footer a { color: #f97316; text-decoration: none; }
  </style>
</head>
<body>
  <div class="hero">
    <h1>jsonresume-theme-<span>stackoverflow</span></h1>
    <p>A Stack Overflow inspired theme for JSON Resume. Built with Svelte SSR, featuring dark mode, i18n, and smart skill level detection.</p>
    <div class="badges">
      <img src="https://img.shields.io/npm/v/jsonresume-theme-stackoverflow.svg?style=flat-square" alt="npm version">
      <img src="https://img.shields.io/npm/dm/jsonresume-theme-stackoverflow.svg?style=flat-square" alt="npm downloads">
      <img src="https://img.shields.io/github/stars/phoinixi/jsonresume-theme-stackoverflow?style=flat-square" alt="GitHub stars">
      <img src="https://img.shields.io/github/license/phoinixi/jsonresume-theme-stackoverflow?style=flat-square" alt="License">
    </div>
    <div class="buttons">
      <a href="https://github.com/phoinixi/jsonresume-theme-stackoverflow" class="btn btn-primary">⭐ GitHub</a>
      <a href="https://www.npmjs.com/package/jsonresume-theme-stackoverflow" class="btn btn-secondary">📦 npm</a>
      <a href="https://github.com/phoinixi/resuml" class="btn btn-secondary">🛠 Use with resuml</a>
    </div>
  </div>

  <div class="features">
    <div class="feature">
      <h3>⚡ Svelte SSR</h3>
      <p>The only Svelte-powered JSON Resume theme. Server-side rendered for fast, clean HTML output.</p>
    </div>
    <div class="feature">
      <h3>🌙 Dark Mode</h3>
      <p>Automatic dark mode via prefers-color-scheme. Customize all colors through resume.json meta field.</p>
    </div>
    <div class="feature">
      <h3>🌍 12 Languages</h3>
      <p>Built-in i18n: EN, DE, FR, ES, IT, PT, ZH, JA, KO, NL, PL, RU. Smart level synonyms across languages.</p>
    </div>
    <div class="feature">
      <h3>🎨 Customizable</h3>
      <p>Full theme customization via meta.theme in your resume.json. Colors, fonts, everything.</p>
    </div>
  </div>

  <div class="preview">
    <div class="tabs">
      <button class="tab active" onclick="switchTheme('light')">☀️ Light</button>
      <button class="tab" onclick="switchTheme('dark')">🌙 Dark</button>
    </div>
    <iframe id="preview-frame" src="./resume.html" title="Resume Preview"></iframe>
  </div>

  <footer>
    Made with ❤️ by <a href="https://github.com/phoinixi">phoinixi</a> · 
    Powered by <a href="https://jsonresume.org">JSON Resume</a> · 
    CLI: <a href="https://github.com/phoinixi/resuml">resuml</a>
  </footer>

  <script>
    function switchTheme(theme) {
      const frame = document.getElementById('preview-frame');
      frame.src = theme === 'dark' ? './dark.html' : './resume.html';
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      event.target.classList.add('active');
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'landing.html'), landing);

// Copy light resume to resume.html, then overwrite index with landing
fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, 'resume.html'));
fs.writeFileSync(path.join(outDir, 'index.html'), landing);

console.log('✅ Demo built:');
console.log('   docs/dist/index.html (landing page)');
console.log('   docs/dist/resume.html (light theme)');
console.log('   docs/dist/dark.html (dark theme)');
