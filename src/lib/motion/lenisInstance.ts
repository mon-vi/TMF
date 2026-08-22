import type Lenis from "lenis";

/**
 * Module-level handle on the single app-wide Lenis instance.
 * Null when the visitor prefers reduced motion (smooth scrolling off).
 */
let instance: Lenis | null = null;

export function getLenis(): Lenis | null {
  return instance;
}

export function setLenisInstance(next: Lenis | null): void {
  instance = next;
}
