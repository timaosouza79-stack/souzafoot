const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

if (!code.includes('globalLeagueRounds: window.globalLeagueRounds')) {
    code = code.replace(/isIntercontinentalMode: isIntercontinentalMode\n\s*\};/, 'isIntercontinentalMode: isIntercontinentalMode,\n        globalLeagueRounds: window.globalLeagueRounds,\n        globalLeagueCurrentRoundIdx: window.globalLeagueCurrentRoundIdx\n    };');
    
    // Also load it
    code = code.replace(/isIntercontinentalMode = state\.isIntercontinentalMode \|\| false;/, 'isIntercontinentalMode = state.isIntercontinentalMode || false;\n        window.globalLeagueRounds = state.globalLeagueRounds;\n        window.globalLeagueCurrentRoundIdx = state.globalLeagueCurrentRoundIdx;');
    
    fs.writeFileSync('script.js', code, 'utf8');
    fs.writeFileSync('final/script.js', code, 'utf8');
    console.log("Added globalLeague variables to save/load.");
} else {
    console.log("Already added.");
}

