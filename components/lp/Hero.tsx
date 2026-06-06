import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-primary px-5 py-16 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white/50 sm:text-sm">
          {SITE.nameEn}
        </p>
        <h1 className="font-mincho text-[1.375rem] font-semibold leading-snug tracking-wide text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:whitespace-nowrap">
          ITは、使いこなせた日から
          <br className="sm:hidden" />
          資産になる。
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
          導入して終わりにしない。Webサイト・公式LINE・CRM・AI自動化まで、
          <br className="sm:hidden" />
          現場に定着するまで伴走します。
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={SITE.lineUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold leading-snug text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            LINEで気軽に相談する
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-6 py-3.5 text-sm font-medium leading-snug text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
            メールで問い合わせる
          </Link>
        </div>
      </div>
    </section>
  );
}
