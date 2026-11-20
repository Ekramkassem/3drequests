const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/YOSIF/Downloads/New folder (8)';
fs.readdirSync(dir).forEach(file => {
  const filePath = path.join(dir, file);
  const text = fs.readFileSync(filePath, 'utf8');
  const b64 = [...text.matchAll(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]+/g)];
  const prjMatches = [...text.matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
  console.log(`File: ${file}`);
  console.log(`  Size: ${(text.length / 1024 / 1024).toFixed(1)}MB, base64 images: ${b64.length}, prj IDs: ${prjMatches.length}`);
  if (prjMatches.length > 0) {
    console.log(`  Sample IDs:`, prjMatches.slice(0, 5));
  }
});
