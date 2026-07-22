import urllib.request
import urllib.parse
import json
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

teams = {
    "olympiacos": "Olympiacos F.C.",
    "panathinaikos": "Panathinaikos F.C.",
    "aek": "AEK Athens F.C.",
    "shanghai_port": "Shanghai Port F.C.",
    "shandong": "Shandong Taishan F.C.",
    "shanghai_shenhua": "Shanghai Shenhua F.C.",
    "ajax": "AFC Ajax",
    "psv": "PSV Eindhoven",
    "feyenoord": "Feyenoord",
    "galatasaray": "Galatasaray S.K. (football)",
    "fenerbahce": "Fenerbahçe S.K. (football)",
    "besiktas": "Beşiktaş J.K.",
    "club_america": "Club América",
    "chivas": "C.D. Guadalajara",
    "tigres": "Tigres UANL",
    "colocolo": "Colo-Colo",
    "uchile": "Club Universidad de Chile",
    "ucatolica": "Club Deportivo Universidad Católica",
    "atlnacional": "Atlético Nacional",
    "millonarios": "Millonarios F.C.",
    "americacali": "América de Cali",
    "penarol": "Peñarol",
    "nacionaluy": "Club Nacional de Football",
    "defensor": "Defensor Sporting",
    "alahly": "Al Ahly FC",
    "zamalek": "Zamalek SC",
    "pyramids": "Pyramids FC",
    "sundowns": "Mamelodi Sundowns F.C.",
    "orlando": "Orlando Pirates F.C.",
    "kaizer": "Kaizer Chiefs F.C.",
    "vissel": "Vissel Kobe",
    "urawa": "Urawa Red Diamonds",
    "kawasaki": "Kawasaki Frontale",
    "ulsan": "Ulsan HD FC",
    "jeonbuk": "Jeonbuk Hyundai Motors",
    "pohang": "Pohang Steelers",
    "brugge": "Club Brugge KV",
    "anderlecht": "R.S.C. Anderlecht",
    "genk": "K.R.C. Genk",
    "celtic": "Celtic F.C.",
    "rangers": "Rangers F.C.",
    "hearts": "Heart of Midlothian F.C.",
    "zenit": "FC Zenit Saint Petersburg",
    "spartak": "FC Spartak Moscow",
    "cska": "PFC CSKA Moscow"
}

results = {}
for id, title in teams.items():
    query = urllib.parse.quote(title)
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={query}&prop=pageimages&pithumbsize=300&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        data = json.loads(response.read())
        pages = data['query']['pages']
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                results[id] = pages[page_id]['thumbnail']['source']
            else:
                print(f"No image for {id} ({title})")
    except Exception as e:
        print(f"Error for {id}: {e}")
    time.sleep(0.1)

print("==== OUTPUT ====")
print(json.dumps(results, indent=2))
