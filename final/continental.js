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
        currentPhase.forEach(m => {
            let homeGoals = m.currentHomeGoals;
            let awayGoals = m.currentAwayGoals;
            if (homeGoals === awayGoals) {
                if (Math.random() > 0.5) homeGoals++; else awayGoals++;
                // Atualiza também o objecto local para que lastRoundResults apanhe os novos golos!
                m.currentHomeGoals = homeGoals;
                m.currentAwayGoals = awayGoals;
            }
            const winnerId = homeGoals > awayGoals ? m.home : m.away;
            const winnerObj = allTeams.find(t => t.id === winnerId);
            
            // FIX BUG: Guardar resultado da fase de mata-mata continental
            if (typeof sulAmericanaBracket !== 'undefined' && Array.isArray(sulAmericanaBracket)) {
                for (let phase of sulAmericanaBracket) {
                    let originalMatch = phase.find(cm => cm.home === m.home && cm.away === m.away);
                    if (originalMatch) {
                        originalMatch.homeScore = homeGoals;
                        originalMatch.awayScore = awayGoals;
                        break;
                    }
                }
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
            
            if (winnerObj) winners.push(winnerObj);
            
            const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
            const compName = isEurope ? "Europa League" : "Sul-Americana";
            if (m.home === myTeam.id || m.away === myTeam.id) {
                if (winnerId === myTeam.id) {
                    const prizes = {
                        8: 3000000, 
                        4: 4500000, 
                        2: 6000000, 
                        1: 35000000 
                    };
                    const prize = prizes[currentPhase.length] || 0;
                    if (prize > 0) {
                        myTeam.balance += prize;
                        addCommentaryItem(`🏆 ${compName.toUpperCase()}: O ${myTeam.name} avançou e recebeu R$ ${(prize/1000000).toFixed(1)}M!`, 'info', 90);
                    }
                } else {
                    addCommentaryItem(`❌ ${compName.toUpperCase()}: O ${myTeam.name} foi eliminado.`, 'info', 90);
                }
            }
        });

        if (winners.length >= 2) {
            const nextPhase = [];
            for (let i = 0; i < winners.length; i += 2) {
                if (winners[i+1]) {
                    nextPhase.push({ home: winners[i].id, away: winners[i+1].id, currentHomeGoals: 0, currentAwayGoals: 0 });
                }
            }
            sulAmericanaBracket.push(nextPhase);
        } else if (winners.length === 1) {
            const champion = winners[0];
            sulamericanaWinnerId = champion.id;
            if (champion.id === myTeam.id) {
                alert(`🏆 SENSACIONAL! O ${champion.name} é o Campeão da Sul-Americana!`);
            }
        }
    }
}

function initIntercontinental(silent = false) {
    if (intercontinentalBracket.length > 0) return;
    isIntercontinentalMode = true;

    // Apenas se o jogador ganhou a Libertadores
    let wonLibertadores = false;
    if (myTeam.history && myTeam.history.length > 0) {
        wonLibertadores = myTeam.history.some(h => h.includes("Campeão da Copa Libertadores") || h.includes("Campeão da Champions League"));
    }

    if (!wonLibertadores) {
        // Se não ganhou, cria um jogo fantasma só para o calendário não encravar
        intercontinentalBracket = [[{ home: 'realmadrid', away: 'bocajuniors', currentHomeGoals: 0, currentAwayGoals: 0 }]];
        return;
    }

    const bossName = Math.random() > 0.5 ? "Real Madrid" : "Manchester City";
    const boss = {
        id: "boss_intercontinental",
        name: bossName,
        strength: 95,
        shield: `https://ui-avatars.com/api/?name=${encodeURIComponent(bossName)}&background=random`,
        league: "europe",
        squad: []
    };
    allTeams.push(boss);

    intercontinentalBracket = [[{ home: myTeam.id, away: boss.id, currentHomeGoals: 0, currentAwayGoals: 0 }]];
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
    if (winnerId === myTeam.id) {
        alert("🌍 MUNDIAL DE CLUBES! VOCÊ É O CAMPEÃO DO MUNDO!");
        myTeam.balance += 50000000; // 50 milhões
        myTeam.history.push("🌍 CAMPEÃO MUNDIAL");
        
        // Boost de energia e moral
        if(myTeam.squad) {
            myTeam.squad.forEach(p => {
                p.energy = 100;
                p.morale = 100;
            });
        }
    } else {
        alert("🌍 Fim de jogo. O gigante europeu venceu o Mundial.");
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
        const phases = {
            16: 'Dezasseis-Avos',
            8: 'Oitavas de Final',
            4: 'Quartas de Final',
            2: 'Semifinal',
            1: 'Final'
        };
        const currentPhaseMatches = sulAmericanaBracket[sulAmericanaBracket.length - 1];
        const phaseName = phases[currentPhaseMatches.length] || 'Mata-Mata';
        document.getElementById('lib-phase-title').innerText = `${compName} - ${phaseName}`;

        currentPhaseMatches.forEach(m => {
            const home = allTeams.find(t => t.id === m.home);
            const away = allTeams.find(t => t.id === m.away);
            if (!home || !away) return;
            const div = document.createElement('div');
            div.className = "match-item";
            div.innerHTML = `
                <div class="team-name">${home.name}</div>
                <div class="score-box">${m.currentHomeGoals}</div>
                <div style="padding: 0 5px;">X</div>
                <div class="score-box">${m.currentAwayGoals}</div>
                <div class="team-name" style="text-align: right;">${away.name}</div>
            `;
            list.appendChild(div);
        });
    }
}
