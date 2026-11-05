import TerrainHero from "@/components/hero/TerrainHero";
import {
  Editions,
  FullBleed,
  Intro,
  Questions,
  Reviews,
  Safety,
  Systems,
  Technology,
} from "@/components/home/HomeSections";

export default function Home() {
  return (
    <>
      <TerrainHero />
      <Intro />
      <FullBleed />
      <Technology />
      <Systems />
      <Safety />
      <Editions />
      <Reviews />
      <Questions />
    </>
  );
}
