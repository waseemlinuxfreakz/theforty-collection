import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { collections } from "@/lib/builds";

export const metadata = {
  title: "Models — Forty Collection",
  description: "FJ, Bronco, and Defender collections from Forty Collection. East Fort Lauderdale.",
};

export default function ModelsPage() {
  return (
    <>
      <Nav variant="blend" />

      {/* PAGE HEADER */}
      <section
        className="bg-[var(--color-oxide)] text-[var(--color-bone)]"
        style={{
          paddingTop: "var(--page-header-pt)",
          paddingBottom: "var(--page-header-pb)",
          borderBottom: "1px solid rgba(160, 107, 46, 0.15)",
        }}
      >
        <div className="container-wide">
          <div className="eyebrow brass-light mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-current" />
            Three lineages, one shop
          </div>
          <h1 className="display-xl mb-5">Models.</h1>
          <p
            className="body-xl"
            style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.78)" }}
          >
            Forty Collection is built on three vehicle lineages, each engineered on a Rolling 40
            chassis. The FJ Collection is live. Bronco and Defender programs are in development.
          </p>
        </div>
      </section>

      {/* COLLECTIONS GRID — square cards, tighter gap, vehicle centered */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {collections.map((c, i) => (
              <Link
                key={c.slug}
                href={`/models/${c.slug}`}
                className="group block"
                style={{ opacity: c.status === "available" ? 1 : 0.78 }}
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--color-oxide)] mb-5">
                  <Image
                    src={c.heroImage}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    style={{
                      objectPosition: "center 60%",
                      ...(c.status === "coming-soon"
                        ? { filter: "grayscale(0.4) brightness(0.7)" }
                        : {}),
                    }}
                  />
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      background: "rgba(14, 14, 14, 0.78)",
                      color:
                        c.status === "available"
                          ? "var(--color-brass-light)"
                          : "rgba(232, 225, 212, 0.7)",
                      padding: "6px 12px",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      backdropFilter: "blur(8px)",
                      fontWeight: 600,
                    }}
                  >
                    {c.status === "available" ? "Now Available" : "In Development"}
                  </div>
                </div>
                <div className="eyebrow brass mb-2">
                  0{i + 1} / {c.yearRange}
                </div>
                <h2 className="display-md mb-3">{c.shortName}.</h2>
                <p
                  className="body-sm mb-4"
                  style={{ color: "var(--color-graphite)", maxWidth: "44ch" }}
                >
                  {c.description[0]}
                </p>
                <span className="text-link">
                  {c.status === "available" ? "View Collection" : "Notify Me"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
