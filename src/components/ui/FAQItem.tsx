import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen = false,
}) => {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div
      className={`flex w-full flex-col items-stretch justify-center p-8 rounded-2xl max-md:max-w-full max-md:px-5 ${expanded ? "bg-neutral-50" : ""}`}
    >
      <div className="min-w-80 w-full max-md:max-w-full">
        <div className="flex w-full gap-6 flex-wrap max-md:max-w-full">
          <div className="w-6 pt-0.5">
            <img
              src={expanded ? "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/f6515c26a1831ed0729914909c61d1239439b8c3?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/9079c567df5374ed3e5a7e5212b27cd2e0f0a7a3?placeholderIfAbsent=true"}
              className="aspect-[1] object-contain w-6"
              alt={expanded ? "Collapse" : "Expand"}
              onClick={() => setExpanded(!expanded)}
              role="button"
              aria-expanded={expanded}
              aria-controls={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            />
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div
              className="text-[#181D27] text-lg font-medium leading-loose max-md:max-w-full cursor-pointer"
              onClick={() => setExpanded(!expanded)}
              role="button"
              aria-expanded={expanded}
            >
              {question}
            </div>
            {expanded && answer && (
              <div
                className="text-[#535862] text-base font-normal leading-6 mt-2 max-md:max-w-full"
                id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {answer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
