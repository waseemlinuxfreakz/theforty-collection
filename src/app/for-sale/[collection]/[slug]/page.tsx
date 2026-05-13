import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SpecAccordion } from "@/components/SpecAccordion";
import { Testimonials } from "@/components/Testimonials";
import { WhyForty } from "@/components/WhyForty";
import { SimilarBuilds } from "@/components/SimilarBuilds";
import {
  builds,
  getBuild,
  getOtherBuilds,
  getCollection,
} from "@/lib/builds";

export function generateStaticParams() {
  return builds.map((b) => ({ collection: b.collection, slug: b.slug }));
}

type Props = { params: Promise<{ collection: string; slug: string }> };

export default async function BuildDetailPage({ params }: Props) {
  const { collection: collectionSlug, slug } = await params;
  const build = getBuild(collectionSlug, slug);
  if (!build) notFound();
  const collection = getCollection(collectionSlug);
  const others = getOtherBuilds(collectionSlug, slug);

  const galleryImages = build.galleryFiles.map((f) => ({
    src: `/images/${build.galleryFolder}/${f}`,
    alt: `${build.name} detail photograph`,
  }));

  return (
    <>
      <Nav variant="blend" />

      {/* BREADCRUMB + HEADER STRIP */}
      <section
        className="bg-[var(--color-bone)]"
        style={{
          paddingTop: "var(--page-header-pt)",
          paddingBottom: "var(--page-header-pb)",
          borderBottom: "1px solid rgba(14, 14, 14, 0.08)",
        }}
      >
        <div className="container-wide">
          {/* breadcrumb */}
          <div
            className="eyebrow mb-7 flex items-center gap-2 flex-wrap"
            style={{ color: "var(--color-stone)" }}
          >
            <Link href="/models" className="hover:opacity-70 transition-opacity">
              Models
            </Link>
            <span style={{ color: "var(--color-brass)" }}>/</span>
            <Link
              href={`/models/${build.collection}`}
              className="hover:opacity-70 transition-opacity"
            >
              {collection?.shortName ?? "Collection"}
            </Link>
            <span style={{ color: "var(--color-brass)" }}>/</span>
            <span style={{ color: "var(--color-oxide)" }}>
              {build.bodyYear} {build.name}
            </span>
          </div>

          {/* title + price + actions */}
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="eyebrow brass mb-3">FJ40 / {build.number}</div>
              <h1 className="display-xl mb-3">
                {build.bodyYear} Toyota FJ40 / {build.name}.
              </h1>
              <p
                className="body-lg"
                style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
              >
                {build.configName} · {build.paint} · {build.interior}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  color: "var(--color-oxide)",
                  letterSpacing: "0.02em",
                  lineHeight: 1,
                }}
              >
                {build.price}
              </div>
              <div className="eyebrow dim">{build.monthlyEstimate}</div>
              <div className="flex gap-3 flex-wrap mt-3">
                <Link href="/commission" className="btn btn-brass btn-arrow">
                  Talk to Sales
                </Link>
                <Link href="#specs" className="btn btn-brass">
                  View Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO CAROUSEL + OVERVIEW SIDEBAR */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--page-header-pb)" }}
      >
        <div className="container-wide">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
            {/* Carousel */}
            <div>
              <HeroCarousel
                images={galleryImages}
                badge={`${build.status} · ${galleryImages.length} Photos`}
              />
            </div>

            {/* Vehicle overview sidebar */}
            <aside
              className="bg-[var(--color-bone)] md:sticky"
              style={{
                padding: "var(--card-pad)",
                top: "var(--spacing-7)",
              }}
            >
              <div
                className="eyebrow brass pb-3 mb-4"
                style={{ borderBottom: "1px solid rgba(14, 14, 14, 0.12)" }}
              >
                Vehicle Overview
              </div>
              <ul className="flex flex-col">
                {build.overview.map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-baseline gap-3 py-3"
                    style={{
                      borderBottom: "1px dotted rgba(14, 14, 14, 0.12)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-stone)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontSize: "11px",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        color: "var(--color-oxide)",
                        textAlign: "right",
                        fontWeight: 600,
                      }}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href="/commission"
                  className="btn btn-brass btn-arrow"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Talk to Sales
                </Link>
                <Link
                  href="/commission"
                  className="btn btn-brass"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Save Inquiry
                </Link>
              </div>
              <p
                className="body-sm mt-4"
                style={{ color: "var(--color-stone)", textAlign: "center" }}
              >
                We respond within two business days.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* DESCRIPTION — single-column editorial flow */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-reading">
          {/* Eyebrow + signature row */}
          <div
            className="flex justify-between items-baseline pb-4 mb-7 flex-wrap gap-3"
            style={{ borderBottom: "1px solid rgba(14, 14, 14, 0.12)" }}
          >
            <div className="eyebrow brass">Build Notes / {build.number}</div>
            <div className="eyebrow dim">FJ40 · {build.bodyYear}</div>
          </div>

          {/* Headline */}
          <h2
            className="display-lg"
            style={{
              color: "var(--color-oxide)",
              marginBottom: "40px",
              maxWidth: "22ch",
            }}
          >
            {build.storyTitle}
          </h2>

          {/* Lead paragraph */}
          <p
            className="body-xl"
            style={{
              color: "var(--color-graphite)",
              fontSize: "22px",
              lineHeight: 1.55,
              maxWidth: "62ch",
              marginBottom: "32px",
            }}
          >
            {build.storyParagraphs[0]}
          </p>

          {/* Centered pull quote — no side stripe */}
          <blockquote
            style={{
              textAlign: "center",
              padding: "48px 0 56px",
              borderTop: "1px solid rgba(14, 14, 14, 0.12)",
              borderBottom: "1px solid rgba(14, 14, 14, 0.12)",
              margin: "48px 0",
              maxWidth: "48ch",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                color: "var(--color-brass)",
                marginBottom: "16px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.02em",
              }}
            >
              &ldquo;
            </div>
            <p
              className="font-[family-name:var(--font-display)] uppercase"
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                lineHeight: 1.2,
                color: "var(--color-oxide)",
                letterSpacing: "0.01em",
              }}
            >
              {build.pullQuote}
            </p>
          </blockquote>

          {/* Remaining body paragraphs */}
          {build.storyParagraphs.slice(1).map((p, i) => (
            <p
              key={i}
              className="body-xl"
              style={{
                color: "var(--color-graphite)",
                maxWidth: "62ch",
                marginBottom: "24px",
              }}
            >
              {p}
            </p>
          ))}

          {/* Closing line */}
          <p
            className="body-xl"
            style={{
              color: "var(--color-graphite)",
              maxWidth: "62ch",
              marginBottom: "40px",
            }}
          >
            It has done one 200-mile shakedown loop with our build lead. Brakes broken in.
            Suspension settled. Currently waiting in the shop for someone to come pick it up.
          </p>

          {/* Signature footer */}
          <div
            className="flex justify-between items-baseline pt-5 flex-wrap gap-3"
            style={{ borderTop: "1px solid rgba(14, 14, 14, 0.12)" }}
          >
            <div className="eyebrow brass">Build Lead · Larry Sidebotham</div>
            <div className="eyebrow dim">Status · {build.status}</div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS — ACCORDION on bone surface */}
      <section
        id="specs"
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <div
            className="flex justify-between items-end pb-5 flex-wrap gap-4"
            style={{
              marginBottom: "var(--section-head-mb)",
              borderBottom: "1px solid rgba(14, 14, 14, 0.14)",
            }}
          >
            <div>
              <div className="eyebrow brass mb-3">Specification</div>
              <h2 className="display-lg" style={{ color: "var(--color-oxide)" }}>
                Built to spec.<br />Not adapted.
              </h2>
            </div>
            <div className="eyebrow" style={{ color: "var(--color-stone)" }}>
              FJ40 / {build.number}
            </div>
          </div>
          <SpecAccordion groups={build.specs} theme="light" />
        </div>
      </section>

      {/* FINANCE ESTIMATE */}
      <section
        className="relative bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-tight text-center">
          <div className="eyebrow brass" style={{ marginBottom: "16px", fontSize: "13px" }}>
            Finance This Vehicle
          </div>
          <div
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "clamp(64px, 8vw, 128px)",
              color: "var(--color-oxide)",
              letterSpacing: "0.005em",
              lineHeight: 0.95,
              marginBottom: "16px",
            }}
          >
            {build.monthlyEstimate}
          </div>
          <p
            className="font-[family-name:var(--font-display)] uppercase"
            style={{
              fontSize: "22px",
              color: "var(--color-graphite)",
              letterSpacing: "0.05em",
              marginBottom: "48px",
            }}
          >
            Estimated Monthly Payment
          </p>
          <div
            className="inline-grid grid-cols-3 gap-x-12 gap-y-4 mb-10 pt-6 pb-4"
            style={{
              borderTop: "1px solid rgba(14, 14, 14, 0.12)",
              borderBottom: "1px solid rgba(14, 14, 14, 0.12)",
            }}
          >
            <FinanceRow label="Purchase Price" value={build.price} />
            <FinanceRow label="Down Payment" value="$59,500" />
            <FinanceRow label="Loan Term" value="180 mo" />
            <FinanceRow label="Loan Amount" value="$226,400" />
            <FinanceRow label="APR" value="8.79%" />
            <FinanceRow label="Approval" value="2-day" />
          </div>
          <p
            className="body-sm"
            style={{
              color: "var(--color-stone)",
              maxWidth: "56ch",
              margin: "0 auto 48px",
            }}
          >
            Estimate based on a 20% down payment at a 8.79% APR financing for 180 months. Rate with
            approved AutoPay (rate may vary depending on credit score and loan terms). All
            applicants will qualify. Rates subject to change.
          </p>
          <Link href="/commission" className="btn btn-brass btn-arrow">
            Get Pre-Approved
          </Link>
        </div>
      </section>

      {/* SIMILAR BUILDS — carousel */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <SimilarBuilds
            current={{ collection: collectionSlug, slug }}
            others={others}
          />
        </div>
      </section>

      {/* TESTIMONIALS — Hear from owners */}
      <section
        className="bg-[var(--color-oxide)] text-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <Testimonials />
        </div>
      </section>

      {/* WHY FORTY COLLECTION — value props */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-wide">
          <WhyForty />
        </div>
      </section>

      {/* INQUIRE BAR */}
      <section
        style={{
          background: "var(--color-brass)",
          color: "var(--color-oxide)",
          paddingBlock: "var(--spacing-7)",
        }}
      >
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-16 items-center">
            <div>
              <h3 className="display-sm mb-2">Ready to see it in person?</h3>
              <p className="body-sm" style={{ color: "rgba(14, 14, 14, 0.78)" }}>
                East Fort Lauderdale shop, by appointment. Or we deliver anywhere in the continental US.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/commission"
                className="btn btn-arrow"
                style={{
                  background: "var(--color-oxide)",
                  color: "var(--color-brass)",
                  border: "1px solid var(--color-oxide)",
                }}
              >
                Inquire about {build.number}
              </Link>
              <a
                href="tel:+19545550140"
                className="btn"
                style={{
                  background: "transparent",
                  color: "var(--color-oxide)",
                  border: "1px solid rgba(14, 14, 14, 0.4)",
                }}
              >
                Call the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX is rendered inside Lightbox component already */}
      <div className="lightbox" />
    </>
  );
}

function FinanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          color: "var(--color-stone)",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "18px",
          color: "var(--color-oxide)",
          fontWeight: 600,
        }}
      >
        {value}
      </div>
    </div>
  );
}
