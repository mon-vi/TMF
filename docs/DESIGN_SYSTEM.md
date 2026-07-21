# Design System

Extracted from Figma file `Smlz5HrtfbCIu2jNQY7cFZ`.

Every value below is marked **Verified** (read via `get_design_context`, exact)
or **Inferred** (derived from metadata and the surrounding system). Inferred
values are a working assumption, not the design. Correct them when the owning
node gets read.

---

## Colour

| Token | Value | Tailwind | Status |
|---|---|---|---|
| Accent | `#6A0DAD` | `accent` | Verified — bound Figma variable |
| Primary / white | `#FFFFFF` | `white` | Verified — bound Figma variable |
| Ink | `#1E1E1E` | `ink` | Verified — hero background |
| Nav tint | `rgba(246,250,255,0.8)` | `nav-tint` | Verified — nav bar |
| Nav border | `rgba(190,201,191,0.3)` | `nav-border` | Verified — nav bottom border |

Only two colours are bound as Figma variables. Everything else in the file is a
raw value, so colours must be read per section rather than assumed.

**Body text on dark**: `text-white/90` (verified, hero paragraph).
**Body text on light**: `text-ink/70` (inferred — verify per section).

### Hero scrim

Verified. Bottom-to-top gradient over the hero image:

```
linear-gradient(to top,
  rgba(0,0,0,0.8) 0%,
  rgba(0,0,0,0.2) 50%,
  rgba(0,0,0,0) 100%)
```

Available as `bg-hero-scrim`. Reuse it — every page hero in the design uses the
same image-plus-scrim treatment.

---

## Typography

Two families. Playfair Display for display, Public Sans for everything else.
Loaded from Google Fonts in `index.html`.

| Role | Family | Size / line height | Tracking | Status |
|---|---|---|---|---|
| `text-h1` | Playfair Display Bold | 44 / 52 | `-0.44px` | Verified |
| `text-h2` | Playfair Display Bold | 32 / 40 | `-0.32px` | Inferred |
| `text-h3` | Playfair Display Bold | 28 / 36 | — | Inferred |
| `text-h4` | Playfair Display Bold | 20 / 28 | — | Inferred |
| `text-stat` | Playfair Display Bold | 36 / 44 | — | Inferred |
| `text-body` | Public Sans Regular | 16 / 24 | — | Verified |
| `text-small` | Public Sans | 14 / 20 | — | Verified |
| `text-eyebrow` | Public Sans Semibold | 14 / 20 | `2.8px` | Verified |

The h2/h3/h4 sizes are the weakest part of this table. Mobile frames show
heading blocks at 40px, 56px, and 104px tall, which implies more than three
display sizes. Read the owning node before relying on them.

### Eyebrow

The design's most consistent signature — it opens nearly every section.
Uppercase, semibold, wide tracking, accent colour.

Use the `.eyebrow` class. Write the label in sentence case in JSX and let CSS
uppercase it, so screen readers don't read it as an initialism.

---

## Spacing

Mobile frames are 390px wide with a 24px gutter, giving a 342px content column.
`.container-page` implements this and caps at 1200px on larger screens.

Observed section rhythm (mobile): 60–96px top padding, 80px between major
blocks. Treat as inferred.

---

## Component classes

Defined in `src/index.css` under `@layer components`. Prefer these over
assembling utilities inline — that's what keeps sections consistent.

| Class | Purpose | Status |
|---|---|---|
| `.container-page` | Page gutter and max width | Inferred |
| `.eyebrow` | Section label | Verified |
| `.h1-display` | Page title | Verified |
| `.h2-display` | Section title | Inferred |
| `.btn-solid` | Primary button — accent fill, white text | Verified |
| `.btn-outline` | Secondary — white fill, accent border and text | Verified |

Button geometry is verified from the hero: solid is 40px horizontal padding with
16.5/17.5px vertical; outline is 41px/17px, the 1px difference absorbing its
border so both buttons match height. Don't "tidy" that asymmetry away.

Buttons have **no border radius** anywhere in the design. Keep it that way.

---

## Known gaps

- Heading scale above h1 is inferred throughout.
- Footer typography and colour are entirely unextracted (node `189:918`).
- No hover, focus, active, or disabled states are specified in the design.
  Current hovers (`opacity-90`, colour inversion) are invented. Flag before
  treating them as final.
- No dark mode in the design. Don't build one.
- Desktop type scale unknown — canvas `1:3` not yet read.
