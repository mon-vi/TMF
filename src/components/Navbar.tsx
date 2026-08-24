import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { ASSETS, NAV_LINKS } from "@/lib/site";
import { getLenis } from "@/lib/motion/lenisInstance";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const lenis = getLenis();
    if (menuOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setNavHidden(!menuOpen && y > lastY && y > 140);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    // Move focus into the dialog on open; restore it to the trigger on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button, a[href]")?.focus();
    return () => previouslyFocused?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      // Trap Tab focus inside the navigation dialog while it is open.
      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>("a[href], button"),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav-tint backdrop-blur-md transition-transform duration-300 ${
          navHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="container-page flex h-[79px] items-center justify-between lg:h-[104px]">
          <Link to="/" viewTransition aria-label="TalentMakers Foundation home">
            <img
              src={ASSETS.logo}
              alt="TalentMakers Foundation"
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                viewTransition
                to={link.href}
                className={({ isActive }) =>
                  `text-small transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-ink/80"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-involved"
              viewTransition
              className={({ isActive }) =>
                `text-small transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-ink/80"}`
              }
            >
              Get Involved
            </NavLink>
            <Link
              to="/donate"
              viewTransition
              className="btn-solid ml-4 text-small"
            >
              Donate
            </Link>
          </div>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-6 w-6 text-ink" aria-hidden="true" />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="fixed inset-0 bg-nav-tint backdrop-blur-md"
            onClick={closeMenu}
          />
          <div className="fixed inset-0 flex flex-col items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="absolute right-6 top-6 text-body font-semibold text-ink"
            >
              Close
            </button>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                viewTransition
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-h4 font-medium transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-heading"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-involved"
              viewTransition
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-h4 font-medium transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-heading"}`
              }
            >
              Get Involved
            </NavLink>
            <Link
              to="/donate"
              viewTransition
              onClick={closeMenu}
              className="btn-solid mt-4"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
