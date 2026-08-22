import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROGRAMS } from "@/lib/site";

export default function Programs() {
  return (
    <section
      className="relative overflow-hidden bg-panel py-20 lg:py-32"
      data-node-id="173:7440"
    >
      <div className="absolute inset-0 tmf-surface-grid opacity-40" />
      <div className="container-page relative">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl tmf-animate-fade-in-up">
            <p className="eyebrow mb-4 text-xs">Actionable change</p>
            <h2 className="h2-display text-heading">
              Programs designed for impact.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-body-muted">
              Practical pathways that turn curiosity into capability, and
              capability into leadership.
            </p>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3"
          >
            View all programs{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {PROGRAMS.map((program, index) => (
            <article
              key={program.title}
              className="tmf-glass-panel group rounded-[24px] p-3 tmf-hover-lift tmf-animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 120}ms` }}
            >
              <div className="relative h-[280px] overflow-hidden rounded-[18px] lg:h-[350px]">
                {program.image ? (
                  <img
                    src={program.image}
                    alt={`${program.title} program`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="h-full w-full bg-gradient-to-br from-slate-950 via-accent to-violet-300"
                    aria-hidden="true"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[1.6px] text-white backdrop-blur-md">
                  0{index + 1} · Pathway
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-display text-3xl font-semibold text-heading transition-colors group-hover:text-accent">
                  {program.title}
                </h3>
                <p
                  className="mt-4 text-base leading-relaxed text-body-muted"
                  dangerouslySetInnerHTML={{ __html: program.description }}
                />
                <div className="mt-7 border-t border-slate-200 pt-5">
                  <Link
                    to={program.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3"
                  >
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
