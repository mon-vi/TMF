import { Asterisk } from "lucide-react";

const PHRASES = [
  "Talent is universal",
  "Opportunity should be too",
  "Invest in the future",
] as const;

function Sequence() {
  return (
    <span className="flex shrink-0 items-center">
      {PHRASES.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="mx-8 font-display text-lg italic text-heading/70 lg:text-xl">
            {phrase}
          </span>
          <Asterisk className="h-5 w-5 text-accent" aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export default function MarqueeRibbon() {
  return (
    <div className="tmf-marquee py-5" aria-hidden="true">
      <div className="tmf-marquee-track">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
