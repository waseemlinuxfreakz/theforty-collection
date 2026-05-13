import Link from "next/link";
import NextImage from "next/image";

export function Footer() {
  return (
    <footer
      className="bg-[var(--color-oxide)] text-[var(--color-bone)]"
      style={{ paddingTop: "var(--spacing-9)", paddingBottom: "var(--spacing-5)" }}
    >
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-end gap-4 mb-5">
              <span className="relative w-20 h-20 inline-block flex-shrink-0">
                <NextImage
                  src="/brass-shield.png"
                  alt="Forty Collection"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </span>
              <div className="flex flex-col leading-none">
                <span
                  className="font-[family-name:var(--font-display)] uppercase"
                  style={{ fontSize: "44px", letterSpacing: "0.005em" }}
                >
                  FORTY
                </span>
                <span
                  className="font-[family-name:var(--font-mono)] uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.32em",
                    marginTop: "8px",
                    color: "var(--color-brass-light)",
                  }}
                >
                  Collection
                </span>
              </div>
            </div>
            <p className="body-sm" style={{ color: "rgba(232, 225, 212, 0.55)", maxWidth: "32ch" }}>
              Vintage Toyota Land Cruisers, re-engineered on a chassis we build ourselves. East Fort
              Lauderdale, Florida.
            </p>
          </div>

          <FooterCol title="Models">
            <Link href="/models/fj">FJ Collection</Link>
            <Link href="/models/bronco">Bronco Collection</Link>
            <Link href="/models/defender">Defender Collection</Link>
            <Link href="/models">All Collections</Link>
          </FooterCol>

          <FooterCol title="The Work">
            <Link href="/process">Process</Link>
            <Link href="/commission">Commission</Link>
            <Link href="/about">About</Link>
            <span style={{ color: "rgba(232, 225, 212, 0.78)" }}>Rolling 40 Chassis</span>
          </FooterCol>

          <FooterCol title="Contact">
            <a href="mailto:hello@thefortycollection.com">hello@thefortycollection.com</a>
            <a href="tel:+19545550140">+1 (954) 555-0140</a>
            <span style={{ color: "rgba(232, 225, 212, 0.78)" }}>East Fort Lauderdale, FL</span>
          </FooterCol>
        </div>

        <div
          className="flex justify-between flex-wrap gap-3 pt-6 mt-12"
          style={{
            borderTop: "1px solid rgba(232, 225, 212, 0.1)",
            color: "rgba(232, 225, 212, 0.4)",
            fontSize: "13px",
          }}
        >
          <span>© 2026 Forty Collection. All rights reserved.</span>
          <span>One vehicle at a time.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4
        className="eyebrow mb-4"
        style={{ color: "var(--color-brass-light)" }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-3 body-sm">
        {Array.isArray(children)
          ? children.map((child, i) => <li key={i}>{child}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}
