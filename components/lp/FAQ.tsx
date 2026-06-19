import Accordion from "@/components/Accordion";
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
      className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl"
        >
          よくあるご質問
        </h2>
        <div className="mt-10">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
