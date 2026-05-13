/* ==========================================================================
   FORTY COLLECTION — Builds + Collections data layer
   Hierarchy: Forty Collection → 3 collections (FJ, Bronco, Defender)
   Each collection has signature configurations and currently-available builds.
   ========================================================================== */

export type CollectionSlug = "fj" | "bronco" | "defender";

export type SpecGroup = {
  title: string;
  rows: { label: string; value: string }[];
};

export type SignatureSeries = {
  slug: string;
  name: string;
  yearRange: string;
  description: string;
  startingPrice: string;
  image: string;
  available: boolean;
};

export type Collection = {
  slug: CollectionSlug;
  name: string;
  shortName: string;
  yearRange: string;
  heroImage: string;
  heroEyebrow: string;
  tagline: string;
  positioning: string[];
  description: string[];
  signatureSeries: SignatureSeries[];
  paintPalette: { name: string; hex: string; description: string }[];
  leatherPalette: { name: string; hex: string; description: string }[];
  drivingFeatures: { title: string; body: string }[];
  customizationCategories: {
    title: string;
    items: { name: string; description: string }[];
  }[];
  status: "available" | "coming-soon";
};

export type Build = {
  collection: CollectionSlug;
  slug: string;
  number: string;
  name: string;
  configName: string;
  hero: string;
  galleryFolder: "blue" | "tan";
  galleryFiles: string[];
  status: "Available" | "Reserved" | "Sold";
  price: string;
  monthlyEstimate: string;
  bodyYear: number;
  drivetrain: string;
  chassis: string;
  paint: string;
  interior: string;
  mileage: string;
  storyTitle: string;
  storyParagraphs: string[];
  pullQuote: string;
  overview: { label: string; value: string }[];
  specs: SpecGroup[];
};

/* ==========================================================================
   COLLECTIONS
   ========================================================================== */

export const collections: Collection[] = [
  {
    slug: "fj",
    name: "Vintage Toyota FJ Collection",
    shortName: "FJ Collection",
    yearRange: "1968 — 1984",
    heroImage: "/images/hero/blue.png",
    heroEyebrow: "01 / Forty Collection",
    tagline: "FJ Collection",
    positioning: [
      "Vintage Toyota Land Cruiser FJ40, re-engineered.",
      "Each chassis built in-house at Rolling 40.",
      "Six commissions a year. East Fort Lauderdale.",
    ],
    description: [
      "Forty Collection's flagship lineage. We re-engineer the original Toyota FJ40 Land Cruiser as a modern, daily-drivable touring vehicle without losing the proportions that made it iconic. Body sourced from period-correct donors. Chassis built from raw steel by Rolling 40, our adjacent fabrication shop. Drivetrain modernized for reliability. Interior crafted by hand.",
      "Every FJ in the collection ships with our Signature 5.3L LS V8, GM 4L60E automatic, Atlas II transfer case, and a 4-link coilover suspension you will not find on any other restomod platform. Two builds are typically available. Commissions for new specifications open quarterly.",
    ],
    signatureSeries: [
      {
        slug: "coilover",
        name: "FJ40 Coilover Edition",
        yearRange: "1968 — 1984 body",
        description:
          "Our flagship Signature build. 5.3L LS V8, 4L60E auto, full coilover suspension front and rear, Forty Collection wheels, hand-stitched diamond leather. Customizable paint and trim.",
        startingPrice: "From $265,000",
        image: "/images/hero/blue.png",
        available: true,
      },
      {
        slug: "soft-top",
        name: "FJ40 Soft Top Beach Edition",
        yearRange: "1973 — 1980 body",
        description:
          "Open-air configuration with removable soft top, body-color steel wheels, and coastal-spec interior. Perfect for daily Florida driving. Built to order.",
        startingPrice: "From $245,000",
        image: "/images/hero/tan.png",
        available: true,
      },
      {
        slug: "heritage",
        name: "FJ40 Heritage Edition",
        yearRange: "1968 — 1973 body",
        description:
          "Period-correct trim with vintage-mix paint colors, wood-grained dash details, and heritage-spec mechanicals. Built for collectors who want originality with engineering.",
        startingPrice: "From $285,000",
        image: "/images/chassis/macro.png",
        available: false,
      },
    ],
    paintPalette: [
      { name: "Sky Blue", hex: "#9BC4D9", description: "Custom mix to a 1969 Toyota sample" },
      { name: "Desert Tan", hex: "#C9B58E", description: "Custom mix, single-stage with heavy clear" },
      { name: "Heritage Olive", hex: "#5C5F3A", description: "Period-correct military green" },
      { name: "Forty Black", hex: "#1A1813", description: "Tinted near-black with brass undertone" },
      { name: "Coral White", hex: "#E8DDC8", description: "Bone with peach undertone" },
      { name: "Ranger Red", hex: "#8B2E1F", description: "Deep oxide red with patina" },
    ],
    leatherPalette: [
      { name: "Saddle", hex: "#A67849", description: "Diamond-stitch standard" },
      { name: "Espresso", hex: "#3A2C20", description: "Hand-stitched smooth" },
      { name: "Bone", hex: "#D4C4A8", description: "Heritage perforated" },
      { name: "Oxblood", hex: "#5C2A24", description: "Period-correct leather grain" },
      { name: "Pebble", hex: "#7C7264", description: "Modern tonal leather" },
    ],
    drivingFeatures: [
      {
        title: "5.3L LS V8 Drivetrain",
        body: "325 horsepower, 365 lb-ft of torque. Modern reliability, vintage soul. Pairs with a GM 4L60E automatic and Atlas II transfer case for daily-driveable shifting and proper crawl ratios.",
      },
      {
        title: "Rolling 40 Coilover Chassis",
        body: "Built from raw steel in our adjacent shop. 3-link front, 4-link rear, full hydraulic steering. Tested to torque and load specs the original FJ40 designers never imagined.",
      },
      {
        title: "Wilwood Brakes Front + Rear",
        body: "6-piston Wilwood front, 4-piston rear. Stops a 5,000 lb vehicle from 60 mph the way a modern truck should.",
      },
      {
        title: "Dakota Digital Instrumentation",
        body: "Behind the original cluster face. Speedometer, tachometer, oil, water, voltage. Reads vintage from a foot away, modern up close.",
      },
      {
        title: "Vintage Air Climate",
        body: "Gen IV climate control with hidden ducting. Cools a Florida summer without changing the dash.",
      },
      {
        title: "Forty Collection Wheels",
        body: "17-inch steel wheels, body-color or polished. BFGoodrich KO2 33-inch tires standard. Matching full-size spare.",
      },
    ],
    customizationCategories: [
      {
        title: "Exterior Upgrades",
        items: [
          { name: "6-Point Roll Cage", description: "Premium safety upgrade with 9 points of contact" },
          { name: "Custom Hard Top", description: "Hand-built one-piece, color-matched" },
          { name: "Bestop Soft Top", description: "Easily removable soft top option" },
          { name: "Ranger Edition Stripes", description: "Period-correct two-tone stripe package" },
          { name: "White Powder-Coated Bumpers", description: "Forty Collection steel, coated finish" },
          { name: "Raptor Liner Undercoating", description: "Bedlined floor, wheel wells, undercarriage" },
        ],
      },
      {
        title: "Interior Upgrades",
        items: [
          { name: "Premium Diamond-Stitch Leather", description: "Upgrade from saddle vinyl" },
          { name: "Forty Billet Interior Package", description: "All-billet handles, knobs, vents" },
          { name: "Heated Seats", description: "Front pair, modern heating elements" },
          { name: "Premium Audio System", description: "Focal speakers, Sub, Dakota Digital head" },
          { name: "Custom Headliner", description: "Suede or premium leather options" },
        ],
      },
      {
        title: "Drivetrain Upgrades",
        items: [
          { name: "6.2L LS3 V8", description: "Higher displacement option, 430 hp" },
          { name: "ARB Air Locking Differentials", description: "Front and rear, on-demand" },
          { name: "Long-Travel Suspension", description: "Increased articulation for off-road use" },
          { name: "Larger Wheels and Tires", description: "Up to 35-inch BFGoodrich" },
        ],
      },
    ],
    status: "available",
  },
  {
    slug: "bronco",
    name: "Vintage Ford Bronco Collection",
    shortName: "Bronco Collection",
    yearRange: "1966 — 1977",
    heroImage: "/images/hero/blue.png",
    heroEyebrow: "02 / Forty Collection",
    tagline: "Bronco Collection",
    positioning: [
      "Early Ford Bronco, re-engineered.",
      "Coming Q3 2027.",
    ],
    description: [
      "The early Ford Bronco lineage joins the Forty Collection roster in late 2027. Same Rolling 40 chassis philosophy, applied to the original Bronco platform. Six builds annually once the program is live.",
      "Reservations open Q1 2027 for early-deposit clients. Configuration details and pricing available on inquiry.",
    ],
    signatureSeries: [],
    paintPalette: [],
    leatherPalette: [],
    drivingFeatures: [],
    customizationCategories: [],
    status: "coming-soon",
  },
  {
    slug: "defender",
    name: "Land Rover Defender Collection",
    shortName: "Defender Collection",
    yearRange: "1985 — 1997",
    heroImage: "/images/hero/tan.png",
    heroEyebrow: "03 / Forty Collection",
    tagline: "Defender Collection",
    positioning: [
      "Land Rover Defender 90 and 110, re-engineered.",
      "Coming 2028.",
    ],
    description: [
      "The Land Rover Defender program is in development for 2028 launch. Rolling 40 chassis adapted to the Defender platform. Diesel and LS V8 drivetrain options under evaluation.",
      "Notify list open. Configuration and pricing on inquiry.",
    ],
    signatureSeries: [],
    paintPalette: [],
    leatherPalette: [],
    drivingFeatures: [],
    customizationCategories: [],
    status: "coming-soon",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

/* ==========================================================================
   BUILDS (currently available units)
   ========================================================================== */

export const builds: Build[] = [
  {
    collection: "fj",
    slug: "sky-blue",
    number: "001",
    name: "Sky Blue",
    configName: "FJ40 Coilover Edition",
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
    price: "$285,900",
    monthlyEstimate: "$2,287 / month",
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
    overview: [
      { label: "Color", value: "Sky Blue (Custom Mix)" },
      { label: "Trim", value: "Coilover Package" },
      { label: "Interior", value: "Diamond-Stitch Saddle" },
      { label: "Engine", value: "GM 5.3L LS V8" },
      { label: "Transmission", value: "4L60E Automatic" },
      { label: "Drivetrain", value: "4WD / Atlas II" },
    ],
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
          { label: "Audio", value: 'Focal 4-Speaker / 8" Sub' },
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
    collection: "fj",
    slug: "desert-tan",
    number: "002",
    name: "Desert Tan",
    configName: "FJ40 Soft Top Beach Edition",
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
    price: "$258,500",
    monthlyEstimate: "$2,068 / month",
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
    overview: [
      { label: "Color", value: "Desert Tan (Custom Mix)" },
      { label: "Trim", value: "Soft Top Beach Edition" },
      { label: "Interior", value: "Saddle Hand-Stitched" },
      { label: "Engine", value: "GM 5.3L LS V8" },
      { label: "Transmission", value: "4L60E Automatic" },
      { label: "Drivetrain", value: "4WD / Atlas II" },
    ],
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
          { label: "Audio", value: 'Focal 4-Speaker / 8" Sub' },
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

export function getBuild(collection: string, slug: string): Build | undefined {
  return builds.find((b) => b.collection === collection && b.slug === slug);
}

export function getBuildsByCollection(collection: string): Build[] {
  return builds.filter((b) => b.collection === collection);
}

export function getOtherBuilds(currentCollection: string, currentSlug: string): Build[] {
  return builds.filter(
    (b) => !(b.collection === currentCollection && b.slug === currentSlug)
  );
}
