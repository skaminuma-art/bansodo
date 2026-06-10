import Image from "next/image";
import Link from "next/link";
import { FOCUS_RING } from "@/lib/a11y";
import { IMAGES, SITE } from "@/lib/site";

export default function Representative() {
  return (
    <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
        <div className="relative order-1 h-36 w-36 shrink-0 overflow-hidden rounded-full border-2 border-primary/10 sm:order-none sm:h-48 sm:w-48">
          <Image
            src={IMAGES.representative}
            alt={`${SITE.representative}の顔写真`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 144px, 192px"
            priority
          />
        </div>
        <div className="order-2 text-center sm:order-none sm:text-left">
          <p className="text-sm font-medium tracking-widest text-accent">
            代表者紹介
          </p>
          <h2 className="mt-2 font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            {SITE.representative}
          </h2>
          <p className="mt-2 text-sm text-text-custom/70">{SITE.title}</p>
          <p className="mt-1 text-sm text-text-custom/70">
            Salesforce公認資格 保有
          </p>
          <p className="mt-4 text-sm leading-7 text-text-custom/80">
            大学卒業後、法人営業・M&A仲介を経て、
            <span className="font-bold text-accent">300名以上</span>
            の中小企業社長と直接向き合ってきた。
          </p>
          <p className="mt-3 text-sm leading-7 text-text-custom/80">
            転機は、Salesforce導入支援の現場だった。
            社長が何十万もかけて入れたシステムが、半年後には誰も開いていなかった。
          </p>
          <p className="mt-4 font-mincho text-base font-semibold leading-8 text-accent sm:text-lg">
            「売って終わりにしない。使いこなせるまで、一緒に走る。」
          </p>
          <p className="mt-3 text-sm leading-7 text-text-custom/80">
            難しいことを、わかりやすく。
            ITを、現場の武器に。
          </p>
          <Link
            href="/about"
            className={`mt-6 inline-block rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline ${FOCUS_RING}`}
          >
            プロフィールを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
