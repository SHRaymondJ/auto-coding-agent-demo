"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCTA } from "@/components/service/ServiceCTA";

const designServices = [
  {
    icon: "BV",
    title: "品牌视觉系统",
    description: "从品牌策略到视觉语言落地，构建设计规范、图形资产与跨渠道统一识别。",
  },
  {
    icon: "EC",
    title: "电商视觉设计",
    description: "围绕转化目标打造首页、主图与详情页视觉，兼顾品牌调性与平台节奏。",
  },
  {
    icon: "VM",
    title: "视频与动态内容",
    description: "制作高质感短视频与动态素材，强化信息传达效率与内容记忆点。",
  },
  {
    icon: "PK",
    title: "包装与物料设计",
    description: "整合包装、展会物料与宣传系统，形成线上线下一体化品牌触点体验。",
  },
] as const;

const portfolioItems = [
  { name: "品牌视觉升级", category: "品牌设计", gradient: "from-brand-blue/30 via-brand-cyan/20 to-brand-navy/30" },
  { name: "电商主图设计", category: "电商视觉", gradient: "from-brand-orange/30 via-brand-blue/20 to-brand-cyan/30" },
  { name: "社媒内容套件", category: "内容设计", gradient: "from-brand-navy/30 via-brand-orange/20 to-brand-blue/30" },
  { name: "产品包装系列", category: "包装设计", gradient: "from-brand-cyan/30 via-brand-navy/20 to-brand-orange/30" },
  { name: "品牌宣传视频", category: "视频制作", gradient: "from-brand-blue/30 via-brand-orange/20 to-brand-navy/30" },
  { name: "展会物料设计", category: "物料设计", gradient: "from-brand-orange/30 via-brand-cyan/20 to-brand-blue/30" },
] as const;

export function DesignHubClient() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,var(--color-brand-navy)_0%,#00488f_46%,var(--color-brand-blue)_100%)] pt-36 pb-24 text-text-white md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.34),transparent_42%),radial-gradient(circle_at_86%_22%,rgba(255,107,0,0.2),transparent_36%),radial-gradient(circle_at_78%_82%,rgba(34,211,238,0.2),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_38%,transparent_62%,rgba(255,255,255,0.06)_100%)]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.52, delay: 0.08 }}
              className="inline-flex rounded-full border border-brand-cyan/40 bg-brand-cyan/12 px-4 py-2 text-base font-semibold uppercase tracking-[0.22em] text-brand-cyan"
            >
              Creative Excellence
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              DESIGN Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.56, delay: 0.22 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg"
            >
              我们将品牌策略转化为可被看见、被记住、被传播的视觉表达。从系统设计到内容制作，帮助跨境品牌在多渠道中持续建立高辨识度与高转化的创意资产。
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Design Services</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-text-heading md:text-4xl">从视觉语言到品牌资产的完整设计能力</h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {designServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.08 }}
                className="rounded-3xl border border-brand-blue/15 bg-[linear-gradient(150deg,rgba(0,123,255,0.08)_0%,rgba(34,211,238,0.03)_46%,rgba(255,255,255,0.9)_100%)] p-7 shadow-[0_18px_42px_rgba(0,51,102,0.08)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold tracking-[0.12em] text-brand-cyan">
                  {service.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-text-heading">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.58 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Portfolio Gallery</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-text-heading md:text-4xl">精选设计项目，展示创意落地与商业转化</h2>
            </div>
            <p className="text-sm text-text-body md:max-w-sm">
              每个项目从品牌调性出发，结合电商场景与传播需求，确保视觉表达具备一致性、可扩展性和实际效果。
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-[0_16px_36px_rgba(0,51,102,0.08)]"
              >
                <div
                  className={`h-52 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-brand-blue/25 bg-brand-blue/5 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-text-heading">{item.name}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <ServiceCTA title="让设计成为品牌增长的引擎" buttonText="预约创意咨询" buttonHref="/contact" />
    </>
  );
}
