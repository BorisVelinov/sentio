"use client";

import { useCart } from "@/components/CartContext";
import { useLanguage } from "@/components/LanguageContext";

type Props = {
  id: string;
  name: string;
  edition: string;
  price: number;
  label?: string;
  /** Shown after the translated label, such as a price */
  suffix?: string;
  className?: string;
};

export default function AddToCart({ id, name, edition, price, label = "Pre-order", suffix = "", className = "" }: Props) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => addToCart({ id, name, edition, price, image: "/images/goggles/goggle-1100.webp" })}
      className={`btn ${className}`}
    >
      {t(label)}
      {suffix && ` ${suffix}`}
    </button>
  );
}
