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

const requiredIndexElements = [
  '<!DOCTYPE html>',
  '<html lang="pt-BR">',
  '<meta name="viewport"',
  '<title>',
  'id="ambientGlow"',
  'data-component="components/header.html"',
  'data-component="components/hero.html"',
  'data-component="components/bento.html"',
  'data-component="components/terminal.html"',
  'data-component="components/projects.html"',
  'data-component="components/contact.html"',
  'data-component="components/footer.html"',
  'id="backToTopBtn"',
  'js/components.js',
  'js/theme.js',
  'js/dynamic-island.js',
  'js/interactive.js'
];

for (const item of requiredIndexElements) {
  if (!html.includes(item)) {
    console.error(`FAIL: Required element or attribute '${item}' missing in index.html`);
    failed = true;
  }
}

// Validação dos componentes individuais
const expectedComponents = [
  { file: 'components/header.html', tokens: ['id="dynamicIsland"', 'id="islandCloseBtn"', 'class="tint-picker"'] },
  { file: 'components/hero.html', tokens: ['id="hero"', 'assets/marcos-profile.jpg'] },
  { file: 'components/bento.html', tokens: ['id="bentoWidgets"', 'id="liveClockTime"'] },
  { file: 'components/terminal.html', tokens: ['id="terminal"', 'id="terminalCopyBtn"'] },
  { file: 'components/projects.html', tokens: ['id="projects"', 'assets/project-distributed.svg', 'assets/project-fintech.svg', 'assets/project-cloudai.svg'] },
  { file: 'components/contact.html', tokens: ['id="contact"', 'id="contactForm"'] },
  { file: 'components/footer.html', tokens: ['class="site-footer"'] }
];

for (const comp of expectedComponents) {
  const compPath = path.join(projectRoot, comp.file);
  if (!fs.existsSync(compPath)) {
    console.error(`FAIL: Missing component file ${comp.file}`);
    failed = true;
    continue;
  }
  const content = fs.readFileSync(compPath, 'utf8');
  for (const token of comp.tokens) {
    if (!content.includes(token)) {
      console.error(`FAIL: Token '${token}' missing in ${comp.file}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('INDEX.HTML & COMPONENTS VALIDATION PASSED');
  process.exit(0);
}
