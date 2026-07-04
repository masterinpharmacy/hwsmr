export default function Footer() {
  return (
    <footer className="bg-dusk text-cloud">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl mb-3">HWSMR</p>
          <p className="text-sm text-cloud/70 leading-relaxed">
            Een initiatief van Apotheek Numansdorp, in samenwerking met de
            gemeente Hoeksche Waard, voor een rookvrije regio.
          </p>
        </div>
        <div id="apotheken">
          <p className="eyebrow text-gold mb-4">Apotheek Numansdorp</p>
          <ul className="space-y-2 text-sm text-cloud/80">
            <li>Numansdorp, Hoeksche Waard</li>
            <li>Bereikbaar via het aanmeldformulier</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold mb-4">Contact</p>
          <p className="text-sm text-cloud/80 leading-relaxed">
            Vragen over het traject? Neem contact op met Apotheek
            Numansdorp, of meld je direct aan via het formulier.
          </p>
          <a
            href="/aanmelden"
            className="inline-block mt-4 text-sm font-medium text-gold hover:text-cloud transition-colors"
          >
            Direct aanmelden →
          </a>
        </div>
      </div>
      <div className="border-t border-cloud/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-cloud/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Hoeksche Waard Stopt Met Roken</span>
          <span>Jouw gegevens worden vertrouwelijk behandeld conform de AVG.</span>
        </div>
      </div>
    </footer>
  );
}
