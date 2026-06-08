import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { IMAGES, SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative bg-primary px-5 py-16 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white/50 sm:text-sm">
            {SITE.nameEn}
          </p>
          <h1 className="font-mincho text-[1.375rem] font-semibold leading-snug tracking-wide text-white sm:text-4xl sm:leading-tight lg:text-6xl lg:whitespace-nowrap">
            ITは、使いこなせた日から
            <br className="lg:hidden" />
            <span className="text-accent">資産になる。</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            導入して終わりにしない。Webサイト・公式LINE・CRM・AI自動化まで、
            <br className="sm:hidden" />
            現場に定着するまで伴走します。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 lg:items-start">
            <a
              href={SITE.lineUrl}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold leading-snug text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              LINEで気軽に相談する
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white sm:text-base"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              メールで問い合わせる
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-10 hidden aspect-[4/5] w-full max-w-sm lg:mx-0 lg:mt-0 lg:block">
          <Image
            src={IMAGES.representative}
            alt={`${SITE.representative}の顔写真`}
            fill
            className="rounded-lg object-cover shadow-lg"
            sizes="(min-width: 1024px) 384px, 0px"
            priority
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center lg:mt-12">
        <ChevronDown
          className="h-6 w-6 animate-bounce text-white/40"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
