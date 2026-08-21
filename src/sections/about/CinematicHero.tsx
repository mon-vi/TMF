import { ArrowDown, Sparkles } from "lucide-react";
import { ASSETS } from "@/lib/site";

export default function CinematicHero() {
  return (
    <section
      className="relative isolate min-h-[620px] overflow-hidden bg-ink lg:min-h-[760px]"
      data-node-id="208:3498"
    >
      {ASSETS.aboutHero ? (
        <img
          src={ASSETS.aboutHero}
          alt="Students learning together in a classroom"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-ink" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
      <div className="absolute -right-28 top-28 h-80 w-80 rounded-full bg-fuchsia-400/25 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl tmf-animate-float-slow" />

      <div className="container-page relative flex min-h-[620px] items-end py-20 lg:min-h-[760px] lg:py-28">
        <div className="max-w-3xl tmf-animate-fade-in-up">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-purple-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Est. 2023 · Our story
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Building a legacy of{" "}
            <span className="text-purple-200 italic">excellence.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            TalentMakers Foundation bridges opportunity gaps through strategic
            philanthropy, full-ride scholarships, and technology education for
            underserved communities.
          </p>
          <div className="tmf-glass-panel mt-10 flex max-w-xl items-center gap-4 p-4 text-white tmf-animate-fade-in-up delay-300">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-purple-100">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-white/85">
              We find high-potential talent, then make the path to leadership
              visible.
            </p>
          </div>
        </div>

        <a
          href="#our-story"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[2px] text-white/70 hover:text-white lg:flex"
        >
          Explore our story
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
