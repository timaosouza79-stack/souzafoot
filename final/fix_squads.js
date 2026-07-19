const fs = require('fs');
let data = fs.readFileSync('squads.js', 'utf8');

data = data.replace(/\\n/g, '\n');

// Also make sure it ends with }; instead of },
data = data.replace(/,\s*$/, '\n};\n');

fs.writeFileSync('squads.js', data);
