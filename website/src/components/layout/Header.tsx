"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Container } from "./Container";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const serviceItems = t.header.serviceItems;
  const navItems = t.header.navItems;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        isScrolled ? "bg-bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-bg-white/80" : "bg-transparent",
      )}
    >
      <Container width="wide">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-navy">
            Spring FES
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link className="text-sm font-medium text-text-heading transition-colors hover:text-brand-blue" href="/">
              {navItems[0]?.label}
            </Link>
            <div
              className="group relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-text-heading transition-colors hover:text-brand-blue"
                type="button"
              >
                {t.header.services}
                <span className="text-xs">▾</span>
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full mt-4 w-52 -translate-x-1/2 rounded-2xl border border-border-light bg-bg-white p-2 shadow-xl transition-all duration-200",
                  isServiceOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                )}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block rounded-xl px-3 py-2 text-sm text-text-body transition-colors hover:bg-bg-light hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                className="text-sm font-medium text-text-heading transition-colors hover:text-brand-blue"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="inline-flex rounded-full border border-border-default p-1 text-xs font-semibold">
              <button
                className={cn("rounded-full px-2 py-1", locale === "zh" ? "bg-brand-blue text-text-white" : "text-text-body")}
                type="button"
                onClick={() => setLocale("zh")}
              >
                CN
              </button>
              <button
                className={cn("rounded-full px-2 py-1", locale === "en" ? "bg-brand-blue text-text-white" : "text-text-body")}
                type="button"
                onClick={() => setLocale("en")}
              >
                EN
              </button>
            </div>
            <Button href="/contact" size="sm">
              {t.common.contactUs}
            </Button>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-heading lg:hidden"
            onClick={() => setIsMobileOpen((value) => !value)}
            type="button"
            aria-label={t.header.menuToggleAria}
          >
            <span className="text-xl">{isMobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg-white transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <span className="text-2xl font-bold tracking-tight text-brand-navy">Spring FES</span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default text-text-heading"
              onClick={() => setIsMobileOpen(false)}
              type="button"
              aria-label={t.header.menuCloseAria}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
          <div className="mt-6 space-y-3 pb-8">
            <Link
              href="/"
              className="block rounded-xl bg-bg-light px-4 py-3 text-base font-medium text-text-heading"
              onClick={() => setIsMobileOpen(false)}
            >
              {navItems[0]?.label}
            </Link>

            <div className="rounded-xl bg-bg-light p-4">
              <p className="mb-3 text-base font-medium text-text-heading">{t.header.services}</p>
              <div className="space-y-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-text-body transition-colors hover:bg-bg-gray hover:text-brand-blue"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl bg-bg-light px-4 py-3 text-base font-medium text-text-heading"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex rounded-full border border-border-default p-1 text-xs font-semibold">
                <button
                  className={cn("rounded-full px-2 py-1", locale === "zh" ? "bg-brand-blue text-text-white" : "text-text-body")}
                  type="button"
                  onClick={() => setLocale("zh")}
                >
                  CN
                </button>
                <button
                  className={cn("rounded-full px-2 py-1", locale === "en" ? "bg-brand-blue text-text-white" : "text-text-body")}
                  type="button"
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
              <Button href="/contact" size="sm" onClick={() => setIsMobileOpen(false)}>
                {t.common.contactUs}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
