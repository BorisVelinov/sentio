"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function BrandSplit() {
  const { t } = useLanguage();

  const editions = [
    {
      id: "moto",
      title: t("brand.dirt.title"),
      subtitle: t("brand.dirt.subtitle"),
      tagline: t("brand.dirt.tagline"),
      href: "/moto",
      image: "/images/moto-goggles.png",
      actionImage: "/images/moto-action.png",
      accentColor: "var(--moto-accent)",
      glowColor: "var(--moto-glow)",
      gradientClass: "gradient-text-moto",
      borderColor: "rgba(245,158,11,0.12)",
      price: "€239.60",
    },
    {
      id: "snow",
      title: t("brand.alpine.title"),
      subtitle: t("brand.alpine.subtitle"),
      tagline: t("brand.alpine.tagline"),
      href: "/snow",
      image: "/images/snow-goggles.png",
      actionImage: "/images/snow-action.png",
      accentColor: "var(--snow-accent)",
      glowColor: "var(--snow-glow)",
      gradientClass: "gradient-text-snow",
      borderColor: "rgba(56,189,248,0.12)",
      price: "€239.60",
    },
  ];

  return (
    <section id="goggles" className="section-responsive" style={{ position: "relative" }}>
      <div className="container-main">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>{t("brand.subtitle")}</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{t("brand.title")}</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "1.0625rem", maxWidth: "36rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>{t("brand.desc")}</p>
        </motion.div>

        <div className="brand-cards">
          {editions.map((edition, i) => (
            <motion.div key={edition.id} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.15 }}>
              <Link href={edition.href} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", border: `1px solid ${edition.borderColor}`, transition: "transform 0.4s ease, box-shadow 0.4s ease", cursor: "pointer", minHeight: "520px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 20px 60px ${edition.glowColor}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ position: "absolute", inset: 0 }}>
                    <Image src={edition.actionImage} alt={`${edition.title}`} fill style={{ objectFit: "cover", opacity: 0.35 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 20%, var(--bg-primary) 90%)" }} />
                  </div>
                  <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "2px", background: `linear-gradient(90deg, transparent, ${edition.accentColor}, transparent)`, opacity: 0.6, zIndex: 5 }} />
                  <div style={{ position: "relative", zIndex: 5, padding: "2rem" }}>
                    <div style={{ maxWidth: "280px", margin: "0 auto 1.5rem" }}>
                      <Image src={edition.image} alt={`Sentio ${edition.title}`} width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "contain", filter: `drop-shadow(0 12px 30px ${edition.glowColor})` }} />
                    </div>
                    <p style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: edition.accentColor, fontWeight: 600, marginBottom: "0.375rem" }}>Sentio</p>
                    <h3 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>
                      <span className={edition.gradientClass}>{edition.title}</span>{" "}
                      <span style={{ color: "var(--text-primary)" }}>{edition.subtitle}</span>
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 300, marginBottom: "1.25rem", lineHeight: 1.6 }}>{edition.tagline}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {t("brand.explore")} <ArrowRight size={16} />
                      </span>
                      <span style={{ fontSize: "1.25rem", fontWeight: 800, color: edition.accentColor }}>{edition.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
