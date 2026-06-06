import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "SNS運用・投稿自動化 | 伴走堂",
  description: services.sns.catchcopy,
};

export default function SnsPage() {
  return <ServicePage service={services.sns} />;
}
