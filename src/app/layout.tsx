import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import CartProvider from "@/components/CartContext";
import LanguageProvider from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sentio — Vision Meets Instinct | Smart HUD Goggles",
  description:
    "Revolutionary smart goggles with transparent OLED HUD, built-in HD camera, and AI crash detection for Motocross and Winter Sports. Pre-order now.",
  keywords: [
    "smart goggles",
    "HUD display",
    "motocross goggles",
    "ski goggles",
    "snowboard goggles",
    "crash detection",
    "action camera goggles",
    "OLED HUD",
    "extreme sports tech",
  ],
  icons: {
    icon: "/images/Screenshot_2026-03-15_042700-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <CartDrawer />
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
