const fs = require('fs');
eval(fs.readFileSync('squads.js', 'utf8').replace('const realSquads', 'var realSquads'));

const arabiaTeams = ['alhilal', 'alnassr', 'alittihad', 'alahli', 'alshabab', 'altaawoun', 'alettifaq', 'alfateh', 'alfayha', 'damac'];

// Fix conflicting names
const fixes = {
  'Renan Lodi': 'R. Lodi',
  'Michael': 'Michael Delgado',
  'Alex Telles': 'A. Telles',
  'Otávio': 'Otávio Edmilson',
  'Romarinho': 'Romarinho (SA)',
  'Jota': 'Jota (SA)',
  'João Pedro': 'João Pedro (SA)',
  'Seko Fofana': 'S. Fofana',
  'Vitinho': 'Vitinho (SA)',
  'Habib Diallo': 'H. Diallo'
};

for (const t of arabiaTeams) {
    if (realSquads[t]) {
        for (const p of realSquads[t].players) {
            if (fixes[p.name]) {
                p.name = fixes[p.name];
            }
        }
    }
}

const newContent = 'const realSquads = ' + JSON.stringify(realSquads, null, 4) + ';';
fs.writeFileSync('squads.js', newContent);
console.log('Fixed conflicts!');
