import { useCountUp } from "@/lib/useCountUp";
import { METRICS } from "@/lib/site";

function parseMetricValue(raw: string): { value: number; suffix: string } {
  const match = raw.match(/^(\d+(?:,\d{3})*)(.*)$/);
  if (!match) return { value: 0, suffix: raw };
  const numStr = match[1].replace(/,/g, "");
  return { value: parseInt(numStr, 10), suffix: match[2] };
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
      className="py-8 lg:py-10 px-6 lg:px-8 text-center border-b border-card-divider last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <p className="metric-eyebrow mb-3 text-sm">{label}</p>
      <p className="stat-display text-heading mb-2 tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="metric-caption text-xs">{caption}</p>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="bg-white py-20 lg:py-[120px] border-y border-card-divider" data-node-id="173:7384">
      <div className="container-page">
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <p className="eyebrow mb-3 text-xs">Impact</p>
          <h2 className="text-3xl lg:text-5xl font-display font-semibold text-heading">
            Measured Change
          </h2>
          <div className="mt-5 mx-auto w-16 h-1 bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 divide-card-divider bg-panel/30 border border-card-divider">
          {METRICS.map((metric, i) => (
            <AnimatedStat
              key={metric.label}
              label={metric.label}
              rawNumber={metric.number}
              caption={metric.caption}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
