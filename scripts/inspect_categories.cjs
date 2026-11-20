const fs = require('fs');

const htmlDir = 'C:/Users/YOSIF/Downloads/New folder (8)';

function loadProjectsFromHtml(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const match = text.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*(const|function|window|\n\s*let)/i);
  if (!match) return [];
  try {
    const fn = new Function('return ' + match[1]);
    return fn();
  } catch (err) {
    return [];
  }
}

const all = [
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_portfolio_catalog (3).html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_character_portfolio.html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_game_assets_portfolio.html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_industrial_design_portfolio.html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_keyshot_vray_portfolio (1).html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_behance_artstation_portfolio (1).html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_portfolio.html`),
  ...loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_monochrome_portfolio.html`)
];

const catCounts = {};
all.forEach(p => {
  const c = p.category || 'Unknown';
  catCounts[c] = (catCounts[c] || 0) + 1;
});
console.log('Categories count:', Object.keys(catCounts).length);
console.log(catCounts);
