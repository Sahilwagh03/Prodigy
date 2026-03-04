"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you provide revisions and updates?",
    answer:
      "We provide clear revisions during the project to ensure everything meets your expectations. Updates are handled smoothly to maintain quality and consistency.",
  },
  {
    question: "Is my project information confidential?",
    answer:
      "All project details are handled with strict confidentiality. We ensure your data, ideas and materials remain secure throughout the entire collaboration.",
  },
  {
    question: "Do you handle full brand identity projects?",
    answer:
      "Yes, we manage complete brand identity projects, including strategy, visual design and guidelines to ensure a consistent and unified brand presence.",
  },
  {
    question: "How do I get started with your team?",
    answer:
      "You can get started by contacting our team to discuss your goals. We’ll guide you through the process and outline the next steps clearly.",
  },
  {
    question: "What services do you offer clients?",
    answer:
      "We offer a full range of services including design, development and branding, tailored to meet your business goals and project needs.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion bg-white rounded-2xl overflow-hidden border border-gray-200">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;

        return (
          <div className="faq-item" key={index}>
            <div
              className={cn(
                "border-b border-gray-200 last:border-none transition-all duration-300",
              )}
            >
              {/* Entire Row Clickable */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-6 bg-white hover:bg-white"
              >
                <h3 className="text-lg sm:text-xl font-semibold">
                  {faq.question}
                </h3>

                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white">
                  {isActive ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              {/* Content */}
              <div
                className={clsx(
                  "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                  isActive ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
