const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the part where leaguePlayers is constructed
    const oldCode = `    // Monta lista de jogadores com estatísticas por competição
    allTeams.forEach(team => {
        if (!participantIds.has(team.id)) return;
        (team.squad || []).forEach(p => {
            const compStats = (p.stats && p.stats[comp]) ? p.stats[comp] : null;
            const compGoals   = compStats ? (compStats.goals   || 0) : (p.goals   || 0);
            const compAssists = compStats ? (compStats.assists || 0) : (p.assists || 0);`;

    const newCode = `    // Monta lista de jogadores com estatísticas por competição
    let statsKey = comp;
    if (comp === 'libertadores' || comp === 'south_america') {
        statsKey = 'continental';
    } else if (comp !== 'cup' && comp !== 'intercontinental') {
        statsKey = 'league';
    }

    allTeams.forEach(team => {
        if (!participantIds.has(team.id)) return;
        (team.squad || []).forEach(p => {
            const compStats = (p.stats && p.stats[statsKey]) ? p.stats[statsKey] : null;
            const compGoals   = compStats ? (compStats.goals || 0) : 0;
            const compAssists = compStats ? (compStats.assists || 0) : 0;`;

    if (content.includes(oldCode)) {
        content = content.replace(oldCode, newCode);
        
        // Fix sorting functions that might rely on undefined p.goals 
        // Oh wait, in the sorting below:
        // topScorers.sort((a, b) => {
        //     const gd = (b.goals || 0) - (a.goals || 0);
        // This is safe because we mapped it to `goals: compGoals` in the array push.

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed ' + filePath);
    } else {
        console.log('Could not find oldCode in ' + filePath);
    }
}

fixFile('script.js');
fixFile('final/script.js');
