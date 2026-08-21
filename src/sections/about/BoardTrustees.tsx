import { Quote, Sparkles } from "lucide-react";
import { ASSETS, BOARD_MEMBER } from "@/lib/site";

export default function BoardTrustees() {
  return (
    <section
      className="tmf-mesh-surface relative overflow-hidden py-20 lg:py-32"
      data-node-id="208:3557"
    >
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl tmf-animate-pulse-soft" />
      <div className="container-page relative">
        <div className="mb-12 max-w-2xl tmf-animate-fade-in-up">
          <p className="eyebrow mb-4">The people behind the purpose</p>
          <h2 className="h2-display text-heading">
            Leadership with a long view.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            Our trustees keep the mission grounded in service, ambition, and
            measurable opportunity.
          </p>
        </div>

        <div className="tmf-glass-panel mx-auto grid max-w-5xl overflow-hidden rounded-[28px] p-3 lg:grid-cols-[0.9fr_1.1fr] lg:p-4">
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-slate-200 lg:min-h-[520px]">
            {ASSETS.boardPortrait ? (
              <img
                src={ASSETS.boardPortrait}
                alt={BOARD_MEMBER.name}
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            ) : (
              <div
                className="h-full w-full bg-gradient-to-br from-accent to-violet-300"
                aria-hidden="true"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 tmf-glass-chip px-4 py-3 text-white">
              <p className="text-xs font-bold uppercase tracking-[2px] text-white/70">
                Board of Trustees
              </p>
              <p className="mt-1 font-display text-lg">
                A legacy built together
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 lg:p-14">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-subtle text-accent">
              <Quote className="h-5 w-5" aria-hidden="true" />
            </div>
            <blockquote className="font-display text-3xl font-semibold leading-tight text-heading lg:text-4xl">
              “<span dangerouslySetInnerHTML={{ __html: BOARD_MEMBER.quote }} />
              ”
            </blockquote>
            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="font-display text-2xl font-semibold text-heading">
                {BOARD_MEMBER.name}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[2px] text-accent">
                {BOARD_MEMBER.role}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-body-muted">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
              Stewarding the next generation of African talent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
