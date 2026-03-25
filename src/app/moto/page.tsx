"use client";

import { motion } from "framer-motion";
import {
  Gauge, Navigation, Timer, Video, ShoppingCart, ArrowLeft,
  Shield, Droplets, Eye, Zap, Layers, Wrench,
  Check, Truck, RefreshCw, Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

/* ── data ── */

const quickSpecs = [
  "Holographic AR Display @ 60 fps",
  "Aero-Grade Carbon Core",
  "Bone-Conduction Audio",
  "Automatic Crash SOS with GPS",
  "8 h Battery — USB-C Fast Charge",
  "IP54 Dust & Roost Sealed",
];

const motoFeatures = [
  {
    icon: Gauge, label: "Live Speed HUD", detail: "Real-time speed projected onto your lens via the transparent OLED prism.",
    description: "The SSD1309 OLED drives a 128×64 mono display at 60 fps, rendering your current speed in large, high-contrast numerals visible even through roost spray and direct sunlight. An ambient light sensor adjusts brightness in under 200 ms.",
  },
  {
    icon: Navigation, label: "Trail Navigation", detail: "GPS waypoints and compass heading on-lens.",
    description: "Pre-load trail GPX files via the Sentio App, and the HUD displays a bearing arrow and distance to your next waypoint. The fused GPS/GLONASS receiver maintains ±3 m accuracy even under dense tree cover.",
  },
  {
    icon: Timer, label: "Lap Timer", detail: "Precision timing with automatic lap detection.",
    description: "Set a GPS-based start/finish line and Sentio automatically logs each lap, displaying your running time and delta against your personal best. With ±50 ms timing resolution and automatic sector splitting.",
  },
  {
    icon: Video, label: "HD Recording", detail: "Hands-free action camera built into the frame.",
    description: "The onboard OV2640 camera captures 1600×1200 at 15 fps or 800×600 at 30 fps directly to onboard flash — 45 minutes of continuous recording, no SD card needed.",
  },
];

const environmentFeatures = [
  { icon: Shield, title: "IP54 Dust Sealing", description: "Every electronic component sits inside a pressure-tested TPU housing with silicone gaskets at all seam points. Complete dust ingress protection and resistance to splashing water from any direction.", align: "left" },
  { icon: Droplets, title: "Tear-Off Compatible Lens", description: "Accepts standard 7-post tear-off stacks (up to 14 layers). The HUD projection zone sits behind the tear-off plane — removing a layer never interferes with your display.", align: "right" },
  { icon: Eye, title: "High-Contrast Dirt Vision", description: "38% VLT lens with warm amber bias that enhances terrain contrast in flat light. Makes ruts, roots, and rocks pop against the trail surface. Hydrophobic outer coat sheds water and resists fingerprints.", align: "left" },
  { icon: Zap, title: "Vibration-Dampened HUD", description: "OLED module mounted on a dual-durometer silicone cradle that isolates it from frame vibration. Even across whooped-out MX tracks at 80+ km/h, the HUD text remains rock-stable and legible.", align: "right" },
];

const helmetFeatures = [
  { icon: Layers, title: "Triple-Layer Face Foam", description: "Three distinct foam densities: firm outer for support, mid-density for pressure equalization, and soft fleece-covered inner for all-day comfort. Antimicrobial-treated and fully removable." },
  { icon: Shield, title: "Silicone-Grip Strap", description: "45 mm woven strap with triple lines of medical-grade silicone printing. Non-slip grip on any helmet finish — matte, gloss, or carbon fiber — without scratching." },
  { icon: Wrench, title: "Universal MX Helmet Fit", description: "Compatible with 50+ popular motocross and enduro helmets. Outrigger system flexes ±15° to accommodate varying helmet curvatures." },
];

const motoSpecs = [
  { label: "Display", value: "128×64 OLED SSD1309" },
  { label: "Processor", value: "ESP32S3 Dual-Core 240 MHz" },
  { label: "Memory", value: "8 MB PSRAM + 8 MB Flash" },
  { label: "Camera", value: "OV2640 HD (1600×1200)" },
  { label: "IMU", value: "LSM6DSO 6-Axis (±16g / ±2000°/s)" },
  { label: "Connectivity", value: "Wi-Fi 802.11n + BLE 5.0" },
  { label: "Battery", value: "Li-Po 800mAh — 8h Active" },
  { label: "Charging", value: "USB-C — 90 min Full / 15 min Quick" },
  { label: "Protection", value: "IP54 Dust & Splash Sealed" },
  { label: "Lens Standard", value: "MIL-PRF-32432 Ballistic" },
  { label: "Lens VLT", value: "38% Warm Amber" },
  { label: "Field of View", value: "140° Horizontal / 90° Vertical" },
  { label: "Weight", value: "185 g (Lens + Frame + Electronics)" },
  { label: "Operating Temp", value: "-20°C to 45°C" },
  { label: "Strap Width", value: "45 mm Silicone-Grip" },
  { label: "Tear-Offs", value: "7-Post System — 14 Layer Stack" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
};

export default function MotoPage() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "sentio-moto",
      name: "Sentio Moto Edition",
      edition: "Motocross & Enduro",
      price: 239.60,
      image: "/images/moto-goggles.png",
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Back nav */}
      <div className="container-main" style={{ position: "relative", zIndex: 20, paddingTop: "6rem" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--moto-accent)", textDecoration: "none", opacity: 0.7 }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ═══ 1. HERO ═══ */}
      <section style={{ position: "relative", overflow: "hidden", paddingBottom: "4rem" }}>
        {/* Moto glow */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, var(--moto-glow) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
          <div className="product-hero-grid" style={{ display: "grid", gap: "2rem", alignItems: "center" }}>
            {/* Left — Product Image */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: "2rem", overflow: "hidden", background: "var(--card-bg)", border: "1px solid var(--card-border)", padding: "2.5rem 2rem 1.5rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent 5%, var(--moto-accent) 30%, var(--moto-accent) 70%, transparent 95%)", opacity: 0.5 }} />
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, var(--moto-glow) 0%, transparent 60%)", filter: "blur(40px)", pointerEvents: "none" }} />
                <Image src="/images/goggles_nobg.png" alt="Sentio Dirt Edition AR Goggles" width={600} height={600} priority style={{ position: "relative", zIndex: 5, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px var(--moto-glow))" }} />
              </div>
            </motion.div>

            {/* Right — Purchasing */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--moto-accent)", marginBottom: "0.75rem", fontWeight: 600 }}>
                  SENTIO&ensp;|&ensp;MOTO EDITION
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  The Ultimate <span className="gradient-text-moto">Line of Sight</span>
                </h1>
                <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Aero-grade carbon core. Holographic AR display. Bone-conduction audio. Speed, squad locations, and hazard alerts projected directly onto your lens — so you never break focus on the trail.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {quickSpecs.map((spec) => (
                  <div key={spec} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Check size={14} style={{ color: "var(--moto-accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{spec}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--moto-accent)", fontFamily: "var(--font-display)" }}>€239.60</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>Pre-order price</span>
                </div>
                <button onClick={handleAddToCart} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.125rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #f59e0b, #facc15)", color: "#000", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 40px var(--moto-glow)", letterSpacing: "0.02em" }}>
                  <ShoppingCart size={20} />
                  Add to Cart — Pre-Order
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {[{ icon: Truck, text: "Free Shipping" }, { icon: RefreshCw, text: "30-Day Returns" }, { icon: Award, text: "2-Year Warranty" }].map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Icon size={14} style={{ color: "var(--text-tertiary)" }} />
                      <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>{t.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 2. CORE CAPABILITIES ═══ */}
      <section className="section-responsive" style={{ position: "relative" }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Everything on Your <span className="gradient-text-moto">Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {motoFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "var(--moto-accent)" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.7rem", color: "var(--moto-accent)", letterSpacing: "0.02em" }}>{f.detail}</p>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 3. ENVIRONMENT ═══ */}
      <section className="section-responsive" style={{ background: "var(--surface)", position: "relative" }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Built for <span className="gradient-text-moto">the Dirt</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card" style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "var(--moto-accent)" }} size={20} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{f.title}</h3>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 4. HELMET ═══ */}
      <section className="section-responsive" style={{ position: "relative" }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Helmet Integration <span className="gradient-text-moto">&amp; Comfort</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card">
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon style={{ color: "var(--moto-accent)" }} size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em", color: "var(--text-primary)" }}>{f.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 5. SPECS ═══ */}
      <section className="section-responsive" style={{ background: "var(--surface)", position: "relative" }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Technical <span className="gradient-text-moto">Details</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} style={{ borderRadius: "1.25rem", background: "var(--card-bg)", border: "1px solid var(--card-border)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
              {motoSpecs.map((spec, i) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1.5rem", borderBottom: i < motoSpecs.length - 1 ? "1px solid var(--border)" : "none", backgroundColor: i % 2 === 0 ? "var(--surface)" : "transparent" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", fontWeight: 500 }}>{spec.label}</span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-primary)", fontWeight: 600, textAlign: "right", fontFamily: "monospace", letterSpacing: "0.02em" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. FINAL CTA ═══ */}
      <section style={{ paddingTop: "5rem", paddingBottom: "6rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "var(--moto-glow)", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "2rem", background: "var(--card-bg)", border: "1px solid var(--card-border)", backdropFilter: "blur(10px)" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--moto-accent)", marginBottom: "1rem", fontWeight: 600, opacity: 0.8 }}>Ready to Ride?</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>Sentio Moto</h2>
            <p style={{ color: "var(--text-tertiary)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>Motocross &amp; Enduro Edition</p>
            <p style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 800, color: "var(--moto-accent)", marginBottom: "1.5rem", fontFamily: "var(--font-display)" }}>€239.60</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              {["OLED HUD", "HD Camera", "Crash SOS", "Dust-Sealed", "Tear-Off Ready", "8h Battery"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6875rem", color: "var(--moto-accent)", backgroundColor: "rgba(245,158,11,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(245,158,11,0.1)" }}>{tag}</span>
              ))}
            </div>

            <button onClick={handleAddToCart} style={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.25rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #f59e0b, #facc15)", color: "#000", fontWeight: 700, fontSize: "1.0625rem", border: "none", cursor: "pointer", margin: "0 auto", boxShadow: "0 0 50px var(--moto-glow)", letterSpacing: "0.02em" }}>
              <ShoppingCart size={20} />
              Add to Cart — €239.60
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
