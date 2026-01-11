"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cabinets", href: "/cabinets" },
  { name: "Remodeling", href: "/remodeling" },
  { name: "Showroom", href: "/showroom" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-stone/10">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/s2m_logo_upscaled.png"
            alt="S2M Cabinets"
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="hidden sm:block">
            <span className="font-display text-xl tracking-wide text-charcoal">
              S2M Cabinets
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-slate hover:text-charcoal transition-colors uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="tel:+16782176410"
          className="hidden lg:flex btn-primary"
        >
          <PhoneIcon />
          (678) 217-6410
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-charcoal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-t border-stone/10">
          <div className="container py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{ display: 'block' }}
                className="text-base font-medium tracking-wide text-slate hover:text-charcoal hover:bg-cream transition-colors uppercase py-4 px-4 rounded-sm border-b border-stone/10 last:border-b-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2">
              <a
                href="tel:+16782176410"
                className="btn-gold w-full justify-center text-base py-4"
              >
                <PhoneIcon />
                Call (678) 217-6410
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
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
