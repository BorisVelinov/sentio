"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import type { TerrainState } from "./TerrainParticles";

const TerrainParticles = dynamic(() => import("./TerrainParticles"), { ssr: false });

const GOGGLE_RATIO = 1325 / 2000;
const TILT = 0.07;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const range = (v: number, a: number, b: number) => clamp((v - a) / (b - a));

function Word({ text }: { text: string }) {
  return (
    <span className="inline-block whitespace-nowrap">
      {[...text].map((char, i) => (
        <span key={i} data-char>
          {char}
        </span>
      ))}
    </span>
  );
}

/** Three lines on a phone, two on anything wider */
function Headline({ tone }: { tone: string }) {
  const { lang } = useLanguage();
  const [first, second, third] = lang === "bg" ? ["Визия", "среща", "инстинкт."] : ["Vision", "meets", "instinct."];
  return (
    <div
      data-headline
      aria-hidden
      className={`absolute inset-x-0 top-[calc(44px+6svh)] text-center leading-[0.98] tracking-[-0.015em] [font-size:min(19vw,12.5svh)] md:[font-size:min(11.5vw,13.5svh)] ${tone}`}
    >
      <span className="block">
        <Word text={first} />
        <span className="block md:hidden" />
        <span className="hidden md:inline"> </span>
        <Word text={second} />
      </span>
      <span className="block">
        <Word text={third} />
      </span>
    </div>
  );
}

const worldClass = "absolute inset-0 h-full w-full object-cover";

export default function TerrainHero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const dirt = useRef<HTMLDivElement>(null);
  const snow = useRef<HTMLDivElement>(null);
  const goggle = useRef<HTMLDivElement>(null);
  const shadow = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const flakes = useRef<HTMLDivElement>(null);
  const corners = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLParagraphElement>(null);
  const statement = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLInputElement>(null);
  const particles = useRef<TerrainState>({ split: 0.5, tilt: TILT, velocity: 0, paused: false });
  const [motion, setMotion] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = section.current!;
    const view = stage.current!;
    const chars = [...root.querySelectorAll<HTMLElement>("[data-char]")].map((el) => ({ el, x: 0.5, last: "" }));

    let vw = 1;
    let vh = 1;
    let scrollRange = 1;
    let gw = 1;
    let gh = 1;
    let rest = { x: 0, y: 0 };
    let end = { x: 0, y: 0, scale: 1 };

    let target = 0.5;
    let current = reduced ? 0.5 : 0.86;
    let drawnSplit = -1;
    let drawnScroll = -1;
    let lastScroll = window.scrollY;
    let velocity = 0;
    let lastTime = performance.now();
    let raf = 0;
    let dragged = false;

    const paintSplit = (split: number) => {
      const top = (split + TILT / 2) * 100;
      const bottom = (split - TILT / 2) * 100;
      dirt.current!.style.clipPath = `polygon(0 0, ${top}% 0, ${bottom}% 100%, 0 100%)`;
      snow.current!.style.clipPath = `polygon(${top}% 0, 100% 0, 100% 100%, ${bottom}% 100%)`;
      line.current!.style.clipPath = `polygon(${top}% 0, calc(${top}% + 1px) 0, calc(${bottom}% + 1px) 100%, ${bottom}% 100%)`;

      // Each letter takes the character of the terrain it sits on
      for (const c of chars) {
        const k = 1 / (1 + Math.exp(-(c.x - split) / 0.035));
        const value = `"wdth" ${Math.round(lerp(62, 125, k))}, "wght" ${Math.round(lerp(860, 240, k) / 10) * 10}`;
        if (value !== c.last) {
          c.last = value;
          c.el.style.fontVariationSettings = value;
        }
      }
    };

    // The terrains part like doors along the boundary. The photo is never
    // enlarged, so it always shows at its real sharpness. Transform and opacity
    // only, so scrolling stays on the GPU.
    const paintScroll = (y: number) => {
      const p = clamp(y / scrollRange);
      const q = range(p, 0, 0.62);
      const open = 1 - Math.pow(1 - q, 1.7);
      const left = (current + TILT / 2 + 0.01) * vw;
      const right = (1 - current + TILT / 2 + 0.01) * vw;
      dirt.current!.style.transform = `translate3d(${-left * open}px, 0, 0)`;
      snow.current!.style.transform = `translate3d(${right * open}px, 0, 0)`;

      const lift = q * q * (3 - 2 * q);
      const x = lerp(rest.x, end.x, lift);
      const yy = lerp(rest.y, end.y, lift);
      goggle.current!.style.transform = `translate3d(${x}px, ${yy}px, 0) scale(${lerp(1, end.scale, lift)})`;
      shadow.current!.style.opacity = String(1 - range(p, 0, 0.2));

      corners.current!.style.opacity = String(1 - range(p, 0, 0.1));
      corners.current!.style.pointerEvents = p > 0.05 ? "none" : "auto";
      line.current!.style.opacity = String(1 - range(p, 0, 0.06));
      flakes.current!.style.opacity = String(1 - range(p, 0, 0.3));
      const reveal = range(p, 0.46, 0.74);
      statement.current!.style.opacity = String(reveal);
      statement.current!.style.transform = `translate3d(0, ${(1 - reveal) * 28}px, 0)`;
      particles.current.paused = p > 0.32;
      hint.current!.style.opacity = dragged ? "0" : String(1 - range(p, 0, 0.04));
    };

    const measure = () => {
      vw = view.clientWidth;
      vh = view.clientHeight;
      scrollRange = Math.max(1, root.offsetHeight - vh);
      const portrait = vh > vw;
      gw = portrait ? Math.min(vw * 1.02, vh * 0.72) : Math.min(vw * 0.5, vh * 0.8);
      gh = gw * GOGGLE_RATIO;
      rest = {
        x: vw / 2 - gw / 2,
        y: portrait ? vh * 0.7 - gh / 2 : vh * 0.93 - gh,
      };
      // Settles above the statement, at or below its starting size
      const scale = portrait ? 1 : 0.88;
      end = {
        x: vw / 2 - (gw * scale) / 2,
        y: vh * (portrait ? 0.38 : 0.4) - (gh * scale) / 2,
        scale,
      };
      goggle.current!.style.width = `${gw}px`;
      goggle.current!.style.height = `${gh}px`;

      // Read letter positions from a neutral state, then repaint
      for (const c of chars) c.el.style.fontVariationSettings = `"wdth" 94, "wght" 500`;
      const dx = new DOMMatrixReadOnly(getComputedStyle(dirt.current!).transform).m41;
      const sx = new DOMMatrixReadOnly(getComputedStyle(snow.current!).transform).m41;
      const half = chars.length / 2;
      chars.forEach((c, i) => {
        const r = c.el.getBoundingClientRect();
        c.x = (r.left + r.width / 2 - (i < half ? dx : sx)) / vw;
        c.last = "";
      });
      drawnSplit = -1;
      drawnScroll = -1;
      schedule();
    };

    // Runs only while something is moving, then stops completely
    const tick = () => {
      raf = 0;
      const now = performance.now();
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      const y = window.scrollY;
      velocity = lerp(velocity, y - lastScroll, 0.3);
      lastScroll = y;
      particles.current.velocity = velocity;

      current = reduced ? target : lerp(current, target, 1 - Math.exp(-dt * 4.2));
      if (Math.abs(current - target) < 0.0008) current = target;
      particles.current.split = current;

      if (y <= scrollRange + vh) {
        const moved = current !== drawnSplit;
        if (moved) {
          drawnSplit = current;
          paintSplit(current);
        }
        if (moved || y !== drawnScroll) {
          drawnScroll = y;
          paintScroll(y);
        }
      }
      if (current !== target || Math.abs(velocity) > 0.2) schedule();
    };

    function schedule() {
      if (!raf) {
        lastTime = Math.max(lastTime, performance.now() - 34);
        raf = requestAnimationFrame(tick);
      }
    }

    const setTarget = (x: number) => {
      target = clamp(x / vw, 0.08, 0.92);
      if (slider.current) slider.current.value = String(Math.round(target * 100));
      schedule();
    };
    const onMove = (e: PointerEvent) => {
      if (window.scrollY > scrollRange * 0.05) return;
      if (e.pointerType === "mouse") return setTarget(e.clientX);
      if (e.buttons) {
        dragged = true;
        hint.current!.style.opacity = "0";
        setTarget(e.clientX);
      }
    };
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && window.scrollY <= scrollRange * 0.05) setTarget(e.clientX);
    };
    const onInput = (e: Event) => {
      target = Number((e.target as HTMLInputElement).value) / 100;
      schedule();
    };

    measure();
    document.fonts?.ready.then(measure);
    view.addEventListener("pointermove", onMove, { passive: true });
    view.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    const input = slider.current;
    input?.addEventListener("input", onInput);

    // Particles wait for the first paint so they never compete with the images
    const start = window.setTimeout(() => setMotion(!reduced), 500);

    return () => {
      window.clearTimeout(start);
      cancelAnimationFrame(raf);
      view.removeEventListener("pointermove", onMove);
      view.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      input?.removeEventListener("input", onInput);
    };
  }, [lang]);

  return (
    <section ref={section} aria-label="Sentio goggles" className="relative h-[215svh]">
      <div ref={stage} className="keep-tone sticky top-0 h-svh touch-pan-y select-none overflow-hidden bg-graphite">
        <h1 className="sr-only">{t("Vision meets instinct.")}</h1>

        {/* Revealed when the terrains part */}
        <div className="pointer-events-none absolute inset-x-0 top-[66svh] px-6 text-center md:top-[69svh]">
          <p
            ref={statement}
            className="text-paper opacity-0 will-change-transform [font-size:min(13.5vw,8svh)] md:[font-size:min(6vw,9.5svh)]"
            style={{ lineHeight: 1.02, letterSpacing: "-0.02em" }}
          >
            {t("Two terrains.")}
            <br />
            {t("One lens.")}
          </p>
        </div>

        {/* eslint-disable @next/next/no-img-element */}
        {/* Each terrain carries its half of the headline with it */}
        <div
          ref={dirt}
          className="absolute inset-0 will-change-transform"
          style={{ clipPath: "inset(0 50% 0 0)", background: "#6b3218" }}
        >
          <img src="/images/worlds/dirt-soft.webp" alt="" fetchPriority="high" className={worldClass} />
          <Headline tone="text-paper" />
        </div>
        <div
          ref={snow}
          className="absolute inset-0 will-change-transform"
          style={{ clipPath: "inset(0 0 0 50%)", background: "#b9d0e8" }}
        >
          <img src="/images/worlds/snow-soft.webp" alt="" fetchPriority="high" className={worldClass} />
          <Headline tone="text-graphite" />
        </div>

        <div
          ref={line}
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white/70"
          style={{ clipPath: "inset(0 50% 0 50%)" }}
        />

        <div ref={flakes} className="pointer-events-none absolute inset-0">
          {motion && <TerrainParticles state={particles} />}
        </div>

        {/* The goggle, as photographed. Its scale never goes above 1. */}
        <div
          ref={goggle}
          className="pointer-events-none absolute left-0 top-0 origin-top-left will-change-transform"
        >
          <div
            ref={shadow}
            aria-hidden
            className="absolute -bottom-[6%] left-[4%] h-[20%] w-[94%]"
            style={{ background: "radial-gradient(closest-side, rgba(0,0,0,0.5), transparent)" }}
          />
          <img
            src="/images/goggles/goggle-2000.webp"
            srcSet="/images/goggles/goggle-1100.webp 1100w, /images/goggles/goggle-2000.webp 2000w"
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="The Sentio goggle, with a wide dark cylindrical lens"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        {/* eslint-enable @next/next/no-img-element */}

        <p
          ref={hint}
          aria-hidden
          className="hud-label absolute inset-x-0 bottom-[6.75rem] text-center text-paper md:hidden"
        >
          ← {t("Drag")} →
        </p>

        <div
          ref={corners}
          className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:p-8"
        >
          <Link href="/moto" className="hud-label py-1 text-paper">
            Sentio Moto
            <br />
            {t("Motocross & Enduro")}
            <br />
            $349 →
          </Link>
          <Link href="/snow" className="hud-label py-1 text-right text-graphite">
            Sentio Snow
            <br />
            {t("Ski & Snowboard")}
            <br />
            $379 →
          </Link>
        </div>

        <label className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:left-1/2 focus-within:top-16 focus-within:-translate-x-1/2">
          <span className="sr-only">{t("Move the boundary between dirt and snow")}</span>
          <input ref={slider} type="range" min={8} max={92} defaultValue={50} className="w-64" />
        </label>
      </div>
    </section>
  );
}
