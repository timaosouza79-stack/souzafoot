// Master League Negotiation Logic

let currentNegPlayer = null;
let currentNegTeam = null;

// Track negotiations to persist patience/mood.
// We attach this to myTeam so it saves with saveGame()
function getNegotiationState(playerId) {
    if (!myTeam.negotiations) myTeam.negotiations = {};
    if (!myTeam.negotiations[playerId]) {
        myTeam.negotiations[playerId] = {
            patience: 100, // 0 to 100
            lockedUntil: 0, // turn/round when it unlocks
            attempts: 0
        };
    }
    return myTeam.negotiations[playerId];
}

function openMasterNegotiation(playerId, fromTeamId) {
    const fromTeam = allTeams.find(t => String(t.id) === String(fromTeamId));
    if (!fromTeam) { alert("Clube não encontrado."); return; }
    const player = fromTeam.squad.find(p => String(p.id) === String(playerId));
    if (!player) { alert("Jogador não encontrado."); return; }

    currentNegPlayer = player;
    currentNegTeam = fromTeam;

    const state = getNegotiationState(player.id);
    
    // Check if locked
    if (currentRound < state.lockedUntil) {
        alert(`NEGOCIAÇÕES ENCERRADAS!\n\nO empresário do jogador recusa-se a falar com você pelas próximas semanas devido a propostas anteriores.`);
        return;
    }

    // Populate UI
    document.getElementById('modal-negotiation-master').style.display = 'flex';
    document.getElementById('neg-budget-transfer').innerText = (myTeam.balance / 1000000).toFixed(1) + "M";
    
    document.getElementById('neg-player-pos').innerText = player.position;
    document.getElementById('neg-player-name').innerText = player.name;
    document.getElementById('neg-player-str').innerText = player.strength;
    document.getElementById('neg-club-name').innerText = fromTeam.name;
    document.getElementById('neg-player-age').innerText = player.age;

    // Inicializar e popular dados de contrato
    if (!player.contractYears) player.contractYears = Math.floor(Math.random() * 5) + 1; // 1 a 5 anos
    if (!player.salario) player.salario = calculateSalary(player);

    document.getElementById('neg-current-wage-display').innerText = "R$ " + (player.salario / 1000000).toFixed(1) + "M/ano";
    document.getElementById('neg-contract-years-display').innerText = player.contractYears + (player.contractYears > 1 ? " anos" : " ano");
    
    const reqWage = calculateSalary(player) / 1000000;
    document.getElementById('neg-requested-wage-display').innerText = "R$ " + reqWage.toFixed(1) + "M/ano";
    const marketValue = calculatePlayerMarketValue(player);
    document.getElementById('neg-market-value').innerText = "R$ " + (marketValue / 1000000).toFixed(1) + "M";

    // Setup initial sliders and inputs
    const initialOffer = marketValue / 1000000;
    const transferRange = document.getElementById('neg-transfer-range');
    const transferInput = document.getElementById('neg-transfer-input');
    
    transferRange.max = Math.max(initialOffer * 3, (myTeam.balance / 1000000)).toFixed(1);
    transferRange.value = initialOffer.toFixed(1);
    transferInput.value = initialOffer.toFixed(1);

    const initialWage = calculateSalary(player) / 1000000;
    const wageRange = document.getElementById('neg-wage-range');
    const wageInput = document.getElementById('neg-wage-input');
    wageRange.max = Math.max(initialWage * 5, 20).toFixed(1);
    wageRange.value = initialWage.toFixed(1);
    wageInput.value = initialWage.toFixed(1);

    // Reset clauses
    document.getElementById('neg-bonus-sign').value = 0;
    document.getElementById('neg-bonus-goal').value = 0;
    document.getElementById('neg-contract-years').value = 3;
    document.getElementById('neg-sellon').value = 0;

    // Multa (Release Clause) = 2.5x to 3x market value
    const releaseClause = marketValue * 3;
    document.getElementById('neg-release-value').innerText = "R$ " + (releaseClause / 1000000).toFixed(1) + "M";

    updatePatienceUI();
    
    // Add to sidebar list if not already there (for visual flair)
    renderSidebarList();
    
    // Initial dialogue
    setDialogue(`"Olá. Represento os interesses do ${player.name} e do ${fromTeam.name}. Estamos abertos a propostas, mas esperamos valores compatíveis com o mercado."`);
    
    recalcProb();
}

function renderSidebarList() {
    const list = document.getElementById('neg-player-list');
    list.innerHTML = '';
    
    // Mostramos os jogadores que têm alguma negociação iniciada (paciência < 100 ou locked)
    if (!myTeam.negotiations) return;
    
    let hasItems = false;
    for (const pid in myTeam.negotiations) {
        const state = myTeam.negotiations[pid];
        
        let pName = "Desconhecido";
        let pOvr = 0;
        
        // Buscar info rápida
        allTeams.forEach(t => {
            if (t.squad) {
                const p = t.squad.find(x => String(x.id) === String(pid));
                if(p) { pName = p.name; pOvr = p.strength; }
            }
        });

        if (pName !== "Desconhecido") {
            hasItems = true;
            let status = state.lockedUntil > currentRound ? `<span style="color:#e74c3c;font-size:0.8rem;">Bloqueado</span>` : `<span style="color:#2ecc71;font-size:0.8rem;">Aberto</span>`;
            
            const div = document.createElement('div');
            div.style.padding = "10px 15px";
            div.style.borderBottom = "1px solid #2a2e49";
            div.style.cursor = "pointer";
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between;">
                    <strong style="color:#fff;">${pName}</strong>
                    <span style="color:#f1c40f;">${pOvr}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:5px;">
                    ${status}
                    <span style="font-size:0.8rem; color:#a2a8d3;">Humor: ${state.patience}%</span>
                </div>
            `;
            list.appendChild(div);
        }
    }

    if (!hasItems) {
        list.innerHTML = `<div style="padding:15px; color:#a2a8d3; font-size:0.85rem; text-align:center;">Nenhum jogador em pauta.</div>`;
    }
}

function updatePatienceUI() {
    if (!currentNegPlayer) return;
    const state = getNegotiationState(currentNegPlayer.id);
    const bar = document.getElementById('neg-patience-bar');
    bar.style.width = state.patience + '%';
    
    if (state.patience > 70) bar.style.background = '#2ecc71';
    else if (state.patience > 30) bar.style.background = '#f1c40f';
    else bar.style.background = '#e74c3c';
}

function setDialogue(text) {
    document.getElementById('neg-dialogue-box').innerText = text;
}

function updateNegValues(source) {
    if (source === 'transfer') {
        document.getElementById('neg-transfer-input').value = document.getElementById('neg-transfer-range').value;
    } else if (source === 'transfer-input') {
        document.getElementById('neg-transfer-range').value = document.getElementById('neg-transfer-input').value;
    } else if (source === 'wage') {
        document.getElementById('neg-wage-input').value = document.getElementById('neg-wage-range').value;
    } else if (source === 'wage-input') {
        document.getElementById('neg-wage-range').value = document.getElementById('neg-wage-input').value;
    }
    recalcProb();
}

function recalcProb() {
    if (!currentNegPlayer) return;

    const marketValue = calculatePlayerMarketValue(currentNegPlayer);
    const currentWage = currentNegPlayer.salario || calculateSalary(currentNegPlayer);
    
    const offerTransferM = parseFloat(document.getElementById('neg-transfer-input').value) || 0;
    const offerWageM = parseFloat(document.getElementById('neg-wage-input').value) || 0;
    
    const offerTransfer = offerTransferM * 1000000;
    const offerWage = offerWageM * 1000000;
    
    const bonusSign = parseFloat(document.getElementById('neg-bonus-sign').value || 0) * 1000000;
    const bonusGoal = parseFloat(document.getElementById('neg-bonus-goal').value || 0) * 1000;
    const sellon = parseFloat(document.getElementById('neg-sellon').value || 0);
    
    // Clubes grandes exigem sobrepreço para seus craques
    let bigClubPremium = 1.0;
    const bigClubs = ['realmadrid', 'mancity', 'psg', 'bayern', 'barcelona', 'liverpool', 'arsenal'];
    if (currentNegPlayer.strength >= 87 && typeof currentNegTeam !== 'undefined' && currentNegTeam && bigClubs.includes(currentNegTeam.id)) {
        bigClubPremium = 1.4; // 40% acima do valor de mercado
    }
    
    // Multiplicador de Tempo de Contrato
    let contractMultiplier = 1.0;
    if (currentNegPlayer.contractYears <= 1) contractMultiplier = 0.6; // Desconto de 40% se está em fim de contrato
    else if (currentNegPlayer.contractYears >= 3) contractMultiplier = 1.15; // Prêmium de 15% por contrato longo

    // Fatores
    const transferFactor = offerTransfer / (marketValue * bigClubPremium * contractMultiplier);
    const wageFactor = offerWage / currentWage;
    
    // Reputação vs Ego
    let repPenalty = 0;
    const myTeamRep = myTeam.rep || myTeam.reputation || 30;
    if (currentNegPlayer.strength >= 80 && myTeamRep < 75) repPenalty = 0.4;
    else if (currentNegPlayer.strength >= 75 && myTeamRep < 50) repPenalty = 0.2;

    // Bonus atraentes reduzem a exigência do clube e agradam jogador
    const bonusFactor = (bonusSign / (marketValue * 0.1)) * 0.1 + (sellon / 50) * 0.15;
    
    let prob = (transferFactor * 0.6) + (Math.min(1.5, wageFactor) * 0.2) + bonusFactor - repPenalty;
    
    const state = getNegotiationState(currentNegPlayer.id);
    // Humor reduz probabilidade
    if (state.patience < 50) prob -= 0.2;
    if (state.patience < 20) prob -= 0.4;

    // Normalizar
    let chance = 0;
    if (prob >= 1.2) chance = 95;
    else if (prob >= 1.0) chance = 70;
    else if (prob >= 0.8) chance = 40;
    else if (prob >= 0.6) chance = 15;
    else chance = 1;

    const probText = document.getElementById('neg-prob-text');
    probText.innerText = chance + "%";
    
    if (chance > 70) probText.style.color = '#2ecc71';
    else if (chance > 30) probText.style.color = '#f1c40f';
    else probText.style.color = '#e74c3c';

    return chance;
}

function submitMasterOffer() {
    if (!currentNegPlayer) return;

    const offerTransfer = parseFloat(document.getElementById('neg-transfer-input').value) * 1000000;
    if (myTeam.balance < offerTransfer) {
        alert("Você não tem saldo suficiente para esta taxa de transferência!");
        return;
    }

    const state = getNegotiationState(currentNegPlayer.id);
    state.attempts++;
    
    const chance = recalcProb();
    const marketValue = calculatePlayerMarketValue(currentNegPlayer);
    let bigClubPremium = 1.0;
    const bigClubs = ['realmadrid', 'mancity', 'psg', 'bayern', 'barcelona', 'liverpool', 'arsenal'];
    if (currentNegPlayer.strength >= 87 && typeof currentNegTeam !== 'undefined' && currentNegTeam && bigClubs.includes(currentNegTeam.id)) {
        bigClubPremium = 1.4;
    }
    let contractMultiplier = 1.0;
    if (currentNegPlayer.contractYears <= 1) contractMultiplier = 0.6;
    else if (currentNegPlayer.contractYears >= 3) contractMultiplier = 1.15;

    const transferFactor = offerTransfer / (marketValue * bigClubPremium * contractMultiplier);

    // Regra de Superestrelas (OVR 90+): O clube se recusa a vender por qualquer valor menor que a multa
    if (currentNegPlayer.strength >= 90) {
        const releaseClause = marketValue * 3;
        if (offerTransfer < releaseClause) {
            setDialogue(`"O ${currentNegPlayer.name} é inegociável! O nosso clube não aceita vender uma superestrela desse nível. A única forma de o levar é pagando o valor integral da Multa Rescisória!"`);
            state.patience = Math.max(0, state.patience - 20);
            updatePatienceUI();
            return;
        }
    }

    // Proposta ofensiva
    if (transferFactor < 0.6) {
        state.patience = Math.max(0, state.patience - 50);
        updatePatienceUI();
        if (state.patience === 0) {
            setDialogue(`"Isso é uma piada! Uma oferta de R$ ${(offerTransfer/1000000).toFixed(1)}M é um insulto à nossa inteligência e à qualidade do jogador. As negociações estão encerradas!"`);
            state.lockedUntil = currentRound + 4; // Bloqueado por 4 rodadas
            setTimeout(() => { closeMasterNegotiation(); renderMarket(); }, 3500);
            return;
        } else {
            setDialogue(`"Você deve estar brincando. Nossa paciência está esgotando com ofertas tão baixas. Melhore isso significativamente se quiser continuar."`);
            return;
        }
    }

    // Insistência excessiva sem sucesso
    if (state.attempts > 4) {
        state.patience = Math.max(0, state.patience - 25);
        updatePatienceUI();
        setDialogue(`"Já estamos discutindo isso há tempo demais sem chegar a um acordo. Estão nos fazendo perder tempo."`);
    }

    // Tentar sorte
    if (Math.random() * 100 <= chance) {
        setDialogue(`"Excelente! Chegamos a um acordo. Os valores agradam a todas as partes. O ${currentNegPlayer.name} vai assinar os papéis imediatamente!"`);
        
        // Efetivar transferência
        setTimeout(() => {
            const contractYears = document.getElementById('neg-contract-years').value;
            currentNegPlayer.salario = parseFloat(document.getElementById('neg-wage-input').value) * 1000000;
            currentNegPlayer.contractYears = parseInt(contractYears);
            executeTransfer(currentNegPlayer.id, currentNegTeam.id, offerTransfer, contractYears);
            closeMasterNegotiation();
        }, 2000);
    } else {
        state.patience = Math.max(0, state.patience - 15);
        updatePatienceUI();
        
        if (state.patience === 0) {
            setDialogue(`"Não chegamos a um acordo. O jogador e o clube decidiram encerrar as conversas. Adeus."`);
            state.lockedUntil = currentRound + 3;
            setTimeout(() => { closeMasterNegotiation(); renderMarket(); }, 3000);
        } else {
            setDialogue(`"Ainda não chegamos aos valores desejados. Precisam melhorar a proposta, seja na taxa de transferência ou nos salários e bónus."`);
        }
    }
}

function payReleaseClause() {
    if (!currentNegPlayer) return;
    
    const marketValue = calculatePlayerMarketValue(currentNegPlayer);
    const releaseClause = marketValue * 3;
    
    if (myTeam.balance < releaseClause) {
        alert("Você não tem saldo suficiente para pagar a multa rescisória!");
        return;
    }
    
    if (confirm(`Deseja acionar a multa rescisória de R$ ${(releaseClause/1000000).toFixed(1)}M?\nIsso ignora qualquer recusa do clube vendedor.`)) {
        setDialogue(`"O quê?! Acionaram a cláusula de rescisão... Não há nada que possamos fazer para impedir. Ele é vosso."`);
        setTimeout(() => {
            const contractYears = document.getElementById('neg-contract-years').value;
            currentNegPlayer.salario = parseFloat(document.getElementById('neg-wage-input').value) * 1000000;
            currentNegPlayer.contractYears = parseInt(contractYears);
            executeTransfer(currentNegPlayer.id, currentNegTeam.id, releaseClause, contractYears);
            closeMasterNegotiation();
        }, 2000);
    }
}

function closeMasterNegotiation() {
    document.getElementById('modal-negotiation-master').style.display = 'none';
    currentNegPlayer = null;
    currentNegTeam = null;
    renderSidebarList();
}
