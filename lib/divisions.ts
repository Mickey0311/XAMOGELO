export type Division = {
  index: string;
  slug: "consulting" | "academie" | "marketing" | "digital" | "studio";
  name: string;
  shortName: string;
  promise: string;
  summary: string;
  definition: string;
  purpose: string;
  audiences: string[];
  services: { title: string; description: string }[];
  formats: string[];
  journeyRole: string;
  accent: string;
};

export const divisions: Division[] = [
  {
    index: "01",
    slug: "consulting",
    name: "Xamogelo Consulting",
    shortName: "Consulting",
    promise: "Structurer le projet et clarifier les objectifs.",
    summary: "Conseil stratégique, accompagnement de projets, orientation professionnelle et structuration d’activités.",
    definition: "Xamogelo Consulting est le pôle de réflexion et de structuration. Il aide les personnes et les organisations à transformer une idée, un besoin ou une difficulté en objectifs clairs et en plan d’action opérationnel.",
    purpose: "Donner un cadre solide aux décisions, réduire les zones d’incertitude et préparer les étapes suivantes de l’accompagnement Xamogelo.",
    audiences: ["Particuliers et porteurs de projet", "Entrepreneurs et PME", "Associations", "Institutions"],
    services: [
      { title: "Conseil stratégique", description: "Clarification des enjeux, priorités et orientations du projet." },
      { title: "Structuration d’activité", description: "Organisation de l’offre, des objectifs et des étapes de développement." },
      { title: "Accompagnement de projet", description: "Suivi du cadrage jusqu’à la mise en œuvre et à la validation." },
      { title: "Orientation professionnelle", description: "Accompagnement des choix et des trajectoires professionnelles." },
    ],
    formats: ["Prestation à l’unité", "Pack d’accompagnement", "Formule mensuelle", "Mission sur mesure"],
    journeyRole: "Le Consulting ouvre le parcours client : il réalise le diagnostic, structure les objectifs et détermine les pôles à mobiliser ensuite.",
    accent: "#1b9ad6",
  },
  {
    index: "02",
    slug: "academie",
    name: "Xamogelo Académie",
    shortName: "Académie",
    promise: "Développer les compétences et les capacités.",
    summary: "Formations pratiques en présentiel, en ligne ou hybrides : compétences métiers, outils numériques, musique et audiovisuel.",
    definition: "Xamogelo Académie est le pôle de formation et de montée en compétences. Il propose des apprentissages pratiques destinés à aider les participants à utiliser de nouveaux outils, renforcer leur savoir-faire et devenir plus autonomes.",
    purpose: "Transformer les connaissances en compétences directement applicables dans un projet, une activité professionnelle ou une organisation.",
    audiences: ["Particuliers", "Entrepreneurs", "Équipes de PME", "Associations et institutions"],
    services: [
      { title: "Compétences métiers", description: "Programmes pratiques adaptés aux besoins professionnels identifiés." },
      { title: "Outils numériques", description: "Prise en main et utilisation d’outils utiles au travail et à la communication." },
      { title: "Musique", description: "Formations et ateliers pratiques liés aux compétences musicales." },
      { title: "Audiovisuel", description: "Initiation et perfectionnement autour de la photo, de la vidéo et de la production." },
    ],
    formats: ["Formation en présentiel", "Formation en ligne", "Format hybride", "Programme sur mesure"],
    journeyRole: "L’Académie intervient après la structuration afin de renforcer les compétences nécessaires à la réalisation du projet et à son autonomie future.",
    accent: "#e9b84b",
  },
  {
    index: "03",
    slug: "marketing",
    name: "Xamogelo Marketing",
    shortName: "Marketing",
    promise: "Construire une marque claire et visible.",
    summary: "Branding, communication, gestion des réseaux sociaux, campagnes et création de supports publicitaires.",
    definition: "Xamogelo Marketing est le pôle qui construit et développe l’expression de la marque. Il transforme le positionnement défini en identité, messages, campagnes et supports cohérents pour toucher les bons publics.",
    purpose: "Créer une présence reconnaissable, différenciante et cohérente sur les différents points de contact de la marque.",
    audiences: ["Entrepreneurs et marques", "PME", "Associations", "Institutions et projets"],
    services: [
      { title: "Branding", description: "Construction ou clarification de l’identité et du positionnement de marque." },
      { title: "Communication", description: "Définition des messages, contenus et supports de communication." },
      { title: "Réseaux sociaux", description: "Organisation et gestion de la présence sur les plateformes sociales." },
      { title: "Campagnes publicitaires", description: "Conception de campagnes et création de supports adaptés." },
    ],
    formats: ["Mission ponctuelle", "Pack de lancement", "Gestion mensuelle", "Campagne sur mesure"],
    journeyRole: "Le Marketing transforme la stratégie en identité de marque et prépare les contenus nécessaires à la présence digitale et à la production média.",
    accent: "#e05b87",
  },
  {
    index: "04",
    slug: "digital",
    name: "Xamogelo Digital",
    shortName: "Digital",
    promise: "Déployer une présence digitale utile et performante.",
    summary: "Sites vitrines, e-commerce, landing pages, maintenance et transformation digitale.",
    definition: "Xamogelo Digital est le pôle de conception et de déploiement des outils numériques. Il donne une présence en ligne aux projets et accompagne les organisations dans l’adoption de solutions digitales adaptées.",
    purpose: "Mettre en place des outils accessibles, cohérents avec la marque et réellement utiles aux objectifs du client.",
    audiences: ["Entrepreneurs", "PME et commerces", "Associations", "Institutions"],
    services: [
      { title: "Sites vitrines", description: "Présentation professionnelle d’une activité, d’une organisation ou d’une marque." },
      { title: "E-commerce", description: "Mise en place d’une présence destinée à présenter et vendre des produits ou services." },
      { title: "Landing pages", description: "Pages ciblées pour une offre, une campagne ou une prise de contact." },
      { title: "Maintenance et transformation", description: "Suivi technique et accompagnement à l’évolution des usages digitaux." },
    ],
    formats: ["Projet de création", "Pack de lancement", "Maintenance mensuelle", "Transformation sur mesure"],
    journeyRole: "Le Digital met en ligne la marque, ses offres et ses contenus, puis assure la continuité technique de cette présence.",
    accent: "#5275e8",
  },
  {
    index: "05",
    slug: "studio",
    name: "Xamogelo Studio",
    shortName: "Studio",
    promise: "Produire les contenus qui donnent vie au projet.",
    summary: "Production audiovisuelle : podcasts, photographies, vidéos, montage et location d’espace de production.",
    definition: "Xamogelo Studio est le pôle de production audiovisuelle. Il transforme les idées, les messages et l’identité de marque en contenus concrets destinés à informer, valoriser, former ou engager une audience.",
    purpose: "Fournir des contenus professionnels capables de renforcer la visibilité et l’impact des personnes, des marques et des organisations.",
    audiences: ["Entrepreneurs et talents", "Marques et PME", "Associations", "Institutions et formateurs"],
    services: [
      { title: "Podcasts", description: "Préparation et production de contenus audio ou vidéo conversationnels." },
      { title: "Photographie", description: "Création d’images professionnelles pour la marque et la communication." },
      { title: "Vidéo et montage", description: "Production, assemblage et finalisation de contenus audiovisuels." },
      { title: "Espace de production", description: "Mise à disposition d’un environnement adapté aux projets média." },
    ],
    formats: ["Production à l’unité", "Pack de contenus", "Production régulière", "Projet sur mesure"],
    journeyRole: "Le Studio concrétise le dernier maillon du parcours en produisant les contenus qui alimentent la communication et la présence digitale.",
    accent: "#9057dc",
  },
];

export function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}
