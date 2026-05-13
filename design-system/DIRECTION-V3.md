# Forty Collection — DIRECTION V3

Locked direction for the rebuild. Approved before any code.

---

## The Core Insight

**Forty Collection is a watch brand that makes trucks.**

The chassis is the movement. The Toyota body is the case. Singer treats engine bays like watch movements. Pagani lights carbon fiber like couture material. Cartier turns each collection into its own scroll-universe. Bring a Trailer makes spec sheets feel forensic. The thread across all of them is the same: **show the engineering, light it like luxury, label it like an art catalog, pace it like an editorial.**

V1 missed this by going boutique-hotel editorial. V2 missed this by going streetwear poster. V3 hits it by anchoring every design decision to the watch metaphor.

---

## What Changed in This Pass

Three parallel research streams returned:

1. **GitHub skill discovery.** Found 9 senior-designer-tier skills now installed on this machine, plus Impeccable retained as guardrail. Source: `taste-skill` bundle.
2. **Premium automotive site analysis.** Singer, Pagani, Q by Aston Martin, Bring a Trailer dissected for typographic system, color discipline, layout grammar, motion language, and detail page architecture.
3. **State-of-the-art audit.** Top studios (Immersive Garden, Locomotive, Active Theory, Lusion, Adoratorio, Humaan), recent Awwwards SOTM/SOTD winners (Cartier W&W 2025, Scout Motors, Lando Norris, Max Mara Jacket Circle), current premium type stack, and the amateur tells that mark a $250k brand site as cheap.

[Inference] Combined output: a defensible direction grounded in precedent, not in my own reactive iteration.

---

## Design System

### Typography — Three-Face Lock (Zero Exceptions)

| Role | Paid (production) | Free (prototype) |
|---|---|---|
| Display | GT America Condensed Black or Editorial New (Pangram Pangram) | Bricolage Grotesque |
| Body sans | Söhne (Klim) or Neue Haas Grotesk Display | Inter |
| Mono (spec data) | GT America Mono (Grilli) | JetBrains Mono |

**Rules:**
- Three faces total. No fourth.
- Hierarchy ratio: 6:1 between display and body (Singer reference; v2 was about 4:1).
- Display caps reserved for short phrases under five words. Sentence case for everything longer.
- Italic earns one moment per page maximum (or zero).
- Letter spacing on caps: 0.04 to 0.08em (tight to mid). Never wider.

### Color — Two-Color Discipline + One Restrained Accent

| Token | Hex | Role |
|---|---|---|
| oxide-black | `#0E0E0E` | Primary dark surfaces, type on cream |
| bone | `#E8E1D4` | Primary light surfaces, type on dark |
| brass-oxide | `#A06B2E` | Single accent, used on under 8% of any visible surface |
| brass-shadow | `#6B4519` | Accent depth (for hover only, not surface) |

**Rules:**
- Black is `#0E0E0E`, not `#000`. White is `#FAF7EE`, not `#FFF`.
- The vehicle photography carries the chromatic energy. The brand surface is monochrome.
- Brass is never used on body copy or on full-page CTAs. Only on micro details: rules, eyebrows, single-word emphasis, an icon stroke.
- No third hue. No yellow. No olive. No oxblood.

### Photography Direction — Three Lanes

1. **Golden-hour environmental.** Vehicle as object-in-landscape. Beach at dawn. Brutalist parking deck at dusk. Mountain switchback. Florida key bridge. **NOT parking lot with palms.**
2. **Controlled studio macro.** Lit like jewelry. Chassis weld bead. Leather diamond stitch under raking light. Brushed billet hardware against velvet background. Tire sidewall lettering. Bushing rubber. The watch-brand mental model literally applied.
3. **Heritage / reportage.** Black-and-white or heavily desaturated. Build process in motion. Hands at work. Grease, sparks, raw steel. Film grain. Slow shutter.

[Inference] **Phase 2 shoot is mandatory before launch.** Current parking-lot wides cannot carry $250k positioning. Half day with Kalvin: dawn beach approach + brutalist garage interior + studio macro session. Three locations, three lanes, single-day execution.

### Layout Grammar

- 12-column grid with strong asymmetric breaks. Never 50/50 splits.
- Massive negative space: 160 to 240 pixels of vertical between sections.
- Photography fills the viewport. Type sits in the margin.
- Sticky split layouts: image fixed, copy scrolls (Singer pattern).
- Full-bleed for hero, contained for editorial passages, full-bleed for vehicle reveal, contained for spec, full-bleed for the next vehicle. Image-breath-image-breath rhythm.
- Fixed minimal nav with `mix-blend-mode: difference`. Brand mark left, three links right, one CTA at the far right.

### Motion Language

- Slow Ken Burns inside locked frames (1.04x scale over 12 seconds).
- Scroll-driven section transitions using Locomotive Scroll patterns.
- View Transitions API for page changes (no flash-of-white).
- Custom cursor that morphs on hover (small dot, expands to "View Build" pill on a vehicle card).
- No bounce. No elastic. No parallax distortion. No splash animations.
- Reduced-motion respected.

---

## Page Architecture

### Home — "The Commission"

1. **Hero.** Single still frame of a Rolling 40 chassis macro shot, lit like a watch movement. Locked-off camera, deep blacks, brass weld points catching light. Three-word manifesto headline at 56 to 80 pixels. NOT a vehicle. The chassis is what makes us. We open with it.
2. **Vehicle reveal.** Full-bleed scroll into one of the finished trucks. Camera rises from chassis to body. Implies the watch movement → case relationship.
3. **The Pair.** Two current builds shown as alternating full-bleed sections. NO grid. NO cards. Each truck gets one viewport-height feature, image left, three lines of name + spec + CTA right.
4. **The Chassis chapter.** Manifesto-as-headline, four sentences, link to Process page. Macro chassis photo as inline anchor.
5. **Commission CTA.** Drenched section, single line, single button. "Six commissions a year. Two slots open." → "Inquire."
6. **Footer.** Restrained. Three columns. No newsletter capture.

### Inventory → "Available Now"

Two trucks, asymmetric full-bleed alternating sections. Each is a magazine spread, not a product card. Side-scroll on mobile.

[Inference] When the inventory grows beyond four or five, this becomes a vertical scroll list with light pagination. Card grids are explicitly rejected at any count.

### Vehicle Detail → "Commission XX"

Renaming convention: each truck gets a numbered commission designation plus a place name. Recommended:

- "Commission One: The Sky Blue" → considered. Cleaner: **"Commission One: A1A"** (place-named after the coastal stretch where it was photographed).
- "Commission Two: The Desert Tan" → **"Commission Two: Big Cypress"** (place-named after the Florida preserve).

Decision left to Jared. Place-naming is more on-brand. Color-naming is more accessible.

Page structure:
1. Hero: cinematic vehicle in environment, full-bleed.
2. Build story: editorial four-paragraph chapter. Display headline. Long body in serif body face if we keep one, otherwise sans body.
3. Photo gallery: scroll-stack, not lightbox-grid. Each photo gets one viewport. Wide, tall, wide, tall rhythm. Lightbox available on click for high-res.
4. Spec sheet: GT America Mono, three columns, bottom of page. Drivetrain | Chassis | Body | Interior | Wheels & Tires | Electronics. Already designed in v2; brought forward.
5. Pricing: hidden. The only CTA on this page is "Inquire."
6. Closing: link to the other commission, link to the shop, link to commission page.

### Process → "The Chassis"

Watch-movement metaphor as the structuring device. Four chapters:

1. The frame. Macro of welds, geometry, raw steel.
2. The body. Donor sourcing, restoration, paint.
3. The finish. Drivetrain, interior, hardware, wiring.
4. The delivery. 200-mile shakedown, hand-off.

Each chapter: oversized chapter numeral, photography on left, copy on right, breathing white space below. Ken Burns motion on each photograph as it enters viewport.

### Commission → "Inquire"

Long-form single-column intake form, treated as concierge intake, not contact form. Sticky sidebar with "What to Expect" plus typical price range plus phone number.

Already designed in v2 acceptably; minor refinement only.

### About → "The Shop"

Three names: Larry Sidebotham, Ju, Pat Morris. Editorial paragraphs, not bios in card format. One workshop photograph. Address.

Already designed in v2 acceptably; minor refinement only.

---

## Naming and Voice

The brand voice is **terse, confident, work-focused, never salesy.** Manifestos that work:

- "Six commissions a year."
- "The chassis is ours."
- "Vintage above. Engineered below."
- "Built one at a time."

Manifestos that do not work:

- "Re-engineered classics" (Velocity owns the trademark)
- "Ultimate driving machine" (BMW)
- "The art of driving" (anything from a Pagani borrow)
- Anything that uses the words "premium," "luxury," "experience," or "discover"
- Question-mark headlines ("Want one built your way?" — performative)

CTAs:

- "Inquire" — only word for primary actions
- "View Build" — only on vehicle cards
- "Commission a Build" — persistent nav CTA
- Never: "Learn More," "Discover," "Explore," "Get Started," "Submit"

---

## What We Are Rejecting

- Card grids of vehicles
- Hero on white background (e-commerce tell)
- Symmetrical center-aligned hero with headline + subhead + CTA stack (Webflow tell)
- Heavy display caps stacked over photography (V2 mistake)
- Italic-serif accents repeating four times per page (V1 mistake)
- All-caps every section heading (V2 mistake)
- Five-font stacks (V1 + V2 mistake)
- Bootstrap blue, Bootstrap defaults
- Gradient text, glassmorphism, hero-metric template, side-stripe borders
- Trust badges, testimonial walls, Trustpilot widgets
- Newsletter popups, exit-intent modals, sticky chat bubbles
- Auto-playing music or video
- Stock-y CTAs ("Learn More," "Discover," "Explore," "Get Started")
- Drop shadows on cards
- Square corners with 8 to 12 pixel radius (luxury uses 0 or 2 pixel radius)
- Drone "open road" stock video
- BBB seals, secure-checkout icons, payment-provider logos
- Bottom-right cookie banner that takes 30% of screen

---

## Reference Library (for Jared to study)

Visit each. Notice the patterns. Two minutes per site.

1. **singervehicledesign.com** — gold standard restomod luxury restraint
2. **pagani.com** — chapter-driven editorial framing
3. **astonmartin.com/en/q-by-aston-martin** — bespoke-as-theater
4. **scoutmotors.com** — Locomotive's heritage-meets-modern automotive masterclass
5. **cartier-waw-0225.dev.60fps.fr** — Immersive Garden's WebGL universe per collection
6. **polestar.com** — restraint-as-engineering
7. **aman.com** — soft luxury without boutique-hotel
8. **hermes.com** — restraint extreme
9. **mont-fort.com** — Immersive Garden heritage tonal range
10. **bottegaveneta.com** — color and photography minimalism

Bonus: **siena.film** for editorial pacing, **zenith-watches.com** for spec layering.

---

## Tooling Stack (Now Installed)

| Skill | Role |
|---|---|
| `high-end-visual-design` | Senior agency design rules. Blocks the cheap defaults. |
| `design-taste-frontend` | Senior UI/UX engineer voice. Metric-based component architecture. |
| `redesign-existing-projects` | Upgrade-to-premium audit and refactor. |
| `stitch-design-taste` | Generates DESIGN.md tokens that enforce premium standards. |
| `gpt-taste` | GSAP motion engineer. Editorial typography. AIDA structure. |
| `brandkit` | Premium brand identity board generation. |
| `imagegen-frontend-web` | Section-by-section visual references before code. |
| `image-to-code` | Generate design images first, implement to match. |
| `minimalist-ui` | Editorial fallback if direction needs softening. |
| `industrial-brutalist-ui` | Engineering-extreme register if direction needs hardening. |
| `impeccable` | Anti-pattern guardrail. Final critique pass. |

---

## Platform Reality Check

The Singer / Cartier / Pagani register is a **$150,000 to $400,000 build** at the studio tier (Locomotive, Immersive Garden). WordPress + Elementor cannot deliver this. It can deliver "meaningfully better than the current placeholder."

Three honest paths:

| Path | Ceiling | Time | Cost | Notes |
|---|---|---|---|---|
| **A. Custom Next.js on Vercel** | 95% of state-of-the-art | 4 to 8 weeks | Waseem dev hours | Matches meditation-app stack you already run. Best long-term. |
| **B. Premium Webflow rebuild** | 80% of state-of-the-art | 3 to 5 weeks | Webflow license plus designer | Faster than custom, slower than Elementor. Reaches Singer-adjacent. |
| **C. WordPress + Elementor refined** | 60% of state-of-the-art | 1 to 2 weeks | minimal new spend | Lowest ceiling. Best if budget is locked. |

[Inference] Path A is the right answer for a $250k-truck brand whose digital first impression literally precedes the call. The math works: an extra two weeks of Waseem versus selling one truck.

---

## Decision Points

Five questions. Lock these before any code.

1. **Platform path: A, B, or C?** Sets the ceiling. My recommendation: **A**. Custom Next.js on Vercel.
2. **Photography: shoot first, or build with current?** My recommendation: **shoot first.** Half-day with Kalvin. Three lanes (environmental, studio macro, reportage). The site cannot escape its photography ceiling.
3. **Naming convention: color names or place names?** "The Sky Blue" vs "Commission One: A1A." My recommendation: **place names.** More editorial, more durable, scales beyond two trucks.
4. **Should I run `brandkit` and `imagegen-frontend-web` to generate visual references for each page before code?** Would produce 6 to 8 hero/section reference images you could react to. My recommendation: **yes.** Cheap insurance against another v3 swing.
5. **Do you want me to commission an outside art director for one creative direction sprint?** $8k to $15k engagement, locks photography direction + type system + brand-look reference doc. My recommendation: **maybe not for v3.** The skills now installed plus this DIRECTION doc plus your taste plus my execution should clear the bar. Reserve the outside AD spend for a 12-month-out rebrand if revenue justifies.

---

Status: **Awaiting answers to questions 1 through 4.** No code happens until those are answered. Question 5 is optional.
