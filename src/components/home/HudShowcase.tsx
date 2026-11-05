"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import Oled, { type Widget } from "@/components/ui/Oled";

const modes: { name: string; widgets: Widget[] }[] = [
  { name: "Moto", widgets: ["Speed", "Lap Timer", "G-Force"] },
  { name: "Snow", widgets: ["Speed", "Altitude", "Temperature"] },
];

export default function HudShowcase() {
  const [mode, setMode] = useState(0);
  const { t } = useLanguage();

  return (
    <div>
      <Oled widgets={modes[mode].widgets} label={`Simulated ${modes[mode].name} HUD showing live riding data`} />
      <div className="wrap mt-4 flex items-center justify-between md:px-0">
        <p className="hud-label text-stone">{t("Actual resolution, 128 × 64")}</p>
        <div className="flex gap-5" role="group" aria-label={t("HUD layout")}>
          {modes.map((m, i) => (
            <button
              key={m.name}
              type="button"
              aria-pressed={mode === i}
              onClick={() => setMode(i)}
              className={`hud-label min-h-11 border-b ${mode === i ? "border-paper text-paper" : "border-transparent text-stone"}`}
            >
              {t(m.name)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
