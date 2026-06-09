import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SalonPackagePage from "@/components/SalonPackagePage";
import { SALON_PLANS } from "@/lib/salon-package";
import { SITE_URL, salonPackageMetadata } from "@/lib/seo";

export const metadata: Metadata = salonPackageMetadata;

export default function SalonPackageRoute() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "サロン向けスペシャルパッケージ",
    description:
      "美容室・理容室・トリマー向け。ホームページ×公式LINE×自動化でリピーター獲得を仕組み化。",
    url: `${SITE_URL}/salon-package`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    offers: SALON_PLANS.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} / ${plan.subtitle}`,
      priceCurrency: "JPY",
      price: plan.monitorPrice,
      description: plan.tagline,
      availability: "https://schema.org/LimitedAvailability",
    })),
    audience: {
      "@type": "Audience",
      audienceType: "美容室・理容室・トリマー・ペットサロン・エステ・ネイル",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <SalonPackagePage />
    </>
  );
}
