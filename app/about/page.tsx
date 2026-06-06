import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "私たちについて | 伴走堂",
  description: "伴走堂代表・上沼将太朗のプロフィールと経歴をご紹介します。",
};

const qualifications = [
  "Salesforce認定アドミニストレーター",
  "Salesforce認定Platform App Builder",
  "Salesforce認定Sales Cloud Consultant",
];

export default function AboutPage() {
  return (
    <>
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
              src="/images/representative.jpg"
              alt={`${SITE.representative}の顔写真`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 256px, 288px"
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
                営業職として複数の企業で法人営業を経験後、
                Salesforceの導入・活用支援に携わる。
              </p>
              <p>
                現場で「導入したが使われていない」システムを
                何度も目の当たりにした経験から、
                &ldquo;定着するまで伴走する&rdquo;をコンセプトに伴走堂を創業。
              </p>
              <p>
                Salesforce公認資格 保有。
                「難しいことを、わかりやすく。入れて終わりにしない。」
                をモットーに、現場に定着するIT支援を提供している。
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
