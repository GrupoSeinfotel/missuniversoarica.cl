import type { Metadata } from "next";
import "./globals.css";
import SystemChannelNotifier from "@/components/ui/SystemChannelNotifier";


export const metadata: Metadata = {
  metadataBase: new URL("https://missuniversoarica.cl"),
  title: {
    default: "Miss Universe Arica | Sitio Oficial",
    template: "%s | Miss Universe Arica"
  },
  description: "La plataforma oficial del certamen de belleza más importante de la región. Sé parte del legado en Arica.",
  keywords: ["Miss Universe", "Arica", "Concurso de belleza", "Chile", "Certamen", "Modelo"],
  authors: [{ name: "Miss Universe Arica" }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://missuniversoarica.cl',
    siteName: 'Miss Universe Arica',
    title: 'Miss Universe Arica | Sitio Oficial',
    description: 'La plataforma oficial del certamen de belleza más importante de la región. Sé parte del legado en Arica.',
    images: [{
      url: '/assets/1768626668674_arica_sola_png.png',
      width: 1200,
      height: 630,
      alt: 'Miss Universe Arica - Logo Oficial'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miss Universe Arica | Sitio Oficial',
    description: 'La plataforma oficial del certamen de belleza más importante de la región.',
    images: ['/assets/1768626668674_arica_sola_png.png']
  },
  alternates: {
    canonical: 'https://missuniversoarica.cl',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <SystemChannelNotifier />
      </body>
    </html>
  );
}
