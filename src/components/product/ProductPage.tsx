import Photo from "@/components/ui/Photo";
import type { Product } from "@/data/products";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Engineering", href: "#engineering" },
  { label: "Fit", href: "#fit" },
  { label: "Specs", href: "#specs" },
];

export default function ProductPage({ product: p }: { product: Product }) {
  const moto = p.slug === "moto";
  // Moto is dark, heavy and condensed. Snow is bright, light and wide.
  const page = moto ? "bg-graphite text-paper" : "bg-paper text-graphite";
  const alt = moto ? "bg-coal text-paper" : "bg-[#E4E8EA] text-graphite";
  const muted = moto ? "text-stone" : "text-ash";
  const accent = moto ? "text-amber" : "text-ice-deep";
  const solid = moto ? "bg-amber text-graphite" : "bg-graphite text-paper";
  const display = moto ? '"wdth" 70, "wght" 780' : '"wdth" 118, "wght" 280';
  const heroTone = moto ? "text-paper" : "text-graphite";

  return (
    <div className={page}>
      <section className={`relative h-svh overflow-hidden pt-11 ${heroTone}`}>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={`/images/worlds/${p.world}-soft.webp`}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src="/images/goggles/goggle-2000.webp"
          srcSet="/images/goggles/goggle-1100.webp 1100w, /images/goggles/goggle-2000.webp 2000w"
          sizes="(max-width: 767px) 100vw, 50vw"
          alt={`${p.name} goggle`}
          fetchPriority="high"
          className="absolute left-1/2 top-[56%] w-[min(104vw,62svh)] max-w-none -translate-x-1/2 -translate-y-1/2 md:top-[64%] md:w-[min(44vw,72svh)]"
        />
        {/* eslint-enable @next/next/no-img-element */}
        <div className="wrap relative pt-[5svh] md:pt-[6svh]">
          <p className="hud-label">
            {p.name} · {p.discipline}
          </p>
          <h1
            className="mt-2 leading-[0.96] tracking-[-0.015em] [font-size:min(15.5vw,11svh)] md:[font-size:min(8vw,12.5svh)]"
            style={{ fontVariationSettings: display }}
          >
            {p.headline}
          </h1>
        </div>
        <div className="wrap absolute inset-x-0 bottom-0 flex items-end justify-between pb-[max(1.25rem,env(safe-area-inset-bottom))] md:pb-8">
          <p className="text-2xl tracking-tight">{p.price}</p>
          <a href="#updates" className={`btn ${solid}`}>
            Pre-order
          </a>
        </div>
      </section>

      <nav
        aria-label={`${p.name} sections`}
        className={`no-scrollbar sticky top-11 z-40 overflow-x-auto border-b ${moto ? "border-paper/15 bg-graphite" : "border-graphite/15 bg-paper"}`}
      >
        <div className="wrap flex h-11 items-center justify-between gap-6">
          <div className="flex gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap py-2 text-[0.8125rem] transition-opacity hover:opacity-60">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#updates" className={`hidden whitespace-nowrap text-[0.8125rem] font-medium md:block ${accent}`}>
            Pre-order {p.price}
          </a>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-24">
        <div className="wrap band">
          <p className="statement reveal max-w-4xl">{p.intro}</p>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4">
            {p.stats.map((s) => (
              <div key={s.label} className="reveal rule pt-4">
                <dd
                  className="text-[clamp(2.25rem,4.6vw,4.25rem)] leading-none tracking-[-0.02em]"
                  style={{ fontVariationSettings: display }}
                >
                  {s.value}
                </dd>
                <dt className={`hud-label mt-3 ${muted}`}>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="features" className={`scroll-mt-24 ${alt}`}>
        <div className="wrap band">
          <h2 className="statement reveal max-w-2xl">Everything on your lens.</h2>
          <ul className="mt-12 grid gap-y-8 md:mt-20 md:grid-cols-4 md:gap-x-8">
            {p.features.map((f) => (
              <li key={f.title} className="reveal rule pt-4">
                <h3 className="text-xl tracking-tight">{f.title}</h3>
                <p className={`body-copy mt-2 ${muted}`}>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative h-[80svh] overflow-hidden bg-graphite md:h-[100svh]">
        <Photo name={p.feature.photo} widths={p.feature.widths} alt={p.feature.alt} />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, rgba(14,15,17,0.75), transparent)" }}
        />
        <div className="wrap absolute inset-x-0 bottom-0 pb-8 text-paper md:pb-12">
          <p className="statement reveal max-w-3xl">{p.feature.line}</p>
          <p className="hud-label mt-3 text-paper/80">{p.feature.note}</p>
        </div>
      </section>

      <section id="engineering" className="scroll-mt-24">
        <div className="wrap band">
          <h2 className="statement reveal max-w-3xl">{p.engineeringTitle}</h2>
          <ul className="mt-12 md:mt-20">
            {p.engineering.map((e) => (
              <li key={e.title} className="reveal rule grid gap-y-3 py-7 md:grid-cols-12 md:gap-x-8 md:py-10">
                <p
                  className={`text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.02em] md:col-span-4 ${accent}`}
                  style={{ fontVariationSettings: display }}
                >
                  {e.mark}
                </p>
                <div className="md:col-span-8 md:col-start-6">
                  <h3 className="text-xl tracking-tight md:text-2xl">{e.title}</h3>
                  <p className={`body-copy mt-1 max-w-xl ${muted}`}>{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="fit" className={`scroll-mt-24 ${alt}`}>
        <div className="wrap band">
          <h2 className="statement reveal max-w-2xl">{p.fitTitle}</h2>
          <ul className="mt-12 grid gap-y-8 md:mt-20 md:grid-cols-3 md:gap-x-8">
            {p.fit.map((f) => (
              <li key={f.title} className="reveal rule pt-4">
                <h3 className="text-xl tracking-tight md:text-2xl">{f.title}</h3>
                <p className={`body-copy mt-2 max-w-sm ${muted}`}>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="specs" className="scroll-mt-24">
        <div className="wrap band">
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-8">
            <h2 className="statement reveal md:col-span-4">Tech specs</h2>
            <dl className="md:col-span-8">
              {p.specs.map((s) => (
                <div key={s.label} className="rule grid grid-cols-[42%_1fr] gap-4 py-3 md:grid-cols-[36%_1fr]">
                  <dt className={`text-[0.9375rem] ${muted}`}>{s.label}</dt>
                  <dd className="text-[0.9375rem]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={alt}>
        <div className="wrap band flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="leading-none tracking-[-0.015em] [font-size:clamp(3rem,9vw,8rem)]" style={{ fontVariationSettings: display }}>
              {p.name}
            </h2>
            <p className={`body-copy mt-3 ${muted}`}>
              {p.price} pre-order · Free shipping · 30-day returns · 2-year warranty
            </p>
          </div>
          <a href="#updates" className={`btn w-full shrink-0 md:w-auto ${solid}`}>
            Pre-order {p.name}
          </a>
        </div>
      </section>
    </div>
  );
}
