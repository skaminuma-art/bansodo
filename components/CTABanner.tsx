import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FOCUS_RING_ON_ACCENT, FOCUS_RING_ON_DARK } from "@/lib/a11y";
import { SITE } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="bg-primary px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mincho text-lg font-semibold leading-relaxed text-white sm:text-2xl">
          まずは無料相談から。
          <br className="sm:hidden" />
          費用・内容、なんでもお気軽にどうぞ。
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={SITE.lineUrl}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold leading-snug text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-4 sm:text-base ${FOCUS_RING_ON_ACCENT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            LINEで相談する
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-1.5 text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white ${FOCUS_RING_ON_DARK}`}
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
            メールで相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
