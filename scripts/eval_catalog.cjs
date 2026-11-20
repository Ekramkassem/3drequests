const fs = require('fs');

const text = fs.readFileSync('C:/Users/YOSIF/Downloads/New folder (8)/3drequests_portfolio_catalog (3).html', 'utf8');
const match = text.match(/const\s+PROJECTS\s*=\s*(\[[\s\S]*?\]);\s*const/);
if (match) {
  try {
    const fn = new Function('return ' + match[1]);
    const projects = fn();
    console.log('Successfully evaluated 3drequests_portfolio_catalog (3).html:', projects.length, 'projects');
    console.log('Sample project:', projects[0].id, projects[0].name);
  } catch (err) {
    console.error('Eval error:', err.message);
  }
}
