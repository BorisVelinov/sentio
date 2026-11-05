"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { bg } from "@/data/bg";

export type Lang = "en" | "bg";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Returns the Bulgarian for an English string, or the English if there is none */
  t: (english: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (english) => english,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("sentio-lang");
    } catch {}
    if (stored === "bg") {
      setLangState("bg");
      document.documentElement.lang = "bg";
    }
    // The head script hides the page for returning Bulgarian readers until this point
    document.documentElement.classList.remove("lang-wait");
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem("sentio-lang", next);
    } catch {}
  }, []);

  const t = useCallback((english: string) => (lang === "bg" ? (bg[english] ?? english) : english), [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}
