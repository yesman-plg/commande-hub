#!/bin/bash
# Régénère share.html : une version autonome de l'app (commands.js et
# guides.js inlinés) prête à être publiée en artifact partageable.
#
# Usage : ./build-share.sh

cd "$(dirname "$0")" || exit 1

python3 - <<'PYEOF'
with open("index.html", encoding="utf-8") as f:
    html = f.read()
with open("commands.js", encoding="utf-8") as f:
    commands_js = f.read()
with open("guides.js", encoding="utf-8") as f:
    guides_js = f.read()

html = html.replace(
    '<script src="commands.js"></script>\n<script src="guides.js"></script>',
    f'<script>\n{commands_js}\n</script>\n<script>\n{guides_js}\n</script>'
)

assert 'src="commands.js"' not in html, "remplacement commands.js a échoué"
assert 'src="guides.js"' not in html, "remplacement guides.js a échoué"

with open("share.html", "w", encoding="utf-8") as f:
    f.write(html)

print("share.html régénéré,", len(html), "caractères")
PYEOF
