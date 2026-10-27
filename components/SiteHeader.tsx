"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <a className="skip-link" href={pathname === "/" ? "#accueil" : "#page-content"}>Aller au contenu</a>
      <div className="container header-inner">
        <a className="brand-link" href="/" aria-label="Accueil Xamogelo"><LogoBrand /></a>
        <nav id="main-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Navigation principale" onClick={() => setOpen(false)} onBlur={(event) => { if (!header.current?.contains(event.relatedTarget as Node)) setOpen(false); }}>
          <a className={pathname === "/" ? "active" : ""} aria-current={pathname === "/" ? "page" : undefined} href="/">Accueil</a>
          {divisionLinks.map(([label, href]) => <a className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} href={href} key={href}>{label}</a>)}
          <a className={pathname === "/contact" ? "nav-contact active" : "nav-contact"} aria-current={pathname === "/contact" ? "page" : undefined} href="/contact">Parlons de votre projet ↗</a>
        </nav>
        <div className="header-tools">
          <ThemeToggle />
          <button ref={menuButton} className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        </div>
      </div>
    </header>
  );
}
