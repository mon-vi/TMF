import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="bg-panel py-16 lg:py-[120px]"
      data-node-id="contact-page"
    >
      <div className="container-page max-w-3xl">
        {/* Header section */}
        <div className="mb-12">
          <p className="eyebrow text-accent mb-3 uppercase tracking-[0.7px]">
            CONNECT WITH US
          </p>
          <h1 className="h2-display text-heading mb-6">Get in Touch</h1>
          <p className="text-body-relaxed text-body-muted max-w-xl">
            Whether you are a donor, a prospective scholar, or a partner, we are
            here to listen.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-panel space-y-16">
          {/* Form */}
          {submitted ? (
            <div className="py-12 text-center bg-ink/5 p-8 shadow-sm border border-card-border">
              <h3 className="text-h2 font-display font-semibold text-heading mb-4">
                Message Sent Successfully
              </h3>
              <p className="text-body-relaxed text-body-muted">
                Thank you for reaching out. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* NAME */}
              <div>
                <label className="block text-small font-sans font-semibold tracking-[0.7px] text-heading uppercase mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-card-divider pb-3 text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent transition-colors text-body"
                  placeholder="Your full name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-small font-sans font-semibold tracking-[0.7px] text-heading uppercase mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-card-divider pb-3 text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent transition-colors text-body"
                  placeholder="example@domain.com"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-small font-sans font-semibold tracking-[0.7px] text-heading uppercase mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-card-divider pb-3 text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent transition-colors text-body"
                  placeholder="How can we help?"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-small font-sans font-semibold tracking-[0.7px] text-heading uppercase mb-2">
                  MESSAGE
                </label>
                <input
                  type="text"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-card-divider pb-3 text-heading placeholder:text-body-muted/50 focus:outline-none focus:border-accent transition-colors text-body"
                  placeholder="Tell us about your interest or inquiry..."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white font-sans font-semibold tracking-[0.7px] text-small shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          )}

          {/* Contact Information Card */}
          <div className="bg-accent text-white p-10 lg:p-14 shadow-xl flex flex-col justify-between space-y-12">
            <div>
              <h2 className="text-h2 font-display font-semibold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-2">
                <span className="text-small font-sans font-semibold tracking-[0.7px] uppercase opacity-80 block">
                  EMAIL
                </span>
                <a
                  href="mailto:info@talentmakers.org"
                  className="text-white text-body font-medium hover:underline block"
                >
                  info@talentmakers.org
                </a>
              </div>
            </div>

            {/* Social / Icon links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              <a
                href="#"
                aria-label="Website"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Share"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Network"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 16.5v-3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3m12-9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-12 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
