import { ReactNode } from "react";
import { clsx } from "clsx";

type BadgeVariant = "default" | "accent" | "success" | "new";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-white/5 text-[#94a3b8] border border-white/10",
  accent: "bg-[#6366f1]/15 text-[#818cf8] border border-[#6366f1]/30",
  success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  new: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
