# Forty Collection — DESIGN.md

## Color Strategy

**Committed.** One brand color carrying 30 to 60 percent of the surface, supported by tinted neutrals.

### Brand Color: Patinated Brass

| Token | OKLCH | HEX | Usage |
|---|---|---|---|
| brass-primary | oklch(0.55 0.12 75) | #9c6f3a | Primary brand color, headlines, accents, key CTAs |
| brass-deep | oklch(0.42 0.10 70) | #74522a | Hover states, deep contrast |
| brass-light | oklch(0.72 0.10 80) | #c89556 | Subtle highlights, dividers |

### Tinted Neutrals (warm, biased toward brass hue)

| Token | OKLCH | HEX | Usage |
|---|---|---|---|
| ink | oklch(0.18 0.01 75) | #1a1612 | Primary text, dark surfaces. NEVER #000 |
| graphite | oklch(0.30 0.01 75) | #2e2922 | Secondary dark surfaces |
| stone | oklch(0.55 0.01 75) | #8a8278 | Body text on light, muted icons |
| cream | oklch(0.97 0.01 75) | #f5f0e8 | Light surfaces, page background. NEVER #fff |
| paper | oklch(0.99 0.005 75) | #fbf9f5 | Lightest surface, subtle elevation |

**Rules:**
- Never #000 or #fff anywhere.
- Brass appears on roughly 30 to 50 percent of the visible surface across the site.
- One accent only. No secondary brand color.

## Typography

**Two voices.** No third font.

### Display: Fraunces (Google Fonts, free)

- High-contrast variable serif. Editorial weight.
- For production launch: swap to Editorial New (PangramPangram, paid) or GT Sectra. Same role, same proportions.
- Use cases: H1, H2, manifesto type, vehicle names.

### Grotesque: Inter (Google Fonts, free)

- Precise modern sans. Used for body, nav, captions, micro-copy.
- For production launch: swap to Söhne (Klim) or Neue Haas Grotesk Display.

### Type Scale

| Token | Size | Line height | Weight | Usage |
|---|---|---|---|---|
| display-xl | 144px / 9rem | 0.95 | 300 | Single-page hero only |
| display-lg | 96px / 6rem | 1.0 | 300 | Section hero |
| display-md | 64px / 4rem | 1.05 | 300 | Page H1 |
| display-sm | 44px / 2.75rem | 1.1 | 400 | Section H2 |
| body-lg | 22px / 1.375rem | 1.5 | 400 | Lead paragraphs |
| body | 17px / 1.0625rem | 1.65 | 400 | Body text |
| caption | 13px / 0.8125rem | 1.5 | 500 | Labels, captions, eyebrows |
| micro | 11px / 0.6875rem | 1.4 | 600 | Uppercase labels, letter-spaced |

**Rules:**
- Hierarchy ratio between adjacent sizes: 1.25 minimum.
- Body line length capped at 65 to 75ch.
- Display sizes use weight 300 for editorial elegance. Avoid bold display.
- Never gradient text.

## Spacing Scale

8px base. Use these tokens, do not invent.

| Token | Value |
|---|---|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 16px |
| space-4 | 24px |
| space-5 | 32px |
| space-6 | 48px |
| space-7 | 64px |
| space-8 | 96px |
| space-9 | 128px |
| space-10 | 192px |

Section padding (vertical): space-9 to space-10 on desktop. space-7 to space-8 on mobile.

**Rule:** Vary spacing for rhythm. Never use the same padding everywhere.

## Layout

- Max content width: 1440px.
- Reading width (long-form copy): 720px.
- 12-column grid on desktop, 6 on tablet, 4 on mobile.
- Full-bleed hero and inventory sections break the grid intentionally.

**Banned layouts:**
- Card grids of vehicles. Each vehicle gets its own scroll moment, full-bleed.
- Three-column "feature" cards with icon + heading + paragraph.
- Side-stripe colored borders on anything.
- Cards inside cards.

## Motion

- Ease curves: ease-out-quart or ease-out-expo only. No bounce, no elastic.
- Duration: 200ms for micro-interactions, 400ms for section reveals, 800ms+ for hero transitions.
- Never animate layout properties (width, height, padding). Transform and opacity only.
- Reduced motion respected via prefers-reduced-motion media query.

## Components (Elementor mapping)

| Component | Elementor approach | Custom CSS needed |
|---|---|---|
| Hero | Section, full-bleed, image background widget | Yes (overlay, type sizing) |
| Manifesto | Section, single column, text widget | Light (line length cap) |
| Vehicle feature | Section, two columns or full-bleed image + text below | Yes (scroll behavior, type) |
| Process steps | Section, four columns, custom HTML widget per step | Yes (numbered, no cards) |
| Commission form | Elementor Pro Form widget | Yes (style override) |
| Footer | Theme footer or section | Yes (restraint, three links only) |

## Copy Rules

- No em dashes. Use commas, colons, semicolons, periods, parentheses.
- No double dashes (--).
- Every word earns its place. No restated headings.
- No "Welcome to". No "Discover". No "Experience". No "Premium".
- Numbers as numerals when possible (6 builds, not "six builds"), unless mid-sentence at start.

## Photography Direction

### Current Assets (Phase 1 use)

- 49 photos of sky-blue FJ40 (DSC07086 to DSC07237 series)
- 51 photos of desert-tan FJ40 (DSC06896 to DSC07084 series)
- Environment: parking-lot-with-palms backdrop, daylight natural lighting

### Use strategy

- **Hero positions:** Tight crops of interior detail shots only (DSC07209 sky-blue interior, DSC07052 tan dashboard). The wide product shots are too generic for hero use.
- **Inventory feature sections:** Wide shots are acceptable here, full-bleed.
- **Process / detail sections:** Macro shots like DSC07148 (undercarriage) carry craft narrative.

### Phase 2 (future shoot)

[Speculation] Recommend Kalvin shoot a half-day session covering:
- Golden hour environmental (A1A coastal stretch, dawn beach approach, brutalist parking deck)
- Controlled studio light detail series (chassis on lift, leather close-ups)
- One or two driver-in-seat lifestyle shots

These would replace current parking-lot wides as heroes.

## Banned Patterns (Hard No)

- Side-stripe borders (border-left/right > 1px as accent)
- Gradient text (background-clip: text + gradient background)
- Glassmorphism as default
- Hero-metric template (big number + small label + supporting stats)
- Identical card grids
- Modal as first thought
- Wall of testimonials
- Trust counters ("X happy customers")
- Bootstrap blue (#0d6efd) anywhere
- Yellow accents
- Five-font stacks
- #000 or #fff
- Em dashes in copy
