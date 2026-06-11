"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#6366f1] text-white hover:bg-[#818cf8] shadow-lg shadow-[rgba(99,102,241,0.3)] transition-all duration-200",
  ghost:
    "text-[#f1f5f9] hover:bg-white/5 transition-colors duration-200",
  outline:
    "border border-[#1e1e2e] text-[#f1f5f9] hover:border-[#6366f1] hover:text-[#818cf8] transition-colors duration-200",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer select-none whitespace-nowrap",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
