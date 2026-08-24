/*
  Decorative blurred orb used by brand-doc pages (Contact, Events,
  Get Involved, Programs). Purely presentational — aria-hidden, and the
  aurora drift animation is disabled globally under reduced motion.
*/
export default function Orb({
  className,
  delay,
}: {
  className: string;
  delay?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`tmf-orb tmf-aurora-drift ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    />
  );
}
