import Hero from "@/sections/home/Hero";
import ImpactMetrics from "@/sections/home/ImpactMetrics";
import Programs from "@/sections/home/Programs";
import AlumniSpotlight from "@/sections/home/AlumniSpotlight";
import FinalCTA from "@/sections/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <Programs />
      <AlumniSpotlight />
      <FinalCTA />
    </main>
  );
}
