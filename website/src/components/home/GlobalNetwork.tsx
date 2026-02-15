"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

const nodePositions = [
  { left: "18%", top: "38%" },  // Shenzhen
  { left: "82%", top: "32%" },  // Los Angeles
  { left: "48%", top: "28%" },  // London
  { left: "30%", top: "58%" },  // Singapore
  { left: "38%", top: "34%" },  // Tokyo
  { left: "42%", top: "46%" },  // Dubai
];

export function GlobalNetwork() {
  const { t } = useLanguage();

  return (
    <Section background="dark" className="overflow-hidden">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-white md:text-5xl">
            {t.home.globalNetwork.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            {t.home.globalNetwork.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-16 h-[400px] max-w-4xl md:h-[480px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="18" y1="38" x2="48" y2="28" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            <line x1="18" y1="38" x2="30" y2="58" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            <line x1="18" y1="38" x2="38" y2="34" stroke="rgba(34,211,238,0.15)" strokeWidth="0.3" />
            <line x1="48" y1="28" x2="82" y2="32" stroke="rgba(34,211,238,0.2)" strokeWidth="0.3" />
            <line x1="48" y1="28" x2="42" y2="46" stroke="rgba(34,211,238,0.15)" strokeWidth="0.3" />
            <line x1="30" y1="58" x2="42" y2="46" stroke="rgba(34,211,238,0.15)" strokeWidth="0.3" />
            <line x1="38" y1="34" x2="82" y2="32" stroke="rgba(34,211,238,0.1)" strokeWidth="0.3" />
          </svg>

          {t.home.globalNetwork.locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: nodePositions[index]?.left, top: nodePositions[index]?.top }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-brand-cyan/20" />
              <div className="relative z-10 h-3 w-3 rounded-full bg-brand-cyan shadow-[0_0_12px_4px_rgba(34,211,238,0.4)]" />
              <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="text-xs font-semibold text-text-white">{location.name}</p>
                <p className="text-[10px] text-slate-500">{location.role}</p>
              </div>
            </motion.div>
          ))}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,123,255,0.08),transparent_70%)]" />
        </motion.div>
      </Container>
    </Section>
  );
}
