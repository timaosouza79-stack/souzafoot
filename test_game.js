const fs = require('fs');

// Mock localStorage and DOM
global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};
global.document = {
    getElementById: () => ({ innerText: '', src: '', onerror: null })
};
global.window = {};

// Load scripts
const squadsCode = fs.readFileSync('squads.js', 'utf8');
eval(squadsCode);

const scriptCode = fs.readFileSync('script.js', 'utf8');
// Mock functions that crash
const mockedScript = scriptCode
    .replace('function showScreen', 'function showScreen(){}')
    .replace('function updateDashboardUI', 'function updateDashboardUI(){}')
    .replace('function updateDynamicBackground', 'function updateDynamicBackground(){}');

eval(mockedScript);

// Simulate "Novo Jogo" with Al Hilal
selectTeam('alhilal');

const ah = allTeams.find(t => t.id === 'alhilal');
console.log('Al Hilal squad length: ' + (ah.squad ? ah.squad.length : 'UNDEFINED'));

