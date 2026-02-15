"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

const logos = ["Amazon", "Shopify", "Google", "Meta", "TikTok"];

export function TrustBar() {
  return (
    <motion.section
      className="border-y border-border-light bg-bg-gray py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12 lg:justify-between">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold tracking-wide text-text-muted">
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
