"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Shield, Layers } from "lucide-react";

const hardwareLayers = [
  {
    icon: Cpu,
    chip: "XIAO ESP32S3 Sense",
    title: "The Brain",
    subtitle: "Dual-Core 240 MHz Processor",
    description:
      "At the heart of Sentio lies the Seeed Studio XIAO ESP32S3 Sense — a dual-core Xtensa LX7 processor clocked at 240 MHz with 8 MB PSRAM and 8 MB flash. It runs local sensor fusion algorithms at 100 Hz, processes OV2640 camera frames for HD recording, and maintains simultaneous Wi-Fi and Bluetooth Low Energy 5.0 connections for real-time app sync. The onboard RISC-V ULP co-processor handles low-power sleep states, extending standby battery life to over 72 hours.",
    specs: ["240 MHz Dual-Core", "8 MB PSRAM", "Wi-Fi + BLE 5.0", "OV2640 HD Camera"],
    accent: "#38bdf8",
    size: "large",
  },
  {
    icon: Eye,
    chip: "SSD1309",
    title: "The Display",
    subtitle: "Transparent OLED HUD",
    description:
      "The 128×64 monochrome OLED, driven by SSD1309 via SPI at 10 MHz, projects data onto a precision-ground optical prism positioned in the upper-right of the lens. The result is a heads-up display that floats in your peripheral vision — visible in direct sunlight yet unobtrusive enough to forget it's there. Refresh rate is locked at 60 fps for zero-flicker readability during high-speed riding, and an ambient light sensor automatically adjusts brightness across a 0–100% range in under 200 ms.",
    specs: ["128×64 px OLED", "SPI @ 10 MHz", "60 fps Refresh", "Auto-Brightness"],
    accent: "#a78bfa",
    size: "large",
  },
  {
    icon: Shield,
    chip: "LSM6DSO",
    title: "The Guardian",
    subtitle: "6-Axis Inertial Measurement Unit",
    description:
      "The Pololu LSM6DSO IMU samples accelerometer and gyroscope data at 416 Hz across all six axes. With a ±16 g accelerometer range and ±2000 °/s gyroscope range, it captures every impact, lean angle, and rotation with sub-degree precision. The crash detection algorithm analyzes resultant G-force vectors and angular velocity spikes in a 50 ms sliding window — fast enough to distinguish a hard landing from a genuine crash event.",
    specs: ["6-Axis IMU", "±16 g / ±2000 °/s", "416 Hz Sample Rate", "50 ms Detection"],
    accent: "#f43f5e",
    size: "small",
  },
  {
    icon: Layers,
    chip: "MIL-PRF-32432",
    title: "The Armor",
    subtitle: "Ballistic Polycarbonate Lens",
    description:
      "Every Sentio lens is injection-molded from optical-grade polycarbonate rated to MIL-PRF-32432 ballistic standards — the same spec used in military eye protection. A multi-layer stack includes an inner anti-fog hydrophilic coating, an intermediate UV400 filter blocking 100% of UVA/UVB/UVC radiation, and an outer hydrophobic hard-coat that repels water, mud, and fingerprints. The result is a lens that survives a direct roost of gravel at 100 km/h while maintaining crystal clarity.",
    specs: ["MIL-PRF-32432 Rated", "UV400 Protection", "Anti-Fog Inner Coat", "Hydrophobic Outer"],
    accent: "#fbbf24",
    size: "small",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function ExplodedHardwareSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background:
          "linear-gradient(180deg, #000000 0%, #0a0a0a 30%, #111111 50%, #0a0a0a 70%, #000000 100%)",
      }}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0" style={{ opacity: 0.025 }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#737373",
              marginBottom: "1rem",
            }}
          >
            Layer by Layer
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Anatomy of a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fff, #a3a3a3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Breakthrough
            </span>
          </h2>
          <p
            style={{
              color: "#a3a3a3",
              fontSize: "1.125rem",
              maxWidth: "48rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Four precision-engineered systems work in concert inside every pair of Sentio goggles. 
            Each component was selected after 18 months of prototyping, field testing across three 
            continents, and over 2,000 hours of rider feedback.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="bento-hardware-grid"
        >
          {hardwareLayers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                {...fadeUp}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  padding: "2rem",
                  borderRadius: "1.5rem",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.4s, transform 0.4s",
                  gridColumn:
                    layer.size === "large" ? undefined : undefined,
                }}
                className="card-responsive"
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      backgroundColor: `${layer.accent}15`,
                      border: `1px solid ${layer.accent}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ color: layer.accent }} size={20} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        letterSpacing: "0.1em",
                        color: layer.accent,
                        backgroundColor: `${layer.accent}12`,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                      }}
                    >
                      {layer.chip}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {layer.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: layer.accent,
                    marginBottom: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {layer.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    color: "#a3a3a3",
                    fontSize: "0.875rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {layer.description}
                </p>

                {/* Specs */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {layer.specs.map((spec) => (
                    <span
                      key={spec}
                      style={{
                        fontSize: "0.75rem",
                        color: "#d4d4d4",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        padding: "0.375rem 0.75rem",
                        borderRadius: "9999px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
