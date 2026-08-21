// ============================================================
// Command Hub — English translations for commands.js
// ============================================================
// This file only overrides DISPLAY text (title / desc / tags) for the
// English UI. It never overrides `cmd` (the actual command stays
// identical in both languages) and never touches favorites/state,
// which are always keyed on the French category/subcategory/title —
// so switching language never breaks a saved favorite.
//
// Key format: "category|subcategory|title" using the EXACT French
// values from commands.js (subcategory is "" when the command has none).
// Add an entry here whenever you add/rename a command in commands.js.
// ============================================================

const COMMAND_TRANSLATIONS_EN = {
  "Expo / React Native|Démarrage & Dev|Démarrer le projet": {
    "title": "Start the project",
    "desc": "Launches the Expo dev server (Metro bundler).",
    "tags": [
      "dev",
      "start",
      "metro"
    ]
  },
  "Expo / React Native|Démarrage & Dev|Démarrer avec cache vidé": {
    "title": "Start with cleared cache",
    "desc": "Useful when Metro has a corrupted cache or after a config change.",
    "tags": [
      "cache",
      "clear",
      "debug"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Build Android (EAS)": {
    "title": "Build Android (EAS)",
    "desc": "Cloud build via EAS. Change the profile (development/preview/production) as needed.",
    "tags": [
      "build",
      "eas",
      "android"
    ]
  },
  "Expo / React Native|Build local|Build local Android": {
    "title": "Local Android build",
    "desc": "Builds and installs on a connected emulator/device without going through EAS.",
    "tags": [
      "build",
      "local",
      "android"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Soumettre sur le Play Store": {
    "title": "Submit to the Play Store",
    "desc": "Sends the latest build to Google Play.",
    "tags": [
      "submit",
      "play store",
      "release"
    ]
  },
  "Expo / React Native|Diagnostic & config|Vérifier la config du projet": {
    "title": "Check the project config",
    "desc": "Diagnoses version/config mismatches.",
    "tags": [
      "doctor",
      "diagnostic"
    ]
  },
  "Expo / React Native|Diagnostic & config|Installer une lib compatible Expo": {
    "title": "Install an Expo-compatible lib",
    "desc": "Like npm install, but picks the version compatible with your Expo SDK.",
    "tags": [
      "install",
      "package",
      "dependency"
    ]
  },
  "Expo / React Native|Diagnostic & config|Mettre à jour le SDK Expo": {
    "title": "Update the Expo SDK",
    "desc": "Upgrades, then checks everything is consistent.",
    "tags": [
      "upgrade",
      "sdk"
    ]
  },
  "Expo / React Native|Build local|Prebuild (générer android/ios natifs)": {
    "title": "Prebuild (generate native android/ios)",
    "desc": "Regenerates the native folders from app.json/app.config.js.",
    "tags": [
      "prebuild",
      "native",
      "clean"
    ]
  },
  "Expo / React Native|Démarrage & Dev|Créer un nouveau projet": {
    "title": "Create a new project",
    "desc": "Generates a new Expo project from the default template.",
    "tags": [
      "create",
      "new",
      "init"
    ]
  },
  "Expo / React Native|Build local|Build local iOS": {
    "title": "Local iOS build",
    "desc": "Builds and runs on an iOS simulator (requires a Mac/Xcode).",
    "tags": [
      "build",
      "local",
      "ios"
    ]
  },
  "Expo / React Native|Démarrage & Dev|Ouvrir directement sur une plateforme": {
    "title": "Open directly on a platform",
    "desc": "Starts the server and opens the app directly on the chosen platform.",
    "tags": [
      "start",
      "android",
      "ios",
      "web"
    ]
  },
  "Expo / React Native|Démarrage & Dev|Démarrer via tunnel": {
    "title": "Start via tunnel",
    "desc": "Useful when the phone and computer aren't on the same network (or the wifi blocks LAN traffic).",
    "tags": [
      "tunnel",
      "network",
      "start"
    ]
  },
  "Expo / React Native|Compte & credentials|Se connecter à EAS": {
    "title": "Log in to EAS",
    "desc": "Required before any build/submit/update via EAS. Check with: eas whoami",
    "tags": [
      "eas",
      "login",
      "account"
    ]
  },
  "Expo / React Native|Compte & credentials|Initialiser EAS sur le projet": {
    "title": "Initialize EAS on the project",
    "desc": "Links the local project to an existing Expo/EAS project (or creates one).",
    "tags": [
      "eas",
      "init",
      "setup"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Build iOS (EAS)": {
    "title": "Build iOS (EAS)",
    "desc": "iOS equivalent of the Android build — requires a configured Apple Developer account.",
    "tags": [
      "build",
      "eas",
      "ios"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Build les deux plateformes": {
    "title": "Build both platforms",
    "desc": "Triggers an Android and iOS build in a single command.",
    "tags": [
      "build",
      "eas",
      "all"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Soumettre sur l'App Store": {
    "title": "Submit to the App Store",
    "desc": "Sends the latest iOS build to App Store Connect.",
    "tags": [
      "submit",
      "app store",
      "ios",
      "release"
    ]
  },
  "Expo / React Native|EAS Update (OTA)|Publier une mise à jour OTA": {
    "title": "Publish an OTA update",
    "desc": "Pushes a JS/assets change straight to users without going through the store (requires expo-updates).",
    "tags": [
      "eas",
      "update",
      "ota"
    ]
  },
  "Expo / React Native|EAS Update (OTA)|Lister les branches de update": {
    "title": "List update branches",
    "desc": "Shows which OTA deployment channels/branches exist (preview, production…).",
    "tags": [
      "eas",
      "channel",
      "update"
    ]
  },
  "Expo / React Native|EAS Build & Submit|Lister les builds récents": {
    "title": "List recent builds",
    "desc": "History of cloud builds with their status.",
    "tags": [
      "eas",
      "build",
      "list"
    ]
  },
  "Expo / React Native|Compte & credentials|Gérer les credentials de signature": {
    "title": "Manage signing credentials",
    "desc": "Interactive interface to view/regenerate the Android/iOS signing keys managed by EAS.",
    "tags": [
      "eas",
      "credentials",
      "signing"
    ]
  },
  "Expo / React Native|Diagnostic & config|Corriger les versions de dépendances": {
    "title": "Fix dependency versions",
    "desc": "Automatically aligns installed packages with the versions expected by the Expo SDK.",
    "tags": [
      "install",
      "fix",
      "dependencies"
    ]
  },
  "Expo / React Native|Diagnostic & config|Voir la config résolue de l'app": {
    "title": "View the app's resolved config",
    "desc": "Shows app.json/app.config.js exactly as Expo interprets it, including default values.",
    "tags": [
      "config",
      "debug"
    ]
  },
  "Expo / React Native|Diagnostic & config|Exporter le bundle statique": {
    "title": "Export the static bundle",
    "desc": "Generates static files (JS, assets) in dist/ — useful for the web or custom update hosting.",
    "tags": [
      "export",
      "build",
      "static"
    ]
  },
  "Expo / React Native|Diagnostic & config|Ajouter le dev client": {
    "title": "Add the dev client",
    "desc": "Needed as soon as the project uses custom native code (beyond Expo Go). Pairs with a --profile development build.",
    "tags": [
      "dev-client",
      "native",
      "expo-go"
    ]
  },
  "Kotlin / Android|Gradle|Build debug": {
    "title": "Debug build",
    "desc": "Compiles the debug APK.",
    "tags": [
      "gradle",
      "build",
      "debug"
    ]
  },
  "Kotlin / Android|Gradle|Installer sur appareil/émulateur": {
    "title": "Install on device/emulator",
    "desc": "Builds and installs the debug APK directly on the connected device (adb).",
    "tags": [
      "gradle",
      "install",
      "adb"
    ]
  },
  "Kotlin / Android|Gradle|Build release signé": {
    "title": "Signed release build",
    "desc": "Requires the signing config in build.gradle (keystore).",
    "tags": [
      "gradle",
      "release",
      "signing"
    ]
  },
  "Kotlin / Android|Gradle|Générer un App Bundle (Play Store)": {
    "title": "Generate an App Bundle (Play Store)",
    "desc": "Generates the .aab expected by the Play Store.",
    "tags": [
      "gradle",
      "aab",
      "bundle",
      "play store"
    ]
  },
  "Kotlin / Android|Gradle|Nettoyer le projet": {
    "title": "Clean the project",
    "desc": "Removes build artifacts. Useful for weird build errors.",
    "tags": [
      "gradle",
      "clean"
    ]
  },
  "Kotlin / Android|Gradle|Lancer les tests unitaires": {
    "title": "Run unit tests",
    "desc": "Runs the JVM tests (non-instrumented).",
    "tags": [
      "gradle",
      "test"
    ]
  },
  "Kotlin / Android|Gradle|Lancer les tests instrumentés": {
    "title": "Run instrumented tests",
    "desc": "Tests that actually run on a connected device/emulator (UI, Android context…).",
    "tags": [
      "gradle",
      "test",
      "instrumentation"
    ]
  },
  "Kotlin / Android|Gradle|Build complet (compile + tests + lint)": {
    "title": "Full build (compile + tests + lint)",
    "desc": "More thorough than assembleDebug, checks everything before considering the build successful.",
    "tags": [
      "gradle",
      "build",
      "full"
    ]
  },
  "Kotlin / Android|Gradle|Lancer le lint": {
    "title": "Run lint",
    "desc": "Static analysis of the Android code, generates an HTML report of detected issues.",
    "tags": [
      "gradle",
      "lint"
    ]
  },
  "Kotlin / Android|Gradle|Lister toutes les tâches disponibles": {
    "title": "List all available tasks",
    "desc": "Useful to discover specific tasks exposed by the project/plugins.",
    "tags": [
      "gradle",
      "tasks",
      "help"
    ]
  },
  "Kotlin / Android|Gradle|Voir l'arbre des dépendances": {
    "title": "View the dependency tree",
    "desc": "Useful for tracking down a version conflict between libraries.",
    "tags": [
      "gradle",
      "dependencies"
    ]
  },
  "Kotlin / Android|Gradle|Voir les empreintes de signature (SHA1/SHA256)": {
    "title": "View signing fingerprints (SHA1/SHA256)",
    "desc": "Needed to configure Firebase, Google Sign-In, Maps API, etc.",
    "tags": [
      "gradle",
      "signing",
      "sha1",
      "firebase"
    ]
  },
  "Kotlin / Android|Gradle|Build avec la stacktrace complète": {
    "title": "Build with the full stacktrace",
    "desc": "To understand an unclear build error. Add --info for even more detail.",
    "tags": [
      "gradle",
      "debug",
      "stacktrace",
      "error"
    ]
  },
  "Kotlin / Android|Gradle|Arrêter le daemon Gradle": {
    "title": "Stop the Gradle daemon",
    "desc": "Useful when Gradle is acting up (cache, stuck process…) before relaunching a build.",
    "tags": [
      "gradle",
      "daemon",
      "stop"
    ]
  },
  "Kotlin / Android|ADB|Lister les appareils connectés": {
    "title": "List connected devices",
    "desc": "Checks that the emulator/phone is properly detected.",
    "tags": [
      "adb",
      "devices"
    ]
  },
  "Kotlin / Android|ADB|Voir les logs (logcat filtré)": {
    "title": "View logs (filtered logcat)",
    "desc": "Shows errors only. Replace *:E with YourTag:D to filter a specific tag.",
    "tags": [
      "adb",
      "logcat",
      "debug"
    ]
  },
  "Kotlin / Android|ADB|Vider les logs": {
    "title": "Clear the logs",
    "desc": "Clears the log buffer before reproducing a bug, to start clean.",
    "tags": [
      "adb",
      "logcat",
      "clear"
    ]
  },
  "Kotlin / Android|ADB|Désinstaller l'app": {
    "title": "Uninstall the app",
    "desc": "Useful when the install fails due to a signature conflict.",
    "tags": [
      "adb",
      "uninstall"
    ]
  },
  "Kotlin / Android|ADB|Installer un APK manuellement": {
    "title": "Install an APK manually",
    "desc": "Add -r to reinstall over an existing app while keeping its data.",
    "tags": [
      "adb",
      "install",
      "apk"
    ]
  },
  "Kotlin / Android|ADB|Effacer les données de l'app": {
    "title": "Clear the app's data",
    "desc": "Resets the app to a 'first install' state without uninstalling it.",
    "tags": [
      "adb",
      "clear",
      "data"
    ]
  },
  "Kotlin / Android|ADB|Copier un fichier vers l'appareil": {
    "title": "Copy a file to the device",
    "desc": "To pull a file from the device instead, use adb pull /sdcard/source local-file",
    "tags": [
      "adb",
      "push",
      "pull",
      "file"
    ]
  },
  "Kotlin / Android|ADB|Rediriger un port (dev server)": {
    "title": "Forward a port (dev server)",
    "desc": "Lets a USB-connected device reach a local server (Metro, API…) without wifi.",
    "tags": [
      "adb",
      "reverse",
      "port",
      "metro"
    ]
  },
  "Kotlin / Android|ADB|Ouvrir un shell sur l'appareil": {
    "title": "Open a shell on the device",
    "desc": "Direct shell access on the connected device/emulator.",
    "tags": [
      "adb",
      "shell"
    ]
  },
  "Kotlin / Android|ADB|Lancer une activité précise": {
    "title": "Launch a specific activity",
    "desc": "Starts an Activity directly, bypassing the launcher.",
    "tags": [
      "adb",
      "activity",
      "start"
    ]
  },
  "Kotlin / Android|ADB|Prendre une capture d'écran": {
    "title": "Take a screenshot",
    "desc": "Saves the device's screen directly to a local file.",
    "tags": [
      "adb",
      "screenshot",
      "capture"
    ]
  },
  "Kotlin / Android|ADB|Redémarrer le serveur adb": {
    "title": "Restart the adb server",
    "desc": "Fixes most device detection issues ('device offline', etc.).",
    "tags": [
      "adb",
      "restart",
      "troubleshoot"
    ]
  },
  "Kotlin / Android|Émulateur|Lister les émulateurs disponibles": {
    "title": "List available emulators",
    "desc": "Shows the AVDs (Android Virtual Devices) configured on the machine.",
    "tags": [
      "emulator",
      "avd",
      "list"
    ]
  },
  "Kotlin / Android|Émulateur|Lancer un émulateur précis": {
    "title": "Launch a specific emulator",
    "desc": "Starts the emulator from the command line, without going through Android Studio.",
    "tags": [
      "emulator",
      "avd",
      "start"
    ]
  },
  "Linux|Fichiers & disque|Lister en détail (avec cachés)": {
    "title": "List in detail (including hidden)",
    "desc": "Lists all files, including hidden ones, with permissions/size/date.",
    "tags": [
      "ls",
      "list"
    ]
  },
  "Linux|Fichiers & disque|Revenir au dossier précédent": {
    "title": "Go back to the previous folder",
    "desc": "Switches to the last folder you were in before the current cd.",
    "tags": [
      "cd",
      "navigation"
    ]
  },
  "Linux|Fichiers & disque|Espace disque par dossier": {
    "title": "Disk space by folder",
    "desc": "Top 20 biggest folders/files in the current directory.",
    "tags": [
      "disk",
      "du",
      "space"
    ]
  },
  "Linux|Fichiers & disque|Espace disque global": {
    "title": "Overall disk space",
    "desc": "Used/available space per partition.",
    "tags": [
      "disk",
      "df"
    ]
  },
  "Linux|Fichiers & disque|Lister les disques/partitions": {
    "title": "List disks/partitions",
    "desc": "Tree view of disks, partitions and mount points.",
    "tags": [
      "disk",
      "partition",
      "lsblk"
    ]
  },
  "Linux|Fichiers & disque|Trouver un fichier par nom": {
    "title": "Find a file by name",
    "desc": "Case-insensitive search across the whole system, ignoring permission errors.",
    "tags": [
      "find",
      "search",
      "file"
    ]
  },
  "Linux|Fichiers & disque|Recherche rapide (index)": {
    "title": "Fast search (index)",
    "desc": "Much faster than find (uses an index). Install: sudo apt install mlocate, then sudo updatedb to refresh the index.",
    "tags": [
      "locate",
      "search"
    ]
  },
  "Linux|Fichiers & disque|Chercher du texte dans des fichiers": {
    "title": "Search text inside files",
    "desc": "Recursive search with line numbers in the current folder.",
    "tags": [
      "grep",
      "search",
      "text"
    ]
  },
  "Linux|Fichiers & disque|Copier/synchroniser avec progression": {
    "title": "Copy/sync with progress",
    "desc": "More robust than cp for big transfers, resumes where it left off.",
    "tags": [
      "rsync",
      "copy",
      "sync"
    ]
  },
  "Linux|Fichiers & disque|Rendre un script exécutable": {
    "title": "Make a script executable",
    "desc": "Required before you can run ./script.sh",
    "tags": [
      "chmod",
      "permissions",
      "executable"
    ]
  },
  "Linux|Fichiers & disque|Changer le propriétaire d'un fichier": {
    "title": "Change a file's owner",
    "desc": "Add -R to apply it recursively to a folder.",
    "tags": [
      "chown",
      "permissions",
      "owner"
    ]
  },
  "Linux|Fichiers & disque|Créer un lien symbolique": {
    "title": "Create a symbolic link",
    "desc": "Handy to expose a script or folder from anywhere.",
    "tags": [
      "ln",
      "symlink"
    ]
  },
  "Linux|Fichiers & disque|Archiver un dossier (tar.gz)": {
    "title": "Archive a folder (tar.gz)",
    "desc": "Compresses. To decompress: tar -xzvf archive.tar.gz",
    "tags": [
      "tar",
      "archive",
      "compression"
    ]
  },
  "Linux|Fichiers & disque|Zipper / dézipper": {
    "title": "Zip / unzip",
    "desc": "Alternative to tar, more common when exchanging files with Windows/Mac.",
    "tags": [
      "zip",
      "unzip",
      "compression"
    ]
  },
  "Linux|Fichiers & disque|Voir les métadonnées d'un fichier": {
    "title": "View a file's metadata",
    "desc": "Size, modified/accessed dates, detailed permissions, inode…",
    "tags": [
      "stat",
      "metadata"
    ]
  },
  "Linux|Fichiers & disque|Monter / démonter une clé USB": {
    "title": "Mount / unmount a USB drive",
    "desc": "First locate the device with lsblk before mounting.",
    "tags": [
      "mount",
      "umount",
      "usb"
    ]
  },
  "Linux|Fichiers & disque|Voir l'arborescence d'un dossier": {
    "title": "View a folder's tree",
    "desc": "Shows the structure 2 levels deep. Install: sudo apt install tree.",
    "tags": [
      "tree",
      "structure"
    ]
  },
  "Linux|Processus & système|Moniteur interactif CPU/RAM": {
    "title": "Interactive CPU/RAM monitor",
    "desc": "Real-time process view. Install with: sudo apt install htop.",
    "tags": [
      "process",
      "cpu",
      "ram",
      "monitoring"
    ]
  },
  "Linux|Processus & système|Chercher un processus par nom": {
    "title": "Find a process by name",
    "desc": "Lists matching processes with their PID.",
    "tags": [
      "ps",
      "process",
      "grep"
    ]
  },
  "Linux|Processus & système|Tuer un processus": {
    "title": "Kill a process",
    "desc": "Forces it to stop. To kill by name directly: killall process-name",
    "tags": [
      "kill",
      "process",
      "stop"
    ]
  },
  "Linux|Processus & système|Mémoire disponible": {
    "title": "Available memory",
    "desc": "Used/free RAM and swap, in a readable format.",
    "tags": [
      "ram",
      "memory",
      "free"
    ]
  },
  "Linux|Processus & système|Depuis combien de temps le système tourne": {
    "title": "How long the system has been running",
    "desc": "Uptime + average system load.",
    "tags": [
      "uptime",
      "system"
    ]
  },
  "Linux|Processus & système|Infos noyau / système": {
    "title": "Kernel / system info",
    "desc": "Kernel version, architecture, hostname.",
    "tags": [
      "uname",
      "kernel",
      "info"
    ]
  },
  "Linux|Processus & système|Version de la distribution": {
    "title": "Distribution version",
    "desc": "Confirms the installed Linux Mint version.",
    "tags": [
      "lsb_release",
      "version",
      "distro"
    ]
  },
  "Linux|Processus & système|Statut d'un service": {
    "title": "A service's status",
    "desc": "See whether a service is running, and its latest logs.",
    "tags": [
      "systemctl",
      "service"
    ]
  },
  "Linux|Processus & système|Redémarrer un service": {
    "title": "Restart a service",
    "desc": "Useful after a config change.",
    "tags": [
      "systemctl",
      "service",
      "restart"
    ]
  },
  "Linux|Processus & système|Voir les logs système récents": {
    "title": "View recent system logs",
    "desc": "Latest systemd logs, useful to debug a crashing service.",
    "tags": [
      "logs",
      "journalctl",
      "systemd"
    ]
  },
  "Linux|Processus & système|Suivre les logs d'un service en direct": {
    "title": "Follow a service's logs live",
    "desc": "Equivalent of tail -f, but for a systemd service.",
    "tags": [
      "logs",
      "journalctl",
      "follow"
    ]
  },
  "Linux|Processus & système|Qui est connecté": {
    "title": "Who's logged in",
    "desc": "Users currently logged into the machine.",
    "tags": [
      "who",
      "users",
      "session"
    ]
  },
  "Linux|Réseau|Adresse IP locale": {
    "title": "Local IP address",
    "desc": "Shows network interfaces and their IPs (replaces the old ifconfig).",
    "tags": [
      "ip",
      "network",
      "address"
    ]
  },
  "Linux|Réseau|IP locale rapide": {
    "title": "Quick local IP",
    "desc": "Just the IP, without interface details.",
    "tags": [
      "ip",
      "hostname"
    ]
  },
  "Linux|Réseau|Tester une connexion": {
    "title": "Test a connection",
    "desc": "Sends 4 packets then stops (without -c, ping keeps going forever).",
    "tags": [
      "ping",
      "network",
      "test"
    ]
  },
  "Linux|Réseau|Quel processus utilise ce port ?": {
    "title": "Which process is using this port?",
    "desc": "Identifies what's listening on a given port (e.g. 3000, 8081).",
    "tags": [
      "network",
      "port",
      "ss"
    ]
  },
  "Linux|Réseau|Tester si un port distant est ouvert": {
    "title": "Test if a remote port is open",
    "desc": "Handy to check a server/API is reachable before debugging further.",
    "tags": [
      "nc",
      "netcat",
      "port",
      "test"
    ]
  },
  "Linux|Réseau|Voir les en-têtes HTTP d'une URL": {
    "title": "View a URL's HTTP headers",
    "desc": "Quick way to check an HTTP status, redirects, CORS headers…",
    "tags": [
      "curl",
      "http",
      "headers"
    ]
  },
  "Linux|Réseau|Télécharger un fichier": {
    "title": "Download a file",
    "desc": "Alternative to curl -O, simpler for a direct download.",
    "tags": [
      "wget",
      "download"
    ]
  },
  "Linux|Réseau|Copier un fichier vers/depuis un serveur": {
    "title": "Copy a file to/from a server",
    "desc": "Secure copy over SSH. Add -r for an entire folder.",
    "tags": [
      "scp",
      "ssh",
      "copy"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Mettre à jour le système": {
    "title": "Update the system",
    "desc": "Refreshes the package list, then upgrades.",
    "tags": [
      "apt",
      "update",
      "upgrade"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Nettoyer les paquets inutiles": {
    "title": "Clean up unused packages",
    "desc": "Frees disk space by removing orphaned packages and the cache.",
    "tags": [
      "apt",
      "clean",
      "disk"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Chercher un paquet": {
    "title": "Search for a package",
    "desc": "Searches among available packages.",
    "tags": [
      "apt",
      "search"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Voir les infos d'un paquet": {
    "title": "View a package's info",
    "desc": "Description, version, dependencies, size.",
    "tags": [
      "apt",
      "info"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Lister les paquets installés": {
    "title": "List installed packages",
    "desc": "Checks whether a specific package is already installed.",
    "tags": [
      "dpkg",
      "list"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Installer un .deb téléchargé": {
    "title": "Install a downloaded .deb",
    "desc": "The 2nd line automatically fixes missing dependencies.",
    "tags": [
      "dpkg",
      "deb",
      "install"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Gérer les paquets Snap": {
    "title": "Manage Snap packages",
    "desc": "Sandboxed package manager, an alternative to apt for some apps.",
    "tags": [
      "snap",
      "install"
    ]
  },
  "Linux|Paquets (apt / snap / flatpak)|Gérer les paquets Flatpak": {
    "title": "Manage Flatpak packages",
    "desc": "Another sandboxed package system, widely used for recent GUI apps.",
    "tags": [
      "flatpak",
      "install"
    ]
  },
  "Linux|Utilisateurs & permissions|Ouvrir un shell root": {
    "title": "Open a root shell",
    "desc": "Switches to root for the current session. Use with caution.",
    "tags": [
      "sudo",
      "root"
    ]
  },
  "Linux|Utilisateurs & permissions|Ajouter l'utilisateur courant à un groupe": {
    "title": "Add the current user to a group",
    "desc": "E.g.: sudo usermod -aG docker $USER to use Docker without sudo. Requires logging back in.",
    "tags": [
      "usermod",
      "group",
      "permissions"
    ]
  },
  "Linux|Utilisateurs & permissions|Voir mes groupes": {
    "title": "View my groups",
    "desc": "Lists the groups the current user belongs to.",
    "tags": [
      "groups",
      "id"
    ]
  },
  "Linux|Utilisateurs & permissions|Changer les permissions récursivement": {
    "title": "Change permissions recursively",
    "desc": "755 = owner rwx, group/others r-x. Adjust to your actual needs.",
    "tags": [
      "chmod",
      "permissions",
      "recursive"
    ]
  },
  "Linux|Outils CLI divers|VS Code avec un profil isolé": {
    "title": "VS Code with an isolated profile",
    "desc": "Launches VS Code with a separate config folder (extensions, settings). Handy to isolate a project or test without polluting your main profile.",
    "tags": [
      "vscode",
      "code",
      "profile",
      "user-data-dir"
    ]
  },
  "Linux|Outils CLI divers|Ouvrir VS Code ici": {
    "title": "Open VS Code here",
    "desc": "Opens the current folder in VS Code.",
    "tags": [
      "vscode",
      "code"
    ]
  },
  "Linux|Outils CLI divers|Rechercher dans l'historique du shell": {
    "title": "Search the shell history",
    "desc": "Finds a command you typed a while ago. Ctrl+R does an equivalent interactive search.",
    "tags": [
      "history",
      "search"
    ]
  },
  "Linux|Outils CLI divers|Créer un alias permanent": {
    "title": "Create a permanent alias",
    "desc": "Adds a reusable command shortcut in every new terminal.",
    "tags": [
      "alias",
      "bashrc",
      "shortcut"
    ]
  },
  "Linux|Outils CLI divers|Éditer les tâches planifiées": {
    "title": "Edit scheduled tasks",
    "desc": "Schedules commands to run automatically (e.g. nightly backups).",
    "tags": [
      "cron",
      "crontab",
      "scheduling"
    ]
  },
  "Linux|Outils CLI divers|Définir une variable d'environnement": {
    "title": "Set an environment variable",
    "desc": "Valid for the current terminal session. Add it to ~/.bashrc to make it permanent.",
    "tags": [
      "export",
      "env",
      "variable"
    ]
  },
  "Linux|Outils CLI divers|Générer une clé SSH": {
    "title": "Generate an SSH key",
    "desc": "Creates a modern key pair (ed25519), useful for GitHub/remote servers.",
    "tags": [
      "ssh",
      "ssh-keygen",
      "key"
    ]
  },
  "Linux|Outils CLI divers|Se connecter en SSH": {
    "title": "Connect via SSH",
    "desc": "Opens a secure remote shell session.",
    "tags": [
      "ssh",
      "connection"
    ]
  },
  "Linux|Outils CLI divers|Localiser un exécutable": {
    "title": "Locate an executable",
    "desc": "Shows which binary is actually executed (useful in case of version conflicts).",
    "tags": [
      "which",
      "path"
    ]
  },
  "Linux|Outils CLI divers|Afficher le manuel d'une commande": {
    "title": "Show a command's manual",
    "desc": "Full documentation installed locally. Quit with the q key.",
    "tags": [
      "man",
      "help",
      "documentation"
    ]
  },
  "Linux|Docker|Conteneurs en cours d'exécution": {
    "title": "Running containers",
    "desc": "Add -a to also see stopped containers.",
    "tags": [
      "docker",
      "ps",
      "container"
    ]
  },
  "Linux|Docker|Lister les images": {
    "title": "List images",
    "desc": "All Docker images present locally.",
    "tags": [
      "docker",
      "images"
    ]
  },
  "Linux|Docker|Lancer un conteneur": {
    "title": "Run a container",
    "desc": "-d = in the background, -p = host:container port mapping.",
    "tags": [
      "docker",
      "run"
    ]
  },
  "Linux|Docker|Ouvrir un shell dans un conteneur": {
    "title": "Open a shell inside a container",
    "desc": "Use sh instead of bash if the image doesn't have it (e.g. Alpine images).",
    "tags": [
      "docker",
      "exec",
      "shell"
    ]
  },
  "Linux|Docker|Suivre les logs d'un conteneur": {
    "title": "Follow a container's logs",
    "desc": "-f to follow live, like a tail -f.",
    "tags": [
      "docker",
      "logs"
    ]
  },
  "Linux|Docker|Arrêter / démarrer un conteneur": {
    "title": "Stop / start a container",
    "desc": "Stops or restarts an existing container without recreating it.",
    "tags": [
      "docker",
      "stop",
      "start"
    ]
  },
  "Linux|Docker|Supprimer un conteneur": {
    "title": "Remove a container",
    "desc": "The container must be stopped. Add -f to force it without stopping it first.",
    "tags": [
      "docker",
      "rm",
      "remove"
    ]
  },
  "Linux|Docker|Construire une image": {
    "title": "Build an image",
    "desc": "Builds from the Dockerfile in the current folder.",
    "tags": [
      "docker",
      "build",
      "image"
    ]
  },
  "Linux|Docker|Lancer / arrêter une stack (Compose)": {
    "title": "Start / stop a stack (Compose)",
    "desc": "up -d starts all services in the background, down stops and removes the containers.",
    "tags": [
      "docker",
      "compose",
      "stack"
    ]
  },
  "Linux|Docker|Voir les logs d'une stack Compose": {
    "title": "View a Compose stack's logs",
    "desc": "Follows the logs of every service defined in docker-compose.yml.",
    "tags": [
      "docker",
      "compose",
      "logs"
    ]
  },
  "Linux|Docker|Tout nettoyer (images/conteneurs/réseaux inutilisés)": {
    "title": "Clean up everything (unused images/containers/networks)",
    "desc": "⚠️ Removes everything not used by an active container. Frees up a lot of disk space.",
    "tags": [
      "docker",
      "prune",
      "clean",
      "danger"
    ]
  },
  "Linux|Docker|Inspecter un conteneur/image": {
    "title": "Inspect a container/image",
    "desc": "Full JSON details (IP, volumes, env variables, network config…).",
    "tags": [
      "docker",
      "inspect"
    ]
  },
  "Linux|Docker|Lister les volumes": {
    "title": "List volumes",
    "desc": "Persistent data volumes managed by Docker.",
    "tags": [
      "docker",
      "volume"
    ]
  },
  "Git|Staging & Commit|Statut du dépôt": {
    "title": "Repository status",
    "desc": "Modified / staged / untracked files.",
    "tags": [
      "status"
    ]
  },
  "Git|Staging & Commit|Ajouter tous les changements": {
    "title": "Stage all changes",
    "desc": "Stages the entire current folder.",
    "tags": [
      "add",
      "staging"
    ]
  },
  "Git|Staging & Commit|Ajouter en interactif": {
    "title": "Stage interactively",
    "desc": "Choose piece by piece (hunk) what gets staged.",
    "tags": [
      "add",
      "staging",
      "interactive"
    ]
  },
  "Git|Staging & Commit|Commit": {
    "title": "Commit",
    "desc": "Records the staged changes.",
    "tags": [
      "commit"
    ]
  },
  "Git|Staging & Commit|Modifier le dernier commit": {
    "title": "Amend the last commit",
    "desc": "Changes the message and/or adds forgotten files to the last commit.",
    "tags": [
      "commit",
      "amend"
    ]
  },
  "Git|Branches|Nouvelle branche + bascule": {
    "title": "New branch + switch",
    "desc": "Creates and switches to a new branch in one command (equivalent: git switch -c name).",
    "tags": [
      "branch",
      "checkout",
      "switch"
    ]
  },
  "Git|Branches|Changer de branche": {
    "title": "Switch branch",
    "desc": "Switches to an existing branch.",
    "tags": [
      "branch",
      "switch",
      "checkout"
    ]
  },
  "Git|Branches|Lister les branches": {
    "title": "List branches",
    "desc": "Local and remote. Add -v to see the latest commit of each.",
    "tags": [
      "branch",
      "list"
    ]
  },
  "Git|Branches|Supprimer une branche locale": {
    "title": "Delete a local branch",
    "desc": "Use -D (uppercase) to force it if it isn't merged.",
    "tags": [
      "branch",
      "delete"
    ]
  },
  "Git|Branches|Renommer la branche courante": {
    "title": "Rename the current branch",
    "desc": "Renames the branch you're currently on.",
    "tags": [
      "branch",
      "rename"
    ]
  },
  "Git|Remote (push/pull/clone)|Récupérer les changements distants": {
    "title": "Fetch remote changes",
    "desc": "Downloads new commits without merging them into your branch.",
    "tags": [
      "fetch",
      "remote"
    ]
  },
  "Git|Remote (push/pull/clone)|Récupérer + fusionner": {
    "title": "Fetch + merge",
    "desc": "fetch + merge in a single command. Add --rebase to rebase instead of merging.",
    "tags": [
      "pull",
      "remote",
      "merge"
    ]
  },
  "Git|Remote (push/pull/clone)|Envoyer les commits": {
    "title": "Push commits",
    "desc": "Pushes the current branch to the remote.",
    "tags": [
      "push",
      "remote"
    ]
  },
  "Git|Remote (push/pull/clone)|Premier push d'une nouvelle branche": {
    "title": "First push of a new branch",
    "desc": "Pushes and links the local branch to the remote branch (-u = upstream).",
    "tags": [
      "push",
      "remote",
      "upstream"
    ]
  },
  "Git|Branches|Fusionner une branche": {
    "title": "Merge a branch",
    "desc": "Merges the given branch into the current branch.",
    "tags": [
      "merge"
    ]
  },
  "Git|Branches|Rebaser sur une autre branche": {
    "title": "Rebase onto another branch",
    "desc": "Replays your commits on top of the other branch. On conflict: git rebase --continue / --abort.",
    "tags": [
      "rebase"
    ]
  },
  "Git|Historique & recherche|Voir l'historique en une ligne": {
    "title": "View history, one line each",
    "desc": "Compact, graphical view of branches/commits.",
    "tags": [
      "log",
      "history",
      "graph"
    ]
  },
  "Git|Staging & Commit|Voir les changements non stagés": {
    "title": "View unstaged changes",
    "desc": "Diff of files modified but not yet staged. Add --staged to see the staged diff.",
    "tags": [
      "diff"
    ]
  },
  "Git|Annuler & restaurer|Annuler le dernier commit (garder les modifs)": {
    "title": "Undo the last commit (keep the changes)",
    "desc": "Undoes the commit but keeps the changes staged.",
    "tags": [
      "reset",
      "undo",
      "commit"
    ]
  },
  "Git|Annuler & restaurer|Annuler le dernier commit (tout jeter)": {
    "title": "Undo the last commit (discard everything)",
    "desc": "⚠️ Permanently deletes the commit AND the changes. Irreversible.",
    "tags": [
      "reset",
      "undo",
      "commit",
      "danger"
    ]
  },
  "Git|Annuler & restaurer|Remettre un fichier comme au dernier commit": {
    "title": "Restore a file to its last commit state",
    "desc": "Undoes unstaged local changes on this file (modern equivalent: git restore file-name).",
    "tags": [
      "checkout",
      "restore",
      "undo"
    ]
  },
  "Git|Annuler & restaurer|Retirer un fichier du staging": {
    "title": "Unstage a file",
    "desc": "The file stays modified but leaves the staging area.",
    "tags": [
      "restore",
      "unstage"
    ]
  },
  "Git|Stash|Mettre de côté les changements (stash)": {
    "title": "Stash the changes away",
    "desc": "Temporarily stores current changes to get back a clean working folder.",
    "tags": [
      "stash"
    ]
  },
  "Git|Stash|Récupérer le dernier stash": {
    "title": "Restore the last stash",
    "desc": "Reapplies the last stash and removes it from the list.",
    "tags": [
      "stash",
      "pop"
    ]
  },
  "Git|Stash|Lister les stash": {
    "title": "List stashes",
    "desc": "See all pending stashes.",
    "tags": [
      "stash",
      "list"
    ]
  },
  "Git|Tags & config|Créer un tag": {
    "title": "Create a tag",
    "desc": "Annotated tag (recommended for releases). git push --tags to send it.",
    "tags": [
      "tag",
      "release"
    ]
  },
  "Git|Remote (push/pull/clone)|Cloner un dépôt": {
    "title": "Clone a repository",
    "desc": "Fetches a remote repository locally.",
    "tags": [
      "clone"
    ]
  },
  "Git|Historique & recherche|Voir qui a changé quoi (blame)": {
    "title": "See who changed what (blame)",
    "desc": "Shows the last commit that modified each line.",
    "tags": [
      "blame"
    ]
  },
  "Git|Historique & recherche|Chercher un commit par contenu": {
    "title": "Search a commit by content",
    "desc": "Finds commits that added/removed a given string in the code.",
    "tags": [
      "log",
      "search",
      "pickaxe"
    ]
  },
  "Git|Annuler & restaurer|Nettoyer les fichiers non suivis": {
    "title": "Clean up untracked files",
    "desc": "⚠️ Permanently deletes untracked files/folders. Add -n first to preview without deleting anything.",
    "tags": [
      "clean",
      "danger"
    ]
  },
  "Git|Tags & config|Configurer nom et email globaux": {
    "title": "Set your global name and email",
    "desc": "To do once per machine.",
    "tags": [
      "config",
      "setup"
    ]
  },
  "Git|Branches|Réécrire les N derniers commits (rebase interactif)": {
    "title": "Rewrite the last N commits (interactive rebase)",
    "desc": "Lets you squash / reword / reorder the last 5 commits.",
    "tags": [
      "rebase",
      "interactive",
      "squash"
    ]
  },
  "Claude Code|Démarrage|Lancer une session interactive": {
    "title": "Start an interactive session",
    "desc": "Opens Claude Code's interactive REPL in the current folder.",
    "tags": [
      "claude",
      "start",
      "repl"
    ]
  },
  "Claude Code|Démarrage|Démarrer avec un prompt initial": {
    "title": "Start with an initial prompt",
    "desc": "Launches the session directly with a first question/instruction, without having to retype it once started.",
    "tags": [
      "claude",
      "start",
      "prompt"
    ]
  },
  "Claude Code|Démarrage|Réponse ponctuelle sans session interactive": {
    "title": "One-off answer without an interactive session",
    "desc": "'Print' mode: runs a query, shows the response, then exits — handy for scripting or automation (CI, hooks, etc.).",
    "tags": [
      "claude",
      "print",
      "script",
      "automation"
    ]
  },
  "Claude Code|Démarrage|Reprendre la dernière conversation": {
    "title": "Continue the last conversation",
    "desc": "Reloads the most recent session's context in this folder, without having to re-explain everything.",
    "tags": [
      "claude",
      "continue",
      "session"
    ]
  },
  "Claude Code|Démarrage|Reprendre une session précise": {
    "title": "Resume a specific session",
    "desc": "Shows a picker of this folder's previous sessions. Add an id to resume a specific one directly: claude -r <id>",
    "tags": [
      "claude",
      "resume",
      "session"
    ]
  },
  "Claude Code|Options CLI|Choisir un modèle": {
    "title": "Choose a model",
    "desc": "Forces the model used for this session (e.g. sonnet, opus, haiku).",
    "tags": [
      "claude",
      "model",
      "flag"
    ]
  },
  "Claude Code|Options CLI|Démarrer en mode plan": {
    "title": "Start in plan mode",
    "desc": "Claude thinks through and proposes a plan before taking any action, without changing anything until the plan is approved.",
    "tags": [
      "claude",
      "plan",
      "permission"
    ]
  },
  "Claude Code|Options CLI|Autoriser un dossier supplémentaire": {
    "title": "Allow an extra folder",
    "desc": "Grants read/write access to a folder outside the current working directory.",
    "tags": [
      "claude",
      "add-dir",
      "workspace"
    ]
  },
  "Claude Code|Options CLI|Ignorer les confirmations de permission": {
    "title": "Skip permission confirmations",
    "desc": "⚠️ Runs every action without ever asking for confirmation. Reserved for an isolated/sandboxed environment (disposable container, CI) — never on a machine with sensitive data.",
    "tags": [
      "claude",
      "permissions",
      "danger"
    ]
  },
  "Claude Code|Options CLI|Sortie au format JSON": {
    "title": "JSON output",
    "desc": "Useful for scripting: gets the response as JSON usable by another program instead of plain text.",
    "tags": [
      "claude",
      "json",
      "script"
    ]
  },
  "Claude Code|Slash commands|Afficher l'aide": {
    "title": "Show help",
    "desc": "Lists the commands available in the current session.",
    "tags": [
      "claude",
      "help"
    ]
  },
  "Claude Code|Slash commands|Effacer la conversation": {
    "title": "Clear the conversation",
    "desc": "Clears the current conversation history and starts fresh (context lost).",
    "tags": [
      "claude",
      "clear",
      "reset"
    ]
  },
  "Claude Code|Slash commands|Compacter le contexte": {
    "title": "Compact the context",
    "desc": "Summarizes the conversation to free up context, without losing everything. Add an instruction to steer the summary: /compact keep the implementation plan in detail",
    "tags": [
      "claude",
      "compact",
      "context"
    ]
  },
  "Claude Code|Slash commands|Voir le coût de la session": {
    "title": "View the session's cost",
    "desc": "Shows an estimate of the current session's usage/cost.",
    "tags": [
      "claude",
      "cost",
      "usage"
    ]
  },
  "Claude Code|Slash commands|Générer un CLAUDE.md": {
    "title": "Generate a CLAUDE.md",
    "desc": "Analyzes the project and generates a CLAUDE.md file documenting its structure — automatically read at the start of future sessions.",
    "tags": [
      "claude",
      "init",
      "claude.md",
      "documentation"
    ]
  },
  "Claude Code|Slash commands|Changer de modèle en cours de session": {
    "title": "Switch model mid-session",
    "desc": "Switches to another model without having to restart the session.",
    "tags": [
      "claude",
      "model"
    ]
  },
  "Claude Code|Slash commands|Gérer les permissions": {
    "title": "Manage permissions",
    "desc": "Configures which tools/actions Claude can run automatically, without asking for confirmation every time.",
    "tags": [
      "claude",
      "permissions"
    ]
  },
  "Claude Code|Slash commands|Gérer les sous-agents": {
    "title": "Manage subagents",
    "desc": "Creates, edits or lists the available subagents (specialized agents Claude can delegate to).",
    "tags": [
      "claude",
      "agents",
      "subagent"
    ]
  },
  "Claude Code|Slash commands|Gérer les serveurs MCP": {
    "title": "Manage MCP servers",
    "desc": "Shows and manages the MCP servers connected to the current session.",
    "tags": [
      "claude",
      "mcp"
    ]
  },
  "Claude Code|Slash commands|Ouvrir la configuration": {
    "title": "Open the configuration",
    "desc": "Opens the interactive configuration (theme, default model, etc.).",
    "tags": [
      "claude",
      "config"
    ]
  },
  "Claude Code|Slash commands|Activer les raccourcis Vim": {
    "title": "Enable Vim keybindings",
    "desc": "Enables Vim-style keyboard shortcuts for editing the text typed in the prompt.",
    "tags": [
      "claude",
      "vim",
      "keybindings"
    ]
  },
  "Claude Code|Slash commands|Connecter un IDE": {
    "title": "Connect an IDE",
    "desc": "Connects the session to an open IDE (VS Code, JetBrains…) to share the active file/selection.",
    "tags": [
      "claude",
      "ide",
      "vscode"
    ]
  },
  "Claude Code|Slash commands|Signaler un bug": {
    "title": "Report a bug",
    "desc": "Sends a bug report directly to Anthropic from the session.",
    "tags": [
      "claude",
      "bug",
      "feedback"
    ]
  },
  "Claude Code|Slash commands|Voir le statut de la session": {
    "title": "View the session's status",
    "desc": "Shows the session's state: logged-in account, active model, ongoing connections.",
    "tags": [
      "claude",
      "status"
    ]
  },
  "Claude Code|Slash commands|Se connecter": {
    "title": "Log in",
    "desc": "Logs in (or switches) the account used by Claude Code.",
    "tags": [
      "claude",
      "login",
      "account"
    ]
  },
  "Claude Code|Slash commands|Se déconnecter": {
    "title": "Log out",
    "desc": "Logs out the currently used account.",
    "tags": [
      "claude",
      "logout",
      "account"
    ]
  },
  "Claude Code|MCP & config|Lister les serveurs MCP": {
    "title": "List MCP servers",
    "desc": "Shows the currently configured MCP servers (from the terminal, outside a session).",
    "tags": [
      "claude",
      "mcp",
      "list"
    ]
  },
  "Claude Code|MCP & config|Ajouter un serveur MCP": {
    "title": "Add an MCP server",
    "desc": "Connects a new MCP server to Claude Code, available in every future session.",
    "tags": [
      "claude",
      "mcp",
      "add"
    ]
  },
  "Claude Code|MCP & config|Voir la configuration": {
    "title": "View the configuration",
    "desc": "Shows the current settings (global and project-specific), from the terminal.",
    "tags": [
      "claude",
      "config",
      "list"
    ]
  },
  "Claude Code|Installation & mise à jour|Installer Claude Code": {
    "title": "Install Claude Code",
    "desc": "Global install via npm (requires Node.js to be installed beforehand).",
    "tags": [
      "claude",
      "install",
      "npm"
    ]
  },
  "Claude Code|Installation & mise à jour|Mettre à jour": {
    "title": "Update",
    "desc": "Updates Claude Code to the latest available version.",
    "tags": [
      "claude",
      "update"
    ]
  },
  "Claude Code|Installation & mise à jour|Voir la version installée": {
    "title": "View the installed version",
    "desc": "Shows the currently installed version.",
    "tags": [
      "claude",
      "version"
    ]
  },
  "Claude Code|Installation & mise à jour|Diagnostiquer l'installation": {
    "title": "Diagnose the installation",
    "desc": "Checks that the install is healthy (dependencies, PATH, configuration) and reports what's wrong.",
    "tags": [
      "claude",
      "doctor",
      "diagnostic"
    ]
  },
  "Claude Code|Slash commands|Relancer une tâche à intervalle régulier": {
    "title": "Rerun a task on a recurring interval",
    "desc": "Reruns a prompt or command on a recurring interval (here every 5 minutes) until the loop is stopped. Omit the interval to let Claude choose the pace itself.",
    "tags": [
      "claude",
      "loop",
      "interval",
      "automation"
    ]
  },
  "Claude Code|Slash commands|Invoquer une commande personnalisée": {
    "title": "Invoke a custom command",
    "desc": "Replays the prompt stored in .claude/commands/your-command-name.md (or ~/.claude/commands/ for personal use).",
    "tags": [
      "claude",
      "custom command",
      "prompt",
      "reusable"
    ]
  },
  "Windows|Fichiers & disque|Lister en détail (avec cachés)": {
    "title": "List in detail (including hidden)",
    "desc": "Lists the current folder's contents with details (size, date), hidden/system files included.",
    "tags": ["windows", "powershell", "ls", "files"]
  },
  "Windows|Fichiers & disque|Espace disque par dossier": {
    "title": "Disk usage per folder",
    "desc": "Adds up the size of every file in the current folder (and subfolders) — handy for spotting what's taking up space.",
    "tags": ["windows", "powershell", "disk", "size"]
  },
  "Windows|Fichiers & disque|Espace disque global": {
    "title": "Overall disk space",
    "desc": "Shows used and free space for each disk/partition.",
    "tags": ["windows", "powershell", "disk", "volume"]
  },
  "Windows|Fichiers & disque|Trouver un fichier par nom": {
    "title": "Find a file by name",
    "desc": "Recursively searches the current folder for every file whose name contains \"pattern\".",
    "tags": ["windows", "powershell", "search", "file"]
  },
  "Windows|Fichiers & disque|Chercher du texte dans des fichiers": {
    "title": "Search text inside files",
    "desc": "The grep equivalent — searches for a text string in one or more files.",
    "tags": ["windows", "powershell", "grep", "search", "text"]
  },
  "Windows|Fichiers & disque|Copier avec progression et reprise": {
    "title": "Copy with progress and resume",
    "desc": "Robustly copies an entire folder (recursive with /E), able to resume an interrupted copy (/Z) — more reliable than a plain copy-paste for large volumes.",
    "tags": ["windows", "robocopy", "copy", "files"]
  },
  "Windows|Fichiers & disque|Archiver / dézipper": {
    "title": "Archive / unzip",
    "desc": "Creates a .zip archive from a folder. Expand-Archive -Path archive.zip -DestinationPath folder does the reverse.",
    "tags": ["windows", "powershell", "zip", "archive"]
  },
  "Windows|Processus & système|Ouvrir le gestionnaire des tâches": {
    "title": "Open Task Manager",
    "desc": "Launches the graphical interface for real-time CPU/RAM/disk/network monitoring.",
    "tags": ["windows", "taskmgr", "process", "monitor"]
  },
  "Windows|Processus & système|Top des processus par CPU": {
    "title": "Top processes by CPU",
    "desc": "Lists the 10 processes using the most CPU from the command line — handy when the graphical interface isn't practical (SSH, script).",
    "tags": ["windows", "powershell", "process", "cpu"]
  },
  "Windows|Processus & système|Tuer un processus": {
    "title": "Kill a process",
    "desc": "Forces a process to stop by name — the equivalent of kill on Linux.",
    "tags": ["windows", "powershell", "process", "kill"]
  },
  "Windows|Processus & système|Infos système complètes": {
    "title": "Full system info",
    "desc": "Shows a complete system summary (OS, hardware, memory, install date, installed patches…).",
    "tags": ["windows", "systeminfo", "diagnostic"]
  },
  "Windows|Processus & système|Depuis combien de temps le système tourne": {
    "title": "How long the system has been running",
    "desc": "Calculates the time elapsed since the last boot.",
    "tags": ["windows", "powershell", "uptime", "system"]
  },
  "Windows|Processus & système|Statut d'un service": {
    "title": "A service's status",
    "desc": "Shows the state (started/stopped) of one or more system services.",
    "tags": ["windows", "powershell", "service"]
  },
  "Windows|Processus & système|Voir les logs système récents": {
    "title": "View recent system logs",
    "desc": "Shows the 20 most recent entries in the system event log.",
    "tags": ["windows", "powershell", "logs", "eventlog"]
  },
  "Windows|Réseau|Adresse IP locale": {
    "title": "Local IP address",
    "desc": "Shows the network configuration (IP address, mask, gateway) for each interface.",
    "tags": ["windows", "ip", "network"]
  },
  "Windows|Réseau|Tester une connexion": {
    "title": "Test a connection",
    "desc": "Checks that a host responds and measures the response time.",
    "tags": ["windows", "ping", "network"]
  },
  "Windows|Réseau|Quel processus utilise ce port ?": {
    "title": "Which process is using this port?",
    "desc": "Finds the PID of the process listening on port 8080 — Get-Process -Id <PID> next to identify the program.",
    "tags": ["windows", "netstat", "port", "network"]
  },
  "Windows|Réseau|Tester si un port distant est ouvert": {
    "title": "Test if a remote port is open",
    "desc": "Checks that a specific port is reachable on a remote machine, without opening a real application connection.",
    "tags": ["windows", "powershell", "port", "network"]
  },
  "Windows|Réseau|Télécharger un fichier": {
    "title": "Download a file",
    "desc": "Downloads a URL's content to a local file — the PowerShell equivalent of wget/curl.",
    "tags": ["windows", "powershell", "download", "http"]
  },
  "Windows|Réseau|Vider le cache DNS": {
    "title": "Flush the DNS cache",
    "desc": "Forces the system to forget cached DNS resolutions — useful after a server or domain change.",
    "tags": ["windows", "dns", "network", "cache"]
  },
  "Windows|Paquets (winget / choco)|Installer un paquet": {
    "title": "Install a package",
    "desc": "Installs software from Windows's official package manager, built in since Windows 10/11.",
    "tags": ["windows", "winget", "install", "package"]
  },
  "Windows|Paquets (winget / choco)|Mettre à jour tous les paquets": {
    "title": "Update all packages",
    "desc": "Updates every piece of software installed via winget to its latest available version.",
    "tags": ["windows", "winget", "update", "package"]
  },
  "Windows|Paquets (winget / choco)|Chercher un paquet": {
    "title": "Search for a package",
    "desc": "Searches for available software in winget's sources by name.",
    "tags": ["windows", "winget", "search", "package"]
  },
  "Windows|Paquets (winget / choco)|Lister les paquets installés": {
    "title": "List installed packages",
    "desc": "Shows every piece of software installed that winget recognizes on the machine.",
    "tags": ["windows", "winget", "list", "package"]
  },
  "Windows|Paquets (winget / choco)|Installer via Chocolatey": {
    "title": "Install via Chocolatey",
    "desc": "An alternative, third-party package manager, useful for software not yet available on winget — requires installing Chocolatey first.",
    "tags": ["windows", "chocolatey", "install", "package"]
  },
  "Windows|Utilisateurs & permissions|Ouvrir un terminal en administrateur": {
    "title": "Open an administrator terminal",
    "desc": "Opens a new PowerShell window with elevated privileges — Windows has no direct equivalent to sudo within the same terminal.",
    "tags": ["windows", "powershell", "admin", "elevation"]
  },
  "Windows|Utilisateurs & permissions|Lister les utilisateurs": {
    "title": "List users",
    "desc": "Shows every local user account on the machine.",
    "tags": ["windows", "powershell", "users"]
  },
  "Windows|Utilisateurs & permissions|Voir mes groupes / droits": {
    "title": "See my groups / rights",
    "desc": "Shows the current user and every group they belong to (local admin, etc.).",
    "tags": ["windows", "whoami", "permissions", "groups"]
  },
  "Windows|Utilisateurs & permissions|Voir les permissions d'un fichier": {
    "title": "View a file's permissions",
    "desc": "Shows the access control list (ACL) of a file or folder — who's allowed to do what.",
    "tags": ["windows", "icacls", "permissions"]
  },
  "Windows|Utilisateurs & permissions|Changer le propriétaire d'un fichier": {
    "title": "Change a file's owner",
    "desc": "Reclaims ownership of a file or folder — useful when a system file or another account's file blocks a change.",
    "tags": ["windows", "takeown", "owner", "permissions"]
  },
  "Windows|Outils CLI divers|Ouvrir VS Code ici": {
    "title": "Open VS Code here",
    "desc": "Opens VS Code directly in the current folder.",
    "tags": ["windows", "vscode", "editor"]
  },
  "Windows|Outils CLI divers|Éditer le profil PowerShell": {
    "title": "Edit the PowerShell profile",
    "desc": "Opens the configuration file loaded every time PowerShell starts — the equivalent of .bashrc on Linux.",
    "tags": ["windows", "powershell", "profile", "config"]
  },
  "Windows|Outils CLI divers|Créer un alias permanent": {
    "title": "Create a permanent alias",
    "desc": "Creates an alias for the current session. To make it permanent, add the same line to the PowerShell profile ($PROFILE).",
    "tags": ["windows", "powershell", "alias"]
  },
  "Windows|Outils CLI divers|Définir une variable d'environnement": {
    "title": "Set an environment variable",
    "desc": "Sets an environment variable for the current session. setx NAME \"value\" makes it permanent (new sessions only).",
    "tags": ["windows", "powershell", "variable", "environment"]
  },
  "Windows|Outils CLI divers|Générer une clé SSH": {
    "title": "Generate an SSH key",
    "desc": "Generates an SSH key pair — the OpenSSH client has been built in natively since Windows 10.",
    "tags": ["windows", "ssh", "key", "security"]
  },
  "Windows|Outils CLI divers|Se connecter en SSH": {
    "title": "Connect over SSH",
    "desc": "Opens an SSH connection to a remote machine.",
    "tags": ["windows", "ssh", "connection"]
  },
  "Windows|Outils CLI divers|Localiser un exécutable": {
    "title": "Locate an executable",
    "desc": "Finds the path of the executable that would run when typing \"name\" — the equivalent of which on Linux.",
    "tags": ["windows", "powershell", "which", "path"]
  },
  "Codex|Démarrage|Lancer une session interactive": {
    "title": "Launch an interactive session",
    "desc": "Opens Codex's interactive interface in the current folder.",
    "tags": ["codex", "openai", "start"]
  },
  "Codex|Démarrage|Exécution non-interactive (one-shot)": {
    "title": "Non-interactive (one-shot) run",
    "desc": "Runs a task without opening an interactive session, shows the result, then quits — handy for scripting or automation.",
    "tags": ["codex", "openai", "exec", "script"]
  },
  "Codex|Démarrage|Sortie en JSON Lines": {
    "title": "JSON Lines output",
    "desc": "Streams the response as JSON Lines, usable by another program instead of plain text.",
    "tags": ["codex", "openai", "json", "script"]
  },
  "Codex|Démarrage|Écrire la réponse finale dans un fichier": {
    "title": "Write the final answer to a file",
    "desc": "Writes only the final message to the given file, instead of printing it in the terminal.",
    "tags": ["codex", "openai", "output", "file"]
  },
  "Codex|Démarrage|Reprendre la dernière session (non-interactif)": {
    "title": "Resume the last session (non-interactive)",
    "desc": "Resumes the most recent session in non-interactive mode, with a new instruction.",
    "tags": ["codex", "openai", "resume", "session"]
  },
  "Codex|Démarrage|Reprendre une session précise": {
    "title": "Resume a specific session",
    "desc": "Shows a picker of previous sessions to resume a specific one, interactively.",
    "tags": ["codex", "openai", "resume", "session"]
  },
  "Codex|Démarrage|Créer une branche de la conversation": {
    "title": "Fork the conversation",
    "desc": "Creates a new conversation starting from the current session's history, without changing the original.",
    "tags": ["codex", "openai", "fork", "session"]
  },
  "Codex|Démarrage|Lancer une revue de code": {
    "title": "Run a code review",
    "desc": "Launches Codex in code review mode on the project's current changes.",
    "tags": ["codex", "openai", "review"]
  },
  "Codex|Slash commands|Choisir un modèle en cours de session": {
    "title": "Choose a model mid-session",
    "desc": "Slash command inside an interactive session to change the model and reasoning effort without restarting.",
    "tags": ["codex", "openai", "model", "slash"]
  },
  "Codex|Options CLI|Choisir un modèle au lancement": {
    "title": "Choose a model at launch",
    "desc": "Starts directly with the given model instead of the default one (short alias: -m).",
    "tags": ["codex", "openai", "model"]
  },
  "Codex|Options CLI|Régler le bac à sable (sandbox)": {
    "title": "Set the sandbox level",
    "desc": "Allows Codex to write inside the working folder but nowhere else on the machine — read-only and danger-full-access are the other two available levels (short alias: -s).",
    "tags": ["codex", "openai", "sandbox", "security"]
  },
  "Codex|Options CLI|Régler la politique d'approbation": {
    "title": "Set the approval policy",
    "desc": "Codex only asks for confirmation when a risky action justifies it — untrusted and never are the other two available policies (short alias: -a).",
    "tags": ["codex", "openai", "permissions", "approval"]
  },
  "Codex|Options CLI|Combiner sandbox et approbation": {
    "title": "Combine sandbox and approval",
    "desc": "A typical combination for supervised automation: Codex can write inside the project, but asks for confirmation on truly risky actions.",
    "tags": ["codex", "openai", "sandbox", "approval"]
  },
  "Codex|Options CLI|Tout autoriser sans confirmation (dangereux)": {
    "title": "Allow everything with no confirmation (dangerous)",
    "desc": "⚠️ Disables every safety check (sandbox + confirmations, alias --yolo). Reserved for an isolated/disposable environment (container, CI) — never on a machine with sensitive data.",
    "tags": ["codex", "openai", "danger", "yolo"]
  },
  "Codex|Options CLI|Changer de dossier de travail": {
    "title": "Change the working directory",
    "desc": "Launches Codex as if the command had been run from this folder, without having to move there yourself (short alias: -C).",
    "tags": ["codex", "openai", "folder"]
  },
  "Codex|Options CLI|Autoriser l'écriture dans un dossier supplémentaire": {
    "title": "Allow writing to an extra folder",
    "desc": "Extends write access to a folder outside the current project (repeatable to add several).",
    "tags": ["codex", "openai", "permissions", "folder"]
  },
  "Codex|Options CLI|Joindre une image": {
    "title": "Attach an image",
    "desc": "Adds one or more images as context for the request (screenshots, mockups…), short alias: -i.",
    "tags": ["codex", "openai", "image", "context"]
  },
  "Codex|Options CLI|Utiliser un modèle local": {
    "title": "Use a local model",
    "desc": "Uses a model running locally (via LM Studio or Ollama) instead of the OpenAI API.",
    "tags": ["codex", "openai", "local", "ollama", "lmstudio"]
  },
  "Codex|Authentification|Se connecter": {
    "title": "Log in",
    "desc": "Authenticates Codex, with a choice between signing in with ChatGPT or using an API key.",
    "tags": ["codex", "openai", "login", "auth"]
  },
  "Codex|Authentification|Se connecter avec une clé API": {
    "title": "Log in with an API key",
    "desc": "Authenticates Codex by reading an API key from standard input, without going through a ChatGPT account.",
    "tags": ["codex", "openai", "login", "api key"]
  },
  "Codex|Authentification|Vérifier le statut de connexion": {
    "title": "Check login status",
    "desc": "Shows whether Codex is currently authenticated.",
    "tags": ["codex", "openai", "login", "status"]
  },
  "Codex|Authentification|Se déconnecter": {
    "title": "Log out",
    "desc": "Removes locally stored credentials.",
    "tags": ["codex", "openai", "logout", "auth"]
  },
  "Codex|MCP & config|Gérer les serveurs MCP": {
    "title": "Manage MCP servers",
    "desc": "Lists and manages the MCP servers connected to Codex.",
    "tags": ["codex", "openai", "mcp"]
  },
  "Codex|MCP & config|Gérer les plugins": {
    "title": "Manage plugins",
    "desc": "Installs, lists, or removes Codex plugins.",
    "tags": ["codex", "openai", "plugin"]
  },
  "Codex|Installation & mise à jour|Diagnostiquer l'installation": {
    "title": "Diagnose the installation",
    "desc": "Generates a diagnostic report (configuration, connection, dependencies) to pinpoint what's wrong.",
    "tags": ["codex", "openai", "doctor", "diagnostic"]
  },
  "Codex|Installation & mise à jour|Vérifier les mises à jour": {
    "title": "Check for updates",
    "desc": "Checks whether a newer version of Codex CLI is available.",
    "tags": ["codex", "openai", "update"]
  },
  "Codex|Options CLI|Utiliser un profil de configuration": {
    "title": "Use a configuration profile",
    "desc": "Layers a predefined configuration profile on top of the base config, to quickly switch context (project, settings), short alias: -p.",
    "tags": ["codex", "openai", "profile", "config"]
  },
  "Codex|Options CLI|Surcharger une valeur de config à la volée": {
    "title": "Override a config value on the fly",
    "desc": "Changes a configuration value for this run only, without editing the config.toml file.",
    "tags": ["codex", "openai", "config"]
  },
  "Codex|Installation & mise à jour|Installer Codex CLI (Mac/Linux)": {
    "title": "Install Codex CLI (Mac/Linux)",
    "desc": "The official install script for macOS and Linux.",
    "tags": ["codex", "openai", "install"]
  },
  "Codex|Installation & mise à jour|Installer via npm": {
    "title": "Install via npm",
    "desc": "Global install via npm — a cross-platform alternative to the install script.",
    "tags": ["codex", "openai", "install", "npm"]
  },
  "Codex|Installation & mise à jour|Installer via Homebrew (macOS)": {
    "title": "Install via Homebrew (macOS)",
    "desc": "Install via the Homebrew package manager, on macOS.",
    "tags": ["codex", "openai", "install", "homebrew"]
  },
  "VS Code|CLI (terminal)|Ouvrir VS Code ici": {
    "title": "Open VS Code here",
    "desc": "Opens VS Code directly in the current folder.",
    "tags": ["vscode", "cli", "open"]
  },
  "VS Code|CLI (terminal)|Ouvrir un fichier à une ligne précise": {
    "title": "Open a file at a specific line",
    "desc": "Opens the file positioned directly on line 42, no need to scroll afterward.",
    "tags": ["vscode", "cli", "file", "line"]
  },
  "VS Code|CLI (terminal)|Comparer deux fichiers": {
    "title": "Compare two files",
    "desc": "Opens a diff view comparing the two files side by side.",
    "tags": ["vscode", "cli", "diff", "compare"]
  },
  "VS Code|CLI (terminal)|Forcer une nouvelle fenêtre": {
    "title": "Force a new window",
    "desc": "Opens a new window instead of reusing an already-open VS Code window (alias: --new-window).",
    "tags": ["vscode", "cli", "window"]
  },
  "VS Code|CLI (terminal)|Attendre la fermeture avant de continuer": {
    "title": "Wait for the file to close before continuing",
    "desc": "The terminal waits until the file is closed before returning — useful for setting VS Code as Git's default editor (git commit).",
    "tags": ["vscode", "cli", "wait", "git"]
  },
  "VS Code|CLI (terminal)|Installer une extension en ligne de commande": {
    "title": "Install an extension from the command line",
    "desc": "Installs an extension with no graphical interface involved — handy for scripting a new machine's setup.",
    "tags": ["vscode", "cli", "extension", "install"]
  },
  "VS Code|CLI (terminal)|Lister les extensions installées": {
    "title": "List installed extensions",
    "desc": "Shows the identifier of every currently installed extension.",
    "tags": ["vscode", "cli", "extension", "list"]
  },
  "VS Code|CLI (terminal)|Désactiver temporairement les extensions": {
    "title": "Temporarily disable extensions",
    "desc": "Launches VS Code with no extension active — handy for checking whether an extension is causing a bug or a slowdown.",
    "tags": ["vscode", "cli", "extension", "diagnostic"]
  },
  "VS Code|Navigation|Ouverture rapide de fichier": {
    "title": "Quick file open",
    "desc": "Searches for and opens a file by name, no need to go through the explorer (⌘+P on Mac).",
    "tags": ["vscode", "shortcut", "navigation", "file"]
  },
  "VS Code|Navigation|Palette de commandes": {
    "title": "Command palette",
    "desc": "Searches for and runs any VS Code command/action by name (⌘+Shift+P on Mac).",
    "tags": ["vscode", "shortcut", "palette", "command"]
  },
  "VS Code|Navigation|Aller à une ligne précise": {
    "title": "Go to a specific line",
    "desc": "Jumps directly to a line number in the open file.",
    "tags": ["vscode", "shortcut", "navigation", "line"]
  },
  "VS Code|Navigation|Basculer le terminal intégré": {
    "title": "Toggle the integrated terminal",
    "desc": "Shows or hides the integrated terminal without leaving the editor.",
    "tags": ["vscode", "shortcut", "terminal"]
  },
  "VS Code|Navigation|Basculer la barre latérale": {
    "title": "Toggle the sidebar",
    "desc": "Shows or hides the file explorer to gain screen space.",
    "tags": ["vscode", "shortcut", "sidebar"]
  },
  "VS Code|Navigation|Aller à la définition": {
    "title": "Go to definition",
    "desc": "Jumps directly to the definition of the function or variable under the cursor.",
    "tags": ["vscode", "shortcut", "definition", "navigation"]
  },
  "VS Code|Navigation|Revenir en arrière après un saut": {
    "title": "Go back after a jump",
    "desc": "Returns to the previous position after jumping to a definition or a reference.",
    "tags": ["vscode", "shortcut", "navigation", "back"]
  },
  "VS Code|Édition|Sélectionner l'occurrence suivante": {
    "title": "Select the next occurrence",
    "desc": "Adds the next occurrence of the selected word to the selection, to edit several spots at once.",
    "tags": ["vscode", "shortcut", "selection", "multi-cursor"]
  },
  "VS Code|Édition|Curseurs multiples au clic": {
    "title": "Multiple cursors on click",
    "desc": "Places an extra cursor at every clicked spot, to type in the same place across several lines at once.",
    "tags": ["vscode", "shortcut", "multi-cursor"]
  },
  "VS Code|Édition|Dupliquer la ligne": {
    "title": "Duplicate the line",
    "desc": "Duplicates the current line (or selection) right below.",
    "tags": ["vscode", "shortcut", "editing", "duplicate"]
  },
  "VS Code|Édition|Déplacer une ligne": {
    "title": "Move a line",
    "desc": "Moves the current line (or selection) up or down.",
    "tags": ["vscode", "shortcut", "editing", "move"]
  },
  "VS Code|Édition|Renommer un symbole partout": {
    "title": "Rename a symbol everywhere",
    "desc": "Renames a variable or function and updates every use of it across the project.",
    "tags": ["vscode", "shortcut", "rename", "refactor"]
  },
  "VS Code|Édition|Commenter / décommenter": {
    "title": "Comment / uncomment",
    "desc": "Comments or uncomments the current line (or selection).",
    "tags": ["vscode", "shortcut", "comment"]
  },
  "VS Code|Édition|Formater le document": {
    "title": "Format the document",
    "desc": "Automatically reformats the file according to the configured rules (Prettier or equivalent).",
    "tags": ["vscode", "shortcut", "format", "prettier"]
  },
  "VS Code|Édition|Plier / déplier un bloc de code": {
    "title": "Fold / unfold a code block",
    "desc": "Collapses or expands a code block — handy for seeing the overall structure of a long file.",
    "tags": ["vscode", "shortcut", "fold", "structure"]
  },
  "VS Code|Débogage|Lancer / continuer le débogage": {
    "title": "Start / continue debugging",
    "desc": "Starts a debugging session, or continues execution until the next breakpoint.",
    "tags": ["vscode", "shortcut", "debug"]
  },
  "VS Code|Débogage|Poser un point d'arrêt": {
    "title": "Set a breakpoint",
    "desc": "Adds or removes a breakpoint on the current line.",
    "tags": ["vscode", "shortcut", "debug", "breakpoint"]
  },
  "VS Code|Débogage|Avancer sans entrer dans la fonction": {
    "title": "Step over",
    "desc": "Runs the current line without stepping into the functions it calls.",
    "tags": ["vscode", "shortcut", "debug", "step over"]
  },
  "VS Code|Débogage|Entrer dans une fonction": {
    "title": "Step into a function",
    "desc": "Runs the current line by stepping into the called function, to debug it step by step.",
    "tags": ["vscode", "shortcut", "debug", "step into"]
  },
  "VS Code|Git intégré|Ouvrir le panneau Source Control": {
    "title": "Open the Source Control panel",
    "desc": "Shows modified files, lets you stage/commit without leaving the editor or opening a terminal.",
    "tags": ["vscode", "shortcut", "git", "source control"]
  },
  "VS Code|Git intégré|Valider le commit sans la souris": {
    "title": "Commit without the mouse",
    "desc": "From the Source Control panel's commit message field, commits without having to click the button.",
    "tags": ["vscode", "shortcut", "git", "commit"]
  },
  "VS Code|Configuration|Ouvrir les paramètres (interface)": {
    "title": "Open settings (UI)",
    "desc": "Opens the graphical settings interface.",
    "tags": ["vscode", "shortcut", "settings"]
  },
  "VS Code|Configuration|Éditer settings.json directement": {
    "title": "Edit settings.json directly",
    "desc": "Command to search for in the palette (Ctrl+Shift+P) — opens the JSON configuration file directly instead of the graphical interface, handy for pasting a config found online.",
    "tags": ["vscode", "palette", "settings.json", "config"]
  },
  "VS Code|Configuration|Personnaliser les raccourcis clavier": {
    "title": "Customize keyboard shortcuts",
    "desc": "Command to search for in the palette (Ctrl+Shift+P) — directly edits the keybindings.json file to change or add shortcuts.",
    "tags": ["vscode", "palette", "keybindings", "shortcuts"]
  },
  "VS Code|Configuration|Recommander des extensions pour un projet": {
    "title": "Recommend extensions for a project",
    "desc": "A file listing the extensions recommended for this project — VS Code automatically offers to install them on open, handy for teams.",
    "tags": ["vscode", "extension", "team", "config"]
  },
  "Cursor|Éditeur : raccourcis IA|Édition en ligne (inline edit)": {
    "title": "Inline edit",
    "desc": "Opens a field to describe a change directly in the code, at the cursor position or on the selection (⌘+K on Mac).",
    "tags": ["cursor", "shortcut", "inline edit", "ai"]
  },
  "Cursor|Éditeur : raccourcis IA|Ouvrir le chat / envoyer la sélection": {
    "title": "Open chat / send the selection",
    "desc": "Opens the chat panel with the open file as context — if text is selected, sends it directly into a new chat (⌘+L on Mac).",
    "tags": ["cursor", "shortcut", "chat", "ai"]
  },
  "Cursor|Éditeur : raccourcis IA|Ajouter la sélection au chat en cours": {
    "title": "Add the selection to the current chat",
    "desc": "Sends the selected snippet into the already-open chat, as extra context for the next request.",
    "tags": ["cursor", "shortcut", "chat", "context"]
  },
  "Cursor|Éditeur : raccourcis IA|Basculer la disposition Agent": {
    "title": "Toggle the Agent layout",
    "desc": "Shows the agent in a full dedicated layout, handy for following larger multi-file tasks.",
    "tags": ["cursor", "shortcut", "agent", "layout"]
  },
  "Cursor|Éditeur : raccourcis IA|Accepter toutes les modifications proposées": {
    "title": "Accept all proposed changes",
    "desc": "Approves every change suggested by the agent in one go, without going through them file by file.",
    "tags": ["cursor", "shortcut", "accept", "diff"]
  },
  "Cursor|Éditeur : raccourcis IA|Rejeter toutes les modifications proposées": {
    "title": "Reject all proposed changes",
    "desc": "Cancels every change suggested by the agent in one go.",
    "tags": ["cursor", "shortcut", "reject", "diff"]
  },
  "Cursor|Éditeur : raccourcis IA|Changer de modèle IA": {
    "title": "Switch AI model",
    "desc": "Cycles through the available AI models without opening a dropdown menu.",
    "tags": ["cursor", "shortcut", "model"]
  },
  "Cursor|Éditeur : raccourcis IA|Le menu des modes": {
    "title": "The mode menu",
    "desc": "Switches between Agent, Plan, and Ask (read-only) modes.",
    "tags": ["cursor", "shortcut", "mode", "agent"]
  },
  "Cursor|Éditeur : raccourcis IA|Accepter la suggestion Tab": {
    "title": "Accept the Tab suggestion",
    "desc": "Approves the autocomplete suggestion offered by Cursor Tab.",
    "tags": ["cursor", "shortcut", "tab", "autocomplete"]
  },
  "Cursor|Éditeur : raccourcis IA|Accepter seulement le mot suivant": {
    "title": "Accept only the next word",
    "desc": "Accepts only the next word of a Tab suggestion, rather than the whole line.",
    "tags": ["cursor", "shortcut", "tab", "autocomplete"]
  },
  "Cursor|Éditeur : raccourcis IA|Générer une commande dans le terminal": {
    "title": "Generate a terminal command",
    "desc": "From the integrated terminal, opens a bar to describe in natural language the shell command wanted, which Cursor generates for you.",
    "tags": ["cursor", "shortcut", "terminal", "generation"]
  },
  "Cursor|Éditeur : raccourcis IA|Poser une question rapide sans ouvrir le chat": {
    "title": "Ask a quick question without opening chat",
    "desc": "From inline edit (Ctrl+K), asks a one-off question without modifying the code or opening the full chat panel.",
    "tags": ["cursor", "shortcut", "question", "inline"]
  },
  "Cursor|Éditeur : raccourcis IA|Activer le mode vocal": {
    "title": "Enable voice mode",
    "desc": "Dictates a request out loud instead of typing it.",
    "tags": ["cursor", "shortcut", "voice", "dictation"]
  },
  "Cursor|CLI (agent)|Lancer l'agent": {
    "title": "Launch the agent",
    "desc": "Opens an interactive Cursor agent session directly in the terminal, outside the editor.",
    "tags": ["cursor", "cli", "agent", "start"]
  },
  "Cursor|CLI (agent)|Démarrer avec une tâche précise": {
    "title": "Start with a specific task",
    "desc": "Launches the agent directly with this task already given, with no need to retype it once the session is open.",
    "tags": ["cursor", "cli", "agent", "prompt"]
  },
  "Cursor|CLI (agent)|Exécution non-interactive": {
    "title": "Non-interactive run",
    "desc": "'Print' mode: runs the task, shows the result, then quits — with no session left open to manage.",
    "tags": ["cursor", "cli", "print", "script"]
  },
  "Cursor|CLI (agent)|Choisir un modèle": {
    "title": "Choose a model",
    "desc": "Specifies which model to use for this run, instead of the default one.",
    "tags": ["cursor", "cli", "model"]
  },
  "Cursor|CLI (agent)|Mode Plan": {
    "title": "Plan mode",
    "desc": "Forces the agent to propose a detailed plan before any change, to be approved before execution.",
    "tags": ["cursor", "cli", "plan", "permissions"]
  },
  "Cursor|CLI (agent)|Mode Ask (lecture seule)": {
    "title": "Ask mode (read-only)",
    "desc": "The agent answers questions about the project without ever modifying a single file.",
    "tags": ["cursor", "cli", "ask", "read-only"]
  },
  "Cursor|CLI (agent)|Régler le bac à sable": {
    "title": "Set the sandbox",
    "desc": "Enables a sandbox limiting what the agent can touch on the system, for a more cautious run.",
    "tags": ["cursor", "cli", "sandbox", "security"]
  },
  "Cursor|CLI (agent)|Reprendre la dernière session": {
    "title": "Resume the last session",
    "desc": "Resumes the most recent conversation with the agent.",
    "tags": ["cursor", "cli", "resume", "session"]
  },
  "Cursor|CLI (agent)|Lister les sessions précédentes": {
    "title": "List previous sessions",
    "desc": "Shows the history of past sessions with the agent.",
    "tags": ["cursor", "cli", "list", "session"]
  },
  "Cursor|CLI (agent)|Continuer la session active": {
    "title": "Continue the active session",
    "desc": "Continues the current session without starting over — handy in a script that chains several steps.",
    "tags": ["cursor", "cli", "continue", "session"]
  }
};
