import Link from "next/link";
import Photo from "@/components/ui/Photo";
import HudShowcase from "./HudShowcase";
import T from "@/components/ui/T";

const stats = [
  { value: "60", unit: "fps", label: "HUD refresh" },
  { value: "140°", unit: "", label: "Horizontal field of view" },
  { value: "185", unit: "g", label: "Moto, with electronics" },
  { value: "8", unit: "h", label: "Battery, standard mode" },
];

export function Intro() {
  return (
    <section className="bg-paper text-graphite">
      <div className="wrap band">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="reveal md:col-span-5 md:pt-4">
            <h2 className="statement"><T>A display that disappears until you need it. Speed, navigation and crash detection, built into the goggle itself.</T></h2>
            <Link href="/#technology" className="link-arrow mt-6"><T>How it works</T></Link>
          </div>
          <div className="reveal md:col-span-4 md:col-start-6">
            <div className="aspect-[4/5]">
              <Photo
                name="frame-detail"
                widths={[800, 1300]}
                sizes="(max-width: 767px) 100vw, 34vw"
                alt="Goggle frame on granite with the lens swung open, in low evening sun"
              />
            </div>
          </div>
          <div className="reveal md:col-span-3 md:mt-40">
            <div className="ml-[28%] aspect-square md:ml-0">
              <Photo
                name="foam-detail"
                widths={[500, 800]}
                sizes="(max-width: 767px) 72vw, 25vw"
                alt="Close view of the layered face foam resting on rock"
              />
            </div>
            <p className="body-copy mt-3 ml-[28%] text-ash md:ml-0"><T>Triple-layer face foam, removable and washable.</T></p>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-32 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal rule pt-4">
              <dd className="text-[clamp(2.75rem,5.5vw,5rem)] leading-none tracking-[-0.03em]">
                {s.value}
                <span className="ml-1 text-[0.4em] tracking-normal"><T>{s.unit}</T></span>
              </dd>
              <dt className="hud-label mt-3 text-ash"><T>{s.label}</T></dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function FullBleed() {
  return (
    <section className="keep-tone relative h-[82svh] overflow-hidden bg-graphite md:h-[100svh]">
      <Photo
        name="wide-rock"
        widths={[1100, 2200]}
        alt="The Sentio goggle on a granite block at sunset, with the magnetic lens swung away from the frame"
        className="object-[64%_50%]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(to top, rgba(14,15,17,0.75), transparent)" }}
      />
      <div className="wrap absolute inset-x-0 bottom-0 pb-8 md:pb-12">
        <p className="statement reveal max-w-3xl text-paper"><T>Eight magnets hold the lens. Ten seconds to swap it, gloves on.</T></p>
        <p className="hud-label mt-3 text-paper/80"><T>Magnetic lens system, Sentio Snow</T></p>
      </div>
    </section>
  );
}

const tech = [
  {
    title: "Transparent OLED",
    text: "Speed, G-force and navigation sit in the upper right of your view, at just 12% of your field of vision.",
    note: "SSD1309 · SPI at 10 MHz",
  },
  {
    title: "ESP32S3 core",
    text: "A dual-core 240 MHz processor runs sensor fusion, camera and wireless together.",
    note: "Wi-Fi · BLE 5.0 · OV2640",
  },
  {
    title: "Crash detection",
    text: "A 6-axis IMU reads every impact and can call for help on its own.",
    note: "LSM6DSO · ±16 g",
  },
];

export function Technology() {
  return (
    <section id="technology" className="scroll-mt-11 bg-graphite text-paper">
      <div className="wrap pb-10 pt-20 md:pb-16 md:pt-40">
        <h2 className="statement reveal max-w-3xl"><T>Everything you need to know, in the corner of your eye.</T></h2>
      </div>
      <div className="reveal mx-auto md:w-[min(100%-8vw,118svh)]">
        <HudShowcase />
      </div>
      <div className="wrap band !pt-14 md:!pt-20">
        <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-8">
          {tech.map((t) => (
            <div key={t.title} className="reveal rule pt-4">
              <h3 className="text-xl tracking-tight md:text-2xl"><T>{t.title}</T></h3>
              <p className="body-copy mt-2 max-w-sm text-stone"><T>{t.text}</T></p>
              <p className="hud-label mt-4 text-stone"><T>{t.note}</T></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const systems = [
  {
    name: "The Brain",
    text: "Dual-core 240 MHz with 8 MB PSRAM and 8 MB flash, running sensor fusion at 100 Hz.",
    spec: "XIAO ESP32S3 Sense",
  },
  {
    name: "The Display",
    text: "A 128×64 OLED on a precision-ground prism. Brightness adapts in under 200 ms.",
    spec: "SSD1309 · 60 fps",
  },
  {
    name: "The Guardian",
    text: "Six axes sampled 416 times a second, judged in a 50 ms window.",
    spec: "LSM6DSO · ±2000 °/s",
  },
  {
    name: "The Armor",
    text: "Optical polycarbonate with anti-fog, UV400 and a hydrophobic hard coat.",
    spec: "MIL-PRF-32432",
  },
];

export function Systems() {
  return (
    <section className="bg-paper text-graphite">
      <div className="wrap band">
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-6">
            <div className="md:sticky md:top-24">
              <h2 className="statement reveal"><T>Four systems. One frame.</T></h2>
              <div className="reveal mt-8 aspect-[3/2] md:mr-10">
                <Photo
                  name="lens-detail"
                  widths={[800, 1400]}
                  sizes="(max-width: 767px) 100vw, 46vw"
                  alt="Close view of the dark cylindrical lens, reflecting the evening sky and rock"
                />
              </div>
            </div>
          </div>
          <ul className="md:col-span-6 md:pt-2">
            {systems.map((s) => (
              <li key={s.name} className="reveal rule pb-10 pt-4 md:pb-16">
                <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] tracking-tight"><T>{s.name}</T></h3>
                <p className="body-copy mt-2 max-w-md text-ash"><T>{s.text}</T></p>
                <p className="hud-label mt-3 text-ash"><T>{s.spec}</T></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const sos = [
  { mark: "50 ms", title: "Impact", text: "Force and rotation spike past the crash threshold, not just a hard landing." },
  { mark: "10 s", title: "Countdown", text: "The HUD counts down. Press the button or shake the goggles to cancel." },
  { mark: "800 ms", title: "Phone relay", text: "An emergency packet reaches the app over BLE and your GPS position is fixed." },
  { mark: "5", title: "Contacts alerted", text: "Up to five people get your location, updated every 60 seconds until you are safe." },
];

export function Safety() {
  return (
    <section id="safety" className="scroll-mt-11 bg-coal text-paper">
      <div className="wrap band">
        <p className="hud-label reveal text-amber"><T>Safety</T></p>
        <h2 className="statement reveal mt-3 max-w-3xl"><T>The one time you can&apos;t call for help, your goggles do.</T></h2>
        <ol className="mt-14 grid gap-y-10 md:mt-24 md:grid-cols-4 md:gap-x-8">
          {sos.map((s) => (
            <li key={s.title} className="reveal rule pt-4">
              <p className="text-[clamp(2.5rem,4.2vw,4rem)] leading-none tracking-[-0.03em]"><T>{s.mark}</T></p>
              <h3 className="mt-5 text-lg tracking-tight"><T>{s.title}</T></h3>
              <p className="body-copy mt-1 max-w-xs text-stone"><T>{s.text}</T></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const editions = [
  { href: "/moto", world: "dirt", name: "Sentio Moto", line: "Born for the dirt.", price: "$349", tone: "text-paper" },
  { href: "/snow", world: "snow", name: "Sentio Snow", line: "Made for the mountain.", price: "$379", tone: "text-graphite" },
];

export function Editions() {
  return (
    <section className="keep-tone bg-paper md:flex">
      {editions.map((e, i) => (
        <Link
          key={e.name}
          href={e.href}
          className={`group relative block h-[78svh] overflow-hidden md:h-[92svh] md:w-[calc(50%+3.5vw)] ${
            i === 0
              ? "md:[clip-path:polygon(0_0,100%_0,calc(100%-7vw)_100%,0_100%)]"
              : "md:-ml-[7vw] md:[clip-path:polygon(7vw_0,100%_0,100%_100%,0_100%)]"
          } ${e.tone}`}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={`/images/worlds/${e.world}-soft.webp`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/images/goggles/goggle-1100.webp"
            alt=""
            loading="lazy"
            className="absolute left-1/2 top-[56%] w-[88%] max-w-[44rem] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-[var(--ease-terrain)] group-hover:scale-[1.03]"
          />
          {/* eslint-enable @next/next/no-img-element */}
          <div className={`absolute inset-x-0 top-0 p-5 md:p-8 ${i === 1 ? "md:pl-[calc(2rem+7vw)]" : ""}`}>
            <h2 className="statement">{e.name}</h2>
            <p className="body-copy mt-1"><T>{e.line}</T></p>
          </div>
          <div
            className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-8 ${i === 0 ? "md:pr-[calc(2rem+7vw)]" : ""}`}
          >
            <p className="text-xl tracking-tight">{e.price}</p>
            <span className="link-arrow"><T>Explore</T></span>
          </div>
        </Link>
      ))}
    </section>
  );
}

const reviews = [
  {
    quote: "The speed readout stays out of the way until I look for it. After a few laps I stopped noticing it was there.",
    name: "Daniel Vrana",
    role: "Enduro racer",
  },
  {
    quote: "Straight from a warm gondola into the cold and the lens stayed clear. That used to ruin my first run.",
    name: "Lena Hartwig",
    role: "Freeride snowboarder",
  },
  {
    quote: "My clips come out with speed and G-force already on them. It looks like a broadcast and I edited nothing.",
    name: "Tom Ashby",
    role: "Trail rider",
  },
];

export function Reviews() {
  return (
    <section className="bg-paper text-graphite">
      <div className="wrap band">
        <h2 className="hud-label reveal text-ash"><T>Riders</T></h2>
        <ul className="mt-6">
          {reviews.map((r) => (
            <li key={r.name} className="reveal rule grid gap-y-4 py-8 md:grid-cols-12 md:gap-x-8 md:py-12">
              <blockquote className="statement md:col-span-9"><T>{r.quote}</T></blockquote>
              <p className="hud-label text-ash md:col-span-3 md:pt-3 md:text-right">
                {r.name}
                <br />
                <T>{r.role}</T>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How long does the battery last in extreme cold?",
    a: "Snow gives about 6 hours in heated anti-fog mode and 8+ in standard mode, thanks to a thermally insulated cell rated to -25°C. Moto runs for 8 hours. A full USB-C charge takes 90 minutes.",
  },
  {
    q: "Is the HUD distracting while riding?",
    a: "It sits in the upper right of the lens and covers 12% of your field of view, so you glance at it like a speedometer. Brightness adapts automatically, from full sun to low light.",
  },
  {
    q: "Is the Sentio App subscription-based?",
    a: "No. Every feature is free, with no subscription or in-app purchases. It runs on iOS 15+ and Android 12+ and updates your goggles over the air.",
  },
  {
    q: "Is Sentio compatible with my helmet?",
    a: "Moto is confirmed with 50+ motocross and enduro helmets, with a 45 mm silicone-grip strap and outriggers that flex ±15°. Snow fits standard ski and snowboard helmets.",
  },
  {
    q: "What happens if I crash with the goggles on?",
    a: "The lens is rated to MIL-PRF-32432 and the TPU frame absorbs impact. Above the 8 g threshold the HUD starts a 10-second countdown, then alerts up to 5 contacts with your location unless you cancel.",
  },
  {
    q: "Can I record video without the app?",
    a: "Yes. The camera records to onboard flash with no phone connected: about 45 minutes at high resolution. The app adds telemetry overlays later.",
  },
];

export function Questions() {
  return (
    <section id="questions" className="scroll-mt-11 bg-paper text-graphite">
      <div className="wrap band !pt-0">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <h2 className="statement reveal md:col-span-5"><T>Questions</T></h2>
          <div className="md:col-span-7">
            {faqs.map((f) => (
              <details key={f.q} className="rule group">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-lg tracking-tight md:text-xl">
                  <T>{f.q}</T>
                  <span aria-hidden className="plus shrink-0 text-2xl font-light leading-none">
                    +
                  </span>
                </summary>
                <p className="body-copy max-w-xl pb-6 text-ash"><T>{f.a}</T></p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
