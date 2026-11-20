const fs = require('fs');

const studioData = fs.readFileSync('src/data/studioData.ts', 'utf8');
const allData = fs.readFileSync('src/data/allStudioProjects.ts', 'utf8');

console.log('studioData lines:', studioData.split('\n').length);
console.log('allStudioProjects lines:', allData.split('\n').length);

const all = require('./parsedData.cjs'); // earlier test
