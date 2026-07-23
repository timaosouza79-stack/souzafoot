function initSulAmericana(silent = false) {
    if (sulAmericanaGroups.length > 0 || sulAmericanaBracket.length > 0) return;

    isSulAmericanaMode = true;
    sulAmericanaPhase = 'groups';
    let pTeams = [];
    
    const isBrazil = myTeam.league.startsWith('brazil');
    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);

    if (sulAmericanaParticipants.length === 0) {
        if (isEurope) {
            pTeams = allTeams.filter(t => ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(t.league))
                             .sort((a, b) => b.strength - a.strength).slice(32, 64);
        } else {
            // FIX: Mix obrigatório — vagas sul-americanas estrangeiras + vagas brasileiras
            // 8 vagas garantidas para times estrangeiros clássicos CONMEBOL
            const VAGAS_EST_SUL = 8;
            let estrangeiros = [];
            if (typeof getEquipasEstrangeirasSulAmericanas === 'function') {
                estrangeiros = getEquipasEstrangeirasSulAmericanas(VAGAS_EST_SUL);
            } else {
                // Fallback: pega os mais fortes da south_america
                estrangeiros = allTeams.filter(t => ['south_america', 'argentina'].includes(t.league) && t.id !== myTeam.id && !libertadoresParticipants.includes(t.id))
                                       .sort(() => 0.5 - Math.random()).slice(0, VAGAS_EST_SUL);
            }

            const estIds = new Set(estrangeiros.map(t => t.id));

            // Pega os qualificadores brasileiros para a Sul-Americana (posicões 7º-12º do Brasileirão)
            const brSulIds = ['fortaleza', 'cruzeiro', 'corinthians', 'internacional', 'bahia', 'athleticopr',
                              'gremio', 'vasco', 'santos', 'sport', 'ceara', 'fluminense', 'bragantino', 'cuiaba'];
            let brSulQualifiers = allTeams.filter(t => brSulIds.includes(t.id) && !estIds.has(t.id) && !libertadoresParticipants.includes(t.id));

            if ((myTeam.league === 'brazil_a' || ['south_america', 'argentina'].includes(myTeam.league)) && !brSulQualifiers.find(t => t.id === myTeam.id) && !estIds.has(myTeam.id)) {
                brSulQualifiers.unshift(myTeam);
            }

            brSulQualifiers.sort((a, b) => b.strength - a.strength);
            const vagasBrasil = 32 - estrangeiros.length;
            const brSelecionados = brSulQualifiers.slice(0, vagasBrasil);

            pTeams = [...estrangeiros, ...brSelecionados];
        } 
    } else {
        pTeams = sulAmericanaParticipants.map(id => allTeams.find(t => t.id === id)).filter(t => t);

        // FIX: Se os participants vieram apenas de times brasileiros, injeta estrangeiros
        if (!isEurope) {
            const temEstrangeiro = pTeams.some(t => ['south_america', 'argentina'].includes(t.league));
            if (!temEstrangeiro) {
                const VAGAS_EST_SUL = 8;
                let estrangeiros = [];
                if (typeof getEquipasEstrangeirasSulAmericanas === 'function') {
                    estrangeiros = getEquipasEstrangeirasSulAmericanas(VAGAS_EST_SUL);
                } else {
                    estrangeiros = allTeams.filter(t => ['south_america', 'argentina'].includes(t.league) && t.id !== myTeam.id && !libertadoresParticipants.includes(t.id))
                                           .sort(() => 0.5 - Math.random()).slice(0, VAGAS_EST_SUL);
                }
                const estIds = estrangeiros.map(t => t.id);
                pTeams = pTeams.filter(t => !estIds.includes(t.id));
                pTeams = pTeams.slice(0, 32 - estrangeiros.length);
                pTeams = [...estrangeiros, ...pTeams];
            }
        }
    }

    if (pTeams.length < 32) {
        const usedIds = pTeams.map(t => t.id);
        const isTeamEurope = (league) => ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].some(l => league === l || league.startsWith(l + '_'));
        const fillTeams = allTeams.filter(t => {
            if (usedIds.includes(t.id)) return false;
            if (libertadoresParticipants.includes(t.id)) return false;
            return isEurope ? isTeamEurope(t.league) : !isTeamEurope(t.league);
        }).sort((a, b) => b.strength - a.strength);
        pTeams = [...pTeams, ...fillTeams.slice(0, 32 - pTeams.length)];
    }
    
    while (pTeams.length < 32) {
        const tempTeamId = `temp_sul_${pTeams.length}`;
        const tempTeamName = `Time Convidado Sul ${pTeams.length}`;
        pTeams.push({ id: tempTeamId, name: tempTeamName, strength: 65, shield: '', squad: [] });
    }
    
    pTeams.sort(() => 0.5 - Math.random());
    sulAmericanaParticipants = pTeams.map(t => t.id);

    sulAmericanaGroups = [];
    sulAmericanaGroupStandings = [];
    for (let i = 0; i < 8; i++) {
        const groupTeams = pTeams.slice(i * 4, (i + 1) * 4);
        sulAmericanaGroups.push({
            name: String.fromCharCode(65 + i),
            teams: groupTeams.map(t => t.id)
        });
        groupTeams.forEach(t => {
            sulAmericanaGroupStandings.push({
                id: t.id, group: String.fromCharCode(65 + i),
                p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0
            });
        });
    }

    const userInSul = sulAmericanaGroupStandings.find(s => s.id === myTeam.id);
    if (userInSul && !silent) {
        const bonus = isEurope ? 20000000 : 8000000;
        const compName = isEurope ? "Europa League" : "Copa Sul-Americana";
        myTeam.balance += bonus;
        addCommentaryItem(`🏆 O ${myTeam.name} está classificado para a ${compName}! Bônus de R$ ${(bonus/1000000).toFixed(1)}M recebido.`, 'info', 0);
    }
}

function finishSulAmericanaRound() {
    console.log("finishSulAmericanaRound: Iniciando...");
    const sulMatches = simulatedRoundMatches.filter(m => sulAmericanaParticipants.includes(m.home));
    if (sulMatches.length === 0) return;

    if (sulAmericanaPhase === 'groups') {
        sulMatches.forEach(m => {
            const homeId = m.home;
            const awayId = m.away;
            let h = sulAmericanaGroupStandings.find(s => s.id === homeId);
            let a = sulAmericanaGroupStandings.find(s => s.id === awayId);
            
            if (!h || !a) return; 

            h.j++; a.j++; h.gp += m.currentHomeGoals; h.gc += m.currentAwayGoals; a.gp += m.currentAwayGoals; a.gc += m.currentHomeGoals;
            h.sg = h.gp - h.gc; a.sg = a.gp - a.gc;
            if (m.currentHomeGoals > m.currentAwayGoals) { 
                if (h) { h.p += 3; h.v++; } if (a) a.d++; 
                if (homeId === myTeam.id) myTeam.balance += 800000; 
            }
            else if (m.currentHomeGoals < m.currentAwayGoals) { 
                if (a) { a.p += 3; a.v++; } if (h) h.d++; 
                if (awayId === myTeam.id) myTeam.balance += 800000; 
            }
            else { 
                h.p++; a.p++; h.e++; a.e++; 
                if (homeId === myTeam.id || awayId === myTeam.id) myTeam.balance += 250000;
            }
            
            // FIX BUG: Guardar resultado para aparecer no calendário
            const roundIdx = currentRound - 1;
            if (matchSchedule[roundIdx]) {
                if (!matchSchedule[roundIdx].matches) matchSchedule[roundIdx].matches = [];
                let savedMatch = matchSchedule[roundIdx].matches.find(sm => sm.home === m.home && sm.away === m.away);
                if (savedMatch) {
                    savedMatch.homeScore = m.currentHomeGoals;
                    savedMatch.awayScore = m.currentAwayGoals;
                } else {
                    matchSchedule[roundIdx].matches.push({ home: m.home, away: m.away, homeScore: m.currentHomeGoals, awayScore: m.currentAwayGoals });
                }
            }
        });

        const sulRound = matchSchedule.slice(0, currentRound).filter(r => r.type === 'continental').length;
        if (sulRound >= 6 && sulAmericanaPhase === 'groups') {
            sulAmericanaPhase = 'knockout';
            const qualifiers = [];
            sulAmericanaGroups.forEach(group => {
                const sorted = sulAmericanaGroupStandings.filter(s => s.group === group.name).sort((a,b) => b.p - a.p || b.sg - a.sg);
                qualifiers.push(sorted[0]?.id || 'BYE', sorted[1]?.id || 'BYE');
            });
            const r16 = [];
            for(let i=0; i<8; i++) {
                r16.push({ home: qualifiers[i], away: qualifiers[15-i], currentHomeGoals: 0, currentAwayGoals: 0 });
            }
            sulAmericanaBracket.push(r16);
        }
    } else {
        const currentPhase = sulMatches;
        const winners = [];
        
        const isFinal = sulAmericanaBracket.length === 7;
        const isLeg2 = sulAmericanaBracket.length % 2 === 0;
        const currentPhaseIndex = sulAmericanaBracket.length - 1;
        const currentPhaseMatches = sulAmericanaBracket[currentPhaseIndex];
        const previousPhaseMatches = isLeg2 ? sulAmericanaBracket[currentPhaseIndex - 1] : null;

        currentPhase.forEach(m => {
            let hg = m.currentHomeGoals;
            let ag = m.currentAwayGoals;
            let matchWinnerId = null;

            if (isLeg2) {
                const leg1Match = previousPhaseMatches.find(pm => pm.home === m.away && pm.away === m.home);
                if (leg1Match) {
                    const aggregateHome = hg + leg1Match.awayScore; 
                    const aggregateAway = ag + leg1Match.homeScore;
                    
                    if (aggregateHome === aggregateAway) {
                        if (Math.random() > 0.5) hg++; else ag++;
                        m.currentHomeGoals = hg;
                        m.currentAwayGoals = ag;
                    }
                    
                    const finalAggHome = hg + leg1Match.awayScore;
                    const finalAggAway = ag + leg1Match.homeScore;
                    matchWinnerId = finalAggHome > finalAggAway ? m.home : m.away;
                }
            } else if (isFinal) {
                if (hg === ag) {
                    if (Math.random() > 0.5) hg++; else ag++;
                    m.currentHomeGoals = hg;
                    m.currentAwayGoals = ag;
                }
                matchWinnerId = hg > ag ? m.home : m.away;
            }

            if (matchWinnerId) {
                const winnerObj = allTeams.find(t => t.id === matchWinnerId);
                if (winnerObj) winners.push(winnerObj);
            }
            
            let originalMatch = currentPhaseMatches.find(cm => cm.home === m.home && cm.away === m.away);
            if (originalMatch) {
                originalMatch.homeScore = hg;
                originalMatch.awayScore = ag;
            }
            
            const roundIdx = currentRound - 1;
            if (matchSchedule[roundIdx]) {
                if (!matchSchedule[roundIdx].matches) matchSchedule[roundIdx].matches = [];
                let savedMatch = matchSchedule[roundIdx].matches.find(sm => sm.home === m.home && sm.away === m.away);
                if (savedMatch) {
                    savedMatch.homeScore = hg;
                    savedMatch.awayScore = ag;
                } else {
                    matchSchedule[roundIdx].matches.push({ home: m.home, away: m.away, homeScore: hg, awayScore: ag });
                }
            }
            
            const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
            const compName = isEurope ? "Europa League" : "Sul-Americana";
            
            if (matchWinnerId && (m.home === myTeam.id || m.away === myTeam.id)) {
                if (matchWinnerId === myTeam.id && !isFinal) {
                    const prizes = { 2: 3000000, 4: 4500000, 6: 6000000 };
                    const prize = prizes[sulAmericanaBracket.length] || 2000000;
                    myTeam.balance += prize;
                    addCommentaryItem(`💰 ${compName}: O ${myTeam.name} avançou e recebeu R$ ${(prize/1000000).toFixed(1)}M!`, 'info', 90);
                } else if (!isFinal) {
                    addCommentaryItem(`❌ CONTINENTAL: O ${myTeam.name} foi eliminado.`, 'info', 90);
                }
            }
        });

        if (isFinal) {
            sulamericanaWinnerId = winners[0].id;
            isSulAmericanaMode = false;
            const champion = winners[0];
            const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
            const compName = isEurope ? "Europa League" : "Sul-Americana";
            
            alert(`🏆 FIM DO CONTINENTAL! O ${champion.name} é o campeão da ${compName}!`);
            if (champion.id === myTeam.id) {
                const finalPrize = 35000000;
                myTeam.hallOfFame.titles.push({ year: currentYear, title: compName });
                myTeam.balance += finalPrize;
            }
        } else if (isLeg2) {
            if (winners.length >= 2) {
                const nextPhase = [];
                for (let i = 0; i < winners.length; i += 2) {
                    if (winners[i+1]) {
                        nextPhase.push({ home: winners[i].id, away: winners[i+1].id, currentHomeGoals: 0, currentAwayGoals: 0 });
                    }
                }
                sulAmericanaBracket.push(nextPhase);
            }
        } else {
            const nextPhase = [];
            currentPhaseMatches.forEach(m => {
                nextPhase.push({ home: m.away, away: m.home, currentHomeGoals: 0, currentAwayGoals: 0 });
            });
            sulAmericanaBracket.push(nextPhase);
        }
    }
}

function initIntercontinental(silent = false) {
    if (intercontinentalBracket.length > 0) return;
    isIntercontinentalMode = true;

    if (!libertadoresWinnerId) {
        intercontinentalBracket = [[{ home: 'realmadrid', away: 'bocajuniors', currentHomeGoals: 0, currentAwayGoals: 0 }]];
        return;
    }

    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
    const ourChampionId = libertadoresWinnerId;
    
    let bossName, bossLeague;
    if (isEurope) {
        bossName = Math.random() > 0.5 ? "Boca Juniors" : "Flamengo";
        bossLeague = "brazil_a"; 
    } else {
        bossName = Math.random() > 0.5 ? "Real Madrid" : "Manchester City";
        bossLeague = "europe";
    }

    const boss = {
        id: "boss_intercontinental",
        name: bossName,
        strength: isEurope ? 88 : 96,
        shield: `https://ui-avatars.com/api/?name=${encodeURIComponent(bossName)}&background=random`,
        league: bossLeague,
        squad: []
    };
    allTeams.push(boss);

    intercontinentalBracket = [[{ home: ourChampionId, away: boss.id, currentHomeGoals: 0, currentAwayGoals: 0 }]];
}

function finishIntercontinentalRound() {
    const m = simulatedRoundMatches[0];
    if (!m) return;
    let homeGoals = m.currentHomeGoals;
    let awayGoals = m.currentAwayGoals;
    if (homeGoals === awayGoals) {
        if (Math.random() > 0.5) homeGoals++; else awayGoals++;
    }
    const winnerId = homeGoals > awayGoals ? m.home : m.away;
    const champion = allTeams.find(t => t.id === winnerId);
    
    if (intercontinentalBracket.length > 0 && intercontinentalBracket[0].length > 0) {
        intercontinentalBracket[0][0].homeScore = homeGoals;
        intercontinentalBracket[0][0].awayScore = awayGoals;
    }
    
    const roundIdx = currentRound - 1;
    if (matchSchedule[roundIdx]) {
        if (!matchSchedule[roundIdx].matches) matchSchedule[roundIdx].matches = [];
        let savedMatch = matchSchedule[roundIdx].matches.find(sm => sm.home === m.home && sm.away === m.away);
        if (savedMatch) {
            savedMatch.homeScore = homeGoals;
            savedMatch.awayScore = awayGoals;
        } else {
            matchSchedule[roundIdx].matches.push({ home: m.home, away: m.away, homeScore: homeGoals, awayScore: awayGoals });
        }
    }

    if (winnerId === myTeam.id) {
        alert("🌍 MUNDIAL DE CLUBES! VOCÊ É O CAMPEÃO DO MUNDO!");
        myTeam.balance += 50000000;
        myTeam.hallOfFame.titles.push({ year: currentYear, title: "Mundial de Clubes" });
        if(myTeam.squad) {
            myTeam.squad.forEach(p => {
                p.energy = 100;
                p.morale = 100;
            });
        }
    } else {
        if (m.home === myTeam.id || m.away === myTeam.id) {
            alert("🌍 Fim de jogo. O adversário venceu o Mundial.");
        } else {
            console.log(`Mundial de Clubes vencido por ${champion ? champion.name : winnerId}`);
        }
    }
}

function viewSulAmericanaBracket() {
    if (sulAmericanaBracket.length === 0) initSulAmericana(true);
    showScreen('screen-libertadores'); // Reuse the same screen for brackets
    renderSulAmericanaBracket();
}

function renderSulAmericanaBracket() {
    const list = document.getElementById('lib-matches-list');
    list.innerHTML = '';

    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
    const compName = isEurope ? "Europa League" : "Copa Sul-Americana";

    if (sulAmericanaPhase === 'groups') {
        document.getElementById('lib-phase-title').innerText = `${compName} - Fase de Grupos`;
        sulAmericanaGroups.forEach(group => {
            const groupTitle = document.createElement('h4');
            groupTitle.innerText = `Grupo ${group.name}`;
            groupTitle.style.marginTop = "15px";
            list.appendChild(groupTitle);

            const table = document.createElement('table');
            table.className = "standings-table";
            table.innerHTML = `
                <tr>
                    <th>Time</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th>
                </tr>
            `;
            const sorted = sulAmericanaGroupStandings.filter(s => s.group === group.name).sort((a,b) => b.p - a.p || b.sg - a.sg);
            
            sorted.forEach((teamStats, idx) => {
                const team = allTeams.find(t => t.id === teamStats.id);
                if (!team) return;
                
                const tr = document.createElement('tr');
                if (team.id === myTeam.id) tr.style.fontWeight = 'bold';
                
                let highlightClass = '';
                if (idx < 2) highlightClass = 'class="libertadores-zone"';
                
                tr.innerHTML = `
                    <td ${highlightClass}>${team.name}</td>
                    <td>${teamStats.p}</td><td>${teamStats.j}</td><td>${teamStats.v}</td>
                    <td>${teamStats.e}</td><td>${teamStats.d}</td><td>${teamStats.sg}</td>
                `;
                table.appendChild(tr);
            });
            list.appendChild(table);
        });
    } else {
        const currentPhaseMatches = sulAmericanaBracket[sulAmericanaBracket.length - 1];
        const phaseNames = ["Final", "Semifinal", "Quartas de Final", "Oitavas de Final", "Dezasseis-Avos"];
        const phaseName = phaseNames[Math.log2(currentPhaseMatches.length)] || 'Mata-Mata';
        document.getElementById('lib-phase-title').innerText = `${compName} - ${phaseName}`;

        const isLeg2 = sulAmericanaBracket.length % 2 === 0 && sulAmericanaBracket.length < 9;

        currentPhaseMatches.forEach(match => {
            const home = allTeams.find(t => t.id === match.home) || { name: 'A definir', shield: '' };
            const away = allTeams.find(t => t.id === match.away) || { name: 'A definir', shield: '' };
            
            let scoreText = "VS";
            if (match.homeScore !== undefined && match.awayScore !== undefined) {
                scoreText = `${match.homeScore} x ${match.awayScore}`;
            }

            let extraText = "";
            if (isLeg2) {
                const previousPhaseMatches = sulAmericanaBracket[sulAmericanaBracket.length - 2];
                const leg1Match = previousPhaseMatches.find(pm => pm.home === match.away && pm.away === match.home);
                if (leg1Match && leg1Match.homeScore !== undefined) {
                    const leg1HomeName = away.name;
                    const leg1AwayName = home.name;
                    extraText = `<div style="font-size: 11px; color: #aaa; margin-top: 4px;">Ida: ${leg1HomeName} ${leg1Match.homeScore} x ${leg1Match.awayScore} ${leg1AwayName}</div>`;
                    
                    if (match.homeScore !== undefined) {
                        const aggHome = match.homeScore + leg1Match.awayScore;
                        const aggAway = match.awayScore + leg1Match.homeScore;
                        scoreText += `<br><span style="color:#ffd700; font-size: 11px;">Agr: ${aggHome} x ${aggAway}</span>`;
                    }
                }
            } else if (sulAmericanaBracket.length < 9) {
                extraText = `<div style="font-size: 11px; color: #aaa; margin-top: 4px;">Jogo de Ida</div>`;
            } else {
                extraText = `<div style="font-size: 11px; color: #aaa; margin-top: 4px;">Jogo Único</div>`;
            }

            const item = document.createElement('div');
            item.className = 'match-preview';
            item.style.borderLeft = "4px solid #3f51b5";
            item.style.padding = "10px";
            item.style.marginBottom = "10px";
            
            item.innerHTML = `
                <div style="display:flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div style="flex:1; text-align:right; display:flex; align-items:center; justify-content:flex-end; gap:5px; padding-right:10px;">
                        <span>${home.name}</span>
                        ${home.shield ? `<img src="${home.shield}" alt="${home.name}" style="width:24px; height:24px; object-fit:contain; flex-shrink:0;">` : ''}
                    </div>
                    <div style="text-align:center;">
                        <strong>${scoreText}</strong>
                    </div>
                    <div style="flex:1; text-align:left; display:flex; align-items:center; gap:5px; padding-left:10px;">
                        ${away.shield ? `<img src="${away.shield}" alt="${away.name}" style="width:24px; height:24px; object-fit:contain; flex-shrink:0;">` : ''}
                        <span>${away.name}</span>
                    </div>
                </div>
                <div style="text-align:center;">${extraText}</div>
            `;
            list.appendChild(item);
        });
    }
}
