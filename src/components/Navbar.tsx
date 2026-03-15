"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Technology", href: "/#technology" },
  { label: "Moto", href: "/moto" },
  { label: "Snow", href: "/snow" },
  { label: "App", href: "/app" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl"
          : "bg-transparent border-b border-white/[0.15]"
      }`}
    >
      <div className="container-nav">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-2.5 group" style={{ flexShrink: 0 }}>
            <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/Screenshot_2026-03-14_033502-removebg-preview.png"
                alt="Sentio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight">Sentio</span>
          </Link>

          {/* Links — center */}
          <div className="hidden md:flex items-center gap-8" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA — right */}
          <div className="hidden md:block" style={{ flexShrink: 0 }}>
            <Link
              href="/moto"
              className="text-sm font-medium hover:scale-105 transition-all duration-300"
              style={{
                display: "inline-block",
                padding: "0.625rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
            >
              Pre-Order
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div style={{ padding: "1.5rem" }} className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-neutral-300 hover:text-white transition-colors duration-300"
                  style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/moto"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-center"
                style={{
                  marginTop: "0.5rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
              >
                Pre-Order
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
