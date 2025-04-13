import React from "react";

export const TrustedBy: React.FC = () => {
  return (
    <section className="self-stretch flex w-full items-center gap-[40px_80px] justify-center flex-wrap mt-40 py-10 max-md:max-w-full max-md:mt-10">
      <h2 className="text-[rgba(0,10,10,1)] text-2xl font-normal text-center self-stretch my-auto">
        Trusted by
      </h2>
      <div className="self-stretch flex min-w-60 items-center gap-[40px_80px] my-auto max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/aa89cbdcd148bcf1a89769953db7d40331eee139?placeholderIfAbsent=true"
          className="aspect-[2.66] object-contain w-[170px] self-stretch shrink-0 my-auto"
          alt="Partner logo 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/af2a6f29cbb988fed7b9d8279e8901f1eb2897f6?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
          alt="Partner logo 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/54194ce2520ae8d5a4cd9751d1cdd2c276e96c2a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto"
          alt="Partner logo 3"
        />
      </div>
    </section>
  );
};
