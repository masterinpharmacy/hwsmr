import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AanmeldForm from "@/components/AanmeldForm";

export const metadata = {
  title: "Aanmelden | Hoeksche Waard Stopt Met Roken",
  description:
    "Meld je gratis aan voor begeleiding bij het stoppen met roken, bij Apotheek Numansdorp in de Hoeksche Waard.",
};

export default function AanmeldenPage() {
  return (
    <main className="font-body">
      <div className="relative bg-dusk">
        <Header />
        <div className="mx-auto max-w-3xl px-6 pt-40 pb-16 sm:pt-48">
          <p className="eyebrow text-cloud/70 mb-4">Aanmelden</p>
          <h1 className="font-display text-4xl sm:text-5xl text-cloud leading-tight">
            Twee minuten, dan pakken wij het op.
          </h1>
          <p className="mt-5 text-cloud/80 leading-relaxed max-w-xl">
            We vragen alleen wat nodig is om contact met je op te nemen.
            Medische gegevens bespreek je later, veilig en persoonlijk, met
            Apotheek Numansdorp.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <AanmeldForm />
      </div>
      <Footer />
    </main>
  );
}
