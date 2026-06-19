import Link from "next/link";
import { Award, CheckCircle2, Globe, MapPin, MessageCircle } from "lucide-react";
import { FOCUS_RING_ON_ACCENT, FOCUS_RING_ON_DARK } from "@/lib/a11y";
import { SALESFORCE_QUALIFICATION_LABEL, SITE } from "@/lib/site";

function TrustIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10">
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      <div className="pointer-events-none absolute inset-0 bg-hemp-leaf opacity-[0.06]" />

      <div className="pointer-events-none absolute top-1/2 right-[-80px] hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,204,138,0.13)_0%,transparent_70%)] md:block" />
      <div className="pointer-events-none absolute top-1/2 right-[90px] hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-accent/[0.18] md:block" />
      <div className="pointer-events-none absolute top-1/2 right-[150px] hidden h-[240px] w-[240px] -translate-y-1/2 rounded-full border border-accent/[0.12] md:block" />

      <div className="pointer-events-none absolute top-0 bottom-0 left-11 hidden w-px bg-gradient-to-b from-transparent from-30% via-accent/35 via-70% to-transparent md:block" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-5xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:px-20">
        <div className="mb-7 flex min-w-0 items-center gap-3">
          <div className="h-px w-8 shrink-0 bg-accent" />
          <span className="min-w-0 text-[10px] font-medium tracking-[0.12em] text-accent uppercase sm:text-xs sm:tracking-[0.22em]">
            <span className="block sm:inline">CRM Implementation Partner</span>
            <span className="hidden sm:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className="block sm:inline">長野・東京・全国対応</span>
          </span>
        </div>

        <h1 className="mb-4 font-mincho text-2xl leading-snug font-black tracking-wide text-white sm:text-3xl md:text-4xl md:leading-[1.55] lg:text-5xl">
          CRMは、
          <em className="text-accent not-italic">定着した日</em>
          から
          <br className="hidden sm:block" />
          資産になる。
        </h1>

        <p className="mb-11 max-w-lg font-gothic text-sm leading-7 tracking-wide text-white/60 sm:leading-8">
          導入して終わりにしない。
          <br className="hidden sm:block" />
          Salesforce・HubSpot・kintone——
          <br className="hidden sm:block" />
          現場が使いこなせるまで、一緒に走ります。
        </p>

        <div className="mb-14 flex w-full min-w-0 flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-bold tracking-[0.06em] text-primary shadow-[0_6px_24px_rgba(46,204,138,0.30)] transition-opacity hover:opacity-90 sm:w-auto sm:text-[15px] ${FOCUS_RING_ON_ACCENT}`}
          >
            <MessageCircle className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
            CRM導入の無料相談
          </a>
          <Link
            href="#features"
            className={`flex items-center gap-2 text-[13px] tracking-[0.05em] text-white/55 transition-colors hover:text-white/80 ${FOCUS_RING_ON_DARK}`}
          >
            選ばれる理由を見る →
          </Link>
        </div>

        <div className="flex w-full min-w-0 flex-wrap items-center gap-y-4">
          <div className="flex min-w-0 items-start gap-2.5 overflow-hidden">
            <TrustIcon>
              <Award className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            </TrustIcon>
            <div className="min-w-0">
              <div className="mb-0.5 text-[10px] tracking-[0.1em] text-white/40">資格</div>
              <div className="min-w-0 break-keep text-[13px] font-medium text-white/[0.82]">
                Salesforce公認資格 {SALESFORCE_QUALIFICATION_LABEL}
              </div>
            </div>
          </div>

          <div className="mx-6 hidden h-[30px] w-px bg-white/12 sm:block" />

          <div className="flex min-w-0 items-start gap-2.5 overflow-hidden">
            <TrustIcon>
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            </TrustIcon>
            <div className="min-w-0">
              <div className="mb-0.5 text-[10px] tracking-[0.1em] text-white/40">拠点</div>
              <div className="min-w-0 break-keep text-[13px] font-medium text-white/[0.82]">
                <span className="block sm:hidden">長野県松本市・東京</span>
                <span className="hidden sm:block">
                  長野県松本市・東京拠点｜全国オンライン対応
                </span>
              </div>
            </div>
          </div>

          <div className="mx-6 hidden h-[30px] w-px bg-white/12 sm:block" />

          <div className="flex items-center gap-2.5">
            <TrustIcon>
              <Globe className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            </TrustIcon>
            <div>
              <div className="mb-0.5 text-[10px] tracking-[0.1em] text-white/40">実績</div>
              <div className="text-[13px] font-medium text-white/[0.82]">300+ 社長ヒアリング</div>
            </div>
          </div>

          <div className="mx-6 hidden h-[30px] w-px bg-white/12 sm:block" />

          <div className="flex items-center gap-2.5">
            <TrustIcon>
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" strokeWidth={2} aria-hidden="true" />
            </TrustIcon>
            <div>
              <div className="mb-0.5 text-[10px] tracking-[0.1em] text-white/40">初回相談</div>
              <div className="text-[13px] font-medium text-white/[0.82]">完全無料</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.22em] text-white/25 uppercase">Scroll</span>
        <div className="h-[38px] w-px animate-hero-pulse bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  );
}
