import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/f67a3888a6e2ff37645a3fb07532e836bc477300?placeholderIfAbsent=true",
      title: "Voice Disorder",
      description:
        "I can assess and manage a range of voice disorders, including muscle tension dysphonia, spasmodic dysphonia, functional or neurogenic voice disorders, vocal cord dysfunction.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/6ad5244abc61a076ca95b0d45ee0f13e15ef7686?placeholderIfAbsent=true",
      title: "Gender-affirming voice therapy",
      description:
        "I can assess and manage transgender voice. It is recommended that an assessment and at least five therapy sessions take place to help you reach your authentic voice.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/ad71b9f8c516277210b277ad1a83e76628ac87e3?placeholderIfAbsent=true",
      title: "Respiratory",
      description:
        "I can assess and manage upper airway disorders such as chronic refractory cough. I can clinically assess swallowing function to rule out any dysphagia.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/541d8146c064b2c4fd140504e16c2fb86baedafc?placeholderIfAbsent=true",
      title: "Swallowing",
      description:
        "Please note that I have no access to Instrumental Assessments (such as VFSS or FEES), although I am trained in these assessments.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/f3e206f1885293c34ace869c809de4ab9c3090ed?placeholderIfAbsent=true",
      title: "Latest Technology",
      description:
        "Use of current technology and apps in sessions to help you improve your voice and speech.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/d23321f00a48d39d8978348a27349631fd357632?placeholderIfAbsent=true",
      title: "Voice Disorder",
      description:
        "Client information will be kept confidential as per the New Zealand Privacy Act 2020.",
    },
  ];

  return (
    <section className="w-[1246px] max-w-full text-center mt-40 max-md:mt-10">
      <h2 className="text-[rgba(63,69,69,1)] text-5xl font-medium max-md:max-w-full max-md:text-[40px]">
        Our services
      </h2>
      <div className="w-full text-xl text-black mt-12 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-center gap-8 flex-wrap max-md:max-w-full">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={`service-${index}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="flex w-full items-center gap-8 flex-wrap mt-8 max-md:max-w-full">
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={`service-${index + 3}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
