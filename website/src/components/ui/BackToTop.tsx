"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          onClick={handleBackToTop}
          aria-label={t.backToTopAria}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "fixed right-5 bottom-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue text-2xl text-text-white shadow-lg shadow-brand-blue/30 transition-colors duration-300 transform-gpu will-change-transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] hover:bg-[#0062cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2",
          )}
        >
          ↑
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
