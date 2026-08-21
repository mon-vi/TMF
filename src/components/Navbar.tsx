import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ASSETS, NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav-tint backdrop-blur-md">
        <nav className="container-page flex h-[79px] items-center justify-between lg:h-[104px]">
          <Link to="/" aria-label="TalentMakers Foundation home">
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
              className={({ isActive }) =>
                `text-small transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-ink/80"}`
              }
            >
              Get Involved
            </NavLink>
            <Link to="/donate" className="btn-solid ml-4 text-small">
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
            <img
              src={ASSETS.menuIcon}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <div
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
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-h4 font-medium transition-opacity hover:opacity-70 ${isActive ? "font-semibold text-accent" : "text-heading"}`
              }
            >
              Get Involved
            </NavLink>
            <Link to="/donate" onClick={closeMenu} className="btn-solid mt-4">
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
