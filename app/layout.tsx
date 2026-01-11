import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "S2M Cabinets | Premium Cabinets & Remodeling in Alpharetta, GA",
    template: "%s | S2M Cabinets",
  },
  description:
    "Premium kitchen cabinets, bathroom remodeling, and countertops in North Atlanta. Visit our Alpharetta showroom. 20+ years of experience. Call (678) 217-6410.",
  keywords: [
    "cabinets Alpharetta",
    "kitchen cabinets North Atlanta",
    "kitchen remodeling Alpharetta",
    "bathroom remodeling North Atlanta",
    "countertops Alpharetta GA",
    "granite countertops",
    "marble countertops",
    "custom cabinets Georgia",
    "cabinet showroom Alpharetta",
    "S2M Cabinets",
  ],
  authors: [{ name: "S2M Cabinets" }],
  creator: "S2M Cabinets",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://s2mcabinets.com",
    siteName: "S2M Cabinets",
    title: "S2M Cabinets | Premium Cabinets & Remodeling in Alpharetta, GA",
    description:
      "Premium kitchen cabinets, bathroom remodeling, and countertops in North Atlanta. Visit our Alpharetta showroom.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
