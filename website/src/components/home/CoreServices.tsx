"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const serviceIcons = [
  <svg
    key="truck"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="#007BFF"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7h11v8H3z" />
    <path d="M14 10h3l3 3v2h-6z" />
    <circle cx="7" cy="17" r="1.5" />
    <circle cx="17" cy="17" r="1.5" />
  </svg>,
  <svg
    key="megaphone"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="#007BFF"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12v-2l10-4v12L4 14z" />
    <path d="M8 14l1.2 4.2a1 1 0 0 0 1 .8h1.3" />
    <path d="M16.5 9.5a3.5 3.5 0 0 1 0 5" />
  </svg>,
  <svg
    key="shopping-bag"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="#007BFF"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 8h12l-1 11H7z" />
    <path d="M9 8a3 3 0 0 1 6 0" />
  </svg>,
  <svg
    key="headset"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="#007BFF"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="4" y="12" width="3" height="6" rx="1" />
    <rect x="17" y="12" width="3" height="6" rx="1" />
    <path d="M20 18a2 2 0 0 1-2 2h-2" />
  </svg>,
];

export function CoreServices() {
  const { t } = useLanguage();

  return (
    <Section id="core-services" background="white">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-heading">{t.home.coreServices.title}</h2>
          <p className="text-base sm:text-lg text-text-body mt-3">{t.home.coreServices.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.home.coreServices.services.map((service, index) => (
            <motion.article
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: smoothEase }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">{serviceIcons[index]}</div>
              <h3 className="mt-5 text-xl font-semibold text-text-heading">{service.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
