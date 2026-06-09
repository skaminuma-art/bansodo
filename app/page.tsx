import Hero from "@/components/lp/Hero";
import Problems from "@/components/lp/Problems";
import ServiceCards from "@/components/lp/ServiceCards";
import SalonPackageBanner from "@/components/lp/SalonPackageBanner";
import Philosophy from "@/components/lp/Philosophy";
import Representative from "@/components/lp/Representative";
import Testimonials from "@/components/lp/Testimonials";
import Cases from "@/components/lp/Cases";
import FAQ from "@/components/lp/FAQ";
import ContactSection from "@/components/lp/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <SalonPackageBanner />
      <ServiceCards />
      <Philosophy />
      <Representative />
      <Testimonials />
      <Cases />
      <FAQ />
      <ContactSection />
    </>
  );
}
