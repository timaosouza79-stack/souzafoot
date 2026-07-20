import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

brands = ["Pingo Doce", "Continente", "Penalty", "Topper", "Betano", "Mercado Livre", "Itaú", "Nubank", "Vivo"]

for brand in brands:
    query = brand.replace(' ', '+') + '+logo+svg'
    url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={query}&utf8=&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        data = json.loads(response.read())
        print(f"--- {brand} ---")
        for res in data['query']['search'][:3]:
            print(res['title'])
    except Exception as e:
        print(f"Error for {brand}: {e}")
