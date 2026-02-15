
import { render as svelteRender } from 'svelte/server';
import Resume from './components/Resume.js';
import { setI18nLanguage } from './utils/helpers.js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

let language = "en-gb";

export function changeLanguage(lang) {
  let i18nLang = lang;
  switch (lang) {
    case "en-gb":
      i18nLang = "en";
      break;
  }
  setI18nLanguage(i18nLang);
  language = lang;
}

function buildThemeOverrides(meta) {
  if (!meta || !meta.theme) return '';
  const theme = meta.theme;
  const mapping = {
    primaryColor: '--color-accent',
    textColor: '--color-text',
    textSecondaryColor: '--color-text-secondary',
    headingColor: '--color-heading',
    linkColor: '--color-link',
    backgroundColor: '--color-background',
    backgroundAltColor: '--color-background-alt',
    borderColor: '--color-border',
    keywordTextColor: '--color-keyword-text',
    keywordBgColor: '--color-keyword-bg',
    fontFamily: '--font-family',
  };
  const overrides = [];
  for (const [key, cssVar] of Object.entries(mapping)) {
    if (theme[key]) {
      overrides.push('  ' + cssVar + ': ' + theme[key] + ';');
    }
  }
  if (overrides.length === 0) return '';
  return ':root {\n' + overrides.join('\n') + '\n}';
}

export function render(resume, options) {
  if (options && options.language) {
    changeLanguage(options.language);
  }
  const stylePath = join(__dirname, '..', 'style.css');
  const css = readFileSync(stylePath, 'utf-8');
  
  const result = svelteRender(Resume, {
    props: { resume, language }
  });

  let body = result.body;
  // Remove Svelte SSR comment markers
  body = body.replace(/<!--\[-->/g, '').replace(/<!--\]-->/g, '');

  const name = resume.basics?.name || '';
  const themeOverrides = buildThemeOverrides(resume.meta);

  return `<!doctype html>
<html lang="__LANG__">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>${name}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="./override.css">
    <style>
      ${css}
    </style>${themeOverrides ? '\n    <style>\n      ' + themeOverrides + '\n    </style>' : ''}
  </head>
  <body>
    ${body}
  </body>
</html>`.replace('__LANG__', language);
}

const marginValue = '0.8 cm';
export const pdfRenderOptions = {
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue,
  }
};
