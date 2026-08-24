// Real assets exported to /public/assets (user-supplied, Aug 2026).
export const ASSETS = {
  logo: "/assets/logo.jpg",
  homeHero: "/assets/hero.jpg",
  aboutHero: "/assets/about-hero.jpg",
  donateHero: "/assets/donate-hero.jpg",
  eventsHero: "/assets/events-hero.jpg",
  getInvolvedHero: "/assets/get-involved-hero.jpg",
  scholarshipHero: "/assets/scholarship-hero.jpg",
  scholarship: "/assets/scholarship.jpg",
  techSpark: "/assets/tech-spark.jpg",
  techSparkBanner: "/assets/tech-spark-banner.jpg",
  catalystEffect: "/assets/catalyst-effect.jpg",
  lifeAtTheSpark: [
    "/assets/life-at-the-spark-1.jpg",
    "/assets/life-at-the-spark-2.jpg",
    "/assets/life-at-the-spark-3.jpg",
    "/assets/life-at-the-spark-4.jpg",
  ],
  boardPortrait: "",
} as const;

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
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

// NOTE: program subpages (/programs/scholarship, /programs/tech-spark) are
// not built yet; cards link to /programs until those routes exist.
export const PROGRAMS = [
  {
    title: "TMF Scholarships",
    description:
      "Academic excellence shouldn’t be limited by financial boundaries. We provide full-ride scholarships to the world’s leading institutions.",
    href: "/programs",
    image: "/assets/scholarship.jpg",
  },
  {
    title: "Tech Spark",
    description:
      "Equipping the next generation of engineers with high-performance computing access, mentorship, and industry-standard labs.",
    href: "/programs",
    image: "/assets/tech-spark.jpg",
  },
] as const;

export const ALUMNI = [
  { name: "Chinonso N. Tom", image: "/assets/alumni/chinonso-n-tom.jpg" },
  {
    name: "Samuel O. Oghenekaro",
    image: "/assets/alumni/samuel-o-oghenekaro.jpg",
  },
  {
    name: "Thankgod U. Ugochukwu",
    image: "/assets/alumni/thankgod-u-ugochukwu.jpg",
  },
  { name: "Jumbo A. Mirabel", image: "/assets/alumni/jumbo-a-mirabel.jpg" },
  { name: "Ugo D. Ebipadou", image: "/assets/alumni/ugo-d-ebipadou.jpg" },
  {
    name: "Innocent A. Emmanuel",
    image: "/assets/alumni/innocent-a-emmanuel.jpg",
  },
  {
    name: "Ambaiowei P. Solomon",
    image: "/assets/alumni/ambaiowei-p-solomon.jpg",
  },
  { name: "Samuel I. Daniel", image: "/assets/alumni/samuel-i-daniel.jpg" },
  { name: "Koki N. Saviour", image: "/assets/alumni/koki-n-saviour.jpg" },
  { name: "Obulor T. Destiny", image: "/assets/alumni/obulor-t-destiny.jpg" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
] as const;

// TODO(design): social/legal destinations unknown — rendered as disabled
// placeholders until real URLs are supplied.
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

// Displayed newest-first on About (user-directed, Aug 2026 — Figma order was ascending).
export const MILESTONES = [2026, 2025, 2024, 2023] as const;

export const BOARD_MEMBER = {
  name: "Omotoyosi E. Oluwatosin",
  role: "Executive Director",
  quote:
    "True leadership isn&rsquo;t about being in the spotlight; it&rsquo;s about building the stage for others to shine upon.",
} as const;
