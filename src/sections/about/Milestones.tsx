import { ChevronDown, History } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { MILESTONES } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
} from "@/lib/motion/gsapSetup";

// User-directed adaptation (Aug 2026): years reversed to newest-first and
// chapter labels / lit-rail added for narrative flow. Figma node 346:1534
// had ascending years with no chapter copy.
const MILESTONE_CHAPTERS: Record<number, string> = {
  2026: "Now unfolding",
  2025: "Proof of scale",
  2024: "Widening the circle",
  2023: "Where it began",
};

const MILESTONE_DETAILS: Record<number, string> = {
  2023: "Inception of TalentMakers Foundation. Launched our inaugural scholarship cohort and strategic technology lab partnerships.",
  2024: "Expanded to 50+ schools reached, launched Tech Spark fellowship and established cross-border mentoring programs.",
  2025: "Crossed 120+ direct scholarship beneficiaries and partnered with international technology firms for direct placement.",
  2026: "Pioneering the Pan-African Technology & Leadership Endowment to support 500+ emerging tech leaders annually.",
};

function AccordionRow({
  year,
  open,
  onToggle,
  dotRef,
}: {
  year: number;
  open: boolean;
  onToggle: () => void;
  dotRef: (el: HTMLSpanElement | null) => void;
}) {
  const panelId = `milestone-${year}`;
  return (
    <div className="relative">
      <span
        ref={dotRef}
        aria-hidden="true"
        className="tmf-milestone-dot absolute -left-[44px] top-[4.6rem] hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-slate-300 lg:block"
      />
      <div className="tmf-glass-panel overflow-hidden rounded-2xl">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left lg:px-10 lg:py-8"
        >
          <span>
            <span className="block font-display text-5xl font-semibold tracking-tight text-accent transition-transform duration-300 group-hover:translate-x-1 lg:text-7xl">
              {year}
            </span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-[1.4px] text-body-muted lg:text-small">
              {MILESTONE_CHAPTERS[year]}
            </span>
          </span>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </span>
        </button>
      <div
        id={panelId}
        role="region"
        className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200/70 px-6 pb-8 pt-5 text-base leading-relaxed text-body-muted lg:px-10 lg:text-lg">
            {MILESTONE_DETAILS[year] || `Milestone details for ${year}.`}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [openYear, setOpenYear] = useState<number | null>(MILESTONES[0]);
  const rootRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLSpanElement | null>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const triggers: ScrollTrigger[] = [];
      const rail = railRef.current;
      if (rail) {
        // Direct progress → scaleY mapping; a scrubbed tween kept snapping to
        // its end state inside matchMedia, so drive the value imperatively.
        const setScale = gsap.quickSetter(rail, "scaleY");
        triggers.push(
          ScrollTrigger.create({
            trigger: root,
            start: "top 65%",
            end: "bottom 80%",
            onUpdate: (self) => setScale(self.progress),
            onRefresh: (self) => setScale(self.progress),
          }),
        );
      }
      // Dots light up as the reader passes them — the story reads top to bottom.
      dotRefs.current.forEach((dot) => {
        if (!dot) return;
        triggers.push(
          ScrollTrigger.create({
            trigger: dot,
            start: "top 72%",
            end: "bottom 28%",
            toggleClass: { targets: dot, className: "is-lit" },
          }),
        );
      });
      // Late-loading imagery shifts layout after mount — recalc once settled.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh).catch(() => {});
      return () => {
        window.removeEventListener("load", refresh);
        triggers.forEach((t) => t.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-white py-20 lg:py-32"
      data-node-id="346:1534"
    >
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="container-page relative">
        <div className="mb-12 flex items-end justify-between gap-8 tmf-animate-fade-in-up">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <History className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="eyebrow text-xs">A decade of growth</p>
            </div>
            <h2 className="h2-display text-heading">Milestones of impact.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-body-muted">
              Four years in, the through-line is unmistakable: talent given
              room becomes unstoppable.
            </p>
          </div>
          <span className="hidden font-display text-8xl font-semibold leading-none text-accent/10 sm:block">
            04
          </span>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <span
            aria-hidden="true"
            className="absolute left-0 top-3 bottom-3 hidden w-px bg-slate-200/80 lg:block"
          />
          <span
            ref={railRef}
            aria-hidden="true"
            className="absolute left-[-1px] top-3 bottom-3 hidden w-[2px] origin-top bg-accent/70 lg:block"
            style={{ transform: "scaleY(0)" }}
          />
          <div className="flex flex-col gap-4 lg:pl-10">
            {MILESTONES.map((year, index) => (
              <Reveal key={year} delay={index * 90}>
                <AccordionRow
                  year={year}
                  open={openYear === year}
                  onToggle={() =>
                    setOpenYear((prev) => (prev === year ? null : year))
                  }
                  dotRef={(el) => {
                    dotRefs.current[index] = el;
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
