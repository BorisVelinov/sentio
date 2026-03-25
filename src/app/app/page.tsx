"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Radio, Gauge, Shield, Smartphone, Zap, ArrowRight,
  AlertTriangle, Timer, Users, MessageSquare,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
};

const appFeatures = [
  {
    icon: Gauge,
    title: "Passive Stat Tracking",
    description: "Ditch the 'Start/Stop' workout button. Sentio passively tracks your entire day in the background — top speed, airtime, vertical drop, and yes, your worst wipeouts.",
  },
  {
    icon: MapPin,
    title: "3D Squad Radar",
    description: "Premium 3D terrain maps adapt instantly for Snow or Dirt. See every rider in your crew in real-time. No more circling the parking lot wondering where your buddy dropped.",
  },
  {
    icon: AlertTriangle,
    title: "Hazard Warnings",
    description: "Waze-style community hazard system for the mountains and trails. Ice patches, fallen trees, blind drops — tagged by riders who hit them first so you don't have to.",
  },
  {
    icon: MessageSquare,
    title: "Glove-Friendly Walkie-Talkie",
    description: "Voice-to-massive-text-bubble messaging. Hit the puck button, bark your message, and it arrives as a giant readable text on your crew's screens. Works with frozen fingers.",
  },
  {
    icon: Timer,
    title: "Session Analytics",
    description: "Every run automatically logged with speed, altitude, G-force, and GPS data at 10 Hz. Replay your day frame-by-frame with telemetry overlays. Post-ride bragging rights, backed by data.",
  },
  {
    icon: Users,
    title: "Crew Management",
    description: "Create ride crews, share live locations, and set meetup pins on the terrain map. Emergency SOS broadcasts to your entire crew with GPS coordinates if someone goes down.",
  },
];

export default function AppPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "8rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Background glow */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, var(--snow-glow) 0%, transparent 60%)", filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 5 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="product-hero-grid">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  marginBottom: "1.5rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--snow-accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Smartphone size={14} />
                Sentio App
              </motion.div>

              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text-primary)", fontFamily: "var(--font-display)", marginBottom: "1.25rem" }}>
                The Always-On<br />
                <span className="gradient-text-snow">Social Radar</span>
              </h1>

              <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300, maxWidth: "500px", marginBottom: "2rem" }}>
                A tactical, real-time HUD built for extreme environments. Passively tracks your day, maps your squad on premium 3D terrain, and keeps everyone alive with community hazard alerts.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link
                  href="/#goggles"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 1.75rem", borderRadius: "9999px",
                    background: "var(--accent-primary)", color: "var(--text-inverse)",
                    fontWeight: 600, fontSize: "0.875rem", textDecoration: "none",
                  }}
                >
                  Pair with Goggles <ArrowRight size={16} />
                </Link>
                <Link
                  href="#features"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.875rem 1.75rem", borderRadius: "9999px",
                    background: "var(--surface-elevated)", border: "1px solid var(--border)",
                    color: "var(--text-primary)", fontWeight: 600, fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  See Features
                </Link>
              </div>
            </motion.div>

            {/* App mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{ maxWidth: "280px" }} className="animate-float">
                <Image
                  src="/images/app-mockup.png"
                  alt="Sentio App showing real-time 3D squad map"
                  width={400}
                  height={800}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "2rem",
                    filter: "drop-shadow(0 30px 60px rgba(56,189,248,0.2))",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ KEY STATS ═══ */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "3rem 0" }}>
        <div className="container-main">
          <div className="stats-bar">
            {[
              { value: "10 Hz", label: "GPS Tracking" },
              { value: "3D", label: "Terrain Maps" },
              { value: "Live", label: "Squad Radar" },
              { value: "0", label: "Buttons to Start" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{ textAlign: "center" }}
              >
                <p style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--snow-accent)", fontFamily: "var(--font-display)" }}>{stat.value}</p>
                <p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", marginTop: "0.25rem" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section id="features" className="section-responsive">
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Features</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Everything Your Squad Needs
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.25rem" }}>
            {appFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.08 }} className="bento-card">
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "0.875rem", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon size={20} style={{ color: "var(--snow-accent)" }} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", fontFamily: "var(--font-display)" }}>{feature.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300 }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ GOGGLES INTEGRATION ═══ */}
      <section className="section-responsive" style={{ background: "var(--surface)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="product-hero-grid">
            <motion.div {...fadeUp} transition={{ duration: 1 }} style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ maxWidth: "400px" }}>
                <Image
                  src="/images/goggles_nobg.png"
                  alt="Sentio AR Goggles paired with the app"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto", filter: "drop-shadow(0 20px 50px var(--moto-glow))" }}
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.15 }}>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--moto-accent)", marginBottom: "0.75rem", fontWeight: 600 }}>Better Together</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)", marginBottom: "1rem" }}>
                App + Goggles =<br /><span className="gradient-text-moto">Pure Flow State</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
                When paired with Sentio AR Goggles, your app data projects directly onto your lens. Speed, squad positions, and hazard alerts — all in your field of view, without breaking focus. The app is free. The goggles are the upgrade.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {[
                  { icon: Zap, text: "Automatic Bluetooth pairing" },
                  { icon: Radio, text: "Bone-conduction audio for voice pings" },
                  { icon: Shield, text: "Emergency SOS with GPS coordinates" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Icon size={16} style={{ color: "var(--moto-accent)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/#goggles"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.875rem 1.75rem", borderRadius: "9999px",
                  background: "var(--accent-primary)", color: "var(--text-inverse)",
                  fontWeight: 600, fontSize: "0.875rem", textDecoration: "none",
                }}
              >
                Shop AR Goggles <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
