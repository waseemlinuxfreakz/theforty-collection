import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Collection } from "@/lib/builds";

export function CollectionPlaceholder({ collection }: { collection: Collection }) {
  return (
    <>
      <Nav variant="blend" />

      {/* HERO STRIP */}
      <section
        className="relative w-full overflow-hidden bg-[var(--color-oxide)]"
        style={{ height: "62vh", minHeight: "440px", maxHeight: "640px" }}
      >
        <Image
          src={collection.heroImage}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(0.4) brightness(0.7)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,14,14,0.5) 0%, rgba(14,14,14,0.2) 30%, rgba(14,14,14,0) 60%, rgba(14,14,14,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ paddingBottom: "var(--spacing-7)" }}
        >
          <div className="container-wide w-full">
            <div
              className="eyebrow brass-light mb-4 flex items-center gap-3"
            >
              <span className="block w-8 h-px bg-current" />
              {collection.heroEyebrow}
            </div>
            <div className="flex items-baseline flex-wrap gap-x-7 gap-y-2 mb-5">
              <span
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  letterSpacing: "0.02em",
                  color: "var(--color-brass-light)",
                  lineHeight: 1,
                }}
              >
                {collection.yearRange} /
              </span>
              <h1 className="display-xl" style={{ color: "var(--color-bone)" }}>
                {collection.tagline}
              </h1>
            </div>
            <div
              className="inline-block"
              style={{
                background: "var(--color-brass)",
                color: "var(--color-oxide)",
                padding: "8px 16px",
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {collection.positioning[1] || "Coming Soon"}
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + NOTIFY */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--spacing-10)" }}
      >
        <div className="container-tight">
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="eyebrow brass mb-4 flex items-center gap-3">
                <span className="block w-8 h-px bg-current" />
                In Development
              </div>
              <h2
                className="display-lg"
                style={{ color: "var(--color-oxide)", maxWidth: "14ch" }}
              >
                {collection.shortName}
              </h2>
            </div>
            <div>
              {collection.description.map((p, i) => (
                <p
                  key={i}
                  className="body-xl mb-5"
                  style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
                >
                  {p}
                </p>
              ))}
              <div className="flex gap-3 flex-wrap mt-7">
                <Link href="/commission" className="btn btn-brass btn-arrow">
                  Reserve a Slot
                </Link>
                <Link href="/models/fj" className="btn btn-brass">
                  See FJ Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRENCHED COMMISSION CTA */}
      <section
        className="text-center"
        style={{
          background: "var(--color-brass)",
          color: "var(--color-oxide)",
          paddingBlock: "var(--spacing-10)",
        }}
      >
        <div className="container-reading">
          <div
            className="eyebrow inline-flex items-center gap-3 mb-5"
            style={{ color: "var(--color-brass-shadow)" }}
          >
            <span className="block w-8 h-px bg-current" />
            Early Access
            <span className="block w-8 h-px bg-current" />
          </div>
          <h2 className="display-lg mb-5">
            Get on the<br />notify list.
          </h2>
          <p
            className="body-xl mb-8"
            style={{
              color: "rgba(14, 14, 14, 0.78)",
              maxWidth: "50ch",
              margin: "0 auto var(--spacing-7)",
            }}
          >
            Reservations open quarterly. Early-deposit clients get first selection on configurations
            and delivery slots when the program launches.
          </p>
          <Link
            href="/commission"
            className="btn btn-arrow"
            style={{
              background: "var(--color-oxide)",
              color: "var(--color-brass)",
              border: "1px solid var(--color-oxide)",
            }}
          >
            Reserve a Slot
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
