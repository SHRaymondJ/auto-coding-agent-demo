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
              className="group relative rounded-3xl border border-border-light bg-bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/10"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              {index < steps.length - 1 ? (
                <>
                  <span className="absolute left-1/2 top-full z-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue/60 via-brand-cyan/60 to-transparent lg:hidden" />
                  <span className="absolute left-1/2 top-[calc(100%+1.5rem)] z-0 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-brand-cyan/60 lg:hidden" />

                  <span className="absolute right-[-1.65rem] top-12 z-0 hidden h-px w-8 bg-gradient-to-r from-brand-blue/70 via-brand-cyan/70 to-brand-orange/40 lg:block" />
                  <span className="absolute right-[-2.35rem] top-[2.68rem] z-0 hidden h-2 w-2 rotate-45 border-r border-t border-brand-cyan/70 lg:block" />
                </>
              ) : null}

              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-brand-cyan/35 blur-md" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-navy text-lg font-semibold text-text-white ring-2 ring-brand-cyan/45">
                  {step.number}
                </span>
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
