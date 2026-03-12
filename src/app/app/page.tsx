"use client";

import { motion } from "framer-motion";
import {
  Bluetooth,
  Wifi,
  Gauge,
  Activity,
  Video,
  MapPin,
  ArrowLeft,
  Layout,
  Sliders,
  Film,
  Share2,
  Smartphone,
  Cloud,
  Download,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { icon: Gauge, label: "Top Speed", value: "87 km/h", color: "#38bdf8" },
  { icon: Activity, label: "Max G-Force", value: "2.4 G", color: "#fbbf24" },
  { icon: MapPin, label: "Distance", value: "42.3 km", color: "#34d399" },
  { icon: Video, label: "Recordings", value: "12 clips", color: "#a78bfa" },
];

const features = [
  "Real-time sync over BLE 5.0 & Wi-Fi Direct",
  "Automatic camera footage transfer & backup",
  "Custom HUD layout editor with drag-and-drop",
  "Emergency contact & SOS configuration",
  "Ride history with GPS heatmaps & elevation profiles",
  "Over-the-air firmware updates for your goggles",
  "Session comparison across multiple rides",
];

const hudWidgets = [
  { name: "Speed", description: "Current ground speed from GPS in km/h or mph", icon: Gauge, default: true },
  { name: "G-Force", description: "Real-time resultant G-force from the LSM6DSO IMU", icon: Activity, default: true },
  { name: "Altitude", description: "Barometric altitude with ±1 m precision", icon: MapPin, default: false },
  { name: "Temperature", description: "Ambient temp and calculated wind chill", icon: Sliders, default: false },
  { name: "Lap Timer", description: "GPS-based automatic lap timing with delta", icon: Layout, default: false },
  { name: "Air-Time", description: "Jump hang-time calculated from IMU free-fall detection", icon: Activity, default: false },
];

const hudPresets = [
  { name: "Race", widgets: ["Speed", "Lap Timer", "G-Force"], accent: "#f43f5e", description: "Optimized for competitive racing — speed and timing front and center." },
  { name: "Freeride", widgets: ["Altitude", "Temperature", "Air-Time"], accent: "#38bdf8", description: "Built for backcountry sessions — altitude, conditions, and airtime." },
  { name: "Training", widgets: ["Speed", "G-Force", "Altitude"], accent: "#34d399", description: "All the data you need to track progression and push limits safely." },
];

const overlayFeatures = [
  {
    icon: Film,
    title: "Auto-Sync Footage",
    description:
      "When your goggles connect to the app via Wi-Fi Direct, recorded footage transfers automatically in the background — no manual file management, no SD cards, no cables. The OV2640 camera captures at 1600×1200 (15 fps) or 800×600 (30 fps), and the app stores everything in your local session library organized by date and location.",
  },
  {
    icon: Palette,
    title: "Telemetry Overlay Engine",
    description:
      "The Sentio App's proprietary overlay engine composites your telemetry data directly onto your video footage at the frame level. Speed, G-force, altitude, and GPS position are time-synced with sub-100ms accuracy to each video frame. Choose from 5 overlay styles — minimal HUD, full dashboard, speedometer-only, cinematic lower-third, and custom — each designed to look professional without obscuring the action.",
  },
  {
    icon: Share2,
    title: "One-Tap Social Export",
    description:
      "Export your overlaid clips in Instagram Reel, TikTok, or YouTube formats with a single tap. The app automatically crops, compresses, and applies the correct aspect ratio (9:16, 1:1, or 16:9) while maintaining maximum quality. Your speed, G-force, and location data are baked into the video — giving your social content the same professional telemetry overlay you see in MotoGP broadcasts.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup & Session Sharing",
    description:
      "Optionally, back up your sessions to Sentio Cloud (included free — no subscription). Share session links with friends, coaches, or social media. Recipients can view your ride on an interactive 3D map with speed-colored GPS tracks, elevation profiles, and embedded video clips — all without installing the app.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function AppPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      {/* ───── HERO SECTION ───── */}
      <section style={{ paddingTop: "6rem", paddingBottom: "3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, borderRadius: "50%", background: "rgba(255,255,255,0.01)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: "3rem" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#737373", textDecoration: "none" }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }} style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Bluetooth style={{ color: "#38bdf8" }} size={18} />
              <p style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.3em", color: "#737373" }}>Connected</p>
              <Wifi style={{ color: "#38bdf8" }} size={18} />
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Your Ride.{" "}
              <span style={{ background: "linear-gradient(90deg, #fff, #a3a3a3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Data.</span>
            </h1>
            <p style={{ marginTop: "1.5rem", color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "48rem", margin: "1.5rem auto 0", fontWeight: 300, lineHeight: 1.7 }}>
              The Sentio App is the command center for your goggles. It syncs seamlessly over Bluetooth Low Energy 5.0 and Wi-Fi Direct, giving you complete control over your HUD layout, access to every ride&apos;s telemetry data, and the tools to transform raw footage into shareable content with professional-grade overlays — all completely free, no subscription required.
            </p>
          </motion.div>

          {/* Phone + Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "4rem", marginBottom: "5rem" }}>
            <motion.div {...fadeUp} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }} style={{ flexShrink: 0 }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(56,189,248,0.1), transparent, rgba(245,158,11,0.1))", borderRadius: "3rem", filter: "blur(32px)", transform: "scale(1.1)" }} />
                <Image src="/images/app-mockup.png" alt="Sentio Smartphone App" width={400} height={800} style={{ position: "relative", zIndex: 10, width: "280px", height: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))" }} />
              </div>
            </motion.div>

            <div style={{ width: "100%", maxWidth: "480px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={stat.label} {...fadeUp} transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }} style={{ padding: "1.25rem", borderRadius: "1rem", background: "linear-gradient(180deg, rgba(64,64,64,0.2), rgba(23,23,23,0.2))", border: "1px solid rgba(255,255,255,0.04)", textAlign: "center" }}>
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
                        <Icon style={{ color: stat.color }} size={20} />
                      </div>
                      <p style={{ fontSize: "1.5rem", fontWeight: 700, color: stat.color }}>{stat.value}</p>
                      <p style={{ fontSize: "0.75rem", color: "#737373", marginTop: "0.25rem" }}>{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div {...fadeUp} transition={{ delay: 0.4, duration: 0.8 }} style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2rem" }}>
                {features.map((feature, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#38bdf8", flexShrink: 0, marginTop: "0.5rem" }} />
                    <p style={{ fontSize: "0.875rem", color: "#d4d4d4", lineHeight: 1.6 }}>{feature}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...fadeUp} transition={{ delay: 0.6, duration: 0.8 }} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button style={{ flex: "1 1 200px", padding: "0.875rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 500, color: "#fff", cursor: "pointer" }}>📱 Download for iOS</button>
                <button style={{ flex: "1 1 200px", padding: "0.875rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", fontSize: "0.875rem", fontWeight: 500, color: "#fff", cursor: "pointer" }}>🤖 Download for Android</button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── HUD CUSTOMIZER ───── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", background: "linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%)", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", padding: "0.5rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem" }}>
              <Layout style={{ color: "#a78bfa" }} size={14} />
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#a78bfa", fontWeight: 600 }}>HUD Editor</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              Your Display,{" "}
              <span style={{ background: "linear-gradient(90deg, #a78bfa, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Rules</span>
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", fontWeight: 300, lineHeight: 1.7 }}>
              The 128×64 OLED display is divided into configurable zones. Drag and drop the stats you care about, hide the ones you don&apos;t, and save custom presets for different riding styles. Every change syncs to your goggles over BLE in under 2 seconds.
            </p>
          </motion.div>

          {/* Widgets Grid */}
          <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
            <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#737373", marginBottom: "1rem" }}>Available Widgets</p>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {hudWidgets.map((widget, i) => {
                const Icon = widget.icon;
                return (
                  <motion.div key={widget.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ padding: "1.25rem", borderRadius: "1rem", background: widget.default ? "rgba(167,139,250,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${widget.default ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.05)"}`, position: "relative" }}>
                    {widget.default && (
                      <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#a78bfa", backgroundColor: "rgba(167,139,250,0.15)", padding: "0.2rem 0.5rem", borderRadius: "9999px" }}>Default</span>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <Icon style={{ color: widget.default ? "#a78bfa" : "#737373" }} size={18} />
                      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>{widget.name}</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "#a3a3a3", lineHeight: 1.6 }}>{widget.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Presets */}
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
              <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#737373", marginBottom: "1rem" }}>Layout Presets</p>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {hudPresets.map((preset, i) => (
                <motion.div key={preset.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ padding: "1.5rem", borderRadius: "1.25rem", backgroundColor: `${preset.accent}08`, border: `1px solid ${preset.accent}20` }}>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: preset.accent, marginBottom: "0.5rem" }}>{preset.name}</h4>
                  <p style={{ fontSize: "0.8125rem", color: "#a3a3a3", lineHeight: 1.6, marginBottom: "1rem" }}>{preset.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {preset.widgets.map((w) => (
                      <span key={w} style={{ fontSize: "0.6875rem", color: preset.accent, backgroundColor: `${preset.accent}15`, padding: "0.25rem 0.625rem", borderRadius: "9999px" }}>{w}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── EXPORT & OVERLAY ───── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "30%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(56,189,248,0.03)", filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", padding: "0.5rem 1rem", borderRadius: "9999px", marginBottom: "1.5rem" }}>
              <Film style={{ color: "#38bdf8" }} size={14} />
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#38bdf8", fontWeight: 600 }}>Video Engine</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              Export &{" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Overlay</span>
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: "1.125rem", maxWidth: "48rem", marginLeft: "auto", marginRight: "auto", fontWeight: 300, lineHeight: 1.7 }}>
              Your onboard camera captures the action. The Sentio App composites your telemetry data directly onto the footage — speed gauges, G-force meters, route maps — giving your social content the same production quality as a professional broadcast, rendered locally on your phone in minutes.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
            {overlayFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.8, delay: i * 0.1 }} className="card-responsive" style={{ borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.06)" }}>
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

      {/* ───── DOWNLOAD CTA ───── */}
      <section style={{ paddingTop: "3rem", paddingBottom: "6rem", position: "relative" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 10 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="card-responsive" style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "1.5rem", background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(167,139,250,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Download style={{ color: "#fff" }} size={24} />
              </div>
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>Free. Forever.</h3>
            <p style={{ color: "#a3a3a3", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
              Every feature of the Sentio App is included at no cost. No subscriptions, no paywalls, no in-app purchases. Your data is your data.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button style={{ flex: "1 1 180px", maxWidth: "220px", padding: "0.875rem", borderRadius: "9999px", background: "linear-gradient(90deg, #38bdf8, #a78bfa)", border: "none", fontSize: "0.875rem", fontWeight: 600, color: "#000", cursor: "pointer", transition: "all 0.3s" }}>
                <Smartphone size={14} style={{ display: "inline", marginRight: "0.375rem", verticalAlign: "text-bottom" }} />
                iOS App Store
              </button>
              <button style={{ flex: "1 1 180px", maxWidth: "220px", padding: "0.875rem", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.875rem", fontWeight: 500, color: "#fff", cursor: "pointer" }}>
                <Smartphone size={14} style={{ display: "inline", marginRight: "0.375rem", verticalAlign: "text-bottom" }} />
                Google Play
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
