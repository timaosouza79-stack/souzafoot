const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// We can just extract the renderStats logic to test it.
const regex = /function renderStats\(competition\) \{([\s\S]*?)\nfunction /;
const match = code.match(regex);
if (match) {
    let fnBody = match[1];
    console.log("renderStats found.");
} else {
    console.log("renderStats not found.");
}

