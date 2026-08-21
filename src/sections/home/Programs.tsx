import { Link } from "react-router-dom";
import { PROGRAMS, ASSETS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  return (
    <section className="bg-panel py-20 lg:py-[120px]" data-node-id="173:7440">
      <div className="container-page">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="eyebrow mb-3 text-xs">Actionable Change</p>
            <h2 className="h2-display text-heading">
              Programs designed for impact.
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold tracking-[0.7px] text-accent mt-4 lg:mt-0 hover:gap-3 transition-all"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="flex flex-col bg-white p-6 lg:p-8 rounded-none border border-card-divider shadow-sm hover:border-accent transition-colors group"
            >
              {/* Image container with rounded-2xl imagery */}
              <div className="w-full h-[280px] lg:h-[340px] rounded-2xl overflow-hidden shadow-inner bg-panel relative">
                <img
                  src={program.image || ASSETS.defaultProgram}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-heading group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>

                  <p
                    className="text-body text-body-muted mt-3 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  />
                </div>

                <div className="pt-4 border-t border-card-divider flex items-center justify-between">
                  <Link
                    to={program.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



