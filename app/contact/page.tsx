import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact — Xamogelo",
  description: "Contactez Xamogelo pour un besoin en consulting, formation, marketing, digital ou production audiovisuelle.",
  openGraph: { title: "Contact — Xamogelo", description: "Présentez votre projet à l’équipe Xamogelo.", images: [] },
  twitter: { title: "Contact — Xamogelo", description: "Présentez votre projet à l’équipe Xamogelo.", images: [] },
};

const allowedServices = ["Consulting", "Académie", "Marketing", "Digital", "Studio", "Accompagnement global"];

export default function ContactPage({ searchParams }: { searchParams: { service?: string } }) {
  const requestedService = typeof searchParams.service === "string" && allowedServices.includes(searchParams.service) ? searchParams.service : "";

  return (
    <main className="site-shell contact-page" id="top">
      <SiteHeader />
      <section className="contact-page-hero" id="page-content" tabIndex={-1}>
        <div className="container"><div className="eyebrow">Contact Xamogelo</div><h1>Parlons de votre prochain objectif.</h1><p>Décrivez votre besoin. Nous vous orienterons vers la division et le format d’accompagnement les plus adaptés.</p></div>
      </section>
      <section className="section contact-page-content">
        <div className="container contact-grid">
          <div>
            <div className="section-heading"><div className="eyebrow">Toutes nos coordonnées</div><h2>Choisissez le canal qui vous convient.</h2></div>
            <div className="contact-directory">
              <article><small>Email</small><a href="mailto:contact@xamogelo.ma">contact@xamogelo.ma</a><p>Adresse de contact indiquée dans la première plaquette, à confirmer avant publication.</p></article>
              <article><small>Téléphone</small><span>À compléter</span><p>Le numéro définitif n’est pas encore confirmé.</p></article>
              <article><small>WhatsApp</small><span>À compléter</span><p>Le lien direct sera ajouté après validation du numéro.</p></article>
              <article><small>Adresse</small><span>Maroc · Casablanca à confirmer</span><p>L’adresse physique précise reste à compléter.</p></article>
              <article><small>Réseaux sociaux</small><span>Instagram · Facebook · LinkedIn · TikTok</span><p>Les liens officiels restent à fournir.</p></article>
            </div>
          </div>
          <div><div className="contact-form-heading"><span>Envoyer une demande</span><p>Les champs marqués sont nécessaires pour orienter correctement votre message.</p></div><ContactForm initialService={requestedService} /></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
