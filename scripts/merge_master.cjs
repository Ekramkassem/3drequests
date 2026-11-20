const fs = require('fs');

const studioData = fs.readFileSync('src/data/studioData.ts', 'utf8');
const curMatch = studioData.match(/export const CURATED_PROJECTS: ProjectItem\[\] = (\[[\s\S]*?\]);\r?\n\r?\n\/\/ 8 Detailed Services/);

if (!curMatch) {
  console.error('Could not match CURATED_PROJECTS with Detailed Services');
  process.exit(1);
}

const existing14 = eval(curMatch[1]);
console.log('Successfully extracted existing handcrafted projects:', existing14.length);

const allTs = fs.readFileSync('src/data/allStudioProjects.ts', 'utf8');
const allRaw = allTs.replace(/import[\s\S]*?export const ALL_STUDIO_PROJECTS: ProjectItem\[\] = /, '');
const all214 = eval(allRaw.replace(/;\s*$/, ''));

// Build list starting with existing14
const existingIds = new Set(existing14.map(p => p.id.toLowerCase()));
const existingPrjNums = new Set(existing14.map(p => {
  const m = p.id.match(/^prj-(\d+)/i);
  return m ? parseInt(m[1]) : null;
}).filter(Boolean));

const merged = [...existing14];

all214.forEach(p => {
  const prjMatch = p.id.match(/^prj-(\d+)/i);
  if (prjMatch) {
    const num = parseInt(prjMatch[1]);
    if (existingPrjNums.has(num)) return; // already represented in existing14
  }
  if (existingIds.has(p.id.toLowerCase())) return;

  merged.push(p);
});

console.log('Total merged master projects:', merged.length);

const output = `// Master unified studio projects archive (contains all ${merged.length} client commissions and portfolio works)
import { ProjectItem } from '../types.ts';

export const MASTER_STUDIO_PROJECTS: ProjectItem[] = ${JSON.stringify(merged, null, 2)};
`;

fs.writeFileSync('src/data/masterProjects.ts', output, 'utf8');
console.log('Wrote src/data/masterProjects.ts successfully!');
