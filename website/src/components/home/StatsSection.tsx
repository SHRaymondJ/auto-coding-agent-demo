"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "服务品牌" },
  { value: 100, suffix: "+", label: "覆盖国家" },
  { value: 10, suffix: "B+", label: "助力GMV" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline text-5xl font-bold tracking-tight text-brand-navy md:text-6xl">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  return (
    <Section background="light">
      <Container>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-border-light bg-bg-white p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-base text-text-body">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
