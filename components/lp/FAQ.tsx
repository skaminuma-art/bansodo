import Accordion from "@/components/Accordion";

const faqItems = [
  {
    question: "ITに詳しくないのですが大丈夫ですか？",
    answer:
      "専門用語は一切使わず、社長のビジネスの言葉でお話しします。",
  },
  {
    question: "パソコン操作が苦手なのですが……",
    answer:
      "スマホのLINEが使えれば問題ありません。操作手順まで一緒に伴走します。",
  },
  {
    question: "料金はどのくらいかかりますか？",
    answer:
      "サービスや規模によって異なります。まずは無料相談でお気軽にご連絡ください。",
  },
  {
    question: "導入後のサポートはありますか？",
    answer:
      "月額の継続サポートプランをご用意しています。導入後も一緒に走り続けます。",
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
