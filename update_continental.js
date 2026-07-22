const fs = require('fs');

let contJs = fs.readFileSync('final/continental.js', 'utf8');

// Fix initSulAmericana
contJs = contJs.replace(
    /t\.league === 'south_america'/g,
    "['south_america', 'argentina'].includes(t.league)"
);

contJs = contJs.replace(
    /myTeam\.league === 'brazil_a' \|\| myTeam\.league === 'south_america'/g,
    "myTeam.league === 'brazil_a' || ['south_america', 'argentina'].includes(myTeam.league)"
);

// Fix initLibertadores (if there are other references to south_america)

fs.writeFileSync('final/continental.js', contJs);
console.log('Continental updated');
