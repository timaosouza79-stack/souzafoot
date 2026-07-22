import urllib.request
import json
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

teams = {
    "olympiacos": "Olympiacos",
    "panathinaikos": "Panathinaikos",
    "aek": "AEK Athens",
    "shanghai_port": "Shanghai Port",
    "shandong": "Shandong Taishan",
    "shanghai_shenhua": "Shanghai Shenhua",
    "ajax": "Ajax",
    "psv": "PSV Eindhoven",
    "feyenoord": "Feyenoord",
    "galatasaray": "Galatasaray",
    "fenerbahce": "Fenerbahce",
    "besiktas": "Besiktas",
    "club_america": "Club America",
    "chivas": "Chivas",
    "tigres": "Tigres UANL",
    "colocolo": "Colo Colo",
    "uchile": "Universidad de Chile",
    "ucatolica": "Universidad Catolica",
    "atlnacional": "Atletico Nacional",
    "millonarios": "Millonarios",
    "americacali": "America de Cali",
    "penarol": "Penarol",
    "nacionaluy": "Nacional",
    "defensor": "Defensor Sporting",
    "alahly": "Al Ahly",
    "zamalek": "Zamalek",
    "pyramids": "Pyramids FC",
    "sundowns": "Mamelodi Sundowns",
    "orlando": "Orlando Pirates",
    "kaizer": "Kaizer Chiefs",
    "vissel": "Vissel Kobe",
    "urawa": "Urawa Red Diamonds",
    "kawasaki": "Kawasaki Frontale",
    "ulsan": "Ulsan Hyundai",
    "jeonbuk": "Jeonbuk Hyundai Motors",
    "pohang": "Pohang Steelers",
    "brugge": "Club Brugge",
    "anderlecht": "Anderlecht",
    "genk": "KRC Genk",
    "celtic": "Celtic",
    "rangers": "Rangers",
    "hearts": "Heart of Midlothian",
    "zenit": "Zenit Saint Petersburg",
    "spartak": "Spartak Moscow",
    "cska": "CSKA Moscow"
}

results = {}
for id, name in teams.items():
    query = name.replace(' ', '%20')
    url = f"https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t={query}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        data = json.loads(response.read())
        if data.get('teams'):
            badge = data['teams'][0].get('strBadge')
            if badge:
                results[id] = badge
            else:
                print(f"No badge for {name}")
        else:
            print(f"Team not found: {name}")
    except Exception as e:
        print(f"Error for {name}: {e}")
    time.sleep(2.5)

import re
with open('rest_world.js', 'r') as f:
    content = f.read()

for id, url in results.items():
    # Replace URL directly
    content = re.sub(r'(id:\s*"' + id + r'",\s*name:\s*"[^"]+",\s*strength:\s*\d+,\s*shield:\s*)"[^"]+"', r'\g<1>"' + url + '"', content)

with open('rest_world.js', 'w') as f:
    f.write(content)

print(f"Updated {len(results)} teams.")
