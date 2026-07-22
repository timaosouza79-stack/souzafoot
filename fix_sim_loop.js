const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// The simulation code starts with:
//         // --- SIMULAÇÃO GLOBAL (Ligas em Background) ---
// and ends with:
//         } catch(bgErr) {
//             console.error("Erro na simulação global de fundo:", bgErr);
//         }

let simCodeStart = code.indexOf('        // --- SIMULAÇÃO GLOBAL');
let simCodeEnd = code.indexOf('console.error("Erro na simulação global de fundo:", bgErr);\n        }') + 'console.error("Erro na simulação global de fundo:", bgErr);\n        }'.length;

if (simCodeStart !== -1 && simCodeEnd !== -1) {
    let simBlock = code.substring(simCodeStart, simCodeEnd);
    code = code.substring(0, simCodeStart) + code.substring(simCodeEnd);
    
    // Now inject it AFTER the map block.
    // The map block ends with:
    //             return { ... };
    //         });
    //     userSimMatch = simulatedRoundMatches.find(m => m.home === myTeam.id || m.away === myTeam.id);
    
    let targetStr = "    userSimMatch = simulatedRoundMatches.find";
    let targetPos = code.indexOf(targetStr);
    
    if (targetPos !== -1) {
        code = code.substring(0, targetPos) + "\n" + simBlock + "\n\n" + code.substring(targetPos);
        fs.writeFileSync('script.js', code, 'utf8');
        fs.writeFileSync('final/script.js', code, 'utf8');
        console.log("Fixed the simulation loop so it runs once per round.");
    }
}
