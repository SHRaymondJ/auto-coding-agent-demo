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
    <span ref={ref} className="inline-flex items-baseline text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
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
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.62, ease: smoothEase }}
        >
          {t.home.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center md:px-6 md:py-2 ${index < 3 ? "md:border-r md:border-white/10" : ""}`}
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
      </Container>
    </Section>
  );
}
