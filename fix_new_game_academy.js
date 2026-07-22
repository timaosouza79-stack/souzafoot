const fs = require('fs');
let script = fs.readFileSync('script.js', 'utf8');

// Also generate intake on createManager
const createManagerStr = `myTeam = allTeams.find(t => t.id === state.myTeamId);`;
// actually, createManager sets up the team and calls saveGame.

const createRegex = /myTeam = allTeams\.find\(t => t\.id === selectedTeam\);\n\s*if \(!myTeam\) return;\n\n\s*let initialFinances = 1500000;/;

if (script.match(createRegex)) {
    script = script.replace(createRegex, `myTeam = allTeams.find(t => t.id === selectedTeam);
    if (!myTeam) return;
    
    // Gera primeira fornada de base ao iniciar o jogo
    if (!myTeam.plantelJuniores || myTeam.plantelJuniores.length === 0) {
        generateYouthIntake(myTeam);
    }

    let initialFinances = 1500000;`);
    fs.writeFileSync('script.js', script, 'utf8');
    fs.writeFileSync('final/script.js', script, 'utf8');
    console.log("Added academy intake to createManager.");
} else {
    console.log("Regex not found for createManager.");
}
