# Design QA — filtres hiérarchiques

## Comparaison

- Source visuelle : `/home/evan/.codex/generated_images/01a0f1ab-6f85-7b21-8369-ac1cd10eec60/exec-0e2e1e24-81ff-477c-bd24-c10e7fef6d29.png`
- Implémentation : `/tmp/cmd-hub-implementation-open.png`
- Comparaison côte à côte : `/tmp/cmd-hub-qa-comparison.png`
- Viewport : 1440 × 1024 CSS px, densité 1.
- Dimensions source : 1487 × 1058 px ; implémentation : 1440 × 1024 px. Comparaison normalisée : deux panneaux de 720 × 512 px.
- État comparé : Commandes → Application déplié → Kotlin / Android sélectionné → sous-catégories visibles.

## Vérifications

- Le chip Application sélectionne le groupe et affiche ses catégories en ligne sous les groupes.
- Kotlin / Android sélectionné affiche les sous-catégories Gradle, ADB et Émulateur.
- Un second clic sur Application masque les catégories et les sous-catégories ; un troisième clic restaure les deux niveaux, avec Kotlin / Android conservé comme sélection active.
- Aucun `error` ni `unhandledrejection` pendant ce parcours dans Firefox.

## Findings

- Aucun P0, P1 ou P2. La structure en lignes de chips correspond à la première maquette sélectionnée : groupes, catégories, puis sous-catégories dépliés au même endroit.
- Les cartes de résultats, le titre et les contrôles existants diffèrent de la maquette générée. Cet écart est volontaire : la demande était d’ajouter la structure de filtres sans redessiner l’application entière.

## Fidelity surfaces

- **Typography** : police système et hiérarchie existantes conservées ; les niveaux de filtres restent lisibles.
- **Spacing and layout rhythm** : les deux lignes dépliées suivent l’espacement et les séparateurs déjà utilisés dans le filtre.
- **Colors and tokens** : le violet actif, le gris des chips et les bordures utilisent les variables existantes.
- **Image quality and assets** : aucun nouvel asset visuel n’est requis par cette interaction ; les assets existants restent inchangés.
- **Copy and content** : groupes, catégories et sous-catégories utilisent les données réelles de Command Hub.

## Implementation checklist

- [x] Déplier les catégories après le clic sur leur groupe parent.
- [x] Replier les catégories et sous-catégories au second clic.
- [x] Conserver la sélection de catégorie lors de la réouverture.
- [x] Vérifier l’état ouvert, fermé et rouvert dans Firefox.

final result: passed
