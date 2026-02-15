"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function BottomCTA() {
  return (
    <Section background="navy" className="overflow-hidden">
      <Container>
        <motion.div
          className="rounded-[2rem] border border-brand-cyan/40 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.22),transparent_36%),linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0))] p-10 text-center md:p-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-text-white md:text-4xl">准备好开启您的全球化之旅了吗？</h2>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg" className="border-bg-white bg-bg-white text-brand-navy hover:bg-[#f3f7ff]">
              立即咨询
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
