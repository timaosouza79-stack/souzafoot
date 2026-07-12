import os
import urllib.request
import time

teams = {
    'athleticopr': 679,
    'atleticogo': 6049,
    'atleticomg': 330,
    'bahia': 10010,
    'botafogo': 537,
    'bragantino': 8793,
    'corinthians': 199,
    'criciuma': 908,
    'cruzeiro': 1131,
    'cuiaba': 28022,
    'flamengo': 614,
    'fluminense': 2462,
    'fortaleza': 1087,
    'gremio': 210,
    'internacional': 6600,
    'juventude': 10492,
    'palmeiras': 1023,
    'saopaulo': 585,
    'vasco': 975,
    'vitoria': 2125
}

os.makedirs('img', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for team_name, tm_id in teams.items():
    url = f'https://tmssl.akamaized.net/images/wappen/head/{tm_id}.png'
    filepath = os.path.join('img', f'{team_name}_v3.png')
    print(f'Downloading {team_name} from {url}')
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        time.sleep(0.5)
    except Exception as e:
        print(f'Failed {team_name}: {e}')
print("Done!")
