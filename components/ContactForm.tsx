"use client";

import { FormEvent, useState } from "react";

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Une erreur est survenue.");
      setStatus("Merci, votre message a bien été envoyé. Notre équipe vous répondra rapidement.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Impossible d’envoyer le message pour le moment.");
    } finally { setLoading(false); }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field"><label htmlFor="name">Votre nom</label><input id="name" name="name" required placeholder="Nom et prénom" /></div>
        <div className="field"><label htmlFor="email">Votre email</label><input id="email" type="email" name="email" required placeholder="vous@entreprise.com" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="phone">Téléphone</label><input id="phone" type="tel" name="phone" placeholder="Votre numéro" /></div>
        <div className="field"><label htmlFor="company">Entreprise / organisation</label><input id="company" name="company" placeholder="Nom de votre structure" /></div>
      </div>
      <div className="field">
        <label htmlFor="service">Pôle recherché</label>
        <select id="service" name="service" defaultValue={initialService} required>
          <option value="" disabled>Sélectionnez un pôle</option>
          <option value="Consulting">Xamogelo Consulting</option>
          <option value="Académie">Xamogelo Académie</option>
          <option value="Marketing">Xamogelo Marketing</option>
          <option value="Digital">Xamogelo Digital</option>
          <option value="Studio">Xamogelo Studio</option>
          <option value="Accompagnement global">Accompagnement global</option>
        </select>
      </div>
      <div className="field"><label htmlFor="message">Votre message</label><textarea id="message" name="message" required placeholder="Parlez-nous de votre projet..." /></div>
      <button className="button button-primary" type="submit" disabled={loading}>{loading ? "Envoi en cours..." : "Envoyer ma demande ↗"}</button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
