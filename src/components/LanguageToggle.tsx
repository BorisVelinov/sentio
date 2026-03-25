"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "bg" : "en")}
      aria-label={`Switch to ${lang === "en" ? "Bulgarian" : "English"}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "var(--surface-elevated)",
        cursor: "pointer",
        fontSize: "0.75rem",
        fontWeight: 800,
        color: "var(--text-primary)",
        letterSpacing: "0.02em",
        transition: "all 0.3s ease",
        flexShrink: 0,
        textTransform: "uppercase",
      }}
      title={lang === "en" ? "Превключи на български" : "Switch to English"}
    >
      {lang === "en" ? "BG" : "EN"}
    </button>
  );
}
