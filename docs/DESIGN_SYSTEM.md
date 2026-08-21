# Design System

Extracted from Figma file `Smlz5HrtfbCIu2jNQY7cFZ`.

Every value below is marked **Verified** (read via `get_design_context`, exact)
or **Inferred** (derived from metadata and the surrounding system). Inferred
values are a working assumption, not the design. Correct them when the owning
node gets read.

---

## Colour

| Token           | Value                   | Tailwind     | Status                                               |
| --------------- | ----------------------- | ------------ | ---------------------------------------------------- |
| Accent          | `#6A0DAD`               | `accent`     | Verified — bound Figma variable                      |
| Primary / white | `#FFFFFF`               | `white`      | Verified — bound Figma variable                      |
| Ink             | `#1E1E1E`               | `ink`        | Verified — hero background                           |
| Nav tint        | `rgba(246,250,255,0.8)` | `nav-tint`   | Verified — nav bar                                   |
| Nav border      | `rgba(190,201,191,0.3)` | `nav-border` | Verified — nav bottom border                         |
| Heading         | `#141D23`               | `heading`    | Verified — desktop hero H1 (a blue-black, NOT `ink`) |
| Body grey       | `#5F5E5E`               | `body-muted` | Verified — desktop lead paragraph                    |
| Image panel     | `#ECF5FE`               | `panel`      | Verified — desktop hero image background             |

**Important:** headings on a light background are `#141D23`, not `ink`
(`#1E1E1E`). `ink` is the hero _background_ fill. The mobile read couldn't
reveal this because the mobile hero heading is white over an image. Use
`text-heading` for dark-on-light headings.

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

The type scale is **responsive** — desktop is not a scaled-up mobile. Build
mobile-first and step up at the `lg` breakpoint (1024px). Both columns below are
the value at that breakpoint.

| Role           | Family               | Mobile (base) | Desktop (`lg:`) | Tracking                       | Status                                |
| -------------- | -------------------- | ------------- | --------------- | ------------------------------ | ------------------------------------- |
| `text-h1`      | Playfair Bold        | 44 / 52       | 72 / 84         | mob `-0.44px` · desk `-1.44px` | Verified both                         |
| `text-h2`      | Playfair Bold        | 32 / 40       | ~56 / 64        | `-0.32px`                      | mob Verified · desk Inferred          |
| `text-h3`      | Playfair Bold        | 28 / 36       | ~40             | —                              | Inferred                              |
| `text-h4`      | Playfair Bold        | 20 / 28       | 20 / 28         | —                              | Inferred                              |
| `text-stat`    | Playfair Bold        | 36 / 44       | ~96             | —                              | mob Inferred · desk from Impact block |
| `text-lead`    | Public Sans Regular  | 16 / 24       | 20 / 32         | —                              | Verified — hero lead paragraph        |
| `text-body`    | Public Sans Regular  | 16 / 24       | 16 / 24         | —                              | Verified                              |
| `text-small`   | Public Sans          | 14 / 20       | 14 / 20         | —                              | Verified                              |
| `text-eyebrow` | Public Sans Semibold | 14 / 20       | 14 / 20         | `2.8px`                        | Verified                              |

Notes:

- **H1** is fully verified at both ends. The jump is large (44→72); it is real,
  not a guess.
- **`text-lead`** is new — the hero's intro paragraph is 20/32 on desktop,
  distinct from `text-body`. Colour `body-muted` (`#5F5E5E`).
- Desktop h2/h3/stat sizes are read from frame heights, not a `get_design_context`
  call yet. Treat the `~` values as Inferred and confirm per section.
- `.h1-display` etc. must carry the `lg:` step internally so callers don't repeat it.

### Eyebrow

The design's most consistent signature — it opens nearly every section.
Uppercase, semibold, wide tracking, accent colour.

Use the `.eyebrow` class. Write the label in sentence case in JSX and let CSS
uppercase it, so screen readers don't read it as an initialism.

---

## Spacing

Two verified grids:

|         | Frame | Side margin | Content column | Gutter      |
| ------- | ----- | ----------- | -------------- | ----------- |
| Mobile  | 390   | 24          | 342            | —           |
| Desktop | 1280  | 64          | 1152           | 32 (12-col) |

`.container-page` handles the outer gutter (24px mobile). On desktop the design
uses a **12-column grid** with a 32px gutter inside the 1152px column — the hero
is a 6/6 split, Blog is an 8-col grid plus a 240px sidebar. Reach for
`lg:grid lg:grid-cols-12 lg:gap-8` inside `.container-page` for those layouts.

Section rhythm: desktop sections open with 120px top padding consistently
(verified across Impact, Programs, About). Mobile is 60–96px. The 120px desktop
figure is solid; the mobile range is still Inferred.

---

## Component classes

Defined in `src/index.css` under `@layer components`. Prefer these over
assembling utilities inline — that's what keeps sections consistent.

| Class             | Purpose                                        | Status   |
| ----------------- | ---------------------------------------------- | -------- |
| `.container-page` | Page gutter and max width                      | Inferred |
| `.eyebrow`        | Section label                                  | Verified |
| `.h1-display`     | Page title                                     | Verified |
| `.h2-display`     | Section title                                  | Inferred |
| `.btn-solid`      | Primary button — accent fill, white text       | Verified |
| `.btn-outline`    | Secondary — white fill, accent border and text | Verified |

Button geometry is verified from the hero: solid is 40px horizontal padding with
16.5/17.5px vertical; outline is 41px/17px, the 1px difference absorbing its
border so both buttons match height. Don't "tidy" that asymmetry away.

Buttons have **no border radius** anywhere in the design. Keep it that way.

---

## Known gaps

- Desktop h2/h3/stat sizes read from frame heights, not `get_design_context`.
  Confirm per section.
- Footer typography and colour still unextracted. Desktop footer is node
  `208:3105` (544px tall), mobile is `189:918` (946px). Both pending.
- No hover, focus, active, or disabled states are specified in the design.
  Current hovers (`opacity-90`, colour inversion) are invented. Flag before
  treating them as final.
- No dark mode in the design. Don't build one.
- **Nav height is inconsistent in the design itself** — desktop frames show it
  at 80px on some pages, 104/105px on others. This is a design inconsistency, not
  a spec. Standardize on one (recommend 104px desktop / 79px mobile) and flag it;
  do not faithfully reproduce the variance.
- Tablet (`md`, 768px) has no frame in either canvas. Only mobile (390) and
  desktop (1280) are designed. `md` behaviour is interpolation — mark it Inferred
  wherever you introduce it.
