"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-heading md:text-4xl">{t.home.whyChooseUs.title}</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.home.whyChooseUs.items.map((advantage, index) => (
            <motion.article
              key={advantage.title}
              className="rounded-3xl border border-border-light bg-bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/15 text-xl text-brand-orange">●</span>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{advantage.title}</h3>
              <p className="mt-3 leading-relaxed text-text-body">{advantage.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
