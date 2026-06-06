import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "継続サポート | 伴走堂",
  description: services.support.catchcopy,
};

export default function SupportPage() {
  return <ServicePage service={services.support} />;
}
