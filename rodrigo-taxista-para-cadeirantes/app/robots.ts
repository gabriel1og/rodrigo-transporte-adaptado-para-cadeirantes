import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://rodrigo-transporte-adaptado-para-cadeirantes.vercel.app/sitemap.xml",
  };
}
