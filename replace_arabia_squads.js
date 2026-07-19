const fs = require('fs');

let code = fs.readFileSync('squads.js', 'utf8');
// Extract the JSON-like object
let objCode = code.replace('const realSquads = ', '').trim();
if (objCode.endsWith(';')) objCode = objCode.slice(0, -1);

// Safely evaluate it
let realSquads;
eval('realSquads = ' + objCode);

// Define full 18+ player squads for Arabia
const fullArabiaSquads = {
    "alhilal": {
        "formation": "4-3-3",
        "players": [
            { "name": "Yassine Bounou", "pos": "GOL", "str": 86 },
            { "name": "Mohammed Al-Owais", "pos": "GOL", "str": 75 },
            { "name": "Kalidou Koulibaly", "pos": "ZAG", "str": 84 },
            { "name": "Ali Al-Bulaihi", "pos": "ZAG", "str": 79 },
            { "name": "Hassan Al-Tambakti", "pos": "ZAG", "str": 76 },
            { "name": "Renan Lodi", "pos": "LAT", "str": 81 },
            { "name": "João Cancelo", "pos": "LAT", "str": 85 },
            { "name": "Yasir Al-Shahrani", "pos": "LAT", "str": 77 },
            { "name": "Rúben Neves", "pos": "MEI", "str": 85 },
            { "name": "Sergej Milinković-Savić", "pos": "MEI", "str": 86 },
            { "name": "Salem Al-Dawsari", "pos": "MEI", "str": 82 },
            { "name": "Mohamed Kanno", "pos": "MEI", "str": 78 },
            { "name": "Salman Al-Faraj", "pos": "MEI", "str": 76 },
            { "name": "Malcom", "pos": "ATA", "str": 84 },
            { "name": "Neymar Jr.", "pos": "ATA", "str": 88 },
            { "name": "Aleksandar Mitrović", "pos": "ATA", "str": 86 },
            { "name": "Michael", "pos": "ATA", "str": 80 },
            { "name": "Abdullah Al-Hamdan", "pos": "ATA", "str": 73 }
        ]
    },
    "alnassr": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Bento", "pos": "GOL", "str": 83 },
            { "name": "Nawaf Al-Aqidi", "pos": "GOL", "str": 74 },
            { "name": "Aymeric Laporte", "pos": "ZAG", "str": 85 },
            { "name": "Mohamed Simakan", "pos": "ZAG", "str": 82 },
            { "name": "Abdulelah Al-Amri", "pos": "ZAG", "str": 76 },
            { "name": "Ali Lajami", "pos": "ZAG", "str": 75 },
            { "name": "Alex Telles", "pos": "LAT", "str": 81 },
            { "name": "Sultan Al-Ghannam", "pos": "LAT", "str": 79 },
            { "name": "Marcelo Brozović", "pos": "MEI", "str": 84 },
            { "name": "Otávio", "pos": "MEI", "str": 83 },
            { "name": "Anderson Talisca", "pos": "MEI", "str": 84 },
            { "name": "Abdullah Al-Khaibari", "pos": "MEI", "str": 75 },
            { "name": "Sami Al-Najei", "pos": "MEI", "str": 74 },
            { "name": "Sadio Mané", "pos": "ATA", "str": 84 },
            { "name": "Wesley", "pos": "ATA", "str": 78 },
            { "name": "Cristiano Ronaldo", "pos": "ATA", "str": 88 },
            { "name": "Abdulrahman Ghareeb", "pos": "ATA", "str": 77 },
            { "name": "Mohammed Maran", "pos": "ATA", "str": 72 }
        ]
    },
    "alittihad": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Predrag Rajković", "pos": "GOL", "str": 81 },
            { "name": "Abdullah Al-Mayouf", "pos": "GOL", "str": 75 },
            { "name": "Luiz Felipe", "pos": "ZAG", "str": 80 },
            { "name": "Danilo Pereira", "pos": "ZAG", "str": 82 },
            { "name": "Ahmed Hegazi", "pos": "ZAG", "str": 78 },
            { "name": "Mario Mitaj", "pos": "LAT", "str": 78 },
            { "name": "Muhannad Al-Shanqeeti", "pos": "LAT", "str": 75 },
            { "name": "N'Golo Kanté", "pos": "MEI", "str": 85 },
            { "name": "Fabinho", "pos": "MEI", "str": 83 },
            { "name": "Houssem Aouar", "pos": "MEI", "str": 81 },
            { "name": "Awad Al-Nashri", "pos": "MEI", "str": 73 },
            { "name": "Steven Bergwijn", "pos": "ATA", "str": 82 },
            { "name": "Moussa Diaby", "pos": "ATA", "str": 84 },
            { "name": "Karim Benzema", "pos": "ATA", "str": 86 },
            { "name": "Romarinho", "pos": "ATA", "str": 79 },
            { "name": "Saleh Al-Shehri", "pos": "ATA", "str": 74 },
            { "name": "Jota", "pos": "ATA", "str": 80 },
            { "name": "S. Al-Sqoor", "pos": "LAT", "str": 76 }
        ]
    },
    "alahli": {
        "formation": "4-3-3",
        "players": [
            { "name": "Édouard Mendy", "pos": "GOL", "str": 83 },
            { "name": "Abdulrahman Al-Sanbi", "pos": "GOL", "str": 72 },
            { "name": "Merih Demiral", "pos": "ZAG", "str": 81 },
            { "name": "Roger Ibañez", "pos": "ZAG", "str": 82 },
            { "name": "Fahad Al-Hamad", "pos": "ZAG", "str": 73 },
            { "name": "Bassam Al-Hurayji", "pos": "LAT", "str": 76 },
            { "name": "Abdullah Al-Ammar", "pos": "LAT", "str": 74 },
            { "name": "Franck Kessié", "pos": "MEI", "str": 84 },
            { "name": "Gabri Veiga", "pos": "MEI", "str": 81 },
            { "name": "Mohammed Al-Majhad", "pos": "MEI", "str": 75 },
            { "name": "Ali Al-Asmari", "pos": "MEI", "str": 74 },
            { "name": "Sumayhan Al-Nabit", "pos": "MEI", "str": 74 },
            { "name": "Riyad Mahrez", "pos": "ATA", "str": 85 },
            { "name": "Roberto Firmino", "pos": "ATA", "str": 83 },
            { "name": "Firas Al-Buraikan", "pos": "ATA", "str": 80 },
            { "name": "Ivan Toney", "pos": "ATA", "str": 84 },
            { "name": "Haidar Asiri", "pos": "ATA", "str": 73 },
            { "name": "Fahad Al-Rashidi", "pos": "ATA", "str": 72 }
        ]
    },
    "alshabab": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Kim Seung-gyu", "pos": "GOL", "str": 78 },
            { "name": "Fawaz Al-Qarni", "pos": "GOL", "str": 73 },
            { "name": "Romain Saïss", "pos": "ZAG", "str": 80 },
            { "name": "Wesley Hoedt", "pos": "ZAG", "str": 78 },
            { "name": "Nader Al-Sharari", "pos": "ZAG", "str": 74 },
            { "name": "Moteb Al-Harbi", "pos": "LAT", "str": 77 },
            { "name": "Hussain Al-Sibyani", "pos": "LAT", "str": 72 },
            { "name": "Gustavo Cuéllar", "pos": "MEI", "str": 79 },
            { "name": "Giacomo Bonaventura", "pos": "MEI", "str": 80 },
            { "name": "Yannick Carrasco", "pos": "MEI", "str": 82 },
            { "name": "Majed Kanabah", "pos": "MEI", "str": 73 },
            { "name": "Nawaf Al-Sadi", "pos": "MEI", "str": 74 },
            { "name": "Daniel Podence", "pos": "ATA", "str": 80 },
            { "name": "Cristian Guanca", "pos": "ATA", "str": 77 },
            { "name": "Abderrazak Hamdallah", "pos": "ATA", "str": 80 },
            { "name": "Fahad Al-Muwallad", "pos": "ATA", "str": 75 },
            { "name": "Haroune Camara", "pos": "ATA", "str": 73 },
            { "name": "Nawaf Al-Abed", "pos": "ATA", "str": 72 }
        ]
    },
    "altaawoun": {
        "formation": "4-3-3",
        "players": [
            { "name": "Mailson", "pos": "GOL", "str": 76 },
            { "name": "Raghed Al-Najjar", "pos": "GOL", "str": 71 },
            { "name": "Andrei Girotto", "pos": "ZAG", "str": 78 },
            { "name": "Waleed Al-Ahmed", "pos": "ZAG", "str": 75 },
            { "name": "Awn Al-Saluli", "pos": "ZAG", "str": 73 },
            { "name": "Fahad Al-Abdulrazzaq", "pos": "LAT", "str": 74 },
            { "name": "Mohammed Al-Ghamdi", "pos": "LAT", "str": 72 },
            { "name": "Flávio", "pos": "MEI", "str": 76 },
            { "name": "Aschraf El Mahdioui", "pos": "MEI", "str": 77 },
            { "name": "Tariq Abdullah", "pos": "MEI", "str": 72 },
            { "name": "Mohammed Mahzari", "pos": "MEI", "str": 71 },
            { "name": "Musa Barrow", "pos": "ATA", "str": 78 },
            { "name": "Mateus", "pos": "ATA", "str": 76 },
            { "name": "João Pedro", "pos": "ATA", "str": 77 },
            { "name": "Abdulfattah Adam", "pos": "ATA", "str": 73 },
            { "name": "Ahmed Bahusayn", "pos": "ATA", "str": 70 },
            { "name": "Saad Al-Nasser", "pos": "ATA", "str": 71 },
            { "name": "Rayan Al-Mousa", "pos": "MEI", "str": 74 }
        ]
    },
    "alettifaq": {
        "formation": "4-3-3",
        "players": [
            { "name": "Marek Rodák", "pos": "GOL", "str": 77 },
            { "name": "Abdullah Al-Oaisher", "pos": "GOL", "str": 72 },
            { "name": "Jack Hendry", "pos": "ZAG", "str": 78 },
            { "name": "Marcel Tisserand", "pos": "ZAG", "str": 76 },
            { "name": "Abdullah Khateeb", "pos": "ZAG", "str": 73 },
            { "name": "Radhi Al-Otaibi", "pos": "LAT", "str": 74 },
            { "name": "Mohammed Yousef", "pos": "LAT", "str": 71 },
            { "name": "Seko Fofana", "pos": "MEI", "str": 81 },
            { "name": "Georginio Wijnaldum", "pos": "MEI", "str": 81 },
            { "name": "Álvaro Medrán", "pos": "MEI", "str": 77 },
            { "name": "Hamed Al-Ghamdi", "pos": "MEI", "str": 73 },
            { "name": "Ali Hazazi", "pos": "MEI", "str": 72 },
            { "name": "Demarai Gray", "pos": "ATA", "str": 79 },
            { "name": "Karl Toko Ekambi", "pos": "ATA", "str": 78 },
            { "name": "Moussa Dembélé", "pos": "ATA", "str": 80 },
            { "name": "Mohammed Al-Kuwaykibi", "pos": "ATA", "str": 74 },
            { "name": "Thamer Al-Khaibari", "pos": "ATA", "str": 69 },
            { "name": "Vitinho", "pos": "ATA", "str": 76 }
        ]
    },
    "alfateh": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Péter Szappanos", "pos": "GOL", "str": 75 },
            { "name": "Jacob Rinne", "pos": "GOL", "str": 74 },
            { "name": "Jason Denayer", "pos": "ZAG", "str": 78 },
            { "name": "Marwane Saâdane", "pos": "ZAG", "str": 76 },
            { "name": "Ammar Al-Daheem", "pos": "ZAG", "str": 72 },
            { "name": "Salem Al-Najdi", "pos": "LAT", "str": 74 },
            { "name": "Tawfiq Buhimed", "pos": "LAT", "str": 73 },
            { "name": "Sofiane Bendebka", "pos": "MEI", "str": 76 },
            { "name": "Lucas Zelarayán", "pos": "MEI", "str": 80 },
            { "name": "Abbas Al-Hassan", "pos": "MEI", "str": 71 },
            { "name": "Othman Al-Othman", "pos": "MEI", "str": 70 },
            { "name": "Mourad Batna", "pos": "ATA", "str": 78 },
            { "name": "Cristian Tello", "pos": "ATA", "str": 77 },
            { "name": "Djaniny", "pos": "ATA", "str": 76 },
            { "name": "Ali Al-Zaqaan", "pos": "ATA", "str": 72 },
            { "name": "Saad Al-Shorafa", "pos": "ATA", "str": 69 },
            { "name": "Hassan Al-Salis", "pos": "ATA", "str": 70 },
            { "name": "Mukhtar Ali", "pos": "MEI", "str": 75 }
        ]
    },
    "alfayha": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Vladimir Stojković", "pos": "GOL", "str": 75 },
            { "name": "Abdulraouf Al-Duqayl", "pos": "GOL", "str": 71 },
            { "name": "Chris Smalling", "pos": "ZAG", "str": 79 },
            { "name": "Hussain Al-Shuwaish", "pos": "ZAG", "str": 74 },
            { "name": "Makhir Al-Rashidi", "pos": "ZAG", "str": 72 },
            { "name": "Ghislain Konan", "pos": "LAT", "str": 76 },
            { "name": "Mohammed Al-Baqawi", "pos": "LAT", "str": 73 },
            { "name": "Gojko Cimirot", "pos": "MEI", "str": 76 },
            { "name": "Victor Ruiz", "pos": "MEI", "str": 75 },
            { "name": "Ricardo Ryller", "pos": "MEI", "str": 74 },
            { "name": "Saud Zidan", "pos": "MEI", "str": 71 },
            { "name": "Abdulrahman Al-Safri", "pos": "MEI", "str": 70 },
            { "name": "Henry Onyekuru", "pos": "ATA", "str": 77 },
            { "name": "Fashion Sakala", "pos": "ATA", "str": 78 },
            { "name": "Anthony Nwakaeme", "pos": "ATA", "str": 76 },
            { "name": "Sultan Mandash", "pos": "ATA", "str": 73 },
            { "name": "Malik Al-Abdulmonem", "pos": "ATA", "str": 70 },
            { "name": "Nawaf Al-Harthi", "pos": "ATA", "str": 71 }
        ]
    },
    "damac": {
        "formation": "4-2-3-1",
        "players": [
            { "name": "Florin Niță", "pos": "GOL", "str": 76 },
            { "name": "Moustapha Zeghba", "pos": "GOL", "str": 74 },
            { "name": "Farouk Chafaï", "pos": "ZAG", "str": 76 },
            { "name": "Abdelkader Bedrane", "pos": "ZAG", "str": 75 },
            { "name": "Hassan Al-Shamrani", "pos": "ZAG", "str": 72 },
            { "name": "Sultan Al-Hawsawi", "pos": "LAT", "str": 74 },
            { "name": "Abdullah Al-Hawsawi", "pos": "LAT", "str": 71 },
            { "name": "Nicolae Stanciu", "pos": "MEI", "str": 78 },
            { "name": "Domagoj Antolić", "pos": "MEI", "str": 76 },
            { "name": "Tarek Hamed", "pos": "MEI", "str": 77 },
            { "name": "Bader Munshi", "pos": "MEI", "str": 72 },
            { "name": "Abdulaziz Al-Shahrani", "pos": "MEI", "str": 71 },
            { "name": "Georges-Kévin Nkoudou", "pos": "ATA", "str": 79 },
            { "name": "Habib Diallo", "pos": "ATA", "str": 77 },
            { "name": "Ramzi Solan", "pos": "ATA", "str": 70 },
            { "name": "Abdulaziz Makin", "pos": "ATA", "str": 69 },
            { "name": "Ahmad Al-Zain", "pos": "ATA", "str": 74 },
            { "name": "Abdulaziz Al-Bishi", "pos": "ATA", "str": 73 }
        ]
    }
};

// Replace Arabia squads with the full versions
for (const t of Object.keys(fullArabiaSquads)) {
    realSquads[t] = fullArabiaSquads[t];
}

// Convert back to string and write
const newContent = 'const realSquads = ' + JSON.stringify(realSquads, null, 4) + ';';
fs.writeFileSync('squads.js', newContent);
console.log('Successfully wrote full 18-player squads to squads.js for all Arabia teams.');
