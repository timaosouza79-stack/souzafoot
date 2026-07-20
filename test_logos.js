const domainMap = {
    'Coca-Cola':          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/256px-Coca-Cola_logo.svg.png',
    'Guaraná Antarctica': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Guaran%C3%A1_Antarctica_logo.svg/256px-Guaran%C3%A1_Antarctica_logo.svg.png',
    'Nike':               'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/256px-Logo_NIKE.svg.png',
    'Adidas':             'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/256px-Adidas_Logo.svg.png',
    'Puma':               'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_Logo.svg/256px-Puma_Logo.svg.png',
    'New Balance':        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/256px-New_Balance_logo.svg.png',
    "McDonald's":         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/256px-McDonald%27s_Golden_Arches.svg.png',
    'Burger King':        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/256px-Burger_King_logo_%281999%29.svg.png',
    'Pingo Doce':         'https://upload.wikimedia.org/wikipedia/en/d/de/Pingo_Doce_logo.svg',
    'Continente':         'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Continente_logo.svg/512px-Continente_logo.svg.png',
    'MEO':                'https://upload.wikimedia.org/wikipedia/commons/0/02/Meo_logo.svg',
    'Penalty':            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Penalty_logo.svg/512px-Penalty_logo.svg.png',
    'Topper':             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Topper_logo.svg/512px-Topper_logo.svg.png',
    'Betano':             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Betano_Logo.svg/512px-Betano_Logo.svg.png',
    'Mercado Livre':      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MercadoLivre.svg/512px-MercadoLivre.svg.png',
    'Itaú':               'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ita%C3%BA_Unibanco_logo.svg/512px-Ita%C3%BA_Unibanco_logo.svg.png',
    'Nubank':             'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nubank_logo_2021.svg/512px-Nubank_logo_2021.svg.png',
    'Vivo':               'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vivo_logo.svg/512px-Vivo_logo.svg.png',
    'Emirates':           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/256px-Emirates_logo.svg.png',
    'Spotify':            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/256px-Spotify_logo_with_text.svg.png',
    'Red Bull':           'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Red_bull_logo.svg/256px-Red_bull_logo.svg.png',
    'Samsung':            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/256px-Samsung_Logo.svg.png',
    'Mastercard':         'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/256px-Mastercard-logo.svg.png'
};

function getSponsorLogoUrl(brandName, fallbackDomain) {
    if (!brandName) {
        const domain = fallbackDomain || "google.com";
        return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    }
    
    // Normaliza o nome da marca para busca tolerante (ex: "Coca-Cola" e "Coca Cola" viram "cocacola")
    const normalized = brandName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let mapped = null;
    for (const key in domainMap) {
        if (key.toLowerCase().replace(/[^a-z0-9]/g, '') === normalized) {
            mapped = domainMap[key];
            break;
        }
    }
    
    if (mapped && mapped.startsWith('http')) {
        return mapped;
    }
    
    const domain = mapped || fallbackDomain || "google.com";
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
}

const sponsorBrands = {
    level1: [
        { brand: "Guaraná Antarctica", domain: "guaranaantarctica.com.br" },
        { brand: "Continente",         domain: "continente.pt" },
        { brand: "Pingo Doce",         domain: "pingodoce.pt" },
        { brand: "MEO",                domain: "meo.pt" },
        { brand: "Penalty",            domain: "penalty.com.br" },
        { brand: "Topper",             domain: "topper.com.ar" },
        { brand: "McDonald's",         domain: "mcdonalds.com" },
        { brand: "Burger King",        domain: "burgerking.com" }
    ],
    level2: [
        { brand: "Betano",             domain: "betano.com" },
        { brand: "Mercado Livre",      domain: "mercadolivre.com.br" },
        { brand: "Itaú",               domain: "itau.com.br" },
        { brand: "Nubank",             domain: "nubank.com.br" },
        { brand: "Vivo",               domain: "vivo.com.br" },
        { brand: "New Balance",        domain: "newbalance.com" },
        { brand: "Puma",               domain: "puma.com" }
    ],
    level3: [
        { brand: "Emirates",           domain: "emirates.com" },
        { brand: "Spotify",            domain: "spotify.com" },
        { brand: "Red Bull",           domain: "redbull.com" },
        { brand: "Nike",               domain: "nike.com" },
        { brand: "Adidas",             domain: "adidas.com" },
        { brand: "Samsung",            domain: "samsung.com" },
        { brand: "Mastercard",         domain: "mastercard.com" }
    ]
};

for (const level in sponsorBrands) {
    for (const s of sponsorBrands[level]) {
        console.log(s.brand, "->", getSponsorLogoUrl(s.brand, s.domain));
    }
}
