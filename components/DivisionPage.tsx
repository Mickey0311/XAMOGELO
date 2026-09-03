import type { Division } from "../lib/divisions";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function DivisionPage({ division }: { division: Division }) {
  return (
    <main className={`site-shell division-page page-${division.slug}`} id="top" style={{ "--division-accent": division.accent } as React.CSSProperties}>
      <SiteHeader />

      <section className="division-hero">
        <div className="container division-hero-grid">
          <div>
            <div className="eyebrow">Division {division.index} · Xamogelo</div>
            <h1>{division.shortName}</h1>
            <p className="division-hero-promise">{division.promise}</p>
            <p className="division-hero-summary">{division.summary}</p>
            <a className="button division-button" href="/contact">Échanger avec notre équipe ↗</a>
          </div>
          <div className="division-hero-art" aria-hidden="true"><span>{division.index}</span><strong>{division.shortName.charAt(0)}</strong></div>
        </div>
      </section>

      <section className="section division-intro">
        <div className="container division-intro-grid">
          <div><div className="eyebrow">Ce qu’est ce pôle</div><h2>{division.definition}</h2></div>
          <aside><small>Sa raison d’être</small><p>{division.purpose}</p></aside>
        </div>
      </section>

      <section className="section division-journey-role">
        <div className="container role-card">
          <div className="eyebrow">Dans le parcours Xamogelo</div>
          <p>{division.journeyRole}</p>
          <a href="/#parcours">Voir le parcours complet ↗</a>
        </div>
      </section>

      <section className="division-final-cta">
        <div className="container">
          <div className="eyebrow">Votre projet</div>
          <h2>Vous avez un besoin lié à {division.name} ?</h2>
          <p>Présentez-nous votre objectif. L’équipe Xamogelo vous orientera vers la formule la plus adaptée.</p>
          <a className="button button-accent" href={`/contact?service=${encodeURIComponent(division.shortName)}`}>Contacter Xamogelo ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
