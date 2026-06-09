import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { IMAGES, SITE } from "@/lib/site";
import { SITE_URL, aboutMetadata, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = aboutMetadata;

const qualifications = [
  "Salesforce認定アドミニストレーター",
  "Salesforce認定Platform App Builder",
  "Salesforce認定Sales Cloud Consultant",
];

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
      <section className="bg-primary px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-mincho text-3xl font-semibold text-white sm:text-4xl">
            私たちについて
          </h1>
          <p className="mt-6 text-base leading-8 text-white/75">
            伴走堂の代表・上沼将太朗のプロフィール
          </p>
        </div>
      </section>

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:flex-row sm:gap-14">
          <div className="relative mx-auto h-80 w-64 shrink-0 overflow-hidden rounded-sm border border-primary/10 sm:mx-0 sm:h-[28rem] sm:w-72">
            <Image
              src={IMAGES.representative}
              alt={`${SITE.representative}の顔写真`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 256px, 288px"
              priority
            />
          </div>

          <div className="flex-1">
            <p className="text-sm text-text-custom/60">かみぬま しょうたろう</p>
            <h2 className="mt-1 font-mincho text-3xl font-semibold text-primary">
              {SITE.representative}
            </h2>
            <p className="mt-2 text-sm font-medium text-accent">
              伴走堂 代表 / ITコンサルタント
            </p>

            <div className="mt-8 space-y-4 text-base leading-8 text-text-custom">
              <p>
                大学卒業後、法人営業・M&A仲介を経て、
                <span className="font-bold text-accent">300名以上</span>
                の中小企業社長と直接向き合ってきた。
              </p>
              <p>
                転機は、Salesforce導入支援の現場。
                社長が費用をかけて入れたシステムが、誰にも使われていなかった。
              </p>
              <p>その原体験が、伴走堂の原点。</p>
              <p className="font-bold text-accent">
                使いこなせるまで、絶対に離れない。
              </p>
              <p>
                Salesforce公認資格 保有。
                <br />
                「難しいことを、わかりやすく。入れて終わりにしない。」
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-mincho text-lg font-semibold text-primary">
                保有資格
              </h3>
              <ul className="mt-4 space-y-2">
                {qualifications.map((qual) => (
                  <li
                    key={qual}
                    className="flex items-start gap-2 text-sm leading-7 text-text-custom"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {qual}
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
