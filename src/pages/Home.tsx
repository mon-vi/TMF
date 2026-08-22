import Hero from "@/sections/home/Hero";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import ImpactMetrics from "@/sections/home/ImpactMetrics";
import StorySpine from "@/components/StorySpine";
import Programs from "@/sections/home/Programs";
import AlumniSpotlight from "@/sections/home/AlumniSpotlight";
import FinalCTA from "@/sections/home/FinalCTA";
import "@/styles/tmf-premium-pages.css";

export default function Home() {
  return (
    <main className="tmf-page-scope relative">
      <StorySpine />
      <Hero />
      <MarqueeRibbon />
      <ImpactMetrics />
      <Programs />
      <AlumniSpotlight />
      <FinalCTA />
    </main>
  );
}
