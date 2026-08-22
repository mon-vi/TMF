import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "./gsapSetup";
import { getLenis } from "./lenisInstance";

/**
 * Resets scroll position on route change (BrowserRouter does not do this
 * itself) and refreshes ScrollTrigger so the incoming page's triggers
 * measure against its real layout.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
