const fs = require('fs');
const path = require('path');

// 1. Check 3drequests_portfolio_assets
const prjAssetsPath = 'C:/Users/YOSIF/Downloads/3drequests_portfolio_assets';
const prjDirs = fs.readdirSync(prjAssetsPath).filter(d => fs.statSync(path.join(prjAssetsPath, d)).isDirectory());
console.log('Total PRJ directories in 3drequests_portfolio_assets:', prjDirs.length);
prjDirs.forEach(d => console.log('  ', d));

// 2. Check 3drequests_character_assets
const charAssetsPath = 'C:/Users/YOSIF/Downloads/3drequests_character_assets';
const charDirs = fs.readdirSync(charAssetsPath).filter(d => fs.statSync(path.join(charAssetsPath, d)).isDirectory());
console.log('\nTotal Character directories in 3drequests_character_assets:', charDirs.length);
charDirs.forEach(d => console.log('  ', d));
