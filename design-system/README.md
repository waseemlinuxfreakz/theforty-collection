# Design System & References — Forty Collection

This folder contains the visual design assets, page mockups, and strategic
documents for the Forty Collection website redesign.

**Production target:** WordPress. The Next.js codebase in this repo
(`/src`, `/public`) is a high-fidelity *design prototype* only — use it as
visual reference, not as code to port.

---

## How to use this folder (developer onboarding)

1. **Start with `DIRECTION-V3.md`** for the strategic creative direction
   (brand positioning, typography rationale, color palette, photography
   philosophy).
2. **Scroll through `brand-references/`** for visual reference — the three
   strategic boards, six page mockups, hero photography composites, and
   logo experiments.
3. **Open the live Next.js prototype** in a browser to see the highest-fidelity
   execution: https://forty-collection-v3.vercel.app
4. **Reference `prototype-v2/` HTML/CSS** if you want a more direct
   structural read on layout patterns (the React build adds component
   abstractions).
5. **Read `PRODUCT.md`** for page-level requirements (sections, CTAs, data
   per template).

---

## Folder contents

### `brand-references/` (17 PNG files, ~12 MB)
- `board-01-cover.png` — Brand cover board: FORTY wordmark, brass mark,
  chassis hero, "THE CHASSIS IS OURS" tagline
- `board-02-system.png` — Design system: typography (GT America Condensed
  Black), color palette (Oxide Black, Bone, Brass Oxide, Brass Shadow),
  layout patterns
- `board-03-photography.png` — Three-lane photography direction:
  Environmental, Studio Macro, Heritage Reportage
- `page-01` through `page-06` — Home hero, home pair, vehicle hero,
  process chapter, spec sheet, commission page mockups
- `photo-01` through `photo-03` — Photography lane references
- `hero-blue-final`, `hero-blue-wide`, `hero-tan-rustic` — Production hero
  composites
- `brass-shield.png`, `brass-shield-polished.png` — Logo experiments

### `prototype-v2/` (HTML/CSS structural reference)
Early hand-coded HTML/CSS prototype. Image references are intentionally
broken — use the source files (`.html`, `css/`, `js/`) to read layout
structure only. Final photography lives in `/public/images/` at the repo
root.

### Strategic docs
- `DESIGN.md` — Early design notes
- `DIRECTION-V3.md` — Strategic creative direction (V3 = "watch brand that
  makes trucks")
- `PRODUCT.md` — Page-level product spec

---

## Important: direction is evolving

The DIRECTION-V3.md document anchors on a polished "watch-brand-that-makes-
trucks" positioning (brass + oxide + bone, condensed display sans, watch-movement
chassis macros).

After the 2026-05-12 client meeting with Ju (driving the vehicles in person),
the direction is shifting toward a more **raw, typewriter, "1979 feel"** treatment.
Final design language is still being locked. Build with the V3 system as a
foundation; expect texture and nostalgia layers to be added.
