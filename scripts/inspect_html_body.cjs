const fs = require('fs');

const fd = fs.openSync('C:/Users/YOSIF/Downloads/New folder (8)/3drequests_portfolio_catalog (3).html', 'r');
const buffer = Buffer.alloc(100000); // 100kb
fs.readSync(fd, buffer, 0, 100000, 0);
fs.closeSync(fd);
const str = buffer.toString('utf8');

console.log('Snippet from 0 to 1000:');
console.log(str.slice(0, 1000));

// Find image src in the first 100kb
const imgMatches = [...str.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('\nFound src attributes in first 100kb (count:', imgMatches.length, '):');
imgMatches.slice(0, 10).forEach(s => console.log('  ', s.slice(0, 100)));
