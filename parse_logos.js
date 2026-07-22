const fs = require('fs');

const content = fs.readFileSync('/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1618/content.md', 'utf8');

const targets = [
    { id: "defensayjusticia", search: "Defensa" },
    { id: "belgrano", search: "Belgrano" },
    { id: "godoycruz", search: "Godoy Cruz" },
    { id: "banfield", search: "Banfield" },
    { id: "tigre", search: "Tigre" },
    { id: "union", search: "Union" },
    { id: "atleticotucuman", search: "Tucum" }
];

let scriptJs = fs.readFileSync('final/script.js', 'utf8');
let modifications = 0;

for (const t of targets) {
    const blockRegex = new RegExp(`\\"strTeam\\"\\s*:\\s*\\"[^\\"]*${t.search}[^\\"]*\\".*?\\"strBadge\\"\\s*:\\s*\\"([^\\"]+)\\"`, 'i');
    const match = content.match(blockRegex);
    if (match && match[1]) {
        let badgeUrl = match[1].replace(/\\\//g, '/');
        console.log(`Found logo for ${t.id}: ${badgeUrl}`);
        
        const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${t.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
        scriptJs = scriptJs.replace(regex, `$1${badgeUrl}$2`);
        modifications++;
    } else {
        console.log(`Logo NOT found for ${t.id}`);
    }
}

fs.writeFileSync('final/script.js', scriptJs);
console.log(`Updated ${modifications} logos.`);
