#!/bin/bash
# Régénère share.html : une version autonome de l'app (commands.js,
# commands.en.js, guides.js et guides.en.js inlinés) prête à être
# publiée en artifact partageable.
#
# Usage : ./build-share.sh

cd "$(dirname "$0")" || exit 1

python3 - <<'PYEOF'
import re
from pathlib import Path
from urllib.parse import quote

with open("index.html", encoding="utf-8") as f:
    html = f.read()
with open("commands.js", encoding="utf-8") as f:
    commands_js = f.read()
with open("commands.en.js", encoding="utf-8") as f:
    commands_en_js = f.read()
with open("guides.js", encoding="utf-8") as f:
    guides_js = f.read()
with open("guides.en.js", encoding="utf-8") as f:
    guides_en_js = f.read()

# Le src="fichier.js" peut porter un ?v=... (cache busting, ajouté par
# save.sh) qui change à chaque commit — le pattern l'ignore volontairement
# plutôt que de matcher une chaîne exacte, pour ne pas se dérégler à la
# prochaine sauvegarde.
pattern = re.compile(
    r'<script src="commands\.js(?:\?v=\d+)?"></script>\s*'
    r'<script src="commands\.en\.js(?:\?v=\d+)?"></script>\s*'
    r'<script src="guides\.js(?:\?v=\d+)?"></script>\s*'
    r'<script src="guides\.en\.js(?:\?v=\d+)?"></script>'
)

replacement = (
    f'<script>\n{commands_js}\n</script>\n'
    f'<script>\n{commands_en_js}\n</script>\n'
    f'<script>\n{guides_js}\n</script>\n'
    f'<script>\n{guides_en_js}\n</script>'
)

html, n = pattern.subn(replacement, html)
assert n == 1, f"remplacement des <script src> a échoué (trouvé {n} fois, attendu 1)"

# Les icônes du site restent des fichiers SVG dans index.html, mais la version
# partageable doit les intégrer elle aussi pour fonctionner hors du dossier.
def inline_icon(match):
    name = match.group(1)
    svg = (Path("assets/icons") / name).read_text(encoding="utf-8")
    return f'url("data:image/svg+xml,{quote(svg, safe="")}")'

html = re.sub(r'url\("assets/icons/([^"/]+\.svg)"\)', inline_icon, html)
assert 'assets/icons/' not in html, "une icône externe subsiste dans share.html"

for src in ["commands.js", "commands.en.js", "guides.js", "guides.en.js"]:
    assert f'src="{src}' not in html, f"inlining de {src} a échoué"

with open("share.html", "w", encoding="utf-8") as f:
    f.write(html)

print("share.html régénéré,", len(html), "caractères")
PYEOF
