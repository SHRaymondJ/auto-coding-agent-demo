"use client";

import Link from "next/link";

import { useLanguage } from "@/lib/i18n";

import { Container } from "./Container";

const socialLinks = ["WeChat", "LinkedIn", "Instagram", "Facebook"];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-light bg-bg-light py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-brand-navy">Spring FES</p>
            <p className="mt-4 text-sm leading-relaxed text-text-body">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">{t.footer.quickNav}</p>
            <div className="mt-4 space-y-2">
              {t.footer.quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-text-body transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">{t.footer.contact}</p>
            <div className="mt-4 space-y-2 text-sm text-text-body">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
              <p>{t.footer.address}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-heading">{t.footer.social}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {socialLinks.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center rounded-lg border border-border-default bg-bg-white px-3 py-2 text-xs font-medium text-text-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border-light pt-6 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} Spring FES. All rights reserved. {t.footer.icp}
          </p>
        </div>
      </Container>
    </footer>
  );
}
