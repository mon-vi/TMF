# TalentMakers Foundation

Marketing site for TalentMakers Foundation (TMF), a tech-education nonprofit.

## Prerequisites

- **Node.js** 18+
- **npm** 9+

## Setup

```bash
git clone https://github.com/mon-vi/TMF.git
cd TMF
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check then production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
src/
  components/         Shared across pages (Navbar, Footer)
  sections/<page>/    One file per Figma section frame
  pages/              Route-level composition only
  lib/                Data, constants, asset references
```

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript ~6.0 |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 (design tokens in config) |
| Routing | react-router-dom v6 |
| Linting | ESLint + TypeScript-aware rules |

## Working with the design

This site is a faithful implementation of a Figma design — not a design exercise.
Read `AGENTS.md` for the full workflow, then consult:

| Doc | When |
|---|---|
| `docs/DESIGN_SYSTEM.md` | Any styling work |
| `docs/FIGMA_MAP.md` | Before implementing a page or section |
| `docs/CONVENTIONS.md` | Before creating files or components |

**Never hardcode a colour, font size, or font family.** Every visual value comes
from `tailwind.config.js` or the component classes in `src/index.css`.

## Verification before pushing

```bash
npx tsc --noEmit && npm run build
```

Both must pass with zero errors.
