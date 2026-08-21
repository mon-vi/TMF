# Pull Request

## What does this PR do?

<!-- One or two sentences. Link the issue/Figma frame if applicable. -->

## Design provenance

Per `AGENTS.md`, state the provenance of every section touched by this PR:

- [ ] **Verified** — pulled via `get_design_context`, values are exact
- [ ] **Inferred** — structure/copy from metadata, styling from tokens
      (each one carries a `TODO(design)` comment naming its node)
- [ ] **Placeholder** — stand-in so the page renders (comment at top of file)
- [ ] N/A — no visual/section changes in this PR

## Checklist

### Design fidelity

- [ ] No hardcoded colours, font sizes, or font families — all values come
      from `tailwind.config.js` tokens or component classes in `src/index.css`
- [ ] Any new design token was flagged and agreed, not added silently
- [ ] Real copy from the Figma design used (no lorem/placeholder text)
- [ ] `data-node-id` preserved on section roots
- [ ] Responsive behaviour above `md` marked as provisional (mobile canvas
      `1:2` is the only read design; desktop canvas `1:3` not yet read)

### Accessibility floor

- [ ] Semantic landmarks intact (`header`, `nav`, `main`, `footer`, `section`)
- [ ] One `h1` per page; headings in order
- [ ] Visible keyboard focus preserved (global styles untouched)
- [ ] Decorative images: `alt=""` + `aria-hidden`; meaningful images: real alt text
- [ ] Modals/overlays: `role="dialog"`, `aria-modal`, Escape closes, body scroll locked
- [ ] `prefers-reduced-motion` respected

### Quality gates

- [ ] `npm run lint` passes with zero errors
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run build` succeeds
- [ ] `npm test` passes (unit/component)
- [ ] `npm run test:e2e` passes locally if UI flows changed
- [ ] New logic is covered by tests; no test was deleted or weakened to make a pass

### Assets & secrets

- [ ] Figma asset URLs only touched via `src/lib/site.ts` (never scattered in components)
- [ ] No secrets, keys, or `.env` values committed

## Screenshots

<!-- Mobile 390px required for visual changes; desktop optional/provisional. -->

| Mobile (390px) | Desktop |
| -------------- | ------- |
|                |         |

## Notes for reviewers

<!-- Anything reviewers should scrutinise: design flags, trade-offs, follow-ups. -->
