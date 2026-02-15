"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(140deg,#001b3d_0%,#003366_38%,#0059b3_100%)] pt-28 text-text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(34,211,238,0.2),transparent_36%),radial-gradient(circle_at_84%_24%,rgba(255,107,0,0.18),transparent_34%),radial-gradient(circle_at_72%_84%,rgba(0,123,255,0.24),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none absolute left-[8%] top-32 h-2 w-2 rounded-full bg-brand-cyan/90 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
      <div className="pointer-events-none absolute left-[16%] top-2/3 h-px w-28 rotate-12 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/70 to-brand-cyan/0" />
      <div className="pointer-events-none absolute right-[8%] top-28 h-3 w-3 rounded-full border border-brand-orange/80" />
      <div className="pointer-events-none absolute right-[18%] top-[64%] h-24 w-24 rounded-full border border-bg-white/20" />
      <Container className="relative">
        <motion.div
          className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
        >
          <motion.div
            className="relative"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan/90">Spring FES</p>
            <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] text-text-white sm:text-6xl lg:text-7xl">
              {t.home.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-bg-white/85 sm:text-lg">
              {t.home.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-orange/65 blur-xl" />
                <Button size="lg" href="/contact" className="relative bg-brand-orange text-white shadow-[0_12px_36px_rgba(255,107,0,0.35)] hover:bg-brand-orange/90">
                  {t.home.hero.primaryCta}
                </Button>
              </div>
              <Button size="lg" variant="secondary" href="#core-services">
                {t.home.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-[380px] w-full max-w-[540px] sm:h-[430px]"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-[2.5rem] border border-bg-white/15 bg-bg-dark/25 backdrop-blur-[2px]" />
            <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(34,211,238,0.58),rgba(0,123,255,0.2)_38%,rgba(15,23,42,0.92)_72%)] blur-[1px]" />
            <div className="absolute inset-[8%] rounded-full border border-brand-cyan/35" />
            <div className="absolute inset-[16%] rounded-full border border-bg-white/35" />
            <div className="absolute inset-[24%] rounded-full border border-brand-blue/45" />
            <div className="absolute inset-[8%] rounded-full bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.12)_48%,transparent_100%)]" />
            <div className="absolute inset-[11%] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.16)_50%,transparent_100%)]" />

            <div className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <div className="absolute right-[23%] top-[40%] h-2 w-2 rounded-full bg-bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
            <div className="absolute left-[35%] bottom-[28%] h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_18px_rgba(255,107,0,0.8)]" />
            <div className="absolute right-[34%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

            <div className="absolute left-[22%] top-[31%] h-px w-[31%] rotate-[16deg] bg-gradient-to-r from-brand-cyan/10 via-brand-cyan/90 to-bg-white/15" />
            <div className="absolute left-[38%] top-[54%] h-px w-[26%] -rotate-[12deg] bg-gradient-to-r from-bg-white/10 via-bg-white/80 to-brand-blue/20" />
            <div className="absolute left-[35%] top-[73%] h-px w-[22%] rotate-[8deg] bg-gradient-to-r from-brand-orange/10 via-brand-orange/80 to-brand-cyan/20" />

            <div className="absolute -left-6 top-20 h-20 w-20 rounded-full border border-brand-cyan/30" />
            <div className="absolute -right-2 bottom-16 h-28 w-28 rounded-full border border-brand-orange/35" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_36px_10px_rgba(255,107,0,0.4)]" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
