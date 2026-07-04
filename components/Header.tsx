import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="/" className="font-display text-lg tracking-tight text-cloud">
          HWSMR
          <span className="block text-[0.65rem] font-body font-medium tracking-[0.14em] uppercase text-cloud/70 -mt-1">
            Hoeksche Waard Stopt Met Roken
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-cloud/90">
          <Link href="/#traject" className="hover:text-gold transition-colors">
            Het traject
          </Link>
          <Link href="/#apotheken" className="hover:text-gold transition-colors">
            Apotheken
          </Link>
          <Link href="/#faq" className="hover:text-gold transition-colors">
            Vragen
          </Link>
          <Link
            href="/aanmelden"
            className="rounded-full bg-gold px-5 py-2 text-ink hover:bg-cloud transition-colors"
          >
            Aanmelden
          </Link>
        </nav>
        <Link
          href="/aanmelden"
          className="sm:hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink"
        >
          Aanmelden
        </Link>
      </div>
    </header>
  );
}
