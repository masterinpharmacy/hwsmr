import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Horizon from "@/components/Horizon";
import BrokenCigarette from "@/components/BrokenCigarette";

const STAPPEN = [
  {
    n: "01",
    titel: "Je meldt je aan",
    tekst:
      "Via het formulier laat je kort weten wie je bent. Geen wachtlijst, geen verwijsbrief nodig.",
  },
  {
    n: "02",
    titel: "Kennismaking bij Apotheek Numansdorp",
    tekst:
      "Een vertrouwd gezicht van je apotheek bespreekt met jou je rookgedrag, eerdere pogingen en wat voor jou gaat werken.",
  },
  {
    n: "03",
    titel: "Begeleiding op maat",
    tekst:
      "Persoonlijke gesprekken, eventueel in combinatie met hulpmiddelen, verspreid over een aantal maanden — net zo lang als jij nodig hebt.",
  },
];

const FAQS = [
  {
    v: "Wat kost het mij?",
    a: "Niets. Het traject wordt kosteloos aangeboden dankzij de samenwerking tussen Apotheek Numansdorp en de gemeente Hoeksche Waard.",
  },
  {
    v: "Heb ik een verwijzing van mijn huisarts nodig?",
    a: "Nee. Je kunt je rechtstreeks aanmelden bij Apotheek Numansdorp.",
  },
  {
    v: "Moet ik al klant zijn bij Apotheek Numansdorp?",
    a: "Nee, iedereen uit de Hoeksche Waard is welkom, ook als je je medicijnen normaal bij een andere apotheek haalt.",
  },
  {
    v: "Moet ik mijn BSN opgeven om mee te doen?",
    a: "Nee. Voor de aanmelding hebben we alleen je naam en contactgegevens nodig. Eventuele zorggegevens worden pas later, veilig en rechtstreeks bij de apotheek, vastgelegd.",
  },
];

export default function HomePage() {
  return (
    <main className="font-body">
      <Horizon>
        <Header />
        <div className="mx-auto max-w-6xl px-6 pt-40 pb-28 sm:pt-52 sm:pb-36 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <p className="eyebrow text-cloud/80 mb-5">
              Een initiatief van Apotheek Numansdorp
            </p>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] text-cloud">
              Elke ochtend zonder sigaret begint bij één beslissing.
            </h1>
            <p className="mt-6 text-cloud/90 text-lg leading-relaxed">
              Ongeveer 1 op de 5 volwassenen in de Hoeksche Waard rookt nog. Wij
              helpen je er kosteloos vanaf — persoonlijk, dichtbij, bij je
              vertrouwde apotheek in Numansdorp.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/aanmelden"
                className="rounded-full bg-gold px-7 py-3.5 text-ink font-medium hover:bg-cloud transition-colors"
              >
                Meld je gratis aan
              </Link>
              <Link
                href="#traject"
                className="rounded-full border border-cloud/40 px-7 py-3.5 text-cloud font-medium hover:border-cloud transition-colors"
              >
                Bekijk het traject
              </Link>
            </div>
          </div>
          <div className="w-56 md:w-72 flex-shrink-0">
            <BrokenCigarette />
          </div>
        </div>
      </Horizon>

      {/* Waarom */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid sm:grid-cols-3 gap-10">
        <div className="sm:col-span-1">
          <p className="eyebrow text-polder mb-3">Waarom dit initiatief</p>
          <h2 className="font-display text-3xl leading-tight">
            Wij zien de gevolgen van roken elke dag, van dichtbij.
          </h2>
        </div>
        <div className="sm:col-span-2 text-ink/80 leading-relaxed space-y-4 text-[1.05rem]">
          <p>
            Roken blijft een van de grootste oorzaken van ziekte en
            vroegtijdig overlijden — ook hier, in onze eigen regio. Als
            apotheker zien wij dagelijks wat het met de gezondheid van onze
            klanten doet.
          </p>
          <p>
            Daarom is Apotheek Numansdorp dit initiatief gestart: met steun
            van de gemeente bouwen we aan een sterkere en rookvrije
            gemeenschap in de Hoeksche Waard. Niet met verwijten, maar met
            praktische, persoonlijke hulp.
          </p>
        </div>
      </section>

      {/* Traject */}
      <section id="traject" className="bg-cloud border-y border-ink/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow text-polder mb-3">Hoe het werkt</p>
          <h2 className="font-display text-3xl sm:text-4xl mb-14 max-w-xl">
            Drie stappen naar een rookvrij leven.
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {STAPPEN.map((s) => (
              <div key={s.n}>
                <span className="font-display text-4xl text-dawn">{s.n}</span>
                <h3 className="font-display text-xl mt-4 mb-2">{s.titel}</h3>
                <p className="text-ink/70 leading-relaxed text-sm">{s.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-dusk text-cloud">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-display italic text-2xl sm:text-3xl leading-relaxed">
            "De eerste week is wennen. Daarna merk je dat je weer ruikt,
            weer proeft — en weer ademhaalt."
          </p>
          <p className="mt-6 text-sm text-cloud/60">
            Een deelnemer aan het stopprogramma
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <p className="eyebrow text-polder mb-3">Veelgestelde vragen</p>
        <h2 className="font-display text-3xl mb-12">Nog twijfels?</h2>
        <div className="divide-y divide-ink/10">
          {FAQS.map((f) => (
            <details key={f.v} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer font-medium text-ink">
                {f.v}
                <span className="text-dawn text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink/70 leading-relaxed text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-polder/15 border border-polder/30 px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            Zet vandaag de eerste stap.
          </h2>
          <p className="text-ink/70 max-w-md mx-auto mb-8">
            Aanmelden kost twee minuten. De begeleiding erna kan je leven
            veranderen.
          </p>
          <Link
            href="/aanmelden"
            className="inline-block rounded-full bg-dusk text-cloud px-8 py-3.5 font-medium hover:bg-ink transition-colors"
          >
            Meld je gratis aan
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
