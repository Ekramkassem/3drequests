const fs = require('fs');

const pImgs = fs.readdirSync('public/portfolio_images');
console.log('Total files in public/portfolio_images:', pImgs.length);
console.log('Sample files:', pImgs.slice(0, 20));

// Check portfolioData.ts image references against public/portfolio_images
const pData = require('./parsedData.cjs');
let missingCount = 0;
let foundCount = 0;
const missingSamples = [];

pData.forEach(p => {
  const heroPath = p.heroImage ? p.heroImage.replace(/^\//, '') : '';
  if (heroPath && fs.existsSync(heroPath)) {
    foundCount++;
  } else {
    missingCount++;
    if (missingSamples.length < 10) missingSamples.push({ id: p.id, heroImage: p.heroImage });
  }
});

console.log(`Image matching for portfolioData.ts: ${foundCount} found, ${missingCount} missing`);
console.log('Missing samples:', missingSamples);
