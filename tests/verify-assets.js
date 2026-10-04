const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const requiredAssets = [
  'assets/marcos-profile.jpg',
  'assets/project-distributed.svg',
  'assets/project-fintech.svg',
  'assets/project-cloudai.svg'
];

let failed = false;

for (const relPath of requiredAssets) {
  const fullPath = path.join(projectRoot, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`FAIL: Asset missing: ${relPath}`);
    failed = true;
  } else {
    const stat = fs.statSync(fullPath);
    if (stat.size === 0) {
      console.error(`FAIL: Asset is empty: ${relPath}`);
      failed = true;
    } else {
      console.log(`PASS: Found asset ${relPath} (${stat.size} bytes)`);
    }
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('ALL ASSETS OK');
  process.exit(0);
}
