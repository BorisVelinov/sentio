"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Twitter, Youtube, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Moto Edition", href: "/moto" },
    { label: "Snow Edition", href: "/snow" },
    { label: "Compare", href: "#" },
    { label: "Accessories", href: "#" },
  ],
  Technology: [
    { label: "OLED HUD", href: "/#technology" },
    { label: "ESP32S3 Core", href: "/#technology" },
    { label: "Crash Detection", href: "/#technology" },
    { label: "Sentio App", href: "/app" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

const socialIcons = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Stay in the Loop
          </h3>
          <p style={{ color: "#737373", fontSize: "0.875rem", marginBottom: "2rem", maxWidth: "24rem", marginLeft: "auto", marginRight: "auto" }}>
            Get notified about launch dates, early-bird pricing, and firmware updates.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "row", gap: "0.75rem", maxWidth: "28rem", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: "1 1 200px",
                padding: "0.75rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(38,38,38,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
                fontSize: "0.875rem",
                color: "#fff",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                backgroundColor: "#fff",
                color: "#000",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                flexShrink: 0,
              }}
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Links Grid */}
        <div className="footer-links-grid" style={{ marginBottom: "3rem" }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#737373", marginBottom: "1rem", fontWeight: 500 }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontSize: "0.875rem", color: "#a3a3a3", textDecoration: "none", transition: "color 0.3s" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="relative w-10 h-10">
              <Image
                src="/images/Screenshot_2026-03-14_033502-removebg-preview.png"
                alt="Sentio Logo"
                fill
                className="object-contain"
              />
            </div>
            <p style={{ fontSize: "0.75rem", color: "#737373" }}>
              © {new Date().getFullYear()} Sentio Technologies. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                  }}
                >
                  <Icon style={{ color: "#a3a3a3" }} size={16} />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "#737373", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
