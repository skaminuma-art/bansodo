import Accordion from "@/components/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/services";

const crmFaqs = services.crm.faqs;

const faqItems = [
  ...crmFaqs,
  {
    question: "ITに詳しくないのですが大丈夫ですか？",
    answer:
      "専門用語は一切使わず、社長のビジネスの言葉でお話しします。",
  },
  {
    question: "対応エリアはどこですか？",
    answer:
      "全国対応しています。オンラインでのご支援が中心ですが、長野県内は訪問対応も可能です。",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="overflow-x-hidden bg-bg-custom px-4 py-14 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="よくあるご質問"
          align="center"
          id="faq-heading"
        />
        <div className="mt-10 sm:mt-12">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
