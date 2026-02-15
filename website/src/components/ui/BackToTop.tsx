"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

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
    <button
      type="button"
      onClick={handleBackToTop}
      aria-label="返回顶部"
      className={cn(
        "fixed right-5 bottom-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/30 bg-brand-blue text-2xl text-text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0062cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2",
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      ↑
    </button>
  );
}
