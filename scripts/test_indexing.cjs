const fs = require('fs');
const path = require('path');

const portfolioAssetsDir = 'public/portfolio_assets';
const characterAssetsDir = 'public/character_assets';
const extractedAssetsDir = 'public/extracted_assets';

// Index high-res PRJ folders
const prjFolderMap = {};
if (fs.existsSync(portfolioAssetsDir)) {
  fs.readdirSync(portfolioAssetsDir).forEach(dir => {
    const match = dir.match(/^(PRJ-\d+)/i);
    if (match) {
      const prjId = match[1].toUpperCase();
      const files = fs.readdirSync(path.join(portfolioAssetsDir, dir))
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
        .map(f => `/portfolio_assets/${dir}/${f}`);
      prjFolderMap[prjId] = { dir, files };
    }
  });
}

// Index high-res CH folders
const chFolderMap = {};
if (fs.existsSync(characterAssetsDir)) {
  fs.readdirSync(characterAssetsDir).forEach(dir => {
    const match = dir.match(/^(CH-\d+)/i);
    if (match) {
      const chId = match[1].toUpperCase();
      const files = fs.readdirSync(path.join(characterAssetsDir, dir))
        .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
        .map(f => `/character_assets/${dir}/${f}`);
      chFolderMap[chId] = { dir, files };
    }
  });
}

console.log('Indexed PRJ high-res folders:', Object.keys(prjFolderMap).length);
console.log('Indexed CH high-res folders:', Object.keys(chFolderMap).length);
