import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const stages = [
  {
    n: "01",
    eyebrow: "The Chassis",
    title: "Built from steel, not adapted from a donor.",
    body: "Rolling 40, our own fabrication shop, builds every Forty Collection chassis from raw steel. Not a restored OEM frame. Not a strengthened factory unit. A new frame engineered for coilover suspension, modern V8 power, and the load characteristics of a vehicle the original FJ40 designers never imagined.",
    note: "8 to 10 weeks. Frame, crossmembers, suspension mounts, 3-link front, 4-link rear, full hydraulic steering, brake hardlines.",
  },
  {
    n: "02",
    eyebrow: "The Body",
    title: "Donor FJ40, restored to the original lines.",
    body: "A donor body is sourced, stripped, blocked, and finished. We keep the original sheet metal whenever possible. Where the original is too far gone, we use NOS or hand-formed panels that match the factory tolerances. The proportions, gaps, and crown lines are the ones Toyota engineered in 1973.",
    note: "12 to 16 weeks. Strip, sandblast, repair, block. Single-stage paint. Custom mix to a vintage sample. Heavy clear flat.",
  },
  {
    n: "03",
    eyebrow: "The Finish",
    title: "Drivetrain, interior, hardware, wiring.",
    body: "5.3L LS V8. 4L60E automatic. Atlas II transfer case. Dana 60 axles, Eaton ELockers, Wilwood brakes. Inside: hand-stitched leather, body-color dash, modern audio buried where Toyota would have kept it, Vintage Air climate, Dakota Digital instruments behind the original cluster face.",
    note: "20 to 28 weeks. Drivetrain assembly. Wiring harness fabricated in-house. Interior trimmed by hand. Every fastener catalogued.",
  },
  {
    n: "04",
    eyebrow: "The Delivery",
    title: "200-mile shakedown, then a hand-off.",
    body: "Before the keys go in your hand, the build lead drives the truck for 200 miles. Brakes break in. Suspension settles. Anything that needs adjustment gets adjusted. Final inspection happens in our Fort Lauderdale shop. We deliver in person if you're local. We crate and ship anywhere in the continental US if you're not.",
    note: "2 to 4 weeks. Shakedown miles. Punch-list adjustments. Detailing. Delivery scheduled.",
  },
];

export default function ProcessPage() {
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
            14 to 18 Months / Six Builds Annually
          </div>
          <h1 className="display-xl mb-5" style={{ maxWidth: "16ch" }}>
            Process.
          </h1>
          <p
            className="body-xl"
            style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.78)" }}
          >
            Every Forty Collection FJ40 starts as a frame at Rolling 40 and ends as a hand-off in
            our East Fort Lauderdale shop. Here is what happens between those two moments.
          </p>
        </div>
      </section>

      {/* HERO IMAGE FULL BLEED */}
      <div className="bg-[var(--color-oxide)]">
        <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
          <Image
            src="/images/chassis/macro.png"
            alt="Rolling 40 chassis macro"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* STAGES */}
      <section className="bg-[var(--color-paper)]" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="container-tight" style={{ display: "grid", gap: "var(--spacing-9)" }}>
          {stages.map((s) => (
            <div key={s.n} className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-12 items-start">
              <div
                className="font-[family-name:var(--font-display)] font-bold leading-[0.85] tracking-tighter"
                style={{
                  fontSize: "clamp(96px, 12vw, 200px)",
                  color: "var(--color-brass)",
                }}
              >
                {s.n}
              </div>
              <div>
                <div className="eyebrow brass mb-3">{s.eyebrow}</div>
                <h2 className="display-md mb-5" style={{ maxWidth: "22ch" }}>
                  {s.title}
                </h2>
                <p
                  className="body-xl mb-6"
                  style={{ maxWidth: "60ch", color: "var(--color-graphite)" }}
                >
                  {s.body}
                </p>
                <div
                  style={{
                    paddingLeft: "var(--spacing-5)",
                    borderLeft: "2px solid var(--color-brass)",
                  }}
                >
                  <div className="eyebrow brass mb-2">What this stage takes</div>
                  <p
                    className="body-sm"
                    style={{ color: "var(--color-graphite)", maxWidth: "56ch" }}
                  >
                    {s.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DRENCHED CTA */}
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
            Average Build
            <span className="block w-8 h-px bg-current" />
          </div>
          <h2 className="display-lg mb-5">
            14 to 18 months.
            <br />
            Six slots a year.
          </h2>
          <p
            className="body-xl mb-8"
            style={{
              color: "rgba(14, 14, 14, 0.78)",
              maxWidth: "50ch",
              margin: "0 auto var(--spacing-7)",
            }}
          >
            Commissions for 2027 are open. Tell us what you want, we will tell you when we can
            start, and we will quote it before any metal gets cut.
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
