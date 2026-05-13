import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const principals = [
  {
    name: "Larry Sidebotham",
    role: "Founder / Build Lead",
    bio: "Larry started Forty Collection in 2019 after fifteen years building one-off race chassis. Every Forty FJ40 gets his hands on it, from the chassis weld-up to the final shakedown drive.",
  },
  {
    name: "Ju",
    role: "Co-Owner / Operations",
    bio: "Ju runs operations, scheduling, and the commissions process. If you are a buyer, you will know Ju by the third email. If you are a vendor, by the first.",
  },
  {
    name: "Pat Morris",
    role: "Co-Owner / Drivetrain",
    bio: "Pat handles drivetrain assembly, wiring, and the dyno work. Came to Forty in 2021 from a high-end restoration shop in North Carolina.",
  },
];

export default function AboutPage() {
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
            Founded 2019 / East Fort Lauderdale, Florida
          </div>
          <h1 className="display-xl mb-5">A shop, not a studio.</h1>
          <p
            className="body-xl"
            style={{ maxWidth: "56ch", color: "rgba(232, 225, 212, 0.78)" }}
          >
            Three people. One bay. Six FJ40s a year. The chassis shop next door is also ours.
          </p>
        </div>
      </section>

      {/* THE ORIGIN */}
      <section className="bg-[var(--color-paper)]" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="container-tight">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-start">
            <div>
              <div className="eyebrow brass mb-3">The Origin</div>
              <h2 className="display-md mb-6" style={{ maxWidth: "22ch" }}>
                Two garages, one idea, six years.
              </h2>
              <p className="body-xl mb-5" style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}>
                Forty Collection started in a single-bay shop with two FJ40 frames in pieces on the
                floor. The thesis was simple. Every other restomod shop adapts an existing chassis.
                We thought the chassis was the wrong place to compromise.
              </p>
              <p className="body-xl" style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}>
                Six years later, the chassis side of the business spun off into Rolling 40, a
                separate shop with its own crew, building frames for our FJ40 program and a few
                outside clients. The Forty Collection side stayed small on purpose. Six builds a
                year. One vehicle at a time.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/chassis/macro.png"
                alt="Rolling 40 chassis"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE */}
      <section
        className="bg-[var(--color-bone)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-tight">
          <div className="eyebrow brass mb-3">The People</div>
          <h2 className="display-md mb-12" style={{ maxWidth: "24ch" }}>
            Three names on every build sheet.
          </h2>
          <div className="grid gap-12 md:grid-cols-1">
            {principals.map((p) => (
              <div
                key={p.name}
                className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-12 items-start py-6"
                style={{ borderTop: "1px solid rgba(14, 14, 14, 0.12)" }}
              >
                <div>
                  <div className="display-md leading-none mb-2">{p.name}</div>
                  <div className="eyebrow brass">{p.role}</div>
                </div>
                <p className="body-xl" style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}>
                  {p.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        className="bg-[var(--color-paper)]"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-tight">
          <div className="eyebrow brass mb-3">The Shop</div>
          <h2 className="display-md mb-5" style={{ maxWidth: "22ch" }}>
            East Fort Lauderdale, Florida.
          </h2>
          <p
            className="body-xl mb-7"
            style={{ color: "var(--color-graphite)", maxWidth: "60ch" }}
          >
            Two adjoining buildings on a quiet block off A1A. Forty Collection on one side, Rolling
            40 on the other. Visits by appointment. Local buyers can pick up at the shop.
            Out-of-state buyers, we crate and deliver.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/commission" className="btn btn-brass btn-arrow">
              Commission a Build
            </Link>
            <a href="mailto:hello@thefortycollection.com" className="btn btn-brass">
              Email the Shop
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
