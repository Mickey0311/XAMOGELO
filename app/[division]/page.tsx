import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DivisionPage from "../../components/DivisionPage";
import { divisions, getDivision } from "../../lib/divisions";

export function generateStaticParams() {
  return divisions.map((division) => ({ division: division.slug }));
}

export function generateMetadata({ params }: { params: { division: string } }): Metadata {
  const division = getDivision(params.division);
  if (!division) return {};
  return {
    title: `${division.name} — Xamogelo`,
    description: division.summary,
    openGraph: { title: `${division.name} — Xamogelo`, description: division.summary, images: [] },
    twitter: { title: `${division.name} — Xamogelo`, description: division.summary, images: [] },
  };
}

export default function DivisionRoute({ params }: { params: { division: string } }) {
  const division = getDivision(params.division);
  if (!division) notFound();
  return <DivisionPage division={division} />;
}
