import Link from "next/link";
import T from "@/components/ui/T";

export default function NotFound() {
  return (
    <section className="grid min-h-svh grid-rows-[1fr_auto] bg-graphite pt-11 text-paper">
      <div className="wrap flex flex-col justify-center">
        <p className="hud-label text-stone"><T>404 · Signal lost</T></p>
        <h1 className="mt-3 leading-[1] tracking-[-0.02em] [font-size:clamp(3rem,10vw,9rem)]">
          <span style={{ fontVariationSettings: '"wdth" 66, "wght" 840' }}><T>Off the</T> </span>
          <span style={{ fontVariationSettings: '"wdth" 122, "wght" 250' }}><T>trail.</T></span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <Link href="/" className="link-arrow"><T>Back to the start</T></Link>
          <Link href="/compare" className="link-arrow"><T>Compare goggles</T></Link>
        </div>
      </div>
    </section>
  );
}
