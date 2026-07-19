const fs = require('fs');
const https = require('https');

const principalTeamsMLS = [
  {
    name: "Inter Miami CF",
    conference: "East",
    stadium: "Chase Stadium",
    players: [
      { name: "Drake Callender", position: "GR", overall: 76 },
      { name: "Óscar Ustari", position: "GR", overall: 70 },
      { name: "Tomás Avilés", position: "DC", overall: 74 },
      { name: "Maximiliano Falcón", position: "DC", overall: 75 },
      { name: "Gonzalo Luján", position: "DC", overall: 74 },
      { name: "Ian Fray", position: "DC", overall: 71 },
      { name: "Noah Allen", position: "DE", overall: 70 },
      { name: "Sergio Reguilón", position: "DE", overall: 78 },
      { name: "Facundo Mura", position: "DD", overall: 74 },
      { name: "Yannick Bright", position: "MDC", overall: 72 },
      { name: "David Ruiz", position: "MDC", overall: 73 },
      { name: "Rodrigo De Paul", position: "MC", overall: 84 },
      { name: "Telasco Segovia", position: "MC", overall: 74 },
      { name: "David Ayala", position: "MC", overall: 71 },
      { name: "Santiago Morales", position: "MCO", overall: 68 },
      { name: "Lionel Messi", position: "ED", overall: 88 },
      { name: "Mateo Silvetti", position: "EE", overall: 70 },
      { name: "Tadeo Allende", position: "ED", overall: 75 },
      { name: "Germán Berterame", position: "ATA", overall: 79 },
      { name: "Luis Suárez", position: "ATA", overall: 80 }
    ]
  },
  {
    name: "Columbus Crew",
    conference: "East",
    stadium: "Lower.com Field",
    players: [
      { name: "Nicholas Hagen", position: "GR", overall: 72 },
      { name: "Luke Pruter", position: "GR", overall: 65 },
      { name: "Rudy Camacho", position: "DC", overall: 74 },
      { name: "Eric Bailly", position: "DC", overall: 76 },
      { name: "Malte Amundsen", position: "DC", overall: 73 },
      { name: "Andrés Herrera", position: "DD", overall: 74 },
      { name: "Brooks Lennon", position: "DD", overall: 73 },
      { name: "Darlington Nagbe", position: "MDC", overall: 76 },
      { name: "Derrick Jones", position: "MDC", overall: 70 },
      { name: "Brais Méndez", position: "MC", overall: 82 },
      { name: "Dylan Chambost", position: "MC", overall: 73 },
      { name: "Max Arfsten", position: "MC", overall: 72 },
      { name: "Amar Sejdić", position: "MC", overall: 69 },
      { name: "Zach Zengue", position: "MCO", overall: 66 },
      { name: "Lautaro Giaccone", position: "ED", overall: 73 },
      { name: "Ibrahim Aliyu", position: "EE", overall: 72 },
      { name: "Dániel Gazdag", position: "MCO", overall: 78 },
      { name: "Diego Rossi", position: "EE", overall: 79 },
      { name: "Wessam Abou Ali", position: "ATA", overall: 77 },
      { name: "Jacen Russell-Rowe", position: "ATA", overall: 71 }
    ]
  },
  {
    name: "Los Angeles FC",
    conference: "West",
    stadium: "BMO Stadium",
    players: [
      { name: "Hugo Lloris", position: "GR", overall: 79 },
      { name: "Thomas Hasal", position: "GR", overall: 68 },
      { name: "Aaron Long", position: "DC", overall: 75 },
      { name: "Ryan Porteous", position: "DC", overall: 75 },
      { name: "Eddie Segura", position: "DC", overall: 73 },
      { name: "Nkosi Tafari", position: "DC", overall: 73 },
      { name: "Artem Smolyakov", position: "DE", overall: 70 },
      { name: "Ryan Hollingshead", position: "DE", overall: 74 },
      { name: "Sergi Palencia", position: "DD", overall: 74 },
      { name: "Igor Jesus", position: "MDC", overall: 74 },
      { name: "Timothy Tillman", position: "MC", overall: 74 },
      { name: "Marco Delgado", position: "MC", overall: 74 },
      { name: "Mathieu Choinière", position: "MC", overall: 73 },
      { name: "Jacob Shaffelburg", position: "EE", overall: 75 },
      { name: "Tyler Boyd", position: "ED", overall: 73 },
      { name: "David Martínez", position: "ED", overall: 71 },
      { name: "Adrian Wibowo", position: "ED", overall: 67 },
      { name: "Son Heung-Min", position: "EE", overall: 85 },
      { name: "Denis Bouanga", position: "EE", overall: 81 },
      { name: "Jeremy Ebobisse", position: "ATA", overall: 74 }
    ]
  },
  {
    name: "LA Galaxy",
    conference: "West",
    stadium: "Dignity Health Sports Park",
    players: [
      { name: "John McCarthy", position: "GR", overall: 73 },
      { name: "Novak Mićović", position: "GR", overall: 67 },
      { name: "Maya Yoshida", position: "DC", overall: 73 },
      { name: "Jalen Neal", position: "DC", overall: 71 },
      { name: "Carlos Emiro Garcés", position: "DC", overall: 70 },
      { name: "John Nelson", position: "DE", overall: 68 },
      { name: "Miki Yamane", position: "DD", overall: 73 },
      { name: "Edwin Cerrillo", position: "MDC", overall: 71 },
      { name: "Gastón Brugman", position: "MDC", overall: 74 },
      { name: "Mark Delgado", position: "MC", overall: 73 },
      { name: "Riqui Puig", position: "MCO", overall: 81 },
      { name: "Marco Reus", position: "MCO", overall: 78 },
      { name: "Diego Fagúndez", position: "EE", overall: 72 },
      { name: "Joseph Paintsil", position: "ED", overall: 78 },
      { name: "Gabriel Pec", position: "EE", overall: 79 },
      { name: "Dejan Joveljić", position: "ATA", overall: 77 },
      { name: "Miguel Berry", position: "ATA", overall: 68 }
    ]
  },
  {
    name: "Nashville SC",
    conference: "East",
    stadium: "GEODIS Park",
    players: [
      { name: "Joe Willis", position: "GR", overall: 73 },
      { name: "Elliot Panicco", position: "GR", overall: 68 },
      { name: "Walker Zimmerman", position: "DC", overall: 76 },
      { name: "Jack Maher", position: "DC", overall: 71 },
      { name: "Josh Bauer", position: "DC", overall: 69 },
      { name: "Daniel Lovitz", position: "DE", overall: 71 },
      { name: "Taylor Washington", position: "DE", overall: 66 },
      { name: "Shaq Moore", position: "DD", overall: 73 },
      { name: "Aníbal Godoy", position: "MDC", overall: 72 },
      { name: "Brian Anunga", position: "MDC", overall: 69 },
      { name: "Sean Davis", position: "MC", overall: 71 },
      { name: "Patrick Yazbek", position: "MC", overall: 70 },
      { name: "Hany Mukhtar", position: "MCO", overall: 80 },
      { name: "Randall Leal", position: "MCO", overall: 72 },
      { name: "Jacob Shaffelburg", position: "EE", overall: 74 },
      { name: "Alex Muyl", position: "ED", overall: 70 },
      { name: "Sam Surridge", position: "ATA", overall: 75 },
      { name: "Teal Bunbury", position: "ATA", overall: 67 }
    ]
  },
  {
    name: "Charlotte FC",
    conference: "East",
    stadium: "Bank of America Stadium",
    players: [
      { name: "Kristijan Kahlina", position: "GR", overall: 75 },
      { name: "David Bingham", position: "GR", overall: 66 },
      { name: "Adilson Malanda", position: "DC", overall: 73 },
      { name: "Andrew Privett", position: "DC", overall: 70 },
      { name: "Tim Ream", position: "DC", overall: 74 },
      { name: "Jere Uronen", position: "DE", overall: 71 },
      { name: "Nathan Byrne", position: "DD", overall: 72 },
      { name: "Ashley Westwood", position: "MDC", overall: 74 },
      { name: "Derrick Jones", position: "MDC", overall: 69 },
      { name: "Junior Urso", position: "MC", overall: 70 },
      { name: "Pep Biel", position: "MCO", overall: 75 },
      { name: "Brandt Bronico", position: "MC", overall: 71 },
      { name: "Kerwin Vargas", position: "EE", overall: 73 },
      { name: "Liel Abada", position: "ED", overall: 76 },
      { name: "Nikola Petković", position: "MC", overall: 69 },
      { name: "Patrick Agyemang", position: "ATA", overall: 72 },
      { name: "Karol Świderski", position: "ATA", overall: 76 }
    ]
  },
  {
    name: "FC Cincinnati",
    conference: "East",
    stadium: "TQL Stadium",
    players: [
      { name: "Roman Celentano", position: "GR", overall: 74 },
      { name: "Evan Louro", position: "GR", overall: 65 },
      { name: "Miles Robinson", position: "DC", overall: 76 },
      { name: "Matt Miazga", position: "DC", overall: 74 },
      { name: "Chidozie Awaziem", position: "DC", overall: 74 },
      { name: "Ian Murphy", position: "DC", overall: 69 },
      { name: "Yamil Asad", position: "DE", overall: 70 },
      { name: "DeAndre Yedlin", position: "DD", overall: 73 },
      { name: "Alvas Powell", position: "DD", overall: 67 },
      { name: "Pavel Bucha", position: "MC", overall: 74 },
      { name: "Obinna Nwobodo", position: "MDC", overall: 74 },
      { name: "Malik Pinto", position: "MC", overall: 65 },
      { name: "Luciano Acosta", position: "MCO", overall: 81 },
      { name: "Gerardo Valenzuela", position: "MCO", overall: 66 },
      { name: "Luca Orellano", position: "EE", overall: 75 },
      { name: "Corey Baird", position: "ED", overall: 70 },
      { name: "Yuya Kubo", position: "ATA", overall: 72 },
      { name: "Kévin Denkey", position: "ATA", overall: 77 }
    ]
  },
  {
    name: "Seattle Sounders FC",
    conference: "West",
    stadium: "Lumen Field",
    players: [
      { name: "Stefan Frei", position: "GR", overall: 74 },
      { name: "Andrew Thomas", position: "GR", overall: 67 },
      { name: "Jackson Ragen", position: "DC", overall: 73 },
      { name: "Yeimar Gómez Andrade", position: "DC", overall: 74 },
      { name: "Jonathan Bell", position: "DC", overall: 68 },
      { name: "Nouhou Tolo", position: "DE", overall: 72 },
      { name: "Alex Roldan", position: "DD", overall: 72 },
      { name: "João Paulo", position: "MDC", overall: 75 },
      { name: "Obed Vargas", position: "MC", overall: 72 },
      { name: "Cristian Roldan", position: "MC", overall: 75 },
      { name: "Josh Atencio", position: "MC", overall: 69 },
      { name: "Albert Rusnák", position: "MCO", overall: 76 },
      { name: "Pedro de la Vega", position: "EE", overall: 74 },
      { name: "Paul Rothrock", position: "EE", overall: 68 },
      { name: "Jordan Morris", position: "ATA", overall: 75 },
      { name: "Raúl Ruidíaz", position: "ATA", overall: 73 },
      { name: "Danny Musovski", position: "ATA", overall: 67 }
    ]
  },
  {
    name: "New York Red Bulls",
    conference: "East",
    stadium: "Red Bull Arena",
    players: [
      { name: "Carlos Coronel", position: "GR", overall: 74 },
      { name: "Ryan Meara", position: "GR", overall: 65 },
      { name: "Sean Nealis", position: "DC", overall: 71 },
      { name: "Noah Eile", position: "DC", overall: 70 },
      { name: "Andrés Reyes", position: "DC", overall: 71 },
      { name: "John Tolkin", position: "DE", overall: 74 },
      { name: "Kyle Duncan", position: "DD", overall: 70 },
      { name: "Dylan Nealis", position: "DD", overall: 68 },
      { name: "Daniel Edelman", position: "MDC", overall: 72 },
      { name: "Ronald Donkor", position: "MDC", overall: 66 },
      { name: "Felipe Carballo", position: "MC", overall: 74 },
      { name: "Wikelman Carmona", position: "MC", overall: 69 },
      { name: "Emil Forsberg", position: "MCO", overall: 78 },
      { name: "Lewis Morgan", position: "EE", overall: 76 },
      { name: "Cameron Harper", position: "ED", overall: 69 },
      { name: "Dante Vanzeir", position: "ATA", overall: 73 },
      { name: "Elias Manoel", position: "ATA", overall: 71 }
    ]
  },
  {
    name: "Orlando City SC",
    conference: "East",
    stadium: "Inter&Co Stadium",
    players: [
      { name: "Pedro Gallese", position: "GR", overall: 75 },
      { name: "Javier Otero", position: "GR", overall: 64 },
      { name: "Robin Jansson", position: "DC", overall: 73 },
      { name: "Rodrigo Schlegel", position: "DC", overall: 71 },
      { name: "David Brekalo", position: "DC", overall: 72 },
      { name: "Rafael Santos", position: "DE", overall: 70 },
      { name: "Dagur Thórhallsson", position: "DD", overall: 71 },
      { name: "César Araújo", position: "MDC", overall: 74 },
      { name: "Wilder Cartagena", position: "MDC", overall: 73 },
      { name: "Jeorgio Kocevski", position: "MC", overall: 65 },
      { name: "Martín Ojeda", position: "MCO", overall: 75 },
      { name: "Nicolás Lodeiro", position: "MCO", overall: 73 },
      { name: "Iván Angulo", position: "EE", overall: 73 },
      { name: "Facundo Torres", position: "ED", overall: 78 },
      { name: "Luis Muriel", position: "ATA", overall: 75 },
      { name: "Duncan McGuire", position: "ATA", overall: 74 }
    ]
  }
];

function fetchLogoUrl(teamName) {
    return new Promise((resolve) => {
        const url = 'https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=' + encodeURIComponent(teamName);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.teams && json.teams.length > 0) {
                        resolve(json.teams[0].strBadge);
                    } else {
                        resolve('');
                    }
                } catch(e) {
                    resolve('');
                }
            });
        }).on('error', () => resolve(''));
    });
}

function mapPos(pos) {
    if (['GR'].includes(pos)) return 'GOL';
    if (['DC'].includes(pos)) return 'ZAG';
    if (['DE', 'DD'].includes(pos)) return 'LAT';
    if (['MDC', 'MC', 'MCO'].includes(pos)) return 'MEI';
    if (['EE', 'ED', 'ATA'].includes(pos)) return 'ATA';
    return 'MEI';
}

function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

async function main() {
    // 1. Evaluate current squads.js to get all existing names
    const squadsCode = fs.readFileSync('squads.js', 'utf8').replace('const realSquads', 'var realSquads');
    eval(squadsCode);
    const existingNames = new Set();
    for (const [t, squad] of Object.entries(realSquads)) {
        for (const p of squad.players) {
            existingNames.add(normalize(p.name));
        }
    }

    const newTeamsScript = [];
    const newSquads = {};

    for (const t of principalTeamsMLS) {
        // Calculate team strength as average of top 11
        const sortedPlayers = [...t.players].sort((a, b) => b.overall - a.overall);
        const top11 = sortedPlayers.slice(0, 11);
        const avgStrength = Math.round(top11.reduce((acc, p) => acc + p.overall, 0) / 11);

        const id = t.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const shield = await fetchLogoUrl(t.name) || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(t.name) + '&background=random';
        
        newTeamsScript.push('    {id: "' + id + '", name: "' + t.name + '", strength: ' + avgStrength + ', shield: "' + shield + '", league: "mls", balance: 60000000, stadium: "' + t.stadium + '", stadiumImg: "img/estadio.jpg"}');

        const squadList = [];
        for (const p of t.players) {
            let pName = p.name;
            if (existingNames.has(normalize(pName))) {
                pName = pName + " (MLS)"; // Ensure uniqueness
            }
            existingNames.add(normalize(pName));
            squadList.push({ name: pName, pos: mapPos(p.position), str: p.overall });
        }

        // Fill up to 18 generic if needed
        while (squadList.length < 18) {
            squadList.push({ name: 'Reserva ' + (squadList.length+1), pos: 'MEI', str: Math.max(50, avgStrength - 10) });
        }

        newSquads[id] = {
            formation: "4-3-3",
            players: squadList
        };
    }

    // Append to squads.js
    let outSquads = fs.readFileSync('squads.js', 'utf8');
    // Remove trailing };
    outSquads = outSquads.replace(/\\};\\s*$/, ',');
    
    for (const [id, sq] of Object.entries(newSquads)) {
        outSquads += '\\n    "' + id + '": ' + JSON.stringify(sq, null, 4) + ',';
    }
    // Remove last comma and close
    outSquads = outSquads.replace(/,\\s*$/, '\\n};\\n');
    fs.writeFileSync('squads.js', outSquads);

    // Save Teams string to be manually injected
    fs.writeFileSync('mls_teams.txt', newTeamsScript.join(',\\n'));
    console.log('Done mapping MLS. Now inject mls_teams.txt into script.js');
}

main();
