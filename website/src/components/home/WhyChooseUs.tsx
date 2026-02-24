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
          transition={{ duration: 0.6, ease: smoothEase }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">{t.home.whyChooseUs.title}</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3">
          {t.home.whyChooseUs.items.map((advantage, index) => (
            <motion.article
              key={advantage.title}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: smoothEase }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-body sm:text-base">{advantage.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
