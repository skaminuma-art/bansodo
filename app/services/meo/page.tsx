import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { getServiceMetadata, serviceJsonLd } from "@/lib/seo";

const service = services.meo;

export const metadata: Metadata = getServiceMetadata(service);

export default function MeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <ServicePage service={service} />
    </>
  );
}
