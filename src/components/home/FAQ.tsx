import React from "react";
import { FAQItem } from "../ui/FAQItem";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Do you only work with adults?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
      isOpen: true,
    },
    {
      question: "How flexible is your scheduling?",
      answer:
        "We offer flexible scheduling options including evenings and weekends to accommodate your busy schedule.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require 24 hours notice for cancellations. Late cancellations may be subject to a fee.",
    },
    {
      question: "How long is a typical therapy session?",
      answer:
        "Typical sessions last 45-60 minutes, depending on your specific needs and treatment plan.",
    },
    {
      question: "How do telehealth sessions work?",
      answer:
        "Telehealth sessions are conducted via secure video conferencing. You'll receive a link before your appointment to join the session.",
    },
    {
      question: "Is telehealth as effective as in-person therapy?",
      answer:
        "Research shows telehealth can be just as effective as in-person therapy for many voice and speech conditions.",
    },
  ];

  return (
    <section className="flex w-[1440px] max-w-full flex-col overflow-hidden items-center mt-40 py-24 max-md:mt-10">
      <div className="w-full max-w-screen-xl text-center px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="w-[768px] max-w-screen-md max-md:max-w-full">
            <h2 className="text-[rgba(24,29,39,1)] text-4xl font-medium leading-none tracking-[-0.72px] max-md:max-w-full">
              Frequently asked questions
            </h2>
            <p className="text-[#535862] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
              Find answers to common questions about our speech therapy services
              and approach to treatment
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl flex-col items-center mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-[768px] max-w-screen-md max-md:max-w-full">
          {faqItems.map((item, index) => (
            <FAQItem
              key={`faq-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={item.isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
