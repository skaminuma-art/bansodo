import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "採用サイト制作 | 伴走堂",
  description: services.recruitment.catchcopy,
};

export default function RecruitmentPage() {
  return <ServicePage service={services.recruitment} />;
}
