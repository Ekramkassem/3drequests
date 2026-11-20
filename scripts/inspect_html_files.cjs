const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/YOSIF/Downloads/New folder (8)';
const files = fs.readdirSync(dir);
files.forEach(f => {
  const filePath = path.join(dir, f);
  const stat = fs.statSync(filePath);
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(2000);
  fs.readSync(fd, buffer, 0, 2000, 0);
  fs.closeSync(fd);
  const head = buffer.toString('utf8');
  console.log('File:', f, 'Size:', stat.size);
  // look for <img> tags or data:image or base64 or paths
  const hasBase64 = head.includes('data:image/');
  const imgMatches = head.match(/<img[^>]+src=["']([^"']+)["']/g);
  console.log('  hasBase64:', hasBase64);
  console.log('  sample img tags:', imgMatches ? imgMatches.slice(0, 3) : 'none in head');
});
