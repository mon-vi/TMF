import { useState } from "react";
import { ArrowUpRight, Check, Clock, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import "@/styles/tmf-premium-pages.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClasses =
  "w-full bg-transparent border-b border-card-divider pb-3 text-body text-heading placeholder:text-body-muted/60 caret-accent transition-colors duration-300 focus:border-accent focus:outline-none";

const labelClasses =
  "mb-2 block text-small font-semibold uppercase tracking-[0.7px] text-heading";

const SOCIAL_LINKS = [
  {
    label: "Website",
    path: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    label: "Share",
    path: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98" />
      </>
    ),
  },
  {
    label: "Network",
    path: (
      <>
        <path d="M18 16.5v-3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3m12-9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-12 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
      </>
    ),
  },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState({ ...INITIAL_FORM });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="tmf-page-scope min-h-screen bg-panel text-ink">
      {/* ============================================================
          SPLIT LEAD — typography left, functional glass form right
         ============================================================ */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 tmf-mesh-surface" aria-hidden="true" />
        <div
          className="absolute inset-0 tmf-surface-grid opacity-25"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift left-[-10%] top-[-12%] h-[420px] w-[420px] bg-accent/20"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift right-[-8%] bottom-[-20%] h-[380px] w-[380px] bg-violet-300/35"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Left — typographic column */}
            <Reveal className="lg:col-span-6">
              <p className="eyebrow mb-5 flex items-center gap-3 text-xs">
                <span
                  className="inline-block h-px w-10 bg-accent/60"
                  aria-hidden="true"
                />
                Connect With Us
              </p>
              <h1 className="h1-display max-w-md text-heading">
                Get in <span className="tmf-text-gradient">Touch.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-body-muted lg:text-lead-lg">
                Whether you are a donor, a prospective scholar, or a partner,
                we are here to listen.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href="mailto:info@talentmakers.org"
                    className="tmf-link-arrow inline-flex items-center gap-1.5 text-body font-medium text-prose underline-offset-4 hover:text-accent hover:underline"
                  >
                    info@talentmakers.org
                    <ArrowUpRight
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-icon bg-tmf-icon-wash text-accent">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-body font-medium text-prose">
                    We reply within 24 hours.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right — glass form panel */}
            <Reveal delay={150} className="lg:col-span-6">
              <div className="tmf-glass-panel rounded-image p-8 sm:p-10 lg:p-12">
                {submitted ? (
                  <div role="status" className="py-10 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h2 className="mt-7 font-display text-h2 font-semibold text-heading">
                      Message Sent Successfully
                    </h2>
                    <p className="mt-4 text-body-relaxed text-body-muted">
                      Thank you for reaching out. We will get back to you
                      shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...INITIAL_FORM });
                        setSubmitted(false);
                      }}
                      className="btn-outline mt-9 rounded-none transition-colors hover:bg-accent/5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="contact-name" className={labelClasses}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="example@domain.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className={labelClasses}>
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelClasses}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your interest or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-solid w-full rounded-none tracking-[0.7px] transition-colors hover:bg-accent/90"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT BAND — glass card on deep brand purple
         ============================================================ */}
      <section className="relative overflow-hidden bg-accent py-24 text-white lg:py-32">
        <div
          className="tmf-orb tmf-aurora-drift left-[8%] top-[-30%] h-[380px] w-[380px] bg-white/10"
          aria-hidden="true"
        />
        <div
          className="tmf-orb tmf-aurora-drift bottom-[-40%] right-[4%] h-[420px] w-[420px] bg-tmf-secondary/25"
          style={{ animationDelay: "-5s" }}
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-small font-semibold uppercase tracking-[1.4px] text-tmf-secondary">
                Contact Information
              </p>
              <h2 className="mt-5 max-w-md font-display text-h2 font-semibold leading-snug lg:text-h2-lg">
                Start the conversation today.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
                Every partnership, scholarship, and spark of talent begins with
                a single message.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-none border border-white/25 bg-white/10 p-8 shadow-overlay backdrop-blur-md sm:p-10">
                <span className="text-small font-semibold uppercase tracking-[0.7px] text-white/80">
                  Email
                </span>
                <a
                  href="mailto:info@talentmakers.org"
                  className="tmf-link-arrow mt-3 inline-flex items-center gap-2 font-display text-h3 font-medium text-white underline-offset-8 hover:underline sm:text-h3-lg"
                >
                  info@talentmakers.org
                  <ArrowUpRight className="h-6 w-6 shrink-0" aria-hidden="true" />
                </a>

                <div className="mt-9 border-t border-white/20 pt-7">
                  <span className="text-small font-semibold uppercase tracking-[0.7px] text-white/80">
                    Follow the mission
                  </span>
                  <div className="mt-4 flex items-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                      >
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {social.path}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
