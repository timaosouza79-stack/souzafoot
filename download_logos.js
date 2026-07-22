const fs = require('fs');
const https = require('https');
const path = require('path');

const ids = [
    "defensayjusticia", "belgrano", "godoycruz", "banfield", "tigre", "union", "atleticotucuman"
];

let scriptJs = fs.readFileSync('final/script.js', 'utf8');

async function download(url, dest) {
    return new Promise((resolve) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                file.close();
                fs.unlink(dest, () => resolve(false));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => resolve(false));
        });
    });
}

async function run() {
    let mods = 0;
    for (const id of ids) {
        // extract url
        const regex = new RegExp(`\\"id\\"\\s*:\\s*\\"${id}\\".*?\\"shield\\"\\s*:\\s*\\"([^\\"]+)\\"`, 's');
        const match = scriptJs.match(regex);
        if (match && match[1] && match[1].includes('wikipedia')) {
            const url = match[1];
            console.log(`Downloading ${id} from ${url}`);
            const dest = path.join('final', 'img', `${id}_v3.png`);
            
            const options = {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            };
            
            // Actually use curl as a fallback or native node
            // Native Node request for wikipedia:
            const success = await new Promise((resolve) => {
                const { exec } = require('child_process');
                exec(`curl -L -s -A "Mozilla/5.0" "${url}" -o "${dest}"`, (err) => {
                    resolve(!err);
                });
            });
            
            if (success && fs.existsSync(dest) && fs.statSync(dest).size > 100) {
                console.log(`Success for ${id}`);
                const replaceRegex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
                scriptJs = scriptJs.replace(replaceRegex, `$1img/${id}_v3.png$2`);
                mods++;
            } else {
                console.log(`Failed for ${id}`);
            }
        }
    }
    fs.writeFileSync('final/script.js', scriptJs);
    console.log(`Modified ${mods} teams.`);
}

run();
