import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsapSetup";
import { setLenisInstance } from "./lenisInstance";

/**
 * Boots Lenis smooth scrolling and drives it from GSAP's ticker so
 * ScrollTrigger stays perfectly in sync. Disabled entirely when the
 * visitor prefers reduced motion — the page then scrolls natively.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({ lerp: 0.11 });
    setLenisInstance(instance);

    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
}
