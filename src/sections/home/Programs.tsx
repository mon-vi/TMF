import { Link } from "react-router-dom";
import { PROGRAMS } from "@/lib/site";

export default function Programs() {
  return (
    <section className="bg-panel py-16 lg:py-[120px]" data-node-id="173:7440">
      <div className="container-page">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow mb-3">Actionable Change</p>
            <h2 className="h2-display text-heading">
              Programs designed for impact.
            </h2>
          </div>
          <Link
            to="/programs"
            className="text-small font-sans font-semibold tracking-[0.7px] text-accent mt-4 lg:mt-0 lg:mb-1 hover:opacity-70 transition-opacity"
          >
            View All Programs &rarr;
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.title} className="flex flex-col">
              {/* Image placeholder — TODO(assets): export program card images from Figma */}
              <div className="w-full h-[315px] bg-ink/10" aria-hidden="true" />

              <h3 className="text-h2 font-display font-semibold text-heading pt-8 lg:pt-16">
                {program.title}
              </h3>

              <p
                className="text-body-relaxed text-body-muted mt-4 mb-8"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />

              <div className="w-12 h-px bg-card-divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
