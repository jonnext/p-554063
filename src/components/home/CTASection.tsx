import React from "react";
import { Link } from "react-router-dom";

export const CTASection: React.FC = () => {
  return (
    <section className="flex min-h-[826px] w-full flex-col overflow-hidden items-center justify-center mt-40 py-[165px] max-md:max-w-full max-md:mt-10 max-md:py-[100px]">
      <div className="flex w-full max-w-screen-xl items-center gap-[40px_64px] justify-center flex-wrap px-8 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full font-normal max-md:max-w-full">
            <h2 className="text-[rgba(0,10,10,1)] text-[56px] leading-[60px] tracking-[-1.12px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
              Find your voice, rediscover your sound
            </h2>
            <p className="text-[#3F4545] text-xl mt-6 max-md:max-w-full">
              Schedule with Wellington's voice and airway specialist
            </p>
          </div>
          <div className="flex gap-3 text-base text-white font-bold mt-12 max-md:mt-10">
            <Link
              to="/book"
              className="justify-center items-center shadow-[0px_0px_0px_1px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border,rgba(10,13,18,0.18))_inset,0px_-2px_0px_0px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner,rgba(10,13,18,0.05))_inset,0px_1px_2px_0px_var(--Colors-Effects-Shadows-shadow-xs,rgba(10,13,18,0.05))] bg-[#004E50] flex gap-1.5 overflow-hidden px-[18px] py-3 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.12)] hover:bg-[rgba(0,68,70,1)] transition-colors"
            >
              <span className="self-stretch my-auto px-0.5">
                Book Consultation
              </span>
            </Link>
          </div>
        </div>
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="self-center flex w-[336px] max-w-full items-stretch gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/85bbcaa51f708130d81e962c965e0c791522d2ce?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-40 shrink-0 max-w-full mt-20 max-md:mt-10"
              alt="Therapist image 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/2024c59a1efdd0a8930a763f604d0defa97760e8?placeholderIfAbsent=true"
              className="aspect-[0.67] object-contain w-40 shrink-0 max-w-full"
              alt="Therapist image 2"
            />
          </div>
          <div className="mt-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[33%] max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/dbd04a35bf7b58cdc0e57e5e72ea28d88843ff41?placeholderIfAbsent=true"
                  className="aspect-[1.5] object-contain w-48 shrink-0 max-w-full max-md:mt-4"
                  alt="Therapy session image 1"
                />
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/eea5c963eebb8eb84fe7735ae63698d2af9b2aa3?placeholderIfAbsent=true"
                  className="aspect-[0.67] object-contain w-40 shrink-0 max-w-full grow max-md:mt-4"
                  alt="Therapy session image 2"
                />
              </div>
              <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/5b102c3d148ac833a6b2014c29b6267a802ae542?placeholderIfAbsent=true"
                  className="aspect-[1.5] object-contain w-48 shrink-0 max-w-full max-md:mt-4"
                  alt="Therapy session image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
