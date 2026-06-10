import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import AppShell from "@/components/layout/AppShell";
import { Toaster } from "sonner";
import { SITE_CONFIG } from "@/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  robots: {
    index: true,
    follow: true,
  },

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: [
    "streetwear",
    "designer clothing",
    "hoodies",
    "cargo pants",
    "fashion",
    "luxury streetwear",
    "designer streetwear",
    "premium streetwear",
  ],

  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "NOST Designer Streetwear",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
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

  <AppShell>
    {children}
  </AppShell>

  <Toaster richColors position="top-right" />
</body>
    </html>
  );
}