import type { Division } from "./divisions";

// Editorial illustrations, not photographs of Xamogelo's premises or clients.
export const sectorVisuals: Record<Division["slug"], { action: string; keywords: string; position: string }> = {
  consulting: { action: "Donner le cap", keywords: "Stratégie · Organisation · Projets", position: "0%" },
  academie: { action: "Transmettre le savoir", keywords: "Formation · Ateliers · Compétences", position: "25%" },
  marketing: { action: "Faire rayonner", keywords: "Identité · Communication · Campagnes", position: "50%" },
  digital: { action: "Connecter les idées", keywords: "Sites web · E-commerce · Solutions digitales", position: "75%" },
  studio: { action: "Donner vie aux récits", keywords: "Photo · Vidéo · Podcast", position: "100%" },
};
