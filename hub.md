# Command Hub

Site bilingue (FR/EN) de référence : commandes à copier-coller + fiches de formation, pour Linux, Windows, Git, Kotlin/Android, Expo/React Native, Claude Code, Codex, VS Code, Cursor. Site statique, aucun backend.

- **Repo** : `git@github.com:yesman-plg/commande-hub.git` (branche `master`)
- **En ligne** : https://yesman-plg.github.io/commande-hub/ — redéploie automatiquement à chaque push sur `master` (GitHub Pages, ~1-2 min de délai, cache navigateur/CDN ~10 min)

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'appli (HTML + CSS + JS inline). Charge les 4 fichiers de données via `<script src>`. |
| `commands.js` | Données des commandes (FR, source canonique). `const COMMANDS = [...]`. |
| `commands.en.js` | Traductions EN des commandes. Ne traduit QUE `title`/`desc`/`tags` — jamais `cmd`. Clé : `"Catégorie|Sous-catégorie|Titre"` (chaîne FR exacte). |
| `guides.js` | Données des fiches Formation (FR, source canonique). `const GUIDES = [...]`. |
| `guides.en.js` | Traductions EN des fiches. Objet clé `"Catégorie|Titre"` → `{title, summary, content, exercises}`. |
| `share.html` | Version autonome (tout inliné) générée depuis `index.html` + les 4 fichiers de données, pour publier en artifact partageable. **Ne jamais éditer à la main** — régénérée par `build-share.sh`. |
| `save.sh` | `git add -A && git commit && git push`. Message auto-horodaté si aucun argument. |
| `serve.sh` | Sert le dossier sur le réseau local (port 8090), pour tester depuis un téléphone. |
| `build-share.sh` | Régénère `share.html`. À lancer après **toute** modif de `index.html`/`commands*.js`/`guides*.js`. |

## Modèle de données — Commandes (`commands.js`)

```js
{
  category: "Windows",              // devient un chip de filtre + un onglet de groupe
  subcategory: "Installation",      // optionnel — sous-filtre si ≥2 par catégorie
  title: "Installer sur Windows (winget)",
  cmd: "winget install ...",        // JAMAIS traduit — texte affiché tel quel, copiable
  desc: "...",
  tags: ["windows", "install", "winget"],
  related: "Windows::PowerShell vs invite de commandes (cmd) : lequel utiliser"  // optionnel, lien vers une fiche Formation
}
```

## Modèle de données — Fiches Formation (`guides.js`)

```js
{
  category: "Claude Code",
  title: "...",
  level: "🟢 Débutant",   // "🟢 Débutant" | "🟡 Intermédiaire" | "🔴 Avancé" | ABSENT
  summary: "...",          // 1-2 phrases, toujours visible
  content: [{ heading: "...", text: "..." }],
  exercises: [...]         // OPTIONNEL — voir règle ci-dessous
}
```

**`level` absent** → la fiche sort du classement vert/jaune/rouge et doit avoir un `subcategory` à la place (ex. catégorie *Skills & Agents* : `subcategory: "Skills"` ou `"Agents"`, chips de sous-catégorie au lieu du point de couleur). Voir `subcategoriesFor()` / `renderGuideSubchips()` / `renderGuideResults()` dans `index.html`.

**Exercices** : uniquement quand ils testent vraiment quelque chose d'actionnable (une commande, une décision). **Pas** d'exercice pour les fiches comparatives/philosophiques ("X, à quoi ça sert", "Choisir le bon outil/agent") ni les fiches d'installation/tuto pur (procédure à suivre une fois). Une fiche sans exercice ne montre simplement pas l'étape "Exercices" — aucun message de substitution.

## Syntaxe dans `content[].text`

Seul `content[].text` passe par `renderGuideParagraph()` — les autres champs (`heading`, `summary`, `instruction`, `correction`, `options`) sont en texte brut, ne PAS y mettre cette syntaxe.

- `[[Catégorie::Titre exact FR]]` → lien vers une autre fiche Formation (le libellé affiché se traduit automatiquement si la fiche cible a une traduction EN).
- `` `commande exacte` `` → stylé comme dans Commandes ; devient un lien cliquable **automatiquement** si le texte correspond exactement au champ `cmd` d'une commande existante (`COMMAND_BY_CMD`), sinon reste juste stylé. Ne jamais forcer de lien manuellement — la correspondance est automatique et exacte (sensible à la casse/espaces).
- `[texte](https://...)` → vrai lien externe cliquable (nouvel onglet). Uniquement pour des ressources externes réelles (dépôts GitHub, etc.), jamais pour des liens internes.

⚠️ Piège connu : une commande contenant elle-même un backtick (ex. `` Ctrl+` ``) casse l'enveloppement — laisser ce cas précis en texte brut, pas de solution automatique.

## Groupes (Application / Système / Développement)

Définis dans `index.html` : `CATEGORY_TO_GROUP` (mapping catégorie → groupe) et `CATEGORY_GROUPS_ORDER`. Toute nouvelle catégorie doit être ajoutée à ce mapping (sinon retombe sur "Développement" par défaut) + à `CATEGORY_LABELS` pour sa traduction EN si le nom n'est pas déjà identique en anglais.

**Ordre des catégories** : les fichiers `commands.js`/`guides.js` sont physiquement regroupés par groupe (Application, puis Système, puis Développement), dans cet ordre — l'ordre d'apparition dans le tableau détermine l'ordre d'affichage des chips et des cartes. Dans chaque catégorie outil (Claude Code, Codex, VS Code, Cursor...), la sous-catégorie **Installation passe en premier**. Les catégories `FAQ : questions fréquentes` puis `FAQ : erreurs fréquentes` restent toujours **en tout dernier**.

## Workflow de modification

1. Éditer `commands.js`/`guides.js` (FR) **et** `commands.en.js`/`guides.en.js` (EN) — toujours les deux, jamais l'un sans l'autre.
2. Valider avant de continuer :
   ```bash
   node -c commands.js && node -c commands.en.js && node -c guides.js && node -c guides.en.js
   ```
3. Vérifier les liens croisés `[[...]]`, la parité FR/EN, et que les commandes citées entre backticks résolvent bien (scripts Node ad hoc utilisés tout au long du projet — charger les fichiers via `new Function('module','exports', src+...)`, jamais de vrai `require` car ce sont des scripts navigateur, pas des modules).
4. `./build-share.sh` pour régénérer `share.html`.
5. `./save.sh` pour commit + push (déploiement auto sur GitHub Pages).

Ne jamais annoncer une sauvegarde faite tant que `save.sh` n'a pas réellement tourné.

## Réordonner en masse

Pour déplacer des blocs entiers (catégories, sous-catégories) dans `commands.js`/`guides.js` sans tout réécrire à la main : script Node avec un scanner d'accolades/crochets **conscient des chaînes** (ignore les `{`/`}` à l'intérieur des `"..."`, gère l'échappement `\"`) pour retrouver les bornes exactes de chaque objet, puis réassembler dans le nouvel ordre. Toujours vérifier après coup que le contenu (hors ordre) est strictement identique à l'ancienne version (comparaison de clés triées).

## Ton du contenu

Fiches rédigées en français, tutoiement, style direct et concis. Les commandes/exemples utilisent des placeholders explicites (`nom-du-service`, `<PID>`). Éviter le remplissage — chaque phrase doit apporter une info, pas paraphraser le titre.
