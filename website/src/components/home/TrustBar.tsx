"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/lib/i18n";

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <motion.section
      className="bg-white py-12 sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0F172A] sm:text-3xl">{t.home.partners.title}</h2>
          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {t.home.partners.logos.slice(0, 5).map((logo) => (
              <span key={logo} className="whitespace-nowrap text-xl font-bold text-gray-400 sm:text-2xl">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
