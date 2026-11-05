"use client";

import { useEffect, useRef } from "react";

export type Widget = "Speed" | "G-Force" | "Altitude" | "Temperature" | "Lap Timer" | "Air-Time";

/** 5×7 bitmap font: the real display has no anti-aliasing, so neither does this */
const GLYPHS: Record<string, number[]> = {
  "0": [14, 17, 19, 21, 25, 17, 14],
  "1": [4, 12, 4, 4, 4, 4, 14],
  "2": [14, 17, 1, 2, 4, 8, 31],
  "3": [31, 2, 4, 2, 1, 17, 14],
  "4": [2, 6, 10, 18, 31, 2, 2],
  "5": [31, 16, 30, 1, 1, 17, 14],
  "6": [6, 8, 16, 30, 17, 17, 14],
  "7": [31, 1, 2, 4, 8, 8, 8],
  "8": [14, 17, 17, 14, 17, 17, 14],
  "9": [14, 17, 17, 15, 1, 2, 12],
  A: [14, 17, 17, 31, 17, 17, 17],
  C: [14, 17, 16, 16, 16, 17, 14],
  E: [31, 16, 16, 30, 16, 16, 31],
  F: [31, 16, 16, 30, 16, 16, 16],
  G: [14, 17, 16, 23, 17, 17, 15],
  H: [17, 17, 17, 31, 17, 17, 17],
  I: [14, 4, 4, 4, 4, 4, 14],
  K: [17, 18, 20, 24, 20, 18, 17],
  L: [16, 16, 16, 16, 16, 16, 31],
  M: [17, 27, 21, 21, 17, 17, 17],
  P: [30, 17, 17, 30, 16, 16, 16],
  R: [30, 17, 17, 30, 20, 18, 17],
  S: [15, 16, 16, 14, 1, 1, 30],
  T: [31, 4, 4, 4, 4, 4, 4],
  "/": [1, 2, 2, 4, 8, 8, 16],
  ".": [0, 0, 0, 0, 0, 12, 12],
  ":": [0, 12, 12, 0, 12, 12, 0],
  "-": [0, 0, 0, 31, 0, 0, 0],
  "°": [6, 9, 9, 6, 0, 0, 0],
  " ": [0, 0, 0, 0, 0, 0, 0],
};

function text(ctx: CanvasRenderingContext2D, value: string, x: number, y: number, s = 1) {
  let cx = x;
  for (const ch of value) {
    const rows = GLYPHS[ch] ?? GLYPHS[" "];
    rows.forEach((bits, r) => {
      for (let c = 0; c < 5; c++) {
        if (bits & (1 << (4 - c))) ctx.fillRect(cx + c * s, y + r * s, s, s);
      }
    });
    cx += 6 * s;
  }
  return cx;
}

function reading(widget: Widget, t: number) {
  switch (widget) {
    case "Speed":
      return { value: String(Math.round(64 + 14 * Math.sin(t * 0.7) + 5 * Math.sin(t * 2.1))), unit: "KM/H", tag: "SPD" };
    case "G-Force":
      return { value: (1.3 + 0.7 * Math.abs(Math.sin(t * 1.3))).toFixed(1), unit: "G", tag: "G" };
    case "Altitude":
      return { value: String(Math.round(1850 + 30 * Math.sin(t * 0.2))), unit: "M", tag: "ALT" };
    case "Temperature":
      return { value: "-6", unit: "°C", tag: "TMP" };
    case "Lap Timer": {
      const s = (t * 1.0 + 42) % 120;
      return { value: `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, "0")}`, unit: "", tag: "LAP" };
    }
    case "Air-Time":
      return { value: (0.6 + 0.4 * Math.abs(Math.sin(t * 0.5))).toFixed(1), unit: "S", tag: "AIR" };
  }
}

/** A faithful 128×64 monochrome screen, drawn pixel for pixel */
export default function Oled({ widgets, label }: { widgets: Widget[]; label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const list = useRef(widgets);

  useEffect(() => {
    list.current = widgets;
  }, [widgets]);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer = 0;

    const draw = () => {
      const t = still ? 2 : performance.now() / 1000;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 128, 64);
      ctx.fillStyle = "#DFF7FF";
      const [first, ...rest] = list.current;
      if (first) {
        const r = reading(first, t);
        const s = r.value.length > 4 ? 3 : 4;
        const end = text(ctx, r.value, 2, 4, s);
        if (r.unit) text(ctx, r.unit, end + 1, 4 + 7 * s - 7, 1);
      }
      ctx.fillRect(2, 40, 124, 1);
      rest.slice(0, 2).forEach((w, i) => {
        const r = reading(w, t);
        const x = 2 + i * 64;
        text(ctx, r.tag, x, 45);
        text(ctx, r.value + r.unit, x, 55);
      });
    };

    const io = new IntersectionObserver(([entry]) => {
      window.clearInterval(timer);
      if (entry.isIntersecting && !still) timer = window.setInterval(draw, 100);
      draw();
    });
    io.observe(canvas);
    draw();
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      width={128}
      height={64}
      role="img"
      aria-label={label}
      className="block aspect-[2/1] w-full bg-black [image-rendering:pixelated]"
    />
  );
}
