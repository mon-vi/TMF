import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { METRICS } from "@/lib/site";
import { useCountUp } from "@/lib/useCountUp";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/motion/gsapSetup";

function parseMetricValue(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^(\d+(?:,\d{3})*)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  return { value: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

function AnimatedStat({
  label,
  rawNumber,
  caption,
  index,
}: {
  label: string;
  rawNumber: string;
  caption: string;
  index: number;
}) {
  const { value, suffix } = parseMetricValue(rawNumber);
  const [ref, count] = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="group p-6 sm:p-8 lg:p-10 tmf-animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="tmf-glass-panel h-full rounded-2xl p-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="metric-eyebrow max-w-[160px] text-xs">{label}</p>
          <ArrowUpRight
            className="h-5 w-5 text-accent/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
        <p className="stat-display mt-10 text-heading">
          {count.toLocaleString()}
          {suffix}
        </p>
        <p className="metric-caption mt-3 text-xs">{caption}</p>
        <div className="mt-7 h-1 w-12 bg-accent transition-all duration-500 group-hover:w-20" />
      </div>
    </div>
  );
}

export default function ImpactMetrics() {
  const leadRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const el = leadRef.current;
    if (!el || prefersReducedMotion()) return;

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = SplitText.create(el, { type: "words", aria: "auto" });
      gsap.fromTo(
        split.words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "top 35%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      split?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200/70 bg-white py-20 lg:py-32"
      data-node-id="173:7384"
    >
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl" />
      <div className="container-page relative">
        <div className="mb-10 max-w-2xl tmf-animate-fade-in-up">
          <p className="eyebrow mb-4 text-xs">Impact, made visible</p>
          <h2 className="h2-display text-heading">
            Small inputs. Lasting change.
          </h2>
          <p
            ref={leadRef}
            className="mt-5 max-w-xl text-lg leading-relaxed text-body-muted"
          >
            We measure progress by the people who now have more choices, more
            confidence, and more room to lead.
          </p>
        </div>
        <div className="grid gap-1 rounded-[28px] bg-panel p-1 sm:grid-cols-3">
          {METRICS.map((metric, index) => (
            <AnimatedStat
              key={metric.label}
              label={metric.label}
              rawNumber={metric.number}
              caption={metric.caption}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
