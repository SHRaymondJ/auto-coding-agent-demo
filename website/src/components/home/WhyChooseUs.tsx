"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const advantages = [
  {
    title: "专业团队",
    description: "拥有跨境电商平台、海外营销与品牌策略复合背景的实战型团队，覆盖从策略到执行全流程。",
  },
  {
    title: "数据驱动",
    description: "通过全链路数据追踪与归因分析，持续优化渠道组合、投放效率与用户生命周期价值。",
  },
  {
    title: "本土化运营",
    description: "深耕北美、欧洲、东南亚等核心市场，用本地语言、文化洞察与渠道资源提升品牌转化。",
  },
];

export function WhyChooseUs() {
  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-heading md:text-4xl">为什么选择我们</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.article
              key={advantage.title}
              className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/15 text-xl text-brand-orange">●</span>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{advantage.title}</h3>
              <p className="mt-3 leading-relaxed text-text-body">{advantage.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
