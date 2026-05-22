import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import FloatingSocials from "./components/FloatingSocials";

// 🐾 Initialize Google Font
const inter = Inter({ subsets: ["latin"] });

// 🩺 Bulletproof Metadata Configuration (Fixes WhatsApp/Facebook previews)
export const metadata: Metadata = {
  title: "PatitasGTO | E-Commerce y Cuidado de Mascotas en Guanajuato",
  description: "Servicios de paseos, cuidado higiénico y la mejor tienda de mascotas local, por impresión bajo demanda e importada en Guanajuato capital.",
  metadataBase: new URL("https://www.patitasgto.com"),
  
  openGraph: {
    title: "PatitasGTO | E-Commerce y Cuidado de Mascotas",
    description: "Servicios locales de paseadores de confianza en GTO y una tienda curada con lo mejor para el rey de la casa.",
    url: "https://www.patitasgto.com",
    siteName: "PatitasGTO",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo.png", // Points directly to public/logo.png
        width: 1200,
        height: 630,
        alt: "PatitasGTO Logo Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatitasGTO",
    description: "Servicios de paseos y tienda de mascotas en Guanajuato capital.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        className={`${inter.className} antialiased font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingSocials />
        </ThemeProvider>
      </body>
    </html>
  );
}