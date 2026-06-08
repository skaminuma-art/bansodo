import Link from "next/link";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { FOCUS_RING_ON_ACCENT, FOCUS_RING_ON_DARK } from "@/lib/a11y";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-primary px-5 py-16 sm:px-8 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-white/70 sm:text-sm">
          {SITE.nameEn}
        </p>
        <h1 className="font-mincho text-[1.375rem] font-semibold leading-snug tracking-wide text-white sm:text-4xl sm:leading-tight lg:text-6xl">
          ITは、使いこなせた日から
          <br />
          <span className="text-accent">資産になる。</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
          導入して終わりにしない。売上アップ・業務効率化のためのITを、
          <br className="sm:hidden" />
          使いこなせるまで一緒に走ります。
        </p>
        <p className="mt-4 w-full text-center text-xs tracking-wide text-white/50">
          拠点：{SITE.bases.join("・")}｜{SITE.areaNote}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
          <a
            href={SITE.lineUrl}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold leading-snug text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg ${FOCUS_RING_ON_ACCENT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            LINEで気軽に相談する
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-1.5 text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white ${FOCUS_RING_ON_DARK}`}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            メールで問い合わせる
          </Link>
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
