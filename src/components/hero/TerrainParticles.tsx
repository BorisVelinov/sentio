"use client";

import { useEffect, useRef, type RefObject } from "react";

export type TerrainState = {
  /** Boundary between dirt (left) and snow (right), 0 to 1 */
  split: number;
  /** Boundary slant as a fraction of width */
  tilt: number;
  /** Scroll speed, pixels per frame */
  velocity: number;
  /** True once the hero has zoomed past the point where particles show */
  paused: boolean;
};

type Flake = { x: number; y: number; z: number; drift: number; phase: number };
type Grain = { x: number; y: number; vx: number; vy: number; life: number; size: number };
type Mote = { x: number; y: number; z: number; phase: number };

function makeSprite(size: number, softness: number, rgb: string) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  const r = size / 2;
  const grad = g.createRadialGradient(r, r, r * softness, r, r, r);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

/**
 * One shared canvas for both materials. Snow falls in true depth layers on the
 * right of the boundary. Dust hangs low on the left, and fast scrolling throws
 * roost off the boundary line.
 */
export default function TerrainParticles({ state }: { state: RefObject<TerrainState> }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sharp = makeSprite(32, 0.45, "255,255,255");
    const soft = makeSprite(64, 0, "255,255,255");
    const dust = makeSprite(64, 0, "226,170,120");

    let w = 0;
    let h = 0;
    let phone = false;
    let flakes: Flake[] = [];
    let motes: Mote[] = [];
    const grains: Grain[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      phone = w < 768;
      const dpr = phone ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flakes = Array.from({ length: phone ? 55 : 150 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.pow(Math.random(), 2.2),
        drift: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      }));
      motes = Array.from({ length: phone ? 5 : 16 }, () => ({
        x: Math.random() * w,
        y: h * (0.62 + Math.random() * 0.38),
        z: Math.random(),
        phase: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    let raf = 0;
    let t = 0;

    const frame = () => {
      raf = 0;
      if (!visible) return;
      if (state.current.paused) {
        ctx.clearRect(0, 0, w, h);
        raf = requestAnimationFrame(frame);
        return;
      }
      t += 1 / 60;
      const { split, tilt, velocity } = state.current;
      const wind = Math.max(-5, Math.min(5, velocity * 0.09));
      const boundary = (y: number) => (split + tilt * (0.5 - y / h)) * w;

      ctx.clearRect(0, 0, w, h);

      // Snow, far to near, drawn only on the snow side of the boundary
      for (const f of flakes) {
        const speed = 0.35 + f.z * 2.3;
        f.y += speed;
        f.x += Math.sin(t * f.drift + f.phase) * (0.2 + f.z * 0.5) + wind * (0.3 + f.z) - 0.35;
        if (f.y > h + 20) {
          f.y = -20;
          f.x = Math.random() * w;
        }
        if (f.x < -20) f.x = w + 20;
        if (f.x > w + 20) f.x = -20;
        if (f.x < boundary(f.y)) continue;
        const near = f.z > 0.72;
        const size = near ? 10 + f.z * 22 : 1.6 + f.z * 5;
        ctx.globalAlpha = near ? 0.2 : 0.42 + f.z * 0.4;
        ctx.drawImage(near ? soft : sharp, f.x - size / 2, f.y - size / 2, size, size);
      }

      // Low dust haze on the dirt side
      for (const m of motes) {
        m.x += 0.14 + m.z * 0.3 + wind * 0.25;
        if (m.x > w + 160) m.x = -160;
        if (m.x < -160) m.x = w + 160;
        if (m.x > boundary(m.y)) continue;
        const size = 130 + m.z * 230;
        ctx.globalAlpha = 0.05 + 0.04 * Math.sin(t * 0.4 + m.phase) + 0.03;
        ctx.drawImage(dust, m.x - size / 2, m.y - size / 2, size, size * 0.42);
      }

      // Roost: fine grains thrown from the ground when the page moves fast
      const speed = Math.abs(velocity);
      if (speed > 2.5 && grains.length < (phone ? 70 : 240)) {
        const n = Math.min(phone ? 4 : 9, Math.round(speed * 0.5));
        for (let i = 0; i < n; i++) {
          const y = h * (0.82 + Math.random() * 0.18);
          grains.push({
            x: boundary(y) - Math.random() * 40,
            y,
            vx: -(2 + Math.random() * 7),
            vy: -(3 + Math.random() * 7),
            life: 1,
            size: 0.8 + Math.random() * 1.8,
          });
        }
      }
      ctx.fillStyle = "#3a2214";
      for (let i = grains.length - 1; i >= 0; i--) {
        const g = grains[i];
        g.vy += 0.24;
        g.x += g.vx;
        g.y += g.vy;
        g.life -= 0.016;
        if (g.life <= 0 || g.y > h + 10) {
          grains.splice(i, 1);
          continue;
        }
        if (g.x > boundary(g.y)) continue;
        ctx.globalAlpha = Math.min(1, g.life * 1.6);
        ctx.fillRect(g.x, g.y, g.size, g.size);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      io.disconnect();
    };
  }, [state]);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
