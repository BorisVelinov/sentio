"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Eye } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function SplitHero() {
  const { t } = useLanguage();

  return (
    <section className="split-hero" style={{ paddingTop: "4rem" }}>
      <div className="split-hero-left" style={{ background: "var(--bg-hero-left)" }}>
        <div style={{ position: "absolute", top: "30%", left: "40%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, var(--snow-glow) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} style={{ position: "relative", zIndex: 5, textAlign: "center", maxWidth: "400px" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", background: "var(--surface)", border: "1px solid var(--border)", marginBottom: "1.5rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--snow-accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            <Smartphone size={14} />
            {t("hero.app.badge")}
          </motion.div>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            {t("hero.app.title1")}<br />
            <span className="gradient-text-snow">{t("hero.app.title2")}</span>
          </h1>

          <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300 }}>
            {t("hero.app.desc")}
          </p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} style={{ position: "relative", maxWidth: "200px", margin: "0 auto 2rem" }} className="animate-float">
            <Image src="/images/app-mockup.png" alt="Sentio App" width={400} height={800} style={{ width: "100%", height: "auto", filter: "drop-shadow(0 20px 40px rgba(56,189,248,0.15))", borderRadius: "1.5rem" }} priority />
          </motion.div>

          <Link href="/app" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "9999px", background: "var(--surface-elevated)", border: "1px solid var(--border)", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", transition: "all 0.3s" }}>
            {t("hero.app.cta")} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="split-hero-right" style={{ background: "var(--bg-hero-right)" }}>
        <div style={{ position: "absolute", top: "30%", right: "30%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, var(--moto-glow) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} style={{ position: "relative", zIndex: 5, textAlign: "center", maxWidth: "420px" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "9999px", background: "var(--surface)", border: "1px solid var(--border)", marginBottom: "1.5rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--moto-accent)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            <Eye size={14} />
            {t("hero.goggles.badge")}
          </motion.div>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
            {t("hero.goggles.title1")}<br />
            <span className="gradient-text-moto">{t("hero.goggles.title2")}</span>
          </h1>

          <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300 }}>
            {t("hero.goggles.desc")}
          </p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.6 }} style={{ position: "relative", maxWidth: "380px", margin: "0 auto 2rem" }} className="animate-float">
            <Image src="/images/goggles_nobg.png" alt="Sentio AR Goggles" width={800} height={600} style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 50px rgba(245,158,11,0.2))" }} priority />
          </motion.div>

          <Link href="/#goggles" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "9999px", background: "var(--accent-primary)", color: "var(--text-inverse)", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", transition: "all 0.3s" }}>
            {t("hero.goggles.cta")} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <div className="split-hero-divider" style={{ background: "linear-gradient(180deg, transparent, var(--border-hover), transparent)" }} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, textAlign: "center", padding: "1rem", background: "linear-gradient(180deg, transparent, var(--bg-primary))" }}>
        <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>
          {t("hero.tagline")}
        </p>
      </motion.div>
    </section>
  );
}
