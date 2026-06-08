import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING } from "@/lib/a11y";
import { services } from "@/lib/services";

const GROUP_A = [
  { key: "line", href: "/services/line" },
  { key: "website", href: "/services/website" },
  { key: "meo", href: "/services/meo" },
  { key: "sns", href: "/services/sns" },
];

const GROUP_B = [
  { key: "crm", href: "/services/crm" },
  { key: "ai", href: "/services/ai" },
  { key: "recruitment", href: "/services/recruitment" },
  { key: "support", href: "/services/support" },
];

const CATEGORIES = [
  { title: "集客・売上アップ", items: GROUP_A },
  { title: "業務効率化・定着支援", items: GROUP_B },
] as const;

export default function ServiceCards() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-mincho text-2xl font-semibold leading-relaxed text-primary sm:text-3xl">
          サービス一覧
        </h2>
        <p className="mt-4 text-center text-sm leading-relaxed text-text-custom/70">
          小さく始めて、段階的に育てる。伴走型のIT支援
        </p>
        <div className="mt-8 space-y-10 sm:mt-10">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <p className="text-xs font-medium tracking-widest text-accent">
                {category.title}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                {category.items.map(({ key, href }) => {
                  const service = services[key];
                  const Icon = service.icon;
                  return (
                    <div
                      key={key}
                      className="flex flex-col rounded-sm border border-primary/10 bg-bg-custom p-5"
                    >
                      <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                      <h3 className="mt-4 font-mincho text-base font-semibold leading-relaxed text-primary">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-text-custom/70">
                        {service.shortDescription}
                      </p>
                      <Link
                        href={href}
                        className={`mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-primary transition-colors hover:text-accent ${FOCUS_RING}`}
                      >
                        詳しく見る
                        <ArrowRight
                          className="h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
