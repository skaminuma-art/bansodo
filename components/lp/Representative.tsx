import Image from "next/image";
import Link from "next/link";
import { FOCUS_RING } from "@/lib/a11y";
import {
  IMAGES,
  SALESFORCE_QUALIFICATION_LABEL,
  SITE,
} from "@/lib/site";

export default function Representative() {
  return (
    <section className="overflow-x-hidden bg-bg-custom px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="card-premium overflow-hidden rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-stretch">
            <div className="flex items-center justify-center bg-gradient-to-br from-accent/8 to-primary/5 p-6 sm:w-72 sm:shrink-0 sm:p-8">
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-2 border-white shadow-[0_12px_40px_rgba(15,30,48,0.15)] sm:aspect-[3/4] sm:h-auto sm:w-full sm:rounded-2xl sm:border-primary/10">
                <Image
                  src={IMAGES.representative}
                  alt={`${SITE.representative}の顔写真`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 208px, 288px"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1 break-words px-5 pb-8 pt-2 text-center sm:px-8 sm:py-8 sm:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Representative
              </p>
              <p className="mt-2 text-sm font-medium tracking-widest text-accent">
                代表者紹介
              </p>
              <h2 className="mt-2 font-mincho text-2xl font-bold text-primary sm:text-3xl">
                {SITE.representative}
              </h2>
              <p className="mt-2 text-sm text-text-custom/65">{SITE.title}</p>

              <span className="mt-4 inline-block rounded-full border border-accent/25 bg-accent/8 px-3 py-1 text-xs font-semibold text-primary">
                Salesforce公認資格 {SALESFORCE_QUALIFICATION_LABEL}保有
              </span>

              <p className="mt-5 break-words text-sm leading-7 text-text-custom/80">
                大学卒業後、法人営業・M&A仲介を経て、
                <span className="font-bold text-accent">300名以上</span>
                の中小企業社長と直接向き合ってきた。
              </p>
              <p className="mt-3 break-words text-sm leading-7 text-text-custom/80">
                転機は、Salesforce導入支援の現場だった。
                社長が何十万もかけて入れたシステムが、半年後には誰も開いていなかった。
              </p>
              <blockquote className="mt-5 border-l-2 border-accent pl-4 text-left font-mincho text-base font-semibold leading-8 text-accent sm:text-lg">
                「売って終わりにしない。使いこなせるまで、一緒に走る。」
              </blockquote>
              <p className="mt-4 break-words text-sm leading-7 text-text-custom/80">
                難しいことを、わかりやすく。
                CRMを、現場の武器に。
              </p>
              <Link
                href="/about"
                className={`mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary underline-offset-4 hover:underline ${FOCUS_RING}`}
              >
                プロフィールを見る →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
