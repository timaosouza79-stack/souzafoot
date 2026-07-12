import os
import urllib.request
import time

new_teams = {
    'santos': 221,
    'chapecoense': 24222,
    'coritiba': 776,
    'mirassol': 3579,
    'remo': 6334,
    'cuiaba': 28022,
    'sport': 871,
    'ceara': 2029,
    'goias': 3142,
    'america': 2790,
    'novorizontino': 35034,
    'avai': 2035,
    'pontepreta': 1136,
    'riverplate': 209,
    'bocajuniors': 189,
    'racing': 1444,
    'penarol': 1141,
    'nacional': 1123,
    'colocolo': 2431,
    'ldu': 3533,
    'independientedelvalle': 17070,
    'olimpia': 1460,
    'atleticonacional': 1461,
    'talleres': 3938,
    'estudiantes': 288,
    'cerroporteno': 1500,
    'libertad': 1501,
    'millonarios': 1144,
    'junior': 1152,
    'barcelonasc': 2085,
    'udechile': 618,
    'alianzalima': 1466,
    'sportingcristal': 1467,
    'bolivar': 3532,
    'thestrongest': 3534,
    'rosariocentral': 1446,
    'sanlorenzo': 1447,
    'ucatolica': 3277
}

os.makedirs('img', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for team_name, tm_id in new_teams.items():
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
