"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FOCUS_RING, FOCUS_RING_ON_ACCENT } from "@/lib/a11y";
import { SERVICES_NAV, SITE } from "@/lib/site";

const navLinkClass = `text-sm font-medium text-text-custom transition-colors hover:text-primary rounded-sm ${FOCUS_RING}`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeDropdown = () => setDropdownOpen(false);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  };

  const handleDropdownBlur = (e: React.FocusEvent) => {
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      closeDropdown();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg-custom/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className={`flex shrink-0 flex-col items-start rounded-sm ${FOCUS_RING}`}
        >
          <span className="font-mincho text-xl font-bold tracking-wider text-primary sm:text-2xl sm:tracking-widest">
            伴走堂
          </span>
          <span className="font-gothic text-[10px] tracking-[0.25em] text-primary/60 sm:text-xs sm:tracking-[0.3em]">
            BANSODO
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="メインナビゲーション"
        >
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onKeyDown={handleDropdownKeyDown}
            onBlur={handleDropdownBlur}
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-sm ${navLinkClass}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls={menuId}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              サービス一覧
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div
                id={menuId}
                role="menu"
                className="absolute left-0 top-full w-56 rounded-sm border border-primary/10 bg-white py-2 shadow-lg"
              >
                {SERVICES_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`block px-4 py-2.5 text-sm text-text-custom transition-colors hover:bg-bg-custom hover:text-primary ${FOCUS_RING}`}
                    onClick={closeDropdown}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className={navLinkClass}>
            私たちについて
          </Link>
          <Link href="/contact" className={navLinkClass}>
            お問い合わせ
          </Link>
          <a
            href={SITE.lineUrl}
            className={`rounded-sm bg-accent px-5 py-2.5 text-sm font-bold text-primary transition-opacity hover:opacity-90 ${FOCUS_RING_ON_ACCENT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            無料相談する
          </a>
        </nav>

        <button
          type="button"
          className={`shrink-0 rounded-sm text-primary lg:hidden ${FOCUS_RING}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-primary/10 bg-bg-custom px-4 py-5 sm:px-5 lg:hidden"
          aria-label="モバイルメニュー"
        >
          <p className="mb-3 text-xs font-medium tracking-widest text-primary/70">
            サービス一覧
          </p>
          <ul className="mb-5 space-y-1 border-b border-primary/10 pb-5">
            {SERVICES_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-sm py-2.5 text-sm leading-relaxed text-text-custom ${FOCUS_RING}`}
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
                className={`block rounded-sm py-2.5 text-sm font-medium text-text-custom ${FOCUS_RING}`}
                onClick={() => setMobileOpen(false)}
              >
                私たちについて
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block rounded-sm py-2.5 text-sm font-medium text-text-custom ${FOCUS_RING}`}
                onClick={() => setMobileOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
          <a
            href={SITE.lineUrl}
            className={`mt-5 block w-full rounded-sm bg-accent py-3.5 text-center text-sm font-bold leading-snug text-primary ${FOCUS_RING_ON_ACCENT}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            無料相談する
          </a>
        </nav>
      )}
    </header>
  );
}
