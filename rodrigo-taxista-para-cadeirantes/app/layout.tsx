import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import { Provider } from "../components/ui/provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  preload: true,
});

export const metadata: Metadata = {
  title: "Rodrigo - Transporte adaptado para cadeirantes",
  description: "Taxi destinado à cadeirantes",
  creator: "Rodrigo",
  applicationName: "Rodrigo - Transporte adaptado para cadeirantes",
  keywords:
    "Taxi, Cadeirantes, Transporte Adaptado, Belo Horizonte, Rodrigo, Taxista, Acessibilidade, Acessível, Taxi para Cadeirantes",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app/",
    siteName: "Rodrigo - Transporte adaptado para cadeirantes",
    title: "Rodrigo - Transporte adaptado para cadeirantes",
    description: "Taxi destinado à cadeirantes",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "4pay by Seidor",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "script:application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Rodrigo - Transporte adaptado para cadeirantes",
      description: "Taxi destinado à cadeirantes",
      url: "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app",
      provider: {
        "@type": "Organization",
        name: "Rodrigo - Transporte adaptado para cadeirantes",
        url: "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app",
      },
      serviceType: "Transporte para Cadeirantes",
      areaServed: {
        "@type": "Country",
        name: "Brazil",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={montserrat.className}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
