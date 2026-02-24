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
    <Section background="dark" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,123,255,0.14),transparent_60%)]" />
      <Container>
        <motion.div
          className="relative mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.26 }}
          transition={{ duration: 0.62, ease: smoothEase }}
        >
          <h2 className="text-3xl font-bold text-center text-white sm:text-4xl md:text-5xl">{t.home.bottomCta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-center text-slate-300 sm:text-lg">{t.home.bottomCta.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" size="lg" className="justify-center bg-[#007BFF] text-white hover:bg-[#006ee6]">
              {t.home.bottomCta.button}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
