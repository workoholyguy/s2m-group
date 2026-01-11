import Link from "next/link";
import Image from "next/image";
import CTASection from "./components/CTASection";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Expertise Section */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
                Why S2M Cabinets
              </p>
              <h2 className="mb-6">Two Decades of Excellence</h2>
              <div className="accent-line" />
              <p className="mb-6">
                We specialize in kitchen and bathroom transformations that stand
                the test of time. From stock cabinets to fully custom solutions,
                our team handles projects of any scale with precision and care.
              </p>
              <p className="mb-8">
                Our Alpharetta showroom features full kitchen displays, countertop
                samples, and a dedicated design desk where we can plan your project
                together.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-4xl text-charcoal mb-1">20+</p>
                  <p className="text-stone text-sm uppercase tracking-wide">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-charcoal mb-1">1000+</p>
                  <p className="text-stone text-sm uppercase tracking-wide">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
                <Image
                  src="/cabinets/cabinets-9.jpg"
                  alt="Luxury white kitchen showroom display"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-cream">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Services
            </p>
            <h2>Complete Remodeling Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<CabinetIcon />}
              title="Cabinets"
              description="Stock and custom cabinets in a wide range of styles, finishes, and configurations. Quality construction that lasts."
              href="/cabinets"
            />
            <ServiceCard
              icon={<CountertopIcon />}
              title="Countertops"
              description="Granite, marble, and premium surfaces. Precise fabrication and professional installation."
              href="/cabinets"
            />
            <ServiceCard
              icon={<KitchenIcon />}
              title="Kitchen Remodeling"
              description="Complete kitchen transformations from design through installation. We handle complex projects with ease."
              href="/remodeling"
            />
            <ServiceCard
              icon={<BathroomIcon />}
              title="Bathroom Remodeling"
              description="Vanities, tile, fixtures, and complete bathroom renovations. Functional design meets refined aesthetics."
              href="/remodeling"
            />
            <ServiceCard
              icon={<FlooringIcon />}
              title="Flooring"
              description="Waterproof vinyl, tile, and mosaic installations. Durable solutions for every room."
              href="/cabinets"
            />
            <ServiceCard
              icon={<BasementIcon />}
              title="Basement Finishing"
              description="Transform unused space into functional living areas. Full-service basement remodeling."
              href="/remodeling"
            />
          </div>
        </div>
      </section>

      {/* Featured Work Strip */}
      <section className="py-4 bg-charcoal overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {[
            "/cabinets/cabinets-2.jpg",
            "/cabinets/cabinets-12.jpg",
            "/cabinets/cabinets-18.jpg",
            "/cabinets/cabinets-20.webp",
            "/cabinets/cabinets-23.jpg",
            "/cabinets/cabinets-14.jpg",
          ].map((src, i) => (
            <div key={i} className="relative w-64 h-40 flex-shrink-0">
              <Image
                src={src}
                alt={`Kitchen project ${i + 1}`}
                fill
                className="object-cover rounded-sm"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Who We Serve
            </p>
            <h2>Partners in Quality</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ClientCard
              title="Homeowners"
              description="Upgrade your space with premium materials and expert installation."
            />
            <ClientCard
              title="Builders"
              description="Reliable partner for new construction cabinetry and finishes."
            />
            <ClientCard
              title="Designers"
              description="Access our showroom resources and collaborative design support."
            />
            <ClientCard
              title="Investors"
              description="Fast turnaround and quality finishes for flip projects."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Your Project Today"
        subtitle="Visit our Alpharetta showroom or give us a call to discuss your vision."
        variant="dark"
      />
    </>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-ivory p-8 rounded-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gold/20"
    >
      <div className="w-12 h-12 mb-6 text-gold">{icon}</div>
      <h3 className="font-display text-xl mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="text-slate text-sm">{description}</p>
    </Link>
  );
}

// Client Card Component
interface ClientCardProps {
  title: string;
  description: string;
}

function ClientCard({ title, description }: ClientCardProps) {
  return (
    <div className="text-center p-6">
      <h3 className="font-display text-xl mb-3">{title}</h3>
      <p className="text-slate text-sm">{description}</p>
    </div>
  );
}

// Icons
function CabinetIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 12h16M12 4v16M8 8h.01M16 8h.01M8 16h.01M16 16h.01"
      />
    </svg>
  );
}

function CountertopIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h16M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8M4 8l2-4h12l2 4"
      />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function BathroomIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16h16M4 16V6a2 2 0 012-2h2m0 0V2m0 2h8m0 0V2m0 2h2a2 2 0 012 2v10"
      />
    </svg>
  );
}

function FlooringIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4h16v16H4V4zM4 12h16M12 4v16M4 8h8M12 8h8M4 16h8M12 16h8"
      />
    </svg>
  );
}

function BasementIcon() {
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}
