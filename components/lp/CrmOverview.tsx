import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING } from "@/lib/a11y";
import { CRM_TOOLS } from "@/lib/site";
import { services } from "@/lib/services";

const crm = services.crm;

export default function CrmOverview() {
  return (
    <section id="features" className="bg-bg-custom py-24 sm:py-28">
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4 sm:px-8">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-7 bg-accent" />
            <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              CRM Service
            </span>
          </div>
          <h2 className="font-mincho text-xl leading-relaxed font-black tracking-wide text-primary sm:text-2xl md:text-3xl lg:text-4xl">
            入れて終わりにしない、
            <br className="sm:hidden" />
            CRM伴走支援。
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-custom/60">
            {crm.catchcopy}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {crm.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex min-w-0 flex-col rounded-xl border border-primary/10 bg-white p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="font-mincho text-sm font-bold leading-snug text-primary sm:text-base">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-[1.8] text-text-custom/60 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-xl border border-primary/10 bg-white p-6 sm:p-8">
          <h3 className="font-mincho text-lg font-semibold text-primary">
            伴走堂が選ばれる理由
          </h3>
          <ul className="mt-6 space-y-4">
            {crm.differentiators.map((item) => (
              <li
                key={item.title}
                className="border-l-2 border-accent pl-4"
              >
                <p className="text-sm font-bold text-primary">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-text-custom/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium tracking-widest text-text-custom/50">
            対応ツール
          </span>
          {CRM_TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-medium text-primary"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-text-custom/60">{crm.pricingNote}</p>
          <Link
            href="/services/crm"
            className={`inline-flex items-center gap-1 text-sm font-bold tracking-[0.06em] text-accent transition-all hover:gap-2 ${FOCUS_RING}`}
          >
            サービス詳細を見る
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
