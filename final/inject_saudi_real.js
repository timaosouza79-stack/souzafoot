const fs = require('fs');

// Fix shields in script.js to use direct SVG/PNG links instead of thumbnails
let scriptJs = fs.readFileSync('script.js', 'utf8');
const shieldReplacements = {
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Al_Hilal_SFC_Logo.svg/200px-Al_Hilal_SFC_Logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/8/8c/Al_Hilal_SFC_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Al-Nassr_FC_logo.svg/200px-Al-Nassr_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/b/b3/Al-Nassr_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Al-Ittihad_Club_Logo.svg/200px-Al-Ittihad_Club_Logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/e/e0/Al-Ittihad_Club_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Al-Ahli_Saudi_FC_logo.svg/200px-Al-Ahli_Saudi_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/e/ec/Al-Ahli_Saudi_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Al-Shabab_FC_logo.svg/200px-Al-Shabab_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/f/f6/Al-Shabab_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Al_Taawoun_FC_logo.svg/200px-Al_Taawoun_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/f/ff/Al_Taawoun_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Ettifaq_FC_logo.svg/200px-Ettifaq_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/0/07/Ettifaq_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Al-Fateh_SC_logo.svg/200px-Al-Fateh_SC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/7/7b/Al-Fateh_SC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Al-Fayha_FC_logo.svg/200px-Al-Fayha_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/5/5e/Al-Fayha_FC_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Damac_FC_logo.svg/200px-Damac_FC_logo.svg.png": "https://upload.wikimedia.org/wikipedia/en/2/2f/Damac_FC_logo.svg"
};

for (const [thumb, direct] of Object.entries(shieldReplacements)) {
    scriptJs = scriptJs.replace(thumb, direct);
}
fs.writeFileSync('script.js', scriptJs);


// Replace squads in squads.js
let squadsData = fs.readFileSync('squads.js', 'utf8');

const realSquads = {
    "alhilal": {
        "formation": "4-3-3",
        "players": [
            { "name": "Yassine Bounou", "pos": "GOL", "str": 86 },
            { "name": "K. Koulibaly", "pos": "ZAG", "str": 84 },
            { "name": "Ali Al-Bulaihi", "pos": "ZAG", "str": 79 },
            { "name": "Renan Lodi", "pos": "LAT", "str": 81 },
            { "name": "João Cancelo", "pos": "LAT", "str": 85 },
            { "name": "Rúben Neves", "pos": "MEI", "str": 85 },
            { "name": "Milinković-Savić", "pos": "MEI", "str": 86 },
            { "name": "Salem Al-Dawsari", "pos": "MEI", "str": 82 },
            { "name": "Malcom", "pos": "ATA", "str": 84 },
            { "name": "Neymar Jr.", "pos": "ATA", "str": 88 },
            { "name": "A. Mitrović", "pos": "ATA", "str": 86 }
        ]
    },
    "alnassr": {
        "formation": "4-3-3",
        "players": [
            { "name": "Bento", "pos": "GOL", "str": 83 },
            { "name": "A. Laporte", "pos": "ZAG", "str": 85 },
            { "name": "M. Simakan", "pos": "ZAG", "str": 82 },
            { "name": "Alex Telles", "pos": "LAT", "str": 81 },
            { "name": "S. Al-Ghannam", "pos": "LAT", "str": 79 },
            { "name": "M. Brozović", "pos": "MEI", "str": 84 },
            { "name": "Otávio", "pos": "MEI", "str": 83 },
            { "name": "Anderson Talisca", "pos": "MEI", "str": 84 },
            { "name": "Sadio Mané", "pos": "ATA", "str": 84 },
            { "name": "Wesley", "pos": "ATA", "str": 78 },
            { "name": "Cristiano Ronaldo", "pos": "ATA", "str": 88 }
        ]
    },
    "alittihad": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "P. Rajković", "pos": "GOL", "str": 81 },
            { "name": "Luiz Felipe", "pos": "ZAG", "str": 80 },
            { "name": "Danilo Pereira", "pos": "ZAG", "str": 82 },
            { "name": "Mario Mitaj", "pos": "LAT", "str": 78 },
            { "name": "S. Al-Sqoor", "pos": "LAT", "str": 76 },
            { "name": "N'Golo Kanté", "pos": "MEI", "str": 85 },
            { "name": "Fabinho", "pos": "MEI", "str": 83 },
            { "name": "Houssem Aouar", "pos": "MEI", "str": 81 },
            { "name": "Steven Bergwijn", "pos": "ATA", "str": 82 },
            { "name": "Moussa Diaby", "pos": "ATA", "str": 84 },
            { "name": "Karim Benzema", "pos": "ATA", "str": 86 }
        ]
    },
    "alahli": {
        "formation": "4-3-3",
        "players": [
            { "name": "Édouard Mendy", "pos": "GOL", "str": 83 },
            { "name": "Merih Demiral", "pos": "ZAG", "str": 81 },
            { "name": "Roger Ibañez", "pos": "ZAG", "str": 82 },
            { "name": "Bassam Al-Hurayji", "pos": "LAT", "str": 76 },
            { "name": "A. Al-Ammar", "pos": "LAT", "str": 75 },
            { "name": "Franck Kessié", "pos": "MEI", "str": 84 },
            { "name": "Gabri Veiga", "pos": "MEI", "str": 81 },
            { "name": "Riyad Mahrez", "pos": "ATA", "str": 85 },
            { "name": "Roberto Firmino", "pos": "ATA", "str": 83 },
            { "name": "Firas Al-Buraikan", "pos": "ATA", "str": 80 },
            { "name": "Ivan Toney", "pos": "ATA", "str": 84 }
        ]
    },
    "alshabab": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Kim Seung-gyu", "pos": "GOL", "str": 78 },
            { "name": "Romain Saïss", "pos": "ZAG", "str": 80 },
            { "name": "Wesley Hoedt", "pos": "ZAG", "str": 78 },
            { "name": "M. Al-Harbi", "pos": "LAT", "str": 77 },
            { "name": "Nawaf Al-Sadi", "pos": "LAT", "str": 75 },
            { "name": "Gustavo Cuéllar", "pos": "MEI", "str": 79 },
            { "name": "G. Bonaventura", "pos": "MEI", "str": 80 },
            { "name": "Yannick Carrasco", "pos": "MEI", "str": 82 },
            { "name": "Daniel Podence", "pos": "ATA", "str": 80 },
            { "name": "Cristian Guanca", "pos": "ATA", "str": 77 },
            { "name": "A. Hamdallah", "pos": "ATA", "str": 80 }
        ]
    },
    "altaawoun": {
        "formation": "4-3-3",
        "players": [
            { "name": "Mailson", "pos": "GOL", "str": 76 },
            { "name": "Andrei Girotto", "pos": "ZAG", "str": 78 },
            { "name": "W. Al-Ahmed", "pos": "ZAG", "str": 75 },
            { "name": "F. Al-Abdulrazzaq", "pos": "LAT", "str": 74 },
            { "name": "R. Al-Mousa", "pos": "LAT", "str": 74 },
            { "name": "Flávio", "pos": "MEI", "str": 76 },
            { "name": "Aschraf El Mahdioui", "pos": "MEI", "str": 77 },
            { "name": "M. Roemer", "pos": "MEI", "str": 75 },
            { "name": "Musa Barrow", "pos": "ATA", "str": 78 },
            { "name": "Mateus", "pos": "ATA", "str": 76 },
            { "name": "João Pedro", "pos": "ATA", "str": 77 }
        ]
    },
    "alettifaq": {
        "formation": "4-3-3",
        "players": [
            { "name": "Marek Rodák", "pos": "GOL", "str": 77 },
            { "name": "Jack Hendry", "pos": "ZAG", "str": 78 },
            { "name": "M. Tisserand", "pos": "ZAG", "str": 76 },
            { "name": "R. Al-Otaibi", "pos": "LAT", "str": 74 },
            { "name": "M. Al-Shanqiti", "pos": "LAT", "str": 74 },
            { "name": "Seko Fofana", "pos": "MEI", "str": 81 },
            { "name": "G. Wijnaldum", "pos": "MEI", "str": 81 },
            { "name": "Álvaro Medrán", "pos": "MEI", "str": 77 },
            { "name": "Demarai Gray", "pos": "ATA", "str": 79 },
            { "name": "K. Toko Ekambi", "pos": "ATA", "str": 78 },
            { "name": "Moussa Dembélé", "pos": "ATA", "str": 80 }
        ]
    },
    "alfateh": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "P. Szappanos", "pos": "GOL", "str": 75 },
            { "name": "Jason Denayer", "pos": "ZAG", "str": 78 },
            { "name": "Marwane Saâdane", "pos": "ZAG", "str": 76 },
            { "name": "Ali Al-Zubaidi", "pos": "LAT", "str": 73 },
            { "name": "S. Al-Najdi", "pos": "LAT", "str": 74 },
            { "name": "Sofiane Bendebka", "pos": "MEI", "str": 76 },
            { "name": "Mukhtar Ali", "pos": "MEI", "str": 75 },
            { "name": "Lucas Zelarayán", "pos": "MEI", "str": 80 },
            { "name": "Mourad Batna", "pos": "ATA", "str": 78 },
            { "name": "C. Tello", "pos": "ATA", "str": 77 },
            { "name": "Djaniny", "pos": "ATA", "str": 76 }
        ]
    },
    "alfayha": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "V. Stojković", "pos": "GOL", "str": 75 },
            { "name": "Chris Smalling", "pos": "ZAG", "str": 79 },
            { "name": "H. Al-Shuwaish", "pos": "ZAG", "str": 74 },
            { "name": "M. Al-Baqawi", "pos": "LAT", "str": 73 },
            { "name": "G. Konan", "pos": "LAT", "str": 76 },
            { "name": "Gojko Cimirot", "pos": "MEI", "str": 76 },
            { "name": "Victor Ruiz", "pos": "MEI", "str": 75 },
            { "name": "Ricardo Ryller", "pos": "MEI", "str": 74 },
            { "name": "Henry Onyekuru", "pos": "ATA", "str": 77 },
            { "name": "Fashion Sakala", "pos": "ATA", "str": 78 },
            { "name": "Anthony Nwakaeme", "pos": "ATA", "str": 76 }
        ]
    },
    "damac": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Florin Niță", "pos": "GOL", "str": 76 },
            { "name": "Farouk Chafaï", "pos": "ZAG", "str": 76 },
            { "name": "A. Bedrane", "pos": "ZAG", "str": 75 },
            { "name": "S. Al-Hawsawi", "pos": "LAT", "str": 74 },
            { "name": "D. Al-Ammar", "pos": "LAT", "str": 74 },
            { "name": "Nicolae Stanciu", "pos": "MEI", "str": 78 },
            { "name": "Domagoj Antolić", "pos": "MEI", "str": 76 },
            { "name": "Tarek Hamed", "pos": "MEI", "str": 77 },
            { "name": "G. Nkoudou", "pos": "ATA", "str": 79 },
            { "name": "Ahmad Al-Zain", "pos": "ATA", "str": 74 },
            { "name": "Habib Diallo", "pos": "ATA", "str": 77 }
        ]
    }
};

for (const [teamId, squadInfo] of Object.entries(realSquads)) {
    // Regex to match the old generic squad block for this team
    const regex = new RegExp('"' + teamId + '":\\s*\\{[\\s\\S]*?\\}\\s*\\],?\\s*\\}\\s*(?=,|"|\\})');
    
    // Stringify the new squad
    let newJson = `"${teamId}": ` + JSON.stringify(squadInfo, null, 8);
    // Fix indentation to match file format roughly
    newJson = newJson.replace(/\n/g, '\n    ');

    squadsData = squadsData.replace(regex, newJson);
}

fs.writeFileSync('squads.js', squadsData);
console.log("Saudi real players injected successfully!");
