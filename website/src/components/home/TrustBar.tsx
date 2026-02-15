"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

const logos = ["Amazon", "TikTok Shop", "Shopify", "Walmart", "Google", "Meta", "Temu", "eBay"];
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TrustBar() {
  return (
    <motion.section
      className="relative overflow-hidden border-y border-border-light/80 bg-[linear-gradient(180deg,rgba(247,250,255,0.85),rgba(241,245,249,0.7))] py-6 will-change-transform sm:py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.58, ease: smoothEase }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:36px_36px]" />
      <Container>
        <div className="overflow-hidden">
          <div className="flex w-max animate-[trustbar-marquee_24s_linear_infinite] items-center gap-7 sm:gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="cursor-default whitespace-nowrap rounded-full border border-slate-300/70 bg-white/65 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:text-slate-700 sm:px-5 sm:py-2.5 sm:text-base sm:tracking-[0.2em]"
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
