"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Reveal({
  children,
  className = "",
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  return (
    <ScrollReveal className={className} immediate={immediate}>
      {children}
    </ScrollReveal>
  );
}
