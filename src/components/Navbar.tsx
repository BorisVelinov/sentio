"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useCart } from "./CartContext";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, cartCount } = useCart();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.goggles"), href: "/#goggles" },
    { label: t("nav.app"), href: "/app" },
    { label: t("nav.dirt"), href: "/moto" },
    { label: t("nav.alpine"), href: "/snow" },
    { label: t("nav.about"), href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease",
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-nav">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", flexShrink: 0 }}>
            <div style={{ position: "relative", width: "2.75rem", height: "2.75rem" }}>
              <Image src="/images/Screenshot_2026-03-14_033502-removebg-preview.png" alt="Sentio Logo" fill style={{ objectFit: "contain" }} priority />
            </div>
            <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", fontFamily: "var(--font-display)" }}>Sentio</span>
          </Link>

          <div style={{ display: "none", alignItems: "center", gap: "2rem", position: "absolute", left: "50%", transform: "translateX(-50%)" }} className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.3s", letterSpacing: "0.01em" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
              >{link.label}</Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <LanguageToggle />
            <ThemeToggle />

            <button onClick={openCart} aria-label="Open cart" style={{ position: "relative", width: "2.5rem", height: "2.5rem", borderRadius: "50%", border: "1px solid var(--border)", background: "var(--surface-elevated)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", flexShrink: 0 }}>
              <ShoppingBag size={17} style={{ color: "var(--text-primary)" }} />
              {cartCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ position: "absolute", top: "-3px", right: "-3px", width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#F59E0B", color: "#000", fontSize: "0.625rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {cartCount}
                </motion.span>
              )}
            </button>

            <Link href="/moto" className="nav-cta-desktop" style={{ display: "none", padding: "0.5rem 1.25rem", borderRadius: "9999px", backgroundColor: "var(--accent-primary)", color: "var(--text-inverse)", fontWeight: 600, fontSize: "0.8125rem", textDecoration: "none", transition: "transform 0.2s", letterSpacing: "0.01em" }}>
              {t("nav.preorder")}
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-mobile-toggle" aria-label="Toggle menu" style={{ display: "flex", padding: "0.5rem", background: "none", border: "none", cursor: "pointer" }}>
              {mobileOpen ? <X size={22} style={{ color: "var(--text-primary)" }} /> : <Menu size={22} style={{ color: "var(--text-primary)" }} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden", background: "var(--bg-primary)", borderTop: "1px solid var(--border)" }}>
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", textDecoration: "none", padding: "0.625rem 0", fontWeight: 500 }}>{link.label}</Link>
              ))}
              <Link href="/moto" onClick={() => setMobileOpen(false)} style={{ marginTop: "0.5rem", padding: "0.875rem 1.25rem", borderRadius: "9999px", backgroundColor: "var(--accent-primary)", color: "var(--text-inverse)", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", textAlign: "center" }}>
                {t("nav.preorder_now")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 768px) {
          .nav-links-desktop { display: flex !important; }
          .nav-cta-desktop { display: inline-block !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
