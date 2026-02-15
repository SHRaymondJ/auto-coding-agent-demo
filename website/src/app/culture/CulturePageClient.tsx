"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { milestones } from "@/lib/mock-data";

const valueCards = [
  {
    title: "使命",
    content: "让中国品牌在全球市场绽放光芒",
  },
  {
    title: "愿景",
    content: "成为最值得信赖的跨境电商品牌服务伙伴",
  },
  {
    title: "价值观",
    content: "客户至上、数据驱动、持续创新、合作共赢",
  },
];

const galleryMembers = [
  { name: "王嘉琪", title: "品牌策略顾问" },
  { name: "徐昊然", title: "海外运营经理" },
  { name: "李安娜", title: "内容创意策划" },
  { name: "黄逸辰", title: "数据分析师" },
  { name: "郑雨桐", title: "客户成功经理" },
  { name: "吴辰宇", title: "项目交付负责人" },
];

export function CulturePageClient() {
  return (
    <>
      <Section className="relative overflow-hidden pt-36 md:pt-40" background="navy">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,_rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_80%_72%,_rgba(255,107,0,0.2),transparent_36%)]" />
        <Container className="relative">
          <motion.h1
            className="text-4xl font-bold text-text-white sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            企业文化
          </motion.h1>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueCards.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-3xl border border-border-light bg-bg-light p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h2 className="text-xl font-semibold text-text-heading">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-text-body">{item.content}</p>
              </motion.article>
            ))}
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
            团队风采
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border-light bg-bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28) }}
              >
                <div className="h-36 bg-gradient-to-br from-brand-blue/20 via-brand-cyan/12 to-brand-navy/20" />
                <div className="p-5">
                  <p className="text-base font-semibold text-text-heading">{member.name}</p>
                  <p className="mt-1 text-sm text-text-body">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <motion.h2
            className="text-3xl font-bold text-text-heading md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            发展历程
          </motion.h2>
          <div className="mt-10 space-y-5">
            {milestones.map((item, index) => (
              <motion.article
                key={item.year}
                className="rounded-3xl border border-border-light bg-bg-light p-6 md:p-8"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
              >
                <p className="text-sm font-semibold text-brand-blue">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-heading">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-text-body">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
