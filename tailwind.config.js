/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6A0DAD",
        ink: "#1E1E1E",
        "nav-tint": "rgba(246,250,255,0.8)",
        "nav-border": "rgba(190,201,191,0.3)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Public Sans"', "sans-serif"],
      },
      fontSize: {
        h1: ["44px", { lineHeight: "52px", letterSpacing: "-0.44px" }],
        h2: ["32px", { lineHeight: "40px", letterSpacing: "-0.32px" }],
        h3: ["28px", { lineHeight: "36px" }],
        h4: ["20px", { lineHeight: "28px" }],
        stat: ["36px", { lineHeight: "44px" }],
        body: ["16px", { lineHeight: "24px" }],
        small: ["14px", { lineHeight: "20px" }],
        eyebrow: ["14px", { lineHeight: "20px", letterSpacing: "2.8px" }],
      },
      backgroundImage: {
        "hero-scrim":
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
      },
    },
  },
  plugins: [],
};
