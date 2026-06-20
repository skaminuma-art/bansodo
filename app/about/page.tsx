import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { IMAGES, REPRESENTATIVE_STRENGTHS, SITE } from "@/lib/site";
import { SITE_URL, aboutMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.representative,
    jobTitle: SITE.title,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}${IMAGES.representative}`,
    url: `${SITE_URL}/about`,
  };

  return (
    <>
      <JsonLd data={[organizationJsonLd(), personJsonLd]} />
      <section className="relative overflow-hidden bg-primary px-5 py-16 sm:px-8 sm:py-24">
        <div className="bg-mesh-hero pointer-events-none absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-accent">About</p>
          <h1 className="mt-4 font-mincho text-3xl font-bold text-white sm:text-4xl">
            私たちについて
          </h1>
          <p className="mt-5 text-base leading-8 text-white/60">
            伴走堂代表・{SITE.representative}のプロフィール
          </p>
        </div>
      </section>

      <section className="section-surface px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col gap-12 sm:flex-row sm:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(15,30,48,0.12)] ring-1 ring-primary/10 sm:mx-0 sm:max-w-sm">
            <Image
              src={IMAGES.representative}
              alt={`${SITE.representative}の顔写真`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 320px, 384px"
              priority
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm text-text-custom/50">かみぬま しょうたろう</p>
            <h2 className="mt-1 font-mincho text-3xl font-bold text-primary">
              {SITE.representative}
            </h2>
            <p className="mt-2 text-sm font-medium text-accent">
              伴走堂 代表 / CRM伴走コンサルタント
            </p>

            <div className="mt-8 space-y-4 text-base leading-8 text-text-custom/85">
              <p>
                大学卒業後、法人営業・M&A仲介を経て、
                <span className="font-bold text-accent">300名以上</span>
                の中小企業社長と直接向き合ってきた。
              </p>
              <p>
                転機は、CRM導入支援の現場だった。
                社長が何十万もかけて入れたシステムが、半年後には誰も開いていなかった。
                原因はツールではなく、「現場に合わせた設計と、使えるまでの伴走」がなかったこと。
              </p>
              <p>その光景が、忘れられなかった。</p>
              <p className="font-mincho font-semibold text-accent">
                「売って終わりにしない。使いこなせるまで、一緒に走る。」
              </p>
              <p>
                それが、伴走堂をつくった理由です。
                難しいことを、わかりやすく。
                CRMを、現場の武器に。
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-mincho text-lg font-semibold text-primary">強み</h3>
              <ul className="mt-4 space-y-3">
                {REPRESENTATIVE_STRENGTHS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-text-custom/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
