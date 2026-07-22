import urllib.request
import json
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

teams = {
    "Colo Colo": "colocolo",
    "Ulsan Hyundai": "ulsan",
    "Jeonbuk Hyundai Motors": "jeonbuk",
    "Pohang Steelers": "pohang",
    "Club Brugge": "brugge",
    "Anderlecht": "anderlecht",
    "KRC Genk": "genk",
    "Celtic": "celtic",
    "Rangers": "rangers",
    "Heart of Midlothian": "hearts",
    "Zenit Saint Petersburg": "zenit",
    "Spartak Moscow": "spartak",
    "CSKA Moscow": "cska"
}

results = {}
for name, id in teams.items():
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

print("==== OUTPUT ====")
print(json.dumps(results, indent=2))
