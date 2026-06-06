import Image from "next/image";
import Link from "next/link";
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
          <p className="mt-1 text-sm text-text-custom/60">
            Salesforce公認資格 保有
          </p>
          <p className="mt-4 text-sm leading-7 text-text-custom/80">
            「難しいことを、わかりやすく。入れて終わりにしない。」
            <br className="sm:hidden" />
            をモットーに、現場に定着するIT支援を提供していきます。
          </p>
          <p className="mt-6 font-mincho text-base leading-8 text-primary sm:text-xl">
            「売って終わりにしない。
            <br className="sm:hidden" />
            使いこなせるまで、一緒に走ります。」
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            プロフィールを見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
