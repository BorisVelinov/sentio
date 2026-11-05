"use client";

import { useLanguage } from "@/components/LanguageContext";

/** Translates its English text. Lets server-rendered sections stay as they are. */
export default function T({ children }: { children: string }) {
  const { t } = useLanguage();
  return <>{t(children)}</>;
}
