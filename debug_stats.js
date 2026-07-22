const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

// I want to see if `renderStats` has any undefined variables or obvious crash points.
// For instance: `leaguePlayers` mapping.
// Let's run a fake simulation with a small dataset.
const vm = require('vm');
const context = {
    document: {
        getElementById: function(id) {
            return {
                innerHTML: '',
                options: [],
                appendChild: function() {},
                value: 'england'
            };
        },
        createElement: function(tag) {
            return { classList: { add: function(){} } };
        }
    },
    window: {},
    encodeURIComponent: encodeURIComponent,
    Array: Array,
    Object: Object,
    Set: Set
};

// we can load the script into this context, but there are many globals like allTeams.
// Let's just create them.
context.allTeams = [
    { id: '1', name: 'Team A', league: 'england', squad: [ { name: 'Player 1', stats: { league: { goals: 5, assists: 2 } } } ] }
];
context.cupBracket = [];
context.libertadoresGroups = [];
context.libertadoresParticipants = [];
context.myTeam = context.allTeams[0];

// Extract just renderStats
let renderStatsStr = script.match(/function renderStats\([\s\S]*?\n\nfunction /)[0];
renderStatsStr = renderStatsStr.substring(0, renderStatsStr.length - 10);

try {
    vm.runInNewContext(renderStatsStr + "\nrenderStats('england');", context);
    console.log("renderStats ran successfully in dummy context.");
} catch (e) {
    console.error("renderStats CRASHED:", e);
}

