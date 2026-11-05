"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const next = lang === "en" ? "bg" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={next === "bg" ? "Превключи на български" : "Switch to English"}
      className="hud-label grid h-11 min-w-9 place-items-center transition-opacity hover:opacity-60"
    >
      {next.toUpperCase()}
    </button>
  );
}
