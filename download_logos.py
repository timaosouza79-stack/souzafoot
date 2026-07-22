import re
import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('rest_world.js', 'r') as f:
    content = f.read()

teams = re.findall(r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*strength:\s*\d+,\s*shield:\s*"([^"]+)"', content)

for t_id, name, url in teams:
    local_path = f"img/clubs/{t_id}.png"
    if not os.path.exists(local_path):
        print(f"Downloading {t_id} from {url}")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, context=ctx) as response, open(local_path, 'wb') as out_file:
                out_file.write(response.read())
            # Update content
            content = content.replace(url, local_path)
        except Exception as e:
            print(f"Failed to download {t_id}: {e}")

with open('rest_world.js', 'w') as f:
    f.write(content)
print("Done!")
