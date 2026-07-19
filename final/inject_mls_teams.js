const fs = require('fs');

const mlsTeamsString = fs.readFileSync('mls_teams.txt', 'utf8');

let scriptData = fs.readFileSync('script.js', 'utf8');

// Find the end of allTeams array
const allTeamsEndRegex = /(let allTeams = \[\s*[\s\S]*?)(];)/;
scriptData = scriptData.replace(allTeamsEndRegex, (match, p1, p2) => {
    // Append a comma to the last team if missing
    let trimmed = p1.trim();
    if (!trimmed.endsWith(',')) trimmed += ',';
    
    return trimmed + '\\n' + mlsTeamsString + '\\n' + p2;
});

fs.writeFileSync('script.js', scriptData);
console.log('Injected MLS teams into script.js');
