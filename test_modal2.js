const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const code = fs.readFileSync('script.js', 'utf8');
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="transfer-offer-info"></div><input id="input-transfer-fee"/><input id="input-transfer-salary"/><button id="btn-pay-clause"></button><button id="btn-offer-expected-salary"></button><button id="btn-submit-transfer-offer"></button><div id="modal-transfer-offer"></div></body></html>`);

global.document = dom.window.document;
global.window = dom.window;

// create mock allTeams
global.allTeams = [
  { id: 'al_ahly', name: 'Al Ahly', squad: [
      { id: 'al_ahly_p1', name: 'Player 1', pos: 'ATA', strength: 80, age: 25, salario: 50000 }
  ]}
];
global.myTeam = { balance: 1000000000 };

try {
    eval(code);
    console.log("Code evaluated successfully");
    openTransferModal('al_ahly_p1', 'al_ahly', 8000000);
    console.log("Modal opened successfully. HTML inside transfer-offer-info:");
    console.log(document.getElementById('transfer-offer-info').innerHTML);
} catch (e) {
    console.error("Error evaluating or running:", e);
}
