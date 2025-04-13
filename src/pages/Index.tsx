import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { TherapistFeature } from "@/components/home/TherapistFeature";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex w-full flex-col items-center pt-10 max-md:max-w-full">
        <div className="flex min-h-[1448px] w-[1440px] max-w-full flex-col items-stretch">
          <Header />
          <Hero />
        </div>
        <TrustedBy />
        <Services />
        <TherapistFeature />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
