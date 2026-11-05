import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0F11",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Sentio — Vision Meets Instinct | Smart HUD Goggles",
  description:
    "Revolutionary smart goggles with transparent OLED HUD, built-in HD camera, and AI crash detection for Motocross and Winter Sports.",
  keywords: [
    "smart goggles",
    "HUD display",
    "motocross goggles",
    "ski goggles",
    "crash detection",
    "ESP32",
    "OLED HUD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${martian.variable}`}>
      <body className="font-sans bg-graphite text-paper">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
