"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Container } from "./Container";
import { Button } from "../ui/Button";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const lastScrollY = useRef(0);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceItems = t.header.serviceItems;
  const navItems = t.header.navItems;

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Always show header when near the top
    if (currentY <= 24) {
      setIsScrolled(false);
      setIsHidden(false);
      lastScrollY.current = currentY;
      return;
    }

    setIsScrolled(true);

    const delta = currentY - lastScrollY.current;

    if (delta > 5) {
      // Scrolling down — hide
      setIsHidden(true);
    } else if (delta < -5) {
      // Scrolling up — show
      setIsHidden(false);
    }

    // Show header when scrolling stops
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      setIsHidden(false);
    }, 400);

    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        isScrolled ? "bg-bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-bg-white/80" : "bg-transparent",
        isHidden && !isMobileOpen ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container width="wide">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-brand-orange">
            Spring FES
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              className={cn(
                "text-sm transition-colors hover:text-brand-blue",
                pathname === "/" ? "font-semibold text-brand-blue" : "font-medium text-text-heading",
              )}
              href="/"
            >
              {navItems[0]?.label}
            </Link>
            <div
              className="group relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm transition-colors hover:text-brand-blue",
                  pathname.startsWith("/services") ? "font-semibold text-brand-blue" : "font-medium text-text-heading",
                )}
                type="button"
              >
                {t.header.services}
                <span className="text-xs">▾</span>
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-xl border border-border-light bg-bg-white/95 py-2 shadow-lg backdrop-blur-sm transition-all duration-200",
                  isServiceOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                )}
              >
                {serviceItems.map((item) => {
                  const serviceHref = `/services/${item.slug}`;
                  const isActiveService = pathname === serviceHref;

                  return (
                    <Link
                      key={item.slug}
                      href={serviceHref}
                      className={cn(
                        "block px-5 py-2 text-sm transition-colors hover:bg-bg-light hover:text-brand-blue",
                        isActiveService ? "font-semibold text-brand-blue" : "text-text-body",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-brand-blue",
                  pathname === item.href ? "font-semibold text-brand-blue" : "font-medium text-text-heading",
                )}
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
          "fixed inset-0 z-50 bg-bg-white/98 backdrop-blur-sm transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-y-0" : "-translate-y-full pointer-events-none",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <span className="text-2xl font-bold tracking-tight text-brand-orange">Spring FES</span>
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
              className={cn(
                "block rounded-xl bg-bg-light px-4 py-3 text-base",
                pathname === "/" ? "font-semibold text-brand-blue" : "font-medium text-text-heading",
              )}
              onClick={() => setIsMobileOpen(false)}
            >
              {navItems[0]?.label}
            </Link>

            <div className="rounded-xl border border-border-light bg-bg-white p-4">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">{t.header.services}</p>
              <div className="space-y-1">
                {serviceItems.map((item) => {
                  const serviceHref = `/services/${item.slug}`;
                  const isActiveService = pathname === serviceHref;

                  return (
                    <Link
                      key={item.slug}
                      href={serviceHref}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-bg-light hover:text-brand-blue",
                        isActiveService ? "font-semibold text-brand-blue" : "text-text-body",
                      )}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-xl bg-bg-light px-4 py-3 text-base",
                  pathname === item.href ? "font-semibold text-brand-blue" : "font-medium text-text-heading",
                )}
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
