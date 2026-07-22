// Figma MCP asset URLs — extracted 21 Jul 2026, expire ~28 Jul 2026
export const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/fe892f45-a432-4636-93b0-2aa07513507e",
  menuIcon:
    "https://www.figma.com/api/mcp/asset/811e57ff-9893-4106-ab10-04569b788c98",
  homeHero:
    "https://www.figma.com/api/mcp/asset/a0bd6469-5874-4139-a326-e4adeb2b390a",
  // TODO(assets): program card images — export from Figma, add to /public/assets
  // TODO(assets): alumni portrait images — export from Figma, add to /public/assets
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const METRICS = [
  {
    label: "Community Impact",
    number: "120+",
    caption: "Beneficiaries",
  },
  {
    label: "Education Outreach",
    number: "50+",
    caption: "Schools Reached",
  },
  {
    label: "Scholarship Program",
    number: "10+",
    caption: "Active Scholars",
  },
] as const;

export const PROGRAMS = [
  {
    title: "TMF Scholarships",
    description:
      "Academic excellence shouldn&rsquo;t be limited by financial boundaries. We provide full-ride scholarships to the world&rsquo;s leading institutions.",
    href: "/programs/scholarship",
  },
  {
    title: "Tech Spark",
    description:
      "Equipping the next generation of engineers with high-performance computing access, mentorship, and industry-standard labs.",
    href: "/programs/tech-spark",
  },
] as const;

export const ALUMNI = [
  "Chinonso N. Tom",
  "Samuel O. Oghenekaro",
  "Thankgod U. Ugochukwu",
  "Jumbo A. Mirabel",
  "Ugo D. Ebipadou",
  "Innocent A. Emmanuel",
  "Ambaiowei P. Solomon",
  "Samuel I. Daniel",
  "Koki N. Saviour",
  "Obulor T. Destiny",
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_CONNECT = [
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
] as const;

export const FOOTER_DESCRIPTION =
  "Empowering future leaders through strategic philanthropy and radical inclusion.";
