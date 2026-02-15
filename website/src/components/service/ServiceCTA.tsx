"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface ServiceCTAProps {
  title: string;
  buttonText: string;
  buttonHref: string;
}

export function ServiceCTA({ title, buttonText, buttonHref }: ServiceCTAProps) {
  return (
    <Section background="navy" className="overflow-hidden">
      <Container>
        <motion.div
          className="relative rounded-[2rem] border border-brand-cyan/35 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.32),transparent_52%),linear-gradient(145deg,rgba(0,123,255,0.2)_0%,rgba(15,23,42,0.14)_100%)] px-6 py-12 text-center md:px-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.58 }}
        >
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-text-white md:text-5xl">{title}</h2>
          <div className="mt-8">
            <Button href={buttonHref} size="lg" className="bg-brand-orange hover:bg-[#e86100] active:bg-[#cf5600]">
              {buttonText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
