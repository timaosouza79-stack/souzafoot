const fs = require('fs');
const https = require('https');

const teams = [
    "Boca Juniors",
    "River Plate",
    "Racing Club",
    "Independiente",
    "San Lorenzo",
    "Estudiantes",
    "Talleres",
    "Velez Sarsfield",
    "Rosario Central",
    "Newells Old Boys",
    "Argentinos Juniors",
    "Lanus",
    "Huracan",
    "Defensa y Justicia",
    "Belgrano",
    "Godoy Cruz",
    "Banfield",
    "Tigre",
    "Union",
    "Atletico Tucuman"
];

const teamIds = [
    "bocajuniors", "riverplate", "racingclub", "independiente", "sanlorenzo", 
    "estudianteslp", "talleres", "velezsarsfield", "rosariocentral", "newellsoldboys", 
    "argentinosjuniors", "lanus", "huracan", "defensayjusticia", "belgrano", 
    "godoycruz", "banfield", "tigre", "union", "atleticotucuman"
];

async function fetchLogo(teamName) {
    return new Promise((resolve) => {
        const url = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(teamName)}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.teams && json.teams.length > 0) {
                        resolve(json.teams[0].strBadge || json.teams[0].strTeamBadge);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    let scriptJs = fs.readFileSync('final/script.js', 'utf8');
    let modifications = 0;
    
    for (let i = 0; i < teams.length; i++) {
        const logo = await fetchLogo(teams[i]);
        if (logo) {
            console.log(`Found logo for ${teams[i]}: ${logo}`);
            // Find the line for the team in script.js and replace the shield URL
            const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${teamIds[i]}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
            scriptJs = scriptJs.replace(regex, `$1${logo}$2`);
            modifications++;
        } else {
            console.log(`Logo NOT found for ${teams[i]}`);
        }
    }
    
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Updated ${modifications} logos.`);
}

run();
