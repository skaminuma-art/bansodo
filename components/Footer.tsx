import Link from "next/link";
import { NotebookPen, X } from "lucide-react";
import { FOCUS_RING_ON_DARK } from "@/lib/a11y";
import { SITE, SERVICES_NAV } from "@/lib/site";

const footerLinkClass = `transition-colors hover:text-white rounded-sm ${FOCUS_RING_ON_DARK}`;

export default function Footer() {
  return (
    <footer className="bg-primary px-5 py-12 text-white/70 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center sm:grid sm:grid-cols-2 sm:items-start sm:text-left lg:grid-cols-3">
        <div className="flex w-full flex-col items-center sm:items-start">
          <p className="font-mincho text-xl font-semibold text-white">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm">{SITE.nameEn}</p>
          <p className="mt-4 text-sm leading-7">{SITE.catchcopy}</p>
          <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
            <a
              href={SITE.xUrl}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 ${FOCUS_RING_ON_DARK}`}
              aria-label="X（旧Twitter）"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.noteUrl}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 ${FOCUS_RING_ON_DARK}`}
              aria-label="Note"
            >
              <NotebookPen className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-4 text-sm font-medium text-white">サービス</p>
          <ul className="space-y-2">
            {SERVICES_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm ${footerLinkClass}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full">
          <p className="mb-4 text-sm font-medium text-white">お問い合わせ</p>
          <ul className="space-y-2 text-sm">
            <li>代表：{SITE.representative}</li>
            <li>
              <a href={`mailto:${SITE.email}`} className={footerLinkClass}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className={footerLinkClass}>
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs sm:flex-row">
        <p>© 2026 伴走堂 | 代表 {SITE.representative}</p>
        <Link
          href="/privacy"
          className="text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
        >
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
}
