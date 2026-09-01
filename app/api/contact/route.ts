import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const company = String(body?.company || "").trim();
  const service = String(body?.service || "").trim();
  const message = String(body?.message || "").trim();
  const allowedServices = ["Consulting", "Académie", "Marketing", "Digital", "Studio", "Accompagnement global"];
  if (!name || !email || !service || !message || !allowedServices.includes(service) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Merci de remplir correctement les champs du formulaire." }, { status: 400 });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    return NextResponse.json({ message: "Le formulaire est prêt. La messagerie doit encore être configurée côté serveur." }, { status: 503 });
  }
  const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === "true", auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } });
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_TO || "contact@xamogelo.ma",
    replyTo: email,
    subject: `Demande ${service} — ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone || "Non renseigné"}\nEntreprise : ${company || "Non renseignée"}\nPôle : ${service}\n\nMessage :\n${message}`,
  });
  return NextResponse.json({ message: "Message envoyé" });
}
