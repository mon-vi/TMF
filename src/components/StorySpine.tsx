import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion/gsapSetup";

/**
 * A quiet narrative thread: a hairline that draws itself down the page
 * as the visitor scrolls, with a glowing point travelling along it.
 * Decorative only (aria-hidden), desktop-only, disabled under reduced motion.
 */
export default function StorySpine() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    const dot = dotRef.current;
    if (!root || !line || !dot || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const travel = () =>
        Math.max(0, line.offsetHeight - dot.offsetHeight) - 8;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.parentElement ?? root,
            start: "top 55%",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
          defaults: { ease: "none" },
        })
        .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 1 }, 0)
        .fromTo(dot, { y: 0 }, { y: travel, duration: 1 }, 0);
    }, root);

    return () => ctx.revert();
  }, []);

  if (prefersReducedMotion()) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-8 left-8 z-30 hidden w-px lg:block"
    >
      <span
        ref={lineRef}
        className="absolute inset-0 origin-top bg-gradient-to-b from-accent/50 via-accent/25 to-fuchsia-300/40"
        style={{ transform: "scaleY(0)" }}
      />
      <span
        ref={dotRef}
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent"
        style={{
          boxShadow: "0 0 18px rgba(139, 92, 246, 0.75)",
        }}
      />
    </div>
  );
}
