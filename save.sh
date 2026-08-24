#!/bin/bash
# Sauvegarde le Command Hub : commit + push vers GitHub en une commande.
#
# Usage :
#   ./save.sh                     → message de commit générique horodaté
#   ./save.sh "message du commit" → message personnalisé

set -e
cd "$(dirname "$0")"

if [ -z "$(git status --porcelain)" ]; then
  echo "✓ Rien à sauvegarder, tout est déjà à jour."
  exit 0
fi

MSG="${1:-Mise à jour du $(date '+%d/%m/%Y à %H:%M')}"

# Casse le cache navigateur des .js chargés par index.html (sinon un visiteur
# peut garder une vieille version jusqu'à 10 min après un push, cf.
# cache-control max-age=600 servi par GitHub Pages).
VERSION=$(date +%Y%m%d%H%M%S)
sed -i -E "s/src=\"([a-zA-Z.]+\.js)(\?v=[0-9]+)?\"/src=\"\1?v=$VERSION\"/g" index.html

echo ""
echo "Changements détectés :"
git status --short
echo ""

git add -A
git commit -m "$MSG"

git push

echo ""
echo "✓ Sauvegardé et poussé sur GitHub."
