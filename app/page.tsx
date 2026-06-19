import Hero from "@/components/lp/Hero";
import Problems from "@/components/lp/Problems";
import CrmStats from "@/components/lp/CrmStats";
import CrmOverview from "@/components/lp/CrmOverview";
import CrmProcess from "@/components/lp/CrmProcess";
import Philosophy from "@/components/lp/Philosophy";
import Cases from "@/components/lp/Cases";
import Representative from "@/components/lp/Representative";
import FAQ from "@/components/lp/FAQ";
import ContactSection from "@/components/lp/ContactSection";
import Reveal from "@/components/lp/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal immediate>
        <CrmStats />
      </Reveal>
      <Reveal>
        <Problems />
      </Reveal>
      <Reveal>
        <CrmOverview />
      </Reveal>
      <Reveal>
        <CrmProcess />
      </Reveal>
      <Reveal>
        <Philosophy />
      </Reveal>
      <Reveal>
        <Cases />
      </Reveal>
      <Reveal>
        <Representative />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </>
  );
}
