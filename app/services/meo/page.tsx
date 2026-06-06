import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "MEO対策 | 伴走堂",
  description: services.meo.catchcopy,
};

export default function MeoPage() {
  return <ServicePage service={services.meo} />;
}
