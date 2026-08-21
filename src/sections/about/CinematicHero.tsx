import { ASSETS } from "@/lib/site";
import { ChevronDown } from "lucide-react";

export default function CinematicHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[560px] lg:min-h-[85vh] flex items-end bg-ink"
      data-node-id="208:3498"
    >
      {/* Background image */}
      {ASSETS.aboutHero && (
        <img
          src={ASSETS.aboutHero}
          alt="TalentMakers Foundation mission"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}

      {/* Scrim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 lg:pb-24 pt-32">
        <div className="container-page max-w-4xl">
          <p className="text-xs font-sans font-bold uppercase tracking-[4px] text-mint mb-4 inline-block px-3 py-1 bg-white/10 backdrop-blur-sm">
            Est. 2023
          </p>
          <h1 className="font-display text-white mb-6">
            <span className="text-4xl lg:text-7xl font-bold block leading-[1.1]">
              Building a Legacy of
            </span>
            <span className="text-4xl lg:text-7xl font-normal italic block text-purple-200 leading-[1.1]">
              Excellence.
            </span>
          </h1>
          <p className="text-base lg:text-xl text-white/90 max-w-2xl leading-relaxed">
            TalentMakers Foundation bridges opportunity gaps through strategic
            philanthropy, full-ride scholarships, and technology education for
            underserved communities.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 text-white/70 hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest animate-bounce">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
