import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Visit the S2M Cabinets showroom in Alpharetta, GA. Full kitchen displays, countertop samples, and design consultation. 4700 Atlanta Hwy.",
};

const showroomFeatures = [
  {
    title: "Full Kitchen Displays",
    description:
      "Walk through complete kitchen setups to see cabinet styles, layouts, and finish combinations in realistic settings.",
  },
  {
    title: "Countertop Samples",
    description:
      "View granite, marble, and quartz samples up close. See full slabs to understand pattern and color variations.",
  },
  {
    title: "Flooring Selection",
    description:
      "Compare waterproof vinyl, tile, and mosaic options. Take samples home to match with your existing décor.",
  },
  {
    title: "Design Desk",
    description:
      "Sit down with our team to plan your project. We'll help you select materials and discuss layout options.",
  },
  {
    title: "Hardware Display",
    description:
      "Browse cabinet handles, knobs, and pulls in contemporary and traditional styles.",
  },
  {
    title: "Accent & Panel Options",
    description:
      "Explore wood panels and accent wall materials to add character to your space.",
  },
];

export default function ShowroomPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cabinets/cabinets-9.jpg"
            alt="Luxury white kitchen showroom with brass accents"
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
            Visit Us
          </p>
          <h1 className="text-white mb-6">
            Our <span className="text-gold">Showroom</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Experience our products in person. Our Alpharetta showroom features
            full kitchen displays, extensive samples, and a dedicated design
            desk where we can plan your project together.
          </p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-12 bg-gold">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                <LocationIcon />
              </div>
              <div>
                <p className="text-charcoal font-medium">Location</p>
                <p className="text-charcoal/80 text-sm">
                  4700 Atlanta Hwy, Alpharetta, GA 30004
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-charcoal font-medium">Phone</p>
                <a
                  href="tel:+16782176410"
                  className="text-charcoal/80 text-sm hover:text-charcoal"
                >
                  (678) 217-6410
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                <ClockIcon />
              </div>
              <div>
                <p className="text-charcoal font-medium">Walk-In Friendly</p>
                <p className="text-charcoal/80 text-sm">
                  No appointment necessary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-cream">
        <div className="aspect-square md:aspect-[16/9] lg:aspect-[21/9] relative">
          <iframe
            src="https://maps.google.com/maps?q=4700+Atlanta+Hwy,+Alpharetta,+GA+30004&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="S2M Cabinets Location"
            className="absolute inset-0"
          />
          {/* Overlay with directions button */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-ivory p-4 md:p-6 rounded-sm shadow-lg md:max-w-sm">
            <h3 className="font-display text-lg md:text-xl mb-2">S2M Cabinets</h3>
            <p className="text-slate text-sm mb-3 md:mb-4">
              4700 Atlanta Hwy
              <br />
              Alpharetta, GA 30004
            </p>
            <a
              href="https://www.google.com/maps/dir//4700+Atlanta+Hwy,+Alpharetta,+GA+30004"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm w-full md:w-auto justify-center md:justify-start"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Showroom Features with Images */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                What You&apos;ll Find
              </p>
              <h2>Inside Our Showroom</h2>
              <div className="accent-line" />
              <p className="mb-8">
                Our spacious showroom is designed to help you make confident
                decisions. See products in realistic settings and get expert
                guidance from our team.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {showroomFeatures.slice(0, 4).map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-cream p-5 rounded-sm"
                  >
                    <h3 className="font-display text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                <Image
                  src="/cabinets/cabinets-18.jpg"
                  alt="Modern two-tone kitchen with gold accents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-sm -z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {showroomFeatures.slice(4).map((feature) => (
              <div
                key={feature.title}
                className="bg-cream p-8 rounded-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="text-slate text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit with Image */}
      <section className="section bg-charcoal">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                <Image
                  src="/cabinets/cabinets-0.webp"
                  alt="Traditional kitchen with copper pans and black countertops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                Why Visit
              </p>
              <h2 className="text-white mb-6">See Before You Decide</h2>
              <div className="w-16 h-0.5 bg-gold mb-8" />
              <div className="space-y-6 text-white">
                <p>
                  Choosing materials for your home is easier when you can see
                  and touch them in person. Our showroom eliminates guesswork.
                </p>
                <p>
                  Compare cabinet finishes side-by-side. See how granite
                  patterns vary across a full slab. Test flooring textures
                  underfoot.
                </p>
                <p>
                  Our team is available to answer questions, discuss your
                  project, and provide honest recommendations based on your
                  needs and budget.
                </p>
              </div>
              <div className="mt-8">
                <a href="tel:+16782176410" className="btn-gold">
                  <PhoneIconSmall />
                  Call (678) 217-6410
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-cream">
        <div className="container text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Service Area
          </p>
          <h2 className="mb-6">Proudly Serving North Atlanta</h2>
          <p className="max-w-2xl mx-auto mb-8 text-slate">
            Located in Alpharetta, we serve homeowners, builders, and designers
            throughout the North Atlanta metro area.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate">
            {[
              "Alpharetta",
              "Roswell",
              "Johns Creek",
              "Milton",
              "Cumming",
              "Suwanee",
              "Duluth",
              "Sandy Springs",
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-ivory rounded-sm border border-stone/20"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Questions? We're Here to Help"
        subtitle="Call us or visit the showroom—we're happy to discuss your project."
      />
    </>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold"
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

function PhoneIconSmall() {
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

function ClockIcon() {
  return (
    <svg
      className="w-5 h-5 text-gold"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
