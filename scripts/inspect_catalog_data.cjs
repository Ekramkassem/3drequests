const fs = require('fs');

// Let's check 3drequests_portfolio_catalog (3).html project structures
const text = fs.readFileSync('C:/Users/YOSIF/Downloads/New folder (8)/3drequests_portfolio_catalog (3).html', 'utf8');

// Find variable definitions like const PROJECTS = [ ... ]
const scriptContent = text.substring(text.indexOf('<script>     const CATEGORIES ='));
const varMatch = scriptContent.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*const/);
if (varMatch) {
  console.log('Found PROJECTS in catalog! Length of JSON substring:', varMatch[1].length);
  // Let's see how many projects
  const idMatches = [...varMatch[1].matchAll(/"id":\s*"([^"]+)"/g)].map(m => m[1]);
  console.log('Catalog projects count:', idMatches.length, 'Sample IDs:', idMatches.slice(0, 10));
} else {
  console.log('Did not match const PROJECTS = [...] exactly, looking for project arrays');
  const arrayMatches = [...scriptContent.matchAll(/const\s+([A-Z_]+)\s*=\s*\[/g)].map(m => m[1]);
  console.log('Variables defined:', arrayMatches);
}
