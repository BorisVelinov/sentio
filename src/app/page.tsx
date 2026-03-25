import SplitHero from "@/components/SplitHero";
import BrandSplit from "@/components/BrandSplit";
import TechShowcase from "@/components/TechShowcase";
import StatsBar from "@/components/StatsBar";
import LifestyleCTA from "@/components/LifestyleCTA";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <SplitHero />
      <StatsBar />
      <BrandSplit />
      <TechShowcase />
      <LifestyleCTA />
      <FAQSection />
    </>
  );
}
