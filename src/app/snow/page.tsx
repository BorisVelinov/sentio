import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { snow } from "@/data/products";

export const metadata: Metadata = {
  title: "Sentio Snow | Smart HUD goggles for ski and snowboard",
  description: snow.intro,
};

export default function SnowPage() {
  return <ProductPage product={snow} />;
}
