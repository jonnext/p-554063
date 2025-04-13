import React from "react";

export const TherapistFeature: React.FC = () => {
  return (
    <section className="bg-white w-[1440px] max-w-full overflow-hidden mt-40 rounded-[80px] max-md:mt-10">
      <div className="bg-[rgba(0,78,80,1)] flex w-full flex-col overflow-hidden items-center pt-24 pb-40 rounded-[80px] max-md:max-w-full max-md:pb-[100px]">
        <div className="flex w-full max-w-screen-xl gap-[40px_96px] flex-wrap px-8 max-md:max-w-full max-md:px-5">
          <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-[#88BEC0] text-base font-bold max-md:max-w-full">
                Meet your Therapist
              </div>
              <h2 className="text-white text-4xl font-medium leading-none tracking-[-0.72px] mt-3 max-md:max-w-full">
                Sacha Allnatt
              </h2>
            </div>
            <p className="text-[#D2ECED] text-xl font-normal leading-[30px] mt-5 max-md:max-w-full">
              Sacha is Located in central Wellington for in-person sessions, or
              via Tele-Health, home visits are available as appropriate.
              Flexible scheduling to suit your needs.
            </p>
            <button className="flex items-center gap-1.5 overflow-hidden text-base text-white font-bold justify-center mt-5 w-fit">
              <span className="self-stretch my-auto">Learn more</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/41e21fcac0ec232cafa0900aed6cc3607ebf740f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Arrow right"
              />
            </button>
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex min-w-60 w-full max-w-[560px] gap-4 flex-wrap max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/d9bb8001c3633a9e00aa086429f13063c281b4ee?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-12 shadow-[0px_0px_0px_1px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border,rgba(10,13,18,0.18))_inset,0px_-2px_0px_0px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner,rgba(10,13,18,0.05))_inset,0px_1px_2px_0px_var(--Colors-Effects-Shadows-shadow-xs,rgba(10,13,18,0.05))] shrink-0"
                alt="Experience icon"
              />
              <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="w-full pt-2.5 max-md:max-w-full">
                  <h3 className="text-white text-xl font-bold max-md:max-w-full">
                    13 Years Global clinical experience
                  </h3>
                  <p className="text-[#D2ECED] text-base font-normal leading-6 mt-2 max-md:max-w-full">
                    Experience working around the world in premier hospitals in
                    London, UK & Melbourne, Australia
                  </p>
                </div>
              </div>
            </div>
            <div className="flex min-w-60 w-full max-w-[560px] gap-4 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/14e96b60b4a9c9d3bf9a73492b4e51716b26e358?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-12 shadow-[0px_0px_0px_1px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border,rgba(10,13,18,0.18))_inset,0px_-2px_0px_0px_var(--Colors-Effects-Shadows-shadow-skeumorphic-inner,rgba(10,13,18,0.05))_inset,0px_1px_2px_0px_var(--Colors-Effects-Shadows-shadow-xs,rgba(10,13,18,0.05))] shrink-0"
                alt="Personality icon"
              />
              <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="w-full pt-2.5 max-md:max-w-full">
                  <h3 className="text-white text-xl font-bold max-md:max-w-full">
                    Cute and sexy
                  </h3>
                  <p className="text-[#D2ECED] text-base font-normal mt-2 max-md:max-w-full">
                    Approachable, cute and sexy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center text-xs text-white font-bold whitespace-nowrap pb-24 max-md:max-w-full">
        <div className="flex w-full max-w-screen-xl flex-col items-center px-8 max-md:max-w-full max-md:px-5">
          <div className="flex flex-col shadow-[0px_32px_64px_-12px_var(--Colors-Effects-Shadows-shadow-3xl\_01,rgba(10,13,18,0.14)),0px_5px_5px_-2.5px_var(--Colors-Effects-Shadows-shadow-3xl\_02,rgba(10,13,18,0.04))] overflow-hidden relative min-h-[450px] w-[800px] max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/c868af7aaed6a547ba69beae112a143557cd50f2?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Video thumbnail"
            />
            <div className="relative bg-[rgba(0,0,0,0.1)] border flex flex-col items-stretch pt-[185px] border-[rgba(0,0,0,0.1)] border-solid max-md:max-w-full max-md:pt-[100px]">
              <button
                className="aspect-[1] w-20 self-center backdrop-blur"
                aria-label="Play video"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/40b6b92b8deb10d032a1f376e9f4e62cd8b81346?placeholderIfAbsent=true"
                  className="w-full h-full"
                  alt="Play button"
                />
              </button>
              <div className="mt-[69px] pt-[70px] pb-2 px-3 max-md:max-w-full max-md:mt-10">
                <div className="w-full rounded-lg max-md:max-w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/2bb276921ecd0c219c3fa8b8895e1266b8f71861?placeholderIfAbsent=true"
                    className="aspect-[38.46] object-contain w-[776px] max-md:max-w-full"
                    alt="Video progress bar"
                  />
                  <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
                    <div>0:00</div>
                    <div>8:24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
