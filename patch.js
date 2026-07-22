const fs = require('fs');
let code = fs.readFileSync('script_v2.js', 'utf8');
code = code.replace(
    /function openTransferModal\(playerId, fromTeamId, marketPrice\) \{[\s\S]*?\} catch \(e\) \{/m,
    `function openTransferModal(playerId, fromTeamId, marketPrice) {
    try {
        document.body.insertAdjacentHTML('afterbegin', '<div id="debug-log" style="position:fixed;top:0;left:0;z-index:999999;background:red;color:white;padding:20px;font-size:20px;width:100%;">DEBUG START</div>');
        
        const fromTeam = allTeams.find(t => String(t.id) === String(fromTeamId));
        if (!fromTeam) { document.getElementById('debug-log').innerText = "Clube não encontrado"; return; }
        const player = fromTeam.squad.find(p => String(p.id) === String(playerId));
        if (!player) { document.getElementById('debug-log').innerText = "Jogador não encontrado"; return; }

        const releaseClause = marketPrice * 2;
        const expectedSalary = player.salario || calculateSalary(player);
        let demandedSalary = expectedSalary;
        if (player.strength > 75) demandedSalary = Math.round(expectedSalary * 1.15);

        currentTransferNegotiation = {
            playerId,
            fromTeamId,
            player,
            fromTeam,
            marketPrice,
            releaseClause,
            demandedSalary
        };

        const infoDiv = document.getElementById('transfer-offer-info');
        if (!infoDiv) {
            document.getElementById('debug-log').innerText = "infoDiv não encontrado"; return;
        }

        infoDiv.innerHTML = \`<div style="display:flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <strong style="font-size: 1.2rem; color: var(--accent-color);">\${player.name}</strong>
                <span class="player-pos">\${player.position || 'N/A'}</span>
            </div>
            <div style="display:flex; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <div><strong>Clube Atual:</strong> \${fromTeam.name}</div>
                <div><strong>OVR:</strong> \${player.strength}</div>
                <div><strong>Idade:</strong> \${player.age}</div>
                <div><strong>Valor de Mercado:</strong> R$ \${(marketPrice/1000000).toFixed(1)}M</div>
                <div><strong>Multa Rescisória:</strong> R$ \${(releaseClause/1000000).toFixed(1)}M</div>
                <div><strong>Salário Atual:</strong> R$ \${(player.salario||expectedSalary).toLocaleString('pt-BR')}</div>
            </div>\`;

        document.getElementById('input-transfer-fee').value = marketPrice;
        document.getElementById('input-transfer-salary').value = demandedSalary;

        document.getElementById('btn-pay-clause').onclick = () => {
            document.getElementById('input-transfer-fee').value = releaseClause;
        };
        document.getElementById('btn-offer-expected-salary').onclick = () => {
            document.getElementById('input-transfer-salary').value = demandedSalary;
        };

        document.getElementById('btn-submit-transfer-offer').onclick = submitTransferOffer;

        document.getElementById('modal-transfer-offer').style.display = 'flex';
        document.getElementById('debug-log').innerText = "DEBUG SUCCESS! MODAL SHOULD BE FLEX!";
    } catch (e) {
        document.getElementById('debug-log').innerText = "ERROR: " + e.message;
`
);
fs.writeFileSync('script_v2.js', code);
