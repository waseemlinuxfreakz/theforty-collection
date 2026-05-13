"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Build } from "@/lib/builds";

/* Past + currently-available builds combined into a carousel for the product detail page */
type CarouselCard = {
  href: string;
  status: "Available" | "Sold" | "Reserved" | "In Build";
  number: string;
  bodyYear: number;
  name: string;
  configName: string;
  hero: string;
  price: string;
  monthlyEstimate?: string;
};

export function SimilarBuilds({
  current,
  others,
}: {
  current: { collection: string; slug: string };
  others: Build[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Curated set of past builds + currently available others to populate the carousel
  const cards: CarouselCard[] = [
    ...others.map((b) => ({
      href: `/for-sale/${b.collection}/${b.slug}`,
      status: b.status as CarouselCard["status"],
      number: b.number,
      bodyYear: b.bodyYear,
      name: b.name,
      configName: b.configName,
      hero: b.hero,
      price: b.price,
      monthlyEstimate: b.monthlyEstimate,
    })),
    {
      href: `/for-sale/${current.collection}/${current.slug}`,
      status: "Sold",
      number: "P-014",
      bodyYear: 1972,
      name: "The Heritage Olive",
      configName: "FJ40 Coilover Edition",
      hero: "/images/hero/blue.png",
      price: "$272,500",
    },
    {
      href: `/for-sale/${current.collection}/${current.slug}`,
      status: "Sold",
      number: "P-013",
      bodyYear: 1976,
      name: "The Bone Cream",
      configName: "FJ40 Heritage Edition",
      hero: "/images/hero/tan.png",
      price: "$295,000",
    },
    {
      href: `/for-sale/${current.collection}/${current.slug}`,
      status: "In Build",
      number: "C-019",
      bodyYear: 1974,
      name: "The Ranger Red",
      configName: "FJ40 Coilover Edition",
      hero: "/images/hero/blue.png",
      price: "Reserved · Q3 2027",
    },
    {
      href: `/for-sale/${current.collection}/${current.slug}`,
      status: "Sold",
      number: "P-011",
      bodyYear: 1975,
      name: "The Coral White",
      configName: "FJ40 Soft Top Beach",
      hero: "/images/hero/tan.png",
      price: "$268,750",
    },
  ];

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const w = card?.offsetWidth ?? 320;
    track.scrollBy({ left: (w + 24) * dir, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="flex justify-between items-end pb-5 mb-10 flex-wrap gap-4"
        style={{ borderBottom: "1px solid rgba(14, 14, 14, 0.12)" }}
      >
        <div>
          <div className="eyebrow brass mb-3">Currently For Sale + Past Builds</div>
          <h2 className="display-lg" style={{ color: "var(--color-oxide)" }}>
            Similar builds.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/models/fj" className="text-link">
            FJ Collection
          </Link>
          <button
            onClick={() => scrollByCard(-1)}
            className="w-12 h-12 flex items-center justify-center transition-all hover:scale-105"
            style={{
              border: "1px solid rgba(14, 14, 14, 0.2)",
              color: "var(--color-oxide)",
              fontSize: "20px",
              fontFamily: "var(--font-mono)",
            }}
            aria-label="Previous build"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCard(1)}
            className="w-12 h-12 flex items-center justify-center transition-all hover:scale-105"
            style={{
              border: "1px solid rgba(14, 14, 14, 0.2)",
              color: "var(--color-oxide)",
              fontSize: "20px",
              fontFamily: "var(--font-mono)",
            }}
            aria-label="Next build"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-2"
        style={{
          scrollSnapType: "x mandatory",
          scrollPadding: "0 var(--gutter)",
          scrollbarWidth: "none",
        }}
      >
        {cards.map((card, i) => (
          <Link
            key={`${card.number}-${i}`}
            href={card.href}
            data-card
            className="group block flex-shrink-0"
            style={{
              width: "calc(min(420px, 88vw))",
              scrollSnapAlign: "start",
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-[var(--color-oxide)]">
              <Image
                src={card.hero}
                alt={card.name}
                fill
                sizes="420px"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                style={card.status === "Sold" ? { filter: "grayscale(0.4) brightness(0.85)" } : undefined}
              />
              <div
                className="absolute top-3 left-3"
                style={{
                  background: "rgba(14, 14, 14, 0.78)",
                  color:
                    card.status === "Sold"
                      ? "rgba(232, 225, 212, 0.7)"
                      : card.status === "In Build"
                      ? "var(--color-brass-light)"
                      : "var(--color-brass-light)",
                  padding: "5px 10px",
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                  fontWeight: 600,
                }}
              >
                {card.status}
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
              <div>
                <div className="eyebrow brass mb-1">
                  FJ40 / {card.number} · {card.bodyYear}
                </div>
                <h3
                  className="font-[family-name:var(--font-display)] uppercase"
                  style={{
                    fontSize: "26px",
                    letterSpacing: "0.02em",
                    color: "var(--color-oxide)",
                    lineHeight: 1.1,
                  }}
                >
                  {card.name}.
                </h3>
                <p
                  className="body-sm mt-1"
                  style={{ color: "var(--color-graphite)" }}
                >
                  {card.configName}
                </p>
              </div>
              <div className="text-right">
                <div
                  className="font-[family-name:var(--font-display)]"
                  style={{
                    fontSize: "28px",
                    color: card.status === "Sold" ? "var(--color-stone)" : "var(--color-oxide)",
                    lineHeight: 1,
                    letterSpacing: "0.01em",
                  }}
                >
                  {card.price}
                </div>
                {card.monthlyEstimate && (
                  <div className="eyebrow dim mt-1" style={{ fontSize: "10px" }}>
                    {card.monthlyEstimate}
                  </div>
                )}
              </div>
            </div>
            <span
              className="text-link mt-3 inline-flex"
              style={{ color: card.status === "Sold" ? "var(--color-stone)" : "var(--color-brass)" }}
            >
              {card.status === "Sold" ? "View Past Build" : "View Build"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
