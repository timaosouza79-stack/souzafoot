const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<!DOCTYPE html><html><body>
    <div id="stats-competition-select"></div>
    <tbody id="top-scorers-body"></tbody>
    <tbody id="top-assists-body"></tbody>
</body></html>`);
const window = dom.window;
const document = window.document;

// We need to polyfill some browser stuff
const alert = () => {};
const localStorage = { getItem: () => null, setItem: () => {} };

try {
    eval(code);
    console.log("Script evaluated successfully without runtime errors at root level.");
} catch(e) {
    console.error("Runtime error during evaluation:", e);
}

