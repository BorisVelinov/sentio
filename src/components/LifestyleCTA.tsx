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

export default function LifestyleCTA() {
  const { t } = useLanguage();

  return (
    <section className="section-responsive" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container-main">
        <motion.div {...fadeUp} transition={{ duration: 1 }}
          style={{ position: "relative", borderRadius: "2rem", overflow: "hidden", minHeight: "500px", display: "flex", alignItems: "flex-end" }}>
          <Image src="/images/squad-lifestyle.png" alt="Squad on the mountain" fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.85) 75%)" }} />

          <div style={{ position: "relative", zIndex: 5, padding: "3rem", width: "100%", maxWidth: "600px" }}>
            <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem", fontWeight: 600 }}>
              {t("lifestyle.badge")}
            </motion.p>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }}
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, fontFamily: "var(--font-display)", marginBottom: "1rem" }}>
              {t("lifestyle.title1")}<br />{t("lifestyle.title2")}
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
              style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontWeight: 300, marginBottom: "2rem" }}>
              {t("lifestyle.desc")}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/moto" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "9999px", background: "linear-gradient(90deg, #f59e0b, #facc15)", color: "#000", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                {t("lifestyle.cta_dirt")} <ArrowRight size={16} />
              </Link>
              <Link href="/snow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>
                {t("lifestyle.cta_alpine")} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 1 }}
            style={{ position: "absolute", bottom: "2rem", right: "2rem", width: "300px", zIndex: 5, display: "none" }} className="lifestyle-goggles-float">
            <Image src="/images/goggles_nobg.png" alt="Sentio AR Goggles" width={600} height={400} style={{ width: "100%", height: "auto", filter: "drop-shadow(0 15px 40px rgba(245,158,11,0.3))" }} />
          </motion.div>
        </motion.div>
      </div>
      <style jsx global>{`@media (min-width: 1024px) { .lifestyle-goggles-float { display: block !important; } }`}</style>
    </section>
  );
}
