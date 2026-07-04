"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function AanmeldForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-polder/15 border border-polder/30 px-8 py-12 text-center">
        <h2 className="font-display text-2xl mb-3">Je aanmelding is verstuurd</h2>
        <p className="text-ink/70 leading-relaxed">
          Bedankt voor je aanmelding. Apotheek Numansdorp neemt binnen
          enkele werkdagen contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Voornaam" name="voornaam" required />
        <Field label="Achternaam" name="achternaam" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="E-mailadres" name="email" type="email" required />
        <Field label="Telefoonnummer" name="telefoon" type="tel" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink mb-2">
          Wil je iets kwijt over je situatie? (optioneel)
        </label>
        <textarea
          name="toelichting"
          rows={4}
          placeholder="Bijvoorbeeld: hoe lang je al rookt, eerdere stoppogingen, of wanneer je het beste bereikbaar bent."
          className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-dawn outline-none resize-none"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink/70">
        <input type="checkbox" required className="mt-1" />
        Ik ga akkoord dat mijn gegevens worden gebruikt om contact met mij
        op te nemen over dit stopprogramma.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto rounded-full bg-dusk text-cloud px-8 py-3.5 font-medium hover:bg-ink transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Versturen..." : "Verstuur aanmelding"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Er ging iets mis bij het versturen. Probeer het opnieuw of bel je
          apotheek rechtstreeks.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-ink/15 px-4 py-3 bg-white focus:border-dawn outline-none"
      />
    </div>
  );
}
