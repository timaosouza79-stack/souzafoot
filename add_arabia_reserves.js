const fs = require('fs');

let squadsData = fs.readFileSync('squads.js', 'utf8');

const reserves = {
    "alhilal": [
        { "name": "M. Al-Owais", "pos": "GOL", "str": 75 },
        { "name": "H. Al-Tambakti", "pos": "ZAG", "str": 76 },
        { "name": "Y. Al-Shahrani", "pos": "LAT", "str": 77 },
        { "name": "Mohamed Kanno", "pos": "MEI", "str": 78 },
        { "name": "Salman Al-Faraj", "pos": "MEI", "str": 76 },
        { "name": "Michael", "pos": "ATA", "str": 80 },
        { "name": "A. Al-Hamdan", "pos": "ATA", "str": 73 }
    ],
    "alnassr": [
        { "name": "Nawaf Al-Aqidi", "pos": "GOL", "str": 74 },
        { "name": "A. Al-Amri", "pos": "ZAG", "str": 76 },
        { "name": "Ali Lajami", "pos": "ZAG", "str": 75 },
        { "name": "A. Al-Khaibari", "pos": "MEI", "str": 75 },
        { "name": "Sami Al-Najei", "pos": "MEI", "str": 74 },
        { "name": "A. Ghareeb", "pos": "ATA", "str": 77 },
        { "name": "Mohammed Maran", "pos": "ATA", "str": 72 }
    ],
    "alittihad": [
        { "name": "A. Al-Mayouf", "pos": "GOL", "str": 75 },
        { "name": "Ahmed Hegazi", "pos": "ZAG", "str": 78 },
        { "name": "M. Al-Shanqeeti", "pos": "LAT", "str": 75 },
        { "name": "Awad Al-Nashri", "pos": "MEI", "str": 73 },
        { "name": "Romarinho", "pos": "ATA", "str": 79 },
        { "name": "Saleh Al-Shehri", "pos": "ATA", "str": 74 },
        { "name": "Jota", "pos": "ATA", "str": 80 }
    ],
    "alahli": [
        { "name": "A. Al-Sanbi", "pos": "GOL", "str": 72 },
        { "name": "Fahad Al-Hamad", "pos": "ZAG", "str": 73 },
        { "name": "S. Al-Nabit", "pos": "MEI", "str": 74 },
        { "name": "M. Al-Majhad", "pos": "MEI", "str": 75 },
        { "name": "Ali Al-Asmari", "pos": "MEI", "str": 74 },
        { "name": "H. Asiri", "pos": "ATA", "str": 73 },
        { "name": "Fahad Al-Rashidi", "pos": "ATA", "str": 72 }
    ],
    "alshabab": [
        { "name": "Fawaz Al-Qarni", "pos": "GOL", "str": 73 },
        { "name": "Nader Al-Sharari", "pos": "ZAG", "str": 74 },
        { "name": "Hussain Al-Sibyani", "pos": "LAT", "str": 72 },
        { "name": "Majed Kanabah", "pos": "MEI", "str": 73 },
        { "name": "M. Al-Qahtani", "pos": "MEI", "str": 74 },
        { "name": "Fahad Al-Muwallad", "pos": "ATA", "str": 75 },
        { "name": "Haroune Camara", "pos": "ATA", "str": 73 }
    ],
    "altaawoun": [
        { "name": "Raghed Al-Najjar", "pos": "GOL", "str": 71 },
        { "name": "Awn Al-Saluli", "pos": "ZAG", "str": 73 },
        { "name": "M. Al-Ghamdi", "pos": "LAT", "str": 72 },
        { "name": "Tariq Abdullah", "pos": "MEI", "str": 72 },
        { "name": "M. Mahzari", "pos": "MEI", "str": 71 },
        { "name": "Abdulfattah Adam", "pos": "ATA", "str": 73 },
        { "name": "Ahmed Bahusayn", "pos": "ATA", "str": 70 }
    ],
    "alettifaq": [
        { "name": "A. Al-Oaisher", "pos": "GOL", "str": 72 },
        { "name": "A. Khateeb", "pos": "ZAG", "str": 73 },
        { "name": "Mohammed Yousef", "pos": "LAT", "str": 71 },
        { "name": "Hamed Al-Ghamdi", "pos": "MEI", "str": 73 },
        { "name": "Ali Hazazi", "pos": "MEI", "str": 72 },
        { "name": "M. Al-Kuwaykibi", "pos": "ATA", "str": 74 },
        { "name": "T. Al-Khaibari", "pos": "ATA", "str": 69 }
    ],
    "alfateh": [
        { "name": "Jacob Rinne", "pos": "GOL", "str": 74 },
        { "name": "Ammar Al-Daheem", "pos": "ZAG", "str": 72 },
        { "name": "Tawfiq Buhimed", "pos": "LAT", "str": 73 },
        { "name": "Abbas Al-Hassan", "pos": "MEI", "str": 71 },
        { "name": "Othman Al-Othman", "pos": "MEI", "str": 70 },
        { "name": "Ali Al-Zaqaan", "pos": "ATA", "str": 72 },
        { "name": "Saad Al-Shorafa", "pos": "ATA", "str": 69 }
    ],
    "alfayha": [
        { "name": "A. Al-Duqayl", "pos": "GOL", "str": 71 },
        { "name": "Makhir Al-Rashidi", "pos": "ZAG", "str": 72 },
        { "name": "M. Al-Baqawi", "pos": "LAT", "str": 73 },
        { "name": "Saud Zidan", "pos": "MEI", "str": 71 },
        { "name": "A. Al-Safri", "pos": "MEI", "str": 70 },
        { "name": "Sultan Mandash", "pos": "ATA", "str": 73 },
        { "name": "M. Al-Abdulmonem", "pos": "ATA", "str": 70 }
    ],
    "damac": [
        { "name": "M. Zeghba", "pos": "GOL", "str": 74 },
        { "name": "H. Al-Shamrani", "pos": "ZAG", "str": 72 },
        { "name": "A. Al-Hawsawi", "pos": "LAT", "str": 71 },
        { "name": "Bader Munshi", "pos": "MEI", "str": 72 },
        { "name": "A. Al-Shahrani", "pos": "MEI", "str": 71 },
        { "name": "Ramzi Solan", "pos": "ATA", "str": 70 },
        { "name": "Abdulaziz Makin", "pos": "ATA", "str": 69 }
    ]
};

for (const [teamId, reserveList] of Object.entries(reserves)) {
    // We will parse the squadsData to JSON, wait squadsData is a JS string `const realSquads = { ... };`
    // Let's use regex to append the players before the closing bracket of the players array.
    
    let reservesString = reserveList.map(p => '        { "name": "' + p.name + '", "pos": "' + p.pos + '", "str": ' + p.str + ' }').join(",\\n");
    
    // Find the players array for this team
    const teamRegex = new RegExp('("\\\\b' + teamId + '\\\\b":\\\\s*\\\\{[\\\\s\\\\S]*?"players":\\\\s*\\\\[[\\\\s\\\\S]*?)\\\\]\\\\s*\\\\}', 'g');
    
    squadsData = squadsData.replace(teamRegex, (match, p1) => {
        return p1 + ',\\n' + reservesString + '\\n    ]\\n    }';
    });
}

fs.writeFileSync('squads.js', squadsData);
console.log('Added reserves!');
