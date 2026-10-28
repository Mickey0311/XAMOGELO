import type { Metadata } from "next";
import InteractiveCursor from "../components/InteractiveCursor";
import "./globals.css";
import "./refinement.css";
import "./sectors.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Xamogelo — Conseiller, former, créer et transformer",
  description: "Un écosystème marocain réunissant conseil, formation, marketing, digital et production audiovisuelle.",
  icons: {
    icon: [{ url: "/assets/icone.png", type: "image/png" }],
    shortcut: "/assets/icone.png",
    apple: "/assets/icone.png",
  },
  openGraph: {
    title: "Xamogelo — Conseiller, former, créer et transformer",
    description: "Consulting, Académie, Marketing, Digital et Studio au service de votre impact.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Xamogelo — Conseiller. Former. Créer. Transformer." }],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xamogelo — Conseiller, former, créer et transformer",
    description: "Consulting, Académie, Marketing, Digital et Studio au service de votre impact.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const t = localStorage.getItem('xamogelo-theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}` }} />
      </head>
      <body>{children}<InteractiveCursor /></body>
    </html>
  );
}
