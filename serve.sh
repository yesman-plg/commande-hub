#!/bin/bash
# Lance le Command Hub sur le réseau local pour y accéder depuis ton téléphone
# (le téléphone doit être sur le MÊME wifi que ce PC).
#
# Usage : ./serve.sh   (puis Ctrl+C pour arrêter)

PORT=8090
IP=$(hostname -I | awk '{print $1}')

cd "$(dirname "$0")" || exit 1

echo ""
echo "  📱 Command Hub accessible depuis ton téléphone à :"
echo ""
echo "       http://$IP:$PORT"
echo ""
echo "  (le téléphone doit être connecté au même wifi que ce PC)"
echo "  Ctrl+C pour arrêter le serveur."
echo ""

python3 -m http.server "$PORT"
