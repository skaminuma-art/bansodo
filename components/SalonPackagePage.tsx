import Link from "next/link";
import { AlertCircle, Check, Mail, MessageCircle } from "lucide-react";
import { FOCUS_RING_ON_ACCENT, FOCUS_RING_ON_DARK } from "@/lib/a11y";
import {
  SALON_MONITOR_CONDITIONS,
  SALON_PLANS,
  SALON_PROBLEMS,
  SALON_SOLUTIONS,
  SALON_STEPS,
  SALON_TARGET_TAGS,
  formatYen,
} from "@/lib/salon-package";
import { SITE } from "@/lib/site";

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3">
      <div className="h-px w-7 bg-accent" />
      <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
        {label}
      </span>
      <div className="h-px w-7 bg-accent" />
    </div>
  );
}

export default function SalonPackagePage() {
  return (
    <>
      {/* ① ヒーロー */}
      <section className="relative overflow-hidden bg-primary px-4 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-hemp-leaf opacity-[0.06]" />
        <div className="relative z-10 mx-auto w-full min-w-0 max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Salon Package
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h1 className="font-mincho text-2xl leading-snug font-black tracking-wide text-white sm:text-3xl md:text-4xl md:leading-relaxed lg:text-5xl">
            サロンオーナー様限定　リピーター獲得パッケージ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
            ホームページ × 公式LINE × 自動化で、
            <br className="hidden sm:block" />
            美容室・サロンのリピーター獲得を仕組み化するスペシャルパッケージ
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SALON_TARGET_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs tracking-wide text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ② お悩み */}
      <section className="bg-bg-custom px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <h2 className="text-center font-mincho text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
            こんなお悩みはありませんか？
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SALON_PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="flex min-w-0 flex-col overflow-hidden rounded-sm border border-primary/10 bg-white p-6"
              >
                <AlertCircle
                  className="h-6 w-6 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-mincho text-lg font-semibold leading-snug text-primary">
                  {problem.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-text-custom/80">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ 解決策 */}
      <section className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <h2 className="text-center font-mincho text-xl font-semibold leading-relaxed text-primary sm:text-2xl md:text-3xl">
            伴走堂が作るのは、&ldquo;使われ続ける仕組み&rdquo;です。
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SALON_SOLUTIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="min-w-0 overflow-hidden rounded-sm border border-primary/10 bg-bg-custom p-6"
                >
                  <p className="text-xs font-medium tracking-widest text-accent">
                    ポイント{index + 1}
                  </p>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-mincho text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-custom/80">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ④ 料金プラン */}
      <section className="bg-bg-custom px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <SectionEyebrow label="Pricing" />
          <h2 className="text-center font-mincho text-xl font-semibold leading-relaxed text-primary sm:text-2xl md:text-3xl">
            オーナー様限定　料金プラン
          </h2>
          <p className="mt-4 text-center text-sm leading-relaxed text-text-custom/70">
            先着3店舗様限定・通常価格の半額モニター価格でご提供中
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 pt-4 md:grid-cols-3">
            {SALON_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex min-w-0 flex-col rounded-xl border bg-white p-6 sm:p-7 ${
                  plan.recommended
                    ? "overflow-visible border-accent shadow-[0_12px_36px_rgba(46,204,138,0.15)] lg:-translate-y-1"
                    : "overflow-hidden border-primary/10"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-wide text-primary">
                    おすすめ
                  </span>
                )}

                <p className="text-xs font-bold tracking-[0.2em] text-accent">
                  {plan.name}
                </p>
                <h3 className="mt-1 font-mincho text-xl font-semibold text-primary">
                  {plan.subtitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-custom/70">
                  {plan.tagline}
                </p>

                <div className="mt-6 border-t border-primary/10 pt-6">
                  <p className="text-xs text-text-custom/60">通常価格（税別）</p>
                  <p className="mt-1 font-mincho text-lg text-text-custom/50 line-through">
                    {formatYen(plan.regularPrice)}（税別）
                  </p>
                  <p className="mt-3 text-xs font-medium text-accent">
                    モニター価格（税別）
                  </p>
                  <p className="mt-1 font-mincho text-3xl font-bold text-primary">
                    {formatYen(plan.monitorPrice)}
                    <span className="ml-1 text-sm font-normal text-text-custom/60">
                      （税別）
                    </span>
                  </p>
                </div>

                <p className="mt-6 text-xs font-medium tracking-widest text-primary/70">
                  含まれる内容
                </p>
                <ul className="mt-3 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-text-custom"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-sm border border-primary/10 bg-bg-custom px-4 py-3">
                  <p className="text-xs text-text-custom/60">
                    お客様のランニングコスト目安
                  </p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {plan.runningCost}
                  </p>
                  <p className="mt-0.5 text-xs text-text-custom/60">
                    {plan.runningCostNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ モニター条件 */}
      <section className="bg-white px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            先着3店舗様限定　モニター条件
          </h2>
          <ul className="mt-10 space-y-4">
            {SALON_MONITOR_CONDITIONS.map((condition, index) => (
              <li
                key={condition}
                className="flex items-start gap-4 rounded-sm border border-primary/10 bg-bg-custom px-5 py-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mincho text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-7 text-text-custom">{condition}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ⑥ 導入の流れ */}
      <section className="bg-bg-custom px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <h2 className="text-center font-mincho text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
            導入の流れ
          </h2>
          <div className="relative mt-12">
            <div
              className="absolute left-6 top-0 hidden h-full w-px bg-primary/20 sm:block"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {SALON_STEPS.map((step) => (
                <div key={step.step} className="flex gap-5 sm:gap-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-mincho text-lg font-semibold text-primary">
                    {step.step}
                  </div>
                  <div className="min-w-0 flex-1 rounded-sm border border-primary/10 bg-white px-5 py-5 sm:px-6">
                    <p className="text-xs font-medium tracking-widest text-accent">
                      STEP {step.step}
                    </p>
                    <h3 className="mt-1 font-mincho text-lg font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-text-custom/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ CTA */}
      <section className="bg-primary px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-mincho text-xl font-semibold leading-relaxed text-white sm:text-2xl">
            まずは無料相談から。
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/75">
            費用・内容、なんでもお気軽にどうぞ。30分でOKです。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={SITE.lineUrl}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-bold leading-snug text-primary transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-4 sm:text-base ${FOCUS_RING_ON_ACCENT}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              LINEで気軽に相談する
            </a>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-1.5 text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white ${FOCUS_RING_ON_DARK}`}
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              メールで問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
