import { Mail, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-mincho text-2xl font-semibold text-primary sm:text-3xl">
          お問い合わせ
        </h2>
        <p className="mt-4 text-sm text-text-custom/70">
          まずはお気軽にご相談ください
        </p>

        <a
          href={SITE.lineUrl}
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-accent px-10 py-5 text-lg font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-14 sm:py-6 sm:text-xl"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
          LINEで気軽に相談する
        </a>

        <div className="mt-10 space-y-4">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center justify-center gap-3 text-base text-text-custom transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center gap-3 text-base text-text-custom transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
