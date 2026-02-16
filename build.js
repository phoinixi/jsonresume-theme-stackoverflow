/**
 * Build script: compiles Svelte components and bundles into dist/index.js (CJS)
 * 
 * 1. Compile .svelte files → .js with svelte/compiler (server mode)
 * 2. Transpile TypeScript from .ts files using the TypeScript compiler
 * 3. Create ESM entry point
 * 4. Bundle with esbuild into CJS
 */

const { compile } = require('svelte/compiler');
const ts = require('typescript');
const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, '.build');
const DIST_DIR = path.join(__dirname, 'dist');

const tsCompilerOptions = {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  esModuleInterop: true,
  strict: true,
  skipLibCheck: true,
  verbatimModuleSyntax: false,
};

/**
 * Transpile TypeScript to JavaScript using the TypeScript compiler API.
 * Handles all TS syntax properly (generics, Record<K,V>, interfaces, etc.)
 */
function transpileTS(code, fileName = 'file.ts') {
  const result = ts.transpileModule(code, {
    compilerOptions: tsCompilerOptions,
    fileName,
    reportDiagnostics: true,
  });

  if (result.diagnostics && result.diagnostics.length > 0) {
    for (const diag of result.diagnostics) {
      const msg = ts.flattenDiagnosticMessageText(diag.messageText, '\n');
      console.warn(`TS warning in ${fileName}: ${msg}`);
    }
  }

  return result.outputText;
}

function collectFiles(dir, exts, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, exts, files);
    else if (exts.some(e => entry.name.endsWith(e))) files.push(full);
  }
  return files;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function build() {
  // Clean build dir
  if (fs.existsSync(BUILD_DIR)) fs.rmSync(BUILD_DIR, { recursive: true });
  ensureDir(BUILD_DIR);
  ensureDir(DIST_DIR);

  // Compile Svelte files
  const svelteFiles = collectFiles(SRC_DIR, ['.svelte']);
  for (const file of svelteFiles) {
    const source = fs.readFileSync(file, 'utf-8');
    
    // Transpile TS in script blocks using the TypeScript compiler
    const processed = source.replace(
      /<script([^>]*)>([\s\S]*?)<\/script>/g,
      (match, attrs, content) => {
        if (attrs.includes('lang="ts"') || attrs.includes("lang='ts'")) {
          const jsContent = transpileTS(content, file);
          return `<script${attrs.replace(/\s*lang=["']ts["']/, '')}>${jsContent}</script>`;
        }
        return match;
      }
    );

    const result = compile(processed, {
      generate: 'server',
      name: path.basename(file, '.svelte'),
      filename: file,
      css: 'injected',
    });

    const relPath = path.relative(SRC_DIR, file).replace('.svelte', '.js');
    const outPath = path.join(BUILD_DIR, relPath);
    ensureDir(path.dirname(outPath));
    
    // Fix import paths: .svelte → .js, .ts → .js
    let code = result.js.code;
    code = code.replace(/(from\s+['"][^'"]*)\.(svelte|ts)(['"])/g, '$1.js$3');
    
    fs.writeFileSync(outPath, code);
  }

  // Compile TS files
  const tsFiles = collectFiles(SRC_DIR, ['.ts']);
  for (const file of tsFiles) {
    const source = fs.readFileSync(file, 'utf-8');
    let code = transpileTS(source, file);
    // Fix import paths
    code = code.replace(/(from\s+['"][^'"]*)\.(ts)(['"])/g, '$1.js$3');
    
    const relPath = path.relative(SRC_DIR, file).replace('.ts', '.js');
    const outPath = path.join(BUILD_DIR, relPath);
    ensureDir(path.dirname(outPath));
    fs.writeFileSync(outPath, code);
  }

  // Create entry point
  const entryCode = `
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
  return ':root {\\n' + overrides.join('\\n') + '\\n}';
}

export function render(resume, options) {
  if (options && options.language) {
    changeLanguage(options.language);
  }
  const stylePath = join(__dirname, '..', 'styles', 'global.css');
  const css = readFileSync(stylePath, 'utf-8');
  
  const result = svelteRender(Resume, {
    props: { resume, language }
  });

  let body = result.body;
  let head = result.head || '';
  // Remove Svelte SSR comment markers
  body = body.replace(/<!--\\[-->/g, '').replace(/<!--\\]-->/g, '');

  const name = resume.basics?.name || '';
  const themeOverrides = buildThemeOverrides(resume.meta);

  return \`<!doctype html>
<html lang="__LANG__">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>\${name}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="./override.css">
    <style>
      \${css}
    </style>
    \${head}\${themeOverrides ? '\\n    <style>\\n      ' + themeOverrides + '\\n    </style>' : ''}
  </head>
  <body>
    \${body}
  </body>
</html>\`.replace('__LANG__', language);
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
`;

  fs.writeFileSync(path.join(BUILD_DIR, 'index.js'), entryCode);

  // Bundle with esbuild
  esbuild.buildSync({
    entryPoints: [path.join(BUILD_DIR, 'index.js')],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    outfile: path.join(DIST_DIR, 'index.js'),
    external: ['fs', 'path', 'url'],
    target: 'node18',
    treeShaking: true,
    minifySyntax: true,
    minifyWhitespace: true,
    define: {},
    banner: {
      js: '// Auto-generated by build.js — do not edit\n',
    },
  });

  // Clean up build dir
  fs.rmSync(BUILD_DIR, { recursive: true });

  const stat = fs.statSync(path.join(DIST_DIR, 'index.js'));
  console.log(`Built dist/index.js (${(stat.size / 1024).toFixed(1)}KB)`);

  // Copy global.css to root style.css (kept for backward compat)
  const globalCssPath = path.join(__dirname, 'styles', 'global.css');
  if (fs.existsSync(globalCssPath)) {
    fs.copyFileSync(globalCssPath, path.join(__dirname, 'style.css'));
    console.log('Copied global.css to style.css');
  }
}

build();
