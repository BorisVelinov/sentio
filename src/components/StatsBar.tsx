"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Feather, ShieldCheck, Eye } from "lucide-react";
import { useLanguage } from "./LanguageContext";

function AnimatedCounter({ value, suffix, isText }: { value: number; suffix: string; isText?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || isText) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, isText]);

  if (isText) return <span ref={ref}>SOS</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { icon: Zap, value: 60, suffix: "fps", label: t("stats.ar"), description: t("stats.ar_desc") },
    { icon: Feather, value: 185, suffix: "g", label: t("stats.weight"), description: t("stats.weight_desc") },
    { icon: ShieldCheck, label: t("stats.sos"), value: 0, suffix: "", description: t("stats.sos_desc"), isText: true },
    { icon: Eye, value: 140, suffix: "°", label: t("stats.fov"), description: t("stats.fov_desc") },
  ];

  return (
    <section>
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="container-main">
          <div className="stats-bar">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <Icon size={22} style={{ color: "var(--text-tertiary)", marginBottom: "0.25rem" }} />
                  <span style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--text-primary)", fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isText={stat.isText} />
                  </span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)" }}>{stat.label}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", fontWeight: 300 }}>{stat.description}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
