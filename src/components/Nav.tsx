"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavProps = {
  variant?: "dark" | "light" | "blend";
};

export function Nav({ variant: _variant = "blend" }: NavProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 text-[var(--color-bone)]"
        style={{
          height: "80px",
          background: open ? "transparent" : "rgba(14, 14, 14, 0.42)",
          backdropFilter: open ? "none" : "blur(12px) saturate(140%)",
          WebkitBackdropFilter: open ? "none" : "blur(12px) saturate(140%)",
          borderBottom: open
            ? "1px solid transparent"
            : "1px solid rgba(232, 225, 212, 0.06)",
          transition: "background 320ms var(--ease-out-quart), border-color 320ms",
        }}
      >
        <div className="container-wide flex items-center justify-between h-full">
          {/* Brand mark */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
            style={{ lineHeight: 1 }}
          >
            <span className="relative w-6 h-6 inline-block flex-shrink-0">
              <Image
                src="/brass-shield.png"
                alt="Forty Collection"
                fill
                sizes="24px"
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col" style={{ gap: "4px" }}>
              <span
                className="font-[family-name:var(--font-display)] tracking-[0.005em] uppercase"
                style={{ fontSize: "20px", lineHeight: 1 }}
              >
                FORTY
              </span>
              <span
                className="hidden sm:inline-block font-[family-name:var(--font-mono)] uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  opacity: 0.65,
                  lineHeight: 1,
                }}
              >
                Collection
              </span>
            </span>
          </Link>

          {/* Hamburger toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
            style={{
              color: "var(--color-bone)",
              fontFamily: "var(--font-mono)",
              lineHeight: 1,
            }}
          >
            <span
              className="hidden sm:inline-block"
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {open ? "Close" : "Menu"}
            </span>
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background: "rgba(14, 14, 14, 0.985)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 360ms var(--ease-out-quart)",
        }}
      >
        <div
          className="h-full flex flex-col"
          style={{ paddingTop: "calc(var(--spacing-9) + 8px)", paddingBottom: "var(--spacing-7)" }}
        >
          <div className="container-wide flex-1 flex flex-col justify-center">
            <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
              {/* LEFT — primary nav */}
              <div>
                <div
                  className="eyebrow mb-6"
                  style={{ color: "var(--color-brass-light)" }}
                >
                  Models
                </div>
                <ul className="flex flex-col gap-1">
                  <OverlayLink
                    href="/models/fj"
                    label="FJ Collection"
                    status="Available"
                    available
                    onClick={() => setOpen(false)}
                  />
                  <OverlayLink
                    href="/models/bronco"
                    label="Bronco Collection"
                    status="Coming 2027"
                    onClick={() => setOpen(false)}
                  />
                  <OverlayLink
                    href="/models/defender"
                    label="Defender Collection"
                    status="Coming 2028"
                    onClick={() => setOpen(false)}
                  />
                </ul>

                <div
                  className="eyebrow mt-12 mb-6"
                  style={{ color: "var(--color-brass-light)" }}
                >
                  The Work
                </div>
                <ul className="flex flex-col gap-1">
                  <OverlayLink
                    href="/process"
                    label="Process"
                    onClick={() => setOpen(false)}
                  />
                  <OverlayLink
                    href="/commission"
                    label="Commission"
                    onClick={() => setOpen(false)}
                  />
                  <OverlayLink
                    href="/about"
                    label="About"
                    onClick={() => setOpen(false)}
                  />
                </ul>
              </div>

              {/* RIGHT — contact + CTA */}
              <div className="flex flex-col gap-8 md:items-end md:text-right">
                <div>
                  <div
                    className="eyebrow mb-4"
                    style={{ color: "var(--color-brass-light)" }}
                  >
                    Inquire Directly
                  </div>
                  <a
                    href="tel:+19545550140"
                    className="font-[family-name:var(--font-display)] uppercase block leading-none"
                    style={{
                      fontSize: "clamp(28px, 3.2vw, 44px)",
                      letterSpacing: "0.02em",
                      color: "var(--color-bone)",
                      marginBottom: "8px",
                    }}
                  >
                    +1 (954) 555-0140
                  </a>
                  <a
                    href="mailto:hello@thefortycollection.com"
                    className="body-lg"
                    style={{ color: "rgba(232, 225, 212, 0.7)" }}
                  >
                    hello@thefortycollection.com
                  </a>
                </div>

                <div>
                  <div
                    className="eyebrow mb-3"
                    style={{ color: "var(--color-brass-light)" }}
                  >
                    Visit
                  </div>
                  <p className="body-lg" style={{ color: "rgba(232, 225, 212, 0.7)" }}>
                    East Fort Lauderdale, Florida<br />By appointment
                  </p>
                </div>

                <Link
                  href="/commission"
                  onClick={() => setOpen(false)}
                  className="btn btn-arrow"
                  style={{
                    background: "var(--color-brass)",
                    color: "var(--color-oxide)",
                    border: "1px solid var(--color-brass)",
                  }}
                >
                  Commission a Build
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="container-wide">
            <div
              className="flex justify-between flex-wrap gap-3 pt-5"
              style={{
                borderTop: "1px solid rgba(232, 225, 212, 0.1)",
                fontSize: "11px",
                color: "rgba(232, 225, 212, 0.4)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              <span>© 2026 Forty Collection</span>
              <span>One vehicle at a time.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span
      className="relative inline-block"
      style={{ width: "22px", height: "12px" }}
      aria-hidden="true"
    >
      <span
        className="absolute left-0 right-0 h-px bg-current"
        style={{
          top: open ? "50%" : "0",
          transform: open ? "translateY(-50%) rotate(45deg)" : "none",
          transition: "all 320ms var(--ease-out-quart)",
        }}
      />
      <span
        className="absolute left-0 right-0 h-px bg-current"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          opacity: open ? 0 : 1,
          transition: "opacity 200ms",
        }}
      />
      <span
        className="absolute left-0 right-0 h-px bg-current"
        style={{
          bottom: open ? "calc(50% - 1px)" : "0",
          transform: open ? "translateY(50%) rotate(-45deg)" : "none",
          transition: "all 320ms var(--ease-out-quart)",
        }}
      />
    </span>
  );
}

function OverlayLink({
  href,
  label,
  status,
  available,
  onClick,
}: {
  href: string;
  label: string;
  status?: string;
  available?: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="group inline-flex items-baseline gap-5 transition-opacity hover:opacity-100"
        style={{
          paddingBlock: "8px",
          opacity: available === false ? 0.55 : 1,
        }}
      >
        <span
          className="font-[family-name:var(--font-display)] uppercase leading-none"
          style={{
            fontSize: "clamp(32px, 4.2vw, 64px)",
            letterSpacing: "0.005em",
            color: "var(--color-bone)",
          }}
        >
          {label}
        </span>
        {status && (
          <span
            className="font-[family-name:var(--font-mono)]"
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: available ? "var(--color-brass-light)" : "rgba(232, 225, 212, 0.45)",
              fontWeight: 600,
            }}
          >
            {status}
          </span>
        )}
      </Link>
    </li>
  );
}
