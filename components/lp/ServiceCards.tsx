import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOCUS_RING } from "@/lib/a11y";
import { SERVICE_CARDS, services } from "@/lib/services";

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
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {SERVICE_CARDS.map(({ key, href }) => {
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
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
