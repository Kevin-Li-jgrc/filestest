import { ReactNode } from "react";
import { clsx } from "clsx";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GradientText({ children, className, animate }: GradientTextProps) {
  return (
    <span
      className={clsx(
        "gradient-text",
        animate && "animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}
