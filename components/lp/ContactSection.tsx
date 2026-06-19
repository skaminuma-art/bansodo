import { Mail, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FOCUS_RING, FOCUS_RING_ON_ACCENT } from "@/lib/a11y";
import { SITE } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-x-hidden bg-white px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="Contact"
          title="お問い合わせ"
          description="CRM導入・定着支援のご相談は、お気軽にどうぞ"
          align="center"
        />

        <div className="card-premium mt-10 rounded-2xl p-6 text-center sm:mt-12 sm:p-10">
          <p className="font-mincho text-lg font-semibold leading-relaxed text-primary sm:text-xl">
            まずは無料相談から。
            <br className="sm:hidden" />
            オンラインで全国対応しています。
          </p>

          <a
            href={SITE.lineUrl}
            className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-8 py-4 text-base font-bold leading-snug text-primary shadow-[0_6px_24px_rgba(46,204,138,0.28)] transition-all hover:opacity-90 sm:mt-10 sm:w-auto sm:px-12 sm:py-5 ${FOCUS_RING_ON_ACCENT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
            LINEで気軽に相談する
          </a>

          <div className="mt-8 space-y-1 border-t border-primary/8 pt-8">
            <a
              href={`mailto:${SITE.email}`}
              className={`flex min-h-[48px] items-center justify-center gap-3 rounded-lg text-base text-text-custom transition-colors hover:bg-bg-custom hover:text-primary ${FOCUS_RING}`}
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className={`flex min-h-[48px] items-center justify-center gap-3 rounded-lg text-base text-text-custom transition-colors hover:bg-bg-custom hover:text-primary ${FOCUS_RING}`}
            >
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
