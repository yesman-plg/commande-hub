// ============================================================
// Command Hub — English translations for guides.js
// ============================================================
// Same principle as commands.en.js: this file only overrides
// DISPLAY text (title / summary / content / exercises) for the
// English UI, in a separate file so guides.js (the French source)
// is never touched.
//
// Key format: "category|title" using the EXACT French category
// and title from guides.js. The [[Category::Title]] cross-reference
// markers inside content keep pointing at the French canonical
// title (guide identity never changes with language) — the app
// looks up the English display text for the link label at render
// time.
// ============================================================

const GUIDE_TRANSLATIONS_EN = {
  "Bases du terminal|Ouvrir un terminal sur Windows ou Linux": {
    "title": "Opening a terminal on Windows or Linux",
    "summary": "The mandatory first step before any command — where to find it and how to tell it's ready to receive instructions.",
    "content": [
      {
        "heading": "A terminal, concretely",
        "text": "A window where you type text to give the computer instructions, rather than clicking icons — the mandatory gateway for installing and using command-line tools (Claude Code, Codex, winget…). Nothing installed launches itself: it has to be opened first."
      },
      {
        "heading": "On Windows: search for \"PowerShell\" or \"Terminal\"",
        "text": "Click the Start menu, type \"PowerShell\" (or \"Terminal\"), then launch the app that appears in the results — see [[Windows::PowerShell vs invite de commandes (cmd) : lequel utiliser]] for the difference between the two."
      },
      {
        "heading": "On Windows: the Win+X shortcut",
        "text": "The Windows+X shortcut opens a quick menu with direct access to \"Terminal\" or \"Windows PowerShell\", with no Start menu or typing needed."
      },
      {
        "heading": "On Linux: search for \"Terminal\" in the apps",
        "text": "Same as Windows, searching \"Terminal\" in the application menu usually works. Ctrl+Alt+T also opens a terminal directly on most distributions, including Linux Mint."
      },
      {
        "heading": "Once open, how to tell it's working",
        "text": "A dark window with text and a blinking cursor appears, ready to receive a command — it's normal for nothing to happen until a command has been typed and confirmed with Enter."
      }
    ]
  },
  "Bases du terminal|Comment lire une commande": {
    "title": "How to read a command",
    "summary": "Before copy-pasting anything, understand what each part of a command actually means.",
    "content": [
      {
        "heading": "Anatomy of a command",
        "text": "A command usually looks like this:\n\ncommand --option value argument\n\n• The command itself (e.g. git, npm, ls) says which program to run.\n• Options (or \"flags\") start with - or -- and change the behavior. E.g. -r for \"recursive\", --force to force it.\n• An argument is a value given to the command, often a file or folder name.\n\nExample: rm -r my-folder\n→ rm = delete, -r = including everything inside, my-folder = what's being deleted."
      },
      {
        "heading": "The < > in this hub",
        "text": "In this hub's commands, you'll sometimes see <package-name> or <PID>. The angle brackets are NEVER typed literally: they mean \"replace this with your own value\".\n\nE.g.: adb uninstall <package.name> becomes adb uninstall com.example.myapp"
      },
      {
        "heading": "What is sudo?",
        "text": "sudo means \"run this command as an administrator\". The system asks for your password and allows actions that are normally blocked (installing software, modifying a system file…).\n\nGolden rule: never type sudo in front of a command you don't understand, especially if it contains rm."
      },
      {
        "heading": "\"command not found\", what now?",
        "text": "It means the shell couldn't find any program with that name (typo, software not installed, or not in the PATH — see [[Bases du terminal::Variables d'environnement et PATH]]).\n\nReflex: check the spelling, then ask yourself \"is this software actually installed?\" with which command-name, or look up how to install it (often via apt)."
      }
    ],
    "exercises": [
      {
        "type": "fillin",
        "instruction": "Which combined 2-letter flag do you need to add to rm to delete an entire folder, without being asked to confirm?",
        "accept": [
          "-rf",
          "-fr",
          "rf",
          "fr"
        ],
        "correction": "-rf: -r for recursive (also deletes the folder's contents), -f for force (no confirmation, no error if the file doesn't exist). This is the combination to use with the utmost caution — no trash bin, no undo."
      }
    ]
  },
  "Bases du terminal|Se déplacer dans les dossiers": {
    "title": "Moving around folders",
    "summary": "pwd, cd, ls: the commands you'll type dozens of times a day.",
    "content": [
      {
        "heading": "Where am I?",
        "text": "pwd (Print Working Directory) shows the folder you're currently in, in the terminal."
      },
      {
        "heading": "Moving around",
        "text": "cd folder-name enters a folder.\ncd .. goes up one level.\ncd (alone) or cd ~ takes you back to your home folder.\n`cd -` takes you back to the previous folder — handy for going back and forth."
      },
      {
        "heading": "Seeing what's there",
        "text": "ls lists the current folder's contents.\n`ls -la` shows it in detail (permissions, size, date) and also shows hidden files (the ones starting with a dot, like .bashrc)."
      },
      {
        "heading": "Relative vs absolute path",
        "text": "An absolute path starts with / and starts from the system's root (e.g. /home/user/cmd-hub). A relative path starts from wherever you currently are (e.g. cmd-hub/index.html if you're already in /home/user). The ~ symbol is a shortcut to your home folder."
      },
      {
        "heading": "Autocomplete (Tab)",
        "text": "Type the first letters of a file/folder name then press Tab: the terminal completes it automatically. If several files start the same way, press Tab twice to see the list of possibilities.\n\nA habit worth building right away: it avoids typos and saves a huge amount of time."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Show which folder you're currently in.",
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
        "correction": "pwd (Print Working Directory) always shows the ABSOLUTE path of the current folder — the starting point before moving around with cd."
      }
    ]
  },
  "Bases du terminal|Les permissions de fichiers en détail": {
    "title": "File permissions in detail",
    "summary": "Decoding -rwxr-xr-- and understanding what chmod 755 really means.",
    "content": [
      {
        "heading": "Three types of rights",
        "text": "r (read) = can read the content.\nw (write) = can modify/delete.\nx (execute) = can run the file as a program — or, for a FOLDER, can \"enter\" it (cd)."
      },
      {
        "heading": "Three profiles involved",
        "text": "Every file has 3 separate groups of rights, in this order: the owner (u = user), the group (g = group) the file belongs to, and everyone else (o = others)."
      },
      {
        "heading": "Decoding a line from ls -la",
        "text": "Example: -rwxr-xr-- 1 user user 220 ... script.sh\n\n• The very first character (-) says whether it's a file (-) or a folder (d).\n• rwx → the owner (user) can do everything.\n• r-x → the group can read and execute, not modify.\n• r-- → everyone else can only read."
      },
      {
        "heading": "The numeric format (chmod 755)",
        "text": "Each right has a value: r=4, w=2, x=1. You add them up per profile.\n\nrwx = 4+2+1 = 7\nr-x = 4+0+1 = 5\nr-- = 4+0+0 = 4\n\nchmod 755 file therefore gives: owner=7 (rwx), group=5 (r-x), others=5 (r-x). The typical combination for a script you want to be able to run."
      },
      {
        "heading": "Common error",
        "text": "./script.sh: Permission denied → the file doesn't have the x right. Fix it with `chmod +x script.sh` (adds just the execute right, without touching the rest)."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A file has the permissions -rwxr-x---. What can the GROUP do with it?",
        "options": [
          "Read and execute, but not modify",
          "Read, write and execute",
          "No rights at all",
          "Write only"
        ],
        "correctIndex": 0,
        "correction": "-rwxr-x--- reads in blocks of 3: rwx (owner, all rights), r-x (group, read+execute but not write), --- (others, no rights)."
      }
    ]
  },
  "Bases du terminal|Variables d'environnement et PATH": {
    "title": "Environment variables and PATH",
    "summary": "Why just typing 'code' or 'git' is enough to launch the right program, wherever you are.",
    "content": [
      {
        "heading": "What's an environment variable",
        "text": "A name=value pair available to every program launched from this terminal — a bit like ambient settings. Example: $HOME holds the path to your home folder."
      },
      {
        "heading": "PATH, the list of places to look for a program",
        "text": "When you type a command (e.g. git), the shell doesn't magically know its exact location: it looks, IN ORDER, through each folder listed in the PATH variable, until it finds a program with that name. If it finds none → \"command not found\".\n\nwhich command-name tells you exactly which file is used, if several versions of the same program are lying around on the system."
      },
      {
        "heading": "Temporary vs permanent variable",
        "text": "export MY_VARIABLE=value only lasts for the current terminal session — close the terminal, it's gone. To make it permanent, add the line export MY_VARIABLE=value to ~/.bashrc (it will be re-read in every new terminal)."
      },
      {
        "heading": "Concrete example",
        "text": "When you install software like VS Code or Android Studio, its installer automatically adds its own folder to the PATH. That's why typing `code .` works directly in any folder, without giving the full path to the executable."
      },
      {
        "heading": ".env files: centralizing config without hardcoding it",
        "text": "A .env file at the root of a project lists variables (e.g. API_URL=https://example.com) that some tools (Node, Expo, Docker…) load automatically on startup. This lets you change the config depending on the environment (dev/prod) without touching the code, and above all keeps secrets OUT of the source code.\n\nAbsolute rule: a .env file must ALWAYS be listed in .gitignore. Committing it by mistake means publishing your secrets in the Git history, potentially forever."
      },
      {
        "heading": "Expo/React Native-specific trap: EXPO_PUBLIC_",
        "text": "In an Expo project, only variables prefixed with EXPO_PUBLIC_ (e.g. EXPO_PUBLIC_API_URL) get baked into the JS bundle sent to the phone — the other .env variables stay invisible to the app, usable only during the build.\n\n\"Public\" here literally means BUNDLED INTO THE APP, so potentially readable by anyone who decompiles the installed file. NEVER put a real secret (password, private key, full access token) behind an EXPO_PUBLIC_ — only information that's safe to be public, like an API URL or a Firebase key already designed to be public."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Show the full path of the executable used when you type the git command.",
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
        "correction": "which shows you EXACTLY which file the shell will run by searching through the PATH, in the order of the folders that make it up. Precious when several versions of the same program are lying around on the machine."
      }
    ]
  },
  "Bases du terminal|npm & npx, et package.json en détail": {
    "title": "npm & npx, and package.json in detail",
    "summary": "The difference between npm and npx (which you use in almost every Expo command), and how to read a package.json.",
    "content": [
      {
        "heading": "npm vs npx, the most frequent confusion",
        "text": "npm (Node Package Manager) is used to INSTALL packages in your project (npm install).\n\nnpx is used to RUN a package — downloading it temporarily if it isn't already present, without adding it permanently to the project. That's why almost every Expo command in this hub starts with npx expo ... rather than a global install: it guarantees using the Expo CLI version expected by THIS specific project, without permanently installing anything on your machine."
      },
      {
        "heading": "Anatomy of package.json",
        "text": "dependencies: the libraries needed for the app to WORK once published (e.g. react, expo).\n\ndevDependencies: tools only useful DURING development (e.g. a linter, TypeScript types) — they aren't included in the final app shipped to users.\n\nscripts: custom command shortcuts, run with npm run script-name (a few special scripts like start run directly with npm start, without \"run\")."
      },
      {
        "heading": "Reading a version number (semver)",
        "text": "A version number follows the MAJOR.MINOR.PATCH format (e.g. 4.2.1 → breaking changes only on the first digit, in theory). In package.json, the symbols placed in front specify what an npm install is allowed to install automatically:\n\n^4.2.1 → accepts MINOR and PATCH updates (up to 4.x.x), but not 5.0.0.\n~4.2.1 → accepts only PATCH updates (4.2.x), more cautious.\nNo symbol (4.2.1 alone) → version pinned exactly, nothing else gets installed automatically."
      },
      {
        "heading": "Why npx expo install rather than npm install",
        "text": "npm install alone installs the LATEST published version of a package, without worrying about compatibility. npx expo install specifically picks the version COMPATIBLE with your project's Expo SDK — a nuance that avoids a good chunk of crashes after installing a library (see [[Expo / React Native::Pourquoi ça plante après avoir installé une lib]])."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A package.json contains \"expo\": \"~50.0.2\". Can npm install automatically install version 50.1.0?",
        "options": [
          "Yes, no problem at all",
          "No, ~ only allows patch updates (50.0.x)",
          "Only with npx",
          "Only in development mode"
        ],
        "correctIndex": 1,
        "correction": "~50.0.2 only allows PATCH updates (50.0.x). 50.1.0 is a MINOR update, rejected by this symbol — you would have needed ^50.0.2 to accept it automatically."
      }
    ]
  },
  "Bases du terminal|Comprendre les gestionnaires de paquets": {
    "title": "Understanding package managers",
    "summary": "apt, npm, Gradle: three different tools solving the same problem in three different ecosystems.",
    "content": [
      {
        "heading": "The same problem, solved differently",
        "text": "A package manager automates installing, updating and removing software/libraries, along with their dependencies. apt manages Linux SYSTEM SOFTWARE. npm (or yarn) manages a project's JAVASCRIPT LIBRARIES. Gradle manages an Android project's JAVA/KOTLIN LIBRARIES."
      },
      {
        "heading": "Where packages get installed",
        "text": "apt install installs system-WIDE, in shared folders (/usr, /etc…) — a single copy for all your projects.\n\nnpm install installs into a node_modules/ folder specific to THIS project — each project has its own copy, isolated from the others. That's why you can delete node_modules/ without risk: npm install fully regenerates it.\n\nGradle downloads into a shared cache (~/.gradle) then links it to the project."
      },
      {
        "heading": "package.json / build.gradle: the shopping list",
        "text": "These files list the wanted dependencies and their versions (e.g. \"expo\": \"~50.0.0\"). An associated \"lock\" file (package-lock.json, or Gradle's equivalent) pins down the EXACT versions actually used, so the project installs rigorously the same thing on your machine, a colleague's, or a build server."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You accidentally delete the node_modules/ folder of an Expo project. What happens?",
        "options": [
          "The project is lost for good",
          "You need to reinstall Node.js",
          "No big deal, npm install fully regenerates it",
          "It also breaks the other projects on the machine"
        ],
        "correctIndex": 2,
        "correction": "node_modules/ is entirely regenerable from package.json — unlike a system folder like /usr, whose deletion would break a good chunk of Linux Mint with no automatic regeneration possible."
      }
    ]
  },
  "Bases du terminal|Enchaîner des commandes (pipes et redirections)": {
    "title": "Chaining commands (pipes and redirections)",
    "summary": "|, >, &&: the symbols that turn isolated commands into small, powerful scripts.",
    "content": [
      {
        "heading": "The pipe |: plugging one command into another",
        "text": "| sends the OUTPUT of the command on the left as the INPUT of the command on the right.\n\nExample: ps aux | grep node\n→ ps aux lists every process, grep node keeps only the lines containing \"node\". Result: a filtered list, without having to read through everything by eye."
      },
      {
        "heading": "> and >>: redirecting to a file",
        "text": "> sends the result into a file, OVERWRITING its existing content.\n>> does the same but APPENDS at the end, without erasing anything.\n\nExample: `ls -la` > list.txt saves ls's result into a file instead of displaying it on screen."
      },
      {
        "heading": "&&: run the next one only if it succeeded",
        "text": "command1 && command2 runs the second one ONLY IF the first one succeeded (exit code 0).\n\nExample: cd my-project && npm install\n→ If the my-project folder doesn't exist, cd fails and npm install is never run in the wrong place. Safer than typing them separately."
      },
      {
        "heading": "; : run one after the other, no condition",
        "text": "command1 ; command2 runs both in sequence, regardless of whether the first one succeeded or failed. Only use this when the second command doesn't need the first one to have worked."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "List the folder's contents in detail, and keep only the lines containing \"guides\".",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "ls -la | grep guides"
              ],
              "output": "-rw-r--r-- 1 user user 48213 Aug 20 15:02 guides.js"
            }
          ]
        },
        "correction": "ls -la | grep guides sends (pipe |) all of ls -la's output to grep, which only lets through lines containing the word \"guides\" — a filter applied afterwards, without ls itself needing to know how to filter."
      }
    ]
  },
  "Programmation|JSON, le format universel": {
    "title": "JSON, the universal format",
    "summary": "The data structure you run into everywhere: API responses, config files, WebDAV, Firebase…",
    "content": [
      {
        "heading": "What is JSON",
        "text": "JSON (JavaScript Object Notation) was born in JavaScript, but is now used by practically EVERY language (Kotlin, Python, Java…) because it's easy for a human to read and easy for a machine to parse. It's the most common format for exchanging data between an app and a server."
      },
      {
        "heading": "What it looks like",
        "text": "{\n  \"name\": \"Alex\",\n  \"age\": 30,\n  \"projects\": [\"PhotoApp\", \"ShowcaseSite\"],\n  \"active\": true\n}\n\nKey/value pairs between curly braces { }, where a value can itself contain another object or a list — it's this nesting that lets you represent complex data."
      },
      {
        "heading": "The possible value types",
        "text": "\"text\" in double quotes (never single quotes in strict JSON), a number (42, 3.14), a boolean (true/false), null (absence of a value), an object {...}, or an array [...].\n\nCommon trap: a comma after the VERY LAST element of an object or array is a syntax error in JSON (unlike JS) — it breaks the parsing."
      },
      {
        "heading": "Why it's everywhere",
        "text": "Since JSON is language-independent, a server written in Kotlin can send a JSON response that an Expo/JavaScript app understands natively with JSON.parse(), and vice versa with JSON.stringify(). This common language is what lets completely different technologies talk to each other."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Where's the error in this JSON?\n{\n  \"name\": \"Alex\",\n  \"projects\": [\"PhotoApp\", \"ShowcaseSite\",]\n}",
        "options": [
          "The quotes around \"name\"",
          "The opening brace {",
          "There's no error",
          "The comma after the array's last element"
        ],
        "correctIndex": 3,
        "correction": "The comma after \"ShowcaseSite\" (right before the closing bracket ]) is one too many. In strict JSON, a comma after the LAST element of an array or object is a syntax error that breaks the parsing — unlike JavaScript, which is more lenient on this."
      }
    ]
  },
  "Programmation|Requêtes HTTP et API REST": {
    "title": "HTTP requests and REST APIs",
    "summary": "How an app talks to a server: methods, status codes, and the REST principle — the basis of both WebDAV and Firebase.",
    "content": [
      {
        "heading": "Client and server, who's asking what",
        "text": "Your app (the \"client\") sends a REQUEST to a specific address (a URL), and the server sends back a RESPONSE. HTTP is the protocol — the rules of the game — that governs the shape of this exchange."
      },
      {
        "heading": "The main HTTP methods",
        "text": "GET → read/fetch data, without modifying anything (e.g. get the list of your tracks).\nPOST → create new data (e.g. add a new workout session).\nPUT / PATCH → modify existing data (PUT replaces everything, PATCH modifies just some fields).\nDELETE → delete data."
      },
      {
        "heading": "The status codes worth knowing",
        "text": "200 OK → everything went fine.\n201 Created → a resource was successfully created (typical after a POST).\n400 Bad Request → your request is malformed (often a client-side mistake).\n401 Unauthorized → you're not authenticated (missing/invalid credentials).\n403 Forbidden → you ARE authenticated, but you don't have permission to access this.\n404 Not Found → the requested URL doesn't exist.\n500 Internal Server Error → the server crashed on its side, not you.\n\nReflex: before hunting for a bug in your code, ALWAYS check the returned status code — it often tells you directly where to look."
      },
      {
        "heading": "REST, the general principle",
        "text": "A so-called \"REST\" API organizes its URLs around RESOURCES (e.g. /tracks, /tracks/42), and lets the HTTP method say what you want to do with them. Result: GET /tracks/42 reads track 42, DELETE /tracks/42 deletes it — same URL, different action depending on the verb."
      },
      {
        "heading": "Concrete example: WebDAV (remote file sharing)",
        "text": "WebDAV is an EXTENSION of HTTP designed to manage remote files: PROPFIND to list a folder's contents, GET to download a file, PUT to upload one, DELETE to remove one. Understanding HTTP in general directly helps understand why WebDAV works the way it works."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your app does a GET on a resource that doesn't exist in the database. Which status code do you expect?",
        "options": [
          "404 Not Found",
          "200 OK",
          "500 Internal Server Error",
          "301 Moved Permanently"
        ],
        "correctIndex": 0,
        "correction": "404 means \"resource not found\" — the requested URL doesn't exist. A 500 would signal a server-side problem (not your case here), a 200 would mean everything went fine instead."
      }
    ]
  },
  "Programmation|Async/await & Promises en JavaScript": {
    "title": "Async/await & Promises in JavaScript",
    "summary": "Why some lines of JS code seem to 'run later', and how not to get lost in it.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "A network request (calling an API, reading a file) takes time — sometimes several seconds. If JavaScript simply waited for the response by blocking everything, the whole app (including the display) would freeze during that time. \"Asynchronous\" operations let you kick off this wait WITHOUT blocking the rest of the app."
      },
      {
        "heading": "The Promise: a promise of a future value",
        "text": "A Promise represents a value that isn't available YET, but will be (or will fail to be) later. It has 3 possible states: pending, fulfilled (with a value), or rejected (with an error)."
      },
      {
        "heading": "async/await, the syntax that simplifies everything",
        "text": "A function declared async can use the await keyword in front of a call that returns a Promise — the code \"pauses\" that specific function (and only that one) until the Promise resolves, then continues with the obtained value. This lets you write asynchronous code that READS like normal, sequential code, rather than a cascade of callbacks.\n\nasync function loadData() {\n  const response = await fetch(\"https://api.example.com/data\");\n  const data = await response.json();\n  return data;\n}"
      },
      {
        "heading": "Handling errors: try/catch",
        "text": "An await that fails (rejected Promise, e.g. no network) throws an error that must be caught with try/catch, otherwise the app can crash or the error can slip by silently unnoticed:\n\ntry {\n  const data = await loadData();\n} catch (error) {\n  console.log(\"Loading failed:\", error);\n}"
      },
      {
        "heading": "Common trap: forgetting await",
        "text": "Calling an async function WITHOUT await doesn't give you the final result, but the Promise itself (unresolved) — a very common mistake that shows up as a weird object displayed instead of the actual expected data."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "What's the bug in this code?\nasync function loadData() {\n  const response = fetch(\"https://api.example.com/data\");\n  const data = await response.json();\n  return data;\n}",
        "options": [
          "The function isn't declared async",
          "await is missing in front of fetch(...)",
          "A return is missing",
          "response.json() doesn't exist"
        ],
        "correctIndex": 1,
        "correction": "Without await in front of fetch(...), response holds the PROMISE itself (not yet resolved), not the actual HTTP response — so response.json() crashes or returns garbage. Fix: const response = await fetch(...)."
      }
    ]
  },
  "Programmation|Firebase, les bases": {
    "title": "Firebase, the basics",
    "summary": "Authentication, Firestore, security rules: the bare minimum to find your way around a Firebase backend.",
    "content": [
      {
        "heading": "What is Firebase",
        "text": "A \"turnkey\" backend platform provided by Google: database, user authentication, file storage, notifications… It saves you from having to write and host your own server for these common needs — the app talks directly to Firebase services through their SDK."
      },
      {
        "heading": "Firestore: collections and documents",
        "text": "Firestore (Firebase's most used database) organizes data into COLLECTIONS (e.g. \"users\", \"sessions\"), which contain DOCUMENTS (each a bit like a JSON object, with a unique id). A document can itself contain sub-collections — a hierarchy rather than linked tables like in classic SQL."
      },
      {
        "heading": "Authentication",
        "text": "The service that manages user accounts (email/password, Google, etc.) without you having to handle secure password storage yourself. Once logged in, each user gets a unique id (uid) reused to know WHO each piece of data in Firestore belongs to."
      },
      {
        "heading": "Security Rules",
        "text": "By default, without well-configured rules, ANYONE who knows your database's address can potentially read or write to it — Firebase doesn't have a \"server\" of yours filtering requests, security rules ARE the only barrier. They're defined in a separate file (e.g. allow read, write: if request.auth.uid == userId;) and are checked on Firebase's side for every request, never on the app's side (where they'd be bypassable)."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Without configured Firestore security rules, who can potentially read all your data?",
        "options": [
          "Only you",
          "No one, Firebase blocks everything by default",
          "Anyone who knows the project's URL",
          "Only verified Google accounts"
        ],
        "correctIndex": 2,
        "correction": "Firestore has no server of yours in between to filter requests — without Security Rules that check identity (request.auth.uid), access remains potentially open to anyone who knows the project's URL."
      }
    ]
  },
  "Git|Git, à quoi ça sert vraiment ?": {
    "title": "What is Git actually for?",
    "summary": "Understand the concept before the commands: Git keeps a history of every version of your code, first and foremost locally.",
    "content": [
      {
        "heading": "The problem Git solves",
        "text": "Without Git, to keep a history, you'd do something like project_v1, project_v2_final, project_v2_final_ACTUALLY_final.zip. Git does this properly: with every \"commit\", it takes a snapshot of your code's state, with a message explaining what changed. You can go back to any snapshot later."
      },
      {
        "heading": "A commit, precisely",
        "text": "A commit is a 100% LOCAL, timestamped save, with a message explaining what changed. It only exists on your machine, in your project's hidden .git/ folder — no one else sees it until you've explicitly sent it somewhere.\n\nThis is an essential nuance: committing is NOT sharing. You can commit 50 times a day without it touching anything other than your own hard drive, even without an internet connection."
      },
      {
        "heading": "The local repo vs the remote",
        "text": "The local repository is the complete commit history stored only on your machine. The remote (e.g. GitHub) is a COPY of that history hosted on a server elsewhere.\n\n`git push` copies your local commits TO the remote. `git pull` brings the remote's commits back TO your local repository. Until you've pushed, a commit remains a strictly local save — even if a remote is configured on the project."
      },
      {
        "heading": "Why commit often, even without pushing",
        "text": "Since committing is local and costs nothing, don't hesitate to commit often: it gives you fine-grained restore points to go back to. A common practice: committing several times throughout the afternoon as you work, and only pushing once at the end of the day, once everything is stable and tested."
      }
    ]
  },
  "Git|Local vs distant : ce qui se passe vraiment à chaque étape": {
    "title": "Local vs remote: what actually happens at each step",
    "summary": "Beginner confusion #1: thinking 'commit' sends the code to GitHub. This guide clarifies where each step actually lives.",
    "content": [
      {
        "heading": "The 3 zones on YOUR machine",
        "text": "1. Working Directory: your files as you see and edit them in your editor.\n2. Staging Area (the index): a waiting zone where you place what you want to include in the next commit (via git add).\n3. Local Repository: the complete history of already-recorded commits, stored in your project's .git/ folder."
      },
      {
        "heading": "And the remote, a 4th zone — but elsewhere",
        "text": "The remote (GitHub, GitLab…) is a copy of this repository, but hosted on a server, potentially on the other side of the world. Nothing reaches it until you explicitly run `git push`."
      },
      {
        "heading": "Summary table",
        "text": "git add          : Working Directory → Staging          (stays local)\ngit commit       : Staging → Local Repository              (stays local)\n`git push`         : Local Repository → Remote                (goes onto the internet)\n`git pull` / fetch : Remote → Local Repository (+ Working Dir) (comes from the internet)"
      },
      {
        "heading": "What this actually means",
        "text": "• If your PC crashes before a push, you lose the unpushed commits — they never existed anywhere but on that disk.\n• If the internet is down, you can still commit (no step touches the network) but not push/pull.\n• That's why committing regularly + pushing at the end of a session is a good habit: committing protects you from mistakes, pushing protects you from losing the machine."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Commit a change (message \"fix: fix the title\"), THEN send it to the remote.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "git commit -m \"fix: fix the title\"",
                "git commit -m 'fix: fix the title'"
              ],
              "output": "[master a3f9c2e] fix: fix the title\n 1 file changed, 1 insertion(+)"
            },
            {
              "expect": [
                "git push"
              ],
              "output": "Enumerating objects: 4, done.\nTo github.com:you/project.git\n   9de4781..a3f9c2e  master -> master"
            }
          ]
        },
        "correction": "Notice: after the commit, NOTHING has been sent yet — only the push copies the commit to the remote. If you had shut down the PC right after the commit, this change would have stayed strictly local."
      }
    ]
  },
  "Git|Le workflow du quotidien": {
    "title": "The everyday workflow",
    "summary": "The sequence of commands you'll type almost every time: status → diff → add → commit → push.",
    "content": [
      {
        "heading": "Step 1 — git status",
        "text": "Always the first command to type. It tells you what's changed since your last commit: modified files, new untracked files, etc. Avoids bad surprises."
      },
      {
        "heading": "Step 2 (optional but useful) — git diff",
        "text": "Shows precisely WHICH LINES changed, before staging everything. A good habit to spot a leftover console.log or debug comment before it makes its way into the history."
      },
      {
        "heading": "Step 3 — git add",
        "text": "Puts your changes \"in preparation\" (staging) before recording them. `git add .` adds everything; git add file-name only adds one specific file if you want to be selective."
      },
      {
        "heading": "Step 4 — git commit",
        "text": "git commit -m \"clear message\" officially records what's staged, LOCALLY (see [[Git::Local vs distant : ce qui se passe vraiment à chaque étape]]). The message should explain the WHY or the WHAT, not just \"update\"."
      },
      {
        "heading": "Step 5 — git push",
        "text": "Sends your local commits to the remote (GitHub, for instance), to share or back them up online. Without pushing, your commits stay only on your machine."
      },
      {
        "heading": "Message convention (optional but very common)",
        "text": "Many teams prefix their messages with a type:\n\nfix: fixes a bug\nfeat: adds a feature\nchore: technical task with no user impact (config, dependencies…)\ndocs: documentation only\n\nExample: feat: add sorting by date to the listening list"
      },
      {
        "heading": "Concrete end-to-end example",
        "text": "You've just fixed a display bug:\n\n`git status`   →  you see app/Login.kt modified\n`git diff`     →  you check these are indeed the right lines\n`git add .`\ngit commit -m \"fix: fix the login button alignment\"\n`git push`"
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Reproduce the full workflow: check the status, stage everything, then commit with the message \"feat: add sorting by date\".",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "git status"
              ],
              "output": "On branch master\nChanges to be committed:\n  modified: app/List.kt"
            },
            {
              "expect": [
                "git add ."
              ],
              "output": ""
            },
            {
              "expect": [
                "git commit -m \"feat: add sorting by date\"",
                "git commit -m 'feat: add sorting by date'"
              ],
              "output": "[master 7c1e4aa] feat: add sorting by date\n 1 file changed, 12 insertions(+)"
            }
          ]
        },
        "correction": "status → add → commit, in this order, every time: this is the cycle you'll repeat hundreds of times. status first is never a waste of time, it prevents accidentally adding a file you didn't mean to commit."
      }
    ]
  },
  "Git|Les branches : travailler sans tout casser": {
    "title": "Branches: working without breaking everything",
    "summary": "A branch = a parallel version of your code, to experiment without touching the code that works.",
    "content": [
      {
        "heading": "Why a branch",
        "text": "The \"main\" branch usually represents your project's stable version. If you develop a new feature directly on it and it breaks everything, your stable project breaks too. By creating a branch, you work off to the side: if it breaks, only your branch is affected."
      },
      {
        "heading": "A branch is just a sticky note",
        "text": "Technically, a branch is just a lightweight pointer to a specific commit — it's NOT a full copy of the code. That's why creating or deleting a branch is nearly instant and takes almost no space, even on a very large project."
      },
      {
        "heading": "HEAD, the bookmark",
        "text": "HEAD is a special pointer indicating where you CURRENTLY are — usually, the latest commit of the branch you're on. Switching branches (checkout/switch) moves HEAD elsewhere."
      },
      {
        "heading": "A branch's life cycle",
        "text": "1. git checkout -b my-feature → you create the branch and switch to it\n2. You commit normally on it (status/add/commit)\n3. Once done and tested, you merge it into main (git merge, or a Pull Request on GitHub)\n4. You can then delete it: git branch -d my-feature"
      },
      {
        "heading": "When to create a branch",
        "text": "As soon as you start something that will take more than a few minutes, or that could break something that works: a new feature, a big refactor, a risky test."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Create a new branch named \"add-favorites\" and switch to it, in a single command.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "git checkout -b add-favorites"
              ],
              "output": "Switched to a new branch 'add-favorites'"
            }
          ]
        },
        "correction": "git checkout -b does two things at once: create the branch AND switch to it. Your work on this branch doesn't affect main until you merge it."
      }
    ]
  },
  "Git|Annuler une erreur sans paniquer": {
    "title": "Undoing a mistake without panicking",
    "summary": "reset, restore, revert, stash: which one to use depending on the situation, and especially whether it's already been pushed.",
    "content": [
      {
        "heading": "I modified a file and want to undo it (not committed yet)",
        "text": "git restore file-name resets the file to its state at the last commit. Your uncommitted changes are lost for good — check with `git status` or `git diff` first."
      },
      {
        "heading": "I committed but haven't pushed yet, I want to undo the last commit",
        "text": "`git reset --soft HEAD~1` undoes the commit but keeps your changes ready to be re-committed (staged). This is the safe option.\n\n`git reset --hard HEAD~1` deletes EVERYTHING, changes included. Irreversible, only use it if you're sure."
      },
      {
        "heading": "I've ALREADY pushed this commit — git revert, the safe option",
        "text": "Once pushed, other people (or other machines) may have picked up this commit: rewriting it with reset becomes dangerous and a source of conflicts for everyone.\n\ngit revert instead creates a NEW commit that undoes an old commit's changes, WITHOUT erasing existing history. Simple rule: reset before push, revert after push on shared code."
      },
      {
        "heading": "I just want to set my work aside temporarily",
        "text": "`git stash` puts your current changes away without committing them, and gives you back a clean folder (useful to quickly switch branches without having to commit unfinished work). `git stash pop` brings them back later."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "You just committed by mistake (not pushed yet). Undo this commit while keeping the changes ready to be re-committed.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "git reset --soft HEAD~1"
              ],
              "output": "(the last commit is undone, the changes are back in staging)"
            }
          ]
        },
        "correction": "git reset --soft HEAD~1 is the SAFE option: it only undoes the commit, without touching the files or their content. --hard would have also deleted the changes themselves — reserve it for cases where you're certain you want to lose everything."
      }
    ]
  },
  "Git|.gitignore : ne pas tout versionner": {
    "title": ".gitignore: not versioning everything",
    "summary": "Some files should never enter the Git history — here's which ones and why.",
    "content": [
      {
        "heading": "Why some files should NOT be committed",
        "text": "• Auto-generated files (node_modules/, build/, dist/) — they regenerate from the source code, no point versioning them.\n• Secrets (API keys, passwords, .env files) — committing them makes them visible to anyone with access to the repo, including in the history even if you delete them later.\n• Config files specific to your editor/IDE.\n\nCommitting them by mistake needlessly bloats the history and can flat-out leak secrets."
      },
      {
        "heading": "How it works",
        "text": "A .gitignore file at the project root lists patterns to ignore, one per line:\n\nnode_modules/\nbuild/\n*.apk\n.env\n\nGit then automatically ignores these files — they don't even show up in `git status` anymore."
      },
      {
        "heading": "Common trap",
        "text": "If a file was already committed BEFORE being added to .gitignore, Git keeps tracking it — adding it to .gitignore alone isn't enough. You first need to explicitly stop tracking it with git rm --cached file-name, then commit that removal."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Which of these should NOT be in .gitignore?",
        "options": [
          "node_modules/",
          ".env",
          "build/",
          "App.js (your source code)"
        ],
        "correctIndex": 3,
        "correction": "App.js is your actual source code — it must stay tracked by Git. node_modules/, .env and build/ are respectively generated code and secrets: to ignore systematically."
      }
    ]
  },
  "Git|Les conflits de fusion (merge conflicts)": {
    "title": "Merge conflicts",
    "summary": "The moment that panics beginners the most — in reality, a simple procedure to follow calmly.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Git automatically merges two versions as long as they don't touch the same lines. A conflict happens when a change you're bringing in (your branch, or your local changes) and a change from elsewhere (a pull, another branch) changed the SAME line differently — Git genuinely can't guess which one to keep."
      },
      {
        "heading": "What it looks like in the file",
        "text": "Git inserts markers directly into the affected file:\n\n<<<<<<< HEAD\nyour version\n=======\nthe other version\n>>>>>>> branch-name"
      },
      {
        "heading": "How to resolve it, step by step",
        "text": "1. Open the conflicting file in your editor.\n2. Decide which version to keep — or manually combine both.\n3. Completely remove the marker lines (<<<<<<<, =======, >>>>>>>).\n4. git add file-name to mark the conflict as resolved.\n5. git commit (often with a message already pre-filled by Git) to finalize the merge."
      },
      {
        "heading": "How to get fewer of them",
        "text": "Do frequent `git pull`s or merges rather than letting your branch diverge for weeks. And if several of you are working on the same file, communicate — conflicts are normal in a team, not a sign of failure."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "After choosing the right version in a conflicting file and removing the <<<<<<< ======= >>>>>>> markers, what do you do next?",
        "options": [
          "git add the file, then git commit",
          "git push directly",
          "git reset --hard",
          "Nothing, it's already done"
        ],
        "correctIndex": 0,
        "correction": "git add file-name marks the conflict as resolved in Git's eyes, then git commit finalizes the merge (the message is often already pre-filled automatically)."
      }
    ]
  },
  "Git|Lire l'historique : git log, HEAD, SHA": {
    "title": "Reading history: git log, HEAD, SHA",
    "summary": "Decrypting what git log --oneline --graph --all shows, and understanding HEAD~1.",
    "content": [
      {
        "heading": "The SHA, a commit's unique identity",
        "text": "Every commit has a unique identifier (e.g. a3f9c2e18b4d…), computed from its content — two different commits can never have the same SHA. In practice, people often refer to it using just the first 7 characters, plenty enough to be unique."
      },
      {
        "heading": "git log --oneline --graph --all, decrypted",
        "text": "Each line = one commit (short SHA + message). The ASCII characters (|, /, \\, *) draw a graph showing the branches and where they diverge or merge — invaluable to visualize a project's history at a glance."
      },
      {
        "heading": "HEAD, HEAD~1, HEAD~2…",
        "text": "HEAD refers to the commit you're currently on. HEAD~1 refers to the commit right BEFORE it, HEAD~2 the one before that, etc. This is the notation used in `git reset --soft HEAD~1`: \"go back to the state before the last commit\"."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Show the commit history, one line each.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "git log --oneline"
              ],
              "output": "a3f9c2e fix: fix the title\n7c1e4aa feat: add sorting by date\n9de4781 Initial commit"
            }
          ]
        },
        "correction": "Each line = a short SHA (the commit's unique identifier) + its message. The commit at the very top (a3f9c2e) is the most recent — the one HEAD refers to."
      }
    ]
  },
  "Git|Pull Request : la collaboration sur GitHub": {
    "title": "Pull Request: collaborating on GitHub",
    "summary": "A PR isn't a Git command — it's a GitHub feature built on top of it.",
    "content": [
      {
        "heading": "The principle",
        "text": "A Pull Request (PR) is a request: \"I made changes on my branch, please review them and merge them into main if they're good.\" It's not a Git command — it's a feature offered by GitHub/GitLab on top of Git."
      },
      {
        "heading": "The typical flow",
        "text": "1. You create a branch and commit your work on it.\n2. You push it: `git push` -u origin my-branch\n3. On GitHub, you open a Pull Request from this branch into main.\n4. Someone (or yourself) reviews the diff, comments, possibly asks for changes.\n5. Once approved, it's merged — often with one \"Merge\" click on the GitHub interface."
      },
      {
        "heading": "Why it's useful even when working alone",
        "text": "Opening a PR forces you to review your own diff with fresh eyes before merging into main, and keeps a clear, searchable record of WHY each change was made — precious when you come back to an old project months later."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "What's the very first step of a Pull Request flow?",
        "options": [
          "Open the PR on GitHub",
          "Create a branch and commit on it",
          "Merge the PR",
          "Push the branch to the remote"
        ],
        "correctIndex": 1,
        "correction": "The full order: create a branch + commit → push the branch (git push -u origin ...) → open the PR on GitHub → merge it once reviewed/approved."
      }
    ]
  },
  "Expo / React Native|Dev, Build, Submit, Update : qui fait quoi ?": {
    "title": "Dev, Build, Submit, Update: who does what?",
    "summary": "4 words you see everywhere in the Expo docs, explained simply — and what actually happens for each.",
    "content": [
      {
        "heading": "Dev — npx expo start",
        "text": "Starts a development server on your machine. Your phone (via the Expo Go app or a dev client) connects to this server and hot-reloads the app on every code save. No installable file is created — this is purely for developing and testing fast."
      },
      {
        "heading": "Build — eas build",
        "text": "Produces an actual installable file: a .apk/.aab for Android, a .ipa for iOS. This is what you need to test a \"close to real\" version on a device without going through Expo Go, or to publish it to a store."
      },
      {
        "heading": "Submit — eas submit",
        "text": "Takes the latest build and sends it to the Google Play Store or the App Store. The final publishing step."
      },
      {
        "heading": "Update — eas update",
        "text": "Pushes a JavaScript code change directly to users who already have the app installed, WITHOUT going through the store again (so without waiting for Apple/Google review). Only works for JS/assets — if you add a native library, you need a new build."
      },
      {
        "heading": "What lives where, concretely",
        "text": "Dev: your code runs on YOUR computer; the phone just displays the result over the network — nothing works without your computer turned on.\n\nBuild: the JS code is packaged DIRECTLY into the .apk/.ipa file; the app never needs your computer to work again.\n\nUpdate (OTA): replaces the JS bundle already packaged in an already-installed app, without regenerating a new .apk/.ipa file."
      },
      {
        "heading": "Summary in one sentence",
        "text": "I'm coding → expo start. I want an installable file → eas build. I want to publish it → eas submit. I want to quickly fix a bug without going through the store → eas update."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to fix a JS bug already in production, WITHOUT going through the store. Which command do you use?",
        "options": [
          "eas build",
          "eas submit",
          "eas update",
          "npx expo start"
        ],
        "correctIndex": 2,
        "correction": "eas update pushes a JS/assets change directly to users who already have the app installed, without a new trip through the store. eas build produces a new installable file, eas submit sends it to the store — two much heavier steps for a simple JS fix."
      }
    ]
  },
  "Expo / React Native|Pourquoi ça plante après avoir installé une lib": {
    "title": "Why it breaks after installing a library",
    "summary": "The classic Expo beginner trap: installing a library and understanding nothing about the error that follows.",
    "content": [
      {
        "heading": "The problem",
        "text": "Some libraries contain native code (Kotlin/Swift), not just JavaScript. The dev server (expo start) can't \"add\" this native code on the fly — the app needs to be rebuilt."
      },
      {
        "heading": "Managed workflow vs Bare/prebuild",
        "text": "By default (\"managed workflow\"), Expo handles the entire native side for you — no android/ios folders visible in your project. If you need direct access to native code (a very specific library, custom config), npx expo prebuild generates these android/ios folders — this is the switch to \"bare\" mode."
      },
      {
        "heading": "The troubleshooting checklist",
        "text": "1. Did you use npx expo install (not npm install)? It picks the version compatible with your SDK.\n2. Restart with the cache cleared: `npx expo start -c`\n3. If the library has native code and you're on a dev client / bare workflow: `npx expo prebuild --clean` then a new build.\n4. If in doubt about the overall config: `npx expo-doctor` tells you what's off."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Your app shows a weird error after installing a new library. Restart the dev server, fully clearing the cache.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "npx expo start -c"
              ],
              "output": "Cleared Metro cache.\nStarting the development server…"
            }
          ]
        },
        "correction": "npx expo start -c forces Metro to recompile everything from scratch, ignoring the old cached bundle — the first reflex before digging further."
      }
    ]
  },
  "Expo / React Native|Comprendre app.json et eas.json": {
    "title": "Understanding app.json and eas.json",
    "summary": "Two config files people edit without always understanding what they're really for.",
    "content": [
      {
        "heading": "app.json / app.config.js: your app's identity",
        "text": "Display name, unique identifier (Android package / iOS bundle identifier), icon, version number, declared permissions (camera, location…)… Expo automatically regenerates the native configuration from this file at build time."
      },
      {
        "heading": "eas.json: the build recipes",
        "text": "Defines \"profiles\" (typically development, preview, production), each with its own settings: build type, environment variables, distribution channel.\n\neas build --profile preview concretely tells EAS \"use the recipe named preview\"."
      },
      {
        "heading": "Why several profiles",
        "text": "You often want a \"preview\" build installable directly without going through a store (for you or your testers), and an optimized \"production\" build meant for the store — sometimes with different API URLs between the two (test server vs real server)."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want a different API URL between your \"preview\" build and your \"production\" build. Where do you configure that?",
        "options": [
          "In app.json only",
          "In package.json",
          "It's not possible with Expo",
          "In eas.json, with one profile per environment"
        ],
        "correctIndex": 3,
        "correction": "eas.json lets you define several profiles (preview, production…), each with its own environment variables. app.json remains the app's general identity (name, icon, permissions), shared by every profile."
      }
    ]
  },
  "Expo / React Native|Metro, le serveur qui recharge ton app": {
    "title": "Metro, the server that reloads your app",
    "summary": "Understanding what expo start actually does behind the scenes, and why -c fixes so many weird bugs.",
    "content": [
      {
        "heading": "What Metro actually does",
        "text": "Metro is the JavaScript bundler used by Expo/React Native. It takes all your .js/.ts files, assembles them into a single \"bundle\", and serves it to the app over the network (or USB) during development."
      },
      {
        "heading": "Why clearing the cache (-c) fixes so many problems",
        "text": "Metro caches an already-compiled version of your files to go faster. After a config change (babel.config.js, metro.config.js) or a confusing bug, this cache might hold an outdated version → `npx expo start -c` forces it to recompile everything from scratch."
      },
      {
        "heading": "The QR code, how it works",
        "text": "It encodes the address (IP + port) of the Metro server on your local network. The phone scans it, connects to it, and downloads the JS bundle. That's why you need to be on the SAME wifi network as your computer — otherwise, use `npx expo start --tunnel`."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Your phone isn't on the same wifi as your computer. Start Metro with a tunnel so it can still connect.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "npx expo start --tunnel"
              ],
              "output": "Tunnel connected via ngrok.\nScan the QR code to connect from any network."
            }
          ]
        },
        "correction": "--tunnel routes the connection through an external service (ngrok), rather than the local network — slower, but works even if the phone and the computer aren't on the same wifi."
      }
    ]
  },
  "Expo / React Native|Expo Go vs Dev Client vs Build standalone": {
    "title": "Expo Go vs Dev Client vs standalone build",
    "summary": "Three different ways to run your app as it grows, each with its own limitations.",
    "content": [
      {
        "heading": "Expo Go",
        "text": "The generic app installable from the store, able to launch ANY Expo project by scanning a QR code. Fast to get a first project started, but limited to the libraries already bundled inside it — impossible to add custom native code."
      },
      {
        "heading": "Dev Client",
        "text": "A version of Expo Go customized and compiled SPECIFICALLY for your project, with your own native libraries included. It needs to be rebuilt every time you add a NEW native library — but not on every JS code change, which keeps hot-reloading just like with Expo Go."
      },
      {
        "heading": "Standalone build",
        "text": "The final file (.apk/.aab/.ipa), fully self-contained, with no link whatsoever to a development server. This is what end users install from the store — or what you install yourself via adb install for a final, close-to-real test."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You just installed a library with custom native code. Is Expo Go enough to test it?",
        "options": [
          "No, you need a Dev Client (rebuild required)",
          "Yes, Expo Go handles everything automatically",
          "Only on Android",
          "Only if the library is free"
        ],
        "correctIndex": 0,
        "correction": "Expo Go only contains the native libraries already bundled by default. A library with custom native code requires a Dev Client — to rebuild for every new native library, but not for every JS change afterwards."
      }
    ]
  },
  "Kotlin / Android|Gradle, le chef d'orchestre de ton build": {
    "title": "Gradle, your build's conductor",
    "summary": "Understanding what ./gradlew does before typing random commands.",
    "content": [
      {
        "heading": "What is Gradle",
        "text": "Gradle is the tool that turns your Kotlin/Java code into an installable app. ./gradlew (the \"wrapper\") is a script that automatically downloads and uses the right Gradle version for your project — that's why you type ./gradlew and not just gradle."
      },
      {
        "heading": "Debug vs Release",
        "text": "A \"debug\" build (assembleDebug) is fast to generate, unoptimized, and easy to debug — the one you use daily during development.\n\nA \"release\" build (assembleRelease) is optimized, minified, and digitally signed — the one you send to users/the store."
      },
      {
        "heading": "assemble vs install",
        "text": "assembleDebug just produces the .apk file in the build/ folder. installDebug does the same AND installs it directly on the connected device/emulator — the one you use most often for testing."
      },
      {
        "heading": "Build variants (flavors)",
        "text": "Beyond debug/release, a project can define \"flavors\" (e.g. free/paid, staging/prod), combined with debug/release to give tasks like assembleFreeDebug or assembleProdRelease. Check the module's build.gradle file to see which ones are defined on your project — `./gradlew tasks` also lists them."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Compile a debug APK.",
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
        "correction": "assembleDebug produces the debug .apk file in build/outputs/apk/debug/, without installing it. To build AND install directly on the connected device, you'd have needed installDebug instead."
      }
    ]
  },
  "Kotlin / Android|ADB, le pont entre ton PC et ton téléphone": {
    "title": "ADB, the bridge between your PC and your phone",
    "summary": "The Swiss Army knife for talking to an Android device from the terminal.",
    "content": [
      {
        "heading": "What it's for",
        "text": "ADB (Android Debug Bridge) lets you install apps, view logs, copy files, or open a shell on a connected Android device (via USB or on an emulator), directly from your terminal."
      },
      {
        "heading": "The classic debug flow",
        "text": "1. `adb devices` → checks that your device is properly detected\n2. You reproduce the bug in the app\n3. `adb logcat *:E` → you look at the errors that come up at the moment of the crash\n4. Once fixed, you reinstall with `./gradlew installDebug` and retest"
      },
      {
        "heading": "logcat, filtering smartly",
        "text": "*:E = errors only, across all tags — useful for a first pass.\n\nMyTag:D *:S = shows only debug-level-and-above logs for the \"MyTag\" tag, and hides everything else (*:S = silent). Very useful to isolate ONLY the logs YOU added yourself in the code with Log.d(\"MyTag\", \"message\")."
      },
      {
        "heading": "Why \"device not found\" or \"unauthorized\"",
        "text": "Check that USB debugging is enabled on the phone (Developer Options), and accept the authorization popup that appears on the phone's screen the first time you connect it."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Check that an Android device is properly detected by your computer.",
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
        "correction": "adb devices is always the first reflex before any other adb command — if the device doesn't show up here (or shows up as \"unauthorized\"), nothing else will work."
      }
    ]
  },
  "Kotlin / Android|Émulateur ou vrai téléphone ?": {
    "title": "Emulator or real phone?",
    "summary": "Both have their use, here's when to pick one or the other.",
    "content": [
      {
        "heading": "The emulator",
        "text": "Handy for developing without an Android phone at hand, or easily testing different Android versions/screen sizes. But slower, and some features (camera, sensors, real performance) are less reliable to test."
      },
      {
        "heading": "The real phone",
        "text": "Essential before publishing an app: real performance, the camera, GPS, and notifications behave differently on a real device. Connect it via USB with debugging enabled, check with `adb devices`."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Right before publishing your app, you want to check real performance and camera behavior. You use:",
        "options": [
          "The emulator",
          "A real phone",
          "Both are strictly equivalent",
          "No testing is needed"
        ],
        "correctIndex": 1,
        "correction": "The emulator is great for everyday development, but the camera, GPS and real performance are only reliable on a real device — essential as a final check before publishing."
      }
    ]
  },
  "Kotlin / Android|APK vs AAB, et le keystore de signature": {
    "title": "APK vs AAB, and the signing keystore",
    "summary": "Two file formats, and the signing mechanism that protects your app's identity.",
    "content": [
      {
        "heading": "APK: the classic installable format",
        "text": "A .apk file contains everything needed to run on a specific device — what you install directly via adb install or by transferring it to a phone."
      },
      {
        "heading": "AAB (Android App Bundle): the format the Play Store expects",
        "text": "Contains EVERYTHING (every language, every processor architecture), and Google Play then generates, for each device that downloads the app, an optimized, lightweight APK just for it. Result: the user downloads fewer MB.\n\nSince 2021, the Play Store requires the AAB (bundleRelease) for any new app."
      },
      {
        "heading": "The keystore, your app's ID card",
        "text": "A release build must be signed with a keystore (a .jks/.keystore file containing a private key). This signature proves updates genuinely come from the same developer — Android refuses to install an update signed with a different key.\n\n⚠️ If you lose this file or its password, you will NEVER again be able to update your app on the Play Store under the same identity. Back it up carefully, and NEVER commit it to Git."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You lose the keystore file used for your previous release builds. Can you still publish an update to your existing app?",
        "options": [
          "Yes, no problem at all",
          "Yes, but only via the AAB",
          "No, never again under the same identity",
          "Only by contacting Google"
        ],
        "correctIndex": 2,
        "correction": "Without the same keystore (same private key), Android considers the update to come from a different developer and refuses it. The keystore must be carefully backed up from the very first release build — never in Git."
      }
    ]
  },
  "Kotlin / Android|Le cycle de vie d'une Activity (les bases)": {
    "title": "An Activity's lifecycle (the basics)",
    "summary": "Why your app can lose data on screen rotation if you don't understand this mechanism.",
    "content": [
      {
        "heading": "Why it matters",
        "text": "Android can pause, destroy, or recreate your screen (Activity) at any time — an incoming call, a screen rotation, the system running low on RAM and closing background apps. Understanding this cycle avoids classic bugs (lost data, crash when going back)."
      },
      {
        "heading": "The key methods, in order",
        "text": "onCreate() → the screen is created (in theory only once, unless the system destroys and recreates it).\nonStart() / onResume() → the screen becomes visible then interactive.\nonPause() / onStop() → the user leaves the screen, but may potentially come back.\nonDestroy() → the screen is permanently closed."
      },
      {
        "heading": "The classic trap",
        "text": "A simple screen rotation DESTROYS and RECREATES the Activity by default. If a piece of data was stored in a plain local variable, it's lost at recreation. That's why a ViewModel (which survives rotations) or onSaveInstanceState is used to preserve state across these recreations."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A screen rotation DESTROYS the Activity by default. How do you preserve text a user is currently typing?",
        "options": [
          "Do nothing, Android handles it alone",
          "Prevent any screen rotation",
          "Only use a local variable",
          "Store it in a ViewModel"
        ],
        "correctIndex": 3,
        "correction": "A local variable is reset every time the Activity is recreated (so on every rotation). A ViewModel survives this recreation — the standard tool for this kind of data, with onSaveInstanceState as an alternative for small pieces of data."
      }
    ]
  },
  "Kotlin / Android|Coroutines Kotlin : l'async côté Android": {
    "title": "Kotlin Coroutines: async on the Android side",
    "summary": "Kotlin's equivalent of async/await in JS — essential as soon as networking or a database is involved on Android.",
    "content": [
      {
        "heading": "The problem: never block the main thread",
        "text": "Android runs the interface (display, buttons, animations) on a single thread, the \"main thread\" (UI thread). A long operation (network call, disk/database access) launched directly on it BLOCKS it — result: the app freezes, and past a few seconds, Android straight up shows \"Application Not Responding\" (ANR).\n\nCoroutines let you run this long work ELSEWHERE, without freezing the interface, then easily come back to the main thread to display the result."
      },
      {
        "heading": "suspend fun, the function that can be \"paused\"",
        "text": "The suspend keyword marks a function as able to be suspended (paused) without blocking the thread that called it — a bit like await in JavaScript. A suspend function can only be called from a coroutine or another suspend function, never directly from \"normal\" code."
      },
      {
        "heading": "lifecycleScope / viewModelScope: where to launch a coroutine",
        "text": "lifecycleScope.launch { ... } launches a coroutine automatically tied to the Activity/Fragment's lifecycle — if the screen is destroyed, the coroutine is automatically cancelled, avoiding memory leaks and crashes (\"attempt to update a view that no longer exists\").\n\nviewModelScope does the same but tied to the ViewModel's lifetime — handy to survive a screen rotation while still being cleaned up when the screen is truly closed."
      },
      {
        "heading": "Dispatchers: choosing where it runs",
        "text": "Dispatchers.Main → on the main thread (to touch the UI).\nDispatchers.IO → optimized for blocking operations (network, files, database).\nDispatchers.Default → optimized for CPU-intensive computation.\n\nwithContext(Dispatchers.IO) { ... } lets you temporarily switch a piece of code to the right thread before automatically returning to where you were."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Where should you launch a blocking network call so it doesn't freeze the app's interface?",
        "options": [
          "On Dispatchers.IO, inside a coroutine",
          "Directly in the function, on the main thread",
          "Doesn't matter, Kotlin handles it alone",
          "Only in onCreate()"
        ],
        "correctIndex": 0,
        "correction": "The main thread (UI thread) also handles the display — a blocking network call on it freezes the interface, or even triggers an ANR error. Dispatchers.IO is optimized for this kind of blocking operation, inside a coroutine launched via lifecycleScope or viewModelScope."
      }
    ]
  },
  "Linux Mint|sudo et les permissions, sans y laisser des plumes": {
    "title": "sudo and permissions, without getting burned",
    "summary": "The minimum you need to know before typing sudo in front of a command.",
    "content": [
      {
        "heading": "Normal user vs root",
        "text": "Your normal user account doesn't have permission to modify system files or install software by default — that's a protection. \"root\" is the super-user who can do anything. sudo temporarily gives you root's powers for ONE command."
      },
      {
        "heading": "The rules of caution",
        "text": "• Never type a sudo command found online without understanding what it does.\n• Be especially careful with sudo rm (deletion): there's no trash bin, it's final.\n• If a normal command (without sudo) fails with \"Permission denied\", it's probably intentional — ask yourself if you really need to touch it before adding sudo."
      },
      {
        "heading": "chmod and chown, briefly",
        "text": "chmod changes who has the right to read/write/execute a file. chown changes who owns the file. You'll need these for example to make a script executable (chmod +x) or to reclaim a file owned by root. The full rwx/octal detail is in the \"Les permissions de fichiers en détail\" guide (Terminal basics)."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Update the list of available packages (without installing anything yet).",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "sudo apt update"
              ],
              "output": "[sudo] password for user:\nGet:1 http://archive.ubuntu.com/ubuntu…\nAll packages are up to date."
            }
          ]
        },
        "correction": "sudo apt update needs administrator rights because it touches the shared system configuration — hence the password prompt. It only refreshes the package LIST, nothing gets installed yet."
      }
    ]
  },
  "Linux Mint|apt : installer et gérer des logiciels": {
    "title": "apt: installing and managing software",
    "summary": "Linux Mint's package manager, the command-line equivalent of a store.",
    "content": [
      {
        "heading": "The concept",
        "text": "Rather than downloading .exe files from shady websites like on Windows, Linux Mint uses \"repositories\": servers hosting vetted software. apt is the tool that looks up, installs, updates or removes this software."
      },
      {
        "heading": "The basic cycle",
        "text": "sudo apt update → refreshes the LIST of available packages (doesn't update anything, just the list)\nsudo apt upgrade → actually installs the available updates\nsudo apt install software-name → installs a piece of software\nsudo apt remove software-name → uninstalls it"
      },
      {
        "heading": "Why \"update\" before \"upgrade\"",
        "text": "If you don't update first, apt doesn't know a new version exists — it's like refreshing a store's page before looking for an update on it."
      },
      {
        "heading": "Where packages come from: repositories (sources.list)",
        "text": "apt searches through a list of configured repositories (/etc/apt/sources.list and /etc/apt/sources.list.d/). The add-apt-repository ppa:... command adds a third-party source to this list — which amounts to trusting someone else to run code with your privileges. Only do this for recognized sources."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Check whether a package related to \"htop\" exists in the repositories.",
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
        "correction": "apt search queries the local list of available packages (updated by the last apt update) — no need for sudo since it only looks things up, without modifying anything on the system."
      }
    ]
  },
  "Linux Mint|Processus, ports, RAM : pourquoi ça rame": {
    "title": "Processes, ports, RAM: why it's slow",
    "summary": "How to diagnose a slow computer or an already-used port.",
    "content": [
      {
        "heading": "What's a process",
        "text": "Every launched program (even in the background) is a \"process\", identified by a unique number (PID). `htop` shows all active processes, sorted by real-time CPU/RAM usage — useful to spot what's slowing down your machine."
      },
      {
        "heading": "Killing a stuck process",
        "text": "If an app stops responding: find its PID (with ps aux | grep name, or visually in `htop`), then `kill -9 PID` to force it to stop."
      },
      {
        "heading": "\"Port already in use\" (e.g. Metro, a local server)",
        "text": "This error means another program is already listening on that port. sudo ss -tulpn | grep :8081 (for example) shows which process is occupying it, so you can kill it or change ports."
      },
      {
        "heading": "%CPU going over 100 isn't a bug",
        "text": "On a multi-core machine, a process can use several cores simultaneously at 100% each — top/`htop` add up these percentages. So 350% on a 4-core machine means around 87% of the machine's TOTAL power used by that single process."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Port 8081 seems already occupied by an old Metro server. Find which process is holding it.",
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
        "correction": "PID 48213 (a node process) is occupying port 8081. The next step would be kill -9 48213 to free it up, before relaunching your own server."
      }
    ]
  },
  "Linux Mint|L'arborescence du système de fichiers": {
    "title": "The filesystem hierarchy",
    "summary": "Why Linux doesn't have a 'C:\\', and where to find what.",
    "content": [
      {
        "heading": "Why it's not like Windows",
        "text": "Unlike Windows, Linux has only ONE single file hierarchy, starting from / (the root). Disks, partitions and USB drives are \"mounted\" (attached) to folders of this single hierarchy, rather than each having its own letter (C:, D:…)."
      },
      {
        "heading": "The important folders to know",
        "text": "/home/your-name → your personal files (equivalent of the Windows user folder).\n/etc → system configuration files.\n/usr → installed programs and libraries.\n/var → data that changes often, notably logs in /var/log.\n/tmp → temporary files, erased on reboot."
      },
      {
        "heading": "Where is my software installed",
        "text": "Unlike Windows where a whole piece of software fits in a single folder (Program Files), on Linux a piece of software's files are spread BY TYPE across these standard folders: the executable binary in /usr/bin, its config in /etc, its shared data in /usr/share… apt automatically puts everything in the right place at install time."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A service just crashed. Where do you look for its logs first?",
        "options": [
          "/etc",
          "/var/log",
          "/usr",
          "/tmp"
        ],
        "correctIndex": 1,
        "correction": "/var holds data that changes often, notably logs in /var/log. /etc holds CONFIGURATION (not logs), /usr installed programs, /tmp temporary files erased on reboot."
      }
    ]
  },
  "Linux Mint|Réseau pour les nuls : IP, port, DNS": {
    "title": "Networking for dummies: IP, port, DNS",
    "summary": "Finally understand what localhost:8081 means.",
    "content": [
      {
        "heading": "The IP address, your machine's phone number",
        "text": "Every device on a network has an address (e.g. 192.168.1.42) that lets it be reached. 127.0.0.1 (also called \"localhost\") always refers to YOUR OWN machine, whatever network you're connected to."
      },
      {
        "heading": "The port, the number's extension",
        "text": "A machine can run several services at once (a web server, a database…). The port (a number from 0 to 65535) specifies WHICH of these services you're addressing.\n\nE.g.: localhost:8081 = the service listening on port 8081 of YOUR OWN machine (often Metro for an Expo project)."
      },
      {
        "heading": "DNS, the directory that translates names",
        "text": "You type google.com in your browser, but the network only understands IP addresses. DNS translates google.com into an IP (e.g. 142.250.x.x) before actually connecting to it — exactly like looking up a number in a directory from a name."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "What does the address 127.0.0.1 refer to, whatever network you're connected to?",
        "options": [
          "The wifi router",
          "A default external server",
          "Always your own machine (localhost)",
          "Always an invalid address"
        ],
        "correctIndex": 2,
        "correction": "127.0.0.1 (alias \"localhost\") always points to YOUR OWN machine — that's why a dev server started locally is reachable at localhost:PORT, regardless of the network."
      }
    ]
  },
  "Linux Mint|SSH et les clés : comment ça marche vraiment": {
    "title": "SSH and keys: how it really works",
    "summary": "Why use a key rather than a password, and what the generated files actually represent.",
    "content": [
      {
        "heading": "The password problem",
        "text": "Connecting to a remote server with a plain password is risky: interceptable, guessable, brute-forceable. SSH key authentication solves this with a mathematically-linked PAIR of keys: a PRIVATE key (never shared, stays only on your computer) and a PUBLIC key (can be shared freely, e.g. pasted into GitHub's settings)."
      },
      {
        "heading": "The principle, simplified",
        "text": "The server (or GitHub) knows your public key. When you connect, it challenges you to mathematically prove you own the matching private key — WITHOUT that private key ever leaving your machine. If the proof is valid, you're authenticated."
      },
      {
        "heading": "ssh-keygen, concretely",
        "text": "Generates two files, by default in ~/.ssh/: id_ed25519 (the PRIVATE key) and id_ed25519.pub (the PUBLIC key).\n\nThe .pub file is the one you paste into GitHub's settings or a remote server's. The file WITHOUT .pub must NEVER be shared, nor committed to a Git repository."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Generate a new modern SSH key pair to connect to GitHub.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "ssh-keygen -t ed25519 -C \"you@email.com\"",
                "ssh-keygen -t ed25519 -C 'you@email.com'"
              ],
              "output": "Generating public/private ed25519 key pair.\nYour identification has been saved in /home/user/.ssh/id_ed25519\nYour public key has been saved in /home/user/.ssh/id_ed25519.pub"
            }
          ]
        },
        "correction": "Two files are created: id_ed25519 (PRIVATE key, never share it) and id_ed25519.pub (PUBLIC key, the one you paste into GitHub's settings)."
      }
    ]
  },
  "Linux Mint|systemd et les services": {
    "title": "systemd and services",
    "summary": "How Linux Mint starts, monitors and restarts the programs running in the background.",
    "content": [
      {
        "heading": "What's a service",
        "text": "A program that runs continuously in the background, often started automatically with the machine (e.g. wifi, bluetooth, a local server). systemd is the system that manages starting, stopping and monitoring these services on Linux Mint."
      },
      {
        "heading": "The basic commands",
        "text": "systemctl status service-name → its current state (active, stopped, failed…) and its latest logs.\nsystemctl start / stop / restart service-name → act on it NOW, for the current session.\nsystemctl enable / disable service-name → decide whether it starts automatically on the machine's next reboot (enable does NOT launch it immediately, only on the next boot)."
      },
      {
        "heading": "Where to look for why a service won't start",
        "text": "journalctl -u service-name gives the logs specific to that particular service — generally the first reflex to understand a failure, rather than digging through the general system logs."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Check the Docker service's current status.",
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
        "correction": "systemctl status is always the first reflex to diagnose a service: it shows whether it's running, since when, and its latest logs, before acting on it with start/stop/restart."
      }
    ]
  },
  "Linux Mint|cron : exécuter des tâches automatiquement": {
    "title": "cron: running tasks automatically",
    "summary": "Scheduling a command to run on its own, at a fixed time, without intervention.",
    "content": [
      {
        "heading": "The principle",
        "text": "cron runs commands at pre-scheduled times, even when you're not at the computer (as long as it stays on) — useful for automatic backups, regular file cleanup, etc."
      },
      {
        "heading": "The syntax (the 5 stars)",
        "text": "minute hour day-of-month month day-of-week command\n\nExample: 0 3 * * * /home/user/backup.sh\n→ runs backup.sh every day at 3:00 AM (each * means \"any possible value\" for that position)."
      },
      {
        "heading": "Test before scheduling",
        "text": "ALWAYS run the command manually in the terminal before scheduling it in cron, to check it works correctly. If it fails once scheduled, cron won't visibly warn you — the failure can easily go unnoticed for weeks."
      }
    ],
    "exercises": [
      {
        "type": "fillin",
        "instruction": "Write the full cron line that runs /home/user/backup.sh every day at 3:00 AM.",
        "accept": [
          "0 3 * * * /home/user/backup.sh"
        ],
        "correction": "0 3 * * * /home/user/backup.sh\n\nminute=0, hour=3, day-of-month=* (every), month=* (every), day-of-week=* (every) → every day at 3:00 AM sharp."
      }
    ]
  },
  "Docker|Docker, à quoi ça sert": {
    "title": "Docker, what it's for",
    "summary": "The 'it works on my machine' problem, and why a container is much lighter than a virtual machine.",
    "content": [
      {
        "heading": "The problem it solves: \"it works on my machine\"",
        "text": "An application often needs a specific environment (a Node version, a database, system variables…). Without Docker, reproducing EXACTLY the same environment on another machine (a colleague's, a production server) is a classic, never-ending source of configuration bugs."
      },
      {
        "heading": "The container: an isolated, reproducible box",
        "text": "A container packages an application AND its entire environment (dependencies, configuration) into a unit that runs IDENTICALLY on any machine that has Docker."
      },
      {
        "heading": "Container ≠ virtual machine",
        "text": "Unlike a virtual machine, which simulates an entire computer (with its own kernel, very heavy and slow to start), a container SHARES the host machine's Linux kernel. Result: much lighter, and a startup time measured in seconds rather than minutes."
      }
    ]
  },
  "Docker|Image vs conteneur, la différence": {
    "title": "Image vs container, the difference",
    "summary": "The most common confusion among Docker beginners, clarified with a simple analogy.",
    "content": [
      {
        "heading": "The image: the recipe / the blueprint",
        "text": "A frozen file describing everything the application needs (base system, dependencies, code, startup command). It's defined in a Dockerfile, and it's IMMUTABLE: you never modify it directly, you build a new one (docker build) if something changes."
      },
      {
        "heading": "The container: the running instance",
        "text": "When you run an image (docker run), Docker creates a container — a LIVE instance of that image. You can run SEVERAL containers from the SAME image, exactly like you can create several objects from a single class in programming."
      },
      {
        "heading": "What's lost when a container stops",
        "text": "By default, everything written INSIDE a container (created files, database data…) disappears for good when that container is removed (docker rm). That's why volumes are used for data you want to keep permanently."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "List the containers currently running.",
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
        "correction": "docker ps shows CONTAINERS (live instances), not images. A single image (e.g. postgres) can give birth to several different containers launched at different times."
      }
    ]
  },
  "Docker|Docker Compose, orchestrer plusieurs conteneurs": {
    "title": "Docker Compose, orchestrating several containers",
    "summary": "Why a real app rarely has just ONE container, and how Compose makes them coexist.",
    "content": [
      {
        "heading": "Why Compose",
        "text": "A real application often needs several containers that talk to each other (e.g. a backend + a database + a Redis cache). Launching each docker run by hand, with all the right settings, quickly becomes unmanageable beyond a single container."
      },
      {
        "heading": "docker-compose.yml: describing the whole stack in one file",
        "text": "Lists each service, its image, its ports, its environment variables, its volumes — and above all, Compose automatically creates a private network so the containers can talk to each other BY THEIR NAME (e.g. the backend can call http://db:5432 directly without knowing an IP address)."
      },
      {
        "heading": "up -d vs down",
        "text": "docker compose up -d starts the entire stack described in the file, in the background.\ndocker compose down stops it AND removes the containers — but keeps named volumes (so the data), unless you explicitly add the -v option."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Start the whole stack described in docker-compose.yml, in the background.",
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
        "correction": "up -d starts ALL the services described in the file in a single command, in the background (-d = detached), with a private network automatically created so they can talk to each other by name."
      }
    ]
  },
  "FAQ : erreurs fréquentes|\"Permission denied\"": {
    "title": "\"Permission denied\"",
    "summary": "The most common error message on Linux — almost always a rights issue, not a bug.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Either you're trying to run a file that doesn't have the x right (often a ./name.sh script), or you're trying to modify/read a file owned by another user (often root)."
      },
      {
        "heading": "How to fix it",
        "text": "For a script: chmod +x script-name.sh, then rerun.\nFor a system file/folder: add sudo in front of the command ONLY if you understand why it's necessary.\n\nSee also: [[Linux Mint::sudo et les permissions, sans y laisser des plumes]] and [[Bases du terminal::Les permissions de fichiers en détail]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Make the deploy.sh script executable so you can run it.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "chmod +x deploy.sh"
              ],
              "output": "(the script is now executable)"
            }
          ]
        },
        "correction": "chmod +x only adds the execute right, without touching the file's other permissions — the standard fix for ./script.sh: Permission denied."
      }
    ]
  },
  "FAQ : erreurs fréquentes|\"Port already in use\" / \"Address already in use\"": {
    "title": "\"Port already in use\" / \"Address already in use\"",
    "summary": "Another program is already occupying the port your server (Metro, Docker…) is trying to use.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Two programs can't listen on the same port at the same time on the same machine. Often: an old `npx expo start` or docker run wasn't actually stopped (zombie process, terminal closed without a proper Ctrl+C)."
      },
      {
        "heading": "How to fix it",
        "text": "1. sudo ss -tulpn | grep :8081 (replace 8081 with your port) → finds the PID occupying the port.\n2. `kill -9 PID` to free it up.\n3. Rerun your command.\n\nSee also: [[Linux Mint::Réseau pour les nuls : IP, port, DNS]] and [[Linux Mint::Processus, ports, RAM : pourquoi ça rame]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Port 8081 is occupied by an old process (PID 48213). Free it up.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "kill -9 48213"
              ],
              "output": "(process 48213 is stopped, port 8081 is free)"
            }
          ]
        },
        "correction": "kill -9 PID forces the immediate stop of the process identified earlier (via sudo ss -tulpn | grep :8081), freeing the port for your own server."
      }
    ]
  },
  "FAQ : erreurs fréquentes|\"command not found\"": {
    "title": "\"command not found\"",
    "summary": "The shell can't find any program with that name.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Three possible causes: a typo, software that simply isn't installed, or software that's installed but whose folder isn't in your PATH."
      },
      {
        "heading": "How to fix it",
        "text": "1. Check the command's exact spelling.\n2. Ask yourself whether the software is actually installed (often via apt install software-name).\n3. which command-name confirms whether the shell finds it or not.\n\nSee also: [[Bases du terminal::Variables d'environnement et PATH]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Check whether node is actually installed and findable by the shell.",
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
        "correction": "which immediately confirms whether the program exists and is in the PATH. No result would confirm you need to install it (often via apt or a Node version manager)."
      }
    ]
  },
  "FAQ : erreurs fréquentes|adb : \"device not found\" / \"unauthorized\"": {
    "title": "adb: \"device not found\" / \"unauthorized\"",
    "summary": "Your computer doesn't see your Android phone/emulator, or sees it without having access.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "\"device not found\": USB debugging isn't enabled on the phone, or the cable/USB port isn't transmitting data (some cables are charge-only).\n\n\"unauthorized\": the phone detected the connection but is waiting for you to accept the authorization popup shown on ITS screen."
      },
      {
        "heading": "How to fix it",
        "text": "1. Enable USB debugging (Settings → Developer Options).\n2. Unplug/replug the cable.\n3. Look at the PHONE'S SCREEN for a popup to accept.\n4. `adb devices` to check the status switches to \"device\".\n5. As a last resort: `adb kill-server && adb start-server`."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "adb no longer detects your phone properly. Restart the adb server.",
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
        "correction": "This restart fixes the vast majority of detection issues (\"device offline\", device no longer showing up) without needing to restart the phone or the computer."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Expo : comportement bizarre après un changement de config": {
    "title": "Expo: weird behavior after a config change",
    "summary": "The app doesn't reflect your latest changes, or an incomprehensible error appears after touching babel.config.js/metro.config.js.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Metro caches an already-compiled version of your code to go faster. After a configuration change, this cache might hold an outdated version that no longer matches your current config."
      },
      {
        "heading": "How to fix it",
        "text": "`npx expo start -c` restarts the server while fully clearing the cache. If that's not enough: `npx expo-doctor` to check the project's overall consistency.\n\nSee also: [[Expo / React Native::Metro, le serveur qui recharge ton app]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "You just modified metro.config.js and the app is behaving weirdly. Restart the server while clearing the cache.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "npx expo start -c"
              ],
              "output": "Cleared Metro cache.\nStarting the development server…"
            }
          ]
        },
        "correction": "Metro's cache might hold a version compiled BEFORE your config change — -c forces a full recompile from scratch taking the new configuration into account."
      }
    ]
  },
  "FAQ : erreurs fréquentes|git push : \"rejected\" / \"non-fast-forward\"": {
    "title": "git push: \"rejected\" / \"non-fast-forward\"",
    "summary": "Git refuses your push because the remote has commits you don't have locally yet.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Someone (or you, from another machine) pushed commits to this branch after your last pull. Git refuses, for safety, to overwrite commits you don't know about yet."
      },
      {
        "heading": "How to fix it",
        "text": "`git pull` (or git pull --rebase for a cleaner history) first brings in the missing commits, possibly with a conflict to resolve (see [[Git::Les conflits de fusion (merge conflicts)]]). Once up to date, `git push` goes through normally.\n\n⚠️ NEVER use git push --force on a shared branch unless you're sure what it's overwriting — it can erase someone else's work."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Your push is rejected because the remote has commits you don't have. Fetch them cleanly.",
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
        "correction": "git pull --rebase brings in the missing commits and replays yours on top, giving a linear history (rather than a merge commit). Once up to date, git push goes through normally."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Des symboles <<<<<<< ======= >>>>>>> apparaissent dans un fichier": {
    "title": "Symbols like <<<<<<< ======= >>>>>>> appear in a file",
    "summary": "This isn't file corruption — it's a Git merge conflict in the middle of being resolved.",
    "content": [
      {
        "heading": "What's happening",
        "text": "Git failed to automatically merge two versions of the same file, and inserted markers at the exact spot of the disagreement so you can manually choose what to keep."
      },
      {
        "heading": "How to fix it",
        "text": "See the full [[Git::Les conflits de fusion (merge conflicts)]] guide — summary: choose/combine the right content, remove the markers, git add the file, then git commit."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "These symbols appear in a file after a git pull. What is this about?",
        "options": [
          "A Git merge conflict to resolve manually",
          "File corruption",
          "A virus",
          "An unknown file format"
        ],
        "correctIndex": 0,
        "correction": "Git failed to automatically merge two versions of the same file and inserts these markers at the exact spot of the disagreement, so you can choose what to keep before removing the markers and committing."
      }
    ]
  },
  "FAQ : erreurs fréquentes|npm : conflit de versions / peer dependency": {
    "title": "npm: version conflict / peer dependency",
    "summary": "npm install refuses to install, or shows a warning about incompatible dependencies.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "A library you're installing expects a specific version of another library (often React or Expo) already present in your project, but that's not the one installed."
      },
      {
        "heading": "How to fix it",
        "text": "In an Expo project, `npx expo install --fix` automatically aligns versions with what the SDK expects — often enough. Otherwise, manually check the error message for WHICH version is expected vs installed, and adjust it in package.json.\n\nSee also: [[Bases du terminal::npm & npx, et package.json en détail]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "An Expo project has dependency versions incompatible with the SDK. Fix it automatically.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "npx expo install --fix"
              ],
              "output": "Some dependencies don't match the installed SDK:\n  react-native@0.72.0 - expected: 0.73.6\nFixing…"
            }
          ]
        },
        "correction": "npx expo install --fix automatically aligns installed versions with what the project's Expo SDK expects — often enough without having to edit package.json by hand."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Docker : \"Cannot connect to the Docker daemon\"": {
    "title": "Docker: \"Cannot connect to the Docker daemon\"",
    "summary": "Docker refuses all your commands with this message.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "The Docker service (the \"daemon\", which runs in the background) simply isn't started on your machine."
      },
      {
        "heading": "How to fix it",
        "text": "sudo systemctl status docker to check its state, then sudo systemctl start docker to launch it. For it to start automatically on every reboot: sudo systemctl enable docker.\n\nSee also: [[Linux Mint::systemd et les services]]."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "The Docker service isn't started. Start it.",
        "terminal": {
          "prompt": "user@mint:~/cmd-hub$",
          "steps": [
            {
              "expect": [
                "sudo systemctl start docker"
              ],
              "output": "(the docker service is started)"
            }
          ]
        },
        "correction": "The Docker \"daemon\" is the background service without which NO docker command can work — sudo systemctl start docker launches it."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Gradle : \"SDK location not found\"": {
    "title": "Gradle: \"SDK location not found\"",
    "summary": "The Android build fails immediately, before even compiling anything.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "Gradle can't find where the Android SDK is installed on your machine — often after reinstalling Android Studio, moving a folder, or on a new machine where the variable was never configured."
      },
      {
        "heading": "How to fix it",
        "text": "Create (or complete) a local.properties file at the root of the project's android/ folder, with one line:\n\nsdk.dir=/home/user/Android/Sdk\n\n(adjust the path to your SDK's actual location, visible in Android Studio → Settings → Android SDK)."
      }
    ],
    "exercises": [
      {
        "type": "fillin",
        "instruction": "Your Android SDK is installed in /home/user/Android/Sdk. Which line do you need to add to android/local.properties to fix the error?",
        "accept": [
          "sdk.dir=/home/user/Android/Sdk"
        ],
        "correction": "sdk.dir=/home/user/Android/Sdk\n\nThis file isn't versioned in Git (the path is specific to each machine) — you need to recreate it yourself on a new machine or after a reinstall."
      }
    ]
  },
  "Claude Code|Claude Code, à quoi ça sert vraiment ?": {
    "title": "What is Claude Code actually for?",
    "summary": "The difference from the web chat: Claude Code reads your code, runs commands, and acts directly inside your project.",
    "content": [
      {
        "heading": "Classic chat vs Claude Code",
        "text": "On claude.ai, you copy-paste code into a conversation, Claude replies, and you copy its answer back yourself. Claude Code flips this: it runs INSIDE your terminal, at the root of your project, and can directly read your files, write new ones, run commands (git, npm, tests…) and see the result — without you having to copy-paste anything."
      },
      {
        "heading": "What \"agentic\" means",
        "text": "Claude Code doesn't just answer a question: it can decide on its own to use tools (read a file, search the code, run a command) to accomplish a task, observe the result, then decide what to do next — several back-and-forth steps chained automatically before it replies to you. This is what's called an agent."
      },
      {
        "heading": "It does nothing without your approval (by default)",
        "text": "By default, Claude Code asks for confirmation before every action that changes something (writing a file, running a command). You stay in control of what actually happens on your machine — see [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] for the nuances."
      }
    ]
  },
  "Claude Code|Sessions : continuer, reprendre, repartir de zéro": {
    "title": "Sessions: continuing, resuming, starting fresh",
    "summary": "claude -c, claude -r, /clear: three different ways to manage a session's history, for three different needs.",
    "content": [
      {
        "heading": "claude -c: pick up where you left off",
        "text": "Automatically reloads this folder's most recent conversation. The most common use case: you close your terminal at the end of the day, come back the next day, `claude -c` puts you right back into the context where you stopped."
      },
      {
        "heading": "claude -r: choosing a specific session",
        "text": "If you worked on several topics in the same folder (a feature on Monday, a bugfix on Tuesday), `claude -c` only resumes the LATEST one. `claude -r` shows a picker of all your past sessions so you can pick exactly which one to resume."
      },
      {
        "heading": "/clear: wiping without leaving",
        "text": "Unlike -c and -r, which are typed BEFORE launching Claude Code, `/clear` is used INSIDE an already-open session. Useful when you completely switch topics mid-session and the old context no longer helps (or even slows down/muddies the responses)."
      },
      {
        "heading": "When NOT to resume a session",
        "text": "If the topic is completely different (you were switching from frontend work to debugging a server), starting fresh without -c/-r (just claude on its own) avoids mixing two unrelated contexts — often more effective than a mid-session `/clear`."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "You closed your terminal yesterday in the middle of a task. Resume the conversation where you left it.",
        "terminal": {
          "prompt": "user@mint:~/my-project$",
          "steps": [
            {
              "expect": [
                "claude -c"
              ],
              "output": "(this folder's most recent session is reloaded, with all its context)"
            }
          ]
        },
        "correction": "claude -c automatically resumes this folder's LAST conversation, without asking you anything — the fastest shortcut to continue ongoing work."
      }
    ]
  },
  "Claude Code|CLAUDE.md : donner du contexte permanent à Claude": {
    "title": "CLAUDE.md: giving Claude permanent context",
    "summary": "A file Claude Code reads automatically on every startup, so you don't have to re-explain your project every session.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Without CLAUDE.md, you'd re-explain in every new session: \"this project uses this stack, tests run with this command, never touch this generated folder\"… CLAUDE.md eliminates this repetition: Claude reads it automatically at startup, before even your first message."
      },
      {
        "heading": "Where it lives, and what goes in it",
        "text": "At the project root (or in .claude/). It typically holds: useful commands (build, test, lint), the project's code conventions, known pitfalls (\"this folder is generated, never edit it by hand\"), and anything that isn't obvious just from reading the code itself."
      },
      {
        "heading": "/init to get started",
        "text": "Rather than writing this file by hand from scratch, `/init` asks Claude to analyze the project (structure, dependencies, scripts) and generate a first CLAUDE.md for you to complete/adjust afterwards."
      },
      {
        "heading": "Don't put in it what the code already says",
        "text": "CLAUDE.md should contain what ISN'T obvious from reading the code (context, decisions, pitfalls) — not a rehash of the file structure or Git history, which Claude can already look up itself."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "You're starting on a new project with no CLAUDE.md. Generate a first one from an analysis of the code.",
        "terminal": {
          "prompt": "> ",
          "steps": [
            {
              "expect": [
                "/init"
              ],
              "output": "Analyzing the project…\nCLAUDE.md generated at the project root."
            }
          ]
        },
        "correction": "/init has Claude analyze the project (structure, dependencies, available scripts) and generate a first CLAUDE.md — a good starting point to adjust afterwards with the context only you know (pitfalls, past decisions, house conventions)."
      }
    ]
  },
  "Claude Code|Les modes de permission : plan, auto-accept, manuel": {
    "title": "Permission modes: plan, auto-accept, manual",
    "summary": "Understanding how much control you keep over what Claude Code actually does on your machine.",
    "content": [
      {
        "heading": "The default mode: confirm every action",
        "text": "By default, Claude Code asks for confirmation before every action that changes something (writing a file, running a potentially risky command). You see exactly what's about to happen before it happens."
      },
      {
        "heading": "Plan mode: think before acting",
        "text": "`claude --permission-mode plan` (or switching to plan mode mid-session) forces Claude to first PROPOSE a detailed plan, without touching anything, for you to approve or adjust before a single action gets executed. Ideal for a complex task where you want to validate the approach before execution."
      },
      {
        "heading": "--dangerously-skip-permissions: the no-net mode",
        "text": "Removes ALL confirmations — Claude acts without ever asking. Useful ONLY in a disposable/isolated environment (a Docker container, a CI VM) where a mistake has no real consequence. ⚠️ Never on a machine with important data or sensitive access (credentials, API keys, production)."
      },
      {
        "heading": "/permissions to fine-tune",
        "text": "Rather than accepting everything or confirming everything, `/permissions` lets you specify exactly which tools/actions Claude can run automatically (e.g. always allow reading files, but always ask before a `git push`)."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want Claude to propose a detailed plan BEFORE touching anything, for a complex task. Which option do you use?",
        "options": [
          "claude --dangerously-skip-permissions",
          "claude --permission-mode plan",
          "/clear",
          "claude -c"
        ],
        "correctIndex": 1,
        "correction": "Plan mode forces Claude to think through and present a full approach before any execution — nothing is changed until you approve the plan. --dangerously-skip-permissions does the opposite: no confirmation, ever."
      }
    ]
  },
  "Claude Code|Gérer le contexte : pourquoi et quand utiliser /compact": {
    "title": "Managing context: why and when to use /compact",
    "summary": "A conversation that runs too long eventually saturates the context window — /compact summarizes it without losing everything.",
    "content": [
      {
        "heading": "The context window, in short",
        "text": "Claude only \"sees\" a limited amount of text at a time (the whole conversation, including files read). The longer a session runs, the more this context fills up — eventually becoming a limiting factor: less room to read new files, potentially less precise answers."
      },
      {
        "heading": "/compact: summarizing without starting from scratch",
        "text": "Condenses the current conversation into a shorter summary, keeping the essentials (decisions made, progress so far), freeing up room — WITHOUT completely losing the thread the way `/clear` would."
      },
      {
        "heading": "Steering the summary",
        "text": "`/compact` accepts an instruction to specify what absolutely must be kept: /compact keep the implementation plan and already-modified files in detail — useful to avoid losing a specific piece of information during compression."
      },
      {
        "heading": "/compact vs /clear",
        "text": "`/compact` keeps a summarized trace of everything before it. `/clear` wipes completely — reserve it for a total change of topic, where the old context no longer brings anything (see [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]])."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your session has been running for hours on the SAME topic, and you feel Claude is starting to run low on available context. You want to keep the thread without losing everything. What do you do?",
        "options": [
          "/clear",
          "/compact",
          "claude -r",
          "Nothing, it's not a problem"
        ],
        "correctIndex": 1,
        "correction": "/compact summarizes the conversation to free up room while keeping the essentials — unlike /clear, which wipes the history completely and should be reserved for a total change of topic."
      }
    ]
  },
  "Claude Code|Sous-agents : déléguer des tâches spécialisées": {
    "title": "Subagents: delegating specialized tasks",
    "summary": "Handing off a subtask to a dedicated agent with its own isolated context, rather than doing everything in the main conversation.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Some tasks (exploring a large codebase looking for a specific pattern, doing an exhaustive code review) consume a huge amount of context if done directly in the main conversation — at the expense of the rest of the ongoing task."
      },
      {
        "heading": "A subagent, concretely",
        "text": "A subagent is a separate instance of Claude, with its OWN isolated context and often a specialized prompt/role (e.g. an agent dedicated to security review, another to code exploration). The main conversation delegates a specific task to it, and only gets back the final result — not all the intermediate reasoning it took to get there."
      },
      {
        "heading": "/agents to manage them",
        "text": "Lists, creates or edits the subagents available for the project. Each agent can have its own allowed tools and its own instructions, tailored to its specialty."
      },
      {
        "heading": "When it's worth it",
        "text": "For a simple one-off task, delegating to a subagent adds complexity for nothing. It becomes useful for large-scale research/analysis where only the final result matters, or for repeated tasks that benefit from a dedicated, reusable role/prompt."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Why delegate a massive code exploration to a subagent rather than doing it in the main conversation?",
        "options": [
          "It's faster in every case",
          "It isolates that search's heavy context, without cluttering the main conversation",
          "Subagents are free unlike the main conversation",
          "It's never useful, might as well do everything in the main conversation"
        ],
        "correctIndex": 1,
        "correction": "A subagent has its own isolated context: all the intermediate work (files read, attempts, reasoning) stays with it, and only the final result flows back to the main conversation — which keeps room for the rest of the task."
      }
    ]
  },
  "Claude Code|MCP : connecter Claude à d'autres outils": {
    "title": "MCP: connecting Claude to other tools",
    "summary": "Model Context Protocol: the standard that lets Claude Code connect to external services (databases, APIs, other tools).",
    "content": [
      {
        "heading": "The problem MCP solves",
        "text": "By default, Claude Code knows how to read/write files and run shell commands. But to interact directly with an external service (a database, a third-party tool's API, an internal company service), you'd normally need a connector built specifically for each one."
      },
      {
        "heading": "MCP, a standard rather than custom work",
        "text": "MCP (Model Context Protocol) is an open protocol: any tool can expose an \"MCP server\" that Claude Code (or other compatible AI assistants) knows how to use directly, with no specific integration to write each time."
      },
      {
        "heading": "An MCP server, concretely",
        "text": "An MCP server exposes a set of possible actions (e.g. \"search a file in Google Drive\", \"create a GitHub issue\") that Claude can call like any other tool, whenever it's relevant to the task at hand."
      },
      {
        "heading": "Adding and managing servers",
        "text": "claude mcp add connects a new MCP server to the project or globally. `/mcp` (mid-session) lets you see the currently connected servers and their status."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Check which MCP servers are currently configured.",
        "terminal": {
          "prompt": "user@mint:~/my-project$",
          "steps": [
            {
              "expect": [
                "claude mcp list"
              ],
              "output": "Configured MCP servers:\n  github    connected\n  filesystem connected"
            }
          ]
        },
        "correction": "claude mcp list shows the currently connected MCP servers from the terminal (outside a session). Once inside a session, /mcp gives the same information without having to leave it."
      }
    ]
  },
  "Claude Code|Bien démarrer un nouveau projet": {
    "title": "Starting a new project on the right foot",
    "summary": "The first reflexes to have when arriving on a project, new or existing, so Claude Code starts off well.",
    "content": [
      {
        "heading": "Launch from the project root",
        "text": "Always launch claude from the project root (where .git, package.json, etc. live), never from a subfolder — Claude explores the project starting from its launch folder, so a bad starting point limits what it sees without that being obvious."
      },
      {
        "heading": "On an existing project: generate a CLAUDE.md before coding",
        "text": "Before asking for the first real task, `/init` lets Claude analyze the structure, dependencies, and available scripts to generate a first CLAUDE.md — this saves you from re-explaining the project by hand, and future sessions start with this context already in place. See [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        "heading": "Start small, check, then widen the scope",
        "text": "For the first real task, prefer a precise, checkable request (fix a targeted bug, add a test) over a broad, vague one (\"improve the project\") — time enough to see how Claude works on THIS specific project, before handing it something more ambitious."
      },
      {
        "heading": "Plan mode for a first substantial task",
        "text": "If the first task touches many files or a sensitive part of the project, starting in plan mode (`claude --permission-mode plan`) lets you validate the approach before anything gets modified. See [[Claude Code::Les modes de permission : plan, auto-accept, manuel]]."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You arrive on an existing project you don't know yet. What's the first thing to do before asking for a real task?",
        "options": [
          "Run /init to generate a CLAUDE.md from an analysis of the project",
          "Ask directly for a big rewrite to save time",
          "Copy-paste all the code into the message",
          "Turn off all confirmations with --dangerously-skip-permissions"
        ],
        "correctIndex": 0,
        "correction": "/init gives Claude a structured view of the project (dependencies, scripts, conventions) before even the first task — it saves you from re-explaining everything by hand and makes future sessions more reliable."
      }
    ]
  },
  "Claude Code|Choisir le bon agent selon la tâche": {
    "title": "Choosing the right agent for the task",
    "summary": "A general-purpose agent doesn't fit everything: read-only exploration, planning, a recurring specialized task — each has its use.",
    "content": [
      {
        "heading": "General-purpose agent: the default choice",
        "text": "For a task that mixes several kinds of actions (search, modify, test), a versatile general-purpose agent fits most cases — it's the one Claude Code uses by default when you delegate a task without specifying anything else."
      },
      {
        "heading": "Exploration agent: when you just want an answer, not modified files",
        "text": "For a broad search in code you don't know yet (\"where is authentication handled?\"), an agent dedicated to READ-ONLY exploration avoids any risk of accidental modification, and only reports back the useful conclusion — not the detail of every file it went through."
      },
      {
        "heading": "Planning agent: before an architectural task",
        "text": "For a task that requires weighing several approaches before writing any code (a rewrite, a new module), an agent dedicated to planning produces a step-by-step plan to validate — without touching the code until the plan is approved."
      },
      {
        "heading": "Custom agents: for a recurring role",
        "text": "If the same specialty comes up regularly in your project (security review, style review, generating a status line), creating a dedicated agent via `/agents` avoids re-explaining its role every time — see [[Claude Code::Sous-agents : déléguer des tâches spécialisées]] for the general delegation principle."
      }
    ]
  },
  "Claude Code|Skills : des instructions prêtes à l'emploi": {
    "title": "Skills: ready-made instructions",
    "summary": "A skill packages a way of doing a recurring task — Claude uses it on its own when relevant, without you having to re-explain everything.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "For a recurring task with precise rules (a code review checklist, a deployment procedure, a report format), re-explaining the procedure every time is repetitive and error-prone. A skill locks in that procedure once and for all."
      },
      {
        "heading": "A skill, concretely",
        "text": "A skill is a set of instructions written in advance (possibly with associated scripts or examples), stored in a dedicated folder, with a short description of when to use it. Claude Code checks this description to decide on its own whether a skill is relevant to the current request."
      },
      {
        "heading": "Automatic or explicit invocation",
        "text": "Most of the time, Claude picks the right skill itself by comparing your request to each one's description — you don't need to type anything special. You can still force a specific skill by typing its name as a command (/skill-name), useful when several skills look similar or to be explicit."
      },
      {
        "heading": "Personal, project-level, or provided by a plugin",
        "text": "A skill can be personal (usable across all your projects), specific to a single project (stored in its .claude/ folder), or provided by an installed plugin — the difference doesn't change how Claude uses it, only who has access to it."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Most of the time, how does Claude Code decide which skill to use for a given request?",
        "options": [
          "It compares the request to each available skill's description, and picks the best fit on its own",
          "You always have to type the exact skill name as a command",
          "Skills only activate randomly",
          "Only one skill can exist per project"
        ],
        "correctIndex": 0,
        "correction": "Claude Code compares your request to each available skill's description and picks the right one on its own, without you needing to type anything special — you can still force a specific skill by typing its name as a command if needed."
      }
    ]
  },
  "Claude Code|Où trouver des agents et des skills": {
    "title": "Where to find agents and skills",
    "summary": "No need to write everything yourself: what's already on your machine, ready-made plugins, and community resources.",
    "content": [
      {
        "heading": "What's already on your machine",
        "text": "Before looking elsewhere, check what already exists: personal agents in ~/.claude`/agents` (usable across all your projects), project agents in .claude/agents/ at the repo root — same logic for skills (~/.claude/skills and .claude/skills/). /agents lists the agents available for the current project."
      },
      {
        "heading": "Plugins: ready-made packs",
        "text": "A plugin often bundles several agents, skills, and commands around a single theme (a language, a framework, a code review methodology…). /plugin lets you browse the available plugin marketplaces and install one in a few seconds, without having to write anything yourself."
      },
      {
        "heading": "Adding an external marketplace",
        "text": "By default, only certain marketplaces are known. /plugin marketplace add <repo> adds an external source (often a public GitHub repo) to access its plugins — a common way to benefit from a pack created and maintained by someone else."
      },
      {
        "heading": "Official documentation and the community",
        "text": "The Claude Code documentation lists official examples of agents and skills. Beyond that, community repositories on GitHub gather agents/skills shared by other users — handy for inspiration before writing your own, see [[Claude Code::Sous-agents : déléguer des tâches spécialisées]] and [[Claude Code::Skills : des instructions prêtes à l'emploi]] to create your own."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to install a ready-made pack bundling several agents and skills around a single theme, without writing them yourself. What do you do?",
        "options": [
          "Use /plugin to browse marketplaces and install one",
          "Copy-paste code from a forum into the terminal",
          "It's not possible, you always have to write everything yourself",
          "Reinstall Claude Code entirely"
        ],
        "correctIndex": 0,
        "correction": "/plugin gives access to plugin marketplaces: each can bundle several ready-made agents, skills, and commands around a theme — an install that takes a few seconds rather than writing everything from scratch."
      }
    ]
  },
  "Claude Code|Les loops : relancer une tâche automatiquement": {
    "title": "Loops: rerunning a task automatically",
    "summary": "The /loop skill reruns a prompt or command on a recurring interval, without you having to retype anything.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Without a loop, watching something (a deployment's status, an external task's progress) means retyping the same command yourself every X minutes — repetitive, and easy to forget along the way."
      },
      {
        "heading": "Two ways to launch it",
        "text": "/loop 5m /my-command reruns /my-command every 5 minutes. /loop on its own, with no interval given, lets Claude choose the pace itself, iteration after iteration, based on what it observes each time."
      },
      {
        "heading": "What Claude does on each iteration",
        "text": "It reruns the given prompt or command, looks at the result, then decides what's next — keep watching, stop, or flag a notable change rather than staying silent until the end."
      },
      {
        "heading": "How to stop it",
        "text": "A loop keeps running until it's explicitly stopped (or a stop condition set at the start is reached) — no need to close the whole terminal, just ask for it to stop."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want Claude to rerun your /check-deploy command every 5 minutes until you stop it. What command do you type?",
        "options": [
          "/loop 5m /check-deploy",
          "/check-deploy 5m",
          "claude --interval 5m",
          "/compact 5m"
        ],
        "correctIndex": 0,
        "correction": "/loop <interval> <prompt or command> reruns that prompt/command at the given interval, until the loop is stopped — here every 5 minutes for /check-deploy."
      }
    ]
  },
  "Claude Code|Choisir entre intervalle fixe et rythme automatique": {
    "title": "Choosing between a fixed interval and automatic pacing",
    "summary": "A fixed interval (/loop 5m ...) or a pace Claude adjusts itself based on what it observes (/loop on its own) — two different needs.",
    "content": [
      {
        "heading": "Fixed interval: when the pace is known in advance",
        "text": "If you already know that what you're watching changes at a predictable pace (a build that usually takes about 8 minutes), a fixed interval close to that duration avoids checking too often for nothing, or not often enough."
      },
      {
        "heading": "Automatic pacing: when you don't know in advance",
        "text": "Without specifying an interval, Claude adjusts the delay before the next check itself, based on what it finds on each iteration — useful when the pace of change is unpredictable or unknown at the start."
      },
      {
        "heading": "Avoiding pointless checks",
        "text": "Rerunning a check every minute on something that only changes every hour wastes iterations for nothing. The right setting accounts for the actual speed of what's being watched, not a default habit."
      },
      {
        "heading": "A loop isn't always the right option",
        "text": "For a one-off task with no need for repeated monitoring, a simple direct request fits better than a loop — a loop makes sense when waiting for a state change that won't happen right away."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You know a deployment usually takes about 8 minutes. How do you set the loop that checks its status?",
        "options": [
          "A fixed interval close to 8 minutes, not a check every minute",
          "Check every minute to be sure not to miss anything",
          "Check just once after 1 hour",
          "Let it run continuously with no interval at all"
        ],
        "correctIndex": 0,
        "correction": "When the duration is known in advance, a fixed interval close to that duration is the most efficient setting — checking much more often than the actual pace of change wastes iterations without speeding anything up."
      }
    ]
  },
  "Claude Code|Bien utiliser les loops : bonnes pratiques": {
    "title": "Using loops well: best practices",
    "summary": "A badly tuned loop either runs for nothing or misses the right moment — a few reflexes to avoid the pitfalls.",
    "content": [
      {
        "heading": "Don't loop on what already notifies on its own",
        "text": "If the ongoing work is already tracked and signals its own completion, adding a loop that checks in parallel is redundant — it just burns iterations watching something that will notify anyway."
      },
      {
        "heading": "Prefer a wide interval over checking too often",
        "text": "A loop that checks much more often than what's actually changing doesn't speed anything up. Without a precise signal to watch for, a wide default interval (several tens of minutes) stays more reasonable than a very tight check out of habit."
      },
      {
        "heading": "Set a clear stop condition",
        "text": "A loop meant to watch for a specific event (a build finishing, a status change) should stop as soon as that event happens — without a clear condition, it keeps running aimlessly once the event has already passed."
      },
      {
        "heading": "Report what matters, not every single check",
        "text": "An iteration that changes nothing doesn't need a detailed report every time. What's useful is being notified when something actually moves — not getting a message on every pass of the loop that changes nothing."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your loop watches an external state that usually only changes every hour, with no precise signal automatically announcing a change. What setting fits best?",
        "options": [
          "A wide interval (for example 20 to 30 minutes), not a check every minute",
          "Check every minute to be sure not to miss anything",
          "Never use a loop for this kind of case",
          "Check just once then give up"
        ],
        "correctIndex": 0,
        "correction": "With no precise signal announcing a change, a wide interval matched to the real pace of what's being watched avoids wasting iterations on checks that will mostly change nothing."
      }
    ]
  },
  "Claude Code|Écrire une bonne demande à Claude Code": {
    "title": "Writing a good request to Claude Code",
    "summary": "How clear a request is directly changes the quality of the result — a few simple principles before typing the first message.",
    "content": [
      {
        "heading": "Say WHAT you want, not just the symptom",
        "text": "\"It doesn't work\" or \"improve this\" leaves the real goal to guess. Stating the expected result (what behavior, what output, what constraint) cuts down the number of back-and-forths needed."
      },
      {
        "heading": "Give the context that matters",
        "text": "Claude can read the code itself, but not what's written nowhere (a decision made elsewhere, a business constraint, existing behavior not to break). That context needs to be stated explicitly in the request, or live in CLAUDE.md so it doesn't need repeating every time — see [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        "heading": "One request, one goal",
        "text": "Mixing several independent goals into a single message (\"fix this bug AND refactor this module AND add tests\") makes it harder to check each part separately — better to split them, especially early in a task."
      },
      {
        "heading": "Give an example when it's ambiguous",
        "text": "For a precise output format or a particular style, showing a concrete example of the expected result clears up ambiguity much faster than an abstract description."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Which of these requests gives the best chance of getting the right result on the first try?",
        "options": [
          "Fix the bug: the \"Submit\" button does nothing when clicked on the payment page, even though it works on the other pages",
          "It doesn't work, fix it",
          "Improve the project",
          "Do better"
        ],
        "correctIndex": 0,
        "correction": "A precise request (which element, what observed behavior, where it works elsewhere) gives Claude something to directly target — vague phrasing forces guessing, or coming back to you for clarification."
      }
    ]
  },
  "Claude Code|Itérer sur un prompt : préciser plutôt que reformuler": {
    "title": "Iterating on a prompt: refine rather than rewrite",
    "summary": "When the first result isn't right, precisely fixing what's off is faster than starting over.",
    "content": [
      {
        "heading": "Fixing a precise gap",
        "text": "If the result is almost right but misses one detail (a naming convention, a forgotten edge case), stating it precisely (\"the empty-list case isn't handled\") is more effective than rewriting the whole request from scratch."
      },
      {
        "heading": "Telling apart a context problem from a wording problem",
        "text": "If Claude misread something about the project (a wrongly assumed convention), the fix is about the missing context — often worth adding to CLAUDE.md so it doesn't happen again. If the request itself was ambiguous, clarifying it directly is enough."
      },
      {
        "heading": "Rolling back rather than stacking fixes",
        "text": "If several correction attempts haven't been enough and the result keeps drifting further from the original need, it's better to roll back and restart from a clean state with a rephrased request, rather than stacking fixes on a shaky base."
      },
      {
        "heading": "Plan mode to check the interpretation before acting",
        "text": "For a complex or ambiguous request, asking for a plan first (see [[Claude Code::Les modes de permission : plan, auto-accept, manuel]]) lets you catch a misunderstanding before anything gets modified — far cheaper to fix than an already-produced result."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "The result you got is almost right, but ignores the case where the list is empty. What do you do?",
        "options": [
          "State exactly the missing case rather than rewriting the whole request",
          "Start over with a completely different request",
          "Give up on the task",
          "Say nothing, it doesn't matter"
        ],
        "correctIndex": 0,
        "correction": "Fixing a precise gap (the missing case) is faster than rewriting the whole request — Claude keeps the rest of the already-correct work, and only has one precise point to adjust."
      }
    ]
  },
  "Claude Code|Les prompts réutilisables : commandes personnalisées": {
    "title": "Reusable prompts: custom commands",
    "summary": "A request that keeps coming back can become your own command, callable in one line instead of retyped every time.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Retyping a long, precise request every time it comes up (a review checklist, a particular commit format) is repetitive and prone to unintentional variations from one time to the next."
      },
      {
        "heading": "A custom command, concretely",
        "text": "A text file containing the prompt, stored in .claude/commands/ (project-specific) or ~/.claude/commands/ (personal, available everywhere), becomes callable as a command via /file-name — the prompt is replayed identically on every call."
      },
      {
        "heading": "Arguments to adapt it on each call",
        "text": "A custom command can accept arguments passed at call time (for example /review my-file.js), staying generic while still applying to a precise case each time."
      },
      {
        "heading": "Custom command vs skill",
        "text": "A custom command is a fixed prompt you choose to invoke yourself explicitly. A skill, on the other hand, can be picked automatically by Claude when relevant, without having to type its name — see [[Claude Code::Skills : des instructions prêtes à l'emploi]] for the difference."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You keep asking for the same code review checklist, with the same text every time. How do you avoid retyping it?",
        "options": [
          "Store it as a custom command in .claude/commands/, callable via /command-name",
          "Copy it by hand every time",
          "Email it to yourself before each session",
          "It's not possible with Claude Code"
        ],
        "correctIndex": 0,
        "correction": "A custom command file in .claude/commands/ (or ~/.claude/commands/ for personal use) locks in the prompt once and for all — /command-name replays it identically, without ever retyping it."
      }
    ]
  },
  "Claude Code|Installer Claude Code dans un terminal": {
    "title": "Installing Claude Code in a terminal",
    "summary": "A global install via npm, one prerequisite (Node.js), and a one-command health check.",
    "content": [
      {
        "heading": "First, open a terminal",
        "text": "Every command on this page is typed inside a terminal, not a search box or a browser — see [[Bases du terminal::Ouvrir un terminal sur Windows ou Linux]] if that's not done yet."
      },
      {
        "heading": "The prerequisite: Node.js",
        "text": "Claude Code is installed via npm, Node.js's package manager — so Node.js needs to already be installed on the machine before you can install it. On Windows, `winget install OpenJS.NodeJS.LTS` takes care of it; on Linux, it installs via the usual package manager (apt, snap…)."
      },
      {
        "heading": "The global install",
        "text": "`npm install -g @anthropic-ai/claude-code` installs Claude Code globally on the machine — the claude command then becomes available from any folder in the terminal."
      },
      {
        "heading": "Checking that everything works",
        "text": "`claude --version` shows the installed version. `claude doctor` goes further, checking dependencies, PATH, and configuration, and pinpoints exactly what's wrong if the install has a problem."
      },
      {
        "heading": "Staying up to date",
        "text": "`claude update` fetches the latest available version — useful to benefit from new features and fixes over time."
      }
    ]
  },
  "Claude Code|Utiliser Claude Code dans un terminal : les premiers pas": {
    "title": "Using Claude Code in a terminal: first steps",
    "summary": "Getting into the right folder, launching a session, and the very first reflexes.",
    "content": [
      {
        "heading": "Get into the project folder",
        "text": "Before launching claude, cd into the root folder of the relevant project — Claude explores and acts starting from this launch folder. See [[Claude Code::Bien démarrer un nouveau projet]]."
      },
      {
        "heading": "Launching a session",
        "text": "The claude command, typed on its own, opens an interactive session in the terminal — a prompt where you type your first request directly."
      },
      {
        "heading": "Starting with an initial prompt",
        "text": "claude \"explain this project to me\" launches a session directly with that first request already given, without having to retype it once the session is open."
      },
      {
        "heading": "A one-off answer with no session",
        "text": "claude -p \"summarize recent changes\" ('print' mode) runs a request, shows the answer, then quits without opening a session to keep alive — handy for a script or a quick check."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to launch Claude Code directly with your first request already given, without retyping it once the session is open. How do you do it?",
        "options": [
          "claude \"your request\"",
          "claude, then retype the request once the session is open",
          "claude --request \"your request\"",
          "claude -p only, with nothing else"
        ],
        "correctIndex": 0,
        "correction": "claude \"your request\" starts the session directly with that first request already given — claude -p answers once then quits, without opening an interactive session to keep alive."
      }
    ]
  },
  "Claude Code|Installer l'extension dans VS Code ou Cursor": {
    "title": "Installing the extension in VS Code or Cursor",
    "summary": "Cursor and VS Code share the same base: the same Claude Code extension installs in both.",
    "content": [
      {
        "heading": "Two ways to get the extension",
        "text": "From the editor's marketplace (search \"Claude Code\" in the extensions tab), or automatically: running claude in VS Code/Cursor's integrated terminal offers to install the extension if it's not already there."
      },
      {
        "heading": "Cursor works like VS Code",
        "text": "Cursor is built on VS Code and uses the same extension system — the same Claude Code extension installs and works the same way in both editors."
      },
      {
        "heading": "Connecting from an existing terminal session",
        "text": "If a Claude Code session is already running in a separate terminal (not necessarily the editor's integrated one), `/ide` connects it to the open editor to share the active file and selection."
      },
      {
        "heading": "What it actually changes",
        "text": "Once connected, Claude sees the open file and the text selection in the editor, and can propose its changes directly as a diff in the editor rather than as plain text in the terminal."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You use Cursor rather than VS Code. Which Claude Code extension should you install?",
        "options": [
          "The same Claude Code extension as for VS Code — Cursor uses the same extension system",
          "A Cursor-specific extension, different from the VS Code one",
          "No extension exists for Cursor",
          "Claude Code needs to be entirely reinstalled for Cursor"
        ],
        "correctIndex": 0,
        "correction": "Cursor is built on VS Code and shares its extension system — the same Claude Code extension installs and works identically in both editors."
      }
    ]
  },
  "Claude Code|Utiliser Claude Code dans VS Code / Cursor": {
    "title": "Using Claude Code in VS Code / Cursor",
    "summary": "The integrated terminal stays the foundation, but the extension adds diff view, selection context, and dedicated shortcuts.",
    "content": [
      {
        "heading": "The integrated terminal stays the entry point",
        "text": "The extension doesn't replace the terminal: the Claude Code session keeps running in the editor's integrated terminal — the extension enriches that session with the surrounding editor's information."
      },
      {
        "heading": "Selected code as context",
        "text": "A code snippet selected in the editor is automatically taken into account as context for the current request — no need to copy-paste it into the terminal anymore."
      },
      {
        "heading": "Seeing changes as a diff before accepting",
        "text": "Rather than a block of plain text in the terminal, changes proposed by Claude show up as a diff view directly in the editor — the exact change, file by file, is visible before accepting."
      },
      {
        "heading": "Dedicated keyboard shortcuts",
        "text": "The extension adds shortcuts for common actions (opening/closing Claude Code, sending the current selection as context) directly from the editor, without going through the mouse or the terminal."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You've selected a function in the editor and want Claude to take it into account in your next request. What do you need to do?",
        "options": [
          "Nothing more: the selection is automatically taken into account as context",
          "Copy-paste the function into the terminal",
          "Open a new file and retype it",
          "It's not possible with the extension"
        ],
        "correctIndex": 0,
        "correction": "The extension automatically shares the open file and current selection with the Claude Code session — no need to copy-paste anything into the terminal."
      }
    ]
  },
  "Claude Code|Les plugins : qu'est-ce que c'est et à quoi ça sert": {
    "title": "Plugins: what they are and what they're for",
    "summary": "A plugin bundles several extensions (commands, agents, skills, hooks) into a single pack installable in one action.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Installing a custom command, an agent, and a skill that go together (for a particular framework or methodology, say) separately means copying everything by hand, file by file. A plugin bundles all of that into a single pack."
      },
      {
        "heading": "What a plugin can contain",
        "text": "Custom commands, agents, skills, and hooks (automatic actions triggered at certain moments) — anything you could create by hand yourself can be packaged into a plugin."
      },
      {
        "heading": "Once installed, it behaves as if it were your own",
        "text": "The commands, agents, and skills from an installed plugin work exactly like ones you'd have created yourself — `/agents` lists them, a plugin skill gets picked automatically just like a personal one, the only difference being where it came from."
      },
      {
        "heading": "A plugin skill is marked with a prefix",
        "text": "A skill provided by a plugin is identified with a plugin-name: prefix in front of its name (plugin:skill), to tell it apart from a personal or project skill sharing the same name."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "An installed plugin provides a security review skill. How does Claude use it, compared to a skill you'd have written yourself?",
        "options": [
          "Exactly the same way: Claude picks it automatically when relevant, like any other skill",
          "It needs to be invoked in a completely different way",
          "Plugins can't contain skills",
          "It needs to be reinstalled every session"
        ],
        "correctIndex": 0,
        "correction": "A skill provided by a plugin works exactly like a personal or project skill — Claude compares your request to its description and picks it on its own when relevant, with no special handling."
      }
    ]
  },
  "Claude Code|Installer et gérer un plugin": {
    "title": "Installing and managing a plugin",
    "summary": "/plugin gives access to the available marketplaces; installing, disabling, or removing a plugin never requires editing a file by hand.",
    "content": [
      {
        "heading": "Browsing the available marketplaces",
        "text": "/plugin opens an interactive browser listing the plugins available from the already-known marketplaces — no need to know a plugin's exact name in advance to discover it."
      },
      {
        "heading": "Adding an external marketplace",
        "text": "Not every marketplace is known by default. /plugin marketplace add <repo> adds an external source (often a public GitHub repo) to access the plugins it offers — see [[Claude Code::Où trouver des agents et des skills]]."
      },
      {
        "heading": "Installing, disabling, removing",
        "text": "Once found, a plugin installs in one action from that same browser. It can later be temporarily disabled without fully uninstalling it, or removed if it turns out not to be useful — never any config file to edit by hand."
      },
      {
        "heading": "A plugin per project, or machine-wide",
        "text": "A plugin can be enabled just for one specific project, or globally across all your projects — useful for keeping some plugins specific to a context (a client, a particular stack) without them showing up everywhere."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to see which plugins are available without knowing their exact name in advance. What do you do?",
        "options": [
          "/plugin, to browse the already-known marketplaces",
          "Only search on an external search engine",
          "Edit a configuration file by hand",
          "It's not possible without knowing the exact name"
        ],
        "correctIndex": 0,
        "correction": "/plugin opens an interactive browser listing the plugins available from known marketplaces — no need to know a precise name in advance to discover what exists."
      }
    ]
  },
  "Claude Code|Créer son propre plugin": {
    "title": "Creating your own plugin",
    "summary": "Bundle your own commands, agents, and skills into a shareable pack, rather than copying them project by project.",
    "content": [
      {
        "heading": "When it's worth it",
        "text": "Copying the same custom commands, agents, and skills from one project to another, or sharing them with a team, quickly becomes repetitive — a plugin centralizes all of that into a single place to maintain."
      },
      {
        "heading": "A plugin's structure",
        "text": "A plugin is a folder with a manifest file describing it (name, version), and subfolders for each of its components (commands, agents, skills, hooks) — the same organization you'd write by hand in .claude/, just arranged to be published."
      },
      {
        "heading": "Publishing it via a marketplace",
        "text": "A marketplace is itself a repository (often on GitHub) that references one or more plugins. Publishing a plugin means adding it to such a repository, which others can then add with /plugin marketplace add."
      },
      {
        "heading": "Keeping a marketplace private, in-house",
        "text": "Nothing requires a marketplace to be public — a private repository shared only with your team lets you distribute internal plugins without making them accessible outside."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your team uses the same custom commands and the same review agent across all its internal projects, copied by hand every time. How do you centralize that properly?",
        "options": [
          "Package them into a plugin, published on a private marketplace shared with the team",
          "Keep copy-pasting the files into each new project",
          "Send them by message to each new team member",
          "It's not possible to share that across multiple projects"
        ],
        "correctIndex": 0,
        "correction": "A plugin published on a private marketplace centralizes commands, agents, and skills into a single place to maintain — each team member installs it once, with no file copy-pasting from project to project."
      }
    ]
  },
  "Windows|PowerShell vs invite de commandes (cmd) : lequel utiliser": {
    "title": "PowerShell vs Command Prompt (cmd): which to use",
    "summary": "Windows has two different terminals with different logic — knowing which to use avoids commands that only work in one of the two.",
    "content": [
      {
        "heading": "cmd, the historical one",
        "text": "The Command Prompt (cmd.exe) has existed since Windows's early days — commands like dir, cd, or ping still work there, but its scripting language stays limited compared to a real shell."
      },
      {
        "heading": "PowerShell, today's standard",
        "text": "PowerShell has been the recommended default shell for several years now — its commands (called cmdlets) all follow the same Verb-Noun pattern (Get-Process, Stop-Service, New-Item…), which makes them easier to guess than in cmd."
      },
      {
        "heading": "Both coexist, without fully replacing one another",
        "text": "Some historical cmd commands (like `ipconfig` or `systeminfo`) also work fine in PowerShell — no need to strictly pick one over the other, PowerShell runs most old cmd commands in addition to its own."
      },
      {
        "heading": "Windows Terminal: the app that hosts both",
        "text": "Windows Terminal (the modern app for opening a terminal) lets you launch either a PowerShell tab or a cmd tab — the choice is made when opening the tab, not at the app level itself."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to list the processes using the most memory, with a command whose name is easy to guess. Which shell fits best?",
        "options": [
          "PowerShell, thanks to its cmdlets' Verb-Noun pattern (Get-Process)",
          "cmd, because it's older so more complete",
          "Neither, Windows doesn't allow that",
          "A third-party shell needs to be installed"
        ],
        "correctIndex": 0,
        "correction": "PowerShell cmdlets all follow the Verb-Noun pattern (Get-Process, Get-Service…), which makes them predictable to guess — a clear edge over historical cmd commands, which are often less consistent with each other."
      }
    ]
  },
  "Windows|Élévation de privilèges : l'équivalent Windows de sudo": {
    "title": "Privilege elevation: Windows's equivalent of sudo",
    "summary": "Windows has no sudo: privilege elevation happens window by window, not command by command.",
    "content": [
      {
        "heading": "No sudo in front of every command",
        "text": "On Linux, sudo command elevates just for the duration of one command. Windows works differently: a terminal runs either as a normal user, or entirely as administrator — no switching command by command within the same window."
      },
      {
        "heading": "Opening an already-elevated terminal",
        "text": "`Start-Process powershell -Verb RunAs` (or right-click → \"Run as administrator\" in the interface) opens a NEW window with full rights — everything typed there afterward runs as administrator, with no further prompt."
      },
      {
        "heading": "The UAC prompt, the safeguard",
        "text": "Whether launching an elevated terminal or a plain program, Windows shows a confirmation window (UAC) before granting the rights — the same explicit-confirmation principle as sudo, but at the level of a whole window rather than a single command."
      },
      {
        "heading": "Spotting whether you're already elevated",
        "text": "The PowerShell window's title usually shows \"Administrator\" as a prefix when the terminal runs with elevated rights — the fastest visual cue, rather than testing a command to find out."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You need to modify a system file that requires administrator rights, and your current terminal runs as a normal user. What do you do?",
        "options": [
          "Open a new PowerShell window as administrator (Start-Process powershell -Verb RunAs), then type the command there",
          "Type sudo in front of the command in the current terminal",
          "It's not possible on Windows",
          "Restart the computer in administrator mode"
        ],
        "correctIndex": 0,
        "correction": "Windows has no command-by-command sudo: you need to open a fully elevated window (Start-Process powershell -Verb RunAs) and run the command there, rather than elevating a single command in the current window."
      }
    ]
  },
  "Windows|winget : installer et gérer des logiciels": {
    "title": "winget: installing and managing software",
    "summary": "Windows's official package manager — the equivalent of apt, built in natively since Windows 10/11.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Without a package manager, installing software means finding an official site, downloading an installer, clicking through a wizard — and doing that manually all over again for every update."
      },
      {
        "heading": "winget, in one command",
        "text": "winget install name searches, downloads, and installs the software automatically, with no browser involved — see [[Bases du terminal::Comprendre les gestionnaires de paquets]] for the general principle."
      },
      {
        "heading": "Searching before installing",
        "text": "winget search name lists matching available software, useful when unsure of the exact name winget expects."
      },
      {
        "heading": "Updating everything at once",
        "text": "`winget upgrade --all` updates, in a single command, every piece of software installed via winget that has a new version available — no need to go back through each official site."
      },
      {
        "heading": "When winget isn't enough",
        "text": "Some software isn't listed on winget yet. Chocolatey (choco install) is an older third-party manager that sometimes covers software missing from winget — a complement, not a replacement."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to update every piece of software installed via winget with a single command. Which one do you use?",
        "options": [
          "winget upgrade --all",
          "winget install --all",
          "winget update *",
          "Every piece of software has to be updated manually one by one"
        ],
        "correctIndex": 0,
        "correction": "winget upgrade --all updates, in a single command, every piece of software installed via winget that has a new version available."
      }
    ]
  },
  "Windows|Se repérer dans l'arborescence Windows": {
    "title": "Finding your way around the Windows file tree",
    "summary": "No single root like on Linux: each disk gets its own letter, and certain folders have a very specific role.",
    "content": [
      {
        "heading": "Drive letters, not a single root",
        "text": "Where Linux has one single tree starting at /, Windows assigns a letter to each disk/partition (C:\\, D:\\…) — see [[Linux Mint::L'arborescence du système de fichiers]] for the same principle on the Linux side."
      },
      {
        "heading": "C:\\Users\\: the equivalent of /home",
        "text": "Each user's personal folder, with their documents, downloads, desktop — the direct equivalent of /home/user on Linux."
      },
      {
        "heading": "Program Files: where installed software lives",
        "text": "Software installed for all users usually goes into C:\\Program Files (or Program Files (x86) for 32-bit software) — modifying this folder requires administrator rights."
      },
      {
        "heading": "AppData: the hidden configuration",
        "text": "Inside C:\\Users\\you\\AppData (hidden by default), each application stores its configuration and local data — the same role played by the hidden .config or .local folders on Linux."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You're looking for where a piece of software stored its personal configuration on your Windows session. Where do you check first?",
        "options": [
          "In your user profile's AppData folder",
          "Directly at the root of the C:\\ drive",
          "In Program Files",
          "Windows never stores per-user configuration"
        ],
        "correctIndex": 0,
        "correction": "AppData (inside the user folder) is where applications store their configuration and local data — the same role played by the hidden .config/.local folders on Linux."
      }
    ]
  },
  "Windows|Processus et services : Gestionnaire des tâches, Get-Process, Get-Service": {
    "title": "Processes and services: Task Manager, Get-Process, Get-Service",
    "summary": "Two ways to watch what's running: the graphical interface for a quick glance, PowerShell for scripting or automation.",
    "content": [
      {
        "heading": "Task Manager, for a quick glance",
        "text": "`taskmgr` opens the classic graphical interface — real-time CPU/RAM usage, the ability to force-stop a program that's stopped responding, with no command typed at all."
      },
      {
        "heading": "Get-Process, the scriptable version",
        "text": "Get-Process | Sort-Object CPU -Descending lists processes by CPU usage directly in the terminal — handy for a script or a remote connection with no graphical interface."
      },
      {
        "heading": "Process vs service: the difference",
        "text": "A process is a running program, visible and tied to a user session. A service runs in the background independently of any open session (often started before you even log in) — Get-Service lists these services and their state."
      },
      {
        "heading": "Restarting a stuck service",
        "text": "Restart-Service -Name name stops then relaunches a specific service — often faster than restarting the whole machine for one service that crashed."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A system service seems stuck and you want to restart it without rebooting the whole machine. What do you do?",
        "options": [
          "Restart-Service -Name service-name",
          "Restart the entire computer",
          "Stop-Process -Name service-name (that's enough, no need to relaunch it)",
          "It's not possible without rebooting"
        ],
        "correctIndex": 0,
        "correction": "Restart-Service directly targets the affected service (stop then relaunch) — no need to reboot the whole machine for one isolated service that crashed."
      }
    ]
  },
  "Windows|Réseau sous Windows : ipconfig, ping, ports": {
    "title": "Networking on Windows: ipconfig, ping, ports",
    "summary": "The same questions as on Linux (what's my IP, does it respond, who's using this port) with different commands.",
    "content": [
      {
        "heading": "Viewing your network configuration",
        "text": "`ipconfig` shows the IP address, mask, and gateway for each network interface — see [[Linux Mint::Réseau pour les nuls : IP, port, DNS]] for the same concepts explained on the Linux side."
      },
      {
        "heading": "Testing that a host responds",
        "text": "`ping site.com` works almost identically to Linux — sends packets and measures the response time."
      },
      {
        "heading": "Finding what's occupying a port",
        "text": "`netstat -ano | findstr :8080` shows the PID of the process listening on port 8080; Get-Process -Id <PID> next to identify it by name."
      },
      {
        "heading": "Testing a remote port with no browser or client",
        "text": "Test-NetConnection -ComputerName host -Port 443 checks that a specific port responds on a remote machine, without opening a real application connection."
      },
      {
        "heading": "Flushing the DNS cache after a change",
        "text": "`ipconfig /flushdns` forces the system to forget cached DNS resolutions — useful right after changing a DNS record or server."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Port 8080 seems occupied by an unknown program. How do you identify which one?",
        "options": [
          "netstat -ano | findstr :8080 to find the PID, then Get-Process -Id to identify it",
          "ping localhost:8080",
          "ipconfig /flushdns",
          "There's no way to know which program is using a port"
        ],
        "correctIndex": 0,
        "correction": "netstat -ano gives the PID of the process listening on the port in question; Get-Process -Id <PID> then lets you find its name."
      }
    ]
  },
  "Windows|WSL : faire tourner Linux dans Windows": {
    "title": "WSL: running Linux inside Windows",
    "summary": "A real Linux environment inside Windows, with no separate virtual machine to manage — handy for finding already-known commands again.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Some tools/commands only exist on Linux, or behave differently on Windows (paths, case sensitivity, bash scripts) — WSL avoids having to choose between the two systems."
      },
      {
        "heading": "A real Linux distribution, not a simulation",
        "text": "WSL (Windows Subsystem for Linux) runs a real distribution (Ubuntu by default) with its own terminal — commands like apt, bash, grep… work exactly as on a Linux machine, see [[Linux Mint::apt : installer et gérer des logiciels]]."
      },
      {
        "heading": "Installing WSL",
        "text": "wsl --install installs WSL and a default distribution in a single command — a restart is usually needed to finish the install."
      },
      {
        "heading": "Accessing files from one side on the other",
        "text": "Windows files stay accessible from WSL (under /mnt/c/...), and WSL's Linux files are accessible from Windows Explorer via \\\\wsl$\\ — both worlds coexist with no manual copying."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to use a Linux-specific bash command directly on your Windows machine, without a separate virtual machine. What do you do?",
        "options": [
          "Install and use WSL (wsl --install)",
          "Fully reinstall Windows as Linux",
          "It's not possible without a virtual machine",
          "Use winget to install bash directly inside PowerShell"
        ],
        "correctIndex": 0,
        "correction": "WSL runs a real Linux distribution inside Windows, with no separate virtual machine to manage — wsl --install is enough to install it."
      }
    ]
  },
  "Windows|Le profil PowerShell : personnaliser son shell": {
    "title": "The PowerShell profile: customizing your shell",
    "summary": "A file loaded every time PowerShell opens, so the same aliases and settings don't need redefining every session.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Without a profile, an alias or variable defined in a PowerShell session disappears when it closes — everything would need redefining on every opening."
      },
      {
        "heading": "$PROFILE, the automatically loaded file",
        "text": "`notepad $PROFILE` opens (or creates) this file — everything written there runs automatically at every new PowerShell session, the equivalent of .bashrc on Linux."
      },
      {
        "heading": "Making an alias permanent",
        "text": "`Set-Alias ll Get-ChildItem` typed directly in the terminal only lasts the session. The same line added to $PROFILE makes it permanent for every future session."
      },
      {
        "heading": "A different profile per context",
        "text": "PowerShell distinguishes several possible profiles (current user, all users, specific host…) — in most cases, the current user's profile (the one opened by $PROFILE) is more than enough."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You created a useful alias with Set-Alias, but it disappears every time you close PowerShell. How do you make it permanent?",
        "options": [
          "Add the same Set-Alias line to the $PROFILE file",
          "Retype it every time you open a session, that's the only way",
          "Use winget to install it",
          "PowerShell aliases are always permanent by default"
        ],
        "correctIndex": 0,
        "correction": "$PROFILE is the file automatically run every time PowerShell opens — adding the Set-Alias line there makes it permanent, with no need to retype it."
      }
    ]
  },
  "Windows|Exécuter des scripts PowerShell : la politique d'exécution": {
    "title": "Running PowerShell scripts: the execution policy",
    "summary": "Unlike Linux, running a .ps1 script is blocked by default — a security setting worth understanding before changing it.",
    "content": [
      {
        "heading": "Why it's blocked by default",
        "text": "Windows blocks .ps1 script execution by default to limit malicious scripts picked up unintentionally (an attachment, a download) — unlike Linux, where chmod +x is enough to make a script executable."
      },
      {
        "heading": "Viewing the current policy",
        "text": "Get-ExecutionPolicy shows the setting currently in effect — by default, often Restricted (no script runs)."
      },
      {
        "heading": "Allowing your own scripts",
        "text": "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser allows locally-written scripts, while still requiring a digital signature for scripts downloaded from the internet — a good compromise between security and convenience."
      },
      {
        "heading": "-Scope CurrentUser, a useful precaution",
        "text": "Limiting the change to -Scope CurrentUser (rather than the whole machine) avoids modifying this setting for other user accounts on the same machine — a good default practice."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You're trying to run your own .ps1 script and Windows refuses to execute it. Which command fixes that properly, for your account only?",
        "options": [
          "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser",
          "Completely remove the execution policy",
          "Rename the file to .exe",
          "It's not possible to run PowerShell scripts"
        ],
        "correctIndex": 0,
        "correction": "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser allows local scripts (while requiring a signature for downloaded ones), and -Scope CurrentUser limits the change to your account alone."
      }
    ]
  },
  "Codex|Codex, à quoi ça sert et en quoi il diffère de Claude Code": {
    "title": "Codex: what it's for and how it differs from Claude Code",
    "summary": "OpenAI's command-line coding agent — the same idea as Claude Code, with its own settings and its own vocabulary.",
    "content": [
      {
        "heading": "The same principle as Claude Code",
        "text": "Like Claude Code, Codex runs in the terminal, directly reads and modifies the project's files, runs commands, and can chain several actions to accomplish a task — see [[Claude Code::Claude Code, à quoi ça sert vraiment ?]] for the general principle of a coding agent."
      },
      {
        "heading": "Built by OpenAI, not Anthropic",
        "text": "Codex uses OpenAI's models (GPT) rather than Claude — the choice between the two often comes down to which model you prefer, or which subscription you already have (ChatGPT vs Claude)."
      },
      {
        "heading": "A close but not identical vocabulary",
        "text": "Where Claude Code has permission modes and a CLAUDE.md, Codex has sandbox/approval policies and an AGENTS.md — the concepts overlap a lot, but the exact names and settings differ."
      },
      {
        "heading": "No need to pick a side",
        "text": "Both tools can coexist on the same machine, including on the same project — nothing stops you from using one for a task and the other for a different one, whichever fits best at the time."
      }
    ]
  },
  "Codex|Installer et se connecter à Codex": {
    "title": "Installing and logging in to Codex",
    "summary": "Three ways to install Codex CLI, and two ways to authenticate depending on what you already have (a ChatGPT account or an API key).",
    "content": [
      {
        "heading": "First, open a terminal",
        "text": "Every command on this page is typed inside a terminal (PowerShell on Windows, Terminal on Linux), not a search box or a browser — see [[Bases du terminal::Ouvrir un terminal sur Windows ou Linux]] if that's not done yet."
      },
      {
        "heading": "Three ways to install",
        "text": "The official script (`curl -fsSL https://chatgpt.com/codex/install.sh | sh`) on macOS/Linux, `npm install -g @openai/codex` on all three OSes (Windows included), or `brew install --cask codex` on macOS — see [[Bases du terminal::Comprendre les gestionnaires de paquets]] for the general principle behind npm/Homebrew."
      },
      {
        "heading": "Logging in with ChatGPT",
        "text": "`codex login` offers to sign in with a ChatGPT account — the simplest way if a ChatGPT subscription already exists."
      },
      {
        "heading": "Logging in with an API key",
        "text": "`codex login --with-api-key` authenticates with an OpenAI API key instead of a ChatGPT account — useful for scripted/server use with no graphical interface."
      },
      {
        "heading": "Checking and revoking access",
        "text": "`codex login status` confirms whether Codex is properly authenticated; `codex logout` removes locally stored credentials, for example before lending the machine to someone."
      }
    ]
  },
  "Codex|Premiers pas avec Codex : session interactive et exécution one-shot": {
    "title": "First steps with Codex: interactive session and one-shot execution",
    "summary": "codex for a session that lasts, codex exec for a one-off task that answers then hands back control.",
    "content": [
      {
        "heading": "codex, the interactive session",
        "text": "Typed on its own in the project's folder, the codex command opens an interactive session — the same principle as claude for Claude Code, see [[Claude Code::Utiliser Claude Code dans un terminal : les premiers pas]]."
      },
      {
        "heading": "codex exec, for a one-off task",
        "text": "codex exec \"summarize recent changes\" runs a single task, shows the result, then quits — with no session left open to manage."
      },
      {
        "heading": "Why prefer one over the other",
        "text": "An interactive session fits a task that needs back-and-forth (clarifying, fixing, iterating). codex exec fits a task that's well-defined ahead of time, especially in a script or automation."
      },
      {
        "heading": "Combining with other commands",
        "text": "codex exec's output can be redirected to a file or another command (codex exec \"...\" | tee result.md) just like any classic shell command."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to run a Codex task inside an unsupervised script, with no session left open afterward. Which command do you use?",
        "options": [
          "codex exec \"task\"",
          "codex, then close the window manually",
          "codex login",
          "codex resume"
        ],
        "correctIndex": 0,
        "correction": "codex exec runs a single task and hands back control as soon as it's done, with no interactive session left open — the right mode for an unsupervised script."
      }
    ]
  },
  "Codex|Sandbox et approbations : le système de permissions de Codex": {
    "title": "Sandbox and approvals: Codex's permission system",
    "summary": "Two combined settings define what Codex can do on its own, and when it has to ask for confirmation.",
    "content": [
      {
        "heading": "The sandbox: what Codex is allowed to TOUCH",
        "text": "--sandbox defines filesystem access: read-only, workspace-write (can write inside the working folder), or danger-full-access (full access to the machine) — see [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] for the equivalent on the Claude Code side."
      },
      {
        "heading": "Approval: when Codex MUST ask",
        "text": "--ask-for-approval defines when Codex pauses its work to ask for confirmation: untrusted (almost everything), on-request (only truly risky actions), or never (never)."
      },
      {
        "heading": "Combining them for supervised automation",
        "text": "`codex --sandbox workspace-write` --ask-for-approval on-request \"task\" lets Codex work on its own inside the project, while keeping a safety net on the most sensitive actions."
      },
      {
        "heading": "--yolo, the no-safety-net mode",
        "text": "--dangerously-bypass-approvals-and-sandbox (alias --yolo) disables everything — sandbox AND confirmations. Reserved for an isolated, disposable environment (container, CI), never on a machine with important data."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want Codex to work on your project on its own, but ask for confirmation before a truly risky action. Which settings do you use?",
        "options": [
          "--sandbox workspace-write --ask-for-approval on-request",
          "--dangerously-bypass-approvals-and-sandbox",
          "--sandbox read-only --ask-for-approval never",
          "No such setting exists"
        ],
        "correctIndex": 0,
        "correction": "workspace-write allows writing inside the project, and on-request only asks for confirmation on truly risky actions — the typical combination for supervised automation."
      }
    ]
  },
  "Codex|AGENTS.md : donner du contexte permanent à Codex": {
    "title": "AGENTS.md: giving Codex permanent context",
    "summary": "The Codex-side equivalent of CLAUDE.md — with a more developed layering system (global, project, subfolders).",
    "content": [
      {
        "heading": "The same problem CLAUDE.md solves",
        "text": "Without this file, the project's context (conventions, pitfalls, useful commands) would need re-explaining every session — AGENTS.md removes that repetition, read automatically before starting, see [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        "heading": "Three levels, from most general to most precise",
        "text": "An AGENTS.md inside ~/.codex/ applies to EVERY project; an AGENTS.md at the repo root applies to THIS project; an AGENTS.md inside a subfolder narrows it further for that part of the project."
      },
      {
        "heading": "Files stack, they don't exclude each other",
        "text": "Codex reads every relevant AGENTS.md (from most general to closest to the current folder) and combines them — instructions closest to the working folder take precedence in case of contradiction."
      },
      {
        "heading": "AGENTS.override.md for a one-off exception",
        "text": "Inside a specific subfolder, AGENTS.override.md lets you temporarily short-circuit broader instructions, without modifying them at the source."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You have an AGENTS.md at your project's root, and want a different rule just for the legacy/ folder. How do you do that without touching the root file?",
        "options": [
          "Add an AGENTS.md (or AGENTS.override.md) inside the legacy/ folder",
          "It's not possible, only one AGENTS.md per project",
          "Rename the root file",
          "Delete AGENTS.md entirely"
        ],
        "correctIndex": 0,
        "correction": "AGENTS.md can exist at several levels (global, root, subfolders) and stacks — an AGENTS.md inside legacy/ narrows or overrides the root's instructions for that one subfolder only."
      }
    ]
  },
  "Codex|Reprendre, brancher, réviser : gérer ses sessions Codex": {
    "title": "Resuming, forking, reviewing: managing Codex sessions",
    "summary": "resume to continue, fork to explore an idea without losing the original, review for a targeted read-through.",
    "content": [
      {
        "heading": "codex resume: picking up a past session",
        "text": "Shows a picker of the current folder's previous sessions to resume a specific one — see [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]] for the same need on the Claude Code side."
      },
      {
        "heading": "codex exec resume --last: resuming with no interface",
        "text": "In non-interactive mode, --last resumes the most recent session directly with a new instruction, with no picker involved."
      },
      {
        "heading": "codex fork: exploring without losing the original",
        "text": "Creates a new conversation that starts from the current history, but in a separate branch — useful for testing a risky idea without altering the starting session if it doesn't pan out."
      },
      {
        "heading": "codex review: a targeted read-through",
        "text": "Launches Codex in code review mode on the current changes, rather than regular development mode — a different use of the same agentic base."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to try a risky approach on your current session, without losing the ability to go back to the current version if it doesn't work out. What do you do?",
        "options": [
          "codex fork, to explore in a separate branch of the conversation",
          "codex resume --last",
          "codex logout then codex login",
          "Nothing, just take the risk directly in the current session"
        ],
        "correctIndex": 0,
        "correction": "codex fork creates a new conversation from the current history, in a separate branch — the original session stays intact if the attempt doesn't lead anywhere good."
      }
    ]
  },
  "Codex|Automatiser avec Codex : exec, JSON, scripts": {
    "title": "Automating with Codex: exec, JSON, scripts",
    "summary": "codex exec becomes truly useful combined with structured, redirected output — the basis of reliable automation.",
    "content": [
      {
        "heading": "--json: output built to be read by a program",
        "text": "Streams the response as JSON Lines instead of human-oriented text — essential as soon as another program needs to consume the result rather than just display it."
      },
      {
        "heading": "-o / --output-last-message: isolating the final result",
        "text": "Writes only the final message to a file, without the noise of intermediate steps — handy for grabbing just what matters in a pipeline."
      },
      {
        "heading": "Chaining with other shell commands",
        "text": "codex exec \"...\" | tee result.md or curl ... | codex exec \"...\" work like any classic Unix command in a pipeline — Codex fits in with no special handling."
      },
      {
        "heading": "--skip-git-repo-check to run outside a Git repo",
        "text": "By default, some checks assume a Git repository is present. This flag lets Codex run even outside a repo — useful for a generic script that doesn't always run inside a versioned project."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want another program to reliably grab Codex's response, without having to parse free-form text meant for a human. Which option do you use?",
        "options": [
          "--json, for JSON Lines output",
          "-i, to attach an image",
          "--oss, for a local model",
          "--yolo"
        ],
        "correctIndex": 0,
        "correction": "--json streams the response as JSON Lines, a structured format built to be read by a program — far more reliable than parsing free-form text meant for a human."
      }
    ]
  },
  "Codex|Configuration avancée de Codex : profils, modèles locaux, MCP": {
    "title": "Advanced Codex configuration: profiles, local models, MCP",
    "summary": "Beyond the basic settings: profiles to quickly switch context, local models, and external MCP servers.",
    "content": [
      {
        "heading": "A profile, to avoid retyping the same options",
        "text": "--profile name layers a predefined set of settings (model, sandbox, approval…) on top of the base config — handy for quickly switching between several work contexts without retyping every flag."
      },
      {
        "heading": "Overriding a value with no file to edit",
        "text": "-c model=\"gpt-5.1-codex\" changes a configuration value for a single run, without touching the config.toml file — useful for a one-off try."
      },
      {
        "heading": "A local model instead of the OpenAI API",
        "text": "--oss --local-provider ollama (or lmstudio) runs Codex with a locally hosted model instead of via the API — useful offline or to avoid sending code to an external service."
      },
      {
        "heading": "codex mcp: connecting external tools",
        "text": "Just like Claude Code, Codex can connect to MCP servers to interact with external services (databases, third-party APIs) beyond files and shell commands — see [[Claude Code::MCP : connecter Claude à d'autres outils]] for the general principle."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to use Codex with a model hosted locally via Ollama, instead of the online OpenAI API. Which option do you use?",
        "options": [
          "--oss --local-provider ollama",
          "--profile ollama",
          "-c model=\"ollama\"",
          "It's not possible with Codex"
        ],
        "correctIndex": 0,
        "correction": "--oss enables a locally hosted model, and --local-provider ollama specifies which of the two supported local providers to use (LM Studio or Ollama)."
      }
    ]
  },
  "VS Code|VS Code, à quoi ça sert et comment il s'organise": {
    "title": "VS Code: what it's for and how it's organized",
    "summary": "A lightweight, extensible code editor — understanding the interface's main areas before going further.",
    "content": [
      {
        "heading": "An editor, not a full IDE by default",
        "text": "VS Code deliberately starts lightweight (text editing, syntax highlighting, search) — more advanced features (a debugger for a specific language, a linter, advanced autocomplete) come through extensions installed on demand."
      },
      {
        "heading": "The interface's main areas",
        "text": "On the left, the activity bar (files, search, Git, extensions, debugging) and its associated explorer; in the center, the editor, which can split into several columns; at the bottom, the panel (integrated terminal, problems, output)."
      },
      {
        "heading": "The workspace: one folder, one context",
        "text": "Opening a folder (rather than a single file) gives access to the file explorer, project-wide search, and settings specific to THIS folder."
      },
      {
        "heading": "Almost everything goes through a shortcut",
        "text": "VS Code is designed to be used from the keyboard — most actions have a shortcut, and the ones that don't stay reachable through the command palette."
      }
    ]
  },
  "VS Code|La palette de commandes : le point d'entrée vers tout": {
    "title": "The command palette: the entry point to everything",
    "summary": "Ctrl+Shift+P gives access to every VS Code action by name, with no need to dig through menus.",
    "content": [
      {
        "heading": "Searching for an action instead of finding it in a menu",
        "text": "Rather than navigating nested menus, `Ctrl+Shift+P` opens a search where typing a few words of the wanted action (\"format\", \"reload\", \"settings\"…) is enough to find it."
      },
      {
        "heading": "A dedicated cousin for files: Ctrl+P",
        "text": "`Ctrl+P` (without Shift) opens a similar search but dedicated to the project's FILES — the two complement each other: Ctrl+P to open a file, `Ctrl+Shift+P` to run an action."
      },
      {
        "heading": "Shortcuts show up next to the name",
        "text": "In the palette's results, each action's keyboard shortcut (when it has one) shows up on the right — a natural way to memorize the most useful shortcuts over time."
      },
      {
        "heading": "Useful even when you know the shortcuts",
        "text": "For a rare action (changing the theme, reloading the window), going through the palette is often faster than memorizing a shortcut used once a month."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to format the open file but can't remember the exact shortcut. What do you do?",
        "options": [
          "Open the command palette (Ctrl+Shift+P) and type \"format\"",
          "Search through every menu one by one",
          "Close and reopen VS Code",
          "It's only possible with the exact shortcut"
        ],
        "correctIndex": 0,
        "correction": "The command palette finds an action from a few words of its name — no need to memorize a shortcut for a rarely used action."
      }
    ]
  },
  "VS Code|Multi-curseurs et sélection multiple : éditer plusieurs endroits à la fois": {
    "title": "Multi-cursors and multiple selection: editing several spots at once",
    "summary": "Changing several occurrences at once, without find-and-replace, while keeping visual control over each change.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Renaming a variable used in 5 nearby spots, or adding the same prefix to several lines, takes repeated manual effort — multi-cursors let you type once so it applies everywhere it's selected."
      },
      {
        "heading": "Ctrl+D: occurrence by occurrence",
        "text": "Selecting a word then pressing `Ctrl+D` adds the next identical occurrence to the selection — repeating Ctrl+D adds one more each time, keeping control over what's affected."
      },
      {
        "heading": "Alt+Click: a cursor exactly where you want",
        "text": "`Alt+Clic`k places an extra cursor at the clicked spot, with no dependency on a word or a specific occurrence — useful for positions that don't textually resemble each other."
      },
      {
        "heading": "Difference from find-and-replace",
        "text": "Find-and-replace acts blindly across the whole file (or project). Multi-cursors stay visual: you see and choose exactly which occurrences are affected before typing anything."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to rename a variable used in 4 spots in the file, but want to see and precisely choose which occurrences are affected before typing. Which approach do you use?",
        "options": [
          "Select the variable then Ctrl+D to add each occurrence to the selection",
          "Find-and-replace across the whole file without checking",
          "Retype each occurrence one by one, in separate actions",
          "It's not possible in VS Code"
        ],
        "correctIndex": 0,
        "correction": "Ctrl+D adds occurrences one by one to the selection, giving visual control over what's affected before typing — unlike a blind find-and-replace."
      }
    ]
  },
  "VS Code|Les extensions : étendre VS Code selon ses besoins": {
    "title": "Extensions: extending VS Code to fit your needs",
    "summary": "VS Code deliberately stays lightweight by default — extensions add support for a language, a linter, a theme, or a specific tool.",
    "content": [
      {
        "heading": "Why VS Code doesn't do everything by default",
        "text": "Native support for every language, every framework, every tool would make VS Code heavy and slow for everyone, including those who don't need it — extensions let each person add only what serves THEIR use case."
      },
      {
        "heading": "Searching and installing",
        "text": "The Extensions panel (activity bar) lets you search by name or keyword, see the description and install count, then install with one click — the graphical equivalent of code --install-extension."
      },
      {
        "heading": "Recommending extensions to your team",
        "text": "A `.vscode/extensions.json` file at the project root lists the extensions recommended for THIS project — VS Code automatically offers to install them on open, handy for standardizing a team's tools."
      },
      {
        "heading": "Too many extensions can slow things down",
        "text": "Every active extension uses resources, even with no direct use — uninstalling or disabling the ones no longer needed avoids a gradual slowdown over time."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your team wants everyone to have the same extensions installed on a given project. How do you do that without sending a list to copy-paste by hand?",
        "options": [
          "Create a .vscode/extensions.json file at the project root listing recommended extensions",
          "Message every new team member",
          "It's not possible, everyone has to search on their own",
          "Install the extensions on the Git server"
        ],
        "correctIndex": 0,
        "correction": ".vscode/extensions.json lists the project's recommended extensions — VS Code offers to install them automatically on open, with no list to copy-paste by hand."
      }
    ]
  },
  "VS Code|Terminal intégré et Git intégré : moins de fenêtres à jongler": {
    "title": "Integrated terminal and built-in Git: fewer windows to juggle",
    "summary": "The terminal and Git status stay visible right next to the code, with no window switching for the smallest command.",
    "content": [
      {
        "heading": "The integrated terminal, one shortcut away",
        "text": "Ctrl+\` toggles a terminal directly inside VS Code, already positioned in the project's folder — this is in fact where tools like Claude Code run from, see [[Claude Code::Utiliser Claude Code dans VS Code / Cursor]]."
      },
      {
        "heading": "Several terminals side by side",
        "text": "The terminal panel can open several tabs (a dev server running, another for one-off commands) without them getting in each other's way."
      },
      {
        "heading": "The Source Control panel, without leaving the editor",
        "text": "`Ctrl+Shift+G` shows modified files, lets you view a diff, stage, and commit — for everyday actions, no need to go back to the terminal for every git add/commit."
      },
      {
        "heading": "The indicators in the gutter",
        "text": "A colored bar appears in the left margin of lines modified, added, or removed compared to the last commit — an immediate visual cue of what changed in the open file, with no `git diff` to run."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to quickly see which lines of the open file have changed since the last commit, without typing a command. How do you do that?",
        "options": [
          "Look at the colored indicators in the editor's left margin",
          "Open a terminal and type git diff",
          "It's only visible in the Source Control panel",
          "It's not possible without an extension"
        ],
        "correctIndex": 0,
        "correction": "The colored indicators in the left margin immediately flag lines added/modified/removed compared to the last commit, with no command to type."
      }
    ]
  },
  "VS Code|Débogueur intégré : comprendre le principe": {
    "title": "The built-in debugger: understanding the principle",
    "summary": "Setting a breakpoint and stepping through, rather than guessing what's happening via print/console.log.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Adding console.log statements everywhere to understand where a bug happens works, but requires removing them afterward and only shows a frozen instant — the debugger lets you observe the program's state live, at the exact spot where it's stuck."
      },
      {
        "heading": "A breakpoint, to pause execution",
        "text": "`F9` on a line sets a breakpoint — when execution reaches it (`F5` to launch), the program pauses right there, with every variable visible in its current state."
      },
      {
        "heading": "Stepping through",
        "text": "Once paused, `F10` runs the current line without stepping into the functions it calls; `F11` instead steps into the function to follow it line by line, from the inside."
      },
      {
        "heading": "launch.json: how VS Code knows what to run",
        "text": "For a slightly specific project (arguments, environment variables), a .vscode/launch.json file specifies how to start debugging — generated automatically the first time the debugger is configured for a project type."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to observe the exact state of variables at the precise moment a bug happens, without adding then removing console.log statements. What do you do?",
        "options": [
          "Set a breakpoint (F9) at that spot then launch the debugger (F5)",
          "Add console.log statements everywhere in the file",
          "Reread the code without running it",
          "It's not possible without a third-party extension"
        ],
        "correctIndex": 0,
        "correction": "A breakpoint pauses the program exactly where wanted, with every variable visible in its real state — more reliable and faster than console.log statements to add then remove."
      }
    ]
  },
  "VS Code|settings.json vs interface graphique : la configuration en profondeur": {
    "title": "settings.json vs the graphical interface: in-depth configuration",
    "summary": "The same settings, reachable either through a graphical interface or a JSON file — each with its own advantages.",
    "content": [
      {
        "heading": "Two ways to reach the same settings",
        "text": "`Ctrl+,` opens the graphical settings interface, with search and descriptions. The same configuration exists as a JSON file (settings.json), reachable via the palette (`Preferences: Open User Settings (JSON)`)."
      },
      {
        "heading": "Why go through JSON despite the interface",
        "text": "Pasting a configuration found online (a block of settings for a specific language) is faster in JSON than searching for each setting one by one in the graphical interface."
      },
      {
        "heading": "User vs Workspace: two different scopes",
        "text": "\"User\" settings apply to every project opened with this account. \"Workspace\" settings (stored in .vscode/settings.json at the project root) only apply to THIS project, and take precedence over user settings."
      },
      {
        "heading": "Sharing team settings",
        "text": "Like `.vscode/extensions.json` for extensions, a .vscode/settings.json committed to Git lets a whole team share the same project settings (indent size, default formatter…) with no one having to configure them by hand."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want a setting (say, indent size) to apply only to this project, not to all your other projects. Where do you put it?",
        "options": [
          "In .vscode/settings.json, at the project root (workspace setting)",
          "In user settings (Ctrl+,)",
          "It always applies to every project, there's no way to target just one",
          "In a .env file"
        ],
        "correctIndex": 0,
        "correction": "Workspace settings (.vscode/settings.json) only apply to the current project and take precedence over user settings, which apply everywhere else."
      }
    ]
  },
  "VS Code|Personnaliser ses raccourcis : keybindings.json": {
    "title": "Customizing shortcuts: keybindings.json",
    "summary": "Changing, adding, or disabling a shortcut — useful when the habit comes from another editor, or a shortcut conflicts with something else.",
    "content": [
      {
        "heading": "Two ways to change a shortcut",
        "text": "The graphical interface (Preferences: Open Keyboard Shortcuts) lets you search for an action and assign it a new shortcut by clicking. The same thing exists in JSON (keybindings.json), faster for pasting a configuration or changing several at once."
      },
      {
        "heading": "\"when\": a shortcut active only in a specific context",
        "text": "Every shortcut can be limited to a context (\"when\": \"editorTextFocus\") — the same shortcut can thus do different things depending on whether you're in the editor, the terminal, or a file list."
      },
      {
        "heading": "Resolving a conflict with another application",
        "text": "If a VS Code shortcut conflicts with a system shortcut or another application's (often the case on Linux with certain window managers), reassigning it in keybindings.json resolves the conflict without touching the system's configuration."
      },
      {
        "heading": "Bringing back habits from another editor",
        "text": "Dedicated extensions (\"Vim\", or keybinding profiles for Sublime Text/Atom) reproduce a previous editor's shortcuts — an alternative to reconfiguring everything by hand."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "A VS Code shortcut conflicts with a shortcut already used by your operating system. How do you resolve it without touching the system's configuration?",
        "options": [
          "Reassign that shortcut in keybindings.json (via Preferences: Open Keyboard Shortcuts)",
          "Uninstall VS Code",
          "Change the operating system's shortcuts",
          "It's not possible, you have to live with the conflict"
        ],
        "correctIndex": 0,
        "correction": "Reassigning the shortcut on the VS Code side (keybindings.json) resolves the conflict without touching the system's configuration or the other application's."
      }
    ]
  },
  "VS Code|VS Code + Claude Code : la connexion entre les deux": {
    "title": "VS Code + Claude Code: the connection between the two",
    "summary": "What the extension actually changes once VS Code and Claude Code are connected — a practical summary of both sides.",
    "content": [
      {
        "heading": "The extension replaces nothing, it connects",
        "text": "Claude Code keeps running in the integrated terminal — the extension simply adds communication between that session and the editor around it, see [[Claude Code::Utiliser Claude Code dans VS Code / Cursor]] for the detail of what that changes."
      },
      {
        "heading": "Selected code as automatic context",
        "text": "Selecting a snippet in the editor before asking Claude Code a question avoids having to copy-paste it into the terminal — the editor and the session share that context automatically."
      },
      {
        "heading": "Proposed changes, as a diff in the editor",
        "text": "Rather than a block of plain text shown in the terminal, changes proposed by Claude Code show up as a real diff view in VS Code — the same kind of display as a classic Git review."
      },
      {
        "heading": "/ide to connect an already-open session",
        "text": "If Claude Code is running in a terminal separate from VS Code's integrated one, `/ide` (typed in the session) connects it to the open editor — see [[Claude Code::Installer l'extension dans VS Code ou Cursor]] for the extension's initial install."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You have a Claude Code session running in a separate terminal (not VS Code's integrated one), and want it to see the file open in the editor. What do you do?",
        "options": [
          "Type /ide in the Claude Code session to connect it to the open editor",
          "Close and relaunch VS Code",
          "Copy-paste the entire file into the terminal",
          "It's not possible, Claude Code has to be relaunched from the integrated terminal"
        ],
        "correctIndex": 0,
        "correction": "/ide connects an already-running Claude Code session (even one launched from a separate terminal) to the open editor, to share the active file and selection."
      }
    ]
  },
  "VS Code|Installer VS Code sur Windows ou Linux": {
    "title": "Installing VS Code on Windows or Linux",
    "summary": "A graphical installer, or a command line via the system's package manager — whichever fits the OS.",
    "content": [
      {
        "heading": "On Windows: the site's installer, the most common method",
        "text": "Most Windows users install their software by downloading the installer directly from `https://code.visualstudio.com/download` and following the wizard — no terminal or package manager needed for that."
      },
      {
        "heading": "On Windows: winget, the command-line alternative",
        "text": "`winget install Microsoft.VisualStudioCode` installs VS Code via Windows's official package manager, built in since Windows 10/11 — handy for scripting an install or setting up a machine without a browser. It's typed inside a terminal (PowerShell): see [[Bases du terminal::Ouvrir un terminal sur Windows ou Linux]] if it's not open yet."
      },
      {
        "heading": "On Linux: Snap, the simplest option",
        "text": "`sudo snap install --classic code` installs VS Code in one command on Ubuntu/Debian and Snap-compatible distributions, with automatic background updates — typed inside a terminal, like any command starting with sudo."
      },
      {
        "heading": "On Linux: the official apt repository, to stay within the apt ecosystem",
        "text": "Adding the Microsoft repository (GPG key + apt source, a one-time step) then lets you install and update VS Code with sudo apt install code, like any other system package."
      },
      {
        "heading": "Checking the install worked",
        "text": "`code --version` shows the installed version — typed in the same terminal, a quick check whichever install method was chosen (including after the graphical installer)."
      }
    ]
  },
  "Cursor|Cursor, à quoi ça sert et en quoi il diffère de VS Code": {
    "title": "Cursor: what it's for and how it differs from VS Code",
    "summary": "A VS Code fork with AI built natively into the editor, not bolted on afterward through an extension.",
    "content": [
      {
        "heading": "The same base as VS Code",
        "text": "Cursor reuses VS Code's interface, extension system, and most shortcuts — everything covered in the VS Code category works identically in Cursor, see [[VS Code::VS Code, à quoi ça sert et comment il s'organise]]."
      },
      {
        "heading": "Native AI rather than bolted on afterward",
        "text": "Unlike VS Code + the Claude Code extension (which connects an external tool to the editor), Cursor builds AI directly into its core — inline edit, chat, and advanced autocomplete are part of the editor itself, not a tool plugged into it."
      },
      {
        "heading": "What that actually changes",
        "text": "Cursor's AI features (`Ctrl+K`, `Ctrl+L`, Tab) are available with nothing more to install beyond the editor itself — no separate extension to connect, unlike Claude Code inside VS Code."
      },
      {
        "heading": "Not a full replacement for VS Code + extension",
        "text": "Both approaches remain valid: Cursor for an AI experience designed into the editor from the start, or VS Code/Cursor + the Claude Code extension to use Claude Code specifically from a VS Code-based editor, see [[Claude Code::Installer l'extension dans VS Code ou Cursor]]."
      }
    ]
  },
  "Cursor|Édition inline (Ctrl+K) : modifier du code sans ouvrir le chat": {
    "title": "Inline edit (Ctrl+K): changing code without opening chat",
    "summary": "Describing a change right where it needs to happen, without leaving the line of code in question.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Opening a chat, explaining where the code to change is, copy-pasting the suggested result — for a small, localized change, that detour is slower than it needs to be."
      },
      {
        "heading": "Ctrl+K, right where you are",
        "text": "Placing the cursor (or selecting a block) then pressing `Ctrl+K` opens a field right below to describe the wanted change — the change applies directly at that exact spot."
      },
      {
        "heading": "A question rather than a change",
        "text": "Alt+Enter from that same field asks a one-off question without touching the code — useful for understanding a line before deciding whether to change it."
      },
      {
        "heading": "When to prefer chat instead",
        "text": "For a change that touches several different spots in the file (or several files), chat or Agent mode fit better — inline edit stays designed for a localized change."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to change a single function, right where it is, without opening a whole chat panel. Which shortcut do you use?",
        "options": [
          "Ctrl+K, on the selected function or with the cursor on it",
          "Ctrl+L",
          "Ctrl+E",
          "Ctrl+Shift+P"
        ],
        "correctIndex": 0,
        "correction": "Ctrl+K opens inline edit right where you are — designed for a localized change, with no whole chat panel involved."
      }
    ]
  },
  "Cursor|Le chat et le mode Agent : deux façons de demander de l'aide": {
    "title": "Chat and Agent mode: two ways to ask for help",
    "summary": "Chat to discuss and understand, Agent to delegate a task that touches several files.",
    "content": [
      {
        "heading": "Ctrl+L: asking a question, with the file's context",
        "text": "Opens a chat panel that has access to the currently open file (and the selection, if text is selected) — for understanding code, asking for an explanation, or a simple change."
      },
      {
        "heading": "Agent mode: for a bigger task",
        "text": "Unlike chat, which mostly answers with text and one-off suggestions, Agent mode can explore several files, modify several in a row, and run commands — for a task that goes beyond a single file."
      },
      {
        "heading": "Ctrl+E for the dedicated layout",
        "text": "Switches to a full-screen layout designed for following a longer Agent task, with more room to see the files explored and changed."
      },
      {
        "heading": "The mode menu to choose explicitly",
        "text": "`Ctrl+.` shows the Agent / Plan / Ask menu — see [[Cursor::Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait]] for the detail of each."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want a task that will explore and modify several files in the project, not just answer a question. Which mode fits best?",
        "options": [
          "Agent mode",
          "Chat in question-answer mode only",
          "Inline edit (Ctrl+K)",
          "No mode can touch several files"
        ],
        "correctIndex": 0,
        "correction": "Agent mode is designed to explore and modify several files, unlike chat (mostly question-answer) or inline edit (localized to one exact spot)."
      }
    ]
  },
  "Cursor|Cursor Tab : l'autocomplétion qui devine plusieurs lignes": {
    "title": "Cursor Tab: autocomplete that guesses several lines ahead",
    "summary": "More than classic autocomplete: Cursor Tab anticipates whole blocks by taking the file's context into account.",
    "content": [
      {
        "heading": "Beyond classic autocomplete",
        "text": "Classic autocomplete mostly suggests a word or the end of a line, based on what's already been typed. Cursor Tab sometimes suggests whole lines, even several lines in a row, based on the rest of the file and recent changes."
      },
      {
        "heading": "Accepting all at once or word by word",
        "text": "Tab approves the entire suggestion shown. `Ctrl+→` only accepts the next word — useful when only the start of the suggestion matches what's wanted."
      },
      {
        "heading": "The suggestion can jump elsewhere",
        "text": "After a change, Cursor Tab can suggest a related change a bit further in the file (for example, the equivalent line in a similar function) — not just a continuation at the cursor."
      },
      {
        "heading": "A suggestion that doesn't fit: just keep typing",
        "text": "Ignoring the suggestion by typing normally simply makes it disappear — no explicit action is needed to reject it."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Cursor Tab suggests a multi-line completion, but only the first line actually fits. What do you do?",
        "options": [
          "Ctrl+→ to accept only the next word/the wanted part, rather than Tab to accept everything",
          "Accept with Tab then delete everything afterward",
          "Retype the line by hand without looking at the suggestion",
          "It's not possible to accept partially"
        ],
        "correctIndex": 0,
        "correction": "Ctrl+→ accepts the suggestion word by word rather than as a block — more precise than accepting everything with Tab and then deleting what doesn't fit."
      }
    ]
  },
  "Cursor|Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait": {
    "title": "Agent / Plan / Ask modes: staying in control of what the AI does",
    "summary": "Three levels of autonomy, from most cautious to most direct — the same principle seen elsewhere, with Cursor's own vocabulary.",
    "content": [
      {
        "heading": "Ask: read-only",
        "text": "Ask mode answers questions about the project without ever modifying a file or running a command — the most cautious of the three, suited for understanding before acting."
      },
      {
        "heading": "Plan: thinking before acting",
        "text": "Plan mode has a detailed approach proposed before any change, to be approved — see [[Claude Code::Les modes de permission : plan, auto-accept, manuel]] for the same principle on the Claude Code side, and [[Codex::Sandbox et approbations : le système de permissions de Codex]] on the Codex side."
      },
      {
        "heading": "Agent: the default mode, which acts",
        "text": "Agent mode explores, modifies, and runs commands to accomplish the requested task — the most direct of the three, the one used by default with no particular setting."
      },
      {
        "heading": "Switching modes along the way",
        "text": "`Ctrl+.` opens the mode menu at any time — nothing stops you from starting in Ask to understand, then switching to Agent once the approach is clear."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to first understand how a feature is implemented, without risking the slightest accidental change. Which mode do you choose?",
        "options": [
          "Ask, the read-only mode",
          "Agent, the default mode",
          "Plan",
          "No mode guarantees no changes"
        ],
        "correctIndex": 0,
        "correction": "Ask never modifies a file or runs a command — the mode best suited for understanding before acting, with zero risk of an accidental change."
      }
    ]
  },
  "Cursor|Cursor Rules : donner du contexte permanent au projet": {
    "title": "Cursor Rules: giving the project permanent context",
    "summary": "The Cursor-side equivalent of CLAUDE.md/AGENTS.md — with a more granular rule system, activated based on context.",
    "content": [
      {
        "heading": "The same problem, solved elsewhere too",
        "text": "Re-explaining project conventions in every conversation is repetitive — like CLAUDE.md for Claude Code or AGENTS.md for Codex, Cursor Rules remove that repetition."
      },
      {
        "heading": "Two possible formats",
        "text": "Either .mdc files inside .cursor/rules/ (with configuration metadata), or more simply a classic AGENTS.md at the project root — Cursor accepts both, see [[Codex::AGENTS.md : donner du contexte permanent à Codex]] for the same file on the Codex side."
      },
      {
        "heading": "A finer activation than \"always on\"",
        "text": "A rule can always apply, apply automatically based on the request's topic, apply only to certain files (by name pattern), or be invoked manually via @rule-name — more granular than a single file loaded in full every time."
      },
      {
        "heading": "User rules, beyond the project",
        "text": "Beyond per-project rules, global preferences (communication style, personal conventions) can be defined once and apply across every project."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want a rule to apply only when the agent works on test files, not the rest of the project. Is that possible with Cursor Rules?",
        "options": [
          "Yes, a rule can be limited to files matching a specific pattern",
          "No, a rule always applies to the entire project",
          "Only by duplicating the whole project",
          "Only via AGENTS.md, not .cursor/rules"
        ],
        "correctIndex": 0,
        "correction": "A rule can be limited to files matching a specific pattern (test files, for example) — far more granular than a uniform application across the whole project."
      }
    ]
  },
  "Cursor|cursor-agent : utiliser Cursor sans ouvrir l'éditeur": {
    "title": "cursor-agent: using Cursor without opening the editor",
    "summary": "The same agent, in a terminal — for scripting, automation, or working on a remote server with no graphical interface.",
    "content": [
      {
        "heading": "The problem it solves",
        "text": "Some contexts (a remote server over SSH, a CI pipeline, a script) have no graphical editor available — cursor-agent brings the same capabilities into a plain terminal."
      },
      {
        "heading": "agent, for an interactive session",
        "text": "Typed on its own, the agent command opens an interactive session in the terminal — the same principle as claude for Claude Code or codex for Codex, see [[Claude Code::Utiliser Claude Code dans un terminal : les premiers pas]]."
      },
      {
        "heading": "agent -p, for a one-off run",
        "text": "Print mode (-p) runs a task, shows the result, then quits — with no session to keep alive, handy for a script or automation."
      },
      {
        "heading": "The same modes as elsewhere, on the command line",
        "text": "--mode=plan and --mode=ask are available directly as flags, for the same control as inside the editor — see [[Cursor::Les modes Agent / Plan / Ask : garder la main sur ce que l'IA fait]]."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You want to run a Cursor task on a remote server connected over SSH, with no graphical interface available. Which tool do you use?",
        "options": [
          "cursor-agent, Cursor's CLI version",
          "It's not possible without a graphical interface",
          "Set up a remote desktop to open the graphical editor",
          "Cursor only works inside the editor"
        ],
        "correctIndex": 0,
        "correction": "cursor-agent brings the same capabilities as the editor into a plain terminal — no graphical interface needed, even on a remote server over SSH."
      }
    ]
  },
  "Cursor|Choisir le bon outil : Cursor, Claude Code ou Codex ?": {
    "title": "Choosing the right tool: Cursor, Claude Code, or Codex?",
    "summary": "Three coding agents, three slightly different philosophies — the same need can have a different answer depending on the tool.",
    "content": [
      {
        "heading": "A common base across all three",
        "text": "All three read and modify files, run commands, and can chain several actions to accomplish a task — see [[Claude Code::Claude Code, à quoi ça sert vraiment ?]] and [[Codex::Codex, à quoi ça sert et en quoi il diffère de Claude Code]] for the other two."
      },
      {
        "heading": "Cursor: AI designed into the editor from day one",
        "text": "For anyone working mostly in a graphical editor who wants AI built in natively (inline edit, advanced autocomplete), without juggling between a terminal and the editor."
      },
      {
        "heading": "Claude Code and Codex: terminal-first",
        "text": "Both run natively on the command line, with an optional extension to connect to an editor — for anyone who prefers driving from the terminal, or automating/scripting tasks."
      },
      {
        "heading": "Nothing stops you from combining all three",
        "text": "Nothing forces picking a single tool forever — using Cursor for everyday editing and Claude Code or Codex for a scripted task remains entirely possible, each with its strengths depending on the context."
      }
    ]
  },
  "Skills & Agents|claude-code-setup : configurer Claude Code pour ton projet": {
    "subcategory": "Agents",
    "title": "claude-code-setup: configuring Claude Code for your project",
    "summary": "Analyzes your project and suggests tailored automations (commands, agents, hooks) rather than configuring everything by hand.",
    "content": [
      {
        "heading": "What it does",
        "text": "This official Anthropic plugin analyzes your project's structure and recommends tailored Claude Code automations (custom commands, agents, hooks) suited to what you actually use, rather than generic defaults."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install claude-code-setup@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — claude-code-setup](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup)"
      }
    ]
  },
  "Skills & Agents|claude-md-management : entretenir son CLAUDE.md": {
    "subcategory": "Agents",
    "title": "claude-md-management: maintaining your CLAUDE.md",
    "summary": "Tools to maintain and improve a CLAUDE.md file, which tends to go stale or grow too long over time.",
    "content": [
      {
        "heading": "What it does",
        "text": "Helps keep a CLAUDE.md file up to date and relevant — spotting what's no longer true, what's missing, what could be trimmed — rather than letting the file degrade session after session, see [[Claude Code::CLAUDE.md : donner du contexte permanent à Claude]]."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install claude-md-management@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — claude-md-management](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management)"
      }
    ]
  },
  "Skills & Agents|skill-creator : créer ses propres skills": {
    "subcategory": "Agents",
    "title": "skill-creator: creating your own skills",
    "summary": "Create a new skill, improve an existing one, or measure its performance — the official tool for going beyond the skills already available.",
    "content": [
      {
        "heading": "What it does",
        "text": "Guides you through creating a skill from scratch, improving an existing one, or evaluating its performance (tests, benchmarks) — useful as soon as a recurring need isn't covered by any existing skill, see [[Claude Code::Skills : des instructions prêtes à l'emploi]] for the general principle."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install skill-creator@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — skill-creator](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/skill-creator)"
      }
    ]
  },
  "Skills & Agents|code-review : revue de code automatisée multi-agents": {
    "subcategory": "Agents",
    "title": "code-review: automated multi-agent code review",
    "summary": "Several specialized agents review a Pull Request from different angles, rather than a single generic pass.",
    "content": [
      {
        "heading": "What it does",
        "text": "Runs an automated code review on a Pull Request using several specialized agents, each looking at a different aspect — a complement to a human review, not a replacement."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install code-review@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — code-review](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review)"
      }
    ]
  },
  "Skills & Agents|pr-review-toolkit : une boîte à outils de revue plus détaillée": {
    "subcategory": "Agents",
    "title": "pr-review-toolkit: a more detailed review toolkit",
    "summary": "Agents each dedicated to one specific aspect of a review: comments, tests, error handling, type design, quality, simplification.",
    "content": [
      {
        "heading": "What it does",
        "text": "Bundles specialized review agents, each focused on one specific aspect (comments, test coverage, error handling, type design, overall quality, simplification) — more granular than a single generic review."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install pr-review-toolkit@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — pr-review-toolkit](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit)"
      }
    ]
  },
  "Skills & Agents|code-simplifier : clarifier du code existant": {
    "subcategory": "Agents",
    "title": "code-simplifier: clarifying existing code",
    "summary": "An agent dedicated to simplifying and clarifying already-written code, for readability and consistency rather than adding features.",
    "content": [
      {
        "heading": "What it does",
        "text": "Focuses on the clarity, consistency, and maintainability of already-working code — not to add features, but to make the existing codebase simpler to read and evolve afterward."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install code-simplifier@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — code-simplifier](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-simplifier)"
      }
    ]
  },
  "Skills & Agents|claude-security : scanner les vulnérabilités de son code": {
    "subcategory": "Agents",
    "title": "claude-security: scanning your code for vulnerabilities",
    "summary": "An in-depth security scan that runs entirely inside your Claude Code session, with no code sent to a separate third-party service.",
    "content": [
      {
        "heading": "What it does",
        "text": "Runs an in-depth vulnerability scan on your own code, directly inside the current Claude Code session — handy for a first security pass before a more formal review."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install claude-security@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — claude-security](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security)"
      }
    ]
  },
  "Skills & Agents|commit-commands : des commandes pour le workflow Git": {
    "subcategory": "Agents",
    "title": "commit-commands: commands for the Git workflow",
    "summary": "Ready-made commands for the commit / push / Pull Request cycle, with no need to re-explain the context every time.",
    "content": [
      {
        "heading": "What it does",
        "text": "Provides custom commands for the everyday git workflow (commit, push, opening a Pull Request) — see [[Git::Le workflow du quotidien]] for the same cycle explained in detail."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install commit-commands@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — commit-commands](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands)"
      }
    ]
  },
  "Skills & Agents|feature-dev : un workflow complet pour développer une fonctionnalité": {
    "subcategory": "Agents",
    "title": "feature-dev: a complete workflow for building a feature",
    "summary": "Several specialized agents split up the steps of a full feature, rather than one conversation doing everything at once.",
    "content": [
      {
        "heading": "What it does",
        "text": "Structures feature development around specialized agents for its different steps — useful for a task big enough to benefit from being broken down rather than handled as one block."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install feature-dev@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — feature-dev](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev)"
      }
    ]
  },
  "Skills & Agents|session-report : résumer une session de travail": {
    "subcategory": "Agents",
    "title": "session-report: summarizing a work session",
    "summary": "Generates a report of what happened during a session — handy for picking up the thread later or briefing a team.",
    "content": [
      {
        "heading": "What it does",
        "text": "Produces a structured summary of a Claude Code session (what was done, decisions made) — useful for yourself when resuming later, see [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]], or to brief a team without retracing everything by hand."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install session-report@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — session-report](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/session-report)"
      }
    ]
  },
  "Skills & Agents|frontend-design : des interfaces qui sortent du lot": {
    "subcategory": "Agents",
    "title": "frontend-design: interfaces that stand out",
    "summary": "Aims for polished, distinctive interfaces, rather than the generic look often associated with AI-generated interfaces.",
    "content": [
      {
        "heading": "What it does",
        "text": "Helps produce polished, distinctive frontend interfaces, with the explicit goal of avoiding the generic aesthetic often associated with AI-generated code."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install frontend-design@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — frontend-design](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design)"
      }
    ]
  },
  "Skills & Agents|document-skills : créer et modifier des documents Office": {
    "subcategory": "Skills",
    "title": "document-skills: creating and editing Office documents",
    "summary": "An official Anthropic pack for generating and editing Word, PDF, PowerPoint, and Excel files directly from Claude Code.",
    "content": [
      {
        "heading": "What it does",
        "text": "Bundles the official skills for creating and editing .docx, .pdf, .pptx, and .xlsx files — useful as soon as a task calls for an office document deliverable rather than code."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/skills` then `/plugin install document-skills@anthropic-agent-skills`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/skills](https://github.com/anthropics/skills)"
      }
    ]
  },
  "Skills & Agents|example-skills : le pack d'exemples officiel": {
    "subcategory": "Skills",
    "title": "example-skills: the official example pack",
    "summary": "An official pack bundling several demo skills — generative art, design, web artifacts, app testing, MCP server creation...",
    "content": [
      {
        "heading": "What it does",
        "text": "Bundles several official demo skills into one pack: art generation (algorithmic-art), visual design (canvas-design), building complex web artifacts (web-artifacts-builder), testing web apps (webapp-testing), help building MCP servers (mcp-builder), and a few others."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/skills` then `/plugin install example-skills@anthropic-agent-skills`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/skills](https://github.com/anthropics/skills)"
      }
    ]
  },
  "Skills & Agents|expo : les skills officiels pour Expo / React Native": {
    "subcategory": "Skills",
    "title": "expo: the official skills for Expo / React Native",
    "summary": "Maintained directly by the Expo team — covers developing, deploying, and debugging an Expo app, from routing to the stores.",
    "content": [
      {
        "heading": "What it does",
        "text": "Covers development with Expo Router, SwiftUI and Jetpack Compose components, Tailwind CSS setup, API routes, data fetching, CI/CD workflows, App Store and Play Store deployment, SDK upgrades, and dev client distribution — see [[Expo / React Native::Dev, Build, Submit, Update : qui fait quoi ?]] for the general context."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install expo@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[expo/skills](https://github.com/expo/skills)"
      }
    ]
  },
  "Skills & Agents|kotlin-lsp : intelligence de code pour Kotlin": {
    "subcategory": "Agents",
    "title": "kotlin-lsp: code intelligence for Kotlin",
    "summary": "Connects Claude Code to the Kotlin language server — more precise navigation, autocomplete, and diagnostics.",
    "content": [
      {
        "heading": "What it does",
        "text": "Wires a real Kotlin language server into Claude Code, for a more precise understanding of the code (jump to definition, error diagnostics) than a plain text read of files — useful on a substantial [[Kotlin / Android::Gradle, le chef d'orchestre de ton build]] project."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install kotlin-lsp@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — kotlin-lsp](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/kotlin-lsp)"
      }
    ]
  },
  "Skills & Agents|github : gérer GitHub directement depuis Claude Code": {
    "subcategory": "Agents",
    "title": "github: managing GitHub directly from Claude Code",
    "summary": "GitHub's official MCP server — create issues, manage Pull Requests, search repositories, without leaving the session.",
    "content": [
      {
        "heading": "What it does",
        "text": "Connects Claude Code to the GitHub API via an official MCP server — create an issue, manage a Pull Request, review code, search repositories, directly from the session, see [[Claude Code::MCP : connecter Claude à d'autres outils]] for the general principle behind MCP."
      },
      {
        "heading": "How to install it",
        "text": "`/plugin marketplace add anthropics/claude-plugins-official` then `/plugin install github@claude-plugins-official`."
      },
      {
        "heading": "The repository",
        "text": "[anthropics/claude-plugins-official — github](https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/github)"
      }
    ]
  },
  "Cursor|Installer Cursor sur Windows ou Linux": {
    "title": "Installing Cursor on Windows or Linux",
    "summary": "The graphical editor and the command-line agent (cursor-agent) install separately, each its own way.",
    "content": [
      {
        "heading": "The editor on Windows: the site's installer, the most common method",
        "text": "Most Windows users download the installer directly from `https://cursor.com/download` and follow the wizard — no terminal needed for that. `winget install --id=Anysphere.Cursor -e` installs the editor via Windows's package manager (typed inside PowerShell, see [[Bases du terminal::Ouvrir un terminal sur Windows ou Linux]]), a command-line alternative handy for scripting an install."
      },
      {
        "heading": "The editor on Linux: the AppImage",
        "text": "Cursor is distributed on Linux as an AppImage: download it, make it executable (chmod +x), then run it directly, from a terminal — no install in the classic sense, just a file to run. On Debian/Ubuntu, libfuse2 is sometimes needed first if launching fails."
      },
      {
        "heading": "cursor-agent: a second tool to install separately, in a terminal",
        "text": "The command-line agent (cursor-agent) isn't bundled with the editor — it installs separately via an official script pasted into a terminal, different per OS: curl ... | bash on Mac/Linux, a PowerShell command on Windows, see [[Cursor::cursor-agent : utiliser Cursor sans ouvrir l'éditeur]]."
      },
      {
        "heading": "Checking everything is in place",
        "text": "`cursor-agent --version` confirms the CLI agent is properly installed and reachable, independently of the graphical editor."
      }
    ]
  },
  "FAQ : questions fréquentes|Claude Code, Codex ou Cursor : lequel choisir pour commencer ?": {
    "title": "Claude Code, Codex, or Cursor: which one to start with?",
    "summary": "All three do roughly the same thing — the choice mostly comes down to where you prefer to work.",
    "content": [
      {
        "heading": "If you prefer a graphical editor",
        "text": "Cursor builds AI natively into the editor — the most direct choice if you don't want to juggle between a terminal and your editor, see [[Cursor::Cursor, à quoi ça sert et en quoi il diffère de VS Code]]."
      },
      {
        "heading": "If you prefer the terminal",
        "text": "Claude Code and Codex both run natively on the command line, with an optional extension to connect to an editor afterward — see [[Cursor::Choisir le bon outil : Cursor, Claude Code ou Codex ?]] for a more detailed comparison of the three."
      },
      {
        "heading": "The model behind it matters too",
        "text": "Claude Code uses Anthropic's models (Claude), Codex uses OpenAI's (GPT), Cursor generally lets you pick among several — if you already have a model preference or an existing subscription, that can settle the choice."
      },
      {
        "heading": "Nothing stops you from trying all three",
        "text": "All three install in a few minutes and can coexist on the same machine — the simplest approach is often to try each on a small task before settling on one."
      }
    ]
  },
  "FAQ : questions fréquentes|Faut-il être un développeur expérimenté pour utiliser ces outils ?": {
    "title": "Do you need to be an experienced developer to use these tools?",
    "summary": "No, but understanding the basics (terminal, Git) helps a lot with understanding what's happening.",
    "content": [
      {
        "heading": "These tools don't replace understanding the code",
        "text": "Claude Code, Codex, and Cursor can write code for you, but reading and understanding what was done is still necessary to spot a mistake or make an informed choice."
      },
      {
        "heading": "Terminal basics help a lot",
        "text": "Knowing how to open a terminal, read a command, understand folders — see [[Bases du terminal::Ouvrir un terminal sur Windows ou Linux]] — makes the experience much smoother, even if it's not strictly required."
      },
      {
        "heading": "Start small",
        "text": "On a first project, prefer a precise, checkable task over a broad request — see [[Claude Code::Bien démarrer un nouveau projet]] for the same idea detailed on the Claude Code side."
      }
    ]
  },
  "FAQ : questions fréquentes|Est-ce risqué de laisser un agent IA modifier mes fichiers ?": {
    "title": "Is it risky to let an AI agent modify your files?",
    "summary": "By default, these tools ask for confirmation before every action that changes something — the risk stays under control as long as that safeguard isn't disabled.",
    "content": [
      {
        "heading": "The default confirmation, the real safety net",
        "text": "Claude Code, Codex, and Cursor all ask for confirmation by default before writing a file or running a command — nothing happens without explicit approval, unless that setting is deliberately turned off."
      },
      {
        "heading": "\"Allow everything\" modes exist, but should be reserved",
        "text": "Options like `--dangerously-skip-permissions` (Claude Code) or `--yolo` (Codex) disable those confirmations — only to be used in an isolated, disposable environment (container, CI), never on a machine with important data."
      },
      {
        "heading": "A Git repository is an extra safety net",
        "text": "Working in a project under Git version control lets you roll back if a change doesn't work out — see [[Git::Annuler une erreur sans paniquer]]."
      },
      {
        "heading": "Checking before approving a substantial change",
        "text": "For a task that touches many files, starting in plan mode lets you see the approach before anything gets modified — see [[Claude Code::Les modes de permission : plan, auto-accept, manuel]]."
      }
    ]
  },
  "FAQ : questions fréquentes|Ces outils fonctionnent-ils sans connexion internet ?": {
    "title": "Do these tools work without an internet connection?",
    "summary": "No, with one exception — they send your requests to a model hosted online, so an active connection is needed.",
    "content": [
      {
        "heading": "A connection is needed in the vast majority of cases",
        "text": "Claude Code, Codex, and Cursor send every request to a model hosted on Anthropic's/OpenAI's/Cursor's servers — with no internet connection, nothing works."
      },
      {
        "heading": "The exception: local models",
        "text": "Codex offers an option to use a model running locally (via Ollama or LM Studio) instead of the online API — see [[Codex::Configuration avancée de Codex : profils, modèles locaux, MCP]] — but that's an advanced setup, not the default behavior."
      },
      {
        "heading": "A disconnection mid-task",
        "text": "If the connection drops mid-task, the current command simply fails — resuming the session once the connection is back is usually enough, see [[Claude Code::Sessions : continuer, reprendre, repartir de zéro]]."
      }
    ]
  },
  "FAQ : questions fréquentes|Quelle est la différence entre le chat web (claude.ai, chatgpt.com) et ces outils ?": {
    "title": "What's the difference between the web chat (claude.ai, chatgpt.com) and these tools?",
    "summary": "The web chat replies to messages with no access to your files — these tools read, modify, and run things directly inside your project.",
    "content": [
      {
        "heading": "The web chat: manual copy-paste",
        "text": "On claude.ai or chatgpt.com, you have to paste your code into the conversation, and copy the answer back into your files yourself — no direct access to the project."
      },
      {
        "heading": "These tools: direct access to the project",
        "text": "Claude Code, Codex, and Cursor directly read and modify the project's files, run commands, and can chain several actions to accomplish a task — see [[Claude Code::Claude Code, à quoi ça sert vraiment ?]] for the detail of what that changes."
      },
      {
        "heading": "The same model, a different use",
        "text": "The AI model behind it can be the same as the web chat's — the difference is in the direct access to the filesystem and terminal, not in the model's intelligence itself."
      }
    ]
  },
  "FAQ : erreurs fréquentes|npm install -g : \"EACCES: permission denied\"": {
    "title": "npm install -g: \"EACCES: permission denied\"",
    "summary": "A very classic permissions error when npm tries to install a global package without rights on the configured folder.",
    "content": [
      {
        "heading": "Why it happens",
        "text": "By default on some systems, the folder where npm installs global packages (often /usr/lib or /usr/local) is owned by the root user — a plain `npm install -g` doesn't have write access there."
      },
      {
        "heading": "The wrong fix: sudo in front of npm",
        "text": "Adding sudo in front of npm install -g works, but can create files owned by root inside a folder used afterward without sudo — a source of new permission problems later on."
      },
      {
        "heading": "The right fix: changing npm's global folder",
        "text": "Configuring npm to install global packages into a folder owned by the user (`npm config set prefix ~/.npm-global`, then adding that folder to PATH) fixes the problem once and for all, with no more need for sudo on an npm install -g."
      }
    ],
    "exercises": [
      {
        "type": "terminal",
        "instruction": "Configure npm to install its global packages into a folder you own, at ~/.npm-global.",
        "terminal": {
          "prompt": "user@mint:~$",
          "steps": [
            { "expect": ["npm config set prefix ~/.npm-global"], "output": "(future npm install -g runs will install into ~/.npm-global, with no need for sudo)" }
          ]
        },
        "correction": "npm config set prefix ~/.npm-global changes npm's global install folder once and for all to one owned by the user — no more sudo needed, and no more risk of root-owned files blocking future installs."
      }
    ]
  },
  "FAQ : erreurs fréquentes|\"claude\"/\"codex\"/\"code\" : command not found juste après l'installation": {
    "title": "\"claude\"/\"codex\"/\"code\": command not found right after installing",
    "summary": "The install succeeded, but the terminal doesn't know the command yet — a PATH issue, not an install failure.",
    "content": [
      {
        "heading": "It's (often) not a failed install",
        "text": "If the install finished with no error but the command isn't recognized right after, the program is probably installed fine — it's the already-open terminal that hasn't reloaded the updated PATH yet."
      },
      {
        "heading": "The simplest reflex: close and reopen the terminal",
        "text": "A new terminal window reloads the current PATH — in most cases, that alone fixes the problem with nothing to reconfigure."
      },
      {
        "heading": "If it persists: check where the program was installed",
        "text": "which command-name (Linux) or Get-Command command-name (Windows) confirms whether the program can be found — see [[Bases du terminal::Variables d'environnement et PATH]] to understand why PATH determines that."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "You just installed Claude Code, but the claude command isn't recognized. What's the simplest thing to try first?",
        "options": [
          "Close and reopen the terminal",
          "Reinstall the operating system",
          "Wait 24 hours",
          "It can't be fixed"
        ],
        "correctIndex": 0,
        "correction": "A terminal already open before the install has no knowledge of the updated PATH — a new window reloads it, and fixes the problem in most cases."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Windows : \"... n'est pas reconnu en tant que commande interne\"": {
    "title": "Windows: \"... is not recognized as an internal or external command\"",
    "summary": "The Windows equivalent of \"command not found\" — same cause, same reflexes.",
    "content": [
      {
        "heading": "The same principle as on Linux",
        "text": "This message means PowerShell (or cmd) couldn't find any program by that name in its PATH — see [[Windows::PowerShell vs invite de commandes (cmd) : lequel utiliser]]."
      },
      {
        "heading": "Check the spelling first",
        "text": "A typo remains the most common cause — double-check the command's exact name before looking further."
      },
      {
        "heading": "Reopen the terminal after a recent install",
        "text": "Just like on Linux, a terminal already open before a program's install has no knowledge of the updated PATH — closing and reopening PowerShell often fixes it."
      },
      {
        "heading": "Check the program is actually installed",
        "text": "`Get-Command command-name` confirms whether PowerShell can locate it — otherwise the program probably isn't installed, or isn't on the PATH."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "PowerShell shows \"... is not recognized\" for a command you installed 2 minutes ago. What's the first thing to try?",
        "options": [
          "Close and reopen PowerShell",
          "Reinstall Windows",
          "Switch user accounts",
          "This message means the command doesn't exist and never will"
        ],
        "correctIndex": 0,
        "correction": "Just like on Linux, a terminal already open before the install has no knowledge of the updated PATH — reopening PowerShell reloads it and fixes the problem in most cases."
      }
    ]
  },
  "FAQ : erreurs fréquentes|Claude Code / Codex / Cursor : erreur d'authentification ou session expirée": {
    "title": "Claude Code / Codex / Cursor: authentication error or expired session",
    "summary": "An account connection issue, not a bug in the tool itself — logging back in almost always fixes it.",
    "content": [
      {
        "heading": "An expiring session is normal",
        "text": "Like any online service, authentication can expire after some time or a password change — it's not a sign of a problem with the tool."
      },
      {
        "heading": "Logging back in, the fix for almost everything",
        "text": "`/login` inside Claude Code, `codex login` for Codex, or Cursor's sign-in prompt restart the authentication process from scratch."
      },
      {
        "heading": "Checking status before reinstalling everything",
        "text": "`codex login status` confirms whether Codex is properly authenticated — a quick check before looking further."
      },
      {
        "heading": "If the problem persists after logging back in",
        "text": "Check that the subscription/account used is actually active, and that the machine's system clock is correct — a clock mismatch can sometimes make authentication fail."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Codex rejects your commands with an authentication error, even though it worked yesterday. What do you try first?",
        "options": [
          "codex login to sign back in",
          "Fully reinstall Codex",
          "Switch to a different computer",
          "Wait for it to resolve on its own without doing anything"
        ],
        "correctIndex": 0,
        "correction": "An expired session is fixed by logging back in (codex login) — no need to reinstall anything, the problem is on the authentication side, not the installation."
      }
    ]
  },
  "FAQ : erreurs fréquentes|VS Code / Cursor : l'extension Claude Code ne détecte pas ma session": {
    "title": "VS Code / Cursor: the Claude Code extension doesn't detect my session",
    "summary": "The session is running in a terminal outside the editor — a connection issue, not a configuration one.",
    "content": [
      {
        "heading": "The most common case: an external terminal",
        "text": "If Claude Code was launched from a separate terminal (not the editor's integrated one), the extension doesn't see it automatically."
      },
      {
        "heading": "The command that fixes it: /ide",
        "text": "Typed inside the already-running Claude Code session, /ide connects it to the open editor — see [[Claude Code::Utiliser Claude Code dans VS Code / Cursor]]."
      },
      {
        "heading": "Starting over from the integrated terminal, the alternative",
        "text": "Closing the session and launching a new one directly from the editor's integrated terminal (Ctrl+\\`) avoids the problem from the start."
      }
    ],
    "exercises": [
      {
        "type": "quiz",
        "instruction": "Your Claude Code session is running in an external terminal, and the editor detects nothing. How do you connect them without relaunching everything?",
        "options": [
          "Type /ide inside the already-open Claude Code session",
          "Reinstall the extension",
          "It's not possible, everything has to be relaunched",
          "Restart the computer"
        ],
        "correctIndex": 0,
        "correction": "/ide connects an already-running Claude Code session to the open editor, even one launched from a separate terminal — no need to relaunch anything."
      }
    ]
  }
};
