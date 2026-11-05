"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { TerrainState } from "@/components/hero/TerrainParticles";

const TerrainParticles = dynamic(() => import("@/components/hero/TerrainParticles"), { ssr: false });

/** Light snowfall or low dust behind the product. Waits for first paint, off for reduced motion. */
export default function HeroWeather({ kind }: { kind: "dirt" | "snow" }) {
  // The particle layer draws snow right of the split and dust left of it
  const state = useRef<TerrainState>({ split: kind === "snow" ? -0.2 : 1.2, tilt: 0, velocity: 0, paused: false });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = window.setTimeout(() => setOn(true), 600);
    return () => window.clearTimeout(start);
  }, []);

  return on ? <TerrainParticles state={state} /> : null;
}
