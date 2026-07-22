const fs = require('fs');
const { exec } = require('child_process');

const teams = [
    { id: "belgrano", query: "Belgrano" },
    { id: "godoycruz", query: "Godoy Cruz" },
    { id: "banfield", query: "Banfield" },
    { id: "tigre", query: "Tigre" },
    { id: "union", query: "Union" },
    { id: "defensayjusticia", query: "Defensa y Justicia" }
];

async function fetchBadge(query) {
    return new Promise((resolve) => {
        const cmd = `curl -s "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.thesportsdb.com%2Fapi%2Fv1%2Fjson%2F3%2Fsearchteams.php%3Ft%3D${encodeURIComponent(query).replace(/%20/g, '%2520')}" | grep -o '"strBadge":"[^"]*"' | head -n 1`;
        exec(cmd, (err, stdout) => {
            if (stdout) {
                const match = stdout.match(/"strBadge":"([^"]+)"/);
                if (match && match[1]) {
                    resolve(match[1].replace(/\\\//g, '/'));
                    return;
                }
            }
            resolve(null);
        });
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    let scriptJs = fs.readFileSync('final/script.js', 'utf8');
    let modifications = 0;
    
    for (const t of teams) {
        const logo = await fetchBadge(t.query);
        if (logo) {
            console.log(`Found ${logo} for ${t.id}`);
            const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${t.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
            scriptJs = scriptJs.replace(regex, `$1${logo}$2`);
            modifications++;
        } else {
            console.log(`Not found for ${t.id}`);
        }
        await delay(1500); // Respect proxy rate limits
    }
    
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Modifications: ${modifications}`);
}
run();
