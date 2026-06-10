import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://noststudio.co",
      lastModified: new Date(),
    },

    {
      url: "https://noststudio.co/shop",
      lastModified: new Date(),
    },

    {
      url: "https://noststudio.co/about",
      lastModified: new Date(),
    },

    {
      url: "https://noststudio.co/contact",
      lastModified: new Date(),
    },
  ];
}