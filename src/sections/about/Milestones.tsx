import { ChevronDown, History } from "lucide-react";
import { useState } from "react";
import { MILESTONES } from "@/lib/site";

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
  index,
}: {
  year: number;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `milestone-${year}`;
  return (
    <div
      className="tmf-glass-panel overflow-hidden rounded-2xl tmf-animate-fade-in-up"
      style={{ animationDelay: `${index * 100 + 120}ms` }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left lg:px-10 lg:py-8"
      >
        <span className="font-display text-5xl font-semibold tracking-tight text-accent transition-transform duration-300 group-hover:translate-x-1 lg:text-7xl">
          {year}
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
  );
}

export default function Milestones() {
  const [openYear, setOpenYear] = useState<number | null>(2023);
  return (
    <section
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
          </div>
          <span className="hidden font-display text-8xl font-semibold leading-none text-accent/10 sm:block">
            04
          </span>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          {MILESTONES.map((year, index) => (
            <AccordionRow
              key={year}
              year={year}
              index={index}
              open={openYear === year}
              onToggle={() =>
                setOpenYear((prev) => (prev === year ? null : year))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
