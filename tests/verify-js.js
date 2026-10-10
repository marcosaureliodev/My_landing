const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const files = [
  'js/components.js',
  'js/theme.js',
  'js/dynamic-island.js',
  'js/interactive.js'
];

let failed = false;

for (const rel of files) {
  const full = path.join(projectRoot, rel);
  if (!fs.existsSync(full)) {
    console.error(`FAIL: Missing ${rel}`);
    failed = true;
  } else {
    const code = fs.readFileSync(full, 'utf8');
    try {
      new vm.Script(code);
      console.log(`PASS: Valid syntax in ${rel}`);
    } catch (err) {
      console.error(`FAIL: Syntax error in ${rel}:`, err.message);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('ALL JAVASCRIPT MODULES VALID');
  process.exit(0);
}
