# Étapes restantes pour le déploiement définitif

Cette checklist couvre ce qu’il reste à préparer avant de rendre le site Xamogelo public. Le prototype peut fonctionner localement, mais plusieurs informations métier et réglages de production doivent encore être validés.

## 1. Valider l’identité officielle

- [ ] Confirmer le nom officiel utilisé partout ;
- [ ] Confirmer la baseline officielle ;
- [ ] Confirmer les cinq divisions et leurs descriptions ;
- [ ] Valider les quatre valeurs : Excellence, Proximité, Créativité, Intégrité ;
- [ ] Obtenir les logos en PNG transparent ou en SVG pour éliminer les fonds JPEG ;
- [ ] Valider les droits d’utilisation des photographies et vidéos.

## 2. Finaliser les coordonnées

- [ ] Remplacer le numéro provisoire par le téléphone officiel ;
- [ ] Confirmer l’adresse email professionnelle ;
- [ ] Ajouter l’adresse physique si elle doit être publique ;
- [ ] Ajouter les liens Instagram, Facebook, LinkedIn, TikTok et WhatsApp ;
- [ ] Vérifier que `xamogelo.ma` appartient bien à l’organisation.

## 3. Finaliser le contenu

- [ ] Valider tous les textes avec la direction ;
- [ ] Détailler les prestations de chaque division ;
- [ ] Définir le catalogue de Xamogelo Académie ;
- [ ] Définir les formats, durées et modalités des formations ;
- [ ] Détailler les offres à l’unité, les packs mensuels et le sur-mesure ;
- [ ] Ajouter uniquement des réalisations réelles ;
- [ ] Obtenir l’autorisation d’afficher les logos clients ;
- [ ] Ajouter uniquement des témoignages vérifiés ;
- [ ] Préparer les photographies et vidéos finales.

## 4. Terminer les pages du site

- [x] Créer une page détaillée pour chaque division ;
- [x] Créer une page complète Xamogelo Académie ;
- [x] Créer une page Studio ;
- [ ] Créer les pages À propos, Offres, Réalisations et Contact ;
- [ ] Ajouter le téléchargement de la présentation PDF ;
- [ ] Ajouter une page 404 adaptée à la marque ;
- [x] Relier chaque page de division à la page Contact ;
- [x] Relier les cartes d’accueil et la navbar aux pages de divisions ;
- [ ] Vérifier les futurs liens ajoutés avec le contenu définitif.

## 5. Configurer la messagerie

Créer un fichier `.env.local` uniquement sur les environnements autorisés :

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
SMTP_SECURE=false
CONTACT_TO=contact@xamogelo.ma
NEXT_PUBLIC_SITE_URL=https://xamogelo.ma
```

- [ ] Choisir le fournisseur SMTP ;
- [ ] Créer un mot de passe d’application ou un identifiant dédié ;
- [ ] Configurer les variables dans la plateforme d’hébergement ;
- [ ] Vérifier l’envoi et la réception ;
- [ ] Vérifier la fonction « Répondre » ;
- [ ] Ajouter une protection anti-spam et une limitation de fréquence ;
- [ ] Ne jamais versionner `.env.local`.

## 6. Sécurité et conformité

- [ ] Ajouter une politique de confidentialité ;
- [ ] Ajouter les mentions légales ;
- [ ] Ajouter les conditions utiles pour les formations et prestations ;
- [ ] Définir la durée de conservation des demandes ;
- [ ] Ajouter un consentement explicite au formulaire si nécessaire ;
- [ ] Limiter la taille des champs reçus par l’API ;
- [ ] Journaliser les erreurs sans enregistrer les données sensibles ;
- [ ] Mettre à jour Next.js et les dépendances vers des versions maintenues ;
- [ ] Exécuter un audit de sécurité avant la mise en ligne.

## 7. SEO et partage social

- [ ] Définir un titre et une description uniques pour chaque page ;
- [ ] Ajouter les métadonnées Open Graph et X ;
- [ ] Ajouter l’image sociale définitive ;
- [ ] Créer `sitemap.xml` ;
- [ ] Créer `robots.txt` ;
- [ ] Ajouter une icône de site propre ;
- [ ] Ajouter les données structurées de l’organisation ;
- [ ] Vérifier les titres, les liens et les textes alternatifs des images.

## 8. Performance et accessibilité

- [ ] Convertir et compresser les images finales ;
- [ ] Utiliser des formats modernes lorsque possible ;
- [ ] Vérifier les contrastes clair et sombre ;
- [ ] Vérifier la navigation au clavier ;
- [ ] Vérifier les libellés du formulaire ;
- [ ] Tester la réduction des animations ;
- [ ] Tester mobile, tablette et desktop ;
- [ ] Contrôler les performances avec Lighthouse ou un outil équivalent.

## 9. Préparer l’hébergement

- [ ] Choisir la plateforme d’hébergement ;
- [ ] Relier le projet à un dépôt Git privé ou public selon la politique interne ;
- [ ] Configurer les variables d’environnement ;
- [ ] Définir les branches ou environnements de préproduction et production ;
- [ ] Activer HTTPS ;
- [ ] Configurer les sauvegardes ou exports nécessaires ;
- [ ] Définir qui peut publier une nouvelle version.

## 10. Configurer le domaine

- [ ] Relier `xamogelo.ma` à l’hébergement ;
- [ ] Configurer les enregistrements DNS demandés ;
- [ ] Choisir le domaine canonique avec ou sans `www` ;
- [ ] Rediriger l’autre variante vers le domaine canonique ;
- [ ] Vérifier le certificat HTTPS ;
- [ ] Configurer SPF, DKIM et DMARC pour l’email professionnel.

## 11. Tests de préproduction

- [ ] Tester toutes les pages ;
- [ ] Tester le thème clair et sombre ;
- [ ] Tester le formulaire avec chaque pôle ;
- [ ] Vérifier les emails sur ordinateur et mobile ;
- [ ] Tester les boutons téléphone, email et WhatsApp ;
- [ ] Vérifier les erreurs 404 et 500 ;
- [ ] Tester Chrome, Edge, Firefox et Safari si disponible ;
- [ ] Faire relire le site par la direction ;
- [ ] Obtenir une validation écrite avant publication.

## 12. Mise en production

Avant la publication :

```bash
npm install
npm run build
npm run start
```

- [ ] Vérifier que la compilation se termine sans erreur ;
- [ ] Publier la version validée ;
- [ ] Tester immédiatement le domaine public ;
- [ ] Envoyer une demande réelle depuis le formulaire ;
- [ ] Vérifier les métadonnées de partage ;
- [ ] Vérifier l’indexation autorisée ;
- [ ] Conserver une trace de la version publiée.

## 13. Après la publication

- [ ] Surveiller les erreurs serveur ;
- [ ] Vérifier régulièrement les demandes reçues ;
- [ ] Mettre à jour les contenus et formations ;
- [ ] Sauvegarder les contenus sources ;
- [ ] Mettre à jour les dépendances ;
- [ ] Analyser les pages consultées et les conversions ;
- [ ] Préparer les études de cas et réalisations futures.

## Informations qui bloquent encore un déploiement définitif

1. Téléphone officiel ;
2. Adresse et réseaux sociaux définitifs ;
3. Accès au domaine ;
4. Configuration SMTP ;
5. Textes et offres validés ;
6. Catalogue de l’Académie ;
7. Réalisations et témoignages autorisés ;
8. Mentions légales et politique de confidentialité ;
9. Choix de l’hébergement et responsables de publication.
