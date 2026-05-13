"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

type LightboxProps = {
  images: { src: string; alt: string }[];
};

export function Lightbox({ images }: LightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? 0 : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="relative aspect-[3/2] overflow-hidden bg-[var(--color-graphite)] group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] flex flex-col p-6"
          style={{ background: "rgba(14, 14, 14, 0.96)" }}
          onClick={close}
        >
          <button
            onClick={close}
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
                src={images[openIndex].src}
                alt={images[openIndex].alt}
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
          <div className="text-center mt-3 label" style={{ color: "rgba(232, 225, 212, 0.55)" }}>
            {String(openIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}
