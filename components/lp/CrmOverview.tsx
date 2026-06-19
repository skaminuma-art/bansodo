import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FOCUS_RING } from "@/lib/a11y";
import { CRM_TOOLS } from "@/lib/site";
import { services } from "@/lib/services";

const crm = services.crm;

export default function CrmOverview() {
  return (
    <section id="features" className="overflow-x-hidden bg-bg-custom py-14 sm:py-28">
      <div className="mx-auto w-full min-w-0 max-w-5xl px-4 sm:px-8">
        <SectionHeading
          label="CRM Service"
          title={
            <>
              入れて終わりにしない、
              <br className="sm:hidden" />
              CRM伴走支援。
            </>
          }
          description={crm.catchcopy}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {crm.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card-premium group relative flex min-w-0 flex-col overflow-hidden rounded-xl p-6"
              >
                <span className="absolute right-4 top-4 font-mincho text-3xl font-black text-primary/[0.04] transition-colors group-hover:text-accent/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/15">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="font-mincho text-base font-bold leading-snug text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-[1.85] text-text-custom/65">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="card-premium mt-10 rounded-2xl p-5 sm:mt-14 sm:p-8">
          <h3 className="font-mincho text-lg font-semibold text-primary sm:text-xl">
            伴走堂が選ばれる理由
          </h3>
          <ul className="mt-6 divide-y divide-primary/8">
            {crm.differentiators.map((item) => (
              <li key={item.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-primary">{item.title}</p>
                  <p className="mt-1 break-words text-sm leading-7 text-text-custom/65">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <span className="mr-1 w-full text-xs font-medium tracking-widest text-text-custom/45 sm:w-auto">
            対応ツール
          </span>
          {CRM_TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-primary/10 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-primary/8 bg-white p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="font-mincho text-base font-semibold text-primary sm:text-lg">
            {crm.pricingNote}
          </p>
          <Link
            href="/services/crm"
            className={`inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition-all hover:bg-primary/90 sm:w-auto ${FOCUS_RING}`}
          >
            サービス詳細を見る
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
