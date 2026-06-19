import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FOCUS_RING } from "@/lib/a11y";

const cases = [
  {
    industry: "ヘアカラー専門店",
    company: "Re:COLOR（リィカラー）",
    url: "https://re-color.info/",
    location: "長野県塩尻市・松本市（2店舗）",
    services: ["Webサイト制作", "自動予約導線", "MEO対策"],
    challenge:
      "2店舗を運営する中で、Web上の情報が分散。電話・Hot Pepper・LINEと予約チャネルがばらばらで、新規のお客様が店舗やメニューを見つけにくい状態だった。",
    solution:
      "オーガニックカラー専門店の世界観を伝えるWebサイトを新規制作。Hot Pepper Beauty・LINEからの予約導線を整理し、24時間受付できる自動予約の仕組みを構築。塩尻広丘店・松本梓川店それぞれのGoogleビジネスプロフィールを最適化し、MEO対策で地域検索からの来店導線を強化した。",
    result:
      "2店舗のコンセプト・メニュー・料金・アクセスを1つのサイトに集約。「塩尻 ヘアカラー」「松本 カラー専門店」など地域キーワードでの見つけやすさを改善。Hot Pepper予約・LINE相談・電話予約をサイト上でワンストップに整理し、初めての方でも迷わず予約できる導線を実現。",
  },
] as const;

export default function Cases() {
  return (
    <section id="cases" className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full min-w-0 max-w-4xl">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-7 bg-accent" />
            <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Case Study
            </span>
            <div className="h-px w-7 bg-accent" />
          </div>
          <h2 className="font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            支援事例
          </h2>
          <p className="mt-4 text-sm text-text-custom/60">
            伴走堂が支援した店舗・企業の事例をご紹介します
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {cases.map((item) => (
            <article
              key={item.company}
              className="overflow-hidden rounded-xl border border-primary/10 bg-bg-custom"
            >
              <div className="border-b border-primary/10 bg-primary px-6 py-5 sm:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {item.industry}
                    </span>
                    <h3 className="mt-3 font-mincho text-xl font-bold text-white sm:text-2xl">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{item.location}</p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 ${FOCUS_RING}`}
                  >
                    サイトを見る
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <ul className="flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-medium text-primary"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 space-y-5 text-sm sm:text-base">
                  <div>
                    <dt className="font-medium text-primary">課題</dt>
                    <dd className="mt-1 leading-7 text-text-custom/80">
                      {item.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary">支援内容</dt>
                    <dd className="mt-1 leading-7 text-text-custom/80">
                      {item.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-accent">成果</dt>
                    <dd className="mt-1 leading-7 text-text-custom">
                      {item.result}
                    </dd>
                  </div>
                </dl>

                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent transition-all hover:gap-2 ${FOCUS_RING}`}
                >
                  re-color.info を見る
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
