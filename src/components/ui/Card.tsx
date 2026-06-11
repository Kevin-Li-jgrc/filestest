import { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "card-glass rounded-2xl p-6 transition-all duration-300",
        hover && "cursor-default",
        className
      )}
    >
      {children}
    </div>
  );
}
