import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Compare Sentio Moto and Snow",
  description: "Sentio Moto and Sentio Snow side by side: price, weight, battery, lens and protection.",
};

const shared = [
  "128×64 OLED HUD at 60 fps",
  "OV2640 HD camera",
  "6-axis crash detection with SOS",
  "ESP32S3 dual-core 240 MHz",
  "Wi-Fi and BLE 5.0",
  "MIL-PRF-32432 ballistic lens",
  "140° × 90° field of view",
  "USB-C, 90 minute full charge",
];

const rows = [
  { label: "Price", moto: "$349", snow: "$379" },
  { label: "Built for", moto: "Motocross and enduro", snow: "Ski and snowboard" },
  { label: "Weight", moto: "185 g", snow: "195 g" },
  { label: "Battery", moto: "8 h active", snow: "6 h heated, 8 h standard" },
  { label: "Protection", moto: "IP54", snow: "IP64" },
  { label: "Operating temperature", moto: "-20°C to 45°C", snow: "-25°C to 40°C" },
  { label: "Lens", moto: "38% VLT warm amber", snow: "Cat.3 S3, 8-18% VLT" },
  { label: "Lens clearing", moto: "7-post tear-offs, 14 layers", snow: "Dual-pane heated anti-fog" },
  { label: "Lens change", moto: "Tear-off stack", snow: "Magnetic, 10 seconds" },
  { label: "HUD highlights", moto: "Speed, navigation, lap timer", snow: "Temperature, altitude, run mapping" },
];

export default function ComparePage() {
  return (
    <div className="bg-paper text-graphite">
      <section className="wrap pb-12 pt-[calc(44px+12svh)] md:pb-16">
        <p className="hud-label text-ash"><T>Compare</T></p>
        <h1 className="mt-3 max-w-4xl leading-[1] tracking-[-0.02em] [font-size:clamp(2.75rem,7vw,6.5rem)]"><T>Same brain.</T><br /><T>Different terrain.</T></h1>
      </section>

      <section className="wrap pb-20 md:pb-32">
        <div className="sticky top-11 z-10 grid grid-cols-2 gap-x-5 bg-paper py-4 md:grid-cols-[1fr_1fr_1fr] md:gap-x-8">
          <span className="hidden md:block" />
          <Link href="/moto" className="block">
            <span
              className="block text-[clamp(1.5rem,3vw,2.75rem)] leading-none text-amber-deep"
              style={{ fontVariationSettings: '"wdth" 70, "wght" 780' }}
            ><T>Sentio Moto</T></span>
          </Link>
          <Link href="/snow" className="block">
            <span
              className="block text-[clamp(1.5rem,3vw,2.75rem)] leading-none text-ice-deep"
              style={{ fontVariationSettings: '"wdth" 118, "wght" 280' }}
            ><T>Sentio Snow</T></span>
          </Link>
        </div>

        <dl>
          {rows.map((r) => (
            <div key={r.label} className="rule grid grid-cols-2 gap-x-5 gap-y-1.5 py-4 md:grid-cols-[1fr_1fr_1fr] md:gap-x-8">
              <dt className="hud-label col-span-2 text-ash md:col-span-1 md:pt-1"><T>{r.label}</T></dt>
              <dd className="text-[0.9375rem] md:text-lg md:tracking-tight"><T>{r.moto}</T></dd>
              <dd className="text-[0.9375rem] md:text-lg md:tracking-tight"><T>{r.snow}</T></dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid grid-cols-2 gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-x-8">
          <span className="hidden md:block" />
          <Link href="/moto" className="btn bg-amber text-graphite"><T>Explore Moto</T></Link>
          <Link href="/snow" className="btn bg-graphite text-paper"><T>Explore Snow</T></Link>
        </div>
      </section>

      <section className="bg-graphite text-paper">
        <div className="wrap band">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
            <h2 className="statement reveal md:col-span-5"><T>In both editions.</T></h2>
            <ul className="grid md:col-span-7 md:grid-cols-2 md:gap-x-8">
              {shared.map((s) => (
                <li key={s} className="rule py-3 text-[0.9375rem]">
                  <T>{s}</T>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
