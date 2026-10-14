const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Usage: node scripts/screenshot.js [path/to/resume]  (default: docs/sample.resume)
// The argument follows the same convention as scripts/preview.js and produces
// the same basename. Requires: node scripts/preview.js [path/to/resume] first
// Output (in artifacts/, sibling of this scripts/ directory):
//   <basename>.png        - full-page screenshot (screen view, 1200x1600 viewport)
//   <basename>.pdf        - print PDF (A4, printBackground, zero margins)
//   <basename>-page-N.png - exact per-page renders of the PDF (via pdftoppm, optional)
async function capture() {
  try {
    const arg = process.argv[2] || 'docs/sample.resume';
    const basename = path.basename(arg, '.json');
    // __dirname-based paths: robust regardless of cwd, and survive this
    // scripts/ directory being moved (artifacts/ stays its sibling).
    const outputDir = path.resolve(__dirname, '..', 'artifacts');
    const htmlFile = path.join(outputDir, `${basename}.html`);
    const screenshotFile = path.join(outputDir, `${basename}.png`);
    const pdfFile = path.join(outputDir, `${basename}.pdf`);

    if (!fs.existsSync(htmlFile)) {
      console.error(`Error: ${htmlFile} not found. Run node scripts/preview.js ${arg} first.`);
      process.exit(1);
    }
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    console.log('Launching browser for visual verification...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1200, height: 1600 }
    });
    const page = await context.newPage();

    await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    console.log('Capturing full-page screenshot...');
    await page.screenshot({ path: screenshotFile, fullPage: true });

    console.log('Generating print PDF...');
    await page.pdf({
      path: pdfFile,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' }
    });

    await browser.close();

    // Exact per-page renders from the PDF (matches PDF pagination exactly).
    // Optional: skipped gracefully if pdftoppm is unavailable.
    try {
      execSync(`pdftoppm -png -r 150 "${pdfFile}" "${path.join(outputDir, basename + '-page')}"`);
      console.log(`Per-page renders: ${path.join(outputDir, basename + '-page-N.png')}`);
    } catch (e) {
      console.warn('pdftoppm not available — skipping per-page renders.');
    }

    console.log(`Visual assets generated:\n- ${screenshotFile}\n- ${pdfFile}\n- ${path.join(outputDir, basename + '-page-N.png')}`);
  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  }
}

capture();
