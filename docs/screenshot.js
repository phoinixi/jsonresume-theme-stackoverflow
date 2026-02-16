/**
 * Generate high-res screenshots of light and dark resume demos
 * Requires: npm install puppeteer (not included in devDependencies)
 */
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch {
  console.error(
    '📸 puppeteer is not installed.\n' +
    '   To generate screenshots, install it first:\n\n' +
    '     npm install puppeteer\n\n' +
    '   Then run this script again.'
  );
  process.exit(1);
}

const path = require('path');

async function screenshot(page, file, url) {
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: file, fullPage: true });
  console.log(`📸 ${path.basename(file)}`);
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  const lightUrl = `file://${path.join(__dirname, 'dist', 'resume.html')}`;
  const darkUrl = `file://${path.join(__dirname, 'dist', 'dark.html')}`;

  await screenshot(page, path.join(__dirname, 'light.png'), lightUrl);
  await screenshot(page, path.join(__dirname, 'dark.png'), darkUrl);

  await browser.close();
  console.log('✅ Screenshots saved to docs/');
})();
