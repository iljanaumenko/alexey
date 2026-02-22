import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Alexey Naumenko",
  description:
    "Discover the multidisciplinary world of Alexey Naumenko, a renowned artist and designer based in Wrocław, Poland. Specializing in creating visually stunning and emotionally resonant spaces, Alexey's portfolio features stained glass, frescoes, innovative art pieces and bespoke furniture. Explore his transformative approach to art and design, ideal for enhancing private and commercial interiors.",
  keywords:
    "Alexey Naumenko, monumental artist, painter, interior design, bespoke furniture, stained glass, frescoes, wall paintings, artistic mirrors, unique artistic objects",
  authors: [{ name: "Ilja Naumenko" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@0;1&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="">
        <LanguageProvider>
          <div className="text-primary bg-back">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
