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

echo ""
echo "Changements détectés :"
git status --short
echo ""

git add -A
git commit -m "$MSG"

git push

echo ""
echo "✓ Sauvegardé et poussé sur GitHub."
