"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco Velasquez",
    role: "Professional Enduro Racer",
    discipline: "Moto",
    location: "Erzberg, Austria",
    quote:
      "I've been racing Enduro for 14 years and I've never had a piece of gear that actually made me faster. The live speed HUD lets me hold lines I used to guess at — I can see my exact speed through rock gardens and adjust in real-time instead of relying on feel. My lap times dropped 3 seconds within the first week. The crash detection giving my team live GPS is a game-changer for remote trail sessions where cell coverage is spotty.",
    rating: 5,
    accent: "#fbbf24",
  },
  {
    name: "Anja Henriksen",
    role: "Freeride Snowboarder",
    discipline: "Snow",
    location: "Chamonix, France",
    quote:
      "When you're dropping into a 45-degree couloir in whiteout conditions, the last thing you want is one more distraction. I was skeptical about the HUD — but it sits so far in your peripheral that you genuinely forget it's there until you need it. Having my altitude and temperature on-lens means I don't have to stop and dig out my phone in waist-deep powder. The anti-fog system is the real MVP — I've had zero fog issues down to minus 18.",
    rating: 5,
    accent: "#38bdf8",
  },
  {
    name: "Tyler Reeves",
    role: "Weekend Trail Rider / Content Creator",
    discipline: "Moto / Lifestyle",
    location: "Moab, Utah",
    quote:
      "I bought Sentio mainly for the camera and telemetry overlay feature — the fact that my riding footage automatically gets speed and G-force data burned into it for social media is incredible. What surprised me was the SOS system. I went over my bars last month on a solo ride, and within 90 seconds my wife had my GPS location. She said it was the first time she wasn't worried about me riding alone. That's worth way more than $349.",
    rating: 5,
    accent: "#34d399",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function TestimonialsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background:
          "linear-gradient(180deg, #000000 0%, #080808 50%, #000000 100%)",
      }}
    >
      <div className="container-main relative z-10">
        {/* Header */}
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
            From the Field
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Riders Who{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fbbf24, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trust Sentio
            </span>
          </h2>
          <p
            style={{
              color: "#a3a3a3",
              fontSize: "1.125rem",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            From professional circuits to weekend trail sessions, hear from athletes 
            who rely on Sentio when it matters most.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "2rem",
                borderRadius: "1.5rem",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
              className="card-responsive"
            >
              {/* Quote icon */}
              <Quote
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  color: `${t.accent}20`,
                }}
                size={40}
              />

              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "0.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    style={{ color: t.accent, fill: t.accent }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  color: "#d4d4d4",
                  fontSize: "0.875rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: "0.75rem", color: t.accent }}>
                  {t.role}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#737373",
                    marginTop: "0.25rem",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
