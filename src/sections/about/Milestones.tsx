import { useState } from "react";
import { MILESTONES } from "@/lib/site";

/*
  TODO(content): real milestone copy per year needed from client.
  Design (node 346:1534) shows collapsed rows only — no expanded
  content is drawn for any year. Placeholder text used in panels.
  Section marked Inferred for expand behaviour + content.
*/

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="#6A0DAD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    <div className="bg-white shadow-card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-6 py-6 lg:px-20 lg:py-10 text-left"
      >
        <span className="text-timeline-year-mobile lg:text-timeline-year font-display font-semibold text-accent">
          {year}
        </span>
        <span className="w-[100px] h-[100px] flex items-center justify-center shrink-0">
          <Chevron open={open} />
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
          <div className="px-6 pb-6 lg:px-20 lg:pb-10 text-body-relaxed text-prose/80">
            {/* TODO(content): real milestone copy needed from client */}
            Milestone details for {year} coming soon.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Milestones() {
  const [openYear, setOpenYear] = useState<number | null>(null);

  function toggleYear(year: number) {
    setOpenYear((prev) => (prev === year ? null : year));
  }

  return (
    <section className="bg-white py-16 lg:py-[120px]" data-node-id="346:1534">
      <div className="container-page">
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-3">A Decade of Growth</p>
          <h2 className="h2-display text-heading">Milestones of Impact</h2>
        </div>

        <div className="max-w-[960px] mx-auto flex flex-col gap-4">
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
