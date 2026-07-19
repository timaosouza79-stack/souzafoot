const fs = require('fs');

let scriptJs = fs.readFileSync('script.js', 'utf8');

const replacements = {
    "https://upload.wikimedia.org/wikipedia/en/8/8c/Al_Hilal_SFC_Logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/5trzvq1660439102.png",
    "https://upload.wikimedia.org/wikipedia/en/b/b3/Al-Nassr_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/84yvqi1748524565.png",
    "https://upload.wikimedia.org/wikipedia/en/e/e0/Al-Ittihad_Club_Logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/e5q6lh1745436268.png",
    "https://upload.wikimedia.org/wikipedia/en/e/ec/Al-Ahli_Saudi_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/5jxyip1687165392.png",
    "https://upload.wikimedia.org/wikipedia/en/f/f6/Al-Shabab_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/x9pqf01618586414.png",
    "https://upload.wikimedia.org/wikipedia/en/f/ff/Al_Taawoun_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/rlsmp91646835052.png",
    "https://upload.wikimedia.org/wikipedia/en/0/07/Ettifaq_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/m272h51694761970.png",
    "https://upload.wikimedia.org/wikipedia/en/7/7b/Al-Fateh_SC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/a5cjf41662659789.png",
    "https://upload.wikimedia.org/wikipedia/en/5/5e/Al-Fayha_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/jl3spp1677530565.png",
    "https://upload.wikimedia.org/wikipedia/en/2/2f/Damac_FC_logo.svg": "https://r2.thesportsdb.com/images/media/team/badge/z2l4w31677530963.png"
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    scriptJs = scriptJs.replace(oldUrl, newUrl);
}

fs.writeFileSync('script.js', scriptJs);
console.log('Fixed shields!');
