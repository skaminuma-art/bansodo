import { AlertCircle } from "lucide-react";

const problems = [
  "CRMを導入したが、半年後には誰も開いていない",
  "顧客情報がExcel・個人メモ・LINEに散らばり、営業が属人化している",
  "ベンダーの提案がカタカナばかりで、現場に合うか判断できない",
];

export default function Problems() {
  return (
    <section className="bg-bg-custom px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
          こんなお悩みはありませんか？
        </h2>
        <p className="mt-4 text-center text-sm text-text-custom/60">
          多くの中小企業が、同じ壁にぶつかっています。
        </p>
        <div className="mt-10 space-y-4">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex w-full items-start gap-3 overflow-visible rounded-sm border border-primary/10 bg-white px-4 py-5 sm:gap-4 sm:px-6"
            >
              <AlertCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-primary/70"
                aria-hidden="true"
              />
              <p className="min-w-0 flex-1 whitespace-normal break-words text-base leading-7 text-text-custom">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
