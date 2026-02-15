import Link from "next/link";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { newsArticles } from "@/lib/mock-data";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

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
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <Layout>
      <Section className="pt-32 pb-10 md:pt-36" background="light">
        <Container>
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-semibold text-brand-blue transition-colors hover:text-brand-navy"
          >
            ← 返回品牌洞察
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">{article.category}</span>
            <span className="text-sm text-text-muted">{article.date}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-text-heading md:text-5xl">{article.title}</h1>
        </Container>
      </Section>

      <Section className="pt-10 md:pt-14" background="white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="space-y-10">
              {article.content.map((block) => (
                <div key={block.heading} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-text-heading">{block.heading}</h2>
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-text-body md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </article>

            <aside className="h-fit rounded-3xl border border-border-light bg-bg-light p-6">
              <h3 className="text-lg font-semibold text-text-heading">相关文章</h3>
              <div className="mt-5 space-y-4">
                {relatedArticles.map((related) => (
                  <div key={related.slug} className="rounded-2xl border border-border-light bg-bg-white p-4">
                    <span className="text-xs font-semibold text-brand-blue">{related.category}</span>
                    <p className="mt-2 text-sm text-text-heading">
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
