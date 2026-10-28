import type { Division } from "../lib/divisions";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { sectorVisuals } from "../lib/sector-visuals";
import InteractiveBackground from "./InteractiveBackground";

export default function DivisionPage({ division }: { division: Division }) {
  return (
    <main className={`site-shell division-page page-${division.slug}`} id="top" style={{ "--division-accent": division.accent } as React.CSSProperties}>
      <SiteHeader />

      <section className="division-hero" id="page-content" tabIndex={-1}>
        <InteractiveBackground />
        <div className="container division-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span aria-hidden="true">/</span><a href="/#divisions">Nos pôles</a><span aria-hidden="true">/</span><span aria-current="page">{division.shortName}</span></nav>
            <div className="eyebrow">Division {division.index} · Xamogelo</div>
            <h1>{division.shortName}</h1>
            <p className="division-hero-promise">{division.promise}</p>
            <p className="division-hero-summary">{division.summary}</p>
            <a className="button division-button" href="/contact">Échanger avec notre équipe ↗</a>
          </div>
          <div className="division-hero-art sector-detail-photo" style={{ "--sector-position": sectorVisuals[division.slug].position } as React.CSSProperties} aria-hidden="true"><span>Pôle {division.index}</span><div><small>{sectorVisuals[division.slug].keywords}</small><strong>{sectorVisuals[division.slug].action}</strong></div></div>
        </div>
      </section>

      <section className="section division-intro">
        <div className="container division-intro-grid">
          <div><div className="eyebrow">Notre rôle</div><h2>{sectorVisuals[division.slug].action}</h2><p className="division-definition">{division.definition}</p></div>
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
          <h2>Parlons de votre projet.</h2>
          <p>Un besoin en {division.shortName} ? Trouvons le bon accompagnement.</p>
          <a className="button button-accent" href={`/contact?service=${encodeURIComponent(division.shortName)}`}>Contacter Xamogelo ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
