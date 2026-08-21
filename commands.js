// ============================================================
// Command Hub — fichier de données
// ============================================================
// Ajoute / modifie tes commandes ici. Chaque entrée :
//   category    : onglet principal (crée-en un nouveau si besoin, il
//                 apparaîtra automatiquement dans les filtres)
//   subcategory : sous-catégorie à l'intérieur de l'onglet (optionnel).
//                 Utilisé pour "Linux" afin d'éviter d'avoir 70 commandes
//                 en vrac — même principe si un autre onglet grossit trop.
//   title       : petit titre lisible
//   cmd         : la commande (utilise \n pour plusieurs lignes)
//   desc        : explication courte (optionnel)
//   tags        : mots-clés pour la recherche (optionnel)
//   related     : renvoi vers une fiche Formation liée (optionnel), au
//                 format "Catégorie::Titre exact de la fiche" (le titre
//                 doit exister tel quel dans guides.js). Accepte aussi
//                 un tableau de plusieurs renvois. Affiché en bas de la
//                 carte comme "📘 Pour comprendre : ...".
// Sauvegarde le fichier, puis recharge la page dans le navigateur.
// ============================================================

const COMMANDS = [
  // --- Expo / React Native ---------------------------------
  {
    category: "Expo / React Native",
    subcategory: "Démarrage & Dev",
    title: "Démarrer le projet",
    cmd: "npx expo start",
    desc: "Lance le serveur de dev Expo (Metro bundler).",
    tags: ["dev", "start", "metro"],
    related: "Expo / React Native::Dev, Build, Submit, Update : qui fait quoi ?",
  },
  {
    category: "Expo / React Native",
    subcategory: "Démarrage & Dev",
    title: "Démarrer avec cache vidé",
    cmd: "npx expo start -c",
    desc: "Utile quand Metro a un cache corrompu ou après un changement de config.",
    tags: ["cache", "clear", "debug"],
    related: "Expo / React Native::Metro, le serveur qui recharge ton app",
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Build Android (EAS)",
    cmd: "eas build --platform android --profile preview",
    desc: "Build cloud via EAS. Change le profil (development/preview/production) selon le besoin.",
    tags: ["build", "eas", "android"],
    related: "Expo / React Native::Dev, Build, Submit, Update : qui fait quoi ?",
  },
  {
    category: "Expo / React Native",
    subcategory: "Build local",
    title: "Build local Android",
    cmd: "npx expo run:android",
    desc: "Build et installe sur un émulateur/appareil connecté sans passer par EAS.",
    tags: ["build", "local", "android"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Soumettre sur le Play Store",
    cmd: "eas submit --platform android",
    desc: "Envoie le dernier build vers Google Play.",
    tags: ["submit", "play store", "release"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Vérifier la config du projet",
    cmd: "npx expo-doctor",
    desc: "Diagnostique les incompatibilités de versions / config.",
    tags: ["doctor", "diagnostic"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Installer une lib compatible Expo",
    cmd: "npx expo install <nom-du-package>",
    desc: "Comme npm install, mais choisit la version compatible avec ton SDK Expo.",
    tags: ["install", "package", "dependency"],
    related: "Expo / React Native::Pourquoi ça plante après avoir installé une lib",
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Mettre à jour le SDK Expo",
    cmd: "npx expo install expo@latest\nnpx expo-doctor",
    desc: "Upgrade puis vérifie que tout est cohérent.",
    tags: ["upgrade", "sdk"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Build local",
    title: "Prebuild (générer android/ios natifs)",
    cmd: "npx expo prebuild --clean",
    desc: "Régénère les dossiers natifs à partir de app.json/app.config.js.",
    tags: ["prebuild", "native", "clean"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Démarrage & Dev",
    title: "Créer un nouveau projet",
    cmd: "npx create-expo-app@latest mon-projet",
    desc: "Génère un nouveau projet Expo à partir du template par défaut.",
    tags: ["create", "nouveau", "init"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Build local",
    title: "Build local iOS",
    cmd: "npx expo run:ios",
    desc: "Build et lance sur un simulateur iOS (nécessite un Mac/Xcode).",
    tags: ["build", "local", "ios"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Démarrage & Dev",
    title: "Ouvrir directement sur une plateforme",
    cmd: "npx expo start --android\nnpx expo start --ios\nnpx expo start --web",
    desc: "Lance le serveur et ouvre directement l'app sur la plateforme choisie.",
    tags: ["start", "android", "ios", "web"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Démarrage & Dev",
    title: "Démarrer via tunnel",
    cmd: "npx expo start --tunnel",
    desc: "Utile quand le téléphone et l'ordi ne sont pas sur le même réseau (ou wifi qui bloque le LAN).",
    tags: ["tunnel", "reseau", "start"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Compte & credentials",
    title: "Se connecter à EAS",
    cmd: "eas login",
    desc: "Requis avant tout build/submit/update via EAS. Vérifie avec: eas whoami",
    tags: ["eas", "login", "compte"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Compte & credentials",
    title: "Initialiser EAS sur le projet",
    cmd: "eas init",
    desc: "Lie le projet local à un projet Expo/EAS existant (ou en crée un).",
    tags: ["eas", "init", "setup"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Build iOS (EAS)",
    cmd: "eas build --platform ios --profile preview",
    desc: "Équivalent iOS du build Android — nécessite un compte Apple Developer configuré.",
    tags: ["build", "eas", "ios"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Build les deux plateformes",
    cmd: "eas build --platform all --profile preview",
    desc: "Lance un build Android et iOS en une seule commande.",
    tags: ["build", "eas", "all"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Soumettre sur l'App Store",
    cmd: "eas submit --platform ios",
    desc: "Envoie le dernier build iOS vers App Store Connect.",
    tags: ["submit", "app store", "ios", "release"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Update (OTA)",
    title: "Publier une mise à jour OTA",
    cmd: 'eas update --branch preview --message "description du fix"',
    desc: "Pousse un changement JS/assets directement aux utilisateurs sans repasser par le store (nécessite expo-updates).",
    tags: ["eas", "update", "ota"],
    related: "Expo / React Native::Dev, Build, Submit, Update : qui fait quoi ?",
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Update (OTA)",
    title: "Lister les branches de update",
    cmd: "eas channel:list",
    desc: "Voit quels channels/branches de déploiement OTA existent (preview, production…).",
    tags: ["eas", "channel", "update"]
  },
  {
    category: "Expo / React Native",
    subcategory: "EAS Build & Submit",
    title: "Lister les builds récents",
    cmd: "eas build:list",
    desc: "Historique des builds cloud avec leur statut.",
    tags: ["eas", "build", "list"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Compte & credentials",
    title: "Gérer les credentials de signature",
    cmd: "eas credentials",
    desc: "Interface interactive pour voir/régénérer les clés de signature Android/iOS gérées par EAS.",
    tags: ["eas", "credentials", "signing"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Corriger les versions de dépendances",
    cmd: "npx expo install --fix",
    desc: "Aligne automatiquement les packages installés sur les versions attendues par le SDK Expo.",
    tags: ["install", "fix", "dependencies"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Voir la config résolue de l'app",
    cmd: "npx expo config --type public",
    desc: "Affiche app.json/app.config.js tel qu'Expo l'interprète réellement, avec les valeurs par défaut.",
    tags: ["config", "debug"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Exporter le bundle statique",
    cmd: "npx expo export",
    desc: "Génère les fichiers statiques (JS, assets) dans dist/ — utile pour le web ou un hébergement custom d'updates.",
    tags: ["export", "build", "static"]
  },
  {
    category: "Expo / React Native",
    subcategory: "Diagnostic & config",
    title: "Ajouter le dev client",
    cmd: "npx expo install expo-dev-client",
    desc: "Nécessaire dès que le projet utilise du code natif custom (au-delà d'Expo Go). Se combine avec un build --profile development.",
    tags: ["dev-client", "native", "expo-go"]
  },

  // --- Kotlin / Android — Gradle --------------------------------------
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Build debug",
    cmd: "./gradlew assembleDebug",
    desc: "Compile l'APK debug.",
    tags: ["gradle", "build", "debug"],
    related: "Kotlin / Android::Gradle, le chef d'orchestre de ton build",
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Installer sur appareil/émulateur",
    cmd: "./gradlew installDebug",
    desc: "Build + installe directement l'APK debug sur l'appareil connecté (adb).",
    tags: ["gradle", "install", "adb"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Build release signé",
    cmd: "./gradlew assembleRelease",
    desc: "Nécessite la config de signing dans build.gradle (keystore).",
    tags: ["gradle", "release", "signing"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Générer un App Bundle (Play Store)",
    cmd: "./gradlew bundleRelease",
    desc: "Génère le .aab attendu par le Play Store.",
    tags: ["gradle", "aab", "bundle", "play store"],
    related: "Kotlin / Android::APK vs AAB, et le keystore de signature",
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Nettoyer le projet",
    cmd: "./gradlew clean",
    desc: "Supprime les artefacts de build. Utile en cas d'erreur bizarre.",
    tags: ["gradle", "clean"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Lancer les tests unitaires",
    cmd: "./gradlew test",
    desc: "Exécute les tests JVM (hors instrumentation).",
    tags: ["gradle", "test"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Lancer les tests instrumentés",
    cmd: "./gradlew connectedAndroidTest",
    desc: "Tests qui tournent réellement sur un appareil/émulateur connecté (UI, contexte Android…).",
    tags: ["gradle", "test", "instrumentation"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Build complet (compile + tests + lint)",
    cmd: "./gradlew build",
    desc: "Plus complet qu'assembleDebug, vérifie tout avant de considérer le build réussi.",
    tags: ["gradle", "build", "complet"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Lancer le lint",
    cmd: "./gradlew lint",
    desc: "Analyse statique du code Android, génère un rapport HTML des problèmes détectés.",
    tags: ["gradle", "lint"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Lister toutes les tâches disponibles",
    cmd: "./gradlew tasks",
    desc: "Utile pour découvrir les tâches spécifiques exposées par le projet/les plugins.",
    tags: ["gradle", "tasks", "aide"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Voir l'arbre des dépendances",
    cmd: "./gradlew :app:dependencies",
    desc: "Utile pour traquer un conflit de version entre librairies.",
    tags: ["gradle", "dependencies"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Voir les empreintes de signature (SHA1/SHA256)",
    cmd: "./gradlew signingReport",
    desc: "Nécessaire pour configurer Firebase, Google Sign-In, Maps API, etc.",
    tags: ["gradle", "signing", "sha1", "firebase"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Build avec la stacktrace complète",
    cmd: "./gradlew assembleDebug --stacktrace",
    desc: "Pour comprendre une erreur de build peu claire. Ajoute --info pour encore plus de détails.",
    tags: ["gradle", "debug", "stacktrace", "erreur"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Gradle",
    title: "Arrêter le daemon Gradle",
    cmd: "./gradlew --stop",
    desc: "Utile quand Gradle se comporte bizarrement (cache, process bloqué…) avant de relancer un build.",
    tags: ["gradle", "daemon", "stop"]
  },

  // --- Kotlin / Android — ADB --------------------------------------
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Lister les appareils connectés",
    cmd: "adb devices",
    desc: "Vérifie que l'émulateur/téléphone est bien détecté.",
    tags: ["adb", "devices"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Voir les logs (logcat filtré)",
    cmd: "adb logcat *:E",
    desc: "Affiche uniquement les erreurs. Remplace *:E par TonTag:D pour filtrer un tag précis.",
    tags: ["adb", "logcat", "debug"],
    related: "Kotlin / Android::ADB, le pont entre ton PC et ton téléphone",
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Vider les logs",
    cmd: "adb logcat -c",
    desc: "Efface le buffer de logs avant de reproduire un bug, pour repartir propre.",
    tags: ["adb", "logcat", "clear"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Désinstaller l'app",
    cmd: "adb uninstall <nom.du.package>",
    desc: "Utile quand l'install échoue à cause d'un conflit de signature.",
    tags: ["adb", "uninstall"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Installer un APK manuellement",
    cmd: "adb install app.apk",
    desc: "Ajoute -r pour réinstaller par-dessus en gardant les données existantes.",
    tags: ["adb", "install", "apk"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Effacer les données de l'app",
    cmd: "adb shell pm clear <nom.du.package>",
    desc: "Remet l'app dans l'état 'première installation' sans la désinstaller.",
    tags: ["adb", "clear", "data"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Copier un fichier vers l'appareil",
    cmd: "adb push fichier-local /sdcard/destination",
    desc: "Pour récupérer un fichier depuis l'appareil, utilise adb pull /sdcard/source fichier-local",
    tags: ["adb", "push", "pull", "fichier"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Rediriger un port (dev server)",
    cmd: "adb reverse tcp:8081 tcp:8081",
    desc: "Permet à un appareil branché en USB d'accéder à un serveur local (Metro, API…) sans wifi.",
    tags: ["adb", "reverse", "port", "metro"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Ouvrir un shell sur l'appareil",
    cmd: "adb shell",
    desc: "Accès shell direct sur l'appareil/émulateur connecté.",
    tags: ["adb", "shell"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Lancer une activité précise",
    cmd: "adb shell am start -n nom.du.package/.MainActivity",
    desc: "Démarre directement une Activity sans passer par le launcher.",
    tags: ["adb", "activity", "start"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Prendre une capture d'écran",
    cmd: "adb exec-out screencap -p > screen.png",
    desc: "Sauvegarde directement l'écran de l'appareil dans un fichier local.",
    tags: ["adb", "screenshot", "capture"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "ADB",
    title: "Redémarrer le serveur adb",
    cmd: "adb kill-server && adb start-server",
    desc: "Corrige la plupart des soucis de détection d'appareil ('device offline', etc.).",
    tags: ["adb", "restart", "troubleshoot"]
  },

  // --- Kotlin / Android — Émulateur --------------------------------------
  {
    category: "Kotlin / Android",
    subcategory: "Émulateur",
    title: "Lister les émulateurs disponibles",
    cmd: "emulator -list-avds",
    desc: "Affiche les AVD (Android Virtual Device) configurés sur la machine.",
    tags: ["emulator", "avd", "list"]
  },
  {
    category: "Kotlin / Android",
    subcategory: "Émulateur",
    title: "Lancer un émulateur précis",
    cmd: "emulator -avd nom_de_avd",
    desc: "Démarre l'émulateur en ligne de commande, sans passer par Android Studio.",
    tags: ["emulator", "avd", "start"]
  },

  // --- Linux — Fichiers & disque -------------------------------
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Lister en détail (avec cachés)",
    cmd: "ls -la",
    desc: "Liste tous les fichiers, y compris cachés, avec permissions/taille/date.",
    tags: ["ls", "list"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Revenir au dossier précédent",
    cmd: "cd -",
    desc: "Bascule vers le dernier dossier où tu étais avant le cd actuel.",
    tags: ["cd", "navigation"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Espace disque par dossier",
    cmd: "du -sh * | sort -rh | head -20",
    desc: "Top 20 des plus gros dossiers/fichiers du répertoire courant.",
    tags: ["disque", "du", "espace"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Espace disque global",
    cmd: "df -h",
    desc: "Espace utilisé/disponible par partition.",
    tags: ["disque", "df"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Lister les disques/partitions",
    cmd: "lsblk",
    desc: "Vue arborescente des disques, partitions et points de montage.",
    tags: ["disque", "partition", "lsblk"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Trouver un fichier par nom",
    cmd: "find / -iname \"*motclé*\" 2>/dev/null",
    desc: "Recherche insensible à la casse sur tout le système, en ignorant les erreurs de permission.",
    tags: ["find", "recherche", "fichier"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Recherche rapide (index)",
    cmd: "locate motclé",
    desc: "Bien plus rapide que find (utilise un index). Installe: sudo apt install mlocate, puis sudo updatedb pour rafraîchir l'index.",
    tags: ["locate", "recherche"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Chercher du texte dans des fichiers",
    cmd: "grep -rn \"motclé\" .",
    desc: "Recherche récursive avec numéro de ligne dans le dossier courant.",
    tags: ["grep", "recherche", "texte"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Copier/synchroniser avec progression",
    cmd: "rsync -avh --progress source/ destination/",
    desc: "Plus robuste que cp pour de gros transferts, reprend là où ça s'est arrêté.",
    tags: ["rsync", "copie", "sync"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Rendre un script exécutable",
    cmd: "chmod +x script.sh",
    desc: "Nécessaire avant de pouvoir lancer ./script.sh",
    tags: ["chmod", "permissions", "executable"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Changer le propriétaire d'un fichier",
    cmd: "sudo chown utilisateur:groupe fichier",
    desc: "Ajoute -R pour l'appliquer récursivement à un dossier.",
    tags: ["chown", "permissions", "owner"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Créer un lien symbolique",
    cmd: "ln -s /chemin/source /chemin/lien",
    desc: "Pratique pour exposer un script ou un dossier depuis n'importe où.",
    tags: ["ln", "symlink"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Archiver un dossier (tar.gz)",
    cmd: "tar -czvf archive.tar.gz mon-dossier/",
    desc: "Compresse. Pour décompresser : tar -xzvf archive.tar.gz",
    tags: ["tar", "archive", "compression"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Zipper / dézipper",
    cmd: "zip -r archive.zip mon-dossier/\nunzip archive.zip",
    desc: "Alternative à tar, plus courante quand il faut échanger avec Windows/Mac.",
    tags: ["zip", "unzip", "compression"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Voir les métadonnées d'un fichier",
    cmd: "stat fichier",
    desc: "Taille, dates de modif/accès, permissions détaillées, inode…",
    tags: ["stat", "metadata"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Monter / démonter une clé USB",
    cmd: "lsblk\nsudo mount /dev/sdX1 /mnt\nsudo umount /mnt",
    desc: "Repère d'abord le périphérique avec lsblk avant de monter.",
    tags: ["mount", "umount", "usb"]
  },
  {
    category: "Linux",
    subcategory: "Fichiers & disque",
    title: "Voir l'arborescence d'un dossier",
    cmd: "tree -L 2",
    desc: "Affiche la structure sur 2 niveaux de profondeur. Installe: sudo apt install tree.",
    tags: ["tree", "arborescence"]
  },

  // --- Linux — Processus & système -------------------------------
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Moniteur interactif CPU/RAM",
    cmd: "htop",
    desc: "Vue temps réel des processus. Installe avec: sudo apt install htop.",
    tags: ["process", "cpu", "ram", "monitoring"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Chercher un processus par nom",
    cmd: "ps aux | grep nom-du-processus",
    desc: "Liste les processus correspondants avec leur PID.",
    tags: ["ps", "process", "grep"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Tuer un processus",
    cmd: "kill -9 PID",
    desc: "Force l'arrêt. Pour tuer par nom directement : killall nom-du-processus",
    tags: ["kill", "process", "stop"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Mémoire disponible",
    cmd: "free -h",
    desc: "RAM et swap utilisés/libres, format lisible.",
    tags: ["ram", "memoire", "free"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Depuis combien de temps le système tourne",
    cmd: "uptime",
    desc: "Uptime + charge moyenne du système.",
    tags: ["uptime", "system"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Infos noyau / système",
    cmd: "uname -a",
    desc: "Version du kernel, architecture, hostname.",
    tags: ["uname", "kernel", "info"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Version de la distribution",
    cmd: "lsb_release -a",
    desc: "Confirme la version de Linux Mint installée.",
    tags: ["lsb_release", "version", "distro"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Statut d'un service",
    cmd: "systemctl status nom-du-service",
    desc: "Voir si un service tourne, et ses derniers logs.",
    tags: ["systemctl", "service"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Redémarrer un service",
    cmd: "sudo systemctl restart nom-du-service",
    desc: "Utile après un changement de config.",
    tags: ["systemctl", "service", "restart"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Voir les logs système récents",
    cmd: "journalctl -xe",
    desc: "Derniers logs systemd, utile pour déboguer un service qui plante.",
    tags: ["logs", "journalctl", "systemd"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Suivre les logs d'un service en direct",
    cmd: "journalctl -u nom-du-service -f",
    desc: "Équivalent d'un tail -f mais pour un service systemd.",
    tags: ["logs", "journalctl", "follow"]
  },
  {
    category: "Linux",
    subcategory: "Processus & système",
    title: "Qui est connecté",
    cmd: "who",
    desc: "Utilisateurs actuellement connectés à la machine.",
    tags: ["who", "users", "session"]
  },

  // --- Linux — Réseau -------------------------------
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Adresse IP locale",
    cmd: "ip a",
    desc: "Affiche les interfaces réseau et leurs IP (remplace l'ancien ifconfig).",
    tags: ["ip", "reseau", "adresse"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "IP locale rapide",
    cmd: "hostname -I",
    desc: "Juste l'IP, sans le détail des interfaces.",
    tags: ["ip", "hostname"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Tester une connexion",
    cmd: "ping -c 4 exemple.com",
    desc: "Envoie 4 paquets puis s'arrête (sans -c, ping continue indéfiniment).",
    tags: ["ping", "reseau", "test"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Quel processus utilise ce port ?",
    cmd: "sudo ss -tulpn | grep :<port>",
    desc: "Identifie ce qui écoute sur un port donné (ex: 3000, 8081).",
    tags: ["réseau", "port", "ss"],
    related: "Linux Mint::Processus, ports, RAM : pourquoi ça rame",
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Tester si un port distant est ouvert",
    cmd: "nc -zv hote port",
    desc: "Pratique pour vérifier qu'un serveur/API est joignable avant de débugger plus loin.",
    tags: ["nc", "netcat", "port", "test"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Voir les en-têtes HTTP d'une URL",
    cmd: "curl -I https://exemple.com",
    desc: "Rapide pour vérifier un statut HTTP, des redirections, des headers CORS…",
    tags: ["curl", "http", "headers"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Télécharger un fichier",
    cmd: "wget https://exemple.com/fichier",
    desc: "Alternative à curl -O, plus simple pour un téléchargement direct.",
    tags: ["wget", "download"]
  },
  {
    category: "Linux",
    subcategory: "Réseau",
    title: "Copier un fichier vers/depuis un serveur",
    cmd: "scp fichier utilisateur@hote:/chemin/distant/",
    desc: "Copie sécurisée via SSH. Ajoute -r pour un dossier entier.",
    tags: ["scp", "ssh", "copie"]
  },

  // --- Linux — Paquets (apt / snap / flatpak) -------------------------------
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Mettre à jour le système",
    cmd: "sudo apt update && sudo apt upgrade -y",
    desc: "Rafraîchit la liste des paquets puis met à jour.",
    tags: ["apt", "update", "upgrade"],
    related: "Linux Mint::apt : installer et gérer des logiciels",
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Nettoyer les paquets inutiles",
    cmd: "sudo apt autoremove -y && sudo apt autoclean",
    desc: "Libère de l'espace disque en supprimant les paquets orphelins et le cache.",
    tags: ["apt", "clean", "disque"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Chercher un paquet",
    cmd: "apt search mot-clé",
    desc: "Recherche dans les paquets disponibles.",
    tags: ["apt", "search"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Voir les infos d'un paquet",
    cmd: "apt show nom-du-paquet",
    desc: "Description, version, dépendances, taille.",
    tags: ["apt", "info"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Lister les paquets installés",
    cmd: "dpkg -l | grep nom",
    desc: "Vérifie si un paquet précis est déjà installé.",
    tags: ["dpkg", "list"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Installer un .deb téléchargé",
    cmd: "sudo dpkg -i fichier.deb\nsudo apt -f install",
    desc: "La 2e ligne corrige automatiquement les dépendances manquantes.",
    tags: ["dpkg", "deb", "install"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Gérer les paquets Snap",
    cmd: "snap list\nsudo snap install nom-du-paquet",
    desc: "Gestionnaire de paquets sandboxés, alternative à apt pour certaines apps.",
    tags: ["snap", "install"]
  },
  {
    category: "Linux",
    subcategory: "Paquets (apt / snap / flatpak)",
    title: "Gérer les paquets Flatpak",
    cmd: "flatpak list\nflatpak install flathub nom-du-paquet",
    desc: "Autre système de paquets sandboxés, très utilisé pour les apps GUI récentes.",
    tags: ["flatpak", "install"]
  },

  // --- Linux — Utilisateurs & permissions -------------------------------
  {
    category: "Linux",
    subcategory: "Utilisateurs & permissions",
    title: "Ouvrir un shell root",
    cmd: "sudo -i",
    desc: "Bascule en root pour la session courante. À utiliser avec prudence.",
    tags: ["sudo", "root"],
    related: "Linux Mint::sudo et les permissions, sans y laisser des plumes",
  },
  {
    category: "Linux",
    subcategory: "Utilisateurs & permissions",
    title: "Ajouter l'utilisateur courant à un groupe",
    cmd: "sudo usermod -aG groupe $USER",
    desc: "Ex: sudo usermod -aG docker $USER pour utiliser Docker sans sudo. Nécessite de se reconnecter.",
    tags: ["usermod", "groupe", "permissions"]
  },
  {
    category: "Linux",
    subcategory: "Utilisateurs & permissions",
    title: "Voir mes groupes",
    cmd: "groups",
    desc: "Liste les groupes auxquels appartient l'utilisateur courant.",
    tags: ["groups", "id"]
  },
  {
    category: "Linux",
    subcategory: "Utilisateurs & permissions",
    title: "Changer les permissions récursivement",
    cmd: "chmod -R 755 dossier/",
    desc: "755 = propriétaire rwx, groupe/autres r-x. Adapte selon le besoin réel.",
    tags: ["chmod", "permissions", "recursif"]
  },

  // --- Linux — Outils CLI divers -------------------------------
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "VS Code avec un profil isolé",
    cmd: "code --user-data-dir ~/vscode-profiles/nom-du-profil",
    desc: "Lance VS Code avec un dossier de config séparé (extensions, settings). Pratique pour isoler un projet ou tester sans polluer ton profil principal.",
    tags: ["vscode", "code", "profile", "user-data-dir"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Ouvrir VS Code ici",
    cmd: "code .",
    desc: "Ouvre le dossier courant dans VS Code.",
    tags: ["vscode", "code"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Rechercher dans l'historique du shell",
    cmd: "history | grep mot-clé",
    desc: "Retrouve une commande tapée il y a longtemps. Ctrl+R fait une recherche interactive équivalente.",
    tags: ["history", "recherche"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Créer un alias permanent",
    cmd: "echo \"alias ga='git add .'\" >> ~/.bashrc && source ~/.bashrc",
    desc: "Ajoute un raccourci de commande réutilisable dans tous les nouveaux terminaux.",
    tags: ["alias", "bashrc", "shortcut"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Éditer les tâches planifiées",
    cmd: "crontab -e",
    desc: "Programme des commandes à exécuter automatiquement (ex: sauvegardes nocturnes).",
    tags: ["cron", "crontab", "planification"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Définir une variable d'environnement",
    cmd: "export MA_VARIABLE=valeur",
    desc: "Valable pour la session de terminal courante. Ajoute-la à ~/.bashrc pour la rendre permanente.",
    tags: ["export", "env", "variable"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Générer une clé SSH",
    cmd: "ssh-keygen -t ed25519 -C \"ton@email.com\"",
    desc: "Crée une paire de clés moderne (ed25519), utile pour GitHub/serveurs distants.",
    tags: ["ssh", "ssh-keygen", "cle"],
    related: "Linux Mint::SSH et les clés : comment ça marche vraiment",
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Se connecter en SSH",
    cmd: "ssh utilisateur@hote",
    desc: "Ouvre une session shell distante sécurisée.",
    tags: ["ssh", "connexion"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Localiser un exécutable",
    cmd: "which nom-de-la-commande",
    desc: "Montre quel binaire est réellement exécuté (utile en cas de conflit de versions).",
    tags: ["which", "path"]
  },
  {
    category: "Linux",
    subcategory: "Outils CLI divers",
    title: "Afficher le manuel d'une commande",
    cmd: "man nom-de-la-commande",
    desc: "Documentation complète installée localement. Quitte avec la touche q.",
    tags: ["man", "aide", "documentation"]
  },

  // --- Linux — Docker -------------------------------
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Conteneurs en cours d'exécution",
    cmd: "docker ps",
    desc: "Ajoute -a pour voir aussi les conteneurs arrêtés.",
    tags: ["docker", "ps", "conteneur"],
    related: "Docker::Image vs conteneur, la différence",
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Lister les images",
    cmd: "docker images",
    desc: "Toutes les images Docker présentes localement.",
    tags: ["docker", "images"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Lancer un conteneur",
    cmd: "docker run -d -p 8080:80 --name mon-conteneur nom-image",
    desc: "-d = en arrière-plan, -p = mapping de port hôte:conteneur.",
    tags: ["docker", "run"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Ouvrir un shell dans un conteneur",
    cmd: "docker exec -it nom-conteneur bash",
    desc: "Utilise sh à la place de bash si l'image ne l'a pas (ex: images Alpine).",
    tags: ["docker", "exec", "shell"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Suivre les logs d'un conteneur",
    cmd: "docker logs -f nom-conteneur",
    desc: "-f pour suivre en direct, comme un tail -f.",
    tags: ["docker", "logs"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Arrêter / démarrer un conteneur",
    cmd: "docker stop nom-conteneur\ndocker start nom-conteneur",
    desc: "Arrête ou relance un conteneur existant sans le recréer.",
    tags: ["docker", "stop", "start"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Supprimer un conteneur",
    cmd: "docker rm nom-conteneur",
    desc: "Le conteneur doit être arrêté. Ajoute -f pour forcer sans l'arrêter d'abord.",
    tags: ["docker", "rm", "supprimer"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Construire une image",
    cmd: "docker build -t nom-image:tag .",
    desc: "Construit à partir du Dockerfile du dossier courant.",
    tags: ["docker", "build", "image"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Lancer / arrêter une stack (Compose)",
    cmd: "docker compose up -d\ndocker compose down",
    desc: "up -d démarre tous les services en arrière-plan, down les arrête et supprime les conteneurs.",
    tags: ["docker", "compose", "stack"],
    related: "Docker::Docker Compose, orchestrer plusieurs conteneurs",
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Voir les logs d'une stack Compose",
    cmd: "docker compose logs -f",
    desc: "Suit les logs de tous les services définis dans docker-compose.yml.",
    tags: ["docker", "compose", "logs"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Tout nettoyer (images/conteneurs/réseaux inutilisés)",
    cmd: "docker system prune -a",
    desc: "⚠️ Supprime tout ce qui n'est pas utilisé par un conteneur actif. Libère beaucoup d'espace disque.",
    tags: ["docker", "prune", "clean", "danger"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Inspecter un conteneur/image",
    cmd: "docker inspect nom-conteneur",
    desc: "Détails complets en JSON (IP, volumes, variables d'env, config réseau…).",
    tags: ["docker", "inspect"]
  },
  {
    category: "Linux",
    subcategory: "Docker",
    title: "Lister les volumes",
    cmd: "docker volume ls",
    desc: "Volumes de données persistants gérés par Docker.",
    tags: ["docker", "volume"]
  },

  // --- Git ------------------------------------------------------
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Statut du dépôt",
    cmd: "git status",
    desc: "Fichiers modifiés / en staging / non suivis.",
    tags: ["status"]
  },
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Ajouter tous les changements",
    cmd: "git add .",
    desc: "Met tout le dossier courant en staging.",
    tags: ["add", "staging"]
  },
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Ajouter en interactif",
    cmd: "git add -p",
    desc: "Choisit morceau par morceau (hunk) ce qui part en staging.",
    tags: ["add", "staging", "interactive"]
  },
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Commit",
    cmd: 'git commit -m "message"',
    desc: "Enregistre les changements en staging.",
    tags: ["commit"],
    related: "Git::Local vs distant : ce qui se passe vraiment à chaque étape",
  },
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Modifier le dernier commit",
    cmd: "git commit --amend",
    desc: "Change le message et/ou ajoute des fichiers oubliés au dernier commit.",
    tags: ["commit", "amend"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Nouvelle branche + bascule",
    cmd: "git checkout -b nom-de-la-branche",
    desc: "Crée et bascule sur une nouvelle branche en une commande (équivalent: git switch -c nom).",
    tags: ["branch", "checkout", "switch"],
    related: "Git::Les branches : travailler sans tout casser",
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Changer de branche",
    cmd: "git switch nom-de-la-branche",
    desc: "Bascule sur une branche existante.",
    tags: ["branch", "switch", "checkout"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Lister les branches",
    cmd: "git branch -a",
    desc: "Locales et distantes. Ajoute -v pour voir le dernier commit de chacune.",
    tags: ["branch", "list"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Supprimer une branche locale",
    cmd: "git branch -d nom-de-la-branche",
    desc: "Utilise -D (majuscule) pour forcer si elle n'est pas fusionnée.",
    tags: ["branch", "delete"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Renommer la branche courante",
    cmd: "git branch -m nouveau-nom",
    desc: "Renomme la branche sur laquelle tu es actuellement.",
    tags: ["branch", "rename"]
  },
  {
    category: "Git",
    subcategory: "Remote (push/pull/clone)",
    title: "Récupérer les changements distants",
    cmd: "git fetch",
    desc: "Télécharge les nouveautés sans les fusionner dans ta branche.",
    tags: ["fetch", "remote"]
  },
  {
    category: "Git",
    subcategory: "Remote (push/pull/clone)",
    title: "Récupérer + fusionner",
    cmd: "git pull",
    desc: "fetch + merge en une commande. Ajoute --rebase pour rebaser au lieu de merger.",
    tags: ["pull", "remote", "merge"]
  },
  {
    category: "Git",
    subcategory: "Remote (push/pull/clone)",
    title: "Envoyer les commits",
    cmd: "git push",
    desc: "Pousse la branche courante vers le remote.",
    tags: ["push", "remote"],
    related: "Git::Local vs distant : ce qui se passe vraiment à chaque étape",
  },
  {
    category: "Git",
    subcategory: "Remote (push/pull/clone)",
    title: "Premier push d'une nouvelle branche",
    cmd: "git push -u origin nom-de-la-branche",
    desc: "Pousse et lie la branche locale à la branche distante (-u = upstream).",
    tags: ["push", "remote", "upstream"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Fusionner une branche",
    cmd: "git merge nom-de-la-branche",
    desc: "Fusionne la branche indiquée dans la branche courante.",
    tags: ["merge"],
    related: "Git::Les conflits de fusion (merge conflicts)",
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Rebaser sur une autre branche",
    cmd: "git rebase nom-de-la-branche",
    desc: "Rejoue tes commits par-dessus l'autre branche. En cas de conflit : git rebase --continue / --abort.",
    tags: ["rebase"]
  },
  {
    category: "Git",
    subcategory: "Historique & recherche",
    title: "Voir l'historique en une ligne",
    cmd: "git log --oneline --graph --all",
    desc: "Vue compacte et graphique des branches/commits.",
    tags: ["log", "history", "graph"],
    related: "Git::Lire l'historique : git log, HEAD, SHA",
  },
  {
    category: "Git",
    subcategory: "Staging & Commit",
    title: "Voir les changements non stagés",
    cmd: "git diff",
    desc: "Diff des fichiers modifiés mais pas encore ajoutés au staging. Ajoute --staged pour voir le diff du staging.",
    tags: ["diff"]
  },
  {
    category: "Git",
    subcategory: "Annuler & restaurer",
    title: "Annuler le dernier commit (garder les modifs)",
    cmd: "git reset --soft HEAD~1",
    desc: "Défait le commit mais garde les changements en staging.",
    tags: ["reset", "undo", "commit"],
    related: "Git::Annuler une erreur sans paniquer",
  },
  {
    category: "Git",
    subcategory: "Annuler & restaurer",
    title: "Annuler le dernier commit (tout jeter)",
    cmd: "git reset --hard HEAD~1",
    desc: "⚠️ Supprime définitivement le commit ET les changements. Irréversible.",
    tags: ["reset", "undo", "commit", "danger"],
    related: "Git::Annuler une erreur sans paniquer",
  },
  {
    category: "Git",
    subcategory: "Annuler & restaurer",
    title: "Remettre un fichier comme au dernier commit",
    cmd: "git checkout -- nom-du-fichier",
    desc: "Annule les modifications locales non stagées sur ce fichier (équivalent moderne: git restore nom-du-fichier).",
    tags: ["checkout", "restore", "undo"]
  },
  {
    category: "Git",
    subcategory: "Annuler & restaurer",
    title: "Retirer un fichier du staging",
    cmd: "git restore --staged nom-du-fichier",
    desc: "Le fichier reste modifié mais sort du staging.",
    tags: ["restore", "unstage"]
  },
  {
    category: "Git",
    subcategory: "Stash",
    title: "Mettre de côté les changements (stash)",
    cmd: "git stash",
    desc: "Range temporairement les modifs en cours pour retrouver un dossier propre.",
    tags: ["stash"]
  },
  {
    category: "Git",
    subcategory: "Stash",
    title: "Récupérer le dernier stash",
    cmd: "git stash pop",
    desc: "Réapplique le dernier stash et le retire de la liste.",
    tags: ["stash", "pop"]
  },
  {
    category: "Git",
    subcategory: "Stash",
    title: "Lister les stash",
    cmd: "git stash list",
    desc: "Voir tous les stash en attente.",
    tags: ["stash", "list"]
  },
  {
    category: "Git",
    subcategory: "Tags & config",
    title: "Créer un tag",
    cmd: 'git tag -a v1.0.0 -m "message"',
    desc: "Tag annoté (recommandé pour les releases). git push --tags pour l'envoyer.",
    tags: ["tag", "release"]
  },
  {
    category: "Git",
    subcategory: "Remote (push/pull/clone)",
    title: "Cloner un dépôt",
    cmd: "git clone <url>",
    desc: "Récupère un dépôt distant en local.",
    tags: ["clone"]
  },
  {
    category: "Git",
    subcategory: "Historique & recherche",
    title: "Voir qui a changé quoi (blame)",
    cmd: "git blame nom-du-fichier",
    desc: "Affiche le dernier commit ayant modifié chaque ligne.",
    tags: ["blame"]
  },
  {
    category: "Git",
    subcategory: "Historique & recherche",
    title: "Chercher un commit par contenu",
    cmd: 'git log -S"texte-recherché" --oneline',
    desc: "Trouve les commits qui ont ajouté/supprimé une chaîne donnée dans le code.",
    tags: ["log", "search", "pickaxe"]
  },
  {
    category: "Git",
    subcategory: "Annuler & restaurer",
    title: "Nettoyer les fichiers non suivis",
    cmd: "git clean -fd",
    desc: "⚠️ Supprime définitivement les fichiers/dossiers non trackés. Ajoute -n avant pour prévisualiser sans rien supprimer.",
    tags: ["clean", "danger"]
  },
  {
    category: "Git",
    subcategory: "Tags & config",
    title: "Configurer nom et email globaux",
    cmd: 'git config --global user.name "Ton Nom"\ngit config --global user.email "ton@email.com"',
    desc: "À faire une fois par machine.",
    tags: ["config", "setup"]
  },
  {
    category: "Git",
    subcategory: "Branches",
    title: "Réécrire les N derniers commits (rebase interactif)",
    cmd: "git rebase -i HEAD~5",
    desc: "Permet de squash / reword / réordonner les 5 derniers commits.",
    tags: ["rebase", "interactive", "squash"]
  },

  // --- Claude Code — Démarrage ---------------------------------------
  {
    category: "Claude Code",
    subcategory: "Démarrage",
    title: "Lancer une session interactive",
    cmd: "claude",
    desc: "Ouvre le REPL interactif de Claude Code dans le dossier courant.",
    tags: ["claude", "start", "repl"],
    related: "Claude Code::Claude Code, à quoi ça sert vraiment ?"
  },
  {
    category: "Claude Code",
    subcategory: "Démarrage",
    title: "Démarrer avec un prompt initial",
    cmd: 'claude "explique-moi ce projet"',
    desc: "Lance la session directement avec une première question/instruction, sans avoir à la retaper une fois lancé.",
    tags: ["claude", "start", "prompt"],
    related: "Claude Code::Utiliser Claude Code dans un terminal : les premiers pas"
  },
  {
    category: "Claude Code",
    subcategory: "Démarrage",
    title: "Réponse ponctuelle sans session interactive",
    cmd: 'claude -p "résume les changements récents"',
    desc: "Mode 'print' : exécute une requête, affiche la réponse, puis quitte — pratique pour scripter ou automatiser (CI, hooks, etc.).",
    tags: ["claude", "print", "script", "automation"],
    related: "Claude Code::Utiliser Claude Code dans un terminal : les premiers pas"
  },
  {
    category: "Claude Code",
    subcategory: "Démarrage",
    title: "Reprendre la dernière conversation",
    cmd: "claude -c",
    desc: "Recharge le contexte de la session la plus récente dans ce dossier, sans avoir à tout réexpliquer.",
    tags: ["claude", "continue", "session"],
    related: "Claude Code::Sessions : continuer, reprendre, repartir de zéro"
  },
  {
    category: "Claude Code",
    subcategory: "Démarrage",
    title: "Reprendre une session précise",
    cmd: "claude -r",
    desc: "Affiche un sélecteur des sessions précédentes de ce dossier. Ajoute un identifiant pour reprendre directement une session précise : claude -r <id>",
    tags: ["claude", "resume", "session"],
    related: "Claude Code::Sessions : continuer, reprendre, repartir de zéro"
  },

  // --- Claude Code — Options CLI ---------------------------------------
  {
    category: "Claude Code",
    subcategory: "Options CLI",
    title: "Choisir un modèle",
    cmd: "claude --model sonnet",
    desc: "Force le modèle utilisé pour cette session (ex: sonnet, opus, haiku).",
    tags: ["claude", "model", "flag"]
  },
  {
    category: "Claude Code",
    subcategory: "Options CLI",
    title: "Démarrer en mode plan",
    cmd: "claude --permission-mode plan",
    desc: "Claude réfléchit et propose un plan avant toute action, sans rien modifier tant que le plan n'est pas validé.",
    tags: ["claude", "plan", "permission"],
    related: "Claude Code::Les modes de permission : plan, auto-accept, manuel"
  },
  {
    category: "Claude Code",
    subcategory: "Options CLI",
    title: "Autoriser un dossier supplémentaire",
    cmd: "claude --add-dir ../autre-projet",
    desc: "Donne accès en lecture/écriture à un dossier situé en dehors du répertoire de travail courant.",
    tags: ["claude", "add-dir", "workspace"]
  },
  {
    category: "Claude Code",
    subcategory: "Options CLI",
    title: "Ignorer les confirmations de permission",
    cmd: "claude --dangerously-skip-permissions",
    desc: "⚠️ Exécute toutes les actions sans jamais demander confirmation. Réservé à un environnement isolé/sandboxé (conteneur jetable, CI) — jamais sur une machine avec des données sensibles.",
    tags: ["claude", "permissions", "danger"],
    related: "Claude Code::Les modes de permission : plan, auto-accept, manuel"
  },
  {
    category: "Claude Code",
    subcategory: "Options CLI",
    title: "Sortie au format JSON",
    cmd: 'claude -p "..." --output-format json',
    desc: "Utile pour scripter : récupère la réponse en JSON exploitable par un autre programme plutôt qu'en texte brut.",
    tags: ["claude", "json", "script"]
  },

  // --- Claude Code — Slash commands ---------------------------------------
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Afficher l'aide",
    cmd: "/help",
    desc: "Liste les commandes disponibles dans la session en cours.",
    tags: ["claude", "help", "aide"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Effacer la conversation",
    cmd: "/clear",
    desc: "Efface l'historique de la conversation en cours et repart de zéro (contexte perdu).",
    tags: ["claude", "clear", "reset"],
    related: "Claude Code::Sessions : continuer, reprendre, repartir de zéro"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Compacter le contexte",
    cmd: "/compact",
    desc: "Résume la conversation pour libérer du contexte, sans tout perdre. Ajoute une instruction pour orienter le résumé : /compact garde le plan d'implémentation en détail",
    tags: ["claude", "compact", "context"],
    related: "Claude Code::Gérer le contexte : pourquoi et quand utiliser /compact"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Voir le coût de la session",
    cmd: "/cost",
    desc: "Affiche une estimation de l'usage/du coût de la session en cours.",
    tags: ["claude", "cost", "usage"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Générer un CLAUDE.md",
    cmd: "/init",
    desc: "Analyse le projet et génère un fichier CLAUDE.md documentant sa structure — lu automatiquement au démarrage des futures sessions.",
    tags: ["claude", "init", "claude.md", "documentation"],
    related: "Claude Code::CLAUDE.md : donner du contexte permanent à Claude"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Changer de modèle en cours de session",
    cmd: "/model",
    desc: "Bascule vers un autre modèle sans avoir à relancer la session.",
    tags: ["claude", "model"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Gérer les permissions",
    cmd: "/permissions",
    desc: "Configure quels outils/actions Claude peut exécuter automatiquement, sans confirmation à chaque fois.",
    tags: ["claude", "permissions"],
    related: "Claude Code::Les modes de permission : plan, auto-accept, manuel"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Gérer les sous-agents",
    cmd: "/agents",
    desc: "Crée, modifie ou liste les sous-agents disponibles (agents spécialisés que Claude peut déléguer à eux-mêmes).",
    tags: ["claude", "agents", "subagent"],
    related: "Claude Code::Sous-agents : déléguer des tâches spécialisées"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Gérer les serveurs MCP",
    cmd: "/mcp",
    desc: "Affiche et gère les serveurs MCP connectés à la session en cours.",
    tags: ["claude", "mcp"],
    related: "Claude Code::MCP : connecter Claude à d'autres outils"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Ouvrir la configuration",
    cmd: "/config",
    desc: "Ouvre la configuration interactive (thème, modèle par défaut, etc.).",
    tags: ["claude", "config"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Activer les raccourcis Vim",
    cmd: "/vim",
    desc: "Active les raccourcis clavier façon Vim pour éditer le texte tapé dans le prompt.",
    tags: ["claude", "vim", "keybindings"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Connecter un IDE",
    cmd: "/ide",
    desc: "Connecte la session à un IDE ouvert (VS Code, JetBrains…) pour partager le fichier/la sélection actifs.",
    tags: ["claude", "ide", "vscode"],
    related: "Claude Code::Installer l'extension dans VS Code ou Cursor"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Signaler un bug",
    cmd: "/bug",
    desc: "Envoie un rapport de bug directement à Anthropic depuis la session.",
    tags: ["claude", "bug", "feedback"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Voir le statut de la session",
    cmd: "/status",
    desc: "Affiche l'état de la session : compte connecté, modèle actif, connexions en cours.",
    tags: ["claude", "status"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Se connecter",
    cmd: "/login",
    desc: "Connecte (ou change) le compte utilisé par Claude Code.",
    tags: ["claude", "login", "compte"]
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Se déconnecter",
    cmd: "/logout",
    desc: "Déconnecte le compte actuellement utilisé.",
    tags: ["claude", "logout", "compte"]
  },

  // --- Claude Code — MCP & config ---------------------------------------
  {
    category: "Claude Code",
    subcategory: "MCP & config",
    title: "Lister les serveurs MCP",
    cmd: "claude mcp list",
    desc: "Affiche les serveurs MCP actuellement configurés (depuis le terminal, hors session).",
    tags: ["claude", "mcp", "list"],
    related: "Claude Code::MCP : connecter Claude à d'autres outils"
  },
  {
    category: "Claude Code",
    subcategory: "MCP & config",
    title: "Ajouter un serveur MCP",
    cmd: "claude mcp add <nom> <commande>",
    desc: "Connecte un nouveau serveur MCP à Claude Code, disponible dans toutes les sessions futures.",
    tags: ["claude", "mcp", "add"],
    related: "Claude Code::MCP : connecter Claude à d'autres outils"
  },
  {
    category: "Claude Code",
    subcategory: "MCP & config",
    title: "Voir la configuration",
    cmd: "claude config list",
    desc: "Affiche les réglages actuels (globaux et propres au projet), depuis le terminal.",
    tags: ["claude", "config", "list"]
  },

  // --- Claude Code — Installation & mise à jour ---------------------------------------
  {
    category: "Claude Code",
    subcategory: "Installation & mise à jour",
    title: "Installer Claude Code",
    cmd: "npm install -g @anthropic-ai/claude-code",
    desc: "Installation globale via npm (nécessite Node.js installé au préalable).",
    tags: ["claude", "install", "npm"],
    related: "Claude Code::Installer Claude Code dans un terminal"
  },
  {
    category: "Claude Code",
    subcategory: "Installation & mise à jour",
    title: "Mettre à jour",
    cmd: "claude update",
    desc: "Met à jour Claude Code vers la dernière version disponible.",
    tags: ["claude", "update"],
    related: "Claude Code::Installer Claude Code dans un terminal"
  },
  {
    category: "Claude Code",
    subcategory: "Installation & mise à jour",
    title: "Voir la version installée",
    cmd: "claude --version",
    desc: "Affiche la version actuellement installée.",
    tags: ["claude", "version"],
    related: "Claude Code::Installer Claude Code dans un terminal"
  },
  {
    category: "Claude Code",
    subcategory: "Installation & mise à jour",
    title: "Diagnostiquer l'installation",
    cmd: "claude doctor",
    desc: "Vérifie que l'installation est saine (dépendances, PATH, configuration) et signale ce qui cloche.",
    tags: ["claude", "doctor", "diagnostic"],
    related: "Claude Code::Installer Claude Code dans un terminal"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Relancer une tâche à intervalle régulier",
    cmd: "/loop 5m /ta-commande",
    desc: "Relance un prompt ou une commande à intervalle régulier (ici toutes les 5 minutes) jusqu'à l'arrêt de la boucle. Omettre l'intervalle laisse Claude choisir lui-même le rythme.",
    tags: ["claude", "loop", "boucle", "intervalle", "automatisation"],
    related: "Claude Code::Les loops : relancer une tâche automatiquement"
  },
  {
    category: "Claude Code",
    subcategory: "Slash commands",
    title: "Invoquer une commande personnalisée",
    cmd: "/nom-de-ta-commande",
    desc: "Rejoue le prompt enregistré dans .claude/commands/nom-de-ta-commande.md (ou ~/.claude/commands/ pour un usage personnel).",
    tags: ["claude", "commande personnalisée", "prompt", "réutilisable"],
    related: "Claude Code::Les prompts réutilisables : commandes personnalisées"
  },

  // --- Windows — Fichiers & disque ---------------------------------------
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Lister en détail (avec cachés)",
    cmd: "Get-ChildItem -Force",
    desc: "Liste le contenu du dossier courant avec les détails (taille, date), fichiers cachés/système inclus.",
    tags: ["windows", "powershell", "ls", "fichiers"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Espace disque par dossier",
    cmd: "Get-ChildItem -Recurse | Measure-Object -Property Length -Sum",
    desc: "Additionne la taille de tous les fichiers du dossier courant (et sous-dossiers) — pratique pour repérer ce qui prend de la place.",
    tags: ["windows", "powershell", "disque", "taille"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Espace disque global",
    cmd: "Get-Volume",
    desc: "Affiche l'espace utilisé et libre de chaque disque/partition.",
    tags: ["windows", "powershell", "disque", "volume"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Trouver un fichier par nom",
    cmd: 'Get-ChildItem -Recurse -Filter "*motif*"',
    desc: "Cherche récursivement dans le dossier courant tous les fichiers dont le nom contient \"motif\".",
    tags: ["windows", "powershell", "recherche", "fichier"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Chercher du texte dans des fichiers",
    cmd: 'Select-String -Path *.txt -Pattern "motif"',
    desc: "Équivalent de grep — cherche une chaîne de texte dans un ou plusieurs fichiers.",
    tags: ["windows", "powershell", "grep", "recherche", "texte"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Copier avec progression et reprise",
    cmd: "robocopy source destination /E /Z",
    desc: "Copie robuste d'un dossier entier (récursif avec /E), capable de reprendre une copie interrompue (/Z) — plus fiable qu'un copier-coller classique pour de gros volumes.",
    tags: ["windows", "robocopy", "copie", "fichiers"]
  },
  {
    category: "Windows",
    subcategory: "Fichiers & disque",
    title: "Archiver / dézipper",
    cmd: "Compress-Archive -Path dossier -DestinationPath archive.zip",
    desc: "Crée une archive .zip à partir d'un dossier. Expand-Archive -Path archive.zip -DestinationPath dossier fait l'inverse.",
    tags: ["windows", "powershell", "zip", "archive"]
  },

  // --- Windows — Processus & système --------------------------------------
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Ouvrir le gestionnaire des tâches",
    cmd: "taskmgr",
    desc: "Lance l'interface graphique de suivi CPU/RAM/disque/réseau en temps réel.",
    tags: ["windows", "taskmgr", "processus", "moniteur"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Top des processus par CPU",
    cmd: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10",
    desc: "Liste en ligne de commande les 10 processus qui consomment le plus de CPU — utile quand l'interface graphique n'est pas pratique (SSH, script).",
    tags: ["windows", "powershell", "processus", "cpu"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Tuer un processus",
    cmd: 'Stop-Process -Name "nom" -Force',
    desc: "Force l'arrêt d'un processus par son nom — équivalent de kill sous Linux.",
    tags: ["windows", "powershell", "processus", "kill"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Infos système complètes",
    cmd: "systeminfo",
    desc: "Affiche un résumé complet du système (OS, matériel, mémoire, date d'installation, correctifs installés…).",
    tags: ["windows", "systeminfo", "diagnostic"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Depuis combien de temps le système tourne",
    cmd: "(Get-Date) - (Get-CimInstance Win32_OperatingSystem).LastBootUpTime",
    desc: "Calcule la durée écoulée depuis le dernier démarrage.",
    tags: ["windows", "powershell", "uptime", "système"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Statut d'un service",
    cmd: 'Get-Service -Name "nom*"',
    desc: "Affiche l'état (démarré/arrêté) d'un ou plusieurs services système.",
    tags: ["windows", "powershell", "service"]
  },
  {
    category: "Windows",
    subcategory: "Processus & système",
    title: "Voir les logs système récents",
    cmd: "Get-EventLog -LogName System -Newest 20",
    desc: "Affiche les 20 dernières entrées du journal d'événements système.",
    tags: ["windows", "powershell", "logs", "journal"]
  },

  // --- Windows — Réseau ----------------------------------------------------
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Adresse IP locale",
    cmd: "ipconfig",
    desc: "Affiche la configuration réseau (adresse IP, masque, passerelle) de chaque interface.",
    tags: ["windows", "ip", "réseau"]
  },
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Tester une connexion",
    cmd: "ping site.com",
    desc: "Vérifie qu'un hôte répond et mesure le temps de réponse.",
    tags: ["windows", "ping", "réseau"]
  },
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Quel processus utilise ce port ?",
    cmd: "netstat -ano | findstr :8080",
    desc: "Trouve le PID du processus qui écoute sur le port 8080 — Get-Process -Id <PID> ensuite pour identifier le programme.",
    tags: ["windows", "netstat", "port", "réseau"]
  },
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Tester si un port distant est ouvert",
    cmd: "Test-NetConnection -ComputerName hote -Port 443",
    desc: "Vérifie qu'un port précis est joignable sur une machine distante, sans avoir à ouvrir une vraie connexion applicative.",
    tags: ["windows", "powershell", "port", "réseau"]
  },
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Télécharger un fichier",
    cmd: "Invoke-WebRequest -Uri url -OutFile fichier",
    desc: "Télécharge le contenu d'une URL vers un fichier local — l'équivalent PowerShell de wget/curl.",
    tags: ["windows", "powershell", "téléchargement", "http"]
  },
  {
    category: "Windows",
    subcategory: "Réseau",
    title: "Vider le cache DNS",
    cmd: "ipconfig /flushdns",
    desc: "Force le système à oublier les résolutions DNS mises en cache — utile après un changement de serveur ou de domaine.",
    tags: ["windows", "dns", "réseau", "cache"]
  },

  // --- Windows — Paquets (winget / choco) -----------------------------------
  {
    category: "Windows",
    subcategory: "Paquets (winget / choco)",
    title: "Installer un paquet",
    cmd: "winget install nom",
    desc: "Installe un logiciel depuis le gestionnaire de paquets officiel de Windows, intégré depuis Windows 10/11.",
    tags: ["windows", "winget", "install", "paquet"]
  },
  {
    category: "Windows",
    subcategory: "Paquets (winget / choco)",
    title: "Mettre à jour tous les paquets",
    cmd: "winget upgrade --all",
    desc: "Met à jour tous les logiciels installés via winget vers leur dernière version disponible.",
    tags: ["windows", "winget", "update", "paquet"]
  },
  {
    category: "Windows",
    subcategory: "Paquets (winget / choco)",
    title: "Chercher un paquet",
    cmd: "winget search nom",
    desc: "Recherche un logiciel disponible dans les sources winget par son nom.",
    tags: ["windows", "winget", "recherche", "paquet"]
  },
  {
    category: "Windows",
    subcategory: "Paquets (winget / choco)",
    title: "Lister les paquets installés",
    cmd: "winget list",
    desc: "Affiche tous les logiciels installés que winget reconnaît sur la machine.",
    tags: ["windows", "winget", "liste", "paquet"]
  },
  {
    category: "Windows",
    subcategory: "Paquets (winget / choco)",
    title: "Installer via Chocolatey",
    cmd: "choco install nom -y",
    desc: "Gestionnaire de paquets alternatif et tiers, utile pour les logiciels pas encore disponibles sur winget — nécessite d'installer Chocolatey au préalable.",
    tags: ["windows", "chocolatey", "install", "paquet"]
  },

  // --- Windows — Utilisateurs & permissions --------------------------------
  {
    category: "Windows",
    subcategory: "Utilisateurs & permissions",
    title: "Ouvrir un terminal en administrateur",
    cmd: "Start-Process powershell -Verb RunAs",
    desc: "Ouvre une nouvelle fenêtre PowerShell avec élévation de privilèges — Windows n'a pas d'équivalent direct à sudo dans le même terminal.",
    tags: ["windows", "powershell", "admin", "élévation"]
  },
  {
    category: "Windows",
    subcategory: "Utilisateurs & permissions",
    title: "Lister les utilisateurs",
    cmd: "Get-LocalUser",
    desc: "Affiche tous les comptes utilisateurs locaux de la machine.",
    tags: ["windows", "powershell", "utilisateurs"]
  },
  {
    category: "Windows",
    subcategory: "Utilisateurs & permissions",
    title: "Voir mes groupes / droits",
    cmd: "whoami /groups",
    desc: "Affiche l'utilisateur courant et tous les groupes auxquels il appartient (admin local, etc.).",
    tags: ["windows", "whoami", "permissions", "groupes"]
  },
  {
    category: "Windows",
    subcategory: "Utilisateurs & permissions",
    title: "Voir les permissions d'un fichier",
    cmd: "icacls fichier",
    desc: "Affiche la liste de contrôle d'accès (ACL) d'un fichier ou dossier — qui a le droit de faire quoi.",
    tags: ["windows", "icacls", "permissions"]
  },
  {
    category: "Windows",
    subcategory: "Utilisateurs & permissions",
    title: "Changer le propriétaire d'un fichier",
    cmd: "takeown /F fichier",
    desc: "Reprend la propriété d'un fichier ou dossier — utile quand un fichier système ou d'un autre compte bloque une modification.",
    tags: ["windows", "takeown", "propriétaire", "permissions"]
  },

  // --- Windows — Outils CLI divers ------------------------------------------
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Ouvrir VS Code ici",
    cmd: "code .",
    desc: "Ouvre VS Code directement dans le dossier courant.",
    tags: ["windows", "vscode", "éditeur"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Éditer le profil PowerShell",
    cmd: "notepad $PROFILE",
    desc: "Ouvre le fichier de configuration chargé à chaque démarrage de PowerShell — l'équivalent du .bashrc sous Linux.",
    tags: ["windows", "powershell", "profil", "config"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Créer un alias permanent",
    cmd: 'Set-Alias ll Get-ChildItem',
    desc: "Crée un alias pour la session en cours. Pour le rendre permanent, ajoute la même ligne dans le profil PowerShell ($PROFILE).",
    tags: ["windows", "powershell", "alias"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Définir une variable d'environnement",
    cmd: '$env:NOM = "valeur"',
    desc: "Définit une variable d'environnement pour la session en cours. setx NOM \"valeur\" la rend permanente (nouvelles sessions uniquement).",
    tags: ["windows", "powershell", "variable", "environnement"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Générer une clé SSH",
    cmd: "ssh-keygen",
    desc: "Génère une paire de clés SSH — le client OpenSSH est intégré nativement depuis Windows 10.",
    tags: ["windows", "ssh", "clé", "sécurité"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Se connecter en SSH",
    cmd: "ssh utilisateur@hote",
    desc: "Ouvre une connexion SSH vers une machine distante.",
    tags: ["windows", "ssh", "connexion"]
  },
  {
    category: "Windows",
    subcategory: "Outils CLI divers",
    title: "Localiser un exécutable",
    cmd: "Get-Command nom",
    desc: "Trouve le chemin de l'exécutable qui serait lancé en tapant \"nom\" — l'équivalent de which sous Linux.",
    tags: ["windows", "powershell", "which", "chemin"]
  }
];
