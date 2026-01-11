import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cabinets", href: "/cabinets" },
  { name: "Remodeling", href: "/remodeling" },
  { name: "Showroom", href: "/showroom" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585193411342",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/s2m_cabinet_store/",
    icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* CTA Banner */}
      <div className="bg-gold">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal">
              Ready to Transform Your Space?
            </h3>
            <p className="text-charcoal/80 mt-1">
              Visit our showroom or call us today.
            </p>
          </div>
          <a
            href="tel:+16782176410"
            className="btn-primary bg-charcoal hover:bg-graphite whitespace-nowrap"
          >
            <PhoneIcon />
            (678) 217-6410
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8">
              <Image
                src="/s2m_logo_upscaled.png"
                alt="S2M Cabinets"
                width={55}
                height={55}
                className="object-contain brightness-0 invert"
              />
              <span className="font-display text-2xl tracking-wide">
                S2M Cabinets
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Premium cabinets and remodeling services serving North Atlanta for
              over 20 years. Quality craftsmanship, exceptional service.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-graphite flex items-center justify-center hover:bg-gold transition-colors group"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-charcoal transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-medium tracking-wider uppercase mb-8 text-gold">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-medium tracking-wider uppercase mb-8 text-gold">
              Contact
            </h4>
            <ul className="space-y-4 text-lg text-gray-400">
              <li>
                <a
                  href="tel:+16782176410"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <PhoneIcon />
                  (678) 217-6410
                </a>
              </li>
              <li>
                <a
                  href="mailto:S2mgrp@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <EmailIcon />
                  S2mgrp@gmail.com
                </a>
              </li>
            </ul>
            {/* Social Links - Mobile visible */}
            <div className="flex items-center gap-4 mt-8 lg:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2 text-base"
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xl font-medium tracking-wider uppercase mb-8 text-gold">
              Showroom
            </h4>
            <address className="text-lg text-gray-400 not-italic leading-relaxed">
              4700 Atlanta Hwy
              <br />
              Alpharetta, GA 30004
              <br />
              <span className="text-gold mt-4 inline-block">
                Serving North Atlanta
              </span>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-graphite mt-16 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} S2M Cabinets. All rights reserved. Powered by{" "}
            <a
              href="https://avidtechusa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors font-medium"
            >
              Avid Tech Usa
            </a>
          </p>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              20+ Years of Excellence in Cabinet & Remodeling
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
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

function EmailIcon() {
  return (
    <svg
      className="w-5 h-5"
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}
