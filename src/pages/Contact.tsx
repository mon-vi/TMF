import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleCheckBig,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Partnerships & Sponsorship",
  "Scholarship Program",
  "Tech Spark",
  "Events & Media",
  "Other",
] as const;

const DIRECT_LINES = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@talentmakers.org",
    href: "mailto:info@talentmakers.org",
    caption: "We reply within 48 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 700 000 0000",
    href: "tel:+2347000000000",
    caption: "Mon–Fri, 9am–5pm WAT",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Lagos, Nigeria",
    href: "#map",
    caption: "Visits by appointment",
  },
] as const;

const CHANNELS = [
  {
    title: "General Inquiries",
    body: "Questions about our mission, programs, or a scholar's journey — start here and we will route your message.",
    email: "info@talentmakers.org",
  },
  {
    title: "Partnerships & Sponsorship",
    body: "Institutions and companies building long-term talent pipelines with us. We co-design every partnership.",
    email: "partners@talentmakers.org",
  },
  {
    title: "Media & Press",
    body: "Interview requests, brand assets, and impact data for editorial coverage of our work.",
    email: "press@talentmakers.org",
  },
] as const;

type FormStatus = "idle" | "sending" | "sent";

const inputClasses =
  "rounded-none w-full border border-tmf-line bg-white px-4 py-3.5 text-base text-tmf-text-primary placeholder:text-tmf-text-muted transition-colors focus:border-tmf-primary focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  function resetForm() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
  }

  return (
    <main className="min-h-screen bg-tmf-page font-ui text-tmf-text-primary">
      {/* Hero */}
      <section className="pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-x-clip">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-6 animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-5">
              Contact Us
            </p>
            <h1 className="font-display font-bold text-[40px] leading-[1.1] lg:text-[60px] lg:leading-[1.05] tracking-tight mb-6">
              Let&rsquo;s start a conversation.
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-tmf-text-secondary max-w-lg mb-10">
              Whether you are a donor, a prospective scholar, or an
              institution ready to partner&mdash;our team is listening.
            </p>
            <ul className="space-y-4 max-w-md">
              {DIRECT_LINES.map((line) => (
                <li key={line.label}>
                  <a
                    href={line.href}
                    className="group rounded-none flex items-center gap-5 bg-tmf-surface border border-tmf-line px-5 py-4 transition-all duration-300 hover:border-tmf-primary hover:-translate-y-0.5 hover:shadow-overlay"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                      <line.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary">
                        {line.label}
                      </span>
                      <span className="mt-1 block text-base font-semibold text-tmf-text-primary transition-colors group-hover:text-tmf-primary">
                        {line.value}
                      </span>
                    </span>
                    <ArrowRight
                      className="ml-auto h-4 w-4 shrink-0 text-tmf-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-tmf-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative mb-8 lg:mb-0 lg:pl-6 animate-fade-in-up">
            {/* Offset structural slab — sharp layer behind rounded photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 bg-tmf-surface border border-tmf-line shadow-overlay"
            />
            <div className="relative rounded-image overflow-hidden shadow-overlay aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="The TMF team collaborating with partners around a table"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating stat chip */}
            <div className="rounded-none absolute -top-5 -left-2 sm:-left-6 bg-tmf-surface border border-tmf-line px-6 py-4 shadow-overlay">
              <p className="font-display font-semibold text-[28px] leading-none text-tmf-primary">
                48h
              </p>
              <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary">
                Response Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + info panel */}
      <section className="bg-tmf-surface border-y border-tmf-line py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          {/* Form card with offset slab */}
          <div className="lg:col-span-7 relative">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-0 -translate-x-4 translate-y-4 bg-tmf-page border border-tmf-line"
            />
            <div className="relative bg-tmf-surface border border-tmf-line p-7 sm:p-10 shadow-overlay">
              {status === "sent" ? (
                <div className="py-10 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                    <CircleCheckBig className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-display font-bold text-[26px] leading-snug tracking-tight">
                    Message received.
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-tmf-text-secondary max-w-sm mx-auto">
                    Thank you for reaching out. A member of our team will get
                    back to you within 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-none mt-8 inline-flex items-center gap-2 border border-tmf-primary px-8 py-4 text-base font-medium text-tmf-primary transition-colors hover:bg-tmf-icon-wash"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
                    Send a Message
                  </p>
                  <h2 className="font-display font-bold text-[26px] leading-snug lg:text-[32px] lg:leading-[1.15] tracking-tight mb-8">
                    Tell us how we can help.
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className={`${inputClasses} appearance-none pr-12 ${
                          form.subject === "" ? "text-tmf-text-muted" : ""
                        }`}
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {SUBJECT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-tmf-text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-secondary"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your interest or inquiry..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClasses} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-none mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-tmf-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 flex items-center gap-2 text-small text-tmf-text-secondary">
                    <Clock className="h-4 w-4 text-tmf-text-accent" aria-hidden="true" />
                    Average response time: under 48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-tmf-primary p-8 lg:p-10 text-white shadow-overlay">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                Office Hours
              </p>
              <p className="font-display italic text-xl leading-snug mb-8">
                &ldquo;Every message is read by a human on our team.&rdquo;
              </p>
              <ul className="space-y-4 text-base">
                <li className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                  <span className="text-white/80">Monday &ndash; Friday</span>
                  <span className="font-semibold">9:00 &ndash; 17:00 WAT</span>
                </li>
                <li className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
                  <span className="text-white/80">Saturday</span>
                  <span className="font-semibold">10:00 &ndash; 14:00 WAT</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>

            <div className="border border-tmf-line bg-tmf-page p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-tmf-text-accent mb-3">
                Looking for something else?
              </p>
              <h3 className="font-display font-semibold text-[22px] leading-snug mb-3">
                Ready to give instead?
              </h3>
              <p className="text-base leading-relaxed text-tmf-text-secondary mb-6">
                Skip the inbox&mdash;your contribution creates opportunity
                today.
              </p>
              <Link
                to="/donate"
                className="rounded-none inline-flex items-center gap-2 bg-tmf-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-tmf-primary-hover"
              >
                Donate Today
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Direct channels */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-tmf-text-accent mb-4">
              Direct Lines
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[44px] lg:leading-[1.2] tracking-tight mb-5">
              Reach the right team, faster.
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-tmf-text-secondary">
              Route your inquiry straight to the people who can act on it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CHANNELS.map((channel) => (
              <article
                key={channel.title}
                className="group flex flex-col bg-tmf-surface border border-tmf-line p-8 lg:p-10 transition-all duration-300 hover:border-tmf-primary hover:-translate-y-1 hover:shadow-overlay"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-tmf-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-[24px] leading-snug">
                  {channel.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-tmf-text-secondary">
                  {channel.body}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="mt-auto pt-8 inline-flex items-center gap-2 text-base font-medium text-tmf-primary"
                >
                  {channel.email}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-tmf-primary py-20 lg:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-4">
              Join the Mission
            </p>
            <h2 className="font-display font-bold text-[32px] leading-[1.15] lg:text-[48px] lg:leading-[1.2] tracking-tight text-white mb-6">
              Talent is universal. Opportunity should be too.
            </h2>
            <p className="text-lg leading-relaxed text-white/75 mb-10">
              Add your voice, time, or resources to a movement diversifying
              the global leadership pipeline&mdash;one scholar at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="btn-invert-solid inline-flex items-center gap-2"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/programs" className="btn-invert-outline inline-flex">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
