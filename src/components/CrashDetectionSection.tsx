"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Timer, Smartphone, MapPin } from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    number: "01",
    title: "Impact Detection",
    description:
      "The LSM6DSO IMU continuously monitors all six axes at 416 Hz. When the resultant G-force vector exceeds 8 g and angular velocity spikes beyond 1200 °/s within a 50 ms window — a signature consistent with a high-energy crash event — the system transitions to alert state. Importantly, the algorithm uses a compound threshold that distinguishes hard landings, aggressive braking, and terrain impacts from genuine crash scenarios, cutting false positives to under 2% across 10,000+ test events.",
    accent: "#f43f5e",
  },
  {
    icon: Timer,
    number: "02",
    title: "10-Second HUD Countdown",
    description:
      "The moment a crash event is confirmed, the OLED HUD overrides the current display with a full-screen countdown timer and a flashing cancel prompt. You have exactly 10 seconds to press the side button or shake the goggles (a deliberate 3-axis gesture) to cancel — proving you're conscious and mobile. The countdown is accompanied by a pulsing haptic vibration from the onboard LRA motor, ensuring you feel the alert even if your visor is fogged or covered in mud.",
    accent: "#fbbf24",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Phone Relay Trigger",
    description:
      "If the countdown expires without cancellation, Sentio sends a BLE 5.0 emergency packet to the paired Sentio App on your phone. The app immediately wakes from background state, captures your current GPS coordinates with ±3 m accuracy (using fused GPS/GLONASS), and prepares the emergency payload. The entire handoff from goggles to phone takes under 800 ms — fast enough to work even in areas with intermittent cell coverage where every second counts.",
    accent: "#38bdf8",
  },
  {
    icon: MapPin,
    number: "04",
    title: "Emergency SOS Dispatch",
    description:
      "The Sentio App sends an SMS and push notification to up to 5 pre-configured emergency contacts. The message includes your live GPS coordinates on a map link, your last known speed before impact, the measured G-force of the crash, and a direct call-back number. If cellular data is available, the app also pings a cloud endpoint for optional integration with local emergency services. Your contacts receive updates every 60 seconds until you manually mark yourself safe.",
    accent: "#34d399",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function CrashDetectionSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        backgroundColor: "#000000",
      }}
    >
      {/* Red ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(244,63,94,0.04)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(244,63,94,0.1)",
              border: "1px solid rgba(244,63,94,0.2)",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
            }}
          >
            <AlertTriangle style={{ color: "#f43f5e" }} size={14} />
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#f43f5e",
                fontWeight: 600,
              }}
            >
              Safety System
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI Crash Detection{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f43f5e, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              & SOS
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
            Extreme sports carry real risk. Sentio's four-stage safety pipeline runs continuously in
            the background, monitoring every axis of motion 416 times per second — so the one time
            you can't call for help, your goggles do it for you.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card-responsive"
                style={{
                  borderRadius: "1.5rem",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "1rem",
                    fontSize: "5rem",
                    fontWeight: 900,
                    color: `${step.accent}08`,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {step.number}
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  {/* Icon + Title row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        borderRadius: "0.875rem",
                        backgroundColor: `${step.accent}15`,
                        border: `1px solid ${step.accent}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ color: step.accent }} size={18} />
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontFamily: "monospace",
                          color: step.accent,
                          letterSpacing: "0.15em",
                        }}
                      >
                        STEP {step.number}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#a3a3a3",
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: "800px",
            margin: "3rem auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          {[
            { value: "< 800 ms", label: "Detection to SOS" },
            { value: "< 2%", label: "False Positive Rate" },
            { value: "416 Hz", label: "Sample Rate" },
            { value: "5", label: "Emergency Contacts" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: "1.25rem 1rem",
                borderRadius: "1rem",
                backgroundColor: "rgba(244,63,94,0.04)",
                border: "1px solid rgba(244,63,94,0.08)",
              }}
            >
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#f43f5e" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#737373", marginTop: "0.25rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
