export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",

    name: "NOST",

    url: "https://noststudio.co",

    description:
      "Premium designer streetwear crafted for creators and trendsetters.",

    image: "https://noststudio.co/og-image.jpg",

    logo: "https://noststudio.co/og-image.jpg",

    brand: {
      "@type": "Brand",
      name: "NOST",
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },

    sameAs: [
      "https://instagram.com/noststudio",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}