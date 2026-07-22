const fs = require('fs');

let scriptJs = fs.readFileSync('final/script.js', 'utf8');

scriptJs = scriptJs.replace(
    /myTeam\.league\.startsWith\('brazil'\) \|\| myTeam\.league === 'south_america'/g,
    "myTeam.league.startsWith('brazil') || ['south_america', 'argentina'].includes(myTeam.league)"
);

scriptJs = scriptJs.replace(
    /t\.league === 'south_america'/g,
    "['south_america', 'argentina'].includes(t.league)"
);

scriptJs = scriptJs.replace(
    /league === 'south_america' \|\| league\.startsWith\('brazil_'\)/g,
    "['south_america', 'argentina'].includes(league) || league.startsWith('brazil_')"
);

fs.writeFileSync('final/script.js', scriptJs);
console.log('Fixed SA refs');
