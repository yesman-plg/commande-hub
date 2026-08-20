#!/bin/bash
# Régénère share.html : une version autonome de l'app (commands.js,
# commands.en.js, guides.js et guides.en.js inlinés) prête à être
# publiée en artifact partageable.
#
# Usage : ./build-share.sh

cd "$(dirname "$0")" || exit 1

python3 - <<'PYEOF'
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

html = html.replace(
    '<script src="commands.js"></script>\n'
    '<script src="commands.en.js"></script>\n'
    '<script src="guides.js"></script>\n'
    '<script src="guides.en.js"></script>',
    f'<script>\n{commands_js}\n</script>\n'
    f'<script>\n{commands_en_js}\n</script>\n'
    f'<script>\n{guides_js}\n</script>\n'
    f'<script>\n{guides_en_js}\n</script>'
)

for src in ["commands.js", "commands.en.js", "guides.js", "guides.en.js"]:
    assert f'src="{src}"' not in html, f"remplacement {src} a échoué"

with open("share.html", "w", encoding="utf-8") as f:
    f.write(html)

print("share.html régénéré,", len(html), "caractères")
PYEOF
