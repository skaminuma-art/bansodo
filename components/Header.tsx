"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES_NAV, SITE } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg-custom/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex shrink-0 flex-col items-start">
          <span className="font-mincho text-xl font-bold tracking-wider text-primary sm:text-2xl sm:tracking-widest">
            {SITE.name}
          </span>
          <span className="font-gothic text-[10px] tracking-[0.25em] text-primary/60 sm:text-xs sm:tracking-[0.3em]">
            {SITE.nameEn}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-text-custom transition-colors hover:text-primary"
              aria-expanded={dropdownOpen}
            >
              サービス一覧
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full w-56 rounded-sm border border-primary/10 bg-white py-2 shadow-lg">
                {SERVICES_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-text-custom transition-colors hover:bg-bg-custom hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-text-custom transition-colors hover:text-primary"
          >
            私たちについて
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-text-custom transition-colors hover:text-primary"
          >
            お問い合わせ
          </Link>
          <a
            href={SITE.lineUrl}
            className="rounded-sm bg-accent px-5 py-2.5 text-sm font-bold text-primary transition-opacity hover:opacity-90"
          >
            無料相談する
          </a>
        </nav>

        <button
          type="button"
          className="shrink-0 text-primary lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-primary/10 bg-bg-custom px-4 py-5 sm:px-5 lg:hidden"
          aria-label="モバイルメニュー"
        >
          <p className="mb-3 text-xs font-medium tracking-widest text-primary/50">
            サービス一覧
          </p>
          <ul className="mb-5 space-y-1 border-b border-primary/10 pb-5">
            {SERVICES_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm leading-relaxed text-text-custom"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1">
            <li>
              <Link
                href="/about"
                className="block py-2.5 text-sm font-medium text-text-custom"
                onClick={() => setMobileOpen(false)}
              >
                私たちについて
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2.5 text-sm font-medium text-text-custom"
                onClick={() => setMobileOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
          <a
            href={SITE.lineUrl}
            className="mt-5 block w-full rounded-sm bg-accent py-3.5 text-center text-sm font-bold leading-snug text-primary"
            onClick={() => setMobileOpen(false)}
          >
            無料相談する
          </a>
        </nav>
      )}
    </header>
  );
}
