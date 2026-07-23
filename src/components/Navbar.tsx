import { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { ASSETS, NAV_LINKS } from "@/lib/site";

/*
  NOTE: Nav height is inconsistent across design frames (80px on some, 104/105px
  on others). Standardizing on 104px desktop / 79px mobile per team decision.
*/

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
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-nav-border bg-nav-tint backdrop-blur-md"
      data-node-id="189:890"
    >
      <nav className="container-page flex items-center justify-between h-[79px] lg:h-[104px]">
        <Link to="/" aria-label="TalentMakers Foundation home">
          <img src={ASSETS.logo} alt="TalentMakers Foundation" className="h-10 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-small transition-opacity hover:opacity-70 ${
                  isActive ? "font-semibold text-accent" : "text-ink/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="btn-solid text-small ml-4"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <img src={ASSETS.menuIcon} alt="" aria-hidden="true" className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
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
              className="absolute top-6 right-6 text-ink text-body font-semibold"
            >
              Close
            </button>

            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-h4 font-medium transition-opacity hover:opacity-70 ${
                    isActive ? "text-accent font-semibold" : "text-heading"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/donate"
              onClick={closeMenu}
              className="btn-solid mt-4"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
