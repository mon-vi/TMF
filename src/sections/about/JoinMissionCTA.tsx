import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinMissionCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-accent py-20 text-white lg:py-32"
      data-node-id="208:3487"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-accent to-fuchsia-700/45" />
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-fuchsia-300/25 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl tmf-animate-float-slow" />
      <div className="container-page relative mx-auto max-w-4xl text-center">
        <div className="tmf-glass-chip mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[2.8px] text-white">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Shape the future
        </div>
        <h2 className="h2-display text-white">Join the mission.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 lg:text-xl">
          Your contribution helps us identify and nurture the next generation of
          world-class leaders. Become a part of the legacy.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/donate" className="btn-invert-solid group">
            Donate now{" "}
            <ArrowUpRight
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </Link>
          <Link to="/get-involved" className="btn-invert-outline">
            Get involved
          </Link>
        </div>
      </div>
    </section>
  );
}
