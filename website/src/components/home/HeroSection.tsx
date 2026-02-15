"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-white pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,_rgba(34,211,238,0.16),transparent_44%),radial-gradient(circle_at_14%_86%,_rgba(0,123,255,0.12),transparent_40%)]" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Spring FES</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-text-heading sm:text-5xl lg:text-6xl">
              {t.home.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-body sm:text-lg">
              {t.home.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" href="/contact">
                {t.home.hero.primaryCta}
              </Button>
              <Button size="lg" variant="secondary" href="#core-services">
                {t.home.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-[380px] w-full max-w-[500px]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_32%_28%,_rgba(34,211,238,0.56),rgba(0,123,255,0.18)_40%,rgba(15,23,42,0.9)_70%)] blur-sm" />
            <div className="absolute inset-0 rounded-full border border-brand-cyan/40" />
            <div className="absolute inset-12 rounded-full border border-brand-blue/50" />
            <div className="absolute inset-24 rounded-full border border-bg-white/70" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_40px_8px_rgba(255,107,0,0.45)]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
