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

const VARIANT_STYLES = {
  acquire: {
    badge: "border-accent/30 bg-accent/10 text-accent",
    dot: "bg-accent",
    iconWrap: "bg-accent/10",
    icon: "text-accent",
    accentLine: "bg-accent",
    linkText: "text-accent",
    cardHover: "hover:border-accent/35",
  },
  efficiency: {
    badge: "border-primary/20 bg-primary/[0.07] text-primary",
    dot: "bg-primary",
    iconWrap: "bg-primary/[0.07]",
    icon: "text-primary",
    accentLine: "bg-primary",
    linkText: "text-primary",
    cardHover: "hover:border-primary/25",
  },
} as const;

const CATEGORIES = [
  {
    title: "集客・売上アップ",
    labelEn: "Acquisition",
    items: GROUP_A,
    variant: "acquire" as const,
  },
  {
    title: "業務効率化・定着支援",
    labelEn: "Efficiency",
    items: GROUP_B,
    variant: "efficiency" as const,
  },
] as const;

export default function ServiceCards() {
  return (
    <section id="services" className="bg-bg-custom py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-7 bg-accent" />
            <span className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
              Services
            </span>
          </div>
          <h2 className="font-mincho text-[clamp(24px,4vw,36px)] leading-relaxed font-black tracking-wide text-primary">
            小さく始めて、段階的に育てる。
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#888]">
            伴走型のIT支援で、現場に定着するまで一緒に走ります。
          </p>
        </div>

        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const styles = VARIANT_STYLES[category.variant];

            return (
              <div key={category.title}>
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.06em] ${styles.badge}`}
                  >
                    <span
                      className={`inline-block h-[7px] w-[7px] shrink-0 rounded-full ${styles.dot}`}
                    />
                    {category.title}
                  </span>
                  <div className="h-px flex-1 bg-[#e5e2dd]" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {category.items.map(({ key, href }) => {
                    const service = services[key];
                    const Icon = service.icon;

                    return (
                      <Link
                        key={key}
                        href={href}
                        className={`group relative flex flex-col overflow-hidden rounded-xl border border-[#e8e5e0] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,30,48,0.10)] ${styles.cardHover} ${FOCUS_RING}`}
                      >
                        <span
                          className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${styles.accentLine}`}
                          aria-hidden="true"
                        />

                        <span
                          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconWrap}`}
                        >
                          <Icon
                            className={`h-5 w-5 ${styles.icon}`}
                            aria-hidden="true"
                          />
                        </span>

                        <h3 className="font-mincho text-sm leading-snug font-bold text-primary sm:text-base">
                          {service.name}
                        </h3>
                        <p className="mt-2 flex-1 text-xs leading-[1.8] text-[#888] sm:text-sm">
                          {service.shortDescription}
                        </p>

                        <span
                          className={`mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-[0.06em] transition-all duration-200 group-hover:gap-2 ${styles.linkText}`}
                        >
                          詳しく見る
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
