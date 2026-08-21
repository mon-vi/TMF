/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6A0DAD",
        ink: "#1E1E1E",
        heading: "#141D23", // Verified (docs) — blue-black, NOT ink
        "body-muted": "#5F5E5E", // Verified (docs) — lead paragraph
        panel: "#ECF5FE", // Verified (docs) — image panel / section wash
        "nav-tint": "rgba(246,250,255,0.8)",
        "nav-border": "rgba(190,201,191,0.3)",
        "card-divider": "#6F7A71", // Verified (node) — Programs card hairline divider
        prose: "#3F4942", // Verified (node) — systemic body-grey (#3F4942) used in Donate, About Story, Board quote
        "surface-light": "#F6FAFF", // Verified (node) — nav-tint at full opacity; Mission/Vision + Board bg
        mint: "#9CF5C1", // Verified (node) — About hero eyebrow, not accent; hero-specific
        "preset-border": "#BEC9BF", // Verified (node) — Donate preset card borders (full-opacity nav-border green)
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Public Sans"', "sans-serif"],
      },
      fontSize: {
        h1: ["44px", { lineHeight: "52px", letterSpacing: "-0.44px" }],
        "h1-lg": ["72px", { lineHeight: "84px", letterSpacing: "-1.44px" }], // Verified (docs)
        h2: ["32px", { lineHeight: "40px", letterSpacing: "-0.32px" }],
        "h2-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.48px" }], // Verified (node) — confirmed on 208:3061, 208:3099
        h3: ["28px", { lineHeight: "36px" }],
        "h3-lg": ["40px", { lineHeight: "48px" }], // Estimated (frame height)
        h4: ["20px", { lineHeight: "28px" }],
        stat: ["36px", { lineHeight: "44px" }],
        "stat-lg": ["72px", { lineHeight: "84px", letterSpacing: "-1.44px" }], // Verified (node) — same dimensions as h1-lg
        "metric-eyebrow": [
          "20px",
          { lineHeight: "28px", letterSpacing: "1.4px" },
        ], // Verified (node) — Impact Metrics stat labels
        "body-relaxed": ["16px", { lineHeight: "26px" }], // Verified (node) — Programs card body text
        cta: ["18px", { lineHeight: "24px", letterSpacing: "1.8px" }], // Verified (node) — Final CTA button text
        "alumni-name": ["24px", { lineHeight: "32px" }], // Verified (node) — mobile alumni card name
        "alumni-name-lg": ["32px", { lineHeight: "40px" }], // Verified (node) — desktop alumni card name
        lead: ["16px", { lineHeight: "24px" }], // Verified (docs)
        "lead-lg": ["20px", { lineHeight: "32px" }], // Verified (docs)
        body: ["16px", { lineHeight: "24px" }],
        small: ["14px", { lineHeight: "20px" }],
        eyebrow: ["14px", { lineHeight: "20px", letterSpacing: "2.8px" }],
        "timeline-year": ["64px", { lineHeight: "64px" }], // Verified (node) — Timeline year display, desktop
        "timeline-year-mobile": ["40px", { lineHeight: "48px" }], // Verified (node) — Timeline year display, mobile
      },
      backgroundImage: {
        "hero-scrim":
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
        "alumni-overlay":
          "linear-gradient(to bottom, rgba(33,22,13,0.9), rgba(135,92,54,0.9))",
      },
      boxShadow: {
        card: "0px 0px 2px rgba(0,0,0,0.25)", // Verified (node) — Timeline card shadow
      },
    },
  },
  plugins: [],
};
