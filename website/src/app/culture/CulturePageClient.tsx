"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";
import { getMilestones } from "@/lib/mock-data";

export function CulturePageClient() {
  const { locale, t } = useLanguage();
  const milestones = getMilestones(locale);

  return (
    <>
      <Section className="relative overflow-hidden pt-36 md:pt-40" background="navy">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,_rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_80%_72%,_rgba(255,107,0,0.2),transparent_36%)]" />
        <Container className="relative">
          <motion.h1
            className="text-4xl font-bold text-text-white sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            {t.culture.title}
          </motion.h1>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.culture.values.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-3xl border border-border-light bg-bg-light p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h2 className="text-xl font-semibold text-text-heading">{item.title}</h2>
                <p className="mt-4 leading-relaxed text-text-body">{item.content}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="light">
        <Container>
          <motion.h2
            className="text-4xl font-bold text-text-heading md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            {t.culture.teamTitle}
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.culture.galleryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border-light bg-bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28) }}
              >
                <div className="h-36 bg-gradient-to-br from-brand-blue/20 via-brand-cyan/12 to-brand-navy/20" />
                <div className="p-5">
                  <p className="text-base font-semibold text-text-heading">{member.name}</p>
                  <p className="mt-1 text-sm text-text-body">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <motion.h2
            className="text-4xl font-bold text-text-heading md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            {t.culture.milestonesTitle}
          </motion.h2>
          <div className="mt-10 space-y-5">
            {milestones.map((item, index) => (
              <motion.article
                key={item.year}
                className="rounded-3xl border border-border-light bg-bg-light p-6 md:p-8"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
              >
                <p className="text-sm font-semibold text-brand-blue">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-heading">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-text-body">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
