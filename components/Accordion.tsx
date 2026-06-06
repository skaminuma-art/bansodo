"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-sm border ${
              dark ? "border-white/15" : "border-primary/10"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 ${
                dark
                  ? "text-white hover:bg-white/5"
                  : "text-primary hover:bg-bg-custom"
              }`}
              aria-expanded={isOpen}
            >
              <span className="font-medium">Q. {item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } ${dark ? "text-white/50" : "text-primary/50"}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                className={`border-t px-5 py-5 sm:px-6 ${
                  dark
                    ? "border-white/15 bg-white/5 text-white/90"
                    : "border-primary/10 bg-bg-custom text-text-custom"
                }`}
              >
                <p className="leading-7">A. {item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
