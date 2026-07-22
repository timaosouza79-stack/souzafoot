const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// The buggy logic is:
// const dirMul = window.statsSort.dir === 'asc' ? 1 : -1;
// topScorers.sort((a, b) => ((b[key] || 0) - (a[key] || 0)) * dirMul);

code = code.replace(/const dirMul = window\.statsSort\.dir === 'asc' \? 1 : -1;\n\s*topScorers\.sort\(\(a, b\) => \(\(b\[key\] \|\| 0\) - \(a\[key\] \|\| 0\)\) \* dirMul\);/g, `const dirMul = window.statsSort.dir === 'desc' ? 1 : -1;
        topScorers.sort((a, b) => ((b[key] || 0) - (a[key] || 0)) * dirMul);`);

code = code.replace(/const dirMul = window\.statsSort\.dir === 'asc' \? 1 : -1;\n\s*topAssists\.sort\(\(a, b\) => \(\(b\[key\] \|\| 0\) - \(a\[key\] \|\| 0\)\) \* dirMul\);/g, `const dirMul = window.statsSort.dir === 'desc' ? 1 : -1;
        topAssists.sort((a, b) => ((b[key] || 0) - (a[key] || 0)) * dirMul);`);

fs.writeFileSync('script.js', code, 'utf8');
fs.writeFileSync('final/script.js', code, 'utf8');
console.log("Fixed stats sorting logic.");
