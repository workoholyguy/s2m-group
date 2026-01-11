import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact S2M Cabinets in Alpharetta, GA. Call (678) 217-6410 or visit our showroom at 4700 Atlanta Hwy. Kitchen cabinets, countertops, and remodeling.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-32 pb-24 min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/cabinets/cabinets-15.jpg"
            alt="Elegant white kitchen with gold geometric pendant lights"
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
            Get In Touch
          </p>
          <h1 className="text-white mb-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ready to start your project? Have questions? Give us a call or stop
            by our showroom. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Let&apos;s Talk</h2>
              <div className="accent-line" />
              <p className="mb-10">
                The best way to reach us is by phone. We can answer questions,
                discuss your project, and schedule a showroom visit.
              </p>

              {/* Phone - Primary CTA */}
              <div className="bg-gold p-8 rounded-sm mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-charcoal/70 text-sm uppercase tracking-wide">
                      Call Us
                    </p>
                    <a
                      href="tel:+16782176410"
                      className="font-display text-2xl text-charcoal hover:text-charcoal/80 transition-colors"
                    >
                      (678) 217-6410
                    </a>
                  </div>
                </div>
                <p className="text-charcoal/70 text-sm">
                  Speak directly with our team about your project.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8 p-6 bg-cream rounded-sm">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                  <EmailIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-stone text-sm uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:S2mgrp@gmail.com"
                    className="text-charcoal hover:text-gold transition-colors"
                  >
                    S2mgrp@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-cream rounded-sm">
                <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                  <LocationIcon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-stone text-sm uppercase tracking-wide mb-1">
                    Showroom Address
                  </p>
                  <address className="not-italic text-charcoal">
                    4700 Atlanta Hwy
                    <br />
                    Alpharetta, GA 30004
                  </address>
                  <a
                    href="https://www.google.com/maps/dir//4700+Atlanta+Hwy,+Alpharetta,+GA+30004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm hover:text-gold-dark transition-colors mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mt-8 relative">
                <div className="aspect-[16/9] rounded-sm overflow-hidden relative">
                  <Image
                    src="/cabinets/cabinets-7.jpg"
                    alt="Luxury gray kitchen with crystal chandeliers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream p-6 md:p-8 lg:p-12 rounded-sm h-fit">
              <h3 className="font-display text-xl md:text-2xl mb-2">Send a Message</h3>
              <p className="text-slate mb-6 md:mb-8 text-sm">
                Fill out the form below and we&apos;ll get back to you within
                one business day.
              </p>

              <form 
                action="https://usebasin.com/f/ad090695e5b5"
                method="POST"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="cabinets">Cabinets Only</option>
                    <option value="countertops">Countertops Only</option>
                    <option value="flooring">Flooring</option>
                    <option value="basement">Basement Finishing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-ivory border border-stone/20 rounded-sm focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                </button>

                <p className="text-stone text-xs text-center">
                  Prefer to call? Reach us at{" "}
                  <a href="tel:+16782176410" className="text-gold">
                    (678) 217-6410
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
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

      {/* Service Area */}
      <section className="py-12 bg-ivory">
        <div className="container text-center">
          <p className="text-stone text-sm">
            <span className="text-gold font-medium">Serving North Atlanta</span>{" "}
            — Alpharetta, Roswell, Johns Creek, Milton, Cumming, Suwanee,
            Duluth, Sandy Springs, and surrounding areas.
          </p>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
