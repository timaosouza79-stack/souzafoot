const fs = require('fs');
const https = require('https');

const teams = [
    { id: "belgrano", query: "Belgrano" },
    { id: "godoycruz", query: "Godoy Cruz" },
    { id: "banfield", query: "Banfield" },
    { id: "tigre", query: "Tigre" },
    { id: "union", query: "Union" }
];

async function fetchBadge(query) {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=' + encodeURIComponent(query))}`;
    return new Promise((resolve) => {
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

async function run() {
    let scriptJs = fs.readFileSync('final/script.js', 'utf8');
    let modifications = 0;
    
    for (const t of teams) {
        const logo = await fetchBadge(t.query);
        if (logo) {
            console.log(`Found ${logo} for ${t.id}`);
            const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${t.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
            scriptJs = scriptJs.replace(regex, `$1${logo.replace(/\\\//g, '/')}$2`);
            modifications++;
        } else {
            console.log(`Not found for ${t.id}`);
        }
    }
    
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Modifications: ${modifications}`);
}
run();
