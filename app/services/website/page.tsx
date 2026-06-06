import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Webサイト制作 | 伴走堂",
  description: services.website.catchcopy,
};

export default function WebsitePage() {
  return <ServicePage service={services.website} />;
}
