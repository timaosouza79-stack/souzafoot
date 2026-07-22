const fs = require('fs');

const updates = [
    { id: "defensayjusticia", url: "https://r2.thesportsdb.com/images/media/team/badge/3guvlh1775778978.png" },
    { id: "belgrano", url: "https://r2.thesportsdb.com/images/media/team/badge/0twgzi1517768087.png" },
    { id: "godoycruz", url: "https://r2.thesportsdb.com/images/media/team/badge/d3c0ds1517768584.png" },
    { id: "banfield", url: "https://r2.thesportsdb.com/images/media/team/badge/c2ea011775756104.png" },
    { id: "tigre", url: "https://r2.thesportsdb.com/images/media/team/badge/krryg71765858882.png" },
    { id: "union", url: "https://r2.thesportsdb.com/images/media/team/badge/btnx6q1734587495.png" },
    { id: "atleticotucuman", url: "https://r2.thesportsdb.com/images/media/team/badge/m5i2q21775755577.png" }
];

let scriptJs = fs.readFileSync('final/script.js', 'utf8');
let modifications = 0;

for (const u of updates) {
    // We match `"id": "teamid"` then some characters until `"shield": "..."`
    const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${u.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
    
    if (regex.test(scriptJs)) {
        scriptJs = scriptJs.replace(regex, `$1${u.url}$2`);
        modifications++;
        console.log(`Updated ${u.id} to ${u.url}`);
    } else {
        console.log(`Failed to update ${u.id}`);
    }
}

fs.writeFileSync('final/script.js', scriptJs);
console.log(`Total modifications: ${modifications}`);

// Bump SW
let swJs = fs.readFileSync('final/sw.js', 'utf8');
swJs = swJs.replace(/souzafoot-v\\d+/, 'souzafoot-v19');
fs.writeFileSync('final/sw.js', swJs);

