import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { divisions } from "../lib/divisions";

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

      <section className="hero" id="accueil">
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow">Conseil · Formation · Marketing · Digital · Studio</div>
            <h1>Vos ambitions,<br /><em>notre écosystème.</em></h1>
            <p className="hero-lead">Nous aidons les personnes et les organisations à structurer leurs projets, développer leurs compétences, construire leur marque et amplifier leur impact.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#divisions">Explorer nos cinq pôles ↘</a>
              <a className="button button-ghost" href="/contact">Démarrer un projet</a>
            </div>
            <div className="hero-note"><span><i className="dot" /> Solutions intégrées</span><span><i className="dot" /> Formats modulaires</span><span><i className="dot" /> Accompagnement humain</span></div>
          </div>
          <aside className="hero-card" aria-label="Méthode Xamogelo">
            <div className="hero-card-label">Notre méthode</div>
            <div className="hero-step"><span>01</span><strong>Diagnostiquer</strong><small>Écouter et comprendre.</small></div>
            <div className="hero-step"><span>02</span><strong>Construire</strong><small>Proposer une trajectoire.</small></div>
            <div className="hero-step"><span>03</span><strong>Activer</strong><small>Réaliser, valider et suivre.</small></div>
            <div className="hero-card-line" />
          </aside>
        </div>
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
            <h2>Faire progresser les idées, les compétences et les organisations.</h2>
            <p>Xamogelo délivre des conseils, des compétences et des outils pratiques pour développer la visibilité, les capacités et l’impact de ses clients.</p>
          </div>
          <div className="signature">
            <div className="signature-mark">Vision & mission</div>
            <h3>Des solutions complètes, accessibles et innovantes.</h3>
            <p>Conseiller, former et accompagner avec des stratégies opérationnelles, des formations pratiques, des solutions digitales et de la production média.</p>
          </div>
        </div>
      </section>

      <section className="section divisions-section" id="divisions">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Un groupe, cinq divisions</div>
            <h2>Une expertise connectée à chaque étape de votre projet.</h2>
            <p>Chaque pôle peut intervenir séparément ou s’intégrer dans un accompagnement global.</p>
          </div>
          <div className="division-grid">
            {divisions.map((division) => (
              <a className={`division-card division-${division.slug}`} href={`/${division.slug}`} key={division.name}>
                <div className="division-visual" aria-hidden="true"><span>{division.index}</span><b>{division.shortName.charAt(0)}</b></div>
                <div className="division-content">
                  <span className="division-index">{division.index}</span>
                  <h3>{division.name}</h3>
                  <strong>{division.promise}</strong>
                  <p>{division.summary}</p>
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
            <h2>Du premier diagnostic à un impact qui dure.</h2>
            <p>Un même client peut mobiliser l’ensemble de l’écosystème, avec un interlocuteur et une trajectoire cohérente.</p>
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

      <section className="feature-section" id="academie">
        <div className="container feature-grid">
          <div className="feature-copy">
            <div className="eyebrow">Xamogelo Académie</div>
            <h2>Des compétences pratiques pour passer à l’action.</h2>
            <p>Des formations en présentiel, à distance ou hybrides, conçues pour les particuliers, entrepreneurs, équipes et institutions.</p>
            <ul>
              <li>Compétences métiers et outils numériques</li>
              <li>Communication, marketing et personal branding</li>
              <li>Management, leadership, musique et audiovisuel</li>
            </ul>
            <a className="button button-accent" href="/academie">Découvrir l’Académie ↗</a>
          </div>
          <div className="feature-panel" aria-hidden="true">
            <span>APPRENDRE</span><span>PRATIQUER</span><span>PROGRESSER</span>
          </div>
        </div>
      </section>

      <section className="section studio-section" id="studio">
        <div className="container studio-grid">
          <div className="studio-art" aria-hidden="true"><span>REC</span><div className="studio-orbit" /></div>
          <div className="section-heading studio-copy">
            <div className="eyebrow">Xamogelo Studio</div>
            <h2>Donner une forme forte à vos idées.</h2>
            <p>Production de podcasts, photos, vidéos et contenus audiovisuels pour raconter, transmettre et valoriser votre projet.</p>
            <a className="text-link" href="/studio">Découvrir le Studio ↗</a>
          </div>
        </div>
      </section>

      <section className="section values-section" id="valeurs">
        <div className="container why-grid">
          <div className="section-heading">
            <div className="eyebrow">Nos engagements</div>
            <h2>Une relation professionnelle, créative et profondément humaine.</h2>
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
            <h2>Une formule adaptée à votre prochaine étape.</h2>
            <p>À l’unité, en pack mensuel ou sur mesure : l’accompagnement s’adapte à votre réalité.</p>
          </div>
          <div className="offer-grid">
            {offers.map(([title, description]) => (
              <article className="offer" key={title}><div><h3>{title}</h3><p>{description}</p></div><a href="/contact" aria-label={`Demander l’offre ${title}`}>↗</a></article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact-cta">
        <div className="container"><div className="eyebrow">Un projet, une formation ou un besoin média ?</div><h2>Identifions ensemble le bon point de départ.</h2><p>L’équipe Xamogelo vous orientera vers la division et le format les plus adaptés.</p><a className="button button-accent" href="/contact">Contacter Xamogelo ↗</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
