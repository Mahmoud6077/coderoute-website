"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { needOptions, type Locale } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "invalid" | "rate" | "unavailable" | "generic";

export default function ContactForm({ t, lang }: { t: Dictionary["contact"]; lang: Locale }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.get("name"),
          contact: fields.get("contact"),
          need: fields.get("need"),
          message: fields.get("message"),
          company_website: fields.get("company_website"),
          lang,
        }),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setStatus(body.error === "invalid" || body.error === "rate" || body.error === "unavailable" ? body.error : "generic");
    } catch {
      setStatus("generic");
    }
  }

  const error = status === "invalid" || status === "rate" || status === "unavailable" || status === "generic" ? t.errors[status] : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="cf-name">{t.name}</label>
        <input id="cf-name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" placeholder={t.namePh} />
      </div>
      <div className="field">
        <label htmlFor="cf-contact">{t.contact}</label>
        <input id="cf-contact" name="contact" type="text" required minLength={5} maxLength={150} dir="ltr" className="ltr-input" placeholder={t.contactPh} />
      </div>
      <div className="field">
        <label htmlFor="cf-need">{t.need}</label>
        <select id="cf-need" name="need" defaultValue="assistant">
          {needOptions.map((key) => (
            <option key={key} value={key}>{t.needs[key]}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-message">{t.message}</label>
        <textarea id="cf-message" name="message" rows={4} maxLength={2000} placeholder={t.messagePh} />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company-website">Company website</label>
        <input id="cf-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send}
      </button>
      <p className="form-note">{t.privacyNote}</p>
      <div aria-live="polite">
        {status === "success" && <p className="form-msg form-ok">{t.success}</p>}
        {error && <p className="form-msg form-err" role="alert">{error}</p>}
      </div>
    </form>
  );
}
