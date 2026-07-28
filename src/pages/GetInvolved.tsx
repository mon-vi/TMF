import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <div className="bg-panel min-h-screen flex flex-col justify-between" data-node-id="get-involved-page">
      <div>
        {/* SECTION 1: Be the Change (Hero) */}
        <section className="py-16 lg:py-[120px]">
          <div className="container-page max-w-3xl">
            <div className="mb-8">
              <p className="eyebrow text-accent mb-3 uppercase tracking-[0.7px]">JOIN THE MISSION</p>
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
                Join a network of visionaries committed to identifying and nurturing IT talent.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Pathways to Impact */}
        <section className="py-16 lg:py-[120px] border-t border-card-divider">
          <div className="container-page max-w-3xl">
            <div className="mb-16">
              <h2 className="h2-display text-heading tracking-tight">
                Pathways to Impact
              </h2>
            </div>

            <div className="space-y-12">
              {/* Item 1 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Volunteer with Us
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Lend your expertise to our talents.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Join Us <span>→</span>
                </Link>
              </div>

              {/* Item 2 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Be a Friend of TMF
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Provide critical financial support to empower IT talents.
                </p>
                <Link to="/donate" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Donate Today <span>→</span>
                </Link>
              </div>

              {/* Item 3 */}
              <div className="pb-12 border-b border-card-divider">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Partners with Us
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Institutional collaboration for systematic, long-term change.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Inquire <span>→</span>
                </Link>
              </div>

              {/* Item 4 */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-heading mb-3">
                  Become an Ambassador
                </h3>
                <p className="text-body-relaxed text-body-muted mb-6">
                  Become a face of TMF on the ground and lead the impact.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Apply Now <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                    Directly influence the trajectory of high-potential individuals.
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
                    Connect with a diverse network of leaders and change-makers across sectors.
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
                    Expand your perspective through intercultural exchange and collaboration.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}