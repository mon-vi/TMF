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
      className="border-b border-nav-border py-8 last:border-b-0 lg:border-b-0 lg:p-8 lg:text-center animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <p className="metric-eyebrow mb-4">{label}</p>
      <p className="stat-display text-heading mb-2">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="metric-caption">{caption}</p>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section className="bg-white py-16 lg:py-[120px]" data-node-id="173:7384">
      <div className="container-page">
        {/* Section heading — does not scale up to h2-lg, stays at text-h2 both breakpoints */}
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <h2 className="text-h2 font-display font-semibold text-heading">
            Measured Change
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-8">
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
