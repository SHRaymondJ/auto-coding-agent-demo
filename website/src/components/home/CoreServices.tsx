"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const services = [
  {
    title: "品牌出海咨询",
    description: "市场调研、竞品分析、品牌定位",
  },
  {
    title: "全球全渠道运营",
    description: "Amazon、TikTok Shop、Shopify 等渠道运营",
  },
  {
    title: "数字化营销推广",
    description: "Google/Meta 广告投流、KOL/KOC 红人营销",
  },
  {
    title: "全球供应链管理",
    description: "海外仓储、跨境物流、清关报检",
  },
];

export function CoreServices() {
  return (
    <Section id="core-services" background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-heading md:text-4xl">全链路出海服务</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group rounded-3xl border border-border-light bg-bg-light p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/12 text-xl text-brand-blue">✦</span>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-text-body">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
