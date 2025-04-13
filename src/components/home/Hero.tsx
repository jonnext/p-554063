import React from "react";
import { FeatureItem } from "../ui/FeatureItem";

export const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center mt-10 py-24 max-md:max-w-full">
      <div className="w-full max-w-screen-xl font-normal text-center px-8 max-md:max-w-full max-md:px-5">
        <div className="flex w-full flex-col items-center max-md:max-w-full">
          <div className="flex w-[1024px] max-w-screen-lg flex-col items-stretch max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              <h1 className="text-[rgba(0,10,10,1)] text-[120px] leading-[115px] tracking-[-1.2px] max-md:max-w-full max-md:text-[40px] max-md:leading-[43px]">
                Your voice and sound matters.
              </h1>
              <p className="text-[rgba(63,69,69,1)] text-[32px] self-center w-[768px] mt-6 max-md:max-w-full">
                Wellington's specialist in voice, cough, and upper airway
                disorders in adults.
              </p>
            </div>
            <div className="self-center flex items-center gap-10 text-xl text-[#3F4545] flex-wrap mt-14 max-md:max-w-full max-md:mt-10">
              <FeatureItem icon="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/152e1d15854f0c3908b4aa1a8db03c0bfb4e72a8?placeholderIfAbsent=true" text="Flexible scheduling" />
              <FeatureItem icon="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/152e1d15854f0c3908b4aa1a8db03c0bfb4e72a8?placeholderIfAbsent=true" text="Hospital-trained specialist" />
              <FeatureItem icon="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/8d9277af3767036f03dee7bb86d0130c91921b21?placeholderIfAbsent=true" text="Modern telehealth options" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mt-20 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/0f42b31d5b395cfbac61eff50f581ddf4061fb12?placeholderIfAbsent=true"
          className="aspect-[3.04] object-contain w-full max-md:max-w-full"
          alt="Speech therapy session"
        />
      </div>
    </section>
  );
};
