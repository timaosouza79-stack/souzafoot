const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// We just want to check if the sorting and rendering uses the mapped goals correctly.
// Also check if `compStats` is mapped properly.

const match = content.match(/compGoals\s*=\s*compStats \? \(compStats.goals \|\| 0\) : 0;/);
if (match) {
    console.log("compGoals is strictly 0 if no compStats.");
}

const match2 = content.match(/if \(comp === 'libertadores' \|\| comp === 'south_america'\) \{[^}]*statsKey = 'continental';/);
if (match2) {
    console.log("statsKey is set correctly for libertadores.");
}

