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
    console.error('Error evaluating ' + filePath + ':', err.message);
    return [];
  }
}

const catalogProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_portfolio_catalog (3).html`);
const charProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_character_portfolio.html`);
const gameProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_game_assets_portfolio.html`);
const indProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_industrial_design_portfolio.html`);
const keyshotProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_keyshot_vray_portfolio (1).html`);
const behanceProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_behance_artstation_portfolio (1).html`);
const sculptProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_portfolio.html`);
const sculptMonoProjects = loadProjectsFromHtml(`${htmlDir}/3drequests_sculpture_monochrome_portfolio.html`);

console.log('Catalog projects (PRJ):', catalogProjects.length);
console.log('Character projects (CH):', charProjects.length);
console.log('Game projects (GM):', gameProjects.length);
console.log('Industrial projects (ID):', indProjects.length);
console.log('Keyshot projects (STU):', keyshotProjects.length);
console.log('Behance projects (BA):', behanceProjects.length);
console.log('Sculpt projects (SC 01-10):', sculptProjects.length);
console.log('Sculpt mono projects (SC 11-20):', sculptMonoProjects.length);

const all = [
  ...catalogProjects,
  ...charProjects,
  ...gameProjects,
  ...indProjects,
  ...keyshotProjects,
  ...behanceProjects,
  ...sculptProjects,
  ...sculptMonoProjects
];

console.log('\nTotal combined projects:', all.length);
const idSet = new Set();
let duplicates = 0;
all.forEach(p => {
  if (idSet.has(p.id)) {
    duplicates++;
  } else {
    idSet.add(p.id);
  }
});
console.log('Unique project IDs:', idSet.size, 'Duplicates:', duplicates);
