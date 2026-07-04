import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hoeksche Waard Stopt Met Roken | Gratis begeleiding stoppen met roken",
  description:
    "Een initiatief van Apotheek Numansdorp: gratis, professionele begeleiding bij het stoppen met roken. Meld je vandaag nog aan.",
  metadataBase: new URL("https://hwsmr.nl"),
  openGraph: {
    title: "Hoeksche Waard Stopt Met Roken",
    description:
      "Gratis begeleiding bij het stoppen met roken, door Apotheek Numansdorp.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${fraunces.variable} ${publicSans.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
