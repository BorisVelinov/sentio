"use client";

import { useState } from "react";
import Oled, { type Widget } from "@/components/ui/Oled";

const widgets: { name: Widget; text: string }[] = [
  { name: "Speed", text: "Ground speed from GPS" },
  { name: "G-Force", text: "Live from the IMU" },
  { name: "Altitude", text: "Barometric, ±1 m" },
  { name: "Temperature", text: "Ambient and wind chill" },
  { name: "Lap Timer", text: "Automatic GPS laps" },
  { name: "Air-Time", text: "Jump hang time" },
];

const presets: { name: string; widgets: Widget[] }[] = [
  { name: "Race", widgets: ["Speed", "Lap Timer", "G-Force"] },
  { name: "Freeride", widgets: ["Altitude", "Temperature", "Air-Time"] },
  { name: "Training", widgets: ["Speed", "G-Force", "Altitude"] },
];

export default function HudEditor() {
  const [active, setActive] = useState<Widget[]>(presets[0].widgets);

  const toggle = (name: Widget) => {
    setActive((list) => {
      if (list.includes(name)) return list.length > 1 ? list.filter((w) => w !== name) : list;
      return [...list.slice(-2), name];
    });
  };

  return (
    <section className="bg-coal">
      <div className="wrap band">
        <h2 className="statement max-w-2xl">Your display, your rules.</h2>
        <p className="body-copy mt-2 max-w-md text-stone">Choose up to three readouts. The first one runs large. Try it.</p>

        <div className="mt-10 grid gap-y-8 md:mt-16 md:grid-cols-12 md:gap-x-8">
          <div className="sticky top-11 z-10 -mx-[clamp(1.25rem,4vw,4rem)] self-start bg-coal md:static md:col-span-7 md:mx-0 md:self-start">
            <Oled widgets={active} label={`HUD preview showing ${active.join(", ")}`} />
            <div className="flex gap-5 px-[clamp(1.25rem,4vw,4rem)] md:px-0" role="group" aria-label="Layout presets">
              {presets.map((p) => {
                const on = p.widgets.join() === active.join();
                return (
                  <button
                    key={p.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(p.widgets)}
                    className={`hud-label min-h-11 border-b ${on ? "border-paper text-paper" : "border-transparent text-stone"}`}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="md:col-span-5">
            {widgets.map((w) => {
              const on = active.includes(w.name);
              return (
                <li key={w.name} className="rule">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(w.name)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-3 text-left"
                  >
                    <span>
                      <span className={`block text-xl tracking-tight ${on ? "text-paper" : "text-stone"}`}>{w.name}</span>
                      <span className="body-copy block text-stone">{w.text}</span>
                    </span>
                    <span className="hud-label shrink-0 text-amber">{on ? `On ${active.indexOf(w.name) + 1}` : "Add"}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
