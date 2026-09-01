import LogoBrand from "./LogoBrand";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><a href="/" aria-label="Accueil Xamogelo"><LogoBrand footer /></a><p>Conseiller, former, créer et transformer.</p></div>
        <div><small>Nos divisions</small><a href="/consulting">Consulting</a><a href="/academie">Académie</a><a href="/marketing">Marketing</a><a href="/digital">Digital</a><a href="/studio">Studio</a></div>
        <div><small>Contact</small><a href="mailto:contact@xamogelo.ma">contact@xamogelo.ma</a><a href="/contact">Toutes les coordonnées</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Xamogelo. Tous droits réservés.</span><a href="#top">Retour en haut ↑</a></div>
    </footer>
  );
}
