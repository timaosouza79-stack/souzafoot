const fs = require('fs');

const files = [
    { id: "defensayjusticia", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1589/content.md" },
    { id: "belgrano", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1595/content.md" },
    { id: "godoycruz", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1596/content.md" },
    { id: "banfield", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1597/content.md" },
    { id: "tigre", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1598/content.md" },
    { id: "union", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1599/content.md" },
    { id: "atleticotucuman", path: "/Users/adm123/.gemini/antigravity-ide/brain/105f530f-5740-4359-8e2e-2d4ed7235858/.system_generated/steps/1600/content.md" }
];

let scriptJs = fs.readFileSync('final/script.js', 'utf8');
let modifications = 0;

for (const f of files) {
    if (!fs.existsSync(f.path)) continue;
    const content = fs.readFileSync(f.path, 'utf8');
    
    // We just want the first strBadge we find
    const match = content.match(/\\"strBadge\\"\\s*:\\s*\\"([^\\"]+)\\"/);
    if (match && match[1]) {
        let badgeUrl = match[1].replace(/\\\//g, '/');
        console.log(`Found logo for ${f.id}: ${badgeUrl}`);
        
        const regex = new RegExp(`(\\"id\\"\\s*:\\s*\\"${f.id}\\".*?\\"shield\\"\\s*:\\s*\\")[^\\"]+(\\")`, 'g');
        scriptJs = scriptJs.replace(regex, `$1${badgeUrl}$2`);
        modifications++;
    } else {
        console.log(`Logo NOT found in file for ${f.id}`);
    }
}

fs.writeFileSync('final/script.js', scriptJs);
console.log(`Updated ${modifications} logos.`);
