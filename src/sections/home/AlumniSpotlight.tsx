import { ALUMNI } from "@/lib/site";

/*
  TODO(assets): portrait images are per-person Figma assets not yet exported.
  Using neutral placeholder boxes. Export headshots from Figma and add to site.ts.
  TODO(design): card dimensions (240px mobile / 420px desktop) and gradient
  overlay confirmed from node 292:3013 — re-verify when portraits are in place.
*/

export default function AlumniSpotlight() {
  return (
    <section className="bg-panel py-16 lg:py-[120px]" data-node-id="173:7466">
      <div className="container-page mb-10 lg:mb-16">
        <p className="eyebrow text-center">Alumni Spotlight</p>
      </div>

      {/* Full-bleed carousel */}
      <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex gap-4 lg:gap-6 px-[calc((100vw-342px)/2)] lg:px-[calc((100vw-1152px)/2)]">
          {ALUMNI.map((name) => (
            <div
              key={name}
              className="flex-shrink-0 w-[240px] lg:w-[420px] snap-center"
            >
              {/* Placeholder portrait — TODO(assets): replace with real image */}
              <div className="relative w-full aspect-square bg-ink/10">
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-alumni-overlay pt-10 pb-10 px-4 lg:pb-40 lg:px-10">
                  <p className="text-alumni-name lg:text-alumni-name-lg font-sans font-bold text-white leading-tight">
                    {name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="container-page text-center text-small font-sans font-semibold uppercase tracking-[1.4px] text-body-muted mt-8 lg:mt-12">
        TMF Cohort 1
      </p>
    </section>
  );
}
