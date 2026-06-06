import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function CTABanner() {
  return (
    <section className="bg-primary px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mincho text-xl font-semibold leading-relaxed text-white sm:text-2xl">
          まずは無料相談から。
          <br className="sm:hidden" />
          費用・内容、なんでもお気軽にどうぞ。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.lineUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-8 py-4 text-base font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            LINEで相談する
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            メールで相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
