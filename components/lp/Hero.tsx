import Link from "next/link";
import NextImage from "next/image";
import { CheckCircle2, HeartHandshake, MapPin, MessageCircle, Users } from "lucide-react";
import CrmFlowVisual from "@/components/ui/CrmFlowVisual";
import { FOCUS_RING_ON_ACCENT, FOCUS_RING_ON_DARK } from "@/lib/a11y";
import { IMAGES, SITE } from "@/lib/site";

function TrustItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-3.5 py-3 backdrop-blur-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/12 ring-1 ring-accent/20">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-medium tracking-[0.12em] text-white/40">{label}</div>
        <div className="mt-0.5 break-words text-[13px] font-medium leading-snug text-white/85">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary sm:min-h-screen">
      <div className="bg-mesh-hero pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-hemp-leaf opacity-[0.04]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl px-4 pt-24 pb-28 sm:px-6 sm:pt-32 sm:pb-24 md:px-12 lg:px-16">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-center lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.08em] text-accent sm:text-xs">
                中小企業のCRM伴走支援
              </span>
            </div>

            <h1 className="font-mincho text-[1.75rem] leading-[1.45] font-black tracking-wide text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.5]">
              CRMは、
              <span className="text-accent">定着した日</span>
              から
              <br />
              資産になる。
            </h1>

            {/* スマホ：代表写真 */}
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/15 sm:mt-8 lg:hidden">
              <NextImage
                src={IMAGES.representative}
                alt={`${SITE.representative} — 伴走堂代表`}
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <p className="absolute bottom-4 left-4 font-mincho text-sm font-bold text-white">
                {SITE.representative}
                <span className="mt-0.5 block text-xs font-normal text-white/70">
                  伴走堂 代表
                </span>
              </p>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-white/55 sm:mt-7 sm:text-base sm:leading-8">
              導入して終わりにしない。
              現場が使いこなせるまで、
              選定から定着支援まで一緒に走ります。
            </p>

            <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-accent px-8 py-4 text-sm font-bold tracking-wide text-primary shadow-[0_8px_32px_rgba(46,204,138,0.35)] transition-all hover:brightness-105 sm:w-auto ${FOCUS_RING_ON_ACCENT}`}
              >
                <MessageCircle className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                無料相談する
              </a>
              <Link
                href="#features"
                className={`flex items-center justify-center gap-2 py-2 text-sm text-white/50 transition-colors hover:text-white/80 sm:justify-start ${FOCUS_RING_ON_DARK}`}
              >
                選ばれる理由を見る
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3">
              <TrustItem
                icon={<HeartHandshake className="h-3.5 w-3.5 text-accent" strokeWidth={2} />}
                label="支援スタイル"
                value="導入から定着まで伴走"
              />
              <TrustItem
                icon={<Users className="h-3.5 w-3.5 text-accent" strokeWidth={2} />}
                label="実績"
                value="300+ 社長ヒアリング"
              />
              <TrustItem
                icon={<MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />}
                label="拠点"
                value={
                  <>
                    <span className="sm:hidden">長野・東京｜全国</span>
                    <span className="hidden sm:inline">長野・東京｜全国オンライン</span>
                  </>
                }
              />
              <TrustItem
                icon={<CheckCircle2 className="h-3.5 w-3.5 text-accent" strokeWidth={2} />}
                label="初回相談"
                value="完全無料"
              />
            </div>
          </div>

          {/* PC：代表写真 + ダッシュボード */}
          <div className="hidden space-y-4 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <NextImage
                src={IMAGES.representative}
                alt={`${SITE.representative} — 伴走堂代表`}
                fill
                className="object-cover object-top"
                sizes="340px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-mincho text-lg font-bold text-white">{SITE.representative}</p>
                <p className="mt-1 text-sm text-white/65">伴走堂 代表 / CRM伴走コンサルタント</p>
              </div>
            </div>
            <CrmFlowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
