import { Link } from "react-router-dom";
import { ArrowRight, Check, Cpu } from "lucide-react";
import { METRICS, PROGRAMS } from "@/lib/site";
import scholarshipImg from "@/assets/tmf-scholarship.jpg";
import techSparkImg from "@/assets/tech-spark.png";
import heroImg from "@/assets/tech-spark-conf-new.jpg";

const ELIGIBILITY_PILLARS = [
  "Exceptional leadership potential",
  "Trans-disciplinary academic record",
  "Commitment to social acceleration",
] as const;

const TECH_SPARK_PILLARS = [
  {
    index: "01",
    title: "Skill Building",
    body: "Advanced immersion in AI, quantum computing, and sustainable bio-engineering.",
  },
  {
    index: "02",
    title: "Venture Forge",
    body: "Converting breakthrough research into scalable, world-changing ventures.",
  },
] as const;

const METHOD = [
  {
    num: "01",
    title: "Identify",
    body: "We scout high-potential students in underserved communities through school outreach and partner referrals.",
  },
  {
    num: "02",
    title: "Invest",
    body: "Scholarships, labs, and stipends remove every financial barrier between talent and world-class training.",
  },
  {
    num: "03",
    title: "Accelerate",
    body: "Mentorship and industry placement convert raw potential into leadership that compounds for generations.",
  },
] as const;

export default function ProgramsPage() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-tmf-page font-ui text-tmf-text-primary">
      {/* Hero */}
      <section className="pt-28 lg:pt-40 pb-20 lg:pb-32">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-5">
              Our Programs
=======
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
>>>>>>> main
            </p>
            <h1 className="font-display font-bold text-[40px] leading-[1.1] lg:text-[60px] lg:leading-[1.05] tracking-tight mb-6">
              Where talent meets opportunity.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-tmf-text-secondary max-w-lg mb-10">
              Two flagship initiatives identify exceptional young Africans and
              equip them with the education, technology, and mentorship to lead
              on a global stage.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/donate"
                className="rounded-none inline-flex items-center gap-2 bg-tmf-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover"
              >
                Fund a Scholarship
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
              >
                Become a Mentor
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative mb-10 lg:mb-0 lg:pl-6">
            <div className="rounded-image overflow-hidden shadow-overlay aspect-[16/11]">
              <img
                src={heroImg}
                alt="Students collaborating during a TMF technology program"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-none absolute -bottom-10 left-4 sm:left-10 max-w-[280px] bg-tmf-primary p-7 text-white shadow-overlay">
              <p className="font-display italic text-xl leading-snug">
                &ldquo;Talent is universal. Opportunity should be too.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="border-y border-tmf-line bg-tmf-surface">
        <div className="container-page grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-tmf-line">
          {METRICS.map((metric) => (
            <div key={metric.label} className="py-10 lg:py-12 sm:px-10 first:sm:pl-0">
              <p className="font-display font-semibold text-[40px] lg:text-[48px] leading-none text-tmf-primary">
                {metric.number}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em]">
                {metric.label}
              </p>
              <p className="mt-1 text-small text-tmf-text-secondary">
                {metric.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Program 01 — TMF Scholarships */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span
              aria-hidden="true"
              className="block font-display leading-none text-[72px] lg:text-[110px] text-tmf-text-muted select-none"
            >
              01
            </span>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent">
              Scholarship Fund
            </p>
            <h2 className="mt-3 font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight">
              {PROGRAMS[0].title}
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-tmf-text-secondary max-w-lg">
              {PROGRAMS[0].description}
            </p>

<<<<<<< HEAD
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-accent mb-4">
                Eligibility Pillars
              </p>
              <ul className="space-y-4">
                {ELIGIBILITY_PILLARS.map((pillar) => (
                  <li key={pillar} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-base">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={PROGRAMS[0].href}
              className="rounded-none mt-10 inline-flex items-center gap-2 bg-tmf-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="order-first lg:order-last">
            <div className="rounded-image overflow-hidden shadow-overlay aspect-[16/10]">
              <img
                src={scholarshipImg}
                alt="A TMF scholar studying at university"
                className="h-full w-full object-cover"
              />
            </div>
=======
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
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Program 02 — Tech Spark */}
      <section className="pb-20 lg:pb-28">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-image overflow-hidden shadow-overlay aspect-[16/10]">
            <img
              src={techSparkImg}
              alt="Young engineers building hardware in a TMF lab"
              className="h-full w-full object-cover"
=======
        {/* Program 2: Tech Spark (Image Left, Content Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[16/10] order-2 lg:order-1">
            <img
              src={techSparkImg}
              alt={PROGRAMS[1].title}
              className="w-full h-full object-cover object-center"
>>>>>>> main
            />
          </div>

          <div>
            <span
              aria-hidden="true"
              className="block font-display leading-none text-[72px] lg:text-[110px] text-tmf-text-muted select-none"
            >
              02
            </span>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent">
              Technology Access
            </p>
            <h2 className="mt-3 font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight">
              {PROGRAMS[1].title}
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-tmf-text-secondary max-w-lg">
              {PROGRAMS[1].description}
            </p>

<<<<<<< HEAD
            <div className="mt-8 space-y-6">
              {TECH_SPARK_PILLARS.map((pillar) => (
                <div key={pillar.index} className="border-t border-tmf-line pt-5">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-accent mb-2">
                    <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                    {pillar.index} / {pillar.title}
                  </p>
                  <p className="text-base leading-relaxed text-tmf-text-secondary max-w-md">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to={PROGRAMS[1].href}
              className="rounded-none mt-10 inline-flex items-center gap-2 border border-tmf-primary px-8 py-4 text-base font-medium text-tmf-primary transition-colors hover:bg-tmf-surface"
            >
              Explore Tech Spark
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* The TMF Method */}
      <section className="border-y border-tmf-line bg-tmf-surface py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-14 lg:mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              The TMF Method
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight">
              From potential to prominence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {METHOD.map((step) => (
              <div key={step.num}>
                <span
                  aria-hidden="true"
                  className="block font-display leading-none text-[64px] text-tmf-text-muted select-none"
                >
                  {step.num}
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-tmf-text-accent">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tmf-text-secondary">
                  {step.body}
                </p>
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
              Get Involved
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[48px] lg:leading-[1.2] tracking-tight text-white mb-6">
              Invest in the next generation of African talent.
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-10">
              Your support funds scholarships, mentorship, and technology
              access for scholars who will shape the institutions of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/donate"
                className="rounded-none inline-flex items-center gap-2 bg-white px-8 py-4 text-base font-semibold text-tmf-primary transition-colors hover:bg-tmf-secondary"
=======
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
>>>>>>> main
              >
                Donate Today
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/get-involved"
                className="rounded-none inline-flex items-center border border-white/50 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
      </div>

      {/* Bottom Quote Banner */}
      <section className="bg-accent py-20 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl lg:text-4xl font-display font-medium leading-relaxed italic">
            &ldquo;The talent we cultivate today defines the global landscape of
            tomorrow.&rdquo;
          </blockquote>
        </div>
>>>>>>> main
      </section>

    </main>
  );
}
