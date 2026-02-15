"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.1, ease: smoothEase });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      <motion.span>{rounded}</motion.span>
      <span className="ml-1 text-white">{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <Section background="navy">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#003366] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-14">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#007BFF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[#22D3EE]/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] bg-[length:20px_20px] opacity-20" />

          <motion.div
            className="relative grid grid-cols-2 gap-3 will-change-transform sm:gap-4 md:grid-cols-4 md:gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, ease: smoothEase }}
          >
            {t.home.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-5 text-center transform-gpu will-change-transform sm:px-4 sm:py-6 md:rounded-none md:border-0 md:bg-transparent md:px-6 md:py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.07, duration: 0.58, ease: smoothEase }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-slate-300 sm:mt-3 sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
