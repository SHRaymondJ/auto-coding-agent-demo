import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Layout>
      <Section className="relative overflow-hidden pt-36 md:pt-40" background="light">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(0,123,255,0.16),transparent_36%),radial-gradient(circle_at_80%_78%,_rgba(34,211,238,0.16),transparent_40%)]" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border-light bg-bg-white p-8 text-center shadow-xl shadow-brand-blue/10 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">404</p>
            <h1 className="mt-4 text-3xl font-bold text-text-heading md:text-5xl">页面未找到</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-body md:text-lg">
              你访问的页面可能已移动或暂时不可用，返回首页继续探索 Spring FES 的全球增长解决方案。
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/" size="lg">
                返回首页
              </Button>
            </div>
            <div className="mt-6 text-sm text-text-muted">
              或前往
              <Link href="/news" className="ml-1 font-semibold text-brand-blue transition-colors hover:text-brand-navy">
                品牌洞察
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
