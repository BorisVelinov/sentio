"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "How long does the battery last in extreme cold?",
    answer:
      "The Snow Edition uses a thermally insulated lithium-polymer cell rated to -25°C. In heated anti-fog mode (the most power-intensive setting), you'll get approximately 6 hours of continuous use — enough for a full day of riding with breaks. In standard mode with anti-fog heating disabled, battery life extends to 8+ hours. The Moto Edition, which doesn't require lens heating, delivers a consistent 8 hours of active use across a -20°C to 45°C operating range. A full charge via USB-C takes approximately 90 minutes, and a 15-minute quick charge provides roughly 2 hours of use.",
  },
  {
    question: "Is the HUD distracting while riding?",
    answer:
      "Not at all. The OLED HUD is positioned in the upper-right corner of the lens and projects at just 12% of your total field of view — roughly the size of a timestamp on a camera viewfinder. Your brain naturally filters it into peripheral awareness, similar to how you glance at a car speedometer without taking your eyes off the road. We tested with over 200 riders during development, and 94% reported forgetting the HUD was active within the first 15 minutes of riding. The auto-brightness system also ensures the display never overpowers your vision — in bright sunlight it increases contrast, and in low light it dims to a barely-perceptible glow.",
  },
  {
    question: "Is the Sentio App subscription-based?",
    answer:
      "No. The Sentio App is completely free with no subscription, no in-app purchases, and no paywalls. Every feature — real-time sync, HUD customization, ride history, GPS heatmaps, telemetry video overlay, and emergency SOS configuration — is included at no additional cost. We believe safety features and core product functionality should never be locked behind a recurring payment. The app is available on iOS 15+ and Android 12+ and receives regular firmware updates for your goggles over-the-air.",
  },
  {
    question: "Is Sentio compatible with my helmet?",
    answer:
      "The Moto Edition has been tested and confirmed compatible with over 50 of the most popular motocross and enduro helmets, including models from Alpinestars, Bell, Shoei, Arai, Fox Racing, and 6D. The 45mm silicone-grip strap adjusts from 15 cm to 28 cm band length, and the outrigger system flexes ±15° to accommodate varying helmet curvatures. The Snow Edition fits all standard ski and snowboard helmets with the industry-standard OTG (Over The Glasses) form factor. If you're unsure about your specific helmet, our support team can confirm compatibility before you order.",
  },
  {
    question: "What happens if I crash with the goggles on?",
    answer:
      "Sentio goggles are built to MIL-PRF-32432 ballistic lens standards and use a flexible thermoplastic urethane (TPU) frame that absorbs and distributes impact energy rather than shattering. In the event of a significant impact (above 8 g compound threshold), the AI crash detection system activates automatically: a 10-second cancellation countdown appears on your HUD, and if not cancelled, the system dispatches an emergency SOS with your GPS coordinates to up to 5 pre-set contacts. The lens is also designed to resist penetration — it can withstand a direct hit from a 6 mm steel projectile at 200 m/s.",
  },
  {
    question: "Can I record video without the Sentio App?",
    answer:
      "Yes. The onboard OV2640 camera records HD video (1600×1200 at 15 fps or 800×600 at 30 fps) directly to the ESP32S3's onboard flash memory — no phone connection required. When you connect to the Sentio App later, your footage is automatically transferred via Wi-Fi Direct and you can apply the telemetry overlay (speed, G-force, altitude) in post. Continuous recording capacity on the onboard storage is approximately 45 minutes at high resolution. For extended sessions, the app can offload footage in real-time over Wi-Fi for virtually unlimited recording.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        backgroundColor: "#000000",
      }}
    >
      <div className="container-main relative z-10" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
            Questions & Answers
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Frequently Asked
          </h2>
        </motion.div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  borderRadius: "1rem",
                  border: `1px solid ${isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
                  backgroundColor: isOpen ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                  transition: "all 0.3s",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: isOpen ? "#fff" : "#d4d4d4",
                      transition: "color 0.3s",
                    }}
                  >
                    {item.question}
                  </span>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "rgba(56,189,248,0.15)" : "rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} style={{ color: "#38bdf8" }} />
                    ) : (
                      <Plus size={14} style={{ color: "#737373" }} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          padding: "0 1.5rem 1.5rem",
                          color: "#a3a3a3",
                          fontSize: "0.875rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
