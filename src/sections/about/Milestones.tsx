import { useState } from "react";
import { MILESTONES } from "@/lib/site";
import { ChevronDown } from "lucide-react";

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
}: {
  year: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `milestone-${year}`;

  return (
    <div className="bg-white border border-card-divider transition-colors hover:border-accent">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-6 py-6 lg:px-12 lg:py-8 text-left group"
      >
        <span className="text-4xl lg:text-6xl font-display font-bold text-accent group-hover:text-accent-hover transition-colors">
          {year}
        </span>
        <span className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-label`}
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-8 lg:px-12 lg:pb-8 pt-2 border-t border-card-divider/60 text-base lg:text-lg text-body-muted leading-relaxed">
            {MILESTONE_DETAILS[year] || `Milestone details for ${year}.`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [openYear, setOpenYear] = useState<number | null>(2023);

  function toggleYear(year: number) {
    setOpenYear((prev) => (prev === year ? null : year));
  }

  return (
    <section className="bg-white py-20 lg:py-[120px]" data-node-id="346:1534">
      <div className="container-page">
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-3 text-xs">A Decade of Growth</p>
          <h2 className="h2-display text-heading">Milestones of Impact</h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-accent" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {MILESTONES.map((year) => (
            <AccordionRow
              key={year}
              year={year}
              open={openYear === year}
              onToggle={() => toggleYear(year)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
