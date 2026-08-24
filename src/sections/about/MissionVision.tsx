import { Eye, Target } from "lucide-react";
import { MISSION_VISION } from "@/lib/site";

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden border-y border-slate-200/70 bg-panel py-20 lg:py-32"
      data-node-id="208:3473"
    >
      <div className="absolute inset-0 tmf-surface-grid opacity-40" />
      <div className="container-page relative">
        <div className="mb-12 max-w-2xl tmf-animate-fade-in-up">
          <p className="eyebrow mb-4 text-xs">What guides us</p>
          <h2 className="h2-display text-heading">Purpose, made practical.</h2>
          <p className="mt-5 text-lg leading-relaxed text-body-muted">
            The belief system behind every scholarship, partnership, and
            opportunity we create.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {MISSION_VISION.map((item, index) => {
            const isTarget = item.icon === "target";
            return (
              <article
                key={item.title}
                className="tmf-glass-panel group rounded-[24px] p-7 tmf-hover-lift lg:p-10 tmf-animate-fade-in-up"
                style={{ animationDelay: `${index * 150 + 120}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-tmf-icon-wash text-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {isTarget ? (
                      <Target className="h-7 w-7 stroke-[1.8]" />
                    ) : (
                      <Eye className="h-7 w-7 stroke-[1.8]" />
                    )}
                  </div>
                  <span className="font-display text-6xl font-semibold text-accent/10">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-3xl font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-body-muted lg:text-lg">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
