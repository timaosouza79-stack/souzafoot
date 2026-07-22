import re
import urllib.request
import json
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('script.js', 'r') as f:
    content = f.read()

# Extract brazil_b and portugal teams
matches = re.findall(r'\{"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"strength":\s*\d+,\s*"shield":\s*"([^"]+)",\s*"league":\s*"(brazil_b|portugal)"', content)

results = {}
for t_id, name, current_shield, league in matches:
    # Query TheSportsDB
    query = name.replace(' ', '%20')
    url = f"https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t={query}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx)
        data = json.loads(response.read())
        if data.get('teams'):
            badge = data['teams'][0].get('strBadge')
            if badge:
                results[t_id] = badge
                print(f"Found logo for {name}")
            else:
                print(f"No badge for {name}")
        else:
            print(f"Team not found: {name}")
    except Exception as e:
        print(f"Error for {name}: {e}")
    time.sleep(2.5)

# Replace in content
for t_id, new_url in results.items():
    content = re.sub(r'(\{"id":\s*"' + t_id + r'",\s*"name":\s*"[^"]+",\s*"strength":\s*\d+,\s*"shield":\s*)"[^"]+"', r'\g<1>"' + new_url + '"', content)

with open('script.js', 'w') as f:
    f.write(content)

print(f"Updated {len(results)} teams in script.js.")
