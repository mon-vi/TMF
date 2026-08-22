import { Link } from "react-router-dom";
import { PROGRAMS, METRICS, ASSETS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  Check,
  ArrowRight,
  GraduationCap,
  Cpu,
  Sparkles,
  Users,
  BookOpen,
} from "lucide-react";
import "@/styles/tmf-premium-pages.css";

const ELIGIBILITY_PILLARS = [
  "Exceptional leadership potential",
  "Trans-disciplinary academic record",
  "Commitment to social acceleration",
] as const;

const TECH_SPARK_TRACKS = [
  {
    numeral: "01",
    label: "Skill Building",
    body: "Advanced immersion in AI, Quantum Computing, and Sustainable Bio-engineering.",
    icon: Sparkles,
  },
  {
    numeral: "02",
    label: "Venture Forge",
    body: "Converting breakthrough research into scalable, world-changing ventures.",
    icon: Cpu,
  },
] as const;

const PROGRAM_IMAGES = [ASSETS.scholarship, ASSETS.techSpark];

const METRIC_ICONS = [Users, BookOpen, GraduationCap];

export default function ProgramsPage() {
  return (
    <main className="tmf-page-scope min-h-screen bg-panel text-ink">
      {/* ============================================================
          HERO — Split-content lead over an aurora glass field
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 tmf-mesh-surface" aria-hidden="true" />
        <div
          className="absolute inset-0 tmf-surface-grid opacity-30"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift left-[-8%] top-[-12%] h-[420px] w-[420px] bg-accent/25"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift right-[-6%] top-[18%] h-[360px] w-[360px] bg-violet-300/40"
          style={{ animationDelay: "-3s" }}
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift left-[38%] bottom-[-24%] h-[300px] w-[300px] bg-fuchsia-200/40"
          style={{ animationDelay: "-6s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow mb-5 flex items-center gap-3 text-xs">
                <span
                  className="inline-block h-px w-10 bg-accent/60"
                  aria-hidden="true"
                />
                Our Initiatives
              </p>
              <h1 className="h1-display max-w-xl text-heading">
                Our Impact <span className="tmf-text-gradient">Programs.</span>
              </h1>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-5">
              <div className="tmf-glass-chip rounded-image p-7">
                <p className="text-lg leading-relaxed text-body-muted">
                  Cultivating the next generation of Africa&rsquo;s talent
                  through rigorous mentorship and strategic resource allocation.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Floating glass metric chips */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-6">
            {METRICS.map((metric, i) => {
              const MetricIcon = METRIC_ICONS[i % METRIC_ICONS.length];
              return (
                <Reveal key={metric.label} delay={i * 130}>
                  <div className="tmf-glass-panel flex items-center gap-5 rounded-image px-7 py-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                      <MetricIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-stat font-semibold leading-none text-heading">
                        {metric.number}
                      </p>
                      <p className="metric-caption mt-2">{metric.caption}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROGRAM 01 — TMF Scholarships (content left, image right)
         ============================================================ */}
      <section className="relative py-16 lg:py-24">
        <div className="container-page relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <article>
                <p
                  className="font-display text-timeline-year font-semibold leading-none text-tmf-text-muted select-none"
                  aria-hidden="true"
                >
                  01
                </p>

                <div className="mt-6 border-t border-accent/30 pt-8">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-h2 font-semibold text-accent lg:text-h2-lg">
                    {PROGRAMS[0].title}
                  </h2>
                </div>

                <p className="mt-6 max-w-lg text-body-relaxed leading-relaxed text-body-muted">
                  {PROGRAMS[0].description}
                </p>

                <div className="mt-9">
                  <p className="eyebrow mb-5 text-xs">Eligibility Pillars</p>
                  <ul className="space-y-4">
                    {ELIGIBILITY_PILLARS.map((pillar) => (
                      <li key={pillar} className="flex items-center gap-4">
                        <span className="tmf-check-pop flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="text-body font-medium text-prose">
                          {pillar}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={PROGRAMS[0].href}
                  className="btn-solid tmf-link-arrow mt-11 inline-flex items-center gap-3  hover:bg-accent/90"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>

            <Reveal delay={180}>
              <div className="group relative pb-16 pr-4 sm:pr-10">
                <figure className="tmf-image-frame aspect-[4/5] bg-white">
                  <img
                    src={PROGRAM_IMAGES[0]}
                    alt={`${PROGRAMS[0].title} scholars collaborating on campus`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </figure>
                {/* Overlapping sharp block breaking the grid — Pattern #14 */}
                <div className="absolute bottom-0 left-0  bg-accent p-6 shadow-overlay sm:p-8">
                  <p className="font-display text-stat font-semibold leading-none text-white">
                    100%
                  </p>
                  <p className="mt-2 text-small font-semibold uppercase tracking-[1.4px] text-tmf-secondary">
                    Tuition Covered
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROGRAM 02 — Tech Spark (image left, content right)
         ============================================================ */}
      <section className="relative py-16 lg:py-24">
        <div className="container-page relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="group relative pb-16 pl-4 sm:pl-10">
                <figure className="tmf-image-frame aspect-[5/4] bg-white">
                  <img
                    src={PROGRAM_IMAGES[1]}
                    alt={`${PROGRAMS[1].title} engineering lab session`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </figure>
                <div className="absolute bottom-0 right-0  bg-accent p-6 shadow-overlay sm:p-8">
                  <p className="font-display text-stat font-semibold leading-none text-white">
                    50+
                  </p>
                  <p className="mt-2 text-small font-semibold uppercase tracking-[1.4px] text-tmf-secondary">
                    Schools Reached
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="order-1 lg:order-2">
              <article>
                <p
                  className="font-display text-timeline-year font-semibold leading-none text-tmf-text-muted select-none"
                  aria-hidden="true"
                >
                  02
                </p>

                <div className="mt-6 border-t border-accent/30 pt-8">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                    <Cpu className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-h2 font-semibold text-accent lg:text-h2-lg">
                    {PROGRAMS[1].title}
                  </h2>
                </div>

                <p className="mt-6 max-w-lg text-body-relaxed leading-relaxed text-body-muted">
                  {PROGRAMS[1].description}
                </p>

                <div className="mt-9 space-y-4">
                  <p className="eyebrow mb-5 text-xs">Program Tracks</p>
                  {TECH_SPARK_TRACKS.map((track) => (
                    <div
                      key={track.numeral}
                      className="tmf-glass-panel group/track flex gap-5 rounded-image p-6"
                    >
                      <span
                        className="font-display text-3xl font-semibold leading-none text-tmf-text-muted"
                        aria-hidden="true"
                      >
                        {track.numeral}
                      </span>
                      <div>
                        <h3 className="text-small font-semibold uppercase tracking-[1.4px] text-accent">
                          {track.label}
                        </h3>
                        <p className="mt-2 text-small leading-relaxed text-prose">
                          {track.body}
                        </p>
                      </div>
                      <track.icon
                        className="ml-auto h-5 w-5 shrink-0 text-accent/40 transition-colors group-hover/track:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  to={PROGRAMS[1].href}
                  className="btn-outline tmf-link-arrow mt-11 inline-flex items-center gap-3 "
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING QUOTE BANNER — glass card on deep brand purple
         ============================================================ */}
      <section className="relative overflow-hidden bg-accent py-24 lg:py-32">
        <div
          className="tmf-orb tmf-aurora-drift left-[10%] top-[-30%] h-[380px] w-[380px] bg-white/10"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift bottom-[-40%] right-[5%] h-[420px] w-[420px] bg-tmf-secondary/25"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <Reveal>
            <figure className="mx-auto max-w-4xl  border border-white/25 bg-white/10 px-8 py-12 text-center shadow-overlay backdrop-blur-md sm:px-14 lg:py-16">
              <span
                className="mb-8 block font-display text-6xl leading-none text-tmf-secondary"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-h2 font-medium italic leading-snug text-white lg:text-h3-lg">
                The talent we cultivate today defines the global landscape of
                tomorrow.
              </blockquote>
              <figcaption className="sr-only">
                TalentMakers Foundation guiding principle
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
