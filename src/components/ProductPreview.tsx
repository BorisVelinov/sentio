"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, RefreshCw, Award } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
};

export default function ProductPreview() {
  const { addToCart } = useCart();

  const handleAddMoto = () => {
    addToCart({
      id: "sentio-moto",
      name: "Sentio Moto Edition",
      edition: "Motocross & Enduro",
      price: 349,
      image: "/images/moto-goggles.png",
    });
  };

  return (
    <section className="section-responsive" style={{ position: "relative", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--moto-glow) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 5 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="product-hero-grid"
        >
          {/* Product Image */}
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <div
              style={{
                position: "relative",
                borderRadius: "2rem",
                overflow: "hidden",
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                padding: "3rem 2rem",
              }}
            >
              {/* Glow behind product */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, var(--moto-glow) 0%, transparent 60%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />
              <Image
                src="/images/hero-goggles.png"
                alt="Sentio Smart HUD Goggles"
                width={800}
                height={600}
                style={{
                  position: "relative",
                  zIndex: 5,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 12px 40px var(--moto-glow))",
                }}
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.15 }}>
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "var(--moto-accent)",
                marginBottom: "0.75rem",
                fontWeight: 600,
              }}
            >
              Featured Product
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                fontFamily: "var(--font-display)",
                marginBottom: "1rem",
              }}
            >
              Sentio Moto Edition
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              The ultimate smart HUD goggles for Motocross and Enduro. Dust-sealed electronics,
              vibration-dampened display, and a ballistic-rated lens — all in 185 grams.
            </p>

            {/* Price */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--moto-accent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                $349
              </span>
              <span style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
                Pre-order price
              </span>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddMoto}
              style={{
                width: "100%",
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                padding: "1rem 2rem",
                borderRadius: "9999px",
                background: "var(--accent-primary)",
                color: "var(--text-inverse)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.02em",
                boxShadow: "var(--shadow-md)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              <ShoppingCart size={18} />
              Add to Cart — Pre-Order
            </button>

            {/* Trust markers */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              {[
                { icon: Truck, text: "Free Worldwide Shipping" },
                { icon: RefreshCw, text: "30-Day Returns" },
                { icon: Award, text: "2-Year Warranty" },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <Icon size={14} style={{ color: "var(--text-tertiary)" }} />
                    <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                      {t.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
