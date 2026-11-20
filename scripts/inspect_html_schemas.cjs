const fs = require('fs');

const htmlDir = 'C:/Users/YOSIF/Downloads/New folder (8)';
const files = [
  '3drequests_portfolio_catalog (3).html',
  '3drequests_character_portfolio.html',
  '3drequests_game_assets_portfolio.html',
  '3drequests_industrial_design_portfolio.html',
  '3drequests_keyshot_vray_portfolio (1).html',
  '3drequests_behance_artstation_portfolio (1).html',
  '3drequests_sculpture_portfolio.html',
  '3drequests_sculpture_monochrome_portfolio.html'
];

files.forEach(file => {
  const text = fs.readFileSync(`${htmlDir}/${file}`, 'utf8');
  const match = text.match(/const\s+(PROJECTS|projects|ITEMS|items|DATA|data)\s*=\s*\[/i);
  console.log(`\n--- File: ${file} ---`);
  if (match) {
    console.log(`Matched variable: ${match[0]}`);
    const startIdx = text.indexOf(match[0]) + match[0].length - 1;
    // Find matching bracket or end
    // Let's sample the first object
    const objMatch = text.slice(startIdx).match(/\{\s*"id":[\s\S]*?\n\s*\}/);
    if (objMatch) {
      console.log('Sample keys in first object:');
      const keys = [...objMatch[0].matchAll(/"([^"]+)":/g)].map(m => m[1]);
      console.log('Keys:', [...new Set(keys)]);
    }
  } else {
    // Search for any "id": "XX-
    const sample = text.match(/"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"/);
    if (sample) {
      console.log('Found sample id & name:', sample[1], sample[2]);
    } else {
      console.log('No obvious match');
    }
  }
});
