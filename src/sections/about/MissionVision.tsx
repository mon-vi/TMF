import { MISSION_VISION } from "@/lib/site";

/*
  Flag #7: Card titles use text-[32px] leading-[40px], NOT .h2-display.
  .h2-display would scale to 48px at lg; node values confirm 32/40 at all breakpoints.
*/

function TargetIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="13" stroke="#6A0DAD" strokeWidth="2" />
      <circle cx="16" cy="16" r="8" stroke="#6A0DAD" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="#6A0DAD" />
      <line x1="16" y1="2" x2="16" y2="5" stroke="#6A0DAD" strokeWidth="2" />
      <line x1="16" y1="27" x2="16" y2="30" stroke="#6A0DAD" strokeWidth="2" />
      <line x1="2" y1="16" x2="5" y2="16" stroke="#6A0DAD" strokeWidth="2" />
      <line x1="27" y1="16" x2="30" y2="16" stroke="#6A0DAD" strokeWidth="2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z"
        stroke="#6A0DAD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="5" stroke="#6A0DAD" strokeWidth="2" />
      <circle cx="16" cy="16" r="2" fill="#6A0DAD" />
    </svg>
  );
}

const ICONS = {
  target: TargetIcon,
  eye: EyeIcon,
};

export default function MissionVision() {
  return (
    <section
      className="bg-surface-light py-16 lg:py-[120px]"
      data-node-id="208:3473"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MISSION_VISION.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="bg-white border border-preset-border p-8 lg:p-[65px] flex flex-col gap-6"
              >
                <Icon />
                <h3 className="text-[32px] leading-[40px] font-display font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="text-body-relaxed text-prose">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
