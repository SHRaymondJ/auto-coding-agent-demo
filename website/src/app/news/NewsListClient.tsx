"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { newsArticles, type NewsArticle, type NewsCategory } from "@/lib/mock-data";

type NewsTab = "全部" | NewsCategory;

const tabs: NewsTab[] = ["全部", "行业动态", "公司新闻", "干货分享"];

const cardGradients = [
  "from-brand-blue/20 via-brand-cyan/10 to-brand-navy/20",
  "from-brand-orange/20 via-brand-blue/10 to-brand-cyan/20",
  "from-brand-navy/25 via-brand-blue/10 to-brand-orange/20",
  "from-brand-cyan/25 via-brand-blue/10 to-brand-navy/20",
];

function getFilteredArticles(activeTab: NewsTab): NewsArticle[] {
  if (activeTab === "全部") {
    return newsArticles;
  }

  return newsArticles.filter((article) => article.category === activeTab);
}

export function NewsListClient() {
  const [activeTab, setActiveTab] = useState<NewsTab>("全部");

  const filteredArticles = useMemo(() => getFilteredArticles(activeTab), [activeTab]);

  return (
    <>
      <Section className="relative overflow-hidden pt-36 pb-16 md:pt-40" background="light">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_16%,_rgba(0,123,255,0.14),transparent_40%),radial-gradient(circle_at_88%_84%,_rgba(34,211,238,0.16),transparent_42%)]" />
        <Container className="relative">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Insights
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-bold leading-tight text-text-heading sm:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            品牌洞察
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-base text-text-body sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            行业动态与干货分享
          </motion.p>
        </Container>
      </Section>

      <Section className="pt-8 md:pt-12" background="white">
        <Container>
          <motion.div
            className="mb-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "border-brand-blue bg-brand-blue text-text-white"
                    : "border-border-light bg-bg-white text-text-body hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                className="group overflow-hidden rounded-3xl border border-border-light bg-bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.28) }}
              >
                <div
                  className={`h-44 w-full bg-gradient-to-br ${cardGradients[index % cardGradients.length]} transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {article.category}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-text-heading">
                    <Link href={`/news/${article.slug}`} className="transition-colors hover:text-brand-blue">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-body [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {article.excerpt}
                  </p>
                  <p className="mt-5 text-sm font-medium text-text-muted">{article.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
