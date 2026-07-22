const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Remove the broken second attributeGoalStats completely.
// It is located near line 6878:
const brokenRegex = /function attributeGoalStats\(team, matchId = null, minute = null, competition = 'league'\) \{\n    \/\/ \.\.\. \(código existente\)\n    \/\/ Adiciona ao allTimeStats\n    if \(\!scorer\.allTimeStats\) scorer\.allTimeStats = \{ goals: 0, assists: 0, matches: 0 \};\n    scorer\.allTimeStats\.goals = \(scorer\.allTimeStats\.goals \|\| 0\) \+ 1;\n    \/\/ \.\.\. \(código existente para assistências\)\n    if \(assistant\) \{\n        if \(\!assistant\.allTimeStats\) assistant\.allTimeStats = \{ goals: 0, assists: 0, matches: 0 \};\n        assistant\.allTimeStats\.assists = \(assistant\.allTimeStats\.assists \|\| 0\) \+ 1;\n    \}\n    return scorer\.name;\n\}/;

if (code.match(brokenRegex)) {
    code = code.replace(brokenRegex, '');
    console.log("Removed broken second attributeGoalStats.");
} else {
    console.log("Broken function not found by regex.");
}

// 2. Fix the first attributeGoalStats so it falls back to the full squad and updates allTimeStats
const firstRegex = /function attributeGoalStats\(team, matchId = null, minute = null, competition = 'league'\) \{\n    const starters = \(team && team\.squad\) \? team\.squad\.filter\(p => p\.isStarter\) : \[\];\n    if \(starters\.length === 0\) return "Alguém";/;

const fixedFirst = `function attributeGoalStats(team, matchId = null, minute = null, competition = 'league') {
    let starters = (team && team.squad) ? team.squad.filter(p => p.isStarter) : [];
    if (starters.length === 0) {
        starters = (team && team.squad) ? team.squad : []; // Fallback for background sim
    }
    if (starters.length === 0) return "Alguém";`;

if (code.match(firstRegex)) {
    code = code.replace(firstRegex, fixedFirst);
    console.log("Fixed first attributeGoalStats to include fallback.");
} else {
    console.log("First function not found by regex.");
}

// Add the allTimeStats tracking to the first function (around the "Global count" area)
code = code.replace(/scorer\.goals = \(scorer\.goals \|\| 0\) \+ 1;\n            \/\/ Per-competition count/g, `scorer.goals = (scorer.goals || 0) + 1;
            if (!scorer.allTimeStats) scorer.allTimeStats = { goals: 0, assists: 0, matches: 0 };
            scorer.allTimeStats.goals = (scorer.allTimeStats.goals || 0) + 1;
            // Per-competition count`);

code = code.replace(/assistant\.assists = \(assistant\.assists \|\| 0\) \+ 1;\n                        if \(\!assistant\.stats\)/g, `assistant.assists = (assistant.assists || 0) + 1;
                        if (!assistant.allTimeStats) assistant.allTimeStats = { goals: 0, assists: 0, matches: 0 };
                        assistant.allTimeStats.assists = (assistant.allTimeStats.assists || 0) + 1;
                        if (!assistant.stats)`);

fs.writeFileSync('script.js', code, 'utf8');
fs.writeFileSync('final/script.js', code, 'utf8');
