"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FOCUS_RING } from "@/lib/a11y";

type FAQItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FAQItem[];
  dark?: boolean;
};

export default function Accordion({ items, dark = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-sm border ${
              dark ? "border-white/15" : "border-primary/10"
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 ${FOCUS_RING} ${
                  dark
                    ? "text-white hover:bg-white/5"
                    : "text-primary hover:bg-bg-custom"
                }`}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-medium">Q. {item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  } ${dark ? "text-white/70" : "text-primary/70"}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`border-t px-5 py-5 sm:px-6 ${
                dark
                  ? "border-white/15 bg-white/5 text-white/90"
                  : "border-primary/10 bg-bg-custom text-text-custom"
              }`}
            >
              <p className="leading-7">A. {item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
