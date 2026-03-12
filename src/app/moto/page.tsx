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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const motoFeatures = [
  {
    icon: Gauge,
    label: "Live Speed HUD",
    detail: "Real-time speed projected onto your lens via the transparent OLED prism.",
    description:
      "The SSD1309 OLED drives a 128×64 mono display at 60 fps, rendering your current speed in large, high-contrast numerals visible even through roost spray and direct sunlight. An ambient light sensor adjusts brightness in under 200 ms — from blinding noon desert light to dark forest canopy — so the data is always readable but never distracting.",
  },
  {
    icon: Navigation,
    label: "Trail Navigation",
    detail: "GPS waypoints and compass heading on-lens.",
    description:
      "Pre-load trail GPX files via the Sentio App, and the HUD displays a bearing arrow and distance to your next waypoint. The fused GPS/GLONASS receiver maintains ±3 m accuracy even under dense tree cover, and the heading indicator updates at 10 Hz — smooth enough to follow through tight switchbacks without hesitation.",
  },
  {
    icon: Timer,
    label: "Lap Timer",
    detail: "Precision timing with automatic lap detection.",
    description:
      "Set a GPS-based start/finish line and Sentio automatically logs each lap, displaying your running time and delta against your personal best. With ±50 ms timing resolution and automatic sector splitting, you get professional-grade telemetry data without the professional-grade price tag.",
  },
  {
    icon: Video,
    label: "HD Recording",
    detail: "Hands-free action camera built into the frame.",
    description:
      "The onboard OV2640 camera captures 1600×1200 at 15 fps or 800×600 at 30 fps directly to onboard flash. When paired with the Sentio App, footage transfers via Wi-Fi and gets automatic telemetry overlays — speed, G-force, altitude — composited directly onto your video for instant social sharing.",
  },
];

const environmentFeatures = [
  {
    icon: Shield,
    title: "IP54 Dust Sealing",
    description:
      "Every electronic component sits inside a pressure-tested TPU housing with silicone gaskets at all seam points. The IP54 rating means complete dust ingress protection and resistance to splashing water from any direction — critical for roost, mud, and puddle hits that would destroy exposed circuitry. The SPI and I²C ribbon cables pass through sealed strain-relief grommets rated to 10,000 flex cycles.",
  },
  {
    icon: Droplets,
    title: "Tear-Off Compatible",
    description:
      "The Sentio Moto lens accepts standard 7-post tear-off stacks (up to 14 layers), so you can clear mud and debris mid-race without stopping. The HUD projection zone sits behind the tear-off plane, meaning removing a layer never interferes with your display. Posts are precision-molded into the lens frame, not glued — they won't rip out under G-load.",
  },
  {
    icon: Eye,
    title: "High-Contrast Dirt Vision",
    description:
      "The base lens tint is tuned to a 38% VLT (visible light transmission) with a warm amber bias that enhances terrain contrast in flat light. In conditions where shadows disappear — overcast skies, late afternoon — the amber tint makes ruts, roots, and rocks pop against the trail surface, giving you an extra fraction of a second of reaction time at speed.",
  },
  {
    icon: Zap,
    title: "Vibration-Dampened HUD",
    description:
      "The OLED module is mounted on a dual-durometer silicone cradle that isolates it from the frame's vibration. Even across whooped-out MX tracks at 80+ km/h, the HUD text remains rock-stable and legible. This suspension system was tested across 500+ hours of aggressive off-road riding without a single mechanical failure or display jitter complaint.",
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
  viewport: { once: true, margin: "-80px" as const },
};

export default function MotoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #000000 0%, #1a0f05 10%, #2d1a0a 30%, #3D2B1F 50%, #2d1a0a 75%, #000000 100%)",
      }}
    >
      {/* ───── HERO SECTION ───── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, borderRadius: "50%", background: "rgba(245,158,11,0.06)", filter: "blur(150px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 500, height: 500, borderRadius: "50%", background: "rgba(250,204,21,0.04)", filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: "3rem" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(245,158,11,0.6)", textDecoration: "none" }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(245,158,11,0.8)", marginBottom: "1rem" }}>Moto Edition</p>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Born for the{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b, #b45309)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dirt</span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "48rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Engineered for the toughest Motocross and Enduro trails on the planet. Every component — from the dust-sealed electronics housing to the vibration-dampened HUD mount — was designed to survive the abuse of professional-level off-road racing while delivering crystal-clear data when you need it most.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }} style={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "550px" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120%", height: "120%", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(224,123,57,0.08) 40%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 60%)", filter: "blur(25px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "2rem", background: "linear-gradient(135deg, rgba(245,158,11,0.25), transparent, rgba(250,204,21,0.15))", filter: "blur(20px)" }} />
              <Image src="/images/moto-goggles.png" alt="Sentio Moto Edition Goggles" width={600} height={600} priority style={{ position: "relative", zIndex: 10, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(245,158,11,0.3)) drop-shadow(0 0 80px rgba(250,204,21,0.1))" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── EXPANDED FEATURES ───── */}
      <section style={{ paddingTop: "2rem", paddingBottom: "5rem", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Everything on Your{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
            {motoFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(245,158,11,0.06)", overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#f59e0b" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.75rem", color: "#f59e0b" }}>{f.detail}</p>
                    </div>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── ENVIRONMENT ENGINEERING ───── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 100%)", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the Dirt</span>
            </h2>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Off-road racing is one of the harshest environments on earth for electronics. We didn&apos;t just make Sentio survive it — we made it thrive.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", maxWidth: "800px", margin: "0 auto" }} className="bento-hardware-grid">
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(245,158,11,0.08)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.875rem", backgroundColor: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#f59e0b" }} size={18} />
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── HELMET INTEGRATION ───── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Helmet Integration{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>&amp; Comfort</span>
            </h2>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Technology means nothing if it&apos;s uncomfortable. Every surface that touches your face or helmet was engineered for hours of aggressive riding.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.875rem", backgroundColor: "rgba(245,158,11,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#f59e0b" }} size={18} />
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{f.title}</h3>
                  </div>
                  <p style={{ color: "#a3a3a3", fontSize: "0.875rem", lineHeight: 1.8 }}>{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── FULL SPEC SHEET ───── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Technical{" "}
              <span style={{ background: "linear-gradient(90deg, #facc15, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Details</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="card-responsive" style={{ maxWidth: "700px", margin: "0 auto 3rem", borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="specs-grid">
              {motoSpecs.map((spec) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.625rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontSize: "0.8125rem", color: "#737373" }}>{spec.label}</span>
                  <span style={{ fontSize: "0.8125rem", color: "#fff", fontWeight: 500, textAlign: "right" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── PURCHASE CARD ───── */}
      <section style={{ paddingTop: "1rem", paddingBottom: "5rem", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="card-responsive" style={{ borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(120,53,15,0.3), rgba(0,0,0,0.6))", border: "1px solid rgba(245,158,11,0.1)", backdropFilter: "blur(8px)" }}>
              <div className="ecommerce-header">
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Sentio Moto</h3>
                  <p style={{ fontSize: "0.875rem", color: "#737373", marginTop: "0.25rem" }}>Motocross &amp; Enduro Edition</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#fbbf24" }}>$349</p>
                  <p style={{ fontSize: "0.75rem", color: "#737373" }}>Pre-order price</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                {["OLED HUD", "HD Camera", "Crash SOS", "Dust-Sealed", "Tear-Off Ready", "8h Battery"].map((tag) => (
                  <span key={tag} style={{ fontSize: "0.75rem", color: "#fbbf24", backgroundColor: "rgba(251,191,36,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px" }}>{tag}</span>
                ))}
              </div>

              <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem", borderRadius: "9999px", background: "linear-gradient(90deg, #f59e0b, #facc15)", color: "#000", fontWeight: 600, fontSize: "0.875rem", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 30px rgba(245,158,11,0.25)" }}>
                <ShoppingCart size={18} />
                Buy Moto Edition — $349
              </button>

              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#737373", marginTop: "1rem" }}>
                Free shipping · 30-day returns · 2-year warranty
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
