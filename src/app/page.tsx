import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader, SplitTwo } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <>
      <Nav variant="blend" />

      {/* HERO — Sky Blue FJ40 full-bleed cinematic, image uninterrupted */}
      <section
        className="relative w-full overflow-hidden bg-[var(--color-oxide)]"
        style={{ height: "72vh", minHeight: "520px", maxHeight: "760px" }}
      >
        <Image
          src="/images/hero/blue.png"
          alt="Sky Blue 1973 FJ40 at golden hour on Florida coastal road"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* faint bottom-edge gradient only for caption microcopy legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,14,14,0) 78%, rgba(14,14,14,0.55) 100%)",
          }}
        />
        {/* bottom microcopy strip — caption only, no headline overlay */}
        <div
          className="absolute inset-x-0 flex justify-between flex-wrap gap-3"
          style={{
            bottom: "var(--spacing-4)",
            paddingLeft: "var(--gutter)",
            paddingRight: "var(--gutter)",
          }}
        >
          <div
            className="eyebrow flex items-center gap-3 fade-up fade-up-1"
            style={{ color: "rgba(232, 225, 212, 0.92)" }}
          >
            <span className="block w-8 h-px bg-current" />
            01 · COMMISSION ONE / THE SKY BLUE
          </div>
          <div
            className="eyebrow fade-up fade-up-1"
            style={{ color: "rgba(232, 225, 212, 0.55)" }}
          >
            02 currently available · 06 built annually
          </div>
        </div>
      </section>

      {/* HERO TYPE BANNER — cream surface, headline + meta below the cinematic image */}
      <section
        className="bg-[var(--color-bone)] relative"
        style={{ paddingBlock: "var(--spacing-8)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-16 items-end">
            <div>
              <div
                className="eyebrow brass mb-4 flex items-center gap-3 fade-up fade-up-1"
              >
                <span className="block w-8 h-px bg-current" />
                FORTY · COLLECTION / EST. 2019
              </div>
              <h1
                className="display-xxl fade-up fade-up-2"
                style={{ color: "var(--color-oxide)" }}
              >
                Built one<br />at a time.
              </h1>
            </div>
            <div className="flex flex-col gap-7">
              <p
                className="body-xl fade-up fade-up-3"
                style={{ color: "var(--color-graphite)", maxWidth: "52ch" }}
              >
                Vintage Toyota FJ40 above. A chassis we engineer ourselves at Rolling 40. Six
                commissions a year, finished to a specification no factory truck has ever shared.
              </p>
              <div className="flex gap-3 flex-wrap fade-up fade-up-4">
                <Link href="/models/fj" className="btn btn-brass btn-arrow">
                  View FJ Collection
                </Link>
                <Link href="/process" className="btn btn-brass">
                  The Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PAIR */}
      <Section surface="paper" container="none">
        <div className="container-wide">
          <SectionHeader
            eyebrow="01 / Available Now"
            title="The Pair."
            link={{ href: "/models/fj", label: "FJ Collection" }}
          />
        </div>

        <PairFeature
          eyebrow="01 / Currently Available"
          headlineLine1="The"
          headlineLine2="Sky Blue."
          specs={["1973 · FJ40", "5.3L LS V8 · 325 HP", "Rolling 40 · Coilover"]}
          imageSrc="/images/hero/blue.png"
          imageAlt="Sky Blue 1973 FJ40 at golden hour"
          href="/for-sale/fj/sky-blue"
          imagePosition="left"
        />
        <div style={{ height: "1px", background: "rgba(14, 14, 14, 0.12)" }} />
        <PairFeature
          eyebrow="02 / Currently Available"
          headlineLine1="The"
          headlineLine2="Desert Tan."
          specs={["1974 · FJ40", "5.3L LS V8 · 325 HP", "Rolling 40 · Coilover"]}
          imageSrc="/images/hero/tan.png"
          imageAlt="Desert Tan 1974 FJ40 at golden hour"
          href="/for-sale/fj/desert-tan"
          imagePosition="right"
        />
      </Section>

      {/* MANIFESTO */}
      <Section surface="oxide">
        <SplitTwo
          ratio="narrow-left"
          left={
            <>
              <div
                className="eyebrow flex items-center gap-3 mb-4"
                style={{ color: "var(--color-brass-light)" }}
              >
                <span className="block w-6 h-px bg-current" />
                02 / The Difference
              </div>
              <h2 className="display-lg mb-8" style={{ maxWidth: "16ch" }}>
                The chassis<br />underneath<br />
                <span style={{ color: "var(--color-brass-light)" }}>is ours.</span>
              </h2>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/chassis/macro.png"
                  alt="Rolling 40 chassis macro"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </>
          }
          right={
            <>
              <p
                className="body-xl"
                style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.86)" }}
              >
                Every other restomod shop sources the chassis. We build it. Rolling 40, our own
                fabrication shop, engineers each chassis from raw steel, one at a time. Coilover
                front and rear. Custom crossmembers. Tested to load and torque specs that have
                nothing to do with a 1973 stamped frame.
              </p>
              <p
                className="body-xl mt-5"
                style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.86)" }}
              >
                When we hand you the keys, what is underneath the original Toyota body is unlike
                anything that left the factory. The body keeps the proportions you fell in love
                with. The chassis makes them drive like a truck built this year.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Link href="/process" className="btn btn-brass-on-dark btn-arrow">
                  See the Process
                </Link>
              </div>
            </>
          }
        />
      </Section>

      {/* PROCESS STEPS PREVIEW */}
      <Section surface="bone">
        <SectionHeader
          eyebrow="03 / How It Is Made"
          title="From Steel to Delivery."
          link={{ href: "/process", label: "Full Process" }}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Step n="01" title="Chassis">
            Rolling 40 fabricates the frame, crossmembers, and coilover suspension. Built to spec, not adapted.
          </Step>
          <Step n="02" title="Body">
            A donor FJ40 body is restored, blocked, and finished in single-stage paint. Original proportions kept.
          </Step>
          <Step n="03" title="Finish">
            Custom leather, modern instrumentation, billet hardware, audio integrated where it belongs.
          </Step>
          <Step n="04" title="Delivery">
            200-mile shakedown by the build lead. Final inspection. Hand-off in person at the shop.
          </Step>
        </div>
      </Section>

      {/* DESERT TAN — rustic full-bleed feature near bottom */}
      <section className="relative w-full overflow-hidden bg-[var(--color-oxide)]">
        <Link href="/for-sale/fj/desert-tan" className="block group">
          <div
            className="relative w-full"
            style={{ height: "min(82vh, 820px)", minHeight: "560px" }}
          >
            <Image
              src="/images/hero/tan.png"
              alt="Desert Tan 1974 FJ40 at a rustic Florida coastal boathouse"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
              style={{ objectPosition: "center center" }}
            />
            {/* very subtle bottom-edge gradient for type legibility — keep image bright */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(14,14,14,0.55) 0%, rgba(14,14,14,0) 45%)",
              }}
            />
            <div
              className="absolute inset-0 flex items-end"
              style={{ paddingBottom: "var(--spacing-7)" }}
            >
              <div className="container-wide w-full">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <div
                      className="eyebrow brass-light mb-4 flex items-center gap-3"
                    >
                      <span className="block w-8 h-px bg-current" />
                      02 · COMMISSION TWO / NOW AVAILABLE
                    </div>
                    <h2
                      className="display-xl mb-5"
                      style={{ color: "var(--color-bone)" }}
                    >
                      The Desert Tan.
                    </h2>
                    <div
                      className="font-[family-name:var(--font-mono)] uppercase"
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                        color: "rgba(232, 225, 212, 0.78)",
                        lineHeight: 1.9,
                      }}
                    >
                      <span>1974 · FJ40</span>
                      <span style={{ margin: "0 16px", opacity: 0.4 }}>·</span>
                      <span>5.3L LS V8 · 325 HP</span>
                      <span style={{ margin: "0 16px", opacity: 0.4 }}>·</span>
                      <span>Rolling 40 Coilover</span>
                    </div>
                  </div>
                  <span className="btn btn-brass-on-dark btn-arrow">View Build</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* DRENCHED COMMISSION CTA */}
      <Section surface="brass" size="lg" container="reading">
        <div className="text-center">
          <div
            className="eyebrow inline-flex items-center gap-3 mb-5"
            style={{ color: "var(--color-brass-shadow)" }}
          >
            <span className="block w-8 h-px bg-current" />
            04 / Commission
            <span className="block w-8 h-px bg-current" />
          </div>
          <h2 className="display-lg mb-5">
            Want one built<br />your way?
          </h2>
          <p
            className="body-xl mb-8"
            style={{ color: "rgba(14, 14, 14, 0.78)", maxWidth: "50ch", margin: "0 auto 64px" }}
          >
            Pick the body year, the color, the leather, the wheels. We build six FJ40s a year. Slots open
            quarterly. The one you commission is yours, only yours, before the metal gets cut.
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
      </Section>

      <Footer />
    </>
  );
}

function PairFeature({
  eyebrow,
  headlineLine1,
  headlineLine2,
  specs,
  imageSrc,
  imageAlt,
  href,
  imagePosition,
}: {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  specs: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
  imagePosition: "left" | "right";
}) {
  const ImageBlock = (
    <div
      className="relative overflow-hidden h-full"
      style={{ minHeight: "640px" }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  /* Copy block positions itself ADJACENT to the image inside its 50% column.
     For image-right rows, copy hugs the right edge of its column (next to the image).
     For image-left rows, copy hugs the left edge of its column (next to the image).
     This kills the cream void between copy and image and pushes any breathing room
     to the outer edge of the section instead. */
  const CopyBlock = (
    <div
      className="flex flex-col justify-center h-full"
      style={{
        padding: "var(--spacing-7) var(--gutter)",
        minHeight: "640px",
        alignItems: imagePosition === "right" ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
        }}
      >
        <div className="eyebrow brass mb-4">{eyebrow}</div>
        <h3 className="display-xl mb-6">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h3>
        <ul
          className="font-[family-name:var(--font-mono)] uppercase mb-8"
          style={{ fontSize: "14px", letterSpacing: "0.08em", lineHeight: 1.9 }}
        >
          {specs.map((s) => (
            <li key={s} style={{ color: "var(--color-graphite)" }}>
              {s}
            </li>
          ))}
        </ul>
        <Link href={href} className="text-link">
          View Build
        </Link>
      </div>
    </div>
  );

  return (
    <Link href={href} className="block group">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {imagePosition === "left" ? (
          <>
            {ImageBlock}
            {CopyBlock}
          </>
        ) : (
          <>
            <div className="md:order-2 h-full">{ImageBlock}</div>
            <div className="md:order-1 h-full">{CopyBlock}</div>
          </>
        )}
      </div>
    </Link>
  );
}

function MetaRow({
  label,
  value,
  first,
  brass,
}: {
  label: string;
  value: string;
  first?: boolean;
  brass?: boolean;
}) {
  return (
    <div
      className="flex justify-between items-baseline py-3"
      style={{
        borderTop: "1px solid rgba(14, 14, 14, 0.12)",
        borderBottom: first ? undefined : undefined,
      }}
    >
      <span style={{ color: "var(--color-stone)", fontSize: "11px", letterSpacing: "0.16em" }}>
        {label}
      </span>
      <span
        style={{
          color: brass ? "var(--color-brass)" : "var(--color-oxide)",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: "2px solid var(--color-brass)", paddingTop: "var(--spacing-5)" }}>
      <div
        className="font-[family-name:var(--font-display)] font-bold leading-none mb-4"
        style={{ fontSize: "60px", color: "var(--color-brass)" }}
      >
        {n}
      </div>
      <h3 className="display-sm mb-3">{title}</h3>
      <p className="body-sm" style={{ color: "var(--color-graphite)" }}>
        {children}
      </p>
    </div>
  );
}
