"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, Zap, Users, Globe, Heart, Target } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
};

const values = [
  {
    icon: Zap,
    title: "Invisible Technology",
    description: "The best tech is the tech you forget is there. We engineer our products to disappear into the ride — no menus, no buttons, no friction.",
  },
  {
    icon: Users,
    title: "Crew Over Everything",
    description: "Extreme sports are better with people. Every feature we build starts with the question: does this make riding with your crew better?",
  },
  {
    icon: Mountain,
    title: "Built for the Edge",
    description: "We don't design for comfortable conditions. We design for -25°C mountain ridges and 45°C desert tracks. If it works there, it works everywhere.",
  },
  {
    icon: Heart,
    title: "Safety Without Compromise",
    description: "Crash detection, emergency SOS, and hazard alerts aren't features — they're promises. Every Sentio product is built to bring you home.",
  },
];

const timeline = [
  { year: "2024", event: "Sentio founded with a simple idea: what if your goggles could see what you see, and more?" },
  { year: "2025", event: "First working prototype of the holographic AR display. Partnership with alpine and MX test riders." },
  { year: "2026", event: "Sentio App enters beta with 3D terrain mapping. AR Goggles pre-orders open worldwide." },
  { year: "2027", event: "Full ecosystem launch: App + Goggles + Bone-Conduction Audio. Expanding to more extreme sports." },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, var(--moto-glow) 0%, var(--snow-glow) 50%, transparent 70%)", filter: "blur(120px)", pointerEvents: "none", opacity: 0.5 }} />

        <div className="container-main" style={{ position: "relative", zIndex: 5, textAlign: "center", maxWidth: "800px" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.5rem 1rem", borderRadius: "9999px",
                background: "var(--surface)", border: "1px solid var(--border)",
                marginBottom: "1.5rem", fontSize: "0.75rem", fontWeight: 600,
                color: "var(--text-secondary)", letterSpacing: "0.05em", textTransform: "uppercase",
              }}
            >
              <Target size={14} />
              Our Story
            </motion.div>

            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text-primary)", fontFamily: "var(--font-display)", marginBottom: "1.5rem" }}>
              Invisible Tech.
              <br />
              <span style={{ background: "linear-gradient(90deg, var(--moto-accent), var(--snow-accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Deep Connection.
              </span>
            </h1>

            <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300, maxWidth: "600px", margin: "0 auto" }}>
              Sentio is a digital-first extreme sports technology company building the future ecosystem for alpine and off-road riding. We design premium, frictionless software and hardware that completely blends into the adrenaline experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ MISSION STATEMENT ═══ */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} className="section-responsive">
        <div className="container-main" style={{ maxWidth: "800px", textAlign: "center" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "1.5rem", fontWeight: 600 }}>
              Why We Exist
            </p>
            <blockquote style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "var(--text-primary)", lineHeight: 1.6, fontWeight: 400, fontStyle: "italic", fontFamily: "var(--font-display)" }}>
              &ldquo;Athletes shouldn&apos;t have to freeze their hands, stop their flow, or stare at a screen to stay connected. Whether on a snow-covered peak or a dirt trail, Sentio exists to keep riders safe, flawlessly synced with their squad, and armed with the exact stats they need for the post-ride bragging rights at the lodge.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section-responsive">
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>What Drives Us</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Our Values
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card">
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", background: "var(--surface-elevated)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={20} style={{ color: "var(--text-primary)" }} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", fontFamily: "var(--font-display)" }}>{v.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300 }}>{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="section-responsive" style={{ background: "var(--surface)" }}>
        <div className="container-main" style={{ maxWidth: "700px" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>The Journey</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Our Roadmap
            </h2>
          </motion.div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "2rem", top: 0, bottom: 0, width: "2px", background: "var(--border)" }} />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem", position: "relative" }}
              >
                {/* Dot */}
                <div style={{ width: "4rem", flexShrink: 0, display: "flex", justifyContent: "center", position: "relative", zIndex: 5 }}>
                  <div style={{
                    width: "0.875rem", height: "0.875rem", borderRadius: "50%",
                    background: i <= 2 ? "var(--moto-accent)" : "var(--border)",
                    border: `3px solid var(--bg-primary)`,
                    boxShadow: i <= 2 ? "0 0 12px var(--moto-glow)" : "none",
                    marginTop: "0.25rem",
                  }} />
                </div>

                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--moto-accent)", marginBottom: "0.375rem", fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
                    {item.year}
                  </p>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-responsive">
        <div className="container-main" style={{ textAlign: "center" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)", marginBottom: "1rem" }}>
              Join the Ride
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.0625rem", fontWeight: 300, maxWidth: "32rem", margin: "0 auto 2rem", lineHeight: 1.7 }}>
              We&apos;re building the future of extreme sports tech. Be part of it from day one.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <Link href="/#goggles" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "9999px", background: "var(--accent-primary)", color: "var(--text-inverse)", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}>
                Pre-Order Goggles <ArrowRight size={16} />
              </Link>
              <Link href="/app" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", borderRadius: "9999px", background: "var(--surface-elevated)", border: "1px solid var(--border)", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
                Explore the App
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
