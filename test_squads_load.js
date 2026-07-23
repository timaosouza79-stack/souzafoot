const fs = require('fs');

// Mock window/global objects if needed
global.window = {};

try {
    const code = fs.readFileSync('final/squads.js', 'utf8').replace('const realSquads =', 'global.realSquads =');
    eval(code);
    console.log("realSquads loaded successfully. Keys:", Object.keys(global.realSquads).length);
    console.log("Corinthians players:", global.realSquads["corinthians"].players.length);
    console.log("Corinthians first player:", global.realSquads["corinthians"].players[0].name);
} catch (e) {
    console.error("Error loading squads.js:", e);
}
