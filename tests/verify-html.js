const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const htmlPath = path.join(projectRoot, 'index.html');

let failed = false;

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: Missing index.html');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const requiredElements = [
  '<!DOCTYPE html>',
  '<html lang="pt-BR">',
  '<meta name="viewport"',
  '<title>',
  'id="dynamicIsland"',
  'id="islandCloseBtn"',
  'class="tint-picker"',
  'id="hero"',
  'assets/marcos-profile.jpg',
  'id="bentoWidgets"',
  'id="liveClockTime"',
  'id="terminal"',
  'id="terminalCopyBtn"',
  'id="projects"',
  'assets/project-distributed.svg',
  'assets/project-fintech.svg',
  'assets/project-cloudai.svg',
  'id="contact"',
  'id="contactForm"',
  'id="ambientGlow"',
  'js/theme.js',
  'js/dynamic-island.js',
  'js/interactive.js'
];

for (const item of requiredElements) {
  if (!html.includes(item)) {
    console.error(`FAIL: Required element or attribute '${item}' missing in index.html`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('INDEX.HTML VALIDATION PASSED');
  process.exit(0);
}
