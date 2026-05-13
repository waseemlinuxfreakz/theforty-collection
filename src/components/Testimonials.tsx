"use client";

import { useState, useCallback } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  vehicle: string;
};

export const ownerTestimonials: Testimonial[] = [
  {
    quote:
      "I drive it every weekend. The first time I turned the key I expected a 1973 truck. I got something that drives like a brand-new vehicle while still looking exactly like the one I learned to drive in.",
    name: "Brandon E.",
    title: "1973 Sky Blue FJ40 Owner",
    vehicle: "Commission One",
  },
  {
    quote:
      "Larry, Ju, and Pat are the kind of people who answer the phone. They handed me the keys with a written specification, a service schedule, and a number to call if anything came up. Six months later, nothing has.",
    name: "Christopher M.",
    title: "1974 Desert Tan FJ40 Owner",
    vehicle: "Commission Two",
  },
  {
    quote:
      "This is the level of attention I expect at this price point. I have owned a Defender Works and a Singer 911. Forty Collection competes with both, with a level of personal service neither one offered.",
    name: "Tomás G.",
    title: "1976 Heritage FJ40 Owner",
    vehicle: "Heritage Edition",
  },
  {
    quote:
      "The chassis is what sold me. I have driven dozens of restomods over the past decade. The Rolling 40 chassis genuinely changes how the truck feels on the road. Not just better, different.",
    name: "Patricia W.",
    title: "1971 Sky Blue FJ40 Owner",
    vehicle: "Coilover Edition",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = ownerTestimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  const t = ownerTestimonials[index];

  return (
    <div>
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-end mb-10">
        <div>
          <div className="eyebrow brass-light mb-3">Owner Voices</div>
          <h2
            className="display-md"
            style={{ color: "var(--color-bone)", maxWidth: "20ch" }}
          >
            Hear from owners.
          </h2>
        </div>
        <div className="flex md:justify-end gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center transition-all hover:scale-105"
            style={{
              border: "1px solid rgba(232, 225, 212, 0.25)",
              color: "var(--color-bone)",
              fontSize: "20px",
              fontFamily: "var(--font-mono)",
            }}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center transition-all hover:scale-105"
            style={{
              border: "1px solid rgba(232, 225, 212, 0.25)",
              color: "var(--color-bone)",
              fontSize: "20px",
              fontFamily: "var(--font-mono)",
            }}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      <div
        style={{
          minHeight: "320px",
          paddingBlock: "32px",
          borderTop: "var(--rule-line-on-dark)",
          borderBottom: "var(--rule-line-on-dark)",
        }}
      >
        <blockquote
          className="display-sm"
          style={{
            color: "var(--color-bone)",
            maxWidth: "60ch",
            lineHeight: 1.25,
            fontWeight: 400,
            marginBottom: "32px",
            transition: "opacity 300ms",
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <div
              className="font-[family-name:var(--font-display)] uppercase"
              style={{
                fontSize: "20px",
                color: "var(--color-bone)",
                letterSpacing: "0.02em",
              }}
            >
              {t.name}
            </div>
            <div
              className="eyebrow"
              style={{ color: "var(--color-brass-light)", marginTop: "6px" }}
            >
              {t.title}
            </div>
          </div>
          <div
            className="eyebrow"
            style={{ color: "rgba(232, 225, 212, 0.45)" }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
