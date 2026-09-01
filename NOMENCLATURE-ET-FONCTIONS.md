# Nomenclature et fonctions importantes

Ce document décrit les conventions utilisées dans le projet Xamogelo et le rôle des principales fonctions. Il doit rester synchronisé avec le code.

## 1. Organisation du projet

```text
app/
  [division]/page.tsx      route partagée des cinq divisions
  api/contact/route.ts     API d’envoi des demandes
  contact/page.tsx         page de contact et coordonnées
  globals.css              thème, mise en page et responsive
  layout.tsx               structure HTML et métadonnées globales
  page.tsx                 page d’accueil et données éditoriales

components/
  ContactForm.tsx          formulaire interactif
  DivisionPage.tsx         modèle détaillé des pages de pôles
  LogoBrand.tsx            logos clair et sombre
  SiteFooter.tsx           footer partagé entre les pages
  SiteHeader.tsx           navbar fixe et navigation mobile
  ThemeToggle.tsx          changement de thème

lib/
  divisions.ts             contenu officiel centralisé des cinq pôles

public/assets/
  icone.png                favicon et icône de l’application
  logo1.png                logo transparent pour le mode clair
  logo2.png                logo transparent pour le mode sombre
```

## 2. Règles de nommage

### Fichiers et composants React

- Les composants utilisent le format `PascalCase` : `ContactForm`, `LogoBrand`, `ThemeToggle`.
- Un fichier de composant porte le même nom que le composant exporté : `ThemeToggle.tsx`.
- Les routes Next.js conservent les noms imposés par le framework : `page.tsx`, `layout.tsx`, `route.ts`.
- Les fichiers de documentation utilisent des noms explicites en majuscules et des tirets.

### Fonctions et variables

- Les fonctions et variables utilisent le format `camelCase` : `handleSubmit`, `allowedServices`, `isDark`.
- Une fonction événementielle commence par `handle` : `handleSubmit`.
- Une fonction qui change un état utilise un verbe : `toggle`.
- Les booléens commencent par `is`, `has` ou `can` : `isDark`, `hasSmtpConfig`.
- Les collections utilisent un nom au pluriel : `divisions`, `journey`, `values`, `offers`.

### CSS

- Les classes décrivent leur rôle visuel : `.hero-card`, `.division-grid`, `.journey-step`.
- Les variantes utilisent un suffixe : `.division-academie`, `.division-studio`.
- Les états de thème sont placés sur l’élément HTML : `[data-theme="dark"]`.
- Les couleurs globales utilisent des variables CSS : `--canvas`, `--surface`, `--ink`, `--blue`, `--gold`.

### Ancres et sections

- Les identifiants sont courts, sans accents et en minuscules : `#divisions`, `#parcours`, `#academie`, `#contact`.
- Chaque lien de navigation doit pointer vers un identifiant existant.

### Variables d’environnement

- Les variables serveur utilisent des majuscules avec `_` : `SMTP_HOST`, `SMTP_USER`, `CONTACT_TO`.
- Aucun mot de passe, identifiant SMTP ou secret ne doit être écrit directement dans le code.
- Les variables privées ne doivent jamais être préfixées par `NEXT_PUBLIC_`.

## 3. Données éditoriales de la page

### `divisions`

Collection des cinq pôles officiels. Chaque entrée contient :

- `index` : ordre d’affichage ;
- `slug` : identifiant technique et variante CSS ;
- `title` : nom public du pôle ;
- `subtitle` : promesse courte ;
- `description` : résumé de l’offre.

Les slugs officiels sont : `consulting`, `academie`, `marketing`, `digital`, `studio`.

### `journey`

Décrit le parcours client en six étapes : diagnostic, structuration, compétences, identité, présence et production.

### `values`

Contient les quatre valeurs officielles : Excellence, Proximité, Créativité et Intégrité.

### `offers`

Contient les offres signatures affichées sur la page d’accueil. Les tarifs ne doivent être ajoutés qu’après validation de la direction.

## 4. Fonctions et composants importants

### `Home()`

Fichier : `app/page.tsx`

Composant principal de la page d’accueil. Il assemble les sections dans l’ordre de lecture : navigation, hero, divisions, parcours, Académie, Studio, valeurs, offres, contact et footer.

Il reste côté serveur, car la majorité de son contenu est éditorial et ne nécessite pas d’état dans le navigateur.

### `SiteHeader()`

Fichier : `components/SiteHeader.tsx`

Navbar fixe, légèrement transparente et partagée par toutes les pages. Elle contient les liens vers l’accueil, les cinq divisions et la page Contact. Elle gère également l’ouverture du menu mobile et l’indication de la page active.

### `SiteFooter()`

Fichier : `components/SiteFooter.tsx`

Footer partagé regroupant la promesse de Xamogelo, les cinq divisions et les liens de contact.

### `DivisionPage()`

Fichier : `components/DivisionPage.tsx`

Modèle commun des cinq pages de divisions. Il affiche la définition, la raison d’être, les services, les publics, les formats et le rôle du pôle dans le parcours client. Chaque page se termine par un lien vers `/contact` avec le pôle présélectionné.

### `getDivision()`

Fichier : `lib/divisions.ts`

Recherche une division à partir de son slug. Cette fonction alimente les routes `/consulting`, `/academie`, `/marketing`, `/digital` et `/studio`.

### `LogoBrand()`

Fichier : `components/LogoBrand.tsx`

Affiche les deux variantes du logo. Le CSS choisit automatiquement :

- `logo1.png` en mode clair ;
- `logo2.png` en mode sombre et dans le footer.

Le composant ne décide pas lui-même du thème. Cette responsabilité appartient à `ThemeToggle` et aux règles CSS.

### `ThemeToggle()`

Fichier : `components/ThemeToggle.tsx`

Composant client responsable du changement clair/sombre.

Fonctionnement :

1. Lit `xamogelo-theme` dans `localStorage` ;
2. Utilise la préférence système si aucun choix n’est enregistré ;
3. Applique `data-theme="light"` ou `data-theme="dark"` sur `<html>` ;
4. Mémorise le choix de l’utilisateur.

### `toggle()`

Fichier : `components/ThemeToggle.tsx`

Inverse le thème actif, met à jour l’attribut HTML, enregistre le choix dans le navigateur et actualise le libellé accessible du bouton.

### `ContactForm()`

Fichier : `components/ContactForm.tsx`

Formulaire client qui collecte :

- nom ;
- email ;
- téléphone ;
- entreprise ou organisation ;
- pôle recherché ;
- message.

Il gère également l’état d’envoi et les messages de confirmation ou d’erreur.

### `handleSubmit()`

Fichier : `components/ContactForm.tsx`

Étapes de traitement :

1. Bloque le rechargement natif du formulaire ;
2. Transforme les champs en objet ;
3. Envoie une requête JSON vers `/api/contact` ;
4. Lit la réponse de l’API ;
5. Affiche le résultat ;
6. Réinitialise le formulaire uniquement après un succès.

### `POST()`

Fichier : `app/api/contact/route.ts`

Point d’entrée serveur du formulaire. Il :

1. Lit et normalise les données reçues ;
2. Vérifie les champs obligatoires et le format de l’email ;
3. Vérifie que le pôle demandé fait partie de la liste autorisée ;
4. Vérifie la configuration SMTP ;
5. Crée le transport Nodemailer ;
6. Envoie le message à l’adresse définie dans `CONTACT_TO` ;
7. Retourne une réponse JSON appropriée.

### `nodemailer.createTransport()`

Crée la connexion au serveur de messagerie à partir des variables d’environnement. En production, utiliser un fournisseur SMTP fiable et un mot de passe d’application ou une clé dédiée.

### `transporter.sendMail()`

Envoie l’email à Xamogelo. L’adresse du visiteur est placée dans `replyTo`, ce qui permet à l’équipe de répondre directement sans usurper son adresse.

## 5. Statuts HTTP utilisés

- `200` : message envoyé ;
- `400` : données invalides ;
- `503` : messagerie non configurée ;
- `500` : erreur serveur imprévue à gérer dans une évolution future.

## 6. Fonctions recommandées pour les prochaines étapes

- `validateContactPayload` : isoler la validation du formulaire ;
- `sanitizeText` : limiter et nettoyer les textes reçus ;
- `buildContactEmail` : générer le contenu texte et HTML du message ;
- `createMailTransporter` : centraliser la configuration SMTP ;
- `getDivisionBySlug` : récupérer un pôle pour les futures pages détaillées ;
- `generateMetadata` : produire les métadonnées de chaque page ;
- `trackContactConversion` : mesurer les demandes après ajout d’un outil analytique ;
- `submitTrainingRequest` : gérer séparément les inscriptions de l’Académie.

## 7. Principes de maintenance

- Ne pas dupliquer les descriptions des divisions dans plusieurs composants ;
- Valider tout nouveau contenu avec la direction ;
- Garder le formulaire et l’API synchronisés ;
- Tester les deux thèmes après toute modification visuelle ;
- Tester au minimum les largeurs mobile, tablette et desktop ;
- Exécuter la compilation de production avant chaque déploiement.
