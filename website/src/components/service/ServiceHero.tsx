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
    <section className="relative overflow-hidden bg-[linear-gradient(130deg,var(--color-brand-navy)_0%,#00488f_48%,var(--color-brand-blue)_100%)] pt-36 pb-24 text-text-white md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.26),transparent_44%),radial-gradient(circle_at_86%_76%,rgba(255,107,0,0.22),transparent_38%)]" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan">{subtitle}</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">{description}</p>
        </motion.div>
      </Container>
    </section>
  );
}
