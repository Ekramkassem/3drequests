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

const allProjects = [];
const seenIds = new Set();

files.forEach(file => {
  const text = fs.readFileSync(`${htmlDir}/${file}`, 'utf8');
  // Extract const PROJECTS = [ ... ];
  const match = text.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*(const|function|window|\n\s*let)/i);
  if (!match) {
    console.log(`Could not extract PROJECTS from ${file}`);
    return;
  }
  try {
    const projects = JSON.parse(match[1]);
    console.log(`${file}: ${projects.length} projects`);
    projects.forEach(p => {
      allProjects.push({ ...p, sourceFile: file });
      if (seenIds.has(p.id)) {
        console.log(`  Duplicate ID: ${p.id} in ${file}`);
      } else {
        seenIds.add(p.id);
      }
    });
  } catch (err) {
    console.error(`JSON.parse failed for ${file}:`, err.message);
  }
});

console.log(`\nTotal parsed projects from HTML files: ${allProjects.length}`);
console.log(`Total unique IDs: ${seenIds.size}`);
