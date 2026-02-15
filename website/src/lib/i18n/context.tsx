"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";

import { en } from "./en";
import type { Dictionary, Locale } from "./types";
import { zh } from "./zh";

const STORAGE_KEY = "spring-fes-locale";

const dictionaries: Record<Locale, Dictionary> = {
  zh,
  en,
};

function isValidLocale(value: string | null): value is Locale {
  return value === "zh" || value === "en";
}

const listeners = new Set<() => void>();

function subscribeLocale(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getLocaleSnapshot(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isValidLocale(stored) ? stored : "zh";
}

function getLocaleServerSnapshot(): Locale {
  return "zh";
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getLocaleServerSnapshot);

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    listeners.forEach((fn) => fn());
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export { dictionaries };
