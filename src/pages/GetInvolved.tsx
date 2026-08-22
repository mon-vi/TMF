import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Gift,
  GraduationCap,
  Heart,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { ASSETS } from "@/lib/site";
import "@/styles/tmf-premium-pages.css";

const PATHWAYS = [
  {
    numeral: "01",
    icon: Heart,
    title: "Volunteer with Us",
    body: "Lend your expertise to our talents.",
    cta: "Join Us",
    href: "/contact",
  },
  {
    numeral: "02",
    icon: GraduationCap,
    title: "Be a Friend of TMF",
    body: "Provide critical financial support to empower IT talents.",
    cta: "Donate Today",
    href: "/donate",
  },
  {
    numeral: "03",
    icon: Briefcase,
    title: "Partner with Us",
    body: "Institutional collaboration for systematic, long-term change.",
    cta: "Inquire",
    href: "/contact",
  },
  {
    numeral: "04",
    icon: Gift,
    title: "Become an Ambassador",
    body: "Become a face of TMF on the ground and lead the impact.",
    cta: "Apply Now",
    href: "/contact",
  },
] as const;

const CATALYST_STEPS = [
  {
    numeral: "01",
    kicker: "Impact",
    body: "Directly influence the trajectory of high-potential individuals.",
  },
  {
    numeral: "02",
    kicker: "Community",
    body: "Connect with a diverse network of leaders and change-makers across sectors.",
  },
  {
    numeral: "03",
    kicker: "Growth",
    body: "Expand your perspective through intercultural exchange and collaboration.",
  },
] as const;

export default function GetInvolved() {
  return (
    <main className="tmf-page-scope min-h-screen bg-panel text-ink">
      {/* ============================================================
          HERO — Split lead with framed imagery
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 tmf-mesh-surface" aria-hidden="true" />
        <div
          className="absolute inset-0 tmf-surface-grid opacity-25"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift left-[-8%] top-[-12%] h-[420px] w-[420px] bg-accent/20"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift right-[-6%] bottom-[-24%] h-[360px] w-[360px] bg-violet-300/35"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-5 flex items-center gap-3 text-xs">
                <span
                  className="inline-block h-px w-10 bg-accent/60"
                  aria-hidden="true"
                />
                Join the Mission
              </p>
              <h1 className="h1-display max-w-md text-heading">
                Be the <span className="tmf-text-gradient">Change.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-body-muted lg:text-lead-lg">
                Join a network of visionaries committed to identifying and
                nurturing IT talent.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-solid tmf-link-arrow inline-flex items-center gap-3  transition-colors hover:bg-accent/90"
                >
                  Get Involved
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/donate"
                  className="btn-outline  transition-colors hover:bg-accent/5"
                >
                  Donate Today
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative pb-14 pr-6 sm:pr-12">
                <figure className="tmf-image-frame aspect-[4/5] sm:aspect-[5/5] bg-white">
                  <img
                    src={ASSETS.getInvolvedHero}
                    alt="The TalentMakers community gathered together"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </figure>
                {/* Floating glass metric chip */}
                <div className="absolute bottom-0 left-0  border border-white/25 bg-white/15 p-5 shadow-overlay backdrop-blur-md sm:p-6">
                  <p className="font-display text-stat font-semibold leading-none text-heading">
                    120+
                  </p>
                  <p className="mt-2 text-small font-semibold uppercase tracking-[1.4px] text-accent">
                    Lives in Motion
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          PATHWAYS TO IMPACT — glass card grid
         ============================================================ */}
      <section className="relative py-16 lg:py-24">
        <div className="container-page relative">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3 text-xs">
                <span
                  className="inline-block h-px w-10 bg-accent/60"
                  aria-hidden="true"
                />
                How You Help
              </p>
              <h2 className="h2-display max-w-xl text-heading">
                Pathways to Impact.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm text-body-relaxed leading-relaxed text-body-muted">
                Four ways to stand with the next generation — pick the one that
                fits your superpower.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
            {PATHWAYS.map((pathway, i) => (
              <Reveal key={pathway.title} delay={(i % 2) * 130}>
                <article className="tmf-glass-panel group relative h-full overflow-hidden rounded-image p-8 sm:p-10">
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 font-display text-timeline-year font-semibold leading-none text-accent/5 select-none"
                    aria-hidden="true"
                  >
                    {pathway.numeral}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                    <pathway.icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-7 font-display text-h3 font-semibold text-heading transition-colors duration-300 group-hover:text-accent">
                    {pathway.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-body-relaxed leading-relaxed text-body-muted">
                    {pathway.body}
                  </p>

                  <div className="mt-8 border-t border-card-divider/30 pt-5">
                    <Link
                      to={pathway.href}
                      className="tmf-link-arrow inline-flex items-center gap-2 text-small font-semibold uppercase tracking-[1.4px] text-accent"
                    >
                      {pathway.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THE CATALYST EFFECT — overlapping quote + numbered ledger
         ============================================================ */}
      <section className="relative overflow-hidden bg-surface-light py-24 lg:py-32">
        <div
          className="tmf-orb tmf-aurora-drift right-[-10%] top-[-18%] h-[380px] w-[380px] bg-accent/15"
          aria-hidden="true"
        />

        <div className="container-page relative">
          <Reveal>
            <h2 className="h2-display max-w-xl text-heading">
              The Catalyst Effect.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="group relative pb-20 pr-6 sm:pr-12">
                <figure className="tmf-image-frame aspect-[4/5] sm:aspect-[5/5] bg-white">
                  <img
                    src={ASSETS.catalystEffect}
                    alt="Mentor guiding a scholar through their work"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </figure>
                {/* Overlapping sharp block breaking the grid — Pattern #14 */}
                <blockquote className="absolute bottom-0 left-0 max-w-xs  bg-accent p-7 shadow-overlay sm:max-w-sm sm:p-9">
                  <p className="font-display text-lg italic leading-snug text-white sm:text-xl">
                    &ldquo;Talent is universal, opportunity is not.&rdquo;
                  </p>
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <ol className="divide-y divide-card-divider/30">
                {CATALYST_STEPS.map((step) => (
                  <li
                    key={step.numeral}
                    className="group flex items-start gap-7 py-9 first:pt-0 last:pb-0"
                  >
                    <span
                      className="font-display text-timeline-year-mobile font-semibold leading-none text-tmf-text-muted transition-colors duration-300 group-hover:text-accent/50 select-none lg:text-timeline-year"
                      aria-hidden="true"
                    >
                      {step.numeral}
                    </span>
                    <div>
                      <h3 className="text-small font-semibold uppercase tracking-[1.4px] text-accent">
                        {step.kicker}
                      </h3>
                      <p className="mt-2 max-w-md text-body-relaxed leading-relaxed text-body-muted sm:text-lg">
                        {step.body}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="ml-auto mt-1 hidden h-5 w-5 shrink-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 md:block"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
