import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { divisions } from "../lib/divisions";
import { sectorVisuals } from "../lib/sector-visuals";
import InteractiveBackground from "../components/InteractiveBackground";

const journey = [
  ["Diagnostic", "Comprendre votre réalité, vos objectifs et vos contraintes."],
  ["Structuration", "Définir la stratégie, les priorités et le plan d’action."],
  ["Compétences", "Former les équipes et renforcer les capacités internes."],
  ["Identité", "Construire une marque claire, cohérente et différenciante."],
  ["Présence", "Déployer les outils digitaux et les canaux de communication."],
  ["Production", "Créer les contenus et suivre les résultats dans la durée."],
];

const values = [
  ["Excellence", "Des prestations sur mesure alignées sur les standards professionnels."],
  ["Proximité", "Une écoute active et un accompagnement profondément humain."],
  ["Créativité", "Des idées originales et des contenus qui vous différencient."],
  ["Intégrité", "Une relation transparente, responsable et respectueuse."],
];

const offers = [
  ["Lancement digital", "Site web, réseaux sociaux et identité de marque pour lancer une présence cohérente."],
  ["Coaching d’entreprise", "Audit, organisation, stratégie RH et formation pour aligner les équipes."],
  ["Image de marque pro", "Identité visuelle, charte et contenus pour affirmer votre positionnement."],
  ["Parcours Académie", "Formation, atelier et accompagnement adaptés à vos objectifs professionnels."],
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <SiteHeader />

      <section className="hero" id="accueil" tabIndex={-1}>
        <InteractiveBackground />
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow">Xamogelo · Un groupe, cinq expertises</div>
            <h1>De la vision<br /><em>à la réalisation.</em></h1>
            <p className="hero-lead">Conseil, formation, création et digital pour faire avancer vos projets.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">Parlons de votre projet <span aria-hidden="true">↗</span></a>
              <a className="button button-ghost" href="#divisions">Découvrir nos pôles <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note"><span><i className="dot" /> Solutions intégrées</span><span><i className="dot" /> Formats modulaires</span><span><i className="dot" /> Accompagnement humain</span></div>
          </div>
        </div>
        <nav className="container hero-poles" aria-label="Découvrir les cinq pôles">
          {divisions.map((division) => <a className="sector-preview" key={division.slug} href={`/${division.slug}`} style={{ "--sector-position": sectorVisuals[division.slug].position } as React.CSSProperties}><span className="sector-photo" aria-hidden="true" /><span className="sector-number">{division.index}</span><span className="sector-caption"><small>{sectorVisuals[division.slug].action}</small><strong>{division.shortName}</strong></span><b aria-hidden="true">↗</b></a>)}
        </nav>
        <p className="visual-note container">Cinq métiers, une même ambition : faire avancer votre projet.</p>
      </section>

      <div className="ticker" aria-label="Expertises Xamogelo">
        <div className="ticker-track">
          <span>CONSEIL</span><i>•</i><span>FORMATION</span><i>•</i><span>BRANDING</span><i>•</i><span>DIGITAL</span><i>•</i><span>PRODUCTION AUDIOVISUELLE</span><i>•</i><span>CONSEIL</span><i>•</i><span>FORMATION</span><i>•</i><span>BRANDING</span><i>•</i><span>DIGITAL</span><i>•</i><span>PRODUCTION AUDIOVISUELLE</span>
        </div>
      </div>

      <section className="section" id="agence">
        <div className="container intro-grid">
          <div className="section-heading intro-copy">
            <div className="eyebrow">Notre raison d’être</div>
            <h2>Faire avancer vos ambitions.</h2>
            <p>Nous accompagnons les personnes et les organisations, de la stratégie à la mise en œuvre.</p>
          </div>
          <div className="signature">
            <div className="signature-mark">Vision & mission</div>
            <h3>Cinq expertises. Une même vision.</h3>
            <p>Les bonnes compétences, les bons outils et un accompagnement adapté à votre projet.</p>
          </div>
        </div>
      </section>

      <section className="section divisions-section" id="divisions">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Un groupe, cinq divisions</div>
            <h2>À chaque besoin, son expertise.</h2>
            <p>Un pôle dédié ou un accompagnement global : à vous de choisir.</p>
          </div>
          <div className="division-grid">
            {divisions.map((division) => (
              <a className={`division-card division-${division.slug}`} href={`/${division.slug}`} key={division.name}>
                <div className="division-visual sector-card-photo" style={{ "--sector-position": sectorVisuals[division.slug].position } as React.CSSProperties} aria-hidden="true"><span>PÔLE {division.index}</span><b>{sectorVisuals[division.slug].action}</b></div>
                <div className="division-content">
                  <span className="division-index">{division.index}</span>
                  <h3>{division.name}</h3>
                  <div className="sector-keywords">{sectorVisuals[division.slug].keywords}</div>
                  <p>{division.promise}</p>
                  <span className="division-link">Découvrir ce pôle <b>↗</b></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section" id="parcours">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Le parcours Xamogelo</div>
            <h2>De l’idée à l’action.</h2>
            <p>Six étapes, un accompagnement cohérent.</p>
          </div>
          <div className="journey-grid">
            {journey.map(([title, description], index) => (
              <article className="journey-step" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section" id="valeurs">
        <div className="container why-grid">
          <div className="section-heading">
            <div className="eyebrow">Nos engagements</div>
            <h2>L’exigence, avec l’humain.</h2>
          </div>
          <div className="reason-list">
            {values.map(([title, description], index) => (
              <article className="reason" key={title}><div className="reason-number">0{index + 1}</div><strong>{title}</strong><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers" id="offres">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Offres signatures</div>
            <h2>Le bon format pour avancer.</h2>
            <p>À l’unité, au mois ou sur mesure.</p>
          </div>
          <div className="offer-grid">
            {offers.map(([title, description]) => (
              <article className="offer" key={title}><div><h3>{title}</h3><p>{description}</p></div><a href="/contact" aria-label={`Demander l’offre ${title}`}>En discuter <span aria-hidden="true">↗</span></a></article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact-cta">
        <div className="container"><div className="eyebrow">Et si on en parlait ?</div><h2>Votre projet commence ici.</h2><p>Partagez votre idée. Construisons la suite ensemble.</p><a className="button button-accent" href="/contact">Contacter Xamogelo ↗</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
