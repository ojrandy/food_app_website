import { Metadata } from "next";

export const siteConfig = {
  name: "SmartMeal AI",
  description: "Your Personal AI Chef & Nutritionist. Automate meal planning, track macros, and discover recipes tailored exactly to your body.",
  url: "https://smartmeal.ai",
  ogImage: "https://smartmeal.ai/og.jpg",
  links: {
    twitter: "https://twitter.com/smartmeal_ai",
    github: "https://github.com/smartmeal-ai",
  },
};

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: SEOProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@smartmeal_ai",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/manifest.json`,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

// JSON-LD Schema Generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.item}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateResearchProjectSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: "SmartMeal Nutritional AI Model",
    description: "An advanced machine learning model for predicting personalized nutritional requirements based on metabolic data.",
    url: `${siteConfig.url}/research`,
    department: {
      "@type": "Organization",
      name: "SmartMeal AI Research Labs",
    },
  };
}
