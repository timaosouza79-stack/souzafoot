const fs = require('fs');
const contentMd = fs.readFileSync('/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1618/content.md', 'utf8');

// The JSON starts around line 9 after the markdown header
const jsonStr = contentMd.split('---')[1].trim();
let allTeams = [];
try {
    const data = JSON.parse(jsonStr);
    allTeams = data.teams || [];
} catch (e) {
    console.error("Failed to parse JSON");
    process.exit(1);
}

const targets = [
    { id: "defensayjusticia", search: "Defensa" },
    { id: "belgrano", search: "Belgrano" },
    { id: "godoycruz", search: "Godoy Cruz" },
    { id: "banfield", search: "Banfield" },
    { id: "tigre", search: "Tigre" },
    { id: "union", search: "Union" },
    { id: "atleticotucuman", search: "Tucum" } // Tucumán
];

let scriptJs = fs.readFileSync('final/script.js', 'utf8');
let modifications = 0;

for (const t of targets) {
    const teamObj = allTeams.find(tm => tm.strTeam.includes(t.search) || (tm.strTeamAlternate && tm.strTeamAlternate.includes(t.search)));
    if (teamObj && teamObj.strBadge) {
        let badgeUrl = teamObj.strBadge;
        console.log(`Found ${badgeUrl} for ${t.id} (${teamObj.strTeam})`);
        
        // Ensure URL isn't escaped
        badgeUrl = badgeUrl.replace(/\\\//g, '/');
        
        const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${t.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
        scriptJs = scriptJs.replace(regex, `$1${badgeUrl}$2`);
        modifications++;
    } else {
        console.log(`Could not find team for ${t.id}`);
    }
}

fs.writeFileSync('final/script.js', scriptJs);
console.log(`Updated ${modifications} teams.`);
