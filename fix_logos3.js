const fs = require('fs');
const https = require('https');

const queries = [
    { id: "defensayjusticia", term: "Defensa" },
    { id: "belgrano", term: "Belgrano" },
    { id: "godoycruz", term: "Godoy Cruz" },
    { id: "banfield", term: "Banfield" },
    { id: "tigre", term: "Tigre" },
    { id: "union", term: "Union" },
    { id: "atleticotucuman", term: "Tucuman" }
];

async function fetchLogo(term) {
    return new Promise((resolve) => {
        const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=' + encodeURIComponent(term))}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const json = JSON.parse(parsed.contents);
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
    
    for (const q of queries) {
        const logo = await fetchLogo(q.term);
        if (logo) {
            console.log(`Found logo for ${q.term}: ${logo}`);
            const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${q.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
            scriptJs = scriptJs.replace(regex, `$1${logo}$2`);
            modifications++;
        } else {
            console.log(`Logo NOT found for ${q.term}`);
        }
        await delay(1000);
    }
    
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Updated ${modifications} logos.`);
}

run();
