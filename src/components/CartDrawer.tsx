"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { useLanguage } from "./LanguageContext";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 100,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(420px, 90vw)",
              background: "var(--bg-primary)",
              borderLeft: "1px solid var(--border)",
              zIndex: 101,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <ShoppingBag size={20} style={{ color: "var(--text-primary)" }} />
                <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {t("cart.title")} ({cartCount})
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={16} style={{ color: "var(--text-primary)" }} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
              {cart.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: "1rem",
                    textAlign: "center",
                  }}
                >
                  <ShoppingBag size={48} style={{ color: "var(--text-tertiary)" }} />
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontWeight: 500 }}>
                    {t("cart.empty")}
                  </p>
                  <p style={{ color: "var(--text-tertiary)", fontSize: "0.875rem" }}>
                    {t("cart.empty_desc")}
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        display: "flex",
                        gap: "1rem",
                        padding: "1rem",
                        borderRadius: "1rem",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {/* Image */}
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "0.75rem",
                          background: "var(--surface-elevated)",
                          overflow: "hidden",
                          flexShrink: 0,
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "contain", padding: "0.5rem" }}
                        />
                      </div>

                      {/* Details */}
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>
                            {item.name}
                          </p>
                          <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginTop: "0.125rem" }}>
                            {item.edition}
                          </p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          {/* Quantity Controls */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              borderRadius: "9999px",
                              border: "1px solid var(--border)",
                              padding: "0.25rem",
                            }}
                          >
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{
                                width: "1.75rem",
                                height: "1.75rem",
                                borderRadius: "50%",
                                border: "none",
                                background: "var(--surface-elevated)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Minus size={12} style={{ color: "var(--text-secondary)" }} />
                            </button>
                            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)", minWidth: "1.25rem", textAlign: "center" }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              style={{
                                width: "1.75rem",
                                height: "1.75rem",
                                borderRadius: "50%",
                                border: "none",
                                background: "var(--surface-elevated)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Plus size={12} style={{ color: "var(--text-secondary)" }} />
                            </button>
                          </div>

                          <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)" }}>
                            €{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        style={{
                          alignSelf: "flex-start",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "0.25rem",
                        }}
                      >
                        <X size={14} style={{ color: "var(--text-tertiary)" }} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{t("cart.total")}</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>€{cartTotal.toFixed(2)}</span>
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "9999px",
                    border: "none",
                    background: "var(--accent-primary)",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 0 30px var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {t("cart.checkout")}
                </button>
                <p style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", textAlign: "center", marginTop: "0.75rem" }}>
                  {t("cart.shipping")}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
