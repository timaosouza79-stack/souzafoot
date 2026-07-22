// --- BASE DE DADOS DE PATROCINADORES ---
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
const sponsorSlots = ['Master', 'Costas', 'Mangas', 'Calcoes'];
// ---------------------------------------

// Dados dos 20 times da Série A do Brasileirão
const teamsData = [
    {"id": "athleticopr", "name": "Athletico-PR", "strength": 79, "shield": "img/athleticopr_v3.png", "league": "brazil_a", "balance": 350000000, "stadium": "Ligga Arena", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ligga_Arena.jpg/600px-Ligga_Arena.jpg"},
    {"id": "atleticomg", "name": "Atlético-MG", "strength": 83, "shield": "img/atleticomg_v3.png", "league": "brazil_a", "balance": 90000000, "stadium": "Arena MRV", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_MRV_-_Belo_Horizonte.jpg/600px-Arena_MRV_-_Belo_Horizonte.jpg"},
    {"id": "bahia", "name": "Bahia", "strength": 81, "shield": "img/bahia_v3.png", "league": "brazil_a", "balance": 110000000, "stadium": "Arena Fonte Nova", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Itaipava_Arena_Fonte_Nova_-_Salvador_-_Bahia.jpg/600px-Itaipava_Arena_Fonte_Nova_-_Salvador_-_Bahia.jpg"},
    {"id": "botafogo", "name": "Botafogo", "strength": 86, "shield": "img/botafogo_v3.png", "league": "brazil_a", "balance": 130000000, "stadium": "Nilton Santos", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Engenh%C3%A3o_panor%C3%A2mica.jpg/600px-Engenh%C3%A3o_panor%C3%A2mica.jpg"},
    {"id": "corinthians", "name": "Corinthians", "strength": 82, "shield": "img/corinthians_v3.png", "league": "brazil_a", "balance": 80000000, "stadium": "Neo Química Arena", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Est%C3%A1dio_Corinthians_-_Vista_interna_-_Maio_2014.jpg/600px-Est%C3%A1dio_Corinthians_-_Vista_interna_-_Maio_2014.jpg"},
    {"id": "cruzeiro", "name": "Cruzeiro", "strength": 82, "shield": "https://upload.wikimedia.org/wikipedia/commons/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg", "league": "brazil_a", "balance": 84000000, "stadium": "Mineirão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mineir%C3%A3o_Arena.jpg/600px-Mineir%C3%A3o_Arena.jpg"},
    {"id": "flamengo", "name": "Flamengo", "strength": 88, "shield": "img/flamengo_v3.png", "league": "brazil_a", "balance": 190000000, "stadium": "Maracanã", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg/600px-Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg"},
    {"id": "fluminense", "name": "Fluminense", "strength": 80, "shield": "img/fluminense_v3.png", "league": "brazil_a", "balance": 50000000, "stadium": "Maracanã", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg/600px-Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg"},
    {"id": "gremio", "name": "Grêmio", "strength": 79, "shield": "img/gremio_v3.png", "league": "brazil_a", "balance": 44000000, "stadium": "Arena do Grêmio", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg/600px-Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg"},
    {"id": "internacional", "name": "Internacional", "strength": 81, "shield": "img/internacional_v3.png", "league": "brazil_a", "balance": 46000000, "stadium": "Beira-Rio", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Est%C3%A1dio_Beira-Rio_-_Porto_Alegre.jpg/600px-Est%C3%A1dio_Beira-Rio_-_Porto_Alegre.jpg"},
    {"id": "palmeiras", "name": "Palmeiras", "strength": 87, "shield": "img/palmeiras_v3.png", "league": "brazil_a", "balance": 160000000, "stadium": "Allianz Parque", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Allianz_Parque_interno.jpg/600px-Allianz_Parque_interno.jpg"},
    {"id": "santos", "name": "Santos", "strength": 83, "shield": "img/santos_v3.png", "league": "brazil_a", "balance": 70000000, "stadium": "Vila Belmiro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vila_Belmiro_-_Santos.jpg/600px-Vila_Belmiro_-_Santos.jpg"},
    {"id": "saopaulo", "name": "São Paulo", "strength": 83, "shield": "img/saopaulo_v3.png", "league": "brazil_a", "balance": 76000000, "stadium": "MorumBIS", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Est%C3%A1dio_do_Morumbi_-_S%C3%A3o_Paulo.jpg/600px-Est%C3%A1dio_do_Morumbi_-_S%C3%A3o_Paulo.jpg"},
    {"id": "vasco", "name": "Vasco", "strength": 80, "shield": "https://upload.wikimedia.org/wikipedia/pt/8/8b/EscudoDoVascoDaGama.svg", "league": "brazil_a", "balance": 90000000, "stadium": "São Januário", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/S%C3%A3o_Janu%C3%A1rio_-_Rio_de_Janeiro.jpg/600px-S%C3%A3o_Janu%C3%A1rio_-_Rio_de_Janeiro.jpg"},
    {"id": "vitoria", "name": "Vitória", "strength": 74, "shield": "img/vitoria_v3.png", "league": "brazil_a", "balance": 18000000, "stadium": "Barradão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Barrad%C3%A3o_Stadium.jpg/600px-Barrad%C3%A3o_Stadium.jpg"},
    {"id": "bragantino", "name": "Bragantino", "strength": 80, "shield": "img/bragantino_v3.png", "league": "brazil_a", "balance": 80000000, "stadium": "Nabi Abi Chedid", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Est%C3%A1dio_Nabi_Abi_Chedid_-_2021.jpg/600px-Est%C3%A1dio_Nabi_Abi_Chedid_-_2021.jpg"},
    {"id": "chapecoense", "name": "Chapecoense", "strength": 73, "shield": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Logo_Associa%C3%A7%C3%A3o_Chapecoense_de_Futebol.svg", "league": "brazil_a", "balance": 18000000, "stadium": "Arena Condá", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arena_Cond%C3%A1_-_Chapecoense.jpg/600px-Arena_Cond%C3%A1_-_Chapecoense.jpg"},
    {"id": "coritiba", "name": "Coritiba", "strength": 74, "shield": "img/coritiba_v3.png", "league": "brazil_a", "balance": 24000000, "stadium": "Couto Pereira", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Couto_Pereira_-_Curitiba.jpg/600px-Couto_Pereira_-_Curitiba.jpg"},
    {"id": "mirassol", "name": "Mirassol", "strength": 73, "shield": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mirassol_Futebol_Clube_logo_%283_stars%29.png", "league": "brazil_a", "balance": 15000000, "stadium": "Maião", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estadio_Jose_Maria_de_Campos_Maia.jpg/600px-Estadio_Jose_Maria_de_Campos_Maia.jpg"},
    {"id": "remo", "name": "Remo", "strength": 72, "shield": "https://upload.wikimedia.org/wikipedia/commons/7/70/Clube_do_Remo.svg", "league": "brazil_a", "balance": 12000000, "stadium": "Baenão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Est%C3%A1dio_Evandro_Almeida.jpg/600px-Est%C3%A1dio_Evandro_Almeida.jpg"},
    {"id": "americamg", "name": "América-MG", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/rtpp171752177342.png", "league": "brazil_b", "balance": 18000000, "stadium": "Independência", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Est%C3%A1dio_Independ%C3%AAncia_-_Belo_Horizonte.jpg/600px-Est%C3%A1dio_Independ%C3%AAncia_-_Belo_Horizonte.jpg"},
    {"id": "athletic_club", "name": "Athletic Club", "strength": 69, "shield": "https://r2.thesportsdb.com/images/media/team/badge/myl7c31677056352.png", "league": "brazil_b", "balance": 8000000, "stadium": "Arena Unimed", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "atleticogo", "name": "Atlético-GO", "strength": 73, "shield": "https://r2.thesportsdb.com/images/media/team/badge/l7382k1766505911.png", "league": "brazil_b", "balance": 15000000, "stadium": "Antônio Accioly", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Est%C3%A1dio_Ant%C3%B4nio_Accioly.jpg/600px-Est%C3%A1dio_Ant%C3%B4nio_Accioly.jpg"},
    {"id": "avai", "name": "Avaí", "strength": 69, "shield": "https://r2.thesportsdb.com/images/media/team/badge/bblkat1766506007.png", "league": "brazil_b", "balance": 8000000, "stadium": "Ressacada", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Est%C3%A1dio_da_Ressacada.jpg/600px-Est%C3%A1dio_da_Ressacada.jpg"},
    {"id": "botafogosp", "name": "Botafogo-SP", "strength": 67, "shield": "https://r2.thesportsdb.com/images/media/team/badge/bs5mbw1733004596.png", "league": "brazil_b", "balance": 7000000, "stadium": "Santa Cruz", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "ceara", "name": "Ceará", "strength": 72, "shield": "https://r2.thesportsdb.com/images/media/team/badge/rxxvyp1464886685.png", "league": "brazil_b", "balance": 14000000, "stadium": "Arena Castelão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg/600px-Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg"},
    {"id": "crb", "name": "CRB", "strength": 68, "shield": "https://r2.thesportsdb.com/images/media/team/badge/vpypuq1472069179.png", "league": "brazil_b", "balance": 6000000, "stadium": "Rei Pelé", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "criciuma", "name": "Criciúma", "strength": 73, "shield": "https://r2.thesportsdb.com/images/media/team/badge/r11mld1766506200.png", "league": "brazil_b", "balance": 17000000, "stadium": "Heriberto Hülse", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Est%C3%A1dio_Heriberto_H%C3%BClse.jpg/600px-Est%C3%A1dio_Heriberto_H%C3%BClse.jpg"},
    {"id": "cuiaba", "name": "Cuiabá", "strength": 76, "shield": "https://r2.thesportsdb.com/images/media/team/badge/ykbxfa1766506334.png", "league": "brazil_b", "balance": 26000000, "stadium": "Arena Pantanal", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arena_Pantanal_-_Cuiaba.jpg/600px-Arena_Pantanal_-_Cuiaba.jpg"},
    {"id": "fortaleza", "name": "Fortaleza", "strength": 81, "shield": "https://r2.thesportsdb.com/images/media/team/badge/tosmdr1532853458.png", "league": "brazil_b", "balance": 44000000, "stadium": "Arena Castelão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_Castel%C3%A3O_-_Vista_a%C3%A9rea.jpg/600px-Arena_Castel%C3%A3O_-_Vista_a%C3%A9rea.jpg"},
    {"id": "goias", "name": "Goiás", "strength": 72, "shield": "https://r2.thesportsdb.com/images/media/team/badge/qhfhdp1635869930.png", "league": "brazil_b", "balance": 14000000, "stadium": "Serrinha", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Est%C3%A1dio_da_Serrinha.jpg/600px-Est%C3%A1dio_da_Serrinha.jpg"},
    {"id": "juventude", "name": "Juventude", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/1ntter1766506778.png", "league": "brazil_b", "balance": 15000000, "stadium": "Alfredo Jaconi", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Estadio_Alfredo_Jaconi.jpg/600px-Estadio_Alfredo_Jaconi.jpg"},
    {"id": "londrina", "name": "Londrina", "strength": 67, "shield": "https://r2.thesportsdb.com/images/media/team/badge/xp2z9j1740846583.png", "league": "brazil_b", "balance": 5000000, "stadium": "Estádio do Café", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "nautico", "name": "Náutico", "strength": 68, "shield": "https://r2.thesportsdb.com/images/media/team/badge/wywuwv1464886832.png", "league": "brazil_b", "balance": 6000000, "stadium": "Aflitos", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "novorizontino", "name": "Novorizontino", "strength": 70, "shield": "https://r2.thesportsdb.com/images/media/team/badge/2qwxw51617198963.png", "league": "brazil_b", "balance": 9000000, "stadium": "Jorge Ismael de Biasi", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Est%C3%A1dio_Jorge_Ismael_de_Biasi.jpg/600px-Est%C3%A1dio_Jorge_Ismael_de_Biasi.jpg"},
    {"id": "operariopr", "name": "Operário-PR", "strength": 68, "shield": "https://r2.thesportsdb.com/images/media/team/badge/fhrc6i1560791704.png", "league": "brazil_b", "balance": 6000000, "stadium": "Germano Krüger", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "pontepreta", "name": "Ponte Preta", "strength": 68, "shield": "https://r2.thesportsdb.com/images/media/team/badge/wbss4d1644929547.png", "league": "brazil_b", "balance": 6000000, "stadium": "Moisés Lucarelli", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Est%C3%A1dio_Mois%C3%A9s_Lucarelli.jpg/600px-Est%C3%A1dio_Mois%C3%A9s_Lucarelli.jpg"},
    {"id": "saobernardo", "name": "São Bernardo", "strength": 69, "shield": "https://r2.thesportsdb.com/images/media/team/badge/0kt1ah1688106304.png", "league": "brazil_b", "balance": 7000000, "stadium": "Primeiro de Maio", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "sport", "name": "Sport Recife", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/tyrbls1545421563.png", "league": "brazil_b", "balance": 18000000, "stadium": "Ilha do Retiro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Est%C3%A1dio_Ilha_do_Retiro.jpg/600px-Est%C3%A1dio_Ilha_do_Retiro.jpg"},
    {"id": "vilanova", "name": "Vila Nova", "strength": 68, "shield": "https://r2.thesportsdb.com/images/media/team/badge/nwd4ns1740851638.png", "league": "brazil_b", "balance": 6000000, "stadium": "OBA", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "mancity", "name": "Man City", "strength": 92, "shield": "https://tmssl.akamaized.net/images/wappen/head/281.png", "league": "england", "balance": 1500000000, "stadium": "Etihad Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,manchester"},
    {"id": "arsenal", "name": "Arsenal", "strength": 91, "shield": "https://tmssl.akamaized.net/images/wappen/head/11.png", "league": "england", "balance": 1000000000, "stadium": "Emirates Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,arsenal"},
    {"id": "liverpool", "name": "Liverpool", "strength": 90, "shield": "https://tmssl.akamaized.net/images/wappen/head/31.png", "league": "england", "balance": 900000000, "stadium": "Anfield", "stadiumImg": "https://loremflickr.com/600/200/stadium,liverpool"},
    {"id": "manutd", "name": "Man Utd", "strength": 89, "shield": "https://tmssl.akamaized.net/images/wappen/head/985.png", "league": "england", "balance": 960000000, "stadium": "Old Trafford", "stadiumImg": "https://loremflickr.com/600/200/stadium,manchester,united"},
    {"id": "chelsea", "name": "Chelsea", "strength": 88, "shield": "https://tmssl.akamaized.net/images/wappen/head/631.png", "league": "england", "balance": 1100000000, "stadium": "Stamford Bridge", "stadiumImg": "https://loremflickr.com/600/200/stadium,chelsea"},
    {"id": "tottenham", "name": "Tottenham", "strength": 87, "shield": "https://tmssl.akamaized.net/images/wappen/head/148.png", "league": "england", "balance": 700000000, "stadium": "Tottenham Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,tottenham"},
    {"id": "newcastle", "name": "Newcastle", "strength": 88, "shield": "https://tmssl.akamaized.net/images/wappen/head/762.png", "league": "england", "balance": 1200000000, "stadium": "St James' Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,newcastle"},
    {"id": "brighton", "name": "Brighton", "strength": 83, "shield": "https://tmssl.akamaized.net/images/wappen/head/1237.png", "league": "england", "balance": 300000000, "stadium": "Amex Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,brighton"},
    {"id": "astonvilla", "name": "Aston Villa", "strength": 84, "shield": "https://tmssl.akamaized.net/images/wappen/head/405.png", "league": "england", "balance": 400000000, "stadium": "Villa Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,birmingham"},
    {"id": "westham", "name": "West Ham", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/379.png", "league": "england", "balance": 350000000, "stadium": "London Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,london"},
    {"id": "everton", "name": "Everton", "strength": 80, "shield": "https://tmssl.akamaized.net/images/wappen/head/29.png", "league": "england", "balance": 250000000, "stadium": "Goodison Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,everton"},
    {"id": "crystalpalace", "name": "Crystal Palace", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/873.png", "league": "england", "balance": 220000000, "stadium": "Selhurst Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,london"},
    {"id": "fulham", "name": "Fulham", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/931.png", "league": "england", "balance": 200000000, "stadium": "Craven Cottage", "stadiumImg": "https://loremflickr.com/600/200/stadium,london"},
    {"id": "wolves", "name": "Wolves", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/543.png", "league": "england", "balance": 200000000, "stadium": "Molineux", "stadiumImg": "https://loremflickr.com/600/200/stadium,wolves"},
    {"id": "brentford", "name": "Brentford", "strength": 77, "shield": "https://tmssl.akamaized.net/images/wappen/head/1148.png", "league": "england", "balance": 180000000, "stadium": "Gtech Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,brentford"},
    {"id": "nottinghamforest", "name": "Nottm Forest", "strength": 76, "shield": "https://tmssl.akamaized.net/images/wappen/head/703.png", "league": "england", "balance": 170000000, "stadium": "City Ground", "stadiumImg": "https://loremflickr.com/600/200/stadium,nottingham"},
    {"id": "bournemouth", "name": "Bournemouth", "strength": 75, "shield": "https://tmssl.akamaized.net/images/wappen/head/989.png", "league": "england", "balance": 160000000, "stadium": "Vitality Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,bournemouth"},
    {"id": "burnley", "name": "Burnley", "strength": 74, "shield": "https://tmssl.akamaized.net/images/wappen/head/1132.png", "league": "england", "balance": 150000000, "stadium": "Turf Moor", "stadiumImg": "https://loremflickr.com/600/200/stadium,burnley"},
    {"id": "sheffieldunited", "name": "Sheffield Utd", "strength": 73, "shield": "https://tmssl.akamaized.net/images/wappen/head/350.png", "league": "england", "balance": 140000000, "stadium": "Bramall Lane", "stadiumImg": "https://loremflickr.com/600/200/stadium,sheffield"},
    {"id": "lutontown", "name": "Luton Town", "strength": 72, "shield": "https://tmssl.akamaized.net/images/wappen/head/1029.png", "league": "england", "balance": 130000000, "stadium": "Kenilworth Road", "stadiumImg": "https://loremflickr.com/600/200/stadium,luton"},
    {"id": "realmadrid", "name": "Real Madrid", "strength": 94, "shield": "https://tmssl.akamaized.net/images/wappen/head/418.png", "league": "spain", "balance": 1600000000, "stadium": "Bernabéu", "stadiumImg": "https://loremflickr.com/600/200/stadium,madrid"},
    {"id": "barcelona", "name": "Barcelona", "strength": 91, "shield": "https://tmssl.akamaized.net/images/wappen/head/131.png", "league": "spain", "balance": 700000000, "stadium": "Camp Nou", "stadiumImg": "https://loremflickr.com/600/200/stadium,barcelona"},
    {"id": "atleticomadrid", "name": "Atlético Madrid", "strength": 89, "shield": "https://tmssl.akamaized.net/images/wappen/head/13.png", "league": "spain", "balance": 500000000, "stadium": "Metropolitano", "stadiumImg": "https://loremflickr.com/600/200/stadium,atletico"},
    {"id": "realsociedad", "name": "Real Sociedad", "strength": 85, "shield": "https://tmssl.akamaized.net/images/wappen/head/681.png", "league": "spain", "balance": 160000000, "stadium": "Reale Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium,sociedad"},
    {"id": "athletic", "name": "Athletic Bilbao", "strength": 84, "shield": "https://tmssl.akamaized.net/images/wappen/head/621.png", "league": "spain", "balance": 150000000, "stadium": "San Mamés", "stadiumImg": "https://loremflickr.com/600/200/stadium,bilbao"},
    {"id": "girona", "name": "Girona", "strength": 83, "shield": "https://tmssl.akamaized.net/images/wappen/head/12321.png", "league": "spain", "balance": 120000000, "stadium": "Montilivi", "stadiumImg": "https://loremflickr.com/600/200/stadium,girona"},
    {"id": "villarreal", "name": "Villarreal", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/1050.png", "league": "spain", "balance": 140000000, "stadium": "Cerámica", "stadiumImg": "https://loremflickr.com/600/200/stadium,villarreal"},
    {"id": "betis", "name": "Real Betis", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/150.png", "league": "spain", "balance": 130000000, "stadium": "Villamarín", "stadiumImg": "https://loremflickr.com/600/200/stadium,sevilla"},
    {"id": "valencia", "name": "Valencia", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/1049.png", "league": "spain", "balance": 140000000, "stadium": "Mestalla", "stadiumImg": "https://loremflickr.com/600/200/stadium,valencia"},
    {"id": "sevilla", "name": "Sevilla", "strength": 80, "shield": "https://tmssl.akamaized.net/images/wappen/head/33.png", "league": "spain", "balance": 135000000, "stadium": "Pizjuán", "stadiumImg": "https://loremflickr.com/600/200/stadium,sevilla"},
    {"id": "osasuna", "name": "Osasuna", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/331.png", "league": "spain", "balance": 90000000, "stadium": "El Sadar", "stadiumImg": "https://loremflickr.com/600/200/stadium,pamplona"},
    {"id": "getafe", "name": "Getafe", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/3709.png", "league": "spain", "balance": 80000000, "stadium": "Coliseum", "stadiumImg": "https://loremflickr.com/600/200/stadium,getafe"},
    {"id": "celta", "name": "Celta de Vigo", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/940.png", "league": "spain", "balance": 85000000, "stadium": "Balaídos", "stadiumImg": "https://loremflickr.com/600/200/stadium,vigo"},
    {"id": "alaves", "name": "Alavés", "strength": 77, "shield": "https://tmssl.akamaized.net/images/wappen/head/1108.png", "league": "spain", "balance": 75000000, "stadium": "Mendizorroza", "stadiumImg": "https://loremflickr.com/600/200/stadium,vitoria"},
    {"id": "rayo", "name": "Rayo Vallecano", "strength": 77, "shield": "https://tmssl.akamaized.net/images/wappen/head/367.png", "league": "spain", "balance": 65000000, "stadium": "Vallecas", "stadiumImg": "https://loremflickr.com/600/200/stadium,madrid"},
    {"id": "espanyol", "name": "Espanyol", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/714.png", "league": "spain", "balance": 80000000, "stadium": "Stage Front Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "mallorca", "name": "Mallorca", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/237.png", "league": "spain", "balance": 85000000, "stadium": "Son Moix", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "elche", "name": "Elche", "strength": 75, "shield": "https://tmssl.akamaized.net/images/wappen/head/1531.png", "league": "spain", "balance": 55000000, "stadium": "Martínez Valero", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "realoviedo", "name": "Real Oviedo", "strength": 74, "shield": "https://tmssl.akamaized.net/images/wappen/head/238.png", "league": "spain", "balance": 40000000, "stadium": "Carlos Tartiere", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "levante", "name": "Levante", "strength": 76, "shield": "https://tmssl.akamaized.net/images/wappen/head/518.png", "league": "spain", "balance": 50000000, "stadium": "Ciutat de València", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "inter", "name": "Inter de Milão", "strength": 91, "shield": "https://tmssl.akamaized.net/images/wappen/head/46.png", "league": "italy", "balance": 560000000, "stadium": "San Siro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/San_Siro_stadium_Milan.jpg/600px-San_Siro_stadium_Milan.jpg"},
    {"id": "juventus", "name": "Juventus", "strength": 90, "shield": "https://tmssl.akamaized.net/images/wappen/head/506.png", "league": "italy", "balance": 640000000, "stadium": "Allianz Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Juventus_Stadium_panoramic.jpg/600px-Juventus_Stadium_panoramic.jpg"},
    {"id": "acmilan", "name": "AC Milan", "strength": 89, "shield": "https://tmssl.akamaized.net/images/wappen/head/5.png", "league": "italy", "balance": 600000000, "stadium": "San Siro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/San_Siro_stadium_Milan.jpg/600px-San_Siro_stadium_Milan.jpg"},
    {"id": "napoli", "name": "Napoli", "strength": 87, "shield": "https://tmssl.akamaized.net/images/wappen/head/6195.png", "league": "italy", "balance": 360000000, "stadium": "Diego Armando Maradona", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Stadio_San_Paolo_Napoli.jpg/600px-Stadio_San_Paolo_Napoli.jpg"},
    {"id": "roma", "name": "Roma", "strength": 86, "shield": "https://tmssl.akamaized.net/images/wappen/head/12.png", "league": "italy", "balance": 400000000, "stadium": "Olímpico de Roma", "stadiumImg": "https://loremflickr.com/600/200/stadium,rome"},
    {"id": "lazio", "name": "Lazio", "strength": 85, "shield": "https://tmssl.akamaized.net/images/wappen/head/398.png", "league": "italy", "balance": 320000000, "stadium": "Olímpico de Roma", "stadiumImg": "https://loremflickr.com/600/200/stadium,rome"},
    {"id": "atalanta", "name": "Atalanta", "strength": 86, "shield": "https://tmssl.akamaized.net/images/wappen/head/800.png", "league": "italy", "balance": 280000000, "stadium": "Gewiss Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium,bergamo"},
    {"id": "fiorentina", "name": "Fiorentina", "strength": 84, "shield": "https://tmssl.akamaized.net/images/wappen/head/430.png", "league": "italy", "balance": 250000000, "stadium": "Artemio Franchi", "stadiumImg": "https://loremflickr.com/600/200/stadium,florence"},
    {"id": "bologna", "name": "Bologna", "strength": 83, "shield": "https://tmssl.akamaized.net/images/wappen/head/1025.png", "league": "italy", "balance": 200000000, "stadium": "Dall'Ara", "stadiumImg": "https://loremflickr.com/600/200/stadium,bologna"},
    {"id": "torino", "name": "Torino", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/416.png", "league": "italy", "balance": 180000000, "stadium": "Stadio Grande Torino", "stadiumImg": "https://loremflickr.com/600/200/stadium,turin"},
    {"id": "monza", "name": "Monza", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/2919.png", "league": "italy", "balance": 150000000, "stadium": "Brianteo", "stadiumImg": "https://loremflickr.com/600/200/stadium,monza"},
    {"id": "lecce", "name": "Lecce", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/1005.png", "league": "italy", "balance": 120000000, "stadium": "Via del Mare", "stadiumImg": "https://loremflickr.com/600/200/stadium,lecce"},
    {"id": "genoa", "name": "Genoa", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/252.png", "league": "italy", "balance": 130000000, "stadium": "Luigi Ferraris", "stadiumImg": "https://loremflickr.com/600/200/stadium,genoa"},
    {"id": "como", "name": "Como", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/1047.png", "league": "italy", "balance": 160000000, "stadium": "Sinigaglia", "stadiumImg": "https://loremflickr.com/600/200/stadium,como"},
    {"id": "parma", "name": "Parma", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/130.png", "league": "italy", "balance": 140000000, "stadium": "Tardini", "stadiumImg": "https://loremflickr.com/600/200/stadium,parma"},
    {"id": "cagliari", "name": "Cagliari", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/1390.png", "league": "italy", "balance": 110000000, "stadium": "Unipol Domus", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "verona", "name": "Hellas Verona", "strength": 77, "shield": "https://tmssl.akamaized.net/images/wappen/head/276.png", "league": "italy", "balance": 90000000, "stadium": "Bentegodi", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "sassuolo", "name": "Sassuolo", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/6574.png", "league": "italy", "balance": 130000000, "stadium": "Mapei Stadium", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "cremonese", "name": "Cremonese", "strength": 74, "shield": "https://tmssl.akamaized.net/images/wappen/head/2239.png", "league": "italy", "balance": 60000000, "stadium": "Giovanni Zini", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "pisa", "name": "Pisa", "strength": 73, "shield": "https://tmssl.akamaized.net/images/wappen/head/1039.png", "league": "italy", "balance": 50000000, "stadium": "Arena Garibaldi", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "psg", "name": "Paris Saint-Germain", "strength": 95, "shield": "https://tmssl.akamaized.net/images/wappen/head/583.png", "league": "france", "balance": 1400000000, "stadium": "Parc des Princes", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Parc_des_Princes_interior.jpg/600px-Parc_des_Princes_interior.jpg"},
    {"id": "monaco", "name": "AS Monaco", "strength": 87, "shield": "https://tmssl.akamaized.net/images/wappen/head/162.png", "league": "france", "balance": 300000000, "stadium": "Stade Louis II", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Stade_Louis_II_-_Monaco.jpg/600px-Stade_Louis_II_-_Monaco.jpg"},
    {"id": "lyon", "name": "Olympique Lyonnais", "strength": 85, "shield": "https://tmssl.akamaized.net/images/wappen/head/1041.png", "league": "france", "balance": 240000000, "stadium": "Groupama Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Groupama_Stadium_-_Lyon.jpg/600px-Groupama_Stadium_-_Lyon.jpg"},
    {"id": "marseille", "name": "Marseille", "strength": 84, "shield": "https://tmssl.akamaized.net/images/wappen/head/244.png", "league": "france", "balance": 280000000, "stadium": "Vélodrome", "stadiumImg": "https://loremflickr.com/600/200/stadium,marseille"},
    {"id": "lille", "name": "Lille", "strength": 83, "shield": "https://tmssl.akamaized.net/images/wappen/head/1082.png", "league": "france", "balance": 200000000, "stadium": "Pierre Mauroy", "stadiumImg": "https://loremflickr.com/600/200/stadium,lille"},
    {"id": "rennes", "name": "Rennes", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/273.png", "league": "france", "balance": 180000000, "stadium": "Roazhon Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,rennes"},
    {"id": "nice", "name": "Nice", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/417.png", "league": "france", "balance": 220000000, "stadium": "Allianz Riviera", "stadiumImg": "https://loremflickr.com/600/200/stadium,nice"},
    {"id": "lens", "name": "Lens", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/826.png", "league": "france", "balance": 160000000, "stadium": "Bollaert-Delelis", "stadiumImg": "https://loremflickr.com/600/200/stadium,lens"},
    {"id": "strasbourg", "name": "Strasbourg", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/667.png", "league": "france", "balance": 140000000, "stadium": "La Meinau", "stadiumImg": "https://loremflickr.com/600/200/stadium,strasbourg"},
    {"id": "montpellier", "name": "Montpellier", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/969.png", "league": "france", "balance": 120000000, "stadium": "Stade de la Mosson", "stadiumImg": "https://loremflickr.com/600/200/stadium,montpellier"},
    {"id": "reims", "name": "Reims", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/1421.png", "league": "france", "balance": 130000000, "stadium": "Auguste-Delaune", "stadiumImg": "https://loremflickr.com/600/200/stadium,reims"},
    {"id": "nantes", "name": "Nantes", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/995.png", "league": "france", "balance": 110000000, "stadium": "Beaujoire", "stadiumImg": "https://loremflickr.com/600/200/stadium,nantes"},
    {"id": "toulouse", "name": "Toulouse", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/415.png", "league": "france", "balance": 100000000, "stadium": "Stadium de Toulouse", "stadiumImg": "https://loremflickr.com/600/200/stadium,toulouse"},
    {"id": "brest", "name": "Brest", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/39.png", "league": "france", "balance": 150000000, "stadium": "Francis-Le Blé", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "auxerre", "name": "Auxerre", "strength": 76, "shield": "https://tmssl.akamaized.net/images/wappen/head/290.png", "league": "france", "balance": 70000000, "stadium": "Abbé-Deschamps", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "lehavre", "name": "Le Havre", "strength": 75, "shield": "https://tmssl.akamaized.net/images/wappen/head/738.png", "league": "france", "balance": 65000000, "stadium": "Stade Océane", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "angers", "name": "Angers", "strength": 74, "shield": "https://tmssl.akamaized.net/images/wappen/head/1420.png", "league": "france", "balance": 60000000, "stadium": "Raymond Kopa", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "lorient", "name": "Lorient", "strength": 76, "shield": "https://tmssl.akamaized.net/images/wappen/head/1158.png", "league": "france", "balance": 80000000, "stadium": "Moustoir", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "bayern", "name": "Bayern de Munique", "strength": 91, "shield": "https://tmssl.akamaized.net/images/wappen/head/27.png", "league": "germany", "balance": 900000000, "stadium": "Allianz Arena", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allianz_Arena_stadium_Munich.jpg/600px-Allianz_Arena_stadium_Munich.jpg"},
    {"id": "leverkusen", "name": "Bayer Leverkusen", "strength": 88, "shield": "https://tmssl.akamaized.net/images/wappen/head/15.png", "league": "germany", "balance": 240000000, "stadium": "BayArena", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BayArena_Leverkusen_aerial.jpg/600px-BayArena_Leverkusen_aerial.jpg"},
    {"id": "dortmund", "name": "Borussia Dortmund", "strength": 87, "shield": "https://tmssl.akamaized.net/images/wappen/head/16.png", "league": "germany", "balance": 440000000, "stadium": "Signal Iduna Park", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Signal_Iduna_Park_Dortmund.jpg/600px-Signal_Iduna_Park_Dortmund.jpg"},
    {"id": "leipzig", "name": "RB Leipzig", "strength": 86, "shield": "https://tmssl.akamaized.net/images/wappen/head/23826.png", "league": "germany", "balance": 350000000, "stadium": "Red Bull Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium,leipzig"},
    {"id": "frankfurt", "name": "Eintracht Frankfurt", "strength": 82, "shield": "https://tmssl.akamaized.net/images/wappen/head/24.png", "league": "germany", "balance": 180000000, "stadium": "Deutsche Bank Park", "stadiumImg": "https://loremflickr.com/600/200/stadium,frankfurt"},
    {"id": "stuttgart", "name": "Stuttgart", "strength": 83, "shield": "https://tmssl.akamaized.net/images/wappen/head/79.png", "league": "germany", "balance": 160000000, "stadium": "MHPArena", "stadiumImg": "https://loremflickr.com/600/200/stadium,stuttgart"},
    {"id": "freiburg", "name": "Freiburg", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/60.png", "league": "germany", "balance": 140000000, "stadium": "Europa-Park Stadion", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "wolfsburg", "name": "Wolfsburg", "strength": 80, "shield": "https://tmssl.akamaized.net/images/wappen/head/82.png", "league": "germany", "balance": 170000000, "stadium": "Volkswagen Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "werderbremen", "name": "Werder Bremen", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/86.png", "league": "germany", "balance": 110000000, "stadium": "Weserstadion", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "monchengladbach", "name": "M'gladbach", "strength": 80, "shield": "https://tmssl.akamaized.net/images/wappen/head/18.png", "league": "germany", "balance": 130000000, "stadium": "Borussia-Park", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "hoffenheim", "name": "Hoffenheim", "strength": 81, "shield": "https://tmssl.akamaized.net/images/wappen/head/533.png", "league": "germany", "balance": 150000000, "stadium": "PreZero Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "augsburg", "name": "Augsburg", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/167.png", "league": "germany", "balance": 100000000, "stadium": "WWK Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "mainz", "name": "Mainz 05", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/39.png", "league": "germany", "balance": 90000000, "stadium": "Mewa Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "unionberlin", "name": "Union Berlin", "strength": 79, "shield": "https://tmssl.akamaized.net/images/wappen/head/89.png", "league": "germany", "balance": 110000000, "stadium": "An der Alten Försterei", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "heidenheim", "name": "Heidenheim", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/2036.png", "league": "germany", "balance": 80000000, "stadium": "Voith-Arena", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "stpauli", "name": "St. Pauli", "strength": 76, "shield": "https://tmssl.akamaized.net/images/wappen/head/35.png", "league": "germany", "balance": 70000000, "stadium": "Millerntor-Stadion", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "hamburg", "name": "Hamburger SV", "strength": 77, "shield": "https://tmssl.akamaized.net/images/wappen/head/41.png", "league": "germany", "balance": 120000000, "stadium": "Volksparkstadion", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "koeln", "name": "1. FC Köln", "strength": 78, "shield": "https://tmssl.akamaized.net/images/wappen/head/3.png", "league": "germany", "balance": 100000000, "stadium": "RheinEnergieStadion", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "sporting", "name": "Sporting CP", "strength": 89, "shield": "https://www.thesportsdb.com/images/media/team/badge/5hiuk71783137875.png", "league": "portugal", "balance": 320000000, "stadium": "Alvalade", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estadio_Alvalade_XXI.jpg/600px-Estadio_Alvalade_XXI.jpg"},
    {"id": "porto", "name": "FC Porto", "strength": 88, "shield": "https://r2.thesportsdb.com/images/media/team/badge/w8yspj1705225875.png", "league": "portugal", "balance": 240000000, "stadium": "Estádio do Dragão", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Est%C3%A1dio_do_Drag%C3%A3o_-_Porto.jpg/600px-Est%C3%A1dio_do_Drag%C3%A3o_-_Porto.jpg"},
    {"id": "benfica", "name": "SL Benfica", "strength": 89, "shield": "https://r2.thesportsdb.com/images/media/team/badge/hj4kyc1781152436.png", "league": "portugal", "balance": 360000000, "stadium": "Estádio da Luz", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Est%C3%A1dio_da_Luz_-_Lisboa.jpg/600px-Est%C3%A1dio_da_Luz_-_Lisboa.jpg"},
    {"id": "braga", "name": "SC Braga", "strength": 84, "shield": "https://r2.thesportsdb.com/images/media/team/badge/8g4aod1678717261.png", "league": "portugal", "balance": 180000000, "stadium": "Estádio Municipal", "stadiumImg": "https://loremflickr.com/600/200/stadium,braga"},
    {"id": "guimaraes", "name": "Vitória SC", "strength": 81, "shield": "https://r2.thesportsdb.com/images/media/team/badge/tysrrx1473538156.png", "league": "portugal", "balance": 100000000, "stadium": "D. Afonso Henriques", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "famalicao", "name": "Famalicão", "strength": 78, "shield": "https://r2.thesportsdb.com/images/media/team/badge/a3f4er1563653256.png", "league": "portugal", "balance": 80000000, "stadium": "Municipal 22 de Junho", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "moreirense", "name": "Moreirense", "strength": 76, "shield": "https://r2.thesportsdb.com/images/media/team/badge/yrquxu1471878153.png", "league": "portugal", "balance": 60000000, "stadium": "Comendador Joaquim de Almeida Freitas", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "arouca", "name": "Arouca", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/vgbzjq1628853833.png", "league": "portugal", "balance": 55000000, "stadium": "Municipal de Arouca", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "gilvicente", "name": "Gil Vicente", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/88bsg41626201503.png", "league": "portugal", "balance": 50000000, "stadium": "Cidade de Barcelos", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "rioave", "name": "Rio Ave", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/ngbklq1628851239.png", "league": "portugal", "balance": 55000000, "stadium": "Estádio dos Arcos", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "estoril", "name": "Estoril", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/lq9h8m1628854051.png", "league": "portugal", "balance": 45000000, "stadium": "António Coimbra da Mota", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "santaclara", "name": "Santa Clara", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/7337a61724860742.png", "league": "portugal", "balance": 50000000, "stadium": "São Miguel", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "nacional_portugal", "name": "Nacional", "strength": 73, "shield": "https://r2.thesportsdb.com/images/media/team/badge/fvg3s21649793329.png", "league": "portugal", "balance": 40000000, "stadium": "Estádio da Madeira", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "estrela", "name": "Estrela da Amadora", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/2tx5621626095555.png", "league": "portugal", "balance": 40000000, "stadium": "José Gomes", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "casapia", "name": "Casa Pia", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/d8ugsc1678717133.png", "league": "portugal", "balance": 42000000, "stadium": "Pina Manique", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "tondela", "name": "Tondela", "strength": 72, "shield": "https://r2.thesportsdb.com/images/media/team/badge/o7nqff1628856081.png", "league": "portugal", "balance": 35000000, "stadium": "João Cardoso", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "alverca", "name": "Alverca", "strength": 71, "shield": "https://r2.thesportsdb.com/images/media/team/badge/6ljryf1691990098.png", "league": "portugal", "balance": 30000000, "stadium": "FC Alverca", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "avs", "name": "AVS", "strength": 72, "shield": "https://r2.thesportsdb.com/images/media/team/badge/xp8oqb1688676544.png", "league": "portugal", "balance": 38000000, "stadium": "CD das Aves", "stadiumImg": "https://loremflickr.com/600/200/stadium"},
    {"id": "riverplate", "name": "River Plate", "strength": 85, "shield": "img/riverplate_v3.png", "league": "south_america", "balance": 60000000, "stadium": "Monumental de Núñez", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Estadio_Monumental_River_Plate_2023.jpg/600px-Estadio_Monumental_River_Plate_2023.jpg"},
    {"id": "bocajuniors", "name": "Boca Juniors", "strength": 83, "shield": "img/bocajuniors_v3.png", "league": "south_america", "balance": 56000000, "stadium": "La Bombonera", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/La_Bombonera_interior.jpg/600px-La_Bombonera_interior.jpg"},
    {"id": "racing", "name": "Racing Club", "strength": 80, "shield": "img/racing_v3.png", "league": "south_america", "balance": 30000000, "stadium": "El Cilindro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Estadio_Presidente_Per%C3%B3n_-_Racing_Club.jpg/600px-Estadio_Presidente_Per%C3%B3n_-_Racing_Club.jpg"},
    {"id": "penarol", "name": "Peñarol", "strength": 78, "shield": "img/penarol_v3.png", "league": "south_america", "balance": 20000000, "stadium": "Campeón del Siglo", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Estadio_Campe%C3%B3n_del_Siglo_interior.jpg/600px-Estadio_Campe%C3%B3n_del_Siglo_interior.jpg"},
    {"id": "nacional", "name": "Nacional", "strength": 77, "shield": "img/nacional_v3.png", "league": "south_america", "balance": 18000000, "stadium": "Gran Parque Central", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gran_Parque_Central_2021.jpg/600px-Gran_Parque_Central_2021.jpg"},
    {"id": "colocolo", "name": "Colo-Colo", "strength": 76, "shield": "img/colocolo_v3.png", "league": "south_america", "balance": 16000000, "stadium": "Monumental David Arellano", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Estadio_Monumental_David_Arellano.jpg/600px-Estadio_Monumental_David_Arellano.jpg"},
    {"id": "ldu", "name": "LDU Quito", "strength": 77, "shield": "img/ldu_v3.png", "league": "south_america", "balance": 14000000, "stadium": "Rodrigo Paz Delgado", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Estadio_Rodrigo_Paz_Delgado.jpg/600px-Estadio_Rodrigo_Paz_Delgado.jpg"},
    {"id": "independientedelvalle", "name": "Indep. del Valle", "strength": 78, "shield": "img/independientedelvalle_v3.png", "league": "south_america", "balance": 17000000, "stadium": "Banco Guayaquil", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Estadio_Banco_Guayaquil.jpg/600px-Estadio_Banco_Guayaquil.jpg"},
    {"id": "olimpia", "name": "Olimpia", "strength": 75, "shield": "img/olimpia_v3.png", "league": "south_america", "balance": 12000000, "stadium": "Defensores del Chaco", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Estadio_Defensores_del_Chaco.jpg/600px-Estadio_Defensores_del_Chaco.jpg"},
    {"id": "atleticonacional", "name": "Atlético Nacional", "strength": 76, "shield": "img/atleticonacional_v3.png", "league": "south_america", "balance": 15000000, "stadium": "Atanasio Girardot", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Estadio_Atanasio_Girardot_panoramica.jpg/600px-Estadio_Atanasio_Girardot_panoramica.jpg"},
    {"id": "talleres", "name": "Talleres", "strength": 79, "shield": "img/talleres_v3.png", "league": "south_america", "balance": 24000000, "stadium": "Mario Alberto Kempes", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Estadio_Mario_Alberto_Kempes_interior.jpg/600px-Estadio_Mario_Alberto_Kempes_interior.jpg"},
    {"id": "estudiantes", "name": "Estudiantes", "strength": 78, "shield": "img/estudiantes_v3.png", "league": "south_america", "balance": 20000000, "stadium": "Jorge Luis Hirschi", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Estadio_Jorge_Luis_Hirschi_interior.jpg/600px-Estadio_Jorge_Luis_Hirschi_interior.jpg"},
    {"id": "cerroporteno", "name": "Cerro Porteño", "strength": 75, "shield": "img/cerroporteno_v3.png", "league": "south_america", "balance": 16000000, "stadium": "General Pablo Rojas", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Estadio_General_Pablo_Rojas_Olla_Azulgrana.jpg/600px-Estadio_General_Pablo_Rojas_Olla_Azulgrana.jpg"},
    {"id": "libertad", "name": "Libertad", "strength": 76, "shield": "img/libertad_v3.png", "league": "south_america", "balance": 17000000, "stadium": "Tigo La Huerta", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Estadio_Dr._Nicol%C3%A1s_Leoz.jpg/600px-Estadio_Dr._Nicol%C3%A1s_Leoz.jpg"},
    {"id": "millonarios", "name": "Millonarios", "strength": 75, "shield": "img/millonarios_v3.png", "league": "south_america", "balance": 14000000, "stadium": "El Campín", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Estadio_El_Camp%C3%ADn_interior.jpg/600px-Estadio_El_Camp%C3%ADn_interior.jpg"},
    {"id": "junior", "name": "Junior Barranquilla", "strength": 76, "shield": "img/junior_v3.png", "league": "south_america", "balance": 16000000, "stadium": "Metropolitano Roberto Meléndez", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Estadio_Metropolitano_Roberto_Melendez.jpg/600px-Estadio_Metropolitano_Roberto_Melendez.jpg"},
    {"id": "barcelonasc", "name": "Barcelona SC", "strength": 77, "shield": "img/barcelonasc_v3.png", "league": "south_america", "balance": 18000000, "stadium": "Monumental Banco Pichincha", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Estadio_Monumental_Isidro_Romero_Carbo.jpg/600px-Estadio_Monumental_Isidro_Romero_Carbo.jpg"},
    {"id": "udechile", "name": "Univ. de Chile", "strength": 74, "shield": "img/udechile_v3.png", "league": "south_america", "balance": 12000000, "stadium": "Nacional de Chile", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Estadio_Nacional_de_Chile_interior.jpg/600px-Estadio_Nacional_de_Chile_interior.jpg"},
    {"id": "alianzalima", "name": "Alianza Lima", "strength": 73, "shield": "img/alianzalima_v3.png", "league": "south_america", "balance": 10000000, "stadium": "Alejandro Villanueva", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Estadio_Alejandro_Villanueva_panoramica.jpg/600px-Estadio_Alejandro_Villanueva_panoramica.jpg"},
    {"id": "sportingcristal", "name": "Sporting Cristal", "strength": 73, "shield": "img/sportingcristal_v3.png", "league": "south_america", "balance": 10000000, "stadium": "Alberto Gallardo", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Estadio_Alberto_Gallardo.jpg/600px-Estadio_Alberto_Gallardo.jpg"},
    {"id": "bolivar", "name": "Bolívar", "strength": 72, "shield": "img/bolivar_v3.png", "league": "south_america", "balance": 8000000, "stadium": "Hernando Siles", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Estadio_Hernando_Siles_La_Paz.jpg/600px-Estadio_Hernando_Siles_La_Paz.jpg"},
    {"id": "thestrongest", "name": "The Strongest", "strength": 71, "shield": "img/thestrongest_v3.png", "league": "south_america", "balance": 7000000, "stadium": "Hernando Siles", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Estadio_Hernando_Siles_La_Paz.jpg/600px-Estadio_Hernando_Siles_La_Paz.jpg"},
    {"id": "rosariocentral", "name": "Rosario Central", "strength": 77, "shield": "img/rosariocentral_v3.png", "league": "south_america", "balance": 18000000, "stadium": "Gigante de Arroyito", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Estadio_Gigante_de_Arroyito.jpg/600px-Estadio_Gigante_de_Arroyito.jpg"},
    {"id": "sanlorenzo", "name": "San Lorenzo", "strength": 78, "shield": "img/sanlorenzo_v3.png", "league": "south_america", "balance": 22000000, "stadium": "Nuevo Gasómetro", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Estadio_Pedro_Bidegain_interior.jpg/600px-Estadio_Pedro_Bidegain_interior.jpg"},
    {"id": "ucatolica", "name": "Univ. Católica", "strength": 75, "shield": "img/ucatolica_v3.png", "league": "south_america", "balance": 15000000, "stadium": "San Carlos de Apoquindo", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Estadio_San_Carlos_de_Apoquindo.jpg/600px-Estadio_San_Carlos_de_Apoquindo.jpg"},
    {"id": "independiente", "name": "Independiente", "strength": 79, "shield": "https://upload.wikimedia.org/wikipedia/commons/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg", "league": "south_america", "balance": 25000000, "stadium": "Libertadores de América", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Estadio_Libertadores_de_Am%C3%A9rica_-_Ricardo_Enrique_Bochini.jpg/600px-Estadio_Libertadores_de_Am%C3%A9rica_-_Ricardo_Enrique_Bochini.jpg"},
    {"id": "velez", "name": "Vélez Sarsfield", "strength": 78, "shield": "https://upload.wikimedia.org/wikipedia/commons/9/91/Club_Atl%C3%A9tico_V%C3%A9lez_Sarsfield_logo.svg", "league": "south_america", "balance": 20000000, "stadium": "José Amalfitani", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Estadio_Jos%C3%A9_Amalfitani.jpg/600px-Estadio_Jos%C3%A9_Amalfitani.jpg"},
    {"id": "emelec", "name": "Emelec", "strength": 76, "shield": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Escudo_de_Emelec.svg", "league": "south_america", "balance": 15000000, "stadium": "George Capwell", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Estadio_George_Capwell_-_Emelec.jpg/600px-Estadio_George_Capwell_-_Emelec.jpg"},
    {"id": "americadecali", "name": "América de Cali", "strength": 76, "shield": "https://upload.wikimedia.org/wikipedia/commons/4/41/Escudo_de_Am%C3%A9rica_de_Cali.svg", "league": "south_america", "balance": 14000000, "stadium": "Pascual Guerrero", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Estadio_Pascual_Guerrero.jpg/600px-Estadio_Pascual_Guerrero.jpg"},
    {"id": "universitario", "name": "Universitario", "strength": 75, "shield": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Universitario_de_Deportes_logo.svg", "league": "south_america", "balance": 12000000, "stadium": "Monumental U", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Estadio_Monumental_U.jpg/600px-Estadio_Monumental_U.jpg"},
    {"id": "tachira", "name": "Deportivo Táchira", "strength": 72, "shield": "https://upload.wikimedia.org/wikipedia/commons/3/36/Deportivo_T%C3%A1chira_logo.svg", "league": "south_america", "balance": 8000000, "stadium": "Pueblo Nuevo", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pueblo_Nuevo_Stadium.jpg/600px-Pueblo_Nuevo_Stadium.jpg"},
    {"id": "caracas", "name": "Caracas FC", "strength": 71, "shield": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Caracas_FC_logo.svg", "league": "south_america", "balance": 7000000, "stadium": "Olímpico UCV", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Estadio_Ol%C3%ADmpico_de_la_UCV.jpg/600px-Estadio_Ol%C3%ADmpico_de_la_UCV.jpg"},
    {"id": "wilstermann", "name": "Jorge Wilstermann", "strength": 71, "shield": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Club_Jorge_Wilstermann_logo.svg", "league": "south_america", "balance": 6000000, "stadium": "Félix Capriles", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Estadio_F%C3%A9lix_Capriles_Cochabamba.jpg/600px-Estadio_F%C3%A9lix_Capriles_Cochabamba.jpg"},
    {"id": "alhilal", "name": "Al Hilal", "strength": 84, "shield": "https://r2.thesportsdb.com/images/media/team/badge/5trzvq1660439102.png", "league": "arabia", "balance": 350000000, "stadium": "King Fahd Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/King_Fahd_International_Stadium.jpg/600px-King_Fahd_International_Stadium.jpg"},
    {"id": "alnassr", "name": "Al Nassr", "strength": 83, "shield": "https://r2.thesportsdb.com/images/media/team/badge/84yvqi1748524565.png", "league": "arabia", "balance": 300000000, "stadium": "Al-Awwal Park", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/King_Saud_University_Stadium.jpg/600px-King_Saud_University_Stadium.jpg"},
    {"id": "alittihad", "name": "Al Ittihad", "strength": 82, "shield": "https://r2.thesportsdb.com/images/media/team/badge/e5q6lh1745436268.png", "league": "arabia", "balance": 280000000, "stadium": "King Abdullah Sports City", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/King_Abdullah_Sports_City_-_Jeddah.jpg/600px-King_Abdullah_Sports_City_-_Jeddah.jpg"},
    {"id": "alahli", "name": "Al Ahli", "strength": 81, "shield": "https://r2.thesportsdb.com/images/media/team/badge/5jxyip1687165392.png", "league": "arabia", "balance": 250000000, "stadium": "Prince Abdullah Al Faisal", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Prince_Abdullah_Al-Faisal_Stadium_2.jpg/600px-Prince_Abdullah_Al-Faisal_Stadium_2.jpg"},
    {"id": "alshabab", "name": "Al Shabab", "strength": 78, "shield": "https://r2.thesportsdb.com/images/media/team/badge/x9pqf01618586414.png", "league": "arabia", "balance": 150000000, "stadium": "Prince Faisal bin Fahd", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Prince_Faisal_bin_Fahd_Stadium.jpg/600px-Prince_Faisal_bin_Fahd_Stadium.jpg"},
    {"id": "altaawoun", "name": "Al Taawoun", "strength": 76, "shield": "https://r2.thesportsdb.com/images/media/team/badge/rlsmp91646835052.png", "league": "arabia", "balance": 80000000, "stadium": "King Abdullah Sport City Stadium", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/King_Abdullah_Sport_City_Stadium_%28Buraidah%29.jpg/600px-King_Abdullah_Sport_City_Stadium_%28Buraidah%29.jpg"},
    {"id": "alettifaq", "name": "Al Ettifaq", "strength": 77, "shield": "https://r2.thesportsdb.com/images/media/team/badge/m272h51694761970.png", "league": "arabia", "balance": 100000000, "stadium": "Prince Mohamed bin Fahd", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Prince_Mohamed_bin_Fahd_Stadium.jpg/600px-Prince_Mohamed_bin_Fahd_Stadium.jpg"},
    {"id": "alfateh", "name": "Al Fateh", "strength": 75, "shield": "https://r2.thesportsdb.com/images/media/team/badge/a5cjf41662659789.png", "league": "arabia", "balance": 70000000, "stadium": "Prince Abdullah bin Jalawi", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Prince_Abdullah_bin_Jalawi_Stadium.jpg/600px-Prince_Abdullah_bin_Jalawi_Stadium.jpg"},
    {"id": "alfayha", "name": "Al Fayha", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/jl3spp1677530565.png", "league": "arabia", "balance": 60000000, "stadium": "Al Majma'ah Sports City", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Al_Majma%27ah_Sports_City.jpg/600px-Al_Majma%27ah_Sports_City.jpg"},
    {"id": "damac", "name": "Damac", "strength": 74, "shield": "https://r2.thesportsdb.com/images/media/team/badge/z2l4w31677530963.png", "league": "arabia", "balance": 65000000, "stadium": "Prince Sultan bin Abdul Aziz", "stadiumImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prince_Sultan_bin_Abdul_Aziz_Stadium.jpg/600px-Prince_Sultan_bin_Abdul_Aziz_Stadium.jpg"},
    {id: "intermiamicf", name: "Inter Miami CF", strength: 78, shield: "https://r2.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png", league: "mls", balance: 60000000, stadium: "Chase Stadium", stadiumImg: "img/estadio.jpg"},
    {id: "columbuscrew", name: "Columbus Crew", strength: 76, shield: "https://r2.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png", league: "mls", balance: 60000000, stadium: "Lower.com Field", stadiumImg: "img/estadio.jpg"},
    {id: "losangelesfc", name: "Los Angeles FC", strength: 76, shield: "https://r2.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png", league: "mls", balance: 60000000, stadium: "BMO Stadium", stadiumImg: "img/estadio.jpg"},
    {id: "lagalaxy", name: "LA Galaxy", strength: 76, shield: "https://r2.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png", league: "mls", balance: 60000000, stadium: "Dignity Health Sports Park", stadiumImg: "img/estadio.jpg"},
    {id: "nashvillesc", name: "Nashville SC", strength: 73, shield: "https://r2.thesportsdb.com/images/media/team/badge/znrwt71602103062.png", league: "mls", balance: 60000000, stadium: "GEODIS Park", stadiumImg: "img/estadio.jpg"},
    {id: "charlottefc", name: "Charlotte FC", strength: 74, shield: "https://r2.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png", league: "mls", balance: 60000000, stadium: "Bank of America Stadium", stadiumImg: "img/estadio.jpg"},
    {id: "fccincinnati", name: "FC Cincinnati", strength: 75, shield: "https://r2.thesportsdb.com/images/media/team/badge/vvhsqc1707631046.png", league: "mls", balance: 60000000, stadium: "TQL Stadium", stadiumImg: "img/estadio.jpg"},
    {id: "seattlesoundersfc", name: "Seattle Sounders FC", strength: 74, shield: "https://r2.thesportsdb.com/images/media/team/badge/7em1q51580480820.png", league: "mls", balance: 60000000, stadium: "Lumen Field", stadiumImg: "img/estadio.jpg"},
    {id: "newyorkredbulls", name: "New York Red Bulls", strength: 73, shield: "https://r2.thesportsdb.com/images/media/team/badge/suytvy1473536462.png", league: "mls", balance: 60000000, stadium: "Red Bull Arena", stadiumImg: "img/estadio.jpg"},
    {id: "orlandocitysc", name: "Orlando City SC", strength: 74, shield: "https://r2.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png", league: "mls", balance: 60000000, stadium: "Inter&Co Stadium", stadiumImg: "img/estadio.jpg"}
];

if (typeof restWorldTeams !== 'undefined') {
    teamsData.push(...restWorldTeams);
}
if (typeof realSquads !== 'undefined' && typeof restWorldRealSquads !== 'undefined') {
    Object.assign(realSquads, restWorldRealSquads);
}

// --- Sistema de Som ---
// Usa crossOrigin quando possível e pré-carrega com fallback
const sfx = {
    goal: new Audio('https://www.soundjay.com/misc/sounds/cheering-01.mp3'),
    whistle: new Audio('https://www.soundjay.com/misc/sounds/referee-whistle-01.mp3'),
    crowd: new Audio('https://www.soundjay.com/misc/sounds/crowd-cheer-02.mp3')
};

function _prepareAudioObjects() {
    Object.values(sfx).forEach(sound => {
        try {
            // Alguns browsers toleram definir crossOrigin para Audio
            if ('crossOrigin' in sound) sound.crossOrigin = 'anonymous';
            sound.preload = 'auto';
        } catch (e) {
            // silent
        }
    });
}
_prepareAudioObjects();

function playSFX(name) {
    if (!window.soundEnabled) return; // Respeita preferência do usuário
    if (sfx[name]) {
        sfx[name].currentTime = 0;
        sfx[name].play().catch(e => console.warn(`Som '${name}' bloqueado ou falhou:`, e));
    }
}

// Inicializar preferências e UI quando a página carregar
window.addEventListener('load', function() {
    try { loadSoundPreference(); } catch (e) { console.warn('Erro ao carregar preferências:', e); }
});

// Pré-carrega escudos locais (se existirem) e aplica fallback quando necessário
function preloadTeamImages() {
    if (!Array.isArray(teamsData)) return;
    teamsData.forEach(t => {
        if (!t || !t.shield) return;
        try {
            const img = new Image();
            img.onload = function() {};
            img.onerror = function() {
                if (t.shield && t.shield.startsWith('img/')) {
                    t.shield = 'https://placehold.co/80x80/ffffff/000000?text=?';
                }
            };
            img.src = t.shield;
        } catch (e) {}
    });
}

window.addEventListener('load', function() { preloadTeamImages(); });

// Função para desbloquear áudio em navegadores (chamada no login)
function unlockAudio() {
    try {
        Object.values(sfx).forEach(sound => {
            sound.load(); // Força o carregamento do recurso
            sound.play().then(() => {
                sound.pause();
                sound.currentTime = 0;
            }).catch(e => console.log("Pré-carregamento de áudio:", e));
        });
    } catch (e) {
        console.warn("Erro ao desbloquear áudio:", e);
    }
}

// --- Helpers para normalizar ponteiros (mouse/touch) em UI escalada ---
// Esta versão detecta mobile vs desktop e devolve coordenadas no espaço do "design".
function getScaledPointerPos(evt, container = document.body, designWidth = 1280, designHeight = 720) {
    const rect = (typeof container === 'string') ? document.querySelector(container).getBoundingClientRect() : container.getBoundingClientRect();
    const winW = window.innerWidth;
    const isMobile = winW <= 768;

    const clientX = (evt.touches && evt.touches[0]) ? evt.touches[0].clientX : evt.clientX;
    const clientY = (evt.touches && evt.touches[0]) ? evt.touches[0].clientY : evt.clientY;

    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    if (isMobile) {
        // Em mobile usamos coordenadas relativas ao container sem escala forçada
        return { x: Math.round(offsetX), y: Math.round(offsetY), scale: 1 };
    }

    const scaleX = rect.width / designWidth;
    const scaleY = rect.height / designHeight;
    const scale = Math.min(scaleX, scaleY) || 1;

    // Mapeia para o espaço do design
    const x = Math.round(offsetX / scale);
    const y = Math.round(offsetY / scale);
    return { x, y, scale };
}

// Emite um evento custom 'gamepointerdown' com coordenadas escaladas para quem quiser usar
document.addEventListener('pointerdown', (e) => {
    try {
        const scaled = getScaledPointerPos(e, document.body);
        // adiciona campos úteis ao evento original (não-padrão, mas prático)
        try { e.scaledX = scaled.x; e.scaledY = scaled.y; } catch (er) {}
        const ev = new CustomEvent('gamepointerdown', { detail: { scaledX: scaled.x, scaledY: scaled.y, scale: scaled.scale, originalEvent: e } });
        // dispatch no elemento alvo para compatibilidade com handlers locais
        e.target.dispatchEvent(ev);
    } catch (err) {
        // não obstrui o evento original
    }
}, { passive: true });

// --- Escala responsiva para garantir aspecto consistente entre PC e Web ---
function scaleAppContainer(designWidth = 1280, designHeight = 720) {
    const el = document.querySelector('.app-container');
    if (!el) return;
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const isMobile = winW <= 768;

    if (isMobile) {
        // Em mobile removemos escala forçada e usamos layout responsivo
        el.style.transform = '';
        el.style.marginLeft = '';
        document.body.classList.add('is-mobile');
        document.body.classList.remove('is-desktop');
        // garante que container ocupe largura total em mobile
        el.style.maxWidth = '100%';
        el.style.padding = '2vh 4vw';
        return;
    }

    // Desktop: mantemos o comportamento de escala para preservar aspecto
    const scale = Math.min(winW / designWidth, winH / designHeight);
    el.style.transformOrigin = 'top left';
    el.style.transform = `scale(${scale})`;
    // Ajusta espaço para manter centralizado
    const scaledW = designWidth * scale;
    el.style.marginLeft = `${Math.max(0, (winW - scaledW) / 2)}px`;
    el.style.maxWidth = `${designWidth}px`;
    document.body.classList.remove('is-mobile');
    document.body.classList.add('is-desktop');
}

window.addEventListener('resize', () => scaleAppContainer());
window.addEventListener('load', () => scaleAppContainer());

let myTeam = null;
let lastRoundResults = [];
let currentRound = 1;
let matchSchedule = [];
let standings = [];
// allTeams é preenchido pelo loadGame() usando teamsData (que contém TODOS os times: Brasil, Europa, MLS, etc.)
let allTeams = [];
let cupBracket = []; 
let isCupMode = false;
let libertadoresPhase = 'groups'; // 'groups' ou 'knockout'
let libertadoresGroups = [];
let libertadoresGroupStandings = [];
let libertadoresBracket = [];
let isLibertadoresMode = false;
let libertadoresParticipants = []; // Armazena quem se classificou para a próxima Liberta
let sulAmericanaBracket = [];
let isSulAmericanaMode = false;
let sulAmericanaParticipants = [];
let sulAmericanaPhase = 'groups';
let sulAmericanaGroups = [];
let sulAmericanaGroupStandings = [];
let intercontinentalBracket = [];
let isIntercontinentalMode = false;
let cupWinnerId = null;
let cupRunnerUpId = null;
let libertadoresWinnerId = null;
let sulamericanaWinnerId = null;
let cupFinished = false;
let databaseVersion = "2026-07-12-v1";
let currentYear = 2026;
// Som: preferência do usuário
let hallOfFameData = { titles: [], topScorers: [], legends: [] };
let newsFeedItems = [];
window.soundEnabled = true;

function loadSoundPreference() {
    try {
        const pref = localStorage.getItem('brasfoot_sound_enabled');
        if (pref !== null) {
            window.soundEnabled = pref === 'true';
        }
    } catch (e) {
        console.warn('Não foi possível carregar preferência de som:', e);
    }
    updateSoundButtonUI && updateSoundButtonUI();
}

function toggleSound() {
    window.soundEnabled = !window.soundEnabled;
    try { localStorage.setItem('brasfoot_sound_enabled', window.soundEnabled); } catch(e){}
    updateSoundButtonUI();
}

function updateSoundButtonUI() {
    const btn = document.getElementById('btn-sound-toggle');
    if (!btn) return;
    btn.innerHTML = window.soundEnabled ? '<i class="fas fa-volume-up"></i> Som: ON' : '<i class="fas fa-volume-mute"></i> Som: OFF';
    btn.style.opacity = window.soundEnabled ? '1' : '0.6';
}

// Lógica de Usuários e Persistência
let currentUser = null;
let users = (function() {
    try {
        const saved = localStorage.getItem('brasfoot_users');
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        console.error("Erro ao carregar usuários:", e);
        return {};
    }
})();

let isRegisterMode = false;

function toggleLoginMode(e) {
    if (e) e.preventDefault();
    console.log("Toggling login/register mode.");
    isRegisterMode = !isRegisterMode;
    document.getElementById('login-title').innerText = isRegisterMode ? 'Criar Conta' : 'Entrar';
    document.getElementById('btn-login-action').innerHTML = isRegisterMode ? '<i class="fas fa-user-plus"></i> Cadastrar' : '<i class="fas fa-sign-in-alt"></i> Entrar';
    document.getElementById('toggle-link').innerText = isRegisterMode ? 'Já tenho conta' : 'Criar conta';
    document.getElementById('user-list-container').style.display = isRegisterMode ? 'none' : 'block';
}

function bypassLogin() {
    console.log("Bypass login activated.");
    unlockAudio();
    const bypassUser = "treinador";
    if (!users[bypassUser]) {
        users[bypassUser] = {
            password: "123", // Senha padrão para o bypass
            gameState: null
        };
    }
    currentUser = bypassUser;
    loadGame();
    renderUserList();
    alert("Login ignorado. Entrando com o usuário 'Treinador'.");
}

function handleLogin(event) {
    if (event) event.preventDefault(); // Previne o recarregamento da página
    console.log("handleLogin: Iniciando...");
    unlockAudio();
    const userInput = document.getElementById('login-username').value;
    const user = userInput ? userInput.trim().toLowerCase() : "";
    const passwordInput = document.getElementById('login-password').value;
    const password = passwordInput ? passwordInput.trim() : "";

    if (!user) {
        return alert("Por favor, digite seu nome de usuário");
    }
    if (!password) {
        return alert("Por favor, digite sua senha");
    }

    if (!users || typeof users !== 'object') {
        users = {};
    }

    try {
        if (isRegisterMode) {
            // --- MODO REGISTRO ---
            if (users[user]) {
                return alert("Este usuário já existe. Tente outro nome ou faça login.");
            }
            
            // Cria a conta do usuário associando a senha informada
            users[user] = { 
                password: password,
                gameState: null 
            };
            try {
                localStorage.setItem('brasfoot_users', JSON.stringify(users));
            } catch (e) {
                console.warn("localStorage indisponível. Usando sessão em memória.", e);
            }
            alert("Conta criada com sucesso! Entrando...");
            
            currentUser = user;
            loadGame(); // Carrega o novo jogo (vai para a seleção de time)
            renderUserList();

        } else {
            // --- MODO LOGIN ---
            if (!users[user]) {
                return alert("Usuário não encontrado. Se é sua primeira vez, clique em 'Criar conta'.");
            }
            
            const savedPassword = users[user].password;
            
            // Se for uma conta legada sem senha, define a senha digitada como a senha dessa conta
            if (savedPassword === undefined) {
                users[user].password = password;
                try {
                    localStorage.setItem('brasfoot_users', JSON.stringify(users));
                } catch (e) {
                    console.warn("localStorage indisponível. Usando sessão em memória.", e);
                }
                alert("Senha cadastrada com sucesso para este usuário antigo!");
            } else if (savedPassword !== password) {
                return alert("Senha incorreta. Tente novamente.");
            }
            
            currentUser = user;
            loadGame(); // Carrega o jogo salvo ou inicia um novo
            renderUserList();
        }
    } catch (e) {
        console.error("Erro fatal no login/carregamento:", e);
        alert("Erro nos dados salvos. Iniciando uma nova carreira para este usuário.");
        if (users[user]) {
            users[user].gameState = null;
            try {
                localStorage.setItem('brasfoot_users', JSON.stringify(users));
            } catch (lsError) {
                console.warn("localStorage indisponível. Usando sessão em memória.", lsError);
            }
        }
        // Tenta carregar de novo, que vai iniciar um novo jogo
        loadGame(); 
    }
}

function logout() {
    saveGame();
    currentUser = null;
    isRegisterMode = false;
    
    // Limpar os campos do formulário de login
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';

    // Resetar UI do login
    document.getElementById('login-title').innerText = 'Entrar';
    document.getElementById('btn-login-action').innerHTML = '<i class="fas fa-sign-in-alt"></i> Entrar';
    document.getElementById('toggle-link').innerText = 'Criar conta';
    document.getElementById('user-list-container').style.display = 'block';
    
    showScreen('screen-login');
    renderUserList();
    updateDynamicBackground(null);
}

function saveGame() {
    if (!currentUser) return;
    users[currentUser].gameState = {
        databaseVersion,
        currentYear,
        myTeamId: myTeam ? myTeam.id : null,
        currentRound,
        lastRoundResults,
        matchSchedule,
        standings,
        allTeams,
        isCupMode,
        cupBracket,
        cupFinished,
        cupWinnerId,
        cupRunnerUpId,
        libertadoresWinnerId,
        sulamericanaWinnerId,
        libertadoresPhase,
        libertadoresBracket,
        libertadoresGroups,
        libertadoresGroupStandings,
        isLibertadoresMode,
        libertadoresParticipants,
        sulAmericanaBracket,
        isSulAmericanaMode,
        sulAmericanaParticipants,
        sulAmericanaPhase,
        sulAmericanaGroups,
        sulAmericanaGroupStandings,
        intercontinentalBracket,
        isIntercontinentalMode
    };
    try {
        localStorage.setItem('brasfoot_users', JSON.stringify(users));
    } catch (e) {
        console.error("Erro ao salvar no localStorage (espaço insuficiente?):", e);
    }
}

function manualSave() {
    saveGame();
    alert("Jogo salvo com sucesso! Você pode continuar de onde parou na próxima vez que entrar.");
}

function confirmReset() {
    if (confirm("Deseja realmente apagar seu progresso atual e voltar para a seleção de times? Isso resetará todos os elencos para o estado original.")) {
        if (currentUser && users[currentUser]) {
            users[currentUser].gameState = null; // Limpa o save do usuário
            try {
                localStorage.setItem('brasfoot_users', JSON.stringify(users));
            } catch (e) {
                console.warn("localStorage indisponível. Usando sessão em memória.", e);
            }
            myTeam = null; // Reseta o time atual na memória
            loadGame(); // Recarrega, e como o gameState é null, vai para a seleção
        }
    }
}

function ensureSafeState(team, forceReset = false) {
    const defaultState = {
        balance: 80000000,
        stadiumLevel: 1, 
        stadiumCapacity: 10000 + (team.rep || 10) * 1000, 
        ticketPriceSetting: 'Medium',
        medicalDeptLevel: 1, // IDEIA 18: Nível do Departamento Médico
        commerceLevel: { bars: 0, food: 0, gourmet: 0 },
        sponsorships: { Master: null, Costas: null, Mangas: null, Calcoes: null, propostas: [] },
        academyLevel: 1,
        consecutiveLosses: 0,
        plantelJuniores: []
    };

    if (forceReset || isNaN(team.balance) || team.balance == null) team.balance = defaultState.balance;
    if (forceReset || isNaN(team.stadiumLevel) || team.stadiumLevel == null) team.stadiumLevel = defaultState.stadiumLevel;
    if (forceReset || isNaN(team.stadiumCapacity) || team.stadiumCapacity == null) team.stadiumCapacity = defaultState.stadiumCapacity;
    if (forceReset || !team.ticketPriceSetting) team.ticketPriceSetting = defaultState.ticketPriceSetting;
    if (forceReset || isNaN(team.medicalDeptLevel) || team.medicalDeptLevel == null) team.medicalDeptLevel = defaultState.medicalDeptLevel;
    
    if (forceReset || !team.commerceLevel || isNaN(team.commerceLevel.bars) || isNaN(team.commerceLevel.food) || isNaN(team.commerceLevel.gourmet)) {
        // Objeto novo para evitar partilha de referência
        team.commerceLevel = { bars: 0, food: 0, gourmet: 0 };
    }
    
    if (forceReset || !team.sponsorships) {
        // IMPORTANTE: sempre criar um objeto NOVO para evitar partilha de referência entre times
        team.sponsorships = { Master: null, Costas: null, Mangas: null, Calcoes: null, propostas: [] };
    } else {
        if (!team.sponsorships.propostas) team.sponsorships.propostas = [];
        if (team.sponsorships.Master === undefined) team.sponsorships.Master = null;
        if (team.sponsorships.Costas === undefined) team.sponsorships.Costas = null;
        if (team.sponsorships.Mangas === undefined) team.sponsorships.Mangas = null;
        if (team.sponsorships.Calcoes === undefined) team.sponsorships.Calcoes = null;
    }
    
    if (forceReset || isNaN(team.academyLevel) || team.academyLevel == null) team.academyLevel = defaultState.academyLevel;
    if (forceReset || isNaN(team.consecutiveLosses) || team.consecutiveLosses == null) team.consecutiveLosses = defaultState.consecutiveLosses;
    if (forceReset || isNaN(team.boardConfidence) || team.boardConfidence == null) team.boardConfidence = 80;
    if (forceReset || !team.hallOfFame) team.hallOfFame = defaultState.hallOfFame;

    if (team.squad) {
        team.squad.forEach(p => {
            if (forceReset || isNaN(p.energy) || p.energy == null) p.energy = 100;
            if (forceReset || isNaN(p.morale) || p.morale == null) p.morale = 100;
            if (forceReset || isNaN(p.age) || p.age == null) p.age = getConsistentAge(p.name);
            p.salario = calculateSalary(p);
        });
    }
    
    if (forceReset || !team.plantelJuniores) team.plantelJuniores = [];
}

function calculateSalary(player) {
    if (!player) return 0;
    const base = 500;
    const strengthFactor = Math.pow(player.strength || 60, 1.5);
    
    // Fator de idade: pico de salário entre 27-30 anos
    const age = player.age || 25;
    let ageFactor = 1.0;
    if (age >= 24 && age <= 26) ageFactor = 1.2;
    else if (age >= 27 && age <= 30) ageFactor = 1.4;
    else if (age > 30) ageFactor = 1.1 - ((age - 30) * 0.05);
    
    return Math.round((base + strengthFactor) * ageFactor);
}

// Gera uma idade consistente com base no nome do jogador (seed pseudo-aleatória)
function getConsistentAge(name) {
    if (!name) return Math.floor(Math.random() * (35 - 18 + 1)) + 18;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seed = Math.abs(hash);
    return 18 + (seed % 18); // 18 a 35
}

function emergencyReset() {
    if (confirm("Tem a certeza absoluta? Vai perder os dados das finanças, patrocínios e voltar aos valores base. Os resultados do campeonato manter-se-ão.")) {
        if (myTeam) {
            ensureSafeState(myTeam, true);
            saveGame();
            location.reload();
        }
    }
}

function loadGame() {
    if (!currentUser || !users[currentUser]) return;
    console.log("loadGame: Iniciando para usuário:", currentUser);
    
    const state = users[currentUser].gameState;
    
    if (state && state.myTeamId && state.allTeams && state.allTeams.length > 0) {
        allTeams = state.allTeams;
        
        // Verifica a versão da base de dados local. Se for antiga (legacy) ou incompatível, força atualização dos elencos da CPU e restaura clubes ausentes
        const savedDbVersion = state.databaseVersion || "legacy";
        const targetDbVersion = "2026-07-22-v4";
        
        databaseVersion = targetDbVersion; // Atualiza a variável global
        currentYear = state.currentYear || 2026; // Carrega o ano ou 2026 como default
        
        myTeam = allTeams.find(t => t.id === state.myTeamId);
        
        if (!myTeam) {
            users[currentUser].gameState = null;
            loadGame();
            return;
        }

        if (savedDbVersion !== targetDbVersion) {
            console.log("Migrando elencos do banco de dados antigo e restaurando ligas ausentes:", savedDbVersion);
            
            // 1. Restaurar times ausentes (deletados por otimização de RAM) a partir de teamsData
            const existingTeamIds = new Set(allTeams.map(t => t.id));
            const teamsDataRaw = JSON.parse(JSON.stringify(teamsData));
            
            teamsDataRaw.forEach(teamData => {
                if (!existingTeamIds.has(teamData.id)) {
                    const newTeam = { ...teamData };
                    newTeam.squad = [];
                    ensureSafeState(newTeam);
                    allTeams.push(newTeam);
                    existingTeamIds.add(newTeam.id);
                }
            });

            const migrationPlayerNames = new Set();
            
            // Registra os nomes do time do usuário ativo para não serem duplicados nas CPUs
            if (myTeam && myTeam.squad) {
                myTeam.squad.forEach(p => {
                    migrationPlayerNames.add(p.name.trim().toLowerCase());
                });
            }
            
            // Se o usuário estiver na rodada 1, re-sincroniza também o time dele primeiro para não perder os jogadores do usuário para a CPU
            if (state.currentRound === 1 && typeof realSquads !== 'undefined' && realSquads[myTeam.id]) {
                let playerIdCounter = 20000;
                const userUnique = [];
                realSquads[myTeam.id].players.forEach(p => {
                    const normalized = p.name.trim().toLowerCase();
                    if (!migrationPlayerNames.has(normalized)) {
                        migrationPlayerNames.add(normalized);
                        userUnique.push(p);
                    }
                });
                myTeam.squad = userUnique.map((p, index) => ({
                    id: playerIdCounter++,
                    name: p.name,
                    position: p.pos,
                    strength: p.str,
                    energy: 100,
                    goals: 0,
                    assists: 0,
                    yellowCards: 0,
                    suspensionRounds: 0,
                    injuryRounds: 0,
                    redCardInMatch: false,
                    isStarter: index < 11
                }));
                myTeam.formation = realSquads[myTeam.id].formation;
            }

            allTeams.forEach(team => {
                if (team.id !== myTeam.id) {
                    if (typeof realSquads !== 'undefined' && realSquads[team.id]) {
                        let playerIdCounter = 10000 + Math.floor(Math.random() * 10000);
                        const uniqueCpu = [];
                        realSquads[team.id].players.forEach(p => {
                            const normalized = p.name.trim().toLowerCase();
                            if (!migrationPlayerNames.has(normalized)) {
                                migrationPlayerNames.add(normalized);
                                uniqueCpu.push(p);
                            }
                        });
                        team.squad = uniqueCpu.map((p, index) => ({
                            id: playerIdCounter++,
                            name: p.name,
                            position: p.pos,
                            strength: p.str,
                            energy: 100,
                            goals: 0,
                            assists: 0,
                            yellowCards: 0,
                            suspensionRounds: 0,
                            injuryRounds: 0,
                            redCardInMatch: false,
                    isStarter: index < 11,
                    allTimeStats: { goals: 0, assists: 0, matches: 0 }
                        }));
                        team.formation = realSquads[team.id].formation;
                    }
                }
            });

            // Garante que nenhum time CPU fique sem elenco mínimo de 18 jogadores
            allTeams.forEach(team => {
                if (team.id !== myTeam.id && (!team.squad || team.squad.length < 18)) {
                    const existingPlayers = team.squad || [];
                    const neededPlayers = 18 - existingPlayers.length;
                    const genericPositions = ['GOL', 'ZAG', 'ZAG', 'LAT', 'LAT', 'MEI', 'MEI', 'MEI', 'ATA', 'ATA', 'ATA', 'GOL', 'ZAG', 'LAT', 'MEI', 'MEI', 'ATA', 'ATA'];
                    let playerIdCounter = 40000 + Math.floor(Math.random() * 10000);
                    for (let i = 0; i < neededPlayers; i++) {
                        const pos = genericPositions[existingPlayers.length + i] || 'MEI';
                        existingPlayers.push({
                            id: playerIdCounter++,
                            name: `Jogador ${existingPlayers.length + i + 1} ${team.name.split(' ')[0]}`,
                            position: pos,
                            strength: Math.round(team.strength - 5 + Math.random() * 10),
                            energy: 100, goals: 0, assists: 0, yellowCards: 0, suspensionRounds: 0, redCardInMatch: false,
                            isStarter: existingPlayers.length + i < 11,
                            age: getConsistentAge(`Jogador ${existingPlayers.length + i + 1} ${team.name.split(' ')[0]}`),
                            matchesPlayed: 0
                        });
                    }
                    team.squad = existingPlayers;
                    team.formation = team.formation || '4-3-3';
                }
            });
            saveGame();
        }
        
        // Migração de dados e desduplicação retroativa de elencos para saves existentes
        const seenNormalizedNames = new Set();
        allTeams.forEach(team => {
            if (team.squad) {
                const seenIds = new Set();
                team.squad = team.squad.filter(p => {
                    if (!p || !p.id || !p.name || seenIds.has(p.id)) return false;
                    
                    const normalizedName = p.name.trim().toLowerCase();
                    // Garante que o mesmo jogador não esteja em duas equipes
                    if (seenNormalizedNames.has(normalizedName)) {
                        console.warn(`[EXCLUSIVIDADE SAVE] Removendo duplicado retroativo: ${p.name} do time ${team.name}`);
                        return false;
                    }
                    
                    seenIds.add(p.id);
                    seenNormalizedNames.add(normalizedName);
                    return true;
                });
                team.squad.forEach(p => {
                    if (p.injuryRounds === undefined || p.injuryRounds === null) p.injuryRounds = 0;
                    if (p.suspensionRounds === undefined || p.suspensionRounds === null) p.suspensionRounds = 0;
                    if (p.energy === undefined || p.energy === null) p.energy = 100;
                    if (p.yellowCards === undefined || p.yellowCards === null) p.yellowCards = 0;
                    if (p.age === undefined || p.age === null) p.age = getConsistentAge(p.name);
                    if (p.matchesPlayed === undefined || p.matchesPlayed === null) p.matchesPlayed = 0;
                    if (p.salario === undefined || p.salario === null) p.salario = calculateSalary(p);
                });
            }
            
            ensureSafeState(team);
        });
        
        myTeam = allTeams.find(t => t.id === state.myTeamId);

    // Gera primeira fornada de base se o time não tiver NENHUM jovem
    if (myTeam && (!myTeam.plantelJuniores || myTeam.plantelJuniores.length === 0)) {
        generateYouthIntake(myTeam);
    }


        if (!myTeam) {
            users[currentUser].gameState = null;
            loadGame();
            return;
        }

        currentRound = state.currentRound;
        lastRoundResults = state.lastRoundResults || [];
        matchSchedule = state.matchSchedule;
        standings = state.standings;
        isCupMode = state.isCupMode || false;
        cupBracket = state.cupBracket || []; 
        libertadoresPhase = state.libertadoresPhase || 'groups';
        libertadoresGroups = state.libertadoresGroups || [];
        libertadoresGroupStandings = state.libertadoresGroupStandings || [];
        libertadoresBracket = state.libertadoresBracket || [];
        libertadoresParticipants = state.libertadoresParticipants || [];
        // Correção retroativa do bug de participantes vazios
        if (libertadoresParticipants.length === 0 && libertadoresGroups.length > 0) {
            const listIds = [];
            libertadoresGroups.forEach(g => listIds.push(...g.teams));
            libertadoresParticipants = listIds;
            console.log("[BUG FIX LIBERTADORES] Reconstruídos participantes a partir dos grupos:", libertadoresParticipants);
        }
        
        isLibertadoresMode = state.isLibertadoresMode || false;
        sulAmericanaBracket = state.sulAmericanaBracket || [];
        isSulAmericanaMode = state.isSulAmericanaMode || false;
        sulAmericanaParticipants = state.sulAmericanaParticipants || [];
        sulAmericanaPhase = state.sulAmericanaPhase || 'groups';
        sulAmericanaGroups = state.sulAmericanaGroups || [];
        sulAmericanaGroupStandings = state.sulAmericanaGroupStandings || [];
        // Correção retroativa do bug de participantes vazios
        if (sulAmericanaParticipants.length === 0 && sulAmericanaGroups.length > 0) {
            const listIds = [];
            sulAmericanaGroups.forEach(g => listIds.push(...g.teams));
            sulAmericanaParticipants = listIds;
            console.log("[BUG FIX SULAMERICANA] Reconstruídos participantes a partir dos grupos:", sulAmericanaParticipants);
        }
        
        intercontinentalBracket = state.intercontinentalBracket || [];
        isIntercontinentalMode = state.isIntercontinentalMode || false;
        window.globalLeagueRounds = state.globalLeagueRounds;
        window.globalLeagueCurrentRoundIdx = state.globalLeagueCurrentRoundIdx;

        if (!window.globalLeagueRounds) {
            console.warn("Reconstruindo globalLeagueRounds para save legado...");
            window.globalLeagueRounds = {};
            window.globalLeagueCurrentRoundIdx = {};
            const ALL_LEAGUES = ['brazil_a', 'brazil_b', 'england', 'spain', 'germany', 'italy', 'france', 'portugal', 'arabia', 'mls'];
            ALL_LEAGUES.forEach(lg => {
                const lTeams = allTeams.filter(t => t.league === lg);
                if (lTeams.length === 0) return;
                let tIds = lTeams.map(t => t.id);
                if (tIds.length % 2 !== 0) tIds.push('BYE');
                let nTeams = tIds.length;
                let lRounds = [];
                for (let round = 0; round < nTeams - 1; round++) {
                    let matches = [];
                    for (let i = 0; i < nTeams / 2; i++) {
                        let home = tIds[i];
                        let away = tIds[nTeams - 1 - i];
                        matches.push(round % 2 === 1 && i === 0 ? { home: away, away: home } : { home, away });
                    }
                    lRounds.push(matches);
                    tIds.splice(1, 0, tIds.pop());
                }
                let secondHalf = lRounds.map(roundMatches => roundMatches.map(match => ({ home: match.away, away: match.home })));
                window.globalLeagueRounds[lg] = [...lRounds, ...secondHalf];
                window.globalLeagueCurrentRoundIdx[lg] = currentRound || 0; // Aproxima a rodada atual
            });
        }

        cupWinnerId = state.cupWinnerId || null;
        cupRunnerUpId = state.cupRunnerUpId || null;
        libertadoresWinnerId = state.libertadoresWinnerId || null;
        sulamericanaWinnerId = state.sulamericanaWinnerId || null;
        cupFinished = state.cupFinished || false;
        console.log("loadGame: Exibindo screen-main.");
        ensureShields();
        showScreen('screen-main');
        updateDashboardUI();
        updateDynamicBackground(myTeam.id);
    } else {
        // Inicializa dados para um novo jogo do usuário
        console.log("loadGame: Nenhum estado salvo encontrado ou inválido. Inicializando novo jogo.");
        currentRound = 1;
        matchSchedule = [];
        standings = [];
        isCupMode = false;
        isLibertadoresMode = false;
        cupBracket = [];
        libertadoresPhase = 'groups';
        libertadoresGroups = [];
        libertadoresGroupStandings = [];
        libertadoresBracket = [];
        libertadoresParticipants = [];
        sulAmericanaBracket = [];
        isSulAmericanaMode = false;
        sulAmericanaParticipants = [];
        sulAmericanaPhase = 'groups';
        sulAmericanaGroups = [];
        sulAmericanaGroupStandings = [];
        intercontinentalBracket = [];
        isIntercontinentalMode = false;
        cupWinnerId = null; // Reset cup winner for new season
        cupRunnerUpId = null; // Reset cup runner-up for new season
        libertadoresWinnerId = null; // Reset lib winner for new season
        sulamericanaWinnerId = null; // Reset sula winner for new season
        databaseVersion = "2026-07-19-v3";
        
        allTeams = JSON.parse(JSON.stringify(teamsData)); 
        let playerIdCounter = 1;
        const loadedPlayerNames = new Set(); // Conjunto para rastrear exclusividade de jogadores
        
        allTeams.forEach(team => {
            team.id = team.id;
            if (typeof realSquads !== 'undefined' && realSquads[team.id]) {
                const uniquePlayers = [];
                realSquads[team.id].players.forEach((p) => {
                    uniquePlayers.push(p);
                });

                team.squad = uniquePlayers.map((p, index) => ({
                    id: playerIdCounter++, // Ensure unique IDs across all players
                    name: p.name,
                    position: p.pos,
                    strength: p.str,
                    energy: 100,
                    goals: 0,
                    assists: 0,
                    yellowCards: 0,
                    suspensionRounds: 0,
                    injuryRounds: 0,
                    redCardInMatch: false,
                    isStarter: index < 11,
                    age: getConsistentAge(p.name),
                    matchesPlayed: 0,
                    salario: calculateSalary(p)
                }));
                team.formation = realSquads[team.id].formation;
            }
            
            // Ensure all teams have a full squad (at least 18 players: 11 starters + 7 reserves) and proper tactics
            if (!team.squad || team.squad.length < 18) {
                const existingPlayers = team.squad || [];
                const neededPlayers = 18 - existingPlayers.length;
                // Posições genéricas para preencher o elenco
                const genericPositions = ['GOL', 'ZAG', 'ZAG', 'LAT', 'LAT', 'MEI', 'MEI', 'MEI', 'ATA', 'ATA', 'ATA', 'GOL', 'ZAG', 'LAT', 'MEI', 'MEI', 'ATA', 'ATA'];
                
                for (let i = 0; i < neededPlayers; i++) {
                    const pos = genericPositions[existingPlayers.length + i] || 'MEI'; // Fallback position
                    existingPlayers.push({
                        id: playerIdCounter++,
                        name: `Jogador ${existingPlayers.length + i + 1} ${team.name.split(' ')[0]}`,
                        position: pos,
                        strength: Math.round(team.strength - 5 + Math.random() * 10), // Strength around team average
                        energy: 100, goals: 0, assists: 0, yellowCards: 0, suspensionRounds: 0, redCardInMatch: false,
                        isStarter: existingPlayers.length + i < 11,
                        age: getConsistentAge(`Jogador ${existingPlayers.length + i + 1} ${team.name.split(' ')[0]}`),
                        matchesPlayed: 0
                    });
                }
                team.squad = existingPlayers;
                team.formation = team.formation || '4-3-3'; // Default formation if not set
            }

            // Initialize tactics after ensuring squad is full
            const starters = team.squad.filter(p => p.isStarter);
            const startersSorted = [...starters].sort((a, b) => b.strength - a.strength);
            team.tactics = {
                formation: team.formation || '4-3-3',
                mentality: (['Palmeiras', 'Flamengo', 'Botafogo', 'Corinthians', 'Manchester City', 'Arsenal', 'Liverpool', 'Real Madrid', 'Bayern de Munique'].includes(team.name)) ? 'Ofensivo' : (['Chapecoense', 'Remo', 'Mirassol', 'Luton Town', 'Sheffield United', 'Darmstadt'].includes(team.name) ? 'Defensivo' : 'Equilibrado'),
                laterais: 'Defensivos',
                captain: startersSorted.length > 0 ? startersSorted[0].id : null,
                penaltyTaker: startersSorted.length > 0 ? startersSorted[0].id : null,
                freekicks: startersSorted.length > 0 ? startersSorted[0].id : null,
                corners: startersSorted.length > 0 ? startersSorted[0].id : null
            };

            // Ensure captain/freekicks/corners are valid IDs from the current squad
            const currentSquadIds = new Set(team.squad.map(p => p.id));
            if (!currentSquadIds.has(team.tactics.captain)) team.tactics.captain = startersSorted.length > 0 ? startersSorted[0].id : null;
            if (!currentSquadIds.has(team.tactics.penaltyTaker)) team.tactics.penaltyTaker = startersSorted.length > 0 ? startersSorted[0].id : null;
            if (!currentSquadIds.has(team.tactics.freekicks)) team.tactics.freekicks = startersSorted.length > 0 ? startersSorted[0].id : null;
            if (!currentSquadIds.has(team.tactics.corners)) team.tactics.corners = startersSorted.length > 0 ? startersSorted[0].id : null;

            // The previous 'else' block for generic squads is now integrated into the check above
            // This ensures all teams, regardless of league or realSquads entry, have a complete squad.
            ensureSafeState(team);
        });
        console.log("loadGame: Exibindo screen-selection.");
        ensureShields();
        showScreen('screen-selection');
        renderTeams('brazil_a');
    }
}

// Verifica se imagens locais existem; se não, substitui por um avatar gerado (fallback)
function ensureShields() {
    if (!Array.isArray(allTeams)) return;
    allTeams.forEach(team => {
        try {
            if (team && typeof team.shield === 'string' && team.shield.startsWith('img/')) {
                const test = new Image();
                const original = team.shield;
                test.onload = function() {
                    // OK - imagem local existe
                };
                test.onerror = function() {
                    // Substitui por fallback remoto com o nome do time
                    team.shield = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random`;
                };
                test.src = original;
            }
        } catch (e) {
            // Segurança: se algo falhar, garante fallback
            if (team && team.name) team.shield = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random`;
        }
    });
}

// ============================================================
// BASE FIXA DE CLUBES CLÁSSICOS SUL-AMERICANOS (CONMEBOL)
// Garante presença de estrangeiros na Libertadores e Sul-Am.
// ============================================================
const equipasSulAmericanas = [
    // Argentina
    { id: 'riverplate', vagas: 2 },
    { id: 'bocajuniors', vagas: 2 },
    { id: 'racing', vagas: 1 },
    { id: 'sanlorenzo', vagas: 1 },
    { id: 'talleres', vagas: 1 },
    { id: 'estudiantes', vagas: 1 },
    { id: 'rosariocentral', vagas: 1 },
    // Uruguai
    { id: 'penarol', vagas: 1 },
    { id: 'nacional', vagas: 1 },
    // Chile
    { id: 'colocolo', vagas: 1 },
    { id: 'ucatolica', vagas: 1 },
    // Equador
    { id: 'ldu', vagas: 1 },
    { id: 'independientedelvalle', vagas: 1 },
    { id: 'barcelonasc', vagas: 1 },
    // Paraguai
    { id: 'olimpia', vagas: 1 },
    { id: 'cerroporteno', vagas: 1 },
    { id: 'libertad', vagas: 1 },
    // Colômbia
    { id: 'atleticonacional', vagas: 1 },
    { id: 'millonarios', vagas: 1 },
    { id: 'junior', vagas: 1 },
    // Peru
    { id: 'alianzalima', vagas: 1 },
    { id: 'sportingcristal', vagas: 1 },
    // Bolívia
    { id: 'bolivar', vagas: 1 },
    { id: 'thestrongest', vagas: 1 },
    // Chile
    { id: 'udechile', vagas: 1 },
    // Novas Adições
    { id: 'independiente', vagas: 1 },
    { id: 'velez', vagas: 1 },
    { id: 'emelec', vagas: 1 },
    { id: 'americadecali', vagas: 1 },
    { id: 'universitario', vagas: 1 },
    { id: 'tachira', vagas: 1 },
    { id: 'caracas', vagas: 1 },
    { id: 'wilstermann', vagas: 1 },
];

/**
 * Retorna um array de equipas estrangeiras sul-americanas para compor as taças,
 * garantindo diversidade de países. Embaralha para variedade a cada sorteio.
 */
function getEquipasEstrangeirasSulAmericanas(quantidade) {
    const ids = equipasSulAmericanas.map(e => e.id);
    const disponiveis = allTeams.filter(t => ids.includes(t.id) && t.id !== myTeam.id && !libertadoresParticipants.includes(t.id));
    // Embaralha aleatoriamente para variedade
    disponiveis.sort(() => 0.5 - Math.random());
    return disponiveis.slice(0, quantidade);
}

function initLibertadores(silent = false) {
    if (libertadoresGroups.length > 0 || libertadoresBracket.length > 0) return;

    isLibertadoresMode = true;
    libertadoresPhase = 'groups';
    let pTeams = [];
    
    const isBrazil = myTeam.league.startsWith('brazil');
    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);

    if (libertadoresParticipants.length === 0) {
        if (isEurope) {
            pTeams = allTeams.filter(t => ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(t.league))
                             .sort((a, b) => b.strength - a.strength).slice(0, 32);
        } else {
            // FIX: Mix obrigatório — vagas brasileiras + vagas de clubes estrangeiros sul-americanos
            // 24 vagas para times estrangeiros CONMEBOL (na vida real o Brasil tem ~7 ou 8 vagas diretas na fase de grupos)
            const VAGAS_ESTRANGEIROS_LIB = 24;
            const estrangeiros = getEquipasEstrangeirasSulAmericanas(VAGAS_ESTRANGEIROS_LIB);

            // IDs dos estrangeiros já escolhidos (para não duplicar)
            const estrangeirosIds = estrangeiros.map(t => t.id);

            // IDs de times brasileiros que costumam estar na Libertadores (6 vagas diretas mínimas)
            const brIds = ['flamengo', 'palmeiras', 'botafogo', 'atleticomg', 'saopaulo', 'fluminense', 'fortaleza', 'cruzeiro', 'corinthians', 'internacional', 'bahia', 'athleticopr', 'gremio', 'vasco'];
            let brQualifiers = allTeams.filter(t => brIds.includes(t.id) && !estrangeirosIds.includes(t.id));

            // Garante que o time do jogador participe se ele estiver no Brasil ou América do Sul
            if ((myTeam.league.startsWith('brazil') || myTeam.league === 'south_america') && !brQualifiers.find(t => t.id === myTeam.id) && !estrangeirosIds.includes(myTeam.id)) {
                brQualifiers.unshift(myTeam);
            }

            // Ordena brasileiros por força e pega os melhores para completar as vagas (32 - 24 = 8 vagas BR)
            brQualifiers.sort((a, b) => b.strength - a.strength);
            const vagasBrasil = 32 - estrangeiros.length;
            const brSelecionados = brQualifiers.slice(0, vagasBrasil);

            pTeams = [...estrangeiros, ...brSelecionados];
        } 
    } else {
        pTeams = libertadoresParticipants.map(id => allTeams.find(t => t.id === id)).filter(t => t);

        // FIX: Se os participants vieram APENAS de times brasileiros, injeta estrangeiros
        if (!isEurope) {
            // Se houver menos de 24 times estrangeiros, ajusta a proporção
            const numEstrangeiros = pTeams.filter(t => t.league === 'south_america').length;
            if (numEstrangeiros < 20) {
                const VAGAS_ESTRANGEIROS_LIB = 24;
                const estrangeiros = getEquipasEstrangeirasSulAmericanas(VAGAS_ESTRANGEIROS_LIB);
                const estIds = estrangeiros.map(t => t.id);
                // Mantém o time do jogador se for BR
                const myTeamInPTeams = pTeams.find(t => t.id === myTeam.id);
                // Remove alguns times brasileiros para abrir vagas e injeta estrangeiros
                pTeams = pTeams.filter(t => !estIds.includes(t.id) && t.league !== 'south_america');
                
                // Se o time do jogador for BR e não estiver no pTeams, temos de o manter
                if (myTeamInPTeams && !pTeams.find(t => t.id === myTeam.id)) {
                    pTeams.unshift(myTeamInPTeams);
                }

                pTeams = pTeams.slice(0, 32 - estrangeiros.length);
                pTeams = [...estrangeiros, ...pTeams];
            }
        }
    }

    // GARANTIA: Se houver menos de 32 times, preenche com os mais fortes disponíveis no jogo
    if (pTeams.length < 32) {
        const usedIds = pTeams.map(t => t.id);
        const isTeamSouthAmerica = (league) => league === 'south_america' || league.startsWith('brazil_');
        const fillTeams = allTeams.filter(t => {
            if (usedIds.includes(t.id)) return false;
            return isEurope ? !isTeamSouthAmerica(t.league) : isTeamSouthAmerica(t.league);
        }).sort((a, b) => b.strength - a.strength);
        pTeams = [...pTeams, ...fillTeams.slice(0, 32 - pTeams.length)];
    }
    // Se ainda assim faltar (cenário extremo), adiciona BYE ou times genéricos
    while (pTeams.length < 32) {
        const tempTeamId = `temp_lib_${pTeams.length}`;
        const tempTeamName = `Time Convidado ${pTeams.length}`;
        const tempTeamStrength = 70;
        const genericSquad = [];
        const positions = ['GOL', 'ZAG', 'ZAG', 'LAT', 'LAT', 'MEI', 'MEI', 'MEI', 'ATA', 'ATA', 'ATA'];
        const benchPos = ['GOL', 'ZAG', 'LAT', 'MEI', 'MEI', 'ATA', 'ATA'];
        const allPos = [...positions, ...benchPos];
        let playerIdCounter = 10000 + pTeams.length * 100; // Unique IDs for temp players

        allPos.forEach((pos, idx) => {
            genericSquad.push({
                id: playerIdCounter++,
                name: `Jogador ${idx + 1} ${tempTeamName.split(' ')[0]}`,
                position: pos,
                strength: Math.round(tempTeamStrength - 3 + Math.random() * 6), // Strength around 70
                energy: 100, goals: 0, assists: 0, yellowCards: 0, suspensionRounds: 0, redCardInMatch: false, isStarter: idx < 11
            });
        });
        pTeams.push({ id: tempTeamId, name: tempTeamName, strength: tempTeamStrength, shield: '', squad: genericSquad });
    }
    
    // Agora embaralha os 32 selecionados para distribuir nos grupos
    pTeams.sort(() => 0.5 - Math.random());
    libertadoresParticipants = pTeams.map(t => t.id);

    // Criar 8 grupos de 4
    libertadoresGroups = [];
    libertadoresGroupStandings = [];
    for (let i = 0; i < 8; i++) {
        const groupTeams = pTeams.slice(i * 4, (i + 1) * 4);
        libertadoresGroups.push({
            name: String.fromCharCode(65 + i), // A, B, C...
            teams: groupTeams.map(t => t.id)
        });
        groupTeams.forEach(t => {
            libertadoresGroupStandings.push({
                id: t.id, group: String.fromCharCode(65 + i),
                p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0
            });
        });
    }

    const userInLib = libertadoresGroupStandings.find(s => s.id === myTeam.id);
    if (userInLib && !silent) {
        const bonus = isEurope ? 50000000 : 15000000;
        const compName = isEurope ? "Champions League" : "Copa Libertadores";
            myTeam.balance += bonus;
            addCommentaryItem(`🏆 Atenção! O ${myTeam.name} está classificado para a ${compName}! Bônus de participação de R$ ${(bonus/1000000).toFixed(1)}M recebido.`, 'info', 0);
    }
}

function viewLibertadoresBracket() {
    if (libertadoresBracket.length === 0) initLibertadores(true);
    showScreen('screen-libertadores');
    renderLibertadoresBracket();
}

function renderLibertadoresBracket() {
    const list = document.getElementById('lib-matches-list');
    list.innerHTML = '';

    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
    const compName = isEurope ? "Champions League" : "Copa Libertadores";

    if (libertadoresPhase === 'groups') {
        document.getElementById('lib-phase-title').innerText = `${compName} - Fase de Grupos`;
        libertadoresGroups.forEach(group => {
            const groupTitle = document.createElement('h4');
            groupTitle.innerText = `Grupo ${group.name}`;
            groupTitle.style.marginTop = "15px";
            list.appendChild(groupTitle);
            
            const table = document.createElement('table');
            table.className = "standings-table";
            table.innerHTML = `<thead><tr><th>Pos</th><th style="text-align:left">Time</th><th>P</th><th>SG</th></tr></thead>`;
            const tbody = document.createElement('tbody');
            
            const groupStandings = libertadoresGroupStandings
                .filter(s => s.group === group.name)
                .sort((a, b) => b.p - a.p || b.sg - a.sg);
                
            groupStandings.forEach((s, idx) => {
                const team = allTeams.find(t => t.id === s.id);
                const tr = document.createElement('tr');
                if (idx < 2) tr.style.backgroundColor = "rgba(76, 175, 80, 0.1)";
                if (s.id === myTeam.id) tr.style.backgroundColor = "rgba(255, 152, 0, 0.15)";
                tr.innerHTML = `<td>${idx+1}</td><td style="text-align:left">${team.name}</td><td>${s.p}</td><td>${s.sg}</td>`;
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            list.appendChild(table);
        });
    } else {
        const currentPhase = libertadoresBracket[libertadoresBracket.length - 1];
        const phaseNames = ["Final", "Semifinal", "Quartas de Final", "Oitavas de Final"];
        const currentPhaseName = phaseNames[Math.log2(currentPhase.length)] || "Fase Eliminatória";
        
        document.getElementById('lib-phase-title').innerText = `${compName} - ${currentPhaseName}`;

        if (currentPhase) {
            currentPhase.forEach(match => {
                const home = allTeams.find(t => t.id === match.home) || { name: 'A definir', shield: '' };
                const away = allTeams.find(t => t.id === match.away) || { name: 'A definir', shield: '' };
                const item = document.createElement('div');
                item.className = 'match-preview';
                item.style.borderLeft = "4px solid #3f51b5";
                item.innerHTML = `
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${home.shield ? `<img src="${home.shield}" alt="${home.name}" style="width:36px; height:36px; object-fit:contain; flex-shrink:0;">` : ''} 
                        <span>${home.name}</span>
                    </div>
                    <strong>VS</strong>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span>${away.name}</span> 
                        ${away.shield ? `<img src="${away.shield}" alt="${away.name}" style="width:36px; height:36px; object-fit:contain; flex-shrink:0;">` : ''}
                    </div>`;
                list.appendChild(item);
            });
        }
    }
}

// Renderiza a lista de times na tela inicial
function renderTeams(league = 'brazil_a') {
    const grid = document.getElementById('teams-grid');
    grid.innerHTML = '';

    const filteredTeams = allTeams.filter(t => 
        league === 'rest_world' ? (t.league && t.league.startsWith('rest_world')) : t.league === league
    );

    filteredTeams.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.onclick = () => selectTeam(team.id);

        card.innerHTML = `
            <img src="${team.shield}" alt="Escudo ${team.name}" onerror="this.src='https://ui-avatars.com/api/?name=${team.name}&background=random'">
            <h3>${team.name}</h3>
            <p>Força: ${team.strength}</p>
        `;
        
        grid.appendChild(card);
    });
}

// Seleciona o time e vai para a tela principal
function selectTeam(teamId) {
    unlockAudio(); // Garante o áudio caso o login tenha sido pulado ou resetado
    myTeam = allTeams.find(t => t.id === teamId);
    
    const baseLeague = myTeam.league.replace('_b', '').replace('_a', '');
    
    // NOVA MECÂNICA: Otimização de Memória e Geração de Ligas B
    optimizeMemoryAndGenerateLeagues(baseLeague);
    
    // Initialize the championship only with teams from the same league
    initChampionship(myTeam.league);

    // MODO FINANCEIRO
    const financeSelect = document.getElementById('finance-mode-select');
    if (financeSelect && financeSelect.value === 'equal') {
        allTeams.forEach(t => {
            t.balance = 150000000;
        });
    }

    // Calculate the strength of the league teams
    const leagueTeams = allTeams.filter(t => t.league === myTeam.league);
    leagueTeams.forEach(t => {
        t.strength = calculateTeamStrength(t);
    });
    
    document.getElementById('my-team-name').innerText = myTeam.name;
    document.getElementById('my-team-strength').innerText = myTeam.strength;
    const shieldImg = document.getElementById('my-team-shield');
    shieldImg.src = myTeam.shield;
    shieldImg.onerror = () => { shieldImg.src = `https://ui-avatars.com/api/?name=${myTeam.name}&background=random`; };

    saveGame();
    showScreen('screen-main');
    updateDashboardUI();
    updateDynamicBackground(teamId);
}

// Event listener for league selection
function optimizeMemoryAndGenerateLeagues(baseLeague) {
    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(baseLeague);
    
    // 1. Otimização de Memória desativada para viabilizar mercado de transferências global
    const neededTeams = allTeams;
    allTeams = neededTeams;

    // 2. Garantir que o país atual tenha uma 2ª Divisão (Liga B)
    const leagueA_name = (baseLeague === 'brazil') ? 'brazil_a' : baseLeague;
    const leagueB_name = (baseLeague === 'brazil') ? 'brazil_b' : baseLeague + '_b';
    
    const existingBTeams = allTeams.filter(t => t.league === leagueB_name);
    
    // Se não houver times suficientes na 2ª divisão, gera-os dinamicamente
    if (existingBTeams.length < 20) {
        let leagueNameDisplay = baseLeague.charAt(0).toUpperCase() + baseLeague.slice(1);
        if (leagueNameDisplay === 'England') leagueNameDisplay = 'Inglaterra';
        if (leagueNameDisplay === 'Spain') leagueNameDisplay = 'Espanha';
        if (leagueNameDisplay === 'Italy') leagueNameDisplay = 'Itália';
        if (leagueNameDisplay === 'France') leagueNameDisplay = 'França';
        if (leagueNameDisplay === 'Germany') leagueNameDisplay = 'Alemanha';
        if (leagueNameDisplay === 'Portugal') leagueNameDisplay = 'Portugal';
        if (leagueNameDisplay === 'Arabia') leagueNameDisplay = 'Arábia';

        const teamsToCreate = 20 - existingBTeams.length;
        for (let i = 1; i <= teamsToCreate; i++) {
            const genericId = `${baseLeague}_gen_${i}`;
            const genericName = `${leagueNameDisplay} B ${i}`;
            const genericStrength = 65 + Math.floor(Math.random() * 8); // Entre 65 e 72
            
            const newTeam = {
                id: genericId,
                name: genericName,
                strength: genericStrength,
                shield: `https://ui-avatars.com/api/?name=${encodeURIComponent(genericName)}&background=random`,
                league: leagueB_name,
                balance: 5000000,
                stadium: `Estádio ${genericName}`,
                squad: [] // Jogadores serão gerados caso necessário na partida
            };
            allTeams.push(newTeam);
        }
        
        // Também precisamos adicionar as traduções das ligas criadas caso não existam
        names[leagueB_name] = { league: `LIGA ${leagueNameDisplay.toUpperCase()} B`, cup: 'COPA NACIONAL', continental: isEurope ? 'CHAMPIONS LEAGUE' : 'LIBERTADORES' };
    }
}

document.getElementById('league-select').addEventListener('change', function() {
    renderTeams(this.value);
});

// Troca as telas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    // Correção: Esconder interface vazada na tela de login
    if (screenId === 'screen-login' || screenId === 'screen-team-selection') {
        document.body.classList.add('login-active');
        // Fecha qualquer modal aberto caso tenha ficado preso no logout
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        document.querySelectorAll('.live-match-modal').forEach(m => m.style.display = 'none');
        const mobileMore = document.getElementById('mobile-more-modal');
        if (mobileMore) mobileMore.style.display = 'none';
    } else {
        document.body.classList.remove('login-active');
    }
}

function getCompetitionNames(leagueId) {
    const names = {
        'brazil_a': { league: 'BRASILEIRÃO SÉRIE A', cup: 'COPA DO BRASIL', continental: 'LIBERTADORES' },
        'brazil_b': { league: 'BRASILEIRÃO SÉRIE B', cup: 'COPA DO BRASIL', continental: 'LIBERTADORES' },
        'england': { league: 'PREMIER LEAGUE', cup: 'FA CUP', continental: 'CHAMPIONS LEAGUE' },
        'spain': { league: 'LA LIGA', cup: 'COPA DEL REY', continental: 'CHAMPIONS LEAGUE' },
        'italy': { league: 'SERIE A', cup: 'COPPA ITALIA', continental: 'CHAMPIONS LEAGUE' },
        'germany': { league: 'BUNDESLIGA', cup: 'DFB-POKAL', continental: 'CHAMPIONS LEAGUE' },
        'france': { league: 'LIGUE 1', cup: 'COUPE DE FRANCE', continental: 'CHAMPIONS LEAGUE' },
        'portugal': { league: 'PRIMEIRA LIGA', cup: 'TAÇA DE PORTUGAL', continental: 'CHAMPIONS LEAGUE' },
        'arabia': { league: 'SAUDI PRO LEAGUE', cup: 'KINGS CUP', continental: 'CHAMPIONS LEAGUE' },
        'south_america': { league: 'LIGA SUL-AMERICANA', cup: 'COPA SUL-AMERICANA', continental: 'LIBERTADORES' }
    };
    return names[leagueId] || { league: 'LIGA NACIONAL', cup: 'COPA NACIONAL', continental: 'TORNEIO CONTINENTAL' };
}

function updateRoundResultsUI() {
    const list = document.getElementById('results-list');
    if (!list) return;
    
    if (!lastRoundResults || lastRoundResults.length === 0) {
        list.innerHTML = '<li>Ainda não há resultados. Jogue a primeira rodada!</li>';
        return;
    }
    
    list.innerHTML = '';
    
    // Sort so user's match is at the top
    const sortedResults = [...lastRoundResults].sort((a, b) => {
        const aIsUser = myTeam && (a.homeId === myTeam.id || a.awayId === myTeam.id);
        const bIsUser = myTeam && (b.homeId === myTeam.id || b.awayId === myTeam.id);
        if (aIsUser && !bIsUser) return -1;
        if (!aIsUser && bIsUser) return 1;
        return 0;
    });

    sortedResults.forEach(res => {
        const li = document.createElement('li');
        li.style.padding = "6px 0";
        li.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        
        let text = `<span>${res.homeName} <strong>${res.homeGoals}</strong> x <strong>${res.awayGoals}</strong> ${res.awayName}</span>`;
        
        if (myTeam && (res.homeId === myTeam.id || res.awayId === myTeam.id)) {
            li.style.color = "#bb86fc";
            li.style.fontWeight = "bold";
            text += `<span style="font-size:0.8rem; background:rgba(187,134,252,0.2); padding:2px 6px; border-radius:4px; margin-left:10px;">[Seu Jogo]</span>`;
        }
        
        li.innerHTML = text;
        list.appendChild(li);
    });
}

function updateDashboardUI() {
    // FIX: Previne a execução na tela de login, onde os elementos do dashboard não existem.
    // Isso evita que o script quebre e congele a tela inicial.
    if (!myTeam) {
        return;
    }

    if (!myTeam || !matchSchedule) return;

    updateRoundResultsUI();

    const totalDates = matchSchedule.length;
    if (totalDates === 0) return;
    
    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
    const isSA = myTeam.league.startsWith('brazil') || myTeam.league === 'south_america';

    const isWindowOpen = (currentRound === 1 || currentRound > totalDates || (currentRound >= 15 && currentRound <= 25)); // Janela de transferências
    const marketBtn = document.getElementById('btn-market');
    if (marketBtn) {
        marketBtn.disabled = !isWindowOpen;
        marketBtn.style.opacity = isWindowOpen ? "1" : "0.5";
        marketBtn.title = isWindowOpen ? "Janela Aberta" : "Janela Fechada (Abre na Rodada 15)";
    }
    
    const libBtn = document.getElementById('btn-view-libertadores');
    const sulBtn = document.getElementById('btn-view-sulamericana');
    if (myTeam.league) {
        if (libBtn) {
            libBtn.style.display = (isSA || isEurope) ? 'inline-block' : 'none';
            libBtn.innerHTML = isEurope ? '<i class="fas fa-globe-europe" style="color: #3f51b5;"></i> Ver Champions' : '<i class="fas fa-globe-americas" style="color: #3f51b5;"></i> Ver Libertadores';
        }
        if (sulBtn) {
            sulBtn.style.display = (isSA || isEurope) ? 'inline-block' : 'none';
            sulBtn.innerHTML = isEurope ? '<i class="fas fa-fire" style="color: #f44336;"></i> Ver Europa League' : '<i class="fas fa-fire" style="color: #f44336;"></i> Ver Sul-Americana';
        }

        const cupBtn = document.querySelector('button[onclick="viewCupBracket()"]');
        if (cupBtn) {
            const compNames = getCompetitionNames(myTeam.league);
            cupBtn.innerHTML = `<i class="fas fa-trophy" style="color: #ffd700;"></i> Ver ${compNames.cup}`;
        }
    } else {
        if (libBtn) libBtn.style.display = 'none';
    }

    const balanceFormatted = myTeam.balance.toLocaleString('pt-BR');
    document.getElementById('my-team-balance').innerText = balanceFormatted;
    
    const confidenceBar = document.getElementById('my-team-confidence-bar');
    if (confidenceBar) {
        const conf = myTeam.boardConfidence || 80;
        confidenceBar.style.width = `${conf}%`;
        if (conf >= 70) {
            confidenceBar.style.background = '#4CAF50';
            confidenceBar.style.animation = 'none';
        } else if (conf >= 31) {
            confidenceBar.style.background = '#FFEB3B';
            confidenceBar.style.animation = 'none';
        } else {
            confidenceBar.style.background = '#f44336';
            // Adiciona CSS piscar caso não exista na stylesheet principal
            if (!document.getElementById('blink-css')) {
                const style = document.createElement('style');
                style.id = 'blink-css';
                style.innerHTML = `@keyframes blink-danger { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }`;
                document.head.appendChild(style);
            }
            confidenceBar.style.animation = 'blink-danger 1s infinite';
        }
    }
    
    if (document.getElementById('market-balance')) {
        document.getElementById('market-balance').innerText = balanceFormatted;
    }
    
    if (currentRound === 1 && libertadoresBracket.length === 0 && (isSA || isEurope)) {
        initLibertadores(true);
    }
    if (currentRound === 1 && cupBracket.length === 0 && (myTeam.league.startsWith('brazil') || isEurope)) {
        initCopaDoBrasil(true);
    }
    
    if (currentRound <= totalDates) {
        const currentData = matchSchedule[currentRound - 1];
        const continentalName = isEurope ? 'UCL' : 'Lib';
        let label = currentData.type === 'cup' ? '(Copa)' : (currentData.type === 'libertadores' ? `(${continentalName})` : `(${currentRound}/${totalDates})`);
        document.getElementById('btn-round-num').innerText = label;
        
        // Aplica o tema visual no Body e nas Telas
        const bodyEl = document.body;
        const screensEl = document.querySelectorAll('.screen');
        bodyEl.classList.remove('theme-cup', 'theme-libertadores');
        screensEl.forEach(s => s.classList.remove('match-live-cup', 'match-live-libertadores', 'match-live-league'));

        if (currentData.type === 'cup') { bodyEl.classList.add('theme-cup'); screensEl.forEach(s => s.classList.add('match-live-cup')); }
        else if (currentData.type === 'libertadores') { bodyEl.classList.add('theme-libertadores'); screensEl.forEach(s => s.classList.add('match-live-libertadores')); }
        else { screensEl.forEach(s => s.classList.add('match-live-league')); }

        let matchesForDisplay = currentData.matches;
        if (currentData.type === 'cup' && cupBracket.length > 0) {
            matchesForDisplay = cupBracket[cupBracket.length - 1];
        } else if (currentData.type === 'libertadores' && libertadoresBracket.length > 0) {
            matchesForDisplay = libertadoresBracket[libertadoresBracket.length - 1];
        }
        
        const userMatch = matchesForDisplay.find(m => m.home === myTeam.id || m.away === myTeam.id);
        if (userMatch) {
            const home = allTeams.find(t => t.id === userMatch.home) || { name: 'Folga', shield: '', stadium: 'N/A' };
            const away = allTeams.find(t => t.id === userMatch.away) || { name: 'Folga', shield: '', stadium: 'N/A' };
            
            document.getElementById('match-home-name').innerText = home.name;
            const homeShield = document.getElementById('match-home-shield');
            homeShield.src = home.shield || `https://ui-avatars.com/api/?name=${home.name}&background=777`;
            homeShield.style.visibility = home.id === 'BYE' ? 'hidden' : 'visible';
            
            document.getElementById('match-away-name').innerText = away.name;
            const awayShield = document.getElementById('match-away-shield');
            awayShield.src = away.shield || `https://ui-avatars.com/api/?name=${away.name}&background=777`;
            awayShield.style.visibility = away.id === 'BYE' ? 'hidden' : 'visible';
            
            document.getElementById('match-stadium-info').innerText = home.stadium || 'Estádio';
            const stadiumImg = document.getElementById('match-stadium-img');

            // Gera um código numérico estável baseado no ID (ou nome caso seja BYE) para o fallback
            const stadiumId = home.id || home.name || "default";
            const stadiumLock = stadiumId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

            stadiumImg.onerror = function () {
                if (!this.src.includes('loremflickr.com')) {
                    // Se a imagem real falhar, tenta uma imagem de estádio profissional com o lock do time
                    this.src = `https://loremflickr.com/600/200/stadium,soccer,football?lock=${stadiumLock}`;
                } else {
                    // Placeholder de segurança final
                    this.src = 'https://placehold.co/600x200/2e7d32/white?text=Est%C3%A1dio+N%C3%A3o+Dispon%C3%ADvel';
                    this.onerror = null;
                }
            };
            
            stadiumImg.style.display = 'block';
            // Usa o dicionário de estádios reais (mesmo da troca de fundo dinâmico)
            const realStadiumUrl = stadiumBackgrounds[home.id] || home.stadiumImg || null;
            if (realStadiumUrl) {
                stadiumImg.src = realStadiumUrl;
            } else {
                stadiumImg.src = `https://loremflickr.com/600/200/stadium,soccer,football?lock=${stadiumLock}`;
            }

            // Atualiza dinamicamente o plano de fundo do jogo com o estádio da equipe da casa (mandante do próximo jogo)
            if (home.id && home.id !== 'BYE') {
                updateDynamicBackground(home.id);
            } else {
                updateDynamicBackground(myTeam.id);
            }
        } else {
            // Se não houver jogo do usuário para a rodada atual, limpa o display e usa o do próprio time
            document.getElementById('match-home-name').innerText = 'Aguardando';
            document.getElementById('match-home-shield').src = '';
            document.getElementById('match-away-name').innerText = 'Próximo Jogo';
            document.getElementById('match-away-shield').src = '';
            document.getElementById('match-stadium-info').innerText = 'Fase a definir';
            document.getElementById('match-stadium-img').style.display = 'none';
            updateDynamicBackground(myTeam.id);
        }
    } else {
        document.getElementById('btn-round-num').innerText = "(Fim)";
        // Limpa o display do próximo jogo no fim da temporada
        document.getElementById('match-home-name').innerText = 'Temporada';
        document.getElementById('match-home-shield').src = '';
        document.getElementById('match-away-name').innerText = 'Encerrada';
        document.getElementById('match-away-shield').src = '';
        updateDynamicBackground(myTeam.id);
    }
}

// Variáveis globais para a Simulação Ao Vivo
let simMinute = 0;
// Legacy var kept for compatibility but we use simController below
let simInterval = null;
let simSpeedMs = 1500; // Padrão 'slow'
// Controller baseado em requestAnimationFrame para manter timing consistente
const simController = (function() {
    let running = false;
    let speedMsLocal = simSpeedMs;
    let acc = 0;
    let lastTs = 0;

    function _loop(now) {
        if (!running) return;
        if (!lastTs) lastTs = now;
        const dt = now - lastTs;
        lastTs = now;
        acc += dt;

        // Avança minutos enquanto acumulado exceder o intervalo configurado
        while (acc >= speedMsLocal) {
            try { tickSimulation(); } catch (e) { console.error('tickSimulation error:', e); }
            acc -= speedMsLocal;
            if (!running) break;
        }

        if (running) requestAnimationFrame(_loop);
    }

    return {
        start() {
            if (running) return;
            running = true;
            acc = 0;
            lastTs = 0;
            requestAnimationFrame(_loop);
        },
        stop() {
            running = false;
            acc = 0;
            lastTs = 0;
        },
        setSpeed(ms) {
            speedMsLocal = ms;
        },
        isRunning() { return running; }
    };
})();
let simulatedRoundMatches = [];
let userSimMatch = null;
let livePlayerToSwapId = null;
let subsUsedInMatch = 0;
let windowsUsedInMatch = 0;
let subMadeInThisSession = false;

// --- IDEIA 20: Indisciplina / Noitada ---
let _indisciplinaPlayer = null;      // Jogador envolvido no evento
let _indisciplinaCallback = null;    // Callback para continuar o fluxo após decisão
// ----------------------------------------

// Função auxiliar para obter um jogador aleatório
function getRandomPlayer(team, preferredPosition) {
    if (!team.squad || team.squad.length === 0) return "Jogador";
    const starters = team.squad.filter(p => p.isStarter);
    const candidates = starters.length > 0 ? starters : team.squad;
    
    if (preferredPosition) {
        const matches = candidates.filter(p => p.position === preferredPosition);
        if (matches.length > 0) {
            return matches[Math.floor(Math.random() * matches.length)].name;
        }
    }
    
    return candidates[Math.floor(Math.random() * candidates.length)].name;
}

// Função auxiliar para obter o OBJETO de um jogador aleatório
function getRandomPlayerObj(team) {
    if (!team || !team.squad || team.squad.length === 0) return null;
    const starters = team.squad.filter(p => p.isStarter);
    const candidates = starters.length > 0 ? starters : team.squad;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

function getPenaltyTaker(team) {
    if (!team || !team.squad || !team.tactics) return getRandomPlayerObj(team);

    const starters = team.squad.filter(p => p.isStarter);
    const penaltyTakerId = team.tactics.penaltyTaker;
    if (penaltyTakerId) {
        const selected = starters.find(p => p.id === penaltyTakerId) || team.squad.find(p => p.id === penaltyTakerId);
        if (selected) return selected;
    }

    return starters.length > 0 ? starters[0] : (team.squad[0] || null);
}

function getPenaltyChance(player) {
    if (!player) return 0.58;

    const overall = Math.max(1, Math.min(99, player.strength || 0));
    const energyFactor = Math.max(0.7, Math.min(1.1, (player.energy || 100) / 100));
    const moraleFactor = Math.max(0.75, Math.min(1.05, (player.morale || 100) / 100));

    const baseChance = 0.52 + (overall - 50) * 0.006;
    const chance = baseChance * energyFactor * moraleFactor;
    return Math.max(0.15, Math.min(0.95, chance));
}

function attributePenaltyGoalStats(team, penaltyPlayer, matchId = null, minute = null, competition = 'league') {
    if (!penaltyPlayer) return 'Alguém';

    const scorer = penaltyPlayer;
    try {
        const key = `${matchId || 'nogame'}_${minute || 'nomin'}_penalty`;
        if (!scorer._goalEvents) scorer._goalEvents = new Set();
        if (!scorer._goalEvents.has(key)) {
            scorer.goals = (scorer.goals || 0) + 1;
            if (!scorer.stats) scorer.stats = {};
            if (!scorer.stats[competition]) scorer.stats[competition] = { goals: 0, assists: 0 };
            scorer.stats[competition].goals = (scorer.stats[competition].goals || 0) + 1;
            scorer._goalEvents.add(key);
        }
    } catch (e) {
        scorer.goals = (scorer.goals || 0) + 1;
        if (!scorer.stats) scorer.stats = {};
        if (!scorer.stats[competition]) scorer.stats[competition] = { goals: 0, assists: 0 };
        scorer.stats[competition].goals = (scorer.stats[competition].goals || 0) + 1;
    }

    return scorer.name;
}

function simulatePenaltyKick(match, minute, team) {
    if (!match || !team) return false;

    const taker = getPenaltyTaker(team);
    const chance = getPenaltyChance(taker);
    const scored = Math.random() < chance;
    const takerName = taker ? taker.name : 'Jogador';
    const teamName = team.name || 'time';

    if (match === userSimMatch) {
        addCommentaryItem(
            scored
                ? `🎯 Pênalti marcado! <strong>${takerName}</strong> do ${teamName} bate e converte com categoria.`
                : `🎯 Pênalti desperdiçado! <strong>${takerName}</strong> do ${teamName} bate forte, mas o goleiro defende.`,
            'goal',
            minute
        );
    }

    if (scored) {
        if (team.id === match.homeTeam?.id) {
            match.currentHomeGoals++;
        } else if (team.id === match.awayTeam?.id) {
            match.currentAwayGoals++;
        }

        const scorerName = attributePenaltyGoalStats(team, taker, match.id, minute, match.matchType || 'league');
        if (match === userSimMatch) {
            addCommentaryItem(`⚽ <strong>GOL DE PÊNALTI!</strong> ${scorerName} marca para o ${teamName}!`, 'goal', minute);
            flashScoreboard();
            playSFX('goal');
        }
    }

    return scored;
}

// Adiciona um comentário na lista com efeito de scroll
function addCommentaryItem(text, type, minute) {
    const listEl = document.getElementById('live-commentary-list');
    if (!listEl) return;
    
    const item = document.createElement('div');
    item.className = `commentary-item ${type}`;
    
    const minStr = minute > 0 ? `<strong>${minute}'</strong> ` : '';
    item.innerHTML = `${minStr}${text}`;
    
    listEl.appendChild(item);
    listEl.scrollTo({
        top: listEl.scrollHeight,
        behavior: 'smooth'
    });
}

// Pisca o placar em lances de gol
function flashScoreboard() {
    const scoreboard = document.querySelector('.live-scoreboard-card');
    if (scoreboard) {
        scoreboard.style.boxShadow = '0 0 30px rgba(76, 175, 80, 0.8)';
        setTimeout(() => {
            scoreboard.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        }, 1000);
    }
}

// Atualiza o placar de outros jogos
function updateOtherMatchUI(index, m) {
    const li = document.getElementById(`live-other-${index}`);
    if (li) {
        const homeScoreEl = li.querySelector('.left-score');
        const awayScoreEl = li.querySelector('.right-score');
        if (homeScoreEl) homeScoreEl.innerText = m.currentHomeGoals;
        if (awayScoreEl) awayScoreEl.innerText = m.currentAwayGoals;
    }
}

// Define a velocidade da simulação
function setSimSpeed(speed) {
    document.querySelectorAll('.btn-speed').forEach(btn => btn.classList.remove('active'));
    
    if (speed === 'slow') {
        document.getElementById('btn-speed-slow').classList.add('active');
        simSpeedMs = 1500;
    } else if (speed === 'normal') {
        document.getElementById('btn-speed-normal').classList.add('active');
        simSpeedMs = 500;
    } else if (speed === 'fast') {
        document.getElementById('btn-speed-fast').classList.add('active');
        simSpeedMs = 150;
    } else if (speed === 'ultra') {
        document.getElementById('btn-speed-ultra').classList.add('active');
        simSpeedMs = 30;
    }
    
    // Usa o simController para timing estável (baseado em requestAnimationFrame)
    simController.setSpeed(simSpeedMs);
    if (simMinute < 90) {
        simController.start();
    } else {
        simController.stop();
    }
}

// Função para escolher quem fez o gol e quem deu a assistência
function attributeGoalStats(team, matchId = null, minute = null, competition = 'league') {
    let starters = (team && team.squad) ? team.squad.filter(p => p.isStarter) : [];
    if (starters.length === 0) {
        starters = (team && team.squad) ? team.squad : []; // Fallback for background sim
    }
    if (starters.length === 0) return "Alguém";

    // Peso para gols: Atacantes > Meias > Laterais > Zagueiros
    const goalWeights = { 'ATA': 15, 'MEI': 6, 'LAT': 2, 'ZAG': 1, 'GOL': 0.1 };
    const scorer = weightedRandom(starters, goalWeights);

    // Proteção contra incremento duplicado: marca evento por match+minute
    try {
        const key = `${matchId || 'nogame'}_${minute || 'nomin'}`;
        if (!scorer._goalEvents) scorer._goalEvents = new Set();
        if (!scorer._goalEvents.has(key)) {
            // Global count
            scorer.goals = (scorer.goals || 0) + 1;
            if (!scorer.allTimeStats) scorer.allTimeStats = { goals: 0, assists: 0, matches: 0 };
            scorer.allTimeStats.goals = (scorer.allTimeStats.goals || 0) + 1;
            // Per-competition count
            if (!scorer.stats) scorer.stats = {};
            if (!scorer.stats[competition]) scorer.stats[competition] = { goals: 0, assists: 0 };
            scorer.stats[competition].goals = (scorer.stats[competition].goals || 0) + 1;
            scorer._goalEvents.add(key);
        }
    } catch (e) {
        scorer.goals = (scorer.goals || 0) + 1;
        if (!scorer.stats) scorer.stats = {};
        if (!scorer.stats[competition]) scorer.stats[competition] = { goals: 0, assists: 0 };
        scorer.stats[competition].goals = (scorer.stats[competition].goals || 0) + 1;
    }

    // 70% de chance de ter assistência
    if (Math.random() < 0.7) {
        const assistWeights = { 'MEI': 12, 'ATA': 8, 'LAT': 6, 'ZAG': 2, 'GOL': 0.5 };
        const potentialAssistants = starters.filter(p => p.id !== scorer.id);
        const assistant = weightedRandom(potentialAssistants, assistWeights);
            if (assistant) {
                try {
                    const keyA = `${matchId || 'nogame'}_${minute || 'nomin'}`;
                    if (!assistant._assistEvents) assistant._assistEvents = new Set();
                    if (!assistant._assistEvents.has(keyA)) {
                        assistant.assists = (assistant.assists || 0) + 1;
                        if (!assistant.allTimeStats) assistant.allTimeStats = { goals: 0, assists: 0, matches: 0 };
                        assistant.allTimeStats.assists = (assistant.allTimeStats.assists || 0) + 1;
                        if (!assistant.stats) assistant.stats = {};
                        if (!assistant.stats[competition]) assistant.stats[competition] = { goals: 0, assists: 0 };
                        assistant.stats[competition].assists = (assistant.stats[competition].assists || 0) + 1;
                        assistant._assistEvents.add(keyA);
                    }
                } catch (e) {
                    assistant.assists = (assistant.assists || 0) + 1;
                    if (!assistant.stats) assistant.stats = {};
                    if (!assistant.stats[competition]) assistant.stats[competition] = { goals: 0, assists: 0 };
                    assistant.stats[competition].assists = (assistant.stats[competition].assists || 0) + 1;
                }
            }
    }
    return scorer.name;
}

function weightedRandom(players, weights) {
    let pool = [];
    players.forEach(p => {
        // Peso exponencial baseado na Força do jogador para concentrar golos nas estrelas da equipa
        let entries = Math.max(1, Math.round((weights[p.position] || 1) * (Math.pow(p.strength, 3) / 10000)));
        for (let i = 0; i < entries; i++) pool.push(p);
    });
    return pool[Math.floor(Math.random() * pool.length)];
}

// Função auxiliar para calcular a probabilidade de gol em um minuto
function getGoalProbabilities(match) {
    // 75% Titulares + 25% Força Base do Clube
    const actualStrA = calculateTeamStrength(match.homeTeam);
    const actualStrB = calculateTeamStrength(match.awayTeam);
    const strengthA = (actualStrA * 0.75) + (match.homeTeam.strength * 0.25);
    const strengthB = (actualStrB * 0.75) + (match.awayTeam.strength * 0.25);

    let modA = getTeamTacticalModifiers(match.homeTeam);
    const modB = getTeamTacticalModifiers(match.awayTeam);
    
    // --- GESTÃO DE ESTÁDIO: Bónus Direto de Vantagem Casa (+7.5%) ---
    // Aplica-se incondicionalmente à equipa da casa
    modA.attackMod *= 1.075;
    modA.defenseMod *= 1.075;
    
    // Bónus extra de lotação
    if (match.attendanceRate > 0.85) {
        modA.attackMod *= 1.025;
        modA.defenseMod *= 1.025;
    }
    // ------------------------------------------

    const effectiveStrengthA = strengthA * modA.attackMod * modB.defenseMod;
    const effectiveStrengthB = strengthB * modB.attackMod * modA.defenseMod;

    // Exponenciação para forçar domínio das equipas mais fortes
    const ratioA = Math.pow(effectiveStrengthA / effectiveStrengthB, 1.5);
    const ratioB = Math.pow(effectiveStrengthB / effectiveStrengthA, 1.5);

    const baseProb = 0.014;
    return {
        probA: Math.max(0.002, Math.min(0.08, baseProb * ratioA)),
        probB: Math.max(0.002, Math.min(0.08, baseProb * ratioB))
    };
}

// Avança instantaneamente para os 90 minutos simulando dinamicamente os minutos restantes
function skipMatch() {
    if (window.simulationEnded) return;
    
    // Para qualquer loop em execução
    simController.stop();
    simInterval = null;

    addCommentaryItem("⚡ O jogo foi avançado rapidamente para os 90 minutos finais!", "info", simMinute);

    // Simula todos os minutos restantes até ao minuto 90
    try {
        while (simMinute < 90) {
            simMinute++;
            simulatedRoundMatches.forEach((m, idx) => {
                try {
                    const { probA, probB } = getGoalProbabilities(m);
                    
                    simulateDisciplines(m, simMinute);

                    if (Math.random() < probA) {
                        m.currentHomeGoals++;
                        // FIX: null-check em homeTeam (partidas continentais podem não ter .homeTeam)
                        if (m.homeTeam && m === userSimMatch) {
                            const scorerName = attributeGoalStats(m.homeTeam, m.id, simMinute, m.matchType || 'league');
                            addCommentaryItem(`⚽ [Simulado] <strong>GOL!</strong> do ${m.homeTeam.name} marcado por ${scorerName}!`, 'goal', simMinute);
                        } else if (m.homeTeam) {
                            attributeGoalStats(m.homeTeam, m.id, simMinute, m.matchType || 'league');
                        }
                    }
                    if (Math.random() < probB) {
                        m.currentAwayGoals++;
                        // FIX: null-check em awayTeam
                        if (m.awayTeam && m === userSimMatch) {
                            const scorerName = attributeGoalStats(m.awayTeam, m.id, simMinute, m.matchType || 'league');
                            addCommentaryItem(`⚽ [Simulado] <strong>GOL!</strong> do ${m.awayTeam.name} marcado por ${scorerName}!`, 'goal', simMinute);
                        } else if (m.awayTeam) {
                            attributeGoalStats(m.awayTeam, m.id, simMinute, m.matchType || 'league');
                        }
                    }
                    
                    updateOtherMatchUI(idx, m);
                } catch (matchErr) {
                    console.warn('Erro num jogo durante skipMatch (minuto ' + simMinute + '):', matchErr);
                }
            });
        }
    } catch (loopErr) {
        console.error('Erro no loop de skipMatch:', loopErr);
    }

    // Actualiza UI do placar com null-check
    const homeScoreEl = document.getElementById('live-home-score');
    const awayScoreEl = document.getElementById('live-away-score');
    if (homeScoreEl && userSimMatch) homeScoreEl.innerText = userSimMatch.currentHomeGoals;
    if (awayScoreEl && userSimMatch) awayScoreEl.innerText = userSimMatch.currentAwayGoals;

    const minEl = document.getElementById('live-match-minute');
    const barEl = document.getElementById('live-progress-bar');
    if (minEl) minEl.innerText = 90;
    if (barEl) barEl.style.width = '100%';

    playSFX('whistle');
    setTimeout(() => playSFX('crowd'), 500);
    
    // FIX: Envolve a chamada final em try/catch para garantir que nunca congela
    try {
        endSimulation(false);
    } catch (e) {
        console.error('Erro crítico em skipMatch ao chamar endSimulation:', e);
        window.simulationEnded = true;
        try { finishMatchSimulation(); } catch (e2) {
            console.error('Erro também em finishMatchSimulation:', e2);
            showScreen('screen-main');
            if (myTeam) updateDynamicBackground(myTeam.id);
        }
    }
}

function advanceRound() {
    try {
        closeModal('modal-academy');
    } catch (e) {
        console.warn('Não foi possível fechar modal de juniores:', e);
    }



    try {
        if (window.simController && typeof window.simController.stop === 'function') {
            window.simController.stop();
        }
    } catch (e) {}
    if (window.simInterval) {
        clearInterval(window.simInterval);
        window.simInterval = null;
    }
    window.finishMatchRunning = false;
    window.simulationEnded = false;
    try {
        finishMatchSimulation();
    } catch (e) {
        console.error('Erro ao avançar para a próxima rodada:', e);
        try {
            if (typeof currentRound === 'number' && currentRound < matchSchedule.length) {
                currentRound++;
                console.warn('fallback: avançando para a próxima rodada apesar do erro.');
            }
        } catch (err) {
            console.warn('Falha ao avançar currentRound no fallback:', err);
        }
        try { updateDashboardUI(); } catch (err) {}
        try { saveGame(); } catch (err) {}
        showScreen('screen-main');
    }
}

// Finaliza o tempo de jogo
function endSimulation(immediate = false) {
    if (window.simulationEnded) return;
    window.simulationEnded = true;
    simController.stop();
    simInterval = null;

    playSFX('whistle');
    setTimeout(() => playSFX('crowd'), 500);
    
    // FIX: null-check em userSimMatch e homeTeam para evitar TypeError na mensagem final
    if (userSimMatch && userSimMatch.homeTeam && userSimMatch.awayTeam) {
        addCommentaryItem(`🏁 FIM DE JOGO! O árbitro apita o término da partida. Placar final: ${userSimMatch.homeTeam.name} ${userSimMatch.currentHomeGoals} x ${userSimMatch.currentAwayGoals} ${userSimMatch.awayTeam.name}!`, "info", 90);
    } else {
        addCommentaryItem(`🏁 FIM DE JOGO! O árbitro apita o término da partida.`, "info", 90);
    }

    if (immediate) {
        finishMatchSimulation();
    } else {
        // Não avança automaticamente. Exibe o botão de continuar para o usuário avançar de rodada manualmente.
        if (window.endSimTimeout) {
            clearTimeout(window.endSimTimeout);
            window.endSimTimeout = null;
        }
        const continueBtn = document.getElementById('btn-live-continue');
        if (continueBtn) {
            continueBtn.style.display = 'inline-block';
            continueBtn.innerHTML = '<i class="fas fa-step-forward"></i> Avançar para Próxima Rodada';
            continueBtn.onclick = finishMatchSimulation;
        }
        const skipBtn = document.querySelector('button[onclick="skipMatch()"]');
        if (skipBtn) skipBtn.style.display = 'none';
    }
}

// Gera um evento aleatório no jogo do jogador (faltas, escanteios, chutes)
function generateRandomMatchEvent(match, minute) {
    const isHomeUser = match.homeTeam.id === myTeam.id;
    const userTeam = isHomeUser ? match.homeTeam : match.awayTeam;
    const opponentTeam = isHomeUser ? match.awayTeam : match.homeTeam;
    
    const events = [
        () => {
            const shooter = getRandomPlayer(userTeam, 'ATA');
            return {
                text: `👟 Chute perigoso de ${shooter}! A bola passa raspando a trave esquerda!`,
                type: 'info'
            };
        },
        () => {
            const shooter = getRandomPlayer(opponentTeam, 'ATA');
            return {
                text: `⚠ Pressão do ${opponentTeam.name}! ${shooter} finaliza forte, mas a bola vai por cima do gol!`,
                type: 'info'
            };
        },
        () => {
            const shooter = getRandomPlayer(userTeam, 'ATA');
            const goalkeeper = getRandomPlayer(opponentTeam, 'GOL');
            return {
                text: `🧤 Espetacular! ${shooter} chuta de primeira no canto, mas o goleiro ${goalkeeper} se estica todo e espalma!`,
                type: 'info'
            };
        },
        () => {
            const shooter = getRandomPlayer(opponentTeam, 'ATA');
            const goalkeeper = getRandomPlayer(userTeam, 'GOL');
            return {
                text: `🔒 Defesaça! ${goalkeeper} salva o ${userTeam.name} com uma intervenção incrível após cabeceio de ${shooter}!`,
                type: 'info'
            };
        },
        () => {
            const kicker = getRandomPlayer(userTeam, 'MEI');
            return {
                text: `🎯 Falta perigosa a favor do ${userTeam.name}! ${kicker} cobra com categoria, mas bate na barreira.`,
                type: 'info'
            };
        }
    ];
    
    const randomEventFn = events[Math.floor(Math.random() * events.length)];
    const event = randomEventFn();
    addCommentaryItem(event.text, event.type, minute);
}

// Função para simular disciplina (cartões) em tempo real ou simulado
function simulateDisciplines(m, minute) {
    if (!m.homeTeam || !m.awayTeam) return;

    // Cartão amarelo (chance de 1.8% por minuto)
    if (Math.random() < 0.018) { 
        const teams = [m.homeTeam, m.awayTeam];
        const targetTeam = teams[Math.floor(Math.random() * 2)];
        const player = getRandomPlayerObj(targetTeam);
        if (player) {
            player.yellowCards = (player.yellowCards || 0) + 1;
            player.matchYellowCards = (player.matchYellowCards || 0) + 1;
            
            if (m === userSimMatch) {
                addCommentaryItem(`🟨 Cartão amarelo para <strong>${player.name}</strong> (${targetTeam.name}).`, 'yellow-card', minute);
            }

            // Segundo cartão amarelo = Expulsão
            if (player.matchYellowCards >= 2) {
                player.suspensionRounds = 2; // 2 rodadas na simulação = 1 de punição real na próxima rodada
                player.isStarter = false;
                if (m === userSimMatch) {
                    addCommentaryItem(`🟥 <strong>Segundo cartão amarelo!</strong> <strong>${player.name}</strong> (${targetTeam.name}) foi expulso do jogo!`, 'red-card', minute);
                    playSFX('whistle');
                }
            }
        }
    }
    
    // Cartão vermelho direto (chance de 0.2% por minuto)
    if (Math.random() < 0.002) {
        const teams = [m.homeTeam, m.awayTeam];
        const targetTeam = teams[Math.floor(Math.random() * 2)];
        const player = getRandomPlayerObj(targetTeam);
        if (player) {
            player.suspensionRounds = 2; // 2 rodadas na simulação = 1 de punição real na próxima rodada
            player.isStarter = false; // Tira dos titulares para a próxima rodada
            if (m === userSimMatch) {
                addCommentaryItem(`🟥 <strong>Cartão vermelho direto!</strong> <strong>${player.name}</strong> (${targetTeam.name}) foi expulso do jogo!`, 'red-card', minute);
                playSFX('whistle');
            }
        }
    }
}

// Tick a cada minuto da partida dinamicamente baseado nas forças e táticas ativas
function tickSimulation() {
    // FIX CRÍTICO: Impede execução dupla se a simulação já terminou
    if (window.simulationEnded) return;

    simMinute++;
    if (simMinute > 90) return endSimulation();

    // FIX CRÍTICO: Null-checks nos elementos do DOM para evitar crash
    const minuteEl = document.getElementById('live-match-minute');
    const progressEl = document.getElementById('live-progress-bar');
    if (minuteEl) minuteEl.innerText = simMinute;
    if (progressEl) progressEl.style.width = `${(simMinute / 90) * 100}%`;

    simulatedRoundMatches.forEach((m, idx) => {
        try {
            const {
                probA,
                probB
            } = getGoalProbabilities(m);
            
            // Simular disciplina (cartões amarelos e vermelhos)
            simulateDisciplines(m, simMinute);
            // Probabilidade de gol para o mandante
            if (Math.random() < probA) {
                m.currentHomeGoals++;
                const scorerName = attributeGoalStats(m.homeTeam, m.id, simMinute, m.matchType || 'league');
                if (m === userSimMatch) {
                    addCommentaryItem(`⚽ <strong>GOL! Sensacional!</strong> Gol do ${m.homeTeam.name}! ${scorerName} recebe a bola na grande área, ajeita o corpo e finaliza sem chances para o goleiro!`, 'goal', simMinute);
                    flashScoreboard();
                    playSFX('goal');
                }
            }

            // Probabilidade de gol para o visitante
            if (Math.random() < probB) {
                m.currentAwayGoals++;
                const scorerName = attributeGoalStats(m.awayTeam, m.id, simMinute, m.matchType || 'league');
                if (m === userSimMatch) {
                    addCommentaryItem(`⚽ <strong>GOL! Sensacional!</strong> Gol do ${m.awayTeam.name}! ${scorerName} recebe a bola na grande área, ajeita o corpo e finaliza sem chances para o goleiro!`, 'goal', simMinute);
                    flashScoreboard();
                    playSFX('goal');
                }
            }

            if (Math.random() < 0.008) {
                const penaltyTeam = Math.random() < 0.5 ? m.homeTeam : m.awayTeam;
                simulatePenaltyKick(m, simMinute, penaltyTeam);
            }

            updateOtherMatchUI(idx, m);
        } catch (tickErr) {
            console.warn(`[tickSimulation] Erro no jogo ${idx} no minuto ${simMinute}:`, tickErr);
        }
    });

    // FIX CRÍTICO: Null-checks no placar e em userSimMatch para evitar TypeError
    if (userSimMatch) {
        const homeScoreEl = document.getElementById('live-home-score');
        const awayScoreEl = document.getElementById('live-away-score');
        if (homeScoreEl) homeScoreEl.innerText = userSimMatch.currentHomeGoals;
        if (awayScoreEl) awayScoreEl.innerText = userSimMatch.currentAwayGoals;

        if (Math.random() < 0.12) {
            try { generateRandomMatchEvent(userSimMatch, simMinute); } catch(e) {}
        }
    }

    if (simMinute === 45) {
        addCommentaryItem("🏁 Fim do primeiro tempo! Jogadores descem para o vestiário sob aplausos e vaias.", "info", 45);
        pauseForHalftime();
        return;
    }
}

function pauseForHalftime() {
    simController.stop();
    simInterval = null;
    playSFX('whistle');

    // FIX CRÍTICO: Null-check para evitar crash se o botão não existir no DOM
    const continueBtn = document.getElementById('btn-live-continue');
    if (continueBtn) {
        continueBtn.style.display = 'inline-block';
        continueBtn.innerHTML = '<i class="fas fa-play-circle"></i> Começar 2º Tempo';
        continueBtn.onclick = resumeSimulationAfterHalftime;
    }
}

// Função para escalar de forma automática os 11 titulares ativos do computador
function autoSelectStarters(team) {
    if (!team || !team.squad) return;

    // 1. Jogadores lesionados ou suspensos NÃO podem ser titulares
    team.squad.forEach(p => {
        if (p.injuryRounds > 0 || p.suspensionRounds > 0) {
            p.isStarter = false;
        }
    });

    // 2. Identificar goleiros e jogadores de linha disponíveis (saudáveis e não suspensos)
    const available = team.squad.filter(p => p.injuryRounds === 0 && p.suspensionRounds === 0);

    const gols = available.filter(p => p.position === 'GOL');
    const field = available.filter(p => p.position !== 'GOL');

    // Ordenar goleiros por força decrescente
    gols.sort((a, b) => b.strength - a.strength);

    // Ordenar jogadores de linha priorizando força, mas penalizando quem está cansado (< 65% de energia)
    // para promover o descanso e rotação
    field.sort((a, b) => {
        const energyA = a.energy || 0;
        const energyB = b.energy || 0;
        
        let scoreA = a.strength;
        let scoreB = b.strength;

        if (energyA < 65) scoreA -= 12; // Penaliza jogador cansado na hora de escalar
        if (energyB < 65) scoreB -= 12;

        return scoreB - scoreA;
    });

    // Desescalar todos primeiro
    team.squad.forEach(p => p.isStarter = false);

    // Escalar 1 goleiro titular
    if (gols.length > 0) {
        gols[0].isStarter = true;
    } else {
        // Fallback: se não houver goleiro saudável, escala o melhor disponível
        const allGols = team.squad.filter(p => p.position === 'GOL');
        if (allGols.length > 0) {
            allGols.sort((a, b) => b.strength - a.strength);
            allGols[0].isStarter = true;
        }
    }

    // Escalar 10 jogadores de linha titulares
    let startersCount = 0;
    for (let i = 0; i < field.length && startersCount < 10; i++) {
        field[i].isStarter = true;
        startersCount++;
    }

    // Fallback: se ainda faltar titulares para fechar 11 (elenco curto + muitas lesões),
    // escala qualquer jogador disponível que sobrou
    let totalStarters = team.squad.filter(p => p.isStarter).length;
    if (totalStarters < 11) {
        const remaining = team.squad.filter(p => !p.isStarter);
        remaining.sort((a, b) => b.strength - a.strength);
        for (let i = 0; i < remaining.length && totalStarters < 11; i++) {
            remaining[i].isStarter = true;
            totalStarters++;
        }
    }
}

// Inicia a rodada com a simulação ao vivo interativa
// =============================================================
// IDEIA 20 — Eventos de Indisciplina / Noitada
// =============================================================

/**
 * Cenários imersivos de noitada (selecionado aleatoriamente)
 */
const _indisciplinaScenarios = [
    (nome) => `📸 Fotos nas redes sociais vieram à tona! <strong>${nome}</strong> foi fotografado numa balada até de manhã, com bebidas na mão e em grupo animado. A imprensa já está a noticiar.`,
    (nome) => `🍾 Uma testemunha contactou o clube! <strong>${nome}</strong> foi visto numa festa privada ontem à noite, claramente fora dos protocolos de concentração exigidos antes do jogo.`,
    (nome) => `🎰 O staff de segurança encontrou <strong>${nome}</strong> num casino às 3 da manhã, com sinais visíveis de cansaço e excesso de bebidas alcoólicas.`,
    (nome) => `💃 Um vídeo viral está a circular nas redes: <strong>${nome}</strong> numa discoteca, a dançar e a beber até tarde. O jogo é hoje e ele mal consegue treinar.`,
    (nome) => `🌙 A preparação foi comprometida! <strong>${nome}</strong> não pernoitou no hotel de concentração do clube — foi apanhado numa festa com amigos até altas horas da madrugada.`,
    (nome) => `🍺 Membros do staff alertaram: <strong>${nome}</strong> voltou ao hotel visivelmente alcoolizado de madrugada. A sua prestação no treino de ontem foi péssima e hoje há jogo.`
];

/**
 * Verifica se acontece um evento de indisciplina antes do jogo.
 * @param {Function} callback - Chamado após o utilizador tomar uma decisão
 */
function checkIndisciplineEvent(callback) {
    // Probabilidade de 4% por rodada
    const CHANCE = 0.04;

    if (!currentUser || document.body.classList.contains('login-active') || !myTeam || !myTeam.squad || myTeam.squad.length === 0 || Math.random() > CHANCE) {
        callback();
        return;
    }

    // Escolhe aleatoriamente um jogador (preferencialmente titular)
    const candidates = myTeam.squad.filter(p =>
        (p.injuryRounds || 0) === 0 &&
        (p.suspensionRounds || 0) === 0 &&
        !(p.indisciplinaRound === currentRound) // Não repetir na mesma rodada
    );
    if (candidates.length === 0) { callback(); return; }

    const titulares = candidates.filter(p => p.isStarter);
    const pool = titulares.length > 0 ? titulares : candidates;
    const player = pool[Math.floor(Math.random() * pool.length)];

    // Marca para não repetir
    player.indisciplinaRound = currentRound;

    // Guarda estado global
    _indisciplinaPlayer = player;
    _indisciplinaCallback = callback;

    // Preenche o modal
    const scenarioFn = _indisciplinaScenarios[Math.floor(Math.random() * _indisciplinaScenarios.length)];
    document.getElementById('indisciplina-emoji').textContent = '😴';
    document.getElementById('indisciplina-player-name').textContent = player.name;
    document.getElementById('indisciplina-player-info').textContent =
        `${player.position} · FOR ${player.strength} · Idade ${player.age} · Salário R$ ${(player.salario || 0).toLocaleString('pt-BR')}`;
    document.getElementById('indisciplina-text').innerHTML = scenarioFn(player.name);

    // Mensagem do dirigente antes de mostrar o modal com as opções
    alert(`📱 MENSAGEM DO DIRIGENTE\n\nO Diretor de Futebol enviou uma mensagem: "Mister, temos um problema sério. O ${player.name} foi visto na balada ontem! A imprensa já está em cima. Precisamos decidir o que fazer antes do jogo."`);

    // Exibe o modal
    document.getElementById('modal-indisciplina').style.display = 'flex';
}

/**
 * Chamado pelos botões do modal de indisciplina.
 * @param {'multa'|'barrar'|'perdoar'} opcao
 */
function resolveIndisciplina(opcao) {
    const player = _indisciplinaPlayer;
    const callback = _indisciplinaCallback;

    // Fecha o modal
    document.getElementById('modal-indisciplina').style.display = 'none';

    if (!player) { if (callback) callback(); return; }

    // Aplica consequência de energia em todos os casos
    player.energy = Math.min(player.energy || 100, 50);

    if (opcao === 'multa') {
        // 20% do salário deduzido → reverte para o clube
        const multa = Math.round((player.salario || 0) * 0.20);
        player.salario = Math.max(0, (player.salario || 0) - multa);
        myTeam.balance += multa;
        player.emoji = '😡';
        newsFeedItems.push({
            type: 'info',
            text: `🔴 Indisciplina: ${player.name} foi multado em R$ ${multa.toLocaleString('pt-BR')} após ser apanhado numa noitada.`
        });
        alert(`🔴 MULTA APLICADA!

${player.name} foi multado em R$ ${multa.toLocaleString('pt-BR')}.
O valor foi creditado ao saldo do clube.
O jogador joga com 50% de energia e humor péssimo.`);

    } else if (opcao === 'barrar') {
        // Suspenso desta rodada
        player.suspensionRounds = 1;
        player.isStarter = false;
        player.emoji = '⛔';
        newsFeedItems.push({
            type: 'info',
            text: `⛔ Disciplina: ${player.name} foi barrado do jogo de hoje pelo treinador após incidente extra-campo.`
        });
        alert(`⛔ BARRADO!

${player.name} foi excluído do jogo desta rodada.
O plantel fica reduzido — verifique a escalação!`);
        // Volta à tela de escalação para o utilizador ajustar
        if (typeof renderSquad === 'function') renderSquad();
        showScreen('screen-squad');
        _indisciplinaPlayer = null;
        _indisciplinaCallback = null;
        // Importante: o callback é chamado quando o utilizador clicar em "Jogar Rodada" novamente
        // (a validação de escalação já está em continuePlayRound)
        saveGame();
        return;

    } else {
        // Perdoar
        player.emoji = '😊';
        newsFeedItems.push({
            type: 'info',
            text: `💛 ${player.name} foi perdoado pelo treinador, mas joga hoje com apenas 50% de energia.`
        });
    }

    _indisciplinaPlayer = null;
    _indisciplinaCallback = null;
    saveGame();
    if (callback) callback();
}
// =============================================================

function playRound() {
    // FIX CRÍTICO: Limpa os guards de execução única no início de cada rodada
    window.simulationEnded = false;
    window.finishMatchRunning = false;

    if (currentRound > matchSchedule.length) {
        endOfSeason();
        return;
    }

    continuePlayRound();
    // Dispara eventos aleatórios com uma pequena probabilidade (ex: 15% por ronda)
    if (Math.random() < 0.15) {
        checkRandomEvents();
    }
}

function continuePlayRound() {
    if (currentRound > matchSchedule.length) return endOfSeason();

    const currentData = matchSchedule[currentRound - 1];
    isCupMode = currentData.type === 'cup';
    
    // Agora o tipo é continental. O usuário joga na Libertadores, Sul-Americana ou nenhum dos dois.
    // Vamos simular ambos nos mesmos dias.
    const isContinentalRound = currentData.type === 'continental';
    isIntercontinentalMode = currentData.type === 'intercontinental';
    
    // Descobre em qual o usuário está jogando para atualizar a UI
    isLibertadoresMode = isContinentalRound && libertadoresParticipants.includes(myTeam.id);
    isSulAmericanaMode = isContinentalRound && sulAmericanaParticipants.includes(myTeam.id);
    
    // Se não estiver em nenhuma mas for rodada continental, força Libertadores por padrão para a UI
    if (isContinentalRound && !isLibertadoresMode && !isSulAmericanaMode) {
        isLibertadoresMode = true; 
    }

    // Aplica o tema visual da competição na tela de jogo ao vivo
    const liveScreen = document.getElementById('screen-match-live');
    liveScreen.classList.remove('match-live-league', 'match-live-cup', 'match-live-libertadores', 'match-live-sulamericana', 'match-live-intercontinental');
    if (isCupMode) liveScreen.classList.add('match-live-cup');
    else if (isLibertadoresMode) liveScreen.classList.add('match-live-libertadores');
    else if (isSulAmericanaMode) liveScreen.classList.add('match-live-sulamericana'); // CSS custom necessário
    else if (isIntercontinentalMode) liveScreen.classList.add('match-live-intercontinental'); // CSS custom necessário
    else liveScreen.classList.add('match-live-league');

    // Correção: Se for rodada de mata-mata ou fase de grupos continental, busca os jogos nos chaveamentos/grupos
    let matchesToSimulate = currentData.matches || [];
    if (isCupMode && cupBracket.length > 0) {
        if (!cupFinished) {
            matchesToSimulate = cupBracket[cupBracket.length - 1];
        } else {
            matchesToSimulate = [];
        }
    } else if (isContinentalRound) {
        matchesToSimulate = [];
        
        // 1. Libertadores
        if (libertadoresPhase === 'knockout' && libertadoresBracket.length > 0) {
            matchesToSimulate.push(...libertadoresBracket[libertadoresBracket.length - 1]);
        } else if (libertadoresPhase === 'groups') {
            const libRoundIdx = matchSchedule.slice(0, currentRound).filter(r => r.type === 'continental').length - 1;
            if (libertadoresGroups.length === 0) initLibertadores(true);
            
            libertadoresGroups.forEach(group => {
                const teams = group.teams;
                let m1, m2;
                if (libRoundIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                else if (libRoundIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                else if (libRoundIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                else if (libRoundIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                else if (libRoundIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                else if (libRoundIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                if (m1) matchesToSimulate.push(m1, m2);
            });
        }

        // 2. Sul-Americana
        if (sulAmericanaPhase === 'knockout' && sulAmericanaBracket.length > 0) {
            matchesToSimulate.push(...sulAmericanaBracket[sulAmericanaBracket.length - 1]);
        } else if (sulAmericanaPhase === 'groups') {
            const sulRoundIdx = matchSchedule.slice(0, currentRound).filter(r => r.type === 'continental').length - 1;
            if (sulAmericanaGroups.length === 0) initSulAmericana(true);
            
            sulAmericanaGroups.forEach(group => {
                const teams = group.teams;
                let m1, m2;
                if (sulRoundIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                else if (sulRoundIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                else if (sulRoundIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                else if (sulRoundIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                else if (sulRoundIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                else if (sulRoundIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                if (m1) matchesToSimulate.push(m1, m2);
            });
        }
    } else if (isIntercontinentalMode) {
        if (intercontinentalBracket.length === 0) initIntercontinental(true);
        if (intercontinentalBracket.length > 0) {
            matchesToSimulate = intercontinentalBracket[0];
        }
    }

    // 1. Limpeza automática de suspensos e lesionados no elenco do usuário
    if (myTeam && myTeam.squad) {
        myTeam.squad.forEach(p => {
            if (p.injuryRounds > 0 || p.suspensionRounds > 0) {
                p.isStarter = false;
            }
        });
        // A escalação mantem-se da rodada anterior, apenas removemos os indisponíveis.
        // O jogo não faz autoSelectStarters(myTeam) para preservar a escolha do utilizador.
    }

    // 2. Validação da escalação do usuário antes da rodada
    let _userHasMatchThisRound = false;
    if (myTeam && myTeam.squad) {
        if (isCupMode && cupBracket.length > 0) {
            const currentCupMatches = cupBracket[cupBracket.length - 1];
            _userHasMatchThisRound = currentCupMatches.some(m => m.home === myTeam.id || m.away === myTeam.id);
        } else if (isLibertadoresMode) {
            _userHasMatchThisRound = matchesToSimulate.some(m => m.home === myTeam.id || m.away === myTeam.id);
        } else {
            _userHasMatchThisRound = currentData.matches.some(m => m.home === myTeam.id || m.away === myTeam.id);
        }

        if (_userHasMatchThisRound) {
            const userStarters = myTeam.squad.filter(p => p.isStarter);
            const availableHealthy = myTeam.squad.filter(p => p.injuryRounds === 0 && p.suspensionRounds === 0).length;
            
            // O número esperado de titulares é o menor entre 11 e o total de atletas saudáveis disponíveis no elenco
            const expectedStarters = Math.min(11, availableHealthy);
            
            if (userStarters.length < expectedStarters) {
                alert(`Escalação Inválida: Como você possui atletas saudáveis no elenco, você precisa escalar pelo menos ${expectedStarters} titulares antes de jogar a rodada! Atualmente você tem ${userStarters.length} escalados.`);
                showScreen('screen-squad');
                renderSquad();
                return;
            }
            if (userStarters.length > 11) {
                alert(`Escalação Inválida: O limite máximo é de 11 titulares. Atualmente você tem ${userStarters.length} escalados.`);
                showScreen('screen-squad');
                renderSquad();
                return;
            }
            const userGol = userStarters.find(p => p.position === 'GOL');
            if (!userGol) {
                alert("Escalação Inválida: Você precisa escalar exatamente 1 Goleiro (GOL) titular antes de jogar a rodada!");
                showScreen('screen-squad');
                renderSquad();
                return;
            }
        }
    }

    // --- IDEIA 20: Evento de Indisciplina/Noitada (apenas quando o utilizador tem jogo) ---
    if (_userHasMatchThisRound) {
        // Captura o estado atual em closures para a callback
        const _matchesToSimulate = matchesToSimulate;
        const _currentData = currentData;
        checkIndisciplineEvent(() => {
            _continuePlayRoundCore(_matchesToSimulate, _currentData);
        });
        return; // Suspende — o resto será chamado pela callback
    }
    // Se não há jogo do utilizador, continua diretamente
    _continuePlayRoundCore(matchesToSimulate, currentData);
}

/**
 * Núcleo do pré-jogo: monta simulatedRoundMatches e lança a tela de jogo ao vivo.
 * Separado de continuePlayRound() para permitir pausa assíncrona pelo evento de indisciplina.
 */
function _continuePlayRoundCore(matchesToSimulate, currentData) {
    
    simulatedRoundMatches = matchesToSimulate
        .filter(m => m && m.home !== 'BYE' && m.away !== 'BYE')
        .map((match, index) => {
            const homeTeam = allTeams.find(t => t.id === match.home) || { name: "Time A", strength: 70, squad: [] };
            const awayTeam = allTeams.find(t => t.id === match.away) || { name: "Time B", strength: 70, squad: [] };
            
            // Auto-escalar e atribuir táticas aos times controlados pelo computador
            const aiPlaystyles = ['Posse de Bola', 'Contra-Ataque', 'Pressão Alta'];
            const aiMentalities = ['Defensivo', 'Equilibrado', 'Ofensivo'];
            
            if (homeTeam.id !== myTeam.id) {
                autoSelectStarters(homeTeam);
                if (!homeTeam.tactics) homeTeam.tactics = {};
                homeTeam.tactics.playstyle = aiPlaystyles[Math.floor(Math.random() * aiPlaystyles.length)];
                homeTeam.tactics.mentality = aiMentalities[Math.floor(Math.random() * aiMentalities.length)];
            }
            if (awayTeam.id !== myTeam.id) {
                autoSelectStarters(awayTeam);
                if (!awayTeam.tactics) awayTeam.tactics = {};
                awayTeam.tactics.playstyle = aiPlaystyles[Math.floor(Math.random() * aiPlaystyles.length)];
                awayTeam.tactics.mentality = aiMentalities[Math.floor(Math.random() * aiMentalities.length)];
            }

            // Marca os titulares de cada time como participantes da partida
            if (homeTeam.squad) homeTeam.squad.forEach(p => { if (p.isStarter) { p.playedInMatch = true; p.startedMatch = true; } });
            if (awayTeam.squad) awayTeam.squad.forEach(p => { if (p.isStarter) { p.playedInMatch = true; p.startedMatch = true; } });
            
    

        // --- GESTÃO DE ESTÁDIO E FINANÇAS ---
            const price = homeTeam.ticketPriceSetting || 'Medium';
            let priceMod = 0.8;
            let ticketValue = 60;
            if (price === 'Low') { priceMod = 0.95 + (Math.random() * 0.05); ticketValue = 30; }
            else if (price === 'Medium') { priceMod = 0.70 + (Math.random() * 0.15); ticketValue = 60; }
            else if (price === 'High') { priceMod = 0.40 + (Math.random() * 0.20); ticketValue = 100; }
            
            const repMod = (homeTeam.rep || 10) / 20;
            const randomFactor = 0.85 + (Math.random() * 0.3);
            
            const capacity = homeTeam.stadiumCapacity || 10000;
            let attendance = Math.floor(capacity * priceMod * repMod * randomFactor);
            if (attendance > capacity) attendance = capacity;
            
            const attendanceRate = attendance / capacity;
            const revenue = attendance * ticketValue;
            
            // --- NOVA RECEITA DE COMÉRCIO ---
            let commerceRevenue = 0;
            if (homeTeam.commerceLevel) {
                const comm = homeTeam.commerceLevel;
                commerceRevenue += attendance * (comm.bars * 5);
                commerceRevenue += attendance * (comm.food * 8);
                commerceRevenue += attendance * (comm.gourmet * 15);
            }
            // ------------------------------------
            
            return {
                id: index,
                home: match.home,
                away: match.away,
                matchType: match.type || currentData?.type || 'league',
                homeTeam,
                awayTeam,
                attendance,
                attendanceRate,
                revenue,
                commerceRevenue,
                currentHomeGoals: 0,
                currentAwayGoals: 0,
                goals: []
            };
        });


        // --- SIMULAÇÃO GLOBAL (Ligas em Background) ---
        try {
            if (!isCupMode && !isLibertadoresMode && !isSulAmericanaMode && !isIntercontinentalMode) {
                if (window.globalLeagueRounds) {
                    Object.keys(window.globalLeagueRounds).forEach(lg => {
                        if (lg === myTeam.league) return; // A liga atual já é simulada normalmente
                        
                        const idx = window.globalLeagueCurrentRoundIdx[lg];
                        if (idx !== undefined && idx < window.globalLeagueRounds[lg].length) {
                            const matches = window.globalLeagueRounds[lg][idx];
                            matches.forEach(m => {
                                if (m.home === 'BYE' || m.away === 'BYE') return;
                                const homeTeam = allTeams.find(t => t.id === m.home);
                                const awayTeam = allTeams.find(t => t.id === m.away);
                                if (homeTeam && awayTeam) {
                                    // Cálculo super rápido de gols (mesma lógica, sem UI)
                                    let hG = calculateGoals(homeTeam, awayTeam);
                                    let aG = calculateGoals(awayTeam, homeTeam);
                                    
                                    const matchIdStr = 'bg_' + lg + '_' + idx + '_' + m.home;
                                    for(let i=0; i<hG; i++) {
                                        attributeGoalStats(homeTeam, matchIdStr, (i*10)+5, 'league');
                                    }
                                    for(let i=0; i<aG; i++) {
                                        attributeGoalStats(awayTeam, matchIdStr, (i*10)+5, 'league');
                                    }
                                }
                            });
                            window.globalLeagueCurrentRoundIdx[lg]++;
                        }
                    });
                }
            }
        } catch(bgErr) {
            console.error("Erro na simulação global de fundo:", bgErr);
        }

    userSimMatch = simulatedRoundMatches.find(m => m.home === myTeam.id || m.away === myTeam.id);
    if (userSimMatch) {
        updateDynamicBackground(userSimMatch.homeTeam.id); // Estádio do time mandante
    }
    
    // Se a lista de jogos estiver vazia, finaliza a rodada automaticamente para não travar
    if (simulatedRoundMatches.length === 0) {
        finishMatchSimulation();
        return;
    }

    if (!userSimMatch) {
        // Verifica se o usuário está em folga (BYE)
        const userBye = matchesToSimulate.find(m => (m.home === myTeam.id && m.away === 'BYE') || (m.away === myTeam.id && m.home === 'BYE'));
        if (userBye) {
            alert(`O ${myTeam.name} folga nesta rodada!`);
            simulatedRoundMatches.forEach(m => {
                m.currentHomeGoals = calculateGoals(m.homeTeam, m.awayTeam, m);
                m.currentAwayGoals = calculateGoals(m.awayTeam, m.homeTeam, m);
            });
            finishMatchSimulation();
            return;
        }
        if (simulatedRoundMatches.length > 0) userSimMatch = simulatedRoundMatches[0];
        else { finishMatchSimulation(); return; }
    }

    // Mensagem informativa se o usuário não estiver na partida
    const isWatching = userSimMatch.home !== myTeam.id && userSimMatch.away !== myTeam.id;
    if (isWatching) addCommentaryItem(`📺 Você está assistindo a este jogo como espectador neutro.`, 'info', 0);

    const phaseNames = ["Final", "Semifinal", "Quartas", "Oitavas", "Fase de 32"];
    let title = `Rodada ${currentRound} / ${matchSchedule.length}`;
    
    if (isCupMode || isLibertadoresMode) {
        const compNames = getCompetitionNames(myTeam.league);
        const currentType = matchSchedule[currentRound - 1].type;
        if (isCupMode) {
            title = `${compNames.cup} - ${phaseNames[Math.log2(simulatedRoundMatches.length)] || "Copa"}`;
        } else {
            title = `${compNames.continental} - ${phaseNames[Math.log2(simulatedRoundMatches.length)] || "Continental"}`;
        }
    }

    document.getElementById('live-round-title').innerText = title;
    document.getElementById('live-home-name').innerText = userSimMatch.homeTeam.name;
    document.getElementById('live-home-shield').src = userSimMatch.homeTeam.shield;
    document.getElementById('live-home-shield').onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${userSimMatch.homeTeam.name}&background=random`;
    };
    
    document.getElementById('live-away-name').innerText = userSimMatch.awayTeam.name;
    document.getElementById('live-away-shield').src = userSimMatch.awayTeam.shield;
    document.getElementById('live-away-shield').onerror = function() { this.src = `https://ui-avatars.com/api/?name=${userSimMatch.awayTeam.name}&background=random`; };
    document.getElementById('live-match-stadium').innerText = userSimMatch.homeTeam.stadium || 'Estádio';

    const liveStadImg = document.getElementById('live-stadium-img');
    const liveStadLock = userSimMatch.homeTeam.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    liveStadImg.style.display = 'block';
    liveStadImg.src = userSimMatch.homeTeam.stadiumImg || `https://loremflickr.com/400/150/stadium,soccer,football?lock=${liveStadLock}`;
    
    document.getElementById('live-home-score').innerText = 0;
    document.getElementById('live-away-score').innerText = 0;
    document.getElementById('live-match-minute').innerText = 0;
    document.getElementById('live-progress-bar').style.width = '0%';
    
    document.getElementById('live-commentary-list').innerHTML = '';
    const othersList = document.getElementById('live-others-list');
    othersList.innerHTML = '';

    simulatedRoundMatches.forEach((m, idx) => {
        const li = document.createElement('li');
        li.id = `live-other-${idx}`;
        li.className = `live-others-item ${m === userSimMatch ? 'user-match' : ''}`;
        li.innerHTML = `
            <span class="live-others-team left" style="font-weight: ${m.home === myTeam.id ? 'bold' : 'normal'};">${m.homeTeam.name}</span>
            <span class="live-others-score left-score">0</span>
            <span class="live-others-separator">x</span>
            <span class="live-others-score right-score">0</span>
            <span class="live-others-team right" style="font-weight: ${m.away === myTeam.id ? 'bold' : 'normal'};">${m.awayTeam.name}</span>
        `;
        othersList.appendChild(li);
    });

    document.getElementById('btn-live-continue').style.display = 'none';
    document.getElementById('btn-live-continue').onclick = finishMatchSimulation;
    const skipBtn = document.querySelector('button[onclick="skipMatch()"]');
    if (skipBtn) skipBtn.style.display = 'inline-block';
    
    const relatorioDiv = document.getElementById('relatorio-fim-de-jogo');
    if (relatorioDiv) relatorioDiv.style.display = 'none';
    
    showScreen('screen-match-live');
    simMinute = 0;
    subsUsedInMatch = 0;
    windowsUsedInMatch = 0;
    subMadeInThisSession = false;
    
    playSFX('whistle');
    setSimSpeed('slow');
}

function renderUserList() {
    const list = document.getElementById('saved-users-list');
    if (!list) return;
    list.innerHTML = '';
    const userNames = Object.keys(users);
    if (userNames.length === 0) {
        list.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center;">Nenhum usuário salvo.</p>';
        return;
    }
    userNames.forEach(name => {
        const item = document.createElement('div');
        item.className = 'player-item';
        item.style.padding = '8px 12px';
        item.style.marginBottom = '5px';
        item.innerHTML = `
            <div class="player-info" style="cursor: pointer; flex: 1;" onclick="document.getElementById('login-username').value='${name}'">
                <span class="player-name" style="font-size: 0.9rem;">${name}</span>
            </div>
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.7rem; color: #f44336; min-width: auto;" onclick="deleteUser('${name}')">Apagar</button>
        `;
        list.appendChild(item);
    });
}

function deleteUser(name) {
    if (confirm(`Deseja apagar o usuário "${name}"?`)) {
        delete users[name];
        try {
            localStorage.setItem('brasfoot_users', JSON.stringify(users));
        } catch (e) {
            console.warn("localStorage indisponível. Usando sessão em memória.", e);
        }
        renderUserList();
    }
}

function initChampionship(selectedLeague = 'brazil_a') {
    window.globalLeagueRounds = {};
    window.globalLeagueCurrentRoundIdx = {};
    const ALL_LEAGUES = ['brazil_a', 'brazil_b', 'england', 'spain', 'germany', 'italy', 'france', 'portugal', 'arabia', 'mls'];
    
    ALL_LEAGUES.forEach(lg => {
        const lTeams = allTeams.filter(t => t.league === lg);
        if (lTeams.length === 0) return;
        
        let tIds = lTeams.map(t => t.id);
        if (tIds.length % 2 !== 0) tIds.push('BYE');
        let nTeams = tIds.length;
        let lRounds = [];
        
        for (let round = 0; round < nTeams - 1; round++) {
            let matches = [];
            for (let i = 0; i < nTeams / 2; i++) {
                let home = tIds[i];
                let away = tIds[nTeams - 1 - i];
                matches.push(round % 2 === 1 && i === 0 ? { home: away, away: home } : { home, away });
            }
            lRounds.push(matches);
            tIds.splice(1, 0, tIds.pop());
        }
        
        let secondHalf = lRounds.map(roundMatches => 
            roundMatches.map(match => ({ home: match.away, away: match.home }))
        );
        
        window.globalLeagueRounds[lg] = [...lRounds, ...secondHalf];
        window.globalLeagueCurrentRoundIdx[lg] = 0;
    });

    const leagueTeams = allTeams.filter(t => t.league === selectedLeague);
    if (leagueTeams.length === 0) return;

    standings = leagueTeams.map(t => ({
        id: t.id, name: t.name, shield: t.shield,
        p: 0, j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0
    }));

    let teamsIds = leagueTeams.map(t => t.id);
    if (teamsIds.length % 2 !== 0) teamsIds.push('BYE');
    let numTeams = teamsIds.length;
    let leagueRounds = [];

    for (let round = 0; round < numTeams - 1; round++) {
        let matches = [];
        for (let i = 0; i < numTeams / 2; i++) {
            let home = teamsIds[i];
            let away = teamsIds[numTeams - 1 - i];
            matches.push(round % 2 === 1 && i === 0 ? { home: away, away: home } : { home, away });
        }
        leagueRounds.push(matches);
        teamsIds.splice(1, 0, teamsIds.pop());
    }

    let secondHalf = leagueRounds.map(roundMatches => 
        roundMatches.map(match => ({ home: match.away, away: match.home }))
    );
    
    let fullLeague = [...leagueRounds, ...secondHalf];
    matchSchedule = [];
    const isBrazil = selectedLeague.startsWith('brazil');
    const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(selectedLeague);
    
    let leagueIdx = 0;
    let currentRoundCounter = 1;
    const cupIndices = [4, 8, 12, 16, 20, 24, 28, 32];
    const continentalIndices = [2, 4, 6, 9, 12, 15, 18, 21, 24, 27];

    while (leagueIdx < fullLeague.length) {
        if ((isBrazil || isEurope) && cupIndices.includes(currentRoundCounter)) {
            matchSchedule.push({ type: 'cup', matches: [] });
        } else if ((isBrazil || isEurope) && continentalIndices.includes(currentRoundCounter)) {
            matchSchedule.push({ type: 'continental', matches: [] });
        } else {
            matchSchedule.push({ type: 'league', matches: fullLeague[leagueIdx] });
            leagueIdx++;
        }
        currentRoundCounter++;
    }
    
    // Adiciona a rodada do Mundial Intercontinental no fim do ano
    matchSchedule.push({ type: 'intercontinental', matches: [] });
}

function initCopaDoBrasil(silent = false) { 
    if (cupBracket.length > 0) return;
    cupFinished = false;
    let participants = [];
    if (myTeam.league.startsWith('brazil')) {
        participants = allTeams.filter(t => t.league === 'brazil_a' || t.league === 'brazil_b');
    } else {
        participants = allTeams.filter(t => t.league === myTeam.league);
    }

    let shuffled = [...participants].sort(() => 0.5 - Math.random());
    let count = Math.pow(2, Math.floor(Math.log2(shuffled.length)));
    if (count > 32) count = 32;
    const selected = shuffled.slice(0, count);
    
    let firstRound = [];
    for (let i = 0; i < selected.length; i += 2) {
        firstRound.push({ home: selected[i].id, away: selected[i+1].id, homeGoals: 0, awayGoals: 0, played: false });
    }
    cupBracket = [firstRound];
}

document.addEventListener('DOMContentLoaded', () => { 
    try {
        // O listener para toggle-link já está no HTML via onclick="toggleLoginMode()"
        // para evitar dupla execução, não adicionamos via JS aqui.

        const bypassButton = document.getElementById('btn-bypass-login');
        if (bypassButton) bypassButton.addEventListener('click', bypassLogin);

        renderUserList();
        const loginInput = document.getElementById('login-username');
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
            loginInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleLogin(e);
            });
        }
        const passwordInput = document.getElementById('login-password');
        if (passwordInput) {
            passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleLogin(e);
            });
        }
        const loginButton = document.getElementById('btn-login-action');
        if (loginButton) loginButton.addEventListener('click', handleLogin);
        setInterval(() => { if (currentUser) saveGame(); }, 300000);
    } catch (e) {
        console.error("Erro fatal na inicialização dos listeners de login:", e);
        alert("Ocorreu um erro ao carregar a página. Por favor, recarregue.");
    }
});

// Função para retomar a simulação após o intervalo
function resumeSimulationAfterHalftime() {
    // FIX CRÍTICO: Null-check para evitar crash se o botão não existir
    const continueBtn = document.getElementById('btn-live-continue');
    if (continueBtn) {
        continueBtn.style.display = 'none'; // Esconde o botão novamente
        continueBtn.innerHTML = '<i class="fas fa-check"></i> Continuar'; // Restaura o texto original
        continueBtn.onclick = finishMatchSimulation; // Restaura a função original para o final do jogo
    }

    addCommentaryItem("🔊 Começa o segundo tempo! A bola volta a girar no gramado.", "info", 46);

    // Reinicia a simulação com a velocidade ativa
    const activeSpeedBtn = document.querySelector('.btn-speed.active');
    let speedType = 'slow'; // Padrão
    if (activeSpeedBtn) {
        if (activeSpeedBtn.id === 'btn-speed-normal') speedType = 'normal';
        else if (activeSpeedBtn.id === 'btn-speed-fast') speedType = 'fast';
        else if (activeSpeedBtn.id === 'btn-speed-ultra') speedType = 'ultra';
    }
    setSimSpeed(speedType);
}

function viewCupBracket() {
    if (cupBracket.length === 0) initCopaDoBrasil(true);
    showScreen('screen-cup');
    renderCupBracket();
}

// Verifica o fim da temporada e mostra a tela de campeão/resumo
// antigo `checkSeasonEnd()` removido — usar `endOfSeason()`

// Função orquestradora de Fim de Temporada (ordem precisa)
function endOfSeason() {
    try {
        // 1. Identificar o fim: só executa se a última rodada foi ultrapassada
        if (!(typeof currentRound === 'number' && Array.isArray(matchSchedule) && currentRound > matchSchedule.length)) return;

        // --- HALL OF FAME: Atualização de Fim de Temporada ---
        if (myTeam && myTeam.hallOfFame) {
            // Título da Liga
            if (standings[0] && standings[0].id === myTeam.id) {
                const compNames = getCompetitionNames(myTeam.league);
                myTeam.hallOfFame.titles.push({ year: currentYear, title: compNames.league });
            }

            // Artilheiros e Lendas
            myTeam.squad.forEach(p => {
                // Atualiza artilheiros
                const scorerIndex = myTeam.hallOfFame.topScorers.findIndex(s => s.playerId === p.id);
                if (scorerIndex > -1) {
                    myTeam.hallOfFame.topScorers[scorerIndex].goals = p.allTimeStats.goals;
                } else {
                    if (p.allTimeStats.goals > 0) {
                        myTeam.hallOfFame.topScorers.push({ playerId: p.id, name: p.name, goals: p.allTimeStats.goals });
                    }
                }

                // Verifica se virou lenda
                const isLegend = myTeam.hallOfFame.legends.some(l => l.playerId === p.id);
                if (!isLegend) {
                    if (p.allTimeStats.matches >= 200 || p.allTimeStats.goals >= 100) {
                        const reason = p.allTimeStats.matches >= 200 ? `Disputou ${p.allTimeStats.matches} jogos` : `Marcou ${p.allTimeStats.goals} gols`;
                        myTeam.hallOfFame.legends.push({ playerId: p.id, name: p.name, reason: reason });
                        alert(`⭐ LENDA DO CLUBE! ${p.name} entrou para o Hall da Fama!`);
                    }
                }
            });
        }

        // 2. Classificações e Vagas (ler posições finais antes de limpar a tabela)
        sortStandings();
        const nextLibParticipants = [];
        const nextSulParticipants = [];

        const baseLeague = (myTeam && myTeam.league) ? myTeam.league.replace('_b', '').replace('_a', '') : '';
        const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(baseLeague);

        if (cupWinnerId) nextLibParticipants.push(cupWinnerId);
        if (libertadoresWinnerId && !nextLibParticipants.includes(libertadoresWinnerId)) nextLibParticipants.push(libertadoresWinnerId);
        if (sulamericanaWinnerId && !nextLibParticipants.includes(sulamericanaWinnerId)) nextLibParticipants.push(sulamericanaWinnerId);
        let localLibCount = nextLibParticipants.length;
        let localSulCount = 0;

        const maxLib = isEurope ? 4 : 7;
        const maxSul = isEurope ? 2 : 6;

        standings.forEach(t => {
            if (localLibCount < maxLib && !nextLibParticipants.includes(t.id)) {
                nextLibParticipants.push(t.id);
                localLibCount++;
            } else if (localSulCount < maxSul && !nextLibParticipants.includes(t.id)) {
                nextSulParticipants.push(t.id);
                localSulCount++;
            }
        });

        // Preenchimento continental (garante 32 vagas por competição)
        if (isEurope) {
            let continentalPool = allTeams.filter(t => ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(t.league) && t.league !== myTeam.league);
            continentalPool = continentalPool.sort((a,b) => b.strength - a.strength);

            const neededLib = 32 - nextLibParticipants.length;
            continentalPool.slice(0, neededLib).forEach(t => nextLibParticipants.push(t.id));

            const neededSul = 32 - nextSulParticipants.length;
            continentalPool.slice(neededLib, neededLib + neededSul).forEach(t => nextSulParticipants.push(t.id));
        } else {
            const poolEstrangeiros = allTeams.filter(t => t.league === 'south_america').sort(() => 0.5 - Math.random());
            const poolBrasil = allTeams.filter(t => t.league === 'brazil_a' && t.league !== myTeam.league).sort((a,b) => b.strength - a.strength);

            const neededLib = 32 - nextLibParticipants.length;
            const vagasEstLibMin = Math.min(6, neededLib);
            const estLibIds = new Set(nextLibParticipants);

            const estLibFill = poolEstrangeiros.filter(t => !estLibIds.has(t.id)).slice(0, vagasEstLibMin);
            estLibFill.forEach(t => nextLibParticipants.push(t.id));

            const estLibIds2 = new Set(nextLibParticipants);
            const brLibFill = poolBrasil.filter(t => !estLibIds2.has(t.id)).slice(0, 32 - nextLibParticipants.length);
            brLibFill.forEach(t => nextLibParticipants.push(t.id));

            if (nextLibParticipants.length < 32) {
                const usedIds = new Set(nextLibParticipants);
                poolEstrangeiros.filter(t => !usedIds.has(t.id)).slice(0, 32 - nextLibParticipants.length).forEach(t => nextLibParticipants.push(t.id));
            }

            const neededSul = 32 - nextSulParticipants.length;
            const vagasEstSulMin = Math.min(6, neededSul);
            const estSulIds = new Set([...nextLibParticipants, ...nextSulParticipants]);

            const estSulFill = poolEstrangeiros.filter(t => !estSulIds.has(t.id)).slice(0, vagasEstSulMin);
            estSulFill.forEach(t => nextSulParticipants.push(t.id));

            const estSulIds2 = new Set([...nextLibParticipants, ...nextSulParticipants]);
            const brSulFill = poolBrasil.filter(t => !estSulIds2.has(t.id)).slice(0, 32 - nextSulParticipants.length);
            brSulFill.forEach(t => nextSulParticipants.push(t.id));

            if (nextSulParticipants.length < 32) {
                const usedIds = new Set([...nextLibParticipants, ...nextSulParticipants]);
                allTeams.filter(t => t.league === 'south_america' && !usedIds.has(t.id)).slice(0, 32 - nextSulParticipants.length).forEach(t => nextSulParticipants.push(t.id));
            }
        }

        libertadoresParticipants = nextLibParticipants;
        sulAmericanaParticipants = nextSulParticipants;

        // 2b. Aplica regras de promoção/rebaixamento ANTES de limpar a tabela
        try { processPromotionsAndRelegations(); } catch (e) { console.warn('Erro ao processar subidas/descidas:', e); }

        // 3. Virar o Ano e Limpar Tabela (só depois de distribuir as vagas)
        currentYear = (currentYear || new Date().getFullYear()) + 1;

        // Zera os pontos e estatísticas da classificação
        if (Array.isArray(standings)) {
            standings.forEach(t => {
                t.p = 0; t.j = 0; t.v = 0; t.e = 0; t.d = 0; t.gp = 0; t.gc = 0; t.sg = 0;
            });
        }
        // Também limpa campos similares em allTeams caso existam
        allTeams.forEach(t => {
            if (t && typeof t === 'object') {
                if (t.p !== undefined) { t.p = 0; t.j = 0; t.v = 0; t.e = 0; t.d = 0; t.gp = 0; t.gc = 0; t.sg = 0; }
            }
        });
        currentRound = 1;

        // 4. Envelhecimento: incrementa a idade de todos os jogadores
        allTeams.forEach(team => {
            if (!team || !Array.isArray(team.squad)) return;
            team.squad.forEach(player => {
                try {
                    player.age = (player.age || 18) + 1;
                    // mantém compatibilidade com possíveis propriedades em pt
                    if (!player.allTimeStats) player.allTimeStats = { goals: 0, assists: 0, matches: 0 };

                    if (player.idade !== undefined) player.idade = player.age;
                    else player.idade = player.age;
                } catch (e) {}
            });
        });

        // 5. Novo Calendário: reinicializa competições respeitando as novas ligas
        try {
            isCupMode = false; cupBracket = []; cupWinnerId = null; cupRunnerUpId = null; cupFinished = false;
            isLibertadoresMode = false; libertadoresPhase = 'groups'; libertadoresBracket = []; libertadoresGroups = []; libertadoresGroupStandings = [];
            isSulAmericanaMode = false; sulAmericanaBracket = []; /* BUG FIX: sulAmericanaParticipants não deve ser limpo aqui */ sulAmericanaPhase = 'groups'; sulAmericanaGroups = []; sulAmericanaGroupStandings = [];
            initChampionship(myTeam.league);
        } catch (e) { console.warn('Erro ao gerar novo calendário:', e); }

        // 6. Interface: mostrar resumo e boas-vindas à nova época
        try {
            const champEl = document.getElementById('champion-msg');
            if (champEl) champEl.innerHTML = `Fim de Temporada! As vagas foram distribuídas. Bem-vindo à época ${currentYear}.`;
            const nameEl = document.getElementById('champion-name');
            if (nameEl && standings[0]) nameEl.innerText = standings[0].name;
            const shieldEl = document.getElementById('champion-shield');
            if (shieldEl && standings[0]) shieldEl.src = standings[0].shield || '';
            saveGame();
            showScreen('screen-champion');
        } catch (e) {
            console.warn('Erro ao mostrar resumo de fim de temporada:', e);
        }

    } catch (err) {
        console.error('Erro no endOfSeason():', err);
    }
}

// Lógica UNIVERSAL de troca de times entre as ligas A e B do mesmo país
function processPromotionsAndRelegations() {
    let summaryText = "";
    
    const baseLeague = myTeam.league.replace('_b', '').replace('_a', '');
    const leagueA_name = (baseLeague === 'brazil') ? 'brazil_a' : baseLeague;
    const leagueB_name = (baseLeague === 'brazil') ? 'brazil_b' : baseLeague + '_b';
    
    // Identifica as ligas antes das alterações para evitar que times rebaixados subam no mesmo turno
    const leagueA = allTeams.filter(t => t.league === leagueA_name);
    const leagueB = allTeams.filter(t => t.league === leagueB_name);

    if (myTeam.league === leagueA_name) {
        // Rebaixar os 4 últimos da Série A (baseado na tabela de classificação recém-encerrada)
        const relegated = standings.slice(-4);
        const relegatedIds = relegated.map(t => t.id);

        // Promover os 4 melhores da Série B (baseado em força, do pool original da B)
        const promoted = leagueB.sort((a, b) => b.strength - a.strength).slice(0, 4);
        const promotedIds = promoted.map(t => t.id);

        allTeams.forEach(t => {
            if (relegatedIds.includes(t.id)) t.league = leagueB_name;
            if (promotedIds.includes(t.id)) t.league = leagueA_name;
        });

        summaryText = `⬇️ Rebaixados para a 2ª Divisão: ${relegated.map(t => t.name).join(', ')}.<br>` +
                      `⬆️ Promovidos para a 1ª Divisão: ${promoted.map(t => t.name).join(', ')}.`;
    } 
    else if (myTeam.league === leagueB_name) {
        // Promover os 4 primeiros da Série B (baseado na tabela de classificação)
        const promoted = standings.slice(0, 4);
        const promotedIds = promoted.map(t => t.id);

        // Rebaixar os 4 piores da Série A (baseado em força, do pool original da A)
        const relegated = leagueA.sort((a, b) => a.strength - b.strength).slice(0, 4);
        const relegatedIds = relegated.map(t => t.id);

        allTeams.forEach(t => {
            if (promotedIds.includes(t.id)) t.league = leagueA_name;
            if (relegatedIds.includes(t.id)) t.league = leagueB_name;
        });

        summaryText = `⬆️ Promovidos para a 1ª Divisão: ${promoted.map(t => t.name).join(', ')}.<br>` +
                      `⬇️ Rebaixados para a 2ª Divisão: ${relegated.map(t => t.name).join(', ')}.`;
    }

    document.getElementById('relegation-summary').innerHTML = summaryText;
}

// Reinicia o estado para uma nova temporada mantendo o progresso dos times
function startNextSeason() {
    // 1. Avançar o ano
    currentYear++;
    
    // Geração de jovens da Escola de Formação (Fornada Anual)
    generateYouthIntake(myTeam);

    // 2. Recuperar as energias e evoluir jogadores
    allTeams.forEach(team => {
        if (team.squad) {
            const loanedOut = team.squad.filter(p => p.isLoaned);
            loanedOut.forEach(p => {
                delete p.isLoaned;
                p.energy = 100;
                p.yellowCards = 0;
                p.suspensionRounds = 0;
                // Aqui você poderia adicionar lógica para devolver ao time original, 
                // mas para simplificar o MVP, eles apenas são resetados.
            });

            let newSquad = [];
            team.squad.forEach(p => {
                p.energy = 100;
                p.injuryRounds = 0;
                p.yellowCards = 0;
                p.suspensionRounds = 0;
                
                // --- NOVA MECÂNICA: ENVELHECIMENTO, EVOLUÇÃO E APOSENTADORIA ---
                p.age = (p.age || 18) + 1;
                let matches = p.matchesPlayed || 0;
                
                if (p.age <= 23) {
                    if (matches >= 15) p.strength += Math.floor(Math.random() * 3) + 1; // +1 a +3
                    else p.strength += Math.floor(Math.random() * 2); // 0 a +1
                } else if (p.age <= 31) {
                    if (matches >= 20 || (p.goals + p.assists) >= 5) p.strength += 1;
                    else p.strength -= 1;
                } else {
                    p.strength -= Math.floor(Math.random() * 2) + 1; // -1 a -2
                }
                
                p.strength = Math.max(40, Math.min(99, Math.round(p.strength) || 40));
                p.matchesPlayed = 0;
                p.goals = 0;
                p.assists = 0;
                
                let retireChance = 0;
                if (p.age === 38 || p.age === 39) retireChance = 0.8;
                else if (p.age >= 40) retireChance = 1.0;
                
                if (Math.random() >= retireChance) {
                    newSquad.push(p);
                }
            });
            team.squad = newSquad;
            
            // Repor jogadores para times controlados pela CPU (manter mínimo de 18)
            if (team.id !== myTeam?.id && team.squad.length < 18) {
                let playerIdCounter = Date.now() + Math.floor(Math.random() * 10000);
                const needed = 18 - team.squad.length;
                const genericPositions = ['GOL', 'ZAG', 'LAT', 'MEI', 'ATA'];
                for (let i = 0; i < needed; i++) {
                    const pos = genericPositions[Math.floor(Math.random() * genericPositions.length)];
                    team.squad.push({
                        id: playerIdCounter++,
                        name: `Jogador ${team.squad.length + 1} ${team.name.split(' ')[0]}`,
                        position: pos,
                        strength: Math.round(team.strength - 5 + Math.random() * 10),
                        energy: 100, goals: 0, assists: 0, yellowCards: 0, suspensionRounds: 0, injuryRounds: 0, redCardInMatch: false,
                        isStarter: false,
                        age: Math.floor(Math.random() * (30 - 18 + 1)) + 18,
                        matchesPlayed: 0
                    });
                }
            }
            
            // --- NOVA MECÂNICA: ESCOLAS DE FORMAÇÃO ---
            if (team.id === myTeam.id) {
                const acLevel = team.academyLevel || 1;
                // Entre 1 e 3 jogadores, mas níveis maiores tem mais chance de ser 2-3
                const maxPlayers = Math.min(3, Math.max(1, Math.floor(acLevel / 2) + 1));
                const numPlayers = Math.floor(Math.random() * maxPlayers) + 1;
                
                for (let i = 0; i < numPlayers; i++) {
                    const positions = ['ATA', 'MEI', 'VOL', 'LAT', 'ZAG', 'GOL'];
                    const pos = positions[Math.floor(Math.random() * positions.length)];
                    const strength = 30 + (acLevel * 5) + Math.floor(Math.random() * 10);
                    const youngPlayer = {
                        id: 'youth_' + Date.now() + '_' + i,
                        name: `Jovem Promessa ${Math.floor(Math.random() * 999)}`,
                        position: pos,
                        strength: strength,
                        age: 16 + Math.floor(Math.random() * 2), // 16 ou 17 anos
                        price: 50000 + (acLevel * 50000),
                        salary: 2000 + (acLevel * 500),
                        energy: 100,
                        yellowCards: 0,
                        suspensionRounds: 0,
                        injuryRounds: 0,
                        isStarter: false,
                        matchesPlayed: 0
                    };
                    team.squad.push(youngPlayer);
                }
                console.log(`Gerados ${numPlayers} jovens promessas para a equipa.`);
            }
            // ------------------------------------------
        }
    });

    // 2. Resetar variáveis de controle
    currentRound = 1;
    
    // Resetar estados de competições para nova temporada
    isCupMode = false;
    cupBracket = [];
    cupWinnerId = null;
    cupRunnerUpId = null;
    isLibertadoresMode = false;
    libertadoresPhase = 'groups';
    libertadoresBracket = [];
    libertadoresGroupStandings = [];
    libertadoresGroups = [];

    // 3. Reinicializar o campeonato com a nova configuração de times nas ligas
    initChampionship(myTeam.league);
    
    // 4. Informar ao usuário em qual divisão ele está começando
    if (myTeam.league === 'brazil_a' || myTeam.league === 'brazil_b') {
        const leagueName = myTeam.league === 'brazil_a' ? 'Série A' : 'Série B';
        console.log(`Temporada iniciada na ${leagueName}.`);
    }

    showScreen('screen-main');
    updateDashboardUI();
}

// Abre o painel de táticas ao vivo
function openLiveTactics() {
    // Pause live simulation while tactics modal is open
    simController.stop();
    simInterval = null;
    
    document.getElementById('live-tactics-formation').value = myTeam.tactics.formation;
    document.getElementById('live-tactics-mentality').value = myTeam.tactics.mentality;
    document.getElementById('live-tactics-laterais').value = myTeam.tactics.laterais;
    
    livePlayerToSwapId = null;
    renderLiveModalSquad();
    
    document.getElementById('live-tactics-modal').style.display = 'flex';
}

// Fecha o modal de táticas ao vivo e retoma a simulação
function closeLiveTactics() {
    document.getElementById('live-tactics-modal').style.display = 'none';
    
    updateLiveTacticsSettings();
    updateTeamStrength();
    
    // Se o jogador realizou pelo menos uma substituição fora do intervalo, consome uma janela
    if (subMadeInThisSession && simMinute > 0 && simMinute < 90 && simMinute !== 45) {
        windowsUsedInMatch++;
    }

    const activeSpeedBtn = document.querySelector('.btn-speed.active');
    let speedType = 'slow';
    if (activeSpeedBtn) {
        if (activeSpeedBtn.id === 'btn-speed-normal') speedType = 'normal';
        else if (activeSpeedBtn.id === 'btn-speed-fast') speedType = 'fast';
        else if (activeSpeedBtn.id === 'btn-speed-ultra') speedType = 'ultra';
    }
    setSimSpeed(speedType);
}

// Salva as táticas alteradas no modal ao vivo
function updateLiveTacticsSettings() {
    if (!myTeam || !myTeam.tactics) return;
    
    myTeam.tactics.formation = document.getElementById('live-tactics-formation').value;
    myTeam.tactics.mentality = document.getElementById('live-tactics-mentality').value;
    myTeam.tactics.laterais = document.getElementById('live-tactics-laterais').value;
    
    myTeam.formation = myTeam.tactics.formation;
    saveGame();
}

// Renderiza a escalação dentro do modal de táticas ao vivo
function renderLiveModalSquad() {
    if (!myTeam) return;
    
    const listStarters = document.getElementById('live-modal-starters');
    const listReserves = document.getElementById('live-modal-reserves');
    
    listStarters.innerHTML = '';
    listReserves.innerHTML = '';
    
    const header = document.querySelector('.live-modal-header h2');
    if (header) {
        header.innerHTML = `Substituições: ${subsUsedInMatch}/5 | Janelas: ${windowsUsedInMatch}/3`;
    }

    const posOrder = { 'GOL': 1, 'ZAG': 2, 'LAT': 3, 'MEI': 4, 'ATA': 5 };
    myTeam.squad.sort((a, b) => posOrder[a.position] - posOrder[b.position]);
    
    myTeam.squad.forEach(player => {
        const item = document.createElement('div');
        const isSuspended = player.suspensionRounds > 0;
        const hasLeft = player.hasLeftMatch || player.injuryRounds > 0 || isSuspended;
        item.className = `live-modal-item ${livePlayerToSwapId === player.id ? 'selected' : ''}`;
        if (hasLeft) item.style.opacity = "0.4";
        
        const injuryLabel = player.injuryRounds > 0 ? ` <span style="font-size:0.7rem;">🤕 (${player.injuryRounds}rd)</span>` : "";
        const suspLabel = isSuspended ? ` <span style="font-size:0.7rem; color: #f44336;">🚫 (SUSP)</span>` : "";
        const yellowLabel = (player.yellowCards > 0 && !isSuspended) ? ` <span style="color: #ffd700; font-size: 0.75rem;">🟨 ${player.yellowCards}</span>` : "";

        item.innerHTML = `
            <div class="player-info" style="display: flex; align-items: center; gap: 8px;">
                <span class="player-pos" style="font-weight: 800; color: var(--text-muted); font-size: 0.75rem; min-width: 55px;">${player.position} <span style="font-weight:normal;">i${player.age}</span></span>
                <span class="player-name">${player.name}${injuryLabel}${suspLabel}${yellowLabel}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span class="stat-str" style="color: var(--primary-color); font-weight: bold;">${player.strength}</span>
                <span class="stat-ene" style="color: #2196f3; font-size: 0.75rem;">${player.energy}%</span>
                ${!hasLeft ? `<button class="btn btn-secondary btn-swap" style="padding: 2px 5px; font-size: 0.7rem; min-width: 45px;" onclick="selectLivePlayerToSwap(${player.id})">
                    ${livePlayerToSwapId === player.id ? 'Canc' : 'Trocar'}
                </button>` : `<span style="font-size: 0.7rem; color: #f44336; font-weight: bold;">SAIU</span>`}
            </div>
        `;
        
        if (player.isStarter) {
            listStarters.appendChild(item);
        } else {
            listReserves.appendChild(item);
        }
    });
}

// Lógica de substituição ao vivo
function selectLivePlayerToSwap(playerId) {
    if (livePlayerToSwapId === null) {
        livePlayerToSwapId = playerId;
    } else if (livePlayerToSwapId === playerId) {
        livePlayerToSwapId = null;
    } else {
        const p1 = myTeam.squad.find(p => p.id === livePlayerToSwapId);
        const p2 = myTeam.squad.find(p => p.id === playerId);
        
        if (p1 && p2 && p1.isStarter !== p2.isStarter) {
            const starter = p1.isStarter ? p1 : p2;
            const reserve = p1.isStarter ? p2 : p1;

            // 1. Jogador que saiu não pode reentrar
            if (reserve.hasLeftMatch) {
                alert("Este jogador já saiu da partida e não pode retornar.");
                livePlayerToSwapId = null;
                renderLiveModalSquad();
                return;
            }

            if (reserve.injuryRounds > 0) {
                alert("Este jogador está no departamento médico e não pode entrar.");
                livePlayerToSwapId = null;
                renderLiveModalSquad();
                return;
            }

            if (reserve.suspensionRounds > 0) {
                alert("Este jogador está cumprindo suspensão e não pode entrar.");
                livePlayerToSwapId = null;
                renderLiveModalSquad();
                return;
            }

            // 2. Limite de 5 Substituições
            if (subsUsedInMatch >= 5) {
                alert("Você já atingiu o limite de 5 substituições.");
                livePlayerToSwapId = null;
                renderLiveModalSquad();
                return;
            }

            // 3. Limite de 3 Janelas (exceto intervalo)
            const isInterval = (simMinute === 0 || simMinute === 45 || simMinute === 90);
            if (!isInterval && windowsUsedInMatch >= 3 && !subMadeInThisSession) {
                alert("Você não possui mais janelas de substituição com a bola rolando (limite de 3).");
                livePlayerToSwapId = null;
                renderLiveModalSquad();
                return;
            }

            const temp = p1.isStarter;
            p1.isStarter = p2.isStarter;
            p2.isStarter = temp;
            
            starter.hasLeftMatch = true; // Marca que o titular saiu definitivamente
            reserve.playedInMatch = true; // Adiciona o reserva que entrou na lista de participantes
            subsUsedInMatch++;
            subMadeInThisSession = true;
            addCommentaryItem(`🔄 <strong>Substituição no ${myTeam.name}:</strong> Entra ${p1.isStarter ? p1.name : p2.name} no lugar de ${p1.isStarter ? p2.name : p1.name}.`, 'info', simMinute);
        } else {
            alert("Você só pode trocar um titular por um reserva.");
        }
        livePlayerToSwapId = null;
    }
    renderLiveModalSquad();
}

function updateStandings(teamId, goalsFor, goalsAgainst) {
    let team = standings.find(t => t.id === teamId);
    if (!team) return; // Proteção crucial: se o time não está na liga, ignore a atualização
    
    team.j += 1;
    team.gp += goalsFor;
    team.gc += goalsAgainst;
    team.sg = team.gp - team.gc;

    if (goalsFor > goalsAgainst) {
        team.v += 1;
        team.p += 3;
    } else if (goalsFor === goalsAgainst) {
        team.e += 1;
        team.p += 1;
    } else {
        team.d += 1;
    }
}

function finishMatchSimulation() {
    // Cancela o timeout pendente do fim da simulação se existir
    if (window.endSimTimeout) {
        clearTimeout(window.endSimTimeout);
        window.endSimTimeout = null;
    }

    // FIX CRÍTICO: Guard contra chamada dupla
    if (window.finishMatchRunning) {
        console.warn('finishMatchSimulation: chamada dupla ignorada.');
        return;
    }
    window.finishMatchRunning = true;

    try {
        console.log('[FIM DO JOGO] finishMatchSimulation iniciada.');
        
        // Oculta o botão de continuar
        const continueBtn = document.getElementById('btn-live-continue');
        if (continueBtn) continueBtn.style.display = 'none';

        // --- ANÁLISE TÁTICA ---
        try {
            if (userSimMatch && (userSimMatch.home === myTeam.id || userSimMatch.away === myTeam.id)) {
                const isHome = userSimMatch.home === myTeam.id;
                const oppId = isHome ? userSimMatch.away : userSimMatch.home;
                const oppTeam = allTeams.find(t => t.id === oppId);
                if (oppTeam && oppTeam.tactics) {
                    const oppPlaystyle = oppTeam.tactics.playstyle || 'Equilibrado';
                    const oppMentality = oppTeam.tactics.mentality || 'Equilibrado';
                    addCommentaryItem(`📊 <strong>Análise Tática:</strong> O ${oppTeam.name} tentou sufocar com ${oppPlaystyle} (${oppMentality}).`, 'info', 90);
                }
            }
        } catch(tacticErr) {
            console.warn('[FIM DO JOGO] Erro na análise tática:', tacticErr);
        }

        console.log('[FIM DO JOGO] Iniciando cálculos financeiros...');
        const safeMatches = Array.isArray(simulatedRoundMatches) ? simulatedRoundMatches.filter(m => m && m.home && m.away) : [];
        
        // --- GESTÃO DE ESTÁDIO E FINANÇAS: Pagamento de Bilheteira ---
        safeMatches.forEach(m => {
            try {
                if (m.home === myTeam.id && m.revenue) {
                    const safeRevenue = isNaN(m.revenue) ? 0 : m.revenue;
                    myTeam.balance += safeRevenue;
                    const safeAttendance = isNaN(m.attendance) ? 0 : m.attendance;
                    addCommentaryItem(`💰 Receita de Bilheteira: R$ ${safeRevenue.toLocaleString('pt-BR')} (${safeAttendance.toLocaleString('pt-BR')} torcedores)`, 'info', 90);
                    
                    if (m.commerceRevenue && m.commerceRevenue > 0) {
                        const safeCommerce = isNaN(m.commerceRevenue) ? 0 : m.commerceRevenue;
                        myTeam.balance += safeCommerce;
                        addCommentaryItem(`🍔 Receita de Comércio: R$ ${safeCommerce.toLocaleString('pt-BR')}`, 'info', 90);
                    }
                }
            } catch(finErr) {
                console.warn('[FIM DO JOGO] Erro no cálculo financeiro de bilheteira:', finErr);
            }
        });
        
        // Pagamento de direitos de TV para o visitante
        if (userSimMatch && userSimMatch.away === myTeam.id) {
            myTeam.balance += 800000;
            addCommentaryItem(`📺 Direitos de TV: R$ 800.000`, 'info', 90);
        }
        
        // --- GESTÃO DE ESTÁDIO E FINANÇAS: Patrocinadores e Rescisões ---
        if (userSimMatch && (userSimMatch.home === myTeam.id || userSimMatch.away === myTeam.id)) {
            const userG = userSimMatch.home === myTeam.id ? (userSimMatch.currentHomeGoals || 0) : (userSimMatch.currentAwayGoals || 0);
            const oppG = userSimMatch.home === myTeam.id ? (userSimMatch.currentAwayGoals || 0) : (userSimMatch.currentHomeGoals || 0);
            const isHomeMatch = userSimMatch.home === myTeam.id;
            
            if (isNaN(myTeam.boardConfidence) || myTeam.boardConfidence == null) myTeam.boardConfidence = 80;
            
            if (userG > oppG) {
                myTeam.consecutiveLosses = 0;
                myTeam.boardConfidence = Math.min(100, myTeam.boardConfidence + 5);
            } else if (userG === oppG) {
                myTeam.consecutiveLosses = 0;
                if (isHomeMatch) {
                    myTeam.boardConfidence -= 2;
                } else {
                    myTeam.boardConfidence = Math.min(100, myTeam.boardConfidence + 1);
                }
            } else {
                myTeam.consecutiveLosses = (myTeam.consecutiveLosses || 0) + 1;
                if (oppG - userG >= 3) {
                    myTeam.boardConfidence -= 12;
                } else {
                    myTeam.boardConfidence -= 8;
                }
                
                // Notícia de crise
                if (myTeam.boardConfidence < 30) {
                    newsFeedItems.push({
                        type: 'crisis', club: myTeam.name, manager: currentUser
                    });
                }

                if (myTeam.consecutiveLosses >= 3) {
                    sponsorSlots.forEach(slot => {
                        if (myTeam.sponsorships && myTeam.sponsorships[slot] && Math.random() < 0.3) {
                            const brand = myTeam.sponsorships[slot].brand;
                            myTeam.sponsorships[slot] = null;
                            addCommentaryItem(`🚨 <strong>CRISE!</strong> A marca <strong>${brand}</strong> rescindiu o contrato de patrocínio (${slot}) devido aos maus resultados!`, 'red-card', 90);
                        }
                    });
                }
            }
            
            let sponIncome = 0;
            try {
                if (myTeam.sponsorships) {
                    sponsorSlots.forEach(slot => {
                        const contract = myTeam.sponsorships[slot];
                        if (contract) {
                            const safeValue = isNaN(contract.value) ? 0 : (contract.value || 0);
                            sponIncome += safeValue;
                            contract.duration--;
                            if (contract.duration <= 0) {
                                myTeam.sponsorships[slot] = null;
                                addCommentaryItem(`📜 O contrato de patrocínio com a <strong>${contract.brand}</strong> (${slot}) chegou ao fim.`, 'info', 90);
                            }
                        }
                    });
                }
            } catch(sponErr) {
                console.warn('[FIM DO JOGO] Erro no processamento de patrocinadores:', sponErr);
            }
            if (sponIncome > 0) {
                myTeam.balance += sponIncome;
                addCommentaryItem(`💰 Receita de Patrocínios: R$ ${sponIncome.toLocaleString('pt-BR')}`, 'info', 90);
            }
        }
        
        const currentRoundData = matchSchedule[currentRound - 1];
        const currentType = currentRoundData ? currentRoundData.type : 'league';
        
        if (isCupMode) {
            finishCupRound();
        } else if (currentType === 'continental') {
            finishLibertadoresRound();
            if (typeof finishSulAmericanaRound === 'function') finishSulAmericanaRound();
        } else if (currentType === 'intercontinental') {
            if (typeof finishIntercontinentalRound === 'function') finishIntercontinentalRound();
        } else {
            safeMatches.forEach(m => {
                try {
                    const hg = isNaN(m.currentHomeGoals) ? 0 : (m.currentHomeGoals || 0);
                    const ag = isNaN(m.currentAwayGoals) ? 0 : (m.currentAwayGoals || 0);
                    updateStandings(m.home, hg, ag);

                    // Gerar notícia de goleada
                    if (Math.abs(hg - ag) >= 4) {
                        const winner = hg > ag ? m.homeTeam : m.awayTeam;
                        const loser = hg > ag ? m.awayTeam : m.homeTeam;
                        newsFeedItems.push({
                            type: 'result', winner: winner.name, loser: loser.name, score: `${hg}-${ag}`
                        });
                    }

                    updateStandings(m.away, ag, hg);

                    if (m.home === myTeam.id || m.away === myTeam.id) {
                        const userG = m.home === myTeam.id ? hg : ag;
                        const oppG = m.home === myTeam.id ? ag : hg;
                        if (userG > oppG) myTeam.balance += 600000;
                        else if (userG === oppG) myTeam.balance += 250000;
                    }
                    
                    const roundIdx = currentRound - 1;
                    if (matchSchedule[roundIdx] && matchSchedule[roundIdx].matches) {
                        const scheduleMatch = matchSchedule[roundIdx].matches.find(sm => sm.home === m.home && sm.away === m.away);
                        if (scheduleMatch) {
                            scheduleMatch.homeScore = hg;
                            scheduleMatch.awayScore = ag;
                        }
                    }
                } catch(matchProcErr) {
                    console.warn('[FIM DO JOGO] Erro ao processar resultado:', matchProcErr, m);
                }
            });
            sortStandings();
        }

        allTeams.forEach(team => {
            if (!team.squad) return;
            team.squad.forEach(p => { // IDEIA 18: Recuperação de Lesão
                if (p.injuryRounds > 0) p.injuryRounds--;

                if (p.suspensionRounds > 0) p.suspensionRounds--;
                if (p.injuryRounds > 0) p.injuryRounds--;
                
                if ((p.yellowCards || 0) >= 3) {
                    p.suspensionRounds = 1;
                    p.yellowCards = 0;
                    p.isStarter = false;
                    if (team.id === myTeam.id) {
                        addCommentaryItem(`🚫 <strong>Suspensão:</strong> <strong>${p.name}</strong> acumulou 3 cartões amarelos e está suspenso para a próxima rodada.`, 'info', 90);
                    }
                }

                // IDEIA 20: Limpa o emoji de indisciplina após o jogo (dura apenas 1 rodada)
                if (p.emoji && team.id === myTeam.id) {
                    delete p.emoji;
                }

                if (p.playedInMatch) {
                    p.matchesPlayed = (p.matchesPlayed || 0) + 1;
                    
                    // --- LÓGICA DE DESGASTE FÍSICO POR IDADE ---
                    let baseEnergyLoss = p.startedMatch ? 20 : 10; // Desgaste padrão para 26-31 anos
                    if (p.age <= 25) {
                        baseEnergyLoss -= 5; // Jovens cansam menos
                    } else if (p.age >= 32) {
                        baseEnergyLoss += 10; // Veteranos cansam mais
                    }
                    
                    let energyLoss = baseEnergyLoss + Math.floor(Math.random() * 6) - 3; // Adiciona pequena variação
                    
                    if (team.id === myTeam.id && team.tactics && team.tactics.trainingFocus) {
                        if (team.tactics.trainingFocus === 'Intenso') energyLoss += 8;
                        if (team.tactics.trainingFocus === 'Recuperacao') energyLoss -= 8;
                    }
                    
                    p.energy = Math.max(0, (p.energy || 100) - energyLoss);
                    p.morale = Math.min(100, (p.morale || 100) + 5); // IDEIA 17
                    p.consecutiveMatchesNotPlayed = 0; // Zera o contador de jogos sem jogar
                    
                    // --- IDEIA 18: SISTEMA DE LESÕES ---
                    let injuryRisk = 0.015; // 1.5% de chance base por jogo
                    if ((p.energy || 100) < 60) {
                        injuryRisk *= 2; // Dobra a chance se a energia estiver baixa
                    }

                    if (team.id === myTeam.id && team.tactics && team.tactics.trainingFocus) {
                        if (team.tactics.trainingFocus === 'Intenso') injuryRisk *= 2.5;
                        if (team.tactics.trainingFocus === 'Recuperacao') injuryRisk /= 4;
                    }
                    
                    if (Math.random() < injuryRisk) {
                        const isSevere = Math.random() < 0.2; // 20% de chance de ser grave
                        let duration = isSevere ? Math.floor(Math.random() * 6) + 5 : Math.floor(Math.random() * 2) + 1; // 5-10 ou 1-2 rodadas
                        newsFeedItems.push({ type: 'injury', player: p.name, club: myTeam.name, duration: duration });
                        
                        // Aplica redução do Departamento Médico
                        const reduction = 1 - ((myTeam.medicalDeptLevel || 1) - 1) * 0.20;
                        p.injuryRounds = Math.max(1, Math.round(duration * reduction));
                        p.isStarter = false;
                        if (team.id === myTeam.id) {
                            alert(`🚑 LESÃO!

${p.name} lesionou-se e vai desfalcar a equipa por ${p.injuryRounds} rodada(s)!`);
                        }
                    }
                    
                    if (p.age && p.age <= 19) {
                        if (Math.random() < 0.15) {
                            p.strength = Math.min(99, p.strength + 1);
                            if (team.id === myTeam.id) {
                                addCommentaryItem(`🌟 <strong>Evolução:</strong> O jovem <strong>${p.name}</strong> ganhou experiência em campo e evoluiu para OVR ${p.strength}!`, 'info', 90);
                            }
                        }
                    }
                    
                } else if (!p.injuryRounds || p.injuryRounds === 0) {
                    let energyGain = 25;
                    if (team.id === myTeam.id && team.tactics && team.tactics.trainingFocus) {
                        if (team.tactics.trainingFocus === 'Intenso') energyGain -= 10;
                        if (team.tactics.trainingFocus === 'Recuperacao') energyGain += 15;
                    }
                    p.energy = Math.min(100, (p.energy || 100) + energyGain);
                    // --- IDEIA 17: SISTEMA DE PROGRESSÃO DE INSATISFAÇÃO ---
                    if (team.id === myTeam.id) {
                        if (!p.suspensionRounds || p.suspensionRounds === 0) {
                            p.morale = Math.max(0, (p.morale || 100) - 5);
                            p.consecutiveMatchesNotPlayed = (p.consecutiveMatchesNotPlayed || 0) + 1;
                            
                            if (p.consecutiveMatchesNotPlayed === 4) {
                                p.emoji = '😢';
                                alert(`💬 MENSAGEM DO JOGADOR\n\n${p.name} enviou uma mensagem: "Mister, estou chateado por não ter minutos em campo. Preciso jogar!"`);
                            } else if (p.consecutiveMatchesNotPlayed === 7) {
                                p.emoji = '😡';
                                alert(`🚨 INSATISFAÇÃO EXTREMA!\n\n${p.name} perdeu a paciência: "Isso é um absurdo! Não vim para ser banco. Ou eu jogo, ou vou embora!"`);
                            } else if (p.consecutiveMatchesNotPlayed === 10) {
                                p.emoji = '⛔';
                                p.morale = 0;
                                alert(`🚪 JOGADOR PEDIU PARA SAIR!\n\n${p.name} estourou de vez: "Minha paciência acabou! Quero ser negociado imediatamente. Pode me colocar na lista de transferências!"`);
                            }
                        } else {
                            p.consecutiveMatchesNotPlayed = 0; // Suspenso não conta como "barrado"
                        }
                    } else {
                        p.morale = Math.max(0, (p.morale || 100) - 5);
                    }

                }
                delete p.playedInMatch;
                delete p.startedMatch;
                delete p.matchYellowCards;
            });
        });

    } catch (globalError) {
        console.error('ERRO EM FINISHMATCHSIMULATION:', globalError);
    } finally {
        // Garante a liberação dos guards, incremento da rodada e retorno à tela principal
        
        // --- SISTEMA DE SALÁRIOS: Desconto da folha salarial ---
        if (myTeam && myTeam.squad) {
            const payroll = myTeam.squad.reduce((acc, p) => acc + (p.salario || 0), 0);
            if (payroll > 0) {
                myTeam.balance -= payroll;
                addCommentaryItem(`💸 Folha Salarial: R$ ${payroll.toLocaleString('pt-BR')} foram deduzidos do caixa.`, 'info', 90);
            }
        }
        // ----------------------------------------------------

        window.finishMatchRunning = false;
        window.simulationEnded = false;
        
        // Guardar resultados da rodada atual para exibição no painel
        if (simulatedRoundMatches && simulatedRoundMatches.length > 0) {
            lastRoundResults = simulatedRoundMatches.map(m => ({
                homeName: m.homeTeam ? m.homeTeam.name : m.home,
                awayName: m.awayTeam ? m.awayTeam.name : m.away,
                homeId: m.home,
                awayId: m.away,
                homeGoals: m.currentHomeGoals || 0,
                awayGoals: m.currentAwayGoals || 0
            }));
        }

        currentRound++;

        // IDEIA 19: Verifica se deve checar por propostas de outros clubes
        if (isTransferWindowOpen()) {
            setTimeout(checkForIncomingBids, 1000); // Pequeno delay para não sobrepor alertas
        }
        setTimeout(checkForManagerOffers, 1500); // Verifica propostas para o técnico
        isCupMode = false;
        isLibertadoresMode = false;

        const finBtn = document.getElementById('btn-live-continue');
        if (finBtn) finBtn.style.display = 'none';

        try { updateDashboardUI(); } catch (err) { console.warn('Erro ao atualizar UI do dashboard:', err); }
        try { saveGame(); } catch (err) { console.warn('Erro ao salvar jogo:', err); }

        try {
            showScreen('screen-main');
        } catch (e) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            const main = document.getElementById('screen-main');
            if (main) main.classList.add('active');
        }

        try { if (myTeam) updateDynamicBackground(myTeam.id); } catch(e) {}
        window.scrollTo(0, 0);

        // Verifica Demissão ou Alerta de Confiança
        setTimeout(() => {
            try {
                if (myTeam && myTeam.boardConfidence <= 0) {
                    const sackedModal = document.getElementById('modal-sacked');
                    if (sackedModal) sackedModal.style.display = 'flex';
                } else if (myTeam && myTeam.boardConfidence <= 15) {
                    alert("Aviso da Direção: Estás em risco de ser despedido devido aos maus resultados!");
                }
            } catch(e) {}
        }, 800);
    }
}


// Variável global para armazenar oferta espontânea temporária
let pendingSpontaneousOffer = null;

function showJobMarket() {
    const modal = document.getElementById('modal-sacked');
    if (modal) modal.style.display = 'none';
    
    // Devolve o clube atual à gestão da IA (opcional: resetar confianca)
    if (myTeam) {
        myTeam.boardConfidence = 80; 
    }
    
    showScreen('screen-job-market');
    generateJobOffers();
}

function generateJobOffers() {
    const container = document.getElementById('job-offers-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Sortear equipas
    // Filtramos para não oferecer o próprio clube que acabou de o despedir, e separar por força
    let validTeams = allTeams.filter(t => String(t.id) !== String(myTeam.id));
    
    // Separa equipas fracas (overall < 74) e medias (75-80)
    let weakTeams = validTeams.filter(t => t.strength < 75);
    let midTeams = validTeams.filter(t => t.strength >= 75 && t.strength <= 81);
    
    // Se por acaso as listas estiverem vazias, usamos tudo
    if (weakTeams.length === 0) weakTeams = validTeams;
    if (midTeams.length === 0) midTeams = validTeams;
    
    // Sorteia 2 fracos e 1 médio
    const offers = [];
    
    // Helper para extrair aleatório e remover do array
    const popRandom = (arr) => {
        if (arr.length === 0) return null;
        const idx = Math.floor(Math.random() * arr.length);
        return arr.splice(idx, 1)[0];
    };
    
    const w1 = popRandom(weakTeams);
    if (w1) offers.push(w1);
    const w2 = popRandom(weakTeams);
    if (w2) offers.push(w2);
    
    const m1 = popRandom(midTeams);
    if (m1) offers.push(m1);
    
    // Renderiza
    offers.forEach(team => {
        const div = document.createElement('div');
        div.style.background = 'rgba(255,255,255,0.05)';
        div.style.borderRadius = '8px';
        div.style.padding = '20px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.border = '1px solid rgba(255,255,255,0.1)';
        
        div.innerHTML = `
            <img src="${team.logo}" alt="${team.name}" style="width:60px; height:60px; object-fit:contain; margin-bottom:10px;">
            <h4 style="margin:0 0 5px 0;">${team.name}</h4>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:15px;">
                Overall: ${team.strength} <br>
                Orçamento: R$ ${((team.balance || 1000000) / 1000000).toFixed(1)}M
            </div>
            <button class="btn btn-primary" onclick="acceptJobOffer('${team.id}')" style="width:100%; margin-top:auto;">
                Assinar Contrato
            </button>
        `;
        container.appendChild(div);
    });
}

function acceptJobOffer(teamId) {
    const newTeam = allTeams.find(t => String(t.id) === String(teamId));
    if (!newTeam) return;
    
    myTeam = newTeam;
    myTeam.boardConfidence = 80;
    
    // Garante que o estado do novo clube está ok
    ensureSafeState(myTeam, false);
    
    // Muda de ecrã para o principal e atualiza o dashboard, mantendo a rodada
    showScreen('screen-main');
    updateDashboardUI();
    saveGame();
    
    alert(`Contrato Assinado!\n\nBem-vindo ao ${myTeam.name}. A direção conta contigo para salvar a época!`);
}

function acceptSpontaneousJobOffer() {
    if (!pendingSpontaneousOffer) return;
    
    const modal = document.getElementById('modal-job-offer');
    if (modal) modal.style.display = 'none';
    
    acceptJobOffer(pendingSpontaneousOffer.id);
    pendingSpontaneousOffer = null;
}

function rejectSpontaneousJobOffer() {
    const modal = document.getElementById('modal-job-offer');
    if (modal) modal.style.display = 'none';
    pendingSpontaneousOffer = null;
    
    // Bónus de lealdade: A direção adora a sua recusa de propostas rivais
    if (myTeam) {
        myTeam.boardConfidence = Math.min(100, myTeam.boardConfidence + 5);
        saveGame();
    }
}


function finishCupRound() {
    console.log("finishCupRound: Iniciando...");
    const winners = [];
    simulatedRoundMatches.forEach(m => {
        let hg = m.currentHomeGoals;
        let ag = m.currentAwayGoals;
        if (hg === ag) { // Desempate por pênaltis simples
            if (Math.random() > 0.5) hg++; else ag++;
        }
        const winnerId = hg > ag ? m.home : m.away;
        const runnerUpId = hg > ag ? m.away : m.home;
        winners.push(allTeams.find(t => t.id === winnerId));
        const compNames = getCompetitionNames(myTeam.league);

        if (simulatedRoundMatches.length === 1) {
            cupWinnerId = winnerId;
            cupRunnerUpId = runnerUpId;
        }

        if (m.home === myTeam.id || m.away === myTeam.id) {
            if (winnerId === myTeam.id) {
                const prize = 2500000; // Bônus fixo por avançar
                myTeam.balance += prize;
                addCommentaryItem(`💰 ${compNames.cup}: O ${myTeam.name} avançou e recebeu R$ ${(prize/1000000).toFixed(1)}M!`, 'info', 90);
            } else {
                addCommentaryItem(`❌ COPA: O ${myTeam.name} foi eliminado.`, 'info', 90);
            }
        }
    });

    if (winners.length >= 2) {
        const nextPhase = [];
        for (let i = 0; i < winners.length; i += 2) {
            if (winners[i+1]) {
                nextPhase.push({ home: winners[i].id, away: winners[i+1].id, currentHomeGoals: 0, currentAwayGoals: 0 });
            }
        }
        cupBracket.push(nextPhase);
    } else if (winners.length === 1) {
        cupFinished = true; // Marca a copa como encerrada para não repetir a final
        const champion = winners[0];
        const compNames = getCompetitionNames(myTeam.league);
        alert(`🏆 FIM DA COPA! O ${champion.name} é o campeão da ${compNames.cup}!`);
        if (champion.id === myTeam.id) {
            const finalPrize = 10000000;
            myTeam.hallOfFame.titles.push({ year: currentYear, title: compNames.cup });
            myTeam.balance += finalPrize;
        }
    }
}

function finishLibertadoresRound() {
    console.log("finishLibertadoresRound: Iniciando...");
    const libMatches = simulatedRoundMatches.filter(m => libertadoresParticipants.includes(m.home));
    if (libMatches.length === 0) return;

    if (libertadoresPhase === 'groups') {
        console.log("finishLibertadoresRound: Processando fase de grupos.");
        libMatches.forEach(m => {
            const homeId = m.home;
            const awayId = m.away;
            let h = libertadoresGroupStandings.find(s => s.id === homeId);
            let a = libertadoresGroupStandings.find(s => s.id === awayId);
            
            if (!h || !a) return; // Segurança contra times não encontrados
            // FIX BUG #2: m.homeTeam pode ser undefined em partidas continentais (sem enriquecimento)
            // Usa fallback seguro para o log
            const htName = (m.homeTeam && m.homeTeam.name) ? m.homeTeam.name : m.home;
            const atName = (m.awayTeam && m.awayTeam.name) ? m.awayTeam.name : m.away;
            console.log(`finishLibertadoresRound: Processando partida de grupo ${htName} vs ${atName}`);

            h.j++; a.j++; h.gp += m.currentHomeGoals; h.gc += m.currentAwayGoals; a.gp += m.currentAwayGoals; a.gc += m.currentHomeGoals;
            h.sg = h.gp - h.gc; a.sg = a.gp - a.gc;
            if (m.currentHomeGoals > m.currentAwayGoals) { 
                if (h) { h.p += 3; h.v++; } if (a) a.d++; 
                if (homeId === myTeam.id) myTeam.balance += 1650000; 
            }
            else if (m.currentHomeGoals < m.currentAwayGoals) { 
                if (a) { a.p += 3; a.v++; } if (h) h.d++; 
                if (awayId === myTeam.id) myTeam.balance += 1650000; 
            }
            else { 
                h.p++; a.p++; h.e++; a.e++; 
                if (homeId === myTeam.id || awayId === myTeam.id) myTeam.balance += 600000; // Bônus por empate
            }
        });

        const libRound = matchSchedule.slice(0, currentRound).filter(r => r.type === 'libertadores').length;
        if (libRound >= 6 && libertadoresPhase === 'groups') {
            console.log("finishLibertadoresRound: Fim da fase de grupos, definindo oitavas.");
            libertadoresPhase = 'knockout';
            const qualifiers = [];
            libertadoresGroups.forEach(group => {
                const sorted = libertadoresGroupStandings.filter(s => s.group === group.name).sort((a,b) => b.p - a.p || b.sg - a.sg);
                qualifiers.push(sorted[0]?.id || 'BYE', sorted[1]?.id || 'BYE');
            });
            const r16 = [];
            for(let i=0; i<8; i++) {
                const home = qualifiers[i];
                const away = qualifiers[15-i];
                if (home && away) r16.push({home, away, currentHomeGoals: 0, currentAwayGoals: 0});
            }
            libertadoresBracket.push(r16);
            console.log("Libertadores: Oitavas definidas.");
        }
    } else {
        console.log("finishLibertadoresRound: Processando fase de mata-mata.");
        const currentPhase = libMatches;
        const winners = [];
        currentPhase.forEach(m => {
            let homeGoals = m.currentHomeGoals;
            let awayGoals = m.currentAwayGoals;
            if (homeGoals === awayGoals) {
                if (Math.random() > 0.5) homeGoals++; else awayGoals++;
            }
            // FIX BUG #3: m.homeTeam pode ser undefined em partidas de mata-mata continental
            const htNameKO = (m.homeTeam && m.homeTeam.name) ? m.homeTeam.name : m.home;
            const atNameKO = (m.awayTeam && m.awayTeam.name) ? m.awayTeam.name : m.away;
            console.log(`finishLibertadoresRound: Processando partida de mata-mata ${htNameKO} vs ${atNameKO}`);
            const winnerId = homeGoals > awayGoals ? m.home : m.away;
            const winnerObj = allTeams.find(t => t.id === winnerId);
            if (winnerObj) winners.push(winnerObj);
            const isEurope = ['england', 'spain', 'italy', 'france', 'germany', 'portugal', 'arabia'].includes(myTeam.league);
            const compName = isEurope ? "Champions League" : "Libertadores";
            if (m.home === myTeam.id || m.away === myTeam.id) {
                if (winnerId === myTeam.id) {
                    const prizes = {
                        8: 6250000,   // Vitória nas Oitavas (Avança p/ Quartas)
                        4: 8500000,   // Vitória nas Quartas (Avança p/ Semi)
                        2: 11500000,  // Vitória na Semi (Garante prêmio de Vice)
                        1: 80000000   // Vitória na Final (~R$ 115M total acumulado do campeão)
                    };
                    const prize = prizes[currentPhase.length] || 0;
                    if (prize > 0) {
                        myTeam.balance += prize; // FIX: Corrigido para usar o nome dinâmico da competição
                        if (currentPhase.length === 1) myTeam.hallOfFame.titles.push({ year: currentYear, title: compName });
                        addCommentaryItem(`🌎 ${compName.toUpperCase()}: O ${myTeam.name} recebeu R$ ${(prize/1000000).toFixed(1)}M por avançar de fase!`, 'info', 90);
                    }
                    if (currentPhase.length === 1) addCommentaryItem("GLÓRIA ETERNA! Você é o campeão da América!", 'info', 90);
                }
            }
        });
        if (winners.length >= 2) {
            const nextPhase = [];
            for (let i = 0; i < winners.length; i += 2) {
                if (winners[i] && winners[i+1]) {
                    nextPhase.push({ home: winners[i].id, away: winners[i+1].id, currentHomeGoals: 0, currentAwayGoals: 0 });
                }
            }
            libertadoresBracket.push(nextPhase);
        } else if (winners.length === 1 && winners[0]) {
            alert(`GLÓRIA ETERNA! O ${winners[0].name} conquistou a América!`);
            libertadoresWinnerId = winners[0].id;
            libertadoresBracket = [];
            isLibertadoresMode = false;
        }
    }
}

function renderCupBracket() {
    const list = document.getElementById('cup-matches-list');
    if (!list) return;
    list.innerHTML = '';
    const currentPhase = cupBracket[cupBracket.length - 1];
    if (!currentPhase) return;

    const phaseNames = ["Final", "Semifinal", "Quartas de Final", "Oitavas de Final", "Fase de 32"];
    const titleEl = document.getElementById('cup-phase-title');
    if (titleEl) titleEl.innerText = phaseNames[Math.log2(currentPhase.length)] || "Copa";

    currentPhase.forEach(match => {
        const home = allTeams.find(t => t.id === match.home) || { name: 'A definir' };
        const away = allTeams.find(t => t.id === match.away) || { name: 'A definir' };
        const div = document.createElement('div');
        div.className = 'match-preview';
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        div.innerHTML = `<div style="display:flex; justify-content: space-between; width: 100%;"><span>${home.name}</span> <strong>VS</strong> <span>${away.name}</span></div>`;
        list.appendChild(div);
    });
}

function sortStandings() {
    standings.sort((a, b) => {
        if (b.p !== a.p) return b.p - a.p; // Pontos
        if (b.v !== a.v) return b.v - a.v; // Vitórias
        if (b.sg !== a.sg) return b.sg - a.sg; // Saldo de gols
        return b.gp - a.gp; // Gols pró
    });
}

function renderStandings() {
    sortStandings();
    const tbody = document.getElementById('standings-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const standingsTitle = document.getElementById('standings-title');
    if (standingsTitle && myTeam) {
        const compNames = getCompetitionNames(myTeam.league);
        standingsTitle.innerText = `Classificação - ${compNames.league}`;
    }

    standings.forEach((team, index) => {
        const tr = document.createElement('tr');
        
        // Determina as zonas de classificação dinamicamente com base na liga
        const league = myTeam.league;
        
        let isTier1 = false;
        let isTier2 = false;
        let isTier3 = false;
        let isRelegation = false;
        let isPlayoffs = false;

        let rankText = `${index + 1}`;
        let rankClass = '';

        if (league === 'portugal') {
            if (index < 2) { isTier1 = true; rankText += ' (CL)'; }
            else if (index < 3) { isTier2 = true; rankText += ' (EL)'; }
            else if (index < 5) { isTier3 = true; rankText += ' (ECL)'; }
            else if (index >= standings.length - 3) { isRelegation = true; rankText += ' (Des)'; }
        } else if (['england', 'spain', 'italy', 'germany', 'france'].includes(league)) {
            if (index < 4) { isTier1 = true; rankText += ' (CL)'; }
            else if (index < 6) { isTier2 = true; rankText += ' (EL)'; }
            else if (index < 7) { isTier3 = true; rankText += ' (ECL)'; }
            else if (index >= standings.length - 3) { 
                isRelegation = true; 
                rankText += league === 'france' ? ' (Z4)' : ' (Z3)'; 
            }
        } else if (league === 'brazil_a') {
            if (index < 6) { isTier1 = true; rankText += ' (LIB)'; }
            else if (index < 12) { isTier2 = true; rankText += ' (SUL)'; }
            else if (index >= standings.length - 4) { isRelegation = true; rankText += ' (Z4)'; }
        } else if (league === 'brazil_b') {
            if (index < 4) { isTier1 = true; rankText += ' (G4)'; }
            else if (index >= standings.length - 4) { isRelegation = true; rankText += ' (Z4)'; }
        } else if (league === 'arabia') {
            if (index < 3) { isTier1 = true; rankText += ' (ACL)'; }
            else if (index >= standings.length - 3) { isRelegation = true; rankText += ' (Z3)'; }
        } else if (league === 'mls') {
            if (index < 1) { isTier1 = true; rankText += ' (CCC)'; }
            else if (index < 9) { isPlayoffs = true; rankText += ' (PO)'; }
        } else {
            // Fallback genérico
            if (index < 4) { isTier1 = true; rankText += ' (CL)'; }
            else if (index >= standings.length - 3) { isRelegation = true; rankText += ' (Z3)'; }
        }

        const isLibertadoresCupWinner = team.id === cupWinnerId;
        const isLibertadoresCupRunnerUp = team.id === cupRunnerUpId;
        const isLibertadoresCup = isLibertadoresCupWinner || isLibertadoresCupRunnerUp;

        // Se houver taça nacional (copa do país)
        if (isLibertadoresCupWinner) {
            rankText = `${index + 1} 🏆`;
            rankClass = 'libertadores-rank';
            tr.classList.add('row-libertadores-cup');
        } else if (isLibertadoresCupRunnerUp) {
            rankText = `${index + 1} 🥈`;
            rankClass = 'libertadores-rank';
            tr.classList.add('row-libertadores-cup');
        } else {
            if (isTier1) {
                rankClass = 'libertadores-rank';
                tr.classList.add('libertadores-zone');
            } else if (isTier2) {
                rankClass = 'sulamericana-rank';
                tr.classList.add('sulamericana-zone');
            } else if (isTier3 || isPlayoffs) {
                rankClass = 'sulamericana-rank';
                tr.classList.add('sulamericana-zone');
            } else if (isRelegation) {
                rankClass = 'relegation-rank';
                tr.classList.add('relegation-zone');
            }
        }

        if (team.id === myTeam.id) tr.classList.add('row-my-team');

        tr.innerHTML = `
            <td class="${rankClass}">${rankText}</td>
            <td class="standings-team-cell" style="cursor: pointer;" onclick="viewOpponentSquad('${team.id}')">
                <img src="${team.shield}" alt="${team.name}" onerror="this.src='https://ui-avatars.com/api/?name=${team.name}&background=random'">
                ${team.name}
            </td>
            <td>${team.p}</td>
            <td>${team.j}</td>
            <td>${team.v}</td>
            <td>${team.e}</td>
            <td>${team.d}</td>
            <td>${team.gp}</td>
            <td>${team.gc}</td>
            <td>${team.sg}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Obtém os modificadores táticos de ataque e defesa baseados nas táticas da equipe
function getTeamTacticalModifiers(team) {
    let attackMod = 1.0;
    let defenseMod = 1.0;

    // Segurança para times genéricos (evita crash)
    if (!team.tactics || !team.squad) return { attackMod, defenseMod };

    if (team.tactics) {
        // 1. Mentalidade
        if (team.tactics.mentality === 'Ofensivo') {
            attackMod += 0.20;
            defenseMod += 0.15; // Mais exposto a sofrer gols
        } else if (team.tactics.mentality === 'Defensivo') {
            attackMod -= 0.15;
            defenseMod -= 0.20; // Defesa mais sólida, sofre menos gols
        }
        // Equilibrado mantém os multiplicadores em 1.0

        // 2. Laterais
        if (team.tactics.laterais === 'Apoiando') {
            attackMod += 0.10;
            defenseMod += 0.10; // Sobem e deixam espaço atrás
        }

        // 3. Capitão (Liderança dá bônus de organização geral)
        if (team.tactics.captain) {
            const captainObj = team.squad.find(p => p.id === team.tactics.captain);
            if (captainObj && captainObj.isStarter) {
                const captainBonus = (captainObj.strength / 100) * 0.05;
                attackMod += captainBonus * 0.4;
                defenseMod -= captainBonus * 0.6; // Maior peso defensivo por organização
            }
        }

        // 4. Cobradores de Faltas e Escanteios
        if (team.tactics.freekicks) {
            const fkPlayer = team.squad.find(p => p.id === team.tactics.freekicks);
            if (fkPlayer && fkPlayer.isStarter) {
                attackMod += (fkPlayer.strength / 100) * 0.03;
            }
        }
        if (team.tactics.corners) {
            const cornerPlayer = team.squad.find(p => p.id === team.tactics.corners);
            if (cornerPlayer && cornerPlayer.isStarter) {
                attackMod += (cornerPlayer.strength / 100) * 0.02;
            }
        }
        
        // 5. Foco de Treino Semanal
        const trainingFocus = team.tactics.trainingFocus || 'Equilibrado';
        if (trainingFocus === 'Intenso') {
            attackMod += 0.05;
            defenseMod -= 0.05; // attackMod > 1 gives more power, defenseMod < 1 gives more solid defense. Wait, let's look at mentality.
            // Mentality: 'Ofensivo' -> defenseMod += 0.15 (Mais exposto a sofrer gols).
            // Intenso should just increase both attacking and defending power (so attackMod+, defenseMod-).
            // Let's use:
            // attackMod += 0.05;
            // defenseMod -= 0.05;
        } else if (trainingFocus === 'Tecnico') {
            attackMod += 0.08;
        } else if (trainingFocus === 'Recuperacao') {
            attackMod -= 0.03;
            defenseMod += 0.03;
        }
    }

    return { attackMod, defenseMod };
}

// Função de cálculo dos gols
function calculateGoals(teamA, teamB, match = null) {
    // 75% Titulares + 25% Força Base do Clube
    const actualStrA = calculateTeamStrength(teamA);
    const actualStrB = calculateTeamStrength(teamB);
    const strengthA = (actualStrA * 0.75) + (teamA.strength * 0.25);
    const strengthB = (actualStrB * 0.75) + (teamB.strength * 0.25);
    
    // Obter modificadores táticos
    let modA = getTeamTacticalModifiers(teamA);
    const modB = getTeamTacticalModifiers(teamB);
    
    // --- GESTÃO DE ESTÁDIO: Bónus de Adeptos ---
    // Em simulateMatch/fast-forward, teamA é home quando a função é chamada na primeira linha
    // e teamA é away na segunda linha (m.awayTeam, m.homeTeam). Portanto, apenas aplicamos
    // o bónus se houver a match reference passada e formos explicitamente a homeTeam.
    if (match && match.homeTeam && match.homeTeam.id === teamA.id) {
        modA.attackMod *= 1.075;
        modA.defenseMod *= 1.075;
        if (match.attendanceRate > 0.85) {
            modA.attackMod *= 1.025;
            modA.defenseMod *= 1.025;
        }
    }
    // ------------------------------------------
    
    // Força efetiva ponderada
    let effectiveStrengthA = strengthA * modA.attackMod * modB.defenseMod;
    let effectiveStrengthB = strengthB * modB.attackMod * modA.defenseMod;
    
    // --- ESTILO DE JOGO (PEDRA-PAPEL-TESOURA) ---
    if (teamA.tactics && teamB.tactics) {
        const styleA = teamA.tactics.playstyle || 'Posse de Bola';
        const styleB = teamB.tactics.playstyle || 'Posse de Bola';
        
        if (styleA === 'Posse de Bola' && styleB === 'Contra-Ataque') {
            effectiveStrengthA *= 1.10;
        } else if (styleA === 'Contra-Ataque' && styleB === 'Pressão Alta') {
            effectiveStrengthA *= 1.10;
        } else if (styleA === 'Pressão Alta' && styleB === 'Posse de Bola') {
            effectiveStrengthA *= 1.10;
        }
        
        // E o inverso para o B (caso seja ele a ter vantagem sobre o A)
        if (styleB === 'Posse de Bola' && styleA === 'Contra-Ataque') {
            effectiveStrengthB *= 1.10;
        } else if (styleB === 'Contra-Ataque' && styleA === 'Pressão Alta') {
            effectiveStrengthB *= 1.10;
        } else if (styleB === 'Pressão Alta' && styleA === 'Posse de Bola') {
            effectiveStrengthB *= 1.10;
        }
    }
    // --------------------------------------------
    
    // Exponenciação para forçar domínio das equipas mais fortes
    const ratio = Math.pow(effectiveStrengthA / effectiveStrengthB, 1.5);
    
    // Sorte (0.0 até 1.0)
    const luck = Math.random();
    
    // Cálculo base - mais agressivo para quem é superior
    let expectedGoals = (ratio * 1.8) + (luck * 2.2) - 1.2;
    
    // Bônus expresivo se jogar em casa E for superior
    if (effectiveStrengthA > effectiveStrengthB && match && match.homeTeam && match.homeTeam.id === teamA.id) {
        expectedGoals += 0.8;
    } else if (effectiveStrengthA > effectiveStrengthB) {
        expectedGoals += 0.4;
    }
    
    // Arredonda e impede placares negativos
    let goals = Math.round(expectedGoals);
    if (goals < 0) goals = 0;
    
    return goals;
}

// Função pura para calcular a força média dos titulares de qualquer time
function calculateTeamStrength(team) {
    if (!team || !team.squad) return 0;
    const starters = team.squad.filter(p => p.isStarter);
    if (starters.length === 0) return 0;
    
    // Usa a força efetiva (com penalização de posição) se disponível
    const totalStrength = starters.reduce((acc, p) => acc + (p.effectiveStrength || p.strength), 0);
    // Divide pela quantidade ideal (11) para penalizar times que jogam desfalcados
    return Math.round(totalStrength / 11);
}

// Atualiza a força do time baseado nos 11 titulares
function updateTeamStrength() {
    if (!myTeam) return;
    
    myTeam.strength = calculateTeamStrength(myTeam);
    
    const strengthEl = document.getElementById('my-team-strength');
    if (strengthEl) strengthEl.innerText = myTeam.strength;
}

// ============================================================
// ⚽ SISTEMA DE PENALIZAÇÃO FORA DE POSIÇÃO
// Mapeamento de posições ideais e cálculo de força efetiva
// ============================================================

const OUT_OF_POSITION_PENALTY = 0.85; // 15% de redução

// Mapeamento: para cada posição base do jogador (GOL, ZAG, LAT, MEI, ATA),
// define quais siglas táticas do campo 2D são consideradas compatíveis.
const positionCompatibility = {
    'GOL': ['GO'],
    'ZAG': ['ZC', 'AD', 'AE'],
    'LAT': ['LD', 'LE', 'AD', 'AE'],
    'MEI': ['VO', 'MC', 'AM', 'MD', 'ME'],
    'ATA': ['CA', 'PD', 'PE', 'AT']
};

// Calcula a força efetiva de um jogador na posição tática atribuída no campo.
// Retorna { effectiveStrength, isOutOfPosition }
function calcEffectiveStrength(player, slotPosText) {
    if (!player || !slotPosText) return { effectiveStrength: player.strength, isOutOfPosition: false };
    
    const compatible = positionCompatibility[player.position] || [];
    const isOutOfPosition = !compatible.includes(slotPosText);
    
    let effectiveStrength = isOutOfPosition 
        ? Math.floor(player.strength * OUT_OF_POSITION_PENALTY) 
        : player.strength;
        
    if ((player.energy || 100) < 60) {
        effectiveStrength = Math.floor(effectiveStrength * 0.8);
    }
    if ((player.morale || 100) < 40) {
        effectiveStrength = Math.floor(effectiveStrength * 0.9);
    }
    
    return { effectiveStrength, isOutOfPosition };
}

// Variáveis para a mecânica de substituição no campo 2D
let selectedPitchPlayerId = null;
let selectedReservePlayerId = null;

const pitchCoordinates = {
    '4-3-3': [
        { left: 50, top: 88, posText: 'GO', sector: 'gk' },
        { left: 82, top: 72, posText: 'LD', sector: 'df' },
        { left: 60, top: 74, posText: 'ZC', sector: 'df' },
        { left: 40, top: 74, posText: 'ZC', sector: 'df' },
        { left: 18, top: 72, posText: 'LE', sector: 'df' },
        { left: 50, top: 56, posText: 'VO', sector: 'mf' },
        { left: 72, top: 48, posText: 'MC', sector: 'mf' },
        { left: 28, top: 48, posText: 'MC', sector: 'mf' },
        { left: 80, top: 24, posText: 'PD', sector: 'fw' },
        { left: 50, top: 18, posText: 'CA', sector: 'fw' },
        { left: 20, top: 24, posText: 'PE', sector: 'fw' }
    ],
    '4-4-2': [
        { left: 50, top: 88, posText: 'GO', sector: 'gk' },
        { left: 82, top: 72, posText: 'LD', sector: 'df' },
        { left: 60, top: 74, posText: 'ZC', sector: 'df' },
        { left: 40, top: 74, posText: 'ZC', sector: 'df' },
        { left: 18, top: 72, posText: 'LE', sector: 'df' },
        { left: 62, top: 54, posText: 'VO', sector: 'mf' },
        { left: 38, top: 54, posText: 'VO', sector: 'mf' },
        { left: 80, top: 46, posText: 'MD', sector: 'mf' },
        { left: 20, top: 46, posText: 'ME', sector: 'mf' },
        { left: 60, top: 20, posText: 'AT', sector: 'fw' },
        { left: 40, top: 20, posText: 'AT', sector: 'fw' }
    ],
    '4-2-3-1': [
        { left: 50, top: 88, posText: 'GO', sector: 'gk' },
        { left: 82, top: 72, posText: 'LD', sector: 'df' },
        { left: 60, top: 74, posText: 'ZC', sector: 'df' },
        { left: 40, top: 74, posText: 'ZC', sector: 'df' },
        { left: 18, top: 72, posText: 'LE', sector: 'df' },
        { left: 62, top: 58, posText: 'VO', sector: 'mf' },
        { left: 38, top: 58, posText: 'VO', sector: 'mf' },
        { left: 80, top: 38, posText: 'MD', sector: 'mf' },
        { left: 50, top: 36, posText: 'AM', sector: 'mf' },
        { left: 20, top: 38, posText: 'ME', sector: 'mf' },
        { left: 50, top: 16, posText: 'CA', sector: 'fw' }
    ],
    '3-5-2': [
        { left: 50, top: 88, posText: 'GO', sector: 'gk' },
        { left: 74, top: 74, posText: 'ZC', sector: 'df' },
        { left: 50, top: 76, posText: 'ZC', sector: 'df' },
        { left: 26, top: 74, posText: 'ZC', sector: 'df' },
        { left: 86, top: 52, posText: 'AD', sector: 'df' },
        { left: 62, top: 56, posText: 'VO', sector: 'mf' },
        { left: 38, top: 56, posText: 'VO', sector: 'mf' },
        { left: 50, top: 38, posText: 'AM', sector: 'mf' },
        { left: 14, top: 52, posText: 'AE', sector: 'df' },
        { left: 62, top: 20, posText: 'AT', sector: 'fw' },
        { left: 38, top: 20, posText: 'AT', sector: 'fw' }
    ],
    '5-3-2': [
        { left: 50, top: 88, posText: 'GO', sector: 'gk' },
        { left: 86, top: 70, posText: 'LD', sector: 'df' },
        { left: 68, top: 74, posText: 'ZC', sector: 'df' },
        { left: 50, top: 76, posText: 'ZC', sector: 'df' },
        { left: 32, top: 74, posText: 'ZC', sector: 'df' },
        { left: 14, top: 70, posText: 'LE', sector: 'df' },
        { left: 62, top: 50, posText: 'VO', sector: 'mf' },
        { left: 38, top: 50, posText: 'VO', sector: 'mf' },
        { left: 50, top: 38, posText: 'AM', sector: 'mf' },
        { left: 60, top: 20, posText: 'CA', sector: 'fw' },
        { left: 40, top: 20, posText: 'CA', sector: 'fw' }
    ]
};

function showPlayerMoodMessage(playerId) {
    if (!myTeam) return;
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;

    let emoji = player.emoji || ((player.morale||100) >= 80 ? '😊' : ((player.morale||100) >= 50 ? '😐' : '😢'));
    let msg = "";

    if (player.consecutiveMatchesNotPlayed >= 10) {
        msg = `Minha paciência acabou! Quero ser negociado imediatamente. Pode me colocar na lista de transferências!`;
    } else if (player.consecutiveMatchesNotPlayed >= 7) {
        msg = `Isso é um absurdo! Não vim para ser banco. Ou eu jogo, ou vou embora!`;
    } else if (emoji === '😡') {
        msg = `Acho que pegou pesado comigo chefe, aquela multa que me deu não foi justa.`;
    } else if (emoji === '⛔') {
        msg = `Estou treinando separado e barrado do jogo. Quero voltar a jogar, treinador!`;
    } else if (emoji === '😢' || (player.morale && player.morale < 50)) {
        if (player.consecutiveMatchesNotPlayed >= 4) {
            msg = `Estou chateado. Preciso de minutos em campo, não estou tendo oportunidades para jogar.`;
        } else if (player.salario < 10000) {
            msg = `Não estou feliz com o meu salário atual, acho que mereço uma valorização.`;
        } else {
            msg = `O clima não está muito bom para mim no time atualmente, as coisas não estão fluindo.`;
        }
    } else if (emoji === '😐' || (player.morale && player.morale >= 50 && player.morale < 80)) {
        msg = `Estou focado, treinador. Sempre buscando melhorar e ajudar a equipe no que for preciso.`;
    } else {
        msg = `Estou muito feliz no clube! O ambiente é ótimo e estou pronto para dar o meu melhor em campo! Vamo que vamo!`;
    }

    alert(`${player.name} diz:\n\n"${msg}"`);
}

function renderSquad() {
    if (!myTeam) return;

    document.getElementById('squad-team-name').innerText = myTeam.name;
    document.getElementById('squad-team-strength').innerText = myTeam.strength;

    const pitchField = document.getElementById('squad-pitch-field');
    const listReserves = document.getElementById('list-reserves');
    
    if (pitchField) pitchField.innerHTML = '';
    if (listReserves) listReserves.innerHTML = '';

    // Ordenar por posição: GOL, ZAG, LAT, MEI, ATA
    const posOrder = { 'GOL': 1, 'ZAG': 2, 'LAT': 3, 'MEI': 4, 'ATA': 5 };
    myTeam.squad.sort((a, b) => posOrder[a.position] - posOrder[b.position]);

    const starters = myTeam.squad.filter(p => p.isStarter);
    const reserves = myTeam.squad.filter(p => !p.isStarter);

    // 1. RENDERIZAR O CAMPO 2D (LADO ESQUERDO)
    if (pitchField) {
        // Linhas de áreas do campo
        const areaTop = document.createElement('div');
        areaTop.className = 'pitch-area-top';
        const areaBottom = document.createElement('div');
        areaBottom.className = 'pitch-area-bottom';
        pitchField.appendChild(areaTop);
        pitchField.appendChild(areaBottom);

        const formation = myTeam.tactics?.formation || myTeam.formation || '4-3-3';
        const coords = pitchCoordinates[formation] || pitchCoordinates['4-3-3'];

        // Algoritmo de mapeamento com memória de posições (Total Freedom)
        let pool = [...starters];
        const mapping = [];

        // 1. Tenta colocar quem já tem slot definido na formação atual
        coords.forEach((slot, index) => {
            const exactMatchIdx = pool.findIndex(p => p.pitchSlot === index);
            if (exactMatchIdx !== -1) {
                mapping.push({ slot, player: pool[exactMatchIdx], index });
                pool.splice(exactMatchIdx, 1);
            } else {
                mapping.push({ slot, player: null, index });
            }
        });

        // 2. Preenche os slots vazios (novos titulares ou mudança de formação)
        mapping.forEach(item => {
            if (item.player === null && pool.length > 0) {
                let targetPos = 'MEI';
                if (item.slot.sector === 'gk') targetPos = 'GOL';
                else if (item.slot.posText === 'ZC') targetPos = 'ZAG';
                else if (item.slot.posText === 'LE' || item.slot.posText === 'LD' || item.slot.posText === 'AD' || item.slot.posText === 'AE') targetPos = 'LAT';
                else if (item.slot.sector === 'df') targetPos = 'ZAG';
                else if (item.slot.sector === 'fw') targetPos = 'ATA';

                let matchIdx = pool.findIndex(p => p.position === targetPos);
                if (matchIdx === -1) matchIdx = 0;

                item.player = pool[matchIdx];
                item.player.pitchSlot = item.index; // Salva o slot para fixar a posição
                pool.splice(matchIdx, 1);
            }
        });

        // Renderiza cada titular no campo 2D com sistema de penalização
        mapping.forEach(item => {
            if (!item.player) return;
            const player = item.player;
            const slot = item.slot;

            // Calcula a força efetiva com base na posição tática atribuída
            const { effectiveStrength, isOutOfPosition } = calcEffectiveStrength(player, slot.posText);
            player.effectiveStrength = effectiveStrength; // Guarda para cálculo de força do time

            const node = document.createElement('div');
            node.className = `pitch-player-node ${selectedPitchPlayerId === player.id ? 'selected' : ''}`;
            if (isOutOfPosition) node.classList.add('out-of-position');
            node.style.left = `${slot.left}%`;
            node.style.top = `${slot.top}%`;
            
            const isInjured = player.injuryRounds > 0;
            const isSuspended = player.suspensionRounds > 0;
            if (isInjured || isSuspended) node.style.opacity = "0.6";

            const injuryIcon = isInjured ? " 🤕" : "";
            const suspIcon = isSuspended ? " 🚫" : "";

            // Cor da força: verde normal, amarelo penalizado
            const strColor = isOutOfPosition ? '#ffa726' : 'var(--primary-color)';
            const strDisplay = isOutOfPosition ? `${effectiveStrength} ⚠` : `${effectiveStrength}`;

            const hasTrainedThisYear = player.ultimoAnoTreinado === currentYear;
            const trainButtonDisabled = hasTrainedThisYear ? 'disabled' : '';
            const trainButtonStyle = hasTrainedThisYear ? 'opacity: 0.4; cursor: not-allowed;' : 'cursor: pointer; background: rgba(0,0,0,0.4);';

            node.onclick = (e) => {
                e.stopPropagation();
                selectPitchPlayer(player.id);
            };

            // Eventos Drag & Drop
            node.setAttribute('draggable', 'true');
            node.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', player.id);
                e.dataTransfer.effectAllowed = 'move';
                setTimeout(() => node.style.opacity = '0.5', 0);
            };
            node.ondragend = () => {
                node.style.opacity = isInjured || isSuspended ? '0.6' : '1';
            };
            node.ondragover = (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                node.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
            };
            node.ondragleave = () => {
                node.style.boxShadow = '';
            };
            node.ondrop = (e) => {
                e.preventDefault();
                node.style.boxShadow = '';
                const draggedId = e.dataTransfer.getData('text/plain');
                if (draggedId && draggedId !== player.id) {
                    handlePlayerSwap(draggedId, player.id);
                }
            };

            node.innerHTML = `
                <div class="pitch-player-badge${isOutOfPosition ? ' penalty-badge' : ''}">
                    <span class="pitch-pos-box sector-${slot.sector}" title="Salário: R$ ${player.salario.toLocaleString('pt-BR')}">${slot.posText}</span>
                    <span class="pitch-str-box" style="color: ${strColor}">${strDisplay}</span>
                </div>
                <div class="pitch-player-name" title="${player.name}${isOutOfPosition ? ' (Fora de Posição: -15%)' : ''}">${player.name}${injuryIcon}${suspIcon}</div>
                <div style="display: flex; gap: 5px; justify-content: center; margin-top: 1px; align-items: center;">
                    <div class="pitch-player-energy" style="font-size: 0.7rem; color: ${(player.energy||100) < 50 ? '#f44336' : ((player.energy||100) < 80 ? '#FFEB3B' : '#4CAF50')}; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">⚡ ${Math.round(player.energy || 100)}%</div>
                    <div onclick="event.stopPropagation(); showPlayerMoodMessage(${player.id})" style="cursor: pointer; font-size: 0.7rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform='scale(1)'" title="Ver mensagem do jogador">${player.emoji || ((player.morale||100) >= 80 ? '😊' : ((player.morale||100) >= 50 ? '😐' : '😢'))} <span style="color: var(--text-muted); font-weight: normal;">i${player.age}</span></div>
                </div>
                <button onclick="event.stopPropagation(); trainPlayer(${player.id})" style="margin-top: 3px; padding: 2px 6px; font-size: 0.65rem; color: #4CAF50; border: 1px solid #4CAF50; border-radius: 4px; font-weight: bold; transition: background 0.2s; ${trainButtonStyle}" onmouseover="if(!this.disabled) this.style.background='rgba(76,175,80,0.2)';" onmouseout="if(!this.disabled) this.style.background='rgba(0,0,0,0.4)';" ${trainButtonDisabled}>Treinar</button>
            `;
            pitchField.appendChild(node);
        });

        // Recalcula a força do time com as penalizações aplicadas
        updateTeamStrength();
    }

    // 2. RENDERIZAR O BANCO DE RESERVAS (LADO DIREITO)
    if (listReserves) {
        reserves.forEach(player => {
            const item = document.createElement('div');
            const isInjured = player.injuryRounds > 0;
            const isSuspended = player.suspensionRounds > 0;
            item.className = `squad-reserves-item ${selectedReservePlayerId === player.id ? 'selected' : ''}`;
            if (isInjured || isSuspended) item.style.opacity = "0.6";

            const injuryIcon = isInjured ? " 🤕" : "";
            const suspIcon = isSuspended ? " 🚫" : "";

            let posText = player.position;
            let sector = 'mf';
            if (player.position === 'GOL') { posText = 'GO'; sector = 'gk'; }
            else if (player.position === 'ZAG') { posText = 'ZC'; sector = 'df'; }
            else if (player.position === 'LAT') { posText = 'LT'; sector = 'df'; }
            else if (player.position === 'MEI') { posText = 'MC'; sector = 'mf'; }
            else if (player.position === 'ATA') { posText = 'AT'; sector = 'fw'; }

            item.onclick = (e) => {
                e.stopPropagation();
                if (isInjured || isSuspended) {
                    alert("Este jogador não está em condições de jogo!");
                    return;
                }
                selectReservePlayer(player.id);
            };

            // Eventos Drag & Drop
            item.setAttribute('draggable', 'true');
            item.ondragstart = (e) => {
                e.dataTransfer.setData('text/plain', String(player.id));
                e.dataTransfer.effectAllowed = 'move';
                setTimeout(() => item.classList.add('dragging'), 0);
            };
            item.ondragend = () => {
                item.classList.remove('dragging');
            };
            item.ondragover = (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                item.classList.add('drag-over');
            };
            item.ondragleave = () => {
                item.classList.remove('drag-over');
            };
            item.ondrop = (e) => {
                e.preventDefault();
                item.classList.remove('drag-over');
                const draggedId = e.dataTransfer.getData('text/plain');
                if (draggedId && Number(draggedId) !== player.id) {
                    handlePlayerSwap(Number(draggedId), player.id);
                }
            };

            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; flex: 1;">
                    <span class="reserve-pos-box sector-${sector}">${posText}</span>
                    <span class="reserve-player-name">${player.name}${injuryIcon}${suspIcon}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="reserve-player-energy" style="color: ${(player.energy||100) < 50 ? '#f44336' : ((player.energy||100) < 80 ? '#FFEB3B' : '#4CAF50')}; font-size: 0.75rem; min-width: 40px; font-weight: bold;">⚡ ${Math.round(player.energy || 100)}%</span>
                    <span onclick="event.stopPropagation(); showPlayerMoodMessage(${player.id})" style="cursor: pointer; font-size: 0.8rem; margin-right: 5px; transition: transform 0.2s; display: inline-block;" onmouseover="this.style.transform='scale(1.3)'" onmouseout="this.style.transform='scale(1)'" title="Ver mensagem do jogador">${player.emoji || ((player.morale||100) >= 80 ? '😊' : ((player.morale||100) >= 50 ? '😐' : '😢'))}</span>
                    <span class="reserve-player-str" style="min-width: 50px;">${player.strength} <span style="font-size:0.7rem; color: var(--text-muted); font-weight: normal;">i${player.age}</span></span>
                    <button class="btn btn-train-mini" onclick="event.stopPropagation(); trainPlayer(${player.id})" title="Treino Profissional" style="padding: 2px 6px; font-size: 0.7rem; color: #4CAF50; border: 1px solid #4CAF50; background: transparent; border-radius: 4px; font-weight: bold; margin-right: 2px; transition: background 0.2s; ${player.ultimoAnoTreinado === currentYear ? 'opacity: 0.4; cursor: not-allowed;' : 'cursor: pointer;'}" onmouseover="if(!this.disabled) this.style.backgroundColor='rgba(76,175,80,0.1)';" onmouseout="if(!this.disabled) this.style.backgroundColor='transparent';" ${player.ultimoAnoTreinado === currentYear ? 'disabled' : ''}>Treinar</button>
                    <button class="btn btn-sell-mini" onclick="event.stopPropagation(); sellPlayer(${player.id})" title="Vender Jogador" style="padding: 2px 6px; font-size: 0.7rem; color: #f44336; border-color: #f44336; background: transparent; border-radius: 4px; border: 1px solid var(--border-color);">Vender</button>
                </div>
            `;
            listReserves.appendChild(item);
        });
    }

    renderTacticsPanel();
}

function trainPlayer(playerId) {
    if (!myTeam) return;
    
    // Busca o jogador no elenco
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;
    
    // 1. Validação de custo financeiro (R$ 2.000.000)
    const cost = 2000000;
    if (myTeam.balance < cost) {
        alert("Saldo insuficiente! O treino custa R$ 2.000.000.");
        return;
    }
    
    // 2. Validação de limitação anual (ultimoAnoTreinado)
    if (player.ultimoAnoTreinado === currentYear) {
        alert("Este jogador já treinou este ano!");
        return;
    }
    
    // 3. Validação de cansaço físico (Energia)
    const currentEnergy = player.energy !== undefined ? player.energy : 100;
    if (currentEnergy < 50) {
        alert("Jogador demasiado cansado para treinar!");
        return;
    }
    
    // Gasto garantido de dinheiro e energia
    myTeam.balance -= cost;
    player.energy = currentEnergy - 30;
    if (player.energy < 0) player.energy = 0;
    player.ultimoAnoTreinado = currentYear;
    
    // 4. Probabilidade de sucesso (30% de chance)
    const success = Math.random() < 0.3;
    if (success) {
        player.strength = (player.strength || 50) + 1;
        if (player.strength > 99) player.strength = 99; // Cap
        alert("Treino Excelente! Overall +1");
    } else {
        alert("Treino concluído, mas o jogador não evoluiu.");
    }
    
    console.log(`[TREINO PROFISSIONAL] ${player.name} treinou! Sucesso: ${success}. OVR: ${player.strength}, Energia: ${player.energy}%, Saldo Restante: R$ ${myTeam.balance.toLocaleString('pt-BR')}`);
    
    // Salva o estado e atualiza a interface
    saveGame();
    renderSquad();
    updateTeamStrength();
    
    // Sincroniza o saldo exibido nas outras telas
    const balEl = document.getElementById('stadium-balance');
    if (balEl) balEl.innerText = myTeam.balance.toLocaleString('pt-BR');
    
    const marketBalEl = document.getElementById('market-balance');
    if (marketBalEl) marketBalEl.innerText = myTeam.balance.toLocaleString('pt-BR');

    // FIX: Atualiza também o saldo no painel principal do manager
    const mainBalEl = document.getElementById('my-team-balance');
    if (mainBalEl) mainBalEl.innerText = myTeam.balance.toLocaleString('pt-BR');
}

function selectPitchPlayer(playerId) {
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;

    // Se já há um reserva selecionado, faz a troca titular ↔ reserva
    if (selectedReservePlayerId !== null) {
        handlePlayerSwap(playerId, selectedReservePlayerId);
        selectedPitchPlayerId = null;
        selectedReservePlayerId = null;
        return;
    }

    // Se já há outro titular selecionado, troca as posições entre titulares
    if (selectedPitchPlayerId !== null && selectedPitchPlayerId !== playerId) {
        handlePlayerSwap(selectedPitchPlayerId, playerId);
        selectedPitchPlayerId = null;
        return;
    }

    // Toggle de seleção (primeiro clique ou cancelar)
    selectedPitchPlayerId = (selectedPitchPlayerId === playerId) ? null : playerId;
    renderSquad();
}

function selectReservePlayer(playerId) {
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;

    // Validação de lesão/suspensão
    if (player.injuryRounds > 0) {
        alert("Este jogador está lesionado e não pode jogar!");
        return;
    }
    if (player.suspensionRounds > 0) {
        alert("Este jogador está suspenso e não pode jogar!");
        return;
    }

    // Se já há um titular selecionado no campo, faz a troca titular ↔ reserva
    if (selectedPitchPlayerId !== null) {
        handlePlayerSwap(selectedPitchPlayerId, playerId);
        selectedPitchPlayerId = null;
        selectedReservePlayerId = null;
        return;
    }

    // Se o time tem menos de 11 titulares, promove diretamente o reserva
    const startersCount = myTeam.squad.filter(p => p.isStarter).length;
    if (startersCount < 11) {
        player.isStarter = true;
        // Pega o primeiro slot livre
        const usedSlots = myTeam.squad.filter(p => p.isStarter).map(p => p.pitchSlot);
        for (let i = 0; i < 11; i++) {
            if (!usedSlots.includes(i)) {
                player.pitchSlot = i;
                break;
            }
        }
        selectedReservePlayerId = null;
        updateTeamStrength();
        saveGame();
        renderSquad();
        return;
    }

    // Toggle de seleção (primeiro clique ou cancelar)
    selectedReservePlayerId = (selectedReservePlayerId === playerId) ? null : playerId;
    renderSquad();
}

// Lógica universal de troca (Drag & Drop e Cliques)
function handlePlayerSwap(id1, id2) {
    const p1 = myTeam.squad.find(p => p.id === Number(id1));
    const p2 = myTeam.squad.find(p => p.id === Number(id2));
    if (!p1 || !p2) return;

    // Titular com Reserva (ambas direções)
    if (p1.isStarter !== p2.isStarter) {
        const starter = p1.isStarter ? p1 : p2;
        const reserve = p1.isStarter ? p2 : p1;
        
        if (reserve.injuryRounds > 0 || reserve.suspensionRounds > 0) {
            alert("Este jogador reserva não está em condições de jogo!");
            return;
        }

        // Troca isStarter e pitchSlot
        reserve.isStarter = true;
        reserve.pitchSlot = starter.pitchSlot;
        
        starter.isStarter = false;
        starter.pitchSlot = undefined;
        
        // Mantém capitão e cobradores
        if (myTeam.tactics) {
            if (myTeam.tactics.captain === starter.id) myTeam.tactics.captain = reserve.id;
            if (myTeam.tactics.freekicks === starter.id) myTeam.tactics.freekicks = reserve.id;
            if (myTeam.tactics.corners === starter.id) myTeam.tactics.corners = reserve.id;
        }
    } 
    // Titular com Titular
    else if (p1.isStarter && p2.isStarter) {
        const tempSlot = p1.pitchSlot;
        p1.pitchSlot = p2.pitchSlot;
        p2.pitchSlot = tempSlot;
    }
    // Reserva com Reserva
    else {
        const idx1 = myTeam.squad.findIndex(p => p.id === p1.id);
        const idx2 = myTeam.squad.findIndex(p => p.id === p2.id);
        if (idx1 !== -1 && idx2 !== -1) {
            [myTeam.squad[idx1], myTeam.squad[idx2]] = [myTeam.squad[idx2], myTeam.squad[idx1]];
        }
    }

    updateTeamStrength();
    saveGame();
    updateDashboardUI();
    renderSquad();
}

// Legacy: redireciona para o novo sistema de seleção do campo 2D
function selectPlayerToSwap(playerId) {
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;
    if (player.isStarter) {
        selectPitchPlayer(playerId);
    } else {
        selectReservePlayer(playerId);
    }
}

// Alterna entre abas na tela de escalação
function switchSquadTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    if (tabId === 'players') {
        document.getElementById('squad-tab-players').classList.add('active');
        document.getElementById('tab-players-btn').classList.add('active');
    } else if (tabId === 'tactics') {
        document.getElementById('squad-tab-tactics').classList.add('active');
        document.getElementById('tab-tactics-btn').classList.add('active');
        renderTacticsPanel();
    }
}

// Renderiza os valores atuais do painel de táticas
function renderTacticsPanel() {
    if (!myTeam || !myTeam.tactics) return;
    const captainSelect = document.getElementById('tactics-captain');
    const penaltySelect = document.getElementById('tactics-penalty-taker');
    if (!captainSelect || !penaltySelect) return; // Garante que o DOM carregou

    // 1. Preenche os seletores básicos
    document.getElementById('tactics-formation').value = myTeam.tactics.formation;
    document.getElementById('tactics-mentality').value = myTeam.tactics.mentality;
    if (document.getElementById('tactics-playstyle')) {
        document.getElementById('tactics-playstyle').value = myTeam.tactics.playstyle || 'Posse de Bola';
    }
    document.getElementById('tactics-laterais').value = myTeam.tactics.laterais;
    if (document.getElementById('tactics-training')) {
        document.getElementById('tactics-training').value = myTeam.tactics.trainingFocus || 'Equilibrado';
    }

    // 2. Preenche os seletores de funções (Capitão, Faltas, Escanteios) com os titulares atuais
    const starters = myTeam.squad.filter(p => p.isStarter);

    const freekicksSelect = document.getElementById('tactics-freekicks');
    const cornersSelect = document.getElementById('tactics-corners');

    [captainSelect, penaltySelect, freekicksSelect, cornersSelect].forEach(select => {
        select.innerHTML = '';
    });

    starters.forEach(p => {
        const optText = `${p.position} - ${p.name} (Força: ${p.strength})`;
        
        const optCap = document.createElement('option');
        optCap.value = p.id;
        optCap.textContent = optText;
        if (p.id === myTeam.tactics.captain) optCap.selected = true;
        captainSelect.appendChild(optCap);

        const optPenalty = document.createElement('option');
        optPenalty.value = p.id;
        optPenalty.textContent = optText;
        if (p.id === myTeam.tactics.penaltyTaker) optPenalty.selected = true;
        penaltySelect.appendChild(optPenalty);

        const optFk = document.createElement('option');
        optFk.value = p.id;
        optFk.textContent = optText;
        if (p.id === myTeam.tactics.freekicks) optFk.selected = true;
        freekicksSelect.appendChild(optFk);

        const optCor = document.createElement('option');
        optCor.value = p.id;
        optCor.textContent = optText;
        if (p.id === myTeam.tactics.corners) optCor.selected = true;
        cornersSelect.appendChild(optCor);
    });

    // Se as funções estiverem vazias ou com jogador inválido (não-titular), seleciona o primeiro
    if (starters.length > 0) {
        const starterIds = starters.map(p => p.id);
        if (!myTeam.tactics.captain || !starterIds.includes(Number(myTeam.tactics.captain))) {
            myTeam.tactics.captain = starters[0].id;
            captainSelect.value = starters[0].id;
        }
        if (!myTeam.tactics.penaltyTaker || !starterIds.includes(Number(myTeam.tactics.penaltyTaker))) {
            myTeam.tactics.penaltyTaker = starters[0].id;
            penaltySelect.value = starters[0].id;
        }
        if (!myTeam.tactics.freekicks || !starterIds.includes(Number(myTeam.tactics.freekicks))) {
            myTeam.tactics.freekicks = starters[0].id;
            freekicksSelect.value = starters[0].id;
        }
        if (!myTeam.tactics.corners || !starterIds.includes(Number(myTeam.tactics.corners))) {
            myTeam.tactics.corners = starters[0].id;
            cornersSelect.value = starters[0].id;
        }
    }
    renderTacticsSummary();
}

// Salva as alterações feitas no painel de táticas
function updateTactics() {
    if (!myTeam || !myTeam.tactics) return;

    myTeam.tactics.formation = document.getElementById('tactics-formation').value;
    myTeam.tactics.mentality = document.getElementById('tactics-mentality').value;
    if (document.getElementById('tactics-playstyle')) {
        myTeam.tactics.playstyle = document.getElementById('tactics-playstyle').value;
    }
    myTeam.tactics.laterais = document.getElementById('tactics-laterais').value;
    if (document.getElementById('tactics-training')) {
        myTeam.tactics.trainingFocus = document.getElementById('tactics-training').value;
    }

    myTeam.tactics.captain = Number(document.getElementById('tactics-captain').value);
    myTeam.tactics.penaltyTaker = Number(document.getElementById('tactics-penalty-taker').value);
    myTeam.tactics.freekicks = Number(document.getElementById('tactics-freekicks').value);
    myTeam.tactics.corners = Number(document.getElementById('tactics-corners').value);

    // Também atualiza a formação do time principal
    myTeam.formation = myTeam.tactics.formation;
    
    // Atualiza a força do time
    updateTeamStrength();
    renderTacticsSummary();
    saveGame();
}

// Auxiliares para verificar se o time ainda está vivo nas copas
function isAliveInCup(teamId) {
    if (cupFinished) return false;
    if (!cupBracket || cupBracket.length === 0) return true; // Copa ainda não começou (considera vivo para exibir placeholder)
    const currentPhase = cupBracket[cupBracket.length - 1];
    return currentPhase.some(m => m.home === teamId || m.away === teamId);
}

function isAliveInContinental(teamId) {
    if (typeof libertadoresFinished !== 'undefined' && libertadoresFinished) return false;
    
    // Verifica se a fase eliminatória está ativa
    if (typeof libertadoresBracket !== 'undefined' && Array.isArray(libertadoresBracket) && libertadoresBracket.length > 0) {
        const currentPhase = libertadoresBracket[libertadoresBracket.length - 1];
        return currentPhase.some(m => m.home === teamId || m.away === teamId);
    }
    
    // Verifica se a fase de grupos está ativa
    if (typeof libertadoresGroups !== 'undefined' && Array.isArray(libertadoresGroups) && libertadoresGroups.length > 0) {
        return libertadoresGroups.some(g => g.teams.includes(teamId));
    }
    
    return true; // Continental ainda não começou, assume vivo por precaução
}

// Renderiza o calendário completo da temporada para o time do usuário
function renderCalendar() {
    if (!myTeam) return;
    document.getElementById('calendar-team-name').innerText = myTeam.name;
    const list = document.getElementById('calendar-list');
    list.innerHTML = '';

    let leagueRd = 0;
    let cupRoundIdx = 0;
    let continentalRoundIdx = 0;
    
    matchSchedule.forEach((roundData, index) => {
        if (roundData.type === 'league') leagueRd++;
        const type = roundData.type;
        const compNames = getCompetitionNames(myTeam.league);
        const label = type === 'cup' ? compNames.cup : (type === 'libertadores' || type === 'continental' ? compNames.continental : `${compNames.league} - RD ${leagueRd}`);
        const labelColor = type === 'cup' ? '#ffd700' : (type === 'libertadores' || type === 'continental' ? '#3f51b5' : '#4CAF50');
        
        const roundNum = index + 1;
        
        let match = null;
        if (type === 'league') {
            match = roundData.matches ? roundData.matches.find(m => m.home === myTeam.id || m.away === myTeam.id) : null;
        } else if (type === 'cup') {
            if (typeof cupBracket !== 'undefined' && Array.isArray(cupBracket) && cupBracket.length > cupRoundIdx) {
                match = cupBracket[cupRoundIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
            }
            cupRoundIdx++;
        } else if (type === 'continental' || type === 'libertadores') {
            const currentContinentalIdx = continentalRoundIdx;
            continentalRoundIdx++;
            
            // Fase de grupos tem 6 rodadas (0 a 5)
            if (currentContinentalIdx < 6) {
                if (typeof libertadoresGroups !== 'undefined' && Array.isArray(libertadoresGroups) && libertadoresGroups.length > 0) {
                    const myGroup = libertadoresGroups.find(g => g.teams.includes(myTeam.id));
                    if (myGroup) {
                        const teams = myGroup.teams;
                        let m1, m2;
                        if (currentContinentalIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                        else if (currentContinentalIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                        else if (currentContinentalIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                        else if (currentContinentalIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                        else if (currentContinentalIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                        else if (currentContinentalIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                        
                        if (m1 && (m1.home === myTeam.id || m1.away === myTeam.id)) match = m1;
                        else if (m2 && (m2.home === myTeam.id || m2.away === myTeam.id)) match = m2;
                    }
                }
                
                if (!match && typeof sulAmericanaGroups !== 'undefined' && Array.isArray(sulAmericanaGroups) && sulAmericanaGroups.length > 0) {
                     const myGroup = sulAmericanaGroups.find(g => g.teams.includes(myTeam.id));
                     if (myGroup) {
                        const teams = myGroup.teams;
                        let m1, m2;
                        if (currentContinentalIdx === 0) { m1 = {home: teams[0], away: teams[1]}; m2 = {home: teams[2], away: teams[3]}; }
                        else if (currentContinentalIdx === 1) { m1 = {home: teams[0], away: teams[2]}; m2 = {home: teams[1], away: teams[3]}; }
                        else if (currentContinentalIdx === 2) { m1 = {home: teams[0], away: teams[3]}; m2 = {home: teams[1], away: teams[2]}; }
                        else if (currentContinentalIdx === 3) { m1 = {home: teams[1], away: teams[0]}; m2 = {home: teams[3], away: teams[2]}; }
                        else if (currentContinentalIdx === 4) { m1 = {home: teams[2], away: teams[0]}; m2 = {home: teams[3], away: teams[1]}; }
                        else if (currentContinentalIdx === 5) { m1 = {home: teams[3], away: teams[0]}; m2 = {home: teams[2], away: teams[1]}; }
                        
                        if (m1 && (m1.home === myTeam.id || m1.away === myTeam.id)) match = m1;
                        else if (m2 && (m2.home === myTeam.id || m2.away === myTeam.id)) match = m2;
                     }
                }
            } else {
                // Fase mata-mata
                const knockoutIdx = currentContinentalIdx - 6;
                if (typeof libertadoresBracket !== 'undefined' && Array.isArray(libertadoresBracket) && libertadoresBracket.length > knockoutIdx) {
                    match = libertadoresBracket[knockoutIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
                }
                if (!match && typeof sulAmericanaBracket !== 'undefined' && Array.isArray(sulAmericanaBracket) && sulAmericanaBracket.length > knockoutIdx) {
                    match = sulAmericanaBracket[knockoutIdx].find(m => m.home === myTeam.id || m.away === myTeam.id);
                }
            }
        }
        
        let shouldRender = false;
        
        if (match) {
            shouldRender = true; // Jogo sorteado (ou grupo) e envolve meu time
        } else {
            // Se for uma rodada futura onde os sorteios ainda não foram feitos
            if (roundNum >= currentRound) {
                if (type === 'cup' && isAliveInCup(myTeam.id)) {
                    shouldRender = true;
                } else if ((type === 'continental' || type === 'libertadores') && isAliveInContinental(myTeam.id)) {
                    shouldRender = true;
                } else if (type === 'intercontinental' && typeof libertadoresWinnerId !== 'undefined' && myTeam.id === libertadoresWinnerId) {
                    shouldRender = true;
                }
            }
        }

        if (shouldRender) {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.style.alignItems = 'center';
            li.style.padding = '12px 15px';
            
            // Destaque para o "Próximo Jogo" (rodada atual)
            if (roundNum === currentRound) {
                li.style.backgroundColor = "rgba(255, 152, 0, 0.15)";
                li.style.borderLeft = "4px solid var(--accent-color)";
            } else if (roundNum < currentRound) {
                li.style.opacity = "0.7"; // Jogos passados ficam mais apagados
            }
            
            let matchHtml = '';
            let statusHtml = '';

            if (match) {
                const home = allTeams.find(t => t.id === match.home) || {name: "???"};
                const away = allTeams.find(t => t.id === match.away) || {name: "???"};
                const isHome = match.home === myTeam.id;
                
                // Jogo já realizado tem placar guardado?
                if (match.homeScore !== undefined) {
                    const scoreText = `<strong style="font-size: 1.1rem;">${match.homeScore} x ${match.awayScore}</strong>`;
                    
                    let resultBadge = '';
                    let resultColor = '';
                    
                    if ((isHome && match.homeScore > match.awayScore) || (!isHome && match.awayScore > match.homeScore)) {
                        resultBadge = 'V';
                        resultColor = '#4CAF50';
                    } else if (match.homeScore === match.awayScore) {
                        resultBadge = 'E';
                        resultColor = '#9e9e9e';
                    } else {
                        resultBadge = 'D';
                        resultColor = '#f44336';
                    }

                    matchHtml = `
                        <div style="flex: 1; text-align: right; ${isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">${home.name}</div>
                        <div style="width: 70px; text-align: center; background: rgba(255,255,255,0.05); border-radius: 4px; padding: 2px 0; margin: 0 10px;">${scoreText}</div>
                        <div style="flex: 1; text-align: left; ${!isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">${away.name}</div>
                    `;
                    
                    statusHtml = `<div style="font-weight: 900; color: ${resultColor}; font-size: 0.9rem; width: 30px; text-align: center;">[${resultBadge}]</div>`;
                } else {
                    // Jogo futuro / atual sorteado (ou grupo já passado sem placar salvo)
                    matchHtml = `
                        <div style="flex: 1; text-align: right; ${isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">${home.name}</div>
                        <div style="width: 50px; text-align: center; color: var(--text-muted); font-weight: bold; margin: 0 10px;">VS</div>
                        <div style="flex: 1; text-align: left; ${!isHome ? 'color: var(--primary-color); font-weight: bold;' : ''}">${away.name}</div>
                    `;
                    
                    if (roundNum === currentRound) {
                        statusHtml = `<div style="font-size: 0.75rem; font-weight: bold; color: var(--accent-color); background: rgba(255,152,0,0.2); padding: 3px 6px; border-radius: 4px;">PRÓXIMO</div>`;
                    } else {
                        statusHtml = `<div style="width: 30px;"></div>`;
                    }
                }
            } else {
                matchHtml = `<div style="flex: 1; text-align: center; color: var(--text-muted); font-style: italic; font-size: 0.85rem;">Confronto a definir (Avançar de Fase)</div>`;
                statusHtml = `<div style="width: 30px;"></div>`;
            }

            li.innerHTML = `
                <div style="width: 140px; font-weight: 800; color: ${labelColor}; font-size: 0.7rem; text-transform: uppercase;">${label}</div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
                    ${matchHtml}
                </div>
                ${statusHtml}
            `;
            list.appendChild(li);
        }
    });
}

function renderStats(competition) {
    const scorersBody = document.getElementById('top-scorers-body');
    const assistsBody = document.getElementById('top-assists-body');
    if (!scorersBody || !assistsBody) return;
    scorersBody.innerHTML = '';
    assistsBody.innerHTML = '';


    // Popula os botões se estiver vazio
    const btnContainer = document.getElementById('stats-competition-buttons');
    if (btnContainer && btnContainer.children.length === 0) {
        const LEAGUE_LABELS = {
            'brazil_a':     '🇧🇷 Série A',
            'brazil_b':     '🇧🇷 Série B',
            'england':      '🏴 Premier League',
            'spain':        '🇪🇸 La Liga',
            'germany':      '🇩🇪 Bundesliga',
            'italy':        '🇮🇹 Série A (ITA)',
            'france':       '🇫🇷 Ligue 1',
            'portugal':     '🇵🇹 Liga Portugal',
            'arabia':       '🇸🇦 Saudi Pro League',
            'mls':          '🇺🇸 MLS',
            'south_america':'🌎 Sul-América',
            'cup':          '🏆 Copa Nacional',
            'libertadores': '🌍 Continental'
        };
        for (const [key, label] of Object.entries(LEAGUE_LABELS)) {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary stats-league-btn';
            btn.style.padding = '8px 12px';
            btn.style.fontSize = '0.85rem';
            btn.style.borderRadius = '20px';
            btn.dataset.comp = key;
            btn.innerText = label;
            btn.onclick = () => renderStats(key);
            btnContainer.appendChild(btn);
        }
    }

    // Decide competição a partir do argumento ou do select
    let comp = competition;
    if (!comp) {
        comp = sel ? sel.value : (myTeam ? myTeam.league : 'brazil_a');
    }

    // Atualiza os botões visualmente
    window.currentStatsComp = comp;
    if (btnContainer) {
        Array.from(btnContainer.children).forEach(btn => {
            if (btn.dataset.comp === comp) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            } else {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-secondary');
            }
        });
    }

    const LEAGUE_LABELS = {
        'brazil_a':     '🇧🇷 Série A - Brasil',
        'brazil_b':     '🇧🇷 Série B - Brasil',
        'england':      '🏴 Premier League',
        'spain':        '🇪🇸 La Liga',
        'germany':      '🇩🇪 Bundesliga',
        'italy':        '🇮🇹 Série A - Itália',
        'france':       '🇫🇷 Ligue 1',
        'portugal':     '🇵🇹 Liga Portugal',
        'south_america':'🌎 Sul-América',
        'cup':          '🏆 Copa Nacional',
        'libertadores': '🌍 Libertadores / Continental'
    };
    const compLabel = LEAGUE_LABELS[comp] || comp;

    // Coleta participantes segundo o tipo de competição
    let leaguePlayers = [];
    const participantIds = new Set();

    if (comp === 'cup') {
        if (Array.isArray(cupBracket) && cupBracket.length > 0) {
            const last = cupBracket[cupBracket.length - 1];
            last.forEach(m => { if (m.home) participantIds.add(m.home); if (m.away) participantIds.add(m.away); });
        } else {
            allTeams.filter(t => t.league && t.league.startsWith('brazil')).forEach(t => participantIds.add(t.id));
        }
    } else if (comp === 'libertadores') {
        if (Array.isArray(libertadoresGroups) && libertadoresGroups.length > 0) {
            libertadoresGroups.forEach(g => (g.teams || []).forEach(id => participantIds.add(id)));
        } else if (Array.isArray(libertadoresParticipants) && libertadoresParticipants.length > 0) {
            libertadoresParticipants.forEach(id => participantIds.add(id));
        } else {
            allTeams.filter(t => t.league === 'south_america' || (t.league && t.league.startsWith('brazil'))).forEach(t => participantIds.add(t.id));
        }
    } else {
        // Qualquer liga normal: filtra por league key
        allTeams.filter(t => t.league === comp).forEach(t => participantIds.add(t.id));
    }

    // Fallback: se não encontrou ninguém, usa todos
    if (participantIds.size === 0) {
        allTeams.forEach(t => participantIds.add(t.id));
    }

    // Monta lista de jogadores com estatísticas por competição
    let statsKey = comp;
    if (comp === 'libertadores' || comp === 'south_america') {
        statsKey = 'continental';
    } else if (comp !== 'cup' && comp !== 'intercontinental') {
        statsKey = 'league';
    }

    allTeams.forEach(team => {
        if (!participantIds.has(team.id)) return;
        (team.squad || []).forEach(p => {
            const compStats = (p.stats && p.stats[statsKey]) ? p.stats[statsKey] : null;
            const compGoals   = compStats ? (compStats.goals || 0) : 0;
            const compAssists = compStats ? (compStats.assists || 0) : 0;
            leaguePlayers.push({
                ...p,
                teamName:   team.name,
                teamId:     team.id,
                teamShield: team.shield,
                goals:      compGoals,
                assists:    compAssists
            });
        });
    });

    if (!window.statsSort) window.statsSort = { key: null, dir: 'desc' };

    // --- Artilheiros ---
    let topScorers = [...leaguePlayers];
    if (window.statsSort.key) {
        const key = window.statsSort.key;
        const dirMul = window.statsSort.dir === 'desc' ? 1 : -1;
        topScorers.sort((a, b) => ((b[key] || 0) - (a[key] || 0)) * dirMul);
    } else {
        topScorers.sort((a, b) => {
            const gd = (b.goals || 0) - (a.goals || 0);
            if (gd !== 0) return gd;
            const ad = (b.assists || 0) - (a.assists || 0);
            if (ad !== 0) return ad;
            return (b.strength || 0) - (a.strength || 0);
        });
    }
    topScorers = topScorers.filter(p => p.goals > 0).slice(0, 30);

    if (topScorers.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="4" style="text-align:center; color: var(--text-muted); padding: 20px;">Nenhum gol registrado em <strong>' + compLabel + '</strong>.</td>';
        scorersBody.appendChild(tr);
    } else {
        topScorers.forEach((p, idx) => {
            const tr = document.createElement('tr');
            if (myTeam && p.teamName === myTeam.name) tr.classList.add('highlight-row');
            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : (idx + 1);
            const shieldUrl = p.teamShield || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(p.teamName) + '&background=random');
            const safeTeamName = encodeURIComponent(p.teamName);
            tr.innerHTML = `<td style="font-weight:bold;">${medal}</td>
                <td style="text-align: left;"><strong>${p.name}</strong> <span style="font-size: 0.7rem; color: var(--text-muted);">${p.position}</span></td>
                <td style="text-align:left;"><img src="${shieldUrl}" onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${safeTeamName}&background=random'" loading="lazy" style="width:20px;height:20px;object-fit:contain;border-radius:4px;margin-right:8px;vertical-align:middle;">${p.teamName}</td>
                <td style="color: var(--accent-color); font-weight: bold; font-size: 1.1rem;">${p.goals}</td>`;
            scorersBody.appendChild(tr);
        });
    }

    // --- Assistentes ---
    let topAssists = [...leaguePlayers];
    if (window.statsSort.key) {
        const key = window.statsSort.key;
        const dirMul = window.statsSort.dir === 'desc' ? 1 : -1;
        topAssists.sort((a, b) => ((b[key] || 0) - (a[key] || 0)) * dirMul);
    } else {
        topAssists.sort((a, b) => {
            const ad = (b.assists || 0) - (a.assists || 0);
            if (ad !== 0) return ad;
            const gd = (b.goals || 0) - (a.goals || 0);
            if (gd !== 0) return gd;
            return (b.strength || 0) - (a.strength || 0);
        });
    }
    topAssists = topAssists.filter(p => p.assists > 0).slice(0, 30);

    if (topAssists.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="4" style="text-align:center; color: var(--text-muted); padding: 20px;">Nenhuma assistência registrada em <strong>' + compLabel + '</strong>.</td>';
        assistsBody.appendChild(tr);
    } else {
        topAssists.forEach((p, idx) => {
            const tr = document.createElement('tr');
            if (myTeam && p.teamName === myTeam.name) tr.classList.add('highlight-row');
            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : (idx + 1);
            const shieldUrl = p.teamShield || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(p.teamName) + '&background=random');
            const safeTeamNameA = encodeURIComponent(p.teamName);
            tr.innerHTML = `<td style="font-weight:bold;">${medal}</td>
                <td style="text-align: left;"><strong>${p.name}</strong> <span style="font-size: 0.7rem; color: var(--text-muted);">${p.position}</span></td>
                <td style="text-align:left;"><img src="${shieldUrl}" onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${safeTeamNameA}&background=random'" loading="lazy" style="width:20px;height:20px;object-fit:contain;border-radius:4px;margin-right:8px;vertical-align:middle;">${p.teamName}</td>
                <td style="color: #2196f3; font-weight: bold; font-size: 1.1rem;">${p.assists}</td>`;
            assistsBody.appendChild(tr);
        });
    }
}

// Sort handler for stats tables
function sortStats(key) {
    if (!window.statsSort) window.statsSort = { key: null, dir: 'desc' };
    if (window.statsSort.key === key) {
        window.statsSort.dir = window.statsSort.dir === 'desc' ? 'asc' : 'desc';
    } else {
        window.statsSort.key = key;
        window.statsSort.dir = 'desc';
    }
    // update header arrows
    const scorersTable = document.querySelector('#top-scorers-body')?.closest('table');
    const assistsTable = document.querySelector('#top-assists-body')?.closest('table');
    [scorersTable, assistsTable].forEach(tbl => {
        if (!tbl) return;
        tbl.querySelectorAll('th').forEach(th => {
            const txt = th.innerText.replace(/\s*[▾▴]$/, '');
            if (th.innerText.includes('Gols') && key === 'goals') th.innerText = txt + ' ' + (window.statsSort.dir === 'desc' ? '▾' : '▴');
            if (th.innerText.includes('Assis') && key === 'assists') th.innerText = txt + ' ' + (window.statsSort.dir === 'desc' ? '▾' : '▴');
        });
    });
    renderStats();
}

// --- Lógica do Mercado de Transferências ---
// --- ESTÁDIO E FINANÇAS ---
function renderStadium() {
    if (!myTeam) return;
    
    document.getElementById('stadium-balance').innerText = myTeam.balance.toLocaleString('pt-BR');
    document.getElementById('stadium-level-badge').innerText = `Nível ${myTeam.stadiumLevel}`;
    document.getElementById('stadium-capacity').innerText = myTeam.stadiumCapacity.toLocaleString('pt-BR');
    
    // Custo base de upgrade
    const upgradeCost = myTeam.stadiumLevel * 5000000;
    document.getElementById('stadium-upgrade-cost').innerText = `R$ ${upgradeCost.toLocaleString('pt-BR')}`;
    
    // Reset classes
    // --- IDEIA 18: DEPARTAMENTO MÉDICO ---
    const medLevel = myTeam.medicalDeptLevel || 1;
    const medUpgradeCost = medLevel * 5000000;
    const medLvlEl = document.getElementById('medical-level-badge');
    const medCostEl = document.getElementById('medical-upgrade-cost');
    const medBonusEl = document.getElementById('medical-bonus-info');
    if (medLvlEl) medLvlEl.innerText = `Nível ${medLevel}`;
    if (medCostEl) medCostEl.innerText = `R$ ${medUpgradeCost.toLocaleString('pt-BR')}`;
    if (medBonusEl) medBonusEl.innerText = `Redução de ${((medLevel - 1) * 20)}% no tempo de recuperação.`;
    // ------------------------------------

    ['Low', 'Medium', 'High'].forEach(type => {
        const btn = document.getElementById(`ticket-btn-${type}`);
        if (btn) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
        }
    });
    
    const activeBtn = document.getElementById(`ticket-btn-${myTeam.ticketPriceSetting}`);
    if (activeBtn) {
        activeBtn.classList.remove('btn-secondary');
        activeBtn.classList.add('btn-primary');
    }

    // Initialize extras if not present
    if (myTeam.academyLevel === undefined) myTeam.academyLevel = 1;
    if (!myTeam.commerceLevel) myTeam.commerceLevel = { bars: 0, food: 0, gourmet: 0 };
    if (!myTeam.history) myTeam.history = [];

    // Academy UI
    const badgeAcademy = document.getElementById('academy-level-badge');
    if (badgeAcademy) badgeAcademy.innerText = `Nível ${myTeam.academyLevel}`;
    const academyCost = myTeam.academyLevel * 2000000;
    const academyCostEl = document.getElementById('academy-upgrade-cost');
    if (academyCostEl) {
        if (myTeam.academyLevel >= 10) {
            academyCostEl.innerText = "MÁX";
            document.getElementById('btn-upgrade-academy').disabled = true;
        } else {
            academyCostEl.innerText = `${academyCost.toLocaleString('pt-BR')}`;
            document.getElementById('btn-upgrade-academy').disabled = false;
        }
    }

    // Commerce UI
    const comm = myTeam.commerceLevel || {};
    const barsLvl = Number(comm.bars) || 0;
    const foodLvl = Number(comm.food) || 0;
    const gourmetLvl = Number(comm.gourmet) || 0;
    
    const badgeBars = document.getElementById('commerce-bars-badge');
    if (badgeBars) {
        badgeBars.innerText = `Nv. ${barsLvl}`;
        document.getElementById('commerce-food-badge').innerText = `Nv. ${foodLvl}`;
        document.getElementById('commerce-gourmet-badge').innerText = `Nv. ${gourmetLvl}`;
        
        document.getElementById('cost-bars').innerText = ((barsLvl + 1) * 100000).toLocaleString('pt-BR');
        document.getElementById('cost-food').innerText = ((foodLvl + 1) * 150000).toLocaleString('pt-BR');
        document.getElementById('cost-gourmet').innerText = ((gourmetLvl + 1) * 300000).toLocaleString('pt-BR');
    }

    // Folha Salarial
    const payrollEl = document.getElementById('payroll-total');
    if (payrollEl && myTeam.squad) {
        const totalPayroll = myTeam.squad.reduce((acc, p) => acc + (p.salario || 0), 0);
        payrollEl.innerText = `R$ ${totalPayroll.toLocaleString('pt-BR')}`;
    }

    
    renderSponsorships();
}

function setTicketPrice(type) {
    if (!myTeam) return;
    myTeam.ticketPriceSetting = type;
    saveGame();
    renderStadium();
}

function upgradeStadium() {
    if (!myTeam) return;
    
    const upgradeCost = myTeam.stadiumLevel * 5000000;
    
    if (myTeam.balance < upgradeCost) {
        alert("Você não tem saldo suficiente para expandir o estádio.");
        return;
    }
    
    if (confirm(`Deseja expandir o estádio para o Nível ${myTeam.stadiumLevel + 1} (+5.000 lugares) por R$ ${upgradeCost.toLocaleString('pt-BR')}?`)) {
        myTeam.balance -= upgradeCost;
        myTeam.stadiumLevel += 1;
        myTeam.stadiumCapacity += 5000;
        
        saveGame();
        renderStadium();
    }
}

function upgradeAcademy() {
    if (!myTeam) return;
    if (myTeam.academyLevel >= 10) return alert("A Escola de Formação já está no nível máximo!");
    
    const cost = myTeam.academyLevel * 2000000;
    if (myTeam.balance < cost) {
        return alert("Saldo insuficiente para evoluir a Escola de Formação.");
    }
    
    if (confirm(`Evoluir Formação para o Nível ${myTeam.academyLevel + 1} por R$ ${cost.toLocaleString('pt-BR')}?`)) {
        myTeam.balance -= cost;
        myTeam.academyLevel += 1;
        saveGame();
        renderStadium();
    }
}

function upgradeCommerce(type) {
    if (!myTeam) return;
    
    if (!myTeam.commerceLevel) myTeam.commerceLevel = { bars: 0, food: 0, gourmet: 0 };
    let currentLevel = Number(myTeam.commerceLevel[type]) || 0;
    
    let cost = 0;
    let name = "";
    if (type === 'bars') { cost = (currentLevel + 1) * 100000; name = "Bares de Bebidas"; }
    else if (type === 'food') { cost = (currentLevel + 1) * 150000; name = "Roulote de Bifanas"; }
    else if (type === 'gourmet') { cost = (currentLevel + 1) * 300000; name = "Doces Gourmet"; }
    
    if (myTeam.balance < cost) {
        return alert(`Saldo insuficiente para melhorar ${name}.`);
    }
    
    if (confirm(`Melhorar ${name} para o próximo nível por R$ ${cost.toLocaleString('pt-BR')}?`)) {
        myTeam.balance -= cost;
        myTeam.commerceLevel[type] = currentLevel + 1;
        saveGame();
        renderStadium();
    }
}

function upgradeMedicalDept() {
    if (!myTeam) return;
    
    const currentLevel = myTeam.medicalDeptLevel || 1;
    const cost = currentLevel * 5000000;
    
    if (myTeam.balance < cost) {
        return alert("Saldo insuficiente para melhorar o Departamento Médico.");
    }
    
    if (confirm(`Melhorar Departamento Médico para o Nível ${currentLevel + 1} por R$ ${cost.toLocaleString('pt-BR')}?`)) {
        myTeam.balance -= cost;
        myTeam.medicalDeptLevel = currentLevel + 1;
        saveGame();
        renderStadium();
    }
}

function checkRandomEvents() {
    if (!myTeam || !myTeam.squad) return;
    
    const events = [
        {
            type: 'injury',
            execute: () => {
                const starters = myTeam.squad.filter(p => p.isStarter && (p.injuryRounds || 0) === 0);
                if (starters.length > 0) {
                    const p = starters[Math.floor(Math.random() * starters.length)];
                    p.injuryRounds = Math.floor(Math.random() * 3) + 1;
                    p.energy = Math.max(10, p.energy - 30);
                    alert(`🚨 EVENTO: Lesão no Treino!
O jogador ${p.name} lesionou-se durante um treino e ficará indisponível por ${p.injuryRounds} rodada(s).`);
                }
            }
        },
        {
            type: 'sponsor',
            execute: () => {
                const bonus = Math.floor(Math.random() * 500000) + 100000;
                myTeam.balance += bonus;
                alert(`🎉 EVENTO: Bónus de Patrocinador!
Um patrocinador ficou contente com o clube e ofereceu um prémio de R$ ${bonus.toLocaleString('pt-BR')}.`);
            }
        },
        {
            type: 'unhappy',
            execute: () => {
                const bench = myTeam.squad.filter(p => !p.isStarter);
                if (bench.length > 0) {
                    const p = bench[Math.floor(Math.random() * bench.length)];
                    p.energy = Math.max(10, p.energy - 15);
                    p.strength = Math.max(1, p.strength - 1);
                    alert(`😠 EVENTO: Insatisfação!
O jogador ${p.name} exigiu ser titular e criou mau ambiente no balneário. A sua força e moral diminuíram.`);
                }
            }
        }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event.execute();
    saveGame();
}

function renderTrophies() {
    if (!myTeam) return;
    const container = document.getElementById('trophies-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!myTeam.history || myTeam.history.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted);">Nenhum histórico de épocas registado ainda.</p>';
        return;
    }
    
    // Mostramos do mais recente ao mais antigo
    [...myTeam.history].reverse().forEach(hist => {
        const div = document.createElement('div');
        div.style.background = 'rgba(255, 255, 255, 0.05)';
        div.style.padding = '15px';
        div.style.borderRadius = '8px';
        div.style.width = '100%';
        div.style.textAlign = 'left';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '15px';
        
        let icon = 'fa-calendar-check';
        let color = '#ccc';
        if (hist.toLowerCase().includes('campeão') || hist.toLowerCase().includes('vencedor')) {
            icon = 'fa-trophy';
            color = '#ffd700';
        }
        
        div.innerHTML = `
            <i class="fas ${icon}" style="font-size: 1.5rem; color: ${color};"></i>
            <span style="font-size: 1rem; color: white;">${hist}</span>
        `;
        container.appendChild(div);
    });
}

function renderSponsorships() {
    if (!myTeam || !myTeam.sponsorships) return;
    const container = document.getElementById('sponsorships-container');
    if (!container) return;
    container.innerHTML = '';
    
    // Ensure propostas array exists
    if (!myTeam.sponsorships.propostas) myTeam.sponsorships.propostas = [];
    
    // Se não houver propostas espontâneas no array, gera propostas sortidas de forma aleatória para os slots livres
    if (myTeam.sponsorships.propostas.length === 0) {
        const freeSlots = sponsorSlots.filter(s => !myTeam.sponsorships[s]);
        
        if (freeSlots.length > 0) {
            let baseValue = 50000;
            const teamRep = myTeam.rep || myTeam.reputation || 10;
            if (teamRep >= 50 && teamRep < 100) baseValue = 150000;
            else if (teamRep >= 100) baseValue = 350000;
            
            const brandsPool = [
                ...sponsorBrands.level1,
                ...sponsorBrands.level2,
                ...sponsorBrands.level3
            ].sort(() => 0.5 - Math.random());
            const offers = brandsPool.slice(0, 3);
            
            myTeam.sponsorships.propostas = offers.map(brand => {
                // Sorteia um slot de camisa livre para esta proposta
                const selectedSlot = freeSlots[Math.floor(Math.random() * freeSlots.length)];
                
                let slotMult = 1.0;
                if (selectedSlot === 'Master') slotMult = 2.5;
                if (selectedSlot === 'Costas') slotMult = 1.5;
                if (selectedSlot === 'Mangas') slotMult = 1.0;
                if (selectedSlot === 'Calcoes') slotMult = 0.8;
                
                const value = Math.floor(baseValue * slotMult * (0.8 + Math.random() * 0.4));
                const duration = 10 + Math.floor(Math.random() * 20);
                return { brand: brand.brand, domain: brand.domain, value, duration, slot: selectedSlot };
            });
            saveGame();
        }
    }
    
    sponsorSlots.forEach(slot => {
        const contract = myTeam.sponsorships[slot];
        let html = '';
        
        if (contract) {
            html = `
                <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--border-color); border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; min-height: 200px;">
                    <div>
                        <h4 style="color: var(--accent-color); margin-bottom: 10px;">${slot}</h4>
                        <img src="${getSponsorLogoUrl(contract.brand, contract.domain)}" alt="Logo" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 10px; border-radius: 5px; background: white; padding: 2px; display: inline-block;">
                        <div style="font-weight: bold; margin-bottom: 5px;">${contract.brand}</div>
                        <div style="color: #4CAF50; font-size: 0.9rem; margin-bottom: 5px;">R$ ${contract.value.toLocaleString('pt-BR')} / jogo</div>
                    </div>
                    <div style="color: var(--text-muted); font-size: 0.8rem;">Duração: ${contract.duration} jogos</div>
                </div>
            `;
        } else {
            // Filtra as propostas espontâneas destinadas a este slot específico
            const slotProposals = myTeam.sponsorships.propostas.filter(p => p.slot === slot || (!p.slot && slot === 'Master'));
            
            if (slotProposals.length > 0) {
                let proposalsHtml = slotProposals.map(p => `
                    <div style="background: rgba(255,255,255,0.05); border-radius: 4px; padding: 10px; margin-bottom: 10px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                            <img src="${getSponsorLogoUrl(p.brand, p.domain)}" alt="Logo" style="width: 40px; height: 40px; background: white; border-radius: 5px; padding: 2px;">
                            <div>
                                <div style="font-weight: bold; font-size: 0.9rem;">${p.brand}</div>
                                <div style="color: #4CAF50; font-size: 0.8rem;">R$ ${p.value.toLocaleString('pt-BR')}</div>
                            </div>
                        </div>
                        <button class="btn btn-primary" style="width: 100%; padding: 5px; font-size: 0.8rem;" onclick="acceptSponsorship('${slot}', '${p.brand}', '${p.domain}', ${p.value}, ${p.duration})">Assinar (${p.duration}j)</button>
                    </div>
                `).join('');
                
                html = `
                    <div style="background: rgba(0,0,0,0.2); border: 1px dashed var(--border-color); border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column;">
                        <h4 style="color: var(--text-muted); margin-bottom: 15px;">${slot}</h4>
                        <div style="color: var(--accent-color); margin-bottom: 15px; font-weight: bold;">Temos propostas!</div>
                        ${proposalsHtml}
                        <button class="btn btn-secondary" style="margin-top: 5px; padding: 5px; font-size: 0.8rem;" onclick="generateSponsorshipOffers('${slot}')">Mais Ofertas</button>
                    </div>
                `;
            } else {
                html = `
                    <div style="background: rgba(0,0,0,0.2); border: 1px dashed var(--border-color); border-radius: 8px; padding: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 180px;">
                        <h4 style="color: var(--text-muted); margin-bottom: 15px;">${slot}</h4>
                        <div style="color: var(--text-muted); margin-bottom: 15px;">Espaço Livre</div>
                        <button class="btn btn-primary" onclick="generateSponsorshipOffers('${slot}')">Buscar Ofertas</button>
                    </div>
                `;
            }
        }
        container.innerHTML += html;
    });
}

// Array temporário para guardar propostas pendentes (evita quebra de onclick por URLs longas)
window._pendingOffers = [];

function generateSponsorshipOffers(slot) {
    console.log("generateSponsorshipOffers: Buscando ofertas para o slot:", slot);
    if (!myTeam) return;
    
    try {
        // Garantir que sponsorships exista
        if (!myTeam.sponsorships) myTeam.sponsorships = { Master: null, Costas: null, Mangas: null, Calcoes: null, propostas: [] };
        
        const teamRep = myTeam.rep || myTeam.reputation || 10;
        const teamStrength = myTeam.strength || 50;
        
        // 1. Grandeza do time (Reputação)
        let greatnessMultiplier = 1.0;
        if (teamRep >= 30 && teamRep < 70) greatnessMultiplier = 1.5;
        else if (teamRep >= 70 && teamRep < 100) greatnessMultiplier = 2.5;
        else if (teamRep >= 100) greatnessMultiplier = 4.0;
        
        // 2. Overall do time (Força)
        const strengthBonus = Math.max(0.5, teamStrength / 55); 
        
        // 3. Posição no campeonato
        let posBonus = 1.0;
        if (typeof standings !== 'undefined' && standings.length > 0) {
            const index = standings.findIndex(t => t.id === myTeam.id);
            if (index !== -1) {
                // 1º = 1.5, Último (ex: 20º) = 0.8
                posBonus = 1.5 - ((index / Math.max(1, standings.length - 1)) * 0.7);
            }
        }
        
        // 4. Números de torcida (baseado em capacidade do estádio e engajamento)
        const capacity = myTeam.stadiumCapacity || 10000;
        const fanBonus = 1.0 + (capacity / 50000); // Ex: 10k capacity -> 1.2x, 50k -> 2.0x
        
        // Cálculo final da baseValue
        let baseValue = 20000 * greatnessMultiplier * strengthBonus * posBonus * fanBonus;
        
        if (!sponsorBrands || typeof sponsorBrands !== 'object') {
            console.error("sponsorBrands não está definido!");
            return;
        }
        
        const brandsPool = [
            ...sponsorBrands.level1,
            ...sponsorBrands.level2,
            ...sponsorBrands.level3
        ].sort(() => 0.5 - Math.random());
        const offers = brandsPool.slice(0, 3);
        
        let mult = 1.0;
        if (slot === 'Master') mult = 2.5;
        if (slot === 'Costas') mult = 1.5;
        if (slot === 'Mangas') mult = 1.0;
        if (slot === 'Calcoes') mult = 0.8;
        
        const list = document.getElementById('modal-sponsors-list');
        if (!list) {
            console.error("modal-sponsors-list não encontrado no HTML!");
            return;
        }
        list.innerHTML = '';

        // Salva as ofertas geradas no array global (evita quebra de onclick por URLs com caracteres especiais)
        window._pendingOffers = [];
        
        offers.forEach((brand, idx) => {
            const value = Math.floor(baseValue * mult * (0.8 + Math.random() * 0.4));
            const duration = 10 + Math.floor(Math.random() * 20);
            const domain = brand.domain || "google.com";

            // Guarda os dados da oferta no array global indexado
            window._pendingOffers.push({ slot, brand: brand.brand, domain, value, duration });
            
            list.innerHTML += `
                <div class="dashboard-card" style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: rgba(255,255,255,0.05); margin-bottom: 5px;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${getSponsorLogoUrl(brand.brand, brand.domain)}" alt="Logo" style="width: 40px; height: 40px; object-fit: contain; background: white; border-radius: 5px; padding: 2px;">
                        <div>
                            <div style="font-weight: bold; font-size: 1.1rem; color: white;">${brand.brand}</div>
                            <div style="color: #4CAF50; font-size: 0.9rem;">R$ ${value.toLocaleString('pt-BR')} / jogo</div>
                            <div style="color: var(--text-muted); font-size: 0.8rem;">Contrato: ${duration} jogos</div>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="acceptSponsorshipByIndex(${idx})">Assinar</button>
                </div>
            `;
        });
        
        // Atualiza o título do modal com o slot
        const title = document.getElementById('modal-sponsors-title');
        if (title) title.innerText = `Propostas para: ${slot}`;

        const modal = document.getElementById('modal-sponsors');
        if (modal) {
            modal.style.display = 'flex';
        } else {
            console.error("modal-sponsors não encontrado no HTML!");
        }
    } catch (err) {
        console.error("Erro em generateSponsorshipOffers:", err);
    }
}

// Nova função que usa o índice do array global (segura para caracteres especiais)
function acceptSponsorshipByIndex(idx) {
    const offer = window._pendingOffers && window._pendingOffers[idx];
    if (!offer) {
        console.error("Oferta não encontrada no índice:", idx);
        return;
    }
    acceptSponsorship(offer.slot, offer.brand, offer.domain, offer.value, offer.duration);
}

function acceptSponsorship(slot, brand, domain, value, duration) {
    if (!myTeam) return;
    
    myTeam.sponsorships[slot] = { brand, domain, value, duration };
    
    // Remove apenas as propostas que eram para este slot específico
    if (myTeam.sponsorships.propostas) {
        myTeam.sponsorships.propostas = myTeam.sponsorships.propostas.filter(p => p.slot !== slot && p.slot);
    }
    
    const modal = document.getElementById('modal-sponsors');
    if (modal) modal.style.display = 'none';
    
    saveGame();
    renderStadium();
    alert(`✅ Patrocínio com ${brand} assinado para o slot ${slot}!`);
}
// ----------------------------
// VISUALIZAR ELENCO ADVERSÁRIO
// ----------------------------
function viewOpponentSquad(teamId) {
    if (teamId === myTeam.id) {
        showScreen('screen-team');
        return;
    }

    const team = allTeams.find(t => String(t.id) === String(teamId));
    if (!team) return;

    document.getElementById('opponent-squad-name').innerText = team.name;
    document.getElementById('opponent-squad-shield').src = team.shield;
    document.getElementById('opponent-squad-shield').onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random`;
    };
    
    // Atualiza a força visual da equipe
    const teamStrength = calculateTeamStrength(team);
    document.getElementById('opponent-squad-info').innerText = `Força: ${teamStrength}`;

    const list = document.getElementById('opponent-squad-list');
    list.innerHTML = '';

    if (team.squad && team.squad.length > 0) {
        // Ordena por titulares e depois por força
        const sortedSquad = [...team.squad].sort((a, b) => {
            if (a.isStarter && !b.isStarter) return -1;
            if (!a.isStarter && b.isStarter) return 1;
            return b.strength - a.strength;
        });

        sortedSquad.forEach(player => {
            const price = Math.pow(player.strength, 2) * 14000;
            const priceFormatted = `R$ ${(price/1000000).toFixed(1)}M`;
            const isStarterLabel = player.isStarter ? '<span style="font-size: 0.7em; background: #4CAF50; padding: 2px 4px; border-radius: 4px;">Titular</span>' : '<span style="font-size: 0.7em; background: #666; padding: 2px 4px; border-radius: 4px;">Reserva</span>';

            const item = document.createElement('div');
            item.className = 'player-item market-item';
            item.style.padding = '10px';
            item.innerHTML = `
                <div class="market-item-top" style="flex-direction: column; align-items: flex-start; gap: 5px;">
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                        <div class="player-info">
                            <span class="player-pos" style="width: 50px;">${player.position}</span>
                            <span class="player-name">${player.name} ${isStarterLabel}</span>
                        </div>
                        <div class="player-stats">
                            <span class="stat-str">FOR: ${player.strength}</span>
                        </div>
                    </div>
                    <div style="font-size: 0.85em; color: var(--text-muted);">
                        Idade: ${player.age} | Valor: <span style="color: #4CAF50; font-weight: bold;">${priceFormatted}</span>
                    </div>
                </div>
                <div class="market-item-actions" style="margin-top: 10px; width: 100%;">
                    <button class="btn btn-primary btn-swap" style="flex: 1; padding: 5px;" onclick="closeModal('modal-opponent-squad'); makeOffer(${player.id}, '${team.id}', ${price})">Oferta</button>
                    <button class="btn btn-secondary btn-swap" style="flex: 1; padding: 5px;" onclick="closeModal('modal-opponent-squad'); requestLoan(${player.id}, '${team.id}', ${price})">Empréstimo</button>
                </div>
            `;
            list.appendChild(item);
        });
    } else {
        list.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-muted);">Elenco indisponível.</p>';
    }

    document.getElementById('modal-opponent-squad').style.display = 'flex';
}


// Popula o dropdown de times conforme a liga selecionada
function populateMarketTeamFilter(leagueFilter) {
    if (!allTeams || !myTeam) return;
    const sel = document.getElementById('market-filter-team');
    if (!sel) return;
    // Salva o time atualmente selecionado
    const prev = sel.value;
    sel.innerHTML = '<option value="all">⚽ Todos os Times</option>';
    let teams = allTeams.filter(t => String(t.id) !== String(myTeam.id));
    if (leagueFilter && leagueFilter !== 'all') {
        teams = teams.filter(t => t.league === leagueFilter || (leagueFilter === 'rest_world' && t.league && t.league.startsWith('rest_world')));
    }
    // Ordena por nome
    teams.sort((a, b) => a.name.localeCompare(b.name));
    teams.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        sel.appendChild(opt);
    });
    // Restaura seleção se ainda existir
    if ([...sel.options].some(o => o.value === prev)) {
        sel.value = prev;
    } else {
        sel.value = 'all';
    }
}

// Chamado ao mudar o filtro de liga — re-popula o filtro de times e re-renderiza
function onMarketLeagueChange() {
    const leagueFilter = document.getElementById('market-filter-league')?.value || 'all';
    populateMarketTeamFilter(leagueFilter);
    // Reseta o time selecionado
    const sel = document.getElementById('market-filter-team');
    if (sel) sel.value = 'all';
    updateMarketTeamInfoBar();
    renderMarket();
}

// Chamado ao mudar o filtro de time
function onMarketTeamChange() {
    updateMarketTeamInfoBar();
    renderMarket();
}

// Atualiza a barra de info do time selecionado
function updateMarketTeamInfoBar() {
    const teamId = document.getElementById('market-filter-team')?.value || 'all';
    const bar = document.getElementById('market-team-info-bar');
    if (!bar) return;
    if (!teamId || teamId === 'all') {
        bar.style.display = 'none';
        return;
    }
    const team = allTeams.find(t => String(t.id) === String(teamId));
    if (!team) { bar.style.display = 'none'; return; }
    bar.style.display = 'flex';
    const shield = document.getElementById('market-team-shield');
    if (shield) {
        shield.src = team.shield || '';
        shield.onerror = function() { this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=random`; };
    }
    const label = document.getElementById('market-team-label');
    if (label) label.textContent = team.name;
    const strengthEl = document.getElementById('market-team-strength');
    if (strengthEl) {
        const s = typeof calculateTeamStrength === 'function' ? calculateTeamStrength(team) : (team.strength || '?');
        strengthEl.textContent = `Força: ${s} | ${(team.squad || []).length} jogadores`;
    }
}

// Abre o elenco completo do time atualmente selecionado no filtro
function viewOpponentSquadFromMarket() {
    const teamId = document.getElementById('market-filter-team')?.value;
    if (!teamId || teamId === 'all') return;
    viewOpponentSquad(teamId);
}

function renderMarket() {
    if (myTeam) {
        document.getElementById('market-balance').innerText = myTeam.balance.toLocaleString('pt-BR');
    }

    // Popula o filtro de times na primeira abertura ou quando a lista está vazia
    const teamSel = document.getElementById('market-filter-team');
    if (teamSel && teamSel.options.length <= 1) {
        const leagueFilter = document.getElementById('market-filter-league')?.value || 'all';
        populateMarketTeamFilter(leagueFilter);
    }

    const list = document.getElementById('market-list');
    const searchVal = document.getElementById('market-search-input')?.value.toLowerCase() || "";
    const filterLeague = document.getElementById('market-filter-league')?.value || "all";
    const filterPosition = document.getElementById('market-filter-position')?.value || "all";
    list.innerHTML = '';

    const filterTeam = document.getElementById('market-filter-team')?.value || "all";

    const marketPlayers = [];
    const otherTeams = allTeams.filter(t => t.id !== myTeam.id);
    
    otherTeams.forEach(team => {
        if (team.squad) {
            team.squad.forEach(p => {
                // Filtro de Busca por Nome
                const matchesSearch = searchVal === "" || p.name.toLowerCase().includes(searchVal);
                // Filtro de Liga
                const matchesLeague = filterLeague === "all" || team.league === filterLeague || (filterLeague === "rest_world" && team.league && team.league.startsWith("rest_world"));
                // Filtro de Posição
                const matchesPosition = filterPosition === "all" || p.position === filterPosition;
                // Filtro de Time
                const matchesTeam = filterTeam === "all" || String(team.id) === String(filterTeam);

                if (matchesSearch && matchesLeague && matchesPosition && matchesTeam) {
                    marketPlayers.push({ ...p, teamId: team.id, teamName: team.name });
                }
            });
        }
    });

    // Ordenação e Limite para performance
    let displayPlayers = marketPlayers;
    if (filterTeam !== "all") {
        // Elenco completo do time selecionado: titulares primeiro, depois por força
        const posOrder = { 'GOL': 0, 'ZAG': 1, 'LAT': 2, 'MEI': 3, 'ATA': 4 };
        displayPlayers = marketPlayers.sort((a, b) => {
            if (a.isStarter && !b.isStarter) return -1;
            if (!a.isStarter && b.isStarter) return 1;
            const pa = posOrder[a.position] ?? 5;
            const pb = posOrder[b.position] ?? 5;
            if (pa !== pb) return pa - pb;
            return b.strength - a.strength;
        });
    } else if (searchVal === "" && filterLeague === "all" && filterPosition === "all") {
        // Se não houver busca e nem filtros específicos, mostra a vitrine mista global aleatória
        displayPlayers = marketPlayers.sort(() => 0.5 - Math.random()).slice(0, 20);
    } else {
        // Se o usuário buscou ou filtrou, exibe os melhores ordenados por OVR decrescente
        displayPlayers = marketPlayers.sort((a, b) => b.strength - a.strength).slice(0, 50);
    }

    displayPlayers.forEach(player => {
        const price = Math.pow(player.strength, 2) * 14000; // Multiplicador ajustado para aumentar o preço
        const item = document.createElement('div');
        item.className = 'player-item market-item';
        item.innerHTML = `
            <div class="market-item-top">
                <div class="player-info" style="flex: 2;">
                    <span class="player-pos" style="width: 60px;">${player.position} <span style="font-weight:normal; color: var(--text-muted);">i${player.age}</span></span>
                    <span class="player-name">${player.name} <span style="font-size: 0.85em; color: var(--text-muted); cursor: pointer;" onclick="viewOpponentSquad('${player.teamId}')" title="Ver elenco do ${player.teamName}">(${player.teamName})</span></span>
                </div>
                <div class="player-stats" style="flex: 1; justify-content: flex-end; flex-direction: column; align-items: flex-end; gap: 4px;">
                    <span class="stat-str">FOR: ${player.strength}</span>
                    <span style="color: #4CAF50; font-weight: bold; font-size: 0.95em;" title="Salário: R$ ${player.salario.toLocaleString('pt-BR')}">R$ ${(price/1000000).toFixed(1)}M</span>
                </div>
            </div>
            <div class="market-item-actions">
                <button class="btn btn-primary btn-swap" onclick="buyPlayer(${player.id}, '${player.teamId}', ${price})">Comprar</button>
                <button class="btn btn-secondary btn-swap" onclick="makeOffer(${player.id}, '${player.teamId}', ${price})">Oferta</button>
                <button class="btn btn-secondary btn-swap" onclick="requestLoan(${player.id}, '${player.teamId}', ${price})">Emprést.</button>
            </div>
        `;
        list.appendChild(item);
    });
}

// Função que executa a transferência de fato após sucesso na negociação
function executeTransfer(playerId, fromTeamId, price) {
    const fromTeam = allTeams.find(t => String(t.id) === String(fromTeamId));
    const pIdx = fromTeam.squad.findIndex(p => String(p.id) === String(playerId));
    const player = fromTeam.squad[pIdx];

    myTeam.balance -= price;
    fromTeam.balance += price; // Clube vendedor recebe o dinheiro

    player.isStarter = false;
    myTeam.squad.push(player);
    fromTeam.squad.splice(pIdx, 1);

    // Adiciona notícia da transferência
    newsFeedItems.push({
        type: 'transfer', club: myTeam.name, player: player.name, value: price
    });

    // Atualiza estatísticas de todos os tempos
    if (!player.allTimeStats) player.allTimeStats = { goals: 0, assists: 0, matches: 0 };
    player.allTimeStats.goals += player.goals;

    alert(`CONTRATADO! ${player.name} agora é do ${myTeam.name}!`);
    updateDashboardUI();
    renderMarket();
    saveGame();
}

// Lógica de probabilidade para tentar uma compra
function attemptPurchase(playerId, fromTeamId, offerPrice) {
    if (myTeam.balance < offerPrice) {
        alert("Seu clube não tem dinheiro suficiente para esta oferta!");
        return;
    }

    const fromTeam = allTeams.find(t => String(t.id) === String(fromTeamId));
    if (!fromTeam) { alert("Erro ao encontrar clube adversário."); return; }
    const player = fromTeam.squad.find(p => String(p.id) === String(playerId));
    if (!player) { alert("Erro ao encontrar jogador."); return; }
    const marketPrice = Math.pow(player.strength, 2) * 14000;

    // Regras de Reputação (Grandeza)
    const myTeamRep = myTeam.rep || myTeam.reputation || 30;
    if (player.strength >= 80 && myTeamRep < 75) {
        alert(`RECUSA DO JOGADOR!\n\nO empresário do ${player.name} foi direto:\n"Com todo o respeito, o meu cliente não está interessado em transferir-se para o vosso clube devido à vossa baixa reputação."`);
        return;
    } else if (player.strength >= 75 && myTeamRep < 50) {
        alert(`RECUSA DO JOGADOR!\n\nO empresário do ${player.name} informou:\n"O jogador acha que o vosso clube não atende às suas ambições de carreira desportiva no momento."`);
        return;
    }

    const offerFactor = offerPrice / marketPrice;

    // Recusa financeira direta (oferta muito baixa)
    if (offerFactor < 0.85) {
        alert(`RECUSA DO CLUBE!\n\nA diretoria do ${fromTeam.name} interrompeu as negociações imediatamente:\n"A sua proposta financeira é um insulto. Exigimos um valor apropriado por este talento!"`);
        return;
    }

    // Chance de sucesso baseada no fator financeiro e importância do jogador
    const playerImportance = player.strength / fromTeam.strength;
    let successChance = 0.25; // Base reduzida
    
    if (offerFactor >= 1.6) {
        successChance = 0.90; // Pagou muito acima
    } else if (offerFactor >= 1.3) {
        successChance = 0.65; // Oferta muito boa
    } else if (offerFactor >= 1.0) {
        successChance = 0.35; // Valor de mercado
    } else { // 0.85 até 1.0
        successChance = 0.15; // Oferta abaixo da média
    }

    if (playerImportance > 1.0) successChance -= 0.20; // Dificulta se for jogador importante
    if (!player.isStarter) successChance += 0.20; // Facilita se for reserva

    successChance = Math.max(0.01, Math.min(0.95, successChance));

    if (Math.random() <= successChance) {
        executeTransfer(playerId, fromTeamId, offerPrice);
    } else {
        alert(`NEGOCIAÇÃO FRACASSADA!\n\nAs conversas com o ${fromTeam.name} ou com o empresário do jogador chegaram a um impasse por detalhes contratuais. Tente melhorar a sua oferta.`);
    }
}

function handleBlockedTransfer(player) {
    player.morale = Math.max(0, (player.morale || 100) - 30);
    alert(`💬 MENSAGEM DO JOGADOR

${player.name} enviou uma mensagem: "Fiquei muito triste por ter bloqueado a minha transferência. Era a oportunidade da minha vida."`);
}

// Botão "Comprar" agora abre o painel Master League
function buyPlayer(playerId, fromTeamId, price) {
    if (typeof openMasterNegotiation === 'function') {
        openMasterNegotiation(playerId, fromTeamId);
    } else {
        attemptPurchase(playerId, fromTeamId, price);
    }
}

// Botão "Oferta" também abre o mesmo painel
function makeOffer(playerId, fromTeamId, originalPrice) {
    if (typeof openMasterNegotiation === 'function') {
        openMasterNegotiation(playerId, fromTeamId);
    } else {
        const offerStr = prompt(`O valor de mercado do jogador é R$ ${(originalPrice/1000000).toFixed(1)}M.\n\nQual sua oferta? (Você pode usar o atalho M, ex: 5M ou 5.5M)`);
        if (!offerStr) return;
        
        let offerVal = 0;
        const cleanStr = offerStr.trim().toLowerCase();
        if (cleanStr.endsWith('m')) {
            const numPart = cleanStr.slice(0, -1).trim();
            const parsed = Number(numPart);
            if (!isNaN(parsed) && parsed > 0) offerVal = Math.round(parsed * 1000000);
            else offerVal = NaN;
        } else {
            offerVal = Number(offerStr);
        }

        if (isNaN(offerVal) || offerVal <= 0) {
            alert("Valor da oferta inválido.");
            return;
        }
        
        attemptPurchase(playerId, fromTeamId, offerVal);
    }
}

// Botão "Empréstimo" com lógica de probabilidade
function requestLoan(playerId, fromTeamId, originalPrice) {
    const loanFee = Math.round(originalPrice * 0.15);
    if (myTeam.balance < loanFee) {
        alert("Saldo insuficiente para a taxa de empréstimo!");
        return;
    }

    const fromTeam = allTeams.find(t => String(t.id) === String(fromTeamId));
    if (!fromTeam) { alert("Erro ao encontrar clube adversário."); return; }
    const player = fromTeam.squad.find(p => String(p.id) === String(playerId));
    if (!player) { alert("Erro ao encontrar jogador."); return; }


    const playerAge = player.age || 25; // fallback

    // Regra de Estrela:
    if (player.strength > 78) {
        alert(`EMPRÉSTIMO RECUSADO!\n\nA diretoria do ${fromTeam.name} foi taxativa:\n"O ${player.name} é muito valioso. Nós só aceitamos vender este jogador em definitivo!"`);
        return;
    }

    // Regra de Titularidade e Idade:
    if (playerAge > 23 && player.strength > 72) {
        alert(`EMPRÉSTIMO RECUSADO!\n\nA diretoria do ${fromTeam.name} recusou:\n"O ${player.name} é considerado um titular importante e experiente no nosso plantel. Não aceitamos emprestar jogadores nestas condições."`);
        return;
    }

    const playerImportance = player.strength / fromTeam.strength;
    let successChance = 0.20; // Base reduzida para 20%
    if (playerImportance > 1.0) successChance -= 0.15;
    if (!player.isStarter) successChance += 0.15; // Facilita um pouco se for reserva
    successChance = Math.max(0.05, Math.min(0.60, successChance)); // Máximo 60% e mínimo 5%

    if (confirm(`Deseja tentar o empréstimo de ${player.name}?

Taxa: R$ ${(loanFee/1000000).toFixed(1)}M.
Chance de sucesso: ~${(successChance * 100).toFixed(0)}%`)) {
        if (Math.random() < successChance) {
            const pIdx = fromTeam.squad.findIndex(p => p.id === playerId);
            myTeam.balance -= loanFee;
            fromTeam.balance += loanFee;
            player.isStarter = false;
            player.isLoaned = true;
            myTeam.squad.push(player);
            fromTeam.squad.splice(pIdx, 1);
            alert(`${player.name} chegou por empréstimo ao ${myTeam.name}!`);
            updateDashboardUI(); renderMarket(); saveGame();
        } else {
            myTeam.balance -= Math.round(loanFee * 0.1);
            alert(`EMPRÉSTIMO RECUSADO! O ${fromTeam.name} decidiu não liberar o jogador. Uma pequena taxa de negociação foi cobrada.`);
            updateDashboardUI();
        }
    }
}

function sellPlayer(playerId) {
    const player = myTeam.squad.find(p => p.id === playerId);
    if (!player) return;
    
    // Segurança para não deixar o time com jogadores insuficientes para uma partida
    if (myTeam.squad.length <= 15) {
        alert("Seu elenco está muito curto! Você precisa de pelo menos 15 jogadores para manter a competitividade.");
        return;
    }

    const marketPrice = Math.pow(player.strength, 2) * 14000; // Multiplicador ajustado para aumentar o preço
    const offerMultiplier = 0.85 + (Math.random() * 0.35); // Proposta entre 85% e 120% do valor de mercado
    const offerValue = Math.round(marketPrice * offerMultiplier);
    
    // Escolhe um clube comprador aleatório
    const buyerTeams = allTeams.filter(t => t.id !== myTeam.id);
    const buyer = buyerTeams[Math.floor(Math.random() * buyerTeams.length)];

    const accept = confirm(`PROPOSTA RECEBIDA!

O ${buyer.name} oferece R$ ${(offerValue/1000000).toFixed(1)}M pelo jogador ${player.name} (${player.position}, FOR ${player.strength}).

Valor de mercado estimado: R$ ${(marketPrice/1000000).toFixed(1)}M.

Deseja aceitar a venda?`);
    
    if (!accept) {
        handleBlockedTransfer(player);
        return;
    }
    
    if (accept) {
        myTeam.balance += offerValue;
        
        // Remove do elenco do seu time
        const pIdx = myTeam.squad.findIndex(p => p.id === playerId);
        myTeam.squad.splice(pIdx, 1);
        
        // Adiciona ao elenco do comprador para manter a consistência do universo do jogo
        player.isStarter = false;
        if (buyer.squad) buyer.squad.push(player);

        alert(`Venda concluída! ${player.name} se transferiu para o ${buyer.name}.`);
        
        updateTeamStrength();
        renderSquad();
        updateDashboardUI();
        saveGame();
    }
}

function isTransferWindowOpen() {
    if (!matchSchedule || matchSchedule.length === 0) return false;
    const totalRounds = matchSchedule.length;
    // Janela de pré-época (rodada 1) e janela de meio de temporada (rodadas 15-20)
    return currentRound === 1 || (currentRound >= 15 && currentRound <= 20) || currentRound > totalRounds;
}

function checkForIncomingBids() {
    if (!isTransferWindowOpen() || Math.random() > 0.35) { // 35% de chance de receber proposta por rodada na janela
        return;
    }

    // Prioriza jogadores com bom overall e que não sejam essenciais (para a IA não tentar comprar seu melhor jogador sempre)
    const sellablePlayers = myTeam.squad.filter(p => p.strength > 75).sort((a, b) => a.strength - b.strength);
    if (sellablePlayers.length === 0) return;

    const targetPlayer = sellablePlayers[Math.floor(Math.random() * sellablePlayers.length)];
    if (!targetPlayer) return;

    // Clubes ricos têm mais chance de fazer propostas
    const potentialBuyers = allTeams.filter(t => t.id !== myTeam.id && t.balance > 50000000).sort((a, b) => b.balance - a.balance);
    if (potentialBuyers.length === 0) return;

    const buyer = potentialBuyers[Math.floor(Math.random() * Math.min(potentialBuyers.length, 10))]; // Pega um dos 10 mais ricos

    // Cálculo do valor da proposta baseado em overall e idade
    const basePrice = Math.pow(targetPlayer.strength, 2) * 14000;
    const ageFactor = targetPlayer.age < 24 ? 1.6 : (targetPlayer.age < 29 ? 1.2 : (targetPlayer.age < 33 ? 0.9 : 0.6));
    const marketPrice = basePrice * ageFactor;
    
    const offerMultiplier = 0.9 + (Math.random() * 0.3); // Proposta entre 90% e 120% do valor de mercado
    const offerValue = Math.round(marketPrice * offerMultiplier);

    // Exibe o modal de proposta
    const proposalText = `O <strong>${buyer.name}</strong> oferece <strong>R$ ${(offerValue / 1000000).toFixed(1)}M</strong> pelo seu jogador <strong>${targetPlayer.name}</strong> (FOR: ${targetPlayer.strength}, Idade: ${targetPlayer.age}).`;
    document.getElementById('proposal-text').innerHTML = proposalText;

    // Configura os botões de ação
    document.getElementById('btn-accept-proposal').onclick = () => acceptProposal(targetPlayer.id, buyer.id, offerValue);
    document.getElementById('btn-reject-proposal').onclick = () => rejectProposal(targetPlayer.id);

    // Mostra o modal
    document.getElementById('modal-proposal').style.display = 'flex';
}

function checkForManagerOffers() {
    // 2.5% de chance de receber proposta se a confianca for alta e passou de 10 rodadas
    if (Math.random() > 0.025 || !myTeam || myTeam.boardConfidence < 85 || currentRound <= 10) { 
        return;
    }

    // Clubes com maior força que o seu (ou top clubs)
    const potentialClubs = allTeams.filter(t => 
        t.id !== myTeam.id && 
        (t.strength > myTeam.strength + 3 || t.strength >= 83)
    );

    if (potentialClubs.length === 0) return;

    const offeringClub = potentialClubs[Math.floor(Math.random() * potentialClubs.length)];
    pendingSpontaneousOffer = offeringClub;

    // Exibe o modal de proposta de cargo
    const offerText = `O <strong>${offeringClub.name}</strong> ficou impressionado com a sua campanha fantástica e oferece-lhe o cargo de Treinador principal!<br><br>Orçamento disponível: <strong>R$ ${((offeringClub.balance || 1000000) / 1000000).toFixed(1)}M</strong>`;
    document.getElementById('job-offer-details').innerHTML = offerText;

    document.getElementById('modal-job-offer').style.display = 'flex';
}

function acceptProposal(playerId, buyerId, offerValue) {
    const playerIndex = myTeam.squad.findIndex(p => p.id === playerId);
    if (playerIndex === -1) return;

    const buyerTeam = allTeams.find(t => t.id === buyerId);
    if (!buyerTeam) return;

    const player = myTeam.squad.splice(playerIndex, 1)[0];
    buyerTeam.squad.push(player);

    myTeam.balance += offerValue;
    document.getElementById('modal-proposal').style.display = 'none';

    addCommentaryItem(`💸 Negócio Fechado: ${player.name} foi vendido ao ${buyerTeam.name} por R$ ${(offerValue / 1000000).toFixed(1)}M.`, 'info', 90);
    renderSquad();
    renderMarket();
    renderFinances();
    saveGame();
}

function rejectProposal(playerId) {
    document.getElementById('modal-proposal').style.display = 'none';
}

function openHallOfFameTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hof-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll("#modal-hall-of-fame .tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}

function showHallOfFame() {
    if (!myTeam || !myTeam.hallOfFame) return;

    const { titles, topScorers, legends } = myTeam.hallOfFame;

    // Galeria de Títulos
    const titlesContainer = document.getElementById('hof-titles');
    titlesContainer.innerHTML = '';
    if (titles.length === 0) {
        titlesContainer.innerHTML = '<p>Nenhum título conquistado ainda.</p>';
    } else {
        titles.sort((a, b) => b.year - a.year).forEach(t => {
            titlesContainer.innerHTML += `<div class="trophy-item"><span>${t.year}</span> <strong>${t.title}</strong></div>`;
        });
    }

    // Maiores Artilheiros
    const scorersContainer = document.getElementById('hof-scorers');
    scorersContainer.innerHTML = '';
    if (topScorers.length === 0) {
        scorersContainer.innerHTML = '<p>Nenhum artilheiro histórico registrado.</p>';
    } else {
        let table = '<table><thead><tr><th>Pos</th><th>Jogador</th><th>Gols</th></tr></thead><tbody>';
        topScorers.sort((a, b) => b.goals - a.goals).slice(0, 20).forEach((s, i) => {
            table += `<tr><td>${i + 1}</td><td>${s.name}</td><td>${s.goals}</td></tr>`;
        });
        table += '</tbody></table>';
        scorersContainer.innerHTML = table;
    }

    // Lendas do Clube
    const legendsContainer = document.getElementById('hof-legends');
    legendsContainer.innerHTML = '';
    if (legends.length === 0) {
        legendsContainer.innerHTML = '<p>Nenhum jogador atingiu o status de lenda ainda.</p>';
    } else {
        legends.forEach(l => {
            legendsContainer.innerHTML += `<div class="legend-item"><h4>${l.name}</h4><p>${l.reason}</p></div>`;
        });
    }

    document.getElementById('modal-hall-of-fame').style.display = 'flex';
    // Abre a primeira aba por padrão
    openHallOfFameTab({ currentTarget: document.querySelector('#modal-hall-of-fame .tab-btn') }, 'hof-titles');
}



document.addEventListener('DOMContentLoaded', () => {
});
// ============================================================
// 🏟️ FUNDO DINÂMICO DE ESTÁDIOS
// Mapeamento e controle de imagem de fundo baseado no time da casa
// ============================================================

const stadiumBackgrounds = {
    // Brasil Série A
    athleticopr: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ligga_Arena.jpg/800px-Ligga_Arena.jpg",
    atleticomg: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_MRV_-_Belo_Horizonte.jpg/800px-Arena_MRV_-_Belo_Horizonte.jpg",
    bahia: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Itaipava_Arena_Fonte_Nova_-_Salvador_-_Bahia.jpg/800px-Itaipava_Arena_Fonte_Nova_-_Salvador_-_Bahia.jpg",
    botafogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Engenh%C3%A3o_panor%C3%A2mica.jpg/800px-Engenh%C3%A3o_panor%C3%A2mica.jpg",
    corinthians: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Est%C3%A1dio_Corinthians_-_Vista_interna_-_Maio_2014.jpg/800px-Est%C3%A1dio_Corinthians_-_Vista_interna_-_Maio_2014.jpg",
    cruzeiro: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mineir%C3%A3o_Arena.jpg/800px-Mineir%C3%A3o_Arena.jpg",
    flamengo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg/800px-Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg",
    fluminense: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg/800px-Est%C3%A1dio_do_Maracan%C3%A3_-_Rio_de_Janeiro%2C_Brasil.jpg",
    gremio: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg/800px-Arena_do_Gr%C3%AAmio_-_Porto_Alegre.jpg",
    internacional: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Est%C3%A1dio_Beira-Rio_-_Porto_Alegre.jpg/800px-Est%C3%A1dio_Beira-Rio_-_Porto_Alegre.jpg",
    palmeiras: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Allianz_Parque_interno.jpg/800px-Allianz_Parque_interno.jpg",
    santos: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vila_Belmiro_-_Santos.jpg/800px-Vila_Belmiro_-_Santos.jpg",
    saopaulo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Est%C3%A1dio_do_Morumbi_-_S%C3%A3o_Paulo.jpg/800px-Est%C3%A1dio_do_Morumbi_-_S%C3%A3o_Paulo.jpg",
    vasco: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/S%C3%A3o_Janu%C3%A1rio_-_Rio_de_Janeiro.jpg/800px-S%C3%A3o_Janu%C3%A1rio_-_Rio_de_Janeiro.jpg",
    vitoria: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Barrad%C3%A3o_Stadium.jpg/800px-Barrad%C3%A3o_Stadium.jpg",
    bragantino: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Est%C3%A1dio_Nabi_Abi_Chedid_-_2021.jpg/800px-Est%C3%A1dio_Nabi_Abi_Chedid_-_2021.jpg",
    chapecoense: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arena_Cond%C3%A1_-_Chapecoense.jpg/800px-Arena_Cond%C3%A1_-_Chapecoense.jpg",
    coritiba: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Couto_Pereira_-_Curitiba.jpg/800px-Couto_Pereira_-_Curitiba.jpg",
    mirassol: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estadio_Jose_Maria_de_Campos_Maia.jpg/800px-Estadio_Jose_Maria_de_Campos_Maia.jpg",
    remo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Est%C3%A1dio_Evandro_Almeida.jpg/800px-Est%C3%A1dio_Evandro_Almeida.jpg",

    // Brasil Série B
    america: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Est%C3%A1dio_Independ%C3%AAncia_-_Belo_Horizonte.jpg/800px-Est%C3%A1dio_Independ%C3%AAncia_-_Belo_Horizonte.jpg",
    atleticogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Est%C3%A1dio_Ant%C3%B4nio_Accioly.jpg/800px-Est%C3%A1dio_Ant%C3%B4nio_Accioly.jpg",
    avai: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Est%C3%A1dio_da_Ressacada.jpg/800px-Est%C3%A1dio_da_Ressacada.jpg",
    ceara: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg/800px-Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg",
    criciuma: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Est%C3%A1dio_Heriberto_H%C3%BClse.jpg/800px-Est%C3%A1dio_Heriberto_H%C3%BClse.jpg",
    cuiaba: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arena_Pantanal_-_Cuiaba.jpg/800px-Arena_Pantanal_-_Cuiaba.jpg",
    fortaleza: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg/800px-Arena_Castel%C3%A3o_-_Vista_a%C3%A9rea.jpg",
    goias: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Est%C3%A1dio_da_Serrinha.jpg/800px-Est%C3%A1dio_da_Serrinha.jpg",
    juventude: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Estadio_Alfredo_Jaconi.jpg/800px-Estadio_Alfredo_Jaconi.jpg",
    novorizontino: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Est%C3%A1dio_Jorge_Ismael_de_Biasi.jpg/800px-Est%C3%A1dio_Jorge_Ismael_de_Biasi.jpg",
    pontepreta: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Est%C3%A1dio_Mois%C3%A9s_Lucarelli.jpg/800px-Est%C3%A1dio_Mois%C3%A9s_Lucarelli.jpg",
    sport: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Est%C3%A1dio_Ilha_do_Retiro.jpg/800px-Est%C3%A1dio_Ilha_do_Retiro.jpg",

    // Europa
    mancity: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/City_of_Manchester_Stadium_aerial_view%2C_2022.jpg/800px-City_of_Manchester_Stadium_aerial_view%2C_2022.jpg",
    arsenal: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emirates_Stadium_east_side_exterior.jpg/800px-Emirates_Stadium_east_side_exterior.jpg",
    liverpool: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Anfield_stadium_Main_Stand.jpg/800px-Anfield_stadium_Main_Stand.jpg",
    manutd: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Old_Trafford_inside_20060726_1.jpg/800px-Old_Trafford_inside_20060726_1.jpg",
    chelsea: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Stamford_Bridge_Stadium.jpg/800px-Stamford_Bridge_Stadium.jpg",
    realmadrid: "https://upload.wikimedia.org/wikipedia/commons/1/10/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg",
    barcelona: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Camp_Nou_presidential_box.jpg/800px-Camp_Nou_presidential_box.jpg",
    bayern: "https://upload.wikimedia.org/wikipedia/commons/f/fc/FC_Bayern_Munich%2C_Allianz_Arena_Stadium_15.jpg",
    dortmund: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Westfalenstadion_S%C3%BCdtrib%C3%BChne_BVB-PSG_2020.jpg/800px-Westfalenstadion_S%C3%BCdtrib%C3%BChne_BVB-PSG_2020.jpg",
    juventus: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Juventus_Stadium_panoramica.jpg/800px-Juventus_Stadium_panoramica.jpg",
    inter: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Stadio_San_Siro_Milano.jpg/800px-Stadio_San_Siro_Milano.jpg",
    milan: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Stadio_San_Siro_Milano.jpg/800px-Stadio_San_Siro_Milano.jpg",
    psg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Parc_des_Princes_Dec_2015.jpg/800px-Parc_des_Princes_Dec_2015.jpg",
    porto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Estadio_do_Dragao_Porto.jpg/800px-Estadio_do_Dragao_Porto.jpg",
    benfica: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Est%C3%A1dio_da_Luz_-_panor%C3%A2mica_-_Benfica_vs_Sporting_%282006%29.jpg/800px-Est%C3%A1dio_da_Luz_-_panor%C3%A2mica_-_Benfica_vs_Sporting_%282006%29.jpg",
    sporting: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Est%C3%A1dio_Alvalade_XXI_-_Interior_2004.jpg/800px-Est%C3%A1dio_Alvalade_XXI_-_Interior_2004.jpg",
    
    // América do Sul
    bocajuniors: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/La_Bombonera_La_Boca_Buenos_Aires_2.jpg/800px-La_Bombonera_La_Boca_Buenos_Aires_2.jpg",
    riverplate: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Estadio_Mas_Monumental_en_2023.jpg/800px-Estadio_Mas_Monumental_en_2023.jpg",
    penarol: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Estadio_Campe%C3%B3n_del_Siglo_vista_a%C3%A9rea.jpg/800px-Estadio_Campe%C3%B3n_del_Siglo_vista_a%C3%A9rea.jpg",
    nacional: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gran_Parque_Central_tribuna_Atilio_Garcia_2021.jpg/800px-Gran_Parque_Central_tribuna_Atilio_Garcia_2021.jpg",
    independientedelvalle: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arena_MRV_-_Belo_Horizonte.jpg/800px-Arena_MRV_-_Belo_Horizonte.jpg",
    colocolo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Estadio_monumental.jpg/800px-Estadio_monumental.jpg"
};

function updateDynamicBackground(teamId) {
    const bgElement = document.getElementById('dynamic-bg');
    if (!bgElement) return;

    let bgUrl = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop"; // Estádio genérico inicial

    if (teamId) {
        // Tenta buscar no dicionário manual de imagens de alta qualidade
        if (stadiumBackgrounds[teamId]) {
            bgUrl = stadiumBackgrounds[teamId];
        } else {
            // Fallback para o stadiumImg configurado no teamsData
            const team = allTeams.find(t => t.id === teamId);
            if (team && team.stadiumImg) {
                bgUrl = team.stadiumImg;
            }
        }
    }
    
    bgElement.style.backgroundImage = `url('${bgUrl}')`;
}

// ============================================================
// 📊 RESUMO TÁTICO EM CAMPO (TEMPO REAL)
// Mapeamento e distribuição de jogadores por formação tática
// ============================================================

const formationTemplates = {
    '4-3-3': [
        { name: 'Goleiro', posType: 'GOL' },
        { name: 'Lateral Direito', posType: 'LAT' },
        { name: 'Zagueiro Direito', posType: 'ZAG' },
        { name: 'Zagueiro Esquerdo', posType: 'ZAG' },
        { name: 'Lateral Esquerdo', posType: 'LAT' },
        { name: 'Meia Central', posType: 'MEI' },
        { name: 'Meia Ofensivo', posType: 'MEI' },
        { name: 'Meia Armador', posType: 'MEI' },
        { name: 'Ponta Direita', posType: 'ATA' },
        { name: 'Centroavante', posType: 'ATA' },
        { name: 'Ponta Esquerda', posType: 'ATA' }
    ],
    '4-4-2': [
        { name: 'Goleiro', posType: 'GOL' },
        { name: 'Lateral Direito', posType: 'LAT' },
        { name: 'Zagueiro Direito', posType: 'ZAG' },
        { name: 'Zagueiro Esquerdo', posType: 'ZAG' },
        { name: 'Lateral Esquerdo', posType: 'LAT' },
        { name: 'Volante 1', posType: 'MEI' },
        { name: 'Volante 2', posType: 'MEI' },
        { name: 'Meia Direito', posType: 'MEI' },
        { name: 'Meia Esquerdo', posType: 'MEI' },
        { name: 'Atacante Direito', posType: 'ATA' },
        { name: 'Atacante Esquerdo', posType: 'ATA' }
    ],
    '4-2-3-1': [
        { name: 'Goleiro', posType: 'GOL' },
        { name: 'Lateral Direito', posType: 'LAT' },
        { name: 'Zagueiro Direito', posType: 'ZAG' },
        { name: 'Zagueiro Esquerdo', posType: 'ZAG' },
        { name: 'Lateral Esquerdo', posType: 'LAT' },
        { name: 'Volante 1', posType: 'MEI' },
        { name: 'Volante 2', posType: 'MEI' },
        { name: 'Meia Ofensivo Direito', posType: 'MEI' },
        { name: 'Meia Central', posType: 'MEI' },
        { name: 'Meia Ofensivo Esquerdo', posType: 'MEI' },
        { name: 'Centroavante', posType: 'ATA' }
    ],
    '3-5-2': [
        { name: 'Goleiro', posType: 'GOL' },
        { name: 'Zagueiro Direito', posType: 'ZAG' },
        { name: 'Zagueiro Central', posType: 'ZAG' },
        { name: 'Zagueiro Esquerdo', posType: 'ZAG' },
        { name: 'Ala Direito', posType: 'LAT' },
        { name: 'Ala Esquerdo', posType: 'LAT' },
        { name: 'Volante 1', posType: 'MEI' },
        { name: 'Volante 2', posType: 'MEI' },
        { name: 'Meia de Ligação', posType: 'MEI' },
        { name: 'Atacante Direito', posType: 'ATA' },
        { name: 'Atacante Esquerdo', posType: 'ATA' }
    ],
    '5-3-2': [
        { name: 'Goleiro', posType: 'GOL' },
        { name: 'Lateral Direito', posType: 'LAT' },
        { name: 'Zagueiro Direito', posType: 'ZAG' },
        { name: 'Zagueiro Central', posType: 'ZAG' },
        { name: 'Zagueiro Esquerdo', posType: 'ZAG' },
        { name: 'Lateral Esquerdo', posType: 'LAT' },
        { name: 'Volante 1', posType: 'MEI' },
        { name: 'Volante 2', posType: 'MEI' },
        { name: 'Meia de Criação', posType: 'MEI' },
        { name: 'Centroavante 1', posType: 'ATA' },
        { name: 'Centroavante 2', posType: 'ATA' }
    ]
};

function renderTacticsSummary() {
    if (!myTeam || !myTeam.tactics) return;
    
    const summaryContainer = document.getElementById('tactics-summary-positions');
    const formationTitle = document.getElementById('tactics-summary-formation-name');
    if (!summaryContainer || !formationTitle) return;

    const formation = myTeam.tactics.formation || '4-3-3';
    formationTitle.innerText = formation;
    summaryContainer.innerHTML = '';

    const starters = myTeam.squad.filter(p => p.isStarter);
    const template = formationTemplates[formation] || formationTemplates['4-3-3'];

    let pool = [...starters];
    const mapping = [];

    // Primeiro passo: preencher as posições com atletas naturais
    template.forEach(slot => {
        const playerIdx = pool.findIndex(p => p.position === slot.posType);
        if (playerIdx !== -1) {
            mapping.push({ slotName: slot.name, player: pool[playerIdx] });
            pool.splice(playerIdx, 1);
        } else {
            mapping.push({ slotName: slot.name, player: null });
        }
    });

    // Segundo passo: preencher vagas restantes com jogadores improvisados
    mapping.forEach(item => {
        if (item.player === null && pool.length > 0) {
            item.player = pool[0];
            pool.splice(0, 1);
        }
    });

    // Renderizar na tela
    mapping.forEach(item => {
        const div = document.createElement('div');
        div.className = 'tactics-summary-item';
        
        let playerContent = '<span style="color: var(--text-muted); font-style: italic;">Não Escalado</span>';
        if (item.player) {
            const isCaptain = item.player.id === myTeam.tactics.captain;
            const isFk = item.player.id === myTeam.tactics.freekicks;
            const isCor = item.player.id === myTeam.tactics.corners;
            
            let badges = '';
            if (isCaptain) badges += ' <span class="badge-role" title="Capitão">Ⓒ</span>';
            if (isFk) badges += ' <span class="badge-role" title="Faltas">Ⓕ</span>';
            if (isCor) badges += ' <span class="badge-role" title="Escanteios">Ⓢ</span>';

            playerContent = `
                <span class="player-name-summary"><strong>${item.player.name}</strong>${badges}</span>
                <span class="player-strength-summary">${item.player.strength}</span>
            `;
        }

        div.innerHTML = `
            <span class="position-label">${item.slotName}</span>
            <div class="player-mapping-box">
                ${playerContent}
            </div>
        `;
        summaryContainer.appendChild(div);
    });
}

// --- SISTEMA DE ESCOLA DE FORMAÇÃO (YOUTH ACADEMY) ---

function generateYouthIntake(team) {
    if (!team) return;
    if (!team.plantelJuniores) team.plantelJuniores = [];
    
    // Gera de 1 a 3 jogadores
    const amount = Math.floor(Math.random() * 3) + 1;
    const academyLevel = team.academyLevel || 1;
    
    for (let i = 0; i < amount; i++) {
        let minOvr = 55;
        let maxOvr = 65;
        
        if (academyLevel >= 4 && academyLevel <= 7) {
            minOvr = 65;
            maxOvr = 75;
        } else if (academyLevel >= 8) {
            minOvr = 75;
            maxOvr = 82;
        }
        
        const overall = Math.floor(Math.random() * (maxOvr - minOvr + 1)) + minOvr;
        const age = Math.floor(Math.random() * 3) + 16; // 16 a 18 anos
        const positions = ['GK', 'DF', 'MD', 'AT'];
        const position = positions[Math.floor(Math.random() * positions.length)];
        const name = nameGenerator.generate(team.league);
        
        const newPlayer = {
            id: Date.now() + i + Math.floor(Math.random() * 1000), // Unique ID
            name: name, // Usa o gerador de nomes fictícios
            position: position,
            strength: overall,
            age: age,
            energy: 100,
            morale: 100,
            matchesPlayed: 0,
            goals: 0,
            assists: 0,
            yellowCards: 0,
            suspensionRounds: 0,
            injuryRounds: 0,
            isYouth: true // Tag para identificar que veio da base
        };
        
        team.plantelJuniores.push(newPlayer);
    }
}

function openAcademyModal() {
    renderAcademyPlayers();
    document.getElementById('modal-academy').style.display = 'flex';
}

function renderAcademyPlayers() {
    const list = document.getElementById('academy-players-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (!myTeam.plantelJuniores || myTeam.plantelJuniores.length === 0) {
        list.innerHTML = '<p style="text-align:center; color: var(--text-muted);">Não há jovens talentos na base neste momento. Invista na Escola de Formação e aguarde a próxima fornada no fim da época.</p>';
        return;
    }
    
    myTeam.plantelJuniores.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'transfer-player-card';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.padding = '10px';
        item.style.borderBottom = '1px solid var(--border-color)';
        
        let positionClass = '';
        if (player.position === 'GK') positionClass = 'pos-gk';
        else if (player.position === 'DF') positionClass = 'pos-df';
        else if (player.position === 'MD') positionClass = 'pos-md';
        else if (player.position === 'AT') positionClass = 'pos-at';

        item.innerHTML = `
            <div style="flex: 1;">
                <h4 style="margin: 0; display:flex; align-items:center; gap:8px;">
                    ${player.name}
                    <span class="position-badge ${positionClass}">${player.position}</span>
                </h4>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">
                    Idade: ${player.age} anos | OVR: <strong>${player.strength}</strong>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
                <button class="btn btn-primary" onclick="promoteYouthPlayer(${index})" style="background-color: var(--primary-color); padding: 5px 10px; font-size:0.8rem;">Promover</button>
                <button class="btn btn-secondary" onclick="investYouthPlayer(${index})" style="background-color: #ff9800; border-color: #ff9800; padding: 5px 10px; font-size:0.8rem;"><i class="fas fa-coins"></i> Investir (50k)</button>
            </div>
        `;
        list.appendChild(item);
    });
}


window.investYouthPlayer = function(index) {
    if (!myTeam.plantelJuniores || index < 0 || index >= myTeam.plantelJuniores.length) return;
    
    if (!myTeam.finances) myTeam.finances = { balance: 0 };
    if (myTeam.finances.balance < 50000) {
        alert("O clube não tem € 50.000 para investir neste jovem no momento.");
        return;
    }
    
    myTeam.finances.balance -= 50000;
    const player = myTeam.plantelJuniores[index];
    player.strength += 1;
    
    alert("Investimento realizado! A força de " + player.name + " subiu para " + player.strength + ".");
    
    try { updateDashboardUI(); } catch(e){}
    renderAcademyPlayers();
    saveGame();
};

function promoteYouthPlayer(index) {
    if (!myTeam.plantelJuniores || index < 0 || index >= myTeam.plantelJuniores.length) return;
    
    const player = myTeam.plantelJuniores[index];
    
    // Remove do plantel de juniores
    myTeam.plantelJuniores.splice(index, 1);
    
    // Adiciona ao squad principal
    delete player.isYouth; // Já não é júnior na base
    myTeam.squad.push(player);
    
    saveGame();
    renderAcademyPlayers(); // Atualiza a modal
    
    // Se a aba jogadores estiver ativa, re-renderiza o campo e o banco
    renderSquad();
    
    alert(`${player.name} foi promovido para a equipa principal!`);
}

function acceptProposal(playerId, buyerId, offerValue) {
    const playerIndex = myTeam.squad.findIndex(p => p.id === playerId);
    if (playerIndex === -1) return;

    const [player] = myTeam.squad.splice(playerIndex, 1);
    const buyer = allTeams.find(t => t.id === buyerId);

    myTeam.balance += offerValue;
    if (buyer && buyer.squad) {
        buyer.squad.push(player);
    }

    document.getElementById('modal-proposal').style.display = 'none';
    alert(`Venda Concluída! ${player.name} foi transferido para o ${buyer.name} por R$ ${(offerValue / 1000000).toFixed(1)}M.`);
    renderSquad();
    updateDashboardUI();
    saveGame();
}

function rejectProposal(playerId) {
    document.getElementById('modal-proposal').style.display = 'none';
    const player = myTeam.squad.find(p => p.id === playerId);
    if (player) handleBlockedTransfer(player);
}

function acceptNewJob(newTeamId, newBudget) {
    const newTeam = allTeams.find(t => t.id === newTeamId);
    if (!newTeam) return;

    // Atualiza o time do usuário
    myTeam = newTeam;
    myTeam.balance = newBudget;

    // Atualiza o estado do jogo para refletir a mudança
    users[currentUser].gameState.myTeamId = newTeamId;

    document.getElementById('modal-manager-offer').style.display = 'none';
    alert(`Parabéns! Você é o novo técnico do ${myTeam.name}!`);
    
    saveGame();
    location.reload(); // Recarrega o jogo para aplicar todas as mudanças de UI e estado
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// ============================================================
// 🔭 RELATÓRIO DO OLHEIRO (NOVA FUNCIONALIDADE)
// ============================================================

function generateScoutReport() {
    if (!myTeam || !myTeam.squad) return [];

    // 1. Identificar a posição mais carente
    const starters = myTeam.squad.filter(p => p.isStarter);
    if (starters.length === 0) return [];

    // Ordena os titulares do mais fraco para o mais forte
    starters.sort((a, b) => a.strength - b.strength);
    const weakestPosition = starters[0].position;

    // 2. Buscar jogadores no mercado para essa posição
    const marketPlayers = [];
    allTeams.forEach(team => {
        if (team.id !== myTeam.id && team.squad) {
            team.squad.forEach(p => {
                if (p.position === weakestPosition) {
                    marketPlayers.push({ ...p, teamName: team.name, teamId: team.id });
                }
            });
        }
    });

    // 3. Filtrar e ordenar os candidatos
    const candidates = marketPlayers.filter(p => {
        // O jogador deve ser melhor que o nosso titular mais fraco
        if (p.strength <= starters[0].strength) return false;
        
        // O preço deve ser realista (até 60% do nosso saldo)
        const price = Math.pow(p.strength, 2) * 14000;
        if (price > myTeam.balance * 0.6) return false;

        return true;
    }).sort((a, b) => b.strength - a.strength);

    if (candidates.length < 3) {
        // Se não encontrar 3, relaxa os critérios e busca qualquer jogador melhor
        const allBetter = marketPlayers.filter(p => p.strength > starters[0].strength).sort((a,b) => b.strength - a.strength);
        return allBetter.slice(0, 3);
    }

    // 4. Selecionar 3 sugestões: um craque, um bom e uma aposta
    const suggestions = [];
    // Sugestão 1: O melhor jogador possível
    if (candidates.length > 0) suggestions.push(candidates[0]);
    // Sugestão 2: Um jogador intermediário (bom custo-benefício)
    if (candidates.length > 2) {
        const midIndex = Math.floor(candidates.length / 2);
        suggestions.push(candidates[midIndex]);
    }
    // Sugestão 3: Um jogador jovem e promissor
    const youngProspect = candidates.filter(p => p.age <= 23).sort((a, b) => b.strength - a.strength)[0];
    if (youngProspect && !suggestions.some(s => s.id === youngProspect.id)) {
        suggestions.push(youngProspect);
    }

    return suggestions.slice(0, 3);
}

function showScoutReport() {
    const suggestions = generateScoutReport();
    const listEl = document.getElementById('scout-suggestions-list');
    listEl.innerHTML = '';

    if (suggestions.length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nossos olheiros não encontraram alvos adequados no momento. Tente novamente mais tarde.</p>';
    } else {
        suggestions.forEach(player => {
            const price = Math.pow(player.strength, 2) * 14000;
            listEl.innerHTML += `
                <div class="market-item" style="background: rgba(0,0,0,0.2); border-radius: 12px;">
                    <div class="market-item-top">
                        <div class="player-info" style="flex: 2;">
                            <span class="player-pos" style="width: 60px;">${player.position} <span style="font-weight:normal; color: var(--text-muted);">i${player.age}</span></span>
                            <span class="player-name">${player.name} <span style="font-size: 0.85em; color: var(--text-muted);">(${player.teamName})</span></span>
                        </div>
                        <div class="player-stats" style="flex: 1; justify-content: flex-end; flex-direction: column; align-items: flex-end; gap: 4px;">
                            <span class="stat-str">FOR: ${player.strength}</span>
                            <span style="color: #4CAF50; font-weight: bold; font-size: 0.95em;">R$ ${(price/1000000).toFixed(1)}M</span>
                        </div>
                    </div>
                    <div class="market-item-actions">
                        <button class="btn btn-primary btn-swap" onclick="buyPlayer(${player.id}, '${player.teamId}', ${price})">Comprar</button>
                        <button class="btn btn-secondary btn-swap" onclick="makeOffer(${player.id}, '${player.teamId}', ${price})">Oferta</button>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('modal-scout-report').style.display = 'flex';
}
