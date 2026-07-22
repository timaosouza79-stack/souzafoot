const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const initRegex = /function initChampionship\([^)]*\)\s*\{/;
const initCode = `function initChampionship(selectedLeague = 'brazil_a') {
    window.globalLeagueRounds = {};
    window.globalLeagueCurrentRoundIdx = {};
    const ALL_LEAGUES = ['brazil_a', 'brazil_b', 'england', 'spain', 'germany', 'italy', 'france', 'portugal', 'arabia', 'mls'];
    
    ALL_LEAGUES.forEach(lg => {
        const lTeams = allTeams.filter(t => t.league === lg);
        if (lTeams.length === 0) return;
        
        let tIds = lTeams.map(t => t.id);
        if (tIds.length % 2 !== 0) tIds.push('BYE');
        let nTeams = tIds.length;
        let lRounds = [];
        
        for (let round = 0; round < nTeams - 1; round++) {
            let matches = [];
            for (let i = 0; i < nTeams / 2; i++) {
                let home = tIds[i];
                let away = tIds[nTeams - 1 - i];
                matches.push(round % 2 === 1 && i === 0 ? { home: away, away: home } : { home, away });
            }
            lRounds.push(matches);
            tIds.splice(1, 0, tIds.pop());
        }
        
        let secondHalf = lRounds.map(roundMatches => 
            roundMatches.map(match => ({ home: match.away, away: match.home }))
        );
        
        window.globalLeagueRounds[lg] = [...lRounds, ...secondHalf];
        window.globalLeagueCurrentRoundIdx[lg] = 0;
    });
`;

content = content.replace(initRegex, initCode);

// Add the background simulation to finishMatchSimulation
const finishSimRegex = /        \/\/ --- GESTÃO DE ESTÁDIO E FINANÇAS/;
const backgroundSimCode = `        // --- SIMULAÇÃO GLOBAL (Ligas em Background) ---
        try {
            if (!isCupMode && !isLibertadoresMode && !isSulAmericanaMode && !isIntercontinentalMode) {
                if (window.globalLeagueRounds) {
                    Object.keys(window.globalLeagueRounds).forEach(lg => {
                        if (lg === myTeam.league) return; // A liga atual já é simulada normalmente
                        
                        const idx = window.globalLeagueCurrentRoundIdx[lg];
                        if (idx !== undefined && idx < window.globalLeagueRounds[lg].length) {
                            const matches = window.globalLeagueRounds[lg][idx];
                            matches.forEach(m => {
                                if (m.home === 'BYE' || m.away === 'BYE') return;
                                const homeTeam = allTeams.find(t => t.id === m.home);
                                const awayTeam = allTeams.find(t => t.id === m.away);
                                if (homeTeam && awayTeam) {
                                    // Cálculo super rápido de gols (mesma lógica, sem UI)
                                    let hG = calculateGoals(homeTeam, awayTeam);
                                    let aG = calculateGoals(awayTeam, homeTeam);
                                    
                                    const matchIdStr = 'bg_' + lg + '_' + idx + '_' + m.home;
                                    for(let i=0; i<hG; i++) {
                                        attributeGoalStats(homeTeam, matchIdStr, (i*10)+5, 'league');
                                    }
                                    for(let i=0; i<aG; i++) {
                                        attributeGoalStats(awayTeam, matchIdStr, (i*10)+5, 'league');
                                    }
                                }
                            });
                            window.globalLeagueCurrentRoundIdx[lg]++;
                        }
                    });
                }
            }
        } catch(bgErr) {
            console.error("Erro na simulação global de fundo:", bgErr);
        }

        // --- GESTÃO DE ESTÁDIO E FINANÇAS`;

content = content.replace(finishSimRegex, backgroundSimCode);

fs.writeFileSync('script.js', content, 'utf8');
fs.writeFileSync('final/script.js', content, 'utf8');
console.log("Global simulation code injected.");
