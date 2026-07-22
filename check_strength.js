const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const match = content.match(/const strengthA = teamA\.strength;/);
console.log(match ? "Found teamA.strength usage" : "Not found");

