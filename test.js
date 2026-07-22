const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const renderCalendarStr = `// Renderiza o calendário completo da temporada para o time do usuário
function renderCalendar() {
    if (!myTeam) return;
    document.getElementById('calendar-team-name').innerText = myTeam.name;
    const list = document.getElementById('calendar-list');
    list.innerHTML = '';

    let leagueRd = 0;
    let cupRoundIdx = 0;
    let continentalRoundIdx = 0;
    
    matchSchedule.forEach((roundData, index) => {
        if (roundData.type === 'league') leagueRd++;
        const type = roundData.type;
        const compNames = getCompetitionNames(myTeam.league);
        const label = type === 'cup' ? compNames.cup : (type === 'libertadores' || type === 'continental' ? compNames.continental : \`\${compNames.league} - RD \${leagueRd}\`);
        const labelColor = type === 'cup' ? '#ffd700' : (type === 'libertadores' || type === 'continental' ? '#3f51b5' : '#4CAF50');
        
        const roundNum = index + 1;
        
        let match = null;
        if (type === 'league') {
            match = roundData.matches ? roundData.matches.find(m => m.home === myTeam.id || m.away === myTeam.id) : null;
        } else if (type === 'cup') {
            if (typeof cupBracket !== 'undefined' && Array.isArray(cupBracket) && cupBracket.length > cupRoundIdx) {
                match = cupBracket[cupRoundIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
            }
            cupRoundIdx++;
        } else if (type === 'continental' || type === 'libertadores') {
            const currentContinentalIdx = continentalRoundIdx;
            continentalRoundIdx++;
            
            // Fase de grupos tem 6 rodadas (0 a 5)
            if (currentContinentalIdx < 6) {
                if (typeof libertadoresGroups !== 'undefined' && Array.isArray(libertadoresGroups) && libertadoresGroups.length > 0) {
                    const myGroup = libertadoresGroups.find(g => g.teams.includes(myTeam.id));
                    if (myGroup) {
                        const teams = myGroup.teams;
                        let m1, m2;
                        if (currentContinentalIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                        else if (currentContinentalIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                        else if (currentContinentalIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                        else if (currentContinentalIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                        else if (currentContinentalIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                        else if (currentContinentalIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                        
                        if (m1 && (m1.home === myTeam.id || m1.away === myTeam.id)) match = m1;
                        else if (m2 && (m2.home === myTeam.id || m2.away === myTeam.id)) match = m2;
                    }
                }
                
                if (!match && typeof sulAmericanaGroups !== 'undefined' && Array.isArray(sulAmericanaGroups) && sulAmericanaGroups.length > 0) {
                     const myGroup = sulAmericanaGroups.find(g => g.teams.includes(myTeam.id));
                     if (myGroup) {
                        const teams = myGroup.teams;
                        let m1, m2;
                        if (currentContinentalIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                        else if (currentContinentalIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                        else if (currentContinentalIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                        else if (currentContinentalIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                        else if (currentContinentalIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                        else if (currentContinentalIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                        
                        if (m1 && (m1.home === myTeam.id || m1.away === myTeam.id)) match = m1;
                        else if (m2 && (m2.home === myTeam.id || m2.away === myTeam.id)) match = m2;
                     }
                }
            } else {
                // Fase mata-mata
                const knockoutIdx = currentContinentalIdx - 6;
                if (typeof libertadoresBracket !== 'undefined' && Array.isArray(libertadoresBracket) && libertadoresBracket.length > knockoutIdx) {
                    match = libertadoresBracket[knockoutIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
                }
                if (!match && typeof sulAmericanaBracket !== 'undefined' && Array.isArray(sulAmericanaBracket) && sulAmericanaBracket.length > knockoutIdx) {
                    match = sulAmericanaBracket[knockoutIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
                }
            }
        }
        
        let shouldRender = false;
        
        if (match) {
            shouldRender = true; // Jogo sorteado (ou grupo) e envolve meu time
        } else {
            // Se for uma rodada futura onde os sorteios ainda não foram feitos
            if (roundNum >= currentRound) {
                if (type === 'cup' && isAliveInCup(myTeam.id)) {
                    shouldRender = true;
                } else if ((type === 'continental' || type === 'libertadores') && isAliveInContinental(myTeam.id)) {
                    shouldRender = true;
                } else if (type === 'intercontinental' && typeof libertadoresWinnerId !== 'undefined' && myTeam.id === libertadoresWinnerId) {
                    shouldRender = true;
                }
            }
        }

        if (shouldRender) {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.padding = '12px 15px';
            
            // Destaque para o "Próximo Jogo" (rodada atual)
            if (roundNum === currentRound) {
                li.style.backgroundColor = "rgba(255, 152, 0, 0.15)";
                li.style.borderLeft = "4px solid var(--accent-color)";
            } else if (roundNum < currentRound) {
                li.style.opacity = "0.7"; // Jogos passados ficam mais apagados
            }
            
            let matchHtml = '';
            let statusHtml = '';

            if (match) {
                const home = allTeams.find(t => t.id === match.home) || {name: "???"};
                const away = allTeams.find(t => t.id === match.away) || {name: "???"};
                const isHome = match.home === myTeam.id;
                
                // Jogo já realizado tem placar guardado?
                if (match.homeScore !== undefined) {
                    const scoreText = \`<strong style="font-size: 1.1rem;">\${match.homeScore} x \${match.awayScore}</strong>\`;
                    
                    let resultBadge = '';
                    let resultColor = '';
                    
                    if ((isHome && match.homeScore > match.awayScore) || (!isHome && match.awayScore > match.homeScore)) {
                        resultBadge = 'V';
                        resultColor = '#4CAF50';
                    } else if (match.homeScore === match.awayScore) {
                        resultBadge = 'E';
                        resultColor = '#9e9e9e';
                    } else {
                        resultBadge = 'D';
                        resultColor = '#f44336';
                    }

                    matchHtml = \`
                        <div style="flex: 1; text-align: right; \${isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">\${home.name}</div>
                        <div style="width: 70px; text-align: center; background: rgba(255,255,255,0.05); border-radius: 4px; padding: 2px 0; margin: 0 10px;">\${scoreText}</div>
                        <div style="flex: 1; text-align: left; \${!isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">\${away.name}</div>
                    \`;
                    
                    statusHtml = \`<div style="font-weight: 900; color: \${resultColor}; font-size: 0.9rem; width: 30px; text-align: center;">[\${resultBadge}]</div>\`;
                } else {
                    // Jogo futuro / atual sorteado (ou grupo já passado sem placar salvo)
                    matchHtml = \`
                        <div style="flex: 1; text-align: right; \${isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">\${home.name}</div>
                        <div style="width: 50px; text-align: center; color: var(--text-muted); font-weight: bold; margin: 0 10px;">VS</div>
                        <div style="flex: 1; text-align: left; \${!isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">\${away.name}</div>
                    \`;
                    
                    if (roundNum === currentRound) {
                        statusHtml = \`<div style="font-size: 0.75rem; font-weight: bold; color: var(--accent-color); background: rgba(255,152,0,0.2); padding: 3px 6px; border-radius: 4px;">PRÓXIMO</div>\`;
                    } else {
                        statusHtml = \`<div style="width: 30px;"></div>\`;
                    }
                }
            } else {
                matchHtml = \`<div style="flex: 1; text-align: center; color: var(--text-muted); font-style: italic; font-size: 0.85rem;">Confronto a definir (Avançar de Fase)</div>\`;
                statusHtml = \`<div style="width: 30px;"></div>\`;
            }

            li.innerHTML = \`
                <div style="width: 140px; font-weight: 800; color: \${labelColor}; font-size: 0.7rem; text-transform: uppercase;">\${label}</div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    \${matchHtml}
                </div>
                \${statusHtml}
            \`;
            list.appendChild(li);
        }
    });
}
`;

const startIndex = content.indexOf('// Renderiza o calendário completo da temporada para o time do usuário');
const endIndex = content.indexOf('function renderStats(competition)') - 1; // get the exact boundary

if (startIndex > -1 && endIndex > -1) {
    content = content.substring(0, startIndex) + renderCalendarStr + content.substring(endIndex);
    fs.writeFileSync('script.js', content, 'utf8');
    fs.writeFileSync('final/script.js', content, 'utf8'); // also update final
    console.log('script.js and final/script.js updated successfully!');
} else {
    console.log('Could not find the insertion bounds!');
}

