"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useLanguage } from "@/lib/i18n";

export function CoreServices() {
  const { t } = useLanguage();
  const iconThemes = [
    {
      shell: "border-brand-blue/20 bg-gradient-to-br from-brand-blue/20 via-brand-cyan/15 to-transparent text-brand-blue",
      glyph: "bg-gradient-to-br from-brand-blue to-brand-cyan",
      pulse: "bg-brand-cyan/20",
    },
    {
      shell: "border-brand-navy/20 bg-gradient-to-br from-brand-navy/20 via-brand-blue/15 to-transparent text-brand-navy",
      glyph: "bg-gradient-to-br from-brand-navy to-brand-blue",
      pulse: "bg-brand-blue/20",
    },
    {
      shell: "border-brand-orange/25 bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-transparent text-brand-orange",
      glyph: "bg-gradient-to-br from-brand-orange to-brand-blue",
      pulse: "bg-brand-orange/20",
    },
    {
      shell: "border-brand-cyan/25 bg-gradient-to-br from-brand-cyan/20 via-brand-blue/10 to-transparent text-brand-cyan",
      glyph: "bg-gradient-to-br from-brand-cyan to-brand-navy",
      pulse: "bg-brand-cyan/20",
    },
  ];

  return (
    <Section id="core-services" background="white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-text-heading md:text-5xl">{t.home.coreServices.title}</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.home.coreServices.services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-border-default/70 bg-gradient-to-br from-bg-light via-white to-bg-gray p-8 shadow-[0_10px_30px_rgba(2,20,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_52%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 ${iconThemes[index % iconThemes.length].shell}`}
                >
                  <span className={`relative block h-6 w-6 rounded-md ${iconThemes[index % iconThemes.length].glyph}`}>
                    <span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ${iconThemes[index % iconThemes.length].pulse}`} />
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white/90" />
                  </span>
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-text-heading">{service.title}</h3>
                <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-text-body">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
