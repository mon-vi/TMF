import { Link } from "react-router-dom";
import { PROGRAMS } from "@/lib/site";
import { Check, ArrowRight } from "lucide-react";
import techSparkImg from "@/assets/tech-spark.png";
import tmfScholarshipImg from "@/assets/tmf-scholarship.jpg";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <div className="container-page py-12 lg:py-20 pt-32 lg:pt-40">
        {/* Top Header Section with Right Border Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 pb-12 border-b border-gray-200">
          <div>
            <span className="eyebrow mb-3 block text-accent font-semibold tracking-wider text-sm uppercase">
              OUR INITIATIVES
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-heading leading-tight">
              Our Impact Programs.
            </h1>
          </div>
          <div className="lg:border-l lg:border-gray-300 lg:pl-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Cultivating the next generation of Africa&rsquo;s talent through
              rigorous mentorship and strategic resource allocation.
            </p>
          </div>
        </div>

        {/* Program 1: TMF Scholarship (Content Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-28">
          <div className="space-y-6">
            <div className="pt-2 border-t border-accent/40">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent pt-6">
                {PROGRAMS[0].title}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {PROGRAMS[0].description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider block mb-2">
                ELIGIBILITY PILLARS
              </span>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Exceptional leadership potential
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Trans-disciplinary academic record
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  Commitment to social acceleration
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to={PROGRAMS[0].href}
                className="inline-flex items-center gap-2 bg-accent text-white font-medium px-8 py-3.5 rounded-md hover:bg-accent/90 transition-colors shadow-sm"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[3/4]">
            <img
              src={tmfScholarshipImg}
              alt={PROGRAMS[0].title}
              className="w-full h-full object-fill object-center"
            />
          </div>
        </div>

        {/* Program 2: Tech Spark (Image Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[16/10] order-2 lg:order-1">
            <img
              src={techSparkImg}
              alt={PROGRAMS[1].title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="pt-2 border-t border-accent/40">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent pt-6">
                {PROGRAMS[1].title}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {PROGRAMS[1].description}
            </p>

            <div className="space-y-4 pt-2">
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  01 / Skill Building
                </span>
                <p className="text-sm text-gray-700">
                  Advanced immersion in AI, Quantum Computing, and Sustainable
                  Bio-engineering.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  02 / Venture Forge
                </span>
                <p className="text-sm text-gray-700">
                  Converting breakthrough research into scalable, world-changing
                  ventures.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to={PROGRAMS[1].href}
                className="inline-flex items-center gap-2 border border-accent text-accent font-medium px-8 py-3.5 rounded-md hover:bg-accent/5 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote Banner */}
      <section className="bg-accent py-20 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl lg:text-4xl font-display font-medium leading-relaxed italic">
            &ldquo;The talent we cultivate today defines the global landscape of
            tomorrow.&rdquo;
          </blockquote>
        </div>
      </section>
    </main>
  );
}
