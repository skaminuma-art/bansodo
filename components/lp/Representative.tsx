import Image from "next/image";
import Link from "next/link";
import { FOCUS_RING } from "@/lib/a11y";
import { IMAGES, SITE } from "@/lib/site";

export default function Representative() {
  return (
    <section className="section-surface overflow-x-hidden px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="card-premium overflow-hidden rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-stretch">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/[0.03] via-accent/[0.06] to-transparent p-8 sm:w-80 sm:shrink-0 sm:p-10">
              <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(15,30,48,0.18)] ring-1 ring-primary/10 sm:max-w-none">
                <Image
                  src={IMAGES.representative}
                  alt={`${SITE.representative}の顔写真`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 220px, 320px"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1 break-words px-5 pb-8 pt-2 text-center sm:px-10 sm:py-10 sm:text-left">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-accent">代表者紹介</p>
              <h2 className="mt-3 font-mincho text-2xl font-bold text-primary sm:text-3xl">
                {SITE.representative}
              </h2>
              <p className="mt-2 text-sm text-text-custom/60">{SITE.title}</p>

              <p className="mt-6 break-words text-sm leading-7 text-text-custom/80">
                大学卒業後、法人営業・M&A仲介を経て、
                <span className="font-bold text-accent">300名以上</span>
                の中小企業社長と直接向き合ってきた。
              </p>
              <p className="mt-3 break-words text-sm leading-7 text-text-custom/80">
                転機は、CRM導入支援の現場だった。
                社長が何十万もかけて入れたシステムが、半年後には誰も開いていなかった。
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-4 text-left font-mincho text-base font-semibold leading-8 text-accent sm:text-lg">
                「売って終わりにしない。使いこなせるまで、一緒に走る。」
              </blockquote>
              <p className="mt-4 break-words text-sm leading-7 text-text-custom/80">
                難しいことを、わかりやすく。
                CRMを、現場の武器に。
              </p>
              <Link
                href="/about"
                className={`mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent ${FOCUS_RING}`}
              >
                プロフィールを見る
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
