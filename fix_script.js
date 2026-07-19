const fs = require('fs');
let scriptData = fs.readFileSync('script.js', 'utf8');
scriptData = scriptData.replace(/\\n/g, '\n');
fs.writeFileSync('script.js', scriptData);
