import urllib.request
import os

domainMap = {
    'Coca-Cola': 'coca-cola.com',
    'Guaraná Antarctica': 'guaranaantarctica.com.br',
    'Nike': 'nike.com',
    'Adidas': 'adidas.com',
    'Puma': 'puma.com',
    'New Balance': 'newbalance.com',
    "McDonald's": 'mcdonalds.com',
    'Burger King': 'burgerking.com',
    'Pingo Doce': 'pingodoce.pt',
    'Continente': 'continente.pt',
    'MEO': 'meo.pt',
    'Penalty': 'penalty.com.br',
    'Topper': 'topper.com.ar',
    'Betano': 'betano.com',
    'Mercado Livre': 'mercadolivre.com.br',
    'Itaú': 'itau.com.br',
    'Nubank': 'nubank.com.br',
    'Vivo': 'vivo.com.br',
    'Emirates': 'emirates.com',
    'Spotify': 'spotify.com',
    'Red Bull': 'redbull.com',
    'Samsung': 'samsung.com',
    'Mastercard': 'mastercard.com'
}

for brand, domain in domainMap.items():
    safe_brand = brand.replace(' ', '_').replace("'", "").replace('á', 'a').replace('ú', 'u')
    path = f"img/sponsors/{safe_brand}.png"
    if os.path.exists(path):
        continue
    url = f"https://logo.clearbit.com/{domain}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded {brand}")
    except Exception as e:
        print(f"Failed {brand}: {e}")
        # Try google favicon if clearbit fails
        try:
            url2 = f"https://www.google.com/s2/favicons?domain={domain}&sz=128"
            req2 = urllib.request.Request(url2, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as response, open(path, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Downloaded {brand} from Google")
        except Exception as e2:
            print(f"Failed completely {brand}: {e2}")

