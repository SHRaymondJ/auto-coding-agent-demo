import Link from "next/link";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { getNewsArticles } from "@/lib/mock-data";
import { zh } from "@/lib/i18n/zh";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

function getDefaultArticles() {
  return getNewsArticles("zh");
}

export function generateStaticParams() {
  return getDefaultArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const articles = getDefaultArticles();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "文章未找到 - Spring FES",
    };
  }

  return {
    title: `${article.title} - Spring FES`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const allArticles = getDefaultArticles();
  const article = allArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <Layout>
      <Section className="relative overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16" background="light">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(0, 123, 255, 0.2), transparent 50%), radial-gradient(circle at 82% 10%, rgba(34, 211, 238, 0.16), transparent 48%), radial-gradient(circle at 50% 100%, rgba(0, 51, 102, 0.1), transparent 58%)",
          }}
        />
        <Container>
          <div className="relative z-10">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-navy"
            >
              <span className="inline-flex h-5 w-5 -translate-x-0.5 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue transition-transform duration-300 group-hover:-translate-x-1 group-hover:border-brand-navy/40 group-hover:text-brand-navy">
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M11.667 4.167 5.833 10l5.834 5.833" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {zh.news.backToList}
            </Link>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-brand-blue/25 bg-brand-blue/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.04em] text-brand-blue">
                {article.category}
              </span>
              <span className="inline-flex rounded-full border border-border-light bg-bg-white/80 px-3.5 py-1.5 text-xs font-medium tracking-[0.03em] text-text-muted">
                {article.date}
              </span>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.15] text-text-heading md:text-6xl md:leading-[1.1]">{article.title}</h1>
          </div>
        </Container>
      </Section>

      <Section className="pb-4 pt-10 md:pt-14" background="white">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            <article className="space-y-12 rounded-3xl border border-border-light bg-bg-white p-6 shadow-[0_18px_44px_-32px_rgba(0,51,102,0.38)] md:p-8 lg:p-10">
              {article.content.map((block) => (
                <div key={block.heading} className="space-y-6">
                  <h2 className="border-l-4 border-brand-blue pl-4 text-2xl font-semibold leading-tight text-text-heading md:text-[1.75rem]">
                    {block.heading}
                  </h2>
                  <div className="space-y-6">
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-text-body md:text-lg md:leading-9">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside className="h-fit rounded-3xl border border-border-light bg-bg-light p-6 shadow-[0_18px_44px_-34px_rgba(0,51,102,0.34)] md:p-7">
              <h3 className="inline-block border-b-2 border-brand-blue/55 pb-2 text-lg font-semibold text-text-heading">
                {zh.news.relatedArticles}
              </h3>
              <div className="mt-5 space-y-4">
                {relatedArticles.map((related) => (
                  <div
                    key={related.slug}
                    className="rounded-2xl border border-border-light bg-bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/45 hover:shadow-[0_14px_26px_-20px_rgba(0,123,255,0.5)]"
                  >
                    <span className="inline-flex rounded-full bg-brand-blue/10 px-2.5 py-1 text-[0.7rem] font-semibold tracking-[0.04em] text-brand-blue">
                      {related.category}
                    </span>
                    <p className="mt-3 text-sm leading-6 text-text-heading">
                      <Link href={`/news/${related.slug}`} className="transition-colors hover:text-brand-blue">
                        {related.title}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
