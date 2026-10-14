const fs = require('fs');
const path = require('path');

// Usage: node scripts/preview.js [path/to/resume]  (default: docs/sample.resume)
// The argument is the resume file path without the .json suffix (a trailing
// .json is also accepted and treated as the full path).
// Output: artifacts/<basename>.html
const theme = require(path.resolve(process.cwd(), 'dist', 'index.js'));

async function render() {
  try {
    const arg = process.argv[2] || 'docs/sample.resume';
    const resumePath = arg.endsWith('.json')
      ? path.resolve(process.cwd(), arg)
      : path.resolve(process.cwd(), `${arg}.json`);
    const outputDir = path.resolve(process.cwd(), 'artifacts');
    const basename = path.basename(resumePath, '.json');
    const outputPath = path.join(outputDir, `${basename}.html`);

    if (!fs.existsSync(resumePath)) {
      console.error(`Error: resume file not found at ${resumePath}`);
      process.exit(1);
    }
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    console.log(`Reading resume from ${resumePath}...`);
    const fileContents = fs.readFileSync(resumePath, 'utf8');
    const resume = JSON.parse(fileContents);

    console.log('Rendering HTML...');
    const html = theme.render(resume);

    fs.writeFileSync(outputPath, html);
    console.log(`Successfully generated preview: ${outputPath}`);
  } catch (error) {
    console.error('Rendering failed:', error);
    process.exit(1);
  }
}

render();