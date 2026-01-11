import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Remodeling Services",
  description:
    "Full kitchen remodeling, bathroom renovation, and basement finishing in North Atlanta. 20+ years experience. Call S2M Cabinets in Alpharetta.",
};

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen from concept to completion. We handle cabinets, countertops, flooring, backsplash, and coordination with your other trades.",
    features: [
      "Custom and stock cabinet installation",
      "Countertop templating and installation",
      "Backsplash tile and mosaic work",
      "Flooring installation",
      "Design consultation at our showroom",
    ],
    image: "/cabinets/cabinets-2.jpg",
    imageAlt: "Modern white kitchen with island seating",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Upgrade your bathroom with quality vanities, tile, and fixtures. From simple updates to complete overhauls, we deliver results that last.",
    features: [
      "Vanity and countertop installation",
      "Tile floors and shower surrounds",
      "Accent walls and mosaics",
      "Waterproof flooring solutions",
      "Hardware and fixture upgrades",
    ],
    image: "/cabinets/cabinets-12.jpg",
    imageAlt: "Farmhouse style kitchen with blue cabinets",
  },
  {
    title: "Basement Finishing",
    description:
      "Turn unused basement space into functional living areas. We provide the finishes—flooring, cabinets, and surfaces—to complete your project.",
    features: [
      "Waterproof vinyl flooring",
      "Built-in cabinetry and storage",
      "Bar and kitchenette installations",
      "Accent walls and wood panels",
      "Coordination with general contractors",
    ],
    image: "/cabinets/cabinets-19.jpg",
    imageAlt: "Modern kitchen with quartz countertops",
  },
];

const whyChooseUs = [
  {
    title: "20+ Years Experience",
    description:
      "We've completed over a thousand projects in the North Atlanta area.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Efficient processes and strong supplier relationships mean your project moves quickly.",
  },
  {
    title: "Complex Projects",
    description:
      "We handle challenging layouts, custom requirements, and tight timelines.",
  },
  {
    title: "Local Expertise",
    description:
      "Deep knowledge of Alpharetta and North Atlanta homes and styles.",
  },
];

export default function RemodelingPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-32 pb-24 min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cabinets/cabinets-1.jpg"
            alt="Modern sleek kitchen with gray cabinets and pendant lighting"
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
            Our Services
          </p>
          <h1 className="text-white mb-6">
            Remodeling <span className="text-gold">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Complete remodeling solutions for kitchens, bathrooms, and
            basements. We bring 20+ years of expertise to every project,
            handling complexity with confidence.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-4">{service.title}</h2>
                  <div className="accent-line" />
                  <p className="mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
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
                        <span className="text-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Decorative */}
                  <div
                    className={`absolute -bottom-4 w-24 h-24 border-2 border-gold rounded-sm -z-10 ${
                      index % 2 === 0 ? "-right-4" : "-left-4"
                    }`}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              The S2M Difference
            </p>
            <h2>Why Work With Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-charcoal flex items-center justify-center">
                  <span className="text-gold font-display text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-3">{item.title}</h3>
                <p className="text-slate text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-4 bg-charcoal overflow-hidden">
        <div className="flex gap-4">
          {[
            "/cabinets/cabinets-0.webp",
            "/cabinets/cabinets-7.jpg",
            "/cabinets/cabinets-15.jpg",
            "/cabinets/cabinets-18.jpg",
            "/cabinets/cabinets-20.webp",
          ].map((src, i) => (
            <div key={i} className="relative w-72 h-48 flex-shrink-0">
              <Image
                src={src}
                alt={`Kitchen project ${i + 1}`}
                fill
                className="object-cover rounded-sm"
                sizes="288px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Process
            </p>
            <h2>How We Work</h2>
            <p className="mt-6">
              From initial consultation to final installation, we keep the
              process straightforward and communication clear.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Consultation"
              description="Visit our showroom to discuss your project and explore options."
            />
            <ProcessStep
              number="02"
              title="Design & Selection"
              description="Select materials, finishes, and configurations with our guidance."
            />
            <ProcessStep
              number="03"
              title="Measurement"
              description="Precise templating and measurement ensures perfect fit."
            />
            <ProcessStep
              number="04"
              title="Installation"
              description="Professional installation by our experienced team."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Remodel?"
        subtitle="Call us or visit our Alpharetta showroom to discuss your project."
        variant="dark"
      />
    </>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gold font-display text-4xl">{number}</span>
        <div className="flex-1 h-px bg-gold/30" />
      </div>
      <h3 className="font-display text-lg mb-2">{title}</h3>
      <p className="text-slate text-sm">{description}</p>
    </div>
  );
}
