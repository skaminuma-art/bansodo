import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RECOLOR_CASE } from "@/lib/cases";
import { FOCUS_RING } from "@/lib/a11y";

export default function Cases() {
  const item = RECOLOR_CASE;

  return (
    <section id="cases" className="overflow-x-hidden bg-white px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <SectionHeading
          label="Case Study"
          title="支援事例"
          description="伴走堂が支援した店舗・企業の事例をご紹介します"
          align="center"
        />

        <article className="mt-10 overflow-hidden rounded-2xl border border-primary/10 bg-bg-custom shadow-[0_8px_40px_rgba(15,30,48,0.06)] sm:mt-14">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src={item.cover}
              alt={`${item.company} — 店舗・Webサイトイメージ`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                {item.industry}
              </span>
              <h3 className="mt-3 font-mincho text-2xl font-bold text-white sm:text-3xl">
                {item.company}
              </h3>
              <p className="mt-1 text-sm text-white/65">{item.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 p-1 sm:gap-1.5 sm:p-1.5">
            {item.gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 50vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                <p className="absolute bottom-2 left-2 text-[11px] font-medium text-white/90">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-primary/10 p-5 sm:p-8">
            <ul className="flex flex-wrap gap-2">
              {item.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-primary/12 bg-white px-3 py-1 text-xs font-medium text-primary"
                >
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {[
                { label: "課題", text: item.challenge, accent: false },
                { label: "支援内容", text: item.solution, accent: false },
                { label: "成果", text: item.result, accent: true },
              ].map((block) => (
                <div key={block.label}>
                  <p
                    className={`text-[11px] font-bold tracking-[0.14em] uppercase ${
                      block.accent ? "text-accent" : "text-primary/50"
                    }`}
                  >
                    {block.label}
                  </p>
                  <p className="mt-2 break-words text-sm leading-7 text-text-custom/75">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto ${FOCUS_RING}`}
              >
                サイトを見る
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1 text-sm font-bold text-accent transition-all hover:gap-2 sm:justify-start ${FOCUS_RING}`}
              >
                re-color.info を見る
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
