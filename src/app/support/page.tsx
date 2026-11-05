import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/ui/T";

export const metadata: Metadata = {
  title: "Sentio Support",
  description: "Shipping, returns, warranty, charging and setup for your Sentio goggles.",
};

const promises = [
  { mark: "Free", title: "Worldwide shipping", text: "Included on every pre-order." },
  { mark: "30", title: "Day returns", text: "Ride it. If it isn't for you, send it back." },
  { mark: "2", title: "Year warranty", text: "Included with both editions." },
];

const topics = [
  {
    q: "How do I charge my goggles?",
    a: "Use the USB-C port. A full charge takes about 90 minutes, and 15 minutes gives you a quick top-up.",
  },
  {
    q: "How do I pair the app?",
    a: "Install the Sentio App on iOS 15+ or Android 12+. It connects over BLE 5.0, and footage transfers over Wi-Fi Direct.",
  },
  {
    q: "How do I update the firmware?",
    a: "Updates arrive over the air through the app, so there is nothing to plug in.",
  },
  {
    q: "How do I set up emergency contacts?",
    a: "Add up to 5 contacts in the app. They are alerted with your location if a crash countdown isn't cancelled.",
  },
  {
    q: "How do I clean the foam?",
    a: "The face foam is removable and washable. Let it dry fully before refitting it.",
  },
  {
    q: "How do I change the lens?",
    a: "On Snow, pull at the release points and the magnetic lens comes away in under 10 seconds. On Moto, use tear-offs on the 7-post system.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-paper text-graphite">
      <section className="wrap pb-14 pt-[calc(44px+12svh)] md:pb-20">
        <p className="hud-label text-ash"><T>Support</T></p>
        <h1 className="mt-3 leading-[1] tracking-[-0.02em] [font-size:clamp(2.75rem,7vw,6.5rem)]"><T>We&apos;ve got you.</T></h1>
        <dl className="mt-14 grid gap-y-8 md:mt-24 md:grid-cols-3 md:gap-x-8">
          {promises.map((p) => (
            <div key={p.title} className="rule pt-4">
              <dd className="text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.03em]"><T>{p.mark}</T></dd>
              <dt className="mt-3 text-xl tracking-tight"><T>{p.title}</T></dt>
              <dd className="body-copy mt-1 text-ash"><T>{p.text}</T></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap pb-20 pt-8 md:pb-32 md:pt-16">
        <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5">
            <h2 className="statement"><T>Setup and care</T></h2>
            <Link href="/#questions" className="link-arrow mt-4"><T>More questions</T></Link>
          </div>
          <div className="md:col-span-7">
            {topics.map((t) => (
              <details key={t.q} className="rule">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-lg tracking-tight md:text-xl">
                  <T>{t.q}</T>
                  <span aria-hidden className="plus shrink-0 text-2xl font-light leading-none">
                    +
                  </span>
                </summary>
                <p className="body-copy max-w-xl pb-6 text-ash"><T>{t.a}</T></p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-11 bg-graphite text-paper">
        <div className="wrap band">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-5">
              <h2 className="statement reveal"><T>Talk to us.</T></h2>
              <p className="body-copy mt-2 text-stone"><T>Questions before you order, or help after you ride.</T></p>
            </div>
            <dl className="md:col-span-7">
              <div className="rule py-4">
                <dt className="hud-label text-stone"><T>Email</T></dt>
                <dd className="mt-1">
                  <a
                    href="mailto:sentio2026@gmail.com"
                    className="inline-block py-1 text-[clamp(1.375rem,2.6vw,2.25rem)] tracking-tight transition-opacity hover:opacity-60"
                  ><T>sentio2026@gmail.com</T></a>
                </dd>
              </div>
              <div className="rule py-4">
                <dt className="hud-label text-stone"><T>Phone</T></dt>
                <dd className="mt-1">
                  <a
                    href="tel:0879320806"
                    className="inline-block py-1 text-[clamp(1.375rem,2.6vw,2.25rem)] tracking-tight transition-opacity hover:opacity-60"
                  >
                    0879 320 806
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
