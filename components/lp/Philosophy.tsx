import SectionHeading from "@/components/ui/SectionHeading";

export default function Philosophy() {
  return (
    <section id="about" className="relative overflow-x-hidden bg-primary px-4 py-14 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-hemp-leaf opacity-[0.05]" />
      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          label="Philosophy"
          title={
            <>
              なぜ、CRMは
              <br />
              使われなくなるのか。
            </>
          }
          align="center"
          dark
        />
        <div className="mt-8 space-y-5 text-[15px] leading-8 text-white/80 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-9">
          <p className="break-words">
            原因はツールではありません。
            現場の業務フローに合わせた設計がなく、
            導入後の定着支援がなかった——それだけです。
          </p>
          <p className="break-words">
            伴走堂がやるのは、CRMを「売る」ことではありません。
            全員が日常業務で使い、
            顧客情報がチームの資産になる状態を、
            一緒に作り続けることです。
          </p>
          <blockquote className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 font-mincho text-base leading-relaxed text-white sm:px-8 sm:text-xl">
            入れて終わりにしない。
            <br />
            使いこなせるまで、一緒に走る。
            <br />
            <span className="text-accent">それが、伴走堂のCRM支援です。</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
