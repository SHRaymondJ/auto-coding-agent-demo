"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.62, ease: smoothEase }}
          className="mx-auto max-w-3xl will-change-transform text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl md:text-5xl">{t.home.whyChooseUs.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-body md:text-lg">
            Trusted cross-border execution with strategy, operations, and growth systems built for long-term brand
            performance.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {t.home.whyChooseUs.items.map((advantage, index) => (
            <motion.article
              key={advantage.title}
              className="group relative overflow-hidden rounded-3xl border border-border-default bg-gradient-to-br from-bg-white via-bg-light to-brand-blue/10 p-6 shadow-[0_18px_50px_-24px_rgba(0,51,102,0.45)] transition-all duration-300 transform-gpu will-change-transform hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-[0_28px_58px_-30px_rgba(0,51,102,0.65)] sm:p-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: smoothEase }}
            >
              <span className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/10 blur-2xl" />
              <span className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-brand-blue/10 blur-3xl" />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-blue/35 bg-gradient-to-br from-brand-navy to-brand-blue shadow-[0_12px_30px_-16px_rgba(0,51,102,0.95)]">
                <span className="absolute inset-[5px] rounded-xl border border-white/25" />
                <span className="relative text-sm font-bold tracking-[0.18em] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>

              <h3 className="relative mt-5 text-xl font-semibold text-text-heading sm:mt-6 sm:text-2xl">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body sm:text-base">{advantage.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
