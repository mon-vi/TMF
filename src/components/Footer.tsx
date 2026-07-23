import { Link } from "react-router-dom";
import { ASSETS, FOOTER_QUICK_LINKS, FOOTER_CONNECT, FOOTER_LEGAL, FOOTER_DESCRIPTION } from "@/lib/site";

/*
  TODO(design): exact footer type sizes/spacing NOT node-verified —
  confirm on nodes 208:3105 (desktop) / 189:918 (mobile).
  Provenance: Inferred.
  NOTE: design hardcodes © 2024; using dynamic year instead.
*/

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-panel" data-node-id="189:918">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Logo + description */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="TalentMakers Foundation home">
              <img
                src={ASSETS.logo}
                alt="TalentMakers Foundation"
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-small text-body-muted max-w-xs">
              {FOOTER_DESCRIPTION}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="eyebrow mb-4">Quick Links</p>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-small text-ink/70 transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-3">
              {FOOTER_CONNECT.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-small text-ink/70 transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <p className="eyebrow mb-4">Legal</p>
            <ul className="space-y-3">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-small text-ink/70 transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-nav-border">
        <div className="container-page py-4 text-center lg:text-left">
          <p className="text-small text-ink/50">
            &copy; {currentYear} TalentMakers Foundation. Empowering future leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
