import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING_ON_ACCENT } from "@/lib/a11y";

export default function SalonPackageBanner() {
  return (
    <section className="w-full bg-primary px-4 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="text-xs font-medium tracking-[0.15em] text-accent">
          美容室・サロンオーナー様へ
        </p>
        <h2 className="mt-2 font-mincho text-lg font-bold leading-relaxed text-white sm:text-xl">
          先着3店舗様限定・リピーター獲得パッケージ受付中
        </h2>
        <Link
          href="/salon-package"
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold tracking-wide text-primary transition-opacity hover:opacity-90 sm:w-auto ${FOCUS_RING_ON_ACCENT}`}
        >
          サロン向けパッケージを見る
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
