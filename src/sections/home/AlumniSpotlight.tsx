import { ALUMNI } from "@/lib/site";

export default function AlumniSpotlight() {
  return (
    <section className="bg-white py-20 lg:py-[120px] border-b border-card-divider" data-node-id="173:7466">
      <div className="container-page mb-12 lg:mb-16 text-center">
        <p className="eyebrow mb-3 text-xs">Community</p>
        <h2 className="text-3xl lg:text-5xl font-display font-semibold text-heading">
          Alumni Spotlight
        </h2>
        <p className="text-body-muted text-base mt-4 max-w-xl mx-auto">
          Meet the scholars and tech innovators whose journeys were catalyzed by TMF fellowships and mentorship.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-x-auto snap-x snap-mandatory pb-6 px-4 lg:px-8 no-scrollbar">
        <div className="flex gap-6 max-w-[1240px] mx-auto">
          {ALUMNI.map((name, i) => (
            <div
              key={name}
              className="flex-shrink-0 w-[260px] lg:w-[320px] snap-center rounded-2xl overflow-hidden shadow-md bg-panel border border-card-divider flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[4/5] bg-gradient-to-t from-[#6B21A8]/90 via-[#6B21A8]/30 to-transparent flex flex-col justify-between p-6">
                <span className="self-end px-3 py-1 bg-white/90 text-accent font-sans font-bold text-xs uppercase tracking-wider rounded-none">
                  Scholar #{i + 1}
                </span>

                <div>
                  <p className="text-xl lg:text-2xl font-display font-bold text-white leading-tight drop-shadow-sm">
                    {name}
                  </p>
                  <p className="text-white/80 font-sans text-xs uppercase tracking-widest mt-1">
                    TMF Cohort 1 &middot; Alumni
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="container-page text-center text-xs font-sans font-semibold uppercase tracking-[1.8px] text-body-muted mt-8">
        TalentMakers Foundation Cohort 1
      </p>
    </section>
  );
}
