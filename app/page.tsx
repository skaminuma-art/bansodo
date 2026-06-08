import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/lp/Hero";
import Problems from "@/components/lp/Problems";
import ServiceCards from "@/components/lp/ServiceCards";
import Philosophy from "@/components/lp/Philosophy";
import Representative from "@/components/lp/Representative";
import Monitor from "@/components/lp/Monitor";
import Testimonials from "@/components/lp/Testimonials";
import Cases from "@/components/lp/Cases";
import FAQ from "@/components/lp/FAQ";
import ContactSection from "@/components/lp/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollReveal immediate>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Problems />
      </ScrollReveal>
      <ScrollReveal>
        <ServiceCards />
      </ScrollReveal>
      <ScrollReveal>
        <Philosophy />
      </ScrollReveal>
      <ScrollReveal>
        <Representative />
      </ScrollReveal>
      <ScrollReveal>
        <Monitor />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <Cases />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}
