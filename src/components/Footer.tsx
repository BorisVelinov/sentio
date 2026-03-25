"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    [t("footer.product")]: [
      { label: t("footer.dirt_edition"), href: "/moto" },
      { label: t("footer.alpine_edition"), href: "/snow" },
      { label: t("footer.sentio_app"), href: "/app" },
    ],
    [t("footer.technology")]: [
      { label: t("footer.holographic_ar"), href: "/#technology" },
      { label: t("footer.crash_detection"), href: "/#technology" },
      { label: t("footer.squad_radar"), href: "/app" },
    ],
    [t("footer.company")]: [
      { label: t("footer.about_us"), href: "/about" },
      { label: t("footer.careers"), href: "#" },
      { label: t("footer.contact"), href: "#" },
    ],
    [t("footer.legal")]: [
      { label: t("footer.privacy"), href: "#" },
      { label: t("footer.terms"), href: "#" },
      { label: t("footer.warranty"), href: "#" },
    ],
  };

  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{t("footer.title")}</h3>
          <p style={{ color: "var(--text-tertiary)", fontSize: "0.875rem", marginBottom: "2rem", maxWidth: "24rem", marginLeft: "auto", marginRight: "auto" }}>{t("footer.desc")}</p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "0.75rem", maxWidth: "28rem", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" placeholder="your@email.com" style={{ flex: "1 1 200px", padding: "0.75rem 1.25rem", borderRadius: "9999px", backgroundColor: "var(--surface)", border: "1px solid var(--border)", fontSize: "0.875rem", color: "var(--text-primary)", outline: "none" }} />
            <button type="submit" style={{ padding: "0.75rem 1.5rem", borderRadius: "9999px", backgroundColor: "var(--accent-primary)", color: "var(--text-inverse)", fontSize: "0.875rem", fontWeight: 600, border: "none", cursor: "pointer", flexShrink: 0 }}>{t("footer.subscribe")}</button>
          </form>
        </motion.div>

        <div className="footer-links-grid" style={{ marginBottom: "3rem" }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text-tertiary)", marginBottom: "1rem", fontWeight: 600 }}>{category}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}><Link href={link.href} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ position: "relative", width: "2.25rem", height: "2.25rem" }}>
              <Image src="/images/Screenshot_2026-03-14_033502-removebg-preview.png" alt="Sentio Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>© {new Date().getFullYear()} Sentio Technologies.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", backgroundColor: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon style={{ color: "var(--text-secondary)" }} size={15} />
              </a>
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-tertiary)", background: "none", border: "none", cursor: "pointer" }}>
            {t("footer.back_top")} <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
