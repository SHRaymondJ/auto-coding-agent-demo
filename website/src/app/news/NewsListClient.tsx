"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage, type NewsCategory } from "@/lib/i18n";

type NewsTab = "all" | NewsCategory;

const cardGradients = [
  "from-brand-blue/20 via-brand-cyan/10 to-brand-navy/20",
  "from-brand-orange/20 via-brand-blue/10 to-brand-cyan/20",
  "from-brand-navy/25 via-brand-blue/10 to-brand-orange/20",
  "from-brand-cyan/25 via-brand-blue/10 to-brand-navy/20",
];

const categoryIcons: Record<NewsCategory, string> = {
  industry: "◈",
  company: "✷",
  insights: "◎",
};

export function NewsListClient() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<NewsTab>("all");

  const articles = t.data.newsArticles;

  const tabs: { key: NewsTab; label: string }[] = [
    { key: "all", label: t.news.tabs.all },
    { key: "industry", label: t.news.tabs.industry },
    { key: "company", label: t.news.tabs.company },
    { key: "insights", label: t.news.tabs.insights },
  ];

  const filteredArticles = useMemo(() => {
    if (activeTab === "all") return articles;
    return articles.filter((article) => article.category === activeTab);
  }, [activeTab, articles]);

  return (
    <>
      <Section className="relative overflow-hidden pt-32 pb-14 md:pt-38 md:pb-16" background="light">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,_rgba(0,123,255,0.14),transparent_40%),radial-gradient(circle_at_88%_84%,_rgba(34,211,238,0.16),transparent_42%)]" />
        <Container className="relative">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            {t.news.badge}
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-bold leading-tight text-text-heading sm:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {t.news.title}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-text-body sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {t.news.subtitle}
          </motion.p>
        </Container>
      </Section>

      <Section className="pt-8 pb-16 md:pt-12 md:pb-20" background="white">
        <Container>
          <motion.div
            className="mb-10 flex flex-wrap gap-3 md:mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "border-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue text-text-white shadow-[0_8px_24px_rgba(0,123,255,0.28)]"
                    : "border-border-light bg-bg-light text-text-body hover:border-brand-blue/40 hover:bg-brand-blue/5 hover:text-brand-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                className="group overflow-hidden rounded-3xl border border-border-light/90 bg-bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_20px_48px_rgba(0,51,102,0.18)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.28) }}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} transition-transform duration-500 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(255,255,255,0.48),transparent_42%),radial-gradient(circle_at_82%_88%,rgba(0,51,102,0.35),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_35%,rgba(0,51,102,0.18)_100%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/35 bg-white/12 text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                      <span className="text-2xl leading-none">{categoryIcons[article.category]}</span>
                      <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                        {article.category}
                      </span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm">
                    SPRING FES
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-brand-blue/20 bg-gradient-to-r from-brand-blue/12 to-brand-cyan/15 px-3 py-1 text-xs font-semibold capitalize tracking-wide text-brand-navy">
                    {article.category}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-text-heading">
                    <Link
                      href={`/news/${article.slug}`}
                      className="relative inline bg-gradient-to-r from-brand-navy to-brand-blue bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size,color] duration-300 hover:bg-[length:100%_2px] hover:text-brand-blue"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-body [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {article.excerpt}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 border-l-2 border-brand-blue/25 pl-3 text-sm font-medium text-text-muted">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                      </svg>
                    </span>
                    {article.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
