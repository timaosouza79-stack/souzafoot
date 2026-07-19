const fs = require('fs');
const path = require('path');

const squadsFile = path.join(__dirname, 'squads.js');

let data = fs.readFileSync(squadsFile, 'utf8');

const newTeams = [
    { id: 'independiente', str: 79 },
    { id: 'velez', str: 78 },
    { id: 'emelec', str: 76 },
    { id: 'americadecali', str: 76 },
    { id: 'universitario', str: 75 },
    { id: 'tachira', str: 72 },
    { id: 'caracas', str: 71 },
    { id: 'wilstermann', str: 71 }
];

let added = 0;
newTeams.forEach(t => {
    if (!data.includes('"' + t.id + '": {')) {
        const squadJson = `
    "${t.id}": {
        "formation": "4-3-3",
        "players": [
            { "name": "Goleiro", "pos": "GOL", "str": ${t.str} },
            { "name": "Zagueiro 1", "pos": "ZAG", "str": ${t.str} },
            { "name": "Zagueiro 2", "pos": "ZAG", "str": ${t.str} },
            { "name": "Lateral Dir", "pos": "LAT", "str": ${t.str} },
            { "name": "Lateral Esq", "pos": "LAT", "str": ${t.str} },
            { "name": "Volante", "pos": "MEI", "str": ${t.str} },
            { "name": "Meia 1", "pos": "MEI", "str": ${t.str} },
            { "name": "Meia 2", "pos": "MEI", "str": ${t.str} },
            { "name": "Ponta Dir", "pos": "ATA", "str": ${t.str} },
            { "name": "Ponta Esq", "pos": "ATA", "str": ${t.str} },
            { "name": "Centroavante", "pos": "ATA", "str": ${t.str} }
        ]
    },`;
        data = data.replace(/};\s*$/, squadJson + '\n};');
        added++;
    }
});

if (added > 0) {
    fs.writeFileSync(squadsFile, data);
    console.log('Added ' + added + ' teams to squads.js');
} else {
    console.log('Teams already present');
}
