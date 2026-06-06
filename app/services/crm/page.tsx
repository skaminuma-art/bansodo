import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "CRM導入・定着支援 | 伴走堂",
  description: services.crm.catchcopy,
};

export default function CrmPage() {
  return <ServicePage service={services.crm} />;
}
