const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const variablesPath = path.join(projectRoot, 'css/variables.css');
const basePath = path.join(projectRoot, 'css/base.css');

let failed = false;

if (!fs.existsSync(variablesPath)) {
  console.error('FAIL: Missing css/variables.css');
  failed = true;
} else {
  const content = fs.readFileSync(variablesPath, 'utf8');
  const requiredTokens = [
    '--bg-primary',
    '--surface-glass',
    '--surface-glass-hover',
    '--border-hairline',
    '--border-highlight',
    '--tint-color',
    '--tint-glow',
    '--tint-cyan',
    '--tint-violet',
    '--tint-emerald',
    '--tint-orange',
    '--tint-gold',
    '--font-apple',
    '--radius-squircle'
  ];

  for (const token of requiredTokens) {
    if (!content.includes(token)) {
      console.error(`FAIL: Token ${token} not found in variables.css`);
      failed = true;
    }
  }
}

if (!fs.existsSync(basePath)) {
  console.error('FAIL: Missing css/base.css');
  failed = true;
} else {
  const content = fs.readFileSync(basePath, 'utf8');
  if (!content.includes('backdrop-filter') && !content.includes('-webkit-backdrop-filter')) {
    console.error('FAIL: base.css does not include backdrop-filter rules');
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('ALL CSS BASE TOKENS OK');
  process.exit(0);
}
