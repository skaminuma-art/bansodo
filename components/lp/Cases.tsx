import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import BrowserMockup from "@/components/ui/BrowserMockup";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <section id="cases" className="overflow-x-hidden bg-white px-4 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <SectionHeading
          label="Case Study"
          title="支援事例"
          description="伴走堂が支援した店舗・企業の事例をご紹介します"
          align="center"
        />

        <div className="mt-10 space-y-6 sm:mt-14">
          {cases.map((item) => (
            <article
              key={item.company}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-bg-custom shadow-[0_8px_40px_rgba(15,30,48,0.06)]"
            >
              <div className="grid lg:grid-cols-2">
                <div className="border-b border-primary/10 bg-primary p-5 sm:p-8 lg:border-b-0 lg:border-r">
                  <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {item.industry}
                  </span>
                  <h3 className="mt-4 break-words font-mincho text-xl font-bold text-white sm:text-2xl">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm text-white/55">{item.location}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-white/85"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90 sm:w-auto ${FOCUS_RING}`}
                  >
                    サイトを見る
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                <div className="flex items-center bg-[#f3f2ef] p-5 sm:p-8">
                  <BrowserMockup
                    domain="re-color.info"
                    title="Re:COLOR"
                    subtitle="オーガニックヘアカラー専門店"
                    accent="recolor"
                  />
                </div>
              </div>

              <div className="grid gap-5 border-t border-primary/10 p-5 sm:grid-cols-3 sm:gap-6 sm:p-8">
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

              <div className="border-t border-primary/8 px-5 py-4 sm:px-8">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-sm font-bold text-accent transition-all hover:gap-2 ${FOCUS_RING}`}
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
