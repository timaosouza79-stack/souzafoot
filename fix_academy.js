const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

// 1. Fix display block to display flex
script = script.replace(/document\.getElementById\('modal-academy'\)\.style\.display = 'block';/, "document.getElementById('modal-academy').style.display = 'flex';");

// 2. Add an "Investir" button to the empty state and the filled state
// The user wants to spend 50k to upgrade a player
const promoteRegex = /<div>\n\s*<button class="btn btn-primary" onclick="promoteYouthPlayer\(\$\{index\}\)" style="background-color: var\(--primary-color\);">Promover<\/button>\n\s*<\/div>/;

const promoteInvestStr = `<div style="display:flex; flex-direction:column; gap:8px;">
                <button class="btn btn-primary" onclick="promoteYouthPlayer(\${index})" style="background-color: var(--primary-color); padding: 5px 10px; font-size:0.8rem;">Promover</button>
                <button class="btn btn-secondary" onclick="investYouthPlayer(\${index})" style="background-color: #ff9800; border-color: #ff9800; padding: 5px 10px; font-size:0.8rem;"><i class="fas fa-coins"></i> Investir (50k)</button>
            </div>`;

if (script.match(promoteRegex)) {
    script = script.replace(promoteRegex, promoteInvestStr);
}

// 3. Define investYouthPlayer function
const investFunc = `
window.investYouthPlayer = function(index) {
    if (!myTeam.plantelJuniores || index < 0 || index >= myTeam.plantelJuniores.length) return;
    
    // Check finances
    if (!myTeam.finances) myTeam.finances = { balance: 0 };
    if (myTeam.finances.balance < 50000) {
        alert("O clube não tem € 50.000 para investir neste jovem no momento.");
        return;
    }
    
    myTeam.finances.balance -= 50000;
    const player = myTeam.plantelJuniores[index];
    player.strength += 1;
    
    // Some visual feedback
    alert("Investimento realizado! A força de " + player.name + " subiu para " + player.strength + ".");
    
    // Update finances UI if possible
    try { updateDashboardUI(); } catch(e){}
    
    // Re-render
    renderAcademyPlayers();
    saveGame();
};
`;

if (!script.includes("investYouthPlayer")) {
    script = script.replace(/function promoteYouthPlayer\(index\) \{/, investFunc + "\nfunction promoteYouthPlayer(index) {");
}

// 4. Also generate first intake if empty when loading
const generateFirstIntakeStr = `
    // Gera primeira fornada de base se o time não tiver NENHUM jovem
    if (myTeam && (!myTeam.plantelJuniores || myTeam.plantelJuniores.length === 0)) {
        generateYouthIntake(myTeam);
    }
`;

if (!script.includes("Gera primeira fornada de base")) {
    script = script.replace(/myTeam = allTeams\.find\(t => t\.id === state\.myTeamId\);\n\n        if \(\!myTeam\) \{/, `myTeam = allTeams.find(t => t.id === state.myTeamId);\n${generateFirstIntakeStr}\n\n        if (!myTeam) {`);
}

fs.writeFileSync('script.js', script, 'utf8');
fs.writeFileSync('final/script.js', script, 'utf8');
console.log("Fixed Academy UI and logic.");
