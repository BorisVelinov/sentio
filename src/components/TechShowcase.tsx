"use client";

import { motion } from "framer-motion";
import { Glasses, Radio, MapPin, ShieldAlert } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function TechShowcase() {
  const { t } = useLanguage();

  const features = [
    { icon: Glasses, title: t("tech.ar.title"), description: t("tech.ar.desc"), large: true },
    { icon: Radio, title: t("tech.audio.title"), description: t("tech.audio.desc") },
    { icon: MapPin, title: t("tech.squad.title"), description: t("tech.squad.desc") },
    { icon: ShieldAlert, title: t("tech.hazard.title"), description: t("tech.hazard.desc"), large: true },
  ];

  return (
    <section id="technology" className="section-responsive" style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, var(--surface) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />
      <div className="container-main" style={{ position: "relative", zIndex: 5 }}>
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>{t("tech.subtitle")}</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>{t("tech.title")}</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "1.0625rem", maxWidth: "38rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>{t("tech.desc")}</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card" style={feature.large ? { gridColumn: "span 2" } : {}}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", background: "var(--surface-elevated)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon size={20} style={{ color: "var(--text-primary)" }} />
                </div>
                <h3 style={{ fontSize: feature.large ? "1.375rem" : "1.125rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", letterSpacing: "-0.01em", fontFamily: "var(--font-display)" }}>{feature.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300 }}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
