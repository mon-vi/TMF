import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ASSETS } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-panel pt-24 lg:pt-32"
      data-node-id="173:7430"
    >
      <div className="absolute inset-0 -z-10 tmf-surface-grid opacity-60" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -right-24 top-8 -z-10 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl tmf-animate-float-slow" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
          <div className="relative z-10 lg:col-span-6">
            <div className="tmf-animate-fade-in-up">
              <span className="tmf-glass-chip mb-6 inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-[2.8px] text-accent">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Invest in the future
              </span>
              <h1 className="h1-display max-w-3xl text-heading">
                Empowering{" "}
                <span className="tmf-text-gradient italic">future</span>{" "}
                leaders.
              </h1>
              <p className="lead mt-7 max-w-xl text-body-muted">
                Bridging opportunity gaps through strategic philanthropy,
                full-ride scholarships, and technology education for underserved
                communities.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/programs" className="btn-solid group">
                  Explore our programs
                  <ArrowUpRight
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link to="/get-involved" className="btn-outline">
                  Get involved
                </Link>
              </div>
            </div>

            <div className="tmf-glass-panel mt-12 flex max-w-md items-center gap-4 p-4 tmf-animate-fade-in-up delay-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold text-heading">
                  120+ lives in motion
                </p>
                <p className="mt-1 text-sm text-body-muted">
                  A growing community of bold, future-ready leaders.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="absolute -right-5 -top-5 z-10 hidden h-24 w-24 rounded-full border border-white/70 bg-white/35 backdrop-blur-md lg:block tmf-animate-float-slow" />
            <div className="absolute -bottom-6 -left-6 z-10 hidden h-32 w-32 rounded-full bg-accent/20 blur-2xl lg:block tmf-animate-pulse-soft" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/50 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-xl tmf-animate-fade-in-up delay-150">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src={ASSETS.homeHero}
                  alt="TalentMakers Foundation community"
                  className="h-[440px] w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-[610px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 tmf-glass-chip p-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
                    TalentMakers Foundation
                  </p>
                  <p className="mt-1 font-display text-xl">
                    Talent is universal. Opportunity should be too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-slate-200/70 py-6 sm:grid-cols-4">
          {[
            ["50+", "Schools reached"],
            ["10+", "Active scholars"],
            ["2023", "Founded"],
            ["01", "Shared mission"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className="tmf-animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 450}ms` }}
            >
              <p className="font-display text-2xl font-semibold text-heading lg:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[1.4px] text-body-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
