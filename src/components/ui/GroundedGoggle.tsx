type Props = {
  world: "dirt" | "snow";
  alt: string;
  /** Size and position of the goggle */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Grounds the photo in each world with a contact shadow and a slight colour match */
const looks = {
  dirt: { shadow: "rgba(38, 10, 2, 0.72)", tint: "rgba(214, 92, 30, 0.5)", grade: "saturate(1.05)" },
  snow: { shadow: "rgba(38, 62, 96, 0.5)", tint: "rgba(120, 170, 225, 0.6)", grade: "saturate(0.72) brightness(1.05)" },
};

export default function GroundedGoggle({ world, alt, className = "", sizes = "100vw", priority = false }: Props) {
  const { shadow, tint, grade } = looks[world];

  return (
    <div className={`aspect-[2000/1325] ${className}`}>
      <div
        aria-hidden
        className="absolute -bottom-[11%] left-[3%] h-[30%] w-[96%]"
        style={{ background: `radial-gradient(closest-side, ${shadow}, transparent)` }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/goggles/goggle-2000.webp"
        srcSet="/images/goggles/goggle-1100.webp 1100w, /images/goggles/goggle-2000.webp 2000w"
        sizes={sizes}
        alt={alt}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        className="absolute inset-0 h-full w-full"
        style={{ filter: grade }}
      />
      {/* Colour of the surrounding world, kept inside the goggle's outline */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: tint,
          mixBlendMode: "soft-light",
          maskImage: "url(/images/goggles/goggle-1100.webp)",
          WebkitMaskImage: "url(/images/goggles/goggle-1100.webp)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}
