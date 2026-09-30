# Design QA — navigation latérale de Command Hub

## Evidence

- Source visuelle : `/home/evan/.codex/generated_images/01a0f1ca-48c6-7731-aef8-c43624cf77c2/exec-9e908528-283a-4205-89fd-f8d534c02a43.png` (1487 × 1058 px).
- Implémentation desktop : `/tmp/cmd-hub-sidebar-1440-final.png` (1440 × 1024 px, viewport Firefox 1440 × 1024 CSS px, densité 1).
- Implémentation mobile : `/tmp/cmd-hub-sidebar-mobile-final.png` (390 × 844 px, viewport Firefox 390 × 844 CSS px, densité 1).
- Comparaison complète : `/tmp/cmd-hub-sidebar-comparison-full.png` ; comparaison ciblée des onglets et des lignes : `/tmp/cmd-hub-sidebar-comparison-content.png`.
- Normalisation : source ramenée à 1440 × 1024 px avant comparaison ; le cadrage ciblé couvre `x=340..1400, y=240..905` dans les deux captures.
- État comparé : français, thème clair, Formation → Développement → Git, première fiche mise en avant. Les titres et descriptions viennent des données réelles du site.

## Findings

Aucun écart P0, P1 ou P2 restant. La largeur de la barre latérale, l’ordre des grandes zones, le titre, les onglets, les sections de fiches, les séparateurs, les niveaux et l’action principale suivent la maquette.

- **P3 — Résumé de la première fiche** : il est tronqué en fin de ligne afin de laisser la place au bouton « Ouvrir la fiche ». Le texte complet reste disponible dans la fiche.
- **P3 — Contrôle du thème** : le site conserve son cycle Auto / Clair / Sombre en texte, alors que l’image montre des pictogrammes soleil/lune.

## Fidelity surfaces

- **Typography** : police système sans empattement, tailles et contraste proches de la référence ; le titre et les lignes restent lisibles à 1440 px et 390 px. Une police exactement identique à celle de l’image générée n’est pas identifiable.
- **Spacing and layout rhythm** : colonne gauche de 308 px, zone de lecture fluide, espaces verticaux et lignes de séparation comparés sur la capture complète et la région ciblée. Sur mobile, les groupes deviennent compacts et les catégories défilent horizontalement.
- **Colors and tokens** : fond blanc/gris, texte foncé et accent violet `#6d5efc` repris du site existant ; les niveaux gardent leurs couleurs sémantiques.
- **Image quality and assets** : aucune illustration ni photo dans la maquette. Les icônes viennent de la bibliothèque Phosphor (licence conservée dans `assets/icons/LICENSE-phosphor.txt`) ; la version autonome intègre les neuf SVG comme données locales.
- **Copy and content** : les fiches Git, les catégories et les compteurs sont ceux de Command Hub. Les titres fictifs de l’image de concept n’ont pas remplacé les données du site.

## Interaction checks

Capture des vérifications Firefox : `/tmp/cmd-hub-sidebar-interactions.png`. Les dix contrôles passent : ouverture initiale de Git, choix d’une catégorie, mode Commandes, recherche transversale, liste des commandes Git, favori, ouverture et fermeture d’une fiche, langue et thème. La vue Commandes a été capturée dans `/tmp/cmd-hub-sidebar-commands.png`. La syntaxe du JavaScript est valide et `git diff --check` ne signale rien. Firefox headless n’a affiché aucune exception pendant les captures ; sa console complète n’a pas été exportée.

## Comparison history

1. `/tmp/cmd-hub-sidebar-1440.png` : filtres dans la zone de lecture et absence d’icônes ; déplacement des filtres vers la colonne gauche et ajout d’icônes Phosphor.
2. `/tmp/cmd-hub-sidebar-1440-v2.png` : titres de sections trop rapprochés et résumé chevauchant l’action ; ajout des sous-titres de sections, regroupement des fiches réelles et limitation du résumé mis en avant.
3. `/tmp/cmd-hub-sidebar-mobile.png` : navigation trop haute sur mobile ; passage à des groupes compacts et à des catégories défilantes. Vérifié dans `/tmp/cmd-hub-sidebar-mobile-final.png`.
4. `/tmp/cmd-hub-sidebar-1440-final.png` : contrôle final, aucun P0/P1/P2.

## Implementation checklist

- [x] Navigation latérale par groupes et catégories avec état actif.
- [x] Fiches et commandes conservées, recherche, favoris, langue et thème fonctionnels.
- [x] Vue responsive et icônes locales.
- [x] `share.html` autonome régénéré avec les icônes intégrées.

final result: passed
