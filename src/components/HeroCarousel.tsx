"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type CarouselImage = { src: string; alt: string };

export function HeroCarousel({
  images,
  badge,
}: {
  images: CarouselImage[];
  badge?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  // Keyboard nav for the lightbox + when carousel is focused
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }
    };
    document.addEventListener("keydown", onKey);
    if (lightboxOpen) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, prev, next]);

  return (
    <>
      {/* Main image */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-[var(--color-oxide)]"
        style={{ marginBottom: "16px" }}
      >
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-opacity duration-500"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          />
        ))}

        {/* Status badge */}
        {badge && (
          <div
            className="absolute top-4 left-4 z-10"
            style={{
              background: "rgba(14, 14, 14, 0.78)",
              color: "var(--color-brass-light)",
              padding: "6px 12px",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
            }}
          >
            {badge}
          </div>
        )}

        {/* Photo counter */}
        <div
          className="absolute top-4 right-4 z-10 eyebrow"
          style={{
            background: "rgba(14, 14, 14, 0.78)",
            color: "var(--color-bone)",
            padding: "6px 12px",
            backdropFilter: "blur(8px)",
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-4 right-4 z-10 eyebrow flex items-center gap-2 transition-opacity hover:opacity-80"
          style={{
            background: "rgba(14, 14, 14, 0.78)",
            color: "var(--color-bone)",
            padding: "8px 14px",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Open in lightbox"
        >
          Expand
          <span style={{ fontSize: "14px" }}>↗</span>
        </button>

        {/* Prev arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 transition-all hover:scale-110"
          style={{
            transform: "translateY(-50%)",
            background: "rgba(14, 14, 14, 0.78)",
            color: "var(--color-bone)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            fontSize: "20px",
            fontFamily: "var(--font-mono)",
          }}
          aria-label="Previous photo"
        >
          ←
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 z-10 transition-all hover:scale-110"
          style={{
            transform: "translateY(-50%)",
            background: "rgba(14, 14, 14, 0.78)",
            color: "var(--color-bone)",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            fontSize: "20px",
            fontFamily: "var(--font-mono)",
          }}
          aria-label="Next photo"
        >
          →
        </button>
      </div>

      {/* Thumbnails strip */}
      <div
        className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2"
        style={{ marginBottom: "16px" }}
      >
        {images.map((img, i) => (
          <button
            key={`thumb-${img.src}`}
            onClick={() => setActiveIndex(i)}
            className="relative aspect-[3/2] overflow-hidden bg-[var(--color-graphite)] cursor-pointer transition-all"
            style={{
              outline:
                activeIndex === i
                  ? "2px solid var(--color-brass)"
                  : "1px solid rgba(14, 14, 14, 0.12)",
              outlineOffset: activeIndex === i ? "2px" : "0",
              opacity: activeIndex === i ? 1 : 0.65,
            }}
            aria-label={`Go to photo ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[1000] flex flex-col p-6"
          style={{ background: "rgba(14, 14, 14, 0.96)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-5 right-6 label hover:opacity-60 transition-opacity z-10"
            style={{ color: "var(--color-bone)" }}
          >
            CLOSE ×
          </button>
          <div
            className="flex-1 flex items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prev}
              className="absolute left-4 w-12 h-12 rounded-full flex items-center justify-center hover:opacity-100 transition-all"
              style={{
                background: "rgba(232, 225, 212, 0.06)",
                color: "var(--color-bone)",
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <div className="relative w-[92%] h-[86vh]">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={next}
              className="absolute right-4 w-12 h-12 rounded-full flex items-center justify-center hover:opacity-100 transition-all"
              style={{
                background: "rgba(232, 225, 212, 0.06)",
                color: "var(--color-bone)",
              }}
              aria-label="Next"
            >
              →
            </button>
          </div>
          <div
            className="text-center mt-3 label"
            style={{ color: "rgba(232, 225, 212, 0.55)" }}
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}
