const fs = require('fs');

const html = fs.readFileSync('C:/Users/YOSIF/Downloads/New folder (8)/3drequests_portfolio_catalog (3).html', 'utf8');
console.log('Total length:', html.length);

// Look for data:image
const dataImgs = [...html.matchAll(/data:image\/[^;]+;base64,[A-Za-z0-9+/=]+/g)];
console.log('Total base64 images:', dataImgs.length);
if (dataImgs.length > 0) {
  console.log('First base64 image length:', dataImgs[0][0].length);
}

// Look for any <img> or background-image
const imgTags = [...html.matchAll(/<img[^>]+>/g)];
console.log('Total img tags:', imgTags.length);
if (imgTags.length > 0) {
  console.log('Sample img tag:', imgTags[0][0].slice(0, 150));
}

// Look for script tags or JSON data
const scriptTags = [...html.matchAll(/<script[\s\S]*?<\/script>/g)];
console.log('Total script tags:', scriptTags.length);
scriptTags.forEach((s, idx) => {
  console.log(`Script ${idx} length: ${s[0].length}, starts with: ${s[0].slice(0, 80).replace(/\n/g, ' ')}`);
});
