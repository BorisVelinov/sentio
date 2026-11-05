import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { moto } from "@/data/products";

export const metadata: Metadata = {
  title: "Sentio Moto | Smart HUD goggles for motocross and enduro",
  description: moto.intro,
};

export default function MotoPage() {
  return <ProductPage product={moto} />;
}
