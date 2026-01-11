interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

export default function CTASection({
  title = "Let's Discuss Your Project",
  subtitle = "Our team is ready to help bring your vision to life.",
  variant = "light",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section py-12 md:py-16 lg:py-20 ${
        isDark ? "bg-charcoal text-ivory" : "bg-cream text-charcoal"
      }`}
    >
      <div className="container text-center px-6">
        <h2 className={`font-display mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl ${isDark ? "text-white" : ""}`}>
          {title}
        </h2>
        <p className={`mb-6 md:mb-8 mx-auto text-sm md:text-base ${isDark ? "text-gray-300" : "text-slate"}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a
            href="tel:+16782176410"
            className={`${isDark ? "btn-gold" : "btn-primary"} w-full sm:w-auto justify-center text-sm md:text-base py-4 md:py-3`}
          >
            <PhoneIcon />
            Call (678) 217-6410
          </a>
          <a
            href="/contact"
            className={`btn-secondary w-full sm:w-auto justify-center text-sm md:text-base py-4 md:py-3 ${
              isDark ? "border-white text-white hover:bg-white hover:text-charcoal" : ""
            }`}
          >
            Visit Showroom
          </a>
        </div>
      </div>
    </section>
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
