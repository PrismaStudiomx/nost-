import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noststudio.co"),
  
  alternates: {
  canonical: "https://noststudio.co",
},

robots: {
  index: true,
  follow: true,
},

  title: {
    default: "NOST",
    template: "%s | NOST",
  },

  description:
    "Premium designer streetwear crafted for creators and trendsetters.",

  keywords: [
    "streetwear",
    "designer clothing",
    "hoodies",
    "cargo pants",
    "fashion",
    "luxury streetwear",
  ],

  openGraph: {
  title: "NOST",
  description:
    "Premium designer streetwear crafted for creators.",
  url: "https://noststudio.co",
  siteName: "NOST",

  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "NOST",
    },
  ],

  locale: "en_US",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "NOST",
    description:
      "Premium designer streetwear crafted for creators.",
      images: [
  {
    url: "https://nost-rs5a.vercel.app/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "NOST",
  },
],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
  className={`${inter.variable} ${playfair.variable} antialiased`}
>
  <SchemaMarkup />

  <Navbar />

  {children}

  <Footer />
</body>
    </html>
  );
}