"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] bg-[#FFFFFF] pt-24">
      <Container>
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="text-center lg:text-left"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#007BFF] sm:text-sm">Spring FES</p>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl lg:mx-0 lg:text-6xl">
              {t.home.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg lg:mx-0">
              {t.home.hero.subtitle}
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mx-0 lg:justify-start">
              <Button
                size="lg"
                variant="primary"
                href="/contact"
                className="w-full justify-center rounded-lg bg-[#007BFF] text-white hover:bg-[#006EE6] sm:w-auto"
              >
                {t.home.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href="#core-services"
                className="w-full justify-center rounded-lg sm:w-auto"
              >
                {t.home.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hidden h-full w-full items-center justify-center lg:flex"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="flex min-h-[400px] w-full max-w-[560px] items-center justify-center rounded-2xl border border-slate-200 bg-[#F1F5F9] text-base font-medium text-slate-500">
              Image Placeholder
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
