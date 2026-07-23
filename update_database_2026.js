const fs = require('fs');
const path = require('path');

const squadsFile = path.join(__dirname, 'final', 'squads.js');
let squadsContent = fs.readFileSync(squadsFile, 'utf8');

// The file should start with "const realSquads = {"
// We can use Function or eval to parse it. Let's do a simple replace to make it valid JSON if possible,
// or just evaluate it.
let scriptContent = squadsContent.replace(/const\s+realSquads\s*=\s*/, 'return ');
// if there are any trailing semicolons or logic, let's strip them
scriptContent = scriptContent.replace(/;$/, '');
const parseFn = new Function(scriptContent);
const db = parseFn();

console.log("Loaded DB with " + Object.keys(db).length + " teams.");

// 1. Move Mbappé from psg to realmadrid
if (db['psg'] && db['realmadrid']) {
    const mbappeIdx = db['psg'].players.findIndex(p => p.name.includes('Mbappé'));
    if (mbappeIdx >= 0) {
        const mbappe = db['psg'].players.splice(mbappeIdx, 1)[0];
        mbappe.str = 95; // Boost slightly for 2026
        db['realmadrid'].players.push(mbappe);
        console.log("Moved Mbappé to Real Madrid");
    }
}

// 2. Move Endrick from palmeiras to realmadrid
if (db['palmeiras'] && db['realmadrid']) {
    const endrickIdx = db['palmeiras'].players.findIndex(p => p.name.includes('Endrick'));
    if (endrickIdx >= 0) {
        const endrick = db['palmeiras'].players.splice(endrickIdx, 1)[0];
        endrick.str = 85; // Solid wonderkid
        db['realmadrid'].players.push(endrick);
        console.log("Moved Endrick to Real Madrid");
    }
}

// 3. Remove Kroos from realmadrid
if (db['realmadrid']) {
    db['realmadrid'].players = db['realmadrid'].players.filter(p => !p.name.includes('Kroos') && !p.name.includes('Nacho'));
    console.log("Removed Kroos and Nacho from Real Madrid");
}

// 4. Clean generic names and normalize positions
const firstNames = ["João", "Pedro", "Lucas", "Matheus", "Gabriel", "Luiz", "Felipe", "Thiago", "Guilherme", "Rafael"];
const lastNames = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"];

let cleanedCount = 0;
let posCount = 0;

for (let teamId in db) {
    const team = db[teamId];
    for (let player of team.players) {
        if (player.name.includes("Jogador") || player.name.includes("Player")) {
            const f = firstNames[Math.floor(Math.random()*firstNames.length)];
            const l = lastNames[Math.floor(Math.random()*lastNames.length)];
            player.name = f + " " + l;
            cleanedCount++;
        }
        
        // Normalize positions
        if (player.pos === 'GK') player.pos = 'GOL';
        else if (['CB', 'DEF', 'ZAG'].includes(player.pos)) player.pos = 'ZAG';
        else if (['LB', 'RB', 'LAT'].includes(player.pos)) player.pos = 'LAT';
        else if (['CDM', 'CM', 'VOL'].includes(player.pos)) player.pos = 'MEI'; // Simplify VOL to MEI
        else if (['CAM', 'MD', 'ME', 'MEI'].includes(player.pos)) player.pos = 'MEI';
        else if (['RW', 'LW', 'ST', 'CF', 'ATA'].includes(player.pos)) player.pos = 'ATA';
        else {
            // Keep original if it matches our basic 5
            if (!['GOL', 'ZAG', 'LAT', 'MEI', 'ATA'].includes(player.pos)) {
                player.pos = 'MEI';
                posCount++;
            }
        }
    }
}

console.log(`Cleaned ${cleanedCount} generic names and fixed ${posCount} weird positions.`);

// Write back to file
const newContent = "const realSquads = " + JSON.stringify(db, null, 4) + ";\n";
fs.writeFileSync(squadsFile, newContent, 'utf8');
console.log("Successfully updated final/squads.js");
