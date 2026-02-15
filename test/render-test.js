const renderer = require("../dist/index");
const resume = require("./test-levels.json");
const fs = require("fs");

const html = renderer.render(resume);
fs.writeFileSync(__dirname + "/TestOutput/test-levels.html", html);
console.log("Written to test/TestOutput/test-levels.html");

// Check level classes
const levels = ["senior", "expert", "experienced", "highly proficient", "proficient", "beginner", "intermediate", "advanced", "master", "novice"];
for (const lvl of levels) {
  const found = html.includes(`level ${lvl}`) || html.includes("level beginner") || html.includes("level intermediate") || html.includes("level advanced") || html.includes("level master");
}

// Extract all level class assignments
const matches = html.matchAll(/class="level\s+([^"]+)"/g);
for (const m of [...matches]) {
  console.log(`  class="level ${m[1]}"`);
}
