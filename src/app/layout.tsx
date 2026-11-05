import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/CartContext";
import CartDrawer from "@/components/CartDrawer";
import LanguageProvider from "@/components/LanguageContext";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/ui/RevealObserver";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
  // Its generated fallback would swallow Cyrillic before Roboto Flex is tried
  adjustFontFallback: false,
});

// Archivo has no Cyrillic. This steps in for Bulgarian with the same width axis,
// and browsers only download it when Cyrillic text is on the page.
const flex = Roboto_Flex({
  subsets: ["cyrillic"],
  variable: "--font-flex",
  axes: ["wdth"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const martian = Martian_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-martian",
  display: "swap",
});

/** Runs before first paint so saved theme and language never flash */
const earlyPrefs = `try{var d=document.documentElement;d.setAttribute("data-theme",localStorage.getItem("sentio-theme")==="light"?"light":"dark");if(localStorage.getItem("sentio-lang")==="bg")d.classList.add("lang-wait")}catch(e){}`;

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
    <html lang="en" className={`${archivo.variable} ${flex.variable} ${martian.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyPrefs }} />
      </head>
      <body className="font-sans bg-graphite text-paper">
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <CartDrawer />
              <RevealObserver />
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
