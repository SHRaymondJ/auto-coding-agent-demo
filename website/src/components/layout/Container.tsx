import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide";
}

export function Container({ children, className, width = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        width === "default" ? "max-w-[1200px]" : "max-w-[1440px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
