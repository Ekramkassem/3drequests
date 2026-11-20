const fs = require('fs');

// Read existing 14 projects from studioData.ts
const studioData = fs.readFileSync('src/data/studioData.ts', 'utf8');
const curMatch = studioData.match(/export const CURATED_PROJECTS: ProjectItem\[\] = (\[[\s\S]*?\]);\r?\n\r?\n\/\/ 4 Studio Approach Stages/);

if (!curMatch) {
  console.error('Could not match CURATED_PROJECTS in studioData.ts');
  process.exit(1);
}

// Evaluate existing 14 projects
const existing14 = eval(curMatch[1]);
console.log('Existing handcrafted projects count:', existing14.length);

// Read allStudioProjects.ts
const allTs = fs.readFileSync('src/data/allStudioProjects.ts', 'utf8');
const allRaw = allTs.replace(/import[\s\S]*?export const ALL_STUDIO_PROJECTS: ProjectItem\[\] = /, '');
const all214 = eval(allRaw.replace(/;\s*$/, ''));
console.log('Total compiled projects count:', all214.length);

// Build unified master list
const finalProjects = [...existing14];
const existingIdPrefixes = new Set(existing14.map(p => {
  const m = p.id.match(/^prj-\d+/i);
  return m ? m[0].toLowerCase() : p.id.toLowerCase();
}));

all214.forEach(p => {
  const m = p.id.match(/^prj-\d+/i);
  const prefix = m ? m[0].toLowerCase() : p.id.toLowerCase();
  if (!existingIdPrefixes.has(prefix)) {
    finalProjects.push(p);
  }
});

console.log('Unified final master project count:', finalProjects.length);

// Count by category
const byCat = {};
finalProjects.forEach(p => {
  byCat[p.category] = (byCat[p.category] || 0) + 1;
});
console.log('Final projects by category:', byCat);

// Write unified file
const outputTs = `// Master unified studio projects archive (contains all ${finalProjects.length} client commissions and portfolio works)
import { ProjectItem } from '../types.ts';

export const MASTER_PROJECTS: ProjectItem[] = ${JSON.stringify(finalProjects, null, 2)};
`;

fs.writeFileSync('src/data/masterProjects.ts', outputTs, 'utf8');
console.log('Successfully wrote src/data/masterProjects.ts!');
