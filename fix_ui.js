const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the select with a div for buttons
const selectHtml = `<div style="display:flex; gap:12px; align-items:center; margin-bottom:12px;">
                        <label for="stats-competition-select" style="font-weight:600;">Competição:</label>
                        <select id="stats-competition-select" class="form-control" onchange="renderStats(this.value)" style="width:240px;">
                            <!-- opções populadas dinamicamente -->
                        </select>
                    </div>`;

const newUi = `<div style="margin-bottom: 20px;">
                        <label style="font-weight:600; display:block; margin-bottom:10px;">Escolha a Competição:</label>
                        <div id="stats-competition-buttons" style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
                            <!-- botões populados dinamicamente -->
                        </div>
                    </div>`;

if (html.includes('stats-competition-select')) {
    html = html.replace(selectHtml, newUi);
    fs.writeFileSync('index.html', html, 'utf8');
    fs.writeFileSync('final/index.html', html, 'utf8');
    console.log("Updated HTML to use buttons.");
}

let script = fs.readFileSync('script.js', 'utf8');

// Now update script.js to populate buttons instead of select
const populateOld = `    // Popula o select se estiver vazio
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
    }`;

const populateNew = `    // Popula os botões se estiver vazio
    const btnContainer = document.getElementById('stats-competition-buttons');
    if (btnContainer && btnContainer.children.length === 0) {
        const LEAGUE_LABELS = {
            'brazil_a':     '🇧🇷 Série A',
            'brazil_b':     '🇧🇷 Série B',
            'england':      '🏴 Premier League',
            'spain':        '🇪🇸 La Liga',
            'germany':      '🇩🇪 Bundesliga',
            'italy':        '🇮🇹 Série A (ITA)',
            'france':       '🇫🇷 Ligue 1',
            'portugal':     '🇵🇹 Liga Portugal',
            'arabia':       '🇸🇦 Saudi Pro League',
            'mls':          '🇺🇸 MLS',
            'south_america':'🌎 Sul-América',
            'cup':          '🏆 Copa Nacional',
            'libertadores': '🌍 Continental'
        };
        for (const [key, label] of Object.entries(LEAGUE_LABELS)) {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary stats-league-btn';
            btn.style.padding = '8px 12px';
            btn.style.fontSize = '0.85rem';
            btn.style.borderRadius = '20px';
            btn.dataset.comp = key;
            btn.innerText = label;
            btn.onclick = () => renderStats(key);
            btnContainer.appendChild(btn);
        }
    }`;

if (script.includes("const sel = document.getElementById('stats-competition-select');")) {
    script = script.replace(populateOld, populateNew);
    
    // Update the logic to decide the competition
    // It used to check sel.value. Now we must track window.currentStatsComp
    script = script.replace(/const sel = document.getElementById\('stats-competition-select'\);\n\s*comp = sel \? sel.value : \(myTeam \? myTeam.league : 'brazil_a'\);/, 
    "comp = window.currentStatsComp || (myTeam ? myTeam.league : 'brazil_a');\n        window.currentStatsComp = comp;");
    
    // Also we need to check if there is an early assignment: `if (!comp) { comp = sel ? sel.value ... }`
    
    // Update the visual selection
    script = script.replace(/    \/\/ Atualiza o select visualmente\n    if \(sel && sel.value !== comp\) \{\n        const opt = Array.from\(sel.options\).find\(o => o.value === comp\);\n        if \(opt\) sel.value = comp;\n    \}/, 
    `    // Atualiza os botões visualmente
    window.currentStatsComp = comp;
    if (btnContainer) {
        Array.from(btnContainer.children).forEach(btn => {
            if (btn.dataset.comp === comp) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            } else {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-secondary');
            }
        });
    }`);

    fs.writeFileSync('script.js', script, 'utf8');
    fs.writeFileSync('final/script.js', script, 'utf8');
    console.log("Updated script to use buttons.");
}
