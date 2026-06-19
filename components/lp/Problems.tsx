import { AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const problems = [
  "CRMを導入したが、半年後には誰も開いていない",
  "顧客情報がExcel・個人メモ・LINEに散らばり、営業が属人化している",
  "ベンダーの提案がカタカナばかりで、現場に合うか判断できない",
];

export default function Problems() {
  return (
    <section className="overflow-x-hidden bg-bg-custom px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <SectionHeading
          label="Problems"
          title="こんなお悩みはありませんか？"
          description="多くの中小企業が、同じ壁にぶつかっています。"
          align="center"
        />
        <div className="mt-10 space-y-3 sm:mt-12">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className="card-premium flex w-full items-start gap-4 rounded-xl px-4 py-5 sm:gap-5 sm:px-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mincho text-sm font-bold text-white">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 pt-0.5">
                <AlertCircle
                  className="mb-2 h-4 w-4 text-accent sm:hidden"
                  aria-hidden="true"
                />
                <p className="min-w-0 break-words text-[15px] leading-7 text-text-custom sm:text-base">
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
