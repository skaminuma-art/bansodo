import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "公式LINE構築 | 伴走堂",
  description: services.line.catchcopy,
};

export default function LinePage() {
  return <ServicePage service={services.line} showLinePricing />;
}
