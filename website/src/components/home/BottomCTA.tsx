"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BottomCTA() {
  const { t } = useLanguage();

  return (
    <Section background="navy" className="overflow-hidden">
      <Container>
        <motion.div
          className="rounded-[2rem] border border-brand-cyan/40 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.22),transparent_36%),linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] p-7 text-center will-change-transform sm:p-10 md:p-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.26 }}
          transition={{ duration: 0.62, ease: smoothEase }}
        >
          <h2 className="text-3xl font-bold leading-tight text-text-white sm:text-4xl md:text-5xl">{t.home.bottomCta.title}</h2>
          <div className="mt-7 flex justify-center sm:mt-8">
            <Button href="/contact" variant="secondary" size="lg" className="w-full justify-center border-bg-white bg-bg-white text-brand-navy hover:bg-[#f3f7ff] sm:w-auto">
              {t.home.bottomCta.button}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
