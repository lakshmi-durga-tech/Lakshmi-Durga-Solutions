import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lakshmidurgasolutions.com";

  const pages = [
    "",
    "/about-us/",
    "/about/"
    "/price/",
    "/services/",
    "/pricing/",
    "/contact-us/",
    "/blog/",
    "/pay-online/",
    "/terms-and-policy/",
    "/refund-and-cancellation/",
    "/terms-and-conditions/",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
