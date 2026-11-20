const fs = require('fs');
const content = fs.readFileSync('C:/Users/YOSIF/Downloads/portfolioData.ts', 'utf8');

// Quick check of exported variable
console.log("File length:", content.length);
const matches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
console.log("Total projects found:", matches.length);

const categories = [...content.matchAll(/category:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("Unique categories:", [...new Set(categories)]);

const sections = [...content.matchAll(/section:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("Unique sections:", [...new Set(sections)]);

// Check first 3 projects
const projectMatches = content.match(/\{\s*"id":[\s\S]*?featured":\s*(true|false)[\s\S]*?\}/g);
console.log("Extracted project objects:", projectMatches ? projectMatches.length : 0);
