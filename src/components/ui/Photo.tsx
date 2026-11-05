type PhotoProps = {
  /** Name in /images/goggles, or a path like "stock/snow-powder", without the width suffix */
  name: string;
  /** Available widths, small first */
  widths: [number, number];
  alt: string;
  className?: string;
  sizes?: string;
  /** Load straight away, for images at the top of a page */
  eager?: boolean;
};

/** Pre-optimised responsive photo: phones download the small file. */
export default function Photo({ name, widths, alt, className = "", sizes = "100vw", eager = false }: PhotoProps) {
  const [small, large] = widths;
  const base = `/images/${name.includes("/") ? name : `goggles/${name}`}`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}-${large}.webp`}
      srcSet={`${base}-${small}.webp ${small}w, ${base}-${large}.webp ${large}w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}
