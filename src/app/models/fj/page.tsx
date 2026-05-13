import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getCollection, getBuildsByCollection } from "@/lib/builds";
import { notFound } from "next/navigation";

export const metadata = {
  title: "FJ Collection — Forty Collection",
  description:
    "Vintage Toyota Land Cruiser FJ40 re-engineered. Six commissions a year. East Fort Lauderdale.",
};

export default function FJCollectionPage() {
  const collection = getCollection("fj");
  if (!collection) notFound();
  const builds = getBuildsByCollection("fj");

  return (
    <>
      <Nav variant="blend" />

      {/* HERO STRIP — slim banner with year range */}
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
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,14,14,0.4) 0%, rgba(14,14,14,0) 30%, rgba(14,14,14,0) 60%, rgba(14,14,14,0.78) 100%)",
          }}
        />
        <div
          className="absolute inset-0 flex items-end"
          style={{ paddingBottom: "var(--spacing-7)" }}
        >
          <div className="container-wide w-full">
            <div
              className="eyebrow brass-light mb-4 flex items-center gap-3"
              style={{ color: "var(--color-brass-light)" }}
            >
              <span className="block w-8 h-px bg-current" />
              {collection.heroEyebrow}
            </div>
            <div className="flex items-baseline flex-wrap gap-x-7 gap-y-2">
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
              <h1
                className="display-xl"
                style={{ color: "var(--color-bone)" }}
              >
                {collection.tagline}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + POSITIONING */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="eyebrow brass mb-4 flex items-center gap-3">
                <span className="block w-8 h-px bg-current" />
                The Lineage
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
              <ul
                className="font-[family-name:var(--font-mono)] uppercase mt-6"
                style={{ fontSize: "13px", letterSpacing: "0.08em", lineHeight: 2 }}
              >
                {collection.positioning.map((line) => (
                  <li
                    key={line}
                    className="flex items-baseline gap-3"
                    style={{ color: "var(--color-graphite)" }}
                  >
                    <span style={{ color: "var(--color-brass)" }}>—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERIES */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div
            className="flex justify-between items-end pb-5 mb-12"
            style={{ borderBottom: "1px solid rgba(14, 14, 14, 0.12)" }}
          >
            <div>
              <div className="eyebrow brass mb-3">FJ Collection / Signature Series</div>
              <h2 className="display-lg">Configurations.</h2>
            </div>
            <Link href="/commission" className="text-link">
              Commission a Build
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collection.signatureSeries.map((series) => (
              <div
                key={series.slug}
                className="group"
                style={{ opacity: series.available ? 1 : 0.62 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-[var(--color-oxide)]">
                  <Image
                    src={series.image}
                    alt={series.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  {!series.available && (
                    <div
                      className="absolute top-4 left-4"
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
                      Coming 2027
                    </div>
                  )}
                </div>
                <div className="eyebrow brass mb-2">{series.yearRange}</div>
                <h3 className="display-sm mb-3">{series.name}</h3>
                <p
                  className="body-sm mb-4"
                  style={{ color: "var(--color-graphite)", maxWidth: "44ch" }}
                >
                  {series.description}
                </p>
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(14, 14, 14, 0.12)" }}
                >
                  <span
                    className="font-[family-name:var(--font-mono)]"
                    style={{
                      fontSize: "14px",
                      letterSpacing: "0.04em",
                      color: "var(--color-oxide)",
                      fontWeight: 600,
                    }}
                  >
                    {series.startingPrice}
                  </span>
                  {series.available ? (
                    <Link href="/commission" className="text-link">
                      Commission
                    </Link>
                  ) : (
                    <span className="eyebrow dim">Notify Me</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY FOR SALE */}
      {builds.length > 0 && (
        <section
          className="bg-[var(--color-bone)]"
          style={{ paddingBlock: "var(--section-y)" }}
        >
          <div className="container-wide">
            <div
              className="flex justify-between items-end pb-5 mb-10"
              style={{ borderBottom: "1px solid rgba(14, 14, 14, 0.12)" }}
            >
              <div>
                <div className="eyebrow brass mb-3">FJ Collection / Now Available</div>
                <h2 className="display-lg">Currently for sale.</h2>
              </div>
              <span className="eyebrow dim">{builds.length} builds available</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {builds.map((build) => (
                <Link
                  key={build.slug}
                  href={`/for-sale/${build.collection}/${build.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-[var(--color-oxide)]">
                    <Image
                      src={build.hero}
                      alt={build.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute top-4 left-4"
                      style={{
                        background: "rgba(14, 14, 14, 0.78)",
                        color: "var(--color-bone)",
                        padding: "6px 12px",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {build.status}
                    </div>
                    <div
                      className="absolute bottom-4 right-4"
                      style={{
                        color: "var(--color-bone)",
                        fontSize: "12px",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      FJ40 / {build.number}
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-end">
                    <div>
                      <div className="eyebrow brass mb-1">{build.bodyYear} · FJ40</div>
                      <h3 className="display-md">{build.name}.</h3>
                      <p
                        className="body-sm mt-2"
                        style={{ color: "var(--color-graphite)" }}
                      >
                        {build.configName}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        className="font-[family-name:var(--font-display)]"
                        style={{
                          fontSize: "32px",
                          color: "var(--color-oxide)",
                        }}
                      >
                        {build.price}
                      </div>
                      <div className="eyebrow dim mt-1">{build.monthlyEstimate}</div>
                    </div>
                  </div>
                  <div
                    className="grid grid-cols-3 gap-4 pt-4 mt-4"
                    style={{
                      borderTop: "1px solid rgba(14, 14, 14, 0.12)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <SpecMini label="Drivetrain" value="5.3L LS V8" />
                    <SpecMini label="Chassis" value="Rolling 40" />
                    <SpecMini label="Mileage" value={build.mileage.split(" ")[0] + " mi"} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DRIVING EXPERIENCE / FEATURES */}
      <section
        className="bg-[var(--color-oxide)] text-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div
            className="flex justify-between items-end pb-5 mb-12"
            style={{ borderBottom: "1px solid rgba(160, 107, 46, 0.18)" }}
          >
            <div>
              <div className="eyebrow brass-light mb-3">Engineering Standard</div>
              <h2 className="display-lg">Unrivaled driving experience.</h2>
            </div>
            <Link href="/process" className="text-link" style={{ color: "var(--color-brass-light)" }}>
              The Process
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collection.drivingFeatures.map((f, i) => (
              <div
                key={f.title}
                style={{
                  paddingBlock: "var(--spacing-5)",
                  borderTop: "2px solid var(--color-brass-light)",
                }}
              >
                <div
                  className="font-[family-name:var(--font-display)] mb-4"
                  style={{
                    fontSize: "44px",
                    color: "var(--color-brass-light)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="display-sm mb-3">{f.title}</h3>
                <p
                  className="body-sm"
                  style={{ color: "rgba(232, 225, 212, 0.78)", maxWidth: "44ch" }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAINT PALETTE */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start mb-10">
            <div>
              <div className="eyebrow brass mb-3">Standard Paint</div>
              <h2 className="display-md">Six colors, every single-stage, custom mix.</h2>
            </div>
            <p
              className="body-xl"
              style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
            >
              Every Forty Collection FJ40 is finished in single-stage paint with a heavy clear flat.
              Custom mixes match vintage Toyota color samples. Custom hues available on request — we
              will mix anything to a sample you bring us.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {collection.paintPalette.map((color) => (
              <div key={color.name}>
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    background: color.hex,
                    border: "1px solid rgba(14, 14, 14, 0.08)",
                    marginBottom: "12px",
                  }}
                />
                <div className="eyebrow mb-1" style={{ color: "var(--color-oxide)" }}>
                  {color.name}
                </div>
                <div
                  className="font-[family-name:var(--font-mono)]"
                  style={{
                    fontSize: "11px",
                    color: "var(--color-stone)",
                    letterSpacing: "0.04em",
                    marginBottom: "4px",
                  }}
                >
                  {color.hex.toUpperCase()}
                </div>
                <p className="body-sm" style={{ color: "var(--color-graphite)", fontSize: "13px" }}>
                  {color.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEATHER PALETTE */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start mb-10">
            <div>
              <div className="eyebrow brass mb-3">Standard Leather</div>
              <h2 className="display-md">Hand-stitched, in five tones.</h2>
            </div>
            <p
              className="body-xl"
              style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
            >
              Diamond-stitched standard. Smooth hand-stitch and heritage perforated available on
              specific configurations. All leather is sourced from a single tannery, hand-cut and
              hand-sewn at Forty Collection.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
            {collection.leatherPalette.map((color) => (
              <div key={color.name}>
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    background: color.hex,
                    border: "1px solid rgba(14, 14, 14, 0.08)",
                    marginBottom: "12px",
                  }}
                />
                <div className="eyebrow mb-1" style={{ color: "var(--color-oxide)" }}>
                  {color.name}
                </div>
                <p className="body-sm" style={{ color: "var(--color-graphite)", fontSize: "13px" }}>
                  {color.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start mb-12">
            <div>
              <div className="eyebrow brass mb-3">Make It Your Own</div>
              <h2 className="display-lg">Freedom and choice.</h2>
            </div>
            <p
              className="body-xl"
              style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
            >
              Every Signature configuration is the starting point. Add upgrades, change drivetrain,
              swap interior, layer in extra hardware. We quote firm before any metal gets cut.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {collection.customizationCategories.map((cat) => (
              <div key={cat.title}>
                <h3
                  className="display-sm mb-5 pb-3"
                  style={{ borderBottom: "2px solid var(--color-brass)" }}
                >
                  {cat.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="pb-4"
                      style={{ borderBottom: "1px dotted rgba(14, 14, 14, 0.12)" }}
                    >
                      <div className="eyebrow mb-1" style={{ color: "var(--color-brass)" }}>
                        {item.name}
                      </div>
                      <p
                        className="body-sm"
                        style={{ color: "var(--color-graphite)", fontSize: "14px" }}
                      >
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-tight">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="eyebrow brass mb-3">Warranty</div>
              <h2 className="display-md">2-year bumper-to-bumper coverage.</h2>
            </div>
            <p
              className="body-xl"
              style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
            >
              Forty Collection covers every vehicle for 24 months. Drivetrain, chassis, electronics,
              interior. Built-in service through Rolling 40 and our partner mechanic network. Full
              warranty document provided at delivery.
            </p>
          </div>
        </div>
      </section>

      {/* DRENCHED COMMISSION CTA */}
      <section
        className="text-center"
        style={{
          background: "var(--color-brass)",
          color: "var(--color-oxide)",
          paddingBlock: "var(--section-y)",
        }}
      >
        <div className="container-reading">
          <div
            className="eyebrow inline-flex items-center gap-3 mb-5"
            style={{ color: "var(--color-brass-shadow)" }}
          >
            <span className="block w-8 h-px bg-current" />
            Commission
            <span className="block w-8 h-px bg-current" />
          </div>
          <h2 className="display-lg mb-5">
            Ready to commission<br />your FJ40?
          </h2>
          <p
            className="body-xl mb-8"
            style={{
              color: "rgba(14, 14, 14, 0.78)",
              maxWidth: "50ch",
              margin: "0 auto var(--spacing-7)",
            }}
          >
            Pick the configuration, the paint, the leather, the wheels. We quote firm, schedule the
            build, and start. Six commissions a year. 2027 slots open.
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
            Start a Commission
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

function SpecMini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ color: "var(--color-stone)", fontSize: "10px", marginBottom: "2px" }}>
        {label}
      </div>
      <div style={{ color: "var(--color-oxide)", fontWeight: 600 }}>{value}</div>
    </div>
  );
}
