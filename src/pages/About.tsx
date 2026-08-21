import CinematicHero from "@/sections/about/CinematicHero";
import OurStory from "@/sections/about/OurStory";
import MissionVision from "@/sections/about/MissionVision";
import Milestones from "@/sections/about/Milestones";
import BoardTrustees from "@/sections/about/BoardTrustees";
import JoinMissionCTA from "@/sections/about/JoinMissionCTA";
import "@/styles/tmf-premium-pages.css";

export default function About() {
  return (
    <main className="tmf-page-scope">
      <CinematicHero />
      <OurStory />
      <MissionVision />
      <Milestones />
      <BoardTrustees />
      <JoinMissionCTA />
    </main>
  );
}
