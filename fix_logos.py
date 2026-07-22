import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

teams = [
    "Olympiacos", "Panathinaikos", "AEK Athens",
    "Shanghai Port", "Shandong Taishan", "Shanghai Shenhua",
    "Ajax", "PSV Eindhoven", "Feyenoord",
    "Galatasaray", "Fenerbahce", "Besiktas",
    "Club America", "Chivas", "Tigres UANL",
    "Colo-Colo", "Universidad de Chile", "Universidad Catolica",
    "Atletico Nacional", "Millonarios", "America de Cali",
    "Penarol", "Nacional", "Defensor Sporting",
    "Al Ahly", "Zamalek", "Pyramids FC",
    "Mamelodi Sundowns", "Orlando Pirates", "Kaizer Chiefs",
    "Vissel Kobe", "Urawa Red Diamonds", "Kawasaki Frontale",
    "Ulsan HD", "Jeonbuk Hyundai", "Pohang Steelers",
    "Club Brugge", "Anderlecht", "KRC Genk",
    "Celtic", "Rangers", "Hearts",
    "Zenit", "Spartak Moscow", "CSKA Moscow"
]

results = {}
for team in teams:
    query = team.replace(' ', '%20')
    url = f"https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t={query}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        data = json.loads(response.read())
        if data.get('teams'):
            badge = data['teams'][0].get('strBadge')
            if badge:
                results[team] = badge
            else:
                print(f"No badge for {team}")
        else:
            print(f"Team not found: {team}")
    except Exception as e:
        print(f"Error for {team}: {e}")

print("======================")
for t, badge in results.items():
    print(f"{t}: {badge}")

