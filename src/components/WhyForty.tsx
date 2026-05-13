type ValueProp = {
  num: string;
  title: string;
  body: string;
};

const valueProps: ValueProp[] = [
  {
    num: "06",
    title: "Builds Per Year",
    body: "Limited production by design. Every vehicle gets the time it deserves. Three crew on every build sheet.",
  },
  {
    num: "02",
    title: "Year Warranty",
    body: "Bumper to bumper. Drivetrain, chassis, electronics, interior. Service through Rolling 40 and our partner network.",
  },
  {
    num: "01",
    title: "Chassis Shop",
    body: "Rolling 40 is ours. Every chassis is built from raw steel in-house, not adapted from a stamped frame.",
  },
  {
    num: "07",
    title: "Years In",
    body: "Established 2019 in East Fort Lauderdale. Two adjoining buildings: Forty Collection on one side, Rolling 40 on the other.",
  },
  {
    num: "200",
    title: "Mile Shakedown",
    body: "Before delivery, the build lead drives every vehicle 200 miles. Brakes break in. Suspension settles. Punch list closed.",
  },
  {
    num: "100%",
    title: "Reservations",
    body: "Every slot for the next two years is committed before the body is cut. Commission early to lock your specification.",
  },
];

export function WhyForty() {
  return (
    <div>
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-end mb-12">
        <div>
          <div className="eyebrow brass mb-3">Why Forty Collection</div>
          <h2 className="display-md" style={{ maxWidth: "16ch" }}>
            Six numbers that explain what we do.
          </h2>
        </div>
        <p
          className="body-xl"
          style={{ color: "var(--color-graphite)", maxWidth: "52ch" }}
        >
          Forty Collection is the largest dedicated FJ40 program in the country. Every chassis we
          build is built ourselves. Every vehicle is owner-delivered, warrantied, and supported.
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((v) => (
          <div
            key={v.title}
            style={{
              borderTop: "2px solid var(--color-brass)",
              paddingTop: "20px",
            }}
          >
            <div
              className="font-[family-name:var(--font-display)] mb-3"
              style={{
                fontSize: "60px",
                color: "var(--color-brass)",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              {v.num}
            </div>
            <h3
              className="font-[family-name:var(--font-display)] mb-3"
              style={{
                fontSize: "22px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--color-oxide)",
              }}
            >
              {v.title}
            </h3>
            <p
              className="body-sm"
              style={{ color: "var(--color-graphite)", maxWidth: "44ch" }}
            >
              {v.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
