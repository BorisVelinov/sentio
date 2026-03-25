"use client";

import { motion } from "framer-motion";
import {
  Thermometer, Mountain, MapPin, Snowflake, ShoppingCart, ArrowLeft,
  Shield, Sun, Layers, Wrench, Wind, Zap,
  Check, Truck, RefreshCw, Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

/* ── data ── */

const quickSpecs = [
  "Holographic AR Display @ 60 fps",
  "Dual-Pane Heated Anti-Fog",
  "Bone-Conduction Audio",
  "Automatic Crash SOS with GPS",
  "6 h Heated / 8 h Standard Battery",
  "Magnetic Quick-Swap Lens System",
];

const snowFeatures = [
  { icon: Thermometer, label: "Temperature HUD", detail: "Real-time ambient temperature and wind chill on your lens.", description: "A precision NTC thermistor samples ambient temperature at 1 Hz, while the wind chill algorithm factors in your ground speed from GPS data. Know when to layer up before your hands go numb." },
  { icon: Mountain, label: "Altitude Tracker", detail: "Live elevation, vertical drop, and cumulative ascent.", description: "BMP280 barometric sensor calculates altitude with ±1 m precision at 10 Hz. Track current elevation, total vertical drop per run, and cumulative ascent for the day." },
  { icon: MapPin, label: "Run Mapping", detail: "GPS-tracked run playback with speed heat-mapping.", description: "Every run logged at 10 Hz with speed-based color gradient on a 3D terrain map. Replay frame-by-frame and compare lines across sessions." },
  { icon: Snowflake, label: "Anti-Fog Lens", detail: "Dual-pane heated inner lens for zero-fog clarity.", description: "Sealed air gap with silica inserts plus ITO heating at 3 watts. Responds to foggy conditions in under 8 seconds. 6+ hours heated mode." },
];

const environmentFeatures = [
  { icon: Layers, title: "Dual-Pane Anti-Fog Technology", description: "Sealed dual-pane construction with 3 mm air gap. Thermal isolation barrier prevents dew point condensation. ITO heating provides active defogging at 3W, clearing the lens in under 8 seconds.", align: "left" },
  { icon: Zap, title: "Thermal Battery Insulation", description: "Dual-layer aerogel-foam thermal jacket maintains cell temp above -5°C even at -25°C ambient. Delivers 85%+ capacity in the coldest conditions. 6 hours heated or 8+ hours standard.", align: "right" },
  { icon: Sun, title: "UV400 Snow-Blindness Protection", description: "Blocks 100% of UVA, UVB, and UVC radiation up to 400 nm. Category 3 (S3) lens tint provides 8-18% VLT optimized for bright snow. Far exceeds EN 174:2001 standard.", align: "left" },
  { icon: Wind, title: "Spherical Lens Geometry", description: "Injection-molded polycarbonate follows natural eye curvature. Eliminates optical distortion found in flat lenses. 140° horizontal and 90° vertical FOV with edge-to-edge clarity.", align: "right" },
];

const helmetFeatures = [
  { icon: Layers, title: "Triple-Layer Moisture-Wicking Foam", description: "Three engineered layers with fleece wicking surface that channels sweat to evaporative edge zones. Removable, machine-washable, and available in multiple densities." },
  { icon: Shield, title: "Articulating Outrigger System", description: "Pivots ±15° in both vertical and horizontal planes. Perfect seal against your face regardless of helmet profile — no gap, no light leak, no cold air intrusion." },
  { icon: Wrench, title: "Quick-Swap Magnetic Lens", description: "8 neodymium magnets for tool-free swap in under 10 seconds, even with gloves. 15 N pull force per magnet — won't pop out in a crash, releases cleanly at pull points." },
];

const snowSpecs = [
  { label: "Display", value: "128×64 OLED SSD1309" },
  { label: "Processor", value: "ESP32S3 Dual-Core 240 MHz" },
  { label: "Memory", value: "8 MB PSRAM + 8 MB Flash" },
  { label: "Camera", value: "OV2640 HD (1600×1200)" },
  { label: "IMU", value: "LSM6DSO 6-Axis (±16g / ±2000°/s)" },
  { label: "Barometer", value: "BMP280 — ±1 m Altitude" },
  { label: "Connectivity", value: "Wi-Fi 802.11n + BLE 5.0" },
  { label: "Battery", value: "Li-Po 800mAh — 6h Heated / 8h Standard" },
  { label: "Charging", value: "USB-C — 90 min Full / 15 min Quick" },
  { label: "Protection", value: "IP64 Dust-Tight & Splash-Proof" },
  { label: "Lens Standard", value: "MIL-PRF-32432 Ballistic" },
  { label: "Lens Category", value: "Cat.3 S3 (8-18% VLT)" },
  { label: "Anti-Fog", value: "Dual-Pane + ITO Heating (3W)" },
  { label: "UV Protection", value: "UV400 (100% UVA/UVB/UVC)" },
  { label: "Field of View", value: "140° Horizontal / 90° Vertical" },
  { label: "Weight", value: "195 g (Lens + Frame + Electronics)" },
  { label: "Operating Temp", value: "-25°C to 40°C" },
  { label: "Lens Swap", value: "Magnetic 8-Point — 10 sec" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
};

export default function SnowPage() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "sentio-snow",
      name: "Sentio Snow Edition",
      edition: "Ski & Snowboard",
      price: 239.60,
      image: "/images/snow-goggles.png",
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      {/* Falling snow effect */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
        {[...Array(20)].map((_, i) => {
          const size = 3 + (i % 4) * 1.5;
          const leftPos = (i * 4.1 + (i % 3) * 7) % 100;
          const drift = i % 2 === 0 ? 30 + (i % 5) * 10 : -(30 + (i % 5) * 10);
          return (
            <motion.div
              key={i}
              style={{ position: "absolute", width: size, height: size, borderRadius: "50%", backgroundColor: "var(--text-tertiary)", opacity: 0.2, left: `${leftPos}%`, top: "-2%" }}
              animate={{ y: ["0vh", "105vh"], x: [0, drift, 0], opacity: [0, 0.3, 0] }}
              transition={{ duration: 6 + (i % 7) * 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
            />
          );
        })}
      </div>

      {/* Back nav */}
      <div className="container-main" style={{ position: "relative", zIndex: 20, paddingTop: "6rem" }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--snow-accent)", textDecoration: "none", opacity: 0.7 }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* ═══ 1. HERO ═══ */}
      <section style={{ position: "relative", overflow: "hidden", paddingBottom: "4rem", zIndex: 2 }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, var(--snow-glow) 0%, transparent 70%)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
          <div className="product-hero-grid" style={{ display: "grid", gap: "2rem", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: "2rem", overflow: "hidden", background: "var(--card-bg)", border: "1px solid var(--card-border)", padding: "2.5rem 2rem 1.5rem" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent 5%, var(--snow-accent) 30%, var(--snow-accent) 70%, transparent 95%)", opacity: 0.5 }} />
                <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, var(--snow-glow) 0%, transparent 60%)", filter: "blur(40px)", pointerEvents: "none" }} />
                <Image src="/images/snow-goggles.png" alt="Sentio Snow Edition Goggles" width={600} height={600} priority style={{ position: "relative", zIndex: 5, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px var(--snow-glow))" }} />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--snow-accent)", marginBottom: "0.75rem", fontWeight: 600 }}>
                  SENTIO&ensp;|&ensp;SNOW EDITION
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  Crystal Clarity at <span className="gradient-text-snow">-25°C</span>
                </h1>
                <p style={{ marginTop: "1rem", color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Holographic AR display. Heated anti-fog lens. Bone-conduction audio for crew pings over wind roar. Your speed, squad locations, and hazard alerts — projected on your lens so your hands never leave the poles.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {quickSpecs.map((spec) => (
                  <div key={spec} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <Check size={14} style={{ color: "var(--snow-accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{spec}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--snow-accent)", fontFamily: "var(--font-display)" }}>€239.60</span>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>Pre-order price</span>
                </div>
                <button onClick={handleAddToCart} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.125rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 40px var(--snow-glow)", letterSpacing: "0.02em" }}>
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
      <section className="section-responsive" style={{ position: "relative", zIndex: 2 }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Everything on Your <span className="gradient-text-snow">Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
            {snowFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "var(--snow-accent)" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.7rem", color: "var(--snow-accent)", letterSpacing: "0.02em" }}>{f.detail}</p>
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
      <section className="section-responsive" style={{ background: "var(--surface)", position: "relative", zIndex: 2 }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Built for <span className="gradient-text-snow">the Cold</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card" style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "var(--snow-accent)" }} size={20} />
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
      <section className="section-responsive" style={{ position: "relative", zIndex: 2 }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Helmet Integration <span className="gradient-text-snow">&amp; Comfort</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.25rem" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="bento-card">
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "1rem", backgroundColor: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon style={{ color: "var(--snow-accent)" }} size={20} />
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
      <section className="section-responsive" style={{ background: "var(--surface)", position: "relative", zIndex: 2 }}>
        <div className="container-main">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--text-tertiary)", marginBottom: "0.75rem", fontWeight: 600 }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Technical <span className="gradient-text-snow">Details</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} style={{ borderRadius: "1.25rem", background: "var(--card-bg)", border: "1px solid var(--card-border)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
              {snowSpecs.map((spec, i) => (
                <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1.5rem", borderBottom: i < snowSpecs.length - 1 ? "1px solid var(--border)" : "none", backgroundColor: i % 2 === 0 ? "var(--surface)" : "transparent" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", fontWeight: 500 }}>{spec.label}</span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-primary)", fontWeight: 600, textAlign: "right", fontFamily: "monospace", letterSpacing: "0.02em" }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. FINAL CTA ═══ */}
      <section style={{ paddingTop: "5rem", paddingBottom: "6rem", position: "relative", zIndex: 2 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "var(--snow-glow)", filter: "blur(120px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "2rem", background: "var(--card-bg)", border: "1px solid var(--card-border)", backdropFilter: "blur(10px)" }}>
            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--snow-accent)", marginBottom: "1rem", fontWeight: 600, opacity: 0.8 }}>Ready to Ride?</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>Sentio Snow</h2>
            <p style={{ color: "var(--text-tertiary)", fontSize: "0.9375rem", marginBottom: "1.5rem" }}>Ski &amp; Snowboard Edition</p>
            <p style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 800, color: "var(--snow-accent)", marginBottom: "1.5rem", fontFamily: "var(--font-display)" }}>€239.60</p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
              {["OLED HUD", "HD Camera", "Crash SOS", "Anti-Fog Heated", "Magnetic Lens", "UV400"].map((tag) => (
                <span key={tag} style={{ fontSize: "0.6875rem", color: "var(--snow-accent)", backgroundColor: "rgba(56,189,248,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px", border: "1px solid rgba(56,189,248,0.1)" }}>{tag}</span>
              ))}
            </div>

            <button onClick={handleAddToCart} style={{ width: "100%", maxWidth: "400px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", padding: "1.25rem 2rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 700, fontSize: "1.0625rem", border: "none", cursor: "pointer", margin: "0 auto", boxShadow: "0 0 50px var(--snow-glow)", letterSpacing: "0.02em" }}>
              <ShoppingCart size={20} />
              Add to Cart — €239.60
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
