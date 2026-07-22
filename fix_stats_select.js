const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const populateCode = `
    // Popula o select se estiver vazio
    const sel = document.getElementById('stats-competition-select');
    if (sel && sel.options.length === 0) {
        const LEAGUE_LABELS = {
            'brazil_a':     '🇧🇷 Série A - Brasil',
            'brazil_b':     '🇧🇷 Série B - Brasil',
            'england':      '🏴 Premier League',
            'spain':        '🇪🇸 La Liga',
            'germany':      '🇩🇪 Bundesliga',
            'italy':        '🇮🇹 Série A - Itália',
            'france':       '🇫🇷 Ligue 1',
            'portugal':     '🇵🇹 Liga Portugal',
            'arabia':       '🇸🇦 Saudi Pro League',
            'mls':          '🇺🇸 MLS',
            'south_america':'🌎 Sul-América',
            'cup':          '🏆 Copa Nacional',
            'libertadores': '🌍 Libertadores / Continental'
        };
        for (const [key, label] of Object.entries(LEAGUE_LABELS)) {
            const opt = document.createElement('option');
            opt.value = key;
            opt.innerText = label;
            sel.appendChild(opt);
        }
    }
`;

content = content.replace("    // Decide competição a partir do argumento ou do select", populateCode + "\n    // Decide competição a partir do argumento ou do select");

fs.writeFileSync('script.js', content, 'utf8');
fs.writeFileSync('final/script.js', content, 'utf8');
console.log('Fixed stats select!');
