"use client";

import Link from "next/link";

import { useLanguage } from "@/lib/i18n";

import { Container } from "./Container";

const socialLinks = ["WeChat", "LinkedIn", "Instagram", "Facebook"];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/15 bg-brand-navy py-14 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-brand-orange">Spring FES</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.quickNav}</p>
            <div className="mt-4 space-y-2">
              {t.footer.quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-300 transition-colors hover:text-brand-cyan"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.contact}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
              <p>{t.footer.address}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">{t.footer.social}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {socialLinks.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200/40 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/20 pt-6 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Spring FES. All rights reserved. {t.footer.icp}
          </p>
        </div>
      </Container>
    </footer>
  );
}
