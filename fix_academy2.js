const fs = require('fs');

// 1. Fix missing investYouthPlayer function
let script = fs.readFileSync('script.js', 'utf8');

const investFunc = `
window.investYouthPlayer = function(index) {
    if (!myTeam.plantelJuniores || index < 0 || index >= myTeam.plantelJuniores.length) return;
    
    if (!myTeam.finances) myTeam.finances = { balance: 0 };
    if (myTeam.finances.balance < 50000) {
        alert("O clube não tem € 50.000 para investir neste jovem no momento.");
        return;
    }
    
    myTeam.finances.balance -= 50000;
    const player = myTeam.plantelJuniores[index];
    player.strength += 1;
    
    alert("Investimento realizado! A força de " + player.name + " subiu para " + player.strength + ".");
    
    try { updateDashboardUI(); } catch(e){}
    renderAcademyPlayers();
    saveGame();
};
`;

if (!script.includes("window.investYouthPlayer = function")) {
    script = script.replace(/function promoteYouthPlayer\(index\) \{/, investFunc + "\nfunction promoteYouthPlayer(index) {");
    fs.writeFileSync('script.js', script, 'utf8');
    fs.writeFileSync('final/script.js', script, 'utf8');
    console.log("Added investYouthPlayer.");
}

// 2. Fix z-index in index.html
let html = fs.readFileSync('index.html', 'utf8');
if (html.includes('<div id="modal-academy" class="modal">')) {
    html = html.replace('<div id="modal-academy" class="modal">', '<div id="modal-academy" class="modal" style="z-index: 10000;">');
    fs.writeFileSync('index.html', html, 'utf8');
    fs.writeFileSync('final/index.html', html, 'utf8');
    console.log("Fixed z-index in index.html.");
}
