# Design System

Two sources feed this system, unified on one token set:

1. **Figma file** `Smlz5HrtfbCIu2jNQY7cFZ` — Home, About, Donate (sections/
   architecture, node-verified values).
2. **Brand UI Design System** (`docs/TMF_Brand_UI_Design_System.md`) — Contact,
   Events, Get Involved, Programs (page-file composition).
   Reverse-engineered from approved screenshots; its palette is canonical.

Every value is marked **Verified** (read exactly from its source) or
**Inferred** (derived; a working assumption, corrected when re-read).

---

## Ruling: canonical palette (2026-08)

The Figma accent was `#6A0DAD`; the brand-doc screenshots use `#6B21A8`
(Tailwind purple-800). **The brand-doc palette wins.** `accent` in
`tailwind.config.js` is `#6B21A8`; every `text-accent` / `bg-accent` consumer
follows automatically. Do not reintroduce `#6A0DAD` anywhere — and do not
hardcode `#6B21A8` either; always go through the token.

## Colour

| Token           | Value                   | Tailwind     | Status                                               |
| --------------- | ----------------------- | ------------ | ---------------------------------------------------- |
| Accent          | `#6B21A8`               | `accent`     | Ruling 2026-08 — brand-doc primary                   |
| Primary / white | `#FFFFFF`               | `white`      | Verified — bound Figma variable                      |
| Ink             | `#1E1E1E`               | `ink`        | Verified — hero background                           |
| Nav tint        | `rgba(246,250,255,0.8)` | `nav-tint`   | Verified — nav bar                                   |
| Nav border      | `rgba(190,201,191,0.3)` | `nav-border` | Verified — nav bottom border                         |
| Heading         | `#141D23`               | `heading`    | Verified — desktop hero H1 (a blue-black, NOT `ink`) |
| Body grey       | `#5F5E5E`               | `body-muted` | Verified — desktop lead paragraph                    |
| Image panel     | `#ECF5FE`               | `panel`      | Verified — desktop hero image background             |

### Brand-doc variables (`tmf.*` namespace)

CSS variables defined in `src/index.css`, exposed via `tailwind.config.js`:
`tmf-primary #6b21a8`, `tmf-primary-hover #581c87`, `tmf-secondary #b794f6`,
`tmf-page #f0f4f8`, `tmf-surface #ffffff`, `tmf-text-primary #0f172a`,
`tmf-text-secondary #64748b`, `tmf-text-accent #805ad5`,
`tmf-text-muted #cbd5e1`, `tmf-line #e2e8f0`, `tmf-icon-wash #f3e8ff`.

Decorative gradient endpoints live as root constants: `--gradient-mid`
(`#8b5cf6`, violet-500) and `--gradient-end` (`#d946ef`, fuchsia-500) — used by
`.tmf-text-gradient`, the marquee wash, and glow effects. They are deliberately
not Tailwind tokens.

**Important:** headings on a light background are `#141D23` (`heading`), not
`ink` (`#1E1E1E`). `ink` is the hero _background_ fill. Use `text-heading` for
dark-on-light headings.

**Body text on dark**: `text-white/90`. **Body text on light**: `text-ink/70`
or `text-prose` (`#3F4942`, node-verified on Donate/About).

### Hero scrim

Verified. Bottom-to-top gradient over hero images, available as
`bg-hero-scrim`: `rgba(0,0,0,0.8) → 0.2 → 0`. Reuse it — every Figma page hero
uses the same treatment.

---

## Typography

Two families: Playfair Display (display), Public Sans (everything else).
Loaded from Google Fonts in `index.html`. (Inter was removed 2026-08 — the
`font-ui` family had no consumers.)

The scale is **responsive** — build mobile-first, step up at `lg` (1024px).

| Role           | Family               | Mobile (base) | Desktop (`lg:`) | Tracking        | Status                        |
| -------------- | -------------------- | ------------- | --------------- | --------------- | ----------------------------- |
| `text-h1`      | Playfair Bold        | 44 / 52       | 72 / 84         | -0.44 / -1.44px | Verified both                 |
| `text-h2`      | Playfair Bold        | 32 / 40       | 48 / 56         | -0.32px         | desk Verified (208:3061+)     |
| `text-h3`      | Playfair Bold        | 28 / 36       | 40 / 48         | —               | desk Estimated (frame height) |
| `text-h4`      | Playfair Bold        | 20 / 28       | 20 / 28         | —               | Inferred                      |
| `text-stat`    | Playfair Bold        | 36 / 44       | 72 / 84         | -1.44px desk    | desk Verified (= h1-lg)       |
| `text-lead`    | Public Sans Regular  | 16 / 24       | 20 / 32         | —               | Verified                      |
| `text-body`    | Public Sans Regular  | 16 / 24       | 16 / 24         | —               | Verified                      |
| `text-small`   | Public Sans          | 14 / 20       | 14 / 20         | —               | Verified                      |
| `text-eyebrow` | Public Sans Semibold | 14 / 20       | 14 / 20         | 2.8px           | Verified                      |

Plus verified utility roles in config: `metric-eyebrow` (20/28 + 1.4px),
`body-relaxed` (16/26), `cta` (18/24 + 1.8px), `alumni-name(-lg)`,
`timeline-year(-mobile)`.

### Letter-spacing tokens (added 2026-08)

Recurring uppercase micro-label tracking collapsed into four tokens:

| Token              | Value | Usage                          |
| ------------------ | ----- | ------------------------------ |
| `tracking-chip`    | 2.8px | Hero chips, glass-chip badges  |
| `tracking-caption` | 2px   | Captions over imagery          |
| `tracking-label`   | 1.4px | Card micro-labels, arrow links |
| `tracking-field`   | 0.7px | Form labels, quiet buttons     |

Do not introduce new arbitrary `tracking-[Npx]` values — extend this table if a
genuinely new value is needed, and say so.

### Eyebrow

The design's most consistent signature — uppercase, semibold, wide tracking,
accent colour. Use the `.eyebrow` class and write labels in sentence case so
screen readers don't read them as initialisms.

---

## Spacing

|         | Frame | Side margin | Content column | Gutter      |
| ------- | ----- | ----------- | -------------- | ----------- |
| Mobile  | 390   | 24          | 342            | —           |
| Desktop | 1280  | 64          | 1152           | 32 (12-col) |

`.container-page` handles the gutter and caps content at **1200px**
(`max-w-[1200px]`). Desktop uses a 12-column grid with a 32px gutter inside
it: reach for `lg:grid lg:grid-cols-12 lg:gap-8`.

Section rhythm: desktop sections open with ~120px top padding; mobile 60–96px.

### Radius tokens (ruled 2026-08)

**Buttons are pill-shaped everywhere** (`border-radius: 9999px` via the button
classes). The earlier "no border radius anywhere" rule is reversed — shipped
pages all use pills and that is now canonical.

Panels/cards use these deliberate tokens:

| Token             | Value | Usage                              |
| ----------------- | ----- | ---------------------------------- |
| `rounded-card-xl` | 28px  | Glass panels, media frames         |
| `rounded-card-lg` | 22px  | Inner images inside card-xl frames |
| `rounded-image`   | 24px  | Standalone image cards             |
| `rounded-card-sm` | 18px  | Nested imagery inside 24px cards   |

Existing tokens `rounded-ui` (0), `rounded-icon` (8px) stay as-is.

---

## Component classes

Defined in `src/index.css` under `@layer components`. Prefer these over
assembling utilities inline.

| Class                 | Purpose                                    | Status          |
| --------------------- | ------------------------------------------ | --------------- |
| `.container-page`     | Page gutter + 1200px max width             | Inferred        |
| `.eyebrow`            | Section label                              | Verified        |
| `.h1-display`         | Page title (carries `lg:` step)            | Verified        |
| `.h2-display`         | Section title (carries `lg:` step)         | Inferred        |
| `.lead`               | Lead paragraph                             | Verified        |
| `.stat-display`       | Metric number display                      | Inferred        |
| `.btn-solid`          | Primary button — accent fill, white text   | Verified        |
| `.btn-outline`        | Secondary — white fill, accent border/text | Verified        |
| `.btn-donate`         | Donate form submit                         | Inferred        |
| `.btn-invert-solid`   | Primary on dark backgrounds                | Inferred        |
| `.btn-invert-outline` | Secondary on dark backgrounds              | Inferred        |
| `.btn-cta`            | Final CTA emphasis                         | Inferred        |
| `.metric-eyebrow`     | Impact stat label                          | Verified (node) |
| `.metric-caption`     | Impact stat caption                        | Verified (node) |

Button geometry is verified from the hero: solid is 40px horizontal padding
with 16.5/17.5px vertical; outline is 41px/17px, the 1px difference absorbing
its border so both match height. Don't "tidy" that asymmetry away.

Premium-page effects (glass panels, mesh/grid surfaces, orbs, reveals,
marquee, milestone rail) live in `src/styles/tmf-premium-pages.css` scoped
under `.tmf-page-scope`. All brand colours there derive from the root CSS
variables — no raw hexes.

---

## Known gaps

- Footer type sizes/spacing still not node-verified (`TODO(design)` in
  `Footer.tsx`; nodes `208:3105` desktop / `189:918` mobile).
- No hover/focus/active/disabled states are specified by either source.
  Current hovers are invented; flag before treating them as final.
- No dark mode. Don't build one.
- **Nav height is inconsistent in the Figma itself** (80px vs 104/105px).
  Standardized on 104px desktop / 79px mobile in code.
- Tablet (`md`, 768px) has no frame anywhere. `md` behaviour is interpolation.
