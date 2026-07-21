# Conventions

## Structure

```
src/
  components/     Shared across pages (Navbar, Footer)
  sections/<page>/  One file per design section
  pages/          Route-level composition only
  lib/            Data, constants, asset references
```

`pages/*` composes sections and nothing else. No styling, no layout, no data.
If a page file is growing markup, that markup belongs in a section.

`sections/<page>/` mirrors the Figma frame. One Figma section frame maps to one
file. Don't merge two design sections into one component to save a file, and
don't split one into three.

## Component shape

```tsx
import { Link } from 'react-router-dom';

const ITEMS = [ /* content lifted from the design */ ];

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
- `data-node-id` on the section root, always. This is the trace back to Figma.
- Content arrays as module-level `const` above the component.
- Function declarations, not arrow consts.
- No `React.FC`.
- No prop drilling for content that only this section uses.

## Styling

- Tailwind utilities only. No inline `style`, no CSS modules, no styled-components.
- Tokens over arbitrary values. `text-accent`, never `text-[#6A0DAD]`.
- Composite classes (`.eyebrow`, `.btn-solid`) over repeating utility strings.
- Class order: layout → box model → typography → colour → state. Rough
  consistency is enough; nobody should reformat working code to satisfy it.

## Imports

Use the `@/` alias, which maps to `src/`. No `../../` chains.

```tsx
import Hero from '@/sections/home/Hero';   // yes
import Hero from '../sections/home/Hero';  // no
```

## Routes

Declared in `src/App.tsx`. Adding a page means:

1. Build sections in `sections/<page>/`
2. Compose in `pages/<Page>.tsx`
3. Replace the `<Placeholder />` route in `App.tsx`
4. Add the link to `NAV_LINKS` in `src/lib/site.ts` if it belongs in navigation

## Content

Real copy from the design. If the design has no copy for a node, say so and stop
— don't write lorem, and don't write your own marketing copy for a real
nonprofit.

Apostrophes in copy: use `&rsquo;` in JSX rather than a raw `'`, matching the
typographic apostrophes in the design.

## Definition of done

A section is done when:

- [ ] `get_design_context` was called on its node — not metadata alone
- [ ] All values come from tokens
- [ ] `data-node-id` present on the root
- [ ] Real copy, no placeholders
- [ ] Semantic elements and heading order correct
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` passes
- [ ] Its status in `docs/FIGMA_MAP.md` is updated

That last one is what keeps the map honest. A map nobody updates is worse than
no map, because the next agent trusts it.
