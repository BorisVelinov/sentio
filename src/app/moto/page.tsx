"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  Navigation,
  Timer,
  Video,
  ShoppingCart,
  ArrowLeft,
  Shield,
  Droplets,
  Eye,
  Zap,
  Layers,
  Wrench,
  Check,
  Truck,
  RefreshCw,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ── data ── */

const quickSpecs = [
  "ESP32S3 240 MHz Dual-Core",
  "128×64 OLED HUD @ 60 fps",
  "OV2640 HD Camera",
  "6-Axis IMU — Crash SOS",
  "8 h Battery — USB-C",
  "IP54 Dust-Sealed",
];

const motoFeatures = [
  {
    icon: Gauge,
    label: "Live Speed HUD",
    detail: "Real-time speed projected onto your lens via the transparent OLED prism.",
    description:
      "The SSD1309 OLED drives a 128×64 mono display at 60 fps, rendering your current speed in large, high-contrast numerals visible even through roost spray and direct sunlight. An ambient light sensor adjusts brightness in under 200 ms — from blinding noon desert light to dark forest canopy — so the data is always readable but never distracting. The HUD sits in your upper-right peripheral vision, occupying just 12% of your total FOV.",
  },
  {
    icon: Navigation,
    label: "Trail Navigation",
    detail: "GPS waypoints and compass heading on-lens.",
    description:
      "Pre-load trail GPX files via the Sentio App, and the HUD displays a bearing arrow and distance to your next waypoint. The fused GPS/GLONASS receiver maintains ±3 m accuracy even under dense tree cover, and the heading indicator updates at 10 Hz — smooth enough to follow through tight switchbacks without hesitation. No more stopping to check your phone in a jersey pocket.",
  },
  {
    icon: Timer,
    label: "Lap Timer",
    detail: "Precision timing with automatic lap detection.",
    description:
      "Set a GPS-based start/finish line and Sentio automatically logs each lap, displaying your running time and delta against your personal best. With ±50 ms timing resolution and automatic sector splitting, you get professional-grade telemetry data without the professional-grade price tag. The app syncs all lap data and generates comparative session reports.",
  },
  {
    icon: Video,
    label: "HD Recording",
    detail: "Hands-free action camera built into the frame.",
    description:
      "The onboard OV2640 camera captures 1600×1200 at 15 fps or 800×600 at 30 fps directly to onboard flash — 45 minutes of continuous recording, no SD card or phone required. When paired with the Sentio App, footage transfers via Wi-Fi and gets automatic telemetry overlays — speed, G-force, altitude — composited directly onto your video for instant social sharing.",
  },
];

const environmentFeatures = [
  {
    icon: Shield,
    title: "IP54 Dust Sealing",
    description:
      "Every electronic component sits inside a pressure-tested TPU housing with silicone gaskets at all seam points. The IP54 rating means complete dust ingress protection and resistance to splashing water from any direction — critical for roost, mud, and puddle hits that would destroy exposed circuitry. The SPI and I²C ribbon cables pass through sealed strain-relief grommets rated to 10,000 flex cycles.",
    align: "left",
  },
  {
    icon: Droplets,
    title: "Tear-Off Compatible Lens",
    description:
      "The Sentio Moto lens accepts standard 7-post tear-off stacks (up to 14 layers), so you can clear mud and debris mid-race without stopping. The HUD projection zone sits behind the tear-off plane, meaning removing a layer never interferes with your display. Posts are precision-molded into the lens frame, not glued — they won't rip out under G-load during aggressive riding.",
    align: "right",
  },
  {
    icon: Eye,
    title: "High-Contrast Dirt Vision",
    description:
      "The base lens tint is tuned to a 38% VLT (visible light transmission) with a warm amber bias that enhances terrain contrast in flat light. In conditions where shadows disappear — overcast skies, late afternoon — the amber tint makes ruts, roots, and rocks pop against the trail surface, giving you an extra fraction of a second of reaction time at speed. The lens also features a hydrophobic outer coat that sheds water and resists fingerprints.",
    align: "left",
  },
  {
    icon: Zap,
    title: "Vibration-Dampened HUD Mount",
    description:
      "The OLED module is mounted on a dual-durometer silicone cradle that isolates it from the frame's vibration. Even across whooped-out MX tracks at 80+ km/h, the HUD text remains rock-stable and legible. This suspension system was tested across 500+ hours of aggressive off-road riding without a single mechanical failure or display jitter complaint. The cradle also protects the OLED from direct impact shock up to 50 g.",
    align: "right",
  },
];

const helmetFeatures = [
  {
    icon: Layers,
    title: "Triple-Layer Face Foam",
    description:
      "Three distinct foam densities work together: a firm outer layer for structural support and impact distribution, a mid-density transition layer for pressure equalization, and a soft inner fleece-covered layer for all-day comfort against your face. The foam is treated with an antimicrobial coating and is fully removable for washing.",
  },
  {
    icon: Shield,
    title: "Silicone-Grip Strap System",
    description:
      "The 45 mm woven strap features triple lines of medical-grade silicone printing on its inner surface. This creates a non-slip grip against any helmet shell finish — matte, gloss, or carbon fiber — without scratching. The strap adjusts from 15 cm to 28 cm band length with a low-profile slide buckle that won't create pressure points.",
  },
  {
    icon: Wrench,
    title: "Universal MX Helmet Fit",
    description:
      "Tested and confirmed compatible with 50+ of the most popular motocross and enduro helmets, including models from Bell, Shoei, Arai, Fox Racing, Alpinestars, Leatt, and 6D. The outrigger system flexes ±15° to accommodate varying helmet curvatures, and the frame is injection-molded from flexible TPU that conforms rather than fights your helmet's shape.",
  },
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
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #000000 0%, #0d0906 8%, #1a0f05 20%, #2d1a0a 40%, #3D2B1F 55%, #2d1a0a 75%, #000000 100%)",
      }}
    >
      {/* ───── BACK NAV ───── */}
      <div className="container-main" style={{ position: "relative", zIndex: 20, paddingTop: "6rem" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(245,158,11,0.6)", textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          1. HERO BUY PANEL — 2 Columns
      ═══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
          <div className="product-hero-grid" style={{ display: "grid", gap: "2rem", alignItems: "center" }}>
            {/* LEFT — Product Image on Pedestal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  background: "linear-gradient(180deg, #1c1410 0%, #2a1e15 40%, #3a2a1c 70%, #1a1208 100%)",
                  padding: "2.5rem 2rem 1.5rem",
                }}
              >
                {/* Textured concrete overlay */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                {/* Rim lighting — orange */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent 5%, rgba(245,158,11,0.6) 30%, rgba(250,204,21,0.5) 70%, transparent 95%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: "10%", right: "10%", height: "2px", background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)" }} />
                {/* Glows behind product */}
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(250,204,21,0.06) 40%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />

                <Image
                  src="/images/moto-goggles.png"
                  alt="Sentio Moto Edition Goggles"
                  width={600}
                  height={600}
                  priority
                  style={{
                    position: "relative",
                    zIndex: 5,
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 12px 40px rgba(245,158,11,0.3)) drop-shadow(0 0 60px rgba(250,204,21,0.08))",
                  }}
                />
                {/* Pedestal base line */}
                <div style={{ position: "relative", zIndex: 6, width: "80%", height: "1px", margin: "0.5rem auto 0", background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)" }} />
              </div>
            </motion.div>

            {/* RIGHT — Purchasing Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(245,158,11,0.8)", marginBottom: "0.75rem" }}>
                  SENTIO&ensp;|&ensp;MOTO EDITION
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  Born for the{" "}
                  <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b, #b45309)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dirt</span>
                </h1>
                <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Engineered for the toughest Motocross and Enduro trails on the planet. Dust-sealed electronics, vibration-dampened HUD, and a ballistic-rated lens — in one 185 g package.
                </p>
              </div>

              {/* Condensed Spec List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {quickSpecs.map((spec) => (
                  <div key={spec} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Check size={14} style={{ color: "#f59e0b", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: "#d4d4d4" }}>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#fbbf24" }}>$349</span>
                  <span style={{ fontSize: "0.875rem", color: "#737373" }}>Pre-order price</span>
                </div>
                <button
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    padding: "1.125rem 2rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(90deg, #f59e0b, #facc15)",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: "0 0 40px rgba(245,158,11,0.3), 0 4px 20px rgba(0,0,0,0.3)",
                    letterSpacing: "0.02em",
                  }}
                >
                  <ShoppingCart size={20} />
                  Pre-Order Moto Edition
                </button>
              </div>

              {/* Trust Markers */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
                {[
                  { icon: Truck, text: "Free Shipping" },
                  { icon: RefreshCw, text: "30-Day Returns" },
                  { icon: Award, text: "2-Year Warranty" },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                      <Icon size={14} style={{ color: "rgba(245,158,11,0.5)" }} />
                      <span style={{ fontSize: "0.75rem", color: "#737373" }}>{t.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. CORE CAPABILITIES — Full-Width Cards
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Everything on Your{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {motoFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} style={{ padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(245,158,11,0.06)", transition: "border-color 0.4s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#f59e0b" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.7rem", color: "#f59e0b", letterSpacing: "0.02em" }}>{f.detail}</p>
                    </div>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. ENVIRONMENT ENGINEERING — Alternating Full-Width
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.5) 100%)", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the Dirt</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Off-road racing is one of the harshest environments on earth for electronics. We didn&apos;t just make Sentio survive it — we made it thrive.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              const isRight = f.align === "right";
              return (
                <motion.div
                  key={f.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="env-feature-card"
                  style={{
                    display: "grid",
                    gap: "2rem",
                    alignItems: "center",
                    padding: "2rem",
                    borderRadius: "1.5rem",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(245,158,11,0.06)",
                  }}
                >
                  <div style={{ order: isRight ? 2 : 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ color: "#f59e0b" }} size={20} />
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
                    </div>
                    <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                  </div>
                  <div
                    style={{
                      order: isRight ? 1 : 2,
                      height: "180px",
                      borderRadius: "1rem",
                      background: `linear-gradient(${isRight ? "135deg" : "225deg"}, rgba(245,158,11,0.08) 0%, rgba(250,204,21,0.03) 50%, transparent 100%)`,
                      border: "1px solid rgba(245,158,11,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ color: "rgba(245,158,11,0.15)" }} size={64} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. HELMET INTEGRATION
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Helmet Integration{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>&amp; Comfort</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Technology means nothing if it&apos;s uncomfortable. Every surface that touches your face or helmet was engineered for hours of aggressive riding.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} style={{ padding: "1.75rem", borderRadius: "1.25rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(245,158,11,0.06)" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon style={{ color: "#f59e0b" }} size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p style={{ color: "#a3a3a3", fontSize: "0.8125rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. INDUSTRIAL SPEC SHEET
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "rgba(10,8,5,0.8)", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "0.75rem" }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Technical{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Details</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              borderRadius: "1.25rem",
              backgroundColor: "rgba(20,16,12,0.9)",
              border: "1px solid rgba(245,158,11,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }} className="specs-grid-industrial">
              {motoSpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.875rem 1.5rem",
                    borderBottom: i < motoSpecs.length - 1 ? "1px solid rgba(245,158,11,0.04)" : "none",
                    backgroundColor: i % 2 === 0 ? "rgba(245,158,11,0.02)" : "transparent",
                  }}
                >
                  <span style={{ fontSize: "0.8125rem", color: "#737373", fontWeight: 500 }}>{spec.label}</span>
                  <span style={{ fontSize: "0.8125rem", color: "#fff", fontWeight: 600, textAlign: "right", fontFamily: "monospace", letterSpacing: "0.02em" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. FINAL CTA — The Sentinel
      ═══════════════════════════════════════════ */}
      <section style={{ paddingTop: "5rem", paddingBottom: "6rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "rgba(245,158,11,0.04)", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
              borderRadius: "2rem",
              background: "linear-gradient(180deg, rgba(120,53,15,0.25), rgba(0,0,0,0.7))",
              border: "1px solid rgba(245,158,11,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(245,158,11,0.7)", marginBottom: "1rem" }}>Ready to Ride?</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Sentio Moto</h2>
            <p style={{ color: "#737373", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>Motocross &amp; Enduro Edition</p>

            <p style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 800, color: "#fbbf24", marginBottom: "1.5rem" }}>$349</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              {["OLED HUD", "HD Camera", "Crash SOS", "Dust-Sealed", "Tear-Off Ready", "8h Battery"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6875rem", color: "#fbbf24", backgroundColor: "rgba(251,191,36,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(251,191,36,0.1)" }}>{tag}</span>
              ))}
            </div>

            <button
              style={{
                width: "100%",
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                padding: "1.25rem 2rem",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #f59e0b, #facc15)",
                color: "#000",
                fontWeight: 700,
                fontSize: "1.0625rem",
                border: "none",
                cursor: "pointer",
                margin: "0 auto",
                boxShadow: "0 0 50px rgba(245,158,11,0.35), 0 6px 24px rgba(0,0,0,0.4)",
                letterSpacing: "0.02em",
              }}
            >
              <ShoppingCart size={20} />
              Pre-Order Now — $349
            </button>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem", marginTop: "1.5rem" }}>
              {[
                { icon: Truck, text: "Free Worldwide Shipping" },
                { icon: RefreshCw, text: "30-Day Returns" },
                { icon: Award, text: "2-Year Warranty" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                    <Icon size={13} style={{ color: "rgba(245,158,11,0.5)" }} />
                    <span style={{ fontSize: "0.75rem", color: "#737373" }}>{t.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
