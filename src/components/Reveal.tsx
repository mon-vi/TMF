import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

export default function Reveal({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const [ref, revealed] = useReveal();
  return (
    <div
      ref={ref}
      className={`tmf-reveal ${revealed ? "tmf-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
