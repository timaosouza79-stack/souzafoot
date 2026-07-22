const https = require('https');

async function getSquad(wikiTitle) {
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(wikiTitle)}&prop=text&format=json`;
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const json = JSON.parse(data);
                const html = json.parse ? json.parse.text['*'] : '';
                resolve(html);
            });
        }).on('error', reject);
    });
}

function extractPlayers(html) {
    const players = [];
    const cheerio = require('cheerio');
    if (!cheerio) return []; // Needs cheerio
    const $ = cheerio.load(html);
    
    // Find "Current squad" table
    const table = $('table.vcard').first();
    table.find('tr.vcard.agent').each((i, el) => {
        const tdText = $(el).find('td').map((i, e) => $(e).text().trim()).get();
        // tdText typically has: [0] No, [1] Pos, [2] Nation, [3] Player
        if (tdText.length >= 4) {
            let pos = $(el).find('td').eq(1).text().trim();
            // sometimes title is "Goalkeeper"
            pos = $(el).find('td').eq(1).find('a').attr('title') || pos;
            const name = $(el).find('td').eq(3).find('a').first().text().trim() || $(el).find('td').eq(3).text().trim();
            players.push({ name, pos });
        }
    });
    return players;
}

async function run() {
    try {
        const cheerio = require('cheerio');
    } catch(e) {
        console.log("Installing cheerio...");
        require('child_process').execSync('npm install cheerio');
    }
    const html = await getSquad('Club Atlético River Plate');
    const players = extractPlayers(html);
    console.log(players);
}
run();
