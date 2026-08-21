import { ASSETS } from "@/lib/site";

/*
  Flag #1: mint eyebrow (#9CF5C1) — hero-specific, not accent. May need
  an eyebrow-on-dark token if it recurs on other heroes.
  Flag #6: panel token used as text color (text-panel/90) — couples
  text to a surface token; if panel's hex ever changes, this silently changes too.
  NOTE: H1 uses font-bold for "Building a Legacy of" vs .h1-display's font-semibold.
  Same pattern as mobile hero node 173:7436 which also showed bold.
*/

function ChevronDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CinematicHero() {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] lg:min-h-screen"
      data-node-id="208:3498"
    >
      {/* Background image */}
      {ASSETS.aboutHero ? (
        <img
          src={ASSETS.aboutHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-ink" aria-hidden="true" />
      )}

      {/* Scrim */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="px-6 lg:px-16 pb-16 lg:pb-24 max-w-[768px]">
          <p className="text-small font-sans font-semibold uppercase tracking-[4.2px] text-mint mb-6">
            Est. 2023
          </p>
          <h1 className="font-display text-white mb-6">
            <span className="text-h1 font-bold lg:text-h1-lg block">
              Building a Legacy of
            </span>
            <span className="text-h1 font-normal italic lg:text-h1-lg block">
              Excellence.
            </span>
          </h1>
          <p className="text-lead-lg text-panel/90 max-w-[576px]">
            TalentMakers Foundation bridges opportunity gaps through strategic
            philanthropy, full-ride scholarships, and technology education for
            underserved communities.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 opacity-60 hidden lg:block">
        <ChevronDown />
      </div>
    </section>
  );
}
