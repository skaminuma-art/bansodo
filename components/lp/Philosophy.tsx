import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { RECOLOR_CASE } from "@/lib/cases";
import { IMAGES } from "@/lib/site";

export default function Philosophy() {
  return (
    <section id="about" className="relative overflow-x-hidden bg-primary px-4 py-14 sm:px-8 sm:py-24">
      <div className="bg-mesh-hero pointer-events-none absolute inset-0 opacity-90" />
      <div className="relative mx-auto max-w-5xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="mb-10 grid grid-cols-2 gap-2 sm:gap-3 lg:mb-0">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/12 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <Image
                src={RECOLOR_CASE.cover}
                alt="Re:COLOR — 支援先サロンの施術イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[11px] font-medium text-white/75">
                支援事例 — Re:COLOR
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src={IMAGES.representative}
                alt="伴走堂代表 — 現場伴走"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 45vw, 220px"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src={RECOLOR_CASE.cover}
                alt="Re:COLOR カラー施術"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 640px) 45vw, 220px"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              label="Philosophy"
              title={
                <>
                  なぜ、CRMは
                  <br />
                  使われなくなるのか。
                </>
              }
              dark
            />
            <div className="mt-8 space-y-5 text-[15px] leading-8 text-white/80 sm:space-y-6 sm:text-base sm:leading-9">
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
              <blockquote className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 font-mincho text-base leading-relaxed text-white sm:px-7">
                入れて終わりにしない。
                <br />
                使いこなせるまで、一緒に走る。
                <br />
                <span className="text-accent">それが、伴走堂のCRM支援です。</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
