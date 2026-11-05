import type { Metadata } from "next";
import HudEditor from "@/components/product/HudEditor";

export const metadata: Metadata = {
  title: "Sentio App | Your ride, your data",
  description: "Sync rides, design your HUD and export video with telemetry overlays. Free, with no subscription.",
};

const stats = [
  { value: "BLE 5.0", label: "Real-time sync" },
  { value: "2 s", label: "HUD changes reach your goggles" },
  { value: "5", label: "Overlay styles" },
  { value: "$0", label: "Every feature, forever" },
];

const video = [
  { title: "Auto-sync footage", text: "Clips transfer in the background over Wi-Fi Direct, with no cables or SD cards." },
  { title: "Telemetry overlay", text: "Speed, G-force and altitude are composited onto every frame, in sync to under 100 ms." },
  { title: "One-tap export", text: "Crops to 9:16, 1:1 or 16:9 for Reels, TikTok and YouTube." },
  { title: "Share sessions", text: "Send a link to an interactive 3D map of your ride. Cloud backup is free." },
];

export default function AppPage() {
  return (
    <div className="bg-graphite text-paper">
      <section className="wrap pb-16 pt-[calc(44px+14svh)] md:pb-24">
        <p className="hud-label text-stone">Sentio App · iOS 15+ and Android 12+</p>
        <h1 className="mt-3 leading-[0.98] tracking-[-0.02em] [font-size:clamp(3.25rem,10vw,9.5rem)]">
          Your ride.
          <br />
          Your data.
        </h1>
        <p className="body-copy mt-6 max-w-md text-stone">
          Control your HUD, relive every run and turn raw footage into something worth sharing. Free, with no
          subscription.
        </p>
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rule pt-4">
              <dd className="text-[clamp(2.25rem,4.6vw,4.25rem)] leading-none tracking-[-0.03em]">{s.value}</dd>
              <dt className="hud-label mt-3 text-stone">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <HudEditor />

      <section className="bg-paper text-graphite">
        <div className="wrap band">
          <h2 className="statement reveal max-w-3xl">
            Your footage, with broadcast-style telemetry. Rendered on your phone.
          </h2>
          <ul className="mt-12 grid gap-y-8 md:mt-20 md:grid-cols-4 md:gap-x-8">
            {video.map((v) => (
              <li key={v.title} className="reveal rule pt-4">
                <h3 className="text-xl tracking-tight">{v.title}</h3>
                <p className="body-copy mt-2 text-ash">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-coal">
        <div className="wrap band flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="statement">Free. Forever.</h2>
            <p className="body-copy mt-2 text-stone">No subscriptions, paywalls or in-app purchases.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#updates" className="btn bg-paper text-graphite">
              App Store
            </a>
            <a href="#updates" className="btn bg-paper/10 text-paper">
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
