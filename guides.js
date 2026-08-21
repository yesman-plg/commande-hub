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
  },
  {
    category: "Claude Code",
    title: "Les plugins : qu'est-ce que c'est et à quoi ça sert",
    level: "🟢 Débutant",
    summary: "Un plugin regroupe plusieurs extensions (commandes, agents, skills, hooks) en un seul pack installable en une action.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Installer séparément une commande personnalisée, un agent et un skill qui vont ensemble (par exemple pour un framework ou une méthodologie précise) demande de tout copier à la main, fichier par fichier. Un plugin regroupe tout ça en un seul pack."
      },
      {
        heading: "Ce qu'un plugin peut contenir",
        text: "Des commandes personnalisées, des agents, des skills, et des hooks (des actions automatiques déclenchées à certains moments) — tout ce qu'on peut créer soi-même à la main peut être empaqueté dans un plugin."
      },
      {
        heading: "Une fois installé, ça se comporte comme si c'était à toi",
        text: "Les commandes, agents et skills d'un plugin installé fonctionnent exactement comme ceux que tu aurais créés toi-même — /agents les liste, un skill de plugin est choisi automatiquement au même titre qu'un skill perso, la seule différence étant leur origine."
      },
      {
        heading: "Un skill de plugin se distingue par son préfixe",
        text: "Un skill fourni par un plugin s'identifie avec un préfixe nom-du-plugin: devant son nom (plugin:skill), pour le distinguer d'un skill personnel ou de projet portant le même nom."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Un plugin installé fournit un skill de revue de sécurité. Comment Claude l'utilise-t-il, comparé à un skill que tu aurais écrit toi-même ?",
        options: [
          "Exactement pareil : Claude le choisit automatiquement quand c'est pertinent, comme n'importe quel autre skill",
          "Il faut l'invoquer d'une façon totalement différente",
          "Les plugins ne peuvent pas contenir de skills",
          "Il faut le réinstaller à chaque session"
        ],
        correctIndex: 0,
        correction: "Un skill fourni par un plugin fonctionne exactement comme un skill personnel ou de projet — Claude compare ta demande à sa description et le choisit seul quand c'est pertinent, sans traitement particulier."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Installer et gérer un plugin",
    level: "🟡 Intermédiaire",
    summary: "/plugin donne accès aux marketplaces disponibles ; installer, désactiver ou retirer un plugin se fait sans jamais éditer de fichier à la main.",
    content: [
      {
        heading: "Parcourir les marketplaces disponibles",
        text: "/plugin ouvre un navigateur interactif listant les plugins accessibles depuis les marketplaces déjà connues — pas besoin de connaître le nom exact d'un plugin à l'avance pour le découvrir."
      },
      {
        heading: "Ajouter une marketplace externe",
        text: "Toutes les marketplaces ne sont pas connues par défaut. /plugin marketplace add <dépôt> ajoute une source externe (souvent un dépôt GitHub public) pour accéder aux plugins qu'elle propose — voir [[Claude Code::Où trouver des agents et des skills]]."
      },
      {
        heading: "Installer, désactiver, retirer",
        text: "Une fois trouvé, un plugin s'installe en une action depuis ce même navigateur. Il peut ensuite être désactivé temporairement sans le désinstaller complètement, ou retiré si finalement inutile — jamais besoin d'éditer un fichier de config à la main."
      },
      {
        heading: "Un plugin par projet ou pour toute la machine",
        text: "Un plugin peut être activé uniquement pour un projet précis, ou globalement pour tous tes projets — utile pour garder certains plugins spécifiques à un contexte (un client, une stack précise) sans qu'ils apparaissent partout."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux voir quels plugins sont disponibles sans connaître leur nom exact à l'avance. Que fais-tu ?",
        options: [
          "/plugin, pour parcourir les marketplaces déjà connues",
          "Chercher uniquement sur un moteur de recherche externe",
          "Éditer un fichier de configuration à la main",
          "Ce n'est pas possible sans connaître le nom exact"
        ],
        correctIndex: 0,
        correction: "/plugin ouvre un navigateur interactif listant les plugins disponibles depuis les marketplaces connues — inutile de connaître un nom précis à l'avance pour découvrir ce qui existe."
      }
    ]
  },
  {
    category: "Claude Code",
    title: "Créer son propre plugin",
    level: "🔴 Avancé",
    summary: "Regrouper ses propres commandes, agents et skills en un pack partageable, plutôt que de les recopier projet par projet.",
    content: [
      {
        heading: "Quand ça vaut le coup",
        text: "Recopier les mêmes commandes, agents et skills personnalisés d'un projet à l'autre, ou les partager avec une équipe, devient vite répétitif — un plugin centralise tout ça en un seul endroit à maintenir."
      },
      {
        heading: "La structure d'un plugin",
        text: "Un plugin est un dossier avec un fichier de manifeste qui le décrit (nom, version), et des sous-dossiers pour chacun de ses composants (commandes, agents, skills, hooks) — la même organisation que ce qu'on écrirait à la main dans .claude/, mais rangée pour être publiée."
      },
      {
        heading: "Le publier via une marketplace",
        text: "Une marketplace est elle-même un dépôt (souvent GitHub) qui référence un ou plusieurs plugins. Publier un plugin revient à l'ajouter à un tel dépôt, que d'autres pourront ensuite ajouter avec /plugin marketplace add."
      },
      {
        heading: "Garder une marketplace privée, en interne",
        text: "Rien n'oblige une marketplace à être publique — un dépôt privé partagé uniquement avec son équipe permet de diffuser des plugins internes sans les rendre accessibles à l'extérieur."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Ton équipe utilise les mêmes commandes personnalisées et le même agent de revue sur tous ses projets internes, recopiés à la main à chaque fois. Comment centraliser ça proprement ?",
        options: [
          "Les empaqueter dans un plugin, publié sur une marketplace privée partagée avec l'équipe",
          "Continuer à copier-coller les fichiers dans chaque nouveau projet",
          "Les envoyer par message à chaque nouveau membre de l'équipe",
          "Ce n'est pas possible de partager ça entre plusieurs projets"
        ],
        correctIndex: 0,
        correction: "Un plugin publié sur une marketplace privée centralise commandes, agents et skills en un seul endroit à maintenir — chaque membre de l'équipe l'installe une fois, sans copier-coller de fichiers d'un projet à l'autre."
      }
    ]
  },

  // --- Windows ---------------------------------------
  {
    category: "Windows",
    title: "PowerShell vs invite de commandes (cmd) : lequel utiliser",
    level: "🟢 Débutant",
    summary: "Windows a deux terminaux différents avec des logiques différentes — savoir lequel utiliser évite bien des commandes qui ne marchent que dans l'un des deux.",
    content: [
      {
        heading: "cmd, l'historique",
        text: "L'invite de commandes (cmd.exe) existe depuis les débuts de Windows — des commandes comme dir, cd ou ping y fonctionnent encore, mais son langage reste limité comparé à un vrai shell de script."
      },
      {
        heading: "PowerShell, le standard actuel",
        text: "PowerShell est le shell par défaut recommandé depuis plusieurs années — ses commandes (appelées cmdlets) suivent toutes le même schéma Verbe-Nom (Get-Process, Stop-Service, New-Item…), ce qui les rend plus faciles à deviner qu'en cmd."
      },
      {
        heading: "Les deux coexistent, sans se remplacer totalement",
        text: "Certaines commandes historiques de cmd (comme ipconfig ou systeminfo) fonctionnent aussi bien dans PowerShell — pas besoin de choisir strictement l'un ou l'autre, PowerShell exécute la plupart des vieilles commandes cmd en plus des siennes."
      },
      {
        heading: "Windows Terminal : l'application qui héberge les deux",
        text: "Windows Terminal (l'application moderne pour ouvrir un terminal) permet de lancer aussi bien un onglet PowerShell qu'un onglet cmd — le choix se fait à l'ouverture de l'onglet, pas au niveau de l'application elle-même."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux lister les processus qui utilisent le plus de mémoire, avec une commande dont le nom se devine facilement. Quel shell est le plus adapté ?",
        options: [
          "PowerShell, grâce au schéma Verbe-Nom de ses cmdlets (Get-Process)",
          "cmd, car il est plus ancien donc plus complet",
          "Aucun des deux, Windows ne permet pas ça",
          "Il faut installer un shell tiers"
        ],
        correctIndex: 0,
        correction: "Les cmdlets PowerShell suivent toutes le schéma Verbe-Nom (Get-Process, Get-Service…), ce qui les rend prévisibles à deviner — un avantage net sur les commandes cmd historiques, souvent moins cohérentes entre elles."
      }
    ]
  },
  {
    category: "Windows",
    title: "Élévation de privilèges : l'équivalent Windows de sudo",
    level: "🟢 Débutant",
    summary: "Windows n'a pas de sudo : l'élévation de privilèges se fait fenêtre par fenêtre, pas commande par commande.",
    content: [
      {
        heading: "Pas de sudo devant chaque commande",
        text: "Sous Linux, sudo commande élève juste le temps d'une commande. Windows fonctionne différemment : un terminal tourne soit en utilisateur normal, soit entièrement en administrateur — pas de bascule commande par commande dans la même fenêtre."
      },
      {
        heading: "Ouvrir un terminal déjà élevé",
        text: "Start-Process powershell -Verb RunAs (ou clic droit → \"Exécuter en tant qu'administrateur\" dans l'interface) ouvre une NOUVELLE fenêtre avec tous les droits — tout ce qui s'y tape ensuite est exécuté en administrateur, sans redemander."
      },
      {
        heading: "L'invite UAC, le garde-fou",
        text: "Que ce soit en lançant un terminal élevé ou un simple programme, Windows affiche une fenêtre de confirmation (UAC) avant d'accorder les droits — le même principe de confirmation explicite que sudo, mais au niveau de toute une fenêtre plutôt que d'une commande isolée."
      },
      {
        heading: "Repérer si on est déjà élevé",
        text: "Le titre de la fenêtre PowerShell affiche généralement \"Administrateur\" en préfixe quand le terminal tourne avec les droits élevés — le repère visuel le plus rapide, plutôt que de tester une commande pour le découvrir."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu dois modifier un fichier système qui nécessite des droits administrateur, et ton terminal actuel tourne en utilisateur normal. Que fais-tu ?",
        options: [
          "Ouvrir une nouvelle fenêtre PowerShell en administrateur (Start-Process powershell -Verb RunAs), puis y taper la commande",
          "Taper sudo devant la commande dans le terminal actuel",
          "Ce n'est pas possible sous Windows",
          "Redémarrer l'ordinateur en mode administrateur"
        ],
        correctIndex: 0,
        correction: "Windows n'a pas de sudo commande par commande : il faut ouvrir une fenêtre entièrement élevée (Start-Process powershell -Verb RunAs) et y exécuter la commande, plutôt que d'élever une seule commande dans la fenêtre actuelle."
      }
    ]
  },
  {
    category: "Windows",
    title: "winget : installer et gérer des logiciels",
    level: "🟢 Débutant",
    summary: "Le gestionnaire de paquets officiel de Windows — l'équivalent d'apt, intégré nativement depuis Windows 10/11.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Sans gestionnaire de paquets, installer un logiciel veut dire chercher un site officiel, télécharger un installeur, cliquer à travers un assistant — et refaire ça manuellement pour chaque mise à jour."
      },
      {
        heading: "winget, en une commande",
        text: "winget install nom cherche, télécharge et installe le logiciel automatiquement, sans passer par un navigateur — voir [[Bases du terminal::Comprendre les gestionnaires de paquets]] pour le principe général."
      },
      {
        heading: "Chercher avant d'installer",
        text: "winget search nom liste les logiciels correspondants disponibles, utile quand on n'est pas sûr du nom exact attendu par winget."
      },
      {
        heading: "Tout mettre à jour d'un coup",
        text: "winget upgrade --all met à jour en une seule commande tous les logiciels installés via winget qui ont une nouvelle version disponible — pas besoin de repasser par chaque site officiel."
      },
      {
        heading: "Quand winget ne suffit pas",
        text: "Certains logiciels ne sont pas encore référencés sur winget. Chocolatey (choco install) est un gestionnaire tiers plus ancien qui couvre parfois des logiciels absents de winget — un complément, pas un remplacement."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux mettre à jour tous tes logiciels installés via winget en une seule commande. Laquelle utilises-tu ?",
        options: [
          "winget upgrade --all",
          "winget install --all",
          "winget update *",
          "Il faut mettre à jour chaque logiciel un par un manuellement"
        ],
        correctIndex: 0,
        correction: "winget upgrade --all met à jour en une seule commande tous les logiciels installés via winget qui ont une nouvelle version disponible."
      }
    ]
  },
  {
    category: "Windows",
    title: "Se repérer dans l'arborescence Windows",
    level: "🟡 Intermédiaire",
    summary: "Pas de racine unique comme sous Linux : chaque disque a sa propre lettre, et certains dossiers ont un rôle bien précis.",
    content: [
      {
        heading: "Des lettres de lecteur, pas une racine unique",
        text: "Là où Linux a une seule arborescence démarrant à /, Windows attribue une lettre à chaque disque/partition (C:\\, D:\\…) — voir [[Linux Mint::L'arborescence du système de fichiers]] pour le principe côté Linux."
      },
      {
        heading: "C:\\Users\\ : l'équivalent de /home",
        text: "Le dossier personnel de chaque utilisateur, avec ses documents, téléchargements, bureau — l'équivalent direct du /home/utilisateur sous Linux."
      },
      {
        heading: "Program Files : où vivent les logiciels installés",
        text: "Les logiciels installés pour tous les utilisateurs s'installent généralement dans C:\\Program Files (ou Program Files (x86) pour les logiciels 32 bits) — modifier ce dossier nécessite les droits administrateur."
      },
      {
        heading: "AppData : la configuration cachée",
        text: "Dans C:\\Users\\toi\\AppData (dossier caché par défaut), chaque application range sa configuration et ses données locales — le rôle que jouent les dossiers cachés .config ou .local sous Linux."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu cherches où un logiciel a rangé sa configuration personnelle sur ta session Windows. Où regarder en premier ?",
        options: [
          "Dans le dossier AppData de ton profil utilisateur",
          "Directement à la racine du disque C:\\",
          "Dans Program Files",
          "Windows ne stocke jamais de configuration par utilisateur"
        ],
        correctIndex: 0,
        correction: "AppData (dans le dossier utilisateur) est l'endroit où les applications rangent leur configuration et leurs données locales — le même rôle que jouent les dossiers cachés .config/.local sous Linux."
      }
    ]
  },
  {
    category: "Windows",
    title: "Processus et services : Gestionnaire des tâches, Get-Process, Get-Service",
    level: "🟡 Intermédiaire",
    summary: "Deux façons de surveiller ce qui tourne : l'interface graphique pour un coup d'œil rapide, PowerShell pour scripter ou automatiser.",
    content: [
      {
        heading: "Le Gestionnaire des tâches, pour un coup d'œil",
        text: "taskmgr ouvre l'interface graphique classique — utilisation CPU/RAM en temps réel, possibilité de forcer l'arrêt d'un programme qui ne répond plus, sans taper une seule commande."
      },
      {
        heading: "Get-Process, la version scriptable",
        text: "Get-Process | Sort-Object CPU -Descending liste les processus par consommation CPU directement dans le terminal — pratique pour un script ou une connexion à distance sans interface graphique."
      },
      {
        heading: "Processus vs service : la différence",
        text: "Un processus est un programme en cours d'exécution, visible et lié à une session utilisateur. Un service tourne en arrière-plan indépendamment de toute session ouverte (souvent démarré avant même la connexion) — Get-Service liste ces services et leur état."
      },
      {
        heading: "Redémarrer un service qui bloque",
        text: "Restart-Service -Name nom arrête puis relance un service précis — souvent plus rapide que de redémarrer toute la machine pour un service qui a planté."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Un service système semble bloqué et tu veux le relancer sans redémarrer toute la machine. Que fais-tu ?",
        options: [
          "Restart-Service -Name nom-du-service",
          "Redémarrer l'ordinateur entier",
          "Stop-Process -Name nom-du-service (ça suffit, pas besoin de le relancer)",
          "Ce n'est pas possible sans redémarrer"
        ],
        correctIndex: 0,
        correction: "Restart-Service cible directement le service concerné (arrêt puis relance) — pas besoin de redémarrer toute la machine pour un service isolé qui a planté."
      }
    ]
  },
  {
    category: "Windows",
    title: "Réseau sous Windows : ipconfig, ping, ports",
    level: "🟡 Intermédiaire",
    summary: "Les mêmes questions que sous Linux (quelle IP, ça répond, qui utilise ce port) avec des commandes différentes.",
    content: [
      {
        heading: "Voir sa configuration réseau",
        text: "ipconfig affiche l'adresse IP, le masque et la passerelle de chaque interface réseau — voir [[Linux Mint::Réseau pour les nuls : IP, port, DNS]] pour les mêmes notions expliquées côté Linux."
      },
      {
        heading: "Tester qu'un hôte répond",
        text: "ping site.com fonctionne de façon quasi identique à Linux — envoie des paquets et mesure le temps de réponse."
      },
      {
        heading: "Trouver ce qui occupe un port",
        text: "netstat -ano | findstr :8080 affiche le PID du processus qui écoute sur le port 8080 ; Get-Process -Id <PID> ensuite pour l'identifier par son nom."
      },
      {
        heading: "Tester un port distant sans navigateur ni client",
        text: "Test-NetConnection -ComputerName hote -Port 443 vérifie qu'un port précis répond sur une machine distante, sans avoir à ouvrir une vraie connexion applicative."
      },
      {
        heading: "Vider le cache DNS après un changement",
        text: "ipconfig /flushdns force le système à oublier les résolutions DNS mises en cache — utile juste après avoir changé un enregistrement DNS ou de serveur."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Un port 8080 semble occupé par un programme inconnu. Comment identifier lequel ?",
        options: [
          "netstat -ano | findstr :8080 pour trouver le PID, puis Get-Process -Id pour l'identifier",
          "ping localhost:8080",
          "ipconfig /flushdns",
          "Ce n'est pas possible de savoir quel programme utilise un port"
        ],
        correctIndex: 0,
        correction: "netstat -ano donne le PID du processus qui écoute sur le port recherché ; Get-Process -Id <PID> permet ensuite de retrouver son nom."
      }
    ]
  },
  {
    category: "Windows",
    title: "WSL : faire tourner Linux dans Windows",
    level: "🟡 Intermédiaire",
    summary: "Un vrai environnement Linux à l'intérieur de Windows, sans machine virtuelle séparée à gérer — pratique pour retrouver les commandes déjà connues.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Certains outils/commandes n'existent que sous Linux, ou se comportent différemment sous Windows (chemins, sensibilité à la casse, scripts bash) — WSL évite d'avoir à choisir entre les deux systèmes."
      },
      {
        heading: "Une vraie distribution Linux, pas une simulation",
        text: "WSL (Windows Subsystem for Linux) fait tourner une vraie distribution (Ubuntu par défaut) avec son propre terminal — les commandes apt, bash, grep… fonctionnent exactement comme sur une machine Linux, voir [[Linux Mint::apt : installer et gérer des logiciels]]."
      },
      {
        heading: "Installer WSL",
        text: "wsl --install installe WSL et une distribution par défaut en une seule commande — un redémarrage est généralement nécessaire pour terminer l'installation."
      },
      {
        heading: "Accéder aux fichiers d'un côté depuis l'autre",
        text: "Les fichiers Windows restent accessibles depuis WSL (sous /mnt/c/...), et les fichiers Linux de WSL sont accessibles depuis l'explorateur Windows via \\\\wsl$\\ — les deux mondes cohabitent sans copie manuelle."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux utiliser une commande bash spécifique à Linux directement sur ta machine Windows, sans passer par une machine virtuelle séparée. Que fais-tu ?",
        options: [
          "Installer et utiliser WSL (wsl --install)",
          "Réinstaller entièrement Windows en Linux",
          "Ce n'est pas possible sans machine virtuelle",
          "Utiliser winget pour installer bash directement dans PowerShell"
        ],
        correctIndex: 0,
        correction: "WSL fait tourner une vraie distribution Linux à l'intérieur de Windows, sans machine virtuelle séparée à gérer — wsl --install suffit pour l'installer."
      }
    ]
  },
  {
    category: "Windows",
    title: "Le profil PowerShell : personnaliser son shell",
    level: "🔴 Avancé",
    summary: "Un fichier chargé à chaque ouverture de PowerShell, pour ne pas redéfinir les mêmes alias et réglages à chaque session.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Sans profil, un alias ou une variable définie dans une session PowerShell disparaît à sa fermeture — il faudrait tout redéfinir à chaque ouverture."
      },
      {
        heading: "$PROFILE, le fichier chargé automatiquement",
        text: "notepad $PROFILE ouvre (ou crée) ce fichier — tout ce qui y est écrit s'exécute automatiquement à chaque nouvelle session PowerShell, l'équivalent du .bashrc sous Linux."
      },
      {
        heading: "Rendre un alias permanent",
        text: "Set-Alias ll Get-ChildItem tapé directement dans le terminal ne dure que la session. La même ligne ajoutée dans $PROFILE la rend permanente pour toutes les futures sessions."
      },
      {
        heading: "Un profil différent par contexte",
        text: "PowerShell distingue plusieurs profils possibles (utilisateur courant, tous les utilisateurs, hôte spécifique…) — dans la plupart des cas, le profil de l'utilisateur courant (celui ouvert par $PROFILE) suffit largement."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu as créé un alias utile avec Set-Alias, mais il disparaît à chaque fois que tu fermes PowerShell. Comment le rendre permanent ?",
        options: [
          "Ajouter la même ligne Set-Alias dans le fichier $PROFILE",
          "Le retaper à chaque ouverture, c'est la seule solution",
          "Utiliser winget pour l'installer",
          "Les alias PowerShell sont toujours permanents par défaut"
        ],
        correctIndex: 0,
        correction: "$PROFILE est le fichier exécuté automatiquement à chaque ouverture de PowerShell — y ajouter la ligne Set-Alias la rend permanente, sans avoir à la retaper."
      }
    ]
  },
  {
    category: "Windows",
    title: "Exécuter des scripts PowerShell : la politique d'exécution",
    level: "🔴 Avancé",
    summary: "Contrairement à Linux, exécuter un script .ps1 est bloqué par défaut — un réglage de sécurité à comprendre avant de le changer.",
    content: [
      {
        heading: "Pourquoi c'est bloqué par défaut",
        text: "Windows bloque par défaut l'exécution de scripts .ps1 pour limiter les scripts malveillants récupérés sans le vouloir (pièce jointe, téléchargement) — contrairement à Linux où chmod +x suffit à rendre un script exécutable."
      },
      {
        heading: "Voir la politique actuelle",
        text: "Get-ExecutionPolicy affiche le réglage en vigueur — par défaut, souvent Restricted (aucun script ne s'exécute)."
      },
      {
        heading: "Autoriser ses propres scripts",
        text: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser autorise les scripts écrits localement, tout en exigeant une signature numérique pour les scripts téléchargés depuis internet — un bon compromis entre sécurité et confort."
      },
      {
        heading: "Le -Scope CurrentUser, une précaution utile",
        text: "Limiter le changement à -Scope CurrentUser (plutôt qu'à toute la machine) évite de modifier ce réglage pour d'autres comptes utilisateurs sur la même machine — une bonne pratique par défaut."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu essaies de lancer ton propre script .ps1 et Windows refuse de l'exécuter. Quelle commande règle ça proprement, pour ton compte uniquement ?",
        options: [
          "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser",
          "Supprimer complètement la politique d'exécution",
          "Renommer le fichier en .exe",
          "Ce n'est pas possible d'exécuter des scripts PowerShell"
        ],
        correctIndex: 0,
        correction: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser autorise les scripts locaux (en exigeant une signature pour ceux téléchargés), et -Scope CurrentUser limite le changement à ton seul compte."
      }
    ]
  },

  // --- Codex (OpenAI) ---------------------------------------
  {
    category: "Codex",
    title: "Codex, à quoi ça sert et en quoi il diffère de Claude Code",
    level: "🟢 Débutant",
    summary: "L'agent de codage en ligne de commande d'OpenAI — la même idée que Claude Code, avec ses propres réglages et son propre vocabulaire.",
    content: [
      {
        heading: "Le même principe que Claude Code",
        text: "Comme Claude Code, Codex tourne dans le terminal, lit et modifie directement les fichiers du projet, exécute des commandes, et peut enchaîner plusieurs actions pour accomplir une tâche — voir [[Claude Code::Claude Code, à quoi ça sert vraiment ?]] pour le principe général d'un agent de codage."
      },
      {
        heading: "Développé par OpenAI, pas Anthropic",
        text: "Codex utilise les modèles d'OpenAI (GPT) plutôt que Claude — le choix entre les deux dépend souvent du modèle qu'on préfère, ou de l'abonnement déjà en place (ChatGPT vs Claude)."
      },
      {
        heading: "Un vocabulaire proche mais pas identique",
        text: "Là où Claude Code a des modes de permission et un CLAUDE.md, Codex a des sandbox/politiques d'approbation et un AGENTS.md — les concepts se recoupent largement, mais les noms et réglages exacts diffèrent."
      },
      {
        heading: "Pas besoin de choisir un camp",
        text: "Les deux outils peuvent cohabiter sur la même machine, y compris sur le même projet — rien n'empêche d'utiliser l'un pour une tâche et l'autre pour une autre, selon ce qui convient le mieux au moment donné."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu connais déjà Claude Code et tu veux comprendre rapidement Codex. Quelle affirmation est correcte ?",
        options: [
          "Les deux reposent sur le même principe d'agent de codage en ligne de commande, avec un vocabulaire et des réglages propres à chacun",
          "Codex ne fonctionne que dans une interface graphique, jamais dans un terminal",
          "Il faut désinstaller Claude Code pour utiliser Codex",
          "Les deux outils sont strictement identiques, seul le nom change"
        ],
        correctIndex: 0,
        correction: "Codex et Claude Code partagent le même principe d'agent de codage en ligne de commande (lire, modifier, exécuter dans le terminal) — mais chacun a son propre vocabulaire et ses propres réglages précis."
      }
    ]
  },
  {
    category: "Codex",
    title: "Installer et se connecter à Codex",
    level: "🟢 Débutant",
    summary: "Trois façons d'installer Codex CLI, et deux façons de s'authentifier selon ce que tu as déjà (compte ChatGPT ou clé API).",
    content: [
      {
        heading: "Trois façons d'installer",
        text: "Le script officiel (curl -fsSL https://chatgpt.com/codex/install.sh | sh) sur macOS/Linux, npm install -g @openai/codex en multiplateforme, ou brew install --cask codex sur macOS — voir [[Bases du terminal::Comprendre les gestionnaires de paquets]] pour le principe général derrière npm/Homebrew."
      },
      {
        heading: "Se connecter avec ChatGPT",
        text: "codex login propose de se connecter avec un compte ChatGPT — la manière la plus simple si un abonnement ChatGPT existe déjà."
      },
      {
        heading: "Se connecter avec une clé API",
        text: "codex login --with-api-key authentifie avec une clé API OpenAI plutôt qu'un compte ChatGPT — utile pour un usage scripté/serveur sans interface graphique."
      },
      {
        heading: "Vérifier et révoquer l'accès",
        text: "codex login status confirme si Codex est bien authentifié ; codex logout supprime les identifiants enregistrés localement, par exemple avant de prêter la machine."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux utiliser Codex dans un script automatisé sur un serveur, sans jamais ouvrir d'interface graphique. Quelle méthode de connexion choisir ?",
        options: [
          "codex login --with-api-key, avec une clé API OpenAI",
          "codex login, en se connectant avec un compte ChatGPT à chaque exécution",
          "Ce n'est pas possible d'utiliser Codex sur un serveur",
          "codex logout"
        ],
        correctIndex: 0,
        correction: "codex login --with-api-key authentifie directement avec une clé API, sans passer par un compte ChatGPT ni une interface graphique — le choix adapté pour un serveur ou un script automatisé."
      }
    ]
  },
  {
    category: "Codex",
    title: "Premiers pas avec Codex : session interactive et exécution one-shot",
    level: "🟢 Débutant",
    summary: "codex pour une session qui dure, codex exec pour une tâche ponctuelle qui répond puis rend la main.",
    content: [
      {
        heading: "codex, la session interactive",
        text: "Tapée seule dans le dossier du projet, la commande codex ouvre une session interactive — le même principe que claude pour Claude Code, voir [[Claude Code::Utiliser Claude Code dans un terminal : les premiers pas]]."
      },
      {
        heading: "codex exec, pour une tâche ponctuelle",
        text: "codex exec \"résume les changements récents\" exécute une tâche unique, affiche le résultat, puis quitte — sans laisser de session ouverte à gérer."
      },
      {
        heading: "Pourquoi préférer l'un ou l'autre",
        text: "Une session interactive convient pour une tâche qui demande des allers-retours (préciser, corriger, itérer). codex exec convient pour une tâche bien définie d'avance, notamment dans un script ou une automatisation."
      },
      {
        heading: "Combiner avec d'autres commandes",
        text: "La sortie de codex exec peut être redirigée vers un fichier ou une autre commande (codex exec \"...\" | tee resultat.md) comme n'importe quelle commande shell classique."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux intégrer une tâche Codex dans un script qui tourne sans supervision, sans laisser de session ouverte derrière lui. Quelle commande utiliser ?",
        options: [
          "codex exec \"tâche\"",
          "codex, puis fermer la fenêtre manuellement",
          "codex login",
          "codex resume"
        ],
        correctIndex: 0,
        correction: "codex exec exécute une tâche unique et rend la main dès qu'elle est terminée, sans laisser de session interactive ouverte — le mode adapté à un script sans supervision."
      }
    ]
  },
  {
    category: "Codex",
    title: "Sandbox et approbations : le système de permissions de Codex",
    level: "🟡 Intermédiaire",
    summary: "Deux réglages combinés définissent ce que Codex peut faire seul, et quand il doit demander confirmation.",
    content: [
      {
        heading: "Le sandbox : ce que Codex peut TOUCHER",
        text: "--sandbox définit l'accès au système de fichiers : read-only (lecture seule), workspace-write (peut écrire dans le dossier de travail), ou danger-full-access (accès complet à la machine) — voir [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] pour l'équivalent côté Claude Code."
      },
      {
        heading: "L'approbation : quand Codex DOIT demander",
        text: "--ask-for-approval définit à quel moment Codex interrompt son travail pour demander confirmation : untrusted (quasi tout), on-request (seulement les actions vraiment risquées), ou never (jamais)."
      },
      {
        heading: "Les combiner pour une automatisation surveillée",
        text: "codex --sandbox workspace-write --ask-for-approval on-request \"tâche\" laisse Codex travailler seul dans le projet, tout en gardant un filet de sécurité sur les actions les plus sensibles."
      },
      {
        heading: "--yolo, le mode sans aucun filet",
        text: "--dangerously-bypass-approvals-and-sandbox (alias --yolo) désactive tout — sandbox ET confirmations. Réservé à un environnement isolé et jetable (conteneur, CI), jamais sur une machine avec des données importantes."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux que Codex travaille seul sur ton projet, mais qu'il te demande confirmation avant une action vraiment risquée. Quels réglages utiliser ?",
        options: [
          "--sandbox workspace-write --ask-for-approval on-request",
          "--dangerously-bypass-approvals-and-sandbox",
          "--sandbox read-only --ask-for-approval never",
          "Aucun réglage n'existe pour ça"
        ],
        correctIndex: 0,
        correction: "workspace-write autorise l'écriture dans le projet, et on-request ne demande confirmation que pour les actions vraiment risquées — la combinaison typique d'une automatisation surveillée."
      }
    ]
  },
  {
    category: "Codex",
    title: "AGENTS.md : donner du contexte permanent à Codex",
    level: "🟡 Intermédiaire",
    summary: "L'équivalent du CLAUDE.md côté Codex — avec un système de couches (global, projet, sous-dossiers) plus poussé.",
    content: [
      {
        heading: "Le même problème que CLAUDE.md résout",
        text: "Sans ce fichier, il faudrait réexpliquer à chaque session le contexte du projet (conventions, pièges, commandes utiles) — AGENTS.md élimine cette répétition, lu automatiquement avant de commencer, voir [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        heading: "Trois niveaux, du plus général au plus précis",
        text: "Un AGENTS.md dans ~/.codex/ s'applique à TOUS les projets ; un AGENTS.md à la racine du dépôt s'applique à CE projet ; un AGENTS.md dans un sous-dossier précise encore pour cette partie du projet."
      },
      {
        heading: "Les fichiers s'empilent, ils ne s'excluent pas",
        text: "Codex lit tous les AGENTS.md pertinents (du plus général au plus proche du dossier courant) et les combine — les instructions les plus proches du dossier de travail prennent le dessus en cas de contradiction."
      },
      {
        heading: "AGENTS.override.md pour une exception ponctuelle",
        text: "Dans un sous-dossier particulier, AGENTS.override.md permet de court-circuiter temporairement des instructions plus générales, sans les modifier à la source."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu as un AGENTS.md à la racine de ton projet, et tu veux une règle différente juste pour le dossier legacy/. Comment faire sans toucher au fichier racine ?",
        options: [
          "Ajouter un AGENTS.md (ou AGENTS.override.md) dans le dossier legacy/",
          "Ce n'est pas possible, un seul AGENTS.md par projet",
          "Renommer le fichier racine",
          "Supprimer AGENTS.md entièrement"
        ],
        correctIndex: 0,
        correction: "AGENTS.md peut exister à plusieurs niveaux (global, racine, sous-dossiers) et s'empile — un AGENTS.md dans legacy/ précise ou surcharge les instructions de la racine pour ce seul sous-dossier."
      }
    ]
  },
  {
    category: "Codex",
    title: "Reprendre, brancher, réviser : gérer ses sessions Codex",
    level: "🟡 Intermédiaire",
    summary: "resume pour continuer, fork pour explorer une piste sans perdre l'original, review pour une relecture ciblée.",
    content: [
      {
        heading: "codex resume : reprendre une session passée",
        text: "Affiche un sélecteur des sessions précédentes du dossier courant pour en reprendre une précise — voir [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]] pour le même besoin côté Claude Code."
      },
      {
        heading: "codex exec resume --last : reprendre sans interface",
        text: "En mode non-interactif, --last reprend directement la session la plus récente avec une nouvelle instruction, sans passer par un sélecteur."
      },
      {
        heading: "codex fork : explorer sans perdre l'original",
        text: "Crée une nouvelle conversation qui repart de l'historique actuel, mais dans une branche séparée — utile pour tester une piste risquée sans altérer la session de départ si ça ne marche pas."
      },
      {
        heading: "codex review : une relecture ciblée",
        text: "Lance Codex en mode revue de code sur les changements en cours, plutôt qu'en mode développement classique — un usage différent de la même base agentique."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux tester une approche risquée sur ta session en cours, sans perdre la possibilité de revenir à la version actuelle si ça ne marche pas. Que fais-tu ?",
        options: [
          "codex fork, pour explorer dans une branche séparée de la conversation",
          "codex resume --last",
          "codex logout puis codex login",
          "Rien, il faut assumer le risque directement dans la session actuelle"
        ],
        correctIndex: 0,
        correction: "codex fork crée une nouvelle conversation à partir de l'historique actuel, dans une branche séparée — la session d'origine reste intacte si l'essai ne donne rien de bon."
      }
    ]
  },
  {
    category: "Codex",
    title: "Automatiser avec Codex : exec, JSON, scripts",
    level: "🔴 Avancé",
    summary: "codex exec devient vraiment utile combiné à une sortie structurée et redirigée — la base d'une automatisation fiable.",
    content: [
      {
        heading: "--json : une sortie faite pour être lue par un programme",
        text: "Diffuse la réponse au format JSON Lines plutôt qu'en texte pensé pour un humain — indispensable dès qu'un autre programme doit exploiter le résultat plutôt qu'un simple affichage."
      },
      {
        heading: "-o / --output-last-message : isoler le résultat final",
        text: "Écrit uniquement le message final dans un fichier, sans le bruit des étapes intermédiaires — pratique pour récupérer juste ce qui compte dans un pipeline."
      },
      {
        heading: "Enchaîner avec d'autres commandes shell",
        text: "codex exec \"...\" | tee resultat.md ou curl ... | codex exec \"...\" fonctionnent comme n'importe quelle commande Unix classique dans un pipeline — Codex s'intègre sans traitement spécial."
      },
      {
        heading: "--skip-git-repo-check pour sortir d'un dépôt Git",
        text: "Par défaut, certaines vérifications supposent un dépôt Git présent. Ce flag permet d'exécuter Codex même en dehors d'un dépôt — utile pour un script générique qui ne tourne pas toujours dans un projet versionné."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux qu'un autre programme récupère la réponse de Codex de façon fiable, sans avoir à parser du texte libre pensé pour un humain. Quelle option utiliser ?",
        options: [
          "--json, pour une sortie en JSON Lines",
          "-i, pour joindre une image",
          "--oss, pour un modèle local",
          "--yolo"
        ],
        correctIndex: 0,
        correction: "--json diffuse la réponse en JSON Lines, un format structuré fait pour être lu par un programme — bien plus fiable que de parser du texte libre pensé pour un humain."
      }
    ]
  },
  {
    category: "Codex",
    title: "Configuration avancée de Codex : profils, modèles locaux, MCP",
    level: "🔴 Avancé",
    summary: "Au-delà des réglages de base : des profils pour changer de contexte rapidement, des modèles locaux, et des serveurs MCP externes.",
    content: [
      {
        heading: "Un profil, pour ne pas retaper les mêmes options",
        text: "--profile nom applique un ensemble de réglages prédéfinis (modèle, sandbox, approbation…) par-dessus la config de base — pratique pour basculer rapidement entre plusieurs contextes de travail sans retaper chaque flag."
      },
      {
        heading: "Surcharger une valeur sans éditer de fichier",
        text: "-c model=\"gpt-5.1-codex\" modifie une valeur de configuration pour une seule exécution, sans toucher au fichier config.toml — utile pour un essai ponctuel."
      },
      {
        heading: "Un modèle local plutôt que l'API OpenAI",
        text: "--oss --local-provider ollama (ou lmstudio) fait tourner Codex avec un modèle hébergé localement plutôt que via l'API — utile hors ligne ou pour éviter d'envoyer du code à un service externe."
      },
      {
        heading: "codex mcp : connecter des outils externes",
        text: "Comme pour Claude Code, Codex peut se connecter à des serveurs MCP pour interagir avec des services externes (bases de données, APIs tierces) au-delà des fichiers et commandes shell — voir [[Claude Code::MCP : connecter Claude à d'autres outils]] pour le principe général."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux utiliser Codex avec un modèle hébergé localement via Ollama, plutôt que l'API OpenAI en ligne. Quelle option utiliser ?",
        options: [
          "--oss --local-provider ollama",
          "--profile ollama",
          "-c model=\"ollama\"",
          "Ce n'est pas possible avec Codex"
        ],
        correctIndex: 0,
        correction: "--oss active un modèle hébergé localement, et --local-provider ollama précise lequel des deux fournisseurs locaux supportés utiliser (LM Studio ou Ollama)."
      }
    ]
  },

  // --- VS Code ---------------------------------------
  {
    category: "VS Code",
    title: "VS Code, à quoi ça sert et comment il s'organise",
    level: "🟢 Débutant",
    summary: "Un éditeur de code léger et extensible — comprendre les grandes zones de l'interface avant d'aller plus loin.",
    content: [
      {
        heading: "Un éditeur, pas un IDE complet par défaut",
        text: "VS Code démarre volontairement léger (édition de texte, coloration syntaxique, recherche) — les fonctionnalités plus poussées (débogueur pour un langage précis, linter, autocomplétion avancée) arrivent via des extensions installées à la demande."
      },
      {
        heading: "Les grandes zones de l'interface",
        text: "À gauche, la barre d'activité (fichiers, recherche, Git, extensions, débogage) et l'explorateur associé ; au centre, l'éditeur, qui peut se diviser en plusieurs colonnes ; en bas, le panneau (terminal intégré, problèmes, sortie)."
      },
      {
        heading: "Le workspace : un dossier, un contexte",
        text: "Ouvrir un dossier (plutôt qu'un fichier isolé) donne accès à l'explorateur de fichiers, à la recherche dans tout le projet, et à des réglages propres à CE dossier."
      },
      {
        heading: "Tout, ou presque, passe par un raccourci",
        text: "VS Code est pensé pour être utilisé au clavier — la plupart des actions ont un raccourci, et celles qui n'en ont pas restent accessibles via la palette de commandes."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux profiter de la recherche dans tout le projet et des réglages propres à ce dossier. Que dois-tu faire en ouvrant VS Code ?",
        options: [
          "Ouvrir le DOSSIER du projet (pas juste un fichier isolé)",
          "Ouvrir uniquement le fichier principal",
          "Installer toutes les extensions disponibles",
          "Ce n'est pas possible, VS Code ne gère qu'un fichier à la fois"
        ],
        correctIndex: 0,
        correction: "Ouvrir le dossier du projet (plutôt qu'un fichier isolé) donne accès à l'explorateur, à la recherche dans tout le projet, et aux réglages propres à ce dossier (workspace)."
      }
    ]
  },
  {
    category: "VS Code",
    title: "La palette de commandes : le point d'entrée vers tout",
    level: "🟢 Débutant",
    summary: "Ctrl+Shift+P donne accès à toutes les actions de VS Code par leur nom, sans avoir à chercher dans les menus.",
    content: [
      {
        heading: "Chercher une action plutôt que la trouver dans un menu",
        text: "Plutôt que de naviguer dans des menus imbriqués, Ctrl+Shift+P ouvre une recherche où taper quelques mots de l'action voulue (\"format\", \"reload\", \"settings\"…) suffit à la retrouver."
      },
      {
        heading: "Un cousin dédié aux fichiers : Ctrl+P",
        text: "Ctrl+P (sans Shift) ouvre une recherche similaire mais dédiée aux FICHIERS du projet — les deux se complètent : Ctrl+P pour ouvrir un fichier, Ctrl+Shift+P pour exécuter une action."
      },
      {
        heading: "Les raccourcis s'affichent à côté du nom",
        text: "Dans les résultats de la palette, le raccourci clavier de chaque action (quand il existe) s'affiche à droite — une façon naturelle de mémoriser les raccourcis les plus utiles au fil du temps."
      },
      {
        heading: "Utile même en connaissant les raccourcis",
        text: "Pour une action rare (changer le thème, recharger la fenêtre), il est souvent plus rapide de passer par la palette que de mémoriser un raccourci utilisé une fois par mois."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux reformater le fichier ouvert mais tu ne te souviens plus du raccourci exact. Que fais-tu ?",
        options: [
          "Ouvrir la palette de commandes (Ctrl+Shift+P) et taper \"format\"",
          "Chercher dans tous les menus un par un",
          "Fermer et rouvrir VS Code",
          "Ce n'est possible qu'avec le raccourci exact"
        ],
        correctIndex: 0,
        correction: "La palette de commandes retrouve une action par quelques mots de son nom — inutile de mémoriser un raccourci pour une action utilisée rarement."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Multi-curseurs et sélection multiple : éditer plusieurs endroits à la fois",
    level: "🟢 Débutant",
    summary: "Modifier plusieurs occurrences d'un coup, sans chercher-remplacer, en gardant le contrôle visuel de chaque changement.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Renommer une variable utilisée à 5 endroits proches, ou ajouter le même préfixe à plusieurs lignes, prend du temps répété manuellement — les multi-curseurs permettent de taper une seule fois pour que ça s'applique partout où c'est sélectionné."
      },
      {
        heading: "Ctrl+D : occurrence par occurrence",
        text: "Sélectionner un mot puis appuyer sur Ctrl+D ajoute la prochaine occurrence identique à la sélection — répéter Ctrl+D en ajoute une de plus à chaque fois, en gardant la main sur ce qui est concerné."
      },
      {
        heading: "Alt+Clic : un curseur exactement où on veut",
        text: "Alt+Clic place un curseur supplémentaire à l'endroit cliqué, sans dépendre d'un mot ou d'une occurrence précise — utile pour des positions qui ne se ressemblent pas textuellement."
      },
      {
        heading: "Différence avec chercher-remplacer",
        text: "Chercher-remplacer agit à l'aveugle sur tout le fichier (ou tout le projet). Les multi-curseurs restent visuels : on voit et choisit exactement quelles occurrences sont concernées avant de taper quoi que ce soit."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux renommer une variable utilisée à 4 endroits dans le fichier, mais tu veux voir et choisir précisément quelles occurrences sont concernées avant de taper. Quelle approche utiliser ?",
        options: [
          "Sélectionner la variable puis Ctrl+D pour ajouter chaque occurrence à la sélection",
          "Chercher-remplacer sur tout le fichier sans vérifier",
          "Retaper chaque occurrence une par une, dans des actions séparées",
          "Ce n'est pas possible dans VS Code"
        ],
        correctIndex: 0,
        correction: "Ctrl+D ajoute les occurrences une par une à la sélection, en donnant le contrôle visuel de ce qui est concerné avant de taper — contrairement à un chercher-remplacer aveugle."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Les extensions : étendre VS Code selon ses besoins",
    level: "🟡 Intermédiaire",
    summary: "VS Code reste volontairement léger par défaut — les extensions ajoutent le support d'un langage, un linter, un thème, ou un outil précis.",
    content: [
      {
        heading: "Pourquoi VS Code ne fait pas tout par défaut",
        text: "Support natif de chaque langage, chaque framework, chaque outil rendrait VS Code lourd et lent pour tout le monde, y compris ceux qui n'en ont pas besoin — les extensions permettent à chacun de n'ajouter que ce qui sert à SON usage."
      },
      {
        heading: "Chercher et installer",
        text: "Le panneau Extensions (barre d'activité) permet de chercher par nom ou mot-clé, voir la description et le nombre d'installations, puis installer en un clic — l'équivalent graphique de code --install-extension."
      },
      {
        heading: "Recommander des extensions à son équipe",
        text: "Un fichier .vscode/extensions.json à la racine du projet liste les extensions recommandées pour CE projet — VS Code propose automatiquement de les installer à l'ouverture, pratique pour uniformiser les outils d'une équipe."
      },
      {
        heading: "Trop d'extensions peut ralentir",
        text: "Chaque extension active consomme des ressources, même sans usage direct — désinstaller ou désactiver celles qui ne servent plus évite un ralentissement progressif au fil du temps."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Ton équipe veut que tout le monde ait les mêmes extensions installées sur un projet donné. Comment faire sans envoyer une liste à copier-coller à la main ?",
        options: [
          "Créer un fichier .vscode/extensions.json à la racine du projet listant les extensions recommandées",
          "Envoyer un message à chaque nouveau membre de l'équipe",
          "Ce n'est pas possible, chacun doit chercher seul",
          "Installer les extensions sur le serveur Git"
        ],
        correctIndex: 0,
        correction: ".vscode/extensions.json liste les extensions recommandées pour le projet — VS Code les propose automatiquement à l'ouverture, sans liste à copier-coller à la main."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Terminal intégré et Git intégré : moins de fenêtres à jongler",
    level: "🟡 Intermédiaire",
    summary: "Le terminal et l'état Git restent visibles à côté du code, sans changer de fenêtre pour la moindre commande.",
    content: [
      {
        heading: "Le terminal intégré, à portée de raccourci",
        text: "Ctrl+` bascule un terminal directement dans VS Code, déjà positionné dans le dossier du projet — c'est d'ailleurs de là que tournent des outils comme Claude Code, voir [[Claude Code::Utiliser Claude Code dans VS Code / Cursor]]."
      },
      {
        heading: "Plusieurs terminaux en parallèle",
        text: "Le panneau terminal peut ouvrir plusieurs onglets (un serveur de dev qui tourne, un autre pour taper des commandes ponctuelles) sans qu'ils ne se gênent."
      },
      {
        heading: "Le panneau Source Control, sans quitter l'éditeur",
        text: "Ctrl+Shift+G affiche les fichiers modifiés, permet de voir un diff, stage et commit — pour les actions courantes, plus besoin de repasser par le terminal pour chaque git add/commit."
      },
      {
        heading: "Les indicateurs dans la marge",
        text: "Une barre de couleur apparaît dans la marge gauche des lignes modifiées, ajoutées ou supprimées par rapport au dernier commit — un repère visuel immédiat de ce qui a changé dans le fichier ouvert, sans lancer git diff."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux voir rapidement quelles lignes du fichier ouvert ont été modifiées depuis le dernier commit, sans taper de commande. Comment faire ?",
        options: [
          "Regarder les indicateurs de couleur dans la marge gauche de l'éditeur",
          "Ouvrir un terminal et taper git diff",
          "Ce n'est visible que dans le panneau Source Control",
          "Ce n'est pas possible sans extension"
        ],
        correctIndex: 0,
        correction: "Les indicateurs de couleur dans la marge gauche signalent immédiatement les lignes ajoutées/modifiées/supprimées par rapport au dernier commit, sans taper la moindre commande."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Débogueur intégré : comprendre le principe",
    level: "🟡 Intermédiaire",
    summary: "Poser un point d'arrêt et avancer pas à pas, plutôt que de deviner ce qui se passe à coup de print/console.log.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Ajouter des console.log partout pour comprendre où un bug se produit fonctionne, mais demande de les retirer ensuite et ne montre qu'un instant figé — le débogueur permet d'observer l'état du programme en direct, à l'endroit exact où ça bloque."
      },
      {
        heading: "Un point d'arrêt, pour mettre en pause",
        text: "F9 sur une ligne pose un point d'arrêt — quand l'exécution y arrive (F5 pour lancer), le programme se met en pause à cet endroit précis, avec toutes les variables visibles dans leur état actuel."
      },
      {
        heading: "Avancer pas à pas",
        text: "Une fois en pause, F10 exécute la ligne courante sans entrer dans le détail des fonctions appelées ; F11 entre au contraire dans la fonction pour la suivre ligne par ligne, à l'intérieur."
      },
      {
        heading: "launch.json : comment VS Code sait quoi lancer",
        text: "Pour un projet un peu spécifique (arguments, variables d'environnement), un fichier .vscode/launch.json précise comment démarrer le débogage — généré automatiquement la première fois qu'on configure le débogueur pour un type de projet."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux observer l'état exact des variables au moment précis où un bug se produit, sans ajouter puis retirer des console.log. Que fais-tu ?",
        options: [
          "Poser un point d'arrêt (F9) à cet endroit puis lancer le débogueur (F5)",
          "Ajouter des console.log partout dans le fichier",
          "Relire le code sans l'exécuter",
          "Ce n'est pas possible sans extension tierce"
        ],
        correctIndex: 0,
        correction: "Un point d'arrêt met le programme en pause exactement à l'endroit voulu, avec toutes les variables visibles dans leur état réel — plus fiable et plus rapide que des console.log à ajouter puis retirer."
      }
    ]
  },
  {
    category: "VS Code",
    title: "settings.json vs interface graphique : la configuration en profondeur",
    level: "🔴 Avancé",
    summary: "Les mêmes réglages, accessibles soit par une interface graphique, soit par un fichier JSON — chacun avec ses avantages.",
    content: [
      {
        heading: "Deux façons d'accéder aux mêmes réglages",
        text: "Ctrl+, ouvre l'interface graphique des paramètres, avec recherche et descriptions. La même configuration existe sous forme de fichier JSON (settings.json), accessible via la palette (Preferences: Open User Settings (JSON))."
      },
      {
        heading: "Pourquoi passer par le JSON malgré l'interface",
        text: "Copier-coller une configuration trouvée en ligne (un bloc de réglages pour un langage précis) est plus rapide en JSON qu'en cherchant chaque réglage un par un dans l'interface graphique."
      },
      {
        heading: "Utilisateur vs Workspace : deux portées différentes",
        text: "Les réglages \"utilisateur\" s'appliquent à tous les projets ouverts avec ce compte. Les réglages \"workspace\" (stockés dans .vscode/settings.json à la racine du projet) ne s'appliquent qu'à CE projet, et sont prioritaires sur les réglages utilisateur."
      },
      {
        heading: "Partager des réglages d'équipe",
        text: "Comme .vscode/extensions.json pour les extensions, un .vscode/settings.json versionné dans Git permet à toute une équipe de partager les mêmes réglages de projet (taille d'indentation, formateur par défaut…) sans que chacun ait à les configurer à la main."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux qu'un réglage (par exemple la taille d'indentation) s'applique uniquement à ce projet, pas à tous tes autres projets. Où le mettre ?",
        options: [
          "Dans .vscode/settings.json, à la racine du projet (réglage workspace)",
          "Dans les réglages utilisateur (Ctrl+,)",
          "Ça s'applique toujours à tous les projets, impossible de cibler un seul projet",
          "Dans un fichier .env"
        ],
        correctIndex: 0,
        correction: "Les réglages workspace (.vscode/settings.json) ne s'appliquent qu'au projet courant et sont prioritaires sur les réglages utilisateur, valables partout ailleurs."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Personnaliser ses raccourcis : keybindings.json",
    level: "🔴 Avancé",
    summary: "Changer, ajouter ou désactiver un raccourci — utile quand l'habitude vient d'un autre éditeur, ou qu'un raccourci entre en conflit.",
    content: [
      {
        heading: "Deux façons de modifier un raccourci",
        text: "L'interface graphique (Preferences: Open Keyboard Shortcuts) permet de chercher une action et lui assigner un nouveau raccourci en cliquant. La même chose existe en JSON (keybindings.json), plus rapide pour copier-coller une configuration ou en modifier plusieurs d'un coup."
      },
      {
        heading: "Le \"when\" : un raccourci actif seulement dans un contexte précis",
        text: "Chaque raccourci peut être limité à un contexte (\"when\": \"editorTextFocus\") — un même raccourci peut ainsi faire des choses différentes selon qu'on est dans l'éditeur, le terminal, ou une liste de fichiers."
      },
      {
        heading: "Résoudre un conflit avec une autre application",
        text: "Si un raccourci VS Code entre en conflit avec un raccourci système ou d'une autre application (souvent le cas sur Linux avec certains gestionnaires de fenêtres), le réassigner dans keybindings.json règle le conflit sans toucher à la config du système."
      },
      {
        heading: "Retrouver ses habitudes d'un autre éditeur",
        text: "Des extensions dédiées (\"Vim\", ou des profils de raccourcis pour Sublime Text/Atom) reproduisent les raccourcis d'un éditeur précédent — une alternative à tout reconfigurer soi-même à la main."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Un raccourci VS Code entre en conflit avec un raccourci déjà utilisé par ton système d'exploitation. Comment le résoudre sans toucher à la configuration du système ?",
        options: [
          "Réassigner ce raccourci dans keybindings.json (via Preferences: Open Keyboard Shortcuts)",
          "Désinstaller VS Code",
          "Changer les raccourcis du système d'exploitation",
          "Ce n'est pas possible, il faut vivre avec le conflit"
        ],
        correctIndex: 0,
        correction: "Réassigner le raccourci côté VS Code (keybindings.json) règle le conflit sans toucher à la configuration du système ni de l'autre application concernée."
      }
    ]
  },
  {
    category: "VS Code",
    title: "VS Code + Claude Code : la connexion entre les deux",
    level: "🟡 Intermédiaire",
    summary: "Ce que l'extension change concrètement une fois VS Code et Claude Code connectés — un résumé pratique des deux côtés.",
    content: [
      {
        heading: "L'extension ne remplace rien, elle connecte",
        text: "Claude Code continue de tourner dans le terminal intégré — l'extension ajoute simplement une communication entre cette session et l'éditeur autour, voir [[Claude Code::Utiliser Claude Code dans VS Code / Cursor]] pour le détail de ce que ça change."
      },
      {
        heading: "La sélection de code comme contexte automatique",
        text: "Sélectionner un extrait dans l'éditeur avant de poser une question à Claude Code évite d'avoir à le copier-coller dans le terminal — l'éditeur et la session partagent ce contexte automatiquement."
      },
      {
        heading: "Les modifications proposées, en diff dans l'éditeur",
        text: "Plutôt qu'un bloc de texte brut affiché dans le terminal, les changements proposés par Claude Code s'affichent comme une vraie vue diff dans VS Code — le même type d'affichage que pour une revue Git classique."
      },
      {
        heading: "/ide pour connecter une session déjà ouverte",
        text: "Si Claude Code tourne dans un terminal séparé du terminal intégré de VS Code, /ide (tapé dans la session) la connecte à l'éditeur ouvert — voir [[Claude Code::Installer l'extension dans VS Code ou Cursor]] pour l'installation initiale de l'extension."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu as une session Claude Code qui tourne dans un terminal séparé (pas le terminal intégré de VS Code), et tu veux qu'elle voie le fichier ouvert dans l'éditeur. Que fais-tu ?",
        options: [
          "Taper /ide dans la session Claude Code pour la connecter à l'éditeur ouvert",
          "Fermer et relancer VS Code",
          "Copier-coller le fichier entier dans le terminal",
          "Ce n'est pas possible, il faut relancer Claude Code depuis le terminal intégré"
        ],
        correctIndex: 0,
        correction: "/ide connecte une session Claude Code déjà en cours (même lancée depuis un terminal séparé) à l'éditeur ouvert, pour partager le fichier et la sélection actifs."
      }
    ]
  },
  {
    category: "VS Code",
    title: "Installer VS Code sur Windows ou Linux",
    level: "🟢 Débutant",
    summary: "Un installeur graphique, ou une ligne de commande via le gestionnaire de paquets du système — au choix selon l'OS.",
    content: [
      {
        heading: "Sur Windows : winget",
        text: "winget install Microsoft.VisualStudioCode installe VS Code via le gestionnaire de paquets officiel de Windows, intégré depuis Windows 10/11 — l'alternative en ligne de commande à l'installeur téléchargé depuis le site."
      },
      {
        heading: "Sur Linux : Snap, le plus simple",
        text: "sudo snap install --classic code installe VS Code en une commande sur Ubuntu/Debian et les distributions compatibles Snap, avec des mises à jour automatiques en arrière-plan."
      },
      {
        heading: "Sur Linux : le dépôt officiel apt, pour rester dans l'écosystème apt",
        text: "Ajouter le dépôt Microsoft (clé GPG + source apt, une seule fois) permet ensuite d'installer et de mettre à jour VS Code avec sudo apt install code, comme n'importe quel autre paquet du système."
      },
      {
        heading: "Vérifier que l'installation a fonctionné",
        text: "code --version affiche la version installée — une vérification rapide, quelle que soit la méthode d'installation choisie."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu es sur Ubuntu et tu veux que VS Code se mette à jour tout seul, sans y penser. Quelle méthode d'installation choisir ?",
        options: [
          "sudo snap install --classic code",
          "Télécharger un .deb et ne plus jamais le mettre à jour",
          "Ce n'est pas possible d'avoir des mises à jour automatiques sur Linux",
          "Compiler VS Code depuis les sources"
        ],
        correctIndex: 0,
        correction: "Le paquet Snap se met à jour automatiquement en arrière-plan — la méthode la plus simple sur Ubuntu/Debian pour ne pas avoir à s'en soucier."
      }
    ]
  },

  // --- Cursor ---------------------------------------
  {
    category: "Cursor",
    title: "Cursor, à quoi ça sert et en quoi il diffère de VS Code",
    level: "🟢 Débutant",
    summary: "Un fork de VS Code avec l'IA intégrée nativement dans l'éditeur, pas ajoutée après coup via une extension.",
    content: [
      {
        heading: "La même base que VS Code",
        text: "Cursor reprend l'interface, le système d'extensions et la plupart des raccourcis de VS Code — tout ce qui a été vu dans la catégorie VS Code fonctionne à l'identique dans Cursor, voir [[VS Code::VS Code, à quoi ça sert et comment il s'organise]]."
      },
      {
        heading: "L'IA native plutôt qu'ajoutée après coup",
        text: "Contrairement à VS Code + l'extension Claude Code (qui connecte un outil externe à l'éditeur), Cursor intègre l'IA directement dans son cœur — édition inline, chat et autocomplétion avancée font partie de l'éditeur lui-même, pas d'un outil branché dessus."
      },
      {
        heading: "Ce que ça change concrètement",
        text: "Les fonctionnalités IA de Cursor (Ctrl+K, Ctrl+L, Tab) sont accessibles sans rien installer de plus après l'éditeur lui-même — pas d'extension séparée à connecter comme pour Claude Code dans VS Code."
      },
      {
        heading: "Pas un remplacement total de VS Code + extension",
        text: "Les deux approches restent valables : Cursor pour une expérience IA pensée dès le départ dans l'éditeur, ou VS Code/Cursor + l'extension Claude Code pour utiliser précisément Claude Code depuis un éditeur basé sur VS Code, voir [[Claude Code::Installer l'extension dans VS Code ou Cursor]]."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Quelle est la différence fondamentale entre Cursor et VS Code + l'extension Claude Code ?",
        options: [
          "Cursor intègre l'IA nativement dans l'éditeur ; l'extension connecte un outil externe (Claude Code) à VS Code",
          "Cursor n'a aucun lien avec VS Code",
          "Il n'y a aucune différence, ce sont les mêmes outils",
          "L'extension Claude Code ne fonctionne que sur Cursor"
        ],
        correctIndex: 0,
        correction: "Cursor construit l'IA directement dans le cœur de l'éditeur, alors que l'extension Claude Code connecte un outil externe (qui tourne dans le terminal) à VS Code — deux approches différentes du même objectif."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Édition inline (Ctrl+K) : modifier du code sans ouvrir le chat",
    level: "🟢 Débutant",
    summary: "Décrire un changement directement là où il doit avoir lieu, sans quitter la ligne de code concernée.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Ouvrir un chat, expliquer où se trouve le code à changer, copier-coller le résultat proposé — pour une modification ponctuelle et localisée, ce détour est plus lent que nécessaire."
      },
      {
        heading: "Ctrl+K, directement sur place",
        text: "Placer le curseur (ou sélectionner un bloc) puis Ctrl+K ouvre un champ juste en dessous pour décrire la modification voulue — le changement s'applique directement à cet endroit précis."
      },
      {
        heading: "Une question plutôt qu'une modification",
        text: "Alt+Entrée depuis ce même champ pose une question ponctuelle sans toucher au code — utile pour comprendre une ligne avant de décider de la modifier."
      },
      {
        heading: "Quand préférer le chat à la place",
        text: "Pour une modification qui touche plusieurs endroits différents du fichier (ou plusieurs fichiers), le chat ou le mode Agent conviennent mieux — l'édition inline reste pensée pour un changement localisé."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux modifier une seule fonction, directement à son emplacement, sans ouvrir tout un panneau de discussion. Quel raccourci utiliser ?",
        options: [
          "Ctrl+K, sur la fonction sélectionnée ou avec le curseur dessus",
          "Ctrl+L",
          "Ctrl+E",
          "Ctrl+Shift+P"
        ],
        correctIndex: 0,
        correction: "Ctrl+K ouvre l'édition inline directement sur place — pensée pour une modification localisée, sans passer par tout un panneau de discussion."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Le chat et le mode Agent : deux façons de demander de l'aide",
    level: "🟢 Débutant",
    summary: "Le chat pour discuter et comprendre, l'Agent pour déléguer une tâche qui touche plusieurs fichiers.",
    content: [
      {
        heading: "Ctrl+L : poser une question, avec le contexte du fichier",
        text: "Ouvre un panneau de discussion qui a accès au fichier actuellement ouvert (et à la sélection, si du texte est sélectionné) — pour comprendre du code, demander une explication, ou une modification simple."
      },
      {
        heading: "Le mode Agent : pour une tâche plus large",
        text: "Contrairement au chat qui répond surtout par du texte et des suggestions ponctuelles, le mode Agent peut explorer plusieurs fichiers, en modifier plusieurs à la suite, et exécuter des commandes — pour une tâche qui dépasse un seul fichier."
      },
      {
        heading: "Ctrl+E pour la disposition dédiée",
        text: "Bascule vers une disposition plein écran pensée pour suivre une tâche Agent plus longue, avec plus de place pour voir les fichiers explorés et modifiés."
      },
      {
        heading: "Le menu des modes pour choisir explicitement",
        text: "Ctrl+. affiche le menu Agent / Plan / Ask — voir [[Cursor::Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait]] pour le détail de chacun."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux une tâche qui va explorer et modifier plusieurs fichiers du projet, pas juste répondre à une question. Quel mode est le plus adapté ?",
        options: [
          "Le mode Agent",
          "Uniquement le chat en mode question-réponse",
          "L'édition inline (Ctrl+K)",
          "Aucun mode ne permet de toucher plusieurs fichiers"
        ],
        correctIndex: 0,
        correction: "Le mode Agent est pensé pour explorer et modifier plusieurs fichiers, contrairement au chat (surtout question-réponse) ou à l'édition inline (localisée à un endroit précis)."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Cursor Tab : l'autocomplétion qui devine plusieurs lignes",
    level: "🟡 Intermédiaire",
    summary: "Plus qu'une autocomplétion classique : Cursor Tab anticipe des blocs entiers en tenant compte du contexte du fichier.",
    content: [
      {
        heading: "Au-delà de l'autocomplétion classique",
        text: "Une autocomplétion classique propose surtout un mot ou une fin de ligne, à partir de ce qui a déjà été tapé. Cursor Tab propose parfois des lignes entières, voire plusieurs lignes à la suite, en se basant sur le reste du fichier et les modifications récentes."
      },
      {
        heading: "Accepter en un coup ou mot par mot",
        text: "Tab valide toute la suggestion affichée. Ctrl+→ n'en accepte que le prochain mot — utile quand seul le début de la suggestion correspond à ce qui est voulu."
      },
      {
        heading: "La suggestion peut sauter d'un endroit à l'autre",
        text: "Après une modification, Cursor Tab peut proposer un changement lié un peu plus loin dans le fichier (par exemple, la ligne équivalente dans une fonction similaire) — pas seulement une suite au curseur."
      },
      {
        heading: "Une suggestion qui ne convient pas : continuer à taper",
        text: "Ignorer la suggestion en continuant à taper normalement la fait simplement disparaître — aucune action explicite n'est nécessaire pour la refuser."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Cursor Tab propose une suggestion de plusieurs lignes, mais seule la première te convient vraiment. Que fais-tu ?",
        options: [
          "Ctrl+→ pour n'accepter que le prochain mot/la partie voulue, plutôt que Tab pour tout accepter",
          "Accepter avec Tab puis tout supprimer après",
          "Retaper la ligne à la main sans regarder la suggestion",
          "Ce n'est pas possible d'accepter partiellement"
        ],
        correctIndex: 0,
        correction: "Ctrl+→ accepte la suggestion mot par mot plutôt qu'en bloc — plus précis que d'accepter tout avec Tab pour ensuite supprimer ce qui ne convient pas."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait",
    level: "🟡 Intermédiaire",
    summary: "Trois niveaux d'autonomie, du plus prudent au plus direct — le même principe que les modes de permission vus ailleurs, avec le vocabulaire de Cursor.",
    content: [
      {
        heading: "Ask : lecture seule",
        text: "Le mode Ask répond à des questions sur le projet sans jamais modifier un fichier ni exécuter de commande — le plus prudent des trois, adapté pour comprendre avant d'agir."
      },
      {
        heading: "Plan : réfléchir avant d'agir",
        text: "Le mode Plan fait proposer une approche détaillée avant toute modification, à valider — voir [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] pour le même principe côté Claude Code, et [[Codex::Sandbox et approbations : le système de permissions de Codex]] côté Codex."
      },
      {
        heading: "Agent : le mode par défaut, qui agit",
        text: "Le mode Agent explore, modifie et exécute des commandes pour accomplir la tâche demandée — le plus direct des trois, celui utilisé par défaut sans réglage particulier."
      },
      {
        heading: "Changer de mode en cours de route",
        text: "Ctrl+. ouvre le menu des modes à tout moment — rien n'empêche de commencer en Ask pour comprendre, puis de repasser en Agent une fois l'approche claire."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux d'abord comprendre comment une fonctionnalité est implémentée, sans risquer la moindre modification accidentelle. Quel mode choisir ?",
        options: [
          "Ask, le mode lecture seule",
          "Agent, le mode par défaut",
          "Plan",
          "Aucun mode ne garantit l'absence de modification"
        ],
        correctIndex: 0,
        correction: "Ask ne modifie jamais un fichier ni n'exécute de commande — le mode le plus adapté pour comprendre avant d'agir, sans aucun risque de modification accidentelle."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Cursor Rules : donner du contexte permanent au projet",
    level: "🟡 Intermédiaire",
    summary: "L'équivalent du CLAUDE.md/AGENTS.md côté Cursor — avec un système de règles plus granulaire, activables selon le contexte.",
    content: [
      {
        heading: "Le même problème, résolu ailleurs aussi",
        text: "Réexpliquer les conventions du projet à chaque conversation est répétitif — comme CLAUDE.md pour Claude Code ou AGENTS.md pour Codex, les Cursor Rules éliminent cette répétition."
      },
      {
        heading: "Deux formats possibles",
        text: "Des fichiers .mdc dans .cursor/rules/ (avec des métadonnées de configuration), ou plus simplement un AGENTS.md classique à la racine du projet — Cursor accepte les deux, voir [[Codex::AGENTS.md : donner du contexte permanent à Codex]] pour le même fichier côté Codex."
      },
      {
        heading: "Une activation plus fine que \"toujours actif\"",
        text: "Une règle peut être toujours appliquée, appliquée automatiquement selon le sujet de la demande, appliquée seulement pour certains fichiers (par motif de nom), ou invoquée manuellement via @nom-de-la-regle — plus granulaire qu'un seul fichier chargé en entier à chaque fois."
      },
      {
        heading: "Des règles utilisateur, au-delà du projet",
        text: "Au-delà des règles par projet, des préférences globales (style de communication, conventions personnelles) peuvent être définies une fois pour toutes et s'appliquer à tous les projets."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux qu'une règle s'applique uniquement quand l'agent travaille sur des fichiers de test, pas sur le reste du projet. Est-ce possible avec les Cursor Rules ?",
        options: [
          "Oui, une règle peut être limitée à des fichiers correspondant à un motif précis",
          "Non, une règle s'applique toujours à tout le projet",
          "Seulement en dupliquant tout le projet",
          "Seulement via AGENTS.md, pas via .cursor/rules"
        ],
        correctIndex: 0,
        correction: "Une règle peut être limitée aux fichiers correspondant à un motif précis (par exemple les fichiers de test) — bien plus granulaire qu'une application uniforme à tout le projet."
      }
    ]
  },
  {
    category: "Cursor",
    title: "cursor-agent : utiliser Cursor sans ouvrir l'éditeur",
    level: "🔴 Avancé",
    summary: "Le même agent, dans un terminal — pour scripter, automatiser, ou travailler sur un serveur distant sans interface graphique.",
    content: [
      {
        heading: "Le problème que ça résout",
        text: "Certains contextes (un serveur distant en SSH, un pipeline CI, un script) n'ont pas d'éditeur graphique disponible — cursor-agent porte les mêmes capacités dans un simple terminal."
      },
      {
        heading: "agent, pour une session interactive",
        text: "Tapée seule, la commande agent ouvre une session interactive dans le terminal — même principe que claude pour Claude Code ou codex pour Codex, voir [[Claude Code::Utiliser Claude Code dans un terminal : les premiers pas]]."
      },
      {
        heading: "agent -p, pour une exécution ponctuelle",
        text: "Le mode print (-p) exécute une tâche, affiche le résultat, puis quitte — sans session à faire vivre, pratique pour un script ou une automatisation."
      },
      {
        heading: "Les mêmes modes qu'ailleurs, en ligne de commande",
        text: "--mode=plan et --mode=ask sont accessibles directement en flag, pour le même contrôle qu'à l'intérieur de l'éditeur — voir [[Cursor::Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait]]."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu veux exécuter une tâche Cursor sur un serveur distant connecté en SSH, sans interface graphique disponible. Quel outil utiliser ?",
        options: [
          "cursor-agent, la version CLI de Cursor",
          "Ce n'est pas possible sans interface graphique",
          "Installer un bureau distant pour ouvrir l'éditeur graphique",
          "Cursor ne fonctionne que dans l'éditeur"
        ],
        correctIndex: 0,
        correction: "cursor-agent porte les mêmes capacités que l'éditeur dans un simple terminal — pas besoin d'interface graphique, y compris sur un serveur distant en SSH."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Choisir le bon outil : Cursor, Claude Code ou Codex ?",
    level: "🔴 Avancé",
    summary: "Trois agents de codage, trois philosophies légèrement différentes — un même besoin peut avoir une réponse différente selon l'outil.",
    content: [
      {
        heading: "Un socle commun aux trois",
        text: "Les trois lisent et modifient des fichiers, exécutent des commandes, et peuvent enchaîner plusieurs actions pour accomplir une tâche — voir [[Claude Code::Claude Code, à quoi ça sert vraiment ?]] et [[Codex::Codex, à quoi ça sert et en quoi il diffère de Claude Code]] pour les deux autres."
      },
      {
        heading: "Cursor : l'IA pensée dans l'éditeur dès le départ",
        text: "Pour qui travaille surtout dans un éditeur graphique et veut l'IA intégrée nativement (édition inline, autocomplétion avancée), sans jongler entre un terminal et l'éditeur."
      },
      {
        heading: "Claude Code et Codex : le terminal d'abord",
        text: "Les deux tournent nativement en ligne de commande, avec une extension optionnelle pour se connecter à un éditeur — pour qui préfère piloter depuis le terminal, ou automatiser/scripter des tâches."
      },
      {
        heading: "Rien n'empêche de combiner les trois",
        text: "Rien n'oblige à choisir un seul outil pour toujours — utiliser Cursor pour l'édition au quotidien et Claude Code ou Codex pour une tâche scriptée reste tout à fait possible, chacun avec ses forces selon le contexte."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu travailles presque exclusivement dans un éditeur graphique et tu veux l'IA directement intégrée, sans connecter un outil externe. Quel choix est le plus naturel ?",
        options: [
          "Cursor",
          "Une combinaison forcée des trois en même temps",
          "Aucun des trois ne convient à ce cas",
          "Un script shell personnalisé"
        ],
        correctIndex: 0,
        correction: "Cursor intègre l'IA nativement dans l'éditeur — le choix le plus direct pour qui travaille surtout dans une interface graphique, sans vouloir connecter un outil externe."
      }
    ]
  },
  {
    category: "Cursor",
    title: "Installer Cursor sur Windows ou Linux",
    level: "🟢 Débutant",
    summary: "L'éditeur graphique et l'agent en ligne de commande (cursor-agent) s'installent séparément, chacun à sa façon.",
    content: [
      {
        heading: "L'éditeur sur Windows : winget ou l'installeur .exe",
        text: "winget install --id=Anysphere.Cursor -e installe l'éditeur via le gestionnaire de paquets de Windows — une alternative à l'installeur .exe téléchargé depuis cursor.com."
      },
      {
        heading: "L'éditeur sur Linux : l'AppImage",
        text: "Cursor se distribue sur Linux sous forme d'AppImage : la télécharger, la rendre exécutable (chmod +x), puis la lancer directement — pas d'installation au sens classique, juste un fichier à exécuter. Sur Debian/Ubuntu, libfuse2 est parfois nécessaire au préalable si le lancement échoue."
      },
      {
        heading: "cursor-agent : un second outil à installer à part",
        text: "L'agent en ligne de commande (cursor-agent) n'est pas inclus avec l'éditeur — il s'installe séparément via un script officiel, différent selon l'OS : curl ... | bash sur Mac/Linux, une commande PowerShell sur Windows, voir [[Cursor::cursor-agent : utiliser Cursor sans ouvrir l'éditeur]]."
      },
      {
        heading: "Vérifier que tout est en place",
        text: "cursor-agent --version confirme que l'agent CLI est bien installé et accessible, indépendamment de l'éditeur graphique."
      }
    ],
    exercises: [
      {
        type: "quiz",
        instruction: "Tu as installé l'éditeur Cursor sur Linux, mais tu veux aussi utiliser l'agent en ligne de commande dans un script. Suffit-il d'avoir installé l'éditeur ?",
        options: [
          "Non, cursor-agent s'installe séparément via son propre script d'installation",
          "Oui, l'agent CLI est automatiquement inclus avec l'éditeur",
          "Non, ce n'est possible que sur Windows",
          "Non, il faut compiler cursor-agent soi-même"
        ],
        correctIndex: 0,
        correction: "L'éditeur graphique et cursor-agent sont deux installations distinctes — installer l'un n'installe pas automatiquement l'autre."
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

];
