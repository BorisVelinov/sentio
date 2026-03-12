"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Mountain,
  MapPin,
  Snowflake,
  ShoppingCart,
  ArrowLeft,
  Shield,
  Sun,
  Layers,
  Wrench,
  Wind,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const snowFeatures = [
  {
    icon: Thermometer,
    label: "Temperature HUD",
    detail: "Real-time ambient temperature and wind chill on your lens.",
    description:
      "A precision NTC thermistor mounted on the outer frame samples ambient temperature at 1 Hz, while the wind chill algorithm factors in your ground speed from GPS data. The result is a real-time wind chill reading displayed on the HUD — critical for backcountry riding where wind-driven temps can drop 15°C below ambient without warning. You'll know when to layer up before your hands go numb.",
  },
  {
    icon: Mountain,
    label: "Altitude Tracker",
    detail: "Live elevation, vertical drop, and cumulative ascent.",
    description:
      "The barometric pressure sensor (BMP280) calculates altitude with ±1 m precision, updating at 10 Hz for smooth real-time display. The HUD shows current elevation, total vertical drop per run, and cumulative ascent for the day. At the end of your session, the Sentio App generates a full elevation profile overlaid on your run map — perfect for tracking progression on your favorite lines.",
  },
  {
    icon: MapPin,
    label: "Run Mapping",
    detail: "GPS-tracked run playback with speed heat-mapping.",
    description:
      "Every run is automatically logged with GPS coordinates, speed, and G-force data at 10 Hz resolution. The Sentio App renders your runs on a 3D terrain map with a speed-based color gradient — blue for slow, through green and yellow, to red at your peak velocity. You can replay any run frame-by-frame and compare lines across different sessions.",
  },
  {
    icon: Snowflake,
    label: "Anti-Fog Lens",
    detail: "Dual-pane heated inner lens for zero-fog clarity.",
    description:
      "The proprietary dual-pane lens system uses a sealed air gap with moisture-absorbing silica inserts between the inner and outer panes. When conditions demand it, the micro-etched ITO (indium tin oxide) heating element on the inner pane activates at 3 watts — just enough to prevent condensation without creating optical distortion. The system runs for 6+ hours in heated mode and responds to foggy conditions in under 8 seconds.",
  },
];

const environmentFeatures = [
  {
    icon: Layers,
    title: "Dual-Pane Anti-Fog Technology",
    description:
      "Unlike single-pane goggles that rely solely on chemical coatings, Sentio Snow uses a sealed dual-pane construction with a 3 mm air gap. This thermal isolation barrier prevents the temperature differential across the lens from reaching the dew point. When extreme conditions overwhelm passive anti-fog — prolonged hiking in deep snow, or transitioning from a warm gondola to -20°C air — the ITO heating element provides active defogging at 3W, clearing the lens in under 8 seconds. No other goggle on the market combines passive and active anti-fog in a single lens.",
  },
  {
    icon: Zap,
    title: "Thermal Battery Insulation",
    description:
      "The 800 mAh lithium-polymer battery is wrapped in a dual-layer aerogel-foam thermal jacket that maintains cell temperature above -5°C even when the ambient air drops to -25°C. Cold batteries lose capacity exponentially — an uninsulated Li-Po at -20°C delivers only 40% of its rated capacity. Our thermal insulation keeps the cell above its efficiency curve, delivering 85%+ capacity in the coldest conditions you'll ever ride. The result: 6 hours of heated anti-fog mode or 8+ hours in standard mode, even at altitude.",
  },
  {
    icon: Sun,
    title: "UV400 Snow-Blindness Protection",
    description:
      "At altitude, UV intensity increases by approximately 10% per 1,000 meters — and fresh snow reflects up to 80% of UV radiation. Sentio Snow lenses block 100% of UVA, UVB, and UVC radiation up to 400 nm, far exceeding the EN 174:2001 standard for snow sports. The Category 3 (S3) lens tint provides an 8-18% VLT range optimized for bright snow conditions, reducing glare without sacrificing terrain contrast. Your eyes are protected from the invisible damage that causes photokeratitis (snow blindness) and long-term retinal issues.",
  },
  {
    icon: Wind,
    title: "Spherical Lens Geometry",
    description:
      "The injection-molded polycarbonate lens follows a spherical curvature that mirrors the natural shape of the human eye. This eliminates the optical distortion found in flat or cylindrical lenses — where straight lines appear bent near the periphery. The result is a 140° horizontal and 90° vertical field of view with edge-to-edge clarity. No blind spots, no warping, no compromises — just the mountain exactly as your eyes would see it, enhanced by the HUD data floating in your upper-right periphery.",
  },
];

const helmetFeatures = [
  {
    icon: Layers,
    title: "Triple-Layer Moisture-Wicking Foam",
    description:
      "The face foam uses three engineered layers: a rigid outer shell for frame stability, a medium-density middle layer for even pressure distribution, and a soft inner fleece-covered layer that wicks moisture away from your skin. The fleece wicking surface channels sweat to the foam's evaporative edge zones, keeping the lens-contact area dry. The entire foam assembly is removable, machine-washable, and available in multiple density options for custom fit.",
  },
  {
    icon: Shield,
    title: "Articulating Outrigger System",
    description:
      "The frame connects to the strap via an articulating outrigger hinge that pivots ±15° in both vertical and horizontal planes. This means the goggle conforms perfectly to the contour of your helmet — whether it's a round-profile Giro or a flat-front Smith — maintaining an even seal against your face across the entire perimeter. No gap, no light leak, no cold air intrusion.",
  },
  {
    icon: Wrench,
    title: "Quick-Swap Magnetic Lens System",
    description:
      "Changing lens tints shouldn't require tools or warm hands. The Sentio Snow lens locks into the frame with 8 neodymium magnets positioned around the perimeter, providing a tool-free swap in under 10 seconds — even with gloves on. The magnetic connection is rated to 15 N of pull force per magnet, meaning the lens won't pop out during a crash, but it releases cleanly with a deliberate pull at the designated release points.",
  },
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
  viewport: { once: true, margin: "-80px" as const },
};

export default function SnowPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #000000 0%, #0a1628 10%, #0D1B2A 30%, #1B2A4A 50%, #0D1B2A 75%, #000000 100%)",
      }}
    >
      {/* Falling snow particles */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
        {[...Array(25)].map((_, i) => {
          const size = 3 + (i % 4) * 1.5;
          const leftPos = (i * 4.1 + (i % 3) * 7) % 100;
          const drift = i % 2 === 0 ? 30 + (i % 5) * 10 : -(30 + (i % 5) * 10);
          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.5)",
                boxShadow: "0 0 4px rgba(255,255,255,0.3)",
                left: `${leftPos}%`,
                top: "-2%",
              }}
              animate={{ y: ["0vh", "105vh"], x: [0, drift, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 6 + (i % 7) * 2, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
            />
          );
        })}
      </div>

      {/* ───── HERO SECTION ───── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "3rem", position: "relative", overflow: "hidden", zIndex: 2 }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 600, height: 600, borderRadius: "50%", background: "rgba(56,189,248,0.05)", filter: "blur(150px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 500, height: 500, borderRadius: "50%", background: "rgba(103,232,249,0.03)", filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: "3rem" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "rgba(56,189,248,0.6)", textDecoration: "none" }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(56,189,248,0.8)", marginBottom: "1rem" }}>Snow Edition</p>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Made for the{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9, #bae6fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mountain</span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "48rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              Crystal clarity in the coldest conditions on earth. From the dual-pane heated lens that defeats fog to the thermally insulated battery that keeps your HUD alive at -25°C, every detail of Sentio Snow was designed for high-altitude performance — from first chair to last run.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }} style={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "550px" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "120%", height: "120%", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(93,173,226,0.08) 40%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 60%)", filter: "blur(25px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "2rem", background: "linear-gradient(135deg, rgba(56,189,248,0.25), transparent, rgba(103,232,249,0.15))", filter: "blur(20px)" }} />
              <Image src="/images/snow-goggles.png" alt="Sentio Snow Edition Goggles" width={600} height={600} priority style={{ position: "relative", zIndex: 10, width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(56,189,248,0.3)) drop-shadow(0 0 80px rgba(93,173,226,0.1))" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── EXPANDED FEATURES ───── */}
      <section style={{ paddingTop: "2rem", paddingBottom: "5rem", position: "relative", zIndex: 2 }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Core Capabilities</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Everything on Your{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Lens</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
            {snowFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(56,189,248,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(56,189,248,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#38bdf8" }} size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff" }}>{f.label}</h3>
                      <p style={{ fontSize: "0.75rem", color: "#38bdf8" }}>{f.detail}</p>
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
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 100%)", position: "relative", zIndex: 2 }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Environment Engineering</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>the Cold</span>
            </h2>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              High-altitude winter conditions push every material and every circuit to its limits. We didn&apos;t design around the cold — we designed for it.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem", maxWidth: "800px", margin: "0 auto" }} className="bento-hardware-grid">
            {environmentFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(56,189,248,0.08)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.875rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#38bdf8" }} size={18} />
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
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative", zIndex: 2 }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Ergonomics</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Helmet Integration{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>&amp; Comfort</span>
            </h2>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1rem", maxWidth: "40rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              All-day comfort in freezing conditions. Every gram of foam and every millimeter of fit was tested through hundreds of hours of on-mountain riding.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
            {helmetFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.875rem", backgroundColor: "rgba(56,189,248,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ color: "#38bdf8" }} size={18} />
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
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem", position: "relative", zIndex: 2 }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373", marginBottom: "1rem" }}>Full Specifications</p>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Technical{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Details</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }} className="card-responsive" style={{ maxWidth: "700px", margin: "0 auto 3rem", borderRadius: "1.5rem", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="specs-grid">
              {snowSpecs.map((spec) => (
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
      <section style={{ paddingTop: "1rem", paddingBottom: "5rem", position: "relative", zIndex: 2 }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="card-responsive" style={{ borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(12,74,110,0.3), rgba(0,0,0,0.6))", border: "1px solid rgba(56,189,248,0.1)", backdropFilter: "blur(8px)" }}>
              <div className="ecommerce-header">
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.02em" }}>Sentio Snow</h3>
                  <p style={{ fontSize: "0.875rem", color: "#737373", marginTop: "0.25rem" }}>Ski &amp; Snowboard Edition</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, color: "#38bdf8" }}>$379</p>
                  <p style={{ fontSize: "0.75rem", color: "#737373" }}>Pre-order price</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                {["OLED HUD", "HD Camera", "Crash SOS", "Anti-Fog Heated", "Magnetic Lens", "UV400"].map((tag) => (
                  <span key={tag} style={{ fontSize: "0.75rem", color: "#38bdf8", backgroundColor: "rgba(56,189,248,0.08)", padding: "0.375rem 0.75rem", borderRadius: "9999px" }}>{tag}</span>
                ))}
              </div>

              <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #67e8f9)", color: "#000", fontWeight: 600, fontSize: "0.875rem", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 30px rgba(56,189,248,0.25)" }}>
                <ShoppingCart size={18} />
                Buy Snow Edition — $379
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
