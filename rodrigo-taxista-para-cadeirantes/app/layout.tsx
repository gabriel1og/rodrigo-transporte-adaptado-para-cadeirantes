import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo - Transporte adaptado para cadeirantes",
  description: "Taxi destinado à cadeirantes",
  creator: "Rodrigo",
  keywords: "Taxi, Cadeirantes, Transporte Adaptado, Belo Horizonte, Rodrigo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
