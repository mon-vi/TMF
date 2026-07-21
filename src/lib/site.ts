// Figma MCP asset URLs — extracted 21 Jul 2026, expire ~28 Jul 2026
export const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/fe892f45-a432-4636-93b0-2aa07513507e",
  menuIcon: "https://www.figma.com/api/mcp/asset/811e57ff-9893-4106-ab10-04569b788c98",
  homeHero: "https://www.figma.com/api/mcp/asset/a0bd6469-5874-4139-a326-e4adeb2b390a",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;
