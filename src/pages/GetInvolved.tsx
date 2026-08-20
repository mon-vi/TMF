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
            <div className="rounded-none absolute -bottom-10 left-3 sm:left-10 w-[280px] max-w-[calc(100%-1.5rem)] sm:w-[320px] bg-tmf-primary p-7 shadow-overlay">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                Our Conviction
              </p>
              <p className="font-display italic text-xl leading-snug text-white">
                &ldquo;Talent is universal, opportunity is not.&rdquo;
              </p>
            </div>
          </div>

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
