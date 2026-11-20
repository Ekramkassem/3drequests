const fs = require('fs');
const path = require('path');

const outDir = 'public/extracted_assets';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Test extracting from 3drequests_portfolio_catalog (3).html
const text = fs.readFileSync('C:/Users/YOSIF/Downloads/New folder (8)/3drequests_portfolio_catalog (3).html', 'utf8');
const match = text.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*const/);
if (match) {
  const fn = new Function('return ' + match[1]);
  const projects = fn();
  console.log('Got', projects.length, 'projects from catalog');
  
  // Test project PRJ-33 (first one without folder)
  const prj33 = projects.find(p => p.id === 'PRJ-33');
  console.log('PRJ-33 name:', prj33.name, 'images:', prj33.images ? prj33.images.length : 0);
  if (prj33.images && prj33.images.length > 0) {
    const b64 = prj33.images[0].src.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(b64, 'base64');
    const testFile = path.join(outDir, 'test_prj33_hero.jpg');
    fs.writeFileSync(testFile, buf);
    console.log('Wrote test file:', testFile, 'size:', buf.length, 'bytes');
  }
}
