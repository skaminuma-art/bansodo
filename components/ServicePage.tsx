import { Check } from "lucide-react";
import type { ServiceData } from "@/lib/services";
import { STEPS } from "@/lib/site";
import Accordion from "@/components/Accordion";
import CTABanner from "@/components/CTABanner";
import LinePricing from "@/components/LinePricing";

type ServicePageProps = {
  service: ServiceData;
  showLinePricing?: boolean;
};

export default function ServicePage({
  service,
  showLinePricing = false,
}: ServicePageProps) {
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-primary px-5 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-hemp-leaf opacity-[0.05]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>
          <h1 className="font-mincho text-2xl font-semibold leading-relaxed text-white sm:text-4xl">
            {service.name}
          </h1>
          <p className="mt-6 text-sm leading-8 text-white/80 sm:text-lg">
            {service.catchcopy}
          </p>
        </div>
      </section>

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            このサービスでできること
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-premium rounded-xl p-6"
                >
                  <FeatureIcon
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-mincho text-lg font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-custom/80">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            料金の目安
          </h2>
          <p className="mt-4 text-center text-sm text-text-custom/70">
            規模や内容により変動します。まずはお気軽にご相談ください。
          </p>
          <div className="mt-8 rounded-sm border border-primary/10 bg-bg-custom px-6 py-8 text-center sm:px-10">
            <p className="font-mincho text-xl font-semibold break-keep text-primary sm:text-2xl">
              {service.pricingNote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            こんな方におすすめ
          </h2>
          <ul className="mt-10 space-y-4">
            {service.recommended.map((item) => (
              <li
                key={item}
                className="flex w-full items-start gap-3 rounded-sm border border-primary/10 bg-white px-4 py-4 sm:px-5"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="min-w-0 flex-1 whitespace-normal break-words text-base leading-7 text-text-custom">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            導入の流れ
          </h2>
          <div className="relative mt-12">
            <div
              className="absolute left-6 top-0 hidden h-full w-px bg-primary/20 sm:block"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.step} className="flex gap-5 sm:gap-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white font-mincho text-lg font-semibold text-primary">
                    {step.step}
                  </div>
                  <div className="min-w-0 flex-1 rounded-sm border border-primary/10 bg-bg-custom px-5 py-5 sm:px-6">
                    <p className="text-xs font-medium tracking-widest text-accent">
                      STEP{step.step}
                    </p>
                    <h3 className="mt-1 break-keep font-mincho text-lg font-semibold text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 break-keep text-sm leading-7 text-text-custom/80">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            他社との違い
          </h2>
          <p className="mt-4 text-center text-sm text-text-custom/70">
            伴走堂が選ばれる理由
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-primary/10 bg-white p-6"
              >
                <h3 className="font-mincho text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-text-custom/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.tools && service.tools.length > 0 && (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
              対応ツール・サービス
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-sm border border-primary/10 bg-bg-custom px-4 py-2 text-sm font-medium text-primary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {showLinePricing && <LinePricing />}

      <section className="bg-bg-custom px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-mincho text-2xl font-semibold text-primary sm:text-3xl">
            よくある質問
          </h2>
          <div className="mt-10">
            <Accordion items={service.faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
