import { type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackground = "white" | "light" | "dark" | "navy";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
  as?: ElementType;
  id?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-bg-white text-text-heading",
  light: "bg-bg-light text-text-heading",
  dark: "bg-bg-dark text-text-white",
  navy: "bg-bg-navy text-text-white",
};

export function Section({
  children,
  className,
  background = "white",
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component id={id} className={cn("py-20 md:py-24 lg:py-28", backgroundClasses[background], className)}>
      {children}
    </Component>
  );
}
