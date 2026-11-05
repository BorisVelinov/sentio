import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-svh grid-rows-[1fr_auto] bg-graphite pt-11 text-paper">
      <div className="wrap flex flex-col justify-center">
        <p className="hud-label text-stone">404 · Signal lost</p>
        <h1 className="mt-3 leading-[1] tracking-[-0.02em] [font-size:clamp(3rem,10vw,9rem)]">
          <span style={{ fontVariationSettings: '"wdth" 66, "wght" 840' }}>Off the </span>
          <span style={{ fontVariationSettings: '"wdth" 122, "wght" 250' }}>trail.</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <Link href="/" className="link-arrow">
            Back to the start
          </Link>
          <Link href="/compare" className="link-arrow">
            Compare goggles
          </Link>
        </div>
      </div>
    </section>
  );
}
