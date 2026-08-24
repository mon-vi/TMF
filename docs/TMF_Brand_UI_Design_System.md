# Brand & UI Design System

> **STATUS (2026-08): PROMOTED to primary spec.** This document is the design
> source of truth for **Contact, Events, Get Involved, and Programs** (the
> pages rebuilt in commit `f35e479`), which use page-file composition and no
> Figma `data-node-id`s. Its palette is canonical site-wide: primary
> `#6B21A8` = Tailwind purple-800 = token `accent` (ruling supersedes the
> Figma accent `#6A0DAD`; see docs/DESIGN_SYSTEM.md). Secondary `#B794F6` maps
> to `tmf-secondary`; text accent `#805AD5` to `tmf.text-accent`. Decorative
> gradient endpoints violet-500 `#8b5cf6` / fuchsia-500 `#d946ef` live as root
> CSS constants (`--gradient-mid`, `--gradient-end`). Never hardcode these
> hexes in components — always consume tokens.
>
> Home, About, Donate, Navbar, and Footer remain governed by
> docs/DESIGN_SYSTEM.md + docs/FIGMA_MAP.md (Figma-sourced).

**Project:** TalentMakers Foundation (TMF)
**Document Type:** Visual Design System & UI Specification
**Original Status:** Inferred & Documented from Existing Implementation

---

## 1. Overview

This document outlines the visual design language, UI components, and design system tokens for the TalentMakers Foundation (TMF) website. The specifications herein have been reverse-engineered from existing interface screenshots (specifically the "Get Involved" and "Donate" flows, along with overarching navigational elements).

The purpose of this document is to establish a single source of truth for designers, developers, and AI tools to ensure visual consistency, maintainability, and scalability across the entire product ecosystem.

---

## 2. Brand Identity

**Observed:**
The TalentMakers Foundation brand projects a highly professional, philanthropic, and empowering identity. It is focused on bridging the gap between talent and opportunity, specifically targeting the "next generation of African talent."

**Inferred Personality:**

- **Purposeful & Serious:** Achieved through the use of high-contrast, elegant serif typography for headings.
- **Modern & Tech-Adjacent:** Achieved through clean sans-serif body copy, generous whitespace, and sharp, structural component edges.
- **Empathetic & Human:** Achieved through photography showing collaborative, diverse groups and warm, supportive messaging.

---

## 3. Design Philosophy

Based strictly on the visual evidence, the following core design philosophies guide the TMF interface:

1.  **Typographic Contrast (Observed):** Heavy reliance on the juxtaposition between elegant serif display fonts and highly legible sans-serif functional text.
2.  **Content-First Minimalism (Observed):** Wide margins, tinted but unobtrusive backgrounds, and a lack of unnecessary decorative elements allow the mission and actions to stand out.
3.  **Singular Focus (Observed):** Primary actions (like "Donate") use a bold, unmissable brand color, while secondary information fades into structural layouts.

---

## 4. Visual Language

The visual language is characterized by a "Corporate Philanthropy" aesthetic. It balances the institutional trust required for a foundation (Serif fonts, structured grids) with the modern edge required for a tech-focused talent incubator (vibrant purple, minimalist form fields, sharp UI elements).

---

## 5. Color System

| Token Name            | Hex (Estimated) | Usage                                                                           | Confidence Level  |
| :-------------------- | :-------------- | :------------------------------------------------------------------------------ | :---------------- |
| **Primary Brand**     | `#6B21A8`       | Primary CTAs (Nav "Donate" button), prominent quote backgrounds, active states. | High (Observed)   |
| **Secondary Brand**   | `#B794F6`       | Secondary CTAs (e.g., "Continue to Payment"), light text overlays.              | High (Observed)   |
| **Background Tint**   | `#F0F4F8`       | Main page backgrounds (cool light blue/gray tint), distinct from pure white.    | High (Observed)   |
| **Surface White**     | `#FFFFFF`       | Form containers, cards, active navigation backgrounds.                          | High (Observed)   |
| **Text Primary**      | `#0F172A`       | Main serif headings, primary sans-serif body text.                              | High (Observed)   |
| **Text Secondary**    | `#64748B`       | Subtitles, descriptive body text, inactive tab text.                            | Medium (Inferred) |
| **Text Accent**       | `#805AD5`       | Text links ("Join Us ->"), icons, subheadings ("IMPACT").                       | High (Observed)   |
| **Border/Divider**    | `#E2E8F0`       | Inactive card borders, form input baselines, segmented control borders.         | High (Observed)   |
| **Muted/Placeholder** | `#CBD5E1`       | Empty state numbers (e.g., "$ 0.00"), background numbers ("01", "02").          | High (Observed)   |

---

## 6. Typography System

**Observed:** The system uses a distinct pairing of a Serif display font and a Sans-Serif body/UI font.

### Font Families

- **Heading Font (Serif):** Estimated as _Playfair Display_, _Merriweather_, or _LORA_. (High Confidence of Serif style).
- **Body Font (Sans-Serif):** Estimated as _Inter_, _Roboto_, or _System UI_. (High Confidence of Sans-serif style).

### Typography Scale (Inferred)

| Style            | Font Family | Size (Est.) | Weight    | Line Height | Usage                                                                   |
| :--------------- | :---------- | :---------- | :-------- | :---------- | :---------------------------------------------------------------------- |
| **Display/Hero** | Serif       | 56px-64px   | Bold      | 1.1         | Major page titles ("Your contribution creates opportunity.")            |
| **H1**           | Serif       | 40px-48px   | Bold      | 1.2         | Section headings ("Pathways to Impact", "The Catalyst Effect")          |
| **H3**           | Serif       | 24px        | Semi-Bold | 1.3         | Card Titles ("Volunteer with Us", "$250")                               |
| **Subheading**   | Sans-Serif  | 14px        | Bold      | 1.5         | Section kickers ("IMPACT", "INVEST IN THE FUTURE") - _Always Uppercase_ |
| **Body Large**   | Sans-Serif  | 18px-20px   | Regular   | 1.6         | Lead paragraphs ("Every dollar fuels...")                               |
| **Body Default** | Sans-Serif  | 16px        | Regular   | 1.5         | Standard descriptions, descriptions under list items.                   |
| **UI Action**    | Sans-Serif  | 16px        | Medium    | 1.0         | Buttons, Navigation Links.                                              |
| **Display Num**  | Serif       | 64px+       | Regular   | 1.0         | Background list numbers ("01", "02").                                   |

---

## 7. Spacing System

**Inferred:** The layout relies on a generous, airy spacing system, likely built on an 8px base scale.

- **Base Unit:** 8px (Inferred)
- **Component Padding (Buttons/Inputs):** 16px vertical, 32px horizontal. (Observed)
- **Item Gap (Lists/Flex):** 16px - 24px between title and description. (Observed)
- **Section Spacing (Vertical Rhythm):** 96px - 120px between major page sections. (Observed)
- **Container Padding:** Large padding on primary image overlays.

---

## 8. Grid & Layout

**Observed & Inferred:**

- **Container Width:** The site utilizes a constrained central container for content, estimated at a max-width of `1200px` or `1280px`.
- **Alignment:**
  - Headers are heavily left-aligned (e.g., "Pathways to Impact", "Your contribution creates opportunity.").
  - Top navigation uses a standard split: Logo (Left), Links (Center), Actions (Right).
- **Column Structures:**
  - Donation tier cards use a 3-column CSS grid or flexbox layout.
  - The primary layout leans toward a 12-column underlying grid.

---

## 9. Responsive System

**Inferred:** (No mobile screenshots provided; the following are standard recommendations based on the desktop view).

- **Desktop (`> 1024px`):** Full visible navigation, horizontal grids for cards, multi-column layouts.
- **Tablet (`768px - 1024px`):** Cards likely stack to a 2-column grid. Hero text reduces by ~20%.
- **Mobile (`< 768px`):**
  - Navigation collapses into a hamburger menu.
  - 1-column layout for all cards and lists.
  - Image-to-quote overlap in "The Catalyst Effect" likely stacks vertically rather than overlapping.

---

## 10. Iconography

**Observed:**

- **Style:** Minimalist, geometric, line-stroke icons (e.g., Heart, Graduation Cap, Lock).
- **Weight:** ~1.5px to 2px stroke.
- **Container:** Icons are frequently housed in soft-rounded (`8px` radius) square containers with a light purple background (`#F3E8FF` approx) and a darker purple icon color.

---

## 11. Imagery

**Observed:**

- **Content:** Authentic, warmly lit photography featuring diverse groups of people collaborating in professional/educational settings.
- **Treatment:** Images are treated as distinct objects on the canvas, characterized by **large border radii** (estimated `16px - 24px`) rather than edge-to-edge bleed.
- **Composition:** Overlapping elements are used to create depth (e.g., the solid purple quote block overlapping the bottom-left of the main photography in "The Catalyst Effect").

---

## 12. Borders, Radius & Shadows

**Observed (Note: There is an intentional contrast in styles here):**

- **Border Radius - Sharp (`0px`):** Used strictly for interactive conversion elements (Primary Donate buttons, Continue to Payment button, Segmented control toggles).
- **Border Radius - Medium (`8px`):** Used for decorative icon containers.
- **Border Radius - Large (`16px - 24px`):** Used for photographic imagery.
- **Borders (`1px solid`):** Used for inactive states (Donation amount cards, Segmented controls). Color is typically a light gray (`#E2E8F0`). Active borders switch to Primary Purple.
- **Shadows:** Minimal. A slight, soft drop shadow (`0 4px 6px rgba(0,0,0,0.1)`) is observed on the purple quote block overlapping the image.

---

## 13. Component System

### 13.1 Navigation (Header)

- **Anatomy:** Brand Logo (Left), 5 text links (Center), "Get Involved" text link + "Donate" solid button (Right).
- **Typography:** Sans-serif, medium weight.
- **Colors:** Dark text for standard links, Primary purple for actions.

### 13.2 Buttons

- **Primary Solid Button ("Donate"):**
  - Background: Primary Purple.
  - Text: White, Sans-serif, Centered.
  - Radius: `0px` (Sharp).
- **Secondary/Form Button ("Continue to Payment"):**
  - Background: Light/Secondary Purple.
  - Text: White, Sans-serif, uppercase. Includes a lock icon.
  - Radius: `0px` (Sharp).
- **Text Action Link ("Join Us ->"):**
  - Text: Primary Purple, Sans-serif.
  - Iconography: Inline right-arrow.

### 13.3 Forms & Inputs

- **Segmented Control (Currency Switcher):**
  - Layout: Two equal-width tabs (USD | NGN).
  - Active State: Primary Purple background, White text.
  - Inactive State: Transparent background, Dark text, 1px light gray border.
  - Radius: `0px` (Sharp).
- **Custom Amount Input:**
  - Style: Minimalist. No bounding box.
  - Border: `1px` solid gray bottom border only.
  - Typography: Massive serif text for the numerical value, light gray/purple for placeholder, dark for active input.

### 13.4 Cards (Donation Tiers)

- **Anatomy:** Square aspect ratio. Contains Price (Serif, Purple) and Label (Sans-serif, Dark).
- **Default State:** White background, 1px light gray border.
- **Active/Selected State:** 1px Primary Purple border (Observed on the $250 card).

### 13.5 Lists & Features

- **Numbered Feature List:** Uses oversized, light-gray Serif numerals ("01", "02") aligned left, with Uppercase Purple subheadings and dark sans-serif descriptions.

---

## 14. Page Patterns

**Observed:**

1.  **Split-Content Hero/Lead:** Left side contains massive serif typography and subtext; Right side contains functional UI (e.g., the donation form block).
2.  **Image with Overlapping Card:** A large rounded image with a solid-color, sharp-edged content block overlapping one of the bottom corners, creating a break in the grid.

---

## 15. Interaction & Component States

- **Default:** Standard colors as documented.
- **Hover (Inferred):** Text links likely change to a darker shade or gain an underline. Buttons likely shift to a darker purple background (`#581C87`).
- **Active/Selected (Observed):** Elements gain a Primary Purple border or background (e.g., the $250 card, the USD toggle).
- **Disabled (Recommended):** Use gray backgrounds (`#E2E8F0`) with muted text (`#9CA3AF`).

---

## 16. Content & UI Language

**Observed:**

- **Tone:** Inspiring, direct, and professional.
- **Capitalization:**
  - Headings use Title Case ("Pathways to Impact").
  - Sub-labels use ALL CAPS ("IMPACT", "INVEST IN THE FUTURE").
  - Buttons use either Title Case ("Donate") or ALL CAPS ("CONTINUE TO PAYMENT").
- **Microcopy:** Clear and functional ("Every dollar fuels...", "OR ENTER CUSTOM AMOUNT").

---

## 17. Accessibility

### Current Observations

- **Positive:** The contrast between the primary dark text and the light blue/gray background is excellent. Headings are large and highly legible.
- **Areas of Concern (Observed):**
  - The light purple button ("Continue to Payment") with white text may fail WCAG AA contrast ratios depending on the exact hex code used.
  - The placeholder text for the custom donation amount (`$ 0.00`) appears very light and may be difficult for low-vision users to read.

### Recommendations

- Ensure the "Continue to Payment" button background is darkened to meet a minimum 4.5:1 contrast ratio against white text.
- Darken the input placeholder text slightly.

---

## 18. Design Principles (Extracted)

1.  **Typographic Authority:** Use serif display fonts to establish trust and institutional weight, but keep UI elements in sans-serif for usability.
2.  **Purposeful Sharpness:** Interactive conversion elements (buttons, forms) use sharp `0px` radii to feel precise and actionable, while narrative elements (images, icons) use rounded corners to feel approachable.
3.  **Breathable Layouts:** Utilize generous negative space between sections to prevent cognitive overload.

---

## 19. Consistency Audit

| Element           | Location                   | Observation                                                                                | Severity | Recommendation                                                                                   |
| :---------------- | :------------------------- | :----------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------- |
| **Button Casing** | Global Nav vs. Donate Form | "Donate" is Title Case; "CONTINUE TO PAYMENT" is ALL CAPS.                                 | Low      | Standardize button casing across the application (recommend Title Case for better readability).  |
| **Button Colors** | Global Nav vs. Donate Form | "Donate" uses Primary Purple; "Continue to Payment" uses a much lighter secondary purple.  | Medium   | Ensure primary progression actions use the same primary brand color to train user expectations.  |
| **Border Radii**  | Global                     | Images are rounded (`~24px`), Icons are rounded (`~8px`), Buttons/Forms are sharp (`0px`). | Low      | _None._ This appears to be an intentional, stylistic choice (Principle #2) rather than an error. |

---

## 20. Design Debt

**Medium Priority:**

- **Color Token Fragmentation:** The variation in purple shades for primary actions suggests a lack of strict color token usage in the CSS.
- **Accessibility Contrast:** As noted in Section 17, the light purple button and pale placeholder text are accessibility liabilities.

---

## 21. Recommendations

- **[P0 - Critical]** Address color contrast on the "Continue to Payment" button. Update the background to the primary `#6B21A8` hex to ensure WCAG compliance and visual consistency with the main "Donate" button.
- **[P1 - High]** Standardize typography casing on primary buttons.
- **[P2 - Medium]** Implement a strict CSS variable system for the established border-radii to prevent developers from accidentally rounding buttons or sharpening images in the future.

---

## 22. AI & Developer Implementation Guidelines

To faithfully reproduce this design system, developers and AI agents must adhere to the following:

- **Do not apply global border-radius defaults.** UI controls (buttons, inputs) must be explicitly set to `0px`.
- **Use Semantic Naming.** Do not use literal names like `purple-light`. Use `--color-primary-action` and `--color-secondary-surface`.
- **Typography Hierarchy:** Always wrap headings in semantic HTML tags (`<h1>`, `<h2>`) mapped to the Serif font tokens, and UI elements (`<button>`, `<input>`, `<nav>`) to Sans-serif tokens.
- **Backgrounds:** Do not default page bodies to `#FFFFFF`. Apply the `--color-background-base` (light blue/gray tint) to the body, and use `--color-surface` (`#FFFFFF`) explicitly for cards and form containers.

---

## 23. Design Tokens Reference (CSS)

```css
:root {
  /* Colors - Inferred & Estimated from visual data */
  --color-brand-primary: #6b21a8; /* Deep Purple for main CTAs */
  --color-brand-secondary: #b794f6; /* Light Purple for accents */
  --color-background-base: #f0f4f8; /* Tinted page background */
  --color-surface: #ffffff; /* Cards, inputs, active states */

  --color-text-primary: #0f172a; /* Headings, main body */
  --color-text-secondary: #64748b; /* Descriptions, inactive text */
  --color-text-accent: #805ad5; /* Subheadings, text links */
  --color-text-muted: #cbd5e1; /* Placeholders, large bg numbers */

  --color-border-default: #e2e8f0; /* Inactive outlines */
  --color-border-active: var(--color-brand-primary);

  /* Typography */
  --font-family-display: "Playfair Display", Georgia, serif;
  --font-family-ui: "Inter", system-ui, sans-serif;

  /* Spacing Scale */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --spacing-section: 96px;

  /* Border Radius - Strict usage required */
  --radius-ui: 0px; /* Buttons, form inputs, segmented controls */
  --radius-icon: 8px; /* Icon background containers */
  --radius-image: 24px; /* Photographic imagery */

  /* Shadows */
  --shadow-overlay:
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

---

## 24. Final Brand Summary

The TalentMakers Foundation interface succeeds by combining the trusted, established feel of traditional philanthropy (heavy serifs, structured layouts) with the crisp, actionable nature of a modern tech platform (vibrant purples, sharp buttons, minimalist forms). By strictly adhering to the tokenized rules for typography pairing and specific border-radius application, future designers and developers can scale this system without losing its unique, purpose-driven identity.
