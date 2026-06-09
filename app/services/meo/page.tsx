import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { getServiceMetadata, serviceJsonLd } from "@/lib/seo";

const service = services.meo;

const meoDescription =
  "MEO対策・Googleマップ集客なら伴走堂。松本市・長野県の中小企業・実店舗を中心に、地域No.1の存在感を作るまで伴走します。全国オンライン対応。";

const baseMetadata = getServiceMetadata(service);

export const metadata: Metadata = {
  ...baseMetadata,
  description: meoDescription,
  openGraph: baseMetadata.openGraph
    ? { ...baseMetadata.openGraph, description: meoDescription }
    : undefined,
  twitter: baseMetadata.twitter
    ? { ...baseMetadata.twitter, description: meoDescription }
    : undefined,
};

export default function MeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <ServicePage service={service} />
    </>
  );
}
