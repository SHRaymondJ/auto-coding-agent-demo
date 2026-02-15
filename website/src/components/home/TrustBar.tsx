"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

const logos = ["Amazon", "TikTok Shop", "Shopify", "Walmart", "Google", "Meta", "Temu", "eBay"];

export function TrustBar() {
  return (
    <motion.section
      className="border-y border-border-light bg-bg-gray py-6 sm:py-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <Container>
        <div className="overflow-hidden">
          <div className="flex w-max animate-[trustbar-marquee_24s_linear_infinite] items-center gap-8 sm:gap-10">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="cursor-default whitespace-nowrap text-base font-semibold uppercase tracking-[0.18em] text-text-muted opacity-70 grayscale transition-all duration-300 hover:text-brand-blue hover:opacity-100 hover:grayscale-0"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        @keyframes trustbar-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}
