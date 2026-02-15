"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { milestones, teamMembers } from "@/lib/mock-data";

const partners = ["Amazon", "TikTok Shop", "Shopify", "Meta", "Google", "Klaviyo"];

export function AboutPageClient() {
  return (
    <>
      <Section className="relative overflow-hidden pt-36 md:pt-40" background="light">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,_rgba(0,123,255,0.14),transparent_36%),radial-gradient(circle_at_84%_80%,_rgba(34,211,238,0.14),transparent_42%)]" />
        <Container className="relative">
          <motion.h1
            className="text-4xl font-bold text-text-heading sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            关于 Spring FES
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-base leading-relaxed text-text-body sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            我们是一家聚焦跨境电商与全球品牌增长的服务公司，以数据化运营、内容创新与全链路协同能力，帮助中国品牌在全球市场建立长期竞争力。
          </motion.p>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl space-y-5 text-base leading-relaxed text-text-body md:text-lg">
            <p>
              Spring FES 成立以来，持续服务消费电子、家居、个护、美妆与宠物等多个品类品牌。我们坚持“策略与执行一体化”，从市场洞察到渠道落地，帮助团队缩短试错周期。
            </p>
            <p>
              通过覆盖品牌咨询、内容营销、广告投放、履约协同与客户成功的复合能力，我们为客户构建可复制、可扩展、可持续的全球化增长体系。
            </p>
          </div>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <motion.h2
            className="text-3xl font-bold text-text-heading md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            核心团队
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.id}
                className="rounded-3xl border border-border-light bg-bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.24) }}
              >
                <div className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-blue/25 via-brand-cyan/18 to-brand-navy/20" />
                <h3 className="text-xl font-semibold text-text-heading">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-blue">{member.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-body">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <h2 className="text-3xl font-bold text-text-heading md:text-4xl">发展历程</h2>
          <div className="mt-10 space-y-5">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                className="rounded-3xl border border-border-light bg-bg-light p-6 md:p-8"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
              >
                <p className="text-sm font-semibold text-brand-blue">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-heading">{item.title}</h3>
                <p className="mt-3 text-text-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="navy">
        <Container>
          <h2 className="text-3xl font-bold text-text-white md:text-4xl">合作伙伴</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                className="rounded-2xl border border-bg-white/20 bg-bg-white/8 px-4 py-5 text-center text-sm font-semibold text-text-white"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
