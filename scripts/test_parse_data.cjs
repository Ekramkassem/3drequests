const fs = require('fs');

const dataTs = fs.readFileSync('C:/Users/YOSIF/Downloads/portfolioData.ts', 'utf8');

// Let's parse projects from portfolioData.ts
// It begins with export const ALL_PORTFOLIO_PROJECTS: ProjectItem[] = [ ... ];
// We can strip typescript annotations and evaluate or parse it
const cleanCode = dataTs
  .replace(/import\s+.*?;/g, '')
  .replace(/export\s+const\s+ALL_PORTFOLIO_PROJECTS:\s*ProjectItem\[\]\s*=\s*/, 'module.exports = ')
  .replace(/export\s+const\s+ALL_PORTFOLIO_PROJECTS\s*=\s*/, 'module.exports = ');

fs.writeFileSync('scripts/parsedData.cjs', cleanCode);

try {
  const projects = require('./parsedData.cjs');
  console.log('Successfully loaded projects count:', projects.length);
  const bySection = {};
  projects.forEach(p => {
    bySection[p.section] = (bySection[p.section] || 0) + 1;
  });
  console.log('Projects by section:', bySection);
  console.log('Sample project 0:', projects[0]);
  console.log('Sample project 35:', projects[35]);
} catch (e) {
  console.error('Error loading projects:', e);
}
