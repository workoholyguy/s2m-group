import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Cabinets & Countertops",
  description:
    "Premium stock and custom cabinets, granite and marble countertops, flooring, and hardware in Alpharetta, GA. Visit our North Atlanta showroom.",
};

const cabinetStyles = [
  {
    name: "Shaker",
    description:
      "Clean lines and timeless appeal. The most versatile choice for modern and traditional kitchens.",
  },
  {
    name: "Slab",
    description:
      "Sleek, flat-front design. Ideal for contemporary and minimalist spaces.",
  },
  {
    name: "Raised Panel",
    description:
      "Classic elegance with dimensional detail. Perfect for traditional and transitional homes.",
  },
  {
    name: "Beadboard",
    description:
      "Cottage-inspired charm with vertical grooves. Brings warmth to any kitchen or bathroom.",
  },
];

const countertopMaterials = [
  {
    name: "Granite",
    description:
      "Natural stone with unique patterns. Durable, heat-resistant, and one-of-a-kind.",
  },
  {
    name: "Marble",
    description:
      "Timeless luxury with distinctive veining. The choice for refined, elegant spaces.",
  },
  {
    name: "Quartz",
    description:
      "Engineered for consistency and durability. Low-maintenance with endless color options.",
  },
];

const additionalProducts = [
  {
    title: "Waterproof Vinyl Flooring",
    description:
      "Durable, water-resistant flooring ideal for kitchens, bathrooms, and basements.",
  },
  {
    title: "Tile & Mosaic",
    description:
      "Ceramic, porcelain, and mosaic tile for backsplashes, floors, and accent walls.",
  },
  {
    title: "Wood Panels & Accent Walls",
    description: "Decorative panels that add texture and character to any room.",
  },
  {
    title: "Vanities",
    description:
      "Bathroom vanities in various sizes and styles, with countertop options.",
  },
  {
    title: "Cabinet Hardware",
    description:
      "Handles, knobs, and pulls in contemporary and traditional designs.",
  },
];

export default function CabinetsPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cabinets/cabinets-23.jpg"
            alt="Luxury kitchen with elegant cream cabinets and crystal chandelier"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-image-overlay" />
        </div>

        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold z-10" />

        <div className="container relative z-10">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Products
          </p>
          <h1 className="text-white mb-6">
            Cabinets & <span className="text-gold">Surfaces</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From stock cabinets to fully custom solutions, we offer premium
            cabinetry and countertops to match any style and budget. Visit our
            Alpharetta showroom to see materials in person.
          </p>
        </div>
      </section>

      {/* Cabinet Styles */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                Cabinetry
              </p>
              <h2>Cabinet Styles</h2>
              <div className="accent-line" />
              <p className="mb-8">
                We carry a wide selection of cabinet door styles in various
                finishes, from painted to stained. Our team helps you select the
                right combination for your space.
              </p>

              <div className="space-y-6">
                {cabinetStyles.map((style) => (
                  <div
                    key={style.name}
                    className="bg-cream p-6 rounded-sm border-l-4 border-gold"
                  >
                    <h3 className="font-display text-xl mb-2">{style.name}</h3>
                    <p className="text-slate text-sm">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
                <Image
                  src="/cabinets/cabinets-14.jpg"
                  alt="Traditional kitchen with elegant gray and wood cabinets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-sm -z-10" />
            </div>
          </div>

          <div className="mt-16 p-8 bg-warm-white rounded-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl mb-2">Custom Cabinets</h3>
                <p className="text-slate">
                  Need something specific? We work with custom cabinet
                  manufacturers to create exactly what you envision.
                </p>
              </div>
              <a
                href="tel:+16782176410"
                className="btn-primary whitespace-nowrap"
              >
                <PhoneIcon />
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countertops */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Featured Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                <Image
                  src="/cabinets/cabinets-5.jpg"
                  alt="Stunning marble waterfall island countertop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-sm -z-10" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                Surfaces
              </p>
              <h2>Countertops</h2>
              <div className="accent-line" />
              <p className="mb-8">
                Our showroom features full slab samples so you can see the true
                character of each material. We handle templating, fabrication,
                and installation.
              </p>

              <div className="grid gap-6">
                {countertopMaterials.map((material) => (
                  <div
                    key={material.name}
                    className="bg-ivory p-6 rounded-sm flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <CountertopIcon />
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-1">
                        {material.name}
                      </h3>
                      <p className="text-slate text-sm">{material.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              More Products
            </p>
            <h2>Complete Your Space</h2>
            <div className="accent-line" />
            <p>
              Beyond cabinets and countertops, we stock everything you need to
              finish your remodel—flooring, tile, hardware, and more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProducts.map((product) => (
              <div
                key={product.title}
                className="p-6 border border-stone/20 rounded-sm hover:border-gold/40 transition-colors"
              >
                <h3 className="font-display text-lg mb-2">{product.title}</h3>
                <p className="text-slate text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Note */}
      <section className="py-12 bg-charcoal">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-charcoal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-white">
              <span className="font-medium">
                Professional Installation Available
              </span>
              <span className="text-gray-300 ml-2">
                Our experienced team handles complex installations with
                precision.
              </span>
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="See Our Products In Person"
        subtitle="Visit our Alpharetta showroom to explore cabinet styles, countertop samples, and more."
      />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CountertopIcon() {
  return (
    <svg
      className="w-6 h-6 text-gold"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h16M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8M4 8l2-4h12l2 4"
      />
    </svg>
  );
}
