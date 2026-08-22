import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

export type RevealVariant = "up" | "blur" | "clip" | "scale";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "",
  blur: "tmf-reveal-blur",
  clip: "tmf-reveal-clip",
  scale: "tmf-reveal-scale",
};

export default function Reveal({
  delay = 0,
  variant = "up",
  className = "",
  children,
}: {
  delay?: number;
  variant?: RevealVariant;
  className?: string;
  children: ReactNode;
}) {
  const [ref, revealed] = useReveal();
  return (
    <div
      ref={ref}
      className={`tmf-reveal ${VARIANT_CLASS[variant]} ${revealed ? "tmf-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
