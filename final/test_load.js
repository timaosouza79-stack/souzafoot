const fs = require('fs');
eval(fs.readFileSync('squads.js', 'utf8'));
eval(fs.readFileSync('script.js', 'utf8').replace(/document\.[^;]+;/g, '').replace(/window\.[^;]+;/g, ''));
console.log("Tested");
