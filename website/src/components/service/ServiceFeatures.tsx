"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <Section background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-bold text-text-heading md:text-4xl">核心服务模块</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group rounded-3xl border border-border-light bg-bg-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/12 text-xl font-semibold text-brand-blue">
                {feature.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-text-body">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
