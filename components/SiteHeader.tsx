"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoBrand from "./LogoBrand";
import ThemeToggle from "./ThemeToggle";

const divisionLinks = [
  ["Consulting", "/consulting"],
  ["Académie", "/academie"],
  ["Marketing", "/marketing"],
  ["Digital", "/digital"],
  ["Studio", "/studio"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="/" aria-label="Accueil Xamogelo"><LogoBrand /></a>
        <nav className={`main-navigation${open ? " is-open" : ""}`} aria-label="Navigation principale">
          <a className={pathname === "/" ? "active" : ""} href="/">Accueil</a>
          {divisionLinks.map(([label, href]) => <a className={pathname === href ? "active" : ""} href={href} key={href}>{label}</a>)}
          <a className={pathname === "/contact" ? "nav-contact active" : "nav-contact"} href="/contact">Contact</a>
        </nav>
        <div className="header-tools">
          <ThemeToggle />
          <button className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        </div>
      </div>
    </header>
  );
}
