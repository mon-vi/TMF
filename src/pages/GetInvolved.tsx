import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Gift,
  HandHeart,
  Handshake,
  Megaphone,
} from "lucide-react";
import heroImg from "@/assets/tmf-scholarship.jpg";
import catalystImg from "@/assets/tech-spark-conf.jpg";

const PATHWAYS = [
  {
    icon: HandHeart,
    title: "Volunteer with Us",
    description: "Lend your expertise to our talents.",
    cta: "Join Us",
    href: "/contact",
  },
  {
    icon: Gift,
    title: "Be a Friend of TMF",
    description: "Provide critical financial support to empower IT talents.",
    cta: "Donate Today",
    href: "/donate",
  },
  {
    icon: Handshake,
    title: "Partner with Us",
    description:
      "Institutional collaboration for systematic, long-term change.",
    cta: "Inquire",
    href: "/contact",
  },
  {
    icon: Megaphone,
    title: "Become an Ambassador",
    description: "Become a face of TMF on the ground and lead the impact.",
    cta: "Apply Now",
    href: "/contact",
  },
] as const;

const CATALYST_STEPS = [
  {
    num: "01",
    label: "Impact",
    body: "Directly influence the trajectory of high-potential individuals.",
  },
  {
    num: "02",
    label: "Community",
    body: "Connect with a diverse network of leaders and change-makers across sectors.",
  },
  {
    num: "03",
    label: "Growth",
    body: "Expand your perspective through intercultural exchange and collaboration.",
  },
] as const;

export default function GetInvolved() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-tmf-page font-ui text-tmf-text-primary">
      {/* Hero */}
      <section className="pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-x-clip">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-6 animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-5">
              Join the Mission
            </p>
            <h1 className="font-display font-bold text-[40px] leading-[1.1] lg:text-[60px] lg:leading-[1.05] tracking-tight mb-6">
              Be the change.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-tmf-text-secondary max-w-lg mb-10">
              Join a network of visionaries committed to identifying and
              nurturing the next generation of African IT talent&mdash;your
              time, treasure, or platform can carry them further.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/contact"
                className="rounded-none inline-flex items-center gap-2 bg-tmf-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover"
              >
                Become a Volunteer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/donate"
                className="group inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
              >
                Donate Today
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative mb-8 lg:mb-0 lg:pl-6 animate-fade-in-up">
            {/* Offset structural slab — sharp layer behind rounded photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 bg-tmf-surface border border-tmf-line shadow-overlay"
            />
            <div className="relative rounded-image overflow-hidden shadow-overlay aspect-[16/11]">
              <img
                src={heroImg}
                alt="TMF community members collaborating at a program event"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating stat chip */}
            <div className="rounded-none absolute -top-5 -left-2 sm:-left-6 bg-tmf-surface border border-tmf-line px-6 py-4 shadow-overlay">
              <p className="font-display font-semibold text-[28px] leading-none text-tmf-primary">
                120+
              </p>
              <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary">
                Lives Impacted
=======
    <div
      className="bg-panel min-h-screen flex flex-col justify-between"
      data-node-id="get-involved-page"
    >
      <div>
        {/* SECTION 1: Be the Change (Hero) */}
        <section className="py-16 lg:py-[120px]">
          <div className="container-page max-w-3xl">
            <div className="mb-8">
              <p className="eyebrow text-accent mb-3 uppercase tracking-[0.7px]">
                JOIN THE MISSION
              </p>
            </div>
            <div className="mb-8 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://www.figma.com/api/mcp/asset/a0bd6469-5874-4139-a326-e4adeb2b390a"
                alt="Be the Change"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
            <div>
              <h1 className="h2-display text-heading mb-6 tracking-tight">
                Be the Change
              </h1>
              <p className="text-body-relaxed text-body-muted max-w-xl text-lg">
                Join a network of visionaries committed to identifying and
                nurturing IT talent.
>>>>>>> main
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways to Impact */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              Pathways to Impact
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight mb-5">
              Choose how you show up.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary">
              Four doors into the mission&mdash;each one moves a talented young
              person closer to the opportunities they have earned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {PATHWAYS.map((pathway) => (
              <article
                key={pathway.title}
                className="group relative flex flex-col bg-tmf-surface border border-tmf-line p-8 transition-all duration-300 hover:border-tmf-primary hover:-translate-y-1 hover:shadow-overlay"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                  <pathway.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-7 font-display font-semibold text-[24px] leading-snug transition-colors duration-300 group-hover:text-tmf-primary">
                  {pathway.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tmf-text-secondary">
                  {pathway.description}
                </p>

                <div className="mt-auto pt-8">
                  <Link
                    to={pathway.href}
                    className="inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
                  >
                    {pathway.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Catalyst Effect */}
      <section className="bg-tmf-surface border-y border-tmf-line py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              Why It Matters
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight mb-5">
              The Catalyst Effect.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary">
              When you plug into TMF, you do more than support a
              scholar&mdash;you set off a chain reaction that outlives all of
              us.
            </p>
          </div>

          {/* Image with overlapping sharp quote panel */}
          <div className="relative mb-16 lg:mb-20">
            <div className="relative rounded-image overflow-hidden shadow-overlay">
              <img
                src={catalystImg}
                alt="Mentors and scholars in dialogue during a TMF gathering"
                className="w-full aspect-[16/10] lg:aspect-[21/9] object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              />
            </div>
<<<<<<< HEAD
            <div className="rounded-none absolute -bottom-10 left-3 sm:left-10 w-[280px] max-w-[calc(100%-1.5rem)] sm:w-[320px] bg-tmf-primary p-7 shadow-overlay">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                Our Conviction
              </p>
              <p className="font-display italic text-xl leading-snug text-white">
                &ldquo;Talent is universal, opportunity is not.&rdquo;
              </p>
=======

            <div className="space-y-12">
              {/* Item 1 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Volunteer with Us
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Lend your expertise to our talents.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Join Us <span>→</span>
                </Link>
              </div>

              {/* Item 2 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Be a Friend of TMF
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Provide critical financial support to empower IT talents.
                </p>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Donate Today <span>→</span>
                </Link>
              </div>

              {/* Item 3 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Partners with Us
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Institutional collaboration for systematic, long-term change.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Inquire <span>→</span>
                </Link>
              </div>

              {/* Item 4 */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Become an Ambassador
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Become a face of TMF on the ground and lead the impact.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  Apply Now <span>→</span>
                </Link>
              </div>
>>>>>>> main
            </div>
          </div>

<<<<<<< HEAD
          {/* Numbered steps */}
          <div className="border-b border-tmf-line pt-6">
            {CATALYST_STEPS.map((step) => (
              <div
                key={step.num}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 lg:gap-x-12 border-t border-tmf-line py-8 lg:py-10"
              >
                <span
                  aria-hidden="true"
                  className="select-none font-display leading-none text-[48px] lg:text-[72px] text-tmf-text-muted transition-colors duration-300 group-hover:text-tmf-secondary"
                >
                  {step.num}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-accent mb-2">
                    {step.label}
                  </p>
                  <p className="text-lg lg:text-xl leading-relaxed text-tmf-text-secondary max-w-xl transition-colors duration-300 group-hover:text-tmf-text-primary">
                    {step.body}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden md:block h-6 w-6 text-tmf-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tmf-primary"
                  aria-hidden="true"
                />
              </div>
            ))}
=======
        {/* SECTION 3: The Catalyst Effect */}
        <section className="py-16 lg:py-[120px] bg-panel border-t border-card-divider">
          <div className="container-page max-w-3xl">
            <div className="mb-12">
              <h2 className="h2-display text-heading tracking-tight">
                The Catalyst Effect
              </h2>
            </div>

            {/* Image card with overlapping accent quote box */}
            <div className="relative mb-20">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="The Catalyst Effect"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 left-6 sm:left-10 bg-accent text-white p-8 rounded-xl shadow-xl max-w-xs sm:max-w-sm">
                <p className="font-display italic text-lg sm:text-xl leading-snug">
                  "Talent is universal, opportunity is not."
                </p>
              </div>
            </div>

            {/* Numbered Steps */}
            <div className="space-y-12 pt-6">
              <div className="flex items-start gap-6">
                <span className="text-5xl lg:text-6xl font-display font-light text-body-muted/40 tracking-tighter">
                  01
                </span>
                <div>
                  <h3 className="text-sm font-sans font-semibold tracking-widest text-accent uppercase mb-2">
                    IMPACT
                  </h3>
                  <p className="text-body-relaxed text-body-muted text-base sm:text-lg">
                    Directly influence the trajectory of high-potential
                    individuals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-5xl lg:text-6xl font-display font-light text-body-muted/40 tracking-tighter">
                  02
                </span>
                <div>
                  <h3 className="text-sm font-sans font-semibold tracking-widest text-accent uppercase mb-2">
                    COMMUNITY
                  </h3>
                  <p className="text-body-relaxed text-body-muted text-base sm:text-lg">
                    Connect with a diverse network of leaders and change-makers
                    across sectors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <span className="text-5xl lg:text-6xl font-display font-light text-body-muted/40 tracking-tighter">
                  03
                </span>
                <div>
                  <h3 className="text-sm font-sans font-semibold tracking-widest text-accent uppercase mb-2">
                    GROWTH
                  </h3>
                  <p className="text-body-relaxed text-body-muted text-base sm:text-lg">
                    Expand your perspective through intercultural exchange and
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
>>>>>>> main
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-tmf-primary py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-4">
              Join Us
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[48px] lg:leading-[1.2] tracking-tight text-white mb-6">
              Your contribution of time creates opportunity too.
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-10">
              Volunteer hours, donor generosity, institutional partnerships,
              ambassador voices&mdash;every pathway feeds the same pipeline of
              African talent rising to lead.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-invert-solid inline-flex items-center gap-2"
              >
                Become a Volunteer
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/donate" className="btn-invert-outline inline-flex items-center">
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
