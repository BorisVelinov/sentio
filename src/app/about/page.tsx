import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "About Sentio",
  description: "Why we put a heads-up display inside a goggle, and what we refuse to compromise on.",
};

const beliefs = [
  {
    title: "Eyes stay up",
    text: "Stopping to check a phone breaks the ride. The information you need belongs in the corner of your eye.",
  },
  {
    title: "Safety is never a subscription",
    text: "Crash detection and every app feature are included. Nothing that matters sits behind a monthly payment.",
  },
  {
    title: "Built for the conditions",
    text: "Dust, roost, ice and vibration come first. If it can't survive a real day out, it doesn't ship.",
  },
];

const numbers = [
  { value: "18", label: "Months of prototyping" },
  { value: "3", label: "Continents of field testing" },
  { value: "2,000", label: "Hours of rider feedback" },
];

export default function AboutPage() {
  return (
    <div className="bg-graphite text-paper">
      <section className="wrap pb-14 pt-[calc(44px+12svh)] md:pb-20">
        <p className="hud-label text-stone">About Sentio</p>
        <h1 className="mt-3 max-w-5xl leading-[1] tracking-[-0.02em] [font-size:clamp(2.75rem,7vw,6.5rem)]">
          Riders shouldn&apos;t have to look away.
        </h1>
      </section>

      <section className="relative h-[70svh] overflow-hidden md:h-[92svh]">
        <Photo
          name="lens-open-side"
          widths={[900, 1600]}
          alt="A Sentio goggle on granite at sunset, with its lens swung open"
          className="object-[58%_50%]"
          eager
        />
      </section>

      <section className="bg-paper text-graphite">
        <div className="wrap band">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
            <p className="hud-label reveal text-ash md:col-span-4 md:pt-3">Why we exist</p>
            <div className="md:col-span-8">
              <p className="statement reveal">
                The best riders never look down. So we asked a simple question: what if the numbers came to you?
              </p>
              <p className="body-copy reveal mt-6 max-w-xl text-ash">
                Sentio began with a goggle, a tiny display and one rule: nothing gets added unless it helps you ride.
                Everything else was left on the bench.
              </p>
            </div>
          </div>

          <dl className="mt-16 grid gap-y-8 md:mt-28 md:grid-cols-3 md:gap-x-8">
            {numbers.map((n) => (
              <div key={n.label} className="reveal rule pt-4">
                <dd className="text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.03em]">{n.value}</dd>
                <dt className="hud-label mt-3 text-ash">{n.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="wrap band">
          <h2 className="statement reveal">What we believe.</h2>
          <ul className="mt-12 grid gap-y-8 md:mt-20 md:grid-cols-3 md:gap-x-8">
            {beliefs.map((b) => (
              <li key={b.title} className="reveal rule pt-4">
                <h3 className="text-xl tracking-tight md:text-2xl">{b.title}</h3>
                <p className="body-copy mt-2 max-w-sm text-stone">{b.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/compare" className="link-arrow mt-12">
            Find your goggle
          </Link>
        </div>
      </section>
    </div>
  );
}
