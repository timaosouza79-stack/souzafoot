const fs = require('fs');
const https = require('https');

const teams = [
    "Defensa y Justicia",
    "Belgrano",
    "Godoy Cruz",
    "Banfield",
    "Tigre",
    "Union",
    "Atletico Tucuman"
];

const teamIds = [
    "defensayjusticia", "belgrano", "godoycruz", "banfield", "tigre", "union", "atleticotucuman"
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    let scriptJs = fs.readFileSync('final/script.js', 'utf8');
    let modifications = 0;
    
    for (let i = 0; i < teams.length; i++) {
        const logo = await fetchLogo(teams[i]);
        if (logo) {
            console.log(`Found logo for ${teams[i]}: ${logo}`);
            const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${teamIds[i]}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
            scriptJs = scriptJs.replace(regex, `$1${logo}$2`);
            modifications++;
        } else {
            console.log(`Logo NOT found for ${teams[i]}`);
        }
        await delay(1500); // 1.5 seconds delay to avoid rate limits
    }
    
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Updated ${modifications} logos.`);
}

run();
