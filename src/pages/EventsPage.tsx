import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  Cpu,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { ASSETS } from "@/lib/site";
import "@/styles/tmf-premium-pages.css";

const EVENT_HIGHLIGHTS = [
  {
    icon: Sparkles,
    label: "Visionary Keynotes",
    body: "Global leaders at the intersection of technology and philanthropy.",
  },
  {
    icon: Cpu,
    label: "Innovation Labs",
    body: "Hands-on sprints across AI, quantum computing, and bio-engineering.",
  },
  {
    icon: Users,
    label: "Founder Networking",
    body: "Curated connections with investors, mentors, and rising talents.",
  },
] as const;

const ARCHIVED_EVENTS = [
  {
    numeral: "01",
    month: "May",
    title: "Global Sustainability Roundtable",
    location: "London, United Kingdom",
  },
  {
    numeral: "02",
    month: "Mar",
    title: "The Equity Forum 2027",
    location: "New York City, USA",
  },
  {
    numeral: "03",
    month: "Jan",
    title: "Winter Arts Gala",
    location: "Paris, France",
  },
] as const;

export default function EventsPage() {
  return (
    <main className="tmf-page-scope min-h-screen bg-slate-950 text-white">
      {/* ============================================================
          HERO — Cinematic dark lead over an aurora glass field
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div
          className="absolute inset-0 tmf-surface-grid opacity-20"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift left-[-8%] top-[-14%] h-[460px] w-[460px] bg-accent/40"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift right-[-6%] top-[10%] h-[380px] w-[380px] bg-violet-500/25"
          style={{ animationDelay: "-3s" }}
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift bottom-[-30%] left-[30%] h-[340px] w-[340px] bg-fuchsia-500/15"
          style={{ animationDelay: "-6s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-eyebrow font-semibold uppercase text-tmf-secondary">
              <span
                className="inline-block h-px w-10 bg-tmf-secondary/70"
                aria-hidden="true"
              />
              Upcoming Events
            </p>
            <h1 className="h1-display max-w-3xl text-white">
              Tech Spark{" "}
              <span className="tmf-text-gradient">Conference 2027</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 lg:text-lead-lg">
              Join global visionaries and rising talents for an immersive
              weekend of dialogue, innovation, and strategic networking in the
              heart of Zurich.
            </p>

            <span className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-small font-semibold uppercase tracking-[1.4px] text-mint backdrop-blur-md">
              <span
                className="tmf-pulse-soft inline-block h-2 w-2 rounded-full bg-mint"
                aria-hidden="true"
              />
              Registration Open
            </span>
          </Reveal>

          {/* ----------------------------------------------------------
              Featured event — image frame + overlapping sharp date block
             ---------------------------------------------------------- */}
          <Reveal delay={150}>
            <div className="group relative mt-16 pb-16 sm:pr-10 lg:mt-24">
              <figure className="tmf-image-frame min-h-[480px] bg-slate-900 lg:min-h-[560px]">
                <img
                  src={ASSETS.eventsHero}
                  alt="Attendees gathered at a TalentMakers event"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-hero-scrim"
                  aria-hidden="true"
                />

                <figcaption className="relative z-10 flex min-h-[480px] flex-col justify-end p-8 sm:p-12 lg:min-h-[560px] lg:p-16">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-small font-medium text-white backdrop-blur-md">
                      <Calendar
                        className="h-4 w-4 text-tmf-secondary"
                        aria-hidden="true"
                      />
                      Oct 12–14, 2027
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-small font-medium text-white backdrop-blur-md">
                      <MapPin
                        className="h-4 w-4 text-tmf-secondary"
                        aria-hidden="true"
                      />
                      Zurich, CH
                    </span>
                  </div>

                  <h2 className="mt-6 max-w-2xl font-display text-h2 font-semibold leading-snug text-white lg:text-h2-lg">
                    Shaping the Next Decade of Philanthropy
                  </h2>

                  <Link
                    to="/contact"
                    className="btn-solid tmf-link-arrow mt-9 inline-flex w-fit items-center gap-3  hover:bg-accent/90"
                  >
                    RSVP Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </figcaption>
              </figure>

              {/* Overlapping sharp block breaking the grid — Pattern #14 */}
              <div className="absolute bottom-0 right-0  bg-accent p-6 shadow-overlay sm:p-8">
                <p className="font-display text-stat font-semibold leading-none text-white">
                  72
                </p>
                <p className="mt-2 text-small font-semibold uppercase tracking-[1.4px] text-tmf-secondary">
                  Days To Go
                </p>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------------
              Highlights — dark glass panels
             ---------------------------------------------------------- */}
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {EVENT_HIGHLIGHTS.map((highlight, i) => (
              <Reveal key={highlight.label} delay={i * 130}>
                <article className="tmf-hover-lift h-full rounded-image border border-white/20 bg-white/[0.07] p-7 backdrop-blur-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-icon bg-white/10 text-tmf-secondary">
                    <highlight.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-h4 font-semibold text-white">
                    {highlight.label}
                  </h3>
                  <p className="mt-2 text-small leading-relaxed text-slate-300">
                    {highlight.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ARCHIVE — Editorial glass ledger on the tinted surface
         ============================================================ */}
      <section className="relative overflow-hidden bg-surface-light py-24 text-ink lg:py-32">
        <div
          className="tmf-orb tmf-aurora-drift right-[-10%] top-[-20%] h-[380px] w-[380px] bg-accent/15"
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="eyebrow mb-4 flex items-center gap-3 text-xs">
                <span
                  className="inline-block h-px w-10 bg-accent/60"
                  aria-hidden="true"
                />
                Archive
              </p>
              <h2 className="h2-display max-w-xl text-heading">
                Legacy of Impact.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm text-body-relaxed leading-relaxed text-body-muted">
                A record of the rooms we&rsquo;ve filled and the conversations
                that moved the mission forward.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="tmf-glass-panel rounded-image px-7 py-4 sm:px-12 sm:py-6">
              <ul className="divide-y divide-card-divider/30">
                {ARCHIVED_EVENTS.map((event) => (
                  <li key={event.numeral}>
                    <article className="group grid grid-cols-1 items-center gap-3 py-8 md:grid-cols-[auto_1fr_auto] md:gap-8">
                      <p
                        className="font-display text-timeline-year-mobile font-semibold leading-none text-tmf-text-muted transition-colors duration-300 group-hover:text-accent/50 select-none md:text-timeline-year"
                        aria-hidden="true"
                      >
                        {event.numeral}
                      </p>
                      <div>
                        <p className="text-small font-semibold uppercase tracking-[1.4px] text-accent">
                          {event.month} · Past Event
                        </p>
                        <h3 className="mt-1 font-display text-h3 font-semibold text-heading transition-colors duration-300 group-hover:text-accent lg:text-alumni-name-lg">
                          {event.title}
                        </h3>
                        <p className="mt-1.5 inline-flex items-center gap-1.5 text-small text-body-muted">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {event.location}
                        </p>
                      </div>
                      <span
                        className="hidden h-12 w-12 items-center justify-center rounded-full border border-preset-border text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white md:flex"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-14 text-center">
              <Link
                to="/archives"
                className="tmf-link-arrow inline-flex items-center gap-2 border-b border-heading pb-1 text-small font-semibold uppercase tracking-[1.4px] text-heading transition-colors hover:border-accent hover:text-accent"
              >
                Explore Full Archives
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
