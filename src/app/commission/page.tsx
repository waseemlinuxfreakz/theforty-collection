import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function CommissionPage() {
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
            2027 Slots Open / Limited to Six Annually
          </div>
          <h1 className="display-xl mb-5" style={{ maxWidth: "18ch" }}>
            Commission a build.
          </h1>
          <p
            className="body-xl"
            style={{ maxWidth: "60ch", color: "rgba(232, 225, 212, 0.78)" }}
          >
            Pick the body year, the color, the leather, the wheels, the drivetrain. We will quote
            it, schedule it, and build it. One vehicle, your name on the build sheet from day one.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[var(--color-paper)]" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="container-tight">
          <div className="grid gap-12 md:grid-cols-[0.4fr_1fr]">
            {/* SIDEBAR */}
            <aside style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
              <div className="eyebrow brass mb-4">What to Expect</div>
              <h2 className="display-md mb-7" style={{ maxWidth: "16ch" }}>
                A quick call,<br />then a quote.
              </h2>
              <ul className="flex flex-col gap-4 body-sm" style={{ color: "var(--color-graphite)" }}>
                {[
                  "You send us this form.",
                  "We respond within two business days.",
                  "Thirty-minute call. We hear what you want.",
                  "Written quote, build sheet, timeline within a week.",
                  "Fifty-percent deposit locks your slot. Build begins.",
                ].map((item, i) => (
                  <li key={i} className="flex items-baseline gap-3">
                    <span
                      className="flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-brass)",
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "var(--spacing-7)",
                  paddingTop: "var(--spacing-5)",
                  borderTop: "1px solid rgba(14, 14, 14, 0.12)",
                }}
              >
                <div className="eyebrow brass mb-3">Typical Range</div>
                <div className="display-md mb-2">$245k to $310k</div>
                <p className="body-sm" style={{ color: "var(--color-stone)" }}>
                  Depends on body sourcing, drivetrain, interior materials. Quoted firm before metal
                  gets cut.
                </p>
              </div>
            </aside>

            {/* FORM */}
            <form
              className="bg-[var(--color-bone)]"
              style={{ padding: "var(--spacing-7)" }}
            >
              <div
                style={{
                  marginBottom: "var(--spacing-6)",
                  paddingBottom: "var(--spacing-4)",
                  borderBottom: "1px solid rgba(14, 14, 14, 0.1)",
                }}
              >
                <div className="eyebrow brass mb-3">Inquiry Form</div>
                <h3 className="display-sm">Tell us what you want.</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <FormField id="firstName" label="First Name" required />
                <FormField id="lastName" label="Last Name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <FormField id="email" label="Email" type="email" required />
                <FormField id="phone" label="Phone" type="tel" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <FormSelect
                  id="bodyYear"
                  label="Preferred Body Year"
                  options={["1973", "1974", "1975", "1976", "1977", "1978", "No Preference"]}
                />
                <FormSelect
                  id="timeline"
                  label="Target Delivery"
                  options={["Q3 2027", "Q4 2027", "Q1 2028", "Q2 2028", "Flexible"]}
                />
              </div>
              <div className="mb-5">
                <FormTextarea
                  id="vision"
                  label="Tell us about the build"
                  placeholder="Color, interior, drivetrain preferences, intended use. Long answers welcome."
                />
              </div>
              <div className="mb-7">
                <FormField
                  id="hearAbout"
                  label="How did you find us"
                  placeholder="Referral, Instagram, search, somewhere else"
                />
              </div>

              <div
                className="flex items-center gap-4 flex-wrap pt-4"
                style={{ borderTop: "1px solid rgba(14, 14, 14, 0.1)" }}
              >
                <button type="submit" className="btn btn-brass btn-arrow">
                  Send Inquiry
                </button>
                <span className="body-sm" style={{ color: "var(--color-stone)" }}>
                  We respond within two business days.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CALL THE SHOP */}
      <section
        className="bg-[var(--color-oxide)] text-[var(--color-bone)] text-center"
        style={{ paddingBlock: "var(--section-y)" }}
      >
        <div className="container-tight">
          <div
            className="eyebrow brass-light inline-flex items-center gap-3 mb-4"
          >
            <span className="block w-8 h-px bg-current" />
            Or Skip the Form
            <span className="block w-8 h-px bg-current" />
          </div>
          <h2 className="display-lg mb-5">Call the shop.</h2>
          <p
            className="body-xl mb-7"
            style={{
              maxWidth: "50ch",
              margin: "0 auto var(--spacing-6)",
              color: "rgba(232, 225, 212, 0.78)",
            }}
          >
            If you would rather skip the form, the shop number gets answered by Larry, Ju, or Pat
            between 9am and 6pm Eastern, weekdays.
          </p>
          <a
            href="tel:+19545550140"
            className="display-md"
            style={{ color: "var(--color-brass-light)" }}
          >
            +1 (954) 555-0140
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

function FormField({
  id,
  label,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block eyebrow mb-2"
        style={{ color: "var(--color-stone)" }}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: "var(--color-paper)",
          border: "1px solid rgba(14, 14, 14, 0.18)",
          color: "var(--color-oxide)",
          fontSize: "16px",
          fontFamily: "var(--font-sans)",
          outline: "none",
          transition: "border-color 200ms",
        }}
      />
    </div>
  );
}

function FormSelect({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block eyebrow mb-2"
        style={{ color: "var(--color-stone)" }}
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: "var(--color-paper)",
          border: "1px solid rgba(14, 14, 14, 0.18)",
          color: "var(--color-oxide)",
          fontSize: "16px",
          fontFamily: "var(--font-sans)",
          outline: "none",
        }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block eyebrow mb-2"
        style={{ color: "var(--color-stone)" }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: "var(--color-paper)",
          border: "1px solid rgba(14, 14, 14, 0.18)",
          color: "var(--color-oxide)",
          fontSize: "16px",
          fontFamily: "var(--font-sans)",
          outline: "none",
          minHeight: "140px",
          resize: "vertical",
        }}
      />
    </div>
  );
}
