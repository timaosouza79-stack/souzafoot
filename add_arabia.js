const fs = require('fs');

// 1. Update script.js
let scriptJs = fs.readFileSync('script.js', 'utf8');

// Replace isEurope array
scriptJs = scriptJs.replace(/\['england',\s*'spain',\s*'italy',\s*'france',\s*'germany',\s*'portugal'\]/g, "['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia']");

// Update getCompetitionNames
if (!scriptJs.includes("'arabia': {")) {
    scriptJs = scriptJs.replace(
        /'portugal': \{.*\},/,
        `$&
        'arabia': { league: 'SAUDI PRO LEAGUE', cup: 'KINGS CUP', continental: 'CHAMPIONS LEAGUE' },`
    );
}

// Add arabia teams
const arabiaTeams = `
    {"id": "alhilal", "name": "Al Hilal", "strength": 84, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Al_Hilal_SFC_Logo.svg/200px-Al_Hilal_SFC_Logo.svg.png", "league": "arabia", "balance": 350000000, "stadium": "King Fahd Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/King_Fahd_International_Stadium.jpg/600px-King_Fahd_International_Stadium.jpg"},
    {"id": "alnassr", "name": "Al Nassr", "strength": 83, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Al-Nassr_FC_logo.svg/200px-Al-Nassr_FC_logo.svg.png", "league": "arabia", "balance": 300000000, "stadium": "Al-Awwal Park", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/King_Saud_University_Stadium.jpg/600px-King_Saud_University_Stadium.jpg"},
    {"id": "alittihad", "name": "Al Ittihad", "strength": 82, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Al-Ittihad_Club_Logo.svg/200px-Al-Ittihad_Club_Logo.svg.png", "league": "arabia", "balance": 280000000, "stadium": "King Abdullah Sports City", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/King_Abdullah_Sports_City_-_Jeddah.jpg/600px-King_Abdullah_Sports_City_-_Jeddah.jpg"},
    {"id": "alahli", "name": "Al Ahli", "strength": 81, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Al-Ahli_Saudi_FC_logo.svg/200px-Al-Ahli_Saudi_FC_logo.svg.png", "league": "arabia", "balance": 250000000, "stadium": "Prince Abdullah Al Faisal", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Prince_Abdullah_Al-Faisal_Stadium_2.jpg/600px-Prince_Abdullah_Al-Faisal_Stadium_2.jpg"},
    {"id": "alshabab", "name": "Al Shabab", "strength": 78, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Al-Shabab_FC_logo.svg/200px-Al-Shabab_FC_logo.svg.png", "league": "arabia", "balance": 150000000, "stadium": "Prince Faisal bin Fahd", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Prince_Faisal_bin_Fahd_Stadium.jpg/600px-Prince_Faisal_bin_Fahd_Stadium.jpg"},
    {"id": "altaawoun", "name": "Al Taawoun", "strength": 76, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Al_Taawoun_FC_logo.svg/200px-Al_Taawoun_FC_logo.svg.png", "league": "arabia", "balance": 80000000, "stadium": "King Abdullah Sport City Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/King_Abdullah_Sport_City_Stadium_%28Buraidah%29.jpg/600px-King_Abdullah_Sport_City_Stadium_%28Buraidah%29.jpg"},
    {"id": "alettifaq", "name": "Al Ettifaq", "strength": 77, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Ettifaq_FC_logo.svg/200px-Ettifaq_FC_logo.svg.png", "league": "arabia", "balance": 100000000, "stadium": "Prince Mohamed bin Fahd", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Prince_Mohamed_bin_Fahd_Stadium.jpg/600px-Prince_Mohamed_bin_Fahd_Stadium.jpg"},
    {"id": "alfateh", "name": "Al Fateh", "strength": 75, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Al-Fateh_SC_logo.svg/200px-Al-Fateh_SC_logo.svg.png", "league": "arabia", "balance": 70000000, "stadium": "Prince Abdullah bin Jalawi", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Prince_Abdullah_bin_Jalawi_Stadium.jpg/600px-Prince_Abdullah_bin_Jalawi_Stadium.jpg"},
    {"id": "alfayha", "name": "Al Fayha", "strength": 74, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Al-Fayha_FC_logo.svg/200px-Al-Fayha_FC_logo.svg.png", "league": "arabia", "balance": 60000000, "stadium": "Al Majma'ah Sports City", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Al_Majma%27ah_Sports_City.jpg/600px-Al_Majma%27ah_Sports_City.jpg"},
    {"id": "damac", "name": "Damac", "strength": 74, "shield": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Damac_FC_logo.svg/200px-Damac_FC_logo.svg.png", "league": "arabia", "balance": 65000000, "stadium": "Prince Sultan bin Abdul Aziz", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prince_Sultan_bin_Abdul_Aziz_Stadium.jpg/600px-Prince_Sultan_bin_Abdul_Aziz_Stadium.jpg"},
`;

if (!scriptJs.includes('"id": "alhilal"')) {
    scriptJs = scriptJs.replace(
        /\];\s*\n*\s*\/\/\s*---\s*Sistema de Som/g,
        arabiaTeams + `$&`
    );
}

// Add memory optimization for arabia_b generic generation
if (!scriptJs.includes("if (leagueNameDisplay === 'Arabia') leagueNameDisplay = 'Arábia';")) {
    scriptJs = scriptJs.replace(
        /if \(leagueNameDisplay === 'Portugal'\) leagueNameDisplay = 'Portugal';/g,
        `$&
        if (leagueNameDisplay === 'Arabia') leagueNameDisplay = 'Arábia';`
    );
}

fs.writeFileSync('script.js', scriptJs);


// 2. Update continental.js
let continentalJs = fs.readFileSync('continental.js', 'utf8');
continentalJs = continentalJs.replace(/\['england',\s*'spain',\s*'italy',\s*'france',\s*'germany',\s*'portugal'\]/g, "['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia']");
fs.writeFileSync('continental.js', continentalJs);


// 3. Update index.html1.html
let html = fs.readFileSync('index.html1.html', 'utf8');

if (!html.includes('value="arabia"')) {
    // League selection dropdown
    html = html.replace(
        /<option value="portugal">Liga Portugal - Portugal<\/option>/,
        `$&
                    <option value="arabia">Saudi Pro League - Arábia</option>`
    );
    
    // Transfer market dropdown
    html = html.replace(
        /<option value="portugal">🇵🇹 Liga Portugal<\/option>/,
        `$&
                    <option value="arabia">🇸🇦 Saudi Pro League - Arábia</option>`
    );
}
fs.writeFileSync('index.html1.html', html);


// 4. Update squads.js
let squadsData = fs.readFileSync('squads.js', 'utf8');
const newArabiaTeams = [
    { id: 'alhilal', str: 84 },
    { id: 'alnassr', str: 83 },
    { id: 'alittihad', str: 82 },
    { id: 'alahli', str: 81 },
    { id: 'alshabab', str: 78 },
    { id: 'altaawoun', str: 76 },
    { id: 'alettifaq', str: 77 },
    { id: 'alfateh', str: 75 },
    { id: 'alfayha', str: 74 },
    { id: 'damac', str: 74 }
];

let added = 0;
newArabiaTeams.forEach(t => {
    if (!squadsData.includes('"' + t.id + '": {')) {
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
        squadsData = squadsData.replace(/};\s*$/, squadJson + '\n};');
        added++;
    }
});
fs.writeFileSync('squads.js', squadsData);

console.log('Added Arabia league successfully!');
