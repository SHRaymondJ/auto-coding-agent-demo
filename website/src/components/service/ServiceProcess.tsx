"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ServiceStep[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  const { t } = useLanguage();

  return (
    <Section background="light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-bold text-text-heading md:text-5xl">{t.serviceShared.processTitle}</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative rounded-3xl border border-border-light bg-bg-white p-7"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              {index < steps.length - 1 ? (
                <span className="absolute top-12 -right-7 hidden h-[2px] w-14 bg-brand-blue/30 lg:block" />
              ) : null}
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-semibold text-text-white">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text-heading">{step.title}</h3>
              <p className="mt-3 text-sm font-normal leading-relaxed text-text-body">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
