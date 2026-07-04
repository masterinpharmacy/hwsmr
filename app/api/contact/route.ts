import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { voornaam, achternaam, email, telefoon, toelichting } = data;

    if (!voornaam || !achternaam || !email || !telefoon) {
      return NextResponse.json({ error: "Ontbrekende velden" }, { status: 400 });
    }

    await resend.emails.send({
      from: "HWSMR aanmeldingen <aanmelden@hwsmr.nl>",
      to: process.env.CONTACT_TO_EMAIL || "info@hwsmr.nl",
      reply_to: email,
      subject: `Nieuwe aanmelding: ${voornaam} ${achternaam}`,
      text: `
Nieuwe aanmelding voor Hoeksche Waard Stopt Met Roken (Apotheek Numansdorp)

Naam: ${voornaam} ${achternaam}
E-mail: ${email}
Telefoon: ${telefoon}

Toelichting:
${toelichting || "(geen)"}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Serverfout" }, { status: 500 });
  }
}
