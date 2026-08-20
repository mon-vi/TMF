import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Globe,
  HeartHandshake,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import heroImg from "@/assets/tech-spark-conf.jpg";
import featuredImg from "@/assets/tech-spark-conf-new.jpg";

const UPCOMING_EVENTS = [
  {
    day: "06",
    month: "Dec",
    year: "2026",
    title: "Annual Impact Gala",
    description:
      "A black-tie evening celebrating our scholars and the partners who back them.",
    location: "Lagos, Nigeria",
    format: "Black-tie fundraiser",
    icon: "sparkles" as const,
  },
  {
    day: "20",
    month: "Feb",
    year: "2027",
    title: "Mentorship Open Day",
    description:
      "Meet our mentors, tour the Tech Spark lab, and preview the scholar experience.",
    location: "Nairobi, Kenya",
    format: "In-person · Free entry",
    icon: "heart" as const,
  },
  {
    day: "17",
    month: "Apr",
    year: "2027",
    title: "Future Leaders Summit",
    description:
      "Two days of keynotes and workshops with alumni leading across three continents.",
    location: "Accra, Ghana",
    format: "Two-day summit",
    icon: "rocket" as const,
  },
] as const;

const ARCHIVE = [
  {
    num: "01",
    title: "Future Leaders Summit 2026",
    meta: "Jun 2026 · Accra, Ghana",
    recap:
      "300 delegates, 14 countries, and the launch of the TMF mentor network.",
  },
  {
    num: "02",
    title: "The Equity Forum",
    meta: "Mar 2026 · New York City, USA",
    recap:
      "A roundtable on diversifying the global leadership pipeline with partner institutions.",
  },
  {
    num: "03",
    title: "Winter Arts Gala",
    meta: "Jan 2026 · Paris, France",
    recap:
      "An auction evening funding ten full-ride scholarships for the incoming cohort.",
  },
] as const;

const EVENT_ICONS = {
  sparkles: Sparkles,
  heart: HeartHandshake,
  rocket: Rocket,
} as const;

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-tmf-page font-ui text-tmf-text-primary">
      {/* Hero */}
      <section className="pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-x-clip">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-6 animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-5">
              Events &amp; Experiences
            </p>
            <h1 className="font-display font-bold text-[40px] leading-[1.1] lg:text-[60px] lg:leading-[1.05] tracking-tight mb-6">
              Where talent takes the stage.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-tmf-text-secondary max-w-lg mb-10">
              TMF convenings unite scholars, mentors, and partners across three
              continents&mdash;because opportunity travels through rooms where
              decision-makers meet rising talent.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#featured"
                className="rounded-none inline-flex items-center gap-2 bg-tmf-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover"
              >
                RSVP to Tech Spark 2027
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
              >
                Host an Event With Us
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
                alt="Delegates in dialogue at a TMF convening"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating stat chip */}
            <div className="rounded-none absolute -top-5 -left-2 sm:-left-6 bg-tmf-surface border border-tmf-line px-6 py-4 shadow-overlay">
              <p className="font-display font-semibold text-[28px] leading-none text-tmf-primary">
                12+
              </p>
              <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary">
                Gatherings Hosted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured event */}
      <section
        id="featured"
        className="bg-tmf-surface border-y border-tmf-line py-20 lg:py-28 scroll-mt-24 lg:scroll-mt-32"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
                Featured Event
              </p>
              <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight">
                Tech Spark Conference 2027
              </h2>
            </div>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary max-w-md">
              Three days of keynotes, venture showcases, and strategic
              networking with the engineers shaping the next decade.
            </p>
          </div>

          <div className="relative mb-16 lg:mb-20">
            <div className="relative rounded-image overflow-hidden shadow-overlay">
              <img
                src={featuredImg}
                alt="The main stage at the Tech Spark Conference"
                className="w-full aspect-[16/10] lg:aspect-[21/9] object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-7 lg:p-12">
                <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 mb-4 text-small font-semibold uppercase tracking-[0.14em] text-white/85">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    Oct 12&ndash;14, 2027
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Zurich, Switzerland
                  </li>
                  <li className="hidden sm:flex items-center gap-2">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    500+ Attendees
                  </li>
                </ul>
                <h3 className="font-display font-semibold text-[26px] leading-snug lg:text-[36px] text-white max-w-xl">
                  Shaping the Next Decade of Talent
                </h3>
              </div>
            </div>

            {/* Overlapping sharp conversion panel */}
            <div className="rounded-none absolute -bottom-10 right-3 sm:right-10 w-[280px] max-w-[calc(100%-1.5rem)] sm:w-[320px] bg-tmf-primary p-7 shadow-overlay">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                Limited Seats
              </p>
              <p className="font-display italic text-xl leading-snug text-white mb-6">
                &ldquo;The room where the next decade is designed.&rdquo;
              </p>
              <Link
                to="/contact"
                className="rounded-none inline-flex w-full items-center justify-center gap-2 bg-white px-8 py-4 text-base font-semibold text-tmf-primary transition-colors hover:bg-tmf-secondary"
              >
                RSVP Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-tmf-line">
            {[
              { icon: Globe, label: "Global Speakers", value: "20+ Countries" },
              { icon: Rocket, label: "Venture Showcase", value: "15 Startups" },
              { icon: Users, label: "Student Passes", value: "100% Funded" },
            ].map((stat) => (
              <li key={stat.label} className="flex items-center gap-5 pt-6 sm:pt-0 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display font-semibold text-[22px] leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-small font-semibold uppercase tracking-[0.14em] text-tmf-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              Upcoming
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight mb-5">
              Mark your calendar.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary">
              Seats at TMF convenings are limited and priority is given to
              partners and scholars. Reserve early.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {UPCOMING_EVENTS.map((event) => {
              const Icon = EVENT_ICONS[event.icon];
              return (
                <article
                  key={event.title}
                  className="group relative flex flex-col bg-tmf-surface border border-tmf-line p-8 lg:p-10 transition-all duration-300 hover:border-tmf-primary hover:-translate-y-1 hover:shadow-overlay"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="block font-display font-semibold leading-none text-[64px] text-tmf-primary">
                        {event.day}
                      </span>
                      <span className="mt-3 block text-small font-bold uppercase tracking-[0.18em] text-tmf-text-secondary">
                        {event.month} {event.year}
                      </span>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <hr className="my-7 border-tmf-line" />

                  <h3 className="font-display font-semibold text-[24px] leading-snug">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-tmf-text-secondary">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-2.5 text-small text-tmf-text-secondary">
                    <p className="flex items-center gap-2.5">
                      <MapPin
                        className="h-4 w-4 shrink-0 text-tmf-text-accent"
                        aria-hidden="true"
                      />
                      {event.location}
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock
                        className="h-4 w-4 shrink-0 text-tmf-text-accent"
                        aria-hidden="true"
                      />
                      {event.format}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
                    >
                      Reserve a Seat
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="bg-tmf-surface border-y border-tmf-line py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              Archive
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight mb-5">
              A legacy of gathering.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary">
              Every convening compounds&mdash;each room we host widens the
              pipeline for the next cohort.
            </p>
          </div>

          <div className="border-b border-tmf-line">
            {ARCHIVE.map((item) => (
              <article
                key={item.num}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 lg:gap-x-12 border-t border-tmf-line py-8 lg:py-10"
              >
                <span
                  aria-hidden="true"
                  className="select-none font-display leading-none text-[48px] lg:text-[72px] text-tmf-text-muted transition-colors duration-300 group-hover:text-tmf-secondary"
                >
                  {item.num}
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-accent mb-2">
                    {item.meta}
                  </p>
                  <h3 className="font-display font-semibold text-[22px] leading-snug lg:text-[28px] transition-colors duration-300 group-hover:text-tmf-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-tmf-text-secondary max-w-xl">
                    {item.recap}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden md:block h-6 w-6 text-tmf-text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tmf-primary"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 border-b-2 border-tmf-primary pb-1 text-small font-bold uppercase tracking-[0.18em] text-tmf-primary transition-colors hover:text-tmf-primary-hover hover:border-tmf-primary-hover"
            >
              Request Event Recaps
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
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
              Be in the room where potential meets opportunity.
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-10">
              Whether you attend, sponsor, or speak&mdash;every seat at a TMF
              convening funds scholarships, mentorship, and technology access
              for the next generation of African talent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="btn-invert-solid inline-flex items-center gap-2"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-invert-outline inline-flex items-center">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
