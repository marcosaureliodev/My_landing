const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const componentsPath = path.join(projectRoot, 'css/components.css');
const responsivePath = path.join(projectRoot, 'css/responsive.css');

let failed = false;

if (!fs.existsSync(componentsPath)) {
  console.error('FAIL: Missing css/components.css');
  failed = true;
} else {
  const content = fs.readFileSync(componentsPath, 'utf8');
  const requiredClasses = [
    '.dynamic-island',
    '.island-expanded',
    '.tint-picker',
    '.tint-btn',
    '.hero-portrait-frame',
    '.hero-verified-badge',
    '.btn-apple-primary',
    '.btn-apple-glass',
    '.bento-grid',
    '.widget-card',
    '.terminal-window',
    '.terminal-tabs',
    '.terminal-code',
    '.project-card',
    '.control-center-grid',
    '.control-btn',
    '.toast-container'
  ];

  for (const cls of requiredClasses) {
    if (!content.includes(cls)) {
      console.error(`FAIL: Class ${cls} not found in components.css`);
      failed = true;
    }
  }
}

if (!fs.existsSync(responsivePath)) {
  console.error('FAIL: Missing css/responsive.css');
  failed = true;
} else {
  const content = fs.readFileSync(responsivePath, 'utf8');
  if (!content.includes('@media') || !content.includes('max-width')) {
    console.error('FAIL: responsive.css lacks media query breakpoints');
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('ALL COMPONENTS AND RESPONSIVE CSS OK');
  process.exit(0);
}
