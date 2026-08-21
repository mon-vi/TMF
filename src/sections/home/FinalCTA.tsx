import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-panel py-20 lg:py-32"
      data-node-id="173:7482"
    >
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-300/30 blur-3xl tmf-animate-pulse-soft" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl tmf-animate-float-slow" />
      <div className="container-page relative">
        <div className="tmf-mesh-surface tmf-glass-panel mx-auto max-w-5xl rounded-[28px] p-8 text-center sm:p-12 lg:p-20 tmf-animate-fade-in-up">
          <p className="eyebrow mt-6 text-xs">Join us today</p>
          <h2 className="h2-display mx-auto mt-4 max-w-2xl text-heading">
            Ready to make a lasting impact?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body-muted">
            Your donation fuels scholarships, mentorships, and technology for
            those who will define tomorrow.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/donate" className="btn-solid group">
              Invest in the future{" "}
              <ArrowUpRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </Link>
            <Link to="/get-involved" className="btn-outline">
              Get involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
