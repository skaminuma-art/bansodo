import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING_ON_ACCENT } from "@/lib/a11y";

export default function HeroSalonBanner() {
  return (
    <div className="mb-8 w-full max-w-full rounded-sm border border-accent/30 bg-accent/15 px-4 py-3 sm:mb-10">
      <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-accent md:text-base">
            🔥 美容室・サロンオーナー様へ
          </p>
          <p className="mt-1 text-sm leading-relaxed text-white/90 md:text-base">
            先着3店舗様限定・リピーター獲得パッケージ受付中
          </p>
        </div>
        <Link
          href="/salon-package"
          className={`inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-sm bg-accent px-4 py-2.5 text-sm font-bold text-primary transition-opacity hover:opacity-90 md:w-auto ${FOCUS_RING_ON_ACCENT}`}
        >
          詳しく見る
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
