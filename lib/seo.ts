import type { Metadata } from "next";
import { IMAGES, LOGO, SITE } from "@/lib/site";
import type { ServiceData } from "@/lib/services";

export const SITE_URL = "https://bansodo.jp";

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = LOGO.icon,
  ogImageAlt = `${SITE.name} ${SITE.nameEn}`,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE_URL,
    logo: absoluteUrl(LOGO.icon),
    email: SITE.email,
    telephone: SITE.phone,
    founder: {
      "@type": "Person",
      name: SITE.representative,
      jobTitle: SITE.title,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: ["Japanese"],
    },
    sameAs: [SITE.lineUrl],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE_URL,
    image: absoluteUrl(LOGO.icon),
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "¥¥",
    description: SITE.catchcopy,
    founder: {
      "@type": "Person",
      name: SITE.representative,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function serviceJsonLd(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      description: service.pricingNote,
      availability: "https://schema.org/InStock",
    },
  };
}

const SERVICE_OG_IMAGES: Record<string, string> = {
  line: IMAGES.heroLine,
  website: IMAGES.heroWebsite,
  meo: IMAGES.heroMeo,
  crm: IMAGES.heroCrm,
  ai: IMAGES.heroAi,
  sns: IMAGES.heroServiceDefault,
  recruitment: IMAGES.heroServiceDefault,
  support: IMAGES.heroServiceDefault,
};

export function getServiceMetadata(service: ServiceData): Metadata {
  return createPageMetadata({
    title: `${service.name} | ${SITE.name}`,
    description: `${service.shortDescription} ${service.catchcopy}`,
    path: `/services/${service.slug}`,
    ogImage: SERVICE_OG_IMAGES[service.slug] ?? LOGO.icon,
    ogImageAlt: `${SITE.name} — ${service.name}`,
  });
}

export const aboutMetadata = createPageMetadata({
  title: `私たちについて | ${SITE.name}`,
  description: `${SITE.name}代表・${SITE.representative}のプロフィールと経歴。Salesforce公認資格保有。導入して終わりにしない、現場に定着するIT支援を提供しています。`,
  path: "/about",
  ogImage: IMAGES.representative,
  ogImageAlt: `${SITE.name} 代表 ${SITE.representative}`,
});

export const contactMetadata = createPageMetadata({
  title: `お問い合わせ | ${SITE.name}`,
  description: `${SITE.name}へのお問い合わせはこちら。公式LINE・メール・電話で、費用やサービス内容などお気軽にご相談ください。`,
  path: "/contact",
  ogImage: LOGO.icon,
  ogImageAlt: `${SITE.name} お問い合わせ`,
});
