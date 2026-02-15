import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

type LinkButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> &
  Omit<LinkProps, "href"> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "text-text-white bg-brand-blue border border-brand-blue hover:bg-[#0062cc] active:bg-[#0054ad] shadow-sm hover:shadow-md",
  secondary:
    "text-brand-blue bg-bg-white border border-brand-blue hover:bg-[#eff6ff] active:bg-[#dbeafe]",
  text: "text-brand-blue bg-transparent border border-transparent hover:bg-[#eff6ff] active:bg-[#dbeafe]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    prefixIcon,
    suffixIcon,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      {prefixIcon ? <span className="shrink-0">{prefixIcon}</span> : null}
      <span>{children}</span>
      {suffixIcon ? <span className="shrink-0">{suffixIcon}</span> : null}
    </>
  );

  if ("href" in rest) {
    return (
      <Link className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {content}
    </button>
  );
}
