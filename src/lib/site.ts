// Figma MCP asset URLs — extracted 21 Jul 2026, expire ~28 Jul 2026
export const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/fe892f45-a432-4636-93b0-2aa07513507e",
  menuIcon:
    "https://www.figma.com/api/mcp/asset/811e57ff-9893-4106-ab10-04569b788c98",
  homeHero:
    "https://www.figma.com/api/mcp/asset/a0bd6469-5874-4139-a326-e4adeb2b390a",
  defaultProgram:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  donateHero: "",
  aboutHero: "",
  boardPortrait: "",
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
      "Academic excellence shouldn’t be limited by financial boundaries. We provide full-ride scholarships to the world’s leading institutions.",
    href: "/programs/scholarship",
    image: "",
  },
  {
    title: "Tech Spark",
    description:
      "Equipping the next generation of engineers with high-performance computing access, mentorship, and industry-standard labs.",
    href: "/programs/tech-spark",
    image: "",
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

export const DONATE_PRESETS = [
  { value: 50, label: "Essential Learning Tools" },
  { value: 250, label: "One Month of Mentorship" },
  { value: 1000, label: "Full Program Scholarship" },
] as const;

export const STORY_CONTENT = {
  heading: "Our Story",
  paragraphs: [
    "What began as a private philanthropic initiative has evolved into a global powerhouse for talent identification and development. We operate at the intersection of prestige and purpose, identifying high-potential individuals from underserved backgrounds and providing them with the social capital, mentorship, and resources required to lead the institutions of tomorrow.",
    "Our methodology is rooted in the belief that talent is universal, but opportunity is not. By dismantling systemic barriers and creating bridges to excellence, we aren&rsquo;t just changing individual lives&mdash;we are diversifying the global leadership pipeline.",
  ],
} as const;

export const MISSION_VISION = [
  {
    title: "Our Mission",
    body: "To empower a diverse generation of future leaders by providing the education, mentorship, and economic resources necessary to thrive in high-impact careers and drive societal progress.",
    icon: "target" as const,
  },
  {
    title: "Our Vision",
    body: "A world where the leadership of every major institution reflects the true diversity of human talent, fostering a more equitable and innovative global society.",
    icon: "eye" as const,
  },
] as const;

export const MILESTONES = [2023, 2024, 2025, 2026] as const;

export const BOARD_MEMBER = {
  name: "Omotoyosi E. Oluwatosin",
  role: "Executive Director",
  quote:
    "True leadership isn&rsquo;t about being in the spotlight; it&rsquo;s about building the stage for others to shine upon.",
} as const;
