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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,_rgba(34,211,238,0.32),transparent_34%),radial-gradient(circle_at_80%_72%,_rgba(255,107,0,0.28),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />
        <motion.div
          className="pointer-events-none absolute -left-20 top-20 h-44 w-44 rounded-full bg-brand-cyan/24 blur-2xl"
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-14 bottom-16 h-52 w-52 rounded-full bg-brand-orange/24 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <Container className="relative">
          <motion.h1
            className="max-w-3xl text-4xl font-bold text-text-white sm:text-5xl md:leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            {t.culture.title}
          </motion.h1>
        </Container>
      </Section>

      <Section className="relative" background="white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-cyan/8 to-transparent" />
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {t.culture.values.map((item, index) => (
              <motion.article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-blue/12 bg-gradient-to-br from-brand-navy to-brand-blue/90 p-8 text-text-white shadow-[0_12px_40px_rgba(0,51,102,0.18)] transition-all duration-300 hover:border-brand-cyan/60 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_18px_42px_rgba(0,51,102,0.35)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-cyan/18 blur-xl transition-transform duration-300 group-hover:scale-110" />
                <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-brand-orange/25 blur-xl" />
                <div className="relative flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold tracking-[0.34em] text-brand-cyan/85">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-cyan/45 bg-brand-cyan/12 text-brand-cyan">
                    ✦
                  </span>
                </div>
                <h2 className="relative mt-5 text-xl font-semibold text-text-white">{item.title}</h2>
                <p className="relative mt-4 leading-relaxed text-text-white/80">{item.content}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative" background="light">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-blue/8 to-transparent" />
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

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {t.culture.galleryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-border-light/70 bg-bg-white shadow-[0_12px_30px_rgba(0,51,102,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/35 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.28) }}
              >
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,123,255,0.42),rgba(34,211,238,0.24)_46%,rgba(255,107,0,0.28))] transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.34),transparent_35%),radial-gradient(circle_at_78%_70%,rgba(0,51,102,0.32),transparent_38%)]" />
                  <div className="absolute inset-0 opacity-38 [background:linear-gradient(transparent_95%,rgba(255,255,255,0.24)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.24)_95%)] [background-size:18px_18px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-20 w-20 opacity-95">
                      <span className="absolute left-1/2 top-1 h-7 w-7 -translate-x-1/2 rounded-full border border-white/65 bg-white/20" />
                      <span className="absolute left-1/2 top-9 h-10 w-14 -translate-x-1/2 rounded-t-[999px] border border-white/65 bg-white/18" />
                      <span className="absolute left-1/2 top-13 h-0.5 w-16 -translate-x-1/2 bg-white/70" />
                      <span className="absolute left-1/2 top-16 h-0.5 w-12 -translate-x-1/2 bg-white/55" />
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/20 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white">
                    TEAM
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-base font-semibold text-text-heading">{member.name}</p>
                  <p className="mt-1 text-sm text-text-body">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="relative" background="white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-cyan/7 to-transparent" />
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
          <div className="relative mt-12 pl-12 md:pl-20">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-brand-blue/70 via-brand-cyan/50 to-brand-orange/60 md:left-8" />
            <div className="space-y-6 md:space-y-7">
            {milestones.map((item, index) => (
              <motion.article
                key={item.year}
                className="group relative rounded-3xl border border-border-light/80 bg-bg-white p-6 shadow-[0_8px_30px_rgba(0,51,102,0.08)] transition-all duration-300 hover:border-brand-blue/35 hover:shadow-[0_16px_38px_rgba(0,51,102,0.16)] md:p-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
              >
                <span className="absolute -left-8 top-10 h-px w-8 bg-gradient-to-r from-brand-blue/45 to-brand-cyan/45 md:-left-12 md:w-12" />
                <span className="absolute -left-10 top-8 h-4 w-4 rounded-full border-4 border-brand-blue/25 bg-brand-cyan shadow-[0_0_0_6px_rgba(34,211,238,0.12)] md:-left-14" />
                <p className="text-sm font-semibold tracking-[0.2em] text-brand-blue">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-text-heading">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-text-body">{item.description}</p>
              </motion.article>
            ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
