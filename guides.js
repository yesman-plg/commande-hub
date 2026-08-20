// ============================================================
// Command Hub — fichier de formation
// ============================================================
// Contrairement à commands.js (des commandes à copier), ce fichier
// contient des explications : le POURQUOI et le QUAND, pour quelqu'un
// qui découvre. Chaque entrée :
//   category : thème (devient un onglet de filtre dans l'app)
//   title    : titre de la fiche
//   level    : "🟢 Débutant", "🟡 Intermédiaire" ou "🔴 Avancé" (badge)
//   summary  : résumé en 1-2 phrases, toujours visible
//   content  : tableau de { heading, text }. text peut contenir des
//              \n\n pour séparer les paragraphes, et des \n simples
//              pour des lignes de commande/étapes.
// ============================================================

const GUIDES = [
  // --- Bases du terminal ---------------------------------------
  {
    category: "Bases du terminal",
    title: "Comment lire une commande",
    level: "🟢 Débutant",
    summary: "Avant de copier-coller n'importe quoi, comprends ce que veut dire chaque partie d'une commande.",
    content: [
      {
        heading: "Anatomie d'une commande",
        text: "Une commande a en général cette forme :\n\ncommande --option valeur argument\n\n• La commande (ex: git, npm, ls) dit quel programme lancer.\n• Les options (ou \"flags\") commencent par - ou -- et modifient le comportement. Ex: -r pour \"récursif\", --force pour forcer.\n• Un argument est une valeur donnée à la commande, souvent un nom de fichier ou de dossier.\n\nExemple : rm -r mon-dossier\n→ rm = supprimer, -r = aussi le contenu à l'intérieur, mon-dossier = ce qu'on supprime."
      },
      {
        heading: "Les < > dans ce hub",
        text: "Dans les commandes de ce hub, tu verras parfois <nom-du-package> ou <PID>. Les chevrons ne se tapent JAMAIS : ils veulent dire \"remplace ça par ta propre valeur\".\n\nEx: adb uninstall <nom.du.package> devient adb uninstall com.exemple.monapp"
      },
      {
        heading: "sudo, c'est quoi ?",
        text: "sudo veut dire \"exécute cette commande en tant qu'administrateur\". Le système demande ton mot de passe et autorise des actions normalement bloquées (installer un logiciel, modifier un fichier système…).\n\nRègle d'or : ne tape jamais sudo devant une commande que tu ne comprends pas, surtout si elle contient rm."
      },
      {
        heading: "\"command not found\", que faire ?",
        text: "Ça veut dire que le shell n'a trouvé aucun programme portant ce nom (faute de frappe, ou logiciel pas installé, ou pas dans le PATH — voir la fiche dédiée aux variables d'environnement).\n\nRéflexe : vérifie l'orthographe, puis demande-toi \"ce logiciel est-il vraiment installé ?\" avec which nom-de-la-commande ou en cherchant comment l'installer (souvent via apt)."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "Se déplacer dans les dossiers",
    level: "🟢 Débutant",
    summary: "pwd, cd, ls : les commandes que tu vas taper des dizaines de fois par jour.",
    content: [
      {
        heading: "Où je suis ?",
        text: "pwd (Print Working Directory) affiche le dossier dans lequel tu te trouves actuellement dans le terminal."
      },
      {
        heading: "Se déplacer",
        text: "cd nom-du-dossier entre dans un dossier.\ncd .. remonte d'un niveau.\ncd (tout seul) ou cd ~ te ramène dans ton dossier personnel.\ncd - te ramène au dossier précédent — pratique pour faire des allers-retours."
      },
      {
        heading: "Voir ce qu'il y a",
        text: "ls liste le contenu du dossier courant.\nls -la l'affiche en détail (permissions, taille, date) et montre aussi les fichiers cachés (ceux qui commencent par un point, comme .bashrc)."
      },
      {
        heading: "Chemin relatif vs absolu",
        text: "Un chemin absolu commence par / et part de la racine du système (ex: /home/evan/cmd-hub). Un chemin relatif part d'où tu es actuellement (ex: cmd-hub/index.html si tu es déjà dans /home/evan). Le symbole ~ est un raccourci vers ton dossier personnel."
      },
      {
        heading: "L'autocomplétion (Tab)",
        text: "Tape les premières lettres d'un nom de fichier/dossier puis appuie sur Tab : le terminal le complète automatiquement. Si plusieurs fichiers commencent pareil, appuie deux fois sur Tab pour voir la liste des possibilités.\n\nRéflexe à prendre tout de suite : ça évite les fautes de frappe et fait gagner énormément de temps."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "Les permissions de fichiers en détail",
    level: "🟡 Intermédiaire",
    summary: "Décoder -rwxr-xr-- et comprendre ce que chmod 755 veut dire réellement.",
    content: [
      {
        heading: "Trois types de droits",
        text: "r (read) = peut lire le contenu.\nw (write) = peut modifier/supprimer.\nx (execute) = peut exécuter le fichier comme un programme — ou, pour un DOSSIER, peut \"entrer\" dedans (cd)."
      },
      {
        heading: "Trois profils concernés",
        text: "Chaque fichier a 3 groupes de droits séparés, dans cet ordre : le propriétaire (u = user), le groupe (g = group) auquel appartient le fichier, et tous les autres (o = others)."
      },
      {
        heading: "Décoder une ligne de ls -la",
        text: "Exemple : -rwxr-xr-- 1 evan evan 220 ... script.sh\n\n• Le tout premier caractère (-) dit si c'est un fichier (-) ou un dossier (d).\n• rwx → le propriétaire (evan) peut tout faire.\n• r-x → le groupe peut lire et exécuter, pas modifier.\n• r-- → tous les autres peuvent seulement lire."
      },
      {
        heading: "Le format en chiffres (chmod 755)",
        text: "Chaque droit a une valeur : r=4, w=2, x=1. On additionne par profil.\n\nrwx = 4+2+1 = 7\nr-x = 4+0+1 = 5\nr-- = 4+0+0 = 4\n\nchmod 755 fichier donne donc : propriétaire=7 (rwx), groupe=5 (r-x), autres=5 (r-x). C'est la combinaison typique pour un script qu'on veut pouvoir exécuter."
      },
      {
        heading: "Erreur fréquente",
        text: "./script.sh: Permission denied → le fichier n'a pas le droit x. Corrige avec chmod +x script.sh (ajoute juste le droit d'exécution, sans toucher au reste)."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "Variables d'environnement et PATH",
    level: "🟡 Intermédiaire",
    summary: "Pourquoi taper juste 'code' ou 'git' suffit à lancer le bon programme, où que tu sois.",
    content: [
      {
        heading: "C'est quoi une variable d'environnement",
        text: "Une paire nom=valeur disponible pour tous les programmes lancés depuis ce terminal — un peu comme des réglages ambiants. Exemple : $HOME contient le chemin de ton dossier personnel."
      },
      {
        heading: "PATH, la liste des endroits où chercher un programme",
        text: "Quand tu tapes une commande (ex: git), le shell ne connaît pas son emplacement exact par magie : il regarde, DANS L'ORDRE, chaque dossier listé dans la variable PATH, jusqu'à trouver un programme portant ce nom. S'il n'en trouve aucun → \"command not found\".\n\nwhich nom-de-la-commande te dit exactement quel fichier est utilisé, si plusieurs versions traînent sur le système."
      },
      {
        heading: "Variable temporaire vs permanente",
        text: "export MA_VARIABLE=valeur ne vaut que pour la session de terminal actuelle — ferme le terminal, elle disparaît. Pour la rendre permanente, ajoute la ligne export MA_VARIABLE=valeur dans ~/.bashrc (elle sera relue à chaque nouveau terminal)."
      },
      {
        heading: "Exemple concret",
        text: "Quand tu installes un logiciel comme VS Code ou Android Studio, son installeur ajoute automatiquement son propre dossier au PATH. C'est pour ça que taper code . fonctionne directement dans n'importe quel dossier, sans donner le chemin complet vers l'exécutable."
      },
      {
        heading: "Les fichiers .env : centraliser la config sans la coder en dur",
        text: "Un fichier .env à la racine d'un projet liste des variables (ex: API_URL=https://exemple.com) que certains outils (Node, Expo, Docker…) chargent automatiquement au démarrage. Ça permet de changer la config selon l'environnement (dev/prod) sans toucher au code, et surtout de garder les secrets HORS du code source.\n\nRègle absolue : un fichier .env doit TOUJOURS être listé dans .gitignore. Le committer par erreur revient à publier tes secrets dans l'historique Git, potentiellement pour toujours."
      },
      {
        heading: "Piège spécifique à Expo/React Native : EXPO_PUBLIC_",
        text: "Dans un projet Expo, seules les variables préfixées par EXPO_PUBLIC_ (ex: EXPO_PUBLIC_API_URL) sont intégrées dans le bundle JS envoyé sur le téléphone — les autres variables du .env restent invisibles côté app, utilisables seulement pendant le build.\n\n\"Public\" ici veut dire littéralement EMBARQUÉE DANS L'APP, donc potentiellement lisible par n'importe qui qui décompile le fichier installé. Ne mets JAMAIS un vrai secret (mot de passe, clé privée, token d'accès complet) derrière un EXPO_PUBLIC_ — uniquement des informations qui peuvent sans risque être publiques, comme une URL d'API ou une clé Firebase déjà conçue pour être publique."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "npm & npx, et package.json en détail",
    level: "🟡 Intermédiaire",
    summary: "La différence entre npm et npx (que tu utilises dans presque toutes les commandes Expo), et comment lire un package.json.",
    content: [
      {
        heading: "npm vs npx, la confusion la plus fréquente",
        text: "npm (Node Package Manager) sert à INSTALLER des paquets dans ton projet (npm install).\n\nnpx sert à EXÉCUTER un paquet — en le téléchargeant temporairement s'il n'est pas déjà présent, sans l'ajouter durablement au projet. C'est pour ça que presque toutes les commandes Expo de ce hub commencent par npx expo ... plutôt que par une installation globale : ça garantit d'utiliser la version d'Expo CLI attendue par CE projet précis, sans rien installer de façon permanente sur ta machine."
      },
      {
        heading: "Anatomie de package.json",
        text: "dependencies : les librairies nécessaires pour que l'app FONCTIONNE une fois publiée (ex: react, expo).\n\ndevDependencies : des outils utiles seulement PENDANT le développement (ex: un linter, des types TypeScript) — ils ne sont pas inclus dans l'app finale distribuée aux utilisateurs.\n\nscripts : des raccourcis de commande personnalisés, lancés avec npm run nom-du-script (certains scripts spéciaux comme start se lancent directement avec npm start, sans \"run\")."
      },
      {
        heading: "Lire un numéro de version (semver)",
        text: "Un numéro de version suit le format MAJEUR.MINEUR.CORRECTIF (ex: 4.2.1 → changements cassants seulement sur le premier chiffre, en théorie). Dans package.json, les symboles placés devant précisent ce qu'un npm install a le droit d'installer automatiquement :\n\n^4.2.1 → accepte les mises à jour MINEURES et CORRECTIFS (jusqu'à 4.x.x), mais pas 5.0.0.\n~4.2.1 → accepte seulement les CORRECTIFS (4.2.x), plus prudent.\nAucun symbole (4.2.1 tout seul) → version figée exactement, rien d'autre n'est installé automatiquement."
      },
      {
        heading: "Pourquoi npx expo install plutôt que npm install",
        text: "npm install seul installe la DERNIÈRE version publiée d'un paquet, sans se soucier de compatibilité. npx expo install choisit spécifiquement la version COMPATIBLE avec le SDK Expo utilisé par ton projet — une nuance qui évite une bonne partie des plantages après installation d'une librairie (voir la fiche \"Pourquoi ça plante après avoir installé une lib\" dans Expo / React Native)."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "Comprendre les gestionnaires de paquets",
    level: "🟢 Débutant",
    summary: "apt, npm, Gradle : trois outils différents qui résolvent le même problème dans trois écosystèmes différents.",
    content: [
      {
        heading: "Le même problème, résolu différemment",
        text: "Un gestionnaire de paquets automatise l'installation, la mise à jour et la suppression de logiciels/librairies, avec leurs dépendances. apt gère les LOGICIELS DU SYSTÈME Linux. npm (ou yarn) gère les LIBRAIRIES JAVASCRIPT d'un projet. Gradle gère les LIBRAIRIES JAVA/KOTLIN d'un projet Android."
      },
      {
        heading: "Où sont installés les paquets",
        text: "apt install installe pour TOUT le système, dans des dossiers partagés (/usr, /etc…) — un seul exemplaire pour tous tes projets.\n\nnpm install installe dans un dossier node_modules/ propre à CE projet — chaque projet a sa propre copie, isolée des autres. C'est pour ça qu'on peut supprimer node_modules/ sans risque : npm install le régénère entièrement.\n\nGradle télécharge dans un cache partagé (~/.gradle) puis le relie au projet."
      },
      {
        heading: "package.json / build.gradle : la liste de courses",
        text: "Ces fichiers listent les dépendances voulues et leurs versions (ex: \"expo\": \"~50.0.0\"). Un fichier \"lock\" associé (package-lock.json, ou son équivalent Gradle) fige les versions EXACTES réellement utilisées, pour que le projet installe rigoureusement la même chose chez toi, chez un collègue, ou sur un serveur de build."
      }
    ]
  },
  {
    category: "Bases du terminal",
    title: "Enchaîner des commandes (pipes et redirections)",
    level: "🟡 Intermédiaire",
    summary: "|, >, && : les symboles qui transforment des commandes isolées en petits scripts puissants.",
    content: [
      {
        heading: "Le pipe | : brancher une commande sur une autre",
        text: "| envoie la SORTIE de la commande de gauche comme ENTRÉE de la commande de droite.\n\nExemple : ps aux | grep node\n→ ps aux liste tous les processus, grep node ne garde que les lignes contenant \"node\". Résultat : une liste filtrée, sans avoir à tout lire à l'oeil."
      },
      {
        heading: "> et >> : rediriger vers un fichier",
        text: "> envoie le résultat dans un fichier, en ÉCRASANT son contenu existant.\n>> fait pareil mais AJOUTE à la fin, sans rien effacer.\n\nExemple : ls -la > liste.txt sauvegarde le résultat de ls dans un fichier au lieu de l'afficher à l'écran."
      },
      {
        heading: "&& : exécuter la suite seulement si ça a réussi",
        text: "commande1 && commande2 exécute la deuxième SEULEMENT SI la première a réussi (code de sortie 0).\n\nExemple : cd mon-projet && npm install\n→ Si le dossier mon-projet n'existe pas, cd échoue et npm install n'est jamais lancé au mauvais endroit. C'est plus sûr que de les taper séparément."
      },
      {
        heading: "; : exécuter l'une après l'autre, sans condition",
        text: "commande1 ; commande2 exécute les deux à la suite, peu importe si la première a réussi ou échoué. À utiliser seulement quand la deuxième commande n'a pas besoin que la première ait fonctionné."
      }
    ]
  },

  // --- Programmation ---------------------------------------
  {
    category: "Programmation",
    title: "JSON, le format universel",
    level: "🟢 Débutant",
    summary: "La structure de données que tu croises partout : réponses d'API, fichiers de config, WebDAV, Firebase…",
    content: [
      {
        heading: "C'est quoi JSON",
        text: "JSON (JavaScript Object Notation) est né en JavaScript, mais il est aujourd'hui utilisé par pratiquement TOUS les langages (Kotlin, Python, Java…) car il est simple à lire pour un humain et facile à analyser pour une machine. C'est le format le plus courant pour échanger des données entre une app et un serveur."
      },
      {
        heading: "À quoi ça ressemble",
        text: "{\n  \"nom\": \"Evan\",\n  \"age\": 30,\n  \"projets\": [\"KDriveMusic\", \"ActiveLog\"],\n  \"actif\": true\n}\n\nDes paires clé/valeur entre accolades { }, où une valeur peut elle-même contenir un autre objet ou une liste — c'est cette imbrication qui permet de représenter des données complexes."
      },
      {
        heading: "Les types de valeurs possibles",
        text: "\"texte\" entre guillemets doubles (jamais simples en JSON strict), un nombre (42, 3.14), un booléen (true/false), null (l'absence de valeur), un objet {...}, ou un tableau [...].\n\nPiège fréquent : une virgule après le TOUT DERNIER élément d'un objet ou tableau est une erreur de syntaxe en JSON (contrairement à JS) — ça fait planter le parsing."
      },
      {
        heading: "Pourquoi c'est partout",
        text: "JSON étant indépendant de tout langage, un serveur écrit en Kotlin peut envoyer une réponse JSON qu'une app Expo/JavaScript comprend nativement avec JSON.parse(), et inversement avec JSON.stringify(). C'est ce langage commun qui permet à des technologies complètement différentes de se parler."
      }
    ]
  },
  {
    category: "Programmation",
    title: "Requêtes HTTP et API REST",
    level: "🟡 Intermédiaire",
    summary: "Comment une app parle à un serveur : méthodes, codes de statut, et le principe REST — la base de WebDAV comme de Firebase.",
    content: [
      {
        heading: "Client et serveur, qui demande quoi",
        text: "Ton app (le \"client\") envoie une REQUÊTE à une adresse précise (une URL), et le serveur renvoie une RÉPONSE. HTTP est le protocole — les règles du jeu — qui régit la forme de cet échange."
      },
      {
        heading: "Les méthodes HTTP principales",
        text: "GET → lire/récupérer une donnée, sans rien modifier (ex: récupérer la liste de tes morceaux).\nPOST → créer une nouvelle donnée (ex: ajouter une nouvelle séance de sport).\nPUT / PATCH → modifier une donnée existante (PUT remplace tout, PATCH modifie juste certains champs).\nDELETE → supprimer une donnée."
      },
      {
        heading: "Les codes de statut à savoir lire",
        text: "200 OK → tout s'est bien passé.\n201 Created → une ressource a bien été créée (typique après un POST).\n400 Bad Request → ta requête est mal formée (souvent une erreur côté client).\n401 Unauthorized → tu n'es pas authentifié (identifiants manquants/invalides).\n403 Forbidden → tu ES authentifié, mais tu n'as pas le droit d'accéder à ça.\n404 Not Found → l'URL demandée n'existe pas.\n500 Internal Server Error → le serveur a planté de son côté, pas toi.\n\nRéflexe : avant de chercher un bug dans ton code, regarde TOUJOURS le code de statut retourné — il dit souvent directement où chercher."
      },
      {
        heading: "REST, le principe général",
        text: "Une API dite \"REST\" organise ses URL autour de RESSOURCES (ex: /morceaux, /morceaux/42), et laisse la méthode HTTP dire ce qu'on veut en faire. Résultat : GET /morceaux/42 lit le morceau 42, DELETE /morceaux/42 le supprime — même URL, action différente selon le verbe."
      },
      {
        heading: "Exemple concret : WebDAV (comme dans KDriveMusic)",
        text: "WebDAV est une EXTENSION de HTTP pensée pour gérer des fichiers à distance : PROPFIND pour lister le contenu d'un dossier, GET pour télécharger un fichier, PUT pour en envoyer un, DELETE pour en supprimer un. Comprendre HTTP en général aide directement à comprendre pourquoi WebDAV fonctionne comme il fonctionne."
      }
    ]
  },
  {
    category: "Programmation",
    title: "Async/await & Promises en JavaScript",
    level: "🟡 Intermédiaire",
    summary: "Pourquoi certaines lignes de code JS semblent 's'exécuter plus tard', et comment ne pas s'y perdre.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Une requête réseau (appeler une API, lire un fichier) prend du temps — parfois plusieurs secondes. Si JavaScript attendait bêtement la réponse en bloquant tout, l'app entière (y compris l'affichage) serait figée pendant ce temps. Les opérations \"asynchrones\" permettent de lancer cette attente SANS bloquer le reste de l'app."
      },
      {
        heading: "La Promise : une promesse de valeur future",
        text: "Une Promise représente une valeur qui n'est PAS encore disponible, mais qui le sera (ou échouera) plus tard. Elle a 3 états possibles : en attente (pending), réussie (fulfilled, avec une valeur), ou échouée (rejected, avec une erreur)."
      },
      {
        heading: "async/await, la syntaxe qui simplifie tout",
        text: "Une fonction déclarée async peut utiliser le mot-clé await devant un appel qui retourne une Promise — le code \"met en pause\" cette fonction précise (et seulement elle) jusqu'à ce que la Promise se résolve, puis continue avec la valeur obtenue. Ça permet d'écrire du code asynchrone qui SE LIT comme du code normal, séquentiel, plutôt qu'en cascade de callbacks.\n\nasync function chargerDonnees() {\n  const reponse = await fetch(\"https://api.exemple.com/data\");\n  const donnees = await reponse.json();\n  return donnees;\n}"
      },
      {
        heading: "Gérer les erreurs : try/catch",
        text: "Un await qui échoue (Promise rejetée, ex: pas de réseau) lève une erreur qu'il faut attraper avec try/catch, sinon l'app peut planter ou l'erreur passer inaperçue silencieusement :\n\ntry {\n  const donnees = await chargerDonnees();\n} catch (erreur) {\n  console.log(\"Échec du chargement :\", erreur);\n}"
      },
      {
        heading: "Piège fréquent : oublier le await",
        text: "Appeler une fonction async SANS await ne donne pas le résultat final, mais la Promise elle-même (non résolue) — une erreur très courante qui se traduit par un objet bizarre affiché au lieu de la vraie donnée attendue."
      }
    ]
  },
  {
    category: "Programmation",
    title: "Firebase, les bases",
    level: "🟡 Intermédiaire",
    summary: "Authentification, Firestore, règles de sécurité : le strict nécessaire pour s'y retrouver dans un backend Firebase.",
    content: [
      {
        heading: "C'est quoi Firebase",
        text: "Une plateforme backend \"clé en main\" fournie par Google : base de données, authentification des utilisateurs, stockage de fichiers, notifications… Elle évite d'avoir à écrire et héberger soi-même un serveur pour ces besoins courants — l'app communique directement avec les services Firebase via leur SDK."
      },
      {
        heading: "Firestore : collections et documents",
        text: "Firestore (la base de données la plus utilisée de Firebase) organise les données en COLLECTIONS (ex: \"utilisateurs\", \"seances\"), qui contiennent des DOCUMENTS (chacun un peu comme un objet JSON, avec un identifiant unique). Un document peut lui-même contenir des sous-collections — une hiérarchie plutôt que des tables reliées comme en SQL classique."
      },
      {
        heading: "Authentication",
        text: "Le service qui gère les comptes utilisateurs (email/mot de passe, Google, etc.) sans que tu aies à gérer toi-même le stockage sécurisé des mots de passe. Une fois connecté, chaque utilisateur reçoit un identifiant unique (uid) réutilisé pour savoir à QUI appartient chaque donnée dans Firestore."
      },
      {
        heading: "Règles de sécurité (Security Rules)",
        text: "Par défaut, sans règles bien configurées, N'IMPORTE QUI connaissant l'adresse de ta base peut potentiellement lire ou écrire dedans — Firebase n'a pas de \"serveur\" à toi qui filtre les requêtes, les règles de sécurité SONT le seul rempart. Elles se définissent dans un fichier séparé (ex: allow read, write: if request.auth.uid == userId;) et sont vérifiées côté Firebase à chaque requête, jamais côté app (où elles seraient contournables)."
      }
    ]
  },

  // --- Git ---------------------------------------
  {
    category: "Git",
    title: "Git, à quoi ça sert vraiment ?",
    level: "🟢 Débutant",
    summary: "Comprendre le concept avant les commandes : Git garde un historique de chaque version de ton code, d'abord et avant tout en local.",
    content: [
      {
        heading: "Le problème que Git résout",
        text: "Sans Git, pour garder un historique, tu ferais un truc du genre projet_v1, projet_v2_final, projet_v2_final_VRAIMENT_final.zip. Git fait ça proprement : à chaque \"commit\", il prend une photo de l'état de ton code, avec un message qui explique ce qui a changé. Tu peux revenir à n'importe quelle photo plus tard."
      },
      {
        heading: "Un commit, précisément",
        text: "Un commit est une sauvegarde 100% LOCALE, horodatée, avec un message qui explique ce qui a changé. Elle ne se trouve QUE sur ta machine, dans le dossier caché .git/ de ton projet — personne d'autre ne la voit tant que tu ne l'as pas explicitement envoyée quelque part.\n\nC'est une nuance essentielle : committer n'est PAS partager. Tu peux committer 50 fois dans la journée sans que ça touche à quoi que ce soit d'autre que ton propre disque dur, même sans connexion internet."
      },
      {
        heading: "Le dépôt (repo) local vs le remote",
        text: "Le dépôt local est l'historique complet de commits stocké uniquement sur ta machine. Le remote (ex: GitHub) est une COPIE de cet historique hébergée sur un serveur ailleurs.\n\ngit push copie tes commits locaux VERS le remote. git pull rapatrie les commits du remote VERS ton dépôt local. Tant que tu n'as pas fait push, un commit reste une sauvegarde strictement locale — même si un remote est configuré sur le projet."
      },
      {
        heading: "Pourquoi committer souvent, même sans push",
        text: "Comme le commit est local et ne coûte rien, il ne faut pas hésiter à committer souvent : ça donne des points de restauration fins auxquels revenir. Une pratique courante : committer plusieurs fois dans l'après-midi au fil du travail, et ne push qu'une fois en fin de journée, une fois que tout est stable et testé."
      }
    ]
  },
  {
    category: "Git",
    title: "Local vs distant : ce qui se passe vraiment à chaque étape",
    level: "🟢 Débutant",
    summary: "La confusion n°1 des débutants : croire que 'commit' envoie le code sur GitHub. Ce guide clarifie où vit chaque étape.",
    content: [
      {
        heading: "Les 3 zones sur TA machine",
        text: "1. Working Directory : tes fichiers tels que tu les vois et les édites dans ton éditeur.\n2. Staging Area (l'index) : une zone d'attente où tu places ce que tu veux inclure dans le prochain commit (via git add).\n3. Repository local : l'historique complet des commits déjà enregistrés, stocké dans le dossier .git/ de ton projet."
      },
      {
        heading: "Et le remote, une 4e zone — mais ailleurs",
        text: "Le remote (GitHub, GitLab…) est une copie de ce repository, mais hébergée sur un serveur, potentiellement à l'autre bout du monde. Rien n'y arrive tant que tu n'exécutes pas explicitement git push."
      },
      {
        heading: "Tableau récapitulatif",
        text: "git add          : Working Directory → Staging          (reste local)\ngit commit       : Staging → Repository local              (reste local)\ngit push         : Repository local → Remote                (part sur internet)\ngit pull / fetch : Remote → Repository local (+ Working Dir) (vient d'internet)"
      },
      {
        heading: "Ce que ça implique concrètement",
        text: "• Si ton PC crashe avant un push, tu perds les commits non pushés — ils n'ont jamais existé ailleurs que sur ce disque.\n• Si Internet est coupé, tu peux quand même committer (aucune étape ne touche le réseau) mais pas push/pull.\n• C'est pour ça qu'un commit régulier + un push en fin de session est une bonne habitude : le commit te protège des erreurs de manipulation, le push te protège de la perte de la machine."
      }
    ]
  },
  {
    category: "Git",
    title: "Le workflow du quotidien",
    level: "🟢 Débutant",
    summary: "La suite de commandes que tu vas taper presque à chaque fois : status → diff → add → commit → push.",
    content: [
      { heading: "Étape 1 — git status", text: "Toujours la première commande à taper. Elle dit ce qui a changé depuis ton dernier commit : fichiers modifiés, nouveaux fichiers non suivis, etc. Ça évite les mauvaises surprises." },
      { heading: "Étape 2 (optionnelle mais utile) — git diff", text: "Affiche précisément QUELLES LIGNES ont changé, avant de tout mettre en staging. Un bon réflexe pour repérer un console.log ou un commentaire de debug oublié avant qu'il ne parte dans l'historique." },
      { heading: "Étape 3 — git add", text: "Met tes changements \"en préparation\" (staging) avant de les enregistrer. git add . ajoute tout ; git add nom-du-fichier n'ajoute qu'un fichier précis si tu veux être sélectif." },
      { heading: "Étape 4 — git commit", text: "git commit -m \"message clair\" enregistre officiellement ce qui est en staging, LOCALEMENT (voir la fiche \"Local vs distant\"). Le message doit expliquer le POURQUOI ou le QUOI, pas juste \"update\"." },
      { heading: "Étape 5 — git push", text: "Envoie tes commits locaux vers le remote (GitHub par ex.), pour les partager ou les sauvegarder en ligne. Sans push, tes commits restent uniquement sur ta machine." },
      {
        heading: "Convention de message (optionnelle mais très répandue)",
        text: "Beaucoup d'équipes préfixent leurs messages par un type :\n\nfix: corrige un bug\nfeat: ajoute une fonctionnalité\nchore: tâche technique sans impact utilisateur (config, dépendances…)\ndocs: documentation uniquement\n\nExemple : feat: ajoute le tri par date sur la liste d'écoute"
      },
      {
        heading: "Exemple concret de bout en bout",
        text: "Tu viens de corriger un bug d'affichage :\n\ngit status   →  tu vois app/Login.kt modifié\ngit diff     →  tu vérifies que ce sont bien les bonnes lignes\ngit add .\ngit commit -m \"fix: corrige l'alignement du bouton login\"\ngit push"
      }
    ]
  },
  {
    category: "Git",
    title: "Les branches : travailler sans tout casser",
    level: "🟡 Intermédiaire",
    summary: "Une branche = une version parallèle de ton code, pour expérimenter sans toucher au code qui marche.",
    content: [
      {
        heading: "Pourquoi une branche",
        text: "La branche \"main\" représente en général la version stable de ton projet. Si tu développes une nouvelle fonctionnalité directement dessus et que ça casse tout, ton projet stable est cassé aussi. En créant une branche, tu travailles à côté : si ça casse, seule ta branche est affectée."
      },
      {
        heading: "Une branche n'est qu'un post-it",
        text: "Techniquement, une branche n'est qu'un simple pointeur léger vers un commit précis — ce n'est PAS une copie complète du code. C'est pour ça que créer ou supprimer une branche est quasi instantané et ne prend quasiment aucune place, même sur un très gros projet."
      },
      {
        heading: "HEAD, le marque-page",
        text: "HEAD est un pointeur spécial qui indique où tu te trouves ACTUELLEMENT — en général, le dernier commit de la branche sur laquelle tu es. Changer de branche (checkout/switch) déplace HEAD ailleurs."
      },
      {
        heading: "Le cycle de vie d'une branche",
        text: "1. git checkout -b ma-feature → tu crées la branche et tu bascules dessus\n2. Tu commits normalement dessus (status/add/commit)\n3. Une fois fini et testé, tu la fusionnes dans main (git merge, ou une Pull Request sur GitHub)\n4. Tu peux ensuite la supprimer : git branch -d ma-feature"
      },
      {
        heading: "Quand créer une branche",
        text: "Dès que tu commences quelque chose qui prend plus de quelques minutes, ou qui pourrait casser ce qui marche : une nouvelle fonctionnalité, un gros refactor, un test risqué."
      }
    ]
  },
  {
    category: "Git",
    title: "Annuler une erreur sans paniquer",
    level: "🟡 Intermédiaire",
    summary: "reset, restore, revert, stash : lequel utiliser selon la situation, et surtout selon si c'est déjà pushé.",
    content: [
      {
        heading: "J'ai modifié un fichier et je veux annuler (pas encore commité)",
        text: "git restore nom-du-fichier remet le fichier comme au dernier commit. Tes modifications non commitées sont perdues définitivement — vérifie avec git status ou git diff avant."
      },
      {
        heading: "J'ai commité mais pas encore pushé, je veux annuler le dernier commit",
        text: "git reset --soft HEAD~1 annule le commit mais garde tes changements prêts à être re-commités (staging). C'est l'option sûre.\n\ngit reset --hard HEAD~1 supprime TOUT, changements compris. Irréversible, à utiliser seulement si tu es sûr."
      },
      {
        heading: "J'ai DÉJÀ pushé ce commit — git revert, l'option sûre",
        text: "Une fois pushé, d'autres personnes (ou d'autres machines) ont pu récupérer ce commit : le réécrire avec reset devient dangereux et source de conflits pour tout le monde.\n\ngit revert crée à la place un NOUVEAU commit qui annule les changements d'un ancien commit, SANS effacer l'historique existant. Règle simple : reset avant push, revert après push sur du code partagé."
      },
      {
        heading: "Je veux juste mettre mon travail de côté temporairement",
        text: "git stash range tes changements en cours sans les commiter, et te remet un dossier propre (utile pour changer de branche vite fait sans avoir à committer du travail inachevé). git stash pop les fait revenir plus tard."
      }
    ]
  },
  {
    category: "Git",
    title: ".gitignore : ne pas tout versionner",
    level: "🟢 Débutant",
    summary: "Certains fichiers ne doivent jamais entrer dans l'historique Git — voici lesquels et pourquoi.",
    content: [
      {
        heading: "Pourquoi certains fichiers ne doivent PAS être commités",
        text: "• Les fichiers générés automatiquement (node_modules/, build/, dist/) — ils se régénèrent à partir du code source, inutile de les versionner.\n• Les secrets (clés API, mots de passe, fichiers .env) — les committer les rend visibles à quiconque a accès au dépôt, y compris dans l'historique même si tu les supprimes plus tard.\n• Les fichiers de config propres à ton éditeur/IDE.\n\nLes committer par erreur gonfle inutilement l'historique et peut carrément faire fuiter des secrets."
      },
      {
        heading: "Comment ça marche",
        text: "Un fichier .gitignore à la racine du projet liste des motifs (patterns) à ignorer, un par ligne :\n\nnode_modules/\nbuild/\n*.apk\n.env\n\nGit ignore alors automatiquement ces fichiers — ils n'apparaissent même plus dans git status."
      },
      {
        heading: "Piège fréquent",
        text: "Si un fichier était déjà commité AVANT d'être ajouté au .gitignore, Git continue de le suivre — l'ajouter au .gitignore seul ne suffit pas. Il faut d'abord le retirer explicitement du suivi avec git rm --cached nom-du-fichier, puis commit ce retrait."
      }
    ]
  },
  {
    category: "Git",
    title: "Les conflits de fusion (merge conflicts)",
    level: "🔴 Avancé",
    summary: "Le moment qui panique le plus les débutants — en réalité, une procédure simple à suivre calmement.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Git fusionne automatiquement deux versions tant qu'elles ne touchent pas aux mêmes lignes. Un conflit survient quand une modification que tu apportes (ta branche, ou tes changements locaux) et une modification d'ailleurs (un pull, une autre branche) ont changé la MÊME ligne différemment — Git ne peut objectivement pas deviner laquelle des deux garder."
      },
      {
        heading: "À quoi ça ressemble dans le fichier",
        text: "Git insère des marqueurs directement dans le fichier concerné :\n\n<<<<<<< HEAD\nta version à toi\n=======\nl'autre version\n>>>>>>> nom-de-la-branche"
      },
      {
        heading: "Comment le résoudre, étape par étape",
        text: "1. Ouvre le fichier en conflit dans ton éditeur.\n2. Décide quelle version garder — ou combine manuellement les deux.\n3. Supprime complètement les lignes de marqueurs (<<<<<<<, =======, >>>>>>>).\n4. git add nom-du-fichier pour marquer le conflit comme résolu.\n5. git commit (souvent un message déjà pré-rempli par Git) pour finaliser la fusion."
      },
      {
        heading: "Comment en avoir moins",
        text: "Fais des git pull ou merge fréquents plutôt que de laisser ta branche diverger pendant des semaines. Et si vous travaillez à plusieurs sur le même fichier, communiquez — les conflits sont normaux en équipe, pas un signe d'échec."
      }
    ]
  },
  {
    category: "Git",
    title: "Lire l'historique : git log, HEAD, SHA",
    level: "🟡 Intermédiaire",
    summary: "Décrypter ce qu'affiche git log --oneline --graph --all, et comprendre HEAD~1.",
    content: [
      {
        heading: "Le SHA, l'identité unique d'un commit",
        text: "Chaque commit a un identifiant unique (ex: a3f9c2e18b4d…), calculé à partir de son contenu — deux commits différents ne peuvent jamais avoir le même SHA. En pratique, on s'y réfère souvent avec seulement les 7 premiers caractères, largement suffisants pour être uniques."
      },
      {
        heading: "git log --oneline --graph --all, décrypté",
        text: "Chaque ligne = un commit (SHA court + message). Les caractères ASCII (|, /, \\, *) dessinent un graphique montrant les branches et où elles divergent ou fusionnent — précieux pour visualiser l'histoire d'un projet en un coup d'oeil."
      },
      {
        heading: "HEAD, HEAD~1, HEAD~2…",
        text: "HEAD désigne le commit sur lequel tu te trouves actuellement. HEAD~1 désigne le commit juste AVANT lui, HEAD~2 celui d'encore avant, etc. C'est cette notation qu'on utilise dans git reset --soft HEAD~1 : \"reviens à l'état d'avant le dernier commit\"."
      }
    ]
  },
  {
    category: "Git",
    title: "Pull Request : la collaboration sur GitHub",
    level: "🟢 Débutant",
    summary: "Une PR n'est pas une commande Git — c'est une fonctionnalité de GitHub construite par-dessus.",
    content: [
      {
        heading: "Le principe",
        text: "Une Pull Request (PR) est une demande : \"j'ai fait des changements sur ma branche, merci de les relire et de les fusionner dans main si c'est bon.\" Ce n'est pas une commande Git — c'est une fonctionnalité offerte par GitHub/GitLab par-dessus Git."
      },
      {
        heading: "Le flow typique",
        text: "1. Tu crées une branche et tu y commites ton travail.\n2. Tu la pushes : git push -u origin ma-branche\n3. Sur GitHub, tu ouvres une Pull Request depuis cette branche vers main.\n4. Quelqu'un (ou toi-même) relit le diff, commente, demande éventuellement des changements.\n5. Une fois approuvée, elle est fusionnée — souvent en un clic \"Merge\" sur l'interface GitHub."
      },
      {
        heading: "Pourquoi c'est utile même en travaillant seul",
        text: "Ouvrir une PR force à relire son propre diff avec du recul avant de fusionner dans main, et garde une trace claire et cherchable de POURQUOI chaque changement a été fait — précieux quand tu reviens sur un vieux projet des mois plus tard."
      }
    ]
  },

  // --- Expo / React Native ---------------------------------------
  {
    category: "Expo / React Native",
    title: "Dev, Build, Submit, Update : qui fait quoi ?",
    level: "🟢 Débutant",
    summary: "4 mots que tu vois partout dans la doc Expo, expliqués simplement — et ce qui se passe concrètement pour chacun.",
    content: [
      {
        heading: "Dev — npx expo start",
        text: "Lance un serveur de développement sur ta machine. Ton téléphone (via l'app Expo Go ou un dev client) se connecte à ce serveur et recharge l'app à chaud à chaque sauvegarde de code. Aucun fichier installable n'est créé — c'est juste pour développer et tester vite."
      },
      {
        heading: "Build — eas build",
        text: "Fabrique un vrai fichier installable : un .apk/.aab pour Android, un .ipa pour iOS. C'est ce qu'il te faut pour tester une version \"proche du réel\" sur un appareil sans passer par Expo Go, ou pour la publier sur un store."
      },
      {
        heading: "Submit — eas submit",
        text: "Prend le dernier build et l'envoie vers le Google Play Store ou l'App Store. C'est l'étape finale de publication."
      },
      {
        heading: "Update — eas update",
        text: "Pousse un changement de code JavaScript directement aux utilisateurs qui ont déjà l'app installée, SANS repasser par le store (donc sans attendre la validation Apple/Google). Ça ne marche que pour du JS/assets — si tu ajoutes une librairie native, il faut un nouveau build."
      },
      {
        heading: "Ce qui vit où, concrètement",
        text: "Dev : ton code tourne sur TON PC ; le téléphone ne fait qu'afficher le résultat via le réseau — sans ton PC allumé, rien ne marche.\n\nBuild : le code JS est empaqueté DIRECTEMENT dans le fichier .apk/.ipa ; l'app n'a plus jamais besoin de ton PC pour fonctionner.\n\nUpdate (OTA) : remplace le bundle JS déjà empaqueté dans une app déjà installée, sans regénérer de nouveau fichier .apk/.ipa."
      },
      {
        heading: "Résumé en une phrase",
        text: "Je code → expo start. Je veux un fichier à installer → eas build. Je veux le publier → eas submit. Je veux corriger un bug vite sans repasser par le store → eas update."
      }
    ]
  },
  {
    category: "Expo / React Native",
    title: "Pourquoi ça plante après avoir installé une lib",
    level: "🟡 Intermédiaire",
    summary: "Le piège classique du débutant Expo : installer une librairie et ne rien comprendre à l'erreur qui suit.",
    content: [
      {
        heading: "Le problème",
        text: "Certaines librairies contiennent du code natif (Kotlin/Swift), pas seulement du JavaScript. Le serveur de dev (expo start) ne peut pas \"ajouter\" ce code natif à chaud — il faut reconstruire l'app."
      },
      {
        heading: "Managed workflow vs Bare/prebuild",
        text: "Par défaut (\"managed workflow\"), Expo gère pour toi toute la partie native — pas de dossiers android/ios visibles dans ton projet. Si tu as besoin d'un accès direct au code natif (lib très spécifique, config custom), npx expo prebuild génère ces dossiers android/ios — c'est le passage en mode \"bare\"."
      },
      {
        heading: "La checklist de dépannage",
        text: "1. As-tu utilisé npx expo install (pas npm install) ? Il choisit la version compatible avec ton SDK.\n2. Relance avec le cache vidé : npx expo start -c\n3. Si la lib a du code natif et que tu es en dev client / bare workflow : npx expo prebuild --clean puis un nouveau build.\n4. En cas de doute sur la config générale : npx expo-doctor te dit ce qui cloche."
      }
    ]
  },
  {
    category: "Expo / React Native",
    title: "Comprendre app.json et eas.json",
    level: "🟡 Intermédiaire",
    summary: "Deux fichiers de config qu'on modifie sans toujours comprendre à quoi ils servent vraiment.",
    content: [
      {
        heading: "app.json / app.config.js : l'identité de ton app",
        text: "Nom affiché, identifiant unique (package Android / bundle identifier iOS), icône, numéro de version, permissions déclarées (caméra, localisation…)… Expo régénère automatiquement la configuration native à partir de ce fichier au moment du build."
      },
      {
        heading: "eas.json : les recettes de build",
        text: "Définit des \"profils\" (typiquement development, preview, production), chacun avec ses propres réglages : type de build, variables d'environnement, canal de distribution.\n\neas build --profile preview dit concrètement à EAS \"utilise la recette nommée preview\"."
      },
      {
        heading: "Pourquoi plusieurs profils",
        text: "Tu veux souvent un build \"preview\" installable directement sans passer par un store (pour toi ou tes testeurs), et un build \"production\" optimisé destiné au store — parfois avec des URLs d'API différentes entre les deux (serveur de test vs serveur réel)."
      }
    ]
  },
  {
    category: "Expo / React Native",
    title: "Metro, le serveur qui recharge ton app",
    level: "🟢 Débutant",
    summary: "Comprendre ce que fait vraiment expo start en coulisses, et pourquoi -c résout tant de bugs bizarres.",
    content: [
      {
        heading: "Ce que fait Metro concrètement",
        text: "Metro est le bundler JavaScript utilisé par Expo/React Native. Il prend tous tes fichiers .js/.ts, les assemble en un seul \"bundle\", et le sert à l'application via le réseau (ou l'USB) pendant le développement."
      },
      {
        heading: "Pourquoi vider le cache (-c) résout tant de problèmes",
        text: "Metro garde en cache une version déjà compilée de tes fichiers pour aller plus vite. Après un changement de config (babel.config.js, metro.config.js) ou un bug incompréhensible, ce cache peut contenir une version périmée → npx expo start -c le force à tout recompiler depuis zéro."
      },
      {
        heading: "Le QR code, comment ça marche",
        text: "Il encode l'adresse (IP + port) du serveur Metro sur ton réseau local. Le téléphone le scanne, s'y connecte, et télécharge le bundle JS. C'est pour ça qu'il faut être sur le MÊME réseau wifi que ton PC — sinon, utilise npx expo start --tunnel."
      }
    ]
  },
  {
    category: "Expo / React Native",
    title: "Expo Go vs Dev Client vs Build standalone",
    level: "🟡 Intermédiaire",
    summary: "Trois façons différentes de faire tourner ton app pendant qu'elle grandit, avec leurs limites respectives.",
    content: [
      {
        heading: "Expo Go",
        text: "L'app générique installable depuis le store, capable de lancer N'IMPORTE QUEL projet Expo en scannant un QR code. Rapide pour démarrer un premier projet, mais limitée aux librairies déjà incluses dedans — impossible d'y ajouter du code natif custom."
      },
      {
        heading: "Dev Client",
        text: "Une version d'Expo Go personnalisée et compilée SPÉCIFIQUEMENT pour ton projet, avec tes propres librairies natives incluses. Il faut la reconstruire (build) à chaque fois que tu ajoutes une NOUVELLE librairie native — mais pas à chaque changement de code JS, qui continue de se recharger à chaud comme avec Expo Go."
      },
      {
        heading: "Build standalone",
        text: "Le fichier final (.apk/.aab/.ipa), totalement autonome, sans aucun lien avec un serveur de développement. C'est ce que les utilisateurs finaux installent depuis le store — ou que tu installes toi-même via adb install pour un test final proche du réel."
      }
    ]
  },

  // --- Kotlin / Android ---------------------------------------
  {
    category: "Kotlin / Android",
    title: "Gradle, le chef d'orchestre de ton build",
    level: "🟢 Débutant",
    summary: "Comprendre ce que fait ./gradlew avant de taper des commandes au hasard.",
    content: [
      {
        heading: "C'est quoi Gradle",
        text: "Gradle est l'outil qui transforme ton code Kotlin/Java en application installable. ./gradlew (le \"wrapper\") est un script qui télécharge et utilise automatiquement la bonne version de Gradle pour ton projet — c'est pour ça qu'on tape ./gradlew et pas juste gradle."
      },
      {
        heading: "Debug vs Release",
        text: "Un build \"debug\" (assembleDebug) est rapide à générer, non optimisé, et facile à débugger — c'est celui que tu utilises au quotidien pendant le développement.\n\nUn build \"release\" (assembleRelease) est optimisé, minifié, et signé numériquement — c'est celui que tu envoies aux utilisateurs/au store."
      },
      {
        heading: "assemble vs install",
        text: "assembleDebug fabrique juste le fichier .apk dans le dossier build/. installDebug fait la même chose ET l'installe directement sur l'appareil/émulateur connecté — c'est celle que tu utilises le plus souvent pour tester."
      },
      {
        heading: "Les variantes de build (flavors)",
        text: "Au-delà de debug/release, un projet peut définir des \"flavors\" (ex: free/paid, staging/prod), combinés avec debug/release pour donner des tâches comme assembleFreeDebug ou assembleProdRelease. Consulte le fichier build.gradle du module pour voir ceux définis sur ton projet — ./gradlew tasks les liste aussi."
      }
    ]
  },
  {
    category: "Kotlin / Android",
    title: "ADB, le pont entre ton PC et ton téléphone",
    level: "🟢 Débutant",
    summary: "Le couteau suisse pour communiquer avec un appareil Android depuis le terminal.",
    content: [
      {
        heading: "À quoi ça sert",
        text: "ADB (Android Debug Bridge) permet d'installer des apps, de voir les logs, de copier des fichiers, ou d'ouvrir un shell sur un appareil Android connecté (par USB ou sur un émulateur), directement depuis ton terminal."
      },
      {
        heading: "Le flow de débug classique",
        text: "1. adb devices → vérifie que ton appareil est bien détecté\n2. Tu reproduis le bug sur l'app\n3. adb logcat *:E → tu regardes les erreurs qui remontent au moment du crash\n4. Une fois corrigé, tu réinstalles avec ./gradlew installDebug et tu retestes"
      },
      {
        heading: "logcat, filtrer intelligemment",
        text: "*:E = uniquement les erreurs, tous tags confondus — utile pour un premier repérage.\n\nMonTag:D *:S = affiche seulement les logs de niveau debug et plus du tag \"MonTag\", et masque tout le reste (*:S = silent). Très utile pour isoler UNIQUEMENT les logs que TU as ajoutés toi-même dans le code avec Log.d(\"MonTag\", \"message\")."
      },
      {
        heading: "Pourquoi \"device not found\" ou \"unauthorized\"",
        text: "Vérifie que le débogage USB est activé sur le téléphone (Options développeur), et accepte la popup d'autorisation qui apparaît sur l'écran du téléphone la première fois que tu le connectes."
      }
    ]
  },
  {
    category: "Kotlin / Android",
    title: "Émulateur ou vrai téléphone ?",
    level: "🟢 Débutant",
    summary: "Les deux ont leur usage, voici quand choisir l'un ou l'autre.",
    content: [
      {
        heading: "L'émulateur",
        text: "Pratique pour développer sans avoir de téléphone Android sous la main, ou tester différentes versions d'Android/tailles d'écran facilement. Mais plus lent, et certaines fonctionnalités (caméra, capteurs, vraies performances) sont moins fiables à tester."
      },
      {
        heading: "Le vrai téléphone",
        text: "Indispensable avant de publier une app : les performances réelles, la caméra, le GPS, les notifications se comportent différemment sur un vrai appareil. Connecte-le en USB avec le débogage activé, vérifie avec adb devices."
      }
    ]
  },
  {
    category: "Kotlin / Android",
    title: "APK vs AAB, et le keystore de signature",
    level: "🟡 Intermédiaire",
    summary: "Deux formats de fichier, et le mécanisme de signature qui protège l'identité de ton app.",
    content: [
      {
        heading: "APK : le format installable classique",
        text: "Un fichier .apk contient tout le nécessaire pour tourner sur un appareil précis — c'est ce que tu installes directement via adb install ou en le transférant sur un téléphone."
      },
      {
        heading: "AAB (Android App Bundle) : le format attendu par le Play Store",
        text: "Contient TOUT (toutes les langues, toutes les architectures de processeur), et c'est Google Play qui génère ensuite, pour chaque appareil qui télécharge l'app, un APK optimisé et allégé rien que pour lui. Résultat : l'utilisateur télécharge moins de Mo.\n\nDepuis 2021, le Play Store exige l'AAB (bundleRelease) pour toute nouvelle app."
      },
      {
        heading: "Le keystore, la carte d'identité de ton app",
        text: "Un build release doit être signé avec un keystore (un fichier .jks/.keystore contenant une clé privée). Cette signature prouve que les mises à jour proviennent bien du même développeur — Android refuse d'installer une mise à jour signée avec une clé différente.\n\n⚠️ Si tu perds ce fichier ou son mot de passe, tu ne pourras plus JAMAIS mettre à jour ton app sur le Play Store sous le même identifiant. Sauvegarde-le précieusement, et ne le commite JAMAIS dans Git."
      }
    ]
  },
  {
    category: "Kotlin / Android",
    title: "Le cycle de vie d'une Activity (les bases)",
    level: "🔴 Avancé",
    summary: "Pourquoi ton app peut perdre des données à la rotation de l'écran si tu ne comprends pas ce mécanisme.",
    content: [
      {
        heading: "Pourquoi ça compte",
        text: "Android peut mettre en pause, détruire, ou recréer ton écran (Activity) à tout moment — un appel entrant, une rotation d'écran, le système qui manque de RAM et ferme des apps en arrière-plan. Comprendre ce cycle évite des bugs classiques (données perdues, crash au retour en arrière)."
      },
      {
        heading: "Les méthodes clés, dans l'ordre",
        text: "onCreate() → l'écran est créé (en théorie une seule fois, sauf si le système le détruit et le recrée).\nonStart() / onResume() → l'écran devient visible puis interactif.\nonPause() / onStop() → l'utilisateur quitte l'écran, mais peut potentiellement y revenir.\nonDestroy() → l'écran est définitivement fermé."
      },
      {
        heading: "Le piège classique",
        text: "Une simple rotation d'écran DÉTRUIT et RECRÉE l'Activity par défaut. Si une donnée était stockée dans une simple variable locale, elle est perdue au moment de la recréation. C'est pour ça qu'on utilise un ViewModel (qui survit aux rotations) ou onSaveInstanceState pour préserver l'état à travers ces recréations."
      }
    ]
  },
  {
    category: "Kotlin / Android",
    title: "Coroutines Kotlin : l'async côté Android",
    level: "🟡 Intermédiaire",
    summary: "L'équivalent Kotlin d'async/await en JS — indispensable dès qu'on parle réseau ou base de données sur Android.",
    content: [
      {
        heading: "Le problème : ne jamais bloquer le thread principal",
        text: "Android exécute l'interface (affichage, boutons, animations) sur un seul thread, le \"thread principal\" (UI thread). Une opération longue (appel réseau, accès disque/base de données) lancée directement dessus le BLOQUE — résultat : l'app freeze, et au-delà de quelques secondes, Android affiche carrément \"L'application ne répond pas\" (ANR).\n\nLes coroutines permettent de lancer ce travail long AILLEURS, sans geler l'interface, puis de revenir facilement sur le thread principal pour afficher le résultat."
      },
      {
        heading: "suspend fun, la fonction qui peut être \"mise en pause\"",
        text: "Le mot-clé suspend marque une fonction comme pouvant être suspendue (mise en pause) sans bloquer le thread qui l'a appelée — un peu comme await en JavaScript. Une fonction suspend ne peut être appelée que depuis une coroutine ou une autre fonction suspend, jamais depuis du code \"normal\" directement."
      },
      {
        heading: "lifecycleScope / viewModelScope : où lancer une coroutine",
        text: "lifecycleScope.launch { ... } lance une coroutine automatiquement liée au cycle de vie de l'Activity/Fragment — si l'écran est détruit, la coroutine est annulée automatiquement, évitant fuites mémoire et crashs (\"tentative de mise à jour d'une vue qui n'existe plus\").\n\nviewModelScope fait pareil mais lié à la durée de vie du ViewModel — pratique pour survivre à une rotation d'écran tout en étant nettoyé quand l'écran est vraiment fermé."
      },
      {
        heading: "Dispatchers : choisir où ça s'exécute",
        text: "Dispatchers.Main → sur le thread principal (pour toucher à l'UI).\nDispatchers.IO → optimisé pour les opérations bloquantes (réseau, fichiers, base de données).\nDispatchers.Default → optimisé pour du calcul intensif en CPU.\n\nwithContext(Dispatchers.IO) { ... } permet de basculer temporairement une portion de code sur le bon thread avant de revenir automatiquement là où on était."
      }
    ]
  },

  // --- Linux Mint ---------------------------------------
  {
    category: "Linux Mint",
    title: "sudo et les permissions, sans y laisser des plumes",
    level: "🟢 Débutant",
    summary: "Le minimum à savoir avant de taper sudo devant une commande.",
    content: [
      {
        heading: "Utilisateur normal vs root",
        text: "Ton compte utilisateur normal n'a pas le droit de modifier les fichiers système ou d'installer des logiciels par défaut — c'est une protection. \"root\" est le super-utilisateur qui peut tout faire. sudo te donne temporairement les pouvoirs de root pour UNE commande."
      },
      {
        heading: "Les règles de prudence",
        text: "• Ne tape jamais une commande sudo trouvée sur internet sans comprendre ce qu'elle fait.\n• Sois particulièrement prudent avec sudo rm (suppression) : il n'y a pas de corbeille, c'est définitif.\n• Si une commande normale (sans sudo) échoue avec \"Permission denied\", c'est probablement volontaire — demande-toi si tu as vraiment besoin d'y toucher avant de rajouter sudo."
      },
      {
        heading: "chmod et chown, brièvement",
        text: "chmod change qui a le droit de lire/écrire/exécuter un fichier. chown change à qui appartient le fichier. Tu en auras besoin par exemple pour rendre un script exécutable (chmod +x) ou récupérer un fichier appartenant à root. Le détail complet des rwx/octal est dans la fiche \"Les permissions de fichiers en détail\" (Bases du terminal)."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "apt : installer et gérer des logiciels",
    level: "🟢 Débutant",
    summary: "Le gestionnaire de paquets de Linux Mint, l'équivalent d'un store mais en ligne de commande.",
    content: [
      {
        heading: "Le concept",
        text: "Plutôt que de télécharger des .exe sur des sites douteux comme sur Windows, Linux Mint utilise des \"dépôts\" (repositories) : des serveurs qui hébergent des logiciels vérifiés. apt est l'outil qui va chercher, installe, met à jour ou supprime ces logiciels."
      },
      {
        heading: "Le cycle de base",
        text: "sudo apt update → rafraîchit la LISTE des paquets disponibles (ne met rien à jour, juste la liste)\nsudo apt upgrade → installe réellement les mises à jour disponibles\nsudo apt install nom-du-logiciel → installe un logiciel\nsudo apt remove nom-du-logiciel → le désinstalle"
      },
      {
        heading: "Pourquoi \"update\" avant \"upgrade\"",
        text: "Si tu ne fais pas update d'abord, apt ne sait pas qu'une nouvelle version existe — c'est comme rafraîchir la page d'un store avant d'y chercher une mise à jour."
      },
      {
        heading: "D'où viennent les paquets : les dépôts (sources.list)",
        text: "apt cherche dans une liste de dépôts configurés (/etc/apt/sources.list et /etc/apt/sources.list.d/). La commande add-apt-repository ppa:... ajoute une source tierce à cette liste — ce qui revient à faire confiance à quelqu'un d'autre pour exécuter du code avec tes droits. À faire seulement pour des sources reconnues."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "Processus, ports, RAM : pourquoi ça rame",
    level: "🟡 Intermédiaire",
    summary: "De quoi diagnostiquer un ordi lent ou un port déjà utilisé.",
    content: [
      {
        heading: "Un processus, c'est quoi",
        text: "Chaque programme lancé (même en arrière-plan) est un \"processus\", identifié par un numéro unique (PID). htop montre tous les processus actifs, triés par consommation CPU/RAM en temps réel — utile pour repérer ce qui ralentit ta machine."
      },
      {
        heading: "Tuer un processus bloqué",
        text: "Si une app ne répond plus : trouve son PID (avec ps aux | grep nom, ou visuellement dans htop), puis kill -9 PID pour le forcer à s'arrêter."
      },
      {
        heading: "\"Port déjà utilisé\" (ex: Metro, un serveur local)",
        text: "Cette erreur veut dire qu'un autre programme écoute déjà sur ce port. sudo ss -tulpn | grep :8081 (par exemple) montre quel processus l'occupe, pour pouvoir le tuer ou changer de port."
      },
      {
        heading: "Le %CPU qui dépasse 100, ce n'est pas un bug",
        text: "Sur une machine multi-coeurs, un processus peut utiliser plusieurs coeurs simultanément à 100% chacun — top/htop additionnent ces pourcentages. Donc 350% sur une machine à 4 coeurs veut dire environ 87% de la puissance TOTALE de la machine utilisée par ce seul processus."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "L'arborescence du système de fichiers",
    level: "🟡 Intermédiaire",
    summary: "Pourquoi Linux n'a pas de 'C:\\', et où trouver quoi.",
    content: [
      {
        heading: "Pourquoi ce n'est pas comme Windows",
        text: "Contrairement à Windows, Linux n'a qu'UNE seule arborescence de fichiers, qui part de / (la racine). Les disques, partitions et clés USB sont \"montés\" (rattachés) à des dossiers de cette arborescence unique, plutôt que d'avoir chacun leur propre lettre (C:, D:…)."
      },
      {
        heading: "Les dossiers importants à connaître",
        text: "/home/ton-nom → tes fichiers personnels (équivalent du dossier utilisateur Windows).\n/etc → fichiers de configuration système.\n/usr → programmes et librairies installés.\n/var → données qui changent souvent, notamment les logs dans /var/log.\n/tmp → fichiers temporaires, effacés au redémarrage."
      },
      {
        heading: "Où sont mes logiciels installés",
        text: "Contrairement à Windows où tout un logiciel tient dans un seul dossier (Program Files), sous Linux les fichiers d'un logiciel sont répartis PAR TYPE dans ces dossiers standards : le binaire exécutable dans /usr/bin, sa config dans /etc, ses données partagées dans /usr/share… C'est apt qui range tout au bon endroit automatiquement à l'installation."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "Réseau pour les nuls : IP, port, DNS",
    level: "🟡 Intermédiaire",
    summary: "De quoi enfin comprendre ce que veut dire localhost:8081.",
    content: [
      {
        heading: "L'adresse IP, le numéro de téléphone de ta machine",
        text: "Chaque appareil sur un réseau a une adresse (ex: 192.168.1.42) qui permet de le joindre. 127.0.0.1 (aussi appelé \"localhost\") désigne toujours TA PROPRE machine, quel que soit le réseau sur lequel tu es connecté."
      },
      {
        heading: "Le port, l'extension du numéro",
        text: "Une machine peut faire tourner plusieurs services en même temps (un serveur web, une base de données…). Le port (un nombre de 0 à 65535) précise AUQUEL de ces services on s'adresse.\n\nEx: localhost:8081 = le service qui écoute sur le port 8081 de ta PROPRE machine (souvent Metro pour un projet Expo)."
      },
      {
        heading: "Le DNS, l'annuaire qui traduit les noms",
        text: "Tu tapes google.com dans ton navigateur, mais le réseau ne comprend que des adresses IP. Le DNS traduit google.com en une IP (ex: 142.250.x.x) avant de s'y connecter réellement — exactement comme chercher un numéro dans un annuaire à partir d'un nom."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "SSH et les clés : comment ça marche vraiment",
    level: "🔴 Avancé",
    summary: "Pourquoi utiliser une clé plutôt qu'un mot de passe, et ce que représentent vraiment les fichiers générés.",
    content: [
      {
        heading: "Le problème du mot de passe",
        text: "Se connecter à un serveur distant avec un simple mot de passe est risqué : interceptable, devinable, brute-forçable. L'authentification par clé SSH résout ça avec une PAIRE de clés mathématiquement liées : une clé PRIVÉE (jamais partagée, reste uniquement sur ton PC) et une clé PUBLIQUE (peut être partagée sans risque, ex: collée dans les paramètres GitHub)."
      },
      {
        heading: "Le principe, simplifié",
        text: "Le serveur (ou GitHub) connaît ta clé publique. Quand tu te connectes, il te met au défi de prouver mathématiquement que tu possèdes la clé privée correspondante — SANS que cette clé privée ne quitte jamais ta machine. Si la preuve est valide, tu es authentifié."
      },
      {
        heading: "ssh-keygen, concrètement",
        text: "Génère deux fichiers, par défaut dans ~/.ssh/ : id_ed25519 (la clé PRIVÉE) et id_ed25519.pub (la clé PUBLIQUE).\n\nLe fichier .pub est celui que tu colles dans les paramètres GitHub ou d'un serveur distant. Le fichier SANS .pub ne doit JAMAIS être partagé, ni commité dans un dépôt Git."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "systemd et les services",
    level: "🟡 Intermédiaire",
    summary: "Comment Linux Mint démarre, surveille et redémarre les programmes qui tournent en arrière-plan.",
    content: [
      {
        heading: "C'est quoi un service",
        text: "Un programme qui tourne en arrière-plan en continu, souvent démarré automatiquement avec la machine (ex: le wifi, le bluetooth, un serveur local). systemd est le système qui gère le démarrage, l'arrêt et la surveillance de ces services sous Linux Mint."
      },
      {
        heading: "Les commandes de base",
        text: "systemctl status nom-du-service → son état actuel (actif, arrêté, en erreur…) et ses derniers logs.\nsystemctl start / stop / restart nom-du-service → agir dessus MAINTENANT, pour la session en cours.\nsystemctl enable / disable nom-du-service → décider s'il démarre automatiquement au prochain redémarrage de la machine (enable ne le lance PAS immédiatement, seulement au prochain boot)."
      },
      {
        heading: "Où chercher pourquoi un service ne démarre pas",
        text: "journalctl -u nom-du-service donne les logs spécifiques à ce service précis — généralement le premier réflexe à avoir pour comprendre une panne, plutôt que de fouiller dans les logs système généraux."
      }
    ]
  },
  {
    category: "Linux Mint",
    title: "cron : exécuter des tâches automatiquement",
    level: "🟡 Intermédiaire",
    summary: "Programmer une commande pour qu'elle se lance toute seule, à heure fixe, sans intervention.",
    content: [
      {
        heading: "Le principe",
        text: "cron exécute des commandes à des horaires programmés à l'avance, même quand tu n'es pas devant l'ordinateur (tant qu'il reste allumé) — utile pour des sauvegardes automatiques, un nettoyage régulier de fichiers, etc."
      },
      {
        heading: "La syntaxe (les 5 étoiles)",
        text: "minute heure jour-du-mois mois jour-de-semaine commande\n\nExemple : 0 3 * * * /home/evan/backup.sh\n→ exécute backup.sh tous les jours à 3h00 du matin (chaque * signifie \"à chaque valeur possible\" pour cette position)."
      },
      {
        heading: "Tester avant de programmer",
        text: "Lance TOUJOURS la commande manuellement dans le terminal avant de la programmer dans cron, pour vérifier qu'elle fonctionne correctement. Si elle échoue une fois programmée, cron ne t'avertit pas visiblement — l'échec passe facilement inaperçu pendant des semaines."
      }
    ]
  },

  // --- Docker ---------------------------------------
  {
    category: "Docker",
    title: "Docker, à quoi ça sert",
    level: "🟢 Débutant",
    summary: "Le problème du 'ça marche sur ma machine', et pourquoi un conteneur est bien plus léger qu'une machine virtuelle.",
    content: [
      {
        heading: "Le problème que ça résout : \"ça marche sur ma machine\"",
        text: "Une application a souvent besoin d'un environnement précis (une version de Node, une base de données, des variables système…). Sans Docker, reproduire EXACTEMENT le même environnement sur une autre machine (celle d'un collègue, un serveur de production) est une source classique et interminable de bugs de configuration."
      },
      {
        heading: "Le conteneur : une boîte isolée et reproductible",
        text: "Un conteneur empaquette une application ET tout son environnement (dépendances, configuration) dans une unité qui tourne de façon IDENTIQUE sur n'importe quelle machine disposant de Docker."
      },
      {
        heading: "Conteneur ≠ machine virtuelle",
        text: "Contrairement à une machine virtuelle qui simule un ordinateur entier (avec son propre noyau, très lourde et lente à démarrer), un conteneur PARTAGE le noyau Linux de la machine hôte. Résultat : beaucoup plus léger, et un démarrage qui se compte en secondes plutôt qu'en minutes."
      }
    ]
  },
  {
    category: "Docker",
    title: "Image vs conteneur, la différence",
    level: "🟢 Débutant",
    summary: "La confusion la plus fréquente chez les débutants Docker, clarifiée avec une analogie simple.",
    content: [
      {
        heading: "L'image : la recette / le plan",
        text: "Un fichier figé qui décrit tout ce dont l'application a besoin (système de base, dépendances, code, commande de démarrage). Elle est définie dans un Dockerfile, et elle est IMMUABLE : on ne la modifie jamais directement, on en construit une nouvelle (docker build) si quelque chose change."
      },
      {
        heading: "Le conteneur : l'instance en cours d'exécution",
        text: "Quand tu lances une image (docker run), Docker crée un conteneur — une instance VIVANTE de cette image. Tu peux lancer PLUSIEURS conteneurs à partir de la MÊME image, exactement comme on peut créer plusieurs objets à partir d'une seule classe en programmation."
      },
      {
        heading: "Ce qui se perd quand un conteneur s'arrête",
        text: "Par défaut, tout ce qui est écrit À L'INTÉRIEUR d'un conteneur (fichiers créés, données de base de données…) disparaît définitivement quand ce conteneur est supprimé (docker rm). C'est pour ça qu'on utilise des volumes pour les données qu'on veut conserver durablement."
      }
    ]
  },
  {
    category: "Docker",
    title: "Docker Compose, orchestrer plusieurs conteneurs",
    level: "🟡 Intermédiaire",
    summary: "Pourquoi une vraie app a rarement UN SEUL conteneur, et comment Compose les fait cohabiter.",
    content: [
      {
        heading: "Pourquoi Compose",
        text: "Une vraie application a souvent besoin de plusieurs conteneurs qui communiquent entre eux (ex : un backend + une base de données + un cache Redis). Lancer chaque docker run à la main, avec tous les bons réglages, devient vite ingérable dès que ça dépasse un seul conteneur."
      },
      {
        heading: "docker-compose.yml : décrire toute la stack en un fichier",
        text: "Liste chaque service, son image, ses ports, ses variables d'environnement, ses volumes — et surtout, Compose crée automatiquement un réseau privé pour que les conteneurs se parlent entre eux PAR LEUR NOM (ex: le backend peut appeler directement http://db:5432 sans connaître d'adresse IP)."
      },
      {
        heading: "up -d vs down",
        text: "docker compose up -d démarre toute la stack décrite dans le fichier, en arrière-plan.\ndocker compose down l'arrête ET supprime les conteneurs — mais conserve les volumes nommés (donc les données), sauf si tu ajoutes explicitement l'option -v."
      }
    ]
  },

  // --- FAQ : erreurs fréquentes ---------------------------------------
  {
    category: "FAQ : erreurs fréquentes",
    title: "\"Permission denied\"",
    level: "🟢 Débutant",
    summary: "Le message d'erreur le plus courant sous Linux — presque toujours une question de droits, pas un bug.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Soit tu essaies d'exécuter un fichier qui n'a pas le droit x (souvent un script ./nom.sh), soit tu essaies de modifier/lire un fichier appartenant à un autre utilisateur (souvent root)."
      },
      {
        heading: "Comment le résoudre",
        text: "Pour un script : chmod +x nom-du-script.sh, puis relance.\nPour un fichier/dossier système : ajoute sudo devant la commande SEULEMENT si tu comprends pourquoi c'est nécessaire (voir la fiche \"sudo et les permissions\").\n\nVoir aussi : \"Les permissions de fichiers en détail\" (Bases du terminal)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "\"Port already in use\" / \"Address already in use\"",
    level: "🟢 Débutant",
    summary: "Un autre programme occupe déjà le port que ton serveur (Metro, Docker…) essaie d'utiliser.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Deux programmes ne peuvent pas écouter sur le même port en même temps sur la même machine. Souvent : un ancien npx expo start ou docker run n'a pas été vraiment arrêté (processus zombie, terminal fermé sans Ctrl+C propre)."
      },
      {
        heading: "Comment le résoudre",
        text: "1. sudo ss -tulpn | grep :8081 (remplace 8081 par ton port) → trouve le PID qui occupe le port.\n2. kill -9 PID pour le libérer.\n3. Relance ta commande.\n\nVoir aussi : \"Réseau pour les nuls\" (Linux Mint) et \"Processus, ports, RAM\" (Linux Mint)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "\"command not found\"",
    level: "🟢 Débutant",
    summary: "Le shell ne trouve aucun programme portant ce nom.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Trois causes possibles : une faute de frappe, un logiciel qui n'est simplement pas installé, ou un logiciel installé mais dont le dossier n'est pas dans ton PATH."
      },
      {
        heading: "Comment le résoudre",
        text: "1. Vérifie l'orthographe exacte de la commande.\n2. Demande-toi si le logiciel est vraiment installé (souvent via apt install nom-du-logiciel).\n3. which nom-de-la-commande confirme si le shell le trouve ou non.\n\nVoir aussi : \"Variables d'environnement et PATH\" (Bases du terminal)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "adb : \"device not found\" / \"unauthorized\"",
    level: "🟢 Débutant",
    summary: "Ton PC ne voit pas ton téléphone/émulateur Android, ou le voit sans y avoir accès.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "\"device not found\" : le débogage USB n'est pas activé sur le téléphone, ou le câble/port USB ne transmet pas les données (certains câbles ne sont que pour charger).\n\n\"unauthorized\" : le téléphone a détecté la connexion mais attend que tu acceptes la popup d'autorisation affichée sur SON écran."
      },
      {
        heading: "Comment le résoudre",
        text: "1. Active le débogage USB (Paramètres → Options développeur).\n2. Débranche/rebranche le câble.\n3. Regarde l'ÉCRAN DU TÉLÉPHONE pour une popup à accepter.\n4. adb devices pour vérifier que le statut passe à \"device\".\n5. En dernier recours : adb kill-server && adb start-server."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "Expo : comportement bizarre après un changement de config",
    level: "🟢 Débutant",
    summary: "L'app ne reflète pas tes derniers changements, ou une erreur incompréhensible apparaît après avoir touché babel.config.js/metro.config.js.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Metro garde en cache une version déjà compilée de ton code pour aller plus vite. Après un changement de configuration, ce cache peut contenir une version périmée qui ne correspond plus à ta config actuelle."
      },
      {
        heading: "Comment le résoudre",
        text: "npx expo start -c relance le serveur en vidant complètement le cache. Si ça ne suffit pas : npx expo-doctor pour vérifier la cohérence générale du projet.\n\nVoir aussi : \"Metro, le serveur qui recharge ton app\" (Expo / React Native)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "git push : \"rejected\" / \"non-fast-forward\"",
    level: "🟡 Intermédiaire",
    summary: "Git refuse ton push car le remote a des commits que tu n'as pas encore en local.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Quelqu'un (ou toi, depuis une autre machine) a pushé des commits sur cette branche après ton dernier pull. Git refuse par sécurité d'écraser ces commits que tu ne connais pas encore."
      },
      {
        heading: "Comment le résoudre",
        text: "git pull (ou git pull --rebase pour un historique plus propre) rapatrie d'abord les commits manquants, éventuellement avec un conflit à résoudre (voir la fiche dédiée). Une fois à jour, git push repasse normalement.\n\n⚠️ Ne JAMAIS utiliser git push --force sur une branche partagée sans être sûr de ce que ça écrase — ça peut effacer le travail de quelqu'un d'autre."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "Des symboles <<<<<<< ======= >>>>>>> apparaissent dans un fichier",
    level: "🟡 Intermédiaire",
    summary: "Ce n'est pas une corruption de fichier — c'est un conflit de fusion Git en cours de résolution.",
    content: [
      {
        heading: "Ce qu'il se passe",
        text: "Git n'a pas réussi à fusionner automatiquement deux versions d'un même fichier, et a inséré des marqueurs à l'endroit exact du désaccord pour que tu choisisses manuellement quoi garder."
      },
      {
        heading: "Comment le résoudre",
        text: "Voir la fiche complète \"Les conflits de fusion (merge conflicts)\" dans Git — résumé : choisis/combine le bon contenu, supprime les marqueurs, git add le fichier, puis git commit."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "npm : conflit de versions / peer dependency",
    level: "🟡 Intermédiaire",
    summary: "npm install refuse d'installer, ou affiche un avertissement de dépendances incompatibles entre elles.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Une librairie que tu installes s'attend à une version précise d'une autre librairie (souvent React ou Expo) déjà présente dans ton projet, mais ce n'est pas celle installée."
      },
      {
        heading: "Comment le résoudre",
        text: "Dans un projet Expo, npx expo install --fix aligne automatiquement les versions sur ce qu'attend le SDK — souvent suffisant. Sinon, vérifie manuellement dans le message d'erreur QUELLE version est attendue vs installée, et ajuste dans package.json.\n\nVoir aussi : \"npm & npx, et package.json en détail\" (Bases du terminal)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "Docker : \"Cannot connect to the Docker daemon\"",
    level: "🟢 Débutant",
    summary: "Docker refuse toutes tes commandes avec ce message.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Le service Docker (le \"daemon\", qui tourne en arrière-plan) n'est tout simplement pas démarré sur ta machine."
      },
      {
        heading: "Comment le résoudre",
        text: "sudo systemctl status docker pour vérifier son état, puis sudo systemctl start docker pour le lancer. Pour qu'il démarre automatiquement à chaque redémarrage : sudo systemctl enable docker.\n\nVoir aussi : \"systemd et les services\" (Linux Mint)."
      }
    ]
  },
  {
    category: "FAQ : erreurs fréquentes",
    title: "Gradle : \"SDK location not found\"",
    level: "🟡 Intermédiaire",
    summary: "Le build Android échoue immédiatement, avant même de compiler quoi que ce soit.",
    content: [
      {
        heading: "Pourquoi ça arrive",
        text: "Gradle ne trouve pas où est installé l'Android SDK sur ta machine — souvent après une réinstallation d'Android Studio, un déplacement de dossier, ou sur une machine neuve où la variable n'a jamais été configurée."
      },
      {
        heading: "Comment le résoudre",
        text: "Crée (ou complète) un fichier local.properties à la racine du dossier android/ du projet, avec une ligne :\n\nsdk.dir=/home/evan/Android/Sdk\n\n(adapte le chemin à l'emplacement réel de ton SDK, visible dans Android Studio → Settings → Android SDK)."
      }
    ]
  }
];
