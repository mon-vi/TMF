import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion/gsapSetup";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  if (prefersReducedMotion()) return null;

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
