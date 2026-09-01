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

      <section className="section division-services">
        <div className="container">
          <div className="section-heading"><div className="eyebrow">Services principaux</div><h2>Un accompagnement concret et adapté au besoin.</h2></div>
          <div className="service-detail-grid">
            {division.services.map((service, index) => (
              <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section division-audience">
        <div className="container audience-grid">
          <div className="section-heading"><div className="eyebrow">Pour qui ?</div><h2>Des solutions pour les personnes comme pour les organisations.</h2></div>
          <div className="audience-list">{division.audiences.map((audience) => <span key={audience}>{audience}</span>)}</div>
        </div>
      </section>

      <section className="section division-formats">
        <div className="container format-grid">
          <div><div className="eyebrow">Formats disponibles</div><h2>Choisir le niveau d’accompagnement approprié.</h2></div>
          <ol>{division.formats.map((format) => <li key={format}>{format}</li>)}</ol>
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
