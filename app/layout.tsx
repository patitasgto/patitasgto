import type { Metadata } from "next";
import { Inter } from "google-fonts-next"; // or your default font setup
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PatitasGTO | E-Commerce y Cuidado de Mascotas en Guanajuato",
  description: "Servicios de paseos, cuidado y la mejor tienda de mascotas local e importada en Guanajuato capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}