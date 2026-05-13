export type SpecGroup = {
  title: string;
  rows: { label: string; value: string }[];
};

export type Commission = {
  slug: string;
  number: string;
  name: string;
  hero: string;
  galleryFolder: "blue" | "tan";
  galleryFiles: string[];
  status: "Available" | "Reserved" | "Sold";
  bodyYear: number;
  drivetrain: string;
  chassis: string;
  paint: string;
  interior: string;
  mileage: string;
  storyTitle: string;
  storyParagraphs: string[];
  pullQuote: string;
  specs: SpecGroup[];
};

export const commissions: Commission[] = [
  {
    slug: "sky-blue",
    number: "001",
    name: "The Sky Blue",
    hero: "/images/hero/blue.png",
    galleryFolder: "blue",
    galleryFiles: [
      "DSC07089.jpg",
      "DSC07105.jpg",
      "DSC07112.jpg",
      "DSC07120.jpg",
      "DSC07134.jpg",
      "DSC07148.jpg",
      "DSC07154.jpg",
      "DSC07167.jpg",
      "DSC07189.jpg",
      "DSC07209.jpg",
      "DSC07222.jpg",
      "DSC07232.jpg",
    ],
    status: "Available",
    bodyYear: 1973,
    drivetrain: "5.3L LS V8 / 4L60E Auto",
    chassis: "Rolling 40 Coilover",
    paint: "Sky Blue (Custom Mix)",
    interior: "Diamond-Stitch Saddle",
    mileage: "112 mi (post-shakedown)",
    storyTitle: "A Land Cruiser the color of a Florida sky.",
    storyParagraphs: [
      "The Sky Blue started as a 1973 FJ40 body found in dry storage in Tallahassee. We pulled the body, scrapped the frame, and built a new chassis at Rolling 40 specifically for it. Coilover front and rear. Custom crossmembers. A 5.3L LS V8 with a 4L60E automatic. The mechanicals are modern. The proportions are not.",
      "Paint is a custom mix matched to a 1969 Toyota color sample, finished in single-stage with a heavy clear flat. Interior is diamond-stitched in saddle tan with body-colored dashboard, custom transmission tunnel, and a modern audio system buried where Toyota would have kept it.",
    ],
    pullQuote:
      "You sit down. You turn the key. You expect a 1973 Land Cruiser. You get a truck that drives like it left the factory this year.",
    specs: [
      {
        title: "Drivetrain",
        rows: [
          { label: "Engine", value: "5.3L LS V8" },
          { label: "Output", value: "325 hp / 365 lb-ft" },
          { label: "Transmission", value: "GM 4L60E Auto" },
          { label: "Transfer Case", value: "Atlas II 4-Speed" },
          { label: "Axles", value: "Dana 60 / Dana 60" },
          { label: "Differentials", value: "Eaton ELocker, F+R" },
        ],
      },
      {
        title: "Chassis",
        rows: [
          { label: "Frame", value: "Rolling 40 Custom" },
          { label: "Front Suspension", value: "Coilover, 3-Link" },
          { label: "Rear Suspension", value: "Coilover, 4-Link" },
          { label: "Steering", value: "PSC Hydraulic Assist" },
          { label: "Brakes Front", value: "Wilwood 6-Piston" },
          { label: "Brakes Rear", value: "Wilwood 4-Piston" },
        ],
      },
      {
        title: "Body",
        rows: [
          { label: "Body Year", value: "1973" },
          { label: "Configuration", value: "Soft Top, Removable" },
          { label: "Paint", value: "Sky Blue (Custom Mix)" },
          { label: "Finish", value: "Single-Stage / Heavy Clear" },
          { label: "Bumpers", value: "Forty Collection Steel" },
          { label: "Lights", value: "JW Speaker LED" },
        ],
      },
      {
        title: "Interior",
        rows: [
          { label: "Upholstery", value: "Saddle Diamond-Stitch" },
          { label: "Dashboard", value: "Body-Color Sky Blue" },
          { label: "Steering Wheel", value: "Forty Collection Billet" },
          { label: "Seats", value: "Custom, Heated" },
          { label: "Audio", value: "Focal 4-Speaker / 8\" Sub" },
          { label: "A/C", value: "Vintage Air Gen IV" },
        ],
      },
      {
        title: "Wheels & Tires",
        rows: [
          { label: "Wheels", value: '17" Forty Collection Steel' },
          { label: "Finish", value: "Body-Color Sky Blue" },
          { label: "Tires", value: 'BFGoodrich KO2 33"' },
          { label: "Spare", value: "Full-Size Matching" },
        ],
      },
      {
        title: "Electronics",
        rows: [
          { label: "Wiring", value: "Forty Collection Custom" },
          { label: "Charging", value: "160-Amp Single Wire" },
          { label: "Battery", value: "Lithium, Hidden Mount" },
          { label: "Gauges", value: "Dakota Digital RTX" },
        ],
      },
    ],
  },
  {
    slug: "desert-tan",
    number: "002",
    name: "The Desert Tan",
    hero: "/images/hero/tan.png",
    galleryFolder: "tan",
    galleryFiles: [
      "DSC06909.jpg",
      "DSC06924.jpg",
      "DSC06935.jpg",
      "DSC06951.jpg",
      "DSC06964.jpg",
      "DSC06977.jpg",
      "DSC06999.jpg",
      "DSC07012.jpg",
      "DSC07026.jpg",
      "DSC07052.jpg",
      "DSC07062.jpg",
      "DSC07078.jpg",
    ],
    status: "Available",
    bodyYear: 1974,
    drivetrain: "5.3L LS V8 / 4L60E Auto",
    chassis: "Rolling 40 Coilover",
    paint: "Desert Tan (Custom Mix)",
    interior: "Saddle Leather, Hand-Stitched",
    mileage: "87 mi (post-shakedown)",
    storyTitle: "Built for the long drive at dusk.",
    storyParagraphs: [
      "The Desert Tan is a 1974 FJ40 we sourced out of west Texas. Body had been restored, mechanicals had not. We kept the body and threw away everything else. New Rolling 40 chassis. Fresh 5.3L LS V8. 4L60E automatic. Coilover suspension front and rear.",
      "The exterior is a single-stage desert tan with a heavy clear flat, custom-mixed against a vintage TLC sample. The interior is saddle leather, hand-stitched, paired with body-color dash and modern Dakota Digital instrumentation that reads like the original gauges from ten feet away.",
    ],
    pullQuote: "Vintage proportion. Modern chassis. Florida light.",
    specs: [
      {
        title: "Drivetrain",
        rows: [
          { label: "Engine", value: "5.3L LS V8" },
          { label: "Output", value: "325 hp / 365 lb-ft" },
          { label: "Transmission", value: "GM 4L60E Auto" },
          { label: "Transfer Case", value: "Atlas II 4-Speed" },
          { label: "Axles", value: "Dana 60 / Dana 60" },
          { label: "Differentials", value: "Eaton ELocker, F+R" },
        ],
      },
      {
        title: "Chassis",
        rows: [
          { label: "Frame", value: "Rolling 40 Custom" },
          { label: "Front Suspension", value: "Coilover, 3-Link" },
          { label: "Rear Suspension", value: "Coilover, 4-Link" },
          { label: "Steering", value: "PSC Hydraulic Assist" },
          { label: "Brakes Front", value: "Wilwood 6-Piston" },
          { label: "Brakes Rear", value: "Wilwood 4-Piston" },
        ],
      },
      {
        title: "Body",
        rows: [
          { label: "Body Year", value: "1974" },
          { label: "Configuration", value: "Soft Top, Removable" },
          { label: "Paint", value: "Desert Tan (Custom Mix)" },
          { label: "Finish", value: "Single-Stage / Heavy Clear" },
          { label: "Bumpers", value: "Forty Collection Steel" },
          { label: "Lights", value: "JW Speaker LED" },
        ],
      },
      {
        title: "Interior",
        rows: [
          { label: "Upholstery", value: "Saddle Leather, Hand-Stitched" },
          { label: "Dashboard", value: "Body-Color Desert Tan" },
          { label: "Steering Wheel", value: "Forty Collection Billet" },
          { label: "Seats", value: "Custom, Heated" },
          { label: "Audio", value: "Focal 4-Speaker / 8\" Sub" },
          { label: "A/C", value: "Vintage Air Gen IV" },
        ],
      },
      {
        title: "Wheels & Tires",
        rows: [
          { label: "Wheels", value: '17" Forty Collection Alloy' },
          { label: "Finish", value: "Bronze with Polished Lip" },
          { label: "Tires", value: 'BFGoodrich KO2 33"' },
          { label: "Spare", value: "Full-Size Matching" },
        ],
      },
      {
        title: "Electronics",
        rows: [
          { label: "Wiring", value: "Forty Collection Custom" },
          { label: "Charging", value: "160-Amp Single Wire" },
          { label: "Battery", value: "Lithium, Hidden Mount" },
          { label: "Gauges", value: "Dakota Digital RTX" },
        ],
      },
    ],
  },
];

export function getCommission(slug: string): Commission | undefined {
  return commissions.find((c) => c.slug === slug);
}

export function getOtherCommission(currentSlug: string): Commission | undefined {
  return commissions.find((c) => c.slug !== currentSlug);
}
