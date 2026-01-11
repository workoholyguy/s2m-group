"use client";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-charcoal border-t border-graphite safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {/* Call */}
        <a
          href="tel:+16782176410"
          className="flex flex-col items-center gap-1 p-3 text-gray-400 hover:text-gold transition-colors"
          aria-label="Call us"
        >
          <PhoneIcon />
          <span className="text-xs">Call</span>
        </a>

        {/* Email */}
        <a
          href="mailto:S2mgrp@gmail.com"
          className="flex flex-col items-center gap-1 p-3 text-gray-400 hover:text-gold transition-colors"
          aria-label="Email us"
        >
          <EmailIcon />
          <span className="text-xs">Email</span>
        </a>

        {/* Directions */}
        <a
          href="https://www.google.com/maps/dir//4700+Atlanta+Hwy,+Alpharetta,+GA+30004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-3 text-gray-400 hover:text-gold transition-colors"
          aria-label="Get directions"
        >
          <DirectionsIcon />
          <span className="text-xs">Directions</span>
        </a>

        {/* Review */}
        <a
          href="https://www.google.com/maps/place/S2M/@34.1778471,-84.2406279,8496m/data=!3m1!1e3!4m12!1m2!2m1!1scabinets!3m8!1s0x88f59d9ddf2bb9e5:0xbacc6ae340694d1a!8m2!3d34.1586753!4d-84.2315365!9m1!1b1!15sCghjYWJpbmV0c1oKIghjYWJpbmV0c5IBDWNhYmluZXRfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmFOVXhxTjFObkVBReABAPoBBAgAEEs!16s%2Fg%2F11p5j1_8jn?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-3 text-gold hover:text-gold-light transition-colors"
          aria-label="Leave a review"
        >
          <StarIcon />
          <span className="text-xs font-medium">Review</span>
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-6 h-6"
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
      className="w-6 h-6"
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

function DirectionsIcon() {
  return (
    <svg
      className="w-6 h-6"
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

function StarIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
