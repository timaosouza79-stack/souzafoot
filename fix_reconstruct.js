const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const reconstructCode = `
        if (!window.globalLeagueRounds) {
            console.warn("Reconstruindo globalLeagueRounds para save legado...");
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
                let secondHalf = lRounds.map(roundMatches => roundMatches.map(match => ({ home: match.away, away: match.home })));
                window.globalLeagueRounds[lg] = [...lRounds, ...secondHalf];
                window.globalLeagueCurrentRoundIdx[lg] = currentRound || 0; // Aproxima a rodada atual
            });
        }
`;

if (!code.includes('Reconstruindo globalLeagueRounds')) {
    code = code.replace(/window\.globalLeagueCurrentRoundIdx = state\.globalLeagueCurrentRoundIdx;/, 'window.globalLeagueCurrentRoundIdx = state.globalLeagueCurrentRoundIdx;\n' + reconstructCode);
    fs.writeFileSync('script.js', code, 'utf8');
    fs.writeFileSync('final/script.js', code, 'utf8');
    console.log("Added reconstruction block to loadGame.");
} else {
    console.log("Already added.");
}

