import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING_ON_ACCENT } from "@/lib/a11y";

export default function SalonPackageBanner() {
  return (
    <section className="bg-primary px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.15em] text-accent">
            サロン・美容室オーナーの方へ
          </p>
          <h2 className="mt-2 font-mincho text-lg font-semibold leading-relaxed text-white sm:text-xl">
            リピーター獲得パッケージ、モニター3店舗限定受付中
          </h2>
        </div>
        <Link
          href="/salon-package"
          className={`inline-flex shrink-0 items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold tracking-wide text-primary transition-opacity hover:opacity-90 ${FOCUS_RING_ON_ACCENT}`}
        >
          詳しく見る
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
