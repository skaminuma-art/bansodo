import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { getServiceMetadata, serviceJsonLd } from "@/lib/seo";

const service = services.line;

export const metadata: Metadata = getServiceMetadata(service);

export default function LinePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <ServicePage service={service} showLinePricing />
    </>
  );
}
