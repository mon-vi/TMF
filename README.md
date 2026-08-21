# TalentMakers Foundation

Marketing site for TalentMakers Foundation (TMF), a tech-education nonprofit.

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
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

| Command                | What it does                         |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start Vite dev server with HMR       |
| `npm run build`        | Type-check then production build     |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint across the project        |
| `npm run format`       | Format everything with Prettier      |
| `npm run format:check` | Verify formatting without writing    |
| `npm run typecheck`    | TypeScript project build (`tsc -b`)  |
| `npm test`             | Run unit/component tests once        |
| `npm run test:watch`   | Run tests in watch mode              |
| `npm run test:e2e`     | Run Playwright E2E tests             |

## Testing

| Layer          | Tool                     | Location                           | What's covered                                                                                   |
| -------------- | ------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| Unit/component | Vitest + Testing Library | `src/**/*.test.{ts,tsx}` colocated | Exchange-rate caching/fallback, count-up animation, Paystack integration                         |
| E2E            | Playwright               | `e2e/*.spec.ts`                    | Route smoke tests, navigation, donate-form validation — Chromium desktop + mobile 390px viewport |

E2E tests serve the production build (`vite preview`). Payment popups are never
triggered in tests; only client-side validation paths are exercised.

```bash
npx playwright install chromium   # first time only
npm test                          # fast feedback
npm run test:e2e                  # browser tests
```

CI runs on every PR to `main`: format check, lint, typecheck, unit tests, build,
then Playwright E2E. A PR checklist template covers design provenance and the
accessibility floor.

## Project structure

```
src/
  components/         Shared across pages (Navbar, Footer)
  sections/<page>/    One file per Figma section frame
  pages/              Route-level composition only
  lib/                Data, constants, asset references
```

## Tech stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | React 19                                 |
| Language   | TypeScript ~6.0                          |
| Build      | Vite 8                                   |
| Styling    | Tailwind CSS 3 (design tokens in config) |
| Routing    | react-router-dom v6                      |
| Linting    | ESLint + TypeScript-aware rules          |
| Formatting | Prettier                                 |
| Unit tests | Vitest + Testing Library                 |
| E2E        | Playwright                               |

## Working with the design

This site is a faithful implementation of a Figma design — not a design exercise.
Read `AGENTS.md` for the full workflow, then consult:

| Doc                     | When                                  |
| ----------------------- | ------------------------------------- |
| `docs/DESIGN_SYSTEM.md` | Any styling work                      |
| `docs/FIGMA_MAP.md`     | Before implementing a page or section |
| `docs/CONVENTIONS.md`   | Before creating files or components   |

**Never hardcode a colour, font size, or font family.** Every visual value comes
from `tailwind.config.js` or the component classes in `src/index.css`.

## Verification before pushing

```bash
npm run lint && npm run format:check && npx tsc -b && npm test && npm run build
```

All must pass with zero errors. CI runs the same gates on every PR, plus Playwright E2E.
