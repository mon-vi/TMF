# Figma Node Map

File key: `Smlz5HrtfbCIu2jNQY7cFZ`
URL shape: `https://www.figma.com/design/Smlz5HrtfbCIu2jNQY7cFZ/TMF-Revamped-Website?node-id=<id>`

Node IDs use `1:2` form in tool calls, `1-2` in URLs. Both are accepted by the
tools.

## Canvases

| Canvas | Node | Status |
|---|---|---|
| Mobile Design (390px) | `1:2` | Mapped below |
| Web Design (1280px) | `1:3` | Mapped below — full desktop layouts for every page |

Both breakpoints are fully designed. Build responsive from both, mobile-first,
stepping up at `lg` (1024px). Desktop is NOT a scaled mobile — layouts differ
structurally (see per-page desktop node column).

## Access requirement

The Figma MCP tools need **edit** access on the file. Viewer access returns
"you don't have edit access" on every call. If reads start failing, that's the
cause — it isn't a tool bug.

---

## Pages (mobile, 390px)

| Page | Mobile node | Desktop node | Route |
|---|---|---|---|
| Homepage | `173:7383` | `208:3011` | `/` |
| About Us | `161:3003` | `208:3460` | `/about` |
| Programs | `161:1420` | `208:3165` | `/programs` |
| Scholarship Program | `199:3831` | `208:3760` | `/programs/scholarship` |
| Tech Spark | `199:4226` | `208:3888` | `/programs/tech-spark` |
| Events | `161:2643` | `208:3246` | `/events` |
| Blog | `161:3573` | `208:3327` | `/blog` |
| Get Involved | `199:3244` | `208:3657` | `/get-involved` |
| Contact | `161:3303` | `208:3574` | `/contact` |
| Donate | `161:744` | `208:3108` | `/donate` |

Workflow per section: read the mobile node AND the desktop node, implement
mobile-first, add `lg:` overrides for the desktop layout. They often differ in
structure (column count, sidebars, image placement), not just spacing.

### Desktop layout differences worth knowing up front

- **Homepage hero** (`208:3013`): 12-col grid, 6/6 split — text left, image
  right. Mobile stacks. H1 is 72px here vs 44px mobile.
- **Programs preview** (`208:3055`): two cards side by side, hairline dividers.
- **Blog** (`208:3342`): 8-col article grid (2×2, 400px cards) + a 240px sidebar
  with category list and Annual Report card. The sidebar does not exist on mobile.
- **Programs page** (`208:3176`, `208:3211`): asymmetric split layouts, image and
  text swap sides between the two program blocks.
- **Contact** (`208:3584`): form and info column side by side (bento); stacked on
  mobile. Name/email are two columns on desktop, stacked on mobile.
- **Alumni** desktop cards are 420px (`292:3013`) vs 240px mobile.

---

## Shared components

Instanced on every page. Build once.

| Component | Node | Status |
|---|---|---|
| Top navigation | `189:890` (container `189:870`) | **Verified** — implemented (rebuilt) |
| Mobile menu overlay | `173:7504` | Structure implemented, styling inferred |
| Footer | mobile `189:918` (946px) · desktop `208:3105` (544px) | **Inferred** — type/spacing NOT node-verified |

The footer appears on all ten pages at both breakpoints. Highest-value remaining
extraction. Read both nodes — mobile is 946px tall (stacked), desktop is 544px
(likely multi-column), so they differ structurally.

---

## Homepage sections — `173:7383`

| Section | Node | Component | Status |
|---|---|---|---|
| Hero | `173:7430` | `sections/home/Hero.tsx` | Verified (node) |
| Impact Metrics | `173:7384` | `sections/home/ImpactMetrics.tsx` | Verified (node) |
| Programs | `173:7440` | `sections/home/Programs.tsx` | Verified (node) |
| Featured Story / Alumni | `173:7466` | `sections/home/AlumniSpotlight.tsx` | Verified (node), portraits pending |
| Final CTA | `173:7482` | `sections/home/FinalCTA.tsx` | Verified (node) |

Alumni carousel internals: `314:1224` (a 2580px strip of ten 240px cards).

---

## Section nodes on unbuilt pages

Enough to start each page without re-reading the whole canvas.

**About Us** — `161:3003`
Cinematic hero `161:3055` · Mission & Vision `161:3004` · Timeline `161:3066` ·
Board of Trustees `161:3026` · Join the Mission CTA `192:3170`

**Programs** — `161:1420`
Hero `161:1421` · Scholarship block `161:1430` · Tech Spark block `161:1458` ·
Pull quote `173:7600`

**Scholarship** — `199:3831`
Hero `208:2275` · Overview `199:3844` · Eligibility `199:3870` ·
Journey timeline `199:3892` · Closing CTA `199:3983`

**Tech Spark** — `199:4226`
Hero `199:4345` · Overview `199:4228` · Curriculum intro `199:4238` ·
Curriculum cards `206:1769` · School outreach `199:4287` · Gallery `199:4325` ·
Recommend a school CTA `208:1802`

**Events** — `161:2643`
Featured event `161:2645` · Past events list `161:2724`

**Blog** — `161:3573`
Featured insight `178:457` · Category list `161:3591` · Article stack `161:3612` ·
Pagination `179:625` · Annual report `178:599` · Newsletter `178:607`

**Get Involved** — `199:3244`
Hero `199:3245` · Pathway cards `199:3253` · Catalyst Effect `199:3302`

**Contact** — `161:3303`
Hero `161:3305` · Form `161:3333` · Contact info `161:3310`

**Donate** — `161:744`
Hero image `161:746` · Content `161:749` · Amount presets `161:755` ·
Amount input + submit `161:799`

Donate note: the design shows a Paystack security badge (`161:809`). Payment
integration is unspecified — ask before building anything beyond the UI.

---

## Content warnings

The design file contains real copy in most places, but not everywhere:

- Many text nodes are literally named `Text` with no content. Those need real
  copy from the client — don't invent it, and don't ship lorem.
- The Events page references "Tech Spark Conference 2027" in Zurich, and Get
  Involved has pathway cards whose headings and body text don't match each other
  (e.g. "Volunteer with Us" over fellowship-application copy). These look like
  design placeholders. Flag them; don't quietly fix them.