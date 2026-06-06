import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "AI・業務自動化 | 伴走堂",
  description: services.ai.catchcopy,
};

export default function AiPage() {
  return <ServicePage service={services.ai} />;
}
