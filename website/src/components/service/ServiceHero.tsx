"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ServiceHero({ title, subtitle, description }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(130deg,var(--color-brand-navy)_0%,#00488f_46%,var(--color-brand-blue)_100%)] pt-36 pb-24 text-text-white md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.34),transparent_42%),radial-gradient(circle_at_86%_22%,rgba(255,107,0,0.2),transparent_36%),radial-gradient(circle_at_78%_82%,rgba(34,211,238,0.2),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0%,transparent_38%,transparent_62%,rgba(255,255,255,0.06)_100%)]" />

      <div className="pointer-events-none absolute -top-14 left-[8%] h-40 w-40 rounded-full border border-brand-cyan/35 bg-brand-cyan/15 blur-[1px]" />
      <div className="pointer-events-none absolute top-[30%] right-[12%] h-28 w-28 rounded-full border border-brand-orange/35 bg-brand-orange/12" />
      <div className="pointer-events-none absolute bottom-16 right-[20%] h-px w-36 rotate-[18deg] bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent" />
      <div className="pointer-events-none absolute top-[58%] left-[14%] h-px w-24 -rotate-[26deg] bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="inline-flex rounded-full border border-brand-cyan/40 bg-brand-cyan/12 px-4 py-2 text-base font-semibold uppercase tracking-[0.22em] text-brand-cyan shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_10px_30px_rgba(0,51,102,0.32)]"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.62, delay: 0.14 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.58, delay: 0.22 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
