import * as React from "react";
import { siteConfig } from "@/lib/config/site";

interface SchemaProps {
  type: "Organization" | "SoftwareApplication" | "ResearchProject";
  data?: Record<string, any>;
}

export function Schema({ type, data = {} }: SchemaProps) {
  let baseSchema = {};

  if (type === "Organization") {
    baseSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.png`,
      sameAs: [
        siteConfig.links.twitter,
        siteConfig.links.github,
      ],
    };
  }

  if (type === "SoftwareApplication") {
    baseSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      operatingSystem: "Web, iOS, Android",
      applicationCategory: "HealthApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  }

  if (type === "ResearchProject") {
    baseSchema = {
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      name: siteConfig.name,
      description: siteConfig.description,
      url: `${siteConfig.url}/research`,
    };
  }

  const schemaData = { ...baseSchema, ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
