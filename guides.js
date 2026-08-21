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
        text: "Ça veut dire que le shell n'a trouvé aucun programme portant ce nom (faute de frappe, ou logiciel pas installé, ou pas dans le PATH — voir [[Bases du terminal::Variables d'environnement et PATH]]).\n\nRéflexe : vérifie l'orthographe, puis demande-toi \"ce logiciel est-il vraiment installé ?\" avec which nom-de-la-commande ou en cherchant comment l'installer (souvent via apt)."
      }
    ],
    exercises: [
      {
            "type": "fillin",
            "instruction": "Quel flag combiné (2 lettres) faut-il ajouter à rm pour supprimer tout un dossier, sans confirmation demandée ?",
            "accept": [
                  "-rf",
                  "-fr",
                  "rf",
                  "fr"
            ],
            "correction": "-rf : -r pour récursif (supprime aussi le contenu du dossier), -f pour force (sans confirmation, sans erreur si le fichier n'existe pas). C'est la combinaison à utiliser avec la plus grande prudence — aucune corbeille, aucun retour en arrière possible."
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
        text: "Un chemin absolu commence par / et part de la racine du système (ex: /home/user/cmd-hub). Un chemin relatif part d'où tu es actuellement (ex: cmd-hub/index.html si tu es déjà dans /home/user). Le symbole ~ est un raccourci vers ton dossier personnel."
      },
      {
        heading: "L'autocomplétion (Tab)",
        text: "Tape les premières lettres d'un nom de fichier/dossier puis appuie sur Tab : le terminal le complète automatiquement. Si plusieurs fichiers commencent pareil, appuie deux fois sur Tab pour voir la liste des possibilités.\n\nRéflexe à prendre tout de suite : ça évite les fautes de frappe et fait gagner énormément de temps."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Affiche dans quel dossier tu te trouves actuellement.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "pwd"
                              ],
                              "output": "/home/user/cmd-hub"
                        }
                  ]
            },
            "correction": "pwd (Print Working Directory) affiche toujours le chemin ABSOLU du dossier courant — le point de départ avant de te déplacer avec cd."
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
        text: "Exemple : -rwxr-xr-- 1 user user 220 ... script.sh\n\n• Le tout premier caractère (-) dit si c'est un fichier (-) ou un dossier (d).\n• rwx → le propriétaire (user) peut tout faire.\n• r-x → le groupe peut lire et exécuter, pas modifier.\n• r-- → tous les autres peuvent seulement lire."
      },
      {
        heading: "Le format en chiffres (chmod 755)",
        text: "Chaque droit a une valeur : r=4, w=2, x=1. On additionne par profil.\n\nrwx = 4+2+1 = 7\nr-x = 4+0+1 = 5\nr-- = 4+0+0 = 4\n\nchmod 755 fichier donne donc : propriétaire=7 (rwx), groupe=5 (r-x), autres=5 (r-x). C'est la combinaison typique pour un script qu'on veut pouvoir exécuter."
      },
      {
        heading: "Erreur fréquente",
        text: "./script.sh: Permission denied → le fichier n'a pas le droit x. Corrige avec chmod +x script.sh (ajoute juste le droit d'exécution, sans toucher au reste)."
      }
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Un fichier a les permissions -rwxr-x---. Que peut faire le GROUPE dessus ?",
            "options": [
            "Lire et exécuter, mais pas modifier",
            "Lire, écrire et exécuter",
            "Aucun droit",
            "Écrire seulement"
      ],
            "correctIndex": 0,
            "correction": "-rwxr-x--- se lit par blocs de 3 : rwx (propriétaire, tous les droits), r-x (groupe, lire+exécuter mais pas écrire), --- (autres, aucun droit)."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Affiche le chemin complet de l'exécutable utilisé quand tu tapes la commande git.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "which git"
                              ],
                              "output": "/usr/bin/git"
                        }
                  ]
            },
            "correction": "which te montre EXACTEMENT quel fichier le shell va exécuter en cherchant dans le PATH, dans l'ordre des dossiers qui le composent. Précieux quand plusieurs versions d'un même programme traînent sur la machine."
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
        text: "npm install seul installe la DERNIÈRE version publiée d'un paquet, sans se soucier de compatibilité. npx expo install choisit spécifiquement la version COMPATIBLE avec le SDK Expo utilisé par ton projet — une nuance qui évite une bonne partie des plantages après installation d'une librairie (voir [[Expo / React Native::Pourquoi ça plante après avoir installé une lib]])."
      }
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Un package.json contient \"expo\": \"~50.0.2\". Un npm install peut-il installer automatiquement la version 50.1.0 ?",
            "options": [
            "Oui, sans aucun problème",
            "Non, ~ n'autorise que les correctifs (50.0.x)",
            "Seulement avec npx",
            "Seulement en mode développement"
      ],
            "correctIndex": 1,
            "correction": "~50.0.2 n'autorise QUE les correctifs (50.0.x). 50.1.0 est une mise à jour MINEURE, refusée par ce symbole — il aurait fallu ^50.0.2 pour l'accepter automatiquement."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Tu supprimes par erreur le dossier node_modules/ d'un projet Expo. Que se passe-t-il ?",
            "options": [
            "Le projet est perdu définitivement",
            "Il faut réinstaller Node.js",
            "Rien de grave, npm install le régénère entièrement",
            "Ça casse aussi les autres projets sur la machine"
      ],
            "correctIndex": 2,
            "correction": "node_modules/ est entièrement régénérable à partir de package.json — contrairement à un dossier système comme /usr, dont la suppression casserait une bonne partie de Linux Mint sans regénération automatique possible."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Liste le contenu du dossier en détail, et ne garde que les lignes contenant \"guides\".",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "ls -la | grep guides"
                              ],
                              "output": "-rw-r--r-- 1 user user 48213 20 août 15:02 guides.js"
                        }
                  ]
            },
            "correction": "ls -la | grep guides envoie (pipe |) toute la sortie de ls -la vers grep, qui ne laisse passer que les lignes contenant le mot \"guides\" — un filtre appliqué après coup, sans que ls ait besoin de savoir filtrer lui-même."
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
        text: "{\n  \"nom\": \"Alex\",\n  \"age\": 30,\n  \"projets\": [\"AppPhotos\", \"SiteVitrine\"],\n  \"actif\": true\n}\n\nDes paires clé/valeur entre accolades { }, où une valeur peut elle-même contenir un autre objet ou une liste — c'est cette imbrication qui permet de représenter des données complexes."
      },
      {
        heading: "Les types de valeurs possibles",
        text: "\"texte\" entre guillemets doubles (jamais simples en JSON strict), un nombre (42, 3.14), un booléen (true/false), null (l'absence de valeur), un objet {...}, ou un tableau [...].\n\nPiège fréquent : une virgule après le TOUT DERNIER élément d'un objet ou tableau est une erreur de syntaxe en JSON (contrairement à JS) — ça fait planter le parsing."
      },
      {
        heading: "Pourquoi c'est partout",
        text: "JSON étant indépendant de tout langage, un serveur écrit en Kotlin peut envoyer une réponse JSON qu'une app Expo/JavaScript comprend nativement avec JSON.parse(), et inversement avec JSON.stringify(). C'est ce langage commun qui permet à des technologies complètement différentes de se parler."
      }
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Où se trouve l'erreur dans ce JSON ?\n{\n  \"nom\": \"Alex\",\n  \"projets\": [\"AppPhotos\", \"SiteVitrine\",]\n}",
            "options": [
            "Les guillemets autour de \"nom\"",
            "L'accolade ouvrante {",
            "Il n'y a pas d'erreur",
            "La virgule après le dernier élément du tableau"
      ],
            "correctIndex": 3,
            "correction": "La virgule après \"SiteVitrine\" (juste avant le crochet fermant ]) est en trop. En JSON strict, une virgule après le DERNIER élément d'un tableau ou d'un objet est une erreur de syntaxe qui fait planter le parsing — contrairement à JavaScript, plus permissif sur ce point."
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
        heading: "Exemple concret : WebDAV (partage de fichiers à distance)",
        text: "WebDAV est une EXTENSION de HTTP pensée pour gérer des fichiers à distance : PROPFIND pour lister le contenu d'un dossier, GET pour télécharger un fichier, PUT pour en envoyer un, DELETE pour en supprimer un. Comprendre HTTP en général aide directement à comprendre pourquoi WebDAV fonctionne comme il fonctionne."
      }
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Ton app fait un GET sur une ressource qui n'existe pas dans la base. Quel code de statut attends-tu ?",
            "options": [
            "404 Not Found",
            "200 OK",
            "500 Internal Server Error",
            "301 Moved Permanently"
      ],
            "correctIndex": 0,
            "correction": "404 signifie \"ressource introuvable\" — l'URL demandée n'existe pas. Un 500 signalerait un problème côté serveur (pas ton cas ici), un 200 signifierait au contraire que tout s'est bien passé."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Quel est le bug dans ce code ?\nasync function chargerDonnees() {\n  const reponse = fetch(\"https://api.exemple.com/data\");\n  const donnees = await reponse.json();\n  return donnees;\n}",
            "options": [
            "La fonction n'est pas déclarée async",
            "Il manque await devant fetch(...)",
            "Il manque un return",
            "reponse.json() n'existe pas"
      ],
            "correctIndex": 1,
            "correction": "Sans await devant fetch(...), reponse contient la PROMESSE elle-même (pas encore résolue), pas la vraie réponse HTTP — donc reponse.json() plante ou renvoie n'importe quoi. Correction : const reponse = await fetch(...)."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Sans règles de sécurité Firestore configurées, qui peut potentiellement lire toutes tes données ?",
            "options": [
            "Seulement toi",
            "Personne, Firebase bloque tout par défaut",
            "N'importe qui connaissant l'URL du projet",
            "Seulement les comptes Google vérifiés"
      ],
            "correctIndex": 2,
            "correction": "Firestore n'a pas de serveur intermédiaire à toi pour filtrer les requêtes — sans Security Rules qui vérifient l'identité (request.auth.uid), l'accès reste potentiellement ouvert à quiconque connaît l'URL du projet."
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
    ],
    exercises: [
      {
        type: "terminal",
        instruction: "Dans le terminal ci-dessous, initialise un tout nouveau dépôt Git dans le dossier courant.",
        hint: "La commande commence par git init",
        terminal: {
          prompt: "user@mint:~/mon-projet$",
          steps: [
            {
              expect: ["git init"],
              output: "Dépôt Git vide initialisé dans /home/user/mon-projet/.git/"
            }
          ]
        },
        correction: "git init\n\nCrée un dossier caché .git/ dans le dossier courant : c'est LUI qui va stocker tout l'historique des commits à venir, uniquement en local. Rien n'est envoyé nulle part — c'est une opération 100% locale, comme vu dans la théorie."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Commite un changement (message \"fix: corrige le titre\"), PUIS envoie-le sur le remote.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git commit -m \"fix: corrige le titre\"",
                                    "git commit -m \"fix: corrige le titre\""
                              ],
                              "output": "[master a3f9c2e] fix: corrige le titre\n 1 file changed, 1 insertion(+)"
                        },
                        {
                              "expect": [
                                    "git push"
                              ],
                              "output": "Énumération des objets : 4, fait.\nVers github.com:toi/projet.git\n   9de4781..a3f9c2e  master -> master"
                        }
                  ]
            },
            "correction": "Remarque : après le commit, RIEN n'a encore été envoyé — c'est uniquement le push qui copie le commit vers le remote. Si tu avais coupé le PC juste après le commit, ce changement serait resté strictement local."
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
      { heading: "Étape 4 — git commit", text: "git commit -m \"message clair\" enregistre officiellement ce qui est en staging, LOCALEMENT (voir [[Git::Local vs distant : ce qui se passe vraiment à chaque étape]]). Le message doit expliquer le POURQUOI ou le QUOI, pas juste \"update\"." },
      { heading: "Étape 5 — git push", text: "Envoie tes commits locaux vers le remote (GitHub par ex.), pour les partager ou les sauvegarder en ligne. Sans push, tes commits restent uniquement sur ta machine." },
      {
        heading: "Convention de message (optionnelle mais très répandue)",
        text: "Beaucoup d'équipes préfixent leurs messages par un type :\n\nfix: corrige un bug\nfeat: ajoute une fonctionnalité\nchore: tâche technique sans impact utilisateur (config, dépendances…)\ndocs: documentation uniquement\n\nExemple : feat: ajoute le tri par date sur la liste d'écoute"
      },
      {
        heading: "Exemple concret de bout en bout",
        text: "Tu viens de corriger un bug d'affichage :\n\ngit status   →  tu vois app/Login.kt modifié\ngit diff     →  tu vérifies que ce sont bien les bonnes lignes\ngit add .\ngit commit -m \"fix: corrige l'alignement du bouton login\"\ngit push"
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Reproduis le workflow complet : vérifie l'état, mets tout en staging, puis commite avec le message \"feat: ajoute le tri par date\".",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git status"
                              ],
                              "output": "Sur la branche master\nModifications qui seront validées :\n  modifié : app/Liste.kt"
                        },
                        {
                              "expect": [
                                    "git add ."
                              ],
                              "output": ""
                        },
                        {
                              "expect": [
                                    "git commit -m \"feat: ajoute le tri par date\"",
                                    "git commit -m \"feat: ajoute le tri par date\""
                              ],
                              "output": "[master 7c1e4aa] feat: ajoute le tri par date\n 1 file changed, 12 insertions(+)"
                        }
                  ]
            },
            "correction": "status → add → commit, dans cet ordre, à chaque fois : c'est le cycle que tu vas répéter des centaines de fois. status en premier n'est jamais une perte de temps, il évite d'ajouter par erreur un fichier que tu ne voulais pas committer."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Crée une nouvelle branche nommée \"ajout-favoris\" et bascule dessus, en une seule commande.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git checkout -b ajout-favoris"
                              ],
                              "output": "Basculement sur la nouvelle branche 'ajout-favoris'"
                        }
                  ]
            },
            "correction": "git checkout -b fait deux choses d'un coup : créer la branche ET basculer dessus. Ton travail sur cette branche n'affecte pas main tant que tu ne fais pas de merge."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Tu viens de committer par erreur (pas encore pushé). Annule ce commit en gardant les changements prêts à être re-commités.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git reset --soft HEAD~1"
                              ],
                              "output": "(le dernier commit est annulé, les changements sont de retour en staging)"
                        }
                  ]
            },
            "correction": "git reset --soft HEAD~1 est l'option SÛRE : elle défait uniquement le commit, sans toucher aux fichiers ni à leur contenu. --hard aurait aussi supprimé les changements eux-mêmes — à réserver aux cas où tu es certain de vouloir tout perdre."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Lequel de ces éléments NE DOIT PAS figurer dans .gitignore ?",
            "options": [
            "node_modules/",
            ".env",
            "build/",
            "App.js (ton code source)"
      ],
            "correctIndex": 3,
            "correction": "App.js est ton code source réel — il doit rester suivi par Git. node_modules/, .env et build/ sont respectivement du code généré et des secrets : à ignorer systématiquement."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Après avoir choisi la bonne version dans un fichier en conflit et supprimé les marqueurs <<<<<<< ======= >>>>>>>, que fais-tu ensuite ?",
            "options": [
            "git add le fichier, puis git commit",
            "git push directement",
            "git reset --hard",
            "Rien, c'est déjà terminé"
      ],
            "correctIndex": 0,
            "correction": "git add nom-du-fichier marque le conflit comme résolu aux yeux de Git, puis git commit finalise la fusion (le message est souvent déjà pré-rempli automatiquement)."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Affiche l'historique des commits en une ligne chacun.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git log --oneline"
                              ],
                              "output": "a3f9c2e fix: corrige le titre\n7c1e4aa feat: ajoute le tri par date\n9de4781 Sauvegarde initiale"
                        }
                  ]
            },
            "correction": "Chaque ligne = un SHA court (identifiant unique du commit) + son message. Le commit tout en haut (a3f9c2e) est le plus récent — c'est celui que désigne HEAD."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Quelle est la toute première étape du flow d'une Pull Request ?",
            "options": [
            "Ouvrir la PR sur GitHub",
            "Créer une branche et committer dessus",
            "Fusionner la PR",
            "Pousser la branche sur le remote"
      ],
            "correctIndex": 1,
            "correction": "L'ordre complet : créer une branche + committer → pousser la branche (git push -u origin ...) → ouvrir la PR sur GitHub → la fusionner une fois relue/approuvée."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Tu veux corriger un bug JS déjà en production, SANS repasser par le store. Quelle commande utilises-tu ?",
            "options": [
            "eas build",
            "eas submit",
            "eas update",
            "npx expo start"
      ],
            "correctIndex": 2,
            "correction": "eas update pousse un changement JS/assets directement aux utilisateurs qui ont déjà l'app installée, sans nouveau passage par le store. eas build fabrique un nouveau fichier installable, eas submit l'envoie au store — deux étapes bien plus lourdes pour un simple correctif JS."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Ton app affiche une erreur bizarre après avoir installé une nouvelle lib. Relance le serveur de dev en vidant complètement le cache.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "npx expo start -c"
                              ],
                              "output": "Cache Metro vidé.\nDémarrage du serveur de développement…"
                        }
                  ]
            },
            "correction": "npx expo start -c force Metro à tout recompiler depuis zéro, en ignorant l'ancien bundle mis en cache — le premier réflexe avant de creuser plus loin."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Tu veux une URL d'API différente entre ton build \"preview\" et ton build \"production\". Où configures-tu ça ?",
            "options": [
            "Dans app.json uniquement",
            "Dans package.json",
            "Ce n'est pas possible avec Expo",
            "Dans eas.json, avec un profil par environnement"
      ],
            "correctIndex": 3,
            "correction": "eas.json permet de définir plusieurs profils (preview, production…), chacun avec ses propres variables d'environnement. app.json reste l'identité générale de l'app (nom, icône, permissions), commune à tous les profils."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Ton téléphone n'est pas sur le même wifi que ton PC. Démarre Metro avec un tunnel pour qu'il puisse quand même s'y connecter.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "npx expo start --tunnel"
                              ],
                              "output": "Tunnel ngrok établi.\nScanne le QR code pour te connecter depuis n'importe quel réseau."
                        }
                  ]
            },
            "correction": "--tunnel fait transiter la connexion par un service externe (ngrok), plutôt que par le réseau local — plus lent, mais fonctionne même si le téléphone et le PC ne sont pas sur le même wifi."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Tu viens d'installer une librairie avec du code natif custom. Expo Go suffit-il pour la tester ?",
            "options": [
            "Non, il faut un Dev Client (rebuild nécessaire)",
            "Oui, Expo Go gère tout automatiquement",
            "Seulement sur Android",
            "Seulement si la lib est gratuite"
      ],
            "correctIndex": 0,
            "correction": "Expo Go ne contient que les librairies natives déjà incluses par défaut. Une lib avec du code natif custom demande un Dev Client — à reconstruire à chaque nouvelle lib native, mais pas à chaque changement de JS ensuite."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Compile un APK de debug.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "./gradlew assembleDebug"
                              ],
                              "output": "BUILD SUCCESSFUL in 24s\n34 actionable tasks: 34 executed"
                        }
                  ]
            },
            "correction": "assembleDebug fabrique le fichier .apk debug dans build/outputs/apk/debug/, sans l'installer. Pour build ET installer directement sur l'appareil connecté, il aurait fallu installDebug à la place."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Vérifie qu'un appareil Android est bien détecté par ton PC.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "adb devices"
                              ],
                              "output": "List of devices attached\nR58N30XXXXX\tdevice"
                        }
                  ]
            },
            "correction": "adb devices est toujours le premier réflexe avant toute autre commande adb — si l'appareil n'apparaît pas ici (ou apparaît en \"unauthorized\"), rien d'autre ne fonctionnera."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Juste avant de publier ton app, tu veux vérifier les vraies performances et le comportement de la caméra. Tu utilises :",
            "options": [
            "L'émulateur",
            "Un vrai téléphone",
            "Les deux sont strictement équivalents",
            "Aucun test n'est nécessaire"
      ],
            "correctIndex": 1,
            "correction": "L'émulateur est parfait pour le développement au quotidien, mais la caméra, le GPS et les performances réelles ne sont fiables qu'avec un vrai appareil — indispensable en dernière vérification avant publication."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Tu perds ton fichier keystore utilisé pour les précédents builds release. Peux-tu quand même publier une mise à jour de ton app existante ?",
            "options": [
            "Oui, sans aucun problème",
            "Oui, mais seulement via l'AAB",
            "Non, plus jamais sous le même identifiant",
            "Seulement en contactant Google"
      ],
            "correctIndex": 2,
            "correction": "Sans le même keystore (même clé privée), Android considère que la mise à jour vient d'un développeur différent et la refuse. Le keystore doit être sauvegardé précieusement dès le premier build release — jamais dans Git."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Une rotation d'écran DÉTRUIT l'Activity par défaut. Comment préserver le texte qu'un utilisateur est en train de taper ?",
            "options": [
            "Ne rien faire, Android s'en occupe seul",
            "Empêcher toute rotation de l'écran",
            "Utiliser uniquement une variable locale",
            "Le stocker dans un ViewModel"
      ],
            "correctIndex": 3,
            "correction": "Une variable locale est réinitialisée à chaque recréation de l'Activity (donc à chaque rotation). Un ViewModel survit à cette recréation — c'est l'outil standard pour ce genre de donnée, avec onSaveInstanceState comme alternative pour de petites données."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Où dois-tu lancer un appel réseau bloquant pour ne pas geler l'interface de l'app ?",
            "options": [
            "Sur Dispatchers.IO, dans une coroutine",
            "Directement dans la fonction, sur le thread principal",
            "Peu importe, Kotlin gère ça tout seul",
            "Uniquement dans onCreate()"
      ],
            "correctIndex": 0,
            "correction": "Le thread principal (UI thread) gère aussi l'affichage — un appel réseau bloquant dessus gèle l'interface, voire déclenche une erreur ANR. Dispatchers.IO est optimisé pour ce genre d'opération bloquante, dans une coroutine lancée via lifecycleScope ou viewModelScope."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Mets à jour la liste des paquets disponibles (sans encore rien installer).",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "sudo apt update"
                              ],
                              "output": "[sudo] Mot de passe de user :\nRéception de : 1 http://archive.ubuntu.com/ubuntu…\nTous les paquets sont à jour."
                        }
                  ]
            },
            "correction": "sudo apt update nécessite les droits administrateur car il touche à la configuration système partagée — d'où le mot de passe demandé. Il ne fait que rafraîchir la LISTE des paquets, rien n'est encore installé."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Cherche si un paquet lié à \"htop\" existe dans les dépôts.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "apt search htop"
                              ],
                              "output": "htop/stable 3.2.2-1 amd64\n  interactive processes viewer"
                        }
                  ]
            },
            "correction": "apt search interroge la liste locale des paquets disponibles (mise à jour par le dernier apt update) — pas besoin de sudo puisque ça ne fait que consulter, sans rien modifier sur le système."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Le port 8081 semble déjà utilisé par un vieux serveur Metro. Trouve quel processus l'occupe.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "sudo ss -tulpn | grep :8081"
                              ],
                              "output": "tcp   LISTEN  0  511  0.0.0.0:8081  0.0.0.0:*  users:((\"node\",pid=48213,fd=22))"
                        }
                  ]
            },
            "correction": "Le PID 48213 (processus node) occupe le port 8081. L'étape suivante serait kill -9 48213 pour le libérer, avant de relancer ton propre serveur."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Un service vient de planter. Où cherches-tu ses logs en premier ?",
            "options": [
            "/etc",
            "/var/log",
            "/usr",
            "/tmp"
      ],
            "correctIndex": 1,
            "correction": "/var contient les données qui changent souvent, notamment les logs dans /var/log. /etc contient la CONFIGURATION (pas les logs), /usr les programmes installés, /tmp des fichiers temporaires effacés au redémarrage."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Que désigne l'adresse 127.0.0.1, quel que soit le réseau sur lequel tu es connecté ?",
            "options": [
            "Le routeur wifi",
            "Un serveur externe par défaut",
            "Toujours ta propre machine (localhost)",
            "Une adresse toujours invalide"
      ],
            "correctIndex": 2,
            "correction": "127.0.0.1 (alias \"localhost\") pointe toujours vers TA PROPRE machine — c'est pour ça qu'un serveur de dev lancé localement est accessible via localhost:PORT, peu importe le réseau."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Génère une nouvelle paire de clés SSH moderne pour te connecter à GitHub.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "ssh-keygen -t ed25519 -C \"toi@email.com\"",
                                    "ssh-keygen -t ed25519 -C 'toi@email.com'"
                              ],
                              "output": "Generating public/private ed25519 key pair.\nYour identification has been saved in /home/user/.ssh/id_ed25519\nYour public key has been saved in /home/user/.ssh/id_ed25519.pub"
                        }
                  ]
            },
            "correction": "Deux fichiers sont créés : id_ed25519 (clé PRIVÉE, ne jamais partager) et id_ed25519.pub (clé PUBLIQUE, celle que tu colles dans les paramètres GitHub)."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Vérifie l'état actuel du service Docker.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "sudo systemctl status docker"
                              ],
                              "output": "● docker.service - Docker Application Container Engine\n     Active: active (running) since…"
                        }
                  ]
            },
            "correction": "systemctl status est toujours le premier réflexe pour diagnostiquer un service : il montre s'il tourne, depuis quand, et ses derniers logs, avant d'agir dessus avec start/stop/restart."
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
        text: "minute heure jour-du-mois mois jour-de-semaine commande\n\nExemple : 0 3 * * * /home/user/backup.sh\n→ exécute backup.sh tous les jours à 3h00 du matin (chaque * signifie \"à chaque valeur possible\" pour cette position)."
      },
      {
        heading: "Tester avant de programmer",
        text: "Lance TOUJOURS la commande manuellement dans le terminal avant de la programmer dans cron, pour vérifier qu'elle fonctionne correctement. Si elle échoue une fois programmée, cron ne t'avertit pas visiblement — l'échec passe facilement inaperçu pendant des semaines."
      }
    ],
    exercises: [
      {
            "type": "fillin",
            "instruction": "Écris la ligne cron complète qui exécute /home/user/backup.sh tous les jours à 3h00 du matin.",
            "accept": [
                  "0 3 * * * /home/user/backup.sh"
            ],
            "correction": "0 3 * * * /home/user/backup.sh\n\nminute=0, heure=3, jour-du-mois=* (tous), mois=* (tous), jour-de-semaine=* (tous) → tous les jours à 3h00 pile."
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
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Un collègue te dit \"ça marche chez moi mais pas sur le serveur\". En quoi Docker aurait pu éviter ce problème ?",
            "options": [
            "En étant simplement plus rapide que le code normal",
            "En remplaçant le serveur",
            "Docker ne change rien à ce genre de problème",
            "En empaquetant l'app ET son environnement dans une image identique partout"
      ],
            "correctIndex": 3,
            "correction": "Docker empaquette l'app avec TOUT son environnement (versions, dépendances, config) dans une image — garantissant qu'elle tourne à l'identique sur n'importe quelle machine ayant Docker, sans divergence possible entre \"chez toi\" et le serveur."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Liste les conteneurs actuellement en cours d'exécution.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "docker ps"
                              ],
                              "output": "CONTAINER ID   IMAGE      STATUS         PORTS\nf3a1b2c9d0e4   postgres   Up 2 hours     5432/tcp"
                        }
                  ]
            },
            "correction": "docker ps montre les CONTENEURS (instances vivantes), pas les images. Une seule image (ex: postgres) peut donner naissance à plusieurs conteneurs différents lancés à des moments différents."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Démarre toute la stack décrite dans docker-compose.yml, en arrière-plan.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "docker compose up -d"
                              ],
                              "output": "[+] Running 3/3\n ✔ Container app-db-1        Started\n ✔ Container app-backend-1   Started\n ✔ Container app-redis-1     Started"
                        }
                  ]
            },
            "correction": "up -d démarre TOUS les services décrits dans le fichier en une seule commande, en arrière-plan (-d = detached), avec un réseau privé automatiquement créé pour qu'ils communiquent entre eux par leur nom."
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
        text: "Pour un script : chmod +x nom-du-script.sh, puis relance.\nPour un fichier/dossier système : ajoute sudo devant la commande SEULEMENT si tu comprends pourquoi c'est nécessaire.\n\nVoir aussi : [[Linux Mint::sudo et les permissions, sans y laisser des plumes]] et [[Bases du terminal::Les permissions de fichiers en détail]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Rends le script deploy.sh exécutable pour pouvoir le lancer.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "chmod +x deploy.sh"
                              ],
                              "output": "(le script est maintenant exécutable)"
                        }
                  ]
            },
            "correction": "chmod +x ajoute uniquement le droit d'exécution, sans toucher aux autres permissions du fichier — le correctif standard pour ./script.sh: Permission denied."
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
        text: "1. sudo ss -tulpn | grep :8081 (remplace 8081 par ton port) → trouve le PID qui occupe le port.\n2. kill -9 PID pour le libérer.\n3. Relance ta commande.\n\nVoir aussi : [[Linux Mint::Réseau pour les nuls : IP, port, DNS]] et [[Linux Mint::Processus, ports, RAM : pourquoi ça rame]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Le port 8081 est occupé par un vieux processus (PID 48213). Libère-le.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "kill -9 48213"
                              ],
                              "output": "(le processus 48213 est arrêté, le port 8081 est libéré)"
                        }
                  ]
            },
            "correction": "kill -9 PID force l'arrêt immédiat du processus identifié précédemment (via sudo ss -tulpn | grep :8081), libérant le port pour ton propre serveur."
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
        text: "1. Vérifie l'orthographe exacte de la commande.\n2. Demande-toi si le logiciel est vraiment installé (souvent via apt install nom-du-logiciel).\n3. which nom-de-la-commande confirme si le shell le trouve ou non.\n\nVoir aussi : [[Bases du terminal::Variables d'environnement et PATH]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Vérifie si node est réellement installé et trouvable par le shell.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "which node"
                              ],
                              "output": "/usr/bin/node"
                        }
                  ]
            },
            "correction": "which confirme immédiatement si le programme existe et est dans le PATH. Une absence de résultat confirmerait qu'il faut l'installer (souvent via apt ou un gestionnaire de versions Node)."
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
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "adb ne détecte plus ton téléphone correctement. Redémarre le serveur adb.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "adb kill-server && adb start-server"
                              ],
                              "output": "* daemon stopped successfully *\n* daemon started successfully *"
                        }
                  ]
            },
            "correction": "Ce redémarrage corrige la grande majorité des soucis de détection (\"device offline\", appareil qui n'apparaît plus) sans avoir besoin de redémarrer le téléphone ou le PC."
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
        text: "npx expo start -c relance le serveur en vidant complètement le cache. Si ça ne suffit pas : npx expo-doctor pour vérifier la cohérence générale du projet.\n\nVoir aussi : [[Expo / React Native::Metro, le serveur qui recharge ton app]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Tu viens de modifier metro.config.js et l'app se comporte bizarrement. Relance le serveur en vidant le cache.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "npx expo start -c"
                              ],
                              "output": "Cache Metro vidé.\nDémarrage du serveur de développement…"
                        }
                  ]
            },
            "correction": "Le cache de Metro peut contenir une version compilée AVANT ton changement de config — -c force à tout recompiler depuis zéro en tenant compte de la nouvelle configuration."
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
        text: "git pull (ou git pull --rebase pour un historique plus propre) rapatrie d'abord les commits manquants, éventuellement avec un conflit à résoudre (voir [[Git::Les conflits de fusion (merge conflicts)]]). Une fois à jour, git push repasse normalement.\n\n⚠️ Ne JAMAIS utiliser git push --force sur une branche partagée sans être sûr de ce que ça écrase — ça peut effacer le travail de quelqu'un d'autre."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Ton push est rejeté car le remote a des commits que tu n'as pas. Récupère-les proprement.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "git pull --rebase"
                              ],
                              "output": "Rebasing (1/1)\nSuccessfully rebased and updated refs/heads/master."
                        }
                  ]
            },
            "correction": "git pull --rebase rapatrie les commits manquants et rejoue les tiens par-dessus, donnant un historique linéaire (plutôt qu'un commit de merge). Une fois à jour, git push repasse normalement."
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
        text: "Voir la fiche complète [[Git::Les conflits de fusion (merge conflicts)]] — résumé : choisis/combine le bon contenu, supprime les marqueurs, git add le fichier, puis git commit."
      }
    ],
    exercises: [
      {
            "type": "quiz",
            "instruction": "Ces symboles apparaissent dans un fichier après un git pull. De quoi s'agit-il ?",
            "options": [
            "Un conflit de fusion Git à résoudre manuellement",
            "Une corruption du fichier",
            "Un virus",
            "Un format de fichier inconnu"
      ],
            "correctIndex": 0,
            "correction": "Git n'a pas réussi à fusionner automatiquement deux versions d'un même fichier et insère ces marqueurs à l'endroit exact du désaccord, pour que tu choisisses manuellement quoi garder avant de supprimer les marqueurs et de committer."
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
        text: "Dans un projet Expo, npx expo install --fix aligne automatiquement les versions sur ce qu'attend le SDK — souvent suffisant. Sinon, vérifie manuellement dans le message d'erreur QUELLE version est attendue vs installée, et ajuste dans package.json.\n\nVoir aussi : [[Bases du terminal::npm & npx, et package.json en détail]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Un projet Expo a des versions de dépendances incompatibles avec le SDK. Corrige ça automatiquement.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "npx expo install --fix"
                              ],
                              "output": "Certaines dépendances ne correspondent pas au SDK installé :\n  react-native@0.72.0 - attendu : 0.73.6\nCorrection en cours…"
                        }
                  ]
            },
            "correction": "npx expo install --fix aligne automatiquement les versions installées sur ce qu'attend le SDK Expo du projet — souvent suffisant sans avoir à modifier package.json à la main."
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
        text: "sudo systemctl status docker pour vérifier son état, puis sudo systemctl start docker pour le lancer. Pour qu'il démarre automatiquement à chaque redémarrage : sudo systemctl enable docker.\n\nVoir aussi : [[Linux Mint::systemd et les services]]."
      }
    ],
    exercises: [
      {
            "type": "terminal",
            "instruction": "Le service Docker n'est pas démarré. Démarre-le.",
            "terminal": {
                  "prompt": "user@mint:~/cmd-hub$",
                  "steps": [
                        {
                              "expect": [
                                    "sudo systemctl start docker"
                              ],
                              "output": "(le service docker est démarré)"
                        }
                  ]
            },
            "correction": "Le \"daemon\" Docker est le service en arrière-plan sans lequel AUCUNE commande docker ne peut fonctionner — sudo systemctl start docker le lance."
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
        text: "Crée (ou complète) un fichier local.properties à la racine du dossier android/ du projet, avec une ligne :\n\nsdk.dir=/home/user/Android/Sdk\n\n(adapte le chemin à l'emplacement réel de ton SDK, visible dans Android Studio → Settings → Android SDK)."
      }
    ],
    exercises: [
      {
            "type": "fillin",
            "instruction": "Ton SDK Android est installé dans /home/user/Android/Sdk. Quelle ligne dois-tu ajouter dans android/local.properties pour corriger l'erreur ?",
            "accept": [
                  "sdk.dir=/home/user/Android/Sdk"
            ],
            "correction": "sdk.dir=/home/user/Android/Sdk\n\nCe fichier n'est pas versionné dans Git (le chemin est propre à chaque machine) — il faut le recréer soi-même sur une nouvelle machine ou après une réinstallation."
      }
]
  },

  // --- Claude Code ---------------------------------------
  {
    category: "Claude Code",
    title: "Claude Code, à quoi ça sert vraiment ?",
    level: "🟢 Débutant",
    summary: "La différence avec le chat web : Claude Code lit ton code, exécute des commandes, et agit directement dans ton projet.",
    content: [
      {
        heading: "Chat classique vs Claude Code",
        text: "Sur claude.ai, tu copies-colles du code dans une conversation, Claude te répond, tu recopies sa réponse toi-même. Claude Code inverse ça : il tourne DANS ton terminal, à la racine de ton projet, et peut directement lire tes fichiers, en écrire de nouveaux, exécuter des commandes (git, npm, tests…) et voir le résultat — sans que tu aies à copier-coller quoi que ce soit."
      },
      {
        heading: "\"Agentique\", ça veut dire quoi",
        text: "Claude Code ne se contente pas de répondre à une question : il peut décider tout seul d'utiliser des outils (lire un fichier, chercher dans le code, lancer une commande) pour accomplir une tâche, observer le résultat, puis décider de la suite — plusieurs allers-retours enchaînés automatiquement avant de te répondre. C'est ce qu'on appelle un agent."
      },
      {
        heading: "Il ne fait rien sans ton accord (par défaut)",
        text: "Par défaut, Claude Code te demande confirmation avant chaque action qui modifie quelque chose (écrire un fichier, exécuter une commande). Tu restes maître de ce qui se passe réellement sur ta machine — voir [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] pour les nuances."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Quelle est la différence fondamentale entre claude.ai (le chat web) et Claude Code ?",
        options: [
          "Claude Code peut lire/écrire des fichiers et exécuter des commandes directement dans ton projet",
          "Claude Code est simplement une version plus rapide du chat",
          "Il n'y a aucune différence, c'est la même chose",
          "Claude Code ne fonctionne que hors ligne"
        ],
        correctIndex: 0,
        correction: "Le chat web répond à des messages, sans accès à tes fichiers. Claude Code tourne dans ton terminal et peut directement interagir avec ton projet (lire, écrire, exécuter) — c'est ce qui en fait un agent plutôt qu'un simple chatbot."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Sessions : continuer, reprendre, repartir de zéro",
    level: "🟢 Débutant",
    summary: "claude -c, claude -r, /clear : trois façons différentes de gérer l'historique d'une session, pour trois besoins différents.",
    content: [
      {
        heading: "claude -c : continuer là où tu en étais",
        text: "Recharge automatiquement la conversation la plus récente de ce dossier. Le cas d'usage le plus courant : tu fermes ton terminal en fin de journée, tu reviens le lendemain, claude -c te remet exactement dans le contexte où tu t'étais arrêté."
      },
      {
        heading: "claude -r : choisir une session précise",
        text: "Si tu as travaillé sur plusieurs sujets dans le même dossier (une fonctionnalité lundi, un bugfix mardi), claude -c ne reprend que LA DERNIÈRE. claude -r affiche un sélecteur de toutes tes sessions passées pour choisir précisément laquelle reprendre."
      },
      {
        heading: "/clear : effacer sans quitter",
        text: "Contrairement à -c et -r qui se tapent AVANT de lancer Claude Code, /clear s'utilise À L'INTÉRIEUR d'une session déjà ouverte. Utile quand tu changes complètement de sujet en cours de route et que l'ancien contexte n'a plus d'intérêt (voire ralentit/pollue les réponses)."
      },
      {
        heading: "Quand ne PAS reprendre une session",
        text: "Si le sujet est complètement différent (tu passais du frontend au debug d'un serveur), repartir sans -c/-r (juste claude tout court) évite de mélanger deux contextes sans rapport — souvent plus efficace qu'un /clear en cours de session."
      }
    ],
    exercises: [
      {
        type: "terminal",
        instruction: "Tu fermes ton terminal hier en plein milieu d'une tâche. Reprends la conversation là où tu l'avais laissée.",
        terminal: {
          prompt: "user@mint:~/mon-projet$",
          steps: [
            { expect: ["claude -c"], output: "(la session la plus récente de ce dossier est rechargée, avec tout son contexte)" }
          ]
        },
        correction: "claude -c reprend automatiquement la DERNIÈRE conversation de ce dossier, sans rien te demander — le raccourci le plus rapide pour continuer un travail en cours."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "CLAUDE.md : donner du contexte permanent à Claude",
    level: "🟢 Débutant",
    summary: "Un fichier que Claude Code lit automatiquement à chaque démarrage, pour ne pas avoir à réexpliquer ton projet à chaque session.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Sans CLAUDE.md, tu réexpliquerais à chaque nouvelle session : \"ce projet utilise telle stack, les tests se lancent avec telle commande, ne touche jamais à tel dossier généré\"… CLAUDE.md élimine cette répétition : Claude le lit automatiquement au démarrage, avant même ton premier message."
      },
      {
        heading: "Où il vit, et ce qu'on y met",
        text: "À la racine du projet (ou dans .claude/). On y met typiquement : les commandes utiles (build, test, lint), les conventions de code du projet, les pièges connus (\"ce dossier est généré, ne jamais l'éditer à la main\"), et tout ce qui n'est pas déductible du code lui-même."
      },
      {
        heading: "/init pour démarrer",
        text: "Plutôt que d'écrire ce fichier à la main depuis zéro, /init demande à Claude d'analyser le projet (structure, dépendances, scripts) et de générer un premier CLAUDE.md à compléter/ajuster ensuite toi-même."
      },
      {
        heading: "Ne pas y mettre ce que le code dit déjà",
        text: "CLAUDE.md doit contenir ce qui n'est PAS déductible en lisant le code (contexte, décisions, pièges) — pas une redite de la structure des fichiers ou de l'historique Git, que Claude peut déjà consulter lui-même."
      }
    ],
    exercises: [
      {
        type: "terminal",
        instruction: "Tu démarres sur un nouveau projet sans CLAUDE.md. Génère-en un premier à partir de l'analyse du code.",
        terminal: {
          prompt: "> ",
          steps: [
            { expect: ["/init"], output: "Analyse du projet en cours…\nCLAUDE.md généré à la racine du projet." }
          ]
        },
        correction: "/init fait analyser le projet par Claude (structure, dépendances, scripts disponibles) et génère un premier CLAUDE.md — un bon point de départ à ajuster ensuite avec le contexte que seul toi connais (pièges, décisions passées, conventions maison)."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Les modes de permission : plan, auto-accept, manuel",
    level: "🟡 Intermédiaire",
    summary: "Comprendre à quel point tu gardes la main sur ce que Claude Code fait réellement sur ta machine.",
    content: [
      {
        heading: "Le mode par défaut : confirmation à chaque action",
        text: "Par défaut, Claude Code te demande confirmation avant chaque action qui modifie quelque chose (écrire un fichier, exécuter une commande potentiellement risquée). Tu vois exactement ce qui va se passer avant que ça n'arrive."
      },
      {
        heading: "Le mode plan : réfléchir avant d'agir",
        text: "claude --permission-mode plan (ou basculer en mode plan en cours de session) force Claude à d'abord PROPOSER un plan détaillé, sans toucher à rien, que tu valides ou ajustes avant que la moindre action ne soit exécutée. Idéal pour une tâche complexe où tu veux valider l'approche avant l'exécution."
      },
      {
        heading: "--dangerously-skip-permissions : le mode sans filet",
        text: "Supprime TOUTES les confirmations — Claude agit sans jamais demander. Utile UNIQUEMENT dans un environnement jetable/isolé (un conteneur Docker, une VM de CI) où une erreur n'a aucune conséquence réelle. ⚠️ Jamais sur une machine avec des données importantes ou des accès sensibles (identifiants, clés API, production)."
      },
      {
        heading: "/permissions pour ajuster finement",
        text: "Plutôt que tout accepter ou tout confirmer, /permissions permet de préciser quels outils/actions spécifiques Claude peut exécuter automatiquement (ex: toujours autoriser la lecture de fichiers, mais toujours demander avant un git push)."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux que Claude te propose un plan détaillé AVANT de toucher à quoi que ce soit sur une tâche complexe. Quelle option utilises-tu ?",
        options: [
          "claude --dangerously-skip-permissions",
          "claude --permission-mode plan",
          "/clear",
          "claude -c"
        ],
        correctIndex: 1,
        correction: "Le mode plan force Claude à réfléchir et présenter une approche complète avant toute exécution — rien n'est modifié tant que tu n'as pas validé le plan. --dangerously-skip-permissions fait l'inverse : aucune confirmation, jamais."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Gérer le contexte : pourquoi et quand utiliser /compact",
    level: "🟡 Intermédiaire",
    summary: "Une conversation trop longue finit par saturer la fenêtre de contexte — /compact la résume sans tout perdre.",
    content: [
      {
        heading: "La fenêtre de contexte, en bref",
        text: "Claude ne \"voit\" qu'une quantité limitée de texte à la fois (la conversation entière, fichiers lus compris). Plus une session dure longtemps, plus ce contexte se remplit — jusqu'à devenir un facteur limitant : moins de place pour lire de nouveaux fichiers, réponses potentiellement moins précises."
      },
      {
        heading: "/compact : résumer sans repartir de zéro",
        text: "Condense la conversation en cours en un résumé plus court, en gardant l'essentiel (décisions prises, état d'avancement), et libère ainsi de la place — SANS perdre complètement le fil comme le ferait /clear."
      },
      {
        heading: "Orienter le résumé",
        text: "/compact accepte une instruction pour préciser ce qui doit absolument être conservé : /compact garde en détail le plan d'implémentation et les fichiers déjà modifiés — utile pour ne pas perdre une information précise pendant la compression."
      },
      {
        heading: "/compact vs /clear",
        text: "/compact garde une trace résumée de tout ce qui précède. /clear efface complètement — à réserver aux changements de sujet complets, où l'ancien contexte n'apporte plus rien (voir [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]])."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Ta session dure depuis plusieurs heures sur LE MÊME sujet, et tu sens que Claude commence à manquer de contexte disponible. Tu veux garder le fil sans tout perdre. Que fais-tu ?",
        options: ["/clear", "/compact", "claude -r", "Rien, ce n'est pas un problème"],
        correctIndex: 1,
        correction: "/compact résume la conversation pour libérer de la place tout en gardant l'essentiel — contrairement à /clear qui efface complètement l'historique, à réserver à un changement de sujet total."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Sous-agents : déléguer des tâches spécialisées",
    level: "🔴 Avancé",
    summary: "Confier une sous-tâche à un agent dédié, avec son propre contexte isolé, plutôt que de tout faire dans la conversation principale.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Certaines tâches (explorer un gros codebase à la recherche d'un pattern précis, faire une revue de code exhaustive) consomment énormément de contexte si elles sont faites directement dans la conversation principale — au détriment du reste de la tâche en cours."
      },
      {
        heading: "Un sous-agent, concrètement",
        text: "Un sous-agent est une instance de Claude à part, avec son PROPRE contexte isolé et souvent un prompt/rôle spécialisé (ex: un agent dédié à la revue de sécurité, un autre à l'exploration de code). La conversation principale lui délègue une tâche précise, récupère uniquement le résultat final — pas tout le raisonnement intermédiaire qui a été nécessaire pour y arriver."
      },
      {
        heading: "/agents pour les gérer",
        text: "Liste, crée ou modifie les sous-agents disponibles pour le projet. Chaque agent peut avoir ses propres outils autorisés et ses propres instructions, adaptés à sa spécialité."
      },
      {
        heading: "Quand ça vaut le coup",
        text: "Pour une tâche ponctuelle simple, déléguer à un sous-agent ajoute de la complexité pour rien. Ça devient utile pour des recherches/analyses volumineuses dont seul le résultat final compte, ou pour des tâches répétées qui bénéficient d'un rôle/prompt dédié et réutilisable."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Pourquoi déléguer une exploration massive de code à un sous-agent plutôt que de la faire dans la conversation principale ?",
        options: [
          "C'est plus rapide dans tous les cas",
          "Ça isole le contexte volumineux de cette recherche, sans polluer la conversation principale",
          "Les sous-agents sont gratuits contrairement à la conversation principale",
          "Ce n'est jamais utile, autant tout faire dans la conversation principale"
        ],
        correctIndex: 1,
        correction: "Un sous-agent a son propre contexte isolé : tout le travail intermédiaire (fichiers lus, essais, raisonnement) reste chez lui, et seul le résultat final remonte à la conversation principale — qui garde ainsi de la place pour le reste de la tâche."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "MCP : connecter Claude à d'autres outils",
    level: "🔴 Avancé",
    summary: "Model Context Protocol : le standard qui permet à Claude Code de se connecter à des services externes (bases de données, APIs, autres outils).",
    content: [
      {
        heading: "Le problème que MCP résout",
        text: "Par défaut, Claude Code sait lire/écrire des fichiers et exécuter des commandes shell. Mais pour interagir directement avec un service externe (une base de données, l'API d'un outil tiers, un service interne à ton entreprise), il faudrait un connecteur spécifique à chaque fois."
      },
      {
        heading: "MCP, un standard plutôt que du sur-mesure",
        text: "MCP (Model Context Protocol) est un protocole ouvert : n'importe quel outil peut exposer un \"serveur MCP\" que Claude Code (ou d'autres assistants IA compatibles) sait utiliser directement, sans intégration spécifique à écrire à chaque fois."
      },
      {
        heading: "Un serveur MCP, concrètement",
        text: "Un serveur MCP expose un ensemble d'actions possibles (ex: \"chercher un fichier dans Google Drive\", \"créer une issue GitHub\") que Claude peut appeler comme n'importe quel autre outil, au moment où c'est pertinent pour la tâche en cours."
      },
      {
        heading: "Ajouter et gérer les serveurs",
        text: "claude mcp add connecte un nouveau serveur MCP au projet ou globalement. /mcp (en cours de session) permet de voir les serveurs actuellement connectés et leur statut."
      }
    ],
    exercises: [
      {
        type: "terminal",
        instruction: "Vérifie quels serveurs MCP sont actuellement configurés.",
        terminal: {
          prompt: "user@mint:~/mon-projet$",
          steps: [
            { expect: ["claude mcp list"], output: "Serveurs MCP configurés :\n  github    connecté\n  filesystem connecté" }
          ]
        },
        correction: "claude mcp list affiche les serveurs MCP actuellement connectés depuis le terminal (hors session). Une fois dans une session, /mcp donne la même information sans avoir à en sortir."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Bien démarrer un nouveau projet",
    level: "🟢 Débutant",
    summary: "Les premiers réflexes en arrivant sur un projet, neuf ou existant, pour que Claude Code parte du bon pied.",
    content: [
      {
        heading: "Se placer à la racine du projet",
        text: "Toujours lancer claude depuis la racine du projet (là où se trouve .git, package.json, etc.), jamais depuis un sous-dossier — Claude explore le projet à partir de son dossier de lancement, un mauvais point de départ limite ce qu'il voit sans que ce soit évident."
      },
      {
        heading: "Sur un projet existant : générer un CLAUDE.md avant de coder",
        text: "Avant de demander la première vraie tâche, /init laisse Claude analyser la structure, les dépendances et les scripts disponibles pour générer un premier CLAUDE.md — tu évites ainsi de réexpliquer le projet à la main, et les sessions suivantes partent avec ce contexte déjà en place. Voir [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        heading: "Commencer petit, vérifier, puis élargir",
        text: "Pour la première vraie tâche, préférer une demande précise et vérifiable (corriger un bug ciblé, ajouter un test) plutôt qu'une demande large et vague (\"améliore le projet\") — le temps de voir comment Claude travaille sur CE projet précis, avant de lui confier quelque chose de plus ambitieux."
      },
      {
        heading: "Mode plan pour une première tâche conséquente",
        text: "Si la première tâche touche beaucoup de fichiers ou une partie sensible du projet, démarrer en mode plan (claude --permission-mode plan) permet de valider l'approche avant que quoi que ce soit ne soit modifié. Voir [[Claude Code::Les modes de permission : plan, auto-accept, manuel]]."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu arrives sur un projet existant que tu ne connais pas encore. Quelle est la première chose à faire avant de demander une vraie tâche ?",
        options: [
          "Lancer /init pour générer un CLAUDE.md à partir de l'analyse du projet",
          "Demander directement une grosse refonte pour gagner du temps",
          "Copier-coller tout le code dans le message",
          "Désactiver toutes les confirmations avec --dangerously-skip-permissions"
        ],
        correctIndex: 0,
        correction: "/init donne à Claude une vision structurée du projet (dépendances, scripts, conventions) avant même la première tâche — ça évite de tout réexpliquer à la main et ça fiabilise les sessions suivantes."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Choisir le bon agent selon la tâche",
    level: "🔴 Avancé",
    summary: "Un agent généraliste ne convient pas à tout : exploration en lecture seule, planification, tâche spécialisée récurrente — chacun a son usage.",
    content: [
      {
        heading: "Agent généraliste : le choix par défaut",
        text: "Pour une tâche qui mélange plusieurs types d'actions (chercher, modifier, tester), un agent généraliste polyvalent convient dans la majorité des cas — c'est celui que Claude Code utilise par défaut quand tu délègues une tâche sans préciser autre chose."
      },
      {
        heading: "Agent d'exploration : quand tu veux juste une réponse, pas des fichiers modifiés",
        text: "Pour une recherche large dans un code que tu ne connais pas encore (\"où est gérée l'authentification ?\"), un agent dédié à l'exploration en LECTURE SEULE évite tout risque de modification accidentelle, et ne remonte que la conclusion utile — pas le détail de chaque fichier parcouru."
      },
      {
        heading: "Agent de planification : avant une tâche architecturale",
        text: "Pour une tâche qui demande de peser plusieurs approches avant de coder quoi que ce soit (refonte, nouveau module), un agent dédié à la planification produit un plan étape par étape à valider — sans toucher au code tant que le plan n'est pas approuvé."
      },
      {
        heading: "Agents personnalisés : pour un rôle récurrent",
        text: "Si une même spécialité revient régulièrement dans ton projet (revue de sécurité, revue de style, génération de status line), créer un agent dédié via /agents évite de réexpliquer son rôle à chaque fois — voir [[Claude Code::Sous-agents : déléguer des tâches spécialisées]] pour le principe général de délégation."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux savoir où se trouve la logique d'authentification dans un projet que tu découvres, sans prendre le risque qu'un fichier soit modifié par erreur. Quel type d'agent est le plus adapté ?",
        options: [
          "Un agent d'exploration en lecture seule",
          "Un agent avec accès à tous les outils, y compris l'écriture de fichiers",
          "--dangerously-skip-permissions",
          "Aucun agent, il faut toujours tout faire soi-même"
        ],
        correctIndex: 0,
        correction: "Un agent d'exploration en lecture seule peut chercher et lire largement dans le code sans aucun risque de modification — idéal pour une question dont la réponse est \"où / comment\", sans action à effectuer derrière."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Skills : des instructions prêtes à l'emploi",
    level: "🟡 Intermédiaire",
    summary: "Un skill empaquette une façon de faire une tâche récurrente — Claude l'utilise seul quand c'est pertinent, sans que tu aies à tout réexpliquer.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Pour une tâche récurrente avec des règles précises (une checklist de revue de code, une procédure de déploiement, un format de rapport), réexpliquer la procédure à chaque fois est répétitif et source d'oublis. Un skill fige cette procédure une fois pour toutes."
      },
      {
        heading: "Un skill, concrètement",
        text: "Un skill est un jeu d'instructions écrites à l'avance (avec éventuellement des scripts ou des exemples associés), rangé dans un dossier dédié, avec une courte description de quand l'utiliser. Claude Code consulte cette description pour décider tout seul si un skill est pertinent pour la demande en cours."
      },
      {
        heading: "Invocation automatique ou explicite",
        text: "La plupart du temps, Claude choisit lui-même le bon skill en comparant ta demande à la description de chacun — tu n'as rien à taper de spécial. Il reste possible de forcer un skill précis en tapant son nom comme une commande (/nom-du-skill), utile quand plusieurs skills se ressemblent ou pour être explicite."
      },
      {
        heading: "Personnel, projet, ou fourni par un plugin",
        text: "Un skill peut être personnel (utilisable dans tous tes projets), propre à un seul projet (rangé dans son dossier .claude/), ou fourni par un plugin installé — la différence ne change rien à la façon dont Claude l'utilise, seulement à qui y a accès."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Comment Claude Code décide-t-il, la plupart du temps, quel skill utiliser pour une demande donnée ?",
        options: [
          "Il compare la demande à la description de chaque skill disponible, et choisit seul le plus pertinent",
          "Il faut toujours taper le nom exact du skill en commande",
          "Les skills s'activent uniquement au hasard",
          "Un seul skill peut exister par projet"
        ],
        correctIndex: 0,
        correction: "Claude Code compare ta demande à la description de chaque skill disponible et choisit seul celui qui convient, sans que tu aies à taper quoi que ce soit de spécial — tu peux toujours forcer un skill précis en tapant son nom comme une commande si besoin."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Où trouver des agents et des skills",
    level: "🟡 Intermédiaire",
    summary: "Pas besoin de tout écrire soi-même : ce qui existe déjà sur ta machine, les plugins tout faits, et les ressources communautaires.",
    content: [
      {
        heading: "Ceux déjà sur ta machine",
        text: "Avant de chercher ailleurs, vérifier ce qui existe déjà : les agents personnels dans ~/.claude/agents (utilisables dans tous tes projets), les agents de projet dans .claude/agents/ à la racine du repo — même logique pour les skills (~/.claude/skills et .claude/skills/). /agents liste les agents disponibles pour le projet en cours."
      },
      {
        heading: "Les plugins : des packs tout faits",
        text: "Un plugin regroupe souvent plusieurs agents, skills et commandes autour d'un même thème (un langage, un framework, une méthodologie de revue de code…). /plugin permet de parcourir les marketplaces de plugins disponibles et d'en installer un en quelques secondes, sans avoir à écrire quoi que ce soit soi-même."
      },
      {
        heading: "Ajouter une marketplace externe",
        text: "Par défaut, seules certaines marketplaces sont connues. /plugin marketplace add <dépôt> ajoute une source externe (souvent un dépôt GitHub public) pour accéder à ses plugins — une façon courante de profiter d'un pack créé et maintenu par quelqu'un d'autre."
      },
      {
        heading: "La documentation officielle et la communauté",
        text: "La documentation Claude Code référence des exemples officiels d'agents et de skills. Au-delà, des dépôts communautaires sur GitHub rassemblent des agents/skills partagés par d'autres utilisateurs — pratique pour s'inspirer avant d'écrire les siens, voir [[Claude Code::Sous-agents : déléguer des tâches spécialisées]] et [[Claude Code::Skills : des instructions prêtes à l'emploi]] pour les créer soi-même."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux installer un pack tout fait regroupant plusieurs agents et skills autour d'un même thème, sans les écrire toi-même. Que fais-tu ?",
        options: [
          "Utiliser /plugin pour parcourir les marketplaces et en installer un",
          "Copier-coller le code depuis un forum dans le terminal",
          "Ce n'est pas possible, il faut toujours tout écrire soi-même",
          "Réinstaller Claude Code entièrement"
        ],
        correctIndex: 0,
        correction: "/plugin donne accès aux marketplaces de plugins : chacune peut regrouper plusieurs agents, skills et commandes prêts à l'emploi autour d'un thème — une installation en quelques secondes plutôt que tout écrire depuis zéro."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Les loops : relancer une tâche automatiquement",
    level: "🟢 Débutant",
    summary: "Le skill /loop permet de relancer un prompt ou une commande à intervalle régulier, sans avoir à retaper quoi que ce soit.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Sans loop, surveiller quelque chose (l'état d'un déploiement, l'avancement d'une tâche externe) oblige à retaper soi-même la même commande toutes les X minutes — répétitif, et facile à oublier en cours de route."
      },
      {
        heading: "Deux façons de le lancer",
        text: "/loop 5m /ma-commande relance /ma-commande toutes les 5 minutes. /loop tout seul, sans intervalle précisé, laisse Claude choisir lui-même le rythme, itération après itération, selon ce qu'il observe à chaque passage."
      },
      {
        heading: "Ce que Claude fait à chaque itération",
        text: "Il relance le prompt ou la commande donné, regarde le résultat, puis décide de la suite — continuer à surveiller, s'arrêter, ou signaler un changement notable plutôt que de rester silencieux jusqu'à la fin."
      },
      {
        heading: "Comment l'arrêter",
        text: "Une boucle tourne jusqu'à ce qu'on l'arrête explicitement (ou qu'une condition d'arrêt prévue au départ soit atteinte) — pas besoin de fermer tout le terminal, il suffit de demander l'arrêt."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux que Claude relance ta commande /check-deploy toutes les 5 minutes jusqu'à ce que tu l'arrêtes. Quelle commande tapes-tu ?",
        options: [
          "/loop 5m /check-deploy",
          "/check-deploy 5m",
          "claude --interval 5m",
          "/compact 5m"
        ],
        correctIndex: 0,
        correction: "/loop <intervalle> <prompt ou commande> relance ce prompt/cette commande à l'intervalle donné, jusqu'à l'arrêt de la boucle — ici toutes les 5 minutes pour /check-deploy."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Choisir entre intervalle fixe et rythme automatique",
    level: "🟡 Intermédiaire",
    summary: "Un intervalle fixe (/loop 5m ...) ou un rythme que Claude ajuste lui-même selon ce qu'il observe (/loop tout seul) — deux besoins différents.",
    content: [
      {
        heading: "Intervalle fixe : quand le rythme est connu d'avance",
        text: "Si tu sais déjà que la chose à surveiller change à un rythme prévisible (un build qui prend généralement environ 8 minutes), un intervalle fixe proche de cette durée évite de vérifier trop souvent pour rien, ou pas assez souvent."
      },
      {
        heading: "Rythme automatique : quand tu ne sais pas à l'avance",
        text: "Sans préciser d'intervalle, Claude adapte lui-même le délai avant la prochaine vérification, en fonction de ce qu'il constate à chaque itération — utile quand le rythme du changement est imprévisible ou inconnu au départ."
      },
      {
        heading: "Éviter de vérifier pour rien",
        text: "Relancer une vérification toutes les minutes sur quelque chose qui ne change que toutes les heures gaspille des itérations pour rien. Le bon réglage tient compte de la vitesse réelle de ce qu'on surveille, pas d'une habitude par défaut."
      },
      {
        heading: "Une boucle n'est pas toujours la bonne option",
        text: "Pour une tâche ponctuelle sans besoin de surveillance répétée, une simple demande directe est plus adaptée qu'une boucle — la boucle a du sens quand on attend un changement d'état qui n'arrive pas tout de suite."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu sais qu'un déploiement prend généralement environ 8 minutes. Comment règles-tu la boucle qui vérifie son état ?",
        options: [
          "Un intervalle fixe proche de 8 minutes, pas une vérification toutes les minutes",
          "Vérifier toutes les minutes pour être sûr de rien manquer",
          "Vérifier une seule fois après 1 heure",
          "Laisser tourner en continu sans aucun intervalle"
        ],
        correctIndex: 0,
        correction: "Quand la durée est connue à l'avance, un intervalle fixe proche de cette durée est le réglage le plus efficace — vérifier beaucoup plus souvent que le rythme réel du changement gaspille des itérations sans rien accélérer."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Bien utiliser les loops : bonnes pratiques",
    level: "🔴 Avancé",
    summary: "Une boucle mal réglée tourne pour rien ou rate le bon moment — quelques réflexes pour éviter les pièges.",
    content: [
      {
        heading: "Ne pas boucler sur ce qui prévient déjà tout seul",
        text: "Si le travail en cours est déjà suivi et signale sa fin automatiquement, ajouter une boucle qui vérifie en parallèle est redondant — elle ne fait que consommer des itérations pour surveiller quelque chose qui préviendra de toute façon."
      },
      {
        heading: "Préférer un intervalle large aux vérifications trop fréquentes",
        text: "Une boucle qui vérifie beaucoup plus souvent que ce qui change réellement n'accélère rien. Sans signal précis à surveiller, un intervalle large par défaut (plusieurs dizaines de minutes) reste plus raisonnable qu'une vérification très rapprochée par habitude."
      },
      {
        heading: "Poser une condition d'arrêt claire",
        text: "Une boucle censée surveiller un événement précis (une fin de build, un changement de statut) doit s'arrêter dès que cet événement survient — sans condition claire, elle continue à tourner sans but une fois l'événement passé."
      },
      {
        heading: "Signaler ce qui compte, pas chaque vérification",
        text: "Une itération qui ne change rien n'a pas besoin d'un rapport détaillé à chaque fois. L'utile, c'est d'être prévenu quand quelque chose bouge réellement — pas de recevoir un message à chaque passage de la boucle qui ne change rien."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Ta boucle surveille un état externe qui ne change en général que toutes les heures, sans qu'aucun signal précis ne prévienne automatiquement d'un changement. Quel réglage est le plus adapté ?",
        options: [
          "Un intervalle large (par exemple 20 à 30 minutes), pas une vérification toutes les minutes",
          "Vérifier toutes les minutes pour être sûr de rien manquer",
          "Ne jamais utiliser de boucle pour ce genre de cas",
          "Vérifier une seule fois puis abandonner"
        ],
        correctIndex: 0,
        correction: "Sans signal précis pour prévenir d'un changement, un intervalle large adapté à la vitesse réelle du phénomène surveillé évite de gaspiller des itérations sur des vérifications qui ne changeront rien la plupart du temps."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Écrire une bonne demande à Claude Code",
    level: "🟢 Débutant",
    summary: "La clarté d'une demande change directement la qualité du résultat — quelques principes simples avant de taper le premier message.",
    content: [
      {
        heading: "Dire CE que tu veux, pas juste le symptôme",
        text: "\"Ça ne marche pas\" ou \"améliore ça\" laisse deviner l'objectif réel. Préciser le résultat attendu (quel comportement, quelle sortie, quelle contrainte) réduit le nombre d'allers-retours nécessaires."
      },
      {
        heading: "Donner le contexte qui compte",
        text: "Claude peut lire le code lui-même, mais pas ce qui n'est écrit nulle part (une décision prise ailleurs, une contrainte métier, un existant à ne pas casser). Ce contexte-là doit être dit explicitement dans la demande, ou vivre dans CLAUDE.md pour ne pas le répéter à chaque fois — voir [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        heading: "Une demande, un objectif",
        text: "Mélanger plusieurs objectifs indépendants dans un seul message (\"corrige ce bug ET refactore ce module ET ajoute des tests\") rend plus difficile de vérifier chaque partie séparément — mieux vaut les séparer, surtout au début d'une tâche."
      },
      {
        heading: "Donner un exemple quand c'est ambigu",
        text: "Pour un format de sortie précis ou un style particulier, montrer un exemple concret du résultat attendu lève l'ambiguïté bien plus vite qu'une description abstraite."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Laquelle de ces demandes donne le plus de chances d'obtenir le bon résultat du premier coup ?",
        options: [
          "Corrige le bug : le bouton \"Valider\" ne déclenche rien au clic sur la page de paiement, alors qu'il fonctionne sur les autres pages",
          "Ça marche pas, répare",
          "Améliore le projet",
          "Fais mieux"
        ],
        correctIndex: 0,
        correction: "Une demande précise (quel élément, quel comportement observé, où ça marche par ailleurs) donne à Claude de quoi cibler directement le problème — les formulations vagues obligent à deviner, ou à revenir vers toi pour clarifier."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Itérer sur un prompt : préciser plutôt que reformuler",
    level: "🟡 Intermédiaire",
    summary: "Quand le premier résultat n'est pas le bon, corriger précisément ce qui cloche va plus vite que repartir de zéro.",
    content: [
      {
        heading: "Corriger un écart précis",
        text: "Si le résultat est presque bon mais rate un détail (une convention de nommage, un cas limite oublié), le dire précisément (\"le cas où la liste est vide n'est pas géré\") est plus efficace que reformuler toute la demande depuis le début."
      },
      {
        heading: "Distinguer un problème de contexte d'un problème de formulation",
        text: "Si Claude a mal interprété un aspect du projet (une convention supposée à tort), la correction porte sur le contexte manquant — souvent à ajouter dans CLAUDE.md pour que ça ne se reproduise plus. Si c'est la demande elle-même qui était ambiguë, la préciser directement suffit."
      },
      {
        heading: "Revenir en arrière plutôt qu'empiler les correctifs",
        text: "Si plusieurs tentatives de correction n'ont pas suffi et que le résultat s'éloigne de plus en plus du besoin initial, mieux vaut annuler et repartir sur une demande reformulée depuis un état propre, plutôt que d'empiler des correctifs sur une base bancale."
      },
      {
        heading: "Le mode plan pour vérifier l'interprétation avant d'agir",
        text: "Pour une demande complexe ou ambiguë, demander d'abord un plan (voir [[Claude Code::Les modes de permission : plan, auto-accept, manuel]]) permet de repérer un malentendu avant que quoi que ce soit ne soit modifié — bien moins coûteux à corriger qu'un résultat déjà produit."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Le résultat obtenu est presque bon, mais ignore le cas où la liste est vide. Que fais-tu ?",
        options: [
          "Préciser exactement le cas manquant plutôt que reformuler toute la demande",
          "Recommencer une demande complètement différente",
          "Abandonner la tâche",
          "Ne rien dire, ce n'est pas grave"
        ],
        correctIndex: 0,
        correction: "Corriger un écart précis (le cas manquant) va plus vite que reformuler toute la demande — Claude garde le reste du travail déjà correct, et n'a qu'un point précis à ajuster."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Les prompts réutilisables : commandes personnalisées",
    level: "🔴 Avancé",
    summary: "Une demande qui revient souvent peut devenir une commande à toi, invocable en une ligne au lieu de la retaper à chaque fois.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Retaper une demande longue et précise à chaque fois qu'elle revient (une checklist de revue, un format de commit particulier) est répétitif et source de variations involontaires d'une fois sur l'autre."
      },
      {
        heading: "Une commande personnalisée, concrètement",
        text: "Un fichier texte contenant le prompt, rangé dans .claude/commands/ (propre au projet) ou ~/.claude/commands/ (personnel, disponible partout), devient invocable comme une commande via /nom-du-fichier — le prompt est rejoué à l'identique à chaque appel."
      },
      {
        heading: "Des arguments pour l'adapter à chaque appel",
        text: "Une commande personnalisée peut accepter des arguments passés au moment de l'appel (par exemple /revue mon-fichier.js), pour rester générique tout en s'appliquant à un cas précis à chaque fois."
      },
      {
        heading: "Commande personnalisée vs skill",
        text: "Une commande personnalisée est un prompt figé qu'on choisit d'invoquer soi-même explicitement. Un skill peut lui être choisi automatiquement par Claude quand c'est pertinent, sans avoir à taper son nom — voir [[Claude Code::Skills : des instructions prêtes à l'emploi]] pour la différence."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu redemandes très souvent la même checklist de revue de code, avec le même texte à chaque fois. Comment éviter de la retaper ?",
        options: [
          "La ranger comme commande personnalisée dans .claude/commands/, invocable via /nom-de-la-commande",
          "La recopier à la main à chaque fois",
          "L'envoyer par email à chaque session",
          "Ce n'est pas possible avec Claude Code"
        ],
        correctIndex: 0,
        correction: "Un fichier de commande personnalisée dans .claude/commands/ (ou ~/.claude/commands/ pour un usage personnel) fige le prompt une fois pour toutes — /nom-de-la-commande le rejoue à l'identique, sans jamais le retaper."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Installer Claude Code dans un terminal",
    level: "🟢 Débutant",
    summary: "Une installation globale via npm, un prérequis (Node.js), et une vérification en une commande.",
    content: [
      {
        heading: "Le prérequis : Node.js",
        text: "Claude Code s'installe via npm, le gestionnaire de paquets de Node.js — il faut donc avoir Node.js installé au préalable sur la machine avant de pouvoir l'installer."
      },
      {
        heading: "L'installation globale",
        text: "npm install -g @anthropic-ai/claude-code installe Claude Code globalement sur la machine — la commande claude devient alors disponible depuis n'importe quel dossier du terminal."
      },
      {
        heading: "Vérifier que tout fonctionne",
        text: "claude --version affiche la version installée. claude doctor va plus loin en vérifiant les dépendances, le PATH et la configuration, et signale précisément ce qui cloche si l'installation a un problème."
      },
      {
        heading: "Rester à jour",
        text: "claude update récupère la dernière version disponible — utile pour profiter des nouvelles fonctionnalités et corrections au fil du temps."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu viens d'installer Claude Code mais la commande claude ne se lance pas correctement. Comment identifier ce qui cloche ?",
        options: [
          "claude doctor",
          "claude --version",
          "Réinstaller avec npm install -g @anthropic-ai/claude-code sans chercher la cause",
          "Redémarrer l'ordinateur sans rien vérifier"
        ],
        correctIndex: 0,
        correction: "claude doctor vérifie les dépendances, le PATH et la configuration, et signale précisément ce qui pose problème — plus efficace qu'une réinstallation à l'aveugle ou un simple redémarrage."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Utiliser Claude Code dans un terminal : les premiers pas",
    level: "🟢 Débutant",
    summary: "Se placer dans le bon dossier, lancer une session, et les tout premiers réflexes.",
    content: [
      {
        heading: "Se placer dans le dossier du projet",
        text: "Avant de lancer claude, se déplacer (cd) dans le dossier racine du projet concerné — Claude explore et agit à partir de ce dossier de lancement. Voir [[Claude Code::Bien démarrer un nouveau projet]]."
      },
      {
        heading: "Lancer une session",
        text: "La commande claude, tapée seule, ouvre une session interactive dans le terminal — un prompt où écrire directement sa première demande."
      },
      {
        heading: "Démarrer avec un prompt initial",
        text: "claude \"explique-moi ce projet\" lance directement une session avec cette première demande déjà posée, sans avoir à la retaper une fois la session ouverte."
      },
      {
        heading: "Une réponse ponctuelle sans session",
        text: "claude -p \"résume les changements récents\" (mode 'print') exécute une requête, affiche la réponse, puis quitte sans ouvrir de session à faire vivre — pratique pour un script ou une vérification rapide."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux lancer Claude Code directement avec ta première demande déjà posée, sans avoir à la retaper une fois la session ouverte. Comment fais-tu ?",
        options: [
          "claude \"ta demande\"",
          "claude, puis retaper la demande une fois la session ouverte",
          "claude --demande \"ta demande\"",
          "claude -p uniquement, sans rien d'autre"
        ],
        correctIndex: 0,
        correction: "claude \"ta demande\" démarre directement la session avec cette première demande déjà posée — claude -p répond une seule fois puis quitte, sans ouvrir de session interactive à faire vivre."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Installer l'extension dans VS Code ou Cursor",
    level: "🟢 Débutant",
    summary: "Cursor et VS Code partagent la même base : la même extension Claude Code s'installe dans les deux.",
    content: [
      {
        heading: "Deux façons d'obtenir l'extension",
        text: "Depuis le marketplace de l'éditeur (rechercher \"Claude Code\" dans l'onglet extensions), ou automatiquement : lancer claude dans le terminal intégré de VS Code/Cursor propose l'installation de l'extension si elle n'est pas déjà présente."
      },
      {
        heading: "Cursor fonctionne comme VS Code",
        text: "Cursor est basé sur VS Code et utilise le même système d'extensions — la même extension Claude Code s'installe et fonctionne de la même façon dans les deux éditeurs."
      },
      {
        heading: "Se connecter depuis une session terminal existante",
        text: "Si une session Claude Code tourne déjà dans un terminal séparé (pas forcément le terminal intégré de l'éditeur), /ide la connecte à l'éditeur ouvert pour partager le fichier et la sélection actifs."
      },
      {
        heading: "Ce que ça change concrètement",
        text: "Une fois connecté, Claude voit le fichier ouvert et la sélection de texte dans l'éditeur, et peut proposer ses modifications directement en diff dans l'éditeur plutôt qu'en texte brut dans le terminal."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu utilises Cursor plutôt que VS Code. Quelle extension Claude Code dois-tu installer ?",
        options: [
          "La même extension Claude Code que pour VS Code — Cursor utilise le même système d'extensions",
          "Une extension spécifique à Cursor, différente de celle de VS Code",
          "Aucune extension n'existe pour Cursor",
          "Il faut réinstaller Claude Code entièrement pour Cursor"
        ],
        correctIndex: 0,
        correction: "Cursor est basé sur VS Code et partage son système d'extensions — la même extension Claude Code s'installe et fonctionne à l'identique dans les deux éditeurs."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Utiliser Claude Code dans VS Code / Cursor",
    level: "🟡 Intermédiaire",
    summary: "Le terminal intégré reste la base, mais l'extension ajoute la vue diff, le contexte de sélection, et des raccourcis dédiés.",
    content: [
      {
        heading: "Le terminal intégré reste le point d'entrée",
        text: "L'extension ne remplace pas le terminal : la session Claude Code continue de tourner dans le terminal intégré de l'éditeur — l'extension enrichit cette session avec les infos de l'éditeur autour."
      },
      {
        heading: "La sélection de code comme contexte",
        text: "Un extrait de code sélectionné dans l'éditeur est automatiquement pris en compte comme contexte de la demande en cours — plus besoin de le copier-coller dans le terminal."
      },
      {
        heading: "Voir les modifications en diff avant d'accepter",
        text: "Plutôt qu'un bloc de texte brut dans le terminal, les modifications proposées par Claude s'affichent en vue diff directement dans l'éditeur — le changement exact, fichier par fichier, est visible avant d'accepter."
      },
      {
        heading: "Raccourcis clavier dédiés",
        text: "L'extension ajoute des raccourcis pour des actions courantes (ouvrir/fermer Claude Code, envoyer la sélection actuelle en contexte) directement depuis l'éditeur, sans repasser par la souris ou le terminal."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu as sélectionné une fonction dans l'éditeur et tu veux que Claude en tienne compte dans ta prochaine demande. Que dois-tu faire ?",
        options: [
          "Rien de plus : la sélection est automatiquement prise en compte comme contexte",
          "Copier-coller la fonction dans le terminal",
          "Ouvrir un nouveau fichier et la retaper",
          "Ce n'est pas possible avec l'extension"
        ],
        correctIndex: 0,
        correction: "L'extension partage automatiquement le fichier ouvert et la sélection actuelle avec la session Claude Code — inutile de copier-coller quoi que ce soit dans le terminal."
      }
    ]
  }
];
