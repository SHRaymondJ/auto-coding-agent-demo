"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const { t } = useLanguage();

  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-4xl font-bold text-text-heading md:text-5xl">{t.serviceShared.featuresTitle}</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-border-light bg-bg-light p-7 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="block h-full w-full rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-brand-cyan/80 via-brand-blue/75 to-brand-orange/75" />
              </span>

              <div className="relative z-10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan via-brand-blue to-brand-navy text-2xl font-semibold text-text-white shadow-lg shadow-brand-blue/20 ring-1 ring-brand-cyan/40">
                  {feature.icon}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-text-heading">{feature.title}</h3>
                <span className="mt-4 block h-px w-14 bg-gradient-to-r from-brand-blue/70 via-brand-cyan/70 to-transparent" />
                <p className="mt-4 text-sm font-normal leading-relaxed text-text-body">{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
