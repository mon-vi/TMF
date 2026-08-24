# Conventions

## Structure

```
src/
  components/       Shared across pages (Navbar, Footer, Reveal, Orb, ...)
  sections/<page>/  One file per design section (Figma-sourced pages)
  pages/            Route-level composition
  lib/              Data, constants, asset references
```

Two composition patterns coexist, by provenance:

- **Figma-sourced pages** (Home, About, Donate): `pages/*` composes sections
  from `sections/<page>/` and nothing else. No styling, no layout, no data.
  Each section carries `data-node-id`.
- **Brand-doc pages** (`Contact`, `EventsPage`, `GetInvolved`,
  `ProgramsPage`): built from `docs/TMF_Brand_UI_Design_System.md`, which has
  no Figma nodes. These compose in the page file from shared components
  (`Reveal`, `Orb`) and may hold local data arrays. Ruled acceptable 2026-08;
  do not refactor them into `sections/` retroactively.

Either way: if markup is duplicated across two files, extract a component.

## Component shape

```tsx
import { Link } from "react-router-dom";

const ITEMS = [/* content lifted from the design */];

export default function SectionName() {
  return (
    <section className="..." data-node-id="173:7430">
      ...
    </section>
  );
}
```

Rules:

- Default export, named after the file.
- `data-node-id` on section roots of Figma-sourced pages only.
- Content arrays as module-level `const` above the component.
- Function declarations, not arrow consts.
- No `React.FC`.

## Styling

- Tailwind utilities only. No CSS modules, no styled-components.
- **Inline `style` is allowed for one thing only: animation timing** that can't
  be static — stagger delays computed per item (`Reveal`, list fades) and the
  negative offsets on `<Orb>`. Everything else goes in CSS.
- Tokens over arbitrary values. `text-accent`, never `text-[#6B21A8]`.
  Letter-spacing uses `tracking-chip/caption/label/field`; panel radii use
  `rounded-card-sm/card-lg/image/card-xl`. If a value you need isn't tokenized,
  stop and add a deliberate token instead of inlining it.
- Composite classes (`.eyebrow`, `.btn-solid`) over repeating utility strings.
- GSAP scroll-driven elements get their pre-animation state from the global
  `.draw-hidden-y` / `.draw-hidden-x` utilities, never inline transforms.
- Class order: layout → box model → typography → colour → state. Rough
  consistency is enough; nobody should reformat working code to satisfy it.

## Imports

Use the `@/` alias, which maps to `src/`. No `../../` chains.

```tsx
import Hero from "@/sections/home/Hero"; // yes
import Hero from "../sections/home/Hero"; // no
```

## Routes

Declared in `src/App.tsx`. Adding a page means:

1. Build it following the right composition pattern (see Structure)
2. Register the route; unknown paths fall through to `pages/NotFound.tsx`
3. Add links to `NAV_LINKS` / footer groups in `src/lib/site.ts`

**Never link a route that doesn't exist.** Nav/footer/cards link to real
routes only; if a destination isn't built, point at its parent page or render
disabled text with a `TODO(design)` comment.

## Content

Real copy from the design source. If there's no copy for something, say so and
stop — don't write lorem, don't write your own marketing copy for a real
nonprofit.

Apostrophes in JSX copy use `&rsquo;`. Strings served from `site.ts` may embed
entities (`&rsquo;`, `&mdash;`) and are rendered with
`dangerouslySetInnerHTML` — static content only, never user input.

## Definition of done

A page or section is done when:

- [ ] Design context came from the real source (Figma node read or brand doc)
- [ ] All visual values come from tokens
- [ ] `data-node-id` present where applicable
- [ ] Real copy, no placeholders
- [ ] Semantic elements and heading order correct
- [ ] `npm run lint && npx tsc -b && npm test && npm run build` passes
- [ ] E2E still passes (`npx playwright test`)
- [ ] Its status in `docs/FIGMA_MAP.md` or this doc is updated

That last one is what keeps the docs honest. A map nobody updates is worse
than no map, because the next agent trusts it.
